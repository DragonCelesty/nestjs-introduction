import { Module } from '@nestjs/common';
import {TasksController} from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import {TaskSchema} from './schema/task.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Task', schema: TaskSchema}
  ])],
  controllers: [TasksController],
  providers: [TasksService],
  exports:[MongooseModule]
})
export class TasksModule {}
