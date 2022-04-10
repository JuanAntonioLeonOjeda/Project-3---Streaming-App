<template>
  <div>
    <div class="spacer" />
    <div id="video-grid">
      <img v-if="streamerRole" class="on-air" src="~/static/giphy.gif" alt="On Air">
    </div>
  </div>
</template>

<script>
// import Peer from 'peerjs'

export default {
  name: 'StreamVideo',
  data () {
    return {
      stramerRole: this.$store.state.streamer
    }
  },
  mounted () {
    // const peer = new Peer(undefined, {
    //   path: '/peerjs',
    //   host: '/',
    //   port: 5000
    // })

    this.socket = this.$nuxtSocket({
      name: 'stream'
    })

    if (this.$store.state.role === 'streamer') {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then((stream) => {
        this.$store.commit('getStream', stream)
        addStream(stream)
      })
    } else {
      watchStream(this.$peer)
    }

    // dataConnection.on('open', function (id) {
    //   console.log(dataConnection)
    //   // eslint-disable-next-line no-console
    //   console.log(`myId: ${id}`)
    //   this.socket.emit('join-room', this.$route.params.id, id)
    // })

    this.socket.on('connection', () => {
      const dataConnection = this.$peer.connect(undefined, {
        path: '/peerjs',
        host: '/',
        port: 443
      })
      console.log(dataConnection)
      this.socket.emit('join-room', this.$route.params.id, this.socket.id)
      console.log('user connected: ' + this.socket.id)
    })

    this.socket.on('user-connected', (userId) => {
      console.log(`User ${userId} connected`)
      if (this.streamerRole) {
        const stream = this.$store.state.streamVideo
        connectToNewUser(userId, stream, this.socket)
      }
    })

    this.socket.on('stream', (stream) => {
      console.log(stream)
    })
  }
}

const addStream = (stream) => {
  const grid = document.getElementById('video-grid')
  const video = document.createElement('video')
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  grid.appendChild(video)
}

const watchStream = (peer) => {
  peer.on('call', (call) => {
    call.answer()
    let counter = 0
    call.on('stream', (stream) => {
      if (counter === 0) {
        addStream(stream)
      }
      counter++
    })
  })
}

const connectToNewUser = (userId, stream, socket) => {
  // eslint-disable-next-line no-console
  console.log('connecting to ' + userId + '...')
  socket.emit('stream', userId, stream)
  // socket.on('stream', (userId, stream) => {
  //   socket.to(userId).emit('stream', streamerId, stream)
  // })
  console.log('enviado')
  // peer.on('error', (error) => {
  //   console.log(`Peer error: ${error}`)
  // })
}

</script>

<style lang="scss" scoped>
.on-air {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 200;
    right: 10;
  }
.spacer {
  height: 100px;
}
</style>
