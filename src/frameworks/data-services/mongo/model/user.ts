import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserRoles } from 'src/core/enums';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ enum: UserRoles })
  role: UserRoles;
}

export const UserSchema = SchemaFactory.createForClass(User);
