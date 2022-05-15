import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux/reducer';
import Background from '../../../assets/images/background_vima.png'
import '../Login/LoginPage.css'


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
        // this.doRedirection = this.doRedirection.bind(this);
    }

    render() {
        let {email, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;

        return(
            <section className='section'> 
             <div className='imgBx'>
                <img src={Background}/>
            </div>
                <div className='contentBx'>
                    <div className='formBx'>
                    <h1>Sign in</h1>
                     <form name='login' onSubmit={this.onSubmit} method='post'>                         {/* <div className='inputBx'>
//                             <label htmlFor='name'>Name</label><br/>
//                             <input type='text' placeholder='Name' 
//                             value={name} onChange={(e)=> setName(e.target.value)} required />
//                         </div> */}
                         <div className='inputBx'>
                             <label htmlFor='email'>Email</label><br/>
                             <input id='email' type='email' placeholder='Email' 
                             onChange={e => this.setState({email: e.target.value})} value={email} required />
                         </div>
                         <div className='inputBx'>
                             <label htmlFor='password'>Password</label><br/>
                             <input id='password' type='password' placeholder='Password' 
                             value={password} onChange={e => this.setState({password: e.target.value})} required />
                         </div>
                         <div className='inputBx'>
                             <button type='submit'>Sign in</button>
                         </div>
                         <div>
                             <p>Don't have an account? <a href='#'>Sign up</a></p>
                         </div>

                         <div className='message'>
                            { isLoginPending && <div>Please wait ...</div> }
                            { isLoginSuccess && <div>Success.</div>}
                            { loginError && <div>{loginError.message}</div>}
                        </div>

                     </form>
                    </div>
                </div>
        </section>
        )       
    }

    onSubmit(e) {
        e.preventDefault();
        let {email, password} = this.state;
        this.props.login(email, password);
        this.setState({
            email: '',
            password: ''
        });
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
