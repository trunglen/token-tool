import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

   tokenLink = ''
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      console.log(res)
      this.tokenLink = res.id
    })
  }

}
