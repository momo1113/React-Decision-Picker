import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button--link" onClick={props.handleDeleteOptions}>
          Remove All
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="notes">Please enter some message</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={index}
          optionText={option}
          removeOption={props.removeOption}
          count={index + 1}
        />
      ))}
    </div>
  );
};

export default Options;
