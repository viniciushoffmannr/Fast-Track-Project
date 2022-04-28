import PageRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
