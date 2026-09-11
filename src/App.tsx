import { Suspense } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies";
import type { ITechnology } from "./types/Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const techPromise = async (): Promise<ITechnology[]>=>{
  const res =await fetch('/technologies.json');
 

  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }
  const data = await res.json();
  return data;
};

function App() {
   const technologiesPromise = techPromise();
  // console.log(techPromise);
  return (
    <>
     <Nav></Nav>
     <Banner></Banner>

      <Suspense fallback={<h2>Loading........</h2>}>
         <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <ToastContainer position="top-right" autoClose={2000} />
     <Footer></Footer>
    </>
  )
}

export default App
