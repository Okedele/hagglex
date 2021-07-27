import { IMetadata } from './../interfaces/metadata.interface';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
const getMetaData = require('metadata-scraper');

@Injectable()
export class UrlService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getMetadata(url: string): Promise<IMetadata> {
    const value: IMetadata = await this.cacheManager.get(url);
    if (value) return value;
    const { title, description, image } = await getMetaData(url);
    const metadata = { title, description, image };
    await this.cacheManager.set(url, metadata);
    return metadata;
  }
}
