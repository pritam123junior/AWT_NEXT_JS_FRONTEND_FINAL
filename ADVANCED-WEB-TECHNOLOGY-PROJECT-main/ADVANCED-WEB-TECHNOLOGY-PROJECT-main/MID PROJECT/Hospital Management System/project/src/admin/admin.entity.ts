import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { receptionistEntity } from "./receptionist.enity";
import { DoctorEntity } from "./Doctor.entity";
import { nurseEntity } from "./nurse.entity";


@Entity('adminData')
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    @Unique(['email'])
    email: string;
  
    @Column()
    password: string;
  
  
    @Column()
    phone: string;
  
    @Column()
    address: string;
    @OneToMany(() => receptionistEntity,recepitionist => recepitionist.adminData)
    recepitionist: receptionistEntity;
    
    @OneToMany(() => DoctorEntity,Doctor_Info => Doctor_Info.adminData)
    Doctor_Info:DoctorEntity;
    @OneToMany(() => nurseEntity ,nurseData => nurseData.adminData, { cascade: true })
    nurseData: nurseEntity[];

   }
  @Entity('imageData')
  export class image_Enity{
   @PrimaryColumn()
   id:number;
    @Column()
   Image:string;

  }
  
  @Entity('OTP')
  export class OTP_Entity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    otp: string;
  
    @Column()
    email: string;
  
    @Column()
    status: number;
  }
