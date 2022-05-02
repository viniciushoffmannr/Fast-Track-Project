import PageRoutes from "./routes";
import { Router, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";

import history from "./services/history";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <PageRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
