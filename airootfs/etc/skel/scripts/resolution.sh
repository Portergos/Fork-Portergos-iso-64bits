#!/bin/bash
RESOLUTION="xrandr -s 1280x720"
while :
# 0 means  yes
# 1 means no
do
${RESOLUTION}
sleep 5
${RESOLUTION}
sleep 5
${RESOLUTION}
LANG=C xrandr |grep -E 'current 1280 x 720'
if [ $? -eq 0 ]
then 
    bash -c "feh --bg-scale /etc/portergos/portergos_pics/wallpaper_portergos.png &"
    bash -c "pkill conky"
    bash -c "conky -c ~/.conky/i3_shortcuts/Gotham &"
    bash -c "kill $(ps -ef | grep resolution.sh | awk '{print $2}')"


else
    ${RESOLUTION}
fi
done
