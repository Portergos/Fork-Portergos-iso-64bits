#!/bin/bash

chmod 700 ./airootfs/root
chmod -R 755 ./airootfs/etc/sudoers.d
chmod 755 ./airootfs/etc/sudoers.d
chmod 440 ./airootfs/etc/sudoers.d/g_wheel
chmod 644 ./airootfs/etc/systemd/system/*.service
chown 0 ./airootfs/etc/sudoers.d
chown 0 ./airootfs/etc/sudoers.d/g_wheel
chown root:root ./airootfs/etc/sudoers.d
chown root:root ./airootfs/etc/sudoers.d/g_wheel
chmod 755 ./airootfs/etc
