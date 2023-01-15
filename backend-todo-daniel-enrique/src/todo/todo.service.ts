import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Todo} from "./entities/todo.entity";

@Injectable()
export class TodoService {

  constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) { }

  todosDatabase = [];
  // todosDatabase is of type CreateTodoDto[], it has todo and priority
  
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.save(createTodoDto);
  }

  async createJSON(createTodoDto: CreateTodoDto) {
    return await this.todoRepository.save(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  findOne(id: number) {
    // return id;
    return `This action returns a #${id} todo`;
  }

  remove(UpdateTodoDto: UpdateTodoDto) {
    return `This action removes a #${UpdateTodoDto} todo`;
  }

  count() {
    // return this.todosDatabase.length;
    return 100;
  }
}
