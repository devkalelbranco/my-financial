import { IsNotEmptyObject } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wallet {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

    @ManyToOne(() => User, (user) => user.wallets,{nullable: false})
    @IsNotEmptyObject()
    user:User;

}
