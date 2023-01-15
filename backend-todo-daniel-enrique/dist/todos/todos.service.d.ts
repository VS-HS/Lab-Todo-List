import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    todosDatabase: any[];
    create(createTodoDto: CreateTodoDto): CreateTodoDto;
    createJSON(createTodoDto: CreateTodoDto): CreateTodoDto;
    findAll(): any[];
    findOne(id: number): string;
    remove(UpdateTodoDto: UpdateTodoDto): string;
    count(): number;
}
