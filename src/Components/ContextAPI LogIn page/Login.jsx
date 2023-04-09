
import './login.css'
export default function Login() {
  return (
   <div className='login'>
    <div>
        <input type="text" placeholder="User Name" />
    </div><br/>
    <div>
        <input type="password" placeholder="Password" />
    </div><br/>
    <div>
        <button>Login</button>
    </div>
   </div>
  )
}

