# Vagrant Parse-Server

5 minutes `Parse-Server` with `Parse-Dashboard` local, on Vagrant.

## Getting Started

This will get you running [Parse-Server](http://parseplatform.org/) and [Parse-Dashboard](https://github.com/parse-community/parse-dashboard) as [Express](https://expressjs.com/) middleware on a Vagrant ubuntu-16.04 virtual machine. On top, as a proces manager for Node.js, we'll run [PM2](http://pm2.io/).

### Prerequisites

For you local machine you'll need only:

```
- [Vagrant](https://www.vagrantup.com/) ~2.0.1
- [VirtualBox](https://www.virtualbox.org/) ~5.1.30
```

### Installing

Clone this repo

```
git clone https://github.com/zalog/vagrant-parse-server.git
cd vagrant-parse-server
```

Build the virtual machine

```
vagrant up
```

That's it!

Parse-Server
- http://localhost:4040/parse

Parse-Dashboard:
- http://localhost:4040/dashboard/
  - user: admin
  - pass: admin

## Built With

* [Vagrant](https://www.vagrantup.com/)
* [VirtualBox](https://www.virtualbox.org/)
* [Node.js](https://nodejs.org/)
* [Parse Server](https://github.com/parse-community/parse-server)
* [Parse Dashboard](https://github.com/parse-community/parse-dashboard)
* [Express](https://expressjs.com/)
* [PM2](http://pm2.io/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Contributing

Please read angular's [CONTRIBUTING.md](https://github.com/angular/angular/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Catalin Zalog** - [zalog.ro](http://zalog.ro/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://en.wikipedia.org/wiki/MIT_License) file for details
