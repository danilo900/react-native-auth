export function Signin(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'aDSkadaoskdoadkKDAKKdddAA',
                user: {
                    name: 'Danilo Canalle',
                    email: 'daniloboian@hotmail.com'
                }
            })
        }, 2000);
    })
}