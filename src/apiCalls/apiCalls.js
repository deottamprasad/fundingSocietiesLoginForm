
//Login Screen
export const fetchToken = async (email, password) => {
    const resObj = await fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    });
    return resObj.json();
}

//Register Screen
export const fetchIdAndToken = async (email, password) => {
    const resObj = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    });
    return resObj.json();
}