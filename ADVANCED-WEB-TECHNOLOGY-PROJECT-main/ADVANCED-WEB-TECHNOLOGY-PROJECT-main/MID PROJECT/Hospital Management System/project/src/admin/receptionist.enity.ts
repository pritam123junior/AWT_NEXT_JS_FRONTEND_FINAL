
import { nurseEntity } from "src/admin/nurse.entity";
import {  BeforeInsert, Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DoctorEntity } from "./Doctor.entity";
import { AdminEntity } from "./admin.entity";


@Entity("recepitionist")
export class receptionistEntity{

    @PrimaryGeneratedColumn() 
    Id: string;
  
    @Column({ length: 100 })
    fullName: string;
    @Column({ length: 256 })
    Qualification:string;
    @Column({ unsigned: true })
    salary: number;
    @Column({ length: 124 })
    Email: string;
    @Column({length:130})
    PhoneNumber:string
    @Column({unsigned:true})
    Schedule:string;

    @ManyToOne(() =>AdminEntity,adminData => adminData.recepitionist)
    adminData: AdminEntity;
    @ManyToMany(() => nurseEntity ,nurseData => nurseData.recepitionist, { cascade: true })
    nurseData: nurseEntity[];
    @ManyToMany(() => DoctorEntity,Doctor_Info => Doctor_Info.recepitionist)
    Doctor_Info:DoctorEntity;
}