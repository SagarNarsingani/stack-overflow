import { useContext, useState } from 'react';
import postData from '../utils/postData';
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/Global';
import { useLocalStorage } from '../hooks/localStorage';

export const Login = () => {
    const { user, setUser } = useContext(GlobalContext);
    console.log(user);
    const [, setUserVal] = useLocalStorage('user');
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = await postData('login', loginDetails);

        if (data && data.status === 200) {
            setUser(data.user._id);
            setUserVal(data.user._id);
        } else {
            setError(data.message);
        }
    };

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3">
            {user && <Navigate to={'/questions'} replace={true} />}
            <h1 className="font-bold text-2xl text-center m-6">
                Every <span className="text-[#858a90]">Developer 💻</span> Needs
                a Stack Overflow
            </h1>
            <form className="w-fit mx-auto" onSubmit={handleSubmit}>
                <label className="mb-1 ml-1 font-bold text-sm">Username</label>
                <input
                    name="username"
                    type="text"
                    value={loginDetails.username}
                    onChange={handleChange}
                    placeholder="John Carter"
                    className="block mb-2 px-2 py-1 w-full text-sm focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                />

                <label className="mb-1 ml-1 font-bold text-sm">Password</label>
                <input
                    name="password"
                    value={loginDetails.password}
                    type="password"
                    onChange={handleChange}
                    placeholder="* * * * * *"
                    className="block px-2 py-1 w-full text-sm focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                />

                <p className="text-center py-1 text-red-500">{error}</p>
                <button
                    type="submit"
                    disabled={!loginDetails.username || !loginDetails.password}
                    className="mt-2 bg-[#0a95ff] disabled:opacity-70 disabled:cursor-not-allowed text-white px-2 pb-1 rounded-md w-full"
                >
                    {' '}
                    Login{' '}
                </button>
            </form>
        </div>
    );
};
