import axios from 'axios';
import React , {useState} from 'react';


const SignIn = () => {
    const[useStatus , setUserStatus] = useState('');
    const[username , setUsername] = useState('');
    const[password , setPassword] = useState('');
    const sign_in =()=>{
        const data = new FormData()
        data.append('username',username)
        data.append('password',password)
        axios.post('http://127.0.0.1:8000/api/users/login/',data)
        .then((response)=>{
            console.log(response);
        })
    }
    
    return (
        <>
                <div className={'center'}>
                 <div className="forusername">
                    <label  className="username">username</label>
                    <input  type="text" className="usernameip" onChange={(item)=>{
                        setUsername(item.target.value)
                    }} placeholder="here username"  required=""/>
                </div>
                <div className="forpassword">
                    <label  className="username">password</label>
                    <input  type="password" className="usernameip"   placeholder="here username"  required="" onChange={(item)=>{
                        setPassword(item.target.value)
                    }}/>
                </div>
                <button onClick={()=>{
                    sign_in()
                }} type='submit'>click</button>
                </div>
        </>
    );
};

export default SignIn;