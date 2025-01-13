import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Postagem } from '../entitties/postagem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private readonly postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find();
  }
}
