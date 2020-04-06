const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  //get user input
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    //clean what user inputs
    e.target.elements.option.value = "";
  }
  showList();
};

const clear = () => {
  app.options = [];
  showList();
};

const onMakeDecision = () => {
  const number = Math.floor(Math.random() * app.options.length);
  const option = app.options[number];
  alert(option);
  showList();
};

var appRoot = document.querySelector("#app");
const numbers = [55, 101, 1000];

const showList = () => {
  const templateTwo = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        {" "}
        What should I do?{" "}
      </button>
      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button onClick={clear}> Wipe options</button>
        <button>Add Option</button>

        {numbers.map(number => {
          return <p key={number}>{number}</p>;
        })}
      </form>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

showList();
