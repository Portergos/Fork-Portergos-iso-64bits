#!/bin/bash

# Created by fernandomaroto for Portergos

# Version
# 0.1

### Requires
### Run as root or sudo!

#Update database
cd ~
# while
#echo xxxxxx | sudo -S freshclam

sudo -S freshclam

# clamscan OPTIONS File/Folder
# Uncoment desired option:

# To check all files on /home, but only display infected files and export log to /home/USER folder:
# clamscan -r -i /home > ClamAV_log_home_`date "+%d_%m_%Y_%H:%M"`.txt

# To check all files on the computer, but only display infected files and export log to /home/USER folder:
#clamscan -r -i / > ClamAV_log_root_`date "+%d_%m_%Y_%H:%M"`.txt

# To check all files on the computer, displaying the name of each file:
# clamscan -r /

# To check all files on the computer, but only display infected files and ring a bell when found:
# clamscan -r --bell -i /

# To scan all files on the computer but only display infected files when found and have this run in the background:
# clamscan -r -i / &

# To check files in the all users home directories:
# clamscan -r /home

# To check files in the USER home directory and move infected files to another folder:
# clamscan -r --move=/home/USER/VIRUS /home/USER

# To check files in the USER home directory and remove infected files (WARNING: Files are gone.):
# clamscan -r --remove /home/USER

# To see more options:
# clamscan --help

