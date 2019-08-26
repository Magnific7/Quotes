import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);

  }
  upVotes:number;
  downVotes:number;
  constructor() { 
    this.upVotes=0;
    this.downVotes=0;
  }
  likeVote(){
    this.upVotes+=1;
    this.downVotes+=0;
  }
  dislikeVote(){
    this.downVotes+=1;
  }

  ngOnInit() {
  }

}
