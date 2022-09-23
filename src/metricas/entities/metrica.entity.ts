import { Repositorio } from 'src/repositorios/entities/repositorio.entity';
import {
  Entity,
  PrimaryColumn,
  Column,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'metrics' })
export class Metrica {
  @PrimaryGeneratedColumn()
  id_metrics: number;

  @Column({ nullable: false })
  coverage: number;

  @Column('int', { nullable: false })
  bugs: number;

  @Column('int', { nullable: false })
  vulnerabilities: number;

  @Column('int', { nullable: false })
  hotsport: number;

  @Column('int', { nullable: false })
  code_smells: number;

  @OneToOne(() => Repositorio, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_repository' })
  repository: Repositorio;
}
