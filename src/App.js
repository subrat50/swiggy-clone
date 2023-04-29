import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import store from "./util/store";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
