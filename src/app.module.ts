import { Module } from '@nestjs/common';
import { AppController, GcemController } from './controllers';
import { UserController } from './controllers/user.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { GcemUseCasesModule } from './use-cases/gcem/gcem-use-cases.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import { HashingModule } from './services/hashing/hashing.module';

@Module({
  imports: [
    DataServicesModule,
    UserUseCasesModule,
    GcemUseCasesModule,
    HashingModule,
  ],
  controllers: [AppController, UserController, GcemController],
  providers: [],
})
export class AppModule {}
