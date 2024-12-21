import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminEntity, OTP_Entity, image_Enity } from "./admin.entity";
import { DoctorEntity } from "./Doctor.entity";
import { Repository } from "typeorm";
import { AdminDTO, CreateUserDto, UpdateUserDto } from "./admin.dto";

import * as bcrypt from 'bcrypt';
import { nurseEntity } from "./nurse.entity";

@Injectable()
export class AdminService {

   

    constructor(
    @InjectRepository(DoctorEntity) private userRepository: Repository<DoctorEntity>,
    @InjectRepository(image_Enity) private imageRpo: Repository<image_Enity>,
    @InjectRepository(nurseEntity) private nurseRpo: Repository<nurseEntity>,
    @InjectRepository(AdminEntity) private adminRepo: Repository<AdminEntity>,
  
  
    ){}
    async adminRegistration(data: AdminDTO): Promise<AdminEntity> {
      try {
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(data.password, salt);
  
        const result = await this.adminRepo.save({
          ...data,
          password: hashedPass,
        });
        return result;
      } catch (error) {
        throw new InternalServerErrorException(
          'User data is not saved in database',
          { cause: new Error(), description: error },
        );
      }
    }
  
    async signIn(data: { name: string; password: string }) {
      const userdata = await this.adminRepo.findOneBy({ name:data. name });
      if (!userdata) {
        return { isUserExist: false, message: 'User does not exist' };
      } else {
        const isValidPass: boolean = await bcrypt.compare(
          data.password,
          userdata.password,
        );
        if (isValidPass) {
          const { id, name, email, phone } = userdata;
          return {
            isUserExist: true,
            isValidPass,
            message:"SignIn Successful",
            data: { id, name, email, phone },
          };
        } else {
          return {
            isUserExist: true,
            isValidPass,
            message: 'Password is not correct',
          };
        }
      }
    }
  
  
    async getAdmin(email: string): Promise<AdminEntity | null> {
      const result = await this.adminRepo.findOneBy({ email });
      return result;
    }
    async addpic(data): Promise<image_Enity> {
      const user = this.imageRpo.create(data);
      return this.imageRpo.save(data);

    }
        async sendOTPResetPassword(email: string) {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const result = await this.adminRepo.findOneBy({ email });

    if (!result) {
      return { message: 'User does not exist', isUserExist: false };
    } else {
      const otpResult = await this.otpRepo.save({
        otp: otp.toString(),
        email,
        status: 0,
      });
      if (!otpResult) {
        return { message: 'OTP not saved', isUserExist: true, error: true };
      } else {
        //use sendMail to send email
        const sendResult = await this.mailerService.sendMail({
          from: `Event Management System <${process.env.MAIL_USER}>`, // sender address
          to: email,
          subject: 'OTP for reset password',
          text: `OTP code for reset your password: ${otp}`,
        });
        console.log(sendResult, 'sendResult');
        if (!sendResult) {
          return {
            message: 'OTP not sent',
            isUserExist: true,
            mailSended: false,
            error: true,
          };
        } else {
          return {
            message: 'OTP sent',
            isUserExist: true,
            mailSended: true,
          };
        }
      }
    }
  }

  async verifyOTPResetPassword(data: { email: string; otp: string }) {
    const otpResult = await this.otpRepo.findOneBy({
      email: data.email,
      otp: data.otp,
      status: 0,
    });
    if (!otpResult) {
      return { message: 'OTP not matched', isOTPMatched: false };
    } else {
      const updatedOtp = await this.otpRepo.update(
        { id: otpResult.id },
        { status: 1 },
      );
      if (!updatedOtp) {
        return { message: 'OTP not updated', isOTPMatched: false };
      }
      return { message: 'OTP matched', isOTPMatched: true };
    }
  }

  async resetPassword(data: { email: string; password: string; otp: string }) {
    const otpResult = await this.otpRepo.findOneBy({
      email: data.email,
      otp: data.otp,
      status: 1,
    });
    if (!otpResult) {
      return {
        message: 'OTP not matched',
        isOTPMatched: false,
        isPasswordUpdated: false,
      };
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPass = await bcrypt.hash(data.password, salt);
      const updatedPass = await this.adminRepo.update(
        { email: data.email },
        { password: hashedPass },
      );
      if (!updatedPass) {
        return {
          message: 'Password not updated',
          isPasswordUpdated: false,
          isOTPMatched: true,
        };
      } else {
        return {
          message: 'Password updated',
          isPasswordUpdated: true,
          isOTPMatched: true,
        };
      }
    }
  }

  
    async updateProfile(data: AdminDTO, email: string) {
      console.log(data, 'email');
      const result = await this.adminRepo.update({ email }, data);
     console.log(result, 'result');
      if (!result) {
        return { message: 'Profile not updated', isProfileUpdated: false };
      } else {
        return { message: 'Profile updated', isProfileUpdated: true };
      } }
    async createUser(createUserDto: CreateUserDto): Promise<DoctorEntity> {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
      
    }

  async updateUser(updateUserDto: UpdateUserDto): Promise<DoctorEntity> {
        const { ID,  Schedule,Salary } = updateUserDto;
        const user = await this.userRepository.findOne({ where: { ID: ID } });
        if (!user) {
            throw new NotFoundException(`User with ID ${ID} not found`);
        }

        user.Schedule = Schedule;
        user.salary=Salary;
        return this.userRepository.save(user);
    }



        

 

    async getAllUsers(): Promise<DoctorEntity[]> {
        return this.userRepository.find({ relations: ['nurseData'] });
    }
    async deleteUser(userId: number): Promise<void> {
        await this.userRepository.delete(userId);
    }  
  
    async searchByname(fullName: string): Promise<DoctorEntity[]> {
        return this.userRepository.find({ where: { fullName } });
    }
    async getpic(): Promise<image_Enity[]> {
        return this.imageRpo.find();
    }
    async addUser(createUserDto: CreateUserDto): Promise<nurseEntity> {
      const user = this.nurseRpo.create(createUserDto);
      return this.nurseRpo.save(user);
    
  }

async updateNurseinfo(updateUserDto: UpdateUserDto): Promise<nurseEntity> {
      const { ID,  Schedule,Salary } = updateUserDto;
      const user = await this.nurseRpo.findOne({ where: {Id: ID } });
      if (!user) {
          throw new NotFoundException(`User with ID ${ID} not found`);
      }

      user.Schedule = Schedule;
      user.salary=Salary;
      return this.nurseRpo.save(user);
  }



      



  async deletenurseinfo(userId: number): Promise<void> {
      await this.nurseRpo.delete(userId);
  }  


}
