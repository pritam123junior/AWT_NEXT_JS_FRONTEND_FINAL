import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { nurseEntity } from "./nurse.entity";
import { receptionistEntity } from "./receptionist.enity";
import { AdminEntity } from "./admin.entity";
@Entity('Doctor_Info')
export class DoctorEntity{
    @PrimaryGeneratedColumn()
    ID:number;

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
    @ManyToOne(() => AdminEntity,adminData => adminData.Doctor_Info)
    adminData: AdminEntity;
    @OneToOne(() =>nurseEntity ,nurseData => nurseData.Doctor_Info, { cascade: true })
    @JoinColumn()
    nurseData: nurseEntity[];
    @ManyToMany(() =>receptionistEntity ,recepitionist => recepitionist.Doctor_Info, { cascade: true })
    recepitionist:receptionistEntity[];
}