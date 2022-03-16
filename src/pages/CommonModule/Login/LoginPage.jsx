import React from 'react';
import Background from '../../../assets/images/background_vima.png'
import '../Login/LoginPage.css'

const LoginPage = () => {

    return (
       <section className='section'> 
               <div className='imgBx'>
                    <img src={Background}/>
               </div>
               <div className='contentBx'>
                   <div className='formBx'>
                   <h1>Sign up</h1>
                    <form>
                        <div className='inputBx'>
                            <label for='name'>Name</label><br/>
                            <input type='text' placeholder='Yevheniia' />
                        </div>
                        <div className='inputBx'>
                            <label for='email'>Email</label><br/>
                            <input id='email' type='email' name='yevheniia@dribbble.com' placeholder='yevheniia@dribbble.com' />
                        </div>
                        <div className='inputBx'>
                            <label for='password'>Password</label><br/>
                            <input id='password' type='password' name='Yevheniia' placeholder='..........' />
                        </div>
                        <div className='inputBx'>
                            <input type='submit' name='Sign up' value='Sign up' />
                        </div>
                        <div>
                            <p>Already have an account? <a href='#'>Sign in</a></p>
                        </div>
                    </form>
                   </div>
               </div>
       </section>
    );
}

export default LoginPage;