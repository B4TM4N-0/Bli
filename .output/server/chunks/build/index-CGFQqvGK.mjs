import { ref, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main$2 = {
  __name: "SectionsSection",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="flex items-center justify-between"><h2 class="text-lg font-bold tracking-wide text-white">${ssrInterpolate(__props.title)}</h2><span class="text-xs text-white/40 cursor-pointer hover:text-white/70 transition-colors"> View all → </span></div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function useScrollReveal(options = {}) {
  const config = {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
    ...options
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      if (!element) {
        return;
      }
      if (entry.isIntersecting) {
        const delay = Number(element.dataset.revealDelay ?? 0);
        element.style.transitionDelay = `${delay}ms`;
        element.classList.add("reveal-visible");
        observer.unobserve(element);
      }
    });
  }, config);
  function reveal(element, delay = 0) {
    if (!element) return;
    element.dataset.revealDelay = String(delay);
    element.classList.add("reveal-item");
    observer.observe(element);
  }
  return { reveal };
}
const _sfc_main$1 = {
  __name: "CardsScriptCard",
  __ssrInlineRender: true,
  props: {
    cover: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    rating: { type: [String, Number], required: true }
  },
  setup(__props) {
    useScrollReveal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "cardRef",
        class: "group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11131a]/90 shadow-[0_24px_90px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(124,58,237,0.16)] reveal-item"
      }, _attrs))}><div class="relative aspect-video overflow-hidden"><img${ssrRenderAttr("src", __props.cover)}${ssrRenderAttr("alt", __props.title)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div><div class="absolute inset-x-0 bottom-0 p-5"><p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">${ssrInterpolate(__props.subtitle)}</p><h3 class="mt-2 text-sm font-semibold text-white">${ssrInterpolate(__props.title)}</h3></div><div class="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-yellow-300 backdrop-blur-sm"><span>★</span><span>${ssrInterpolate(__props.rating)}</span></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ScriptCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const featured = [
  {
    id: 1,
    cover: "https://picsum.photos/seed/script1/900/600",
    title: "Phantom Glide",
    subtitle: "Jailbreak",
    rating: "4.9"
  },
  {
    id: 2,
    cover: "https://picsum.photos/seed/script2/900/600",
    title: "Void Runner",
    subtitle: "Arsenal",
    rating: "4.8"
  },
  {
    id: 3,
    cover: "https://picsum.photos/seed/script3/900/600",
    title: "Stealth Injector",
    subtitle: "Murder Mystery 2",
    rating: "4.7"
  },
  {
    id: 4,
    cover: "https://picsum.photos/seed/script4/900/600",
    title: "Nebula Boost",
    subtitle: "BedWars",
    rating: "4.8"
  }
];
const recommended = [
  {
    id: 5,
    cover: "https://picsum.photos/seed/script5/900/600",
    title: "Aurora Frame",
    subtitle: "Tower of Hell",
    rating: "4.6"
  },
  {
    id: 6,
    cover: "https://picsum.photos/seed/script6/900/600",
    title: "Cipher Burst",
    subtitle: "Blox Fruits",
    rating: "4.7"
  },
  {
    id: 7,
    cover: "https://picsum.photos/seed/script7/900/600",
    title: "Nova Track",
    subtitle: "Adopt Me",
    rating: "4.5"
  },
  {
    id: 8,
    cover: "https://picsum.photos/seed/script8/900/600",
    title: "Pulse Hack",
    subtitle: "Pet Simulator X",
    rating: "4.6"
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    useScrollReveal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"><div class="absolute left-1/2 top-12 h-72 w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_60%)] blur-3xl"></div><div class="absolute right-10 top-36 h-48 w-72 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_55%)] blur-3xl"></div></div><div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"><div class="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"><div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div class="space-y-6"><span class="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/60"> Script Vault </span><div class="space-y-6"><h1 class="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"> Xyzu </h1><p class="max-w-2xl text-base leading-7 text-white/70 sm:text-lg"> The best place to find and explore Roblox scripts. </p></div><div><button class="inline-flex items-center justify-center rounded-[7px] bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_8px_rgba(255,255,255,0.08)]"> Trending </button></div></div><div class="grid gap-4 sm:grid-cols-2"><div class="rounded-[26px] border border-white/10 bg-[#11131a]/70 p-5"><p class="text-xs uppercase tracking-[0.28em] text-white/40">Trending</p><h2 class="mt-4 text-2xl font-bold text-white">Top scripts today</h2><p class="mt-3 text-sm leading-6 text-white/60"> Discover featured Roblox scripts curated for speed, stealth, and premium performance. </p></div><div class="rounded-[26px] border border-white/10 bg-[#11131a]/70 p-5"><p class="text-xs uppercase tracking-[0.28em] text-white/40">Ready to use</p><h2 class="mt-4 text-2xl font-bold text-white">Minimal setup</h2><p class="mt-3 text-sm leading-6 text-white/60"> Browse clean script cards built around a calm, focused dark experience. </p></div></div></div></div><div class="mt-12 space-y-16">`);
      _push(ssrRenderComponent(_sfc_main$2, { title: "Featured scripts" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(featured), (script) => {
              _push2(ssrRenderComponent(_sfc_main$1, mergeProps({
                key: script.id
              }, { ref_for: true }, script), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(featured), (script) => {
                return openBlock(), createBlock(_sfc_main$1, mergeProps({
                  key: script.id
                }, { ref_for: true }, script), null, 16);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { title: "Recommended" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(recommended), (script) => {
              _push2(ssrRenderComponent(_sfc_main$1, mergeProps({
                key: script.id
              }, { ref_for: true }, script), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(recommended), (script) => {
                return openBlock(), createBlock(_sfc_main$1, mergeProps({
                  key: script.id
                }, { ref_for: true }, script), null, 16);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CGFQqvGK.mjs.map
