export const useLocalStorage = (key) => {
    const getLocalStorage = () => {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }

        return null;
    };

    const setLocalStorage = (data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const clearLocalStorage = () => {
        return localStorage.removeItem(key);
    };

    return [getLocalStorage, setLocalStorage, clearLocalStorage];
};
