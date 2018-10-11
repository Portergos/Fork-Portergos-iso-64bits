#!/bin/bash

set -e -u

sed -i 's/#\(en_US\.UTF-8\)/\1/' /etc/locale.gen
locale-gen

ln -sf /usr/share/zoneinfo/UTC /etc/localtime

usermod -s /usr/bin/zsh root
cp -aT /etc/skel/ /root/
! id liveuser && useradd -m -p "" -g users -G "adm,audio,floppy,log,network,rfkill,scanner,storage,optical,power,wheel" -s /bin/zsh liveuser
# chmod 700 /root
chown -R liveuser:users /home/liveuser
chmod 755 /etc/sudoers.d
chmod 755 /media
chmod 440 /etc/sudoers.d/g_wheel
chmod 644 /etc/systemd/system/*.service
chown 0 /etc/sudoers.d
chown 0 /etc/sudoers.d/g_wheel

sed -i 's/#\(PermitRootLogin \).\+/\1yes/' /etc/ssh/sshd_config
sed -i "s/#Server/Server/g" /etc/pacman.d/mirrorlist
sed -i 's/#\(Storage=\)auto/\1volatile/' /etc/systemd/journald.conf

sed -i 's/#\(HandleSuspendKey=\)suspend/\1ignore/' /etc/systemd/logind.conf
sed -i 's/#\(HandleHibernateKey=\)hibernate/\1ignore/' /etc/systemd/logind.conf
sed -i 's/#\(HandleLidSwitch=\)suspend/\1ignore/' /etc/systemd/logind.conf

#vboxservice.service fix_boot_iso.service
#virtualbox now has some stuff added directly into linux kernel, even so the service needs to be enabled otherwise shared folders wont appear in the system
#accounts-daemon.service choose-mirror.service
ldconfig
systemctl enable pacman-init.service NetworkManager.service org.cups.cupsd.path vboxservice.service fix_boot_iso.service
systemctl disable systemd-sysusers.service
systemctl set-default multi-user.target

