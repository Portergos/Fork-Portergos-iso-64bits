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


# code for offline iso
    ## == Remove online repo references
    sed -i 's?\[core\]?# &?' /etc/pacman.conf
    sed -i 's?\[extra\]?# &?' /etc/pacman.conf
    sed -i 's?\[community\]?# &?' /etc/pacman.conf

    sed -i 's?\[portergos_64\]?# &?' /etc/pacman.conf
    sed -i 's?\[portergos_any\]?# &?' /etc/pacman.conf
    sed -i 's?\[antergos\]?# &?' /etc/pacman.conf
    sed -i 's?\[multilib\]?# &?' /etc/pacman.conf


    sed -i 's?Include = /etc/pacman.d/mirrorlist?# &?' /etc/pacman.conf

    cat <<EOF >> /etc/pacman.conf
[arch_offline]
SigLevel = Optional TrustAll
Server = file:///srv/http/arch_offline/os/x86_64/
EOF



#vboxservice.service fix_boot_iso.service
#virtualbox now has some stuff added directly into linux kernel, even so the service needs to be enabled otherwise shared folders wont appear in the system
#accounts-daemon.service choose-mirror.service
systemctl enable pacman-init.service NetworkManager.service fix_boot_iso.service
systemctl set-default multi-user.target

