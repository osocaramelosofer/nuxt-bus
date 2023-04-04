import bienvenida from '@/assets/bienvenida.mp3'


const audio = new Audio(bienvenida)

const onPlay = () => {
  if (audio.readyState >= 2) {
    audio.play()
  }
}
export default onPlay