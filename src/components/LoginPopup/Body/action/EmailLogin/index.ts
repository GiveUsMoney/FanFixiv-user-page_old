import Action from '@src/action';
import { userApi } from '@src/apis';
import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { LoginForm } from '../../interface';

export default class EmailLogin extends Action {
  formContext: UseFormReturn<LoginForm>;
  block: boolean;
  setBlock: (value: boolean) => void;

  constructor() {
    super();
    this.formContext = useForm<LoginForm>();
    [this.block, this.setBlock] = useState<boolean>(false);
  }
  async doAction() {
    try {
      const ret = await userApi.login(
        this.formContext.getValues().email,
        this.formContext.getValues().pw,
      );
      window.localStorage.setItem('access-token', ret.token);
      this.setBlock(false);
      location.href = `${process.env.REACT_APP_PUBLIC_URL}`;
    } catch (e) {
      this.setBlock(true);
    }
  }
}
