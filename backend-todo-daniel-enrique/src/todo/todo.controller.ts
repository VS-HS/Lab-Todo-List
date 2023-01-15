import { Controller, Get, Post, Body, Param, Delete, HttpCode, Response } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todosService: TodoService) { }
  
  @Post(':name') // Create an object and Priority is auto generated
  @HttpCode(201)
  create(@Param('name') name: string) {
    const createTodoDto = new CreateTodoDto();
    createTodoDto.name = name;
    createTodoDto.priority = 2;
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }
  
  @Post() // Create a Todo Item with a JSON object as a request parameer
  createJSON(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Delete()
  remove(@Body() UpdateTodoDto: UpdateTodoDto) {
    return this.todosService.remove(UpdateTodoDto);
  }
  
  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Get('/count')
  count() {
    return this.todosService.count();
  }  
  
}
