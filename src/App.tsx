import { Toaster } from "./components/ui/toaster";
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
