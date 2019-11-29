import { Injectable } from '@angular/core';
import  DataJson from './listTask.json';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // import json file and write to variable
  Tasks = DataJson;
  constructor() { }
  
  // Get Tasks from the file
  getTasks() {
    return this.Tasks;
  }

  // Get Task by Id
  getTask(id:number) {
    return this.Tasks[id];
  }

  // Save a Task
  saveTask(name:string, section:string, date:Date, indextTask:number) {
    this.Tasks[indextTask].name = name.charAt(0).toUpperCase() + name.slice(1);
    this.Tasks[indextTask].section = section.charAt(0).toUpperCase() + section.slice(1);
    this.Tasks[indextTask].date = date;
    
  }
  
  //Delete the task from array
  deleteTask(indextTask:number) {
    this.Tasks.splice(indextTask,1) 
  }

}
