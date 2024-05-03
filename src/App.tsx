import "./App.css";
import { Body } from "./Components/Body";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from "./routes";
function App() {

  return (
    <Body className={`flex justify-center flex-col items-center`}>
      <ToastContainer />
      <AppRoutes/>
    </Body>
  );
}

export default App;
