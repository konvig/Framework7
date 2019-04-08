//YouTubeVideoCOllection class here
class YouTubeVideoCollection{
    constructor(name, rating, url)
    {
        this.name = name;
        this.rating = rating;
        this.url = url;
    }

}
//instantiate class
const videos = new YouTubeVideoCollection ('Space videos',
{name: 'NASA TV Advert', rating: 8, url: 'https://www.youtube.com/Watch?v=WeA7edXsU40'},
{name: 'Supersonic Freefall', rating: 10, url: 'https://www.youtube.com/watch?v=FHtvDA0W34I'},
{name: 'Moon Landing', rating: 5, url: 'https://www.youtube.com/watch?v=E96EPhqT-ds'},
{name: 'Mars Insight', rating: 6, url: 'https://www.youtube.com/watch?v=LKLITDmm4NA'}
);


//make a call to the add method
// function add()
// {
//     videos.add({name: "SpaceX launch", rating: 10, url: "https://www.youtube.com/watch?v=L7f-IrOo-mk"});
// }

//make a call to the allvideos method, should print all movies neatly on console
function allVideos()
{
    console.log(videos);
}

//best videos function 
function bestVideos()
{
    if (videos.rating = 10)
    {
        console.log(videos.name, videos.rating, videos.url);
    }
}
console.log("******************************************************************");
console.log("******************************************************************");
console.log("***************************All Videos*****************************");
console.log("******************************************************************");
console.log("******************************************************************");
allVideos(videos);
console.log("");
console.log("******************************************************************");
console.log("******************************************************************");
console.log("**************************Best Videos*****************************");
console.log("******************************************************************");
console.log("******************************************************************");
bestVideos();
