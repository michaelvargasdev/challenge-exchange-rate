import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { JwtService } from '@nestjs/jwt';

describe('Exchange Rate (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/:amount/:originCurrency/:finalCurrency (GET)', () => {
    const token: any =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im1pY2hhZWwudmFyZ2FzIiwicGFzc3dvcmQiOiJNMWNoYTNMX1Y0cmc0UyIsImlhdCI6MTcwMzc3MzMxMCwiZXhwIjoxNzAzNzczMzcwfQ.wQ7vYigNkJFB-w0CM_IcFGm5mXY6D6QTwOXBIlsD8H8';
    const response = {
      amount: 100,
      exchangeRateAmount: 29.41,
      originCurrency: 'PEN',
      finalCurrency: 'USD',
      exchangeRate: 3.4,
    };
    jest
      .spyOn(JwtService.prototype, 'verifyAsync')
      .mockReturnValueOnce(Promise.resolve(token));
    return request(app.getHttpServer())
      .get('/exchangeRate/100.00/PEN/USD')
      .set('Authorization', token)
      .expect(200)
      .expect(response);
  });
});
