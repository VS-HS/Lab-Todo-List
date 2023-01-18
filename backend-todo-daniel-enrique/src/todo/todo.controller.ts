import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('todos')
export class TodoController {
  constructor(private readonly todosService: TodoService) {}

  /* POST /todos/{name} */
  @Post('/:name') // Create an object and Priority is auto generated
  @HttpCode(201)
  create(@Param('name') name: string) {
    const createTodoDto = new CreateTodoDto();
    createTodoDto.todo = name;
    createTodoDto.priority = 2;
    return this.todosService.create(createTodoDto);
  }

  /* GET /todos/ */
  @Get()
  @ApiOperation({
    summary: 'Returns a list of ToDo items',
  })
  findAll() {
    return this.todosService.findAll();
  }

  /* POST /todos */
  @Post()
  @ApiOperation({
    summary: 'Creates a Todo Item with a JSON object as request parameter',
  })
  @ApiBody({
    schema: {
      properties: {
        todo: { type: 'string' },
        priority: { type: 'integer' },
      },
    },
  })
  createJSON(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  /* DELETE /todos */
  @Delete()
  @ApiBody({
    schema: {
      properties: {
        todo: { type: 'string' },
        priority: { type: 'integer' },
      },
    },
  })
  @HttpCode(204)
  remove(@Body() CreateTodoDto: CreateTodoDto) {
    this.todosService.remove(CreateTodoDto).then(() => console.log('Deleted'));
  }

  /* GET /todos/id/{id} */
  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  /* GET /todos/count */
  @Get('/count')
  count() {
    return this.todosService.count();
  }
}
