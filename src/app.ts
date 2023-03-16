import { PromtService } from "./core/promt/promt.service";

export class App {
  async run() {
    const result = await new PromtService().input<number>("Число", "number");
    console.log(result);
  }
}

const app = new App();
app.run();
