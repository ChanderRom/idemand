import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { CoreModule } from './@aurora/core.module';
import { IdemandModule } from './@api/idemand/idemand.module';

@Module({
    imports: [
        CoreModule,
        IdemandModule
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
