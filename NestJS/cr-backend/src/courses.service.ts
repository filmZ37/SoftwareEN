import { Injectable } from '@nestjs/common';
import {Course} from './interfaces/courses.interface'

@Injectable()
export class CoursesService{
    async findAll(): Promise<Course[]>{
        return [
            {
                id: '100',
                number: '201',
                title: 'Subject1',
        
              },
              {
                id: '200',
                number: '202',
                title: 'Subject2',
              },
              {
                id: '300',
                number: '203',
                title: 'Subject3',
              },

        ];
    }
}