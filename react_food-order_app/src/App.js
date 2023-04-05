import "./App.css";
import { AppHeader, CustomButton, CustomCard } from "./global/components";
const classes = {
  button_Classes: "",
  card_Classes: "",
};
function App() {
  return (
    <div className="App">
      {/* <CustomButton
        style={{ backgroundColor: "#8a2b06", color: "#ffff" }}
        classes={classes}
      >
        button
      </CustomButton> */}
      {/* <CustomCard classes={classes}>content</CustomCard> */}
      <AppHeader />
    </div>
  );
}

export default App;
