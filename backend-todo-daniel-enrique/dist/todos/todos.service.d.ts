import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    create(createTodoDto: CreateTodoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTodoDto: UpdateTodoDto): string;
    remove(id: number): string;
}
