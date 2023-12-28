import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  Response400,
  Response401,
  Response403,
  Response404,
  Response500,
} from '../common/response/response';
import { Response } from 'express';
import { SingInBodyRequest } from './request/singIng.request';
import { SingInResponse } from './response/singIn.response';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({
    type: SingInResponse,
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
  @Post('singIn')
  async signIn(
    @Body() body: SingInBodyRequest,
    @Res() response: Response,
  ): Promise<void> {
    const token: string = await this.authService.signIn(
      body.userName,
      body.password,
    );
    const singInResponse: SingInResponse = {
      token,
    };
    response.status(HttpStatus.OK).json(singInResponse);
  }
}
