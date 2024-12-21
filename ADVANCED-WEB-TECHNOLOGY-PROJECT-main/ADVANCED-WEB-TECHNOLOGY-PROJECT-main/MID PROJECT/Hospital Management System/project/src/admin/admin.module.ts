import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { AdminEntity,  OTP_Entity,image_Enity } from "./admin.entity";
import { DoctorEntity } from "./Doctor.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { receptionistEntity } from "src/admin/receptionist.enity";
import { nurseEntity } from "src/admin/nurse.entity";

import { MailerModule } from "@nestjs-modules/mailer";


@Module({
    imports: [  ConfigModule.forRoot(),
        MailerModule.forRoot({
          transport: {
            host: 'smtp.gmail.com',
            port: 465,
            // ignoreTLS: true,
            secure: true,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.MAIL_PASS,
            },
            tls: { rejectUnauthorized: false },
          },
        }),
      TypeOrmModule.forFeature([ DoctorEntity,nurseEntity,receptionistEntity,AdminEntity,image_Enity,OTP_Entity]),],
controllers: [AdminController],
providers:[AdminService],
})
export class AdminModule{}
