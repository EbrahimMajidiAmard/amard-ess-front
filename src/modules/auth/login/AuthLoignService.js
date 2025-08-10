import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { post, authUrl } from '@/config/apiConfig'

function login() {
  const NationalCode = ref('')
  const password = ref('')
  const router = useRouter()

  const submitForm = async () => {
    try {
      const response = await post(`${authUrl}/login`, {
        NationalCode: NationalCode.value,
        Password: password.value
      })

      if (!response.ok) {
        window.showMessage(response.statusText, 'error')
        return
      }

      var data = await response.json();
      fillToken(data.accessToken, data.refreshToken)
      router.push('/Payroll/Payslip')

    } catch (err) {
      window.showMessage(err.message, "error");
    }
  }

  return { NationalCode, password, submitForm }
}

function register() {
  const router = useRouter()
  const redirect = async () => {
    router.push('/register')
  }
  return { redirect }
}

function fillToken(accessToken, refreshToken) {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken)
    window.showMessage('به سامانه خدمات پرسنلی خوش آمدید', "success")
  } else
    localStorage.removeItem('accessToken')


  if (refreshToken)
    localStorage.setItem('refreshToken', refreshToken)
  else
    localStorage.removeItem('refreshToken')

}

export { login, register }