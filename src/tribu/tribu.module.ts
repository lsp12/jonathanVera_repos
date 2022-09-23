import { Module } from '@nestjs/common';
import { TribuService } from './tribu.service';
import { TribuController } from './tribu.controller';
import { Tribu } from './entities/tribu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tribu])],
  controllers: [TribuController],
  providers: [TribuService],
})
export class TribuModule {}
