import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WalletsService {

  constructor(
    @InjectRepository(Wallet)
    private walletRepository:Repository<Wallet>){}

  async create(createWalletDto: CreateWalletDto) {
      const result:Wallet = await this.walletRepository.save(createWalletDto);
      return new CreateWalletDto().assign(result);
  }

  findByUser(userId:number){
    return this.walletRepository.find({where: {user: {id : userId}}})
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
