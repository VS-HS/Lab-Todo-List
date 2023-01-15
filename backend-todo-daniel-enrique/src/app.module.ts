import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';

import { Todo } from './todos/entities/todo.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3001,
      username: 'root',
      password: 'root',
      database: 'todo_database',
      entities: [
        Todo,
      ],
      synchronize: true, // This is for development only. Do not use in production.
      autoLoadEntities: true, // This is for development only. Do not use in production.
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
