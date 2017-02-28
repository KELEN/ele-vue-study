/**
 * Created by kelen on 2017/2/28.
 */
/**
 * Created by kelen on 2017/2/28.
 */
const carousels = [
    {"id": 1, img: "https://img.alicdn.com/bao/uploaded/TB1X8_bOVXXXXX0apXXSutbFXXX.jpg_760x760Q30s0.jpg_.webp" },
    {"id": 2, img: "https://img.alicdn.com/bao/uploaded/TB1X8_bOVXXXXX0apXXSutbFXXX.jpg_760x760Q30s0.jpg_.webp" },
    {"id": 3, img: "https://img.alicdn.com/bao/uploaded/TB1X8_bOVXXXXX0apXXSutbFXXX.jpg_760x760Q30s0.jpg_.webp" },
    {"id": 4, img: "https://img.alicdn.com/bao/uploaded/TB1X8_bOVXXXXX0apXXSutbFXXX.jpg_760x760Q30s0.jpg_.webp" },
]

export default {
    getCarousels (cb) {
        setTimeout(() => { cb(carousels) }, 100)
    }
}