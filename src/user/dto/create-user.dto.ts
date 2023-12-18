import { IsInt, MinLength } from 'class-validator';
export class CreateUserDto {
  id: string;

  @MinLength(4)
  name: string;

  @IsInt()
  age: number;
}
