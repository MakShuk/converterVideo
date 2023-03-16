import imquirer from "inquirer";
import { PromtType } from "./promt.types";

export class PromtService {
  public async input<T>(message: string, type: PromtType) {
    const { result } = await imquirer.prompt<{ result: T }>([
      {
        type,
        name: "result",
        message,
      },
    ]);
    return result;
  }
}
