import {LoggingService } from './logging.service';
import { EventEmitter } from '@angular/core';


export class AccountService {
    
    public accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    /*
    constructor(private logginService: LoggingService){

    } 
    */ 
   statusUpdate = new EventEmitter<string>();

    addAccount(name: string, status: string){
        this.accounts.push({name:name,status:status});
        // this.logginService.logStatusChange(status);
    }

    updateStatus(id: number, status:string){
        this.accounts[id].status = status;
        // this.logginService.logStatusChange(status);
    }


      
}