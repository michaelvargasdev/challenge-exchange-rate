import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsJWT } from 'class-validator';

export class HeadersRequest {
  @IsJWT()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.4RBS29Xqm4mhDkJ-GUDujviDfm4TOSgp-yZCm0v-dKE',
  })
  authorization: string;
}
