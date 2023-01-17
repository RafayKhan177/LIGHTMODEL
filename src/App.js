import "./App.css";
import {
  Alumini,
  Navbar,
  Header,
  Home,
  Calendars,
  Parents,
  SummerPrograms,
  Footer,
  Admissions,
  Academics,
  Athletics,
  StudentLife,
  SupportBc,
} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route exect path="/calendars" element={<Calendars />} />
        <Route exect path="/parents" element={<Parents />} />
        <Route exect path="/alumni" element={<Alumini />} />
        <Route exect path="/summer-programs" element={<SummerPrograms />} />
        
        <Route exect path="/admissions" element={<Admissions />} />
        <Route exect path="/academics" element={<Academics />} />
        <Route exect path="/athletics" element={<Athletics />} />
        <Route exect path="/student-life" element={<StudentLife />} />
        <Route exect path="/support-bc" element={<SupportBc />} />
      </Routes>
      <Footer />/
    </>
  );
}

export default App;
