import { userUrl, get } from "@/config/apiConfig";

async function getCurrentUser() {
    const response = await get(`${userUrl}/me`);
    if (!response)
        return
    const data = await response.json()
    return data
}

function logout(router) {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')

    router.push('/auth/login')
    location.reload()
}

export { getCurrentUser, logout }