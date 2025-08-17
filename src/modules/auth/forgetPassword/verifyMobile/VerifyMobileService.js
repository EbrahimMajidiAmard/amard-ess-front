import { ref } from "vue"
import { useRouter } from 'vue-router'

//const phoneNumber = ref('')
function verifyMobile(){
    const phoneNumber = ref('')
    const router = useRouter()
    
    const submitForm = async () => {
        try {
            router.push('/auth/forgetPassword/verifySms')
            
        } catch (err) {
            window.showMessage(err.message,"error")
        }
    }

    return { phoneNumber, submitForm }
}

export { verifyMobile }
//export { phoneNumber, verifyMobile }