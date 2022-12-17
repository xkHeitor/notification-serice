export class Content {
  readonly content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContent(content);
    if (!isContentLengthValid) throw new Error('Content length error');

    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  private validateContent(content: string): boolean {
    return content.length > 5 && content.length < 255;
  }
}
