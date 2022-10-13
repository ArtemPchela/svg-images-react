import Import from "./components/Import/Import";
import RequireImport from "./components/requireImport/RequireImport";
import ReactComponentImport from "./components/reactComponntImport/ReactComponentImport";
import ComponentImport from "./components/componentImport/ComponentImport";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Import/>
        <RequireImport/>
        <ReactComponentImport/>
        <ComponentImport/>
      </header>
    </div>
  );
}

export default App;
