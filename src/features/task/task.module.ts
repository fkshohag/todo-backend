import { Module } from '@nestjs/common';
import { TaskController } from './controlles/task/task.controller';
import { TaskService } from './services/TaskService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entity/task.entity';

@Module({
      imports:[
            TypeOrmModule.forFeature([TaskEntity])
      ],
      controllers:[TaskController],
      providers:[TaskService]
})
export class AwesomeModule {}
