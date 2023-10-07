export async function getData(url, data = '') {
    if (!url) return {};
    const response = await fetch(`http://localhost:5001/api/${url}`);
    const responseData = await response.json();
    return responseData;
}
