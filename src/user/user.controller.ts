import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUsernDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // // post /user json
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto): CreateUserDto {
    return this.userService.create(createUserDto);
  }

  // get query /user?age=xxx
  @Get()
  findAll(@Query('age', ParseIntPipe) age: number | undefined) {
    return this.userService.findAll(age);
  }

  // // get /user/:id
  @Get(':id')
  getUserById(@Param('id') id: string): CreateUserDto {
    try {
      return this.userService.findOne(id);
    } catch (error) {
      // throw DB_ERROR
      throw new NotFoundException();
    }
  }

  // // update /user/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsernDto: UpdateUsernDto) {
    return this.userService.updata(id, updateUsernDto);
  }

  // // delete /user/:id
  @Delete(':id')
  deletUserById(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
