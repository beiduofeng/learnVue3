import { ref, reactive } from 'vue'
import axios from 'axios'

export default function () {
    let dogs = ref(1)
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_12785.jpg'
    ])

    function addDog() {
        if (dogs.value >= 5) {
            alert('今日小狗就这些')
        } else {
            dogs.value += 1
        }
    }
    async function getDog() {
        if (dogs.value < 5) {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            console.log(result.data.message);
            dogList.push(result.data.message);
        }

    }
    return { dogs, dogList, addDog, getDog }
}