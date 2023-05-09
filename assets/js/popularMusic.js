let getTopTrack = fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=51dd7e5ed75f1d4deed20ef28f2126b2&format=json`)
  .then(res => res.json())
  .then((data) => {
    data.tracks.track.forEach((a, i) => {
      const container = document.querySelector('.container');
      const ul = document.createElement('ul');
      const li = document.createElement('li');
      const span = document.createElement('span');
      container.appendChild(ul);
      ul.appendChild(li);

      let singer = `${i+1}.${a.name}`;
      li.append(singer)

      Object.entries(data.tracks.track[i].image[0]).forEach(([key, value]) => {
        if(key === '#text') {
          const image = document.createElement('img');
          image.setAttribute('src', [value]);
          container.appendChild(image);
        }
      });

      let title = `가수명 : ${a.artist.name}`;
      container.appendChild(span);
      span.append(title);
    });
  })
  .catch((error) => {
    console.log(error);
  })

  // let chart = fetch('https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=Korea,%20Republic%20of&location=seoul&limit=30&api_key=51dd7e5ed75f1d4deed20ef28f2126b2&format=json')  
  // .then(res => res.json())
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((error) => {
  //   console.log(error);
  // })