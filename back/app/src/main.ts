import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  })

  const PORT: string = process.env.DEV_PORT || '5000'

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT)
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
