export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;
    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }
    return env.ASSETS ? env.ASSETS.fetch(request) : new Response('Recôncavo Prime WebXR', { status: 200 });
  }
};
