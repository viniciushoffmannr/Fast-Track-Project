import PageRoutes from "./routes";
import { BrowserRouter, Router } from "react-router-dom";
import Header from "./components/Header";

import CommentsProvider from "./contexts/CommentsContext";

function App() {
  return (
    <CommentsProvider>
      <BrowserRouter>
        <Header />
        <PageRoutes />
      </BrowserRouter>
    </CommentsProvider>
  );
}

export default App;
