import { Module } from '@nestjs/common';
import { Postagem } from './entities/postagem.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from './controllers/postagem.controller';
import { PostagemService } from './services/postagem.service';
import { TemaModule } from '../tema/tema.module';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  controllers: [PostagemController],
  providers: [PostagemService],
  exports: [TypeOrmModule],
})
export class PostagemModule {}
