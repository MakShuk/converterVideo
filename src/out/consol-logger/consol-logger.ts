import { ISreamLogger } from "../../core/hendlers/sream-logger.interface";

export class ConsoleLogger implements ISreamLogger {
  private constructor() {}
  private static instnce: ConsoleLogger;

  public static get(): ConsoleLogger {
    if (!ConsoleLogger) {
      ConsoleLogger.instnce = new ConsoleLogger();
    }
    return ConsoleLogger.instnce;
  }

  log(...args: any[]): void {
    console.log(...args);
  }
  error(...args: any[]): void {
    console.log("Error");
  }
  end(): void {
    console.log("END");
  }
}
