import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './';

export type GcemDocument = Gcem & Document;

@Schema()
export class Gcem {
  @Prop()
  name: string;

  @Prop()
  meetingDay: string;

  @Prop()
  meetingTime: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  leader: User;
}

export const GcemSchema = SchemaFactory.createForClass(Gcem);
