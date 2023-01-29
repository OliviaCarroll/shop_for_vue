export interface ICredentials {
    email: string,
    password: string,
    token: string,
}

function state(): ICredentials {
    return {
        email: '',
        password: '',
        token: ''
    }
}

export default state;