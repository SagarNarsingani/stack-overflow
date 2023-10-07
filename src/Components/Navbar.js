import { Outlet, useLocation, Link } from 'react-router-dom';

export const Navbar = () => {
    const path = useLocation().pathname.toLowerCase();
    return (
        <>
            <div className="fixed top-0 w-full bg-white flex items-center justify-between py-2 px-4 border-b-[1px] border-t-4 border-b-[#d6d9dc] border-t-[#f48225] z-10">
                <div className="flex items-center justify-between cursor-pointer">
                    <img alt="logo" src={'/logo.svg'} height={40} width={40} />
                    <span className="ml-1 text-lg">
                        stack <strong>overflow</strong>
                    </span>
                </div>
                <ul className="flex items-center">
                    <Link to={'questions'}>
                        <li
                            className="mx-4 duration-200 cursor-pointer hover:text-[#f48225]"
                            style={
                                path === '/questions'
                                    ? { color: '#f48225' }
                                    : {}
                            }
                        >
                            Questions
                        </li>
                    </Link>

                    <Link to={'answers'}>
                        <li
                            className="mx-4 duration-200 cursor-pointer hover:text-[#f48225]"
                            style={
                                path === '/answers' ? { color: '#f48225' } : {}
                            }
                        >
                            Answers
                        </li>
                    </Link>
                    <li className="mx-4 rounded-full overflow-hidden cursor-pointer">
                        <div>
                            <img
                                alt="profile"
                                src={'/profile.png'}
                                height={35}
                                width={35}
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};
