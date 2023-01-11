# JS30 Day 1 Things I learned from this lesson
* I have never mess with transitionEnds or Transforms in JS so that was a cool thing to learn and know
```js

  function removeTransition(e){
    // when it receives the transform property event remove the playing class
      if (e.propertyName  !== 'transform') return;
      
      // this is referring the the individual key that will be pressed
      this.classList.remove('playing')
  }
```

```js
const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
// document.body.addEventListener('keypress', logKeys)
window.addEventListener('keydown', playSound)
```

* I also learned about attribute selectors which is a cool way to target keyboard input.
* Messing with the audio files are fun and plan to make something like this again
* Haven't messed or had to do much things with keyCode's so that is something useful to know
```js
 function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.code}"]`);
        const key = document.querySelector(`.key[data-key="${e.code}"]`);
        if (!audio) return
        audio.currentTime = 0
        audio.play()
        key.classList.add('playing')

  }
  ```

* The formula to translate the hands to the degree is also neat ```(x / total (60 for min and sec 12 for hours) ) * 360 + 90; ```
* I've used the ```js Date(); ``` constructor before but it is also good to freshen up on it

## Room for Improvements
* When you spam the keys, it gets stuck. Not sure how to fix that

## Creative Ideas
* Make this type of activity for different instruments. Piano/Harp
* Basic knowledge for games that require buttons on the keyboard and how to have effects happen when they have a transition


### A good project with numerous things you could build with only a few lines of code!