import { useState } from 'react';
import React from 'react';

export default class PasswordModel {
  readonly pw: string;
  protected setPw: React.Dispatch<React.SetStateAction<string>>;

  constructor() {
    [this.pw, this.setPw] = useState('');
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setPw(e.target.value);
  }
}

export function usePasswordModel() {
  return new PasswordModel();
}
