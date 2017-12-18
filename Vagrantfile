# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-16.04"

  config.vm.network "forwarded_port", guest: 4040, host: 4040

  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.provision "shell", inline: "mkdir /vagrant && chown -R vagrant /vagrant"

  config.vm.provision "file", source: "./package.json", destination: "/vagrant/package.json"
  config.vm.provision "file", source: "./index.js", destination: "/vagrant/index.js"

  config.vm.provision "shell",
    inline: <<-SHELL
      # mongodb
      apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
      echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
      apt-get update && apt-get install -y mongodb-org
      service mongod start

      # nodejs
      curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
      apt-get install nodejs
    SHELL

  config.vm.provision "install",
    type: "shell",
    privileged: false,
    inline: <<-SHELL
      cd /vagrant

      # profile
      echo "cd /vagrant" >> ~/.bashrc

      # set npm global location
      mkdir ~/.npm-global
      npm config set prefix '~/.npm-global'
      echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.profile
      source ~/.profile
      npm completion >> ~/.bashrc

      # npm
      npm install -g pm2
      npm install
      pm2 start index.js
      pm2 startup
      pm2 save
    SHELL

  config.vm.provision "start",
    type: "shell",
    privileged: false,
    run: "always",
    inline: <<-SHELL
      cd /vagrant

      # pm2
      pm2 restart index.js
    SHELL
end
