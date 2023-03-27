//Exception khi click vào nút thứ 32, trả về một giá trị khác nút 32
window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

//Khi nhấn sẽ dropdown list các bài nhạc xuống với thứ tự được thêm ở file index.html => phần tử được thêm vào là giới hạn
//bởi file html chứa class

document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

//Hiển thị ra list các bài nhạc đã thêm sẵn ở các object phía dưới

document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

//Thanh tiến trình của bài nhạc, khi thay đổi nó sẽ tự động kéo tới đoạn thời gian mà nhạc nhận đc
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  //lấy giá trị offset trong hình phẳng (rectangle)
  var offset = this.getBoundingClientRect();
  //Lấy giá trị trục ngang của thanh progress
  var x = e.pageX - offset.left;

  //Đặt tiến trình bài nhạc đến điểm chọn trên thanh progress bar theo trục X màn hình
  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';


//JSON Object
Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },

  "songs": [
    
    {
      "name": "Dawn - Janji",
      "artist": "Janji",
      "album": "Electron Music Dance",
      "url": "music/Dawn.mp3",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://is3-ssl.mzstatic.com/image/thumb/Music5/v4/66/9b/55/669b55f4-370a-d8ff-2877-298487f4ed1b/5054316703518_cover.jpg/400x400bb.jpg"
    },
    {
      "name": "Liar Mask - Mayama Rika",
      "artist": "Rika",
      "album": "AM",
      "url": "music/Liar_Mask.mp3",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Ff944423da0cad6c07d117a8cdd6e86c9.873x873x1.jpg"
    },
    {
      "name": "IDo - 911",
      "artist": "911",
      "album": "Music",
      "url": "music/IDo.mp3",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://t2.genius.com/unsafe/204x204/https%3A%2F%2Fimages.genius.com%2F9cba98fb6e1e463a1b53613b0ba12b2c.192x192x1.jpg"
    },
    {
      "name": "The Awakening",
      "artist": "Onlap",
      "album": "Music",
      "url": "music/The_Awakening.mp3",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://t2.genius.com/unsafe/320x320/https%3A%2F%2Fimages.genius.com%2F0299a4f37cbcd9523987b58ed24f6220.1000x1000x1.webp"
    },
    {
      "name": "The Resistance",
      "artist": "Skillet",
      "album": "Music",
      "url": "music/The_Resistance.mp3",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://t2.genius.com/unsafe/316x316/https%3A%2F%2Fimages.genius.com%2Feb37307817e065d91557f9fac81e7e7f.1000x1000x1.jpg"
    },
    {
      "name": "Rising Kingdom",
      "artist": "Tryhard Ninja",
      "album": "Music",
      "url": "https://soundcloud.com/kadester-157124380/rising-kingdom-a-minecraft?si=a4dba2874a06411ab2a42a4445cc9bfd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F9b457d02520e47fd2cc4fe86174d37a5.1000x1000x1.jpg"
    },
    {
      "name": "Demons",
      "artist": "Imagine Dragons",
      "album": "Music",
      "url": "https://soundcloud.com/rodrigo-vidal-161486675/demons-imagine-dragons?si=31697307c8c34b488bbc01ab790e7419&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Fcc614ee6032a8b68a85647e0b3b32899.1000x1000x1.jpg"
    },
    {
      "name": "Won't Let Go",
      "artist": "Konac",
      "album": "Music",
      "url": "https://soundcloud.com/konac/wontletgo?si=dfa60c170990438dabbfb5566c2c4393&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://t2.genius.com/unsafe/303x303/https%3A%2F%2Fimages.genius.com%2F95b2f97014371bb4b15bbdc9de746cc5.500x500x1.jpg"
    },
    {
      "name": "Forgettable",
      "artist": "ft.Olivia",
      "album": "Music",
      "url": "https://soundcloud.com/djproject46/forgettable-ft-olivia-free-gift-info-below?si=82342d24d22a4b9a874d990973ac0897&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      "cover_art_url": "music/icon.jpg",
      "visualization": "michaelbromley_visualization"
      // "cover_art_url": "https://t2.genius.com/unsafe/325x325/https%3A%2F%2Fimages.genius.com%2F0b84bb1573ea79e5f21b4a777ed0a80d.799x799x1.jpg"
    },
  ],
  //*** Chưa liên kết được do tháng này soundcloud ngưng nhận yêu cầu trả API  */
  // soundcloud_client: '',
  // soundcloud_use_art: true
});

//Thêm Visual
document.getElementsByClassName('visualization-toggle')[0].addEventListener('click', function(){
  if( this.classList.contains( 'visualization-off' ) ){
    this.classList.remove('visualization-off');
    this.classList.add('visualization-on');
    document.getElementById('large-now-playing-album-art').style.display = 'none';
    document.getElementById('large-visualization').style.display = 'block';
  }else{
    this.classList.remove('visualization-on');
    this.classList.add('visualization-off');
    document.getElementById('large-now-playing-album-art').style.display = 'block';
    document.getElementById('large-visualization').style.display = 'none';
  }
});