#!/bin/bash

#sleep 30

fix_pacman(){

# Doesn't need internet
bash -c "sudo umount /etc/pacman.d/gnupg"
bash -c "sudo mkdir -p /root/.gnupg/"
bash -c "sudo touch /root/.gnupg/dirmngr_ldapservers.conf"
bash -c "sudo dirmngr &"
bash -c "sudo haveged -w 1024"
bash -c "sudo pacman-key --init"
bash -c "sudo pacman-key --add /usr/share/pacman/keyrings/portergos.gpg && sudo pacman-key --lsign-key 4F4B983A"
#sudo pacman-key --keyserver keys.gnupg.net -r 4F4B983A && sudo pacman-key --lsign-key 4F4B983A
#sudo pacman-key --init
bash -c "sudo pacman-key --populate"
bash -c "sudo pkill haveged"

# Requires internet
bash -c "ping -c 1 8.8.8.8 | grep '100% packet loss'; if [[ $? == 0 ]]; then :; sudo pacman-key --refresh-keys; sudo pacman -Syy; fi"

#wait && echo "success" > /portergos/.success || echo "failure" > /portergos/.failure
}

fix_vboxsharedfolder(){

chown liveuser:vboxsf /media

}






#fix_pacman
fix_vboxsharedfolder
rm -r /home/liveuser/scripts/fix_boot_iso.sh
