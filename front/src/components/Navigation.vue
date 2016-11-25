<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" tag="a" to="/">My Favorite Movie</router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link tag="li" active-class="active" to="/" exact><a>Home</a></router-link>
        <router-link tag="li" active-class="active" to="/search/movies"><a>Search Movies</a></router-link>
      </ul>
    </div>
  </nav>
</template>
