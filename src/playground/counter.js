class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleResetOne = this.handleResetOne.bind(this);

    this.state = {
      count: props.count
    };
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    //change state
    //return a function call
    this.setState(prevState => {
      //return a funtion call
      return {
        count: prevState.count - 1
      };
    });
  }

  handleResetOne() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Count :{this.state.count} </h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleResetOne}> reset </button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};
ReactDOM.render(<Counter />, document.getElementById("app"));
