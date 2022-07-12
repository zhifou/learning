# repo_name="$(echo ${REPO_NAME} | sed -e 's/\([A-Z]\)/-\L\1/g' -e 's/^-//')"
cat package.json |
    sed "s~#name#~${REPO_NAME}~" |
    sed "s~#description#~${DESCRIPTION}~" |
    sed "s~#sshURL#~${SSH_URL}~" |
    sed "s~#author#~${CREATOR}~" |
    tee package.json
cat README.md |
    sed "s~#name#~${REPO_NAME}~" |
    sed "s~#description#~${DESCRIPTION}~" |
    tee README.md
rm init.sh
