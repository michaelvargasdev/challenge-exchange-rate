import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExchangeRateController } from './exchangeRate.controller';
import { ExchangeRateService } from './exchangeRate.service';
import { ExchangeRateRepository } from './exchangeRate.repository';
import { AuthenticationMidldeware } from '../middleware/authentication.middleware';

@Module({
  controllers: [ExchangeRateController],
  providers: [ExchangeRateService, ExchangeRateRepository],
})
export class ExchangeRateModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMidldeware).forRoutes(ExchangeRateController);
  }
}
