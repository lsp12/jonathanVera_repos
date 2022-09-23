import { Organizacion } from 'src/organizacion/entities/organizacion.entity';
import { Repositorio } from 'src/repositorios/entities/repositorio.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'tribe' })
export class Tribu {
  @PrimaryGeneratedColumn({ name: 'id_tribe' })
  id_tribe: number;

  @Column('char', { length: 50, nullable: false })
  name: string;

  @Column('int', { nullable: false })
  status: number;

  @ManyToOne(() => Organizacion, (Organizacion) => Organizacion.tribus, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_organization' })
  organizacion: Organizacion;

  @OneToMany(() => Repositorio, (Repositorio) => Repositorio.tribu)
  repositorios: Repositorio[];
}
