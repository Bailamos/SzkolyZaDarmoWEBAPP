import {Service} from "./service";
import {Subject} from "rxjs/Subject";
import {Instructor} from "../models/instructor.model";
import {SaveInstructorResource} from "../models/resources/save-instructor-resource.model";


export class AuthService extends Service {

  private instructor: Instructor = null;
  public instructorChanged: Subject<Instructor> = new Subject();

  public register(instructor: SaveInstructorResource) {
    return this.http.post(this.API_URL + '/auth/register', instructor);
  }

  public logIn(email: string, password: string) {
    return this.http.get(this.API_URL + '/auth/login?' + "email=" + email + "&password=" + password);
  }

  getInstructor() {
    if(this.instructor == null) {
      this.instructor = JSON.parse(localStorage.getItem("instructor"));
      this.instructorChanged.next(this.instructor);
    }
    return this.instructor;
  }

  setInstructor(instructor: Instructor) {
    this.instructor = instructor;
    localStorage.setItem("instructor", JSON.stringify(this.instructor));
    this.instructorChanged.next(this.instructor);
  }
}
