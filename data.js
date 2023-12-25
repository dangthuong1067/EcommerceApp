import IMAGES from "./src/images/images";

const data = [
    { id: 1, content: 'Item 1', image: IMAGES.banner },
    { id: 2, content: 'Item 2', image: IMAGES.banner1 },
    { id: 3, content: 'Item 3', image: IMAGES.banner2 },
];

export const productCategory = [
    { id: 1, categoryName: 'TẤT CẢ', image: IMAGES.samsung, background: '#bac5c1', isSelectCategory: true },
    { id: 2, categoryName: 'SAMSUNG', image: IMAGES.samsung, background: '#bac5c1', },
    { id: 3, categoryName: 'IPHONE', image: IMAGES.apple, background: '#fdf6ec', },
    { id: 4, categoryName: 'VIVO', image: IMAGES.vivo, background: '#fde8e5' },
    { id: 5, categoryName: 'XIAOMI', image: IMAGES.xiaomi, background: '#f4eaf5' },
    { id: 6, categoryName: 'OPPO', image: IMAGES.oppo, background: '#b0b7bd' }
]

export const productData = [
    { id: 1, name: 'Sam sung 1', image: IMAGES.samsung1, price: 1000000, reducedPrice: 500000, capacity: "4GB", idCategory: 2 },
    { id: 2, name: 'Sam sung 2', image: IMAGES.samsung2, price: 2000000, reducedPrice: 100000, capacity: "4GB", idCategory: 2 },
    { id: 3, name: 'Sam sung 3', image: IMAGES.samsung3, price: 3000000, reducedPrice: 200000, capacity: "4GB", idCategory: 2 },
    { id: 4, name: 'Sam sung 4', image: IMAGES.samsung4, price: 4000000, reducedPrice: 300000, capacity: "4GB", idCategory: 2 },
    { id: 5, name: 'Sam sung 5', image: IMAGES.samsung5, price: 5000000, reducedPrice: 400000, capacity: "6GB", idCategory: 2 },
    { id: 6, name: 'Sam sung 6', image: IMAGES.samsung6, price: 6000000, reducedPrice: 500000, capacity: "6GB", idCategory: 2 },
    { id: 7, name: 'Sam sung 7', image: IMAGES.samsung7, price: 7000000, reducedPrice: 600000, capacity: "6GB", idCategory: 2 },
    { id: 8, name: 'Sam sung 8', image: IMAGES.samsung8, price: 8000000, reducedPrice: 700000, capacity: "6GB", idCategory: 2 },

    { id: 9, name: 'iPhone 11', image: IMAGES.iphone11, price: 4000000, reducedPrice: 300000, capacity: "4GB", idCategory: 3 },
    { id: 10, name: 'iPhone 12', image: IMAGES.iphone12, price: 5000000, reducedPrice: 400000, capacity: "6GB", idCategory: 3 },
    { id: 11, name: 'iPhone 13', image: IMAGES.iphone13, price: 6000000, reducedPrice: 500000, capacity: "6GB", idCategory: 3 },
    { id: 12, name: 'iPhone 14', image: IMAGES.iphone14, price: 7000000, reducedPrice: 600000, capacity: "6GB", idCategory: 3 },
    { id: 13, name: 'iPhone 15', image: IMAGES.iphone15, price: 8000000, reducedPrice: 700000, capacity: "6GB", idCategory: 3 },

    { id: 14, name: 'vivo V29e 5G', image: IMAGES.vivov29e, price: 4000000, reducedPrice: 300000, capacity: "4GB", idCategory: 4 },
    { id: 15, name: 'vivo Y36', image: IMAGES.vivoy36, price: 5000000, reducedPrice: 400000, capacity: "6GB", idCategory: 4 },
    { id: 16, name: 'vivo V27e', image: IMAGES.vivov27e, price: 6000000, reducedPrice: 500000, capacity: "6GB", idCategory: 4 },
    { id: 17, name: 'vivo Y22s', image: IMAGES.vivoy22s, price: 7000000, reducedPrice: 600000, capacity: "6GB", idCategory: 4 },
    { id: 18, name: 'vivo V29 5G', image: IMAGES.vivov29, price: 8000000, reducedPrice: 700000, capacity: "6GB", idCategory: 4 },

    { id: 19, name: 'Xiaomi Redmi 13C', image: IMAGES.xiaomiredmi13c, price: 4000000, reducedPrice: 300000, capacity: "4GB", idCategory: 5 },
    { id: 20, name: 'Xiaomi Redmi 12', image: IMAGES.xiaomiredmi12, price: 5000000, reducedPrice: 400000, capacity: "6GB", idCategory: 5 },
    { id: 21, name: 'Xiaomi 13T 5G', image: IMAGES.xiaomi13t, price: 6000000, reducedPrice: 500000, capacity: "6GB", idCategory: 5 },
    { id: 22, name: 'Xiaomi 13 Lite 5G', image: IMAGES.xiaomi13lite, price: 7000000, reducedPrice: 600000, capacity: "6GB", idCategory: 5 },
    { id: 23, name: 'Xiaomi Redmi Note 12 4G', image: IMAGES.xiaomiredminote12, price: 8000000, reducedPrice: 700000, capacity: "6GB", idCategory: 5 },

    { id: 24, name: 'OPPO Find N3 Flip 5G', image: IMAGES.iphone11, price: 4000000, reducedPrice: 300000, capacity: "4GB", idCategory: 6 },
    { id: 25, name: 'OPPO A38', image: IMAGES.iphone12, price: 5000000, reducedPrice: 400000, capacity: "6GB", idCategory: 6 },
    { id: 26, name: 'OPPO A57 128GB', image: IMAGES.iphone13, price: 6000000, reducedPrice: 500000, capacity: "6GB", idCategory: 6 },
    { id: 27, name: 'OPPO Reno10 5G', image: IMAGES.iphone14, price: 7000000, reducedPrice: 600000, capacity: "6GB", idCategory: 6 },
    { id: 28, name: 'OPPO A18', image: IMAGES.iphone15, price: 8000000, reducedPrice: 700000, capacity: "6GB", idCategory: 6 },
];
export default data;