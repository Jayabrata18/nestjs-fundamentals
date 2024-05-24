import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Get()
  findAll() {
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
  findOne(@Param('id', ParseIntPipe) id: number,) {
    return `find one song endpoint based on id ${typeof id}`; //string => number
  }
  @Post()
  create(@Body() CreateSongDto: CreateSongDto) {
    return 'create song endpoint';
  }

  @Put(':id')
  update() {
    return 'update song endpoint';
  }

  @Delete(':id')
  remove() {
    return 'delete song endpoint';
  }
}
