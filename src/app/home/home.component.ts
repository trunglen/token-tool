import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokens } from "../common/token";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpClient]
})
export class HomeComponent implements OnInit {
  loading =false
  shortenLink = ''
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getToken() {
    const index = Number.parseInt(Math.random() * tokens.length + '')
    const token = tokens[index]
    const tokenLink = 'http://token.mart24h.com' + '/#/token/' + token
    console.log(tokenLink)
    this.loading = true
    const shortenRequestLink = `http://163.44.206.108:3010/shortenLink?url=${tokenLink}`
    let header = new HttpHeaders()
    header.set('Access-Control-Allow-Origin', '*')
    this.http.get(shortenRequestLink).subscribe((res: any) => {
      console.log(res)
      this.shortenLink = res.shortenedUrl;
    },err=>{
      console.log(err)
      this.loading = false
    },()=>{
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
