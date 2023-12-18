import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUsernDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private UserList: CreateUserDto[] = [
    {
      id: 's6h2j7',
      name: 'Alice Smith',
      age: 18,
    },
    {
      id: 'r9g4k1',
      name: 'Bob Johnson',
      age: 27,
    },
    {
      id: 't8f3b6',
      name: 'Emma Davis',
      age: 42,
    },
  ];

  create(createUserDto: CreateUserDto): CreateUserDto {
    const newUser: CreateUserDto = {
      ...createUserDto,
      id: new Date().getTime().toString(),
    };
    this.UserList.push(newUser);
    return createUserDto;
  }

  findAll(age: number | undefined): CreateUserDto[] {
    if (!age) {
      return this.UserList;
    }
    return this.UserList.filter((user) => user.age >= age);
  }

  findOne(id: string): CreateUserDto {
    const user = this.UserList.find((u) => u.id === id);
    if (!user) {
      throw new Error();
    }
    return user;
  }

  updata(id: string, updateUsernDto: UpdateUsernDto) {
    const users = this.UserList.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUsernDto,
        };
      }
      return user;
    });
    this.UserList = users;
    return this.UserList;
  }

  delete(id: string) {
    const users = this.UserList.filter((user) => user.id !== id);
    return users;
  }
}
