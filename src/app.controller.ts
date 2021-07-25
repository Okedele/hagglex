import { IMetadata } from './interfaces/metadata.interface';
import { UrlService } from './url/url.service';
import { GetMetadataDto } from './url/dto/get-metatdata.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly urlService: UrlService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/metadata')
  async getMetadata(@Body() getMetadataDTO: GetMetadataDto): Promise<IMetadata> {
    return await this.urlService.run(getMetadataDTO)
  }
}
