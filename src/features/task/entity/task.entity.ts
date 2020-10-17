import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TaskEntity {
      @PrimaryGeneratedColumn()
      id: number

      @Column()
      title: string

      @Column()
      status: number

      @Column()
      description: string

      @Column()
      assign: string
}