import React,{Component} from 'react';
import logo from '../assets/bridgelabz.png'
import logo1 from '../assets/independence.jpg' 
import {Link} from 'react-router-dom'

export class Department extends Component {
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
            <div>

            
                <div className= "mt-5 d-flex justify-content-left">
                <h3>Welcome to Department</h3>
                <h1>Hello {this.state.userName} from Bridgelabz</h1>
                <h2>{this.state.title}</h2>

                <img src={logo} onClick={this.onClick}
                 alt="The Bridgelabz Logo"></img>

                <img src = {logo1} alt="The Independence Logo"></img>
                {/* <input type="text" onChange={this.onChange}></input> */}
            </div>

            <div>
                <input onChange={this.onNameChange}></input>
                <span className="error-output">{this.state.nameError}</span>
                </div>
        
                <Link to="/"><button>Back to Home</button></Link>
                <Link to="/department"><button>Back to Department</button></Link>

            </div>
);
    }
}