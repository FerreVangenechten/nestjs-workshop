import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TodoModule, MongooseModule.forRoot('mongodb+srv://nestjs-workshop:FerVan123@cluster0.lpjni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
