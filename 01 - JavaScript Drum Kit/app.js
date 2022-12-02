// https://courses.wesbos.com/account/access/6386bd6740307fbbde500e5b

const sounds = document.querySelectorAll('audio')

function logKeys(e){
    // connects the audio tag to the corresponding key that has the same key/code data attribute
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const key = document.querySelector(`.key[data-key="${e.code}"]`)
    
    removeClass = () => {
      if (audio.ended) {
        key.classList.remove('playing');
      }
      // if (!audio.ended){
      //     return
      // }
      // key.classList.remove('playing')
    }
    // if the user is pressing a key that does not have an audio tag attached to it we want return the
    if (!audio) {
        return
    };
    // reset the audio so we can play it as many times as we want
    audio.currentTime = 0 // current time is the durration of the audio obj
    audio.play()

    // add class to key is down when / sounding is playing
    key.classList.add('playing')
    // remove when key is down / remove the sound finishes

    // removes class when sound clip stops playing
    setInterval(removeClass,audio.duration)

  
}
// listening for the keydown
document.body.addEventListener('keypress', logKeys)

