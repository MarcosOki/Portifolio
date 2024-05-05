import "./App.css";
import { Body } from "./Components/Body";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from "./routes";
import { AuthProvider } from "./Components/context/auth";
function App() {

  return (
    <AuthProvider>
      <Body className={`flex justify-center flex-col items-center`}>
        <ToastContainer />
        <AppRoutes/>
      </Body>
    </AuthProvider>
  );
}

export default App;
