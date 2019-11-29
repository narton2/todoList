import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../task'
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-modyficationtask',
  templateUrl: './modyficationtask.component.html',
  styleUrls: ['./modyficationtask.component.scss'],
  providers: [TasksService]
})
export class ModyficationtaskComponent implements OnInit {
  task: Task;
  

taskname = <HTMLInputElement> document.getElementById("#taskname");
tasksection = <HTMLInputElement> document.getElementById("#tassection");
taskdate = <HTMLInputElement> document.getElementById("#taskdate");
taskSaved = false;
// isVisible=true;
buttonadd = false;

buttontext= "Dodaj";
today:Date = new Date().toISOString().substr(0, 10);
newTask: string ;
newTask1: string;
actualIndexTask: string;

// editTask:string;
  
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private location: Location) { }

  ngOnInit(): void {
    this.getTask();
    
  }


  
  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.task = this.tasksService.getTask(id)
    this.actualIndexTask = id;
    console.log(this.actualIndexTask);
  }
  


  goBack():void {
      if (this.taskSaved) {
      this.location.back();
    } else {
      this.tasksService.deleteTask(this.actualIndexTask);
      this.location.back();
    }
  }

  saveTask(name,section,date) {
    if (name ===  "" ) {
      alert ('Please write correct name !')
    } else if (date ===  "" || date < this.today ) {
      alert ('The task cannot be with \n a date lower than today  or empty!')
    } else {
        this.tasksService.saveTask(name,section,date,this.actualIndexTask);
        this.taskSaved = true;
        this.goBack(); 
        console.log(this.actualIndexTask);
     }
  }

  liveSortTasks() {
    this.tasksService.Tasks.sort((a, b) => (new Date(a.date)) - (new Date(b.date)));
  }
  

}
