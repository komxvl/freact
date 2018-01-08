import React, { Component } from 'react';
import './style.css';
import FilmCard from '../FilmCard/FilmCard';

class FilmList extends Component {
    constructor(props){
        super(props)
        console.log("List props add",this.props);

       
    }

    render() {             
    return ( 
        <div className="test">  
            {
                this.props.filmArray.map((elem,index) =>(
                    <FilmCard   key = {elem.nameFilm}                         
                                name = {elem.nameFilm} 
                                description = {elem.descriptionFilm}
                                rating = {elem.ratingFilm} 
                                chipsFilm = {elem.chipsFilm}  
                                removeFilmItem = {this.props.removeItem.bind(this,index)}                                      
                    />
                ))
            }
        </div>    
    );
  } 
}

export default FilmList;
