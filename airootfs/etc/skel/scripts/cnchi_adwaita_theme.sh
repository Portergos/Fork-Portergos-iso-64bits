#!/bin/bash
sudo rm -r /root/.config/gtk-3.0/settings.ini
sudo cp /root/.config/gtk-3.0/settings.ini.bak /root/.config/gtk-3.0/settings.ini
nohup sh -c "sleep 10 && sudo rm -r /root/.config/gtk-3.0/settings.ini && sudo cp /root/.config/gtk-3.0/settings.ini.sol_bak /root/.config/gtk-3.0/settings.ini" &
sudo sh -c cnchi &
pkill nohup
rm ~/scripts/nohup.out
rm ~/nohup.out
