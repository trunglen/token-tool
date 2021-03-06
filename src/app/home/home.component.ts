import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokens } from "../common/token";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpClient]
})
export class HomeComponent implements OnInit {
  loading = false
  shortenLink = ''
  token = ''
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res => this.token = res.token)
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
