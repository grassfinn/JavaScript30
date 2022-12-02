// https://courses.wesbos.com/account/access/6386bd6740307fbbde500e5b



// todo
// log the key press
// connect to the audio
// play the sound based of key press
function logKeys(e){
    console.log(e)
    // console log for asdfghj
    if (e.key === 'a'){
        console.log('You pressed A')
        sounds[0].play();


        // play sound
        // change css classes
    }
}
// listening for the keydown
document.body.addEventListener('keypress', logKeys)

console.log('123')
