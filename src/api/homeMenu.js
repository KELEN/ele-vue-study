/**
 * Created by kelen on 2017/2/28.
 */
const menus = [
    {"id": 1, "title": "积分乐园", "logo": "https://img.alicdn.com/tps/i4/TB1gWFLKFXXXXXLXXXXwu0bFXXX.png_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 2, "title": "充值", "logo": "https://img.alicdn.com/tps/TB1x35fLXXXXXaWaXXXXXXXXXXX-160-160.jpg_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 3, "title": "天猫国际", "logo": "https://img.alicdn.com/tps/i4/TB1D4VmKFXXXXcRXVXXwu0bFXXX.png_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 4, "title": "聚划算", "logo": "https://img.alicdn.com/tps/i4/TB1ONhvKFXXXXb_XFXXwu0bFXXX.png_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 5, "title": "天猫超市", "logo": "https://img.alicdn.com/tps/TB1J.e2KVXXXXafXFXXXXXXXXXX-160-160.png_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 6, "title": "免费试用", "logo": "https://img.alicdn.com/tps/i4/TB1RRdgKFXXXXaOaXXXwu0bFXXX.png_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 7, "title": "尤物", "logo": "https://img.alicdn.com/tps/i4/TB1cs46NpXXXXadXpXXwu0bFXXX.png_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 8, "title": "粉丝趴", "logo": "https://img.alicdn.com/tps/i4/TB1jwdFKFXXXXc9XXXXwu0bFXXX.png_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 9, "title": "防禽流感", "logo": "https://img.alicdn.com/tps/TB1NFs5PFXXXXaJXXXXXXXXXXXX-160-160.png_760x760Q30s0.jpg_.webp", link: "jhs" },
    {"id": 10, "title": "分类", "logo": "https://img.alicdn.com/tps/i4/TB12oXAKFXXXXcDXpXXwu0bFXXX.png_760x760Q30s0.jpg_.webp", link: "jhs" }
]

export default {
    getMenus (cb) {
        setTimeout(() => { cb(menus) }, 100)
    }
}