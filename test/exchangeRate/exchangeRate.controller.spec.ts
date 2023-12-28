import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeRateController } from '../../src/exchangeRate/exchangeRate.controller';
import { ExchangeRateService } from '../../src/exchangeRate/exchangeRate.service';
import { ExchangeRateRepository } from '../../src/exchangeRate/exchangeRate.repository';
import { GetExchangeRateParamRequest } from '../../src/exchangeRate/request/getExchangeRate.request';
import { Response } from 'express';
import { getMockRes } from '@jest-mock/express';

describe('ExchangeRateController', () => {
  let controller: ExchangeRateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExchangeRateController],
      providers: [ExchangeRateService, ExchangeRateRepository],
    }).compile();

    controller = module.get<ExchangeRateController>(ExchangeRateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('exchangeRate get', () => {
    const { res } = getMockRes();
    const params: GetExchangeRateParamRequest = {
      amount: 100.0,
      originCurrency: 'PEN',
      finalCurrency: 'USD',
    };
    controller.getExchangeRate(params, res as Response);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
    //expect(res._isEndCalled()).toBeTruthy();
    //expect(res._getJSONData().data.name).toEqual('dummy 1');
  });
});
