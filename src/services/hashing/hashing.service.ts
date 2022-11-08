import { Injectable } from '@nestjs/common';
import { IHashingServices } from 'src/core/abstracts/hashing-services.abstract';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService implements IHashingServices {
  async hash(hashString: any): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(hashString, salt);
    return hash;
  }

  async compare(password: any, hashPassword: any): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hashPassword);
    return isMatch;
  }
}
