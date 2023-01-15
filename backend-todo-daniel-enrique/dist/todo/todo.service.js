"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const todo_entity_1 = require("./entities/todo.entity");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.todosDatabase = [];
    }
    async create(createTodoDto) {
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
    async createJSON(createTodoDto) {
        return await this.todoRepository.save(createTodoDto);
    }
    async findAll() {
        return await this.todoRepository.find();
    }
    async remove(CreateTodoDto) {
        return await this.todoRepository.delete(CreateTodoDto);
    }
    async findOne(id) {
        const response = await this.todoRepository.findOneBy({ todo: id });
        if (response == null) {
            return "null";
        }
        return response;
    }
    count() {
        return this.todoRepository.count();
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map