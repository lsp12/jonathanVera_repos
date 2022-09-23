import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizacionModule } from './organizacion/organizacion.module';
import { TribuModule } from './tribu/tribu.module';
import { RepositoriosModule } from './repositorios/repositorios.module';
import { MetricasModule } from './metricas/metricas.module';
import { Organizacion } from './organizacion/entities/organizacion.entity';
import { Tribu } from './tribu/entities/tribu.entity';
import { Repositorio } from './repositorios/entities/repositorio.entity';
import { Metrica } from './metricas/entities/metrica.entity';
import { MockModule } from './mock/mock.module';

const DATABASE_URL =
  'postgresql://jonathan:PTqpY8iYUQyGjxHs7l4RHw@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/nttData?sslmode=verify-full&options=--cluster%3Dlost-mare-5139';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      url: DATABASE_URL.toString(),
      ssl: true,
      extra: {
        options: '--cluster=lost-mare-5139',
      },
      synchronize: true,
      logging: true,
      entities: [Organizacion, Tribu, Repositorio, Metrica],
    }),
    OrganizacionModule,
    TribuModule,
    RepositoriosModule,
    MetricasModule,
    MockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
