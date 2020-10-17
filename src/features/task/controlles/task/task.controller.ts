import { Controller } from '@nestjs/common';
import { TaskService } from '../../services/TaskService';
import { AwesomeController } from '../../../../core/base/controller/AwesomeController';

@Controller('task')
export class TaskController extends AwesomeController{
      constructor(
            private taskService: TaskService
      ) {
            super()
      }
}
