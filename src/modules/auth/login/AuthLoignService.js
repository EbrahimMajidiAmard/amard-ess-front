import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { post, authUrl } from '@/config/apiConfig'

function login() {
  const NationalCode = ref('')
  const password = ref('')
  const router = useRouter()

  const submitForm = async () => {
    try {
      const validation = loginValidation()
      if (validation == false)
        return

      const response = await post(`${authUrl}/login`, {
        NationalCode: NationalCode.value,
        Password: password.value
      })

      if (!response)
        return

      var data = await response.json();
      fillToken(data.accessToken, data.refreshToken)
      router.push('/Payroll/Payslip')

    } catch (err) {
      window.showMessage(err.message, "error");
    }
  }


  function loginValidation() {
    var valid = true;

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
  return { NationalCode, password, submitForm }
}

function fillToken(accessToken, refreshToken) {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken)
  } else
    localStorage.removeItem('accessToken')


  if (refreshToken)
    localStorage.setItem('refreshToken', refreshToken)
  else
    localStorage.removeItem('refreshToken')

}

export { login }