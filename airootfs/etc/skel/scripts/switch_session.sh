#!/bin/bash

RM_XINIT(){
rm ~/.xinitrc
}

RM_OBLOGOUT(){
sudo rm /etc/oblogout.conf
}
yad --title="Choose Desktop to load" \
--button=i3:1 \
--button=xfce4:2 \
--button=openbox:3 

case $? in

    "1") RM_XINIT
         cp /home/$USER/.xinitrc_i3 /home/$USER/.xinitrc
         pkill -KILL -u $(whoami)
         ;;
    "2") RM_XINIT
         cp /home/$USER/.xinitrc_xfce4 /home/$USER/.xinitrc
         pkill -KILL -u $(whoami)
         ;;
    "3") RM_XINIT
         cp /home/$USER/.xinitrc_openbox /home/$USER/.xinitrc
         pkill -KILL -u $(whoami)
         ;;

esac

#.xinitrc_xfce4
#.xinitrc_i3
#.xinitrc_openbox
