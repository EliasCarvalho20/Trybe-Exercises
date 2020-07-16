#!/bin/bash

DIR="/home/unix_tests/teste.sh"
if [ -e $DIR ]
  then
     echo "O caminho $DIR está habilitado!"
fi
if [ -w $DIR ]
  then
    echo "Você tem permissão para editar $DIR"
  else
    echo "Você não tem permissão para editar $DIR"
fi