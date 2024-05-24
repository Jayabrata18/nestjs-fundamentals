

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


@Entity('playlist')
export class Playlist{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

}