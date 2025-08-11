import { ref } from 'vue'
import { userUrl, get } from '@/config/apiConfig'
import { sendBlob } from '@/unity/ImageTools'

const fullName = ref('')
const nationalCode = ref('')
const personalCode = ref('')
const phoneNumber = ref('')
const oldPhoneNumber = ref('')
const image = ref('')


async function getUser(){
    const response = await get(`${userUrl}/me`);
    var data = await response.json()
    fullName.value = data.name
    nationalCode.value =  data.nationalCode
    personalCode.value = data.personalCode
    phoneNumber.value = data.phoneNumber
    oldPhoneNumber.value = data.phoneNumber
    image.value = '/assets/img/face.jpg'
}

async function SaveUserChanged(personalCode, phoneNumber) {
    const imagebyt = await sendBlob(image.value)
    alert(`${phoneNumber.value} + ${personalCode.value} + ${imagebyt}`)
}

//#region Image

const fileInput = ref(null)

function triggerFileInput() {
    fileInput.value.click()
}

function onFileChange(event) {
    const file = event.target.files[0]
    if (file) {
        image.value = URL.createObjectURL(file)
    }
}

function removeImage() {
      image.value = '/assets/img/face.jpg'
      fileInput.value.value = null
}

export{fileInput, triggerFileInput, onFileChange, removeImage}

//#endregion

export { fullName, nationalCode, personalCode, phoneNumber, oldPhoneNumber, image, getUser, SaveUserChanged }
