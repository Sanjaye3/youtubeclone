let api_key="AIzaSyCq8N92nfb--dQIP8dJipwJ_nhlrhwioGM";
let video_http="https://www.googleapis.com/youtube/v3/videos?";
let channel_http="https://www.googleapis.com/youtube/v3/channels?"
const videoCardContainer = document.querySelector('.videos')
fetch(video_http + new URLSearchParams({
    key: api_key,
    part:'snippet',
    chart: 'mostPopular',
    maxResults:1,
    regionCode:'IN'
}))
.then(res => res.json())
.then(data =>{
     
})
const getChannelIcon= (video_data) =>{
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part:'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data =>{
        video_data.channelThumbnail =data.items[0].snippet.thumbnails.default.url;
        makeVideocard(video_data);
    })
}
const makeVideoCard = (data) =>{

}

//  search
// const searchInput = document.querySelector(".search-input");
// const searchBtn= document.querySelector(".search-btn");
// let searchlink="https://www.youtube.com/results?search_query=";

// searchBtn.addEventListener('click',()=>{
//     if(searchInput,value.length){
//         location.href=searchLink + searchInput.value;
//     }
// })