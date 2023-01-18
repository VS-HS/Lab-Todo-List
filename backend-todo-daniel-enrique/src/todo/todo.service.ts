import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    if (createTodoDto.todo == null) {
      return {
        timestamp: new Date().toISOString(),
        status: 400,
        error: 'Bad Request',
        trace: 'backend-todo-daniel-enrique/src/todo/todo.service.ts',
        message: 'Required request body is missing',
        path: '/todos/',
      };
    }
    return await this.todoRepository.save(createTodoDto);
  }

  async createJSON(createTodoDto: CreateTodoDto) {
    return await this.todoRepository.save(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async remove(CreateTodoDto: CreateTodoDto) {
    return await this.todoRepository.delete(CreateTodoDto);
  }

  async findOne(id: string) {
    const response = await this.todoRepository.findOneBy({ todo: id });
    if (response == null) {
      return 'null';
    }
    return response;
  }

  count() {
    // return this.todosDatabase.length;
    return this.todoRepository.count();
  }
}
