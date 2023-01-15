import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from './todo/entities/todo.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3001,
      username: 'user',
      password: '1234',
      database: 'todo_database',
      entities: [
        Todo,
      ],
      synchronize: true, // This is for development only. Do not use in production.
      autoLoadEntities: true, // This is for development only. Do not use in production.
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
