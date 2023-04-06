import "./App.css";
import { AppHeader, AppMain } from "./layouts";
// const classes = {
//   button_Classes: "",
//   card_Classes: "",
// };
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
      <AppMain />
    </div>
  );
}

export default App;
