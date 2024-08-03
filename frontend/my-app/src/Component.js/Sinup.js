


import React from 'react';

const INPUT_CLASS = 'w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary';
const LABEL_CLASS = 'block text-sm font-medium text-primary';

const SignUpForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-primary text-center mb-6">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className={LABEL_CLASS}>Full Name</label>
                        <input id="name" type="text" className={INPUT_CLASS} placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className={LABEL_CLASS}>Email Address</label>
                        <input id="email" type="email" className={INPUT_CLASS} placeholder="john.doe@example.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className={LABEL_CLASS}>Password</label>
                        <input id="password" type="password" className={INPUT_CLASS} placeholder="********" />
                    </div>
                    
                    <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-primary/80 transition duration-300">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
