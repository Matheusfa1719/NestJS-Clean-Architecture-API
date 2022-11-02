import { Module } from '@nestjs/common';
import { AppController, GcemController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { GcemUseCasesModule } from './use-cases/gcem/gcem-use-cases.module';

@Module({
  imports: [DataServicesModule, GcemUseCasesModule],
  controllers: [AppController, GcemController],
  providers: [],
})
export class AppModule {}
