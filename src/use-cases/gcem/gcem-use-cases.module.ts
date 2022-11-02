import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { GcemFactoryService } from './author-factory.service';
import { GcemUseCases } from './gcem.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [GcemFactoryService, GcemUseCases],
  exports: [GcemFactoryService, GcemUseCases],
})
export class GcemUseCasesModule {}
