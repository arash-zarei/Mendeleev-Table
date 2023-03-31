import React from "react";

// Components
import BodyTable from "./components/BodyTable";

const App = () => {
  return (
    <div className="App w-[100%] h-[100vh] pt-5">
        <h1 className="h1 text-center font-primary">جدول نتاوبی</h1>
      <div className="container h-[80vh] mx-auto overflow-x-auto">
        <BodyTable />
      </div>
    </div>
  );
};

export default App;
