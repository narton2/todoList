import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TasksService]
})
export class DashboardComponent implements OnInit {

  today = new Date().toISOString().substr(0, 10);
  tasks: Task[] = [];
  selectedTask: Task;
  indextaSelectedTask: number;
  indexNewTask:number;
  buttonedit: boolean = true;
  buttonadd: boolean = false;
  hiddenToday: boolean = true;
  hiddenUpComing: boolean = true;

  
constructor(public tasksService: TasksService) { }

ngOnInit() {
  this.getTasks();
  
}

getTasks() {
  this.tasks = this.tasksService.getTasks();
  this.tasks.sort((a, b) => (new Date(a.date)) - (new Date(b.date)));
  this.indexNewTask = this.tasks.length;
}

// add new empty task
addEmptyTask() {
  this.tasks.push({id:this.indexAddTask, name:"", section: "", date:""})
}

// select task who user clicked
onSelect(task: Task,index): void {
  this.selectedTask = task;
  this.indextaSelectedTask = index;
  this.buttonedit = false;
  this.buttonadd = true;
}

// remove the selected task
removeSelectTask () {
  this.selectedTask = false;
  this.buttonedit = true;
  this.buttonadd = false;
}

// delete a selected task
deleteTask(indexTask:number) {
  if (indexTask=== this.indextaSelectedTask) { 
    this.tasksService.deleteTask(this.indextaSelectedTask);
    this.buttonadd = false;
    this.indexNewTask --;
    this.buttonedit = true;
  }
}

// toggle visibility of today's tasks
toogleTasksToday() {
  this.hiddenToday = !this.hiddenToday;
}

// toggle visibility of up coming tasks
toogleTasksUpComing() {
  this.hiddenUpComing = !this.hiddenUpComing
}
}


