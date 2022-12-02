import { Module } from '@nestjs/common';
import { AuthenticationModule } from '../../services/authentication/authentication.module';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { HashingModule } from '../../services/hashing/hashing.module';
import { UserFactoryService } from './user-factory.service';
import { UserUseCases } from './user.use-case';

@Module({
  imports: [DataServicesModule, HashingModule, AuthenticationModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule {}
