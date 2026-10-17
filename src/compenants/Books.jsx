import {useSelector} from 'react-redux';

import BookCard from './BookCard';
const Books=()=>{


 const Books=useSelector(b=>b.books);
 return(



    <div className="container my-4">
        <div className="row">
         {

            Books.map((b,pos)=><BookCard key={pos} book={b}/>)
         }



        </div>
    </div>

 )




}
export default Books;