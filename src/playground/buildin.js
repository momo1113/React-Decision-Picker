//1.set up a class which extends from the react Components
// 2. fill the render function()
//3. fill the return function(which contains JSX )
//4. render to REACT DOM
//5. build in constructor
//6.set up event
//7. create onClick function
//8. binding function inside constructure

class Buildin extends React.Component {
  constructor(props) {
    super(props);

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  toggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggles</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide details" : "show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p> Hello It's me</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Buildin />, document.getElementById("app"));
