import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import TaskI from "./task1/TaskI";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<TaskI />}>
        <Route index="true" element={<TaskI />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
