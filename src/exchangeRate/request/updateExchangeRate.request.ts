import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, IsString, IsNumber } from 'class-validator';

export class UpdateExchangeRateParamRequest {
  @Length(7, 7)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'PEN-USD' })
  id: string;
}

export class UpdateExchangeRateBodyRequest {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 3.4 })
  exchangeRate: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ examples: [1, 2] })
  operation: number;
}
