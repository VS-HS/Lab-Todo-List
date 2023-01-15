import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todosService;
    constructor(todosService: TodoService);
    create(todo: string): Promise<import("./entities/todo.entity").Todo>;
    findAll(): Promise<import("./entities/todo.entity").Todo[]>;
    createJSON(createTodoDto: CreateTodoDto): Promise<import("./entities/todo.entity").Todo>;
    remove(UpdateTodoDto: UpdateTodoDto): string;
    findOne(id: string): string;
    count(): number;
}
