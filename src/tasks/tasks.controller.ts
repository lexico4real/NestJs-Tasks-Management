/* eslint-disable prettier/prettier */
import { Delete, Param } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getOne(@Param('id') id): Task {
    return this.tasksService.getOne(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
  @Delete('id')
  deleteTask(@Param('id') id): Task {
    return this.tasksService.deleteTask(id);
  }
}
