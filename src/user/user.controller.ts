import { Body, Controller, Post} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post('register')
  async register(@Body() body:{email:string, password:string}){
    return this.userService.createUser(body.email,body.password);
  }
}
