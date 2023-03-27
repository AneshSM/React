import "../../styles/ComponentStyles/commonStyles/CustomDropDown.css";
const CustomDropDown = (props) => {
  const selectHandler = (event) => {
    props.onSelect(event.target.value);
  };
  return (
    <div id="DropDown_container">
      <label style={props.style.label} className="DropDown_Title">
        Filter by {props.title}
      </label>
      <select
        style={props.style.select}
        id="DropDown"
        value={props.value}
        onChange={selectHandler}
      >
        <option className="DropDown_Option" value="2021">
          2021
        </option>
        <option className="DropDown_Option" value="2022">
          2022
        </option>
        <option className="DropDown_Option" value="2023">
          2023
        </option>
        <option className="DropDown_Option" value="2024">
          2024
        </option>
        <option className="DropDown_Option" value="2025">
          2025
        </option>
      </select>
    </div>
  );
};
export default CustomDropDown;
