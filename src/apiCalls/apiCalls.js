//Login Screen
export const fetchToken = async (email, password) => {
  const resObj = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return resObj.json();
};

//Register Screen
export const fetchIdAndToken = async (email, password) => {
  const resObj = await fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return resObj.json();
};

//Portfolio Screen
export const fetchItem = async () => {
  const res = await fetch(
    'https://mocki.io/v1/f1147e6c-f2c7-4609-8a48-f3d6a6b76547',
  );
  return res.json();
};
