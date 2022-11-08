import { UserRoles } from '../enums';

export class User {
  firstName: string;

  lastName: string;

  email: string;

  password: string;

  role: UserRoles;
}
