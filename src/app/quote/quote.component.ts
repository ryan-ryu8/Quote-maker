import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl:'./quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'If you get tired learn to rest not to quit','blackquotedaily','BDQ',new Date(2020, 16,6),0,0),
  ];

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.completeDate = new Date (quote.completeDate)
    this.quotes.unshift(quote)
  }
  deleteQuote(isComplete){
    if (isComplete) {
      let toDelete = confirm('Do you really want  to delete this quote?')
  
}
  }
  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  like(index){
    this.quotes[index].upvote +=1;
  }
  unlike (index){
    this.quotes[index].downvote +=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
