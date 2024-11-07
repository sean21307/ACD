import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-component',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  @Input() job = "";
  @Output() jobUpdated = new EventEmitter<string>();
  jobList: string[] = ["Teacher", "Firefighter", "Accountant", "Nurse", "Dentist", "Actor", "Author"];

  getRandomJob() {
    this.updateJob(this.jobList[Math.floor(Math.random() * this.jobList.length)]);
  }

  updateJob(newJob: string) {
    this.job = newJob;
    this.jobUpdated.emit(newJob);
  }
}

