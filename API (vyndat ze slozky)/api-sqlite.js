var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('boardworldDB');
db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS BoardWorld(Id INTEGER, Type TEXT, Title TEXT, Image_tit TEXT, Brand TEXT, Ability TEXT, Length TEXT, Price TEXT, Stock TEXT, Gender TEXT, Description TEXT, Gallery1 TEXT, Gallery2 TEXT, Gallery3 TEXT, Gallery4 TEXT, Gallery5 TEXT, Gallery6 TEXT)");
    db.run("DELETE FROM BoardWorld");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "0", "Surfboard", "Bradley LC6 Gladiator", "http://localhost:3000/img/1.jpg", "Bradley", "Intermediate", "152.4 cm", "£599", "15 pcs", "Both", "The Gladiator has a slimmed down nose and tail to keep things lively, the rail line is very straight right through to the tail for plenty of drive and projection in small waves. The squash tail is slightly wider than average for acceleration, with a regular single to double concave out through the fins.", "http://localhost:3000/img/2.jpg", "http://localhost:3000/img/3.jpg", "http://localhost:3000/img/4.jpg", "http://localhost:3000/img/5.jpg", "http://localhost:3000/img/6.jpg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "1", "Surfboard", "Firewire LFT Hydronaut", "http://localhost:3000/img/7.jpg", "Firewire", "Intermediate", "152.4 cm", "£680", "2 pcs", "Both", "According to the Firewire website the Hydronaut's ideal wave size would be 3 - 6 feet but this sounds a little limiting to us. Sized right this step-up will thrive in sizeable waves, perfect for Bali and the bigger days in the Maldives, right at home in the chunkier barrels of France and Portugal and now having had the opportunity to tuck it under an arm we think the Hydronaut would be fun on those chunky winter days here in the UK and Ireland.", "http://localhost:3000/img/8.jpg", "http://localhost:3000/img/9.jpg", "http://localhost:3000/img/10.jpg", "http://localhost:3000/img/11.jpg", "http://localhost:3000/img/12.jpg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "2", "Surfboard", "Pyzel Gremlin", "http://localhost:3000/img/13.jpg", "Pyzel", "Intermediate", "182.88", "£585", "4 pcs", "Both", "The Pyzel Gremlin surfboard is the shorter, wider and flatter rockered cousin of the Pyzel Ghost and Phantom models. The Gremlin is in effect a step-down Phantom, designed to make the most of average conditions and in reality the vast majority of waves we encounter at home and on our travels throughout Europe and the Canaries etc.", "http://localhost:3000/img/14.jpg", "http://localhost:3000/img/15.jpg", "http://localhost:3000/img/16.jpg", "http://localhost:3000/img/17.jpg", "http://localhost:3000/img/18.jpg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "3", "Surfboard", "Firewire Timbertek Greedy", "http://localhost:3000/img/19.jpg", "Firewire", "Begginer", "182.88", "£680", "7 pcs", "Both", "The Firewire Timbertek Greedy Beaver surfboard. The Greedy Beaver looks like a longboard, has all the benefits that a longboard brings but it’s a shortboard in spirit. It’s got the wave catching ability and the glide of a log but has the manoeuvrability you associate with a shortboard. You can put it on a rail and surf it off the tail and it comes to life like you can't believe, tight turns and pocket surfing are a reality on a board which looks like a longboard.", "http://localhost:3000/img/20.jpg", "http://localhost:3000/img/21.jpg", "http://localhost:3000/img/22.jpg", "http://localhost:3000/img/23.jpg", "http://localhost:3000/img/24.jpg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "4", "Surfboard", "Lost Surfboards Bean Bag", "http://localhost:3000/img/25.jpg", "Lost", "Advanced", "152.4 cm", "£635", "3 pcs", "Both", "The Lost Bean Bag surfboard by Matt Biolos. The Bean Bag is a radically extreme small wave toy. The concept is based around maximum surface area for lift and stability in tiny surf that would normally have you reaching for the longboard, or worse still heading home to mow the lawn! Balanced by a 'double ender' silhouette with nose to tail Vee enhancing the Bean Bag's rail to rail performance in knee high waves. Although similar to the Couch Potato, the Bean Bag has a wider tail and a much flatter overall rocker and a flat deck allowing it to be ridden thinner. ", "http://localhost:3000/img/26.jpg", "http://localhost:3000/img/27.jpg", "http://localhost:3000/img/28.jpg", "http://localhost:3000/img/29.jpg", "http://localhost:3000/img/30.jpg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "5", "Snowboard", "Jones Mountain Twin", "http://localhost:3000/img/31.jpeg", "Jones", "Intermediate", "151/154 cm", "£435", "2 pcs", "Male", "The Mountain twin is the best-selling board in the Jones range, and after taking one run on it, it's not hard to see why. By integrating the very best features of a performance freeride board into a versatile twin tip platform, the designers at Jones have created one of the most versatile all-terrain boards on the market. Equally at home blasting groomers as it is in the park or the pow, the Mountain Twin has the unique ability to handle everything that you can throw at it.", "http://localhost:3000/img/31.jpeg", "http://localhost:3000/img/31.jpeg", "http://localhost:3000/img/31.jpeg", "http://localhost:3000/img/31.jpeg", "http://localhost:3000/img/31.jpeg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "6", "Snowboard", "Jones Flagship Snowboard", "http://localhost:3000/img/32.jpg", "Jones", "Intermediate", "159 cm", "£524", "Last piece", "Both", "No matter how steep & deep the snow, this Jones Flagship will handle it all. It's one of the best freeride snowboards on the market today and the Jones Team have spent the last 20 years perfecting this beast. New for 2019, Jones have managed to make the Flagship's Power Core lighter than ever before by using wider Paulownia stringers.", "http://localhost:3000/img/33.jpg", "http://localhost:3000/img/32.jpg", "http://localhost:3000/img/33.jpg", "http://localhost:3000/img/32.jpg", "http://localhost:3000/img/33.jpg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "7", "Snowboard", "Jones Ultra Mountain", "http://localhost:3000/img/34.jpg", "Jones", "Advanced", "160 cm", "£524", "7 pcs", "Female", "The 2019 Jones Ultra Mountain Twin is the leaner, meaner big brother of award winning Jones Mountain Twin. It's the same shape as the regular Mountain Twin but it uses super lightweight materials combined with carbon stringers to create a lightweight board with explosive pop. Like the regular Mountain Twin it's designed to shred everything in it's path, be it waist deep backcountry pow or high speed groomers. The combination of rocker and camber provides great edge hold while retaining a playful side. ", "http://localhost:3000/img/35.jpg", "http://localhost:3000/img/34.jpg", "http://localhost:3000/img/35.jpg", "http://localhost:3000/img/34.jpg", "http://localhost:3000/img/35.jpg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "8", "Snowboard", "Bataleon Goliath 2019", "http://localhost:3000/img/36.jpg", "Bataleon", "Beginner", "159 cm", "£468", "Out of stock", "Both", "Our best selling snowboard for the last few years due to it’s versatility and do-everything attitude, the Bataleon Goliath is a medium flex all-mountain snowboard perfect for intermediate and advanced riders who want a board that is just as happy in the park as it is powering down groomers. It has carbon stringers running lengthways between the bindings that torsionally strengthen the board, increasing it’s edge to edge response and providing loads of pop. ", "http://localhost:3000/img/37.jpg", "http://localhost:3000/img/36.jpg", "http://localhost:3000/img/37.jpg", "http://localhost:3000/img/36.jpg", "http://localhost:3000/img/37.jpg");
    db.run("INSERT INTO BoardWorld(Id, Type, Title, Image_tit, Brand, Ability , Length, Price, Stock, Gender ,Description, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", "9", "Snowboard", "Jones Hovercraft Snowboard", "http://localhost:3000/img/38.jpg", "Jones", "Professional", "160 cm", "£612", "20 pcs", "Both", "It's a Powder day and you want that perfect snowboard to tear up the whole mountain.  You want a heavily directional snowboard with a long nose and a short tail.  You want a Rocker with a raised nose to give you effortless float in the powder. You want the Jones Hovercraft Snowboard.", "http://localhost:3000/img/38.jpg", "http://localhost:3000/img/38.jpg", "http://localhost:3000/img/38.jpg", "http://localhost:3000/img/38.jpg", "http://localhost:3000/img/38.jpg");
});
var sqlite3 = require('sqlite3').verbose();
var dbr = new sqlite3.Database('boardworldReviews');
dbr.serialize(function () {
    dbr.run("CREATE TABLE IF NOT EXISTS boardworldReviews(reviewId INTEGER PRIMARY KEY AUTOINCREMENT, Id INTEGER, pTitle TEXT, rating INTEGER, review TEXT)");
    dbr.run("DELETE FROM boardworldReviews");
    dbr.run("INSERT INTO boardworldReviews(Id, pTitle, rating, review) VALUES (?,?,?,?)", "1", "Bradley LC6 Gladiator", "10", "This surf is just amazing, it's the best buy!!");
    dbr.run("INSERT INTO boardworldReviews(Id, pTitle, rating ,review) VALUES (?,?,?,?)", "1", "Bradley LC6 Gladiator", "7", "Quality is outstanding, but FireWire is better");
    dbr.run("INSERT INTO boardworldReviews(Id, pTitle, rating ,review) VALUES (?,?,?,?)", "2", "Firewire LFT Hydronaut", "1", "Surfboard which I wouldn't recommend!");
    dbr.run("INSERT INTO boardworldReviews(Id, pTitle, rating ,review) VALUES (?,?,?,?)", "2", "Firewire LFT Hydronaut", "4", "A little bit short and slippery surface");
});
var express = require('express');
var restapi = express();
restapi.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//display all rows in the table and return as json
restapi.get('/products', function (req, res) {
    db.all("SELECT * FROM BoardWorld", function (err, rows) {
        res.jsonp(rows);
    });
});
//Endpoint for showing just surfboards
restapi.get('/surfboards', function (req, res) {
    db.all("SELECT * FROM BoardWorld where Type = 'Surfboard'", function (err, rows) {
        res.jsonp(rows);
    });
});
//Endpoint for showing just snowboards
restapi.get('/snowboards', function (req, res) {
    db.all("SELECT * FROM BoardWorld where Type = 'Snowboard'", function (err, rows) {
        res.jsonp(rows);
    });
});
//Endpoint for reviews
restapi.get('/reviews', function (req, res) {
    dbr.all("SELECT * FROM boardworldReviews", function (err, rows) {
        res.jsonp(rows);
    });
});
//Endpoint for reviews1 -> want to filter reviews like - testing
restapi.get('/review0', function (req, res) {
    dbr.all("SELECT * FROM boardworldReviews where Id = 0", function (err, rows) {
        res.jsonp(rows);
    });
});
//Multer for POST - inserting into database
var multer = require('multer');
var upload = multer();
restapi.post('/insert', upload.array(), function (req, res, next) {
    console.log(req.body.reviewId);
    console.log(req.body.Id);
    console.log(req.body.rating);
    console.log(req.body.review);
    dbr.run("INSERT INTO boardworldReviews (reviewId, Id, rating, review) VALUES (?, ?, ?, ?)", req.body.reviewId,
        req.body.Id, req.body.rating, req.body.review,
        function (error) {
            if (error) {
                console.err(error);
                res.status(500);
            } else {
                res.status(202);
            }
            res.redirect('back');
        });
});
//Getting images out of images directory
restapi.use('/img', express.static(__dirname + '/images'));

//Getting fonts out of images directory
restapi.use('/fnt', express.static(__dirname + '/fonts'));

restapi.listen(3000);
console.log("Up and running..");


