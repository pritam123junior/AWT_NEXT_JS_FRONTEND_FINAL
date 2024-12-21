import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { NurseModule } from './nurse/nurse.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [NurseModule,TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '21-44946-2',
    database: 'Hospital Management System',//Change to your database name
    autoLoadEntities: true,
    synchronize: true,
    } ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
