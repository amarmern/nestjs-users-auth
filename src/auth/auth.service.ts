import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registerUser() {
    // logic for registration
    /**
     * 1. check the email if already exists
     * 2. has the password
     * store the user in to db
     * generate jwt token
     * send token in response
     */

    return { message: 'User Register Successfully' };
  }
}
