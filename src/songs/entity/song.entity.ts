import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('varchar', { array: true })
  artists: string[];

  @Column()
  album: string;

  @Column()
  genre: string;

  @Column('varchar', { array: true })
  lyric: string[];

  @Column('time')
  duration: Date;

  @Column('date')
  releaseDate: Date;

  @Column('date')
  createdAt: Date;

  @Column('date')
  updatedAt: Date;
}
