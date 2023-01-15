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
  // todosDatabase is of type CreateTodoDto[], it has name and priority
  
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {

    // this.todosDatabase.push({
    //   todo : createTodoDto.name,
    //   priority : createTodoDto.priority});
    
    // const response = createTodoDto;
    return await this.todoRepository.save(createTodoDto);
  }

  createJSON(createTodoDto: CreateTodoDto) {
    const response = createTodoDto;
    return response;
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
