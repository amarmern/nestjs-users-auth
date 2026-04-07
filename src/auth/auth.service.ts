import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { RegisterDTO } from './dto/registerUser.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async registerUser(registerUserDto: RegisterDTO) {
    console.log('registerdto', registerUserDto);
    // logic for registration
    /**
     * 1. check the email if already exists
     * 2. hash the password
     * 3. store the user in to db
     * 4. generate jwt token
     * 5. send token in response
     */
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(registerUserDto.password, saltOrRounds);

    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hash,
    });
    const payload = { sub: user._id };
    const token = await this.jwtService.signAsync(payload);
    return { access_token: token };
  }
}
