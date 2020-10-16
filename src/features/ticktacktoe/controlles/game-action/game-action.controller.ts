import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { ActionService } from '../../services/ActionService';
import { NewActionDTO } from '../../dto/newaction.dto';
import { AwesomeController } from '../../../../core/base/controller/AwesomeController';

@Controller('game-action')
export class GameActionController extends AwesomeController{
      constructor(
            private action: ActionService
      ) {
            super()
      }
}
