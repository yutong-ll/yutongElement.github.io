import {
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-QAXAIFA7.js";

// node_modules/@vitepress-demo-preview/component/dist/preview-component.js
var f = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of o)
    t[s] = n;
  return t;
};
var O = {};
var P = {
  t: "1661231422733",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3259",
  width: "20",
  height: "20"
};
var R = createBaseVNode("path", {
  d: "M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z",
  "p-id": "3260"
}, null, -1);
var U = [
  R
];
function Z(e, o) {
  return openBlock(), createElementBlock("svg", P, U);
}
var q = f(O, [["render", Z]]);
var G = {};
var J = {
  t: "1661231449868",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3541",
  width: "20",
  height: "20"
};
var K = createBaseVNode("path", {
  d: "M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z",
  "p-id": "3542"
}, null, -1);
var Q = [
  K
];
function W(e, o) {
  return openBlock(), createElementBlock("svg", J, Q);
}
var X = f(G, [["render", W]]);
var Y = {};
var ee = {
  width: "24",
  height: "24",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var te = createStaticVNode('<path d="M13 38H41V16H30V4H13V38Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"></path><path d="M30 4L41 16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V44H28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 20H23" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M19 28H31" stroke="#333" stroke-width="4" stroke-linecap="round"></path>', 5);
var oe = [
  te
];
function ne(e, o) {
  return openBlock(), createElementBlock("svg", ee, oe);
}
var se = f(Y, [["render", ne]]);
var C = "vitepress-demo-preview";
var g = (e, o, t, s) => {
  let n = o === "" ? `${e}` : `${e}-${o}`;
  return t && (n += `__${t}`), s && (n += `--${s}`), n;
};
var N = (e = "") => ({
  b: () => g(C, e),
  e: (u = "") => g(C, e, u),
  m: (u = "") => g(C, e, "", u),
  bem: (u, _, m) => g(C, u, _, m)
});
var ce = () => {
  const e = ref(true);
  return {
    isCodeFold: e,
    setCodeFold: (t) => {
      e.value = t;
    }
  };
};
var ie = () => ({
  copyContent: ref(""),
  clickCopy: async (t) => {
    await navigator.clipboard.writeText(t);
  }
});
var re = {};
var le = {
  width: "20",
  height: "20",
  viewBox: "0 0 48 48",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
var de = createBaseVNode("path", {
  d: "M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",
  fill: "currentColor",
  stroke: "#333",
  "stroke-width": "4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
var ae = createBaseVNode("path", {
  d: "M17 24L22 29L32 19",
  fill: "currentColor",
  stroke: "#333",
  "stroke-width": "4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
var ue = [
  de,
  ae
];
function pe(e, o) {
  return openBlock(), createElementBlock("svg", le, ue);
}
var _e = f(re, [["render", pe]]);
var he = defineComponent({
  __name: "message-notice",
  props: {
    content: { default: "复制成功！" },
    close: null
  },
  setup(e, { expose: o }) {
    const t = e, s = N(), n = ref(false), u = (i) => {
      n.value = i;
    }, _ = ref(-999), m = (i) => {
      _.value = i;
    };
    watch(n, (i) => {
      i === true && setTimeout(() => {
        n.value = false;
      }, 3e3);
    });
    const w = () => {
      t.close();
    };
    return o({
      setVisible: u,
      setTopHeight: m
    }), (i, $) => (openBlock(), createBlock(Transition, {
      name: "slide-fade",
      onAfterLeave: w
    }, {
      default: withCtx(() => [
        n.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(s).bem("message-notice", "container")]),
          style: normalizeStyle({ top: _.value + "px" })
        }, [
          createVNode(_e),
          createBaseVNode("span", null, toDisplayString(e.content), 1)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var k = [];
var me = {
  open: () => {
    const e = document.createElement("div"), o = createApp(he, {
      content: "复制成功！",
      close: () => {
        document.body.removeChild(e), k.pop(), o.unmount();
      }
    }), t = o.mount(e);
    document.body.appendChild(e);
    const s = k.length, n = s === 0 ? 10 : (s + 1) * 10 + s * 42;
    t.setTopHeight(n), t.setVisible(true), k.push(t);
  }
};
var ve = ["innerHTML"];
var Ce = defineComponent({
  __name: "demo-preview",
  props: {
    code: null,
    showCode: null,
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(e) {
    const o = e, t = N(), { isCodeFold: s, setCodeFold: n } = ce(), { copyContent: u, clickCopy: _ } = ie(), m = ref(decodeURIComponent(o.code)), w = ref(decodeURIComponent(o.showCode)), i = ref(null), $ = () => {
      _(m.value), me.open();
    }, x = computed(() => {
      var l;
      return i.value ? (l = i.value) == null ? void 0 : l.clientHeight : 0;
    }), M = (l) => {
      s.value ? i.value.style.height = "0px" : i.value.style.height = `${l}px`;
    };
    return onMounted(() => {
      const l = x.value;
      M(l);
    }), watch(s, () => {
      const l = x.value;
      M(l);
    }), (l, v) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).e("container")])
    }, [
      createBaseVNode("section", {
        class: normalizeClass([unref(t).bem("preview")])
      }, [
        renderSlot(l.$slots, "default")
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(t).bem("description")])
      }, [
        createBaseVNode("div", {
          class: normalizeClass([unref(t).bem("description", "title")])
        }, toDisplayString(e.title), 3),
        createBaseVNode("div", {
          class: normalizeClass([unref(t).bem("description", "content")])
        }, toDisplayString(e.description), 3),
        createBaseVNode("div", {
          class: normalizeClass([unref(t).bem("description", "split-line")])
        }, null, 2),
        createBaseVNode("div", {
          class: normalizeClass([unref(t).bem("description", "handle-btn")])
        }, [
          unref(s) ? (openBlock(), createBlock(q, {
            key: 1,
            onClick: v[1] || (v[1] = (B) => unref(n)(false))
          })) : (openBlock(), createBlock(X, {
            key: 0,
            onClick: v[0] || (v[0] = (B) => unref(n)(true))
          })),
          createVNode(se, { onClick: $ })
        ], 2)
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(t).bem("source")]),
        ref_key: "sourceCodeArea",
        ref: i
      }, [
        createBaseVNode("div", {
          innerHTML: w.value,
          class: "language-vue"
        }, null, 8, ve)
      ], 2)
    ], 2));
  }
});
var ge = "demo-preview";
var we = {
  install(e) {
    e.component(ge, Ce);
  }
};
export {
  we as default
};
//# sourceMappingURL=@vitepress-demo-preview_component.js.map
