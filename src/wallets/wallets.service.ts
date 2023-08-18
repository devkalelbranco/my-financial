import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
import { FindWalletDto } from './dto/find-wallet.dto';

@Injectable()
export class WalletsService {

  constructor(
    @InjectRepository(Wallet)
    private walletRepository:Repository<Wallet>){}

  async create(createWalletDto: CreateWalletDto) {
      try {
        const errors = await validate(new CreateWalletDto().assign(createWalletDto));
        if(errors.length > 0) throw new Error(Object.values(errors[0].constraints)[0]);

        const result:Wallet = await this.walletRepository.save(createWalletDto);
        return new CreateWalletDto().assign(result);
      } catch (error) {
        throw new Error(error.message);
      }
  }

  async findByUser(userId:number){
    let wallets:Wallet[] = await this.walletRepository.find({where: {user: {id : userId}}, relations:{user: true, transactions: true}})
    return wallets.map(item => new FindWalletDto().assign(item))
  }

  findAll() {
    return `This action returns all wallets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wallet`;
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
