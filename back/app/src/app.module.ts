import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TasksModule } from './tasks/tasks.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['./src/sso/.env'],
    }),
    TasksModule,
  ],
})
export class AppModule {}
