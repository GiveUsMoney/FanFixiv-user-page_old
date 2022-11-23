import { useState } from 'react';
import React from 'react';

export default class SecessionCheckValidator {
  readonly valid: boolean;
  protected setValid: React.Dispatch<React.SetStateAction<boolean>>;

  constructor() {
    [this.valid, this.setValid] = useState(false);
  }

  validate(secessionCheck: string) {
    if (secessionCheck === '탈퇴') {
      this.setValid(true);
    } else {
      this.setValid(false);
      throw 'secessionCheck invalid';
    }
  }
}

export function useSecessionCheckValidator() {
  return new SecessionCheckValidator();
}
