const baseApi = 'http://192.168.10.24:5050'
const authUrl = 'auth'
const payrollUrl = 'reports'
const userUrl = 'users'

async function post(endpoint, body) {
    try {
        const response = await fetch(`${baseApi}/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        return response

    } catch (err) {
        throw new Error(err.message, 'error')
    }
}

// async function get(endpoint, params = null) {
//     try {
//         let url = `${baseApi}/${endpoint}`

//         if (params && typeof params === 'object') {
//             const queryString = new URLSearchParams(params).toString()
//             url += `?${queryString}`
//         }

//         const response = await fetch(url, {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' }
//         })

//         return response

//     } catch (err) {
//         throw new Error(err.message, 'error')
//     }

// }

async function get(endpoint, params = null) {
    try {
        let url = `${baseApi}/${endpoint}`;

        if (params && typeof params === 'object') {
            const queryString = new URLSearchParams(params).toString();
            url += `?${queryString}`;
        }

        const accessToken = localStorage.getItem('accessToken'); // گرفتن توکن

        const headers = {
            'Content-Type': 'application/json',
        };

        if (accessToken) {
            headers['Authorization'] = `Bearer ${accessToken}`;  // اضافه کردن هدر Authorization
        }

        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        return response;

    } catch (err) {
        throw new Error(err.message, 'error');
    }
}


export { baseApi, authUrl, userUrl, payrollUrl, post, get }