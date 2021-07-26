import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlService } from './url/url.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      ttl: 60,
      max: 100,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UrlService],
})
export class AppModule {}
