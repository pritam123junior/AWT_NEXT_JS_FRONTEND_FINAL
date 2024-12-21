import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsPhoneNumber, IsString, Length, Matches } from "class-validator";

/*export class NurseDTO{
   
      @IsString()
      @IsNotEmpty()
      @Matches(/.{4,}/, { message: 'Name should be at least 4 characters long' })
      name: string;
    
      @IsEmail()
      @IsNotEmpty()
      @Matches(/.*@aiub.edu$/, { message: 'Email must be from aiub.edu domain' })
      email: string;
    
      @IsNotEmpty()
      @Matches(/^(?=.*[A-Z]).{6,}$/, { message: 'Password must be at least 6 characters long and contain one uppercase character' })
      password: string;
    
      @IsEnum(['male', 'female'], { message: 'Gender must be either "male" or "female"' })
      gender: string;
    
      
    
      @IsPhoneNumber('BD')
      phoneNumber: number;
    }*/

    export class CreateUserDto {
      fullName: string;
      age: number;
    }
    
    export class UpdateUserStatusDto {
      userId: number;
      newStatus: 'active' | 'inactive';
    }
    