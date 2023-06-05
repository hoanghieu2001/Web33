import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {
  constructor(private http: HttpServerService) { }
  public ngOnInit(): void {
    const payload = { body: 'Đây là message số 5', postID: 1 };
    this.http.postComment(payload).subscribe((data) => {
      console.log('postComment', data);
    })
    // this.http.postComment(payload)
  }
}
