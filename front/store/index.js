export const state = () => ({
  roomId: '',
  streamer: false,
  streamVideo: '',
  streamInfo: {},
  stepChange: 1,
  genreId: ''
})

export const mutations = {
  stepChanger (state, step) {
    state.stepChange = step
  },
  getRoom (state, id) {
    state.roomId = id
  },
  changeRole (state) {
    state.streamer = !state.streamer
  },
  getStream (state, video) {
    state.streamVideo = video
  },
  getStreamInfo (state, info) {
    state.streamInfo = info
  },
  saveGenre (state, genre) {
    state.genreId = genre
  }
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
  },
  async getGenre (state, genreId) {
    const genre = await this.$axios.get(`/genres/${genreId}`)
    return genre.data
  },
  async stopStream () {
    const stream = await this.$axios.put('/streams/me/stop')
    return stream.data
  },
  async getUserName () {
    const userName = await this.$axios.get('/users/me')
    return userName.data
  },
  async getOneUser (state, userId) {
    const user = await this.$axios.get(`/users/${userId}`)
    return user.data
  },
  async joinStream (state, id) {
    const stream = await this.$axios.get(`/streams/${id}`)
    return stream.data
  },
  async assignStreamRoom (state, roomId) {
    const stream = await this.$axios.put('/streams/me', { room: roomId })
    return stream.data
  },
  async getTopFive () {
    const top5 = await this.$axios.get('/users/top')
    return top5.data
  },
  async addFavouriteStreamer (state, streamerId) {
    const streamer = await this.$axios.post(`/users/me/favoriteStreamers/${streamerId}`)
    return streamer.data
  }
}
