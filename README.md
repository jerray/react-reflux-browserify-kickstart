## Usage

### Get start

```sh
$ git clone https://github.com/7lemon/react-reflux-browserify-kickstart.git myproject
$ cd myproject
$ npm install
```

### Build

```sh
$ npm run build # use `watch-build` while developing
```

### Serve

I prefer using browser-sync to start a web server. It's simple!

```sh
$ npm install -g browser-sync
$ browser-sync start --server "public" --files "public/css/*.css, public/*.html, public/js/*.js" --no-notify
```

### Enjoy!

## License

MIT
