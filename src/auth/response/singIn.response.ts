import { ApiProperty } from '@nestjs/swagger';

export class SingInResponse {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InVzZXJfbmFtZUBtYWlsLmNvbSIsInBhc3N3b3JkIjoibXlfcGFzc3dvcmRANzA3IiwiaWF0IjoxNzAzNzM4Mjg2LCJleHAiOjE3MDM3MzgzNDZ9.cEjZZzlb6fCHBFisNwDdZmWLouMj-BDhQEc-vyTnYIU',
  })
  token: string;
}
