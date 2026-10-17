import {useDispatch} from "react-redux";

import { FaHeart,FaRegHeart,FaTimes ,FaPlus} from "react-icons/fa";

const BookCard=({book})=>{
   const dispatch=useDispatch();

    return(
  <div className="col-md-4">
      <div className="card h-100">
        <img
          src={book.cover}
          className="card-img-top"
          alt={book.title}
          
        />

        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>

          <p className="card-text">
            <strong>Author :</strong> {book.author}
            <br />
            <strong>Année :</strong> {book.year}
            <br />
            <strong>Genre :</strong> {book.genre}
          </p>

          <p>
            <button onClick={()=>dispatch({type:"TOGGLE_LIKE",payload:book.id})} className="btn btn-sm">{book.liked?<FaHeart style={{color:"red"}}/>:<FaRegHeart/>}</button>
            <button onClick={()=>dispatch({type:book.inReadingList?"REMOVE_FROM_READING_LIST":"ADD_TO_READING_LIST",payload:book.id})} className="btn btn-sm">{book.inReadingList?<FaTimes/>:<FaPlus/>}</button>
          </p>
        </div>
      </div>
    </div>


    )

}
export default BookCard;