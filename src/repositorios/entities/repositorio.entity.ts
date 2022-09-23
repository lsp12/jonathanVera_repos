import { Metrica } from 'src/metricas/entities/metrica.entity';
import { Tribu } from 'src/tribu/entities/tribu.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'repository' })
export class Repositorio {
  @PrimaryGeneratedColumn({ name: 'id_repository' })
  id_repository: number;

  @Column('char', { length: 50, nullable: false })
  name: string;

  @Column('char', { length: 1, nullable: false })
  state: string;

  @Column('char', { length: 1, nullable: false })
  status: string;

  @Column('timestamp', { nullable: false })
  create_time: string;

  @ManyToOne(() => Tribu, (Tribu) => Tribu.repositorios, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_tribe' })
  tribu: Tribu;

  @OneToOne(() => Metrica, (Metrica) => Metrica.repository)
  metrica: Metrica;
}
