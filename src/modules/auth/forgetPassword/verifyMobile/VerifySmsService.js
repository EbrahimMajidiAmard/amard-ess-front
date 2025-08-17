import { ref } from "vue";

function verifySms() {
    const one = ref('')
    const two = ref('')
    const three = ref('')
    const four = ref('')

    const submitForm = () => {
        try {
            const code = one.value + two.value + three.value + four.value
            alert(code)
        } catch (err) {
            window.showMessage(err, "error")
        }

    }

    return { one, two, three, four, submitForm }
}

export { verifySms }