import { UrlResolver } from './url/url.resolver';
import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlService } from './url/url.service';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      ttl: 60,
      max: 100,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, UrlService, UrlResolver],
})
export class AppModule {}
