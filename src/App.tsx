import { HashRouter, Route, Routes } from "react-router-dom";
import routes, { pages } from "@/navigation/routes";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            {[...routes, ...pages].map((r) => (
              <Route key={r.path} path={r.path} Component={r.component} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
