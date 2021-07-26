import { IMetadata } from './../interfaces/metadata.interface';
import { GetMetadataDto } from './dto/input/get-metatdata.dto';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
const getMetaData = require('metadata-scraper');

@Injectable()
export class UrlService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getMetadata(getMetadataDTO: GetMetadataDto): Promise<IMetadata> {
    const url = getMetadataDTO.url;
    const value: IMetadata = await this.cacheManager.get(url);
    if (value) return value;
    const { title, description, image } = await getMetaData(url);
    const metadata = { title, description, image };
    await this.cacheManager.set(url, metadata);
    return metadata;
  }
}
