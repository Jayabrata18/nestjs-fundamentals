import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import { Song } from './entity/song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSongDto } from './dto/update-song-dto';

@Controller('songs')
export class SongsController {
  constructor(
    private songService: SongsService,
    @Inject('CONNECTION') private connection: string = 'connection',
  ) {}
  @Get()
  findAll(): Promise<Song[]> {
    try {
      return this.songService.findAll();
    } catch (error) {
      // console.log("i am the catch block error", error)
      throw new HttpException(
        'server error: ',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<Song> {
    return this.songService.findOne(id); //string => number
  }
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return 'create song endpoint';
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSongDto: UpdateSongDto,
  ): Promise<UpdateResult> {
    return this.songService.update(id, updateSongDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.songService.remove(id);
  }
}
