# Necroporra

A simple proof-of-concept website for voting on predictions about celebrity deaths and displaying notable deaths from the previous month. It uses [Swiper](https://swiperjs.com/) and [Bootstrap](https://getbootstrap.com/) for the design.

## Running

Open `index.html` in a modern browser. The page fetches data from placeholder APIs; you can replace the URLs in `script.js` with real endpoints if you have them.

## Data sources

There is no built-in API integration. You can provide your own service or adapt existing news or celebrity APIs that list notable deaths. Examples include:

- News APIs that provide obituary sections
- Wikidata or Wikipedia queries for recent deaths

Update the `topVotedApi` and `recentDeathsApi` constants in `script.js` to pull from actual endpoints when available.
