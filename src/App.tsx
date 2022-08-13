import { QueryClient, QueryClientProvider } from "react-query";
import { PokeDexComponent } from "./Search";
import "./styles.css";

const qc = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <PokeDexComponent />
      </div>
    </QueryClientProvider>
  );
}
