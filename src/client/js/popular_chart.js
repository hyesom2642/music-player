const youtube_link = `https://www.googleapis.com/youtube/v3/`;
const chart_list = document.querySelector('.music-info-top10-list');

fetch(`${youtube_link}playlistItems?part=snippet&playlistId=PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m&maxResults=10&key=AIzaSyCxXKBUC9LV7b5Qf1ne75nr2vJt59_VNC4`)
  .then(res => res.json())
  .then(data => {
    for(let i = 0; i < 10; i++) {
      let chart_item = `
        <li class="music-info-top10-item">
          <span class="rank">${i + 1}</span>
          <img class="album" src="${data.items[i].snippet.thumbnails.default.url}" alt="" />
          <div class="etc" data-id="${data.items[i].snippet.resourceId.videoId}">
          <strong class="song">${data.items[i].snippet.title}</strong>
            <span class="singer">${data.items[i].snippet.channelTitle}</span>
          </div>
          <div class="button-group">
            <button class="play" type="button">재생</button>
            <button class="add" type="button">담기</button>
          </div>
        </li>
      `;
      chart_list.insertAdjacentHTML('beforeend', chart_item);
    }
    const music_info = document.querySelectorAll('.music-info-top10-item .etc');
      const player_playButton = document.querySelector('.player-button-play');
      const player_pauseButton = document.querySelector('.player-button-pause');
      var player;

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubePlayerAPIReady = function(id_value) {
        player = new YT.Player('player', {
          videoId: `${id_value}`,
          events: {
              'onReady': onPlayerReady,
              // 'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(e) {
      e.target.playVideo();

      player_playButton.addEventListener('click', function() {
        player.playVideo();
      });
      
      player_pauseButton.addEventListener('click', function() {
        player.pauseVideo();
      })
    }
    music_info.forEach((item) => {
      item.addEventListener('click', function() {
        let id_value = this.dataset.id;
        console.log(id_value);
        player.loadVideoById(id_value);
      });
    });      
  })
  .catch(error => {
    console.log(error);
  })