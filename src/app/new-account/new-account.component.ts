import { Component, EventEmitter, Output, Input } from '@angular/core';
import { LoggingService } from '../logging.service'
import { AccountService } from '../account.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
  })
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  @Input() account: {name: string, status: string}
  @Input() id: number;
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {
    
  }

  // Good way to do it
  onCreateAccount(accountName:string, accountStatus: string){
    this.accountService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(status);
  }

  // Bad way to do it
  /*
  onCreateAccount(accountName: string, accountStatus: string) {
  
    // Purpose is to pass the information to the parent
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
  
    this.loggingService.logStatusChange(accountStatus);

  }
  */

}
