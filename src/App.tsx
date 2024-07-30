import AppRouter from "./routes/AppRoutes";
import { Navbar } from "./routes/Navbar";

function App() {
  return (
    <div className="min-h-full">
      <div className="bg-gray-800">
        <Navbar />
      </div>
      <div style={{ paddingTop: "64px" }}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
