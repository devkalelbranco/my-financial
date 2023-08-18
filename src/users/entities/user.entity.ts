import { IsEmail, IsNotEmpty } from "class-validator";
import { Wallet } from "src/wallets/entities/wallet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique: true, nullable: false})
    email:string;

    @Column({default: true, nullable: false})
    isActive:boolean;

    @OneToMany(() => Wallet, wallet => wallet.user)
    wallets:Wallet[];
}
