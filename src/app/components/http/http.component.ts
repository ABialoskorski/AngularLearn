import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Service/http-service.service';
import {Post} from '../Post';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }
  public MyPosts = [];
  public MyPost = '';
  public MyUserPosts = [];


  ngOnInit() {
  }

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      this.MyPosts = posts;
      console.log(posts);
    });
  }
  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      this.MyPost = post;
      console.log(post);
    });
  }
  getPostByUser() {
    this.httpService.getPostByUser(2).subscribe(posts => {
      this.MyUserPosts = posts;
      console.log(posts);
    });
  }
  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'mój post',
      body: 'Pierwszy post w Angularze ;)'
    });

    this.httpService.addPost(p).subscribe(post => {
      console.log(post);
      alert('Wysłano post: ' + post.title + ' ' +post.body);
    });
  }
}
