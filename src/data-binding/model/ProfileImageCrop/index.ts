import { atom, useRecoilState } from 'recoil';

import Notifier from '../../notifier';
import { useProfileImageCropPopup } from './ProfileImageCropPopup';

export type EventType = {
  mode: boolean;
  src: string;
};

export default class ProfileImageCrop extends Notifier<EventType> {
  readonly src: string;
  protected setSrc: ReturnType<typeof useRecoilState<string>>[1];
  readonly croppedSrc: string;
  protected setCroppedSrc: ReturnType<typeof useRecoilState<string>>[1];

  private static srcAtom = atom<string>({
    key: 'profileImageCropSrcAtom',
    default: '',
  });

  private static croppedSrcAtom = atom<string>({
    key: 'profileImageCropCroppedAtom',
    default: '',
  });

  constructor() {
    super({ observers: [useProfileImageCropPopup()] });
    [this.src, this.setSrc] = useRecoilState<string>(ProfileImageCrop.srcAtom);
    [this.croppedSrc, this.setCroppedSrc] = useRecoilState<string>(
      ProfileImageCrop.croppedSrcAtom,
    );
  }

  startCrop(src: string) {
    this.setSrc(src);
    this.notify({ mode: true, src });
  }

  endCrop(src: string) {
    this.setCroppedSrc(src);
    this.notify({ mode: false, src });
  }
}

export function useProfileImageCrop() {
  return new ProfileImageCrop();
}
