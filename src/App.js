import logo from "./logo.svg";
import "./App.css";
// import Home from "./Pages/Home";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";

const appRoter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRoter} />
      </Provider>
    </div>
  );
}

export default App;
