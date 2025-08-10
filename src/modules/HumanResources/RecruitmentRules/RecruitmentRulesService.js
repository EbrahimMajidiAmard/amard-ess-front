import { ref } from 'vue'
function useRecruitmentRulesFilters() {

    const selectedYear = ref('0')

    const YearOptions = [
        { value: '1400', text: 'سال 1400' },
        { value: '1401', text: 'سال 1401' },
        { value: '1402', text: 'سال 1402' },
        { value: '1403', text: 'سال 1403' },
        { value: '1404', text: 'سال 1404' },
        { value: '1405', text: 'سال 1405' },
    ]

    return { selectedYear, YearOptions }
}

export { useRecruitmentRulesFilters }