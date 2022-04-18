/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { Connection, createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { createUsers } from './createUsers.crud';
import { UserEntity } from './user.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(AppService);
  console.log(appService.getHello());
}
bootstrap();
const app = async () => {
  const connection: Connection = await createConnection({
    type: 'mysql',
    entities: [
      UserEntity,
    ],
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'testseed',
    synchronize:true,
  })

  await connection.synchronize(false).catch(console.error)
  await createUsers(connection)
}

app()