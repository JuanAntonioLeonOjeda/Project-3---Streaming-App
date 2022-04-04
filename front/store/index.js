export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async signup (state, form) {
    const res = await this.$axios.post('/auth/signup', form)
    return res.data
  }
}
