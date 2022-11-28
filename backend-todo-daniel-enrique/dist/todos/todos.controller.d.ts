import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): string;
    create(createTodoDto: CreateTodoDto): string;
    findOne(id: string): string;
    update(id: string, updateTodoDto: UpdateTodoDto): string;
    remove(id: string): string;
}
