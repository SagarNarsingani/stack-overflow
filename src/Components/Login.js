import { useState } from 'react';

export const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;

        setLoginDetails((pre) => {
            return {
                ...pre,
                [name]: val,
            };
        });
    };

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3">
            <h1 className="font-bold text-2xl text-center m-6">
                Every <span className="text-[#858a90]">Developer 💻</span> Needs
                a Stack Overflow
            </h1>
            <form className="w-fit mx-auto">
                <label className="mb-1 ml-1 font-bold text-sm">Username</label>
                <input
                    name="username"
                    type="text"
                    value={loginDetails.username}
                    onChange={handleChange}
                    placeholder="John Carter"
                    className="block mb-4 px-2 py-1 w-fit text-sm focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                />

                <label className="mb-1 ml-1 font-bold text-sm">Password</label>
                <input
                    name="password"
                    value={loginDetails.password}
                    type="password"
                    onChange={handleChange}
                    placeholder="* * * * * *"
                    className="block mb-4 px-2 py-1 w-fit text-sm focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                />

                <button
                    type="submit"
                    disabled={!loginDetails.username || !loginDetails.password}
                    className="bg-[#0a95ff] disabled:opacity-70 disabled:cursor-not-allowed text-white px-2 pb-1 rounded-md w-full"
                >
                    {' '}
                    Login{' '}
                </button>
            </form>
        </div>
    );
};
