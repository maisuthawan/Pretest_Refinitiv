import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import * as _ from 'lodash'

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.scss']
})
export class Q2Component implements OnInit {

  lists : any[] = []
  alllists : any[] = []
  text : string = ''
  constructor(
    private api : ApiService,
  ) { }

  ngOnInit(): void {
    this.getVals()
  }
  async getVals() {
    this.lists=[]
    let res : any = await this.api.showData()
    if(res.length) {
      this.alllists = _.cloneDeep(res)
      this.lists = _.cloneDeep(res)
    }
  }
  search(val?:string){
    val = this.text
    this.lists=[]
    this.lists=this.alllists.filter(function (name){return `${name.toLowerCase()}`.includes(val.toLowerCase())})
  }
}
