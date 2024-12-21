import { Module } from "@nestjs/common";
import { NurseController } from "./nurse.controller";
import { NurseService } from "./nurse.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NurseEntity } from "./nurse.entity";



@Module({
    imports: [TypeOrmModule.forFeature([NurseEntity]),],
    controllers: [NurseController],
    providers: [NurseService],
  })
  export class NurseModule {}
  