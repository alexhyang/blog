#!/bin/bash
substitute_filename () {
  for file in *; do
    sedArg="s/$1/$2/"
    newfile="$(echo $file | sed -E $sedArg)"
    if [[ $file != $newfile ]]; then
      mv $file $newfile && echo $file "->" $newfile
    fi
  done
}
