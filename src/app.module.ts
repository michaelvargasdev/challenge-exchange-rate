import { Module } from '@nestjs/common';
import { ExchangeRateModule } from './exchangeRate/exchangeRate.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ExchangeRateModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
