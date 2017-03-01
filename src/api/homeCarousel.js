/**
 * Created by kelen on 2017/2/28.
 */
/**
 * Created by kelen on 2017/2/28.
 */
const carousels = [
    {"id": 1, img: "https://img.alicdn.com/bao/uploaded/TB1X8_bOVXXXXX0apXXSutbFXXX.jpg_760x760Q30s0.jpg_.webp" },
    {"id": 2, img: "https://img.alicdn.com/imgextra/i2/169/TB2fza9gylnpuFjSZFgXXbi7FXa_!!169-0-yamato.jpg_2200x2200Q30s0.jpg_.webp" },
    {"id": 3, img: "https://gw.alicdn.com/imgextra/i1/184/TB2hZD7g4BmpuFjSZFDXXXD8pXa_!!184-0-yamato.jpg_2200x2200Q30s0.jpg_.webp" },
    {"id": 4, img: "https://img.alicdn.com/imgextra/i3/144/TB2bLr2g5pnpuFjSZFkXXc4ZpXa_!!144-0-yamato.jpg_2200x2200Q30s0.jpg_.webp" },
]

export default {
    getCarousels (cb) {
        setTimeout(() => { cb(carousels) }, 100)
    }
}