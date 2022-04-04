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
    console.log('llega')
    return stream.data
  },
  async createStream () {
    const stream = await this.$axios.post('/streams/me')
    return stream.data
  }
}
