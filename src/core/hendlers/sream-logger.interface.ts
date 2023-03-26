export interface ISreamLogger {
  log(...args: any[]): void;
  error(...args: any[]): void;
  end(): void;
}
