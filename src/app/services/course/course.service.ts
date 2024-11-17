import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icourse, ICoursesCat, IStudentProgress } from '@app/interface';
import { HttpService } from '@app/service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpService) { }

  get courses():Observable<Icourse[]>{
    return this.http.get<Icourse[]>('courses')
  }

  get coursesCategories():Observable<ICoursesCat[]>{
    return this.http.get<ICoursesCat[]>('course-category')
  }

  get studentProgressCourse():Observable<IStudentProgress[]>{
    return this.http.get<IStudentProgress[]>('student-progress-course')
  }
}
