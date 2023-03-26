import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommansExecuter } from '../../core/executor/command.executor';
import { ICommandExec } from '../../core/executor/commans.types';
import { FIleService } from '../../core/files/file.service';
import { ISreamLogger } from '../../core/hendlers/sream-logger.interface';
import { PromtService } from '../../core/promt/promt.service';
import { ICommandExecFfmpeg, IFfmpegInput } from './ffmpeg.types';
import { FfmpegBuilder } from './ffmpeg.builder'
import { StreamHandler } from '../../core/hendlers/sream.handlers';

export class FfmpegExecutor extends CommansExecuter<IFfmpegInput> {
  private fileService: FIleService = new FIleService();

  private promptService: PromtService = new PromtService();

  constructor(logger: ISreamLogger) {
    super(logger);
  }

  protected async promt(): Promise<IFfmpegInput> {
    const widht = await this.promptService.input<number>('Ширина', 'number');
    const height = await this.promptService.input<number>('Высота', 'number');
    const path = await this.promptService.input<string>('Путь до файла', 'input');
    const name = await this.promptService.input<string>('Имя файла', 'input');
    return { widht, height, path, name };
  }

  protected build({ widht, height, path, name }: IFfmpegInput): ICommandExecFfmpeg {
    const output = this.fileService.getFilePath(path, name, 'mp4');
    const args = new FfmpegBuilder().input(path).setVideoSize(widht, height).output(output);
    return { command: 'ffmpeg', args, output };
  }

  protected spawn({output, command, args}: ICommandExecFfmpeg): ChildProcessWithoutNullStreams { 
		this.fileService.deleateFilExist(output);
		return spawn(command, args);
	}

  protected processStream(stream: ChildProcessWithoutNullStreams, logger: ISreamLogger): void {
    const handler = new StreamHandler(logger);
		handler.processOutput(stream)
  }
}
