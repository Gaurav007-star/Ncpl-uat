import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster
      toastOptions={{
        success: {
          duration: 2000,
          position: "top-center",
          iconTheme: {
            primary: "#004aad"
          },
          style: {
            backdropFilter: blur("10px"),
            backgroundColor: "#f1f2f2",
            padding: "20px 20px",
            boxShadow: "none"
          }
        },
        error: {
          duration: 2000,
          position: "top-center",
          iconTheme: {
            primary: "#004aad"
          },
          style: {
            backdropFilter: blur("10px"),
            backgroundColor: "#f1f2f2",
            padding: "20px 20px",
            boxShadow: "none"
          }
        }
      }}
    />
  </>
);
