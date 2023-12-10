import JSZip from 'jszip';

// TODO: use SUPPORT_FORMAT
const isImageFile = (fileName: string): boolean => /\.(jpe?g|png|gif|bmp|webp)$/i.test(fileName);

const toBase64Image = async (zip: JSZip, imageFile: string): Promise<string | null> => {
  const content = await zip.file(imageFile)?.async('base64');
  if (content) {
    return `data:image/${imageFile.split('.').pop()};base64,${content}`;
  }
  return null;
};

export const readImagesFromZip = async (file: File): Promise<string[]> => {
  const zip = new JSZip();
  const data = await file.arrayBuffer();
  const zipData = await zip.loadAsync(data);
  const imageFiles = Object.keys(zipData.files).filter(isImageFile);

  const images = await Promise.all(
    imageFiles.map((imageFile) => toBase64Image(zipData, imageFile)),
  );

  return images.flatMap((image) => (image ? image : []));
};
