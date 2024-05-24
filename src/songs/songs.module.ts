import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { title } from 'process';
import { connection } from 'src/common/constants/connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entity/song.entity';

const mockSongsService = {
  findAll() {
    return [{ id: 1, title: 'Lasting lover' }];
  },
};
@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongsController],
  providers: [SongsService, { provide: 'CONNECTION', useValue: connection }],
})
export class SongsModule {}
