import { BaseDto } from "src/commons/Base.dto";
import { FindUserDto } from "src/users/dto/find-user.dto";

export class CreateWalletDto extends BaseDto<CreateWalletDto> {
    description:string = null;
    user:FindUserDto
}
