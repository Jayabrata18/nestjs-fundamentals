import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './entity/song.entity';
import { CreateSongDto } from './dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSongDto } from './dto/update-song-dto';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}
  private readonly songs = [];
  async create(songDTO: CreateSongDto): Promise<Song> {
    const song = new Song();
    song.title = songDTO.title;
    song.artists = songDTO.artists;
    song.duration = songDTO.duration;
    song.lyric = songDTO.lyric;
    return this.songRepository.save(song);
  }
  findAll(): Promise<Song[]> {
    return this.songRepository.find();
  }

  findOne(id: number): Promise<Song> {
    return this.songRepository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.songRepository.delete(id);
  }
  update(id: number, recordToUpdate: UpdateSongDto): Promise<UpdateResult> {
    return this.songRepository.update(id, recordToUpdate);
  }

  async paginate(options: IPaginationOptions):Promise<Pagination<Song>>{
    return paginate<Song>(this.songRepository, options)
  }
}
