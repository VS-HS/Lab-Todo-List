import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
export declare class TodoController {
    private readonly todosService;
    constructor(todosService: TodoService);
    create(name: string): Promise<(CreateTodoDto & import("./entities/todo.entity").Todo) | {
        timestamp: string;
        status: number;
        error: string;
        trace: string;
        message: string;
        path: string;
    }>;
    findAll(): Promise<import("./entities/todo.entity").Todo[]>;
    createJSON(createTodoDto: CreateTodoDto): Promise<(CreateTodoDto & import("./entities/todo.entity").Todo) | {
        timestamp: string;
        status: number;
        error: string;
        trace: string;
        message: string;
        path: string;
    }>;
    remove(CreateTodoDto: CreateTodoDto): void;
    findOne(id: string): Promise<import("./entities/todo.entity").Todo | "null">;
    count(): Promise<number>;
}
