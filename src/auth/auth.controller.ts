import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/registerUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly autthService: AuthService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterDTO) {
    const createrdUser = await this.autthService.registerUser(registerUserDto);
    return createrdUser;
  }
}
