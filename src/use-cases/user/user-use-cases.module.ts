import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { HashingModule } from 'src/services/hashing/hashing.module';
import { UserFactoryService } from './user-factory.service';
import { UserUseCases } from './user.use-case';

@Module({
  imports: [DataServicesModule, HashingModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule {}
