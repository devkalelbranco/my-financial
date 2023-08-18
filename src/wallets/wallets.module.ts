import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Wallet } from './entities/wallet.entity';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService],
  imports:[TypeOrmModule.forFeature([User, Wallet])],
  exports:[TypeOrmModule]
})
export class WalletsModule {}
