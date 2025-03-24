/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User> ){}

  async createUser(email:string,password:string){
    const hashPassword = await bcrypt.hash(password,10);
    const newUser = this. userRepository.create({email,password:hashPassword});
    return this.userRepository.save(newUser);
  }
  
  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
