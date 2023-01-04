import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import {TasksService} from './tasks/tasks.service';

@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb://localhost/nest-tutorial1',{
    useNewUrlParser: true
  })],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
