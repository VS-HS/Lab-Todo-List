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
      host: process.env.TYPEORM_HOST || 'localhost',
      port: +process.env.TYPEORM_PORT || 3001,
      username: process.env.TYPEORM_USERNAME || 'user',
      password: process.env.TYPEORM_PASSWORD || '1234',
      database: process.env.TYPEORM_DATABASE || 'todo_database',
      entities: [Todo],
      synchronize: true, // This is for development only. Do not use in production.
      autoLoadEntities: true, // This is for development only. Do not use in production.
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
