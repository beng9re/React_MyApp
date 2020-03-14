import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component{
  state = {
    count:0
  };

  add = () =>{ 
    //현재 값을 가져올수 있음
    this.setState(cur => ({count:cur.count+1}));
    
  }

  delete = () =>{ 
    
    this.setState(cur => ({count:cur.state.count-1}));
  }

  componentDidMount(){
    /* 컴포넌트가 생성 될때 */
    console.log("compnetRender")

  }
  componentDidUpdate(){
    /* 컴포넌트 수정 될때*/
    console.log("componentDidUpdate")
  }

  render(){
      console.log("componetLender")
    return (
        <div>
        <h1>number is : {this.state.count}</h1>
        <button onClick ={this.add}>Add</button>
        <button onClick ={this.delete}>Delete</button>
        </div>
    )
  }
}


export default App;
