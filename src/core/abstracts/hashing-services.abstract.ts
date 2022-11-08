export abstract class IHashingServices {
  abstract hash(hashString): Promise<string>;
  abstract compare(password, hashPassword): Promise<boolean>;
}
