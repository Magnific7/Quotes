import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'You only live once, but if you do it right, once is enough.', '_Mae West','Mag',new Date(2019,6,7)),
    new Quote(2,'Be the change that you wish to see in the world.','_Mahatma Gandhi','Mag',new Date(2019,9,7)),
    new Quote(3,'In three words I can sum up everything I have learned about life, it goes on.','_Robert Frost','Mag',new Date(2019,3,7)),
    new Quote(4,'No one can make you feel inferior without your consent.','_Eleanor Roosevelt','Mag',new Date(2019,7,10)),
    new Quote(5,"If you tell the truth, you don't have to remember anything.",'_Mark Twain','Mag',new Date(2019,6,8)),
    new Quote(6,'Without music, life would be a mistake.','_Friedrich Nietzsche','Mag',new Date(2019,4,8)),
  ]
   addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
   deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].description}'quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
 
  constructor() { }

  ngOnInit() {
  }

}
