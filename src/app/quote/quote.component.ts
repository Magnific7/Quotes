import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'You only live once, but if you do it right, once is enough.',description:'_Mae West'},
    {id:2,name:'Be the change that you wish to see in the world.',description:'_Mahatma Gandhi'},
    {id:3,name:'In three words I can sum up everything I have learned about life: it goes on.',description:'_Robert Frost'},
    {id:4,name:'No one can make you feel inferior without your consent.',description:'_Eleanor Roosevelt, This is her My Story'},
    {id:5,name:"If you tell the truth, you don't have to remember anything.",description:'_Mark Twain'},
    {id:6,name:'Without music, life would be a mistake.',description:'_Friedrich Nietzsche, Twilight of the Idols'},
   ]
   
   deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  
  numberOfLikes: number = 0;

  likeButtonClick(){
   this.numberOfLikes++;
  }
  dislikeButtonclick(){
  this.numberOfLikes--;
  }
  constructor() { }

  ngOnInit() {
  }

}
