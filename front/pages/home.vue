<template>
  <div>
    <NavBar />
    <NavigationDrawer />
    <GenreSelect />
    <GenreAlert v-if="$store.state.genreAlert" />
    <LiveStreams />
    <TopFive />
    <FooterBar />
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="scss" scoped>

</style>
