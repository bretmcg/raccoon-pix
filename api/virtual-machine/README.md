node --version
# ... not found

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Test it:
node --version


# can kinda run app, but, have to set up open ports etc