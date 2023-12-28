import { ApiProperty } from '@nestjs/swagger';

export class ExchangeRateDataDto {
  @ApiProperty({ example: 'USD' })
  id: string;
  @ApiProperty({ example: 3.4 })
  exchangeRate: number;
  @ApiProperty({ examples: [1, 2] })
  operation: number;
}
