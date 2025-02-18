export class TextStyle {
  fontSize: number;
  height: string;
  color: string;
  fontWeight: string;
  textAlign: React.CSSProperties['textAlign'];

  constructor({ 
    fontSize, 
    height = 'normal', 
    color, 
    fontWeight, 
    textAlign = 'left' 
  }: { 
    fontSize: number, 
    height?: string, 
    color: string, 
    fontWeight: string, 
    textAlign?: React.CSSProperties['textAlign'] 
  }) {
    this.fontSize = fontSize;
    this.height = height;
    this.color = color;
    this.fontWeight = fontWeight;
    this.textAlign = textAlign;
  }

  toReactStyle(): React.CSSProperties {
    return {
      fontSize: `${this.fontSize}px`,
      lineHeight: this.height?.toString(),
      color: this.color,
      fontWeight: this.fontWeight,
      textAlign: this.textAlign
    };
  }
}