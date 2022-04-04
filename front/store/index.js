export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async signup (state, form) {
    const res = await this.$axios.post('/auth/signup', form)
    return res.data
  },
  async liveStreams () {
    const stream = await this.$axios.get('/streams/live')
    return stream.data
  },
  async createStream () {
    const stream = await this.$axios.post('/streams/me')
    return stream.data
  },
  async getAllGenres () {
    const genres = await this.$axios.get('/genres')
    return genres.data
  }
}
