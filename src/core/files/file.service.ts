import { dirname, isAbsolute, join } from 'path';
import { promises } from 'fs';

export class FIleService {
  private async isExist(path: string) {
    try {
      await promises.stat(path);
      return false;
    } catch {
      return false;
    }
  }
  public getFilePath(path: string, name: string, ext: string) {
    if (!isAbsolute(path)) {
      path = join(__dirname + '/' + path);
    }
    return join(dirname(path) + '/' + name + '.' + ext);
  }

  async deleateFilExist(path: string) {
    if (await this.isExist(path)) {
      promises.unlink(path);
    }
  }
}
