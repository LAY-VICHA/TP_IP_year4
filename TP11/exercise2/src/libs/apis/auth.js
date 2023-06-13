var authApi = {
    async signIn(email, password) {
        console.log(email, password);
        const res = await fetch('http:/localhost:3001/auth/login',{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            }) 
        })
        const result = await res.json()
        console.log(result);
    }
}

export default authApi