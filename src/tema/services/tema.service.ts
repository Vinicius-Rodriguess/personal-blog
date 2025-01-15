import { Injectable, NotFoundException } from '@nestjs/common';
import { Tema } from '../entities/tema.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}

  async findAll(): Promise<Tema[]> {
    return this.temaRepository.find();
  }

  async findById(id: number): Promise<Tema> {
    const tema = await this.temaRepository.findOne({ where: { id } });
    if (!tema) throw new NotFoundException('Tema não encontrado.');
    return tema;
  }

  async findByDescricao(desc: string): Promise<Tema[]> {
    return this.temaRepository.find({
      where: {
        descricao: ILike(`%${desc}%`),
      },
    });
  }

  async create(tema: Tema): Promise<Tema> {
    return await this.temaRepository.save(tema);
  }

  async update(tema: Tema): Promise<Tema> {
    await this.findById(tema.id);
    return await this.temaRepository.save(tema);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.temaRepository.delete(id);
  }
}
