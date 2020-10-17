import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class TaskDTO {
      @IsNumber()
      @IsNotEmpty()
      status: number

      @IsString()
      @IsNotEmpty()
      title: string

      @IsString()
      @IsNotEmpty()
      description: string

      @IsString()
      @IsNotEmpty()
      assign: string
}