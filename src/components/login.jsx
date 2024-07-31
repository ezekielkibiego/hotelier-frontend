

// import React, { useState } from 'react';
// import axios from 'axios';
// import "../styles/login.css";
// import user_icon from '../assets/person.png';
// import email_icon from '../assets/email.png';
// import password_icon from '../assets/password.png';
// import { useNavigate } from 'react-router-dom';

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/"
// });

// const Login = () => {
//     const [action, setAction] = useState('Login');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [resetEmail, setResetEmail] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [role, setRole] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setMessage('');
//         setLoading(true);

//         setTimeout(() => {
//             if (action === 'Login') {
//                 handleLogin();
//             } else if (action === 'Sign Up') {
//                 handleSignUp();
//             } else if (action === 'Forgot Password') {
//                 handlePasswordReset();
//             }
//             setLoading(false);
//         }, 1000);
//     };

//     const handleLogin = async () => {
//         try {
//             const response = await client.post('/login/', { email, password });
//             setMessage('Login successful!');
//             // Redirect to About page on successful login
//             navigate('/About');
//         } catch (error) {
//             setMessage('Login failed. Please check your credentials.');
//         }
//     };

//     const handleSignUp = async () => {
//         try {
//             const response = await client.post('/users/', { username: name, email, password, role });
//             setMessage('Registration successful!');
//         } catch (error) {
//             setMessage('Registration failed. Please check your details.');
//         }
//     };

//     const handlePasswordReset = async () => {
//         try {
//             const response = await client.post('/reset-password/', { email: resetEmail, newPassword, confirmPassword });
//             setMessage('Password reset request successful!');
//         } catch (error) {
//             setMessage('Password reset request failed.');
//         }
//     };

//     return (
//         <div className='container'>
//             <div className='header'>
//                 <div className='text'>{action}</div>
//                 <div className='underline'></div>
//             </div>
//             {message && <div className="message">{message}</div>}
//             {action === 'Forgot Password' ? (
//                 <form onSubmit={handleSubmit} className='inputs'>
//                     <div className='input'>
//                         <img src={email_icon} width="30" height="30" />
//                         <input
//                             type="email"
//                             placeholder='Email address'
//                             value={resetEmail}
//                             onChange={(e) => setResetEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className='input'>
//                         <img src={password_icon} width="30" height="30" />
//                         <input
//                             type="password"
//                             placeholder='New Password'
//                             value={newPassword}
//                             onChange={(e) => setNewPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className='input'>
//                         <img src={password_icon} width="30" height="30" />
//                         <input
//                             type="password"
//                             placeholder='Confirm Password'
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className='submit-container'>
//                         <button type="submit" className='submit' disabled={loading}>
//                             {loading ? 'Processing...' : 'Reset Password'}
//                         </button>
//                     </div>
//                 </form>
//             ) : (
//                 <form onSubmit={handleSubmit} className='inputs'>
//                     {action === 'Login' ? (
//                         <>
//                             <div className='input'>
//                                 <img src={email_icon} width="30" height="30" />
//                                 <input
//                                     type="email"
//                                     placeholder='Email address'
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className='input'>
//                                 <img src={password_icon} width="30" height="30" />
//                                 <input
//                                     type="password"
//                                     placeholder='Password'
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <div className='input'>
//                                 <img src={user_icon} width="30" height="30" />
//                                 <input
//                                     type="text"
//                                     placeholder='Username'
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className='input'>
//                                 <img src={email_icon} width="30" height="30" />
//                                 <input
//                                     type="email"
//                                     placeholder='Email address'
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className='input'>
//                                 <img src={password_icon} width="30" height="30" />
//                                 <input
//                                     type="password"
//                                     placeholder='Password'
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className='input'>
//                                 <img src={user_icon} width="30" height="30" />
//                                 <input
//                                     type="text"
//                                     placeholder='Role'
//                                     value={role}
//                                     onChange={(e) => setRole(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </>
//                     )}
//                     <div className='submit-container'>
//                         <button type="submit" className='submit' disabled={loading}>
//                             {loading ? 'Processing...' : action}
//                         </button>
//                     </div>
//                 </form>
//             )}
//             {action !== 'Forgot Password' && (
//                 <div className="forgot-password" onClick={() => setAction('Forgot Password')}>
//                     Forgot Password? <span>Click Here!</span>
//                 </div>
//             )}
//             {action !== 'Forgot Password' && (
//                 <div className='submit-container'>
//                     <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>
//                         Sign Up
//                     </div>
//                     <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
//                         Login
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import "../styles/login.css";
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { useNavigate } from 'react-router-dom';
import BASE_URL from './config';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: BASE_URL
});

const Login = ({ setIsLoggedIn }) => {
    const [action, setAction] = useState('Login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        setTimeout(() => {
            if (action === 'Login') {
                handleLogin();
            } else if (action === 'Sign Up') {
                handleSignUp();
            } else if (action === 'Forgot Password') {
                handlePasswordReset();
            }
            setLoading(false);
        }, 1000);
    };

    const handleLogin = async () => {
        try {
            const response = await client.post(`${BASE_URL}/api/login/`, { email, password });
            setMessage('Login successful!');
            setIsLoggedIn(true); // Update isLoggedIn state
            // Redirect to About page on successful login
            navigate('/About');
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
        }
    };

    const handleSignUp = async () => {
        try {
            const response = await client.post(`${BASE_URL}/api/users/`, { username: name, email, password, role });
            setMessage('Registration successful!');
        } catch (error) {
            setMessage('Registration failed. Please check your details.');
        }
    };

    const handlePasswordReset = async () => {
        try {
            const response = await client.post(`${BASE_URL}/api/reset-password/`, { email: resetEmail, newPassword, confirmPassword });
            setMessage('Password reset request successful!');
        } catch (error) {
            setMessage('Password reset request failed.');
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            {message && <div className="message">{message}</div>}
            {action === 'Forgot Password' ? (
                <form onSubmit={handleSubmit} className='inputs'>
                    <div className='input'>
                        <img src={email_icon} width="30" height="30" alt="email icon" />
                        <input
                            type="email"
                            placeholder='Email address'
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input'>
                        <img src={password_icon} width="30" height="30" alt="password icon" />
                        <input
                            type="password"
                            placeholder='New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input'>
                        <img src={password_icon} width="30" height="30" alt="password icon" />
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='submit-container'>
                        <button type="submit" className='submit' disabled={loading}>
                            {loading ? 'Processing...' : 'Reset Password'}
                        </button>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleSubmit} className='inputs'>
                    {action === 'Login' ? (
                        <>
                            <div className='input'>
                                <img src={email_icon} width="30" height="30" alt="email icon" />
                                <input
                                    type="email"
                                    placeholder='Email address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='input'>
                                <img src={password_icon} width="30" height="30" alt="password icon" />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='input'>
                                <img src={user_icon} width="30" height="30" alt="user icon" />
                                <input
                                    type="text"
                                    placeholder='Username'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='input'>
                                <img src={email_icon} width="30" height="30" alt="email icon" />
                                <input
                                    type="email"
                                    placeholder='Email address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='input'>
                                <img src={password_icon} width="30" height="30" alt="password icon" />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='input'>
                                <img src={user_icon} width="30" height="30" alt="role icon" />
                                <input
                                    type="text"
                                    placeholder='Role'
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className='submit-container'>
                        <button type="submit" className='submit' disabled={loading}>
                            {loading ? 'Processing...' : action}
                        </button>
                    </div>
                </form>
            )}
            {action !== 'Forgot Password' && (
                <div className="forgot-password" onClick={() => setAction('Forgot Password')}>
                    Forgot Password? <span>Click Here!</span>
                </div>
            )}
            {action !== 'Forgot Password' && (
                <div className='submit-container'>
                    <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>
                        Sign Up
                    </div>
                    <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
                        Login
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
