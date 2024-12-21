import { AdminEntity } from "src/admin/admin.entity";
import { receptionistEntity } from "src/admin/receptionist.enity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DoctorEntity } from "./Doctor.entity";

@Entity("nurseData")
export class nurseEntity {
    @PrimaryGeneratedColumn()
    Id: number;

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
    @ManyToOne(() => AdminEntity,adminData => adminData.nurseData)
    adminData: AdminEntity;
    @OneToOne(() => receptionistEntity,recepitionist => recepitionist.nurseData)
    recepitionist: receptionistEntity;

    @ManyToMany(() => DoctorEntity,Doctor_Info => Doctor_Info.nurseData)
   @JoinColumn()
    Doctor_Info:DoctorEntity;
}