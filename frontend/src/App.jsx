import AppRouter from "./routes/AppRouter";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <AppRouter />
    </>
  );
}

export default App;
