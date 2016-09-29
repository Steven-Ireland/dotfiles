set number
set showcmd
set showmatch
set laststatus=2
set numberwidth=2

highlight LineNr ctermfg=DarkGrey

syntax enable
set noswapfile
set nowb
set nobackup

command W w !sudo tee % > /dev/null

