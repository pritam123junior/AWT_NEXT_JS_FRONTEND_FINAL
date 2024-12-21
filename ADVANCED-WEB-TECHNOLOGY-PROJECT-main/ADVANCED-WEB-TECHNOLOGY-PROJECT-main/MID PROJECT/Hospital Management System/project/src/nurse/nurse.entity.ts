import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NurseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    fullName: string;

    @Column({ unsigned: true })
    age: number;

    @Column({ default: 'active', enum: ['active', 'inactive'] })
    status: string;

}