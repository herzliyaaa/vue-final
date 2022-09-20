<template>
  <div class="notfound-page">
    <div class="notfound-copy">
      <svg aria-labelledby="404" alt="404 Page not found" class="not-found">
        <title id="svgtitle1">404 Page not found</title>
        <g class="404-text">
          <g opacity=".5" fill="#3B3D3D">
            <path
              d="M320.1 209.5c0 7.2-6 12.5-13.7 12.5s-13.7-5.4-13.7-12.5v-16.3h-43.8c-8.4 0-14.1-6.4-14.1-13.5 0-.8.8-4.4 2-7L275 84.5c2-4.8 7.2-7.8 12.3-7.8 6.8 0 13.7 6 13.7 12.9 0 1.2 0 2.6-.8 4.4-11.5 26.7-20.9 47.6-32.4 74.2h24.9v-30.4c0-7.2 6-12.5 13.7-12.5 7.4 0 13.7 5.4 13.7 12.5v30.4h2.6c7.6 0 13.3 5.8 13.3 12.3 0 7-5.8 12.5-13.3 12.5h-2.6v16.5zM436.9 123.9v54.7c0 24.3-16.3 43.6-46 43.6s-46-19.3-46-43.6v-54.7c0-26.3 13.9-47.4 46-47.4 32.1.1 46 21.2 46 47.4zm-64.3-1.4v56.1c0 11.3 6.4 19.1 18.3 19.1s18.3-7.8 18.3-19.1v-56.1c0-12.7-5.2-21.7-18.3-21.7s-18.3 9-18.3 21.7zM535 209.5c0 7.2-6 12.5-13.7 12.5s-13.7-5.4-13.7-12.5v-16.3h-43.8c-8.4 0-14.1-6.4-14.1-13.5 0-.8.8-4.4 2-7l38.2-88.2c2-4.8 7.2-7.8 12.3-7.8 6.8 0 13.7 6 13.7 12.9 0 1.2 0 2.6-.8 4.4-11.5 26.7-20.9 47.6-32.4 74.2h24.9v-30.4c0-7.2 6-12.5 13.7-12.5 7.4 0 13.7 5.4 13.7 12.5v30.4h2.6c7.6 0 13.3 5.8 13.3 12.3 0 7-5.8 12.5-13.3 12.5H535v16.5z"
            />
          </g>
          <g fill="#FFF">
            <path
              d="M326.4 197.5c0 7.2-6 12.5-13.7 12.5s-13.7-5.4-13.7-12.5v-16.3h-43.8c-8.4 0-14.1-6.4-14.1-13.5 0-.8.8-4.4 2-7l38.2-88.2c2-4.8 7.2-7.8 12.3-7.8 6.8 0 13.7 6 13.7 12.9 0 1.2 0 2.6-.8 4.4-11.5 26.7-20.9 47.6-32.4 74.2H299v-30.4c0-7.2 6-12.5 13.7-12.5 7.4 0 13.7 5.4 13.7 12.5v30.4h2.6c7.6 0 13.3 5.8 13.3 12.3 0 7-5.8 12.5-13.3 12.5h-2.6v16.5zM443.2 111.9v54.7c0 24.3-16.3 43.6-46 43.6s-46-19.3-46-43.6v-54.7c0-26.3 13.9-47.4 46-47.4 32.1.1 46 21.2 46 47.4zm-64.2-1.4v56.1c0 11.3 6.4 19.1 18.3 19.1s18.3-7.8 18.3-19.1v-56.1c0-12.7-5.2-21.7-18.3-21.7s-18.3 9-18.3 21.7zM541.4 197.5c0 7.2-6 12.5-13.7 12.5-7.8 0-13.7-5.4-13.7-12.5v-16.3h-43.8c-8.4 0-14.1-6.4-14.1-13.5 0-.8.8-4.4 2-7l38.2-88.2c2-4.8 7.2-7.8 12.3-7.8 6.8 0 13.7 6 13.7 12.9 0 1.2 0 2.6-.8 4.4-11.5 26.7-20.9 47.6-32.4 74.2H514v-30.4c0-7.2 6-12.5 13.7-12.5 7.4 0 13.7 5.4 13.7 12.5v30.4h2.6c7.6 0 13.3 5.8 13.3 12.3 0 7-5.8 12.5-13.3 12.5h-2.6v16.5z"
            />
          </g>
        </g>
      </svg>
      <h1 class="page-not-found-head">page not found</h1>
      <p><a class="page-not-found-link" href="/dashboard">Go Back</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
.notfound-page {
  margin: 0;
  padding: 0;
  background-color: #bcd0f3;
  height: 100vh;
  width: 100vw;
  font-family: Roboto, Arial, sans-serif;
  color: rgb(24, 41, 85);
  text-align: center;
}
.not-found {
  width: 560px;
  height: 225px;
  margin-right: -10px;
}

.notfound-copy {
  color: rgb(58, 87, 155);
  position: fixed;
  top: 25px;
  right: 10%;
  text-align: right;
}
.page-not-found-head {
  font-weight: 700;
  font-size: 40px;
}
.page-not-found-link {
  font-weight: 300;
  color: rgb(11, 34, 43);
  border-bottom: 1.5px solid #5581d4;
  text-decoration: none;
}
.page-not-found-link a:hover {
  font-weight: 300;
  color: #fff;
  border-bottom: 2px solid #fff;
  text-decoration: none;
}
</style>
