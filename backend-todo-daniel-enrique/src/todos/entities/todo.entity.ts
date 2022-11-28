import { ApiProperty } from '@nestjs/swagger';
import { Repository, Column, PrimaryGeneratedColumn } from "typeorm";

export class Todo {
    @ApiProperty({ type: String, description: 'Todo Item', required: false })
    @PrimaryGeneratedColumn()
    todo: string;

    @ApiProperty({ type: Number, description: 'Priority', required: false })
    @Column()
    priority: number;
    
}
