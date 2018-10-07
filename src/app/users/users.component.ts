import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']

})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private data: DataService) { }

  async ngOnInit() {
    await this.data.getUsers().then(
      data => this.users = [data][0]
    )
  }

}
