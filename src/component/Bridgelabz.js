import React,{Component} from 'react';
import logo from '../assets/bridgelabz.png'
import './Bridgelabz.css'


export class Bridgelabz extends Component {
   url= 'https://www.bridgelabz.com/' ;
    constructor(){
        super()
        this.state = {
            title: 'hello from Ramkrishna',
            userName: '',
            nameError: ''
        }
    }

    onClick = ($event) => {
        console.log("save button is Clicked",$event);
        window.open(this.url,"_blank");
    };

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({userName : event.target.value});
    };

    onNameChange = (event) => {
        console.log("value is ", event.target.value);
        const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        this.setState({userName: event.target.value})
        if(nameRegex.test(event.target.value)){
            this.setState({ nameError : ''})
        }    
        else{
            this.setState({ nameError: 'Name is Incorrect'})
        }
    }


    render(){
        return(
        <div className ="body">
            <div className= "mt-5 d-flex justify-content-left">               
                <h1 >Hello {this.state.userName} from Bridgelabz</h1>
                {/* <h2>{this.state.title}</h2> */}
                <img src={logo} onClick={this.onClick}
                 alt="The Bridgelabz Logo" width="25%"></img>              
            </div>

            <div className="error">
                <input onChange={this.onNameChange}></input>
                <span className="error">{this.state.nameError}</span>
            </div>

            <p>At Bridgelabz ,we are a techie community of</p>
            <ul>
             <li>technologist</li>
             <li>thinkers</li>
             <li>builders</li>
            </ul>
            <p>Working Together to keep the Tech Employability  of engineers Alive and accessible</p>
            <p>
                To Know about us, visit <a href={this.url}>Bridgelabz</a>
            </p>
    </div>
);
    }
}