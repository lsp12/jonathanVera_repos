import { Module } from '@nestjs/common';
import { OrganizacionService } from './organizacion.service';
import { OrganizacionController } from './organizacion.controller';
import { Organizacion } from './entities/organizacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacion])],
  controllers: [OrganizacionController],
  providers: [OrganizacionService],
})
export class OrganizacionModule {}
