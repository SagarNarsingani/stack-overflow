import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { GlobalContext } from './contexts/Global';
import { useLocalStorage } from './hooks/localStorage';

function App() {
    const [getUserVal] = useLocalStorage('user');
    const [user, setUser] = useState(getUserVal());

    return (
        <div>
            {!user && <Navigate to={'/login'} replace={true} />}
            <GlobalContext.Provider value={{ user, setUser }}>
                <Outlet />
            </GlobalContext.Provider>
        </div>
    );
}

export default App;
