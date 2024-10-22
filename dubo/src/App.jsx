import "./App.css";
import AppLayout from "./Component/AppLayot";
import ContactForm from "./Component/ContactForm";
import SubmittionData from "./Component/SubmittionData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <ContactForm />,
        },

        {
          path: "/submittionData",
          element: <SubmittionData />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
