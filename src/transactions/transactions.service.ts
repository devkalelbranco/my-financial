import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { validate } from 'class-validator';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { FindTransactionDto } from './dto/find-transaction.dto';

@Injectable()
export class TransactionsService {

  constructor(@InjectRepository(Transaction)
    private transactionRepository:Repository<Transaction>){}

  async create(createTransactionDto: CreateTransactionDto) {
    try {
      const errors = await validate(new CreateTransactionDto().assign(createTransactionDto));
      if(errors.length > 0) if(errors.length > 0) throw new Error(Object.values(errors[0].constraints)[0]);

      return new CreateTransactionDto().assign(await this.transactionRepository.save(createTransactionDto));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findByWallet(walletId:number){
    let transactions:Transaction[] = await this.transactionRepository.findBy({wallet: {id: walletId}});
    transactions.map((item) => new FindTransactionDto().assign(item));
    return transactions;
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
