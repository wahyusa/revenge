import {
	S as y,
	i as K,
	s as V,
	e as u,
	t as c,
	k as W,
	c as v,
	a as _,
	h,
	d as o,
	m as q,
	b as E,
	g as x,
	J as i,
	n as k
} from '../chunks/index-bf1ed64f.js';
function A(b) {
	let e, d, r, a, m, s, f, p;
	return {
		c() {
			(e = u('h1')),
				(d = c('Welcome to SvelteKit')),
				(r = W()),
				(a = u('p')),
				(m = c('Visit ')),
				(s = u('a')),
				(f = c('kit.svelte.dev')),
				(p = c(' to read the documentation')),
				this.h();
		},
		l(t) {
			e = v(t, 'H1', { class: !0 });
			var l = _(e);
			(d = h(l, 'Welcome to SvelteKit')), l.forEach(o), (r = q(t)), (a = v(t, 'P', {}));
			var n = _(a);
			(m = h(n, 'Visit ')), (s = v(n, 'A', { href: !0 }));
			var S = _(s);
			(f = h(S, 'kit.svelte.dev')),
				S.forEach(o),
				(p = h(n, ' to read the documentation')),
				n.forEach(o),
				this.h();
		},
		h() {
			E(e, 'class', 'text-rose-600 text-6xl font-black'), E(s, 'href', 'https://kit.svelte.dev');
		},
		m(t, l) {
			x(t, e, l), i(e, d), x(t, r, l), x(t, a, l), i(a, m), i(a, s), i(s, f), i(a, p);
		},
		p: k,
		i: k,
		o: k,
		d(t) {
			t && o(e), t && o(r), t && o(a);
		}
	};
}
class H extends y {
	constructor(e) {
		super(), K(this, e, null, A, V, {});
	}
}
export { H as default };
