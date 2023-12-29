import {
  Controller,
  Get,
  Logger,
  Param,
  Res,
  HttpStatus,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { Response } from 'express';
import { ExchangeRateService } from './exchangeRate.service';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateExchangeRateBodyRequest } from './request/createExchangeRate.request';
import { GetExchangeRateParamRequest } from './request/getExchangeRate.request';
import {
  Response201,
  Response400,
  Response401,
  Response403,
  Response404,
  Response500,
} from '../common/response/response';
import { Response200One } from './response/exchange-rate.response';
import { ExchangeRateDto } from './dto/exchangeRate.dto';
import {
  UpdateExchangeRateBodyRequest,
  UpdateExchangeRateParamRequest,
} from './request/updateExchangeRate.request';

@ApiBearerAuth('Authorization')
@ApiTags('Exchange Rate')
@Controller('exchangeRate')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  @ApiOkResponse({
    type: Response200One,
    description: 'Ok',
  })
  @ApiBadRequestResponse({
    type: Response400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    type: Response401,
    description: 'Unauthorized',
  })
  @ApiForbiddenResponse({
    type: Response403,
    description: 'Forbidden',
  })
  @ApiNotFoundResponse({
    type: Response404,
    description: 'Not Found',
  })
  @ApiInternalServerErrorResponse({
    type: Response500,
    description: 'Internal Server Error',
  })
  @Get(':amount/:originCurrency/:finalCurrency')
  getExchangeRate(
    @Param() param: GetExchangeRateParamRequest,
    @Res() response: Response,
  ): void {
    try {
      const {
        amount,
        originCurrency,
        finalCurrency,
      }: GetExchangeRateParamRequest = param;
      const exchangeRateDto: ExchangeRateDto =
        this.exchangeRateService.getExchangeRate(
          amount,
          originCurrency,
          finalCurrency,
        );
      if (exchangeRateDto) {
        response.status(HttpStatus.OK).json(exchangeRateDto);
      } else {
        response.status(HttpStatus.NOT_FOUND).json(new Response404());
      }
    } catch (error) {
      Logger.log('Error: ');
      Logger.error(JSON.stringify(error));
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(new Response500());
    }
  }

  @ApiCreatedResponse({
    type: Response201,
    description: 'Created',
  })
  @ApiBadRequestResponse({
    type: Response400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    type: Response401,
    description: 'Unauthorized',
  })
  @ApiForbiddenResponse({
    type: Response403,
    description: 'Forbidden',
  })
  @ApiNotFoundResponse({
    type: Response404,
    description: 'Not Found',
  })
  @ApiInternalServerErrorResponse({
    type: Response500,
    description: 'Internal Server Error',
  })
  @Post()
  createExchangeRate(
    @Body() body: CreateExchangeRateBodyRequest,
    @Res() response: Response,
  ): void {
    try {
      this.exchangeRateService.createExchangeRate(body);
      const exchangeRateResponse201: Response201 = new Response201();
      response.status(HttpStatus.CREATED).json(exchangeRateResponse201);
    } catch (error) {
      Logger.log('Error: ');
      Logger.error(JSON.stringify(error));
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(new Response500());
    }
  }

  @ApiCreatedResponse({
    type: Response201,
    description: 'Created',
  })
  @ApiBadRequestResponse({
    type: Response400,
    description: 'Bad Request',
  })
  @ApiUnauthorizedResponse({
    type: Response401,
    description: 'Unauthorized',
  })
  @ApiForbiddenResponse({
    type: Response403,
    description: 'Forbidden',
  })
  @ApiNotFoundResponse({
    type: Response404,
    description: 'Not Found',
  })
  @ApiInternalServerErrorResponse({
    type: Response500,
    description: 'Internal Server Error',
  })
  @Patch('/:id')
  updateExchangeRate(
    @Param() param: UpdateExchangeRateParamRequest,
    @Body() body: UpdateExchangeRateBodyRequest,
    @Res() response: Response,
  ): void {
    try {
      this.exchangeRateService.updateExchangeRate(param.id, body);
      const exchangeRateResponse201: Response201 = new Response201();
      response.status(HttpStatus.CREATED).json(exchangeRateResponse201);
    } catch (error) {
      Logger.log('Error: ');
      Logger.error(JSON.stringify(error));
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(new Response500());
    }
  }
}
