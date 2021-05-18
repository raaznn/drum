document.addEventListener(
  "keypress",
  () => {
    var name = event.key;
    var beat = document.getElementById(name.toUpperCase());
    beat.play();
    document.getElementById("display").innerHTML = beat.parentElement.id;
  },
  false
);

async function playSound(ch) {
  ch.children[0].play();
  document.getElementById("display").innerHTML = ch.id;
}

/* https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3
https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3
https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3
https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3
https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3
https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3
https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3
https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3
https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3
https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3
https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3
https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3
https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3
https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3
https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3
https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3
https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3
https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3 */
