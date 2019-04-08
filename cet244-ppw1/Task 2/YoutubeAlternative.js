//YouTubeVideoCOllection class here
class YouTubeVideo{
    constructor(name, rating, url)
    {
        this.name = name;
        this.rating = rating;
        this.url = url;
    }   
}


//****************************************************************** */
//****************************************************************** */
//***************************Alternative**************************** */
//****************************************************************** */
//****************************************************************** */

//declaring objects individually
var video1 = new YouTubeVideo ("NASA TV Advert", 8, "https://www.youtube.com/Watch?v=WeA7edXsU40");
var video2 = new YouTubeVideo ("Supersonic Freefall", 10, "https://www.youtube.com/watch?v=FHtvDA0W34I");
var video3= new YouTubeVideo ("Moon Landing", 5, "https://www.youtube.com/watch?v=E96EPhqT-ds");
var video4= new YouTubeVideo ("Mars Insight", 6, "https://www.youtube.com/watch?v=LKLITDmm4NA");
//to add
var video5 = new YouTubeVideo ("SpaceX launch", 10, "https://www.youtube.com/watch?v=L7f-IrOo-mk");


//Declaring array
var arr = [video1, video2, video3, video4];

//adding video to an array
arr[4]=(video5);

//make a call to the allvideos method, should print all movies neatly on console
function allVideos(arr)
{
    console.log(arr)
}

//Function best videos loop thorugh array
//if array item = 10 - print all objects with rating 10 to console
function bestVideos(arr)
{
    for (i=0; i< arr.length; i++)
    {
        if (arr[i].rating == 10)
        {
            console.log('Name = '+arr[i].name+ '\n' +
            'Rating = '+arr[i].rating+ '\n' +
            'URL = '+arr[i].url+ '\n');
        }
    }
}

//make a call to the bestVideos method
//should print all movies with rating of 10, neatly to the console
console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")
console.log("--------------------------All-videos----------------------------")
console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")
allVideos(arr);
console.log("");
console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")
console.log("--------------------------Best Videos---------------------------")
console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")
bestVideos(arr);

