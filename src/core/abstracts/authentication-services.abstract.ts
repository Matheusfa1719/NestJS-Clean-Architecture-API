export abstract class IAuthenticationServices {
  abstract login(payload): Promise<any>;
}
