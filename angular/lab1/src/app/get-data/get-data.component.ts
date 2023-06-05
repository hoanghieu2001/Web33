import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  constructor(private http: HttpServerService) {

  }
  public ngOnInit(): void{

    this.http.getComments().subscribe((data) => {
      console.log('getComments',data);
    })
    this.http.getRandomUsers(10).subscribe((data) => {
      console.log('getRandomUser',data.results);
    })
  }
}
