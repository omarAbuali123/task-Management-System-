// import React from 'react';
// import Header from './Heder';

// const inputClasses = "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary";
// const buttonClasses = "w-full bg-black text-white py-2 rounded-lg hover:bg-primary/80 transition duration-300";

// const LoginForm = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-background">
//             <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-bold text-primary text-center mb-6">Login</h2>
//                 <form className="space-y-4">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-primary">Email Address</label>
//                         <input id="email" type="email" className={inputClasses} placeholder="john.doe@example.com" />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-primary">Password</label>
//                         <input id="password" type="password" className={inputClasses} placeholder="********" />
//                     </div>
//                     <button type="submit" className={buttonClasses}>Login</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;


import React, { useState } from 'react';
import axios from 'axios';

const inputClasses = "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary";
const buttonClasses = "w-full bg-black text-white py-2 rounded-lg hover:bg-primary/80 transition duration-300";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      if (response.data.success) {
        alert('Login successful');
        localStorage.setItem('username', response.data.username);  // Save email to localStorage
        // Handle successful login, e.g., redirect or update UI
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      alert('Error logging in');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-primary">Username</label>
            <input
              id="username"
              type="text"
              className={inputClasses}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary">Password</label>
            <input
              id="password"
              type="password"
              className={inputClasses}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={buttonClasses}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

