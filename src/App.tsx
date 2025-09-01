import { JSX } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

import { Calculate } from "./calculate";
import { DisplayData } from "./displayData";
import { Formulas } from "./formulas";
import "./App.css";

const routes: {
  label: string;
  path: `/${string}`;
  Element: () => JSX.Element;
}[] = [
  {
    label: "Calculate ingredients",
    path: "/calculate",
    Element: Calculate,
  },
  { label: "Data", path: "/data", Element: DisplayData },
  { label: "Formulas", path: "/formulas", Element: Formulas },
];

function TabsAndRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedIndex = routes.findIndex(
    (tab) => tab.path === location.pathname
  );

  const handleSelect = (index: number) => {
    navigate(routes[index]!.path);
  };

  return (
    <div className="App">
      <Tabs
        selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
        onSelect={handleSelect}
      >
        <TabList>
          {routes.map((tab) => (
            <Tab key={tab.path} onClick={() => navigate(tab.path)}>
              {tab.label}
            </Tab>
          ))}
        </TabList>

        {routes.map(({ Element }) => (
          <TabPanel key={Element.name}>
            <Element />
          </TabPanel>
        ))}
      </Tabs>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TabsAndRouter />
    </BrowserRouter>
  );
}
