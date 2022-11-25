import Observer from '@src/data-binding/observer';
import { atom, useRecoilState } from 'recoil';

import { EventType } from '..';

export default class ProfileImageCropPopup extends Observer<EventType> {
  readonly popup: boolean;
  protected setPopup: ReturnType<typeof useRecoilState<boolean>>[1];

  private static atom = atom<boolean>({
    key: 'profileImageCropPopup',
    default: false,
  });

  constructor() {
    super();
    [this.popup, this.setPopup] = useRecoilState<boolean>(
      ProfileImageCropPopup.atom,
    );
  }

  async update(payload: EventType) {
    this.setPopup(payload.mode);
  }
}

export function useProfileImageCropPopup() {
  return new ProfileImageCropPopup();
}
