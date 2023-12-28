import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  Length,
  IsString,
  IsNumberString,
  IsCurrency,
} from 'class-validator';

export class GetExchangeRateParamRequest {
  @IsCurrency({ decimal_separator: '.' })
  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({ example: 100.0 })
  amount: number;
  @Length(3, 3)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'USD' })
  originCurrency: string;
  @Length(3, 3)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'PEN' })
  finalCurrency: string;
}
