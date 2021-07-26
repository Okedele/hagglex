import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class GetMetadataDto {
    @Field()
    @IsNotEmpty()
    url: string;
}