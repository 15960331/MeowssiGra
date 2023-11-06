export class ImageReader {
  private reader: FileReader;

  constructor() {
    this.reader = new FileReader();
  }

  public read(file: Blob, onLoad: (result: string) => void): void {
    this.reader.onload = () => {
      if (typeof this.reader.result !== 'string') return;
      onLoad(this.reader.result);
    };

    this.reader.readAsDataURL(file);
  }
}
