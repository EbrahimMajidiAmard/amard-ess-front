import { ref } from "vue";
import { get, payrollUrl } from "@/config/BaseRequest";
import { GetBlob } from '@/unity/ImageTools'
import { getCurrentUser } from "@/unity/UserTools";

const imageUrl = ref(null)
const selectedYear = ref('0')
const selectedMonth = ref('0')
const selectedLevel = ref('0')

const YearOptions = [
    { value: '1400', text: 'سال 1400' },
    { value: '1401', text: 'سال 1401' },
    { value: '1402', text: 'سال 1402' },
    { value: '1403', text: 'سال 1403' },
    { value: '1404', text: 'سال 1404' },
    { value: '1405', text: 'سال 1405' },
]

const MonthOptions = [
    { value: '1', text: "فروردین" },
    { value: '2', text: "اردیبهشت" },
    { value: '3', text: "خرداد" },
    { value: '4', text: "تیر" },
    { value: '5', text: "مرداد" },
    { value: '6', text: "شهریور" },
    { value: '7', text: "مهر" },
    { value: '8', text: "آبان" },
    { value: '9', text: "آذر" },
    { value: '10', text: "دی" },
    { value: '11', text: "بهمن" },
    { value: '12', text: "اسفند" },
]

const LevelOptions = [
    { value: '1', text: 'مرحله 1' },
    { value: '2', text: 'مرحله 2' },
    { value: '3', text: 'مرحله 3' },
    { value: '4', text: 'مرحله 4' },
    { value: '5', text: 'مرحله 5' },
]

async function submitForm() {
    var response = await get(`${payrollUrl}/payment`, {
        year: selectedYear.value,
        month: selectedMonth.value,
        level: selectedLevel.value
    })

    if (!response)
        return

    const blob = await response.blob();
    imageUrl.value = await GetBlob(blob);
}

async function downloadImage() {
    if (!imageUrl.value)
        return;

    var user = await getCurrentUser()
    const link = document.createElement('a')
    link.href = imageUrl.value
    link.download = `${user.personalCode}-${selectedYear.value}-${selectedMonth.value}-${selectedLevel.value}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

export { imageUrl, selectedYear, selectedMonth, selectedLevel, YearOptions, MonthOptions, LevelOptions, submitForm, downloadImage }