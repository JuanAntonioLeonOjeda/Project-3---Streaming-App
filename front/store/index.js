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
    try {
      const streamStore = await this.$axios.get('/streams/live')
      return streamStore.data
    } catch (error) {
      throw new Error(error)
    }
  },
  async createStream (state, id) {
    const stream = await this.$axios.post('/streams/me', {
      genre: id
    })
    return stream.data
  },
  async getAllGenres () {
    const genres = await this.$axios.get('/genres')
    return genres.data
  }
}
