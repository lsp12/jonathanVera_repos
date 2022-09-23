import { Module } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';
import { RepositoriosController } from './repositorios.controller';
import { Repositorio } from './entities/repositorio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Repositorio])],
  controllers: [RepositoriosController],
  providers: [RepositoriosService],
})
export class RepositoriosModule {}
