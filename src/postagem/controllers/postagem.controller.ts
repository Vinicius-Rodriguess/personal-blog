import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../entitties/postagem.entity';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }
}
