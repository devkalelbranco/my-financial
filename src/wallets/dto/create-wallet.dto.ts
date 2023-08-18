import { IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { BaseDto } from "src/commons/Base.dto";
import { FindUserDto } from "src/users/dto/find-user.dto";

export class CreateWalletDto extends BaseDto<CreateWalletDto> {
    
    @IsNotEmpty()
    description:string = null;

    @IsNotEmptyObject()
    user:FindUserDto
}
