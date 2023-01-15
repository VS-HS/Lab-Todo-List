import { CreateTodoDto } from './dto/create-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    todosDatabase: any[];
    create(createTodoDto: CreateTodoDto): Promise<(CreateTodoDto & Todo) | {
        timestamp: string;
        status: number;
        error: string;
        trace: string;
        message: string;
        path: string;
    }>;
    createJSON(createTodoDto: CreateTodoDto): Promise<CreateTodoDto & Todo>;
    findAll(): Promise<Todo[]>;
    remove(CreateTodoDto: CreateTodoDto): Promise<import("typeorm").DeleteResult>;
    findOne(id: string): Promise<Todo | "null">;
    count(): Promise<number>;
}
