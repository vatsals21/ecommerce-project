import { HomeScreen } from "./screens";
import { CollectionsPage } from "./components";

function App() {
  return (
    <div className="bg-gray-100 h-screen min-w-full">
      <HomeScreen />
      <CollectionsPage />
    </div>
  );
}

export default App;
