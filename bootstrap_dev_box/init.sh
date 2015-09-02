#/usr/bin/env sh

# Run this as root to do initial user creation.

function main() {
  local username=$1
  adduser $username
}

main
