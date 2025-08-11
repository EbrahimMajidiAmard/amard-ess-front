import { userUrl, get } from "@/config/apiConfig";

async function getCurrentUser () {
    const response = await get(`${userUrl}/me`);
    const data = await response.json()
    return data
    // var data = await response.json()
    // fullName.value = data.name
    // personalCode.value = data.personalCode
}

function logout(router) {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    router.push('/auth/login')
}

export { getCurrentUser, logout }