import { InjectRepository } from "@nestjs/typeorm";
import { TaskDTO } from "src/features/task/dto/task.dto";
import { Repository } from 'typeorm';
import { TaskEntity } from '../entity/task.entity';

export class TaskService {      
      constructor(
            @InjectRepository(TaskEntity)
            public actionRepository: Repository<TaskEntity>,
      ) {
            
      }
      
      async findAll(): Promise<TaskEntity[]> {
            return await this.actionRepository.find();
      }

      async createNewAction(task:TaskDTO): Promise<TaskEntity> {
            const newTask  = this.actionRepository.create(task)
            await this.actionRepository.save(newTask)
            return newTask
      }

      async clear() {
            return await this.actionRepository.clear()
      }
}