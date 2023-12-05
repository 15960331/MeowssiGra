const readFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('File read error'));
      }
    };

    reader.readAsDataURL(file);
  });
};

export const readFiles = async (fileList: FileList): Promise<string[]> => {
  const files = Array.from(fileList);
  const result = await Promise.all(files.map(readFile));
  return result;
};
