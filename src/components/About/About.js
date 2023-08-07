import React from "react";
// import Team from "./../Team/Team";
import { useSelector, useDispatch } from "react-redux";
import {
  decremented,
  incremented,
  // incrementByAmount,
  // incrementAsync,
  selectCount,
} from "./../../store/reducer/counter";

function About(props) {
  console.log("about props: ", props);
  const count = useSelector(selectCount);
  console.log("count: ", count);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={"styles.row"}>
        <button
          className={"styles.button"}
          style={{ height: "2rem", width: "4rem", border: "1px solid black" }}
          aria-label="Increment value"
          onClick={() => dispatch(incremented())}
        >
          +
        </button>
        <br />
        <span className={""}>{count}</span>
        <br />
        <button
          className={"styles.button"}
          style={{ height: "2rem", width: "4rem", border: "1px solid black" }}
          aria-label="Decrement value"
          onClick={() => dispatch(decremented())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  );
}

export default About;
