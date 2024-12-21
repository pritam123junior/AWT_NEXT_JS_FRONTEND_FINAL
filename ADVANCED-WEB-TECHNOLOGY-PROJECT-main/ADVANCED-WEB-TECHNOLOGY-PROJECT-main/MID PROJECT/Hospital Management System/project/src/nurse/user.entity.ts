import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
 
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ length: 100, unique: true })
  username: string;
 
  @Column({ length: 150, nullable: true })
  fullName: string;
 
  @Column({ default: false })
  isActive: boolean;
 
  @BeforeInsert()
  generateId() {
    // Custom logic for generating id before insertion
    // This can be a UUID generator or any other logic
  }
}