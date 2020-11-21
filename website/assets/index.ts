import MediaPlayer from '@ramdhei/mediaplayer'
import AutoPlay from '@ramdhei/mediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@ramdhei/mediaplayer/lib/plugins/AutoPause'
import Ads from '@ramdhei/mediaplayer/lib/plugins/Ads'

const video = document.querySelector('video')
const button: HTMLElement = document.querySelector('#play')
const toggleMute: HTMLElement = document.querySelector('#mute')

const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});
button.onclick = () => player.togglePlay()
toggleMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
