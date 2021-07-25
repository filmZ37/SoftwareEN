import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoursesController } from './courses.controller';
import { AppService } from './app.service';
import { CoursesService } from './courses.service';


@Module({
  imports: [],
  controllers: [AppController , CoursesController],
  providers: [AppService , CoursesService],
})
export class AppModule {}
