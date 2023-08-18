import { IsCurrency, IsDateString, IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { BaseDto } from "src/commons/Base.dto";
import { Wallet } from "src/wallets/entities/wallet.entity";

export class FindTransactionDto extends BaseDto<FindTransactionDto>{

    id:string;
    description:string = null;
    value:number = null;
    creditDebit:boolean = null;
    date:Date = null;
    wallet:Wallet = null;

}
