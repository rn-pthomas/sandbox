#/usr/bin/env sh

# Run this as root to do initial user creation.
adduser pat
echo 'pat ALL=(ALL:ALL) ALL' > /etc/sudoers.d/pat
