import { defineComponent, onMounted } from "vue";

let id = 0

const data = [
    {
        title: 'Малый бизнес',
        desc: [
            'Скорость получения',
            'информации о платежах',
            'и минимизация издержек'
        ],
        imgUrl: 'tree.png'
    },
    {
        title: 'Стартапы',
        desc: ['Автоматизация', 'бизнес-процессов', 'и бухгалтерской рутины'],
        imgUrl: 'pony.png'
    },
    {
        title: 'Разработчики',
        desc: [
            'Быстрое внедрение своих',
            'приложений для малого',
            'бизнеса и стартапов'
        ],
        imgUrl: 'lamp.png'
    }
].map((item) => {
    id++
    return {
        ...item,
        id
    }
})

onMounted(() => {
    data.forEach((item) => {
        const element = document.getElementById(`for-whom-desc-${item.id}`)
        if (element) {
            element.innerHTML = item.desc.reduce((str, stroke) => {
                return str.length > 0 ? str + '</br>' + stroke : stroke
            }, '')
        }
    })
})

const parse = () => {

}

const SoonSect = defineComponent({
    setup() {

    }
})