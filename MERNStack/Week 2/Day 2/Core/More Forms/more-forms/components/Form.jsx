import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [userFirstname,setUserFirstname] = useState("")
    const [userLastname,setUserLastname] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPassword,setUserPassword] = useState("")
    const [userConfirmPassword,setUserConfirmPassword] = useState("")
    
    return(
        <fieldset>
            <form >
                            <div>
                                <label>Firstname: </label> 
                                <input type="text" onChange={ (e) => setUserFirstname(e.target.value)}/>
                                {userFirstname.length<2?<p style={{color:"red"}}>Firstname must be at least 2</p>:<p style={{color:"green"}}>Firstname Valid!</p>}
                            </div>
                <div>
                    <label>Lastname: </label> 
                    <input type="text" onChange={ (e) => setUserLastname(e.target.value)} />
                    {userLastname.length<2?<p style={{color:"red"}}>Lastname must be at least 2</p>:<p style={{color:"green"}}>Lastname Valid!</p>}

                </div>
                <div>
                    <label>Email:</label> 
                    <input type="text" onChange={ (e) => setUserEmail(e.target.value)}/>
                    {userEmail.length<5?<p style={{color:"red"}}>Email must be at least 2</p>:<p style={{color:"green"}}>Email Valid!</p>}

                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setUserPassword(e.target.value)}/>
                    {userPassword.length<8?<p style={{color:"red"}}>Password must be at least 8 characters</p>:<p style={{color:"green"}}>Password Valid!</p>}
                    {userPassword===userConfirmPassword?<p style={{color:"green"}}>Password match!</p>:<p style={{color:"red"}}>Passwords must match</p>}

                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="password" onChange={ (e) => setUserCPass(e.target.value)}/>
                </div>
                <br />
            </form>
        </fieldset>
        );
}
export default Form