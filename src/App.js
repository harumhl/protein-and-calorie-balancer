import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./App.css";
import Calculate from "./calculate";
import DisplayData from "./displayData";

function App() {
  return (
    <div className="App">
      <h1>Protein And Calorie Balancer</h1>
      <Tabs>
        <TabList>
          <Tab>Calculate</Tab>
          <Tab>Data</Tab>
        </TabList>

        <TabPanel>
          <Calculate />
        </TabPanel>
        <TabPanel>
          <DisplayData />
        </TabPanel>
      </Tabs>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
