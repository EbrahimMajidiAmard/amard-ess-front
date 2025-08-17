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

            const validation = registerValidation()
            if (validation == false)
                return

            const response = await post(`${authUrl}/register`, {
                NationalCode: NationalCode.value,
                Phonenumber: PhoneNumber.value,
                Password: password.value
            })

            if (!response)
                return
const data = await response.json()
window.showMessage(data.title, "success")
            window.showMessage("ثبت نام شما با موفقیت انجام شد", "success")
            router.push('/auth/login')

        } catch (err) {
            window.showMessage(err.message, "error");
        }
    }

    function registerValidation() {
        var valid = true;

        if (PhoneNumber.value == '') {
            window.requared("شماره همراه")
            valid = false
        }
        else if (PhoneNumber.value.length != 11) {
            window.fixLength('شماره همراه', '11 رقمی')
            valid = false
        }

        if (NationalCode.value == '') {
            window.requared("کد ملی")
            valid = false
        }
        else if (NationalCode.value.length != 10) {
            window.fixLength('کد ملی', '10 رقمی')
            valid = false
        }

        if (password.value == '') {
            window.requared("رمز عبور")
            valid = false
        }
        else if (password.value.length < 3) {
            window.minLength('رمز عبور', '3 رقمی')
            valid = false
        }

        return valid
    }

    return { PhoneNumber, NationalCode, password, submitForm }
}

export { register }