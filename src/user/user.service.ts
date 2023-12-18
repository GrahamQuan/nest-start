import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUsernDto } from './dto/update-user.dto';

let UserList: CreateUserDto[] = [
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

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto): CreateUserDto {
    UserList.push(createUserDto);
    return createUserDto;
  }

  findAll(age: number | undefined): CreateUserDto[] {
    if (!age) {
      return UserList;
    }
    return UserList.filter((user) => user.age >= age);
  }

  findOne(id: string): CreateUserDto {
    const user = UserList.find((u) => u.id === id);
    if (!user) {
      throw new Error();
    }
    return user;
  }

  updata(id: string, updateUsernDto: UpdateUsernDto) {
    const users = UserList.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUsernDto,
        };
      }
      return user;
    });
    UserList = users;
    return UserList;
  }

  delete(id: string) {
    const users = UserList.filter((user) => user.id !== id);
    return users;
  }
}
