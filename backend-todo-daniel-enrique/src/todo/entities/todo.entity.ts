import { ApiProperty } from '@nestjs/swagger';
import { Entity, Repository, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    @ApiProperty({ type: String, description: 'Todo Item', required: false })
    @PrimaryGeneratedColumn()
    todo: string;

    @ApiProperty({ type: Number, description: 'Priority', required: false })
    @Column()
    priority: number;
    
}
