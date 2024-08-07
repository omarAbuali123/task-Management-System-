


// import React from 'react';

// const INPUT_CLASS = 'w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary';
// const LABEL_CLASS = 'block text-sm font-medium text-primary';

// const SignUpForm = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-background">
//             <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-bold text-primary text-center mb-6">Sign Up</h2>
//                 <form className="space-y-4">
//                     <div>
//                         <label htmlFor="name" className={LABEL_CLASS}>Full Name</label>
//                         <input id="name" type="text" className={INPUT_CLASS} placeholder="John Doe" />
//                     </div>
//                     <div>
//                         <label htmlFor="email" className={LABEL_CLASS}>Email Address</label>
//                         <input id="email" type="email" className={INPUT_CLASS} placeholder="john.doe@example.com" />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className={LABEL_CLASS}>Password</label>
//                         <input id="password" type="password" className={INPUT_CLASS} placeholder="********" />
//                     </div>
                    
//                     <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-primary/80 transition duration-300">Sign Up</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUpForm;









import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/signup', { username, email, password });
      alert('User created');
    } catch (err) {
      alert('Error creating user');
      console.error('Error:', err); // Log the error for debugging
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
