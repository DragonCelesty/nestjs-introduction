import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {Task} from './interfaces/Task';
import {TasksService} from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService){
  }
  @Get()
  getTasks(): Promise<Task[]>{
    return this.taskService.getTasks()
  }
  @Get(':taskId')
  getTask(@Param('taskId') taskId: string){
    return this.taskService.getTask(taskId)
  }
  @Post()
  createTask(@Body() task: CreateTaskDto):Promise<Task>{
    return this.taskService.createTask(task)
  }
  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id):string{
    console.log(task)
    console.log(id)
    return `Updating a task`;
  }
  @Delete(':id')
  deleteTask(@Param('id') id): string{
    console.log(id);
    return `Deleting a task number:${id}`;
  }
}

