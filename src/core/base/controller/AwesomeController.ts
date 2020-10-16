import { Get, Param, Req } from "@nestjs/common";
import { Request } from 'express';

export class AwesomeController {
      @Get()
      async findAll(@Req() request: Request) {
            return "Sdf";
      }

      @Get(':id')
      findOne(@Param() id: number) {
            return "hello I am param";
      }
}
