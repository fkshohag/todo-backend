import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { AwesomeModule } from './features/task/task.module';
import { getDefaultDatabaseOption } from './configs/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getDefaultDatabaseOption() as TypeOrmModuleOptions),
    AwesomeModule
  ]
})
export class AppModule {}
