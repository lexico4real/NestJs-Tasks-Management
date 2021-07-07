/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    // {
    //   id: uuid(),
    //   title: 'testing 1',
    //   description: 'Testing description',
    //   status: TaskStatus.OPEN,
    // },
    // {
    //   id: uuid(),
    //   title: 'testing 2',
    //   description: 'Testing description',
    //   status: TaskStatus.OPEN,
    // },
    // {
    //   id: uuid(),
    //   title: 'testing 3',
    //   description: 'Testing description',
    //   status: TaskStatus.OPEN,
    // },
    // {
    //   id: uuid(),
    //   title: 'testing 4',
    //   description: 'Testing description',
    //   status: TaskStatus.OPEN,
    // },
    // {
    //   id: uuid(),
    //   title: 'testing 5',
    //   description: 'Testing description',
    //   status: TaskStatus.OPEN,
    // },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  updateTaskStatus(id: string, status: TaskStatus){
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
