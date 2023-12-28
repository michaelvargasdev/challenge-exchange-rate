import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { secretAuth } from '../constant/auth.constant';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(userName: string, password: string): Promise<string> {
    const token = await this.jwtService.signAsync(
      { userName, password },
      { secret: secretAuth },
    );
    return token;
  }
}
