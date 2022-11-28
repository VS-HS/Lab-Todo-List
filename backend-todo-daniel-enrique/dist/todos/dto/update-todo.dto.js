"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_todo_dto_1 = require("./create-todo.dto");
class UpdateTodoDto extends (0, swagger_1.PartialType)(create_todo_dto_1.CreateTodoDto) {
}
exports.UpdateTodoDto = UpdateTodoDto;
//# sourceMappingURL=update-todo.dto.js.map