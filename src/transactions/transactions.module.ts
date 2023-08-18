import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Wallet } from 'src/wallets/entities/wallet.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports:[TypeOrmModule.forFeature([User, Wallet, Transaction])],
  exports:[TypeOrmModule]
})
export class TransactionsModule {}
