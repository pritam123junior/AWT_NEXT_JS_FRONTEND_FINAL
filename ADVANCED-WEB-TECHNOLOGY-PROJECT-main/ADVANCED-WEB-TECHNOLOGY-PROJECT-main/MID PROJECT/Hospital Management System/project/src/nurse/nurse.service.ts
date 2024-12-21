import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto, UpdateUserStatusDto } from "./nurse.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { NurseEntity } from "./nurse.entity";
import { MoreThan, Repository, getRepository } from "typeorm";

@Injectable()

export class NurseService {

    gettests(): object {
        return { message: "test -good" }
    }
    gettestsById(id: string): object {
        return { message: "You test id is " + id };
    }
    gettestsByNameAndId(name: string, id: string): object {
        return {
            message: "test name is " + name +
                " and test id is " + id
        };

    }
    add(name: string): object {
        return { message: "test is " + name };
    }
    create(name: string): object {
        return { message: "test is create" + name };
    }
    update(name: string): object {
        return { message: "test is update " + name };

    }
    delete(name: string): object {
        return { message: "test delete " + name };

    }

    constructor(@InjectRepository(NurseEntity) private userRepository: Repository<NurseEntity>) { }
    async createUser(createUserDto: CreateUserDto): Promise<NurseEntity> {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }

    async updateUserStatus(updateUserStatusDto: UpdateUserStatusDto): Promise<NurseEntity> {
        const { userId, newStatus } = updateUserStatusDto;
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }
        user.status = newStatus;
        return this.userRepository.save(user);
    }


    async getInactiveUsers(): Promise<NurseEntity[]> {
        return this.userRepository.find({ where: { status: 'inactive' } });
    }

    async getUsersOlderThan40(): Promise<NurseEntity[]> {
        return this.userRepository.createQueryBuilder('user')
            .where('user.age > :age', { age: 40 })
            .getMany();
    }

    async getAllUsers(): Promise<NurseEntity[]> {
        return this.userRepository.find();
    }

}

