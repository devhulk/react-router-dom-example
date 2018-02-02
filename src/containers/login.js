import React, { Component } from 'react';
import '../styles/login-container.css'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName : '',
      password : ''
    }
    this.submit = this.submit.bind(this)
    this.updateInputValue = this.updateInputValue.bind(this)
  }

  submit () {
    console.log('button has been clicked')
    console.log(this.state.userName)
    console.log(this.state.password)
  }
  updateInputValue(evt) {
    if (evt.target.name === 'uname') {
      this.setState({
        userName: evt.target.value
      })
    }
    if (evt.target.name === 'psw') {
      this.setState({
        password: evt.target.value
      })

    }
  }
  render() {
    return (
      <div className="Login">
        <div className="imgcontainer">
          <img src='hulk_drib.png'alt="Avatar" className='avatar'/>
        </div>
        <div className="container">
          <label>Username</label>
          <input type='text' placeholder='Enter Username' name='uname' value={this.state.userName}
            onChange={evt => this.updateInputValue(evt)}/>
          <label>Password</label>
          <input id='password'placeholder='Enter Password' name='psw'value={this.state.password}
            onChange={evt => this.updateInputValue(evt)}/>
        <Link to='/home'>
          <button type='submit' onClick={this.submit}>
            Login
          </button>
        </Link>  
          <label>
            <input type="checkbox" defaultChecked='true'/> Remember me
          </label>
        </div>
      </div>
    );
  }
}

export default Login;

