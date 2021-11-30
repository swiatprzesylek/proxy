# swiatprzesylek/proxy

[![Software License][ico-license]](LICENSE.md)

A [docker image](https://hub.docker.com/r/swiatprzesylek/proxy) to proxy outside requests to local network with https support. 


## Basic usage

Set an environment value `TARGET_DOMAIN` to the url you want to proxy.

For example:

`docker run -e TARGET_DOMAIN=https://google.com -p 3000:3000 swiatprzesylek/proxy`

Run this command above to proxy google.com to your localhost:3000.

## Usage via docker-compose 

```yaml
        services:
          proxy:
            image: swiatprzesylek/proxy
            environment:
              - TARGET_DOMAIN=https://google.com
```

## SSL support

You can quickly use a generated self-signed certificate. Just pass `ENABLE_HTTPS` environment variable.

```yaml
        services:
          proxy:
            image: swiatprzesylek/proxy
            environment:
              - TARGET_DOMAIN=https://google.com
              - ENABLE_HTTPS=1
```

## Change port

By default proxy is listening on port `3000`. To change this value pass `SERVER_PORT` environment variable

```yaml
        services:
          proxy:
            image: swiatprzesylek/proxy
            environment:
              - TARGET_DOMAIN=https://google.com
              - SERVER_PORT=3001
```

## Issues

Bug reports and feature requests can be submitted on the [Github Issue Tracker](https://github.com/swiatprzesylek/proxy/issues). 

Feel free to open an issue on every question you have.


## License

**swiatprzesylek/proxy** is released under the MIT License. See the bundled LICENSE.md for details.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square