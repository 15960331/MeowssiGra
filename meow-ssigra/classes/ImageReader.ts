import { resourceLimits } from 'worker_threads';

export class ImageReader {
  public read(fileList: FileList, onLoad: (result: string[]) => void): void {
    const files = Array.from(fileList);

    files.forEach((file, index) => {
      const reader = new FileReader();
      const result: string[] = [];

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          result.push(reader.result);
        }

        if (index === files.length - 1) {
          onLoad(result);
        }
      };

      reader.readAsDataURL(file);
    });
  }
}
