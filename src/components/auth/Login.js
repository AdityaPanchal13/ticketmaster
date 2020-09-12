import React from 'react'
import {startLoginUser} from '../../actions/userAction'
import {connect} from "react-redux"
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        const redierct=()=>{
            return this.props.history.push('/')
        }
       this.props.dispatch(startLoginUser(formData,redierct))
    }
    handleChange=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
             })
    }
    render(){
        return(
            <div>
                <h1>Log-in</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                           id="email" 
                           name="email" 
                           value={this.state.email} 
                           onChange={this.handleChange}
                    /><br/>
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                           id="password" 
                           name="password" 
                           value={this.state.password} 
                           onChange={this.handleChange}
                    /><br/>
                    <input type="submit"
                           value="Login"
                    />

                </form>

            </div>
        )
    }
}
export default connect()(Login)