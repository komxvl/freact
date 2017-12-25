import React, { Component } from 'react';
import './style.css';

class FormAddFilm extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameFilm: "",
            descriptionFilm: "",
            rating: "1",
            error: ""
        }

        console.log(this.props);
    }

getTitleFilm = (e) =>{
    this.setState({
        nameFilm: e.target.value
    })
    console.log(e.target.value);
}

getDescFilm = (e) =>{
    this.setState({
        descriptionFilm: e.target.value
    })
    console.log(e.target.value);
}

getRatingFilm = (e) =>{
    this.setState({
        rating: e.target.value
    })
    console.log(e.target.value);
}

getFilm = (e) =>{

    e.preventDefault();
    if(this.state.nameFilm === ""){
        this.setState({
            error: "Enter"
        })
     }
     else{
        let filmInfo = {
            titleFilm:this.state.nameFilm,
            descFilm: this.state.descriptionFilm,
            ratingFilm: this.state.rating
        }

        
        console.log("FilmInfo",filmInfo);

     }
}




    pointRatingFilm = [1,2,3,4,5,6,7,8,9,10];
  render() {
    return (
        <form className="MovieForm" onSubmit={this.props.getChildData}>
            <label className="MovieForm__label">Title
                <input type="text" onChange={this.getTitleFilm} name="titleFilm" className="MovieForm__input"/>
            </label>
            <p style={{'color':'red'}}>
                {
                    (this.state.nameFilm === "") ? this.state.error : ""
                }
            </p>
            <label className="MovieForm__label">Description
                <textarea className="MovieForm__txtarea" name="descFilm" onChange={this.getDescFilm} rows="8" name="descFilm" value={this.state.descriptionFilm}> </textarea>
            </label>
            <label className="MovieForm__label">Rating
                <select className="MovieForm__input" name="ratingFilm" onChange={this.getRatingFilm}>
                    {this.pointRatingFilm.map((elem,index) =>{
                    return <option key={index} value={elem}>{elem}</option>
                    })
                    }
                </select>
            </label>
            <button className="MovieForm__submit" type="submit">submit</button>
        </form>
    )
}
}
export default FormAddFilm;