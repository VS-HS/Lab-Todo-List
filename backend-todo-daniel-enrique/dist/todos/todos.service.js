"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = class TodosService {
    constructor() {
        this.todosDatabase = [];
    }
    create(createTodoDto) {
        this.todosDatabase.push({
            todo: createTodoDto.name,
            priority: createTodoDto.priority
        });
        const response = createTodoDto;
        return response;
    }
    createJSON(createTodoDto) {
        const response = createTodoDto;
        return response;
    }
    findAll() {
        const response = this.todosDatabase;
        return response;
    }
    findOne(id) {
        return `This action returns a #${id} todo`;
    }
    remove(UpdateTodoDto) {
        return `This action removes a #${UpdateTodoDto} todo`;
    }
    count() {
        return this.todosDatabase.length;
    }
};
TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map