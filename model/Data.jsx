import React, {Component} from 'react'
import View from '../view/View'

class Data extends Component{
  constructor(props){
    super(props);
    this.state= {

    }
  }
  componentWillMount(){
    // TODO improve fetch here
    // make separate calls , remove  nesting
       return new Promise(async(resolve,reject)=>{
        await fetch('https://deckofcardsapi.com/api/deck/new/shuffle', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'deck_count': 52
        })
      })
      .then( async function(response){
            let data = await response.json();
            return data;
          })
          .then(async json=>{
            console.log("json" , json.deck_id)
            var url = 'https://deckofcardsapi.com/api/deck/'+json.deck_id+
            '/draw/?count=52'
             await fetch(url, {
             method: 'GET',
             headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
             }
           })
           .then( async function(response){
                 let data = await response.json();
                 return data;
               })
               .then(json=>{
                 this.setState({
                   deckId: json.deck_id,
                   cards: json.cards
                 })
               })
      })
    })
  }
  render(){
    console.log(this.state)
    return (<View data = {this.state}/>)
  }
}

export default Data;
