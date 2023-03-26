import { IStreamLogger } from '../../core/hendlers/sream-logger.interface';

export class ConsoleLogger implements IStreamLogger {
  private constructor() {}
  private static instnce: ConsoleLogger;

  public static getInstance(): ConsoleLogger {
    if (!ConsoleLogger) {
      ConsoleLogger.instnce = new ConsoleLogger();
    }
    return ConsoleLogger.instnce;
  }

  log(...args: any[]): void {
    console.log(...args);
  }
  error(...args: any[]): void {
    console.log('Error');
  }
  end(): void {
    console.log('END');
  }
}
