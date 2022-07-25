import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
