import { BaseApi } from './baseApi';
import {
  CertEmailResponseDto,
  CertNumberResponseDto,
  DcNickReponseDto,
  RegisterRequestDto,
  RegisterResponseDto,
} from './dtos/user';

export class UserApi extends BaseApi {
  private readonly resource = '/auth/register';

  regist(registerDto: RegisterRequestDto) {
    return this.post<RegisterResponseDto, RegisterRequestDto>(
      this.resource,
      registerDto,
    );
  }

  certEmail(email: string) {
    return this.get<CertEmailResponseDto>(`${this.resource}/cert-email`, {
      params: { email },
    });
  }

  certNumber(number: number, uuid: string) {
    return this.get<CertNumberResponseDto>(`${this.resource}/cert-number`, {
      params: { number, uuid },
    });
  }

  isNickDouble(nickname: string) {
    return this.get<DcNickReponseDto>(`${this.resource}/dc-nick`, {
      params: { nickname },
    });
  }
}

export const userApi = new UserApi();
