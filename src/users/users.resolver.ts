import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/users.schema';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args() params: CreateUserDto) {
    return this.usersService.create(params);
  }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
