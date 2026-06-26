import '../css/Onboard.css'

function Onboard(){
    return(
        <div className="onboard-content">
            <h1>Welcome to <br /> Neighborhood Swap</h1>
            <div className="login-box">
                <input type='text' placeholder='Email' className='login-input'/>
                <input type='text' placeholder='Password' className='login-input'/>
            </div>
            <a href="/home"> <button className="login-button">Login</button> </a>
            <p>or</p>
            <a href="/home"> <button className="signup-button">Sign Up</button> </a>
        </div>
    );
}

export default Onboard;