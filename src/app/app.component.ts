import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

accounts: {name: string,status: string} [] = [];

constructor(private accountService: AccountService){

}

ngOnInit(){
  // Initialize the array that it will pass to the component account
  // Data is coming from a server that store the data, usually we can use
  // json file in a .ts
  this.accounts = this.accountService.accounts;
}

/*
   accounts = [
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

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
*/

}
