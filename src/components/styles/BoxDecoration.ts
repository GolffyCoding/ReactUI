
export  class BoxDecoration {
  color: string;
  borderRadius: number;
  boxShadow: string;
  constructor({ 
    color, 
    borderRadius, 
    boxShadow 
  }: { 
    color: string;
    borderRadius: number;
    boxShadow: string;
  }) {
    this.color = color;
    this.borderRadius = borderRadius;
    this.boxShadow = boxShadow;
  }

  toReactStyle(): React.CSSProperties {
    return {
      backgroundColor: this.color,
      borderRadius: `${this.borderRadius}px`,
      boxShadow: this.boxShadow
    };
  }
}