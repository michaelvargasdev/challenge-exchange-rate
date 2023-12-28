import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SingInBodyRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'user_name@mail.com' })
  userName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'my_password@707' })
  password: string;
}
