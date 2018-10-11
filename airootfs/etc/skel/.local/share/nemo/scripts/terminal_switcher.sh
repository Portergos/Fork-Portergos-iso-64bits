#!/bin/bash
# Using i3-wm will cause the window to open full size,must change that  floating mode
yad --title="Type a terminal of your preference" --form --field="Terminal" >/home/$USER/terminal.txt
sed -i "s/|//g" /home/$USER/terminal.txt

#yad --title="Type a terminal of your preference" --form --entry= :TERMINAL

gsettings set org.cinnamon.desktop.default-applications.terminal exec $(cat /home/$USER/terminal.txt)
rm /home/$USER/terminal.txt

#yad --geometry=400x400 --form --title="Type a terminal of your preference" --field="Terminal" >/home/$USER/terminal.txt
