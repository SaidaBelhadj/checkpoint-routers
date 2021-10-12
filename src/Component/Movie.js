import React from 'react'
import { Link } from "react-router-dom";
import { Card,Button } from "react-bootstrap";
import ReactPlayer from 'react-player'

const  Movie = (props)=> {
    const mov =(props.location.state.movie);
            
            
return (
    <>
      <Card style={{ width: '42rem' }}>
  <Card.Header>
                <ReactPlayer url={mov.Trailer} /></Card.Header>
  <Card.Body>
    <Card.Title>{mov.Title}</Card.Title>
    <Card.Text>{mov.Description}
    </Card.Text>
    <Link to="/"> <Button variant="primary">Go Back</Button> </Link>
  </Card.Body>
</Card>
  
    </>
  );
};
      
    


export default Movie
