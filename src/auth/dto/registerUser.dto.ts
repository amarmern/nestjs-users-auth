import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDTO {
  @IsNotEmpty()
  fName: string;
  @IsNotEmpty()
  lName: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
