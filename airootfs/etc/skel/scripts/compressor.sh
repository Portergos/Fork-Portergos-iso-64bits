#!/bin/bash
USER=`$(ls /home)`
CHOOSEFILE=`yad --title="Choose one compression method" --file > /tmp/compression_method`
FILE_NAME1=`sed 's@.*/@@' /tmp/compression_method > /tmp/folder_name`

CH_DIR(){
cd $(cat /tmp/compression_method)
}
COPY=`cat /tmp/folder_name`
CAT2=`cat /tmp/folder_name`

COMP1(){
tilix -e 7z a $CAT2.7z $COPY -mx=9
}

COMP2(){
tilix -e /bin/bash -c "tar cfv - $COPY | gzip -9 > $CAT2.tar.gz"
}

COMP3(){
tilix -e /bin/bash -c "tar cfv - $COPY | xz --best > $CAT2.tar.xz"
}

COMP4(){
tilix -e /bin/bash -c "tar cfv - $COPY | lrzip -z > $CAT2.lrz"
}

CLEAN(){
rm /tmp/compression_method
rm /tmp/folder_name
}

yad --title="Choose one compresison method" \
--button=7z:1 \
--button=gzip:2 \
--button=xz:3 \
--button=zpaq:4

case $? in

    "1") CH_DIR && cd ..
         COMP1
         CLEAN
            ;;
    "2") CH_DIR && cd ..
         COMP2
         CLEAN
            ;;
    "3") CH_DIR && cd ..
         COMP3
         CLEAN
            ;;
    "4") CH_DIR && cd ..
         COMP4
         CLEAN
            ;;

esac

CLEAN_UNUSED(){
test -s /tmp/folder_name
if [[ $? -eq 0 ]]
then
    continue
else
    rm /tmp/compression_method 
    rm /tmp/folder_name
fi

test -s /tmp/compression_method
if [[ $? -eq 0 ]]
then
    continue
else
    rm /tmp/compression_method 
    rm /tmp/folder_name
fi

}

CLEAN_UNUSED

#7z a [new_file] [file_to_compress] -mx=9
#tar -cf - [file_to_compress] | gzip -9 > [new_file].tar.gz
#tar -cf - [file_to_compress] | xz --best > [new_file].tar.xz
#tar -cf - [file_to_compress] | lrzip -z > [new_file].zpaq

# lrzip needs to be installed, doenst come by default
# lrzip is a little more complicated to unzip due to lack of support in graphical Archive Managers
# Must save file as .lzr
#lrzip -d file.lzr | tar xf file
#CH_DIR=`cd $(cat /home/$USER/compression_method)`
#CAT1=`cat /home/$USER/compression_method`
#COPY=`./*`

# Compression without any kind of output
#COMP1(){
#7z a $CAT2.7z $COPY -mx=9
#}

#COMP2(){
#tar cf - $COPY | gzip -9 > $CAT2.tar.gz
#}

#COMP3(){
#tar cf - $COPY | xz --best > $CAT2.tar.xz
#}

#COMP4(){
#tar cf - $COPY | lrzip -z > $CAT2.lrz
#}
