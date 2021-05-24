// import module from `../models/db.js`
const db = require('../models/db.js');
const Product = require('../models/productModel.js');

db.connect();

/*
    creates an object
    containing prodid, prodname, pimages, priceBefore, priceNow, description, details, and reviews
*/
const products = [
    {prodid: 1, prodname: 'Nike Fly By Mid', pimages: ['flyby/main.jpg', 'flyby/front.png', 'flyby/top.png', 'flyby/back.png', 'flyby/sole.png'], categories: ['Shoes', 'Men'], priceBefore: 4999.99, priceNow: 4599.99, description: "GRITTY GAME.\nPlayers who go all out, every play, in every game deserve something special for their effort. The Nike Fly.By Mid provides court-ready cushioning, support and traction for the game's constant multi-directional movements.\n\nSecure, Supportive Fit\nMid-high design with plush, foam-lined collar has a secure fit and support around your ankle.\n\nCustom Lacing\nStitched-down leather overlay provides durability and side-to-side support. Multiple lace feeds in each section let you customise how you lace up.\n\nCourt Control\nDurable rubber outsole with wavy traction pattern provides great grip on the court. ", details: ['Breathable mesh tongue', 'Resilient foam midsole', 'Tight mesh in the forefoot', 'Leather and textile materials in upper', 'Colour Shown: Wolf Grey/Pure Platinum/Metallic Silver/Cool Grey', 'Style: CD0189-013', 'Country/Region of Origin: India'], reviews: [{name: 'John', comment: 'Nice!', date: 'April 2021', score: 4}], comments: [{name: 'John', date: 'April 2021', comment: 'When will you restock?'}, {name: 'english', date: 'April 2021', comment: 'Do you have any other colors?'}]},
    {prodid: 2, prodname: 'Nike Down Shifter', pimages: ['downshifter/main.jpg', 'downshifter/front.png', 'downshifter/top.png', 'downshifter/back.png', 'downshifter/sole.png'], categories: ['Shoes', 'Men'], priceBefore: 3999.99, priceNow: 3599.99, description: 'The Nike Downshifter 10 is all about updated support and cushioning. Its lightweight and padded design helps keep you moving as you push through your miles.', details: ['Synthetic leather and textile materials in the upper', 'Colour Shown: Photon Dust/Bright Crimson/Smoke Grey/Black', 'Style: CI9981-012', 'Country/Region of Origin: Vietnam'], reviews: [{name: 'english', comment: 'I like this', date: 'May 2021', score: 4}], comments: [{name: 'german', date: 'Dec 2020', comment: 'Is this available?'}]},
    {prodid: 3, prodname: 'Uniqlo Mickey', pimages: ['UniqloMickey.jpg'], categories: ['Shirt', 'Clothing'], priceBefore: 2999.99, priceNow: 2599.99, description: "Art director Yuni Yoshida brings her unique sensibility to the world-famous Disney icons, Mickey Mouse and Minnie Mouse. This is a special collection where you can enjoy the fusion of cute and adorable Disney characters and innovative ideas.", details: ['Clothing version: Slim fit', 'Length: Regular', 'Collar type: round neck', 'Sleeve type: regular'], reviews: [{name: 'japan', comment: 'Awesome!', date: 'Jan 2021', score: 5}], comments: [{name: 'japan', date: 'Feb 2021', comment: 'Do you have any other colors?'}]},
    {prodid: 4, prodname: 'Iphone 12 Pro', pimages: ['iphone/main.png', 'iphone/camera.jpg', 'iphone/side.jpg'], categories: ['Phone', 'Electronic'], priceBefore: 74999.99, priceNow: 70999.99, description: "5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do ", details: ['iPhone 12 Pro', '6.1-inch display', 'USB-C to Lightning Cable', 'iOS 14'], reviews: [{name: 'John', comment: 'Cool!', date: 'Aug 2020', score: 3}]},
    {prodid: 5, prodname: 'Samsung Galaxy S21', pimages: ['galaxys21/main.jpg', 'galaxys21/front.jpg', 'galaxys21/frontside.jpg', 'galaxys21/back.jpg', 'galaxys21/side.jpg'], categories: ['Phone', 'Electronic'], priceBefore: 43999.99, priceNow: 43999.99, description: "Introducing Galaxy S21 Ultra 5G. Designed with a unique contour-cut camera to create a revolution in photography — letting you capture cinematic 8K video and snap epic stills, all in one go. And with Galaxy's fastest chipset, strongest glass, 5G and an all-day battery, Ultra easily lives up to its name. ", details: ['Resolution: FHD+', 'Rear camera 64+12+12 MP', 'Front camera 10 MP', 'RAM: 8GB', 'Storage: 256GB'], reviews: [{name: 'John', comment: 'I wasn\'t happy :(', score: 1}], comments: [{name: 'french', date: 'Sept 2020', comment: 'Can I try it?'}]}
]

db.insertMany(Product, products, () => console.log('Products inserted successfully'));