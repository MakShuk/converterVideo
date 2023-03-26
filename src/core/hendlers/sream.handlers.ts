import { ChildProcessWithoutNullStreams } from "child_process";
import { ISreamLogger } from "./sream-logger.interface";

export class StreamHandler {
  constructor(private logger: ISreamLogger) {}
  processOutput(stream: ChildProcessWithoutNullStreams) {
    stream.stdout.on("data", (data: any) => {
      this.logger.log(data);
    });
    stream.stdout.on("data", (data: any) => {
      this.logger.error(data);
    });
    stream.stdout.on("close", (data: any) => {
      this.logger.end();
    });
  }
}
