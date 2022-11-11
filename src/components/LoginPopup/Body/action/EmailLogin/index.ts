import ServerSyncAction from '@src/action/ServerSyncAction';
import EmptyAction from '@src/action/ServerSyncAction/EmptyAction';
import { userApi } from '@src/apis';
import { LoginRequestDto, LoginResponseDto } from '@src/apis/dtos';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { LoginForm } from '../../interface';
import ClientSide from './ClientSide';

export default class EmailLogin extends ServerSyncAction<
  LoginRequestDto,
  LoginResponseDto
> {
  readonly formContext: UseFormReturn<LoginForm>;
  readonly block: boolean;
  protected setBlock: (value: boolean) => void;
  readonly errorMessage: string;
  protected setErrorMessage: (value: string) => void;

  constructor() {
    super({
      clientSideAction: new EmptyAction(),
    });
    this.formContext = useForm<LoginForm>();
    [this.block, this.setBlock] = useState<boolean>(false);
    [this.errorMessage, this.setErrorMessage] = useState<string>('');
    this.setClientSideAction(new ClientSide({ setBlock: this.setBlock }));
  }

  async login() {
    await this.doAction({
      email: this.formContext.getValues().email,
      pw: this.formContext.getValues().pw,
    });
  }

  protected async doApi(payload: LoginRequestDto) {
    return await userApi.login(
      this.formContext.getValues().email,
      this.formContext.getValues().pw,
    );
  }

  protected async handleApiError(e: AxiosError<any>) {
    this.setBlock(true);
    this.setErrorMessage(e.response!.data.message);
  }
}
