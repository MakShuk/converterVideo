import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { ISreamLogger } from '../hendlers/sream-logger.interface';
import { ICommandExec } from './commans.types';

export abstract class CommansExecuter<Inpur> {
  constructor(private logger: ISreamLogger) {}
  public async execute() {
    const input = await this.promt();
    const comand = this.build(input);
    const srtream = this.spawn(comand);
    this.processStream(srtream, this.logger);
  }
  protected abstract promt(): Promise<Inpur>;
  protected abstract build(inpur: Inpur): ICommandExec;
  protected abstract spawn(comand: ICommandExec): ChildProcessWithoutNullStreams;
  protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: ISreamLogger): void;
}