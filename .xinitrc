xrdb ~/.Xresources

feh --bg-fill ~/res/background.jpg

pulseaudio --start
mpd
sudo hwclock -s --localtime

exec bspwm
