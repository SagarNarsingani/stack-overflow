export async function getData(url, data = '') {
    if (!url) return {};
    const response = await fetch(
        `https://api-stack-overflow-yn9d.onrender.com/api/${url}`
    );
    const responseData = await response.json();
    return responseData;
}
