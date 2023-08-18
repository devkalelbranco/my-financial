import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, QueryFailedError, Repository } from 'typeorm';
import { FindUserDto } from './dto/find-user.dto';
import { _ } from 'lodash';
import { validate } from 'class-validator';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>){

  }

  async create(createUserDto: CreateUserDto):Promise<CreateUserDto> {
    const user = Object.assign(new CreateUserDto(), createUserDto);
    const errors = await validate(user);
    if(errors.length > 0){
      throw new Error(Object.values(errors[0].constraints)[0])
    } 
    
    try {
      await this.userRepository.save(user);
    } catch (error) {
      if(error instanceof QueryFailedError){
        throw new Error('Erro de banco de dados ' + error.message)
      }
      throw new Error('Erro interno');
    }
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

  async remove(id: number):Promise<boolean> {
    try {
      const result:DeleteResult = await this.userRepository.delete(id);
      return (result.affected > 0);
    } catch (error) {
      throw new Error(error);
    }
  }
}
