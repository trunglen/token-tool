import { Component, OnInit } from '@angular/core';
import { tokens } from '../common/token';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HttpClient]
})
export class MainComponent implements OnInit {

  loading = false
  shortenLink = ''
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getToken() {
    const index = Number.parseInt(Math.random() * tokens.length + '')
    const token = tokens[index]
    this.loading = true
    const shortenRequestLink = `http://163.44.206.108:3010/shortenLink?token=${token}`
    this.http.get(shortenRequestLink).subscribe((res: any) => {
      console.log(res)
      this.shortenLink = res.shortenedUrl;
    }, err => {
      console.log(err)
      this.loading = false
    }, () => {
      this.loading = false
    })
  }
  
  getHost() {
    var protocol = location.protocol;
    var slashes = protocol.concat("//");
    var host = slashes.concat(window.location.hostname);
    return host
  }
}
