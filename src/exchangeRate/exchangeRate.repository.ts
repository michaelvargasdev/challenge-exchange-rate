import { Injectable } from '@nestjs/common';
import { CreateExchangeRateBodyRequest } from './request/createExchangeRate.request';
import { EXCHANGE_RATE_DATA } from '../data/exchangeRate.data';
import { OPERATIONS } from '../constant/exchangeRate.constant';
import { ExchangeRateDto } from './dto/exchangeRate.dto';
import { UpdateExchangeRateBodyRequest } from './request/updateExchangeRate.request';

@Injectable()
export class ExchangeRateRepository {
  getExchangeRate(
    amount: number,
    originCurrency: string,
    finalCurrency: string,
  ): ExchangeRateDto {
    try {
      let data: ExchangeRateDto = null;
      const exchangeRateDataDto = EXCHANGE_RATE_DATA.find(
        (item) => item.id === `${originCurrency}-${finalCurrency}`,
      );
      if (exchangeRateDataDto) {
        const { exchangeRate, operation } = exchangeRateDataDto;
        const exchangeRateAmount = Number(
          (operation === OPERATIONS.MULTIPLICATION
            ? amount * exchangeRate
            : amount / exchangeRate
          ).toFixed(2),
        );
        data = {
          amount: Number(amount),
          exchangeRateAmount,
          originCurrency,
          finalCurrency,
          exchangeRate,
        };
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  createExchangeRate(body: CreateExchangeRateBodyRequest): boolean {
    try {
      const exchangeRate = EXCHANGE_RATE_DATA.find(
        (item) => item.id === body.id,
      );
      if (!exchangeRate) {
        EXCHANGE_RATE_DATA.push({ ...body });
      }
      return !exchangeRate;
    } catch (error) {
      throw error;
    }
  }

  updateExchangeRate(id: string, body: UpdateExchangeRateBodyRequest): boolean {
    try {
      const index: number = EXCHANGE_RATE_DATA.findIndex(
        (item) => item.id === id,
      );
      if (index >= 0) {
        EXCHANGE_RATE_DATA[index].exchangeRate = body.exchangeRate;
        EXCHANGE_RATE_DATA[index].operation = body.operation;
      }
      return index >= 0;
    } catch (error) {
      throw error;
    }
  }
}
