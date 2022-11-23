import { userApi } from '@src/apis';
import { useState } from 'react';
import React from 'react';

export default class PasswordValidator {
  readonly valid: boolean;
  protected setValid: React.Dispatch<React.SetStateAction<boolean>>;

  constructor() {
    [this.valid, this.setValid] = useState(true);
  }

  async validate(password: string) {
    try {
      await userApi.secession(password);
      this.setValid(true);
    } catch (e) {
      this.setValid(false);
      throw 'password invalid';
    }
  }
}

export function usePasswordValidator() {
  return new PasswordValidator();
}
