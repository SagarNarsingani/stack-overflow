async function postData(url, data = {}) {
    if (!url) return {};
    const response = await fetch(
        `https://api-stack-overflow-yn9d.onrender.com/api/${url}`,
        {
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
        }
    );

    return response.json(); // parses JSON response into native JavaScript objects
}

export default postData;
