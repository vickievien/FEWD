# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
# mkdir galaxy_far_far_away

# Create a directory called `death_star`
# mkdir death_star

# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
# wsl touch darth_vader.txt princess_leia.txt storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> mkdir tatooine

# and create the following files in it:
# luke.txt
# ben_kenobi.txt
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> wsl touch luke.txt ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon> wsl touch han_solo.txt chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
#  mv ben_kenobi.txt obi_wan.txt
# Copy `storm_trooper.txt` from `death_star` to `tatooine`
# cp C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\storm_trooper.txt C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine

# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
# mv luke.txt .\millenium_falcon\
# mv .\obi_wan.txt .\millenium_falcon\

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> mv .\millenium_falcon\ ..\

# Move `millenium_falcon` into `death_star`
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> mv .\millenium_falcon\ .\death_star\

# Move `princess_leia.txt` into the `millenium_falcon`
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\princess_leia.txt .\millenium_falcon\

# Delete `obi_wan.txt`
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\millenium_falcon> rm .\obi_wan.txt

# In `galaxy_far_far_away`, make a directory called `yavin_4`
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> mkdir yavin_4

# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> mv .\death_star\millenium_falcon\ .\yavin_4\

# Make a directory in `yavin_4` called `x_wing`
# mkdir x_wing

# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
# mv .\millenium_falcon\princess_leia.txt
#  mv .\millenium_falcon\luke.txt .\x_wing\

# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# mv millenium_falcon/ ..
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# mv x_wing/ ..

# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
# mkdir tie_fighter_1
# mkdir tie_fighter_2
# mkdir tie_fighter_3

# Move `darth_vader.txt` into `tie_fighter_1`
# mv .\darth_vader.txt tie_fighter_1

# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
# cp .\storm_trooper.txt tie_fighter_2
# cp .\storm_trooper.txt tie_fighter_3

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\tie_fighter_1\ ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\tie_fighter_2\ ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\tie_fighter_3\ ..

# Be careful with this command - cannot undo!
# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).
# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete
# Remove `tie_fighters` 2 and 3.
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> rmdir tie_fighter_2
# Confirm
# The item at C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tie_fighter_2 has
# children and the Recurse parameter was not specified. If you continue, all children will be removed with the item. Are
# you sure you want to continue?
# [Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "Y"): Y
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> rmdir tie_fighter_3
# Confirm
# The item at C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tie_fighter_3 has
# children and the Recurse parameter was not specified. If you continue, all children will be removed with the item. Are
# you sure you want to continue?
# [Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "Y"): Y

# Touch a file in "**x_wing**" called "**the_force.txt**".
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> wsl touch the_force.txt

# Destroy the "**death_star**" and anyone inside of it.
# C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> rmdir .\death_star\
# Confirm
# The item at C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\ has
# children and the Recurse parameter was not specified. If you continue, all children will be removed with the item. Are
# you sure you want to continue?
# [Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "Y"): Y

# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# mv x_wing/ yavin_4/
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# mv millenium_falcon/ yavin_4/

# Celebrate!



# BELOW ARE ALL THE COMMAND LINES FROM POWERSHELL/WSL
# Windows PowerShell

# Try the new cross-platform PowerShell https://aka.ms/pscore6

# PS C:\Users\vicki> cd .\Documents\GA\GA_Courses\SEI\Homework\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework


# d-----          2/7/2022   2:36 PM                first_homework


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework> cd .\first_homework\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework


# -a----          2/7/2022   2:37 PM           2225 terminal_homework.bash


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework> mkdir galaxy_far_far_away


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework


# d-----          2/7/2022   2:42 PM                galaxy_far_far_away


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework> cd .\galaxy_far_far_away\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> mkdir death_star


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\death_star\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> touch darth_vader.txt princess_leia.txt storm_trooper.txt
# touch : The term 'touch' is not recognized as the name of a cmdlet, function, script file, or operable program. Check
# the spelling of the name, or if a path was included, verify that the path is correct and try again.
# At line:1 char:1
# + touch darth_vader.txt princess_leia.txt storm_trooper.txt
# + ~~~~~
#     + CategoryInfo          : ObjectNotFound: (touch:String) [], CommandNotFoundException


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:45 PM              0 darth_vader.txt
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt
# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:45 PM                tatooine


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\tatooine\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> wsl touch luke.txt ben_kenobi.txt

#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:47 PM                millenium_falcon


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> cd .\millenium_falcon\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon> wsl
#     Directory:
#     C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:47 PM              0 chewbaca.txt
# -a----          2/7/2022   2:47 PM              0 han_solo.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon> cd 
#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:47 PM                millenium_falcon
# -a----          2/7/2022   2:46 PM              0 ben_kenobi.txt
# -a----          2/7/2022   2:46 PM              0 luke.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:47 PM                millenium_falcon
# -a----          2/7/2022   2:46 PM              0 luke.txt
# -a----          2/7/2022   2:46 PM              0 obi_wan.txt

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd
#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:45 PM                death_star
# d-----          2/7/2022   2:53 PM                tatooine


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\death_star\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star
# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:45 PM              0 darth_vader.txt
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt
# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cp C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\storm_trooper.txt C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:47 PM                millenium_falcon
# -a----          2/7/2022   2:46 PM              0 luke.txt
# -a----          2/7/2022   2:46 PM              0 obi_wan.txt
# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


# cd : Cannot find path
# 'C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\m' because it does
# not exist.
# At line:1 char:1
# + cd m
# + ~~~~
#     + CategoryInfo          : ObjectNotFound: (C:\Users\vicki\...away\tatooine\m:String) [Set-Location], ItemNotFoundE
#    xception
#     + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.SetLocationCommand

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> cd .\millenium_falcon\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon> ls



# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:47 PM              0 chewbaca.txt
# -a----          2/7/2022   2:47 PM              0 han_solo.txt
# -a----          2/7/2022   2:46 PM              0 luke.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> ls


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:59 PM                millenium_falcon
# -a----          2/7/2022   2:46 PM              0 obi_wan.txt
# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> mv .\obi_wan.txt .\millenium_falcon\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> cd .\millenium_falcon\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon> ls
#     C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:47 PM              0 chewbaca.txt
# -a----          2/7/2022   2:47 PM              0 han_solo.txt
# -a----          2/7/2022   2:46 PM              0 luke.txt
# -a----          2/7/2022   2:46 PM              0 obi_wan.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine\millenium_falcon> cd ..
#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:59 PM                millenium_falcon
# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> mv .\millenium_falcon\ ..\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tatooine> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> ls

#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away
# ----                 -------------         ------ ----
# d-----          2/7/2022   2:45 PM                death_star
# d-----          2/7/2022   2:59 PM                millenium_falcon
# d-----          2/7/2022   2:59 PM                tatooine


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> mv .\millenium_falcon\ .\death_star\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\death_star\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star


# d-----          2/7/2022   2:59 PM                millenium_falcon
# -a----          2/7/2022   2:45 PM              0 darth_vader.txt
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt
# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\princess_leia.txt .\millenium_falcon\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> cd .\millenium_falcon\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\millenium_falcon> ls


#     Directory:
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:47 PM              0 chewbaca.txt
# -a----          2/7/2022   2:47 PM              0 han_solo.txt
# -a----          2/7/2022   2:46 PM              0 luke.txt
# -a----          2/7/2022   2:46 PM              0 obi_wan.txt
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\millenium_falcon> ls


#     Directory:
#     C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\millenium_falcon
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:47 PM              0 chewbaca.txt
# -a----          2/7/2022   2:47 PM              0 han_solo.txt
# -a----          2/7/2022   2:46 PM              0 luke.txt
# -a----          2/7/2022   2:46 PM              0 obi_wan.txt
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\millenium_falcon> rm .\obi_wan.txt
# s


#     Directory:
#     C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\millenium_falcon


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:47 PM              0 chewbaca.txt
# -a----          2/7/2022   2:47 PM              0 han_solo.txt
# -a----          2/7/2022   2:46 PM              0 luke.txt
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\millenium_falcon> cd ../..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> mkdir yavin_4


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:03 PM                yavin_4



#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:02 PM                death_star
# d-----          2/7/2022   3:00 PM                tatooine
# d-----          2/7/2022   3:03 PM                yavin_4
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\yavin_4\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:00 PM                tatooine
# d-----          2/7/2022   3:03 PM                yavin_4


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> mv .\death_star\millenium_falcon\ .\yavin_4\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd y
# cd : Cannot find path 'C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\y'
# because it does not exist.
# At line:1 char:1
# + ~~~~
#     + CategoryInfo          : ObjectNotFound: (C:\Users\vicki\..._far_far_away\y:String) [Set-Location], ItemNotFoundE
#    xception
#     + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.SetLocationCommand

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\yavin_4\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4


# d-----          2/7/2022   3:02 PM                millenium_falcon


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> mkdir x_wing


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:04 PM                x_wing


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:02 PM                millenium_falcon
# d-----          2/7/2022   3:04 PM                x_wing


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:02 PM                millenium_falcon
# d-----          2/7/2022   3:04 PM                x_wing
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> cd .\x_wing\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing


# -a----          2/7/2022   2:46 PM              0 luke.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> cd ../..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# d-----          2/7/2022   3:04 PM                death_star
# d-----          2/7/2022   3:00 PM                tatooine
# d-----          2/7/2022   3:06 PM                yavin_4


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\death_star\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
# mkdir : A positional parameter cannot be found that accepts argument 'tie_fighter_2'.
# At line:1 char:1
#     + CategoryInfo          : InvalidArgument: (:) [mkdir], ParameterBindingException
#     + FullyQualifiedErrorId : PositionalParameterNotFound,mkdir

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mkdir tie_fighter_1


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star


# ----                 -------------         ------ ----
# d-----          2/7/2022   3:09 PM                tie_fighter_1


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mkdir tie_fighter_2


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:09 PM                tie_fighter_2



#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:09 PM                tie_fighter_3


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> ls


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:09 PM                tie_fighter_1
# d-----          2/7/2022   3:09 PM                tie_fighter_2
# d-----          2/7/2022   3:09 PM                tie_fighter_3
# -a----          2/7/2022   2:45 PM              0 darth_vader.txt
# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\darth_vader.txt tie_fighter_1
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> cd tie_fighter_1


#     Directory:
#     C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\tie_fighter_1


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:10 PM                tie_fighter_1
# d-----          2/7/2022   3:09 PM                tie_fighter_2
# d-----          2/7/2022   3:09 PM                tie_fighter_3
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> cp .\storm_trooper.txt tie_fighter_2 tie_fighter_3
# Copy-Item : A positional parameter cannot be found that accepts argument 'tie_fighter_3'.
# At line:1 char:1
# + cp .\storm_trooper.txt tie_fighter_2 tie_fighter_3
# + ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#     + CategoryInfo          : InvalidArgument: (:) [Copy-Item], ParameterBindingException
#     + FullyQualifiedErrorId : PositionalParameterNotFound,Microsoft.PowerShell.Commands.CopyItemCommand

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> cp .\storm_trooper.txt tie_fighter_2
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> cd tie_fighter_2
#     Directory:
#     C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\tie_fighter_2


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\tie_fighter_2> cd ../tie_fighter_3
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\tie_fighter_3> ls

#     Directory:

# -a----          2/7/2022   2:45 PM              0 storm_trooper.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\tie_fighter_3> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\tie_fighter_1\ ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# d-----          2/7/2022   3:10 PM                death_star
# d-----          2/7/2022   3:00 PM                tatooine
# d-----          2/7/2022   3:10 PM                tie_fighter_1
# d-----          2/7/2022   3:06 PM                yavin_4


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\death_star\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\tie_fighter_2\ ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> mv .\tie_fighter_3\ ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> ls




# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:13 PM                death_star
# d-----          2/7/2022   3:00 PM                tatooine
# d-----          2/7/2022   3:12 PM                tie_fighter_2
# d-----          2/7/2022   3:12 PM                tie_fighter_3
# d-----          2/7/2022   3:06 PM                yavin_4


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> ls

#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:14 PM                death_star
# d-----          2/7/2022   3:00 PM                tatooine
# d-----          2/7/2022   3:10 PM                tie_fighter_1
# d-----          2/7/2022   3:12 PM                tie_fighter_2
# d-----          2/7/2022   3:12 PM                tie_fighter_3
# d-----          2/7/2022   3:06 PM                yavin_4


# Confirm
# The item at C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tie_fighter_2 has
# children and the Recurse parameter was not specified. If you continue, all children will be removed with the item. Are
# you sure you want to continue?
# [Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "Y"): Y
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> rmdir tie_fighter_3

# Confirm
# The item at C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\tie_fighter_3 has
# children and the Recurse parameter was not specified. If you continue, all children will be removed with the item. Are
# you sure you want to continue?


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:14 PM                death_star


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\yavin_4\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:07 PM                millenium_falcon
# d-----          2/7/2022   3:07 PM                x_wing

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> touch .\x_wing\the_force.txt
# touch : The term 'touch' is not recognized as the name of a cmdlet, function, script file, or operable program. Check
# the spelling of the name, or if a path was included, verify that the path is correct and try again.
# At line:1 char:1
# + touch .\x_wing\the_force.txt
# + ~~~~~
#     + CategoryInfo          : ObjectNotFound: (touch:String) [], CommandNotFoundException
#     + FullyQualifiedErrorId : CommandNotFoundException
# e_force.txt
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4


# Mode                 LastWriteTime         Length Name
# -a----          2/7/2022   3:17 PM              0 .x_wingthe_force.txt
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> cd .\x_wing\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing




# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> touch the_force.txt
# touch : The term 'touch' is not recognized as the name of a cmdlet, function, script file, or operable program. Check
# the spelling of the name, or if a path was included, verify that the path is correct and try again.
# At line:1 char:1
# + touch the_force.txt
# + ~~~~~
#     + CategoryInfo          : ObjectNotFound: (touch:String) [], CommandNotFoundException
#     + FullyQualifiedErrorId : CommandNotFoundException

# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> wsl touch the_PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing


# ----                 -------------         ------ ----
# -a----          2/7/2022   2:46 PM              0 luke.txt
# -a----          2/7/2022   3:18 PM              0 the_force.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> cd ..
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away

# ----                 -------------         ------ ----
# d-----          2/7/2022   3:14 PM                death_star
# d-----          2/7/2022   3:00 PM                tatooine
# d-----          2/7/2022   3:10 PM                tie_fighter_1
# d-----          2/7/2022   3:17 PM                yavin_4


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> rmdir .\death_star\

# Confirm
# The item at C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\death_star\ has
# children and the Recurse parameter was not specified. If you continue, all children will be removed with the item. Are
# you sure you want to continue?
# [Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "Y"): Y

#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:00 PM                tatooine
# d-----          2/7/2022   3:10 PM                tie_fighter_1
# d-----          2/7/2022   3:17 PM                yavin_4


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away> cd .\yavin_4\

#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:07 PM                millenium_falcon
# d-----          2/7/2022   3:18 PM                x_wing
# -a----          2/7/2022   3:17 PM              0 .x_wingthe_force.txt
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> rm .\.x_wingthe_force.txt
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# d-----          2/7/2022   3:07 PM                millenium_falcon
# d-----          2/7/2022   3:18 PM                x_wing
# -a----          2/7/2022   2:45 PM              0 princess_leia.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4> cd .\x_wing\
# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing> ls


#     Directory: C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----          2/7/2022   2:46 PM              0 luke.txt
# -a----          2/7/2022   3:18 PM              0 the_force.txt


# PS C:\Users\vicki\Documents\GA\GA_Courses\SEI\Homework\first_homework\galaxy_far_far_away\yavin_4\x_wing>

# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework# cd galaxy_far_far_away/
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# ls
# tatooine  tie_fighter_1  yavin_4
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# cd yavin_4/
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# ls
# millenium_falcon  princess_leia.txt  x_wing
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# mv millenium_falcon/
# mv: missing destination file operand after 'millenium_falcon/'
# Try 'mv --help' for more information.
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# ls
# millenium_falcon  princess_leia.txt  x_wing
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# mv millenium_falcon/ ..
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# ls
# princess_leia.txt  x_wing
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# mv x_wing/ ..
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# ls
# princess_leia.txt
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# cd ..
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# ls
# millenium_falcon  tatooine  tie_fighter_1  x_wing  yavin_4
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# mv millenium_falcon/ yavin_4/
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# ls
# tatooine  tie_fighter_1  x_wing  yavin_4
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# mv x_wing/ yavin_4/
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# ls
# tatooine  tie_fighter_1  yavin_4
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away# cd yavin_4/
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4# ls
# millenium_falcon  princess_leia.txt  x_wing
# root@DESKTOP-A7CACKI:/mnt/c/Users/vicki/Documents/GA/GA_Courses/SEI/Homework/first_homework/galaxy_far_far_away/yavin_4#