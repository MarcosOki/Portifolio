import { useState } from "react";
import "./App.css";
import { Body } from "./Components/Body";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SectionMain } from "./Components/Sections/SectionMain";
import { SectionBlog } from "./Components/Sections/SectionBlog";
import { SectionProjects } from "./Components/Sections/SectionProjects";
function App() {

  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(dark ? false : true);
  };

  return (
    <Body
    className={`flex justify-center flex-col items-center ${dark ? "dark" : ""}`}
    >
      <ToastContainer />
      <SectionMain toggleThemeFunction={toggleTheme} theme={dark}/>
      <SectionProjects/>
      <SectionBlog/>
    </Body>
  );
}

export default App;
