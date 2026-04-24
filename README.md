# Functional Turntable (Bedrock Add-On) Project

![Screenshot of the Features](Screenshot.png)

> This is an add-on that adds a functional turntable block into Minecraft Bedrock using the Typescript language which will then be compiled into JavaScript.

## Features:
- You can selecting and listening to songs using Bedrock's built-in JSON UI.

## Known Bugs:
- Sometimes when you click on the song you want to play, **the song doesn't play** but the message from the song being played is conveyed to the player.
- The **block rotation on the turntable doesn't work at all** (I initially used an old rotation component that is not compatible with the latest version of Minecraft until I finally deleted the component and I don't really understand about block components that are compatible with the latest version of Minecraft).
- Because this project has been decided to be abandoned, the model of the turntable block itself is not final (I'm too lazy to finish the model :v).

## Guide:
- You can start coding in the "scripts" folder (not the scripts folder in the behavior pack).
- Type in Terminal: "tsc.cmd --watch" and run it to compile the Typescript file to JavaScript and save it in the behavior pack.
- If you want to add a song, you have to convert the song to .ogg format first, then create its sound definitions in the Resource Pack, and implement the sound definitions into the script.

## Note:
I have deleted some files to avoid copyright claims such as songs and album covers, some of the deleted files include:
- RP/sounds/turntablerecord/burningdesire.ogg
- RP/sounds/turntablerecord/comealivestripped.ogg
- RP/sounds/turntablerecord/tinygiant.ogg
- RP/textures/ui_icons/burningdesires.png
- RP/textures/ui_icons/comealivestripped.png
- RP/textures/ui_icons/tinygiant.png

I'm really sorry if I can't make a good readme (I'm still a beginner in the coding world).
