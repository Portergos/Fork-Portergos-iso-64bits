#!/bin/bash
ps caux | grep xfce4-panel > /dev/null
if [ $? -eq 0 ]
then
 pkill -9 xfce4-panel
else
 xfce4-panel --disable-wm-check &
fi
