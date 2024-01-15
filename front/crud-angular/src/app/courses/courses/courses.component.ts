import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(private courseService: CoursesService) {
    this.courses = this.courseService.list();
  }

  ngOnInit(): void {

  }

}
