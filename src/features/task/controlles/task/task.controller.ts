import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { TaskService } from '../../services/TaskService';
import { AwesomeController } from '../../../../core/base/controller/AwesomeController';
import { TaskDTO } from '../../dto/task.dto';

@Controller('task')
export class TaskController extends AwesomeController{
      constructor(
            private taskService: TaskService
      ) {
            super()
      }

      @Get()
      findAllAction() {
            return this.taskService.findAll()
      }

      @Post()
      createAction(@Body(ValidationPipe) task: TaskDTO) {
            return this.taskService.createNewAction(task)
      }

      @Get('delete')
      deeleteAction() {
            return this.taskService.clear()
      }
}
