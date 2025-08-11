import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { post, authUrl } from '@/config/apiConfig'

function register() {
    const PhoneNumber = ref('')
    const NationalCode = ref('')
    const password = ref('')
    const router = useRouter()

    const submitForm = async () => {
        try {

            const response = await post(`${authUrl}/login`, {
                NationalCode: NationalCode.value,
                Phonenumber: PhoneNumber.value,
                Password: password.value
            })

            if (!response.ok) {
                window.showMessage(response.statusText, 'error')
                return
            }

            window.showMessage("ثبت نام شما با موفقیت انجام شد", "success")
            router.push('/auth/login')

        } catch (err) {
            window.showMessage(err.message, "error");
        }
    }

    return { PhoneNumber, NationalCode, password, submitForm }
}

export{register}