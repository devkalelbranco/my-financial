import { BaseDto } from "src/commons/Base.dto";
import { Transaction } from "src/transactions/entities/transaction.entity";
import { User } from "src/users/entities/user.entity";

export class FindWalletDto extends BaseDto<FindWalletDto>{

    id:number = null;
    description:string = null;
    user:User = null;
    transactions:Transaction[] = [];

}