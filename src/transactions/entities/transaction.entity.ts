import { type } from "os";
import { Wallet } from "src/wallets/entities/wallet.entity";
import { Column, CreateDateColumn, Decimal128, Entity, Generated, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transaction {

    @PrimaryColumn({type: 'uuid'})
    @Generated('uuid')
    id:string;

    @Column()
    description:string;

    @Column({type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false})
    value:number;

    @Column({nullable: false})
    creditDebit:boolean;

    @Column()
    date:Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @ManyToOne(() => Wallet, (wallet) => wallet.transactions, {nullable: false})
    wallet:Wallet;

}
