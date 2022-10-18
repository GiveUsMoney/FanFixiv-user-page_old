import { BaseApi } from './baseApi';
import {
  CertEmailResponseDto,
  CertNumberResponseDto,
  DcNickReponseDto,
  GetProfileRequestDto,
  GetProfileResponseDto,
  LoginRequestDto,
  LoginResponseDto,
  RefreshResponseDto,
  RegisterRequestDto,
  RegisterResponseDto,
} from './dtos/user';

export class UserApi extends BaseApi {
  private readonly authResource = '/auth';
  private readonly registerResource = `${this.authResource}/register`;

  regist(registerDto: RegisterRequestDto) {
    return this.post<RegisterResponseDto, RegisterRequestDto>(
      this.registerResource,
      registerDto,
    );
  }

  certEmail(email: string) {
    return this.get<CertEmailResponseDto>(
      `${this.registerResource}/cert-email`,
      {
        params: { email },
      },
    );
  }

  certNumber(number: number, uuid: string) {
    return this.get<CertNumberResponseDto>(
      `${this.registerResource}/cert-number`,
      {
        params: { number, uuid },
      },
    );
  }

  isNickDouble(nickname: string) {
    return this.get<DcNickReponseDto>(`${this.registerResource}/dc-nick`, {
      params: { nickname },
    });
  }

  login(email: string, pw: string) {
    return this.post<LoginResponseDto, LoginRequestDto>(
      `${this.authResource}/login`,
      {
        id: email,
        pw,
      },
    );
  }

  getProfile(email: string) {
    return this.post<GetProfileResponseDto, GetProfileRequestDto>(
      `${this.authResource}/profile`,
      {
        userEmail: email,
      },
    );
  }

  refresh() {
    return this.post<RefreshResponseDto, undefined>(
      `${this.authResource}/refresh`,
    );
  }

  logout() {
    this.axiosInstance.defaults.headers.common['Authorization'] = false;
  }
}

export const userApi = new UserApi();
