const Koa = require('koa');
const Router = require('koa-router');
const Liquid = require('liquidjs');

const app = new Koa();
const router = new Router();
const liquid = new Liquid({ root: './views/' });

router.get('/', ctx => {
  ctx.body = 'Hello World';
});

router.get('/version', async ctx => {
  let params = { project: 'svg-links', version: 'v1.4.8', left: 60, right: 45 };
  ctx.body = await liquid.renderFile('version.svg', params);
  ctx.type = 'image/svg+xml';
});

app
  .use(router.routes())
  .listen(3000);
