function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.togglePlay = function () {
    (this.media.paused)
        ? this.media.play()
        : this.media.pause()
}

export default MediaPlayer
