import React from 'react';

const inputClasses = "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary";
const buttonClasses = "w-full bg-black text-white py-2 rounded-lg hover:bg-primary/80 transition duration-300";

const LoginForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-primary text-center mb-6">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary">Email Address</label>
                        <input id="email" type="email" className={inputClasses} placeholder="john.doe@example.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-primary">Password</label>
                        <input id="password" type="password" className={inputClasses} placeholder="********" />
                    </div>
                    <button type="submit" className={buttonClasses}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
