/* eslint-disable prettier/prettier */
import { Param } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
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
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(title, description);
    // console.log('Title: ', title);
    // console.log('Description: ', description);
  }
  // createTask(@Body() body) {
  //   console.log('Body: ', body);
  // }
}
