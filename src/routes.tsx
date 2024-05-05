
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { SectionMain } from "./Components/Sections/SectionMain"
import { SectionBlog } from "./Components/Sections/SectionBlog"
import { useContext } from "react"
import { AuthContext } from "./Components/context/auth"
export const AppRoutes = ()=>{
  const {} = useContext(AuthContext)
  return(
    <Router>
      <Routes>
        <Route path="/" element={<SectionMain/>}/>
        <Route path={"/blog"} element={<SectionBlog/>}/>
      </Routes>
    </Router>
  )
}