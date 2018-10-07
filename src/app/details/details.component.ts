import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user = null;
  id = null;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    await this.data.getUser(this.id).then(res => (this.user = res));
    console.log(this.user);
  }
}
