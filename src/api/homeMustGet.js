const getLists = {
    bannerTitle: '进入促销', bannerLogo: 'https://img.alicdn.com/tps/i3/TB1z5R9LXXXXXa5XFXXpu65FpXX-22-26.png_2200x2200Q30s0.jpg_.webp',
    items: [
        { title: '今日必抢', img: 'https://gju1.alicdn.com/tps/i4/1360105006761338843/TB242vmdYBkpuFjy1zkXXbSpFXa_!!0-juitemmedia.jpg_2200x2200Q30s0.jpg_.webp', oldPrice: 1598, newPrice: 759 },
        { title: '巨超值', img: 'https://img.alicdn.com/bao/upload/TB13uRUOFXXXXbzXVXXE799_VXX-800-800.jpg_2200x2200Q30s0.jpg_.webp', oldPrice: 1598, newPrice: 759 },
        { title: '进口必抢', img: 'https://img.alicdn.com/bao/upload/TB1pad7OFXXXXcUXFXXE799_VXX-800-800.jpg_2200x2200Q30s0.jpg_.webp', oldPrice: 1598, newPrice: 759 },
        { title: '型男', img: 'https://img.alicdn.com/bao/upload/TB1UKqAOFXXXXbjXXXXE799_VXX-800-800.jpg_2200x2200Q30s0.jpg_.webp', oldPrice: 1598, newPrice: 759 },
        { title: '女神范', img: 'https://img.alicdn.com/bao/upload/TB1r90ZOFXXXXchaXXXE799_VXX-800-800.jpg_2200x2200Q30s0.jpg_.webp', oldPrice: 1598, newPrice: 759 },
        { title: '焕新家', img: 'https://img.alicdn.com/bao/upload/TB1xRCpOFXXXXXcXFXXE799_VXX-800-800.jpg_2200x2200Q30s0.jpg_.webp', oldPrice: 1598, newPrice: 759 },
        { title: '爱囤货', img: 'https://img.alicdn.com/bao/upload/TB1At5cOFXXXXcXXFXXE799_VXX-800-800.jpg_2200x2200Q30s0.jpg_.webp', oldPrice: 1598, newPrice: 759 },
        { title: '美食家', img: 'https://img.alicdn.com/bao/upload/TB1qW1rOFXXXXb3XpXXE799_VXX-800-800.jpg_2200x2200Q30s0.jpg_.webp', oldPrice: 1598, newPrice: 759 },
    ]
}

export default {
    getList (cb) {
        setTimeout(() => cb(getLists),300)
    }
}
