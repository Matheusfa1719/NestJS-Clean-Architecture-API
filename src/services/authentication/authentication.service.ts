import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuthenticationServices } from '../../core/abstracts/authentication-services.abstract';

@Injectable()
export class AuthService implements IAuthenticationServices {
  constructor(private jwtService: JwtService) {}
  async login(payload: any) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
