import PageRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";

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
