x=1
while [ $x -le 99999 ]
do 
gnome-terminal -- sh -c "bash -c \"curl parrot.live; exec bash\""
# osascript -e 'tell app "Terminal"
#     do script "curl parrot.live"
# end tell'
 x=$(( $x + 1 ))
done