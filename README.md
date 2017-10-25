# svg-links

Development mode:

```bash
$ dc-run svglinks_web
$ nodemon -L
```

Deploy to Digital Ocean:

```bash
$ eval $(docker-machine env digitalocean)
$ dc -f docker-compose.prod.yml up --build -d
```
