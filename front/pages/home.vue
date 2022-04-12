<template>
  <div>
    <NavBar />
    <NavigationDrawer />
    <CreateStreamButton />
    <GenreAlert v-if="$store.state.genreAlert" />
    <GenreSelect />
    <LiveStreams />
    <TopFive />
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="scss" scoped>

</style>
