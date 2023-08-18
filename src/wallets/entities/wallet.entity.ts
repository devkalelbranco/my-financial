import { IsNotEmptyObject } from "class-validator";
import { Transaction } from "src/transactions/entities/transaction.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wallet {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

    @ManyToOne(() => User, (user) => user.wallets,{nullable: false})
    user:User;

    @OneToMany(() => Transaction, (transaction) => transaction.wallet, {nullable: false})
    transactions:Transaction[];

}
