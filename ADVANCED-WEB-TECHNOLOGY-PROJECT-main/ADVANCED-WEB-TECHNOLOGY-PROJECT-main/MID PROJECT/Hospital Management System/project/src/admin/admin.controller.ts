import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Put, Query, Res, Session, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDTO, CreateUserDto, UpdateUserDto, imageDTO } from "./admin.dto";
import { AdminEntity, image_Enity } from "./admin.entity";
import { User } from "src/nurse/user.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
import { extname } from "path";
import { SessionGuard } from "./session.guard";




@Controller('/admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }
    
   
      @Post('/register')
     
      @UsePipes(new ValidationPipe())
      async adminRegistration(

        @Body() data: AdminDTO,
      ): Promise<AdminEntity> {
       
        return this.adminService.adminRegistration(data);
      }
    
      @Post('/signin')
      async signIn(
        @Body() data: { name: string; password: string },
        @Session() session: { name: string; destroy: () => void },
        ) {
          const result = await this.adminService.signIn(data);
          if (!result.isUserExist && !result.isValidPass) {
            throw new HttpException(result, 400);
          } else if (result.isValidPass) {
            session.name = data.name;
            return result;
          } else {
            throw new HttpException(result, 401);
          }
          // return this.adminService.signIn(data);
        }
    
      @Get('/signout')
      signout(@Session() session: { email: string; destroy: () => void }) {
        session.destroy();
    
        return { message: 'Signout successfully' };
      }
    
      @Get('/getadmin')
    
      getAdmin(@Session() session: { email: string }) {
        return this.adminService.getAdmin(session.email);
      }
  
    
      @Get('/getResetPassOtp/:email')
  async getResetPassOtp(@Param() data: { email: string }) {
    const result = await this.adminService.sendOTPResetPassword(data.email);
    if (result.isUserExist) {
      if (result.error) {
        throw new HttpException(result, 500);
      } else {
        return result;
      }
    } else {
      throw new HttpException(result, 400);
    }
  }

  @Post('/verifyOtp')
  async verifyOtp(@Body() data: { email: string; otp: string }) {
    const result = await this.adminService.verifyOTPResetPassword(data);
    if (!result.isOTPMatched) {
      throw new HttpException(result, 400);
    } else {
      return result;
    }
  }

  @Post('/resetPassword')
  async resetPassword(
    @Body() data: { email: string; password: string; otp: string },
  ) {
    const result = await this.adminService.resetPassword(data);
    if (!result.isOTPMatched) {
      throw new HttpException(result, 400);
    } else {
      if (result.isPasswordUpdated) {
        return result;
      } else {
        throw new HttpException(result, 500);
      }
    }
  }
    
      @Patch('/updateProfile')
     
      async updateProfile(
        @Body() data: AdminDTO,
        @Session() session ,
      ) {
        const result = await this.adminService.updateProfile(data, session.email);
        if (result.isProfileUpdated) {
          return result;
        } else {
          throw new HttpException(result, 500);
        }
      }
      @Post('uploadProfilePic')
      @UseInterceptors(FileInterceptor('file',
          {
              fileFilter: (req, file, cb) => {
                  if (file.originalname.match(/^.*\.(jpg)$/))
                      cb(null, true);
                  else {
                      cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                  }
              },
              limits: { fileSize: 30000000},
              storage: diskStorage({
                  destination: './uploads',
                  filename: function (req, file, cb) {
                      cb(null, Date.now() + file.originalname)
                  },
              })
          }))
      uploadFile(@UploadedFile() file: Express.Multer.File,@Res() res) {
          console.log(file);
          if(file){
              return res.status(200).send('file with extension has been uploaded');
          }else{
              return res.status(400).send('Invalid file')
          }
        }  @UsePipes(new ValidationPipe())
        async UploadPic(
          @UploadedFile() avatar: Express.Multer.File,
          @Body() data: imageDTO,
        ): Promise<image_Enity> {
          console.log(avatar);
          data.Image = avatar.filename;
          return this.adminService.addpic(data);
        }
    
    
                 @Post('/add_Doctor')
      async createUser(@Body() createUserDto: CreateUserDto) {
        return this.adminService.createUser(createUserDto);
      }
 
      @Patch('/:id')
      async updateUser(@Body() Data: UpdateUserDto) {
        return this.adminService.updateUser (Data);
      }


      
      @Delete(':id')
      async deleteUser(@Param('id') id: number) {
          await this.adminService.deleteUser(id);
          return { message: 'User deleted successfully.' };
      }
  
      @Post('/add_Nurse')
      async addUser(@Body() createUserDto: CreateUserDto) {
        return this.adminService.createUser(createUserDto);
      }
 
      @Patch('/nurse/:id')
      async updateNurseinfo(@Body() Data: UpdateUserDto) {
        return this.adminService.updateNurseinfo (Data);
      }

   
      
      @Delete('/nurse/:id')
      async deletenurseinfo(@Param('id') id: number) {
          await this.adminService.deleteUser(id);
          return { message: 'User deleted successfully.' };
      }
      @Get('/list')
      async getAllUsers() {
        return this.adminService.getAllUsers();
      }
      
      @Get('/search/:name')
      searchByname(@Param('name') name: string) {
          return this.adminService.searchByname(name);
      }
  }


