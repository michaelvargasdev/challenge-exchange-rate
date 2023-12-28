import { Injectable } from '@nestjs/common';
import { ExchangeRateRepository } from './exchangeRate.repository';
import { CreateExchangeRateBodyRequest } from './request/createExchangeRate.request';
import { ExchangeRateDto } from './dto/exchangeRate.dto';
import { UpdateExchangeRateBodyRequest } from './request/updateExchangeRate.request';

@Injectable()
export class ExchangeRateService {
  constructor(
    private readonly exchangeRateRepository: ExchangeRateRepository,
  ) {}

  getExchangeRate(
    monto: number,
    monedaOrigen: string,
    monedaDestino: string,
  ): ExchangeRateDto {
    try {
      return this.exchangeRateRepository.getExchangeRate(
        monto,
        monedaOrigen,
        monedaDestino,
      );
    } catch (error) {
      throw error;
    }
  }

  createExchangeRate(body: CreateExchangeRateBodyRequest): boolean {
    try {
      return this.exchangeRateRepository.createExchangeRate(body);
    } catch (error) {
      throw error;
    }
  }

  updateExchangeRate(id: string, body: UpdateExchangeRateBodyRequest): boolean {
    try {
      return this.exchangeRateRepository.updateExchangeRate(id, body);
    } catch (error) {
      throw error;
    }
  }
}
