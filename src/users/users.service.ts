import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindUserDto } from './dto/find-user.dto';
import { _ } from 'lodash';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>){

  }

  create(createUserDto: CreateUserDto):CreateUserDto {
    const user = Object.assign(new User(), createUserDto);
    this.userRepository.save(user);
    return createUserDto;
  }

  async findAll():Promise<Array<FindUserDto>> { 
    const users = await this.userRepository.find();
    let usersReturn:Array<FindUserDto> = [];
    for (const item of users) {
      usersReturn.push(new FindUserDto().assign(item));
    }
    return usersReturn;
  }

  async findOne(id: number):Promise<FindUserDto> {
    let user:FindUserDto = new FindUserDto().assign(await this.userRepository.findOneBy({id: id}));
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
