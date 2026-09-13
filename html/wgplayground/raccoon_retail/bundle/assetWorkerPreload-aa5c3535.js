import "https://play.wgplayground.com/static/97f93d42cb2c227f25661b72fe22055b/bundle/module-workers-polyfill-5503f0ff-be32a0e2.js";

import "https://play.wgplayground.com/static/97f93d42cb2c227f25661b72fe22055b/bundle/subworkers-f28dd231-9e75e91e.js";

const r = new URL(new URL("https://play.wgplayground.com/static/97f93d42cb2c227f25661b72fe22055b/bundle/main-c2db3575.js", import.meta.url).href, import.meta.url), e = new Worker(r.href, {
    type: "module"
});

export { e as worker };
