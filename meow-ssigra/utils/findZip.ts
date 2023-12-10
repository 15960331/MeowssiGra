import { SUPPORT_FORMAT } from '@/constants';

export const findZip = (fileList: FileList) => {
  return Object.values(fileList).find((value) => value.type === SUPPORT_FORMAT.ZIP);
};
