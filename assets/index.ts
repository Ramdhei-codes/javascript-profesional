import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('video')
const button: HTMLElement = document.querySelector('#play')
const toggleMute: HTMLElement = document.querySelector('#mute')

const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
});
button.onclick = () => player.togglePlay()
toggleMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
