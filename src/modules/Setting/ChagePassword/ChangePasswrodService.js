import { ref } from 'vue'

const oldPassword = ref(null)
const newPassword = ref(null)
const repeatPassword = ref(null)

function submitForm() {
    alert(`${oldPassword.value} + ${newPassword.value} + ${repeatPassword.value}`)
}

function cancell() {
    oldPassword.value = null
    newPassword.value = null
    repeatPassword.value = null
}


export { oldPassword, newPassword, repeatPassword, submitForm, cancell }