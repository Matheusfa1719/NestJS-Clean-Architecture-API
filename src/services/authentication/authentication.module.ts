import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './authentication.service';
import { JWT_CONFIGURATION } from 'src/configuration';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWT_CONFIGURATION.secret,
      signOptions: { expiresIn: JWT_CONFIGURATION.expiresIn },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthenticationModule {}
