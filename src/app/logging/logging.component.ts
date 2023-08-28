import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent {
constructor(public loggingService: LoggingService) {}
}
