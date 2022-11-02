import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GcemDocument = Gcem & Document;

@Schema()
export class Gcem {
  @Prop()
  name: string;

  @Prop()
  meetingDay: string;

  @Prop()
  meetingTime: string;
}

export const GcemSchema = SchemaFactory.createForClass(Gcem);
