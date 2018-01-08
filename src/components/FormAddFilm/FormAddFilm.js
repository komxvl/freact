import React, { Component } from 'react';
import './style.css';

class FormAddFilm extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameFilm: '',
            descriptionFilm: '',
            ratingFilm: '1',
            chipsFilm: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitedForm = this.submitedForm.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})    
    }

    submitedForm(e){
        e.preventDefault();
        if(this.state.nameFilm ==='' && this.state.descriptionFilm ===''){
            alert("Enter form fild!");
        }
        else{
            this.props.addFilmInfo(this.state);
            this.setState({
                nameFilm: '',
                descriptionFilm: '',
                ratingFilm: '1',
                chipsFilm: []
            });
            console.log("this.state",this.state);
        }        
    }

    pointRatingFilm = [1,2,3,4,5,6,7,8,9,10];

  render() {
    return (
        <form className="MovieForm" onSubmit={this.submitedForm}>
            <label className="MovieForm__label">Title
                <input type="text" value={this.state.nameFilm} onChange={this.handleChange} name="nameFilm" className="MovieForm__input"/>
            </label>    
            <label className="MovieForm__label">Description
                <textarea className="MovieForm__txtarea" name="descriptionFilm" value={this.state.descriptionFilm} onChange={this.handleChange} rows="8"> </textarea>
            </label>
            <label className="MovieForm__label">Rating
                <select className="MovieForm__input" name="ratingFilm"  onChange={this.handleChange}>
                    {this.pointRatingFilm.map((elem,index) =>{
                    return <option key={index} value={elem}>{elem}</option>
                    })
                    }
                </select>
            </label>
            <div className="MovieForm__genres">
                <label><input type="checkbox" value="drama"  onChange={this.handleChange} />drama</label>
                <label><input type="checkbox" value="action"  onChange={this.handleChange}/>action</label>
                <label><input type="checkbox" value="comedy"  onChange={this.handleChange}/>comedy</label>
            </div>
            <button className="MovieForm__submit" type="submit">submit</button>
        </form>
    )
}
}
export default FormAddFilm;