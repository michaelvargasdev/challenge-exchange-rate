import { ApiProperty } from '@nestjs/swagger';

export class Response201 {
  @ApiProperty()
  message: string = 'Created';
}

export class Response400 {
  @ApiProperty()
  message: string;
  @ApiProperty()
  code: string;
}

export class Response401 {
  @ApiProperty()
  message: string = 'Unauthorized';
}

export class Response403 {
  @ApiProperty()
  message: string = 'Forbidden';
}

export class Response404 {
  @ApiProperty()
  message: string = 'Not Found';
}

export class Response500 {
  @ApiProperty()
  message: string = 'Internal Server Error';
}
