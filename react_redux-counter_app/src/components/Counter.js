import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";

// Redux toolkit
import { counterActions } from "../store";

// styless
import classes from "./Counter.module.css";

// Functional Component
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toogleShow = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const actionHandler = (event) => {
    if (event.target.id === "increment") {
      dispatch(counterActions.increment());
    }
    if (event.target.id === "decrement") {
      dispatch(counterActions.decrement());
    }
    if (event.target.id === "increase") {
      dispatch(counterActions.increase(5));
    }
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toogleShow && <div className={classes.value}>{counter}</div>}{" "}
      <div className={classes.action_container}>
        <button
          id="increment"
          className={classes.action_buttons}
          onClick={actionHandler}
        >
          Increment
        </button>
        <button
          id="increase"
          className={classes.action_buttons}
          onClick={actionHandler}
        >
          Increment
        </button>
        <button
          id="decrement"
          className={classes.action_buttons}
          onClick={actionHandler}
        >
          Decerement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Class based Component
/*
class Counter extends Component {
  actionHandler(event) {
    if (event.target.id === "increment") this.props.increment();
    if (event.target.id === "decrement") this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div className={classes.action_container}>
          <button
            id="increment"
            className={classes.action_buttons}
            onClick={this.actionHandler.bind(this)}
          >
            Increment
          </button>
          <button
            id="decrement"
            className={classes.action_buttons}
            onClick={this.actionHandler.bind(this)}
          >
            Decerement
          </button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
