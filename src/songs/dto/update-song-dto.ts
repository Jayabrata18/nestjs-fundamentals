import { IsArray, IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateSongDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  readonly artists: string[];

  @IsString()
  @IsOptional()
  readonly album: string;

  @IsString()
  @IsOptional()
  readonly genre: string;

  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  readonly lyric: string[];

  @IsDateString()
  @IsOptional()
  readonly duration: Date;

  @IsDateString()
  @IsOptional()
  readonly releaseDate: Date;

  @IsDateString()
  @IsOptional()
  readonly createdAt: Date;

  @IsDateString()
  @IsOptional()
  readonly updatedAt: Date;
}
