const username = 'kminchelle';
const password = '0lelplR';
const form = document.querySelector('#form');

const Data = {
  user: username,
  pw: password,
}


  async function Login(url, data){
  const response = await fetch(url , {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: data.user,
      password: data.pw,
    })
  })

  const result = await response.json();

  console.log(result);
}

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  Login('https://dummyjson.com/auth/login', Data)
 } 
)
  
// window.location.replace('https://dummyjson.com/products');
// user: 'kminchelle',
// pw: '0lelplR',