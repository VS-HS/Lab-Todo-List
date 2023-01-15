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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Todo = class Todo {
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Todo Item', required: false }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Todo.prototype, "todo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: 'Priority', required: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Todo.prototype, "priority", void 0);
Todo = __decorate([
    (0, typeorm_1.Entity)()
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map