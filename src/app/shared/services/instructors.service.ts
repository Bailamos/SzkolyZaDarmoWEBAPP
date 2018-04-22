import { Injectable } from '@angular/core';
import {Service} from "./service";
import {Instructor} from "../models/instructor.model";

@Injectable()
export class InstructorsService extends Service{

  private INSTRUCTORS_ENDPOINT = this.API_URL + "/instructors/"

  getInstructors() {
    return this.http.get(this.INSTRUCTORS_ENDPOINT);
  }

  getInstructor(instructorId: number) {
    return this.http.get<Instructor>(this.INSTRUCTORS_ENDPOINT + instructorId);
  }

  removeInstructor(instructorId: number) {
    return this.http.delete(this.INSTRUCTORS_ENDPOINT + instructorId, {observe: 'response'});
  }

  activateInstructor(instructorId: number) {
    return this.http.put<Instructor>(this.INSTRUCTORS_ENDPOINT + instructorId, null);
  }

  // createReminder(instructorId: number, reminder: Reminder) {
  //   return this.http.post(this.INSTRUCTORS_ENDPOINT + instructorId + '/reminders', reminder);
  // }
  //
  // getReminders(instructorId: number) {
  //   return this.http.get<Reminder[]>(this.INSTRUCTORS_ENDPOINT + instructorId + '/reminders');
  // }
  //
  // removeReminder(instructorId: number, reminderId: number) {
  //   return this.http.delete(this.INSTRUCTORS_ENDPOINT + instructorId + '/reminders/' + reminderId);
  // }

}
