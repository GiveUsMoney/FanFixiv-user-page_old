import { useState } from 'react';
import React from 'react';

export default class SecessionCheckModel {
  readonly check: string;
  protected setCheck: React.Dispatch<React.SetStateAction<string>>;

  constructor() {
    [this.check, this.setCheck] = useState('');
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setCheck(e.target.value);
  }
}

export function useSecessionCheckModel() {
  return new SecessionCheckModel();
}
