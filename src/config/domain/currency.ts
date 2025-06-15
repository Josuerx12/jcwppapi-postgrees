export class Currency {
  static toCents(value: number): number {
    return Math.round(value * 100);
  }

  static fromCents(value: number): number {
    return value / 100;
  }

  static fromCentsFormatted(value: number): string {
    return (value / 100).toFixed(2);
  }
}
