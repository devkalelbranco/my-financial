import { IsEmail, IsNotEmpty } from "class-validator";
import { Wallet } from "src/wallets/entities/wallet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @IsNotEmpty()
    name:string;

    @Column({unique: true})
    @IsEmail()
    email:string;

    @Column({default: true})
    isActive:boolean;

    @OneToMany(() => Wallet, wallet => wallet.user)
    wallets:Wallet[];
}
