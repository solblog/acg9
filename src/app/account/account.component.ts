import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { LoggingService } from '../logging.service'
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 })
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

 
  
/*
constructor(private loggingService: LoggingService,
            private accountService: AccountService){}
*/
constructor(private accountService: AccountService){}

  // Good way to do it. On set is call from out html part of the component
  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    
    this.accountService.updateStatus(this.id,status);
   
    this.accountService.statusUpdate.emit(status);
    // this.loggingService.logStatusChange(status);  
  }

  /*
  // Bad way to do it
  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    console.log('A server status changed, new status: ' + status);
  }
  */

}
