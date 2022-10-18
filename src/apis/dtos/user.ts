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
