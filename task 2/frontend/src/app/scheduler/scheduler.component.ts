import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../scheduler.service';

interface Event {
  start_time: number;
  end_time: number;
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})
export class SchedulerComponent implements OnInit {
  events: Event[] = [];
  start_time: number | null = null;
  end_time: number | null = null;
  message: string | null = null;

  constructor(private schedulerService: SchedulerService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.schedulerService.getEvents().subscribe({
      next: (events) => { this.events = events },
      error: (error) => { console.log(error) }
    });
  }

  addEvent() {
    if (this.start_time === null || this.end_time === null) {
      this.message = 'Please enter valid start and end times.';
      return;
    }

    const newEvent: Event = {
      start_time: this.start_time,
      end_time: this.end_time,
    };

    this.schedulerService.addEvent(newEvent).subscribe(
      {
        next: () => {
          this.message = 'Event added successfully.';
          this.loadEvents();
        },
        error: (error) => {
          this.message = error.error.message;
        }
      }
    );
  }
}
