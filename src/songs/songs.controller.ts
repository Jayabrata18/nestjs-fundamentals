import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import { Song } from './entity/song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSongDto } from './dto/update-song-dto';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('songs')
export class SongsController {
  constructor(
    private songService: SongsService,
    @Inject('CONNECTION') private connection: string = 'connection',
  ) {}
  @Get()
  // findAll(): Promise<Song[]> {
  //   try {
  //     return this.songService.findAll();
  //   } catch (error) {
  //     // console.log("i am the catch block error", error)
  //     throw new HttpException(
  //       'server error: ',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //       { cause: error },
  //     );
  //   }
  // }
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<Song>> {
    limit = limit > 100 ? 100 : limit;
    return this.songService.paginate({ page, limit });
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
