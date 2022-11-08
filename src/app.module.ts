import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController, GcemController } from './controllers';
import { UserController } from './controllers/user.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { GcemUseCasesModule } from './use-cases/gcem/gcem-use-cases.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DataServicesModule,
    UserUseCasesModule,
    GcemUseCasesModule,
  ],
  controllers: [AppController, UserController, GcemController],
  providers: [],
})
export class AppModule {}
