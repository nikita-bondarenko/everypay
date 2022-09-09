import { ref } from 'vue'
export default function () {
  const isSubmitted = ref(false)
  const showMesage = () => {
    isSubmitted.value = true
    setTimeout(() => (isSubmitted.value = false), 2000)
  }

  return {
    showMesage,
    isSubmitted
  }
}
