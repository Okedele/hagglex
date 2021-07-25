import { IMetadata } from './../interfaces/metadata.interface';
import { GetMetadataDto } from './dto/get-metatdata.dto';
import { Injectable } from '@nestjs/common';
const getMetaData = require('metadata-scraper')

@Injectable()
export class UrlService {
    async run(getMetadataDTO: GetMetadataDto): Promise<IMetadata> {
        const { title, description, image } = await getMetaData(getMetadataDTO.url);
        return {title, description, image};
    }
}
