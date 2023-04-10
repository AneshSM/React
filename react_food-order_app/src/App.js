import "./App.css";
import CartProvider from "./context/CartProvider";
import { MainPage } from "./pages";

function App() {
  return (
    <CartProvider>
      <MainPage />
    </CartProvider>
  );
}

export default App;
