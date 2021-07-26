import { UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { GetMetadataDto } from './dto/input/get-metatdata.dto';
import { IMetadata } from './../interfaces/metadata.interface';
import { UrlService } from './url.service';
import { Metadata } from './models/metadata';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Metadata)
export class UrlResolver {
  constructor(private readonly urlsService: UrlService) {}

  @Query(() => Metadata)
  async fetchMetadata(
    @Args('getMetadataDTO') getMetadataDTO: GetMetadataDto,
  ): Promise<IMetadata> {
    return await this.urlsService.getMetadata(getMetadataDTO);
  }
}
