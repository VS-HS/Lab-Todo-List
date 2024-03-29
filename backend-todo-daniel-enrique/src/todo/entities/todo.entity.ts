import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Todo {
  @ApiProperty({ type: String, description: 'Todo Item', required: false })
  @PrimaryColumn()
  todo: string;

  @ApiProperty({ type: Number, description: 'Priority', required: false })
  @Column()
  priority: number;
}
