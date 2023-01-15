import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {

  todosDatabase = [];
  // todosDatabase is of type CreateTodoDto[], it has name and priority
  
  create(createTodoDto: CreateTodoDto) {

    this.todosDatabase.push({
      todo : createTodoDto.name,
      priority : createTodoDto.priority});
    
    const response = createTodoDto;
    return response;
  }

  createJSON(createTodoDto: CreateTodoDto) {
    const response = createTodoDto;
    return response;
  }

  findAll() {
    const response = this.todosDatabase;
    return response;
  }

  findOne(id: number) {
    // return id;
    return `This action returns a #${id} todo`;
  }

  remove(UpdateTodoDto: UpdateTodoDto) {
    return `This action removes a #${UpdateTodoDto} todo`;
  }

  count() {
    return this.todosDatabase.length;
  }
}
