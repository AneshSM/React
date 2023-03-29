const CustomDropDown = (props) => {
  const selectHandler = (event) => {
    props.onSelect(event.target.value);
  };
  return (
    <div style={{}}>
      <label style={{}}>Filter by {props.title}</label>
      <select
        style={{}}
        id="DropDown"
        value={props.value}
        onChange={selectHandler}
      >
        <option style={{}} value="2021">
          2021
        </option>
        <option style={{}} value="2022">
          2022
        </option>
        <option style={{}} value="2023">
          2023
        </option>
        <option style={{}} value="2024">
          2024
        </option>
        <option style={{}} value="2025">
          2025
        </option>
      </select>
    </div>
  );
};
export default CustomDropDown;
