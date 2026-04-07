import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(registerUserDto: RegisterDTO) {
    try {
      return await this.userModel.create({
        fName: registerUserDto.fName,
        lName: registerUserDto.lName,
        email: registerUserDto.email,
        password: registerUserDto.password,
      });
    } catch (err: unknown) {
      console.log(err);
      const e = err as { code?: number };
      if (e.code === 11000) {
        throw new ConflictException('email already taken ');
      }

      throw err;
    }
  }
}
