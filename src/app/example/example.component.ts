import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-component',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  // Defines an input variable "job" which allows the parent 
  // element (AppComponent) to pass in a value to it
  @Input() job = "";

  // Creates an output EventEmitter variable, which allows
  // the children elements to notify parent elements of changes to its state
  @Output() jobUpdated = new EventEmitter<string>();
  jobList: string[] = ["Teacher", "Firefighter", "Accountant", "Nurse", "Dentist", "Actor", "Author"];

  // Picks a random job from jobList
  getRandomJob() {
    this.updateJob(this.jobList[Math.floor(Math.random() * this.jobList.length)]);
  }

  // Sets the job variable and notifies others with emit()
  updateJob(newJob: string) {
    this.job = newJob;
    this.jobUpdated.emit(newJob);
  }
}

