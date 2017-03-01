const getLists = {
    bannerTitle: '潮流酷玩', bannerLogo: 'https://img.alicdn.com/tps/i3/TB1jreQLpXXXXaxXpXXdNLcGpXX-36-42.png_2200x2200Q30s0.jpg_.webp',
    items: [
        { img: 'https://img.alicdn.com/tps/i1/TB1DL.tPFXXXXbTXVXXM0z2PXXX-372-453.jpg_2200x2200Q30s0.jpg_.webp' },
        { img: 'https://img.alicdn.com/tps/i1/TB1vekIPFXXXXbeXpXXM0z2PXXX-372-453.jpg_2200x2200Q30s0.jpg_.webp' },
        { img: 'https://img.alicdn.com/bao/upload/TB17HliOpXXXXXFXpXXM0z2PXXX-372-453.jpg_2200x2200Q30s0.jpg_.webp' }
    ]
}

export default {
    getList (cb) {
        setTimeout(() => cb(getLists),300)
    }
}
