import React,{useState} from 'react';
import './App.css';
const  App = ()=> {
const [SignIn,setSignIn] = useState([])


const onChange = (event)=>{
const {name,value} = event.target
console.log(name,"sen26",value)
setSignIn({...SignIn,[name]:value})
}
const onSignIn = (event)=>{
  event.preventDefault()
console.log(SignIn,"sen267")
}

  return (
    <div className="App">
      <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" onChange={onChange} />
                    <input type="email" placeholder="Email" onChange={onChange}/>
                    <input type="password" placeholder="Password" onChange={onChange}/>
                    <button >Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" name="email" onChange={onChange}/>
                    <input type="password" placeholder="Password" name="pass" onChange={onChange} />
                    <a href="#">Forgot your password?</a>
                    <button onClick={onSignIn}>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  );
  
}


export default App;
