(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Vg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var If = { exports: {} },
  Ws = {},
  Of = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hi = Symbol.for("react.element"),
  _g = Symbol.for("react.portal"),
  Ig = Symbol.for("react.fragment"),
  Og = Symbol.for("react.strict_mode"),
  zg = Symbol.for("react.profiler"),
  Fg = Symbol.for("react.provider"),
  Bg = Symbol.for("react.context"),
  bg = Symbol.for("react.forward_ref"),
  Ug = Symbol.for("react.suspense"),
  $g = Symbol.for("react.memo"),
  Wg = Symbol.for("react.lazy"),
  Wu = Symbol.iterator;
function Hg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wu && e[Wu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var zf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ff = Object.assign,
  Bf = {};
function sr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Bf),
    (this.updater = n || zf));
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bf() {}
bf.prototype = sr.prototype;
function hl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Bf),
    (this.updater = n || zf));
}
var pl = (hl.prototype = new bf());
pl.constructor = hl;
Ff(pl, sr.prototype);
pl.isPureReactComponent = !0;
var Hu = Array.isArray,
  Uf = Object.prototype.hasOwnProperty,
  ml = { current: null },
  $f = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Uf.call(t, r) && !$f.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: hi,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ml.current,
  };
}
function Kg(e, t) {
  return {
    $$typeof: hi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hi;
}
function Gg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ku = /\/+/g;
function mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gg("" + e.key)
    : t.toString(36);
}
function Gi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hi:
          case _g:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + mo(o, 0) : r),
      Hu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ku, "$&/") + "/"),
          Gi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (gl(i) &&
            (i = Kg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ku, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Hu(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + mo(s, a);
      o += Gi(s, t, n, l, i);
    }
  else if (((l = Hg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (l = r + mo(s, a++)), (o += Gi(s, t, n, l, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Gi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Qg(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  Qi = { transition: null },
  Yg = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: Qi,
    ReactCurrentOwner: ml,
  };
function Hf() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: Ci,
  forEach: function (e, t, n) {
    Ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = sr;
I.Fragment = Ig;
I.Profiler = zg;
I.PureComponent = hl;
I.StrictMode = Og;
I.Suspense = Ug;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yg;
I.act = Hf;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ff({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ml.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Uf.call(t, l) &&
        !$f.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: hi, type: e.type, key: i, ref: s, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Fg, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Wf;
I.createFactory = function (e) {
  var t = Wf.bind(null, e);
  return ((t.type = e), t);
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: bg, render: e };
};
I.isValidElement = gl;
I.lazy = function (e) {
  return { $$typeof: Wg, _payload: { _status: -1, _result: e }, _init: Qg };
};
I.memo = function (e, t) {
  return { $$typeof: $g, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Qi.transition;
  Qi.transition = {};
  try {
    e();
  } finally {
    Qi.transition = t;
  }
};
I.unstable_act = Hf;
I.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
I.useContext = function (e) {
  return je.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
I.useId = function () {
  return je.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return je.current.useRef(e);
};
I.useState = function (e) {
  return je.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return je.current.useTransition();
};
I.version = "18.3.1";
Of.exports = I;
var k = Of.exports;
const Xg = Vg(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zg = k,
  qg = Symbol.for("react.element"),
  Jg = Symbol.for("react.fragment"),
  e0 = Object.prototype.hasOwnProperty,
  t0 = Zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  n0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) e0.call(t, r) && !n0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: qg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: t0.current,
  };
}
Ws.Fragment = Jg;
Ws.jsx = Kf;
Ws.jsxs = Kf;
If.exports = Ws;
var c = If.exports,
  ra = {},
  Gf = { exports: {} },
  ze = {},
  Qf = { exports: {} },
  Yf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, R) {
    var V = N.length;
    N.push(R);
    e: for (; 0 < V; ) {
      var q = (V - 1) >>> 1,
        le = N[q];
      if (0 < i(le, R)) ((N[q] = R), (N[V] = le), (V = q));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var R = N[0],
      V = N.pop();
    if (V !== R) {
      N[0] = V;
      e: for (var q = 0, le = N.length, ji = le >>> 1; q < ji; ) {
        var qt = 2 * (q + 1) - 1,
          po = N[qt],
          Jt = qt + 1,
          Pi = N[Jt];
        if (0 > i(po, V))
          Jt < le && 0 > i(Pi, po)
            ? ((N[q] = Pi), (N[Jt] = V), (q = Jt))
            : ((N[q] = po), (N[qt] = V), (q = qt));
        else if (Jt < le && 0 > i(Pi, V)) ((N[q] = Pi), (N[Jt] = V), (q = Jt));
        else break e;
      }
    }
    return R;
  }
  function i(N, R) {
    var V = N.sortIndex - R.sortIndex;
    return V !== 0 ? V : N.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    f = null,
    h = 3,
    y = !1,
    v = !1,
    x = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= N)
        (r(u), (R.sortIndex = R.expirationTime), t(l, R));
      else break;
      R = n(u);
    }
  }
  function S(N) {
    if (((x = !1), g(N), !v))
      if (n(l) !== null) ((v = !0), Ti(w));
      else {
        var R = n(u);
        R !== null && re(S, R.startTime - N);
      }
  }
  function w(N, R) {
    ((v = !1), x && ((x = !1), m(P), (P = -1)), (y = !0));
    var V = h;
    try {
      for (
        g(R), f = n(l);
        f !== null && (!(f.expirationTime > R) || (N && !ae()));
      ) {
        var q = f.callback;
        if (typeof q == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var le = q(f.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof le == "function" ? (f.callback = le) : f === n(l) && r(l),
            g(R));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var ji = !0;
      else {
        var qt = n(u);
        (qt !== null && re(S, qt.startTime - R), (ji = !1));
      }
      return ji;
    } finally {
      ((f = null), (h = V), (y = !1));
    }
  }
  var j = !1,
    E = null,
    P = -1,
    _ = 5,
    D = -1;
  function ae() {
    return !(e.unstable_now() - D < _);
  }
  function Ct() {
    if (E !== null) {
      var N = e.unstable_now();
      D = N;
      var R = !0;
      try {
        R = E(!0, N);
      } finally {
        R ? Zt() : ((j = !1), (E = null));
      }
    } else j = !1;
  }
  var Zt;
  if (typeof p == "function")
    Zt = function () {
      p(Ct);
    };
  else if (typeof MessageChannel < "u") {
    var cr = new MessageChannel(),
      $u = cr.port2;
    ((cr.port1.onmessage = Ct),
      (Zt = function () {
        $u.postMessage(null);
      }));
  } else
    Zt = function () {
      T(Ct, 0);
    };
  function Ti(N) {
    ((E = N), j || ((j = !0), Zt()));
  }
  function re(N, R) {
    P = T(function () {
      N(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), Ti(w));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (_ = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var V = h;
      h = R;
      try {
        return N();
      } finally {
        h = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, R) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var V = h;
      h = N;
      try {
        return R();
      } finally {
        h = V;
      }
    }),
    (e.unstable_scheduleCallback = function (N, R, V) {
      var q = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? q + V : q))
          : (V = q),
        N)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = V + le),
        (N = {
          id: d++,
          callback: R,
          priorityLevel: N,
          startTime: V,
          expirationTime: le,
          sortIndex: -1,
        }),
        V > q
          ? ((N.sortIndex = V),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (x ? (m(P), (P = -1)) : (x = !0), re(S, V - q)))
          : ((N.sortIndex = le), t(l, N), v || y || ((v = !0), Ti(w))),
        N
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (N) {
      var R = h;
      return function () {
        var V = h;
        h = R;
        try {
          return N.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    }));
})(Yf);
Qf.exports = Yf;
var r0 = Qf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0 = k,
  _e = r0;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xf = new Set(),
  Wr = {};
function Sn(e, t) {
  (Xn(e, t), Xn(e + "Capture", t));
}
function Xn(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) Xf.add(t[e]);
}
var St = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ia = Object.prototype.hasOwnProperty,
  s0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gu = {},
  Qu = {};
function o0(e) {
  return ia.call(Qu, e)
    ? !0
    : ia.call(Gu, e)
      ? !1
      : s0.test(e)
        ? (Qu[e] = !0)
        : ((Gu[e] = !0), !1);
}
function a0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function l0(e, t, n, r) {
  if (t === null || typeof t > "u" || a0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yl = /[\-:]([a-z])/g;
function vl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, vl);
    pe[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, vl);
    pe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yl, vl);
  pe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xl(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (l0(t, n, i, r) && (n = null),
    r || i === null
      ? o0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ei = Symbol.for("react.element"),
  En = Symbol.for("react.portal"),
  Nn = Symbol.for("react.fragment"),
  wl = Symbol.for("react.strict_mode"),
  sa = Symbol.for("react.profiler"),
  Zf = Symbol.for("react.provider"),
  qf = Symbol.for("react.context"),
  Sl = Symbol.for("react.forward_ref"),
  oa = Symbol.for("react.suspense"),
  aa = Symbol.for("react.suspense_list"),
  kl = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  Jf = Symbol.for("react.offscreen"),
  Yu = Symbol.iterator;
function dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yu && e[Yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  go;
function kr(e) {
  if (go === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      go = (t && t[1]) || "";
    }
  return (
    `
` +
    go +
    e
  );
}
var yo = !1;
function vo(e, t) {
  if (!e || yo) return "";
  yo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((yo = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function u0(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = vo(e.type, !1)), e);
    case 11:
      return ((e = vo(e.type.render, !1)), e);
    case 1:
      return ((e = vo(e.type, !0)), e);
    default:
      return "";
  }
}
function la(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case En:
      return "Portal";
    case sa:
      return "Profiler";
    case wl:
      return "StrictMode";
    case oa:
      return "Suspense";
    case aa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qf:
        return (e.displayName || "Context") + ".Consumer";
      case Zf:
        return (e._context.displayName || "Context") + ".Provider";
      case Sl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case kl:
        return (
          (t = e.displayName || null),
          t !== null ? t : la(e.type) || "Memo"
        );
      case At:
        ((t = e._payload), (e = e._init));
        try {
          return la(e(t));
        } catch {}
    }
  return null;
}
function c0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return la(t);
    case 8:
      return t === wl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function eh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function d0(e) {
  var t = eh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Ni(e) {
  e._valueTracker || (e._valueTracker = d0(e));
}
function th(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = eh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function cs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ua(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function nh(e, t) {
  ((t = t.checked), t != null && xl(e, "checked", t, !1));
}
function ca(e, t) {
  nh(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? da(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && da(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Zu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function da(e, t, n) {
  (t !== "number" || cs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tr = Array.isArray;
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Wt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function fa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Tr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function rh(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ju(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ih(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ha(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ih(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Mi,
  sh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Mi = Mi || document.createElement("div"),
          Mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Mi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  f0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function (e) {
  f0.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mr[t] = Mr[e]));
  });
});
function oh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mr.hasOwnProperty(e) && Mr[e])
      ? ("" + t).trim()
      : t + "px";
}
function ah(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = oh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var h0 = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function pa(e, t) {
  if (t) {
    if (h0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function ma(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ga = null;
function Tl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ya = null,
  Hn = null,
  Kn = null;
function ec(e) {
  if ((e = gi(e))) {
    if (typeof ya != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ys(t)), ya(e.stateNode, e.type, t));
  }
}
function lh(e) {
  Hn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Hn = e);
}
function uh() {
  if (Hn) {
    var e = Hn,
      t = Kn;
    if (((Kn = Hn = null), ec(e), t)) for (e = 0; e < t.length; e++) ec(t[e]);
  }
}
function ch(e, t) {
  return e(t);
}
function dh() {}
var xo = !1;
function fh(e, t, n) {
  if (xo) return e(t, n);
  xo = !0;
  try {
    return ch(e, t, n);
  } finally {
    ((xo = !1), (Hn !== null || Kn !== null) && (dh(), uh()));
  }
}
function Kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ys(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var va = !1;
if (St)
  try {
    var fr = {};
    (Object.defineProperty(fr, "passive", {
      get: function () {
        va = !0;
      },
    }),
      window.addEventListener("test", fr, fr),
      window.removeEventListener("test", fr, fr));
  } catch {
    va = !1;
  }
function p0(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ar = !1,
  ds = null,
  fs = !1,
  xa = null,
  m0 = {
    onError: function (e) {
      ((Ar = !0), (ds = e));
    },
  };
function g0(e, t, n, r, i, s, o, a, l) {
  ((Ar = !1), (ds = null), p0.apply(m0, arguments));
}
function y0(e, t, n, r, i, s, o, a, l) {
  if ((g0.apply(this, arguments), Ar)) {
    if (Ar) {
      var u = ds;
      ((Ar = !1), (ds = null));
    } else throw Error(C(198));
    fs || ((fs = !0), (xa = u));
  }
}
function kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function hh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tc(e) {
  if (kn(e) !== e) throw Error(C(188));
}
function v0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = kn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (tc(i), e);
        if (s === r) return (tc(i), t);
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function ph(e) {
  return ((e = v0(e)), e !== null ? mh(e) : null);
}
function mh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gh = _e.unstable_scheduleCallback,
  nc = _e.unstable_cancelCallback,
  x0 = _e.unstable_shouldYield,
  w0 = _e.unstable_requestPaint,
  ee = _e.unstable_now,
  S0 = _e.unstable_getCurrentPriorityLevel,
  jl = _e.unstable_ImmediatePriority,
  yh = _e.unstable_UserBlockingPriority,
  hs = _e.unstable_NormalPriority,
  k0 = _e.unstable_LowPriority,
  vh = _e.unstable_IdlePriority,
  Hs = null,
  lt = null;
function T0(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Hs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : C0,
  j0 = Math.log,
  P0 = Math.LN2;
function C0(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((j0(e) / P0) | 0)) | 0);
}
var Ai = 64,
  Di = 4194304;
function jr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ps(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = jr(a)) : ((s &= o), s !== 0 && (r = jr(s)));
  } else ((o = n & ~i), o !== 0 ? (r = jr(o)) : s !== 0 && (r = jr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - et(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function E0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function N0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - et(s),
      a = 1 << o,
      l = i[o];
    (l === -1
      ? (!(a & n) || a & r) && (i[o] = E0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function wa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xh() {
  var e = Ai;
  return ((Ai <<= 1), !(Ai & 4194240) && (Ai = 64), e);
}
function wo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pi(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n));
}
function M0(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - et(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function Pl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var B = 0;
function wh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Sh,
  Cl,
  kh,
  Th,
  jh,
  Sa = !1,
  Ri = [],
  It = null,
  Ot = null,
  zt = null,
  Gr = new Map(),
  Qr = new Map(),
  Rt = [],
  A0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function rc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qr.delete(t.pointerId);
  }
}
function hr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = gi(t)), t !== null && Cl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function D0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((It = hr(It, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Ot = hr(Ot, e, t, n, r, i)), !0);
    case "mouseover":
      return ((zt = hr(zt, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Gr.set(s, hr(Gr.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Qr.set(s, hr(Qr.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Ph(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hh(n)), t !== null)) {
          ((e.blockedOn = t),
            jh(e.priority, function () {
              kh(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Yi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ka(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ga = r), n.target.dispatchEvent(r), (ga = null));
    } else return ((t = gi(n)), t !== null && Cl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function ic(e, t, n) {
  Yi(e) && n.delete(t);
}
function R0() {
  ((Sa = !1),
    It !== null && Yi(It) && (It = null),
    Ot !== null && Yi(Ot) && (Ot = null),
    zt !== null && Yi(zt) && (zt = null),
    Gr.forEach(ic),
    Qr.forEach(ic));
}
function pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sa ||
      ((Sa = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, R0)));
}
function Yr(e) {
  function t(i) {
    return pr(i, e);
  }
  if (0 < Ri.length) {
    pr(Ri[0], e);
    for (var n = 1; n < Ri.length; n++) {
      var r = Ri[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && pr(It, e),
      Ot !== null && pr(Ot, e),
      zt !== null && pr(zt, e),
      Gr.forEach(t),
      Qr.forEach(t),
      n = 0;
    n < Rt.length;
    n++
  )
    ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
    (Ph(n), n.blockedOn === null && Rt.shift());
}
var Gn = Pt.ReactCurrentBatchConfig,
  ms = !0;
function L0(e, t, n, r) {
  var i = B,
    s = Gn.transition;
  Gn.transition = null;
  try {
    ((B = 1), El(e, t, n, r));
  } finally {
    ((B = i), (Gn.transition = s));
  }
}
function V0(e, t, n, r) {
  var i = B,
    s = Gn.transition;
  Gn.transition = null;
  try {
    ((B = 4), El(e, t, n, r));
  } finally {
    ((B = i), (Gn.transition = s));
  }
}
function El(e, t, n, r) {
  if (ms) {
    var i = ka(e, t, n, r);
    if (i === null) (Ao(e, t, r, gs, n), rc(e, r));
    else if (D0(i, e, t, n, r)) r.stopPropagation();
    else if ((rc(e, r), t & 4 && -1 < A0.indexOf(e))) {
      for (; i !== null; ) {
        var s = gi(i);
        if (
          (s !== null && Sh(s),
          (s = ka(e, t, n, r)),
          s === null && Ao(e, t, r, gs, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Ao(e, t, r, null, n);
  }
}
var gs = null;
function ka(e, t, n, r) {
  if (((gs = null), (e = Tl(r)), (e = on(e)), e !== null))
    if (((t = kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((gs = e), null);
}
function Ch(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (S0()) {
        case jl:
          return 1;
        case yh:
          return 4;
        case hs:
        case k0:
          return 16;
        case vh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null,
  Nl = null,
  Xi = null;
function Eh() {
  if (Xi) return Xi;
  var e,
    t = Nl,
    n = t.length,
    r,
    i = "value" in Vt ? Vt.value : Vt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Xi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Zi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Li() {
  return !0;
}
function sc() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Li
        : sc),
      (this.isPropagationStopped = sc),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Li));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Li));
      },
      persist: function () {},
      isPersistent: Li,
    }),
    t
  );
}
var or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ml = Fe(or),
  mi = Y({}, or, { view: 0, detail: 0 }),
  _0 = Fe(mi),
  So,
  ko,
  mr,
  Ks = Y({}, mi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Al,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mr &&
            (mr && e.type === "mousemove"
              ? ((So = e.screenX - mr.screenX), (ko = e.screenY - mr.screenY))
              : (ko = So = 0),
            (mr = e)),
          So);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ko;
    },
  }),
  oc = Fe(Ks),
  I0 = Y({}, Ks, { dataTransfer: 0 }),
  O0 = Fe(I0),
  z0 = Y({}, mi, { relatedTarget: 0 }),
  To = Fe(z0),
  F0 = Y({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  B0 = Fe(F0),
  b0 = Y({}, or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  U0 = Fe(b0),
  $0 = Y({}, or, { data: 0 }),
  ac = Fe($0),
  W0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  H0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  K0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function G0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = K0[e]) ? !!t[e] : !1;
}
function Al() {
  return G0;
}
var Q0 = Y({}, mi, {
    key: function (e) {
      if (e.key) {
        var t = W0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? H0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Al,
    charCode: function (e) {
      return e.type === "keypress" ? Zi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Y0 = Fe(Q0),
  X0 = Y({}, Ks, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  lc = Fe(X0),
  Z0 = Y({}, mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Al,
  }),
  q0 = Fe(Z0),
  J0 = Y({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ey = Fe(J0),
  ty = Y({}, Ks, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ny = Fe(ty),
  ry = [9, 13, 27, 32],
  Dl = St && "CompositionEvent" in window,
  Dr = null;
St && "documentMode" in document && (Dr = document.documentMode);
var iy = St && "TextEvent" in window && !Dr,
  Nh = St && (!Dl || (Dr && 8 < Dr && 11 >= Dr)),
  uc = " ",
  cc = !1;
function Mh(e, t) {
  switch (e) {
    case "keyup":
      return ry.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ah(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Mn = !1;
function sy(e, t) {
  switch (e) {
    case "compositionend":
      return Ah(t);
    case "keypress":
      return t.which !== 32 ? null : ((cc = !0), uc);
    case "textInput":
      return ((e = t.data), e === uc && cc ? null : e);
    default:
      return null;
  }
}
function oy(e, t) {
  if (Mn)
    return e === "compositionend" || (!Dl && Mh(e, t))
      ? ((e = Eh()), (Xi = Nl = Vt = null), (Mn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Nh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ay = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function dc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ay[e.type] : t === "textarea";
}
function Dh(e, t, n, r) {
  (lh(r),
    (t = ys(t, "onChange")),
    0 < t.length &&
      ((n = new Ml("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Rr = null,
  Xr = null;
function ly(e) {
  Uh(e, 0);
}
function Gs(e) {
  var t = Rn(e);
  if (th(t)) return e;
}
function uy(e, t) {
  if (e === "change") return t;
}
var Rh = !1;
if (St) {
  var jo;
  if (St) {
    var Po = "oninput" in document;
    if (!Po) {
      var fc = document.createElement("div");
      (fc.setAttribute("oninput", "return;"),
        (Po = typeof fc.oninput == "function"));
    }
    jo = Po;
  } else jo = !1;
  Rh = jo && (!document.documentMode || 9 < document.documentMode);
}
function hc() {
  Rr && (Rr.detachEvent("onpropertychange", Lh), (Xr = Rr = null));
}
function Lh(e) {
  if (e.propertyName === "value" && Gs(Xr)) {
    var t = [];
    (Dh(t, Xr, e, Tl(e)), fh(ly, t));
  }
}
function cy(e, t, n) {
  e === "focusin"
    ? (hc(), (Rr = t), (Xr = n), Rr.attachEvent("onpropertychange", Lh))
    : e === "focusout" && hc();
}
function dy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Gs(Xr);
}
function fy(e, t) {
  if (e === "click") return Gs(t);
}
function hy(e, t) {
  if (e === "input" || e === "change") return Gs(t);
}
function py(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == "function" ? Object.is : py;
function Zr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ia.call(t, i) || !nt(e[i], t[i])) return !1;
  }
  return !0;
}
function pc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function mc(e, t) {
  var n = pc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pc(n);
  }
}
function Vh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Vh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function _h() {
  for (var e = window, t = cs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = cs(e.document);
  }
  return t;
}
function Rl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function my(e) {
  var t = _h(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Vh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Rl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = mc(n, s)));
        var o = mc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var gy = St && "documentMode" in document && 11 >= document.documentMode,
  An = null,
  Ta = null,
  Lr = null,
  ja = !1;
function gc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ja ||
    An == null ||
    An !== cs(r) ||
    ((r = An),
    "selectionStart" in r && Rl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Lr && Zr(Lr, r)) ||
      ((Lr = r),
      (r = ys(Ta, "onSelect")),
      0 < r.length &&
        ((t = new Ml("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = An))));
}
function Vi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dn = {
    animationend: Vi("Animation", "AnimationEnd"),
    animationiteration: Vi("Animation", "AnimationIteration"),
    animationstart: Vi("Animation", "AnimationStart"),
    transitionend: Vi("Transition", "TransitionEnd"),
  },
  Co = {},
  Ih = {};
St &&
  ((Ih = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dn.animationend.animation,
    delete Dn.animationiteration.animation,
    delete Dn.animationstart.animation),
  "TransitionEvent" in window || delete Dn.transitionend.transition);
function Qs(e) {
  if (Co[e]) return Co[e];
  if (!Dn[e]) return e;
  var t = Dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ih) return (Co[e] = t[n]);
  return e;
}
var Oh = Qs("animationend"),
  zh = Qs("animationiteration"),
  Fh = Qs("animationstart"),
  Bh = Qs("transitionend"),
  bh = new Map(),
  yc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Gt(e, t) {
  (bh.set(e, t), Sn(t, [e]));
}
for (var Eo = 0; Eo < yc.length; Eo++) {
  var No = yc[Eo],
    yy = No.toLowerCase(),
    vy = No[0].toUpperCase() + No.slice(1);
  Gt(yy, "on" + vy);
}
Gt(Oh, "onAnimationEnd");
Gt(zh, "onAnimationIteration");
Gt(Fh, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(Bh, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
Sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  xy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
function vc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), y0(r, t, void 0, e), (e.currentTarget = null));
}
function Uh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          (vc(i, a, u), (s = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (vc(i, a, u), (s = l));
        }
    }
  }
  if (fs) throw ((e = xa), (fs = !1), (xa = null), e);
}
function U(e, t) {
  var n = t[Ma];
  n === void 0 && (n = t[Ma] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($h(t, e, 2, !1), n.add(r));
}
function Mo(e, t, n) {
  var r = 0;
  (t && (r |= 4), $h(n, e, r, t));
}
var _i = "_reactListening" + Math.random().toString(36).slice(2);
function qr(e) {
  if (!e[_i]) {
    ((e[_i] = !0),
      Xf.forEach(function (n) {
        n !== "selectionchange" && (xy.has(n) || Mo(n, !1, e), Mo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_i] || ((t[_i] = !0), Mo("selectionchange", !1, t));
  }
}
function $h(e, t, n, r) {
  switch (Ch(t)) {
    case 1:
      var i = L0;
      break;
    case 4:
      i = V0;
      break;
    default:
      i = El;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !va ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Ao(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = on(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  fh(function () {
    var u = s,
      d = Tl(n),
      f = [];
    e: {
      var h = bh.get(e);
      if (h !== void 0) {
        var y = Ml,
          v = e;
        switch (e) {
          case "keypress":
            if (Zi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Y0;
            break;
          case "focusin":
            ((v = "focus"), (y = To));
            break;
          case "focusout":
            ((v = "blur"), (y = To));
            break;
          case "beforeblur":
          case "afterblur":
            y = To;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = oc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = O0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = q0;
            break;
          case Oh:
          case zh:
          case Fh:
            y = B0;
            break;
          case Bh:
            y = ey;
            break;
          case "scroll":
            y = _0;
            break;
          case "wheel":
            y = ny;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = U0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = lc;
        }
        var x = (t & 4) !== 0,
          T = !x && e === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              m !== null && ((S = Kr(p, m)), S != null && x.push(Jr(p, S, g)))),
            T)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((h = new y(h, v, null, n, d)), f.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ga &&
            (v = n.relatedTarget || n.fromElement) &&
            (on(v) || v[kt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? on(v) : null),
              v !== null &&
                ((T = kn(v)), v !== T || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = oc),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = lc),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (T = y == null ? h : Rn(y)),
            (g = v == null ? h : Rn(v)),
            (h = new x(S, p + "leave", y, n, d)),
            (h.target = T),
            (h.relatedTarget = g),
            (S = null),
            on(d) === u &&
              ((x = new x(m, p + "enter", v, n, d)),
              (x.target = g),
              (x.relatedTarget = T),
              (S = x)),
            (T = S),
            y && v)
          )
            t: {
              for (x = y, m = v, p = 0, g = x; g; g = Pn(g)) p++;
              for (g = 0, S = m; S; S = Pn(S)) g++;
              for (; 0 < p - g; ) ((x = Pn(x)), p--);
              for (; 0 < g - p; ) ((m = Pn(m)), g--);
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                ((x = Pn(x)), (m = Pn(m)));
              }
              x = null;
            }
          else x = null;
          (y !== null && xc(f, h, y, x, !1),
            v !== null && T !== null && xc(f, T, v, x, !0));
        }
      }
      e: {
        if (
          ((h = u ? Rn(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var w = uy;
        else if (dc(h))
          if (Rh) w = hy;
          else {
            w = dy;
            var j = cy;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (w = fy);
        if (w && (w = w(e, u))) {
          Dh(f, w, n, d);
          break e;
        }
        (j && j(e, h, u),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            da(h, "number", h.value));
      }
      switch (((j = u ? Rn(u) : window), e)) {
        case "focusin":
          (dc(j) || j.contentEditable === "true") &&
            ((An = j), (Ta = u), (Lr = null));
          break;
        case "focusout":
          Lr = Ta = An = null;
          break;
        case "mousedown":
          ja = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ja = !1), gc(f, n, d));
          break;
        case "selectionchange":
          if (gy) break;
        case "keydown":
        case "keyup":
          gc(f, n, d);
      }
      var E;
      if (Dl)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Mn
          ? Mh(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (Nh &&
          n.locale !== "ko" &&
          (Mn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Mn && (E = Eh())
            : ((Vt = d),
              (Nl = "value" in Vt ? Vt.value : Vt.textContent),
              (Mn = !0))),
        (j = ys(u, P)),
        0 < j.length &&
          ((P = new ac(P, e, null, n, d)),
          f.push({ event: P, listeners: j }),
          E ? (P.data = E) : ((E = Ah(n)), E !== null && (P.data = E)))),
        (E = iy ? sy(e, n) : oy(e, n)) &&
          ((u = ys(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new ac("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = E))));
    }
    Uh(f, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ys(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Kr(e, n)),
      s != null && r.unshift(Jr(e, s, i)),
      (s = Kr(e, t)),
      s != null && r.push(Jr(e, s, i))),
      (e = e.return));
  }
  return r;
}
function Pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Kr(n, s)), l != null && o.unshift(Jr(n, l, a)))
        : i || ((l = Kr(n, s)), l != null && o.push(Jr(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var wy = /\r\n?/g,
  Sy = /\u0000|\uFFFD/g;
function wc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wy,
      `
`,
    )
    .replace(Sy, "");
}
function Ii(e, t, n) {
  if (((t = wc(t)), wc(e) !== t && n)) throw Error(C(425));
}
function vs() {}
var Pa = null,
  Ca = null;
function Ea(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Na = typeof setTimeout == "function" ? setTimeout : void 0,
  ky = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sc = typeof Promise == "function" ? Promise : void 0,
  Ty =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sc < "u"
        ? function (e) {
            return Sc.resolve(null).then(e).catch(jy);
          }
        : Na;
function jy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Do(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Yr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Yr(t);
}
function Ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function kc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ar = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + ar,
  ei = "__reactProps$" + ar,
  kt = "__reactContainer$" + ar,
  Ma = "__reactEvents$" + ar,
  Py = "__reactListeners$" + ar,
  Cy = "__reactHandles$" + ar;
function on(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[kt] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = kc(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = kc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function gi(e) {
  return (
    (e = e[ot] || e[kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ys(e) {
  return e[ei] || null;
}
var Aa = [],
  Ln = -1;
function Qt(e) {
  return { current: e };
}
function $(e) {
  0 > Ln || ((e.current = Aa[Ln]), (Aa[Ln] = null), Ln--);
}
function b(e, t) {
  (Ln++, (Aa[Ln] = e.current), (e.current = t));
}
var Ht = {},
  xe = Qt(Ht),
  Me = Qt(!1),
  pn = Ht;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ae(e) {
  return ((e = e.childContextTypes), e != null);
}
function xs() {
  ($(Me), $(xe));
}
function Tc(e, t, n) {
  if (xe.current !== Ht) throw Error(C(168));
  (b(xe, t), b(Me, n));
}
function Wh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, c0(e) || "Unknown", i));
  return Y({}, n, r);
}
function ws(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (pn = xe.current),
    b(xe, e),
    b(Me, Me.current),
    !0
  );
}
function jc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  (n
    ? ((e = Wh(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Me),
      $(xe),
      b(xe, e))
    : $(Me),
    b(Me, n));
}
var pt = null,
  Xs = !1,
  Ro = !1;
function Hh(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
function Ey(e) {
  ((Xs = !0), Hh(e));
}
function Yt() {
  if (!Ro && pt !== null) {
    Ro = !0;
    var e = 0,
      t = B;
    try {
      var n = pt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((pt = null), (Xs = !1));
    } catch (i) {
      throw (pt !== null && (pt = pt.slice(e + 1)), gh(jl, Yt), i);
    } finally {
      ((B = t), (Ro = !1));
    }
  }
  return null;
}
var Vn = [],
  _n = 0,
  Ss = null,
  ks = 0,
  Ue = [],
  $e = 0,
  mn = null,
  gt = 1,
  yt = "";
function tn(e, t) {
  ((Vn[_n++] = ks), (Vn[_n++] = Ss), (Ss = e), (ks = t));
}
function Kh(e, t, n) {
  ((Ue[$e++] = gt), (Ue[$e++] = yt), (Ue[$e++] = mn), (mn = e));
  var r = gt;
  e = yt;
  var i = 32 - et(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - et(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (gt = (1 << (32 - et(t) + i)) | (n << i) | r),
      (yt = s + e));
  } else ((gt = (1 << s) | (n << i) | r), (yt = e));
}
function Ll(e) {
  e.return !== null && (tn(e, 1), Kh(e, 1, 0));
}
function Vl(e) {
  for (; e === Ss; )
    ((Ss = Vn[--_n]), (Vn[_n] = null), (ks = Vn[--_n]), (Vn[_n] = null));
  for (; e === mn; )
    ((mn = Ue[--$e]),
      (Ue[$e] = null),
      (yt = Ue[--$e]),
      (Ue[$e] = null),
      (gt = Ue[--$e]),
      (Ue[$e] = null));
}
var Ve = null,
  Le = null,
  W = !1,
  Je = null;
function Gh(e, t) {
  var n = We(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Pc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (Le = Ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mn !== null ? { id: gt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Da(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ra(e) {
  if (W) {
    var t = Le;
    if (t) {
      var n = t;
      if (!Pc(e, t)) {
        if (Da(e)) throw Error(C(418));
        t = Ft(n.nextSibling);
        var r = Ve;
        t && Pc(e, t)
          ? Gh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ve = e));
      }
    } else {
      if (Da(e)) throw Error(C(418));
      ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ve = e));
    }
  }
}
function Cc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function Oi(e) {
  if (e !== Ve) return !1;
  if (!W) return (Cc(e), (W = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ea(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (Da(e)) throw (Qh(), Error(C(418)));
    for (; t; ) (Gh(e, t), (t = Ft(t.nextSibling)));
  }
  if ((Cc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Ve ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Qh() {
  for (var e = Le; e; ) e = Ft(e.nextSibling);
}
function qn() {
  ((Le = Ve = null), (W = !1));
}
function _l(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
var Ny = Pt.ReactCurrentBatchConfig;
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function zi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Ec(e) {
  var t = e._init;
  return t(e._payload);
}
function Yh(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) (t(m, p), (p = p.sibling));
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
    return m;
  }
  function i(m, p) {
    return ((m = $t(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = Fo(g, m.mode, S)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, S) {
    var w = g.type;
    return w === Nn
      ? d(m, p, g.props.children, S, g.key)
      : p !== null &&
          (p.elementType === w ||
            (typeof w == "object" &&
              w !== null &&
              w.$$typeof === At &&
              Ec(w) === p.type))
        ? ((S = i(p, g.props)), (S.ref = gr(m, p, g)), (S.return = m), S)
        : ((S = is(g.type, g.key, g.props, null, m.mode, S)),
          (S.ref = gr(m, p, g)),
          (S.return = m),
          S);
  }
  function u(m, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Bo(g, m.mode, S)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function d(m, p, g, S, w) {
    return p === null || p.tag !== 7
      ? ((p = dn(g, m.mode, S, w)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function f(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = Fo("" + p, m.mode, g)), (p.return = m), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ei:
          return (
            (g = is(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = gr(m, null, p)),
            (g.return = m),
            g
          );
        case En:
          return ((p = Bo(p, m.mode, g)), (p.return = m), p);
        case At:
          var S = p._init;
          return f(m, S(p._payload), g);
      }
      if (Tr(p) || dr(p))
        return ((p = dn(p, m.mode, g, null)), (p.return = m), p);
      zi(m, p);
    }
    return null;
  }
  function h(m, p, g, S) {
    var w = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return w !== null ? null : a(m, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ei:
          return g.key === w ? l(m, p, g, S) : null;
        case En:
          return g.key === w ? u(m, p, g, S) : null;
        case At:
          return ((w = g._init), h(m, p, w(g._payload), S));
      }
      if (Tr(g) || dr(g)) return w !== null ? null : d(m, p, g, S, null);
      zi(m, g);
    }
    return null;
  }
  function y(m, p, g, S, w) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((m = m.get(g) || null), a(p, m, "" + S, w));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ei:
          return (
            (m = m.get(S.key === null ? g : S.key) || null),
            l(p, m, S, w)
          );
        case En:
          return (
            (m = m.get(S.key === null ? g : S.key) || null),
            u(p, m, S, w)
          );
        case At:
          var j = S._init;
          return y(m, p, g, j(S._payload), w);
      }
      if (Tr(S) || dr(S)) return ((m = m.get(g) || null), d(p, m, S, w, null));
      zi(p, S);
    }
    return null;
  }
  function v(m, p, g, S) {
    for (
      var w = null, j = null, E = p, P = (p = 0), _ = null;
      E !== null && P < g.length;
      P++
    ) {
      E.index > P ? ((_ = E), (E = null)) : (_ = E.sibling);
      var D = h(m, E, g[P], S);
      if (D === null) {
        E === null && (E = _);
        break;
      }
      (e && E && D.alternate === null && t(m, E),
        (p = s(D, p, P)),
        j === null ? (w = D) : (j.sibling = D),
        (j = D),
        (E = _));
    }
    if (P === g.length) return (n(m, E), W && tn(m, P), w);
    if (E === null) {
      for (; P < g.length; P++)
        ((E = f(m, g[P], S)),
          E !== null &&
            ((p = s(E, p, P)),
            j === null ? (w = E) : (j.sibling = E),
            (j = E)));
      return (W && tn(m, P), w);
    }
    for (E = r(m, E); P < g.length; P++)
      ((_ = y(E, m, P, g[P], S)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? P : _.key),
          (p = s(_, p, P)),
          j === null ? (w = _) : (j.sibling = _),
          (j = _)));
    return (
      e &&
        E.forEach(function (ae) {
          return t(m, ae);
        }),
      W && tn(m, P),
      w
    );
  }
  function x(m, p, g, S) {
    var w = dr(g);
    if (typeof w != "function") throw Error(C(150));
    if (((g = w.call(g)), g == null)) throw Error(C(151));
    for (
      var j = (w = null), E = p, P = (p = 0), _ = null, D = g.next();
      E !== null && !D.done;
      P++, D = g.next()
    ) {
      E.index > P ? ((_ = E), (E = null)) : (_ = E.sibling);
      var ae = h(m, E, D.value, S);
      if (ae === null) {
        E === null && (E = _);
        break;
      }
      (e && E && ae.alternate === null && t(m, E),
        (p = s(ae, p, P)),
        j === null ? (w = ae) : (j.sibling = ae),
        (j = ae),
        (E = _));
    }
    if (D.done) return (n(m, E), W && tn(m, P), w);
    if (E === null) {
      for (; !D.done; P++, D = g.next())
        ((D = f(m, D.value, S)),
          D !== null &&
            ((p = s(D, p, P)),
            j === null ? (w = D) : (j.sibling = D),
            (j = D)));
      return (W && tn(m, P), w);
    }
    for (E = r(m, E); !D.done; P++, D = g.next())
      ((D = y(E, m, P, D.value, S)),
        D !== null &&
          (e && D.alternate !== null && E.delete(D.key === null ? P : D.key),
          (p = s(D, p, P)),
          j === null ? (w = D) : (j.sibling = D),
          (j = D)));
    return (
      e &&
        E.forEach(function (Ct) {
          return t(m, Ct);
        }),
      W && tn(m, P),
      w
    );
  }
  function T(m, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Nn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ei:
          e: {
            for (var w = g.key, j = p; j !== null; ) {
              if (j.key === w) {
                if (((w = g.type), w === Nn)) {
                  if (j.tag === 7) {
                    (n(m, j.sibling),
                      (p = i(j, g.props.children)),
                      (p.return = m),
                      (m = p));
                    break e;
                  }
                } else if (
                  j.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === At &&
                    Ec(w) === j.type)
                ) {
                  (n(m, j.sibling),
                    (p = i(j, g.props)),
                    (p.ref = gr(m, j, g)),
                    (p.return = m),
                    (m = p));
                  break e;
                }
                n(m, j);
                break;
              } else t(m, j);
              j = j.sibling;
            }
            g.type === Nn
              ? ((p = dn(g.props.children, m.mode, S, g.key)),
                (p.return = m),
                (m = p))
              : ((S = is(g.type, g.key, g.props, null, m.mode, S)),
                (S.ref = gr(m, p, g)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case En:
          e: {
            for (j = g.key; p !== null; ) {
              if (p.key === j)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  (n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p));
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((p = Bo(g, m.mode, S)), (p.return = m), (m = p));
          }
          return o(m);
        case At:
          return ((j = g._init), T(m, p, j(g._payload), S));
      }
      if (Tr(g)) return v(m, p, g, S);
      if (dr(g)) return x(m, p, g, S);
      zi(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Fo(g, m.mode, S)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return T;
}
var Jn = Yh(!0),
  Xh = Yh(!1),
  Ts = Qt(null),
  js = null,
  In = null,
  Il = null;
function Ol() {
  Il = In = js = null;
}
function zl(e) {
  var t = Ts.current;
  ($(Ts), (e._currentValue = t));
}
function La(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Qn(e, t) {
  ((js = e),
    (Il = In = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null)));
}
function Ge(e) {
  var t = e._currentValue;
  if (Il !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
      if (js === null) throw Error(C(308));
      ((In = e), (js.dependencies = { lanes: 0, firstContext: e }));
    } else In = In.next = e;
  return t;
}
var an = null;
function Fl(e) {
  an === null ? (an = [e]) : an.push(e);
}
function Zh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Fl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Dt = !1;
function Bl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qh(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Fl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function qi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Pl(e, n));
  }
}
function Nc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Ps(e, t, n, r) {
  var i = e.updateQueue;
  Dt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (s = u) : (o.next = u), (o = l));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (d = u = l = null), (a = s));
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((h = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(y, f, h) : v),
                h == null)
              )
                break e;
              f = Y({}, f, h);
              break e;
            case 2:
              Dt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        ((y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (l = f)) : (d = d.next = y),
          (o |= h));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((yn |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function Mc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var yi = {},
  ut = Qt(yi),
  ti = Qt(yi),
  ni = Qt(yi);
function ln(e) {
  if (e === yi) throw Error(C(174));
  return e;
}
function bl(e, t) {
  switch ((b(ni, t), b(ti, e), b(ut, yi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ha(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ha(t, e)));
  }
  ($(ut), b(ut, t));
}
function er() {
  ($(ut), $(ti), $(ni));
}
function Jh(e) {
  ln(ni.current);
  var t = ln(ut.current),
    n = ha(t, e.type);
  t !== n && (b(ti, e), b(ut, n));
}
function Ul(e) {
  ti.current === e && ($(ut), $(ti));
}
var K = Qt(0);
function Cs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Lo = [];
function $l() {
  for (var e = 0; e < Lo.length; e++)
    Lo[e]._workInProgressVersionPrimary = null;
  Lo.length = 0;
}
var Ji = Pt.ReactCurrentDispatcher,
  Vo = Pt.ReactCurrentBatchConfig,
  gn = 0,
  Q = null,
  se = null,
  ue = null,
  Es = !1,
  Vr = !1,
  ri = 0,
  My = 0;
function me() {
  throw Error(C(321));
}
function Wl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n])) return !1;
  return !0;
}
function Hl(e, t, n, r, i, s) {
  if (
    ((gn = s),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ji.current = e === null || e.memoizedState === null ? Ly : Vy),
    (e = n(r, i)),
    Vr)
  ) {
    s = 0;
    do {
      if (((Vr = !1), (ri = 0), 25 <= s)) throw Error(C(301));
      ((s += 1),
        (ue = se = null),
        (t.updateQueue = null),
        (Ji.current = _y),
        (e = n(r, i)));
    } while (Vr);
  }
  if (
    ((Ji.current = Ns),
    (t = se !== null && se.next !== null),
    (gn = 0),
    (ue = se = Q = null),
    (Es = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Kl() {
  var e = ri !== 0;
  return ((ri = 0), e);
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ue === null ? (Q.memoizedState = ue = e) : (ue = ue.next = e), ue);
}
function Qe() {
  if (se === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ue === null ? Q.memoizedState : ue.next;
  if (t !== null) ((ue = t), (se = e));
  else {
    if (e === null) throw Error(C(310));
    ((se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ue === null ? (Q.memoizedState = ue = e) : (ue = ue.next = e));
  }
  return ue;
}
function ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _o(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = s;
    do {
      var d = u.lane;
      if ((gn & d) === d)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (Q.lanes |= d),
          (yn |= d));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (l === null ? (o = r) : (l.next = a),
      nt(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (Q.lanes |= s), (yn |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Io(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (nt(s, t.memoizedState) || (Ne = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function ep() {}
function tp(e, t) {
  var n = Q,
    r = Qe(),
    i = t(),
    s = !nt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ne = !0)),
    (r = r.queue),
    Gl(ip.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      si(9, rp.bind(null, n, r, i, t), void 0, null),
      de === null)
    )
      throw Error(C(349));
    gn & 30 || np(n, t, i);
  }
  return i;
}
function np(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function rp(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), sp(t) && op(e));
}
function ip(e, t, n) {
  return n(function () {
    sp(t) && op(e);
  });
}
function sp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function op(e) {
  var t = Tt(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Ac(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ii,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ry.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function si(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ap() {
  return Qe().memoizedState;
}
function es(e, t, n, r) {
  var i = st();
  ((Q.flags |= e),
    (i.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Zs(e, t, n, r) {
  var i = Qe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (se !== null) {
    var o = se.memoizedState;
    if (((s = o.destroy), r !== null && Wl(r, o.deps))) {
      i.memoizedState = si(t, n, s, r);
      return;
    }
  }
  ((Q.flags |= e), (i.memoizedState = si(1 | t, n, s, r)));
}
function Dc(e, t) {
  return es(8390656, 8, e, t);
}
function Gl(e, t) {
  return Zs(2048, 8, e, t);
}
function lp(e, t) {
  return Zs(4, 2, e, t);
}
function up(e, t) {
  return Zs(4, 4, e, t);
}
function cp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function dp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Zs(4, 4, cp.bind(null, t, e), n)
  );
}
function Ql() {}
function fp(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hp(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pp(e, t, n) {
  return gn & 21
    ? (nt(n, t) || ((n = xh()), (Q.lanes |= n), (yn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function Ay(e, t) {
  var n = B;
  ((B = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Vo.transition;
  Vo.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((B = n), (Vo.transition = r));
  }
}
function mp() {
  return Qe().memoizedState;
}
function Dy(e, t, n) {
  var r = Ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gp(e))
  )
    yp(t, n);
  else if (((n = Zh(e, t, n, r)), n !== null)) {
    var i = Se();
    (tt(n, e, r, i), vp(n, t, r));
  }
}
function Ry(e, t, n) {
  var r = Ut(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gp(e)) yp(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), nt(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Fl(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Zh(e, t, i, r)),
      n !== null && ((i = Se()), tt(n, e, r, i), vp(n, t, r)));
  }
}
function gp(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function yp(e, t) {
  Vr = Es = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function vp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Pl(e, n));
  }
}
var Ns = {
    readContext: Ge,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  Ly = {
    readContext: Ge,
    useCallback: function (e, t) {
      return ((st().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ge,
    useEffect: Dc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        es(4194308, 4, cp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return es(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return es(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Dy.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Ac,
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = Ac(!1),
        t = e[0];
      return ((e = Ay.bind(null, e[1])), (st().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = st();
      if (W) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(C(349));
        gn & 30 || np(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Dc(ip.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        si(9, rp.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = de.identifierPrefix;
      if (W) {
        var n = yt,
          r = gt;
        ((n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ri++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = My++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vy = {
    readContext: Ge,
    useCallback: fp,
    useContext: Ge,
    useEffect: Gl,
    useImperativeHandle: dp,
    useInsertionEffect: lp,
    useLayoutEffect: up,
    useMemo: hp,
    useReducer: _o,
    useRef: ap,
    useState: function () {
      return _o(ii);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = Qe();
      return pp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = _o(ii)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ep,
    useSyncExternalStore: tp,
    useId: mp,
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: Ge,
    useCallback: fp,
    useContext: Ge,
    useEffect: Gl,
    useImperativeHandle: dp,
    useInsertionEffect: lp,
    useLayoutEffect: up,
    useMemo: hp,
    useReducer: Io,
    useRef: ap,
    useState: function () {
      return Io(ii);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = Qe();
      return se === null ? (t.memoizedState = e) : pp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Io(ii)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ep,
    useSyncExternalStore: tp,
    useId: mp,
    unstable_isNewReconciler: !1,
  };
function Ze(e, t) {
  if (e && e.defaultProps) {
    ((t = Y({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Va(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var qs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = Ut(e),
      s = vt(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (tt(t, e, i, r), qi(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = Ut(e),
      s = vt(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (tt(t, e, i, r), qi(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = Ut(e),
      i = vt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Bt(e, i, r)),
      t !== null && (tt(t, e, r, n), qi(t, e, r)));
  },
};
function Rc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Zr(n, r) || !Zr(i, s)
        : !0
  );
}
function xp(e, t, n) {
  var r = !1,
    i = Ht,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ge(s))
      : ((i = Ae(t) ? pn : xe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Zn(e, i) : Ht)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Lc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qs.enqueueReplaceState(t, t.state, null));
}
function _a(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Bl(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Ge(s))
    : ((s = Ae(t) ? pn : xe.current), (i.context = Zn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Va(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && qs.enqueueReplaceState(i, i.state, null),
      Ps(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += u0(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Oo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ia(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Iy = typeof WeakMap == "function" ? WeakMap : Map;
function wp(e, t, n) {
  ((n = vt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (As || ((As = !0), (Ka = r)), Ia(e, t));
    }),
    n
  );
}
function Sp(e, t, n) {
  ((n = vt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ia(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Ia(e, t),
          typeof r != "function" &&
            (bt === null ? (bt = new Set([this])) : bt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Vc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Iy();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = Xy.bind(null, e, t, n)), t.then(e, e));
}
function _c(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ic(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = vt(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Oy = Pt.ReactCurrentOwner,
  Ne = !1;
function we(e, t, n, r) {
  t.child = e === null ? Xh(t, null, n, r) : Jn(t, e.child, n, r);
}
function Oc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Qn(t, i),
    (r = Hl(e, t, n, r, s, i)),
    (n = Kl()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        jt(e, t, i))
      : (W && n && Ll(t), (t.flags |= 1), we(e, t, r, i), t.child)
  );
}
function zc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !nu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), kp(e, t, s, r, i))
      : ((e = is(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zr), n(o, r) && e.ref === t.ref)
    )
      return jt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = $t(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function kp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Zr(s, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return ((t.lanes = e.lanes), jt(e, t, i));
  }
  return Oa(e, t, n, r, i);
}
function Tp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(zn, Re),
        (Re |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(zn, Re),
          (Re |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        b(zn, Re),
        (Re |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(zn, Re),
      (Re |= r));
  return (we(e, t, i, n), t.child);
}
function jp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Oa(e, t, n, r, i) {
  var s = Ae(n) ? pn : xe.current;
  return (
    (s = Zn(t, s)),
    Qn(t, i),
    (n = Hl(e, t, n, r, s, i)),
    (r = Kl()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        jt(e, t, i))
      : (W && r && Ll(t), (t.flags |= 1), we(e, t, n, i), t.child)
  );
}
function Fc(e, t, n, r, i) {
  if (Ae(n)) {
    var s = !0;
    ws(t);
  } else s = !1;
  if ((Qn(t, i), t.stateNode === null))
    (ts(e, t), xp(t, n, r), _a(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ge(u))
      : ((u = Ae(n) ? pn : xe.current), (u = Zn(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Lc(t, o, r, u)),
      (Dt = !1));
    var h = t.memoizedState;
    ((o.state = h),
      Ps(t, r, o, i),
      (l = t.memoizedState),
      a !== r || h !== l || Me.current || Dt
        ? (typeof d == "function" && (Va(t, n, d, r), (l = t.memoizedState)),
          (a = Dt || Rc(t, n, a, r, h, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      qh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ze(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ge(l))
        : ((l = Ae(n) ? pn : xe.current), (l = Zn(t, l))));
    var y = n.getDerivedStateFromProps;
    ((d =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && Lc(t, o, r, l)),
      (Dt = !1),
      (h = t.memoizedState),
      (o.state = h),
      Ps(t, r, o, i));
    var v = t.memoizedState;
    a !== f || h !== v || Me.current || Dt
      ? (typeof y == "function" && (Va(t, n, y, r), (v = t.memoizedState)),
        (u = Dt || Rc(t, n, u, r, h, v, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return za(e, t, n, r, s, i);
}
function za(e, t, n, r, i, s) {
  jp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && jc(t, n, !1), jt(e, t, s));
  ((r = t.stateNode), (Oy.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Jn(t, e.child, null, s)), (t.child = Jn(t, null, a, s)))
      : we(e, t, a, s),
    (t.memoizedState = r.state),
    i && jc(t, n, !0),
    t.child
  );
}
function Pp(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Tc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Tc(e, t.context, !1),
    bl(e, t.containerInfo));
}
function Bc(e, t, n, r, i) {
  return (qn(), _l(i), (t.flags |= 256), we(e, t, n, r), t.child);
}
var Fa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ba(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cp(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    b(K, i & 1),
    e === null)
  )
    return (
      Ra(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = to(o, r, 0, null)),
              (e = dn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ba(n)),
              (t.memoizedState = Fa),
              e)
            : Yl(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return zy(e, t, o, r, a, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = $t(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = $t(a, s)) : ((s = dn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ba(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fa),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = $t(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Yl(e, t) {
  return (
    (t = to({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fi(e, t, n, r) {
  return (
    r !== null && _l(r),
    Jn(t, e.child, null, n),
    (e = Yl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function zy(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Oo(Error(C(422)))), Fi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = to({ mode: "visible", children: r.children }, i, 0, null)),
          (s = dn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Jn(t, e.child, null, o),
          (t.child.memoizedState = Ba(o)),
          (t.memoizedState = Fa),
          s);
  if (!(t.mode & 1)) return Fi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(C(419))),
      (r = Oo(s, r, void 0)),
      Fi(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Ne || a)) {
    if (((r = de), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Tt(e, i), tt(r, e, i, -1)));
    }
    return (tu(), (r = Oo(Error(C(421)))), Fi(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Le = Ft(i.nextSibling)),
      (Ve = t),
      (W = !0),
      (Je = null),
      e !== null &&
        ((Ue[$e++] = gt),
        (Ue[$e++] = yt),
        (Ue[$e++] = mn),
        (gt = e.id),
        (yt = e.overflow),
        (mn = t)),
      (t = Yl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), La(e.return, t, n));
}
function zo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Ep(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((we(e, t, r.children, n), (r = K.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bc(e, n, t);
        else if (e.tag === 19) bc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((b(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && Cs(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          zo(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Cs(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        zo(t, !0, n, null, s);
        break;
      case "together":
        zo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ts(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = $t(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Fy(e, t, n) {
  switch (t.tag) {
    case 3:
      (Pp(t), qn());
      break;
    case 5:
      Jh(t);
      break;
    case 1:
      Ae(t.type) && ws(t);
      break;
    case 4:
      bl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (b(Ts, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Cp(e, t, n)
            : (b(K, K.current & 1),
              (e = jt(e, t, n)),
              e !== null ? e.sibling : null);
      b(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ep(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        b(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Tp(e, t, n));
  }
  return jt(e, t, n);
}
var Np, ba, Mp, Ap;
Np = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
ba = function () {};
Mp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), ln(ut.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = ua(e, i)), (r = ua(e, r)), (s = []));
        break;
      case "select":
        ((i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = fa(e, i)), (r = fa(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vs);
    }
    pa(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Wr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Wr.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && U("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ap = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function By(e, t, n) {
  var r = t.pendingProps;
  switch ((Vl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ge(t), null);
    case 1:
      return (Ae(t.type) && xs(), ge(t), null);
    case 3:
      return (
        (r = t.stateNode),
        er(),
        $(Me),
        $(xe),
        $l(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Je !== null && (Ya(Je), (Je = null)))),
        ba(e, t),
        ge(t),
        null
      );
    case 5:
      Ul(t);
      var i = ln(ni.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Mp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return (ge(t), null);
        }
        if (((e = ln(ut.current)), Oi(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[ot] = t), (r[ei] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (U("cancel", r), U("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Pr.length; i++) U(Pr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (U("error", r), U("load", r));
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              (Xu(r, s), U("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                U("invalid", r));
              break;
            case "textarea":
              (qu(r, s), U("invalid", r));
          }
          (pa(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ii(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ii(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Wr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              (Ni(r), Zu(r, s, !0));
              break;
            case "textarea":
              (Ni(r), Ju(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = vs);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ih(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[ot] = t),
            (e[ei] = r),
            Np(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = ma(n, r)), n)) {
              case "dialog":
                (U("cancel", e), U("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (U("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Pr.length; i++) U(Pr[i], e);
                i = r;
                break;
              case "source":
                (U("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (U("error", e), U("load", e), (i = r));
                break;
              case "details":
                (U("toggle", e), (i = r));
                break;
              case "input":
                (Xu(e, r), (i = ua(e, r)), U("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  U("invalid", e));
                break;
              case "textarea":
                (qu(e, r), (i = fa(e, r)), U("invalid", e));
                break;
              default:
                i = r;
            }
            (pa(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? ah(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && sh(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Hr(e, l)
                        : typeof l == "number" && Hr(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Wr.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && U("scroll", e)
                          : l != null && xl(e, s, l, o));
              }
            switch (n) {
              case "input":
                (Ni(e), Zu(e, r, !1));
                break;
              case "textarea":
                (Ni(e), Ju(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Wn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = vs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ge(t), null);
    case 6:
      if (e && t.stateNode != null) Ap(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = ln(ni.current)), ln(ut.current), Oi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (s = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ii(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ii(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r));
      }
      return (ge(t), null);
    case 13:
      if (
        ($(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Le !== null && t.mode & 1 && !(t.flags & 128))
          (Qh(), qn(), (t.flags |= 98560), (s = !1));
        else if (((s = Oi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[ot] = t;
          } else
            (qn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ge(t), (s = !1));
        } else (Je !== null && (Ya(Je), (Je = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? oe === 0 && (oe = 3) : tu())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        er(),
        ba(e, t),
        e === null && qr(t.stateNode.containerInfo),
        ge(t),
        null
      );
    case 10:
      return (zl(t.type._context), ge(t), null);
    case 17:
      return (Ae(t.type) && xs(), ge(t), null);
    case 19:
      if (($(K), (s = t.memoizedState), s === null)) return (ge(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) yr(s, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Cs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (b(K, (K.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ee() > nr &&
            ((t.flags |= 128), (r = !0), yr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Cs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !W)
            )
              return (ge(t), null);
          } else
            2 * ee() - s.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          b(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function by(e, t) {
  switch ((Vl(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && xs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        $(Me),
        $(xe),
        $l(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ul(t), null);
    case 13:
      if (($(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        qn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ($(K), null);
    case 4:
      return (er(), null);
    case 10:
      return (zl(t.type._context), null);
    case 22:
    case 23:
      return (eu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Bi = !1,
  ve = !1,
  Uy = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Ua(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Uc = !1;
function $y(e, t) {
  if (((Pa = ms), (e = _h()), Rl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;
            )
              ((h = f), (f = y));
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === i && (a = o),
                h === s && ++d === r && (l = o),
                (y = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ca = { focusedElem: e, selectionRange: n }, ms = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (M = e));
    else
      for (; M !== null; ) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    T = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ze(t.type, x),
                      T,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          Z(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (M = e));
          break;
        }
        M = t.return;
      }
  return ((v = Uc), (Uc = !1), v);
}
function _r(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Ua(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Js(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $a(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Dp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Dp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[ei], delete t[Ma], delete t[Py], delete t[Cy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Rp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = vs)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wa(e, t, n), e = e.sibling; e !== null; )
      (Wa(e, t, n), (e = e.sibling));
}
function Ha(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ha(e, t, n), e = e.sibling; e !== null; )
      (Ha(e, t, n), (e = e.sibling));
}
var fe = null,
  qe = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; ) (Lp(e, t, n), (n = n.sibling));
}
function Lp(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Hs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || On(n, t);
    case 6:
      var r = fe,
        i = qe;
      ((fe = null),
        Et(e, t, n),
        (fe = r),
        (qe = i),
        fe !== null &&
          (qe
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode)));
      break;
    case 18:
      fe !== null &&
        (qe
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Do(e.parentNode, n)
              : e.nodeType === 1 && Do(e, n),
            Yr(e))
          : Do(fe, n.stateNode));
      break;
    case 4:
      ((r = fe),
        (i = qe),
        (fe = n.stateNode.containerInfo),
        (qe = !0),
        Et(e, t, n),
        (fe = r),
        (qe = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Ua(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (On(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Z(n, t, a);
        }
      Et(e, t, n);
      break;
    case 21:
      Et(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), Et(e, t, n), (ve = r))
        : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function Wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Uy()),
      t.forEach(function (r) {
        var i = qy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((fe = a.stateNode), (qe = !1));
              break e;
            case 3:
              ((fe = a.stateNode.containerInfo), (qe = !0));
              break e;
            case 4:
              ((fe = a.stateNode.containerInfo), (qe = !0));
              break e;
          }
          a = a.return;
        }
        if (fe === null) throw Error(C(160));
        (Lp(s, o, i), (fe = null), (qe = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Vp(t, e), (t = t.sibling));
}
function Vp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ye(t, e), it(e), r & 4)) {
        try {
          (_r(3, e, e.return), Js(3, e));
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          _r(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      (Ye(t, e), it(e), r & 512 && n !== null && On(n, n.return));
      break;
    case 5:
      if (
        (Ye(t, e),
        it(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Hr(i, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && nh(i, s),
              ma(a, o));
            var u = ma(a, s);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                f = l[o + 1];
              d === "style"
                ? ah(i, f)
                : d === "dangerouslySetInnerHTML"
                  ? sh(i, f)
                  : d === "children"
                    ? Hr(i, f)
                    : xl(i, d, f, u);
            }
            switch (a) {
              case "input":
                ca(i, s);
                break;
              case "textarea":
                rh(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Wn(i, !!s.multiple, y, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Wn(i, !!s.multiple, s.defaultValue, !0)
                      : Wn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ei] = s;
          } catch (x) {
            Z(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ye(t, e), it(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ye(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yr(t.containerInfo);
        } catch (x) {
          Z(e, e.return, x);
        }
      break;
    case 4:
      (Ye(t, e), it(e));
      break;
    case 13:
      (Ye(t, e),
        it(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ql = ee())),
        r & 4 && Wc(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || d), Ye(t, e), (ve = u)) : Ye(t, e),
        it(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (f = M = d; M !== null; ) {
              switch (((h = M), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _r(4, h, h.return);
                  break;
                case 1:
                  On(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (x) {
                      Z(r, n, x);
                    }
                  }
                  break;
                case 5:
                  On(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Kc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (M = y)) : Kc(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = oh("display", o))));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                Z(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Ye(t, e), it(e), r & 4 && Wc(e));
      break;
    case 21:
      break;
    default:
      (Ye(t, e), it(e));
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Hr(i, ""), (r.flags &= -33));
          var s = $c(e);
          Ha(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = $c(e);
          Wa(e, a, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (l) {
      Z(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wy(e, t, n) {
  ((M = e), _p(e));
}
function _p(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Bi;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ve;
        a = Bi;
        var u = ve;
        if (((Bi = o), (ve = l) && !u))
          for (M = i; M !== null; )
            ((o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Gc(i)
                : l !== null
                  ? ((l.return = o), (M = l))
                  : Gc(i));
        for (; s !== null; ) ((M = s), _p(s), (s = s.sibling));
        ((M = i), (Bi = a), (ve = u));
      }
      Hc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (M = s)) : Hc(e);
  }
}
function Hc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Js(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Mc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Mc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Yr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        ve || (t.flags & 512 && $a(t));
      } catch (h) {
        Z(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (M = n));
      break;
    }
    M = t.return;
  }
}
function Kc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (M = n));
      break;
    }
    M = t.return;
  }
}
function Gc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Js(4, t);
          } catch (l) {
            Z(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Z(t, i, l);
            }
          }
          var s = t.return;
          try {
            $a(t);
          } catch (l) {
            Z(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            $a(t);
          } catch (l) {
            Z(t, o, l);
          }
      }
    } catch (l) {
      Z(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (M = a));
      break;
    }
    M = t.return;
  }
}
var Hy = Math.ceil,
  Ms = Pt.ReactCurrentDispatcher,
  Xl = Pt.ReactCurrentOwner,
  Ke = Pt.ReactCurrentBatchConfig,
  O = 0,
  de = null,
  te = null,
  he = 0,
  Re = 0,
  zn = Qt(0),
  oe = 0,
  oi = null,
  yn = 0,
  eo = 0,
  Zl = 0,
  Ir = null,
  Ee = null,
  ql = 0,
  nr = 1 / 0,
  ht = null,
  As = !1,
  Ka = null,
  bt = null,
  bi = !1,
  _t = null,
  Ds = 0,
  Or = 0,
  Ga = null,
  ns = -1,
  rs = 0;
function Se() {
  return O & 6 ? ee() : ns !== -1 ? ns : (ns = ee());
}
function Ut(e) {
  return e.mode & 1
    ? O & 2 && he !== 0
      ? he & -he
      : Ny.transition !== null
        ? (rs === 0 && (rs = xh()), rs)
        : ((e = B),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ch(e.type))),
          e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (Ga = null), Error(C(185)));
  (pi(e, n, r),
    (!(O & 2) || e !== de) &&
      (e === de && (!(O & 2) && (eo |= n), oe === 4 && Lt(e, he)),
      De(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((nr = ee() + 500), Xs && Yt())));
}
function De(e, t) {
  var n = e.callbackNode;
  N0(e, t);
  var r = ps(e, e === de ? he : 0);
  if (r === 0)
    (n !== null && nc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nc(n), t === 1))
      (e.tag === 0 ? Ey(Qc.bind(null, e)) : Hh(Qc.bind(null, e)),
        Ty(function () {
          !(O & 6) && Yt();
        }),
        (n = null));
    else {
      switch (wh(r)) {
        case 1:
          n = jl;
          break;
        case 4:
          n = yh;
          break;
        case 16:
          n = hs;
          break;
        case 536870912:
          n = vh;
          break;
        default:
          n = hs;
      }
      n = $p(n, Ip.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Ip(e, t) {
  if (((ns = -1), (rs = 0), O & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n) return null;
  var r = ps(e, e === de ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Rs(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var s = zp();
    (de !== e || he !== t) && ((ht = null), (nr = ee() + 500), cn(e, t));
    do
      try {
        Qy();
        break;
      } catch (a) {
        Op(e, a);
      }
    while (!0);
    (Ol(),
      (Ms.current = s),
      (O = i),
      te !== null ? (t = 0) : ((de = null), (he = 0), (t = oe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = wa(e)), i !== 0 && ((r = i), (t = Qa(e, i)))), t === 1)
    )
      throw ((n = oi), cn(e, 0), Lt(e, r), De(e, ee()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ky(i) &&
          ((t = Rs(e, r)),
          t === 2 && ((s = wa(e)), s !== 0 && ((r = s), (t = Qa(e, s)))),
          t === 1))
      )
        throw ((n = oi), cn(e, 0), Lt(e, r), De(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          nn(e, Ee, ht);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = ql + 500 - ee()), 10 < t))
          ) {
            if (ps(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (Se(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Na(nn.bind(null, e, Ee, ht), t);
            break;
          }
          nn(e, Ee, ht);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - et(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Hy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Na(nn.bind(null, e, Ee, ht), r);
            break;
          }
          nn(e, Ee, ht);
          break;
        case 5:
          nn(e, Ee, ht);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return (De(e, ee()), e.callbackNode === n ? Ip.bind(null, e) : null);
}
function Qa(e, t) {
  var n = Ir;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = Rs(e, t)),
    e !== 2 && ((t = Ee), (Ee = n), t !== null && Ya(t)),
    e
  );
}
function Ya(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function Ky(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!nt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Lt(e, t) {
  for (
    t &= ~Zl,
      t &= ~eo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - et(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Qc(e) {
  if (O & 6) throw Error(C(327));
  Yn();
  var t = ps(e, 0);
  if (!(t & 1)) return (De(e, ee()), null);
  var n = Rs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wa(e);
    r !== 0 && ((t = r), (n = Qa(e, r)));
  }
  if (n === 1) throw ((n = oi), cn(e, 0), Lt(e, t), De(e, ee()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Ee, ht),
    De(e, ee()),
    null
  );
}
function Jl(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    ((O = n), O === 0 && ((nr = ee() + 500), Xs && Yt()));
  }
}
function vn(e) {
  _t !== null && _t.tag === 0 && !(O & 6) && Yn();
  var t = O;
  O |= 1;
  var n = Ke.transition,
    r = B;
  try {
    if (((Ke.transition = null), (B = 1), e)) return e();
  } finally {
    ((B = r), (Ke.transition = n), (O = t), !(O & 6) && Yt());
  }
}
function eu() {
  ((Re = zn.current), $(zn));
}
function cn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ky(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Vl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && xs());
          break;
        case 3:
          (er(), $(Me), $(xe), $l());
          break;
        case 5:
          Ul(r);
          break;
        case 4:
          er();
          break;
        case 13:
          $(K);
          break;
        case 19:
          $(K);
          break;
        case 10:
          zl(r.type._context);
          break;
        case 22:
        case 23:
          eu();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (te = e = $t(e.current, null)),
    (he = Re = t),
    (oe = 0),
    (oi = null),
    (Zl = eo = yn = 0),
    (Ee = Ir = null),
    an !== null)
  ) {
    for (t = 0; t < an.length; t++)
      if (((n = an[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    an = null;
  }
  return e;
}
function Op(e, t) {
  do {
    var n = te;
    try {
      if ((Ol(), (Ji.current = Ns), Es)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Es = !1;
      }
      if (
        ((gn = 0),
        (ue = se = Q = null),
        (Vr = !1),
        (ri = 0),
        (Xl.current = null),
        n === null || n.return === null)
      ) {
        ((oe = 1), (oi = t), (te = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = he),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = _c(o);
          if (y !== null) {
            ((y.flags &= -257),
              Ic(y, o, a, s, t),
              y.mode & 1 && Vc(s, u, t),
              (t = y),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              (x.add(l), (t.updateQueue = x));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Vc(s, u, t), tu());
              break e;
            }
            l = Error(C(426));
          }
        } else if (W && a.mode & 1) {
          var T = _c(o);
          if (T !== null) {
            (!(T.flags & 65536) && (T.flags |= 256),
              Ic(T, o, a, s, t),
              _l(tr(l, a)));
            break e;
          }
        }
        ((s = l = tr(l, a)),
          oe !== 4 && (oe = 2),
          Ir === null ? (Ir = [s]) : Ir.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var m = wp(s, l, t);
              Nc(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (bt === null || !bt.has(g))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var S = Sp(s, a, t);
                Nc(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Bp(n);
    } catch (w) {
      ((t = w), te === n && n !== null && (te = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function zp() {
  var e = Ms.current;
  return ((Ms.current = Ns), e === null ? Ns : e);
}
function tu() {
  ((oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    de === null || (!(yn & 268435455) && !(eo & 268435455)) || Lt(de, he));
}
function Rs(e, t) {
  var n = O;
  O |= 2;
  var r = zp();
  (de !== e || he !== t) && ((ht = null), cn(e, t));
  do
    try {
      Gy();
      break;
    } catch (i) {
      Op(e, i);
    }
  while (!0);
  if ((Ol(), (O = n), (Ms.current = r), te !== null)) throw Error(C(261));
  return ((de = null), (he = 0), oe);
}
function Gy() {
  for (; te !== null; ) Fp(te);
}
function Qy() {
  for (; te !== null && !x0(); ) Fp(te);
}
function Fp(e) {
  var t = Up(e.alternate, e, Re);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Bp(e) : (te = t),
    (Xl.current = null));
}
function Bp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = by(n, t)), n !== null)) {
        ((n.flags &= 32767), (te = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((oe = 6), (te = null));
        return;
      }
    } else if (((n = By(n, t, Re)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function nn(e, t, n) {
  var r = B,
    i = Ke.transition;
  try {
    ((Ke.transition = null), (B = 1), Yy(e, t, n, r));
  } finally {
    ((Ke.transition = i), (B = r));
  }
  return null;
}
function Yy(e, t, n, r) {
  do Yn();
  while (_t !== null);
  if (O & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (M0(e, s),
    e === de && ((te = de = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      bi ||
      ((bi = !0),
      $p(hs, function () {
        return (Yn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Ke.transition), (Ke.transition = null));
    var o = B;
    B = 1;
    var a = O;
    ((O |= 4),
      (Xl.current = null),
      $y(e, n),
      Vp(n, e),
      my(Ca),
      (ms = !!Pa),
      (Ca = Pa = null),
      (e.current = n),
      Wy(n),
      w0(),
      (O = a),
      (B = o),
      (Ke.transition = s));
  } else e.current = n;
  if (
    (bi && ((bi = !1), (_t = e), (Ds = i)),
    (s = e.pendingLanes),
    s === 0 && (bt = null),
    T0(n.stateNode),
    De(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (As) throw ((As = !1), (e = Ka), (Ka = null), e);
  return (
    Ds & 1 && e.tag !== 0 && Yn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ga ? Or++ : ((Or = 0), (Ga = e))) : (Or = 0),
    Yt(),
    null
  );
}
function Yn() {
  if (_t !== null) {
    var e = wh(Ds),
      t = Ke.transition,
      n = B;
    try {
      if (((Ke.transition = null), (B = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (Ds = 0), O & 6)) throw Error(C(331));
        var i = O;
        for (O |= 4, M = e.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (M = f));
                  else
                    for (; M !== null; ) {
                      d = M;
                      var h = d.sibling,
                        y = d.return;
                      if ((Dp(d), d === u)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = y), (M = h));
                        break;
                      }
                      M = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var T = x.sibling;
                    ((x.sibling = null), (x = T));
                  } while (x !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (M = o));
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _r(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                ((m.return = s.return), (M = m));
                break e;
              }
              M = s.return;
            }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          o = M;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (M = g));
          else
            e: for (o = p; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Js(9, a);
                  }
                } catch (w) {
                  Z(a, a.return, w);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (M = S));
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((O = i), Yt(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(Hs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((B = n), (Ke.transition = t));
    }
  }
  return !1;
}
function Yc(e, t, n) {
  ((t = tr(n, t)),
    (t = wp(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = Se()),
    e !== null && (pi(e, 1, t), De(e, t)));
}
function Z(e, t, n) {
  if (e.tag === 3) Yc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bt === null || !bt.has(r)))
        ) {
          ((e = tr(n, e)),
            (e = Sp(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = Se()),
            t !== null && (pi(t, 1, e), De(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Xy(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (he & n) === n &&
      (oe === 4 || (oe === 3 && (he & 130023424) === he && 500 > ee() - ql)
        ? cn(e, 0)
        : (Zl |= n)),
    De(e, t));
}
function bp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Di), (Di <<= 1), !(Di & 130023424) && (Di = 4194304))
      : (t = 1));
  var n = Se();
  ((e = Tt(e, t)), e !== null && (pi(e, t, n), De(e, n)));
}
function Zy(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), bp(e, n));
}
function qy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  (r !== null && r.delete(t), bp(e, n));
}
var Up;
Up = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ne = !1), Fy(e, t, n));
      Ne = !!(e.flags & 131072);
    }
  else ((Ne = !1), W && t.flags & 1048576 && Kh(t, ks, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ts(e, t), (e = t.pendingProps));
      var i = Zn(t, xe.current);
      (Qn(t, n), (i = Hl(null, t, r, e, i, n)));
      var s = Kl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((s = !0), ws(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Bl(t),
            (i.updater = qs),
            (t.stateNode = i),
            (i._reactInternals = t),
            _a(t, r, e, n),
            (t = za(null, t, r, !0, s, n)))
          : ((t.tag = 0), W && s && Ll(t), we(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ts(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = ev(r)),
          (e = Ze(r, e)),
          i)
        ) {
          case 0:
            t = Oa(null, t, r, e, n);
            break e;
          case 1:
            t = Fc(null, t, r, e, n);
            break e;
          case 11:
            t = Oc(null, t, r, e, n);
            break e;
          case 14:
            t = zc(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Oa(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Fc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Pp(t), e === null)) throw Error(C(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          qh(e, t),
          Ps(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = tr(Error(C(423)), t)), (t = Bc(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = tr(Error(C(424)), t)), (t = Bc(e, t, r, n, i)));
            break e;
          } else
            for (
              Le = Ft(t.stateNode.containerInfo.firstChild),
                Ve = t,
                W = !0,
                Je = null,
                n = Xh(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((qn(), r === i)) {
            t = jt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jh(t),
        e === null && Ra(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ea(r, i) ? (o = null) : s !== null && Ea(r, s) && (t.flags |= 32),
        jp(e, t),
        we(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Ra(t), null);
    case 13:
      return Cp(e, t, n);
    case 4:
      return (
        bl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Oc(e, t, r, i, n)
      );
    case 7:
      return (we(e, t, t.pendingProps, n), t.child);
    case 8:
      return (we(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (we(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          b(Ts, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (nt(s.value, o)) {
            if (s.children === i.children && !Me.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = vt(-1, n & -n)), (l.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      La(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  La(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (we(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (i = Ge(i)),
        (r = r(i)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ze(r, t.pendingProps)),
        (i = Ze(r.type, i)),
        zc(e, t, r, i, n)
      );
    case 15:
      return kp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        ts(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), ws(t)) : (e = !1),
        Qn(t, n),
        xp(t, r, i),
        _a(t, r, i, n),
        za(null, t, r, !0, e, n)
      );
    case 19:
      return Ep(e, t, n);
    case 22:
      return Tp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function $p(e, t) {
  return gh(e, t);
}
function Jy(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function We(e, t, n, r) {
  return new Jy(e, t, n, r);
}
function nu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function ev(e) {
  if (typeof e == "function") return nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Sl)) return 11;
    if (e === kl) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function is(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) nu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Nn:
        return dn(n.children, i, s, t);
      case wl:
        ((o = 8), (i |= 8));
        break;
      case sa:
        return (
          (e = We(12, n, t, i | 2)),
          (e.elementType = sa),
          (e.lanes = s),
          e
        );
      case oa:
        return ((e = We(13, n, t, i)), (e.elementType = oa), (e.lanes = s), e);
      case aa:
        return ((e = We(19, n, t, i)), (e.elementType = aa), (e.lanes = s), e);
      case Jf:
        return to(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zf:
              o = 10;
              break e;
            case qf:
              o = 9;
              break e;
            case Sl:
              o = 11;
              break e;
            case kl:
              o = 14;
              break e;
            case At:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function dn(e, t, n, r) {
  return ((e = We(7, e, r, t)), (e.lanes = n), e);
}
function to(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = Jf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fo(e, t, n) {
  return ((e = We(6, e, null, t)), (e.lanes = n), e);
}
function Bo(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function tv(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wo(0)),
    (this.expirationTimes = wo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function ru(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new tv(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = We(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bl(s),
    e
  );
}
function nv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: En,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wp(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (kn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Wh(e, n, t);
  }
  return t;
}
function Hp(e, t, n, r, i, s, o, a, l) {
  return (
    (e = ru(n, r, !0, e, i, s, o, a, l)),
    (e.context = Wp(null)),
    (n = e.current),
    (r = Se()),
    (i = Ut(n)),
    (s = vt(r, i)),
    (s.callback = t ?? null),
    Bt(n, s, i),
    (e.current.lanes = i),
    pi(e, i, r),
    De(e, r),
    e
  );
}
function no(e, t, n, r) {
  var i = t.current,
    s = Se(),
    o = Ut(i);
  return (
    (n = Wp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = vt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(i, t, o)),
    e !== null && (tt(e, i, o, s), qi(e, i, o)),
    o
  );
}
function Ls(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function iu(e, t) {
  (Xc(e, t), (e = e.alternate) && Xc(e, t));
}
function rv() {
  return null;
}
var Kp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function su(e) {
  this._internalRoot = e;
}
ro.prototype.render = su.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  no(e, t, null, null);
};
ro.prototype.unmount = su.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (vn(function () {
      no(null, e, null, null);
    }),
      (t[kt] = null));
  }
};
function ro(e) {
  this._internalRoot = e;
}
ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Th();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
    (Rt.splice(n, 0, e), n === 0 && Ph(e));
  }
};
function ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function io(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zc() {}
function iv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ls(o);
        s.call(u);
      };
    }
    var o = Hp(t, r, e, 0, null, !1, !1, "", Zc);
    return (
      (e._reactRootContainer = o),
      (e[kt] = o.current),
      qr(e.nodeType === 8 ? e.parentNode : e),
      vn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ls(l);
      a.call(u);
    };
  }
  var l = ru(e, 0, !1, null, null, !1, !1, "", Zc);
  return (
    (e._reactRootContainer = l),
    (e[kt] = l.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    vn(function () {
      no(t, l, n, r);
    }),
    l
  );
}
function so(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ls(o);
        a.call(l);
      };
    }
    no(t, o, e, i);
  } else o = iv(n, t, e, i, r);
  return Ls(o);
}
Sh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 &&
          (Pl(t, n | 1), De(t, ee()), !(O & 6) && ((nr = ee() + 500), Yt()));
      }
      break;
    case 13:
      (vn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var i = Se();
          tt(r, e, 1, i);
        }
      }),
        iu(e, 1));
  }
};
Cl = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = Se();
      tt(t, e, 134217728, n);
    }
    iu(e, 134217728);
  }
};
kh = function (e) {
  if (e.tag === 13) {
    var t = Ut(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = Se();
      tt(n, e, t, r);
    }
    iu(e, t);
  }
};
Th = function () {
  return B;
};
jh = function (e, t) {
  var n = B;
  try {
    return ((B = e), t());
  } finally {
    B = n;
  }
};
ya = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ca(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ys(r);
            if (!i) throw Error(C(90));
            (th(r), ca(r, i));
          }
        }
      }
      break;
    case "textarea":
      rh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Wn(e, !!n.multiple, t, !1));
  }
};
ch = Jl;
dh = vn;
var sv = { usingClientEntryPoint: !1, Events: [gi, Rn, Ys, lh, uh, Jl] },
  vr = {
    findFiberByHostInstance: on,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ov = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = ph(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || rv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ui.isDisabled && Ui.supportsFiber)
    try {
      ((Hs = Ui.inject(ov)), (lt = Ui));
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sv;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ou(t)) throw Error(C(200));
  return nv(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!ou(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Kp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ru(e, 1, !1, null, null, n, !1, r, i)),
    (e[kt] = t.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    new su(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return ((e = ph(t)), (e = e === null ? null : e.stateNode), e);
};
ze.flushSync = function (e) {
  return vn(e);
};
ze.hydrate = function (e, t, n) {
  if (!io(t)) throw Error(C(200));
  return so(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!ou(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Kp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Hp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[kt] = t.current),
    qr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new ro(t);
};
ze.render = function (e, t, n) {
  if (!io(t)) throw Error(C(200));
  return so(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!io(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (vn(function () {
        so(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[kt] = null));
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = Jl;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!io(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return so(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function Gp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gp);
    } catch (e) {
      console.error(e);
    }
}
(Gp(), (Gf.exports = ze));
var av = Gf.exports,
  qc = av;
((ra.createRoot = qc.createRoot), (ra.hydrateRoot = qc.hydrateRoot));
const au = k.createContext({});
function Tn(e) {
  const t = k.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const oo = k.createContext(null),
  xn = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class lv extends k.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function uv({ children: e, isPresent: t }) {
  const n = k.useId(),
    r = k.useRef(null),
    i = k.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = k.useContext(xn);
  return (
    k.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const d = document.createElement("style");
      return (
        s && (d.nonce = s),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    c.jsx(lv, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: k.cloneElement(e, { ref: r }),
    })
  );
}
const cv = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = Tn(dv),
    l = k.useId(),
    u = k.useCallback(
      (f) => {
        a.set(f, !0);
        for (const h of a.values()) if (!h) return;
        r && r();
      },
      [a, r],
    ),
    d = k.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      s ? [Math.random(), u] : [n, u],
    );
  return (
    k.useMemo(() => {
      a.forEach((f, h) => a.set(h, !1));
    }, [n]),
    k.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = c.jsx(uv, { isPresent: n, children: e })),
    c.jsx(oo.Provider, { value: d, children: e })
  );
};
function dv() {
  return new Map();
}
function Qp(e = !0) {
  const t = k.useContext(oo);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = k.useId();
  k.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = k.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const $i = (e) => e.key || "";
function Jc(e) {
  const t = [];
  return (
    k.Children.forEach(e, (n) => {
      k.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const lu = typeof window < "u",
  vi = lu ? k.useLayoutEffect : k.useEffect,
  Vs = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
  }) => {
    const [a, l] = Qp(o),
      u = k.useMemo(() => Jc(e), [e]),
      d = o && !a ? [] : u.map($i),
      f = k.useRef(!0),
      h = k.useRef(u),
      y = Tn(() => new Map()),
      [v, x] = k.useState(u),
      [T, m] = k.useState(u);
    vi(() => {
      ((f.current = !1), (h.current = u));
      for (let S = 0; S < T.length; S++) {
        const w = $i(T[S]);
        d.includes(w) ? y.delete(w) : y.get(w) !== !0 && y.set(w, !1);
      }
    }, [T, d.length, d.join("-")]);
    const p = [];
    if (u !== v) {
      let S = [...u];
      for (let w = 0; w < T.length; w++) {
        const j = T[w],
          E = $i(j);
        d.includes(E) || (S.splice(w, 0, j), p.push(j));
      }
      (s === "wait" && p.length && (S = p), m(Jc(S)), x(u));
      return;
    }
    const { forceRender: g } = k.useContext(au);
    return c.jsx(c.Fragment, {
      children: T.map((S) => {
        const w = $i(S),
          j = o && !a ? !1 : u === T || d.includes(w),
          E = () => {
            if (y.has(w)) y.set(w, !0);
            else return;
            let P = !0;
            (y.forEach((_) => {
              _ || (P = !1);
            }),
              P &&
                (g == null || g(),
                m(h.current),
                o && (l == null || l()),
                r && r()));
          };
        return c.jsx(
          cv,
          {
            isPresent: j,
            initial: !f.current || n ? void 0 : !1,
            custom: j ? void 0 : t,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: j ? void 0 : E,
            children: S,
          },
          w,
        );
      }),
    });
  },
  ke = (e) => e;
let fv = ke,
  Yp = ke;
function uu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const wn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  xt = (e) => e * 1e3,
  wt = (e) => e / 1e3,
  hv = { useManualTiming: !1 };
function pv(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    (s.has(u) && (l.schedule(u), e()), u(o));
  }
  const l = {
    schedule: (u, d = !1, f = !1) => {
      const y = f && r ? t : n;
      return (d && s.add(u), y.has(u) || y.add(u), u);
    },
    cancel: (u) => {
      (n.delete(u), s.delete(u));
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u)));
    },
  };
  return l;
}
const Wi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  mv = 40;
function Xp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Wi.reduce((m, p) => ((m[p] = pv(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: d,
      render: f,
      postRender: h,
    } = o,
    y = () => {
      const m = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, mv), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y)));
    },
    v = () => {
      ((n = !0), (r = !0), i.isProcessing || e(y));
    };
  return {
    schedule: Wi.reduce((m, p) => {
      const g = o[p];
      return (
        (m[p] = (S, w = !1, j = !1) => (n || v(), g.schedule(S, w, j))),
        m
      );
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Wi.length; p++) o[Wi[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: z,
    cancel: rt,
    state: ie,
    steps: bo,
  } = Xp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ke, !0),
  Zp = k.createContext({ strict: !1 }),
  ed = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  rr = {};
for (const e in ed) rr[e] = { isEnabled: (t) => ed[e].some((n) => !!t[n]) };
function gv(e) {
  for (const t in e) rr[t] = { ...rr[t], ...e[t] };
}
const yv = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function _s(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    yv.has(e)
  );
}
let qp = (e) => !_s(e);
function Jp(e) {
  e && (qp = (t) => (t.startsWith("on") ? !_s(t) : e(t)));
}
try {
  Jp(require("@emotion/is-prop-valid").default);
} catch {}
function vv(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((qp(i) ||
        (n === !0 && _s(i)) ||
        (!t && !_s(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function xv({ children: e, isValidProp: t, ...n }) {
  (t && Jp(t),
    (n = { ...k.useContext(xn), ...n }),
    (n.isStatic = Tn(() => n.isStatic)));
  const r = k.useMemo(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion],
  );
  return c.jsx(xn.Provider, { value: r, children: e });
}
function wv(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const ao = k.createContext({});
function ai(e) {
  return typeof e == "string" || Array.isArray(e);
}
function lo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const cu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  du = ["initial", ...cu];
function uo(e) {
  return lo(e.animate) || du.some((t) => ai(e[t]));
}
function em(e) {
  return !!(uo(e) || e.variants);
}
function Sv(e, t) {
  if (uo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ai(n) ? n : void 0,
      animate: ai(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function kv(e) {
  const { initial: t, animate: n } = Sv(e, k.useContext(ao));
  return k.useMemo(() => ({ initial: t, animate: n }), [td(t), td(n)]);
}
function td(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Tv = Symbol.for("motionComponentSymbol");
function Fn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function jv(e, t, n) {
  return k.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Fn(n) && (n.current = r)));
    },
    [t],
  );
}
const fu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Pv = "framerAppearId",
  tm = "data-" + fu(Pv),
  { schedule: hu } = Xp(queueMicrotask, !1),
  nm = k.createContext({});
function Cv(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = k.useContext(ao),
    l = k.useContext(Zp),
    u = k.useContext(oo),
    d = k.useContext(xn).reducedMotion,
    f = k.useRef(null);
  ((r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: d,
      })));
  const h = f.current,
    y = k.useContext(nm);
  h &&
    !h.projection &&
    i &&
    (h.type === "html" || h.type === "svg") &&
    Ev(f.current, n, i, y);
  const v = k.useRef(!1);
  k.useInsertionEffect(() => {
    h && v.current && h.update(n, u);
  });
  const x = n[tm],
    T = k.useRef(
      !!x &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, x)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, x)),
    );
  return (
    vi(() => {
      h &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        h.updateFeatures(),
        hu.render(h.render),
        T.current && h.animationState && h.animationState.animateChanges());
    }),
    k.useEffect(() => {
      h &&
        (!T.current && h.animationState && h.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, x);
          }),
          (T.current = !1)));
    }),
    h
  );
}
function Ev(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : rm(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Fn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function rm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : rm(e.parent);
}
function Nv({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && gv(e);
  function a(u, d) {
    let f;
    const h = { ...k.useContext(xn), ...u, layoutId: Mv(u) },
      { isStatic: y } = h,
      v = kv(u),
      x = r(u, y);
    if (!y && lu) {
      Av();
      const T = Dv(h);
      ((f = T.MeasureLayout),
        (v.visualElement = Cv(i, x, h, t, T.ProjectionNode)));
    }
    return c.jsxs(ao.Provider, {
      value: v,
      children: [
        f && v.visualElement
          ? c.jsx(f, { visualElement: v.visualElement, ...h })
          : null,
        n(i, u, jv(x, v.visualElement, d), x, y, v.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const l = k.forwardRef(a);
  return ((l[Tv] = i), l);
}
function Mv({ layoutId: e }) {
  const t = k.useContext(au).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Av(e, t) {
  k.useContext(Zp).strict;
}
function Dv(e) {
  const { drag: t, layout: n } = rr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Rv = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function pu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Rv.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function nd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function mu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = nd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = nd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const Xa = (e) => Array.isArray(e),
  Lv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Vv = (e) => (Xa(e) ? e[e.length - 1] || 0 : e),
  ne = (e) => !!(e && e.getVelocity);
function ss(e) {
  const t = ne(e) ? e.get() : e;
  return Lv(t) ? t.toValue() : t;
}
function _v(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s,
) {
  const o = { latestValues: Iv(r, i, s, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const im = (e) => (t, n) => {
  const r = k.useContext(ao),
    i = k.useContext(oo),
    s = () => _v(e, t, r, i);
  return n ? s() : Tn(s);
};
function Iv(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = ss(s[h]);
  let { initial: o, animate: a } = e;
  const l = uo(e),
    u = em(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  if (f && typeof f != "boolean" && !lo(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let y = 0; y < h.length; y++) {
      const v = mu(e, h[y]);
      if (v) {
        const { transitionEnd: x, transition: T, ...m } = v;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const S = d ? g.length - 1 : 0;
            g = g[S];
          }
          g !== null && (i[p] = g);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const lr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  jn = new Set(lr),
  sm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  om = sm("--"),
  Ov = sm("var(--"),
  gu = (e) => (Ov(e) ? zv.test(e.split("/*")[0].trim()) : !1),
  zv =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  am = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  ft = (e, t, n) => (n > t ? t : n < e ? e : n),
  ur = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  li = { ...ur, transform: (e) => ft(0, 1, e) },
  Hi = { ...ur, default: 1 },
  xi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Nt = xi("deg"),
  ct = xi("%"),
  A = xi("px"),
  Fv = xi("vh"),
  Bv = xi("vw"),
  rd = {
    ...ct,
    parse: (e) => ct.parse(e) / 100,
    transform: (e) => ct.transform(e * 100),
  },
  bv = {
    borderWidth: A,
    borderTopWidth: A,
    borderRightWidth: A,
    borderBottomWidth: A,
    borderLeftWidth: A,
    borderRadius: A,
    radius: A,
    borderTopLeftRadius: A,
    borderTopRightRadius: A,
    borderBottomRightRadius: A,
    borderBottomLeftRadius: A,
    width: A,
    maxWidth: A,
    height: A,
    maxHeight: A,
    top: A,
    right: A,
    bottom: A,
    left: A,
    padding: A,
    paddingTop: A,
    paddingRight: A,
    paddingBottom: A,
    paddingLeft: A,
    margin: A,
    marginTop: A,
    marginRight: A,
    marginBottom: A,
    marginLeft: A,
    backgroundPositionX: A,
    backgroundPositionY: A,
  },
  Uv = {
    rotate: Nt,
    rotateX: Nt,
    rotateY: Nt,
    rotateZ: Nt,
    scale: Hi,
    scaleX: Hi,
    scaleY: Hi,
    scaleZ: Hi,
    skew: Nt,
    skewX: Nt,
    skewY: Nt,
    distance: A,
    translateX: A,
    translateY: A,
    translateZ: A,
    x: A,
    y: A,
    z: A,
    perspective: A,
    transformPerspective: A,
    opacity: li,
    originX: rd,
    originY: rd,
    originZ: A,
  },
  id = { ...ur, transform: Math.round },
  yu = {
    ...bv,
    ...Uv,
    zIndex: id,
    size: A,
    fillOpacity: li,
    strokeOpacity: li,
    numOctaves: id,
  },
  $v = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Wv = lr.length;
function Hv(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < Wv; s++) {
    const o = lr[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = am(a, yu[o]);
      if (!l) {
        i = !1;
        const d = $v[o] || o;
        r += `${d}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function vu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (jn.has(l)) {
      o = !0;
      continue;
    } else if (om(l)) {
      i[l] = u;
      continue;
    } else {
      const d = am(u, yu[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = d)) : (r[l] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Hv(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${l} ${u} ${d}`;
  }
}
const Kv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Gv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Qv(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Kv : Gv;
  e[s.offset] = A.transform(-r);
  const o = A.transform(t),
    a = A.transform(n);
  e[s.array] = `${o} ${a}`;
}
function sd(e, t, n) {
  return typeof e == "string" ? e : A.transform(t + n * e);
}
function Yv(e, t, n) {
  const r = sd(t, e.x, e.width),
    i = sd(n, e.y, e.height);
  return `${r} ${i}`;
}
function xu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  d,
  f,
) {
  if ((vu(e, u, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: h, style: y, dimensions: v } = e;
  (h.transform && (v && (y.transform = h.transform), delete h.transform),
    v &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = Yv(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && Qv(h, o, a, l, !1));
}
const wu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  lm = () => ({ ...wu(), attrs: {} }),
  Su = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function um(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const cm = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function dm(e, t, n, r) {
  um(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(cm.has(i) ? i : fu(i), t.attrs[i]);
}
const Is = {};
function Xv(e) {
  Object.assign(Is, e);
}
function fm(e, { layout: t, layoutId: n }) {
  return (
    jn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Is[e] || e === "opacity"))
  );
}
function ku(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (ne(i[o]) ||
      (t.style && ne(t.style[o])) ||
      fm(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function hm(e, t, n) {
  const r = ku(e, t, n);
  for (const i in e)
    if (ne(e[i]) || ne(t[i])) {
      const s =
        lr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Zv(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const od = ["x", "y", "width", "height", "cx", "cy", "r"],
  qv = {
    useVisualState: im({
      scrapeMotionValuesFromProps: hm,
      createRenderState: lm,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const a in i)
            if (jn.has(a)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let o = !t;
        if (t)
          for (let a = 0; a < od.length; a++) {
            const l = od[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          z.read(() => {
            (Zv(n, r),
              z.render(() => {
                (xu(r, i, Su(n.tagName), e.transformTemplate), dm(n, r));
              }));
          });
      },
    }),
  },
  Jv = {
    useVisualState: im({
      scrapeMotionValuesFromProps: ku,
      createRenderState: wu,
    }),
  };
function pm(e, t, n) {
  for (const r in t) !ne(t[r]) && !fm(r, n) && (e[r] = t[r]);
}
function ex({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const n = wu();
    return (vu(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function tx(e, t) {
  const n = e.style || {},
    r = {};
  return (pm(r, n, e), Object.assign(r, ex(e, t)), r);
}
function nx(e, t) {
  const n = {},
    r = tx(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function rx(e, t, n, r) {
  const i = k.useMemo(() => {
    const s = lm();
    return (
      xu(s, t, Su(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (pm(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
function ix(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (pu(n) ? rx : nx)(r, s, o, n),
      u = vv(r, typeof n == "string", e),
      d = n !== k.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      h = k.useMemo(() => (ne(f) ? f.get() : f), [f]);
    return k.createElement(n, { ...d, children: h });
  };
}
function sx(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(pu(r) ? qv : Jv),
      preloadedFeatures: e,
      useRender: ix(i),
      createVisualElement: t,
      Component: r,
    };
    return Nv(o);
  };
}
function mm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function co(e, t, n) {
  const r = e.getProps();
  return mu(r, t, n !== void 0 ? n : r.custom, e);
}
const gm = uu(() => window.ScrollTimeline !== void 0);
class ox {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (gm() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        (i && i(), this.animations[s].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class ax extends ox {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Tu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Za = 2e4;
function ym(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Za; ) ((t += n), (r = e.next(t)));
  return t >= Za ? 1 / 0 : t;
}
function ju(e) {
  return typeof e == "function";
}
function ad(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const Pu = (e) => Array.isArray(e) && typeof e[0] == "number",
  lx = { linearEasing: void 0 };
function ux(e, t) {
  const n = uu(e);
  return () => {
    var r;
    return (r = lx[t]) !== null && r !== void 0 ? r : n();
  };
}
const Os = ux(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  vm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(wn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function xm(e) {
  return !!(
    (typeof e == "function" && Os()) ||
    !e ||
    (typeof e == "string" && (e in qa || Os())) ||
    Pu(e) ||
    (Array.isArray(e) && e.every(xm))
  );
}
const Cr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  qa = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Cr([0, 0.65, 0.55, 1]),
    circOut: Cr([0.55, 0, 1, 0.45]),
    backIn: Cr([0.31, 0.01, 0.66, -0.59]),
    backOut: Cr([0.33, 1.53, 0.69, 0.99]),
  };
function wm(e, t) {
  if (e)
    return typeof e == "function" && Os()
      ? vm(e, t)
      : Pu(e)
        ? Cr(e)
        : Array.isArray(e)
          ? e.map((n) => wm(n, t) || qa.easeOut)
          : qa[e];
}
const Xe = { x: !1, y: !1 };
function Sm() {
  return Xe.x || Xe.y;
}
function km(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function Tm(e, t) {
  const n = km(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function ld(e) {
  return (t) => {
    t.pointerType === "touch" || Sm() || e(t);
  };
}
function cx(e, t, n = {}) {
  const [r, i, s] = Tm(e, n),
    o = ld((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const d = ld((f) => {
        (u(f), l.removeEventListener("pointerleave", d));
      });
      l.addEventListener("pointerleave", d, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const jm = (e, t) => (t ? (e === t ? !0 : jm(e, t.parentElement)) : !1),
  Cu = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  dx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function fx(e) {
  return dx.has(e.tagName) || e.tabIndex !== -1;
}
const Er = new WeakSet();
function ud(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Uo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const hx = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = ud(() => {
    if (Er.has(n)) return;
    Uo(n, "down");
    const i = ud(() => {
        Uo(n, "up");
      }),
      s = () => Uo(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function cd(e) {
  return Cu(e) && !Sm();
}
function px(e, t, n = {}) {
  const [r, i, s] = Tm(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!cd(a) || Er.has(l)) return;
      Er.add(l);
      const u = t(a),
        d = (y, v) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!cd(y) || !Er.has(l)) &&
              (Er.delete(l), typeof u == "function" && u(y, { success: v })));
        },
        f = (y) => {
          d(y, n.useGlobalTarget || jm(l, y.target));
        },
        h = (y) => {
          d(y, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i));
    };
  return (
    r.forEach((a) => {
      (!fx(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", (u) => hx(u, i), i));
    }),
    s
  );
}
function mx(e) {
  return e === "x" || e === "y"
    ? Xe[e]
      ? null
      : ((Xe[e] = !0),
        () => {
          Xe[e] = !1;
        })
    : Xe.x || Xe.y
      ? null
      : ((Xe.x = Xe.y = !0),
        () => {
          Xe.x = Xe.y = !1;
        });
}
const Pm = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...lr,
]);
let os;
function gx() {
  os = void 0;
}
const dt = {
  now: () => (
    os === void 0 &&
      dt.set(
        ie.isProcessing || hv.useManualTiming
          ? ie.timestamp
          : performance.now(),
      ),
    os
  ),
  set: (e) => {
    ((os = e), queueMicrotask(gx));
  },
};
function Eu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Nu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Mu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Eu(this.subscriptions, t), () => Nu(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Au(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const dd = 30,
  yx = (e) => !isNaN(parseFloat(e)),
  zr = { current: void 0 };
class vx {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = dt.now();
        (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = dt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = yx(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Mu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            z.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return (zr.current && zr.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = dt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > dd
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, dd);
    return Au(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function at(e, t) {
  return new vx(e, t);
}
function xx(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, at(n));
}
function wx(e, t) {
  const n = co(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = Vv(s[o]);
    xx(e, o, a);
  }
}
function Sx(e) {
  return !!(ne(e) && e.add);
}
function Ja(e, t) {
  const n = e.getValue("willChange");
  if (Sx(n)) return n.add(t);
}
function Cm(e) {
  return e.props[tm];
}
const Em = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  kx = 1e-7,
  Tx = 12;
function jx(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (s = Em(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > kx && ++a < Tx);
  return o;
}
function wi(e, t, n, r) {
  if (e === t && n === r) return ke;
  const i = (s) => jx(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Em(i(s), t, r));
}
const Nm = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Mm = (e) => (t) => 1 - e(1 - t),
  Am = wi(0.33, 1.53, 0.69, 0.99),
  Du = Mm(Am),
  Dm = Nm(Du),
  Rm = (e) =>
    (e *= 2) < 1 ? 0.5 * Du(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Ru = (e) => 1 - Math.sin(Math.acos(e)),
  Lm = Mm(Ru),
  Vm = Nm(Ru),
  _m = (e) => /^0[^.\s]+$/u.test(e);
function Px(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || _m(e)
      : !0;
}
const Fr = (e) => Math.round(e * 1e5) / 1e5,
  Lu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Cx(e) {
  return e == null;
}
const Ex =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Vu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Ex.test(n) && n.startsWith(e)) ||
      (t && !Cx(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Im = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(Lu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Nx = (e) => ft(0, 255, e),
  $o = { ...ur, transform: (e) => Math.round(Nx(e)) },
  un = {
    test: Vu("rgb", "red"),
    parse: Im("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      $o.transform(e) +
      ", " +
      $o.transform(t) +
      ", " +
      $o.transform(n) +
      ", " +
      Fr(li.transform(r)) +
      ")",
  };
function Mx(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const el = { test: Vu("#"), parse: Mx, transform: un.transform },
  Bn = {
    test: Vu("hsl", "hue"),
    parse: Im("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ct.transform(Fr(t)) +
      ", " +
      ct.transform(Fr(n)) +
      ", " +
      Fr(li.transform(r)) +
      ")",
  },
  ye = {
    test: (e) => un.test(e) || el.test(e) || Bn.test(e),
    parse: (e) =>
      un.test(e) ? un.parse(e) : Bn.test(e) ? Bn.parse(e) : el.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? un.transform(e)
          : Bn.transform(e),
  },
  Ax =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Dx(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Lu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Ax)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Om = "number",
  zm = "color",
  Rx = "var",
  Lx = "var(",
  fd = "${}",
  Vx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ui(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      Vx,
      (l) => (
        ye.test(l)
          ? (r.color.push(s), i.push(zm), n.push(ye.parse(l)))
          : l.startsWith(Lx)
            ? (r.var.push(s), i.push(Rx), n.push(l))
            : (r.number.push(s), i.push(Om), n.push(parseFloat(l))),
        ++s,
        fd
      ),
    )
    .split(fd);
  return { values: n, split: a, indexes: r, types: i };
}
function Fm(e) {
  return ui(e).values;
}
function Bm(e) {
  const { split: t, types: n } = ui(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === Om
          ? (s += Fr(i[o]))
          : a === zm
            ? (s += ye.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const _x = (e) => (typeof e == "number" ? 0 : e);
function Ix(e) {
  const t = Fm(e);
  return Bm(e)(t.map(_x));
}
const Kt = {
    test: Dx,
    parse: Fm,
    createTransformer: Bm,
    getAnimatableNone: Ix,
  },
  Ox = new Set(["brightness", "contrast", "saturate", "opacity"]);
function zx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Lu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Ox.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const Fx = /\b([a-z-]*)\(.*?\)/gu,
  tl = {
    ...Kt,
    getAnimatableNone: (e) => {
      const t = e.match(Fx);
      return t ? t.map(zx).join(" ") : e;
    },
  },
  Bx = {
    ...yu,
    color: ye,
    backgroundColor: ye,
    outlineColor: ye,
    fill: ye,
    stroke: ye,
    borderColor: ye,
    borderTopColor: ye,
    borderRightColor: ye,
    borderBottomColor: ye,
    borderLeftColor: ye,
    filter: tl,
    WebkitFilter: tl,
  },
  _u = (e) => Bx[e];
function bm(e, t) {
  let n = _u(e);
  return (
    n !== tl && (n = Kt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const bx = new Set(["auto", "none", "0"]);
function Ux(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !bx.has(s) && ui(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = bm(n, i);
}
const hd = (e) => e === ur || e === A,
  pd = (e, t) => parseFloat(e.split(", ")[t]),
  md =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return pd(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? pd(s[1], e) : 0;
      }
    },
  $x = new Set(["x", "y", "z"]),
  Wx = lr.filter((e) => !$x.has(e));
function Hx(e) {
  const t = [];
  return (
    Wx.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ir = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: md(4, 13),
  y: md(5, 14),
};
ir.translateX = ir.x;
ir.translateY = ir.y;
const fn = new Set();
let nl = !1,
  rl = !1;
function Um() {
  if (rl) {
    const e = Array.from(fn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = Hx(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((rl = !1), (nl = !1), fn.forEach((e) => e.complete()), fn.clear());
}
function $m() {
  fn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (rl = !0));
  });
}
function Kx() {
  ($m(), Um());
}
class Iu {
  constructor(t, n, r, i, s, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (fn.add(this), nl || ((nl = !0), z.read($m), z.resolveKeyframes(Um)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          (t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]));
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      fn.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), fn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Wm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Gx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Qx(e) {
  const t = Gx.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Hm(e, t, n = 1) {
  const [r, i] = Qx(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Wm(o) ? parseFloat(o) : o;
  }
  return gu(i) ? Hm(i, t, n + 1) : i;
}
const Km = (e) => (t) => t.test(e),
  Yx = { test: (e) => e === "auto", parse: (e) => e },
  Gm = [ur, A, ct, Nt, Bv, Fv, Yx],
  gd = (e) => Gm.find(Km(e));
class Qm extends Iu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), gu(u))) {
        const d = Hm(u, n.current);
        (d !== void 0 && (t[l] = d),
          l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !Pm.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = gd(i),
      a = gd(s);
    if (o !== a)
      if (hd(o) && hd(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Px(t[i]) && r.push(i);
    r.length && Ux(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ir[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    ((i[o] = ir[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const yd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Kt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Xx(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Zx(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = yd(i, t),
    a = yd(s, t);
  return !o || !a ? !1 : Xx(e) || ((n === "spring" || ju(n)) && r);
}
const qx = (e) => e !== null;
function fo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(qx),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const Jx = 40;
class Ym {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = dt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Jx
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && Kx(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = dt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Zx(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        (l && l(fo(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const G = (e, t, n) => e + (t - e) * n;
function Wo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function e1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Wo(l, a, e + 1 / 3)), (s = Wo(l, a, e)), (o = Wo(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function zs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ho = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  t1 = [el, un, Bn],
  n1 = (e) => t1.find((t) => t.test(e));
function vd(e) {
  const t = n1(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Bn && (n = e1(n)), n);
}
const xd = (e, t) => {
    const n = vd(e),
      r = vd(t);
    if (!n || !r) return zs(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Ho(n.red, r.red, s)),
      (i.green = Ho(n.green, r.green, s)),
      (i.blue = Ho(n.blue, r.blue, s)),
      (i.alpha = G(n.alpha, r.alpha, s)),
      un.transform(i)
    );
  },
  r1 = (e, t) => (n) => t(e(n)),
  Si = (...e) => e.reduce(r1),
  il = new Set(["none", "hidden"]);
function i1(e, t) {
  return il.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function s1(e, t) {
  return (n) => G(e, t, n);
}
function Ou(e) {
  return typeof e == "number"
    ? s1
    : typeof e == "string"
      ? gu(e)
        ? zs
        : ye.test(e)
          ? xd
          : l1
      : Array.isArray(e)
        ? Xm
        : typeof e == "object"
          ? ye.test(e)
            ? xd
            : o1
          : zs;
}
function Xm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Ou(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function o1(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ou(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function a1(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[s] = l), i[o]++);
  }
  return r;
}
const l1 = (e, t) => {
  const n = Kt.createTransformer(t),
    r = ui(e),
    i = ui(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (il.has(e) && !i.values.length) || (il.has(t) && !r.values.length)
      ? i1(e, t)
      : Si(Xm(a1(r, i), i.values), n)
    : zs(e, t);
};
function Zm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? G(e, t, n)
    : Ou(e)(e, t);
}
const u1 = 5;
function qm(e, t, n) {
  const r = Math.max(t - u1, 0);
  return Au(n - e(r), t - r);
}
const X = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Ko = 0.001;
function c1({
  duration: e = X.duration,
  bounce: t = X.bounce,
  velocity: n = X.velocity,
  mass: r = X.mass,
}) {
  let i,
    s,
    o = 1 - t;
  ((o = ft(X.minDamping, X.maxDamping, o)),
    (e = ft(X.minDuration, X.maxDuration, wt(e))),
    o < 1
      ? ((i = (u) => {
          const d = u * o,
            f = d * e,
            h = d - n,
            y = sl(u, o),
            v = Math.exp(-f);
          return Ko - (h / y) * v;
        }),
        (s = (u) => {
          const f = u * o * e,
            h = f * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = sl(Math.pow(u, 2), o);
          return ((-i(u) + Ko > 0 ? -1 : 1) * ((h - y) * v)) / x;
        }))
      : ((i = (u) => {
          const d = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ko + d * f;
        }),
        (s = (u) => {
          const d = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return d * f;
        })));
  const a = 5 / e,
    l = f1(i, s, a);
  if (((e = xt(e)), isNaN(l)))
    return { stiffness: X.stiffness, damping: X.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const d1 = 12;
function f1(e, t, n) {
  let r = n;
  for (let i = 1; i < d1; i++) r = r - e(r) / t(r);
  return r;
}
function sl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const h1 = ["duration", "bounce"],
  p1 = ["stiffness", "damping", "mass"];
function wd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function m1(e) {
  let t = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!wd(e, p1) && wd(e, h1))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * ft(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: X.mass, stiffness: i, damping: s };
    } else {
      const n = c1(e);
      ((t = { ...t, ...n, mass: X.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Jm(e = X.visualDuration, t = X.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: y,
    } = m1({ ...n, velocity: -wt(n.velocity || 0) }),
    v = h || 0,
    x = u / (2 * Math.sqrt(l * d)),
    T = o - s,
    m = wt(Math.sqrt(l / d)),
    p = Math.abs(T) < 5;
  (r || (r = p ? X.restSpeed.granular : X.restSpeed.default),
    i || (i = p ? X.restDelta.granular : X.restDelta.default));
  let g;
  if (x < 1) {
    const w = sl(m, x);
    g = (j) => {
      const E = Math.exp(-x * m * j);
      return (
        o - E * (((v + x * m * T) / w) * Math.sin(w * j) + T * Math.cos(w * j))
      );
    };
  } else if (x === 1) g = (w) => o - Math.exp(-m * w) * (T + (v + m * T) * w);
  else {
    const w = m * Math.sqrt(x * x - 1);
    g = (j) => {
      const E = Math.exp(-x * m * j),
        P = Math.min(w * j, 300);
      return (
        o - (E * ((v + x * m * T) * Math.sinh(P) + w * T * Math.cosh(P))) / w
      );
    };
  }
  const S = {
    calculatedDuration: (y && f) || null,
    next: (w) => {
      const j = g(w);
      if (y) a.done = w >= f;
      else {
        let E = 0;
        x < 1 && (E = w === 0 ? xt(v) : qm(g, w, j));
        const P = Math.abs(E) <= r,
          _ = Math.abs(o - j) <= i;
        a.done = P && _;
      }
      return ((a.value = a.done ? o : j), a);
    },
    toString: () => {
      const w = Math.min(ym(S), Za),
        j = vm((E) => S.next(w * E).value, w, 30);
      return w + "ms " + j;
    },
  };
  return S;
}
function Sd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    y = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    v = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
          ? a
          : l;
  let x = n * t;
  const T = f + x,
    m = o === void 0 ? T : o(T);
  m !== T && (x = m - f);
  const p = (P) => -x * Math.exp(-P / r),
    g = (P) => m + p(P),
    S = (P) => {
      const _ = p(P),
        D = g(P);
      ((h.done = Math.abs(_) <= u), (h.value = h.done ? m : D));
    };
  let w, j;
  const E = (P) => {
    y(h.value) &&
      ((w = P),
      (j = Jm({
        keyframes: [h.value, v(h.value)],
        velocity: qm(g, P, h.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: d,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let _ = !1;
        return (
          !j && w === void 0 && ((_ = !0), S(P), E(P)),
          w !== void 0 && P >= w ? j.next(P - w) : (!_ && S(P), h)
        );
      },
    }
  );
}
const g1 = wi(0.42, 0, 1, 1),
  y1 = wi(0, 0, 0.58, 1),
  eg = wi(0.42, 0, 0.58, 1),
  v1 = (e) => Array.isArray(e) && typeof e[0] != "number",
  x1 = {
    linear: ke,
    easeIn: g1,
    easeInOut: eg,
    easeOut: y1,
    circIn: Ru,
    circInOut: Vm,
    circOut: Lm,
    backIn: Du,
    backInOut: Dm,
    backOut: Am,
    anticipate: Rm,
  },
  kd = (e) => {
    if (Pu(e)) {
      Yp(e.length === 4);
      const [t, n, r, i] = e;
      return wi(t, n, r, i);
    } else if (typeof e == "string") return x1[e];
    return e;
  };
function w1(e, t, n) {
  const r = [],
    i = n || Zm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || ke : t;
      a = Si(l, a);
    }
    r.push(a);
  }
  return r;
}
function zu(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Yp(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = w1(t, r, i),
    l = a.length,
    u = (d) => {
      if (o && d < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(d < e[f + 1]); f++);
      const h = wn(e[f], e[f + 1], d);
      return a[f](h);
    };
  return n ? (d) => u(ft(e[0], e[s - 1], d)) : u;
}
function S1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = wn(0, t, r);
    e.push(G(n, 1, i));
  }
}
function tg(e) {
  const t = [0];
  return (S1(t, e.length - 1), t);
}
function k1(e, t) {
  return e.map((n) => n * t);
}
function T1(e, t) {
  return e.map(() => t || eg).splice(0, e.length - 1);
}
function Fs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = v1(r) ? r.map(kd) : kd(r),
    s = { done: !1, value: t[0] },
    o = k1(n && n.length === t.length ? n : tg(t), e),
    a = zu(o, t, { ease: Array.isArray(i) ? i : T1(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const j1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => z.update(t, !0),
      stop: () => rt(t),
      now: () => (ie.isProcessing ? ie.timestamp : dt.now()),
    };
  },
  P1 = { decay: Sd, inertia: Sd, tween: Fs, keyframes: Fs, spring: Jm },
  C1 = (e) => e / 100;
class ho extends Ym {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }));
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || Iu,
      a = (l, u) => this.onKeyframesResolved(l, u);
    ((this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = ju(n) ? n : P1[n] || Fs;
    let l, u;
    a !== Fs &&
      typeof t[0] != "number" &&
      ((l = Si(C1, Zm(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    (s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      d.calculatedDuration === null && (d.calculatedDuration = ym(d)));
    const { calculatedDuration: f } = d,
      h = f + i,
      y = h * (r + 1) - i;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: d,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h,
      repeat: y,
      repeatType: v,
      repeatDelay: x,
      onUpdate: T,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > d;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let g = this.currentTime,
      S = s;
    if (y) {
      const P = Math.min(this.currentTime, d) / f;
      let _ = Math.floor(P),
        D = P % 1;
      (!D && P >= 1 && (D = 1),
        D === 1 && _--,
        (_ = Math.min(_, y + 1)),
        !!(_ % 2) &&
          (v === "reverse"
            ? ((D = 1 - D), x && (D -= x / f))
            : v === "mirror" && (S = o)),
        (g = ft(0, 1, D) * f));
    }
    const w = p ? { done: !1, value: l[0] } : S.next(g);
    a && (w.value = a(w.value));
    let { done: j } = w;
    !p &&
      u !== null &&
      (j = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && j));
    return (
      E && i !== void 0 && (w.value = fo(l, this.options, i)),
      T && T(w.value),
      E && this.finish(),
      w
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? wt(t.calculatedDuration) : 0;
  }
  get time() {
    return wt(this.currentTime);
  }
  set time(t) {
    ((t = xt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = wt(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = j1, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))), n && n());
    const i = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
function E1(e) {
  return new ho(e);
}
const N1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function M1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const d = wm(a, i);
  return (
    Array.isArray(d) && (u.easing = d),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const A1 = uu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Bs = 10,
  D1 = 2e4;
function R1(e) {
  return ju(e.type) || e.type === "spring" || !xm(e.ease);
}
function L1(e, t) {
  const n = new ho({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < D1; ) ((r = n.sample(s)), i.push(r.value), (s += Bs));
  return { times: void 0, keyframes: i, duration: s - Bs, ease: "linear" };
}
const ng = { anticipate: Rm, backInOut: Dm, circInOut: Vm };
function V1(e) {
  return e in ng;
}
class Td extends Ym {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    ((this.resolver = new Qm(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: o,
      motionValue: a,
      name: l,
      startTime: u,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof s == "string" && Os() && V1(s) && (s = ng[s]), R1(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: h,
          motionValue: y,
          element: v,
          ...x
        } = this.options,
        T = L1(t, x);
      ((t = T.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = T.duration),
        (i = T.times),
        (s = T.ease),
        (o = "keyframes"));
    }
    const d = M1(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (d.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (ad(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            (a.set(fo(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: d, duration: r, times: i, type: o, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return wt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return wt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = xt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return ke;
      const { animation: r } = n;
      ad(r, t);
    }
    return ke;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: d,
          onComplete: f,
          element: h,
          ...y
        } = this.options,
        v = new ho({
          ...y,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        x = xt(this.time);
      u.setWithVelocity(v.sample(x - Bs).value, v.sample(x).value, Bs);
    }
    const { onStop: l } = this.options;
    (l && l(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return (
      A1() &&
      r &&
      N1.has(r) &&
      !l &&
      !u &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const _1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  I1 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  O1 = { type: "keyframes", duration: 0.8 },
  z1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  F1 = (e, { keyframes: t }) =>
    t.length > 2
      ? O1
      : jn.has(e)
        ? e.startsWith("scale")
          ? I1(t[1])
          : _1
        : z1;
function B1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...d
}) {
  return !!Object.keys(d).length;
}
const Fu =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = Tu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - xt(l);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (h) => {
        (t.set(h), a.onUpdate && a.onUpdate(h));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    (B1(a) || (d = { ...d, ...F1(e, d) }),
      d.duration && (d.duration = xt(d.duration)),
      d.repeatDelay && (d.repeatDelay = xt(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from));
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      f && !s && t.get() !== void 0)
    ) {
      const h = fo(d.keyframes, a);
      if (h !== void 0)
        return (
          z.update(() => {
            (d.onUpdate(h), d.onComplete());
          }),
          new ax([])
        );
    }
    return !s && Td.supports(d) ? new Td(d) : new ho(d);
  };
function b1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function rg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const h = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null,
      ),
      y = l[f];
    if (y === void 0 || (d && b1(d, f))) continue;
    const v = { delay: n, ...Tu(o || {}, f) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = Cm(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, f, z);
        p !== null && ((v.startTime = p), (x = !0));
      }
    }
    (Ja(e, f),
      h.start(
        Fu(f, h, y, e.shouldReduceMotion && Pm.has(f) ? { type: !1 } : v, e, x),
      ));
    const T = h.animation;
    T && u.push(T);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        z.update(() => {
          a && wx(e, a);
        });
      }),
    u
  );
}
function ol(e, t, n = {}) {
  var r;
  const i = co(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(rg(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = s;
            return U1(e, t, d + u, f, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, d] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => d());
  } else return Promise.all([o(), a(n.delay)]);
}
function U1(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort($1)
      .forEach((u, d) => {
        (u.notify("AnimationStart", t),
          o.push(
            ol(u, t, { ...s, delay: n + l(d) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function $1(e, t) {
  return e.sortNodePosition(t);
}
function W1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => ol(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ol(e, t, n);
  else {
    const i = typeof t == "function" ? co(e, t, n.custom) : t;
    r = Promise.all(rg(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const H1 = du.length;
function ig(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? ig(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < H1; n++) {
    const r = du[n],
      i = e.props[r];
    (ai(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const K1 = [...cu].reverse(),
  G1 = cu.length;
function Q1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => W1(e, n, r)));
}
function Y1(e) {
  let t = Q1(e),
    n = jd(),
    r = !0;
  const i = (l) => (u, d) => {
    var f;
    const h = co(
      e,
      d,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const { transition: y, transitionEnd: v, ...x } = h;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      d = ig(e.parent) || {},
      f = [],
      h = new Set();
    let y = {},
      v = 1 / 0;
    for (let T = 0; T < G1; T++) {
      const m = K1[T],
        p = n[m],
        g = u[m] !== void 0 ? u[m] : d[m],
        S = ai(g),
        w = m === l ? p.isActive : null;
      w === !1 && (v = T);
      let j = g === d[m] && g !== u[m] && S;
      if (
        (j && r && e.manuallyAnimateOnMount && (j = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && w === null) ||
          (!g && !p.prevProp) ||
          lo(g) ||
          typeof g == "boolean")
      )
        continue;
      const E = X1(p.prevProp, g);
      let P = E || (m === l && p.isActive && !j && S) || (T > v && S),
        _ = !1;
      const D = Array.isArray(g) ? g : [g];
      let ae = D.reduce(i(m), {});
      w === !1 && (ae = {});
      const { prevResolvedValues: Ct = {} } = p,
        Zt = { ...Ct, ...ae },
        cr = (re) => {
          ((P = !0),
            h.has(re) && ((_ = !0), h.delete(re)),
            (p.needsAnimating[re] = !0));
          const N = e.getValue(re);
          N && (N.liveStyle = !1);
        };
      for (const re in Zt) {
        const N = ae[re],
          R = Ct[re];
        if (y.hasOwnProperty(re)) continue;
        let V = !1;
        (Xa(N) && Xa(R) ? (V = !mm(N, R)) : (V = N !== R),
          V
            ? N != null
              ? cr(re)
              : h.add(re)
            : N !== void 0 && h.has(re)
              ? cr(re)
              : (p.protectedKeys[re] = !0));
      }
      ((p.prevProp = g),
        (p.prevResolvedValues = ae),
        p.isActive && (y = { ...y, ...ae }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!(j && E) || _) &&
          f.push(...D.map((re) => ({ animation: re, options: { type: m } }))));
    }
    if (h.size) {
      const T = {};
      (h.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        (g && (g.liveStyle = !0), (T[m] = p ?? null));
      }),
        f.push({ animation: T }));
    }
    let x = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    ((d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var y;
        return (y = h.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u));
    const f = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ((n = jd()), (r = !0));
    },
  };
}
function X1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !mm(t, e) : !1;
}
function en(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function jd() {
  return {
    animate: en(!0),
    whileInView: en(),
    whileHover: en(),
    whileTap: en(),
    whileDrag: en(),
    whileFocus: en(),
    exit: en(),
  };
}
class Xt {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class Z1 extends Xt {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = Y1(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    lo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let q1 = 0;
class J1 extends Xt {
  constructor() {
    (super(...arguments), (this.id = q1++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const ew = { animation: { Feature: Z1 }, exit: { Feature: J1 } };
function ci(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function ki(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const tw = (e) => (t) => Cu(t) && e(t, ki(t));
function Br(e, t, n, r) {
  return ci(e, t, tw(n), r);
}
const Pd = (e, t) => Math.abs(e - t);
function nw(e, t) {
  const n = Pd(e.x, t.x),
    r = Pd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class sg {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Qo(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          y = nw(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !y) return;
        const { point: v } = f,
          { timestamp: x } = ie;
        this.history.push({ ...v, timestamp: x });
        const { onStart: T, onMove: m } = this.handlers;
        (h ||
          (T && T(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, h) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Go(h, this.transformPagePoint)),
          z.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = Qo(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Go(h, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && y && y(f, T), v && v(f, T));
      }),
      !Cu(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const o = ki(t),
      a = Go(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = ie;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: d } = n;
    (d && d(t, Qo(a, this.history)),
      (this.removeListeners = Si(
        Br(this.contextWindow, "pointermove", this.handlePointerMove),
        Br(this.contextWindow, "pointerup", this.handlePointerUp),
        Br(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), rt(this.updatePoint));
  }
}
function Go(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Cd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Qo({ point: e }, t) {
  return {
    point: e,
    delta: Cd(e, og(t)),
    offset: Cd(e, rw(t)),
    velocity: iw(t, 0.1),
  };
}
function rw(e) {
  return e[0];
}
function og(e) {
  return e[e.length - 1];
}
function iw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = og(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > xt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = wt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
const ag = 1e-4,
  sw = 1 - ag,
  ow = 1 + ag,
  lg = 0.01,
  aw = 0 - lg,
  lw = 0 + lg;
function Ie(e) {
  return e.max - e.min;
}
function uw(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ed(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = G(t.min, t.max, e.origin)),
    (e.scale = Ie(n) / Ie(t)),
    (e.translate = G(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= sw && e.scale <= ow) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= aw && e.translate <= lw) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function br(e, t, n, r) {
  (Ed(e.x, t.x, n.x, r ? r.originX : void 0),
    Ed(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Nd(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Ie(t)));
}
function cw(e, t, n) {
  (Nd(e.x, t.x, n.x), Nd(e.y, t.y, n.y));
}
function Md(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Ie(t)));
}
function Ur(e, t, n) {
  (Md(e.x, t.x, n.x), Md(e.y, t.y, n.y));
}
function dw(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? G(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ad(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function fw(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Ad(e.x, n, i), y: Ad(e.y, t, r) };
}
function Dd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function hw(e, t) {
  return { x: Dd(e.x, t.x), y: Dd(e.y, t.y) };
}
function pw(e, t) {
  let n = 0.5;
  const r = Ie(e),
    i = Ie(t);
  return (
    i > r
      ? (n = wn(t.min, t.max - r, e.min))
      : r > i && (n = wn(e.min, e.max - i, t.min)),
    ft(0, 1, n)
  );
}
function mw(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const al = 0.35;
function gw(e = al) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = al),
    { x: Rd(e, "left", "right"), y: Rd(e, "top", "bottom") }
  );
}
function Rd(e, t, n) {
  return { min: Ld(e, t), max: Ld(e, n) };
}
function Ld(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Vd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  bn = () => ({ x: Vd(), y: Vd() }),
  _d = () => ({ min: 0, max: 0 }),
  J = () => ({ x: _d(), y: _d() });
function be(e) {
  return [e("x"), e("y")];
}
function ug({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function yw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function vw(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Yo(e) {
  return e === void 0 || e === 1;
}
function ll({ scale: e, scaleX: t, scaleY: n }) {
  return !Yo(e) || !Yo(t) || !Yo(n);
}
function rn(e) {
  return (
    ll(e) ||
    cg(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function cg(e) {
  return Id(e.x) || Id(e.y);
}
function Id(e) {
  return e && e !== "0%";
}
function bs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Od(e, t, n, r, i) {
  return (i !== void 0 && (e = bs(e, i, r)), bs(e, n, r) + t);
}
function ul(e, t = 0, n = 1, r, i) {
  ((e.min = Od(e.min, t, n, r, i)), (e.max = Od(e.max, t, n, r, i)));
}
function dg(e, { x: t, y: n }) {
  (ul(e.x, t.translate, t.scale, t.originPoint),
    ul(e.y, n.translate, n.scale, n.originPoint));
}
const zd = 0.999999999999,
  Fd = 1.0000000000001;
function xw(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    ((s = n[a]), (o = s.projectionDelta));
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        $n(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), dg(e, o)),
      r && rn(s.latestValues) && $n(e, s.latestValues));
  }
  (t.x < Fd && t.x > zd && (t.x = 1), t.y < Fd && t.y > zd && (t.y = 1));
}
function Un(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Bd(e, t, n, r, i = 0.5) {
  const s = G(e.min, e.max, i);
  ul(e, t, n, s, r);
}
function $n(e, t) {
  (Bd(e.x, t.x, t.scaleX, t.scale, t.originX),
    Bd(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function fg(e, t) {
  return ug(vw(e.getBoundingClientRect(), t));
}
function ww(e, t, n) {
  const r = fg(e, n),
    { scroll: i } = t;
  return (i && (Un(r.x, i.offset.x), Un(r.y, i.offset.y)), r);
}
const hg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Sw = new WeakMap();
class kw {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = J()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ki(d).point));
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          h &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = mx(h)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          be((T) => {
            let m = this.getAxisMotionValue(T).get() || 0;
            if (ct.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[T];
                g && (m = Ie(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[T] = m;
          }),
          v && z.postRender(() => v(d, f)),
          Ja(this.visualElement, "transform"));
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: T } = f;
        if (y && this.currentDirection === null) {
          ((this.currentDirection = Tw(T)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, T),
          this.updateAxis("y", f.point, T),
          this.visualElement.render(),
          x && x(d, f));
      },
      a = (d, f) => this.stop(d, f),
      l = () =>
        be((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new sg(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: hg(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && z.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ki(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = dw(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints;
    (n && Fn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = fw(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = gw(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        be((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = mw(i.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Fn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = ww(r, i.root, this.visualElement.getTransformPagePoint());
    let o = hw(i.layout.layoutBox, s);
    if (n) {
      const a = n(yw(o));
      ((this.hasMutatedConstraints = !!a), a && (o = ug(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = be((d) => {
        if (!Ki(d, n, this.currentDirection)) return;
        let f = (l && l[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(d, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Ja(this.visualElement, t),
      r.start(Fu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    be((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    be((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    be((n) => {
      const { drag: r } = this.getProps();
      if (!Ki(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - G(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Fn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    be((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = pw({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      be((o) => {
        if (!Ki(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(G(l, u, i[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Sw.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Br(t, "pointerdown", (l) => {
        const { drag: u, dragListener: d = !0 } = this.getProps();
        u && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Fn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      z.read(r));
    const o = ci(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (be((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += l[d].translate),
                f.set(f.get() + l[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), s(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = al,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Ki(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Tw(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class jw extends Xt {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = ke),
      (this.removeListeners = ke),
      (this.controls = new kw(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ke));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const bd = (e) => (t, n) => {
  e && z.postRender(() => e(t, n));
};
class Pw extends Xt {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ke));
  }
  onPointerDown(t) {
    this.session = new sg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: hg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: bd(t),
      onStart: bd(n),
      onMove: r,
      onEnd: (s, o) => {
        (delete this.session, i && z.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Br(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const as = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ud(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const xr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (A.test(e)) e = parseFloat(e);
        else return e;
      const n = Ud(e, t.target.x),
        r = Ud(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Cw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Kt.parse(e);
      if (i.length > 5) return r;
      const s = Kt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + o] /= a), (i[1 + o] /= l));
      const u = G(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class Ew extends k.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (Xv(Nw),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (as.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              z.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      hu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function pg(e) {
  const [t, n] = Qp(),
    r = k.useContext(au);
  return c.jsx(Ew, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(nm),
    isPresent: t,
    safeToRemove: n,
  });
}
const Nw = {
  borderRadius: {
    ...xr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: xr,
  borderTopRightRadius: xr,
  borderBottomLeftRadius: xr,
  borderBottomRightRadius: xr,
  boxShadow: Cw,
};
function Mw(e, t, n) {
  const r = ne(e) ? e : at(e);
  return (r.start(Fu("", r, t, n)), r.animation);
}
function Aw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Dw = (e, t) => e.depth - t.depth;
class Rw {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Eu(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Nu(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Dw),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function Lw(e, t) {
  const n = dt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (rt(r), e(s - t));
    };
  return (z.read(r, !0), () => rt(r));
}
const mg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Vw = mg.length,
  $d = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Wd = (e) => typeof e == "number" || A.test(e);
function _w(e, t, n, r, i, s) {
  i
    ? ((e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, Iw(r))),
      (e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, Ow(r))))
    : s &&
      (e.opacity = G(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < Vw; o++) {
    const a = `border${mg[o]}Radius`;
    let l = Hd(t, a),
      u = Hd(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Wd(l) === Wd(u)
        ? ((e[a] = Math.max(G($d(l), $d(u), r), 0)),
          (ct.test(u) || ct.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function Hd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Iw = gg(0, 0.5, Lm),
  Ow = gg(0.5, 0.95, ke);
function gg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(wn(e, t, r)));
}
function Kd(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Be(e, t) {
  (Kd(e.x, t.x), Kd(e.y, t.y));
}
function Gd(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Qd(e, t, n, r, i) {
  return (
    (e -= t),
    (e = bs(e, 1 / n, r)),
    i !== void 0 && (e = bs(e, 1 / i, r)),
    e
  );
}
function zw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (ct.test(t) &&
      ((t = parseFloat(t)), (t = G(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = G(s.min, s.max, r);
  (e === s && (a -= t),
    (e.min = Qd(e.min, t, n, a, i)),
    (e.max = Qd(e.max, t, n, a, i)));
}
function Yd(e, t, [n, r, i], s, o) {
  zw(e, t[n], t[r], t[i], t.scale, s, o);
}
const Fw = ["x", "scaleX", "originX"],
  Bw = ["y", "scaleY", "originY"];
function Xd(e, t, n, r) {
  (Yd(e.x, t, Fw, n ? n.x : void 0, r ? r.x : void 0),
    Yd(e.y, t, Bw, n ? n.y : void 0, r ? r.y : void 0));
}
function Zd(e) {
  return e.translate === 0 && e.scale === 1;
}
function yg(e) {
  return Zd(e.x) && Zd(e.y);
}
function qd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function bw(e, t) {
  return qd(e.x, t.x) && qd(e.y, t.y);
}
function Jd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function vg(e, t) {
  return Jd(e.x, t.x) && Jd(e.y, t.y);
}
function ef(e) {
  return Ie(e.x) / Ie(e.y);
}
function tf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Uw {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Eu(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Nu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function $w(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: y,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const sn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Nr = typeof window < "u" && window.MotionDebug !== void 0,
  Xo = ["", "X", "Y", "Z"],
  Ww = { visibility: "hidden" },
  nf = 1e3;
let Hw = 0;
function Zo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function xg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Cm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", z, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && xg(r);
}
function wg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = Hw++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Nr &&
              (sn.totalNodes =
                sn.resolvedTargetDeltas =
                sn.recalculatedProjection =
                  0),
            this.nodes.forEach(Qw),
            this.nodes.forEach(Jw),
            this.nodes.forEach(eS),
            this.nodes.forEach(Yw),
            Nr && window.MotionDebug.record(sn));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Rw());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Mu()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = Aw(o)), (this.instance = o));
      const { layoutId: l, layout: u, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Lw(h, 250)),
            as.hasAnimatedSinceResize &&
              ((as.hasAnimatedSinceResize = !1), this.nodes.forEach(sf)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          d &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const x =
                  this.options.transition || d.getDefaultTransition() || sS,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: m } =
                  d.getProps(),
                p = !this.targetLayout || !vg(this.targetLayout, v) || y,
                g = !h && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (p || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g));
                const S = { ...Tu(x, "layout"), onPlay: T, onComplete: m };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S));
              } else
                (h || sf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = v;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        rt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(tS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          xg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(rf));
        return;
      }
      (this.isUpdating || this.nodes.forEach(Zw),
        (this.isUpdating = !1),
        this.nodes.forEach(qw),
        this.nodes.forEach(Kw),
        this.nodes.forEach(Gw),
        this.clearAllSnapshots());
      const a = dt.now();
      ((ie.delta = ft(0, 1e3 / 60, a - ie.timestamp)),
        (ie.timestamp = a),
        (ie.isProcessing = !0),
        bo.update.process(ie),
        bo.preRender.process(ie),
        bo.render.process(ie),
        (ie.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), hu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Xw), this.sharedNodes.forEach(nS));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = J()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !yg(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        d = u !== this.prevTransformTemplateValue;
      o &&
        (a || rn(this.latestValues) || d) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        oS(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return J();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(aS)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Un(l.x, d.offset.x), Un(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = J();
      if (
        (Be(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && Be(l, o), Un(l.x, f.offset.x), Un(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = J();
      Be(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (!a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          $n(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          rn(d.latestValues) && $n(l, d.latestValues));
      }
      return (rn(this.latestValues) && $n(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = J();
      Be(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !rn(u.latestValues)) continue;
        ll(u.latestValues) && u.updateSnapshot();
        const d = J(),
          f = u.measurePageBox();
        (Be(d, f),
          Xd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d));
      }
      return (rn(this.latestValues) && Xd(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ie.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = ie.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = J()),
              (this.relativeTargetOrigin = J()),
              Ur(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox,
              ),
              Be(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = J()), (this.targetWithTransforms = J())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                cw(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Be(this.target, this.layout.layoutBox),
                  dg(this.target, this.targetDelta))
                : Be(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = J()),
                (this.relativeTargetOrigin = J()),
                Ur(this.relativeTargetOrigin, this.target, y.target),
                Be(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Nr && sn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ll(this.parent.latestValues) ||
          cg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ie.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      Be(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        y = this.treeScale.y;
      (xw(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = J())));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Gd(this.prevProjectionDelta.x, this.projectionDelta.x),
          Gd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        br(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== y ||
          !tf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !tf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Nr && sn.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = bn()),
        (this.projectionDelta = bn()),
        (this.projectionDeltaWithTransform = bn()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        d = { ...this.latestValues },
        f = bn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const h = J(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        T = this.getStack(),
        m = !T || T.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(iS));
      this.animationProgress = 0;
      let g;
      ((this.mixTargetDelta = (S) => {
        const w = S / 1e3;
        (of(f.x, o.x, w),
          of(f.y, o.y, w),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ur(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            rS(this.relativeTarget, this.relativeTargetOrigin, h, w),
            g && bw(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = J()),
            Be(g, this.relativeTarget)),
          x &&
            ((this.animationValues = d), _w(d, u, this.latestValues, w, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (rt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = z.update(() => {
          ((as.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Mw(0, nf, {
              ...o,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(nf),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: d,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Sg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || J();
          const f = Ie(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const h = Ie(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + h));
        }
        (Be(a, l),
          $n(a, d),
          br(this.projectionDeltaWithTransform, this.layoutCorrected, a, d));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new Uw()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Zo("z", o, u, this.animationValues);
      for (let d = 0; d < Xo.length; d++)
        (Zo(`rotate${Xo[d]}`, o, u, this.animationValues),
          Zo(`skew${Xo[d]}`, o, u, this.animationValues));
      o.render();
      for (const d in u)
        (o.setStaticValue(d, u[d]),
          this.animationValues && (this.animationValues[d] = u[d]));
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Ww;
      const u = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = ss(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = d ? d(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = ss(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !rn(this.latestValues) &&
            ((x.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const h = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = $w(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h,
        )),
        d && (u.transform = d(h, u.transform)));
      const { x: y, y: v } = this.projectionDelta;
      ((u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
          : (u.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                  ? h.opacityExit
                  : 0));
      for (const x in Is) {
        if (h[x] === void 0) continue;
        const { correct: T, applyTo: m } = Is[x],
          p = u.transform === "none" ? h[x] : T(h[x], f);
        if (m) {
          const g = m.length;
          for (let S = 0; S < g; S++) u[m[S]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? ss(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(rf),
        this.root.sharedNodes.clear());
    }
  };
}
function Kw(e) {
  e.updateLayout();
}
function Gw(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? be((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            y = Ie(h);
          ((h.min = r[f].min), (h.max = h.min + y));
        })
      : Sg(s, n.layoutBox, r) &&
        be((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            y = Ie(r[f]);
          ((h.max = h.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y)));
        });
    const a = bn();
    br(a, r, n.layoutBox);
    const l = bn();
    o ? br(l, e.applyTransform(i, !0), n.measuredBox) : br(l, r, n.layoutBox);
    const u = !yg(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: y } = f;
        if (h && y) {
          const v = J();
          Ur(v, n.layoutBox, h.layoutBox);
          const x = J();
          (Ur(x, r, y.layoutBox),
            vg(v, x) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Qw(e) {
  (Nr && sn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function Yw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Xw(e) {
  e.clearSnapshot();
}
function rf(e) {
  e.clearMeasurements();
}
function Zw(e) {
  e.isLayoutDirty = !1;
}
function qw(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function sf(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Jw(e) {
  e.resolveTargetDelta();
}
function eS(e) {
  e.calcProjection();
}
function tS(e) {
  e.resetSkewAndRotation();
}
function nS(e) {
  e.removeLeadSnapshot();
}
function of(e, t, n) {
  ((e.translate = G(t.translate, 0, n)),
    (e.scale = G(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function af(e, t, n, r) {
  ((e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r)));
}
function rS(e, t, n, r) {
  (af(e.x, t.x, n.x, r), af(e.y, t.y, n.y, r));
}
function iS(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const sS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  lf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  uf = lf("applewebkit/") && !lf("chrome/") ? Math.round : ke;
function cf(e) {
  ((e.min = uf(e.min)), (e.max = uf(e.max)));
}
function oS(e) {
  (cf(e.x), cf(e.y));
}
function Sg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !uw(ef(t), ef(n), 0.2))
  );
}
function aS(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const lS = wg({
    attachResizeListener: (e, t) => ci(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  qo = { current: void 0 },
  kg = wg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!qo.current) {
        const e = new lS({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (qo.current = e));
      }
      return qo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  uS = {
    pan: { Feature: Pw },
    drag: { Feature: jw, ProjectionNode: kg, MeasureLayout: pg },
  };
function df(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && z.postRender(() => s(t, ki(t)));
}
class cS extends Xt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = cx(
        t,
        (n) => (df(this.node, n, "Start"), (r) => df(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class dS extends Xt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Si(
      ci(this.node.current, "focus", () => this.onFocus()),
      ci(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function ff(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && z.postRender(() => s(t, ki(t)));
}
class fS extends Xt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = px(
        t,
        (n) => (
          ff(this.node, n, "Start"),
          (r, { success: i }) => ff(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const cl = new WeakMap(),
  Jo = new WeakMap(),
  hS = (e) => {
    const t = cl.get(e.target);
    t && t(e);
  },
  pS = (e) => {
    e.forEach(hS);
  };
function mS({ root: e, ...t }) {
  const n = e || document;
  Jo.has(n) || Jo.set(n, {});
  const r = Jo.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(pS, { root: e, ...t })),
    r[i]
  );
}
function gS(e, t, n) {
  const r = mS(t);
  return (
    cl.set(e, n),
    r.observe(e),
    () => {
      (cl.delete(e), r.unobserve(e));
    }
  );
}
const yS = { some: 0, all: 1 };
class vS extends Xt {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : yS[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = u ? d : f;
        h && h(l);
      };
    return gS(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(xS(t, n)) && this.startObserver();
  }
  unmount() {}
}
function xS({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const wS = {
    inView: { Feature: vS },
    tap: { Feature: fS },
    focus: { Feature: dS },
    hover: { Feature: cS },
  },
  SS = { layout: { ProjectionNode: kg, MeasureLayout: pg } },
  Us = { current: null },
  Bu = { current: !1 };
function Tg() {
  if (((Bu.current = !0), !!lu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Us.current = e.matches);
      (e.addListener(t), t());
    } else Us.current = !1;
}
const kS = [...Gm, ye, Kt],
  TS = (e) => kS.find(Km(e)),
  hf = new WeakMap();
function jS(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ne(i)) e.addValue(r, i);
    else if (ne(s)) e.addValue(r, at(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, at(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const pf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class PS {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Iu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = dt.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), z.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u, onUpdate: d } = o;
    ((this.onUpdate = d),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = uo(n)),
      (this.isVariantNode = em(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const y in h) {
      const v = h[y];
      l[y] !== void 0 && ne(v) && v.set(l[y], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      hf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Bu.current || Tg(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Us.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (hf.delete(this.current),
      this.projection && this.projection.unmount(),
      rt(this.notifyUpdate),
      rt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = jn.has(t),
      i = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && z.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    (window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in rr) {
      const n = rr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : J();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < pf.length; r++) {
      const i = pf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = jS(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = at(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Wm(i) || _m(i))
          ? (i = parseFloat(i))
          : !TS(i) && Kt.test(n) && (i = bm(t, n)),
        this.setBaseTarget(t, ne(i) ? i.get() : i)),
      ne(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = mu(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ne(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Mu()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class jg extends PS {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Qm));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ne(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function CS(e) {
  return window.getComputedStyle(e);
}
class ES extends jg {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = um));
  }
  readValueFromInstance(t, n) {
    if (jn.has(n)) {
      const r = _u(n);
      return (r && r.default) || 0;
    } else {
      const r = CS(t),
        i = (om(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return fg(t, n);
  }
  build(t, n, r) {
    vu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ku(t, n, r);
  }
}
class NS extends jg {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = J));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (jn.has(n)) {
      const r = _u(n);
      return (r && r.default) || 0;
    }
    return ((n = cm.has(n) ? n : fu(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return hm(t, n, r);
  }
  build(t, n, r) {
    xu(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    dm(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Su(t.tagName)), super.mount(t));
  }
}
const MS = (e, t) =>
    pu(e) ? new NS(t) : new ES(t, { allowProjection: e !== k.Fragment }),
  AS = sx({ ...ew, ...wS, ...uS, ...SS }, MS),
  L = wv(AS);
function Pg(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100;
    (n !== o && e(o), (n = o));
  };
  return (z.update(r, !0), () => rt(r));
}
const ls = new WeakMap();
let Mt;
function DS(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function RS({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = ls.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return DS(e, n);
        },
      });
    });
}
function LS(e) {
  e.forEach(RS);
}
function VS() {
  typeof ResizeObserver > "u" || (Mt = new ResizeObserver(LS));
}
function _S(e, t) {
  Mt || VS();
  const n = km(e);
  return (
    n.forEach((r) => {
      let i = ls.get(r);
      (i || ((i = new Set()), ls.set(r, i)),
        i.add(t),
        Mt == null || Mt.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const i = ls.get(r);
        (i == null || i.delete(t),
          (i != null && i.size) || Mt == null || Mt.unobserve(r));
      });
    }
  );
}
const us = new Set();
let $r;
function IS() {
  (($r = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    us.forEach((n) => n(t));
  }),
    window.addEventListener("resize", $r));
}
function OS(e) {
  return (
    us.add(e),
    $r || IS(),
    () => {
      (us.delete(e), !us.size && $r && ($r = void 0));
    }
  );
}
function zS(e, t) {
  return typeof e == "function" ? OS(e) : _S(e, t);
}
const FS = 50,
  mf = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  BS = () => ({ time: 0, x: mf(), y: mf() }),
  bS = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function gf(e, t, n, r) {
  const i = n[t],
    { length: s, position: o } = bS[t],
    a = i.current,
    l = n.time;
  ((i.current = e[`scroll${o}`]),
    (i.scrollLength = e[`scroll${s}`] - e[`client${s}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = wn(0, i.scrollLength, i.current)));
  const u = r - l;
  i.velocity = u > FS ? 0 : Au(i.current - a, u);
}
function US(e, t, n) {
  (gf(e, "x", t, n), gf(e, "y", t, n), (t.time = n));
}
function $S(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const s = r.getBoundingClientRect();
      ((n.x += i.left - s.left), (n.y += i.top - s.top));
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: s } = r.getBBox();
      ((n.x += i), (n.y += s));
      let o = null,
        a = r.parentNode;
      for (; !o; ) (a.tagName === "svg" && (o = a), (a = r.parentNode));
      r = o;
    } else break;
  return n;
}
const dl = { start: 0, center: 0.5, end: 1 };
function yf(e, t, n = 0) {
  let r = 0;
  if ((e in dl && (e = dl[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
        ? (e = i / 100)
        : e.endsWith("vw")
          ? (r = (i / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (r = (i / 100) * document.documentElement.clientHeight)
            : (e = i);
  }
  return (typeof e == "number" && (r = t * e), n + r);
}
const WS = [0, 0];
function HS(e, t, n, r) {
  let i = Array.isArray(e) ? e : WS,
    s = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, dl[e] ? e : "0"])),
    (s = yf(i[0], n, r)),
    (o = yf(i[1], t)),
    s - o
  );
}
const KS = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  GS = { x: 0, y: 0 };
function QS(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function YS(e, t, n) {
  const { offset: r = KS.All } = n,
    { target: i = e, axis: s = "y" } = n,
    o = s === "y" ? "height" : "width",
    a = i !== e ? $S(i, e) : GS,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : QS(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let d = !t[s].interpolate;
  const f = r.length;
  for (let h = 0; h < f; h++) {
    const y = HS(r[h], u[o], l[o], a[s]);
    (!d && y !== t[s].interpolatorOffsets[h] && (d = !0), (t[s].offset[h] = y));
  }
  (d &&
    ((t[s].interpolate = zu(t[s].offset, tg(r), { clamp: !1 })),
    (t[s].interpolatorOffsets = [...t[s].offset])),
    (t[s].progress = ft(0, 1, t[s].interpolate(t[s].current))));
}
function XS(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      ((n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function ZS(e, t, n, r = {}) {
  return {
    measure: () => XS(e, r.target, n),
    update: (i) => {
      (US(e, n, i), (r.offset || r.target) && YS(e, n, r));
    },
    notify: () => t(n),
  };
}
const wr = new WeakMap(),
  vf = new WeakMap(),
  ea = new WeakMap(),
  xf = (e) => (e === document.documentElement ? window : e);
function bu(e, { container: t = document.documentElement, ...n } = {}) {
  let r = ea.get(t);
  r || ((r = new Set()), ea.set(t, r));
  const i = BS(),
    s = ZS(t, e, i, n);
  if ((r.add(s), !wr.has(t))) {
    const a = () => {
        for (const h of r) h.measure();
      },
      l = () => {
        for (const h of r) h.update(ie.timestamp);
      },
      u = () => {
        for (const h of r) h.notify();
      },
      d = () => {
        (z.read(a, !1, !0), z.read(l, !1, !0), z.update(u, !1, !0));
      };
    wr.set(t, d);
    const f = xf(t);
    (window.addEventListener("resize", d, { passive: !0 }),
      t !== document.documentElement && vf.set(t, zS(t, d)),
      f.addEventListener("scroll", d, { passive: !0 }));
  }
  const o = wr.get(t);
  return (
    z.read(o, !1, !0),
    () => {
      var a;
      rt(o);
      const l = ea.get(t);
      if (!l || (l.delete(s), l.size)) return;
      const u = wr.get(t);
      (wr.delete(t),
        u &&
          (xf(t).removeEventListener("scroll", u),
          (a = vf.get(t)) === null || a === void 0 || a(),
          window.removeEventListener("resize", u)));
    }
  );
}
function qS({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  const r = { value: 0 },
    i = bu(
      (s) => {
        r.value = s[n].progress * 100;
      },
      { container: t, axis: n },
    );
  return { currentTime: r, cancel: i };
}
const ta = new Map();
function Cg({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  (e && (t = e), ta.has(t) || ta.set(t, {}));
  const r = ta.get(t);
  return (
    r[n] ||
      (r[n] = gm()
        ? new ScrollTimeline({ source: t, axis: n })
        : qS({ source: t, axis: n })),
    r[n]
  );
}
function JS(e) {
  return e.length === 2;
}
function Eg(e) {
  return e && (e.target || e.offset);
}
function ek(e, t) {
  return JS(e) || Eg(t)
    ? bu((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : Pg(e, Cg(t));
}
function tk(e, t) {
  if ((e.flatten(), Eg(t)))
    return (
      e.pause(),
      bu((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    const n = Cg(t);
    return e.attachTimeline
      ? e.attachTimeline(
          n,
          (r) => (
            r.pause(),
            Pg((i) => {
              r.time = r.duration * i;
            }, n)
          ),
        )
      : ke;
  }
}
function nk(e, { axis: t = "y", ...n } = {}) {
  const r = { axis: t, ...n };
  return typeof e == "function" ? ek(e, r) : tk(e, r);
}
function wf(e, t) {
  fv(!!(!t || t.current));
}
const rk = () => ({
  scrollX: at(0),
  scrollY: at(0),
  scrollXProgress: at(0),
  scrollYProgress: at(0),
});
function Ng({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = Tn(rk);
  return (
    (n ? vi : k.useEffect)(
      () => (
        wf("target", t),
        wf("container", e),
        nk(
          (o, { x: a, y: l }) => {
            (i.scrollX.set(a.current),
              i.scrollXProgress.set(a.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress));
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          },
        )
      ),
      [e, t, JSON.stringify(r.offset)],
    ),
    i
  );
}
function $s(e) {
  const t = Tn(() => at(e)),
    { isStatic: n } = k.useContext(xn);
  if (n) {
    const [, r] = k.useState(e);
    k.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function Uu(e, t) {
  const n = $s(t()),
    r = () => n.set(t());
  return (
    r(),
    vi(() => {
      const i = () => z.preRender(r, !1, !0),
        s = e.map((o) => o.on("change", i));
      return () => {
        (s.forEach((o) => o()), rt(r));
      };
    }),
    n
  );
}
function ik(e, ...t) {
  const n = e.length;
  function r() {
    let i = "";
    for (let s = 0; s < n; s++) {
      i += e[s];
      const o = t[s];
      o && (i += ne(o) ? o.get() : o);
    }
    return i;
  }
  return Uu(t.filter(ne), r);
}
function Sf(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function fl(e, t = {}) {
  const { isStatic: n } = k.useContext(xn),
    r = k.useRef(null),
    i = $s(ne(e) ? Sf(e.get()) : e),
    s = k.useRef(i.get()),
    o = k.useRef(() => {}),
    a = () => {
      const u = r.current;
      (u && u.time === 0 && u.sample(ie.delta),
        l(),
        (r.current = E1({
          keyframes: [i.get(), s.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: o.current,
        })));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    k.useInsertionEffect(
      () =>
        i.attach(
          (u, d) =>
            n ? d(u) : ((s.current = u), (o.current = d), z.update(a), i.get()),
          l,
        ),
      [JSON.stringify(t)],
    ),
    vi(() => {
      if (ne(e)) return e.on("change", (u) => i.set(Sf(u)));
    }, [i]),
    i
  );
}
const sk = (e) => e && typeof e == "object" && e.mix,
  ok = (e) => (sk(e) ? e.mix : void 0);
function ak(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    s = e[2 + n],
    o = e[3 + n],
    a = zu(i, s, { mixer: ok(s[0]), ...o });
  return t ? a(r) : a;
}
function lk(e) {
  ((zr.current = []), e());
  const t = Uu(zr.current, e);
  return ((zr.current = void 0), t);
}
function hn(e, t, n, r) {
  if (typeof e == "function") return lk(e);
  const i = typeof t == "function" ? t : ak(t, n, r);
  return Array.isArray(e) ? kf(e, i) : kf([e], ([s]) => i(s));
}
function kf(e, t) {
  const n = Tn(() => []);
  return Uu(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function Ce() {
  !Bu.current && Tg();
  const [e] = k.useState(Us.current);
  return e;
}
function uk({ onDone: e }) {
  const [t, n] = k.useState(0);
  return (
    k.useEffect(() => {
      const r = performance.now(),
        i = 1700;
      let s;
      const o = (a) => {
        const l = Math.min(100, Math.round(((a - r) / i) * 100));
        (n(l), l < 100 && (s = requestAnimationFrame(o)));
      };
      return ((s = requestAnimationFrame(o)), () => cancelAnimationFrame(s));
    }, []),
    k.useEffect(() => {
      if (t >= 100) {
        const r = setTimeout(e, 650);
        return () => clearTimeout(r);
      }
    }, [t, e]),
    c.jsxs(L.div, {
      className:
        "fixed inset-0 z-[100] flex flex-col items-center justify-center",
      style: { background: "var(--color-ivory)" },
      initial: { opacity: 1 },
      exit: { y: "-100%" },
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      children: [
        c.jsxs("svg", {
          width: "140",
          height: "140",
          viewBox: "0 0 140 140",
          fill: "none",
          children: [
            c.jsx(L.circle, {
              cx: "70",
              cy: "70",
              r: "58",
              stroke: "var(--color-gold)",
              strokeWidth: "1",
              initial: { pathLength: 0, opacity: 0.4 },
              animate: { pathLength: 1, opacity: 0.8 },
              transition: { duration: 1.6, ease: "easeInOut" },
            }),
            c.jsx(L.text, {
              x: "70",
              y: "86",
              textAnchor: "middle",
              style: {
                fontFamily: "var(--font-display)",
                fontSize: 44,
                fill: "var(--color-gold-deep)",
              },
              initial: { opacity: 0, scale: 0.85 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.45, duration: 0.9 },
              children: "N&I",
            }),
          ],
        }),
        c.jsx("p", { className: "eyebrow mt-6", children: "The Wedding Of" }),
        c.jsx("p", {
          className: "title-script mt-1 text-3xl text-rosedeep",
          children: "Nida & Ismaiel",
        }),
        c.jsx("div", {
          className:
            "mt-8 h-[2px] w-44 overflow-hidden rounded-full bg-rose/30",
          children: c.jsx(L.div, {
            className: "h-full",
            style: {
              background:
                "linear-gradient(90deg, var(--color-gold), var(--color-gold-light))",
            },
            animate: { width: `${t}%` },
            transition: { ease: "linear", duration: 0.1 },
          }),
        }),
        c.jsxs("p", {
          className:
            "mt-3 font-body text-[11px] tracking-widest text-ink-soft tabular-nums",
          children: [t, "%"],
        }),
      ],
    })
  );
}
function Tf(e, t) {
  return `M0 0 C ${-e} ${-t * 0.38} ${-e} ${-t * 0.82} 0 ${-t} C ${e} ${-t * 0.82} ${e} ${-t * 0.38} 0 0 Z`;
}
const ck = [
  [6, -12],
  [-8, -7],
  [10, -5],
  [-4, -17],
  [2, -22],
  [-11, -13],
];
function Te({
  size: e = 24,
  color: t = "#e8a6bd",
  core: n = "#f6e7b0",
  style: r,
}) {
  const i = k.useId().replace(/[:]/g, ""),
    s = `pg-${i}`,
    o = `sf-${i}`,
    a = `ws-${i}`;
  return c.jsxs("svg", {
    width: e,
    height: e,
    viewBox: "0 0 64 64",
    fill: "none",
    style: { overflow: "visible", ...r },
    children: [
      c.jsxs("defs", {
        children: [
          c.jsxs("radialGradient", {
            id: s,
            cx: "50%",
            cy: "36%",
            r: "66%",
            children: [
              c.jsx("stop", {
                offset: "0%",
                stopColor: "#ffffff",
                stopOpacity: "0.95",
              }),
              c.jsx("stop", {
                offset: "48%",
                stopColor: t,
                stopOpacity: "0.9",
              }),
              c.jsx("stop", { offset: "100%", stopColor: t }),
            ],
          }),
          c.jsx("filter", {
            id: o,
            x: "-25%",
            y: "-25%",
            width: "150%",
            height: "150%",
            children: c.jsx("feGaussianBlur", { stdDeviation: "0.5" }),
          }),
          c.jsx("filter", {
            id: a,
            x: "-60%",
            y: "-60%",
            width: "220%",
            height: "220%",
            children: c.jsx("feGaussianBlur", { stdDeviation: "2.6" }),
          }),
        ],
      }),
      c.jsxs("g", {
        transform: "translate(32 33)",
        children: [
          c.jsx("circle", {
            r: "23",
            fill: t,
            opacity: "0.16",
            filter: `url(#${a})`,
          }),
          [0, 60, 120, 180, 240, 300].map((l) =>
            c.jsx(
              "path",
              {
                d: Tf(11, 30),
                transform: `rotate(${l})`,
                fill: `url(#${s})`,
                stroke: t,
                strokeOpacity: "0.3",
                strokeWidth: "0.5",
                filter: `url(#${o})`,
              },
              "o" + l,
            ),
          ),
          [30, 102, 174, 246, 318].map((l) =>
            c.jsx(
              "path",
              {
                d: Tf(7.5, 18),
                transform: `rotate(${l})`,
                fill: `url(#${s})`,
                stroke: t,
                strokeOpacity: "0.28",
                strokeWidth: "0.4",
                filter: `url(#${o})`,
              },
              "i" + l,
            ),
          ),
          c.jsx("circle", { r: "4.6", fill: n }),
          [0, 72, 144, 216, 288].map((l) =>
            c.jsx(
              "circle",
              {
                cx: "0",
                cy: "-5.4",
                r: "0.9",
                fill: "#d8b25a",
                transform: `rotate(${l})`,
              },
              "st" + l,
            ),
          ),
          ck.map(([l, u], d) =>
            c.jsx(
              "circle",
              { cx: l, cy: u, r: "0.6", fill: t, opacity: "0.3" },
              "sp" + d,
            ),
          ),
        ],
      }),
    ],
  });
}
function Mg({ size: e = 22, color: t = "#f7c9d8", style: n }) {
  const r = k.useId().replace(/[:]/g, ""),
    i = `sg-${r}`,
    s = `ss-${r}`;
  return c.jsxs("svg", {
    width: e,
    height: e,
    viewBox: "0 0 64 64",
    fill: "none",
    style: { overflow: "visible", ...n },
    children: [
      c.jsxs("defs", {
        children: [
          c.jsxs("radialGradient", {
            id: i,
            cx: "50%",
            cy: "42%",
            r: "62%",
            children: [
              c.jsx("stop", {
                offset: "0%",
                stopColor: "#ffffff",
                stopOpacity: "0.92",
              }),
              c.jsx("stop", { offset: "60%", stopColor: t }),
              c.jsx("stop", { offset: "100%", stopColor: t }),
            ],
          }),
          c.jsx("filter", {
            id: s,
            x: "-25%",
            y: "-25%",
            width: "150%",
            height: "150%",
            children: c.jsx("feGaussianBlur", { stdDeviation: "0.5" }),
          }),
        ],
      }),
      c.jsxs("g", {
        transform: "translate(32 32)",
        children: [
          [0, 72, 144, 216, 288].map((o) =>
            c.jsx(
              "path",
              {
                d: "M0 -5 C -8 -11 -9 -23 -3 -31 C -1 -28 1 -28 3 -31 C 9 -23 8 -11 0 -5 Z",
                transform: `rotate(${o})`,
                fill: `url(#${i})`,
                stroke: t,
                strokeOpacity: "0.4",
                strokeWidth: "0.5",
                filter: `url(#${s})`,
              },
              o,
            ),
          ),
          c.jsx("circle", { r: "3.1", fill: "#f4a7c0" }),
          [0, 72, 144, 216, 288].map((o) =>
            c.jsx(
              "circle",
              {
                cx: "0",
                cy: "-4",
                r: "0.7",
                fill: "#e58aa6",
                transform: `rotate(${o})`,
              },
              "d" + o,
            ),
          ),
        ],
      }),
    ],
  });
}
function di({ size: e = 20, color: t = "#c6d6bf", style: n }) {
  const r = k.useId().replace(/[:]/g, ""),
    i = `lg-${r}`,
    s = `lw-${r}`;
  return c.jsxs("svg", {
    width: e,
    height: e,
    viewBox: "0 0 64 64",
    fill: "none",
    style: { overflow: "visible", ...n },
    children: [
      c.jsxs("defs", {
        children: [
          c.jsxs("linearGradient", {
            id: i,
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "1",
            children: [
              c.jsx("stop", { offset: "0%", stopColor: "#dce8d6" }),
              c.jsx("stop", { offset: "100%", stopColor: t }),
            ],
          }),
          c.jsx("filter", {
            id: s,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%",
            children: c.jsx("feGaussianBlur", { stdDeviation: "1.6" }),
          }),
        ],
      }),
      c.jsx("path", {
        d: "M52 12 C28 14 14 30 12 52 C34 50 50 36 52 12 Z",
        fill: t,
        opacity: "0.18",
        filter: `url(#${s})`,
      }),
      c.jsx("path", {
        d: "M52 12 C28 14 14 30 12 52 C34 50 50 36 52 12 Z",
        fill: `url(#${i})`,
      }),
      c.jsx("path", {
        d: "M47 17 C34 25 24 35 17 47",
        stroke: "#9bb293",
        strokeWidth: "1.4",
        fill: "none",
      }),
    ],
  });
}
function He({ className: e = "", flip: t = !1, color: n = "#e8a6bd" }) {
  return c.jsx("div", {
    className: e,
    style: { transform: t ? "scaleX(-1)" : "none", lineHeight: 0 },
    children: c.jsxs("div", {
      style: { position: "relative", width: 146, height: 146 },
      children: [
        c.jsxs("svg", {
          width: "146",
          height: "146",
          viewBox: "0 0 146 146",
          fill: "none",
          style: { position: "absolute", inset: 0 },
          children: [
            c.jsx("path", {
              d: "M7 10 C49 22 80 56 102 110",
              stroke: "#a9c0a0",
              strokeWidth: "1.7",
              fill: "none",
              opacity: "0.75",
            }),
            c.jsx("path", {
              d: "M32 12 C53 32 63 51 63 73",
              stroke: "#a9c0a0",
              strokeWidth: "1.4",
              fill: "none",
              opacity: "0.65",
            }),
          ],
        }),
        c.jsx("span", {
          style: { position: "absolute", left: -6, top: -6 },
          children: c.jsx(Te, { size: 52, color: n }),
        }),
        c.jsx("span", {
          style: { position: "absolute", left: 66, top: 54 },
          children: c.jsx(Te, { size: 38, color: "#a9c6e0" }),
        }),
        c.jsx("span", {
          style: { position: "absolute", left: 34, top: 73 },
          children: c.jsx(di, { size: 28 }),
        }),
        c.jsx("span", {
          style: { position: "absolute", left: 92, top: 102 },
          children: c.jsx(Te, { size: 28, color: n }),
        }),
        c.jsx("span", {
          style: { position: "absolute", left: 7, top: 51 },
          children: c.jsx(di, {
            size: 23,
            style: { transform: "rotate(40deg)" },
          }),
        }),
      ],
    }),
  });
}
const jf = ["#f7c9d8", "#e6a4bc", "#d2e4f0", "#bcd6ef", "#f3d9e4", "#dCeAd6"];
function mt(e) {
  return ((e * 9301 + 49297) % 233280) / 233280;
}
function Pf(e, t, n, r, i, s) {
  return Array.from({ length: e }).map((o, a) => {
    const l = a + t,
      u = mt(l),
      d = mt(l + 100),
      f = mt(l + 200),
      h = mt(l + 300);
    return {
      id: l,
      left: `${(u * 100).toFixed(2)}%`,
      size: n + Math.floor(d * 14),
      duration: s + f * 8,
      delay: -u * 16,
      sway: 22 + d * 46,
      rotate: 160 + f * 340,
      color: jf[Math.floor(u * jf.length)],
      kind: Math.floor(h * 3),
      opacity: i + d * 0.25,
      blur: r,
    };
  });
}
function Cf({ petals: e }) {
  return c.jsx(c.Fragment, {
    children: e.map((t) =>
      c.jsxs(
        L.div,
        {
          initial: { y: "-14vh", x: 0, rotate: 0, opacity: 0 },
          animate: {
            y: "116vh",
            x: [0, t.sway, -t.sway * 0.6, 0],
            rotate: t.rotate,
            opacity: [0, t.opacity, t.opacity, 0],
          },
          transition: {
            duration: t.duration,
            delay: t.delay,
            repeat: 1 / 0,
            ease: "linear",
            x: { duration: t.duration, repeat: 1 / 0, ease: "easeInOut" },
          },
          style: {
            position: "absolute",
            top: 0,
            left: t.left,
            filter: t.blur ? `blur(${t.blur}px)` : "none",
            willChange: "transform",
          },
          children: [
            t.kind === 0 && c.jsx(Mg, { size: t.size, color: t.color }),
            t.kind === 1 && c.jsx(Te, { size: t.size, color: t.color }),
            t.kind === 2 && c.jsx(di, { size: t.size, color: "#c2d2bb" }),
          ],
        },
        t.id,
      ),
    ),
  });
}
function dk({ count: e = 10 }) {
  const t = k.useMemo(
    () =>
      Array.from({ length: e }).map((n, r) => ({
        id: r,
        left: `${(mt(r + 500) * 100).toFixed(2)}%`,
        top: `${(mt(r + 600) * 100).toFixed(2)}%`,
        size: 2 + mt(r + 700) * 3,
        dur: 2.4 + mt(r + 800) * 3,
        delay: mt(r + 900) * 4,
      })),
    [e],
  );
  return c.jsx(c.Fragment, {
    children: t.map((n) =>
      c.jsx(
        L.span,
        {
          animate: { opacity: [0, 0.9, 0], scale: [0.6, 1.1, 0.6] },
          transition: {
            duration: n.dur,
            delay: n.delay,
            repeat: 1 / 0,
            ease: "easeInOut",
          },
          style: {
            position: "absolute",
            left: n.left,
            top: n.top,
            width: n.size,
            height: n.size,
            borderRadius: "50%",
            background: "var(--color-gold-light)",
            boxShadow: "0 0 6px var(--color-gold-light)",
          },
        },
        n.id,
      ),
    ),
  });
}
function fk({ intensity: e = 1 }) {
  const t = Ce(),
    { scrollYProgress: n } = Ng(),
    r = hn(n, [0, 1], ["0%", "14%"]),
    i = hn(n, [0, 1], ["0%", "-8%"]),
    s = k.useMemo(() => Pf(Math.round(8 * e), 0, 18, 1.4, 0.4, 12), [e]),
    o = k.useMemo(() => Pf(Math.round(10 * e), 50, 13, 0, 0.6, 9), [e]);
  if (t) return null;
  const a = {
    position: "fixed",
    inset: 0,
    maxWidth: 480,
    margin: "0 auto",
    pointerEvents: "none",
    overflow: "hidden",
  };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(L.div, {
        "aria-hidden": !0,
        style: { ...a, zIndex: 1, y: r },
        children: c.jsx(Cf, { petals: s }),
      }),
      c.jsxs(L.div, {
        "aria-hidden": !0,
        style: { ...a, zIndex: 20, y: i },
        children: [
          c.jsx(Cf, { petals: o }),
          c.jsx(dk, { count: Math.round(10 * e) }),
        ],
      }),
    ],
  });
}
const ce = {
  bride: {
    fullName: "Nida Lailiana Nur Hanifah, S.H.",
    nickName: "Nida",
    orderText: "Putri pertama dari",
    father: "KH. Ahmad Rokhani, S.A.P., Al-Hafidz",
    mother: "Nurchayati",
    instagram: "",
  },
  groom: {
    fullName: "Ismaiel Khasan, S.H., M.H.",
    nickName: "Ismaiel",
    orderText: "Putra pertama dari",
    father: "K. Sudar Maulana",
    mother: "Toyibah",
    instagram: "",
  },
  akad: {
    label: "Akad Nikah",
    date: "2026-06-14T09:00:00+07:00",
    dateText: "Minggu, 14 Juni 2026",
    timeText: "09.00 WIB",
    place: "Pondok Pesantren Daarurrahman",
    address: "Karanganyar RT 01 RW 01, Kec. Karanganyar, Kab. Purbalingga",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pondok+Pesantren+Daarurrahman+Karanganyar+Purbalingga",
  },
  resepsi: {
    label: "Tasyakuran",
    date: "2026-06-12T10:00:00+07:00",
    dateText: "Jumat – Sabtu, 12–13 Juni 2026",
    timeText: "08.00 s.d. selesai",
    place: "Pondok Pesantren Daarurrahman",
    address: "Karanganyar RT 01 RW 01, Kec. Karanganyar, Kab. Purbalingga",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pondok+Pesantren+Daarurrahman+Karanganyar+Purbalingga",
  },
  quote: {
    arabic:
      "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ",
    translation:
      "“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan, dan dijadikan-Nya di antaramu rasa kasih dan sayang.”",
    source: "QS. Ar-Rum: 21",
  },
  gifts: [
    {
      bank: "Bank Syariah Indonesia (BSI)",
      number: "7313 752 806",
      name: "a.n. Nida Lailiana Nur Hanifah",
    },
    {
      bank: "Bank BRI",
      number: "3719 0103 4130 536",
      name: "a.n. Ismaiel Khasan",
    },
  ],
  music: "./music.mp3",
  musicStartAt: 11,
  rsvpEndpoint:
    "https://script.google.com/macros/s/AKfycbzu-C0ZjHJhAsflgU3F3PQ-RiVwg4_9M3fchbbnTAXtFgqNTmkGTZatpFv8nJ0IkHDz/exec",
};
try {
  (typeof window < "u"
    ? new URLSearchParams(window.location.search).get("v")
    : null) === "putra" &&
    ((ce.resepsi.place = "Kediaman Mempelai Pria"),
    (ce.resepsi.address =
      "Jambudesa RT 04 RW 03, Kec. Karanganyar, Kab. Purbalingga"),
    (ce.resepsi.mapsUrl = "https://share.google/szDkFpfSpvGloWy6g"),
    (ce.resepsiPutri = {
      label: "Tasyakuran",
      date: "2026-06-12T10:00:00+07:00",
      dateText: "Jumat – Sabtu, 12–13 Juni 2026",
      timeText: "08.00 s.d. selesai",
      place: "Kediaman Mempelai Putri",
      address:
        "Ponpes Darurrahman, Karanganyar RT 01 RW 01, Kec. Karanganyar, Purbalingga",
      mapsUrl:
        "https://maps.google.com/maps/search/Ponpes%20Daarurrahman%20Karanganyar%20Purbalingga/@-7.3055723,109.4126276,17z?hl=en",
    }));
} catch {}
const hk = [0.22, 1, 0.36, 1];
function Oe({
  children: e,
  as: t = "span",
  className: n = "",
  script: r = !1,
  ...i
}) {
  return c.jsx(t, {
    className: `gold-foil ${r ? "title-script" : "title-display"} ${n}`,
    ...i,
    children: e,
  });
}
function pk({ text: e, className: t = "", delay: n = 0.15, gold: r = !1 }) {
  return Ce()
    ? c.jsx("span", { className: `${r ? "gold-foil" : ""} ${t}`, children: e })
    : c.jsx(L.span, {
        className: `${r ? "gold-foil" : ""} ${t}`,
        style: { display: "inline-block" },
        "aria-label": e,
        variants: {
          show: { transition: { staggerChildren: 0.045, delayChildren: n } },
        },
        initial: "hidden",
        whileInView: "show",
        viewport: { once: !0, amount: 0.6 },
        children: e
          .split("")
          .map((s, o) =>
            c.jsx(
              L.span,
              {
                "aria-hidden": !0,
                style: { display: "inline-block", whiteSpace: "pre" },
                variants: {
                  hidden: { opacity: 0, y: "0.45em", filter: "blur(6px)" },
                  show: {
                    opacity: 1,
                    y: "0em",
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: hk },
                  },
                },
                children: s,
              },
              o,
            ),
          ),
      });
}
const Ef = ["#f7c9d8", "#e6a4bc", "#d2e4f0", "#bcd6ef", "#ead7a8", "#fff"];
function mk(e) {
  return Array.from({ length: e }).map((t, n) => {
    const r = (n / e) * Math.PI * 2 + Math.random() * 0.4,
      i = 80 + Math.random() * 90;
    return {
      i: n,
      x: Math.cos(r) * i,
      y: Math.sin(r) * i - 30,
      rot: (Math.random() - 0.5) * 600,
      color: Ef[n % Ef.length],
      size: 7 + Math.random() * 7,
    };
  });
}
function Ag({ fireKey: e = 0, n: t = 20 }) {
  const n = Ce(),
    [r, i] = k.useState([]);
  k.useEffect(() => {
    if (n || e === 0) return;
    const o = e;
    i((a) => [...a, { id: o, bits: mk(t) }]);
  }, [e, t, n]);
  const s = (o) => i((a) => a.filter((l) => l.id !== o));
  return c.jsx("div", {
    className:
      "pointer-events-none absolute inset-0 z-[75] flex items-center justify-center overflow-visible",
    children: c.jsx(Vs, {
      children: r.map((o) =>
        c.jsx(
          "div",
          {
            className: "absolute",
            children: o.bits.map((a) =>
              c.jsx(
                L.span,
                {
                  initial: { x: 0, y: 0, opacity: 1, scale: 0.4, rotate: 0 },
                  animate: {
                    x: a.x,
                    y: a.y,
                    opacity: 0,
                    scale: 1,
                    rotate: a.rot,
                  },
                  transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
                  onAnimationComplete: a.i === 0 ? () => s(o.id) : void 0,
                  style: {
                    position: "absolute",
                    width: a.size,
                    height: a.size,
                    borderRadius: "50% 50% 50% 0",
                    background: a.color,
                  },
                },
                a.i,
              ),
            ),
          },
          o.id,
        ),
      ),
    }),
  });
}
function gk({ guest: e, onOpen: t }) {
  const { bride: n, groom: r, akad: i } = ce,
    s = Ce(),
    [o, a] = k.useState(!1),
    [l, u] = k.useState(0);
  function d() {
    o || (a(!0), u((f) => f + 1), setTimeout(t, s ? 150 : 1250));
  }
  return c.jsxs(L.div, {
    className: "frame",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem 1.5rem",
    },
    initial: { opacity: 1 },
    exit: { opacity: 0, scale: 1.08, filter: "blur(10px)" },
    transition: { duration: 0.9, ease: "easeInOut" },
    children: [
      c.jsx("div", {
        className: "absolute inset-0",
        style: {
          background:
            "linear-gradient(165deg, #c87d96 0%, #b16480 50%, #8d4d68 100%)",
        },
      }),
      c.jsx("div", {
        "aria-hidden": !0,
        className: "absolute inset-0",
        style: {
          background:
            "radial-gradient(120% 60% at 50% 16%, rgba(255,255,255,0.30), transparent 62%)",
        },
      }),
      !s &&
        c.jsxs(c.Fragment, {
          children: [
            c.jsx(L.div, {
              "aria-hidden": !0,
              className: "absolute -left-10 top-8 opacity-30",
              animate: { rotate: 360 },
              transition: { duration: 64, repeat: 1 / 0, ease: "linear" },
              children: c.jsx(Te, {
                size: 150,
                color: "#f7d9e3",
                core: "#ead7a8",
              }),
            }),
            c.jsx(L.div, {
              "aria-hidden": !0,
              className: "absolute -right-12 bottom-14 opacity-25",
              animate: { rotate: -360 },
              transition: { duration: 80, repeat: 1 / 0, ease: "linear" },
              children: c.jsx(Te, {
                size: 185,
                color: "#eab8c9",
                core: "#ead7a8",
              }),
            }),
          ],
        }),
      c.jsx(He, {
        className: "absolute top-0 left-0 opacity-90",
        color: "#c7a66b",
      }),
      c.jsx(He, {
        className: "absolute top-0 right-0 opacity-90",
        flip: !0,
        color: "#c7a66b",
      }),
      c.jsx(He, {
        className: "absolute bottom-0 left-0 opacity-90",
        flip: !0,
        color: "#7fa8cc",
      }),
      c.jsx(He, {
        className: "absolute bottom-0 right-0 opacity-90",
        color: "#7fa8cc",
      }),
      c.jsx(Ag, { fireKey: l, n: 26 }),
      c.jsxs(L.div, {
        className: "relative z-10 flex flex-col items-center",
        initial: "hidden",
        animate: "show",
        variants: {
          show: { transition: { staggerChildren: 0.16, delayChildren: 0.3 } },
        },
        children: [
          c.jsx(Cn, {
            children: c.jsx("p", {
              className: "eyebrow text-white/90",
              style: { textShadow: "0 1px 8px rgba(120,60,80,0.5)" },
              children: "The Wedding Of",
            }),
          }),
          c.jsx(Cn, {
            children: c.jsxs("h1", {
              className: "mt-3",
              children: [
                c.jsx(Oe, {
                  script: !0,
                  className: "block text-6xl sm:text-7xl",
                  children: n.nickName,
                }),
                c.jsx("span", {
                  className: "block text-2xl text-white/90 my-1 font-display",
                  children: "&",
                }),
                c.jsx(Oe, {
                  script: !0,
                  className: "block text-6xl sm:text-7xl",
                  children: r.nickName,
                }),
              ],
            }),
          }),
          c.jsx(Cn, {
            children: c.jsx("p", {
              className: "mt-3 font-serif italic text-lg text-white",
              style: { textShadow: "0 1px 8px rgba(120,60,80,0.5)" },
              children: i.dateText,
            }),
          }),
          c.jsx(Cn, {
            children: c.jsx("div", {
              className: "mt-9",
              style: { perspective: 900 },
              children: c.jsxs(L.div, {
                className: "relative mx-auto",
                style: { width: 230, height: 152 },
                animate: o ? { y: -6 } : { y: [0, -5, 0] },
                transition: o
                  ? { duration: 0.4 }
                  : { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
                children: [
                  c.jsx("div", {
                    className: "absolute inset-0 rounded-xl gold-hairline",
                    style: {
                      background: "linear-gradient(160deg, #fdf8f1, #f1e3d6)",
                      boxShadow: "0 20px 45px -18px rgba(120,60,80,0.6)",
                    },
                  }),
                  c.jsxs("svg", {
                    className: "absolute inset-0",
                    width: "230",
                    height: "152",
                    viewBox: "0 0 230 152",
                    fill: "none",
                    "aria-hidden": !0,
                    children: [
                      c.jsx("path", {
                        d: "M2 12 L115 92 L228 12",
                        stroke: "rgba(199,166,107,0.5)",
                        strokeWidth: "1",
                      }),
                      c.jsx("path", {
                        d: "M2 150 L92 82 M228 150 L138 82",
                        stroke: "rgba(199,166,107,0.35)",
                        strokeWidth: "1",
                      }),
                    ],
                  }),
                  c.jsx(L.div, {
                    className:
                      "absolute left-4 right-4 top-3 rounded-md bg-white/95 gold-hairline",
                    style: { height: 96, zIndex: 1 },
                    animate: o
                      ? { y: -86, opacity: [1, 1, 0], scale: 1.03 }
                      : { y: 0, opacity: 1 },
                    transition: {
                      duration: 0.8,
                      delay: o ? 0.45 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    children: c.jsxs("div", {
                      className:
                        "flex h-full flex-col items-center justify-center",
                      children: [
                        c.jsx("p", {
                          className: "eyebrow text-[0.5rem]",
                          children: "Save The Date",
                        }),
                        c.jsx("p", {
                          className: "title-script text-2xl text-rosedeep",
                          children: "N & I",
                        }),
                        c.jsx("p", {
                          className:
                            "font-body text-[0.55rem] tracking-widest text-ink-soft",
                          children: "14 . 06 . 2026",
                        }),
                      ],
                    }),
                  }),
                  c.jsx(L.div, {
                    className: "absolute left-0 top-0 w-full",
                    style: {
                      height: 92,
                      transformOrigin: "top center",
                      transformStyle: "preserve-3d",
                      background: "linear-gradient(160deg, #fbf4ec, #efe0d2)",
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      borderTop: "1px solid rgba(199,166,107,0.4)",
                      zIndex: o ? 0 : 3,
                    },
                    animate: o ? { rotateX: -178 } : { rotateX: 0 },
                    transition: {
                      duration: 0.7,
                      delay: o ? 0.2 : 0,
                      ease: [0.45, 0, 0.55, 1],
                    },
                  }),
                  c.jsx(L.button, {
                    onClick: d,
                    "aria-label": "Buka undangan",
                    whileHover: s ? void 0 : { scale: 1.06 },
                    whileTap: { scale: 0.94 },
                    className:
                      "absolute left-1/2 flex items-center justify-center rounded-full",
                    style: {
                      width: 52,
                      height: 52,
                      top: 62,
                      marginLeft: -26,
                      zIndex: 4,
                      background:
                        "radial-gradient(circle at 35% 30%, #e0809a, #be6e88 55%, #9c5670)",
                      boxShadow:
                        "0 6px 16px -4px rgba(120,40,60,0.7), inset 0 1px 2px rgba(255,255,255,0.4)",
                    },
                    animate: o
                      ? { scale: 1.5, opacity: 0, y: -16, rotate: 30 }
                      : { scale: 1, opacity: 1 },
                    transition: { duration: 0.45, ease: "backOut" },
                    children: c.jsx("span", {
                      className: "font-display text-sm text-white/95",
                      children: "N&I",
                    }),
                  }),
                ],
              }),
            }),
          }),
          c.jsx(Cn, {
            children: c.jsxs("div", {
              className: "mt-7",
              children: [
                c.jsx("p", {
                  className: "font-body text-xs text-white/85",
                  children: "Kepada Yth. Bapak/Ibu/Saudara/i",
                }),
                c.jsx("p", {
                  className: "mt-1 font-display text-xl text-white",
                  style: { textShadow: "0 1px 8px rgba(120,60,80,0.5)" },
                  children: e,
                }),
              ],
            }),
          }),
          c.jsx(Cn, {
            children: c.jsxs(L.button, {
              onClick: d,
              whileHover: s ? void 0 : { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className:
                "glass mt-5 inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm tracking-wide text-rosedeep",
              animate: o ? { opacity: 0, y: 8 } : { opacity: 1 },
              children: [
                c.jsx("span", {
                  className: "h-1.5 w-1.5 rounded-full bg-gold",
                  "aria-hidden": !0,
                }),
                "Buka Undangan",
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Cn({ children: e }) {
  return c.jsx(L.div, {
    variants: {
      hidden: { opacity: 0, y: 22 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      },
    },
    children: e,
  });
}
const Nf = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: -48, y: 0 },
    right: { x: 48, y: 0 },
    none: { x: 0, y: 0 },
  },
  Dg = [0.22, 1, 0.36, 1];
function H({
  children: e,
  from: t = "up",
  delay: n = 0,
  duration: r = 0.85,
  stagger: i = 0,
  className: s = "",
}) {
  const o = Ce(),
    a = Nf[t] ?? Nf.up;
  return o
    ? c.jsx("div", { className: s, children: e })
    : c.jsx(L.div, {
        className: s,
        initial: { opacity: 0, ...a },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: !0, amount: 0.22, margin: "0px 0px -8% 0px" },
        transition: {
          duration: r,
          delay: n,
          ease: Dg,
          ...(i ? { staggerChildren: i, delayChildren: n } : {}),
        },
        children: e,
      });
}
function F({ children: e, y: t = 22, className: n = "" }) {
  return c.jsx(L.div, {
    className: n,
    variants: {
      hidden: { opacity: 0, y: t },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: Dg } },
    },
    children: e,
  });
}
function yk() {
  const { bride: e, groom: t, akad: n } = ce,
    r = Ce();
  return c.jsxs("section", {
    className:
      "section-pad-lg relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden text-center",
    children: [
      c.jsx(L.div, {
        "aria-hidden": !0,
        className: "pointer-events-none absolute left-6 top-[12%] opacity-60",
        animate: r ? void 0 : { y: [0, -14, 0], rotate: [0, 6, 0] },
        transition: { duration: 7, repeat: 1 / 0, ease: "easeInOut" },
        children: c.jsx(Te, { size: 34, color: "#e6a4bc", core: "#ead7a8" }),
      }),
      c.jsx(L.div, {
        "aria-hidden": !0,
        className: "pointer-events-none absolute right-7 top-[20%] opacity-50",
        animate: r ? void 0 : { y: [0, 12, 0], rotate: [0, -8, 0] },
        transition: {
          duration: 8.5,
          repeat: 1 / 0,
          ease: "easeInOut",
          delay: 0.6,
        },
        children: c.jsx(Te, { size: 26, color: "#a9c6e0", core: "#ead7a8" }),
      }),
      c.jsx(L.div, {
        "aria-hidden": !0,
        className:
          "pointer-events-none absolute bottom-[14%] right-10 opacity-40",
        animate: r ? void 0 : { y: [0, -10, 0] },
        transition: {
          duration: 6.5,
          repeat: 1 / 0,
          ease: "easeInOut",
          delay: 1.2,
        },
        children: c.jsx(Te, { size: 20, color: "#c7a66b", core: "#fbf7f2" }),
      }),
      c.jsx(H, {
        from: "down",
        delay: 0.1,
        children: c.jsx(L.p, {
          dir: "rtl",
          lang: "ar",
          className: "font-serif text-2xl text-rosedeep",
          initial: r ? !1 : { opacity: 0, filter: "blur(10px)" },
          whileInView: r ? void 0 : { opacity: 1, filter: "blur(0px)" },
          viewport: { once: !0, amount: 0.6 },
          transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
          children: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        }),
      }),
      c.jsx(H, {
        delay: 0.2,
        children: c.jsx("p", {
          className: "mx-auto mt-7 max-w-xs lead text-ink/90",
          children:
            "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.",
        }),
      }),
      c.jsxs(H, {
        from: "up",
        delay: 0.35,
        stagger: 0.12,
        className: "mt-14",
        children: [
          c.jsx(F, {
            children: c.jsx("p", {
              className: "eyebrow",
              children: "The Wedding Of",
            }),
          }),
          c.jsx(F, {
            className: "mt-6",
            children: c.jsx(Oe, {
              script: !0,
              as: "h2",
              className: "text-7xl leading-none text-rosedeep",
              children: e.nickName,
            }),
          }),
          c.jsx(F, {
            className: "my-2",
            children: c.jsx("span", {
              className: "title-display text-4xl text-skydeep",
              children: "&",
            }),
          }),
          c.jsx(F, {
            children: c.jsx(Oe, {
              script: !0,
              as: "h2",
              className: "text-7xl leading-none text-rosedeep",
              children: t.nickName,
            }),
          }),
        ],
      }),
      c.jsx(H, {
        from: "up",
        delay: 0.55,
        children: c.jsxs("div", {
          className: "mt-14 flex items-center justify-center gap-4",
          children: [
            c.jsx("span", {
              "aria-hidden": !0,
              className:
                "h-px w-10 bg-gradient-to-r from-transparent to-gold/70",
            }),
            c.jsx("p", {
              className:
                "font-display text-sm uppercase tracking-[0.34em] text-ink",
              children: n.dateText.toUpperCase(),
            }),
            c.jsx("span", {
              "aria-hidden": !0,
              className:
                "h-px w-10 bg-gradient-to-l from-transparent to-gold/70",
            }),
          ],
        }),
      }),
    ],
  });
}
const vk = [0.22, 1, 0.36, 1];
function xk() {
  const { quote: e } = ce,
    t = Ce();
  return c.jsxs("section", {
    className: "section-pad-lg relative overflow-hidden text-center",
    "aria-label": "Ayat suci",
    children: [
      c.jsx("div", {
        "aria-hidden": !0,
        className:
          "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2",
        style: {
          background:
            "radial-gradient(circle at center, rgba(230,164,188,0.20) 0%, rgba(199,222,242,0.12) 38%, rgba(255,255,255,0) 70%)",
        },
      }),
      c.jsx(He, {
        color: "#c7a66b",
        className:
          "pointer-events-none absolute -left-3 -top-3 w-16 opacity-30 sm:w-20",
      }),
      c.jsx(He, {
        flip: !0,
        color: "#c7a66b",
        className:
          "pointer-events-none absolute -bottom-3 -right-3 w-16 rotate-180 opacity-30 sm:w-20",
      }),
      c.jsxs("div", {
        className: "relative mx-auto max-w-md",
        children: [
          c.jsx(H, {
            from: "down",
            children: c.jsx("p", {
              className: "eyebrow mb-8 text-gold-deep",
              children: "Firman Allah SWT",
            }),
          }),
          c.jsx(H, {
            from: "none",
            delay: 0.1,
            children: c.jsxs("div", {
              className: "mx-auto mb-10 flex items-center justify-center gap-3",
              children: [
                c.jsx("span", {
                  "aria-hidden": !0,
                  className:
                    "h-px w-12 bg-gradient-to-r from-transparent to-gold",
                }),
                c.jsx("span", {
                  "aria-hidden": !0,
                  className: "h-1.5 w-1.5 rotate-45 bg-gold/70",
                }),
                c.jsx("span", {
                  "aria-hidden": !0,
                  className:
                    "h-px w-12 bg-gradient-to-l from-transparent to-gold",
                }),
              ],
            }),
          }),
          t
            ? c.jsx("p", {
                dir: "rtl",
                lang: "ar",
                className:
                  "font-serif text-[1.9rem] leading-[2.4] text-rosedeep",
                children: e.arabic,
              })
            : c.jsx(L.p, {
                dir: "rtl",
                lang: "ar",
                className:
                  "font-serif text-[1.9rem] leading-[2.4] text-rosedeep",
                initial: { opacity: 0, filter: "blur(14px)", y: 16 },
                whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
                viewport: { once: !0, amount: 0.4 },
                transition: { duration: 1.6, ease: vk },
                children: e.arabic,
              }),
          c.jsx(H, {
            from: "up",
            delay: 0.35,
            children: c.jsx("p", {
              className:
                "lead mx-auto mt-9 max-w-sm text-balance italic text-ink",
              children: e.translation,
            }),
          }),
          c.jsx(H, {
            from: "up",
            delay: 0.5,
            children: c.jsxs("div", {
              className: "mt-9 flex flex-col items-center gap-5",
              children: [
                c.jsx("p", {
                  className: "eyebrow text-gold-deep",
                  children: e.source,
                }),
                c.jsx("span", {
                  "aria-hidden": !0,
                  className:
                    "h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Rg({ children: e, className: t = "", max: n = 8 }) {
  const r = k.useRef(null),
    i = Ce(),
    s = $s(0.5),
    o = $s(0.5),
    a = fl(s, { stiffness: 150, damping: 18, mass: 0.4 }),
    l = fl(o, { stiffness: 150, damping: 18, mass: 0.4 }),
    u = hn(a, [0, 1], [-n, n]),
    d = hn(l, [0, 1], [n, -n]),
    f = hn(a, [0, 1], ["0%", "100%"]),
    h = ik`radial-gradient(140px at ${f} 0%, rgba(255,255,255,0.5), transparent 70%)`;
  function y(x) {
    if (i || !r.current) return;
    const T = r.current.getBoundingClientRect(),
      m = x.touches ? x.touches[0] : x;
    (s.set((m.clientX - T.left) / T.width),
      o.set((m.clientY - T.top) / T.height));
  }
  function v() {
    (s.set(0.5), o.set(0.5));
  }
  return c.jsxs(L.div, {
    ref: r,
    onMouseMove: y,
    onMouseLeave: v,
    onTouchMove: y,
    onTouchEnd: v,
    style: i ? void 0 : { rotateX: d, rotateY: u, transformPerspective: 900 },
    className: `relative ${t}`,
    children: [
      e,
      !i &&
        c.jsx(L.span, {
          "aria-hidden": !0,
          className: "pointer-events-none absolute inset-0 rounded-[inherit]",
          style: { background: h },
        }),
    ],
  });
}
function Mf({ data: e, accent: t }) {
  const n = t === "sky",
    r = n ? "#8fb8d8" : "#e8a6bd";
  return c.jsx(Rg, {
    className: "mx-auto max-w-sm rounded-[2rem]",
    max: 7,
    children: c.jsxs("article", {
      className:
        "glass gold-hairline relative overflow-hidden rounded-[2rem] px-6 pb-7 pt-8 text-center",
      children: [
        c.jsx(He, {
          className:
            "pointer-events-none absolute -left-3 -top-3 scale-[0.7] opacity-70",
          color: r,
        }),
        c.jsx(He, {
          className:
            "pointer-events-none absolute -bottom-3 -right-3 scale-[0.7] opacity-70",
          flip: !0,
          color: r,
        }),
        c.jsxs("div", {
          className: "relative mx-auto grid h-32 w-32 place-items-center",
          children: [
            c.jsx("span", {
              "aria-hidden": !0,
              className:
                "absolute inset-0 rounded-full ring-1 ring-gold/60 ring-offset-2 ring-offset-ivory",
            }),
            c.jsx("div", {
              className:
                "grid h-32 w-32 place-items-center rounded-full ring-4 ring-white",
              style: {
                background: n
                  ? "radial-gradient(circle at 50% 35%, #eaf2fa, #d2e4f0)"
                  : "radial-gradient(circle at 50% 35%, #fdeef3, #f7d9e3)",
              },
              children: c.jsx(Oe, {
                as: "span",
                className: "text-5xl leading-none",
                children: e.nickName.charAt(0),
              }),
            }),
            c.jsx("span", {
              className:
                "pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2",
              "aria-hidden": !0,
              children: c.jsx(Te, {
                size: 34,
                color: n ? "#8fb8d8" : "#e6a4bc",
                core: "#ead7a8",
              }),
            }),
          ],
        }),
        c.jsx(Oe, {
          script: !0,
          as: "h3",
          className: "mt-6 text-5xl leading-none",
          children: e.nickName,
        }),
        c.jsx("p", {
          className: "mt-2 font-display text-lg tracking-wide text-ink",
          children: e.fullName,
        }),
        c.jsx("div", {
          className: "mx-auto my-4 h-px w-16 bg-gold/50",
          "aria-hidden": !0,
        }),
        c.jsxs("p", {
          className: "body-text text-ink/90",
          children: [
            e.orderText,
            c.jsx("br", {}),
            c.jsxs("span", {
              className: "font-serif text-lg text-ink",
              children: ["Bapak ", e.father],
            }),
            c.jsx("br", {}),
            c.jsxs("span", {
              className: "font-serif text-lg text-ink",
              children: ["& Ibu ", e.mother],
            }),
          ],
        }),
        e.instagram &&
          c.jsxs("a", {
            href: `https://instagram.com/${e.instagram}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "mt-5 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-white/50 px-4 py-1.5 text-xs tracking-wide text-skydeep transition hover:bg-white/80",
            "aria-label": `Buka Instagram ${e.nickName}`,
            children: [
              c.jsx("span", { "aria-hidden": !0, children: "＠" }),
              e.instagram,
            ],
          }),
      ],
    }),
  });
}
function wk() {
  const { bride: e, groom: t } = ce,
    n = Ce();
  return c.jsxs("section", {
    className: "section-pad relative",
    children: [
      c.jsxs(H, {
        from: "up",
        children: [
          c.jsx("p", {
            className: "eyebrow text-center",
            children: "Bismillahirrahmanirrahim",
          }),
          c.jsx("p", {
            className:
              "mt-4 text-center font-serif text-xl italic text-skydeep",
            children: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
          }),
          c.jsx("p", {
            className: "lead mx-auto mt-4 max-w-xs text-center text-ink/90",
            children:
              "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan kami:",
          }),
        ],
      }),
      c.jsxs("div", {
        className: "mt-12 space-y-5",
        children: [
          c.jsx(H, {
            from: "left",
            delay: 0.05,
            children: c.jsx(Mf, { data: e, accent: "rose" }),
          }),
          c.jsx("div", {
            className: "flex justify-center py-1",
            children: c.jsx(L.div, {
              animate: n
                ? void 0
                : { scale: [1, 1.18, 1], opacity: [0.85, 1, 0.85] },
              transition: n
                ? void 0
                : { duration: 3.2, repeat: 1 / 0, ease: "easeInOut" },
              children: c.jsx(Te, {
                size: 54,
                color: "#c7a66b",
                core: "#f6e7b0",
              }),
            }),
          }),
          c.jsx(H, {
            from: "right",
            delay: 0.05,
            children: c.jsx(Mf, { data: t, accent: "sky" }),
          }),
        ],
      }),
    ],
  });
}
function Sk({ value: e }) {
  const t = Ce(),
    n = fl(e, { stiffness: 90, damping: 18, mass: 0.7 });
  k.useEffect(() => {
    n.set(e);
  }, [e, n]);
  const r = hn(n, (i) => `${-i}em`);
  return c.jsx("span", {
    className:
      "relative inline-block h-[1em] w-[0.62em] overflow-hidden align-top leading-none",
    children: c.jsx(L.span, {
      className: "absolute left-0 top-0 flex flex-col",
      style: { y: t ? `${-e}em` : r },
      children: Array.from({ length: 10 }).map((i, s) =>
        c.jsx(
          "span",
          { className: "h-[1em] leading-none tabular-nums", children: s },
          s,
        ),
      ),
    }),
  });
}
function kk({ value: e, className: t = "" }) {
  const n = String(e).padStart(2, "0").split("").map(Number);
  return c.jsx("span", {
    className: `inline-flex tabular-nums ${t}`,
    children: n.map((r, i) => c.jsx(Sk, { value: r }, i)),
  });
}
function fi({ flip: e = !1 }) {
  const t = k.useRef(null),
    n = Ce(),
    { scrollYProgress: r } = Ng({
      target: t,
      offset: ["start 0.92", "center 0.55"],
    }),
    i = hn(r, [0, 1], [0, 1]),
    s = n ? 1 : i;
  return c.jsx("div", {
    ref: t,
    className: "flex justify-center py-8",
    style: { transform: e ? "scaleX(-1)" : "none" },
    children: c.jsxs("svg", {
      width: "260",
      height: "70",
      viewBox: "0 0 260 70",
      fill: "none",
      "aria-hidden": !0,
      children: [
        c.jsx(L.path, {
          d: "M10 35 Q70 8 130 35 T250 35",
          stroke: "var(--color-gold)",
          strokeWidth: "1.4",
          strokeLinecap: "round",
          style: { pathLength: s },
        }),
        [
          ["M70 22 q-10 -12 -22 -10 q4 12 22 10", "rotate(0)"],
          ["M190 22 q10 -12 22 -10 q-4 12 -22 10", "rotate(0)"],
          ["M48 44 q-12 6 -14 18 q12 -2 14 -18", "rotate(0)"],
          ["M212 44 q12 6 14 18 q-12 -2 -14 -18", "rotate(0)"],
        ].map((o, a) =>
          c.jsx(
            L.path,
            {
              d: o[0],
              stroke: "var(--color-sage)",
              strokeWidth: "1.4",
              fill: "none",
              style: { pathLength: s },
            },
            a,
          ),
        ),
        c.jsxs(L.g, {
          style: { scale: s, transformOrigin: "130px 35px", opacity: s },
          children: [
            [0, 72, 144, 216, 288].map((o) =>
              c.jsx(
                "ellipse",
                {
                  cx: "130",
                  cy: "27",
                  rx: "4.5",
                  ry: "8",
                  fill: "var(--color-rose)",
                  transform: `rotate(${o} 130 35)`,
                },
                o,
              ),
            ),
            c.jsx("circle", {
              cx: "130",
              cy: "35",
              r: "3.4",
              fill: "var(--color-gold-light)",
            }),
          ],
        }),
      ],
    }),
  });
}
function Af(e) {
  const t = new Date().getTime(),
    n = Math.max(0, e - t);
  return {
    hari: Math.floor(n / 864e5),
    jam: Math.floor((n % 864e5) / 36e5),
    menit: Math.floor((n % 36e5) / 6e4),
    detik: Math.floor((n % 6e4) / 1e3),
  };
}
const Tk = { hari: "Hari", jam: "Jam", menit: "Menit", detik: "Detik" };
function jk() {
  const e = Ce(),
    t = new Date(ce.akad.date).getTime(),
    [n, r] = k.useState(() => Af(t)),
    i = t <= new Date().getTime();
  return (
    k.useEffect(() => {
      const s = setInterval(() => r(Af(t)), 1e3);
      return () => clearInterval(s);
    }, [t]),
    c.jsxs("section", {
      className: "section-pad relative overflow-hidden text-center",
      children: [
        c.jsx(fi, {}),
        c.jsxs(H, {
          stagger: 0.08,
          children: [
            c.jsx(F, {
              children: c.jsx("p", {
                className: "eyebrow",
                children: "Menanti Hari Bahagia",
              }),
            }),
            c.jsx(F, {
              children: c.jsx(Oe, {
                script: !0,
                as: "h3",
                className: "mt-3 text-5xl",
                children: "Menghitung Hari",
              }),
            }),
            c.jsx(F, {
              children: c.jsx("p", {
                className: "mt-2 text-sm text-ink/90",
                children: "Menuju hari bahagia kami",
              }),
            }),
          ],
        }),
        c.jsx(H, {
          delay: 0.15,
          children: c.jsx("div", {
            className:
              "glass gold-hairline mx-auto mt-8 max-w-md rounded-[2rem] px-3 py-8 sm:px-7",
            children: i
              ? c.jsxs("div", {
                  className: "py-4",
                  children: [
                    c.jsx(Oe, {
                      as: "p",
                      className: "text-2xl leading-snug",
                      children: "Barakallahu lakuma",
                    }),
                    c.jsx("p", {
                      className: "mt-3 font-serif text-lg italic text-ink",
                      children: "Hari bahagia telah tiba",
                    }),
                  ],
                })
              : c.jsx("div", {
                  className:
                    "flex items-stretch justify-center gap-2.5 sm:gap-3.5",
                  children: Object.entries(n).map(([s, o], a) =>
                    c.jsxs(
                      L.div,
                      {
                        initial: { opacity: 0, y: 14, scale: 0.92 },
                        whileInView: { opacity: 1, y: 0, scale: 1 },
                        viewport: { once: !0 },
                        transition: {
                          delay: a * 0.08,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        className:
                          "relative flex min-w-0 max-w-[80px] flex-1 basis-0 flex-col items-center",
                        children: [
                          c.jsxs(L.div, {
                            className:
                              "glass gold-hairline relative flex h-[78px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white/85 to-blush/55 sm:h-[86px]",
                            animate:
                              s === "detik" && !e
                                ? { scale: [1, 1.035, 1] }
                                : void 0,
                            transition:
                              s === "detik" && !e
                                ? {
                                    duration: 1,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                  }
                                : void 0,
                            children: [
                              c.jsx("span", {
                                "aria-hidden": !0,
                                className:
                                  "pointer-events-none absolute inset-x-0 top-1/2 z-10 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent",
                              }),
                              c.jsx(kk, {
                                value: o,
                                className:
                                  "font-display text-[2.1rem] leading-none text-rosedeep sm:text-4xl",
                              }),
                            ],
                          }),
                          c.jsx("span", {
                            className:
                              "mt-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold-deep",
                            children: Tk[s],
                          }),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
          }),
        }),
        c.jsx(H, {
          delay: 0.3,
          children: c.jsxs("a", {
            href: Pk(),
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "Simpan acara ke kalender",
            className:
              "glass gold-hairline mt-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm text-rosedeep transition hover:bg-rosedeep hover:text-white",
            children: [
              c.jsx("span", { "aria-hidden": !0, children: "＋" }),
              "Simpan ke Kalender",
            ],
          }),
        }),
      ],
    })
  );
}
function Pk() {
  const { akad: e } = ce,
    t = new Date(e.date),
    n = new Date(t.getTime() + 2 * 36e5),
    r = (o) => o.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
    i = encodeURIComponent("Akad Nikah Nida & Ismaiel"),
    s = encodeURIComponent(`${e.place}, ${e.address}`);
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${i}&dates=${r(t)}/${r(n)}&location=${s}`;
}
function Ck(e) {
  return /\d/.test(e)
    ? { prefix: "Pukul ", value: e }
    : { prefix: "", value: `Waktu ${e.toLowerCase()}` };
}
function Df({ venue: e, accent: t, accentClass: n }) {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(F, {
        children: c.jsxs("div", {
          className: "mx-auto mt-6 flex w-fit items-center gap-2",
          children: [
            c.jsx(di, { size: 18 }),
            c.jsx("p", {
              className: "font-display text-base",
              style: { color: t },
              children: e.place,
            }),
            c.jsx("span", {
              style: { transform: "scaleX(-1)", lineHeight: 0 },
              children: c.jsx(di, { size: 18 }),
            }),
          ],
        }),
      }),
      c.jsx(F, {
        children: c.jsx("p", {
          className:
            "mx-auto mt-1.5 max-w-[17rem] text-sm leading-relaxed text-ink/90",
          children: e.address,
        }),
      }),
      c.jsx(F, {
        children: c.jsxs("a", {
          href: e.mapsUrl,
          target: "_blank",
          rel: "noreferrer",
          "aria-label": `Lihat lokasi ${e.place} di Google Maps (buka tab baru)`,
          className:
            "group mt-5 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 active:scale-95",
          style: { backgroundColor: t, boxShadow: `0 10px 24px -10px ${t}` },
          children: [
            c.jsx("span", {
              "aria-hidden": !0,
              className:
                "transition-transform duration-300 group-hover:scale-110",
              children: "📍",
            }),
            "Lihat Lokasi",
          ],
        }),
      }),
    ],
  });
}
function Rf({ ev: e, accent: t, accentClass: n, from: r, extraVenue: i }) {
  const s = Ce(),
    o = Ck(e.timeText);
  return c.jsx(H, {
    from: r,
    stagger: 0.08,
    children: c.jsx(Rg, {
      className: "rounded-[2rem]",
      max: 6,
      children: c.jsxs("div", {
        className:
          "glass gold-hairline relative overflow-hidden rounded-[2rem] px-7 py-9 text-center",
        children: [
          c.jsx(He, {
            className:
              "pointer-events-none absolute -top-4 -right-4 scale-[0.55] opacity-70",
            flip: !0,
            color: t,
          }),
          c.jsx(He, {
            className:
              "pointer-events-none absolute -bottom-5 -left-5 scale-[0.45] opacity-50",
            color: t,
          }),
          c.jsx("div", {
            "aria-hidden": !0,
            className:
              "pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl",
            style: { backgroundColor: t, opacity: 0.12 },
          }),
          c.jsx(F, {
            children: c.jsx("p", {
              className: "eyebrow",
              style: { color: t },
              children: e === ce.akad ? "Ijab & Kabul" : "Walimatun Nikah",
            }),
          }),
          c.jsx(F, {
            children: c.jsx(Oe, {
              script: !0,
              as: "h3",
              className: "relative mt-2 text-5xl leading-tight",
              style: { color: t },
              children: e.label,
            }),
          }),
          c.jsxs("div", {
            className: "mx-auto my-5 flex w-fit items-center gap-2",
            children: [
              c.jsx("span", {
                className: "h-px w-10",
                style: { backgroundColor: t, opacity: 0.4 },
              }),
              c.jsx(L.span, {
                "aria-hidden": !0,
                animate: s ? void 0 : { rotate: [0, 8, -8, 0] },
                transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
                style: { lineHeight: 0 },
                children: c.jsx(Mg, { size: 20 }),
              }),
              c.jsx("span", {
                className: "h-px w-10",
                style: { backgroundColor: t, opacity: 0.4 },
              }),
            ],
          }),
          c.jsx(F, {
            children: c.jsx("p", {
              className: "font-display text-xl text-ink",
              children: e.dateText,
            }),
          }),
          c.jsx(F, {
            children: c.jsxs("p", {
              className: `mt-1.5 text-sm ${n}`,
              children: [
                o.prefix,
                c.jsx("span", { className: "text-ink/90", children: o.value }),
              ],
            }),
          }),
          c.jsx(Df, { venue: e, accent: t, accentClass: n }),
          i &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsxs("div", {
                  className: "mx-auto my-6 flex w-fit items-center gap-3",
                  children: [
                    c.jsx("span", {
                      className: "h-px w-12",
                      style: { backgroundColor: t, opacity: 0.25 },
                    }),
                    c.jsx("span", {
                      className: "text-xs tracking-widest uppercase",
                      style: { color: t, opacity: 0.6 },
                      children: "✦",
                    }),
                    c.jsx("span", {
                      className: "h-px w-12",
                      style: { backgroundColor: t, opacity: 0.25 },
                    }),
                  ],
                }),
                c.jsx(Df, { venue: i, accent: t, accentClass: n }),
              ],
            }),
        ],
      }),
    }),
  });
}
function Ek() {
  const { akad: e, resepsi: t, resepsiPutri: n } = ce;
  return c.jsxs("section", {
    className: "section-pad relative",
    children: [
      c.jsxs(H, {
        from: "up",
        stagger: 0.08,
        className: "text-center",
        children: [
          c.jsx(F, {
            children: c.jsx("p", {
              className: "eyebrow text-gold-deep",
              children: "Save The Date",
            }),
          }),
          c.jsx(F, {
            children: c.jsx(pk, {
              text: "Hari Bahagia Kami",
              gold: !0,
              className: "mt-2 block title-display text-3xl text-ink",
            }),
          }),
          c.jsx(F, {
            children: c.jsx("p", {
              className: "lead mx-auto mt-3 max-w-xs text-ink/90",
              children:
                "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.",
            }),
          }),
        ],
      }),
      c.jsx(fi, {}),
      c.jsxs("div", {
        className: "mt-2 space-y-8",
        children: [
          c.jsx(Rf, {
            ev: e,
            accent: "var(--color-rosedeep)",
            accentClass: "text-rosedeep",
            from: "left",
          }),
          c.jsx(Rf, {
            ev: t,
            accent: "var(--color-skydeep)",
            accentClass: "text-skydeep",
            from: "right",
            extraVenue: n,
          }),
        ],
      }),
    ],
  });
}
const Lg = "undangan_wishes_nida_ismaiel";
function Lf() {
  try {
    return JSON.parse(localStorage.getItem(Lg)) || [];
  } catch {
    return [];
  }
}
function Vf(e) {
  const t = new Set();
  return e.filter((n) => {
    const r = (n.name || "") + "|" + (n.at || "") + "|" + (n.msg || "");
    return t.has(r) ? !1 : (t.add(r), !0);
  });
}
const na = 4,
  _f =
    "w-full rounded-2xl gold-hairline bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-1 focus-visible:ring-offset-white/60",
  Nk = {
    Hadir: "bg-sage/55 text-ink",
    Ragu: "bg-blush/80 text-rosedeep",
    Maaf: "bg-sky/70 text-skydeep",
  };
function Mk({ guest: e }) {
  const t = Ce(),
    [n, r] = k.useState(e && e !== "Tamu Undangan" ? e : ""),
    [i, s] = k.useState("Hadir"),
    [o, a] = k.useState(""),
    [l, u] = k.useState(Lf),
    [d, f] = k.useState(!1),
    [h, y] = k.useState(0),
    [v, x] = k.useState(""),
    [T, m] = k.useState(!1);
  k.useEffect(() => {
    fetch(ce.rsvpEndpoint)
      .then((w) => w.json())
      .then((w) => {
        if (Array.isArray(w) && w.length) {
          const j = Vf([...w, ...Lf()]).sort((E, P) =>
            (P.at || "").localeCompare(E.at || ""),
          );
          u(j);
        }
      })
      .catch(() => {});
  }, []);
  async function p(w) {
    if ((w.preventDefault(), !n.trim() || !o.trim() || d)) return;
    const j = {
        name: n.trim(),
        attend: i,
        msg: o.trim(),
        at: new Date().toISOString(),
      },
      E = [j, ...l];
    (u(E),
      localStorage.setItem(Lg, JSON.stringify(Vf(E))),
      a(""),
      y((P) => P + 1),
      x("Terima kasih, ucapanmu sudah terkirim 🌸"),
      setTimeout(() => x(""), 4e3));
    {
      f(!0);
      try {
        await fetch(ce.rsvpEndpoint, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(j),
        });
      } catch {
      } finally {
        f(!1);
      }
    }
  }
  const g = T ? l : l.slice(0, na),
    S = l.length - na;
  return c.jsxs("section", {
    className: "section-pad relative overflow-hidden",
    children: [
      !t &&
        c.jsx(L.div, {
          "aria-hidden": !0,
          className: "pointer-events-none absolute -right-6 top-10 opacity-30",
          animate: { rotate: [0, 8, 0], y: [0, -6, 0] },
          transition: { duration: 9, repeat: 1 / 0, ease: "easeInOut" },
          children: c.jsx(Te, { size: 54, color: "#e6a4bc", core: "#ead7a8" }),
        }),
      c.jsx(Ag, { fireKey: h, n: 22 }),
      c.jsxs(H, {
        from: "up",
        delay: 0.05,
        children: [
          c.jsx("p", {
            className: "eyebrow text-center",
            children: "Buku Tamu",
          }),
          c.jsx("h3", {
            className: "mt-2 text-center",
            children: c.jsx(Oe, {
              script: !0,
              as: "span",
              className: "text-5xl",
              children: "Ucapan & Doa",
            }),
          }),
          c.jsx("p", {
            className: "mt-3 text-center text-sm text-ink/90",
            children: "Berikan ucapan terbaikmu untuk kedua mempelai",
          }),
        ],
      }),
      c.jsx(H, {
        from: "up",
        delay: 0.12,
        children: c.jsxs("form", {
          onSubmit: p,
          className: "glass mt-8 space-y-3 rounded-[2rem] p-6",
          children: [
            c.jsxs("label", {
              className: "block",
              children: [
                c.jsx("span", { className: "sr-only", children: "Nama kamu" }),
                c.jsx("input", {
                  value: n,
                  onChange: (w) => r(w.target.value),
                  placeholder: "Nama kamu",
                  "aria-label": "Nama kamu",
                  className: _f,
                }),
              ],
            }),
            c.jsx("div", {
              className: "flex gap-2",
              role: "group",
              "aria-label": "Konfirmasi kehadiran",
              children: ["Hadir", "Ragu", "Maaf"].map((w) =>
                c.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => s(w),
                    "aria-pressed": i === w,
                    className: `flex-1 rounded-2xl px-3 py-2.5 text-sm transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${i === w ? "bg-rosedeep text-white shadow-md shadow-rosedeep/25" : "gold-hairline bg-white/55 text-ink/85 hover:bg-white/75"}`,
                    children: w,
                  },
                  w,
                ),
              ),
            }),
            c.jsxs("label", {
              className: "block",
              children: [
                c.jsx("span", {
                  className: "sr-only",
                  children: "Tulis ucapan & doa",
                }),
                c.jsx("textarea", {
                  value: o,
                  onChange: (w) => a(w.target.value),
                  placeholder: "Tulis ucapan & doa...",
                  "aria-label": "Tulis ucapan dan doa",
                  rows: 3,
                  className: `${_f} resize-none`,
                }),
              ],
            }),
            c.jsx("button", {
              type: "submit",
              disabled: d,
              "aria-label": d ? "Sedang mengirim ucapan" : "Kirim ucapan",
              className:
                "group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-rosedeep via-rose to-rosedeep bg-[length:200%_100%] py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-rosedeep/30 transition-all hover:bg-[position:100%] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-60",
              children: c.jsx("span", {
                className: "relative z-10",
                children: d ? "Mengirim…" : "Kirim Ucapan",
              }),
            }),
            c.jsx("p", {
              "aria-live": "polite",
              className: `min-h-[1.1rem] text-center text-sm text-sage transition-opacity ${v ? "opacity-100" : "opacity-0"}`,
              children: v,
            }),
          ],
        }),
      }),
      c.jsxs("div", {
        className: "mt-8 space-y-3",
        children: [
          c.jsx(Vs, {
            initial: !1,
            children: g.map((w, j) =>
              c.jsxs(
                L.div,
                {
                  layout: !0,
                  initial: { opacity: 0, y: 14 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  className: "glass relative rounded-3xl p-5",
                  children: [
                    c.jsx("span", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute right-4 top-4 text-gold/40",
                      children: c.jsx(Te, {
                        size: 18,
                        color: "#d7bd86",
                        core: "#fff",
                      }),
                    }),
                    c.jsxs("div", {
                      className: "flex items-center justify-between gap-3 pr-6",
                      children: [
                        c.jsx("span", {
                          className: "font-display text-rosedeep",
                          children: w.name,
                        }),
                        c.jsx("span", {
                          className: `shrink-0 rounded-full px-2.5 py-0.5 text-[10px] tracking-wide ${Nk[w.attend] || "bg-blush/70 text-rosedeep"}`,
                          children: w.attend,
                        }),
                      ],
                    }),
                    c.jsx("p", {
                      className: "mt-2 text-sm leading-relaxed text-ink/90",
                      children: w.msg,
                    }),
                  ],
                },
                (w.at || "") + j,
              ),
            ),
          }),
          l.length === 0 &&
            c.jsx(H, {
              from: "up",
              children: c.jsxs("p", {
                className: "py-6 text-center text-sm text-ink/85",
                children: [
                  "Jadilah yang pertama memberi ucapan",
                  " ",
                  c.jsx("span", { "aria-hidden": !0, children: "🌸" }),
                ],
              }),
            }),
          !T &&
            S > 0 &&
            c.jsx(F, {
              className: "pt-1",
              children: c.jsxs("button", {
                type: "button",
                onClick: () => m(!0),
                className:
                  "mx-auto block rounded-full gold-hairline bg-white/60 px-6 py-2.5 text-sm font-medium tracking-wide text-rosedeep shadow-sm transition hover:bg-white/80 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
                children: ["Lihat semua (", l.length, ")"],
              }),
            }),
          T &&
            l.length > na &&
            c.jsx("button", {
              type: "button",
              onClick: () => m(!1),
              className:
                "mx-auto block rounded-full gold-hairline bg-white/60 px-6 py-2.5 text-sm font-medium tracking-wide text-ink/90 shadow-sm transition hover:bg-white/80 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
              children: "Tampilkan lebih sedikit",
            }),
        ],
      }),
    ],
  });
}
function Ak() {
  const { gifts: e } = ce,
    [t, n] = k.useState(null),
    [r, i] = k.useState("");
  function s(a, l) {
    var f;
    const u = a.replace(/\s/g, ""),
      d = () => {
        (n(l),
          i("Nomor rekening tersalin"),
          setTimeout(() => {
            (n(null), i(""));
          }, 1800));
      };
    (f = navigator.clipboard) != null && f.writeText
      ? navigator.clipboard
          .writeText(u)
          .then(d)
          .catch(() => o(u, d))
      : o(u, d);
  }
  function o(a, l) {
    try {
      const u = document.createElement("textarea");
      ((u.value = a),
        u.setAttribute("readonly", ""),
        (u.style.position = "fixed"),
        (u.style.top = "-9999px"),
        (u.style.opacity = "0"),
        document.body.appendChild(u),
        u.select(),
        u.setSelectionRange(0, a.length),
        document.execCommand("copy"),
        document.body.removeChild(u),
        l());
    } catch {}
  }
  return c.jsxs("section", {
    className: "section-pad relative overflow-hidden text-center",
    children: [
      c.jsx("div", {
        "aria-hidden": !0,
        className:
          "pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 w-72 rounded-full bg-blush/40 blur-3xl",
      }),
      c.jsxs(H, {
        from: "up",
        stagger: 0.09,
        children: [
          c.jsx(F, {
            className: "mx-auto mb-4 w-fit",
            children: c.jsx(L.div, {
              initial: { rotate: -8, scale: 0.85 },
              whileInView: { rotate: 0, scale: 1 },
              viewport: { once: !0, amount: 0.6 },
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              children: c.jsx(Te, {
                size: 58,
                color: "#e6a4bc",
                core: "#ead7a8",
              }),
            }),
          }),
          c.jsx(F, {
            children: c.jsx("p", {
              className: "eyebrow mb-2",
              children: "Wedding Gift",
            }),
          }),
          c.jsx(F, {
            children: c.jsx(Oe, {
              script: !0,
              as: "h3",
              className: "text-5xl leading-tight",
              children: "Tanda Kasih",
            }),
          }),
          c.jsx(F, {
            children: c.jsx("p", {
              className: "lead mx-auto mt-4 max-w-xs text-ink/90",
              children:
                "Doa restu Anda merupakan karunia yang sangat berarti. Bila berkenan memberi tanda kasih, dapat melalui:",
            }),
          }),
        ],
      }),
      c.jsx("div", {
        className: "mt-9 space-y-5",
        children: e.map((a, l) =>
          c.jsx(
            H,
            {
              from: "up",
              delay: l * 0.1,
              children: c.jsxs("div", {
                className:
                  "glass gold-hairline relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-white/80 via-blush/30 to-sky/25 p-6 text-left",
                children: [
                  c.jsx("div", {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent",
                  }),
                  c.jsx("p", {
                    className: "eyebrow text-[0.65rem]",
                    children: a.bank,
                  }),
                  c.jsx("p", {
                    className:
                      "mt-2 font-display text-2xl tracking-[0.16em] text-ink",
                    children: a.number,
                  }),
                  c.jsx("p", {
                    className: "mt-1 font-body text-sm text-ink/90",
                    children: a.name,
                  }),
                  c.jsxs("button", {
                    type: "button",
                    onClick: () => s(a.number, l),
                    "aria-label":
                      t === l
                        ? "Nomor rekening tersalin"
                        : `Salin nomor rekening ${a.bank}`,
                    className:
                      "mt-4 inline-flex items-center gap-2 rounded-full bg-rosedeep px-5 py-2 text-xs font-medium tracking-wide text-white shadow-md shadow-rosedeep/25 transition active:scale-95",
                    children: [
                      c.jsx("span", {
                        "aria-hidden": !0,
                        className: "text-sm leading-none",
                        children: t === l ? "✓" : "⧉",
                      }),
                      t === l ? "Tersalin" : "Salin No. Rekening",
                    ],
                  }),
                ],
              }),
            },
            l,
          ),
        ),
      }),
      c.jsx("div", {
        className: "sr-only",
        role: "status",
        "aria-live": "polite",
        children: r,
      }),
    ],
  });
}
function Dk() {
  const { bride: e, groom: t } = ce,
    n = Ce();
  return c.jsxs("section", {
    className: "section-pad-lg relative overflow-hidden text-center",
    children: [
      c.jsx("div", {
        className: "blob",
        style: {
          width: 260,
          height: 260,
          background: "#f7c9d8",
          top: -60,
          left: -50,
        },
      }),
      c.jsx("div", {
        className: "blob",
        style: {
          width: 260,
          height: 260,
          background: "#cfe3f2",
          bottom: -60,
          right: -50,
        },
      }),
      c.jsx("div", {
        className: "blob",
        style: {
          width: 200,
          height: 200,
          background: "#f3e3bf",
          top: "40%",
          left: "55%",
          opacity: 0.5,
        },
      }),
      c.jsx(He, {
        className: "pointer-events-none absolute bottom-0 left-0 opacity-80",
        flip: !0,
      }),
      c.jsx(He, {
        className: "pointer-events-none absolute bottom-0 right-0 opacity-80",
        color: "#8fb8d8",
      }),
      c.jsx(fi, {}),
      c.jsxs(H, {
        from: "up",
        className: "relative z-10 mx-auto max-w-[26rem]",
        children: [
          c.jsxs("div", {
            className:
              "glass gold-hairline relative rounded-[2.25rem] px-6 py-12 sm:px-8",
            children: [
              c.jsx("span", {
                className:
                  "pointer-events-none absolute left-5 top-5 h-7 w-7 rounded-tl-2xl border-l border-t border-gold/50",
              }),
              c.jsx("span", {
                className:
                  "pointer-events-none absolute right-5 top-5 h-7 w-7 rounded-tr-2xl border-r border-t border-gold/50",
              }),
              c.jsx("span", {
                className:
                  "pointer-events-none absolute bottom-5 left-5 h-7 w-7 rounded-bl-2xl border-b border-l border-gold/50",
              }),
              c.jsx("span", {
                className:
                  "pointer-events-none absolute bottom-5 right-5 h-7 w-7 rounded-br-2xl border-b border-r border-gold/50",
              }),
              c.jsxs(H, {
                from: "up",
                stagger: 0.1,
                children: [
                  c.jsx(F, {
                    children: c.jsx("p", {
                      className: "eyebrow text-gold-deep",
                      children: "Sampai Jumpa",
                    }),
                  }),
                  c.jsx(F, {
                    children: c.jsx("p", {
                      className: "lead mx-auto mt-5 max-w-xs text-ink",
                      children:
                        "Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.",
                    }),
                  }),
                  c.jsx(F, {
                    children: c.jsxs("div", {
                      className: "my-8 flex items-center justify-center gap-4",
                      children: [
                        c.jsx("span", {
                          className:
                            "h-px w-12 bg-gradient-to-r from-transparent to-gold/60",
                        }),
                        c.jsx(L.div, {
                          animate: n ? void 0 : { rotate: 360 },
                          transition: {
                            duration: 32,
                            repeat: 1 / 0,
                            ease: "linear",
                          },
                          children: c.jsx(Te, {
                            size: 60,
                            color: "#e8a6bd",
                            core: "#ead7a8",
                          }),
                        }),
                        c.jsx("span", {
                          className:
                            "h-px w-12 bg-gradient-to-l from-transparent to-gold/60",
                        }),
                      ],
                    }),
                  }),
                  c.jsx(F, {
                    children: c.jsx("p", {
                      className: "font-serif text-base italic text-skydeep",
                      children: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
                    }),
                  }),
                  c.jsx(F, {
                    children: c.jsx("p", {
                      className: "mt-8 text-sm tracking-wide text-ink/90",
                      children: "Kami yang berbahagia,",
                    }),
                  }),
                  c.jsx(F, {
                    children: c.jsxs("div", {
                      className: "mt-3 flex flex-col items-center leading-none",
                      children: [
                        c.jsx(Oe, {
                          script: !0,
                          as: "h2",
                          className: "text-6xl sm:text-7xl",
                          children: e.nickName,
                        }),
                        c.jsx("span", {
                          className:
                            "my-1 font-display text-2xl text-rosedeep/70",
                          children: "&",
                        }),
                        c.jsx(Oe, {
                          script: !0,
                          as: "h2",
                          className: "text-6xl sm:text-7xl",
                          children: t.nickName,
                        }),
                      ],
                    }),
                  }),
                  c.jsx(F, {
                    children: c.jsxs("div", {
                      className:
                        "mt-9 flex items-center justify-center gap-3 text-gold-deep",
                      children: [
                        c.jsx("span", { className: "h-px w-10 bg-gold/50" }),
                        c.jsx("span", {
                          className: "font-script text-2xl",
                          children: "with love",
                        }),
                        c.jsx("span", { className: "h-px w-10 bg-gold/50" }),
                      ],
                    }),
                  }),
                  c.jsx(F, {
                    children: c.jsx("p", {
                      className:
                        "mt-2 font-display text-sm tracking-[0.4em] text-ink/85",
                      children: "2026",
                    }),
                  }),
                ],
              }),
            ],
          }),
          c.jsx(H, {
            from: "up",
            delay: 0.15,
            children: c.jsxs("p", {
              className: "mt-8 text-sm tracking-wide text-ink/85",
              children: [
                "Dibuat dengan",
                " ",
                c.jsx("span", { "aria-hidden": !0, children: "🌸" }),
                c.jsx("span", { className: "sr-only", children: "bunga" }),
                " untuk hari bahagia.",
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Sr = ce.musicStartAt;
function Rk({ playing: e, setPlaying: t }) {
  const n = k.useRef(null);
  return (
    k.useEffect(() => {
      const r = n.current;
      if (!r) return;
      const i = () => t(!0),
        s = () => t(!1),
        o = () => {
          ((r.currentTime = Sr), r.play().catch(() => {}));
        };
      return (
        r.addEventListener("play", i),
        r.addEventListener("pause", s),
        r.addEventListener("ended", o),
        () => {
          (r.removeEventListener("play", i),
            r.removeEventListener("pause", s),
            r.removeEventListener("ended", o),
            r.pause());
        }
      );
    }, [t]),
    k.useEffect(() => {
      const r = n.current;
      r &&
        (e
          ? ((r.volume = 0.55),
            r.currentTime < Sr && (r.currentTime = Sr),
            r
              .play()
              .then(() => {
                r.currentTime < Sr && (r.currentTime = Sr);
              })
              .catch(() => t(!1)))
          : r.pause());
    }, [e, t]),
    c.jsxs(c.Fragment, {
      children: [
        c.jsx("audio", { ref: n, src: ce.music, preload: "auto" }),
        c.jsxs(L.button, {
          onClick: () => t((r) => !r),
          whileTap: { scale: 0.9 },
          "aria-label": e ? "Hentikan musik" : "Putar musik",
          "aria-pressed": e,
          className:
            "glass fixed bottom-5 right-5 z-[70] flex items-center justify-center rounded-full",
          style: {
            width: 52,
            height: 52,
            marginRight: "max(0px, calc((100vw - 480px) / 2))",
          },
          children: [
            c.jsx(L.span, {
              className:
                "flex h-9 w-9 items-center justify-center rounded-full",
              style: {
                background:
                  "radial-gradient(circle at 50% 50%, #fff 0 14%, var(--color-gold-light) 16% 38%, var(--color-gold) 40% 100%)",
                boxShadow: "inset 0 0 0 1px rgba(168,133,74,0.5)",
              },
              animate: e ? { rotate: 360 } : { rotate: 0 },
              transition: e
                ? { duration: 5, repeat: 1 / 0, ease: "linear" }
                : { duration: 0.4 },
              children: c.jsx("span", {
                className: "h-2 w-2 rounded-full bg-white/90",
                "aria-hidden": !0,
              }),
            }),
            e &&
              c.jsx("span", {
                className:
                  "pointer-events-none absolute -bottom-0.5 right-0.5 flex items-end gap-[2px]",
                "aria-hidden": !0,
                children: [0, 1, 2].map((r) =>
                  c.jsx(
                    L.span,
                    {
                      className: "w-[2px] rounded-full bg-rosedeep",
                      animate: { height: [3, 9, 3] },
                      transition: {
                        duration: 0.7,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: r * 0.15,
                      },
                    },
                    r,
                  ),
                ),
              }),
          ],
        }),
      ],
    })
  );
}
function Lk() {
  const [e, t] = k.useState(!1),
    [n, r] = k.useState(!1),
    [i, s] = k.useState(!1),
    o = k.useMemo(() => {
      const l = new URLSearchParams(window.location.search),
        u = l.get("to") || l.get("kepada");
      return u ? decodeURIComponent(u.replace(/\+/g, " ")) : "Tamu Undangan";
    }, []);
  k.useEffect(() => {
    const l = !n;
    ((document.documentElement.style.overflow = l ? "hidden" : ""),
      (document.body.style.overflow = l ? "hidden" : ""));
  }, [n]);
  function a() {
    (r(!0), s(!0), requestAnimationFrame(() => window.scrollTo({ top: 0 })));
  }
  return c.jsx(xv, {
    reducedMotion: "user",
    transition: { ease: [0.22, 1, 0.36, 1] },
    children: c.jsxs("div", {
      className: "frame",
      children: [
        c.jsx("div", {
          className: "blob",
          style: {
            width: 220,
            height: 220,
            background: "#f7d9e3",
            top: 60,
            left: -70,
          },
        }),
        c.jsx("div", {
          className: "blob",
          style: {
            width: 200,
            height: 200,
            background: "#d2e4f0",
            top: "38%",
            right: -70,
          },
        }),
        c.jsx("div", {
          className: "blob",
          style: {
            width: 240,
            height: 240,
            background: "#dcead6",
            top: "70%",
            left: -80,
          },
        }),
        c.jsx("div", {
          className: "blob",
          style: {
            width: 200,
            height: 200,
            background: "#f7d9e3",
            top: "92%",
            right: -70,
          },
        }),
        c.jsx(fk, { intensity: n ? 1 : 0.6 }),
        c.jsx(Vs, {
          children: e && !n && c.jsx(gk, { guest: o, onOpen: a }, "cover"),
        }),
        c.jsx(Vs, {
          children: !e && c.jsx(uk, { onDone: () => t(!0) }, "preloader"),
        }),
        n &&
          c.jsxs("main", {
            className: "relative z-10",
            children: [
              c.jsx(yk, {}),
              c.jsx(xk, {}),
              c.jsx(fi, {}),
              c.jsx(wk, {}),
              c.jsx(jk, {}),
              c.jsx(Ek, {}),
              c.jsx(fi, { flip: !0 }),
              c.jsx(Mk, { guest: o }),
              c.jsx(Ak, {}),
              c.jsx(Dk, {}),
            ],
          }),
        c.jsx(Rk, { playing: i, setPlaying: s }),
      ],
    }),
  });
}
ra.createRoot(document.getElementById("root")).render(
  c.jsx(Xg.StrictMode, { children: c.jsx(Lk, {}) }),
);
