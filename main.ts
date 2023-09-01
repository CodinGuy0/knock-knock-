input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    led.stopAnimation()
})
input.onSound(DetectedSound.Loud, function () {
    led.setBrightness(255)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
    basic.showString("SOMEONE IS AT THE DOOR")
})
