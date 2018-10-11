#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

[[ -f ~/.bashrc_portergos ]] && . ~/.bashrc_portergos

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

BROWSER=/usr/bin/firefox
EDITOR=/usr/bin/nano

FILE_MANAGER=/usr/bin/nemo
EDITOR2=/usr/bin/xed


