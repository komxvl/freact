import React, { Component } from 'react';
import './style.css';
import  FormAddFilm from '../FormAddFilm/FormAddFilm';
import  FilmList from '../FilmList/FilmList';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      filmInfo: ''
    }

    }

getChildData = (e) =>{
  e.preventDefault();
  console.log("ee",e.target["titleFilm"].value)
  console.log("test")
}

 filmArray = [
    {
        nameFilm: 'Star Wars',
        ratingFilm: '7/10',
        descriptionFilm: 'The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford)',
        chipsFilm: ['sci-fi' , 'dramma' , 'action' ] 
    },
    {
        nameFilm: 'Jaws',  
        rating: '6/10',
        descriptionFilm: 'When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that ...',
        chipsFilm: ['sci-fi' , 'dramma' , 'action' ]                          
    }
]

  render() {
    return (
        <div className="main-body">
            <FilmList filmArray={this.filmArray}/>
            <FormAddFilm getChildData={this.getChildData} />            
        </div>
    
    );
  }
}

export default Main;
