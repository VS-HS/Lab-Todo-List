import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    create(name: string): CreateTodoDto;
    findAll(): any[];
    createJSON(createTodoDto: CreateTodoDto): CreateTodoDto;
    remove(UpdateTodoDto: UpdateTodoDto): string;
    findOne(id: string): string;
    count(): number;
}
