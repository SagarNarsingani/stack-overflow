async function postData(url, data = {}) {
    if (!url) return {};
    const response = await fetch(`http://localhost:5001/api/${url}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

export default postData;
