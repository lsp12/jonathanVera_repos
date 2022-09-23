import { Tribu } from 'src/tribu/entities/tribu.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'organization' })
export class Organizacion {
  @PrimaryGeneratedColumn({ name: 'id_organization' })
  id_organization: number;

  @Column('char', { length: 50, nullable: true })
  name: string;

  @Column('int', { nullable: false })
  status: number;

  @OneToMany(() => Tribu, (Tribu) => Tribu.organizacion)
  tribus: Tribu[];
}
