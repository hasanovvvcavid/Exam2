import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store, { persistor } from "./redux/store/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
