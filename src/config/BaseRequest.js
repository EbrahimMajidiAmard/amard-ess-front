import { getBaseApi } from "@/config/ApiConfig"

const authUrl = 'auth'
const payrollUrl = 'reports'
const userUrl = 'users'

async function post(endpoint, body) {
    try {
        const postBaseApi = await getBaseApi()
        const response = await fetch(`${postBaseApi}/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            var data = await response.json()
            let titleFa = ''
            if (data.detail != '')
                titleFa = errorTitlesFa[data.detail] || data.detail || "";
            else
                titleFa = errorTitlesFa[data.title] || data.title || "";
            window.showMessage(titleFa, "error")
            return null
        }

        return response

    } catch (err) {
        throw new Error(err.message, 'error')
    }
}

async function get(endpoint, params = null) {
    try {
        const baseApi = await getBaseApi()
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

        if (!response.ok) {
            var data = await response.json()
            const titleFa = errorTitlesFa[data.title] || data.title || "";
            window.showMessage(titleFa, "error")
            return
        }

        return response;

    } catch (err) {
        throw new Error(err.message, 'error');
    }
}

const errorTitlesFa = {
    "Bad Request": "درخواست شما معتبر نیست لطفاً دوباره بررسی کنید.",
    "Unauthorized": "کاربر گرامی، لطفاً ابتدا وارد حساب کاربری خود شوید.",
    "Forbidden": "دسترسی لازم برای انجام این عملیات را ندارید.",
    "Not Found": "کاربر گرامی، رکورد مورد نظر یافت نشد.",
    "Method Not Allowed": "روش انجام درخواست صحیح نیست.",
    "Request Timeout": "زمان پاسخگویی سرور به پایان رسید، لطفاً مجدداً تلاش کنید.",
    "Conflict": "تداخل در داده‌ها رخ داده است، لطفاً دوباره تلاش کنید.",
    "Gone": "مورد درخواستی دیگر موجود نیست یا حذف شده است.",
    "Internal Server Error": "مشکلی در سرور به وجود آمده است، کمی بعد تلاش کنید.",
    "Not Implemented": "این قابلیت هنوز فعال نشده است.",
    "Bad Gateway": "ارتباط با سرور دچار مشکل شده است، لطفاً بعداً تلاش کنید.",
    "Service Unavailable": "سرویس موقتا در دسترس نیست، لطفاً کمی بعد مراجعه کنید.",
    "Gateway Timeout": "زمان پاسخ سرور به پایان رسید، لطفاً دوباره تلاش کنید.",
    "Too Many Requests": "درخواست‌های شما بیش از حد مجاز است، لطفاً کمی صبر کنید.",
    "Unable to register, User is not Valid!": "ثبت نام انجام نشد، کاربر نامعتبر است!"
};

export { authUrl, userUrl, payrollUrl, post, get }