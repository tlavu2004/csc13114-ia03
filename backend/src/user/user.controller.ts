import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IsEmail, IsString, MinLength } from 'class-validator';

class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const user = await this.userService.createUser(dto.email, dto.password);
    return {
      message: 'User registered successfully',
      user: {
        id: user._id,
        email: user.email,
        createdAt: user.createdAt
      }
    };
  }
}
