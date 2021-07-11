import React, {Component} from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class View extends Component{
  constructor(props){
    super(props);
    this.state= {
      data: this.props.data
    }
  }
  shouldComponentUpdate(nextProps){
    return nextProps.data !== this.state.data;
}
  componentDidUpdate(props){
    console.log("cdu")

    if(JSON.stringify(this.props.data) !== JSON.stringify({})){
      let cards = [];
      for(let i=0;i<this.props.data.cards.length;i++){
        cards.push(
          <Card>
          <Card.Content>
            <Title>{this.props.data.cards[i].suit}</Title>
            <Paragraph>{this.props.data.cards[i].value}</Paragraph>
          </Card.Content>
          <LazyLoadImage
          height={200}
          width={200}
          effect="blur"
          src={this.props.data.cards[i].image}
           />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        )
      }
      this.setState({
        cards: cards,
        data: this.props.data
      })
    }
}

  render(){
  //  console.log("props", this.props.isEmptyObject({}))
    // TODO:  add all View

    if( JSON.stringify(this.props.data) !== JSON.stringify({}) ){
      console.log("props", this.props)
      return (<>{this.state.cards}</>)
  }
  else{
    //console.log("props", this.props.data)
    return(<>H2</>)
  }
  }
}

export default View;
