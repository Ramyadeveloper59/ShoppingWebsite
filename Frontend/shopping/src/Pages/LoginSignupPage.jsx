import '../Pages/PagesCss/LoginSignupPage.css'


const LoginSignupPage = () => {
  return (
    <div>
      <div className="login-signup">
        <div className="login-signup-container">
          <h1>SIGN UP</h1>
          <div className="login-signup-fields">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="number" placeholder="Phone Number" />
          </div>
          <button>Continue</button>
          <p className="login-signup-login">
            Already have an account ?<span> Login</span>
          </p>
          <div className="login-signup-agree">
              <input type="checkbox" name="" id="" />
              <p>By Continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignupPage
