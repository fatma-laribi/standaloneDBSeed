/* eslint-disable prettier/prettier */
import { Type } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lasttName:string;
    
    @Column()
    birthDate:Date;

    @Column()
    email:string;

    @Column()
    password:string;
}