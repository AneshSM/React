import styles from "../../styles/components/CustomComponentStyles.module.css";
const CustomDropDown = (props) => {
  const selectHandler = (event) => {
    props.onSelect(event.target.value);
  };
  return (
    <div className={styles.dropdown_container}>
      <label className={styles.dropdown_label}>Filter by {props.title}</label>
      <select
        className={styles.dropdown}
        value={props.value}
        onChange={selectHandler}
      >
        <option className={styles.dropdown_option} value="2021">
          2021
        </option>
        <option className={styles.dropdown_option} value="2022">
          2022
        </option>
        <option className={styles.dropdown_option} value="2023">
          2023
        </option>
        <option className={styles.dropdown_option} value="2024">
          2024
        </option>
        <option className={styles.dropdown_option} value="2025">
          2025
        </option>
      </select>
    </div>
  );
};
export default CustomDropDown;
