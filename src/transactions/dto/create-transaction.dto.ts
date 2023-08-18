import { IsCurrency, IsDateString, IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { BaseDto } from "src/commons/Base.dto";
import { Wallet } from "src/wallets/entities/wallet.entity";

export class CreateTransactionDto extends BaseDto<CreateTransactionDto>{

    @IsNotEmpty()
    description:string = null;

    @IsCurrency()
    value:number = null;

    @IsNotEmpty()
    creditDebit:boolean = null;

    @IsNotEmpty()
    @IsDateString()
    date:Date = null;

    @IsNotEmptyObject()
    wallet:Wallet = null;

}
