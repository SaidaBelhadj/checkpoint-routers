import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link,
    Switch,
    BrowserRouter as Router,

    Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./Movie";
 
	
export default function MovieCard({ movie }) {
  
return (
<div className='movie-container'>
<div className= 'movie'> 
<div className= 'movie-img'>
<img src ={movie.Poster} alt = 'movie' style= {{width:300 , height:450}}></img>
</div> 
   <div className= 'movie-info'><span> {movie.Title}</span></div>
   <div>
       <Link  className ="btn btn-primary" to= {{pathname:'/movie', 
              state:{movie:movie}
            }}>Movie Details 
       <i className="fas fa-chevron-right"/>
       </Link>
   </div>
   <div className= 'movie-rate'>  <span>   
        <ReactStars
                        count={5}
                        size={20}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={movie.IMDBRating}
                        
                        editing={false}
                    /> </span>
     <Router>
     <div>       
          
        <Switch>
          <Route exact path='/movie' render ={(props) =>  <Movie {...props}/>} />
    
        </Switch>
        </div>
        </Router>
        </div>
   </div>
{/*   
   <div className='movie-over'><h3> <span>Description :</span></h3><p> {movie.Description}</p></div> */}
   </div>

   	  );
}
         