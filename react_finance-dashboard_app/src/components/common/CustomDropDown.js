import { customDropDown } from "../../styles";

const CustomDropDown = (props) => {
  const selectHandler = (event) => {
    props.onSelect(event.target.value);
  };
  return (
    <div style={customDropDown.dropDown_container}>
      <label style={(customDropDown.dropDown_Title, props.style.label)}>
        Filter by {props.title}
      </label>
      <select
        style={{ ...customDropDown.dropDown_Option, ...props.style.select }}
        id="DropDown"
        value={props.value}
        onChange={selectHandler}
      >
        <option style={customDropDown.dropDown_Option} value="2021">
          2021
        </option>
        <option style={customDropDown.dropDown_Option} value="2022">
          2022
        </option>
        <option style={customDropDown.dropDown_Option} value="2023">
          2023
        </option>
        <option style={customDropDown.dropDown_Option} value="2024">
          2024
        </option>
        <option style={customDropDown.dropDown_Option} value="2025">
          2025
        </option>
      </select>
    </div>
  );
};
export default CustomDropDown;
