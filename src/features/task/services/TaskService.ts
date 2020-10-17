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

      async createNewAction(o:TaskDTO): Promise<TaskEntity> {
            const a = this.actionRepository.create(o)
            await this.actionRepository.save(o)
            return a
      }

      async clear() {
            return await this.actionRepository.clear()
      }
}