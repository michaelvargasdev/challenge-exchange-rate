import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { HeadersRequest } from '../common/request/headers.request';
import { Response401 } from '../common/response/response';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationMidldeware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: any, res: any, next: (error?: any) => void) {
    try {
      const headers: HeadersRequest = req.headers;
      Logger.log(headers);
      Logger.log(headers.authorization);
      if (!headers.authorization) {
        return res.status(HttpStatus.UNAUTHORIZED).json(new Response401());
      } else {
        const token = await this.jwtService.verifyAsync(headers.authorization);
        Logger.log(token);
        const payload = await this.jwtService.decode(token, { json: true });
        Logger.log(payload);
        next();
      }
    } catch (error) {
      Logger.error(error);
      if (
        ['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(
          error.name,
        )
      ) {
        return res.status(HttpStatus.UNAUTHORIZED).json(new Response401());
      }
    }
  }
}
