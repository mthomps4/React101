import React from 'react';

// var Counter = React.createClass({
//   propTypes: {},
//
//   getInitialState: function() {
//     return{
//       score: 0,
//     }
//   },
//
//   incrementScore: function(event){
//     this.setState({
//       score: (this.state.score +1),
//     });
//   },
//
//   decrementScore: function(event){
//     this.setState({
//       score: (this.state.score -1),
//     });
//   },
//
//   render: function(){
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
//         <div className="counter-score">{this.state.score}</div>
//         <button className="counter-action increment" onClick={this.incrementScore}>+</button>
//       </div>
//     );
//   }
// });

const Counter = (props) =>
    <div className="counter">
      <button className="counter-action decrement" onClick={function(){props.onChange(-1);}}>-</button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment" onClick={function(){props.onChange(+1);}}>+</button>
    </div>
;

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default Counter;
