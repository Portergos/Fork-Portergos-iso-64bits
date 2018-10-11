#!/bin/bash
cp ~/.config/gtk-3.0/settings.ini ~/.config/gtk-3.0/settings.ini.bak
rm ~/.config/gtk-3.0/settings.ini
cp ~/.config/gtk-3.0/settings2.ini ~/.config/gtk-3.0/settings.ini

nohup sh -c "sleep 10 && rm -r ~/.config/gtk-3.0/settings.ini && cp ~/.config/gtk-3.0/settings.ini.bak ~/.config/gtk-3.0/settings.ini" &

pkill nohup
rm ~/scripts/nohup.out
rm ~/nohup.out
