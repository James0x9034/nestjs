import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class CreateUserDto {
  @Field(() => String, { description: '' })
  @IsString()
  readonly name: string;

  @Field(() => String, { description: '' })
  @IsString()
  readonly password: string;
}
