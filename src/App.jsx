import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./compenants/Navbar";
import LikedBooks from "./compenants/LikedBooks";
import Books from "./compenants/Books";
import Readlist from "./compenants/inReadingList";
import  {Provider} from "react-redux";
import Store from "./features/Store";



const App=()=>{
  return(

 <BrowserRouter>
<Provider store={Store}>
  <Navbar/>
      <Routes>
          <Route path="/" element={<Books/>}/>
           <Route path="/Books" element={<Books/>}/>
    
          <Route path="/ReadList" element={<Readlist/>}/>
          <Route path="/LikedBooks" element={<LikedBooks/>}/>


      </Routes>
  
 
 </Provider>
 </BrowserRouter>


  )


}
export default App;