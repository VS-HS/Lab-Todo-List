"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('OpenAPI definition')
        .setDescription('by Daniel Lastanao and Enrique Subías')
        .setVersion('1.0')
        .addServer('http://localhost:8080')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(8080);
}
bootstrap().then(() => console.log('Server started'));
//# sourceMappingURL=main.js.map