import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { RegisterDTO } from './dto/registerUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
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
    console.log('user', user);
    return user;
  }
}
