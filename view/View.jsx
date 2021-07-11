import React, {Component} from 'react'

class View extends Component{
  constructor(props){
    super(props);
    this.state= {
    }
  }

  render(){
    console.log("props", this.props.data)
    // TODO:  add all View
    return (<>H2</>)
  }
}

export default View;
