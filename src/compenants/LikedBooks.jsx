
import BookCard from "./BookCard";
import { useSelector } from "react-redux";


const LikedBooks=()=>{

const books=useSelector(b=>b.books);
return(
 <div className="container my-4">
        <div className="row w-75 mx-auto p-3">
         {

             books.filter(b=>b.liked).map((b,pos)=><BookCard key={pos} book={b}/>)
         }



        </div>
    </div>



)



}
export default LikedBooks;