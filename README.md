# Instructions?
First download the file to your pc


`git clone https://github.com/Portergos/Fork-Portergos-iso-64bits.git`


Decompress it to your home folder

At the first time before building the iso you need to run the script to fix permissions with `./fix_permissions.sh`


To build an iso image execute the script from a terminal with
`sudo ./build.sh -v` directly from the folder

OBS: The procedure bellow is needed if you're not running a Portergos host machine. Portergos repositories are needed in your host machine in order to download packages and install in the new iso. To install it download mirror and key-ring like bellow:

```
wget https://github.com/Portergos/portergos_repository_any/releases/download/portergos_any/portergos-keyring-1-1-any.pkg.tar.xz
wget https://github.com/Portergos/portergos_repository_any/releases/download/portergos_any/portergos_any-mirrorlist-1-2-any.pkg.tar.xz
```
Then install them with:
```
sudo pacman -U portergos-keyring-1-1-any.pkg.tar.xz portergos_any-mirrorlist-1-2-any.pkg.tar.xz
```
then add the repository to your `/etc/pacman.conf` file
```
[portergos_64]
SigLevel = PackageRequired
Include = /etc/pacman.d/portergos-mirrorlist

[portergos_any]
SigLevel = PackageRequired
Include = /etc/pacman.d/portergos_any-mirrorlist
```

Finally:

```
sudo pacman -Syy
```

And now you can build the image 
`sudo ./build.sh -v`
