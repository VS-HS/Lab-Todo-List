import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from "typeorm";
import { Todo } from "./entities/todo.entity";
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    todosDatabase: any[];
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    createJSON(createTodoDto: CreateTodoDto): Promise<CreateTodoDto & Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: number): string;
    remove(UpdateTodoDto: UpdateTodoDto): string;
    count(): number;
}
