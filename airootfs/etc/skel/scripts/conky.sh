#!/bin/bash

CONKY="/home/$USER/.conky/i3_shortcuts/Gotham"

cat ${CONKY} |grep 'own_window_type override'
if [[ $? == 0 ]]
then
	sed -i s'/own_window_type override/own_window_type no/'g ${CONKY}
	sed -i s'/own_window_transparent yes/own_window_transparent no/'g ${CONKY} 

else
	sed -i s'/own_window_type no/own_window_type override/'g ${CONKY}
	sed -i s'/own_window_transparent no/own_window_transparent yes/'g ${CONKY} 
fi

