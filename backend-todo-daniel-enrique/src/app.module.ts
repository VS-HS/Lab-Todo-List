import { Module } from '@nestjs/common';

// import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';

import { Todo } from './todos/entities/todo.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'todo',
    //   entities: [
    //     Todo,
    //   ],
    //   syncronize: true,
    //   autoLoadEntities: true,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
