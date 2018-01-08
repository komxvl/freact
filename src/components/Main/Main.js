import React, { Component } from 'react';
import './style.css';
import  FormAddFilm from '../FormAddFilm/FormAddFilm';
import  FilmList from '../FilmList/FilmList';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      filmInfo:[
        {
            nameFilm: 'Star Wars',
            ratingFilm: '7',
            descriptionFilm: 'The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford)',
            chipsFilm: ['sci-fi' , 'dramma' , 'action' ] 
        },
        {
            nameFilm: 'Jaws',  
            ratingFilm: '6',
            descriptionFilm: 'When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that ...',
            chipsFilm: ['sci-fi' , 'dramma' , 'action' ]                          
        }
    ]
    }

    this.removeFilm = this.removeFilm.bind(this);
    this.getChildData = this.getChildData.bind(this);

  }

getChildData(addedFilm){
  console.log("addedFilm ",addedFilm);
  console.log(this.state);
  this.state.filmInfo.push(addedFilm);
  this.setState(this.state.filmInfo)
  console.log("State ",this.state);
}

removeFilm(index){
  this.setState({
    filmInfo: this.state.filmInfo.filter((x,i) => i !== index )
  });
}

  render() {
    return (
        <div className="main-body">
            <FilmList filmArray={this.state.filmInfo} removeItem = {this.removeFilm} />
            <FormAddFilm addFilmInfo={this.getChildData} />            
        </div>
    
    );
  }
}

export default Main;
