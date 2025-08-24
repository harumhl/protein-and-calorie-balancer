import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./App.css";
import { Calculate } from "./calculate";
import { DisplayData } from "./displayData";
import { Formulas } from "./formulas";

export default function App() {
  return (
    <div className="App">
      <h1>Protein And Calorie Balancer</h1>
      <Tabs>
        <TabList>
          <Tab>Calculate ingredients</Tab>
          <Tab>Data</Tab>
          <Tab>Formulas</Tab>
        </TabList>

        <TabPanel>
          <Calculate />
        </TabPanel>
        <TabPanel>
          <DisplayData />
        </TabPanel>
        <TabPanel>
          <Formulas />
        </TabPanel>
      </Tabs>
      <ToastContainer theme="colored" />
    </div>
  );
}
