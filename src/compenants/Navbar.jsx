import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';


const Navbar=()=>{


   const books=useSelector(b=>b.books);
    return(
        <nav className="navbar  navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">bookStore</Link>
                <div className="d-flex gap-5">
                    <Link className="nav-link" to="/">books</Link>
                    <Link className="nav-link" to="/LikedBooks">Liked <span className="badge bg-primary">{books.filter(b=>b.liked).length}</span> </Link>
                    <Link className="nav-link" to="/ReadList">Readlist <span className="badge bg-success">{books.filter(b=>b.inReadingList).length}</span></Link>
                </div>
            </div>
        </nav>




    )


}
export default Navbar;