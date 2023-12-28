import { ApiProperty } from '@nestjs/swagger';
import { ExchangeRateDto } from '../dto/exchangeRate.dto';

export class Response200Many {
  @ApiProperty({ isArray: true })
  payload: ExchangeRateDto[];
}

export class Response200One {
  @ApiProperty()
  payload: ExchangeRateDto;
}
