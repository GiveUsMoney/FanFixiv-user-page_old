export interface RegisterRequestDto {
  birth: string;
  nickname: string;
  pw: string;
  uuid: string;
}

export interface RegisterResponseDto {
  msg: string;
}

export interface CertEmailResponseDto {
  endTime: string;
  uuid: string;
}

export interface CertNumberResponseDto {
  success: boolean;
}

export interface DcNickReponseDto {
  can_use: boolean;
}

export interface LoginRequestDto {
  id: string;
  pw: string;
}

export interface LoginResponseDto {
  token: string;
}

export interface RefreshResponseDto {
  token: string;
}

// TODO: 후일 프로필 DB가 추가되면 더 많은 property를 포함할 예정
export interface GetProfileRequestDto {
  // userEmail: string;
}

export interface LogoutResponseDto {
  success: boolean;
}

export interface GetProfileResponseDto {
  birth: string;
  descript: string;
  email: string;
  nickname: string;
  nnMdDate: string;
  profileImg: string;
  tr: boolean;
}
