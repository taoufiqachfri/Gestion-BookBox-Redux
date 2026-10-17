
const initialState = {
    books : [
        {
      id: 1,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      genre: "Fantasy",
      cover: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
      liked: false,
      inReadingList: false,
    },
    {
      id: 2,
      title: "Harry Potter",
      author: "J.K. Rowling",
      year: 1997,
      genre: "Fantasy",
      cover: "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg",
      liked: false,
      inReadingList: false,
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      genre: "Roman",
      cover: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
      liked: false,
      inReadingList: false,
    },
    {
      id: 4,
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
      genre: "Développement personnel",
      cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
      liked: false,
      inReadingList: false,
    },
  ]
};

const BookReducer =(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_READING_LIST":
            return{...state,books: state.books.map(b=>b.id===action.payload?{...b,inReadingList:true}:b)}
    
        case "REMOVE_FROM_READING_LIST":
            return{...state,books: state.books.map(b=>b.id===action.payload?{...b,inReadingList:false}:b)}

        case "TOGGLE_LIKE":
            return{...state,books: state.books.map(b=>b.id===action.payload?{...b,liked:!b.liked}:b)}    
        default:
            return state;
    
        }

}
export default BookReducer
