import {useSelector} from "react-redux";
import BookCard from "./BookCard";

const Readlist=()=>{

const books=useSelector(b=>b.books);
return(

 <div className="container my-4">
        <div className="row w-75 mx-auto p-3">
         {

            books.filter(b=>b.inReadingList).map((b,pos)=><BookCard key={pos} book={b}/>)
         }



        </div>
    </div>



)



}
export default Readlist;