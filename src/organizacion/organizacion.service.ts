import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';
import { Organizacion } from './entities/organizacion.entity';

@Injectable()
export class OrganizacionService {
  constructor(
    @InjectRepository(Organizacion)
    private organizacionRepository: Repository<Organizacion>,
  ) {}

  async create(createOrganizacionDto: CreateOrganizacionDto) {
    const organizacion = this.organizacionRepository.create(
      createOrganizacionDto,
    );

    console.log(organizacion.name.length, 'a');

    const save = await this.organizacionRepository.save({
      ...organizacion,
      name: organizacion.name.trim(),
    });
    return save;
  }

  async findAll() {
    const organizations = await this.organizacionRepository.find();
    return organizations;
  }

  async update(id: number, updateOrganizacionDto: UpdateOrganizacionDto) {
    const organization = this.organizacionRepository.create(
      updateOrganizacionDto,
    );

    const update = await this.organizacionRepository.update(id, organization);
    return `#${update.affected} affected spine`;
  }

  async remove(id: number) {
    const exist = await this.organizacionRepository.findOneBy({
      id_organization: id,
    });

    if (!exist) {
      throw new HttpException('no exist', HttpStatus.NOT_FOUND);
    }

    await this.organizacionRepository.delete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.PRECONDITION_FAILED);
    });

    return new HttpException('Delete', HttpStatus.OK);
  }
}
