import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entitty';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findUser(condition: any): Promise<User> {
    if (condition) {
      return this.userRepository.findOne({ where: condition });
    }
  }
}
