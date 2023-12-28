import { ApiProperty } from '@nestjs/swagger';

export class ExchangeRateDto {
  @ApiProperty({ example: 100.0 })
  amount: number;
  @ApiProperty({ example: 340.0 })
  exchangeRateAmount: number;
  @ApiProperty({ example: 'USD' })
  originCurrency: string;
  @ApiProperty({ example: 'PEN' })
  finalCurrency: string;
  @ApiProperty({ example: 3.4 })
  exchangeRate: number;
}
