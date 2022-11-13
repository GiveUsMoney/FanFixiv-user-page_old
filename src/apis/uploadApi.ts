import { BaseApi } from './baseApi';
import { ProfileImgResponse } from './dtos/upload';

export class UploadApi extends BaseApi {
  private readonly uploadResource = '/upload';

  profileImgTemp(profileImgTempDto: any) {
    return this.post<ProfileImgResponse, any>(
      `${this.uploadResource}/profile-img/temp`,
      profileImgTempDto,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  }
}

export const uploadApi = new UploadApi();
