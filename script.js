const topVotedApi = 'https://example.com/api/top-voted';
const recentDeathsApi = 'https://example.com/api/recent-deaths';

const placeholderTopVoted = [
  { name: 'Famous Person 1', image: 'https://placekitten.com/300/200' },
  { name: 'Famous Person 2', image: 'https://placekitten.com/301/200' },
  { name: 'Famous Person 3', image: 'https://placekitten.com/302/200' }
];

const placeholderRecentDeaths = [
  { name: 'Celebrity A', image: 'https://placekitten.com/303/200' },
  { name: 'Celebrity B', image: 'https://placekitten.com/304/200' },
  { name: 'Celebrity C', image: 'https://placekitten.com/305/200' }
];

function createSlide(person) {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  const img = document.createElement('img');
  img.src = person.image;
  const caption = document.createElement('div');
  caption.className = 'caption';
  caption.textContent = person.name;
  slide.appendChild(img);
  slide.appendChild(caption);
  return slide;
}

async function loadCarousel(api, containerId, fallbackData) {
  const wrapper = document.querySelector(`#${containerId} .swiper-wrapper`);
  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();
    data.forEach(p => wrapper.appendChild(createSlide(p)));
  } catch (e) {
    fallbackData.forEach(p => wrapper.appendChild(createSlide(p)));
  }
  new Swiper(`#${containerId}`, {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: { delay: 2500 },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  });
}

loadCarousel(topVotedApi, 'topVotedCarousel', placeholderTopVoted);
loadCarousel(recentDeathsApi, 'recentDeathsCarousel', placeholderRecentDeaths);
