import { BaseDto } from "src/commons/Base.dto";

export class FindUserDto extends BaseDto<FindUserDto>{
    id:number = null;
    name:string = '';
}