import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    userNameInput: '',
    userPasswordInput: '',
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {userNameInput, userPasswordInput} = this.state
    const userID = parseInt(userNameInput)

    const url = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {
      username: userID,
      password: userPasswordInput,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  onChangeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({userPasswordInput: event.target.value})
  }

  renderUserName = () => {
    const {userNameInput} = this.state
    return (
      <div className="input-Container">
        <label className="labelElement" htmlFor="MyUserName">
          User ID
        </label>
        <input
          className="inputElement"
          value={userNameInput}
          id="MyUserName"
          type="text"
          placeholder="Enter user ID"
          onChange={this.onChangeUserName}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {userPasswordInput} = this.state
    return (
      <div className="input-Container">
        <label className="labelElement" htmlFor="MyPassword">
          PIN
        </label>
        <input
          className="inputElement"
          value={userPasswordInput}
          id="MyPassword"
          type="password"
          placeholder="Enter PIN"
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  renderLogin = () => (
    <form className="login-card-container" onSubmit={this.onSubmitLogin}>
      <h1 className="welcome-heading">Welcome Back!</h1>
      {this.renderUserName()}
      {this.renderPassword()}
      <button className="LoginBtn" type="submit">
        Login
      </button>
    </form>
  )

  render() {
    return (
      <div className="login-container">
        <div className="card-container">
          <div className="login-image-Container">
            <img
              className="loginImg"
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </div>
          {this.renderLogin()}
        </div>
      </div>
    )
  }
}

export default Login
