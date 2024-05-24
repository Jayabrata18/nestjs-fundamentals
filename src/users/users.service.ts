import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(usersDto: CreateUserDto): Promise<User>{
    const salt = await bcrypt.genSalt();
    usersDto.password = await bcrypt.hash(usersDto.password, salt);
    const user = await this.userRepository.save(usersDto);
    delete user.password;
    return user;
  }

}
