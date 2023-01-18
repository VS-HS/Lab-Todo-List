import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Response,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todosService: TodoService) {}

  @Post('/:name') // Create an object and Priority is auto generated
  @HttpCode(201)
  create(@Param('name') name: string) {
    const createTodoDto = new CreateTodoDto();
    createTodoDto.todo = name;
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
  @HttpCode(204)
  remove(@Body() CreateTodoDto: CreateTodoDto) {
    this.todosService.remove(CreateTodoDto);
  }

  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Get('/count')
  count() {
    return this.todosService.count();
  }
}
