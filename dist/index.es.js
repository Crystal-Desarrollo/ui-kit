import * as E from "react";
import Pt, { useId as kp, useState as Et, useEffect as ur, Children as Mp, isValidElement as Mo, cloneElement as _o, createContext as _p, useContext as Dp, useRef as Tl, Suspense as Fp } from "react";
import { CircularProgress as Du, Paper as ls, Modal as Lp, Box as wa, IconButton as Xr, Typography as xt, Divider as ci, Stack as Qe, Button as Sa, Avatar as jp, TableHead as Bp, TableRow as Jr, TableCell as Zr, TableSortLabel as Up, FormControl as fo, FormControlLabel as Fu, Switch as Wp, TextField as zp, InputLabel as Vp, Select as qp, MenuItem as Hp, createTheme as Lu, ThemeProvider as cs, TableContainer as ju, Table as Bu, TableBody as Uu, TablePagination as Wu, Checkbox as Yp, Tab as Gp, Link as Kp, ListItemButton as Qp, ListItemIcon as Xp, ListItemText as Jp, Drawer as zu, useMediaQuery as Zp, Toolbar as eo, List as em, AppBar as tm, Popper as nm, Grow as rm, ButtonBase as om, Container as im } from "@mui/material";
import { Global as am, ThemeContext as sm, keyframes as us } from "@emotion/react";
import { Close as lm, Report as Vu, HomeRounded as cm, PeopleRounded as um, SavingsRounded as dm, SettingsRounded as fm, NotificationsRounded as pm, Logout as qu, Menu as mm } from "@mui/icons-material";
import { useFormContext as po, Controller as mo } from "react-hook-form";
import hm from "@emotion/styled";
import * as Hu from "react-dom";
import Co from "react-dom";
function Yu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ds(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Ta = { exports: {} }, Pr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cl;
function ym() {
  if (Cl)
    return Pr;
  Cl = 1;
  var e = Pt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, f = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (d in c)
      r.call(c, d) && !a.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: p, ref: h, props: f, _owner: i.current };
  }
  return Pr.Fragment = n, Pr.jsx = s, Pr.jsxs = s, Pr;
}
var $r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl;
function vm() {
  return Rl || (Rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function m(S) {
      if (S === null || typeof S != "object")
        return null;
      var V = v && S[v] || S[y];
      return typeof V == "function" ? V : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(S) {
      {
        for (var V = arguments.length, ne = new Array(V > 1 ? V - 1 : 0), A = 1; A < V; A++)
          ne[A - 1] = arguments[A];
        x("error", S, ne);
      }
    }
    function x(S, V, ne) {
      {
        var A = O.ReactDebugCurrentFrame, I = A.getStackAddendum();
        I !== "" && (V += "%s", ne = ne.concat([I]));
        var B = ne.map(function(G) {
          return String(G);
        });
        B.unshift("Warning: " + V), Function.prototype.apply.call(console[S], console, B);
      }
    }
    var b = !1, g = !1, R = !1, P = !1, $ = !1, F;
    F = Symbol.for("react.module.reference");
    function N(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === a || $ || S === i || S === u || S === d || P || S === h || b || g || R || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === f || S.$$typeof === s || S.$$typeof === l || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === F || S.getModuleId !== void 0));
    }
    function M(S, V, ne) {
      var A = S.displayName;
      if (A)
        return A;
      var I = V.displayName || V.name || "";
      return I !== "" ? ne + "(" + I + ")" : ne;
    }
    function q(S) {
      return S.displayName || "Context";
    }
    function z(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case l:
            var V = S;
            return q(V) + ".Consumer";
          case s:
            var ne = S;
            return q(ne._context) + ".Provider";
          case c:
            return M(S, S.render, "ForwardRef");
          case f:
            var A = S.displayName || null;
            return A !== null ? A : z(S.type) || "Memo";
          case p: {
            var I = S, B = I._payload, G = I._init;
            try {
              return z(G(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, D = 0, W, H, le, te, _, Y, re;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function K() {
      {
        if (D === 0) {
          W = console.log, H = console.info, le = console.warn, te = console.error, _ = console.group, Y = console.groupCollapsed, re = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        D++;
      }
    }
    function J() {
      {
        if (D--, D === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, S, {
              value: W
            }),
            info: L({}, S, {
              value: H
            }),
            warn: L({}, S, {
              value: le
            }),
            error: L({}, S, {
              value: te
            }),
            group: L({}, S, {
              value: _
            }),
            groupCollapsed: L({}, S, {
              value: Y
            }),
            groupEnd: L({}, S, {
              value: re
            })
          });
        }
        D < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = O.ReactCurrentDispatcher, Q;
    function oe(S, V, ne) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (I) {
            var A = I.stack.trim().match(/\n( *(at )?)/);
            Q = A && A[1] || "";
          }
        return `
` + Q + S;
      }
    }
    var ae = !1, fe;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new se();
    }
    function j(S, V) {
      if (!S || ae)
        return "";
      {
        var ne = fe.get(S);
        if (ne !== void 0)
          return ne;
      }
      var A;
      ae = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = Z.current, Z.current = null, K();
      try {
        if (V) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (nn) {
              A = nn;
            }
            Reflect.construct(S, [], G);
          } else {
            try {
              G.call();
            } catch (nn) {
              A = nn;
            }
            S.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nn) {
            A = nn;
          }
          S();
        }
      } catch (nn) {
        if (nn && A && typeof nn.stack == "string") {
          for (var ie = nn.stack.split(`
`), xe = A.stack.split(`
`), Oe = ie.length - 1, Re = xe.length - 1; Oe >= 1 && Re >= 0 && ie[Oe] !== xe[Re]; )
            Re--;
          for (; Oe >= 1 && Re >= 0; Oe--, Re--)
            if (ie[Oe] !== xe[Re]) {
              if (Oe !== 1 || Re !== 1)
                do
                  if (Oe--, Re--, Re < 0 || ie[Oe] !== xe[Re]) {
                    var ft = `
` + ie[Oe].replace(" at new ", " at ");
                    return S.displayName && ft.includes("<anonymous>") && (ft = ft.replace("<anonymous>", S.displayName)), typeof S == "function" && fe.set(S, ft), ft;
                  }
                while (Oe >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        ae = !1, Z.current = B, J(), Error.prepareStackTrace = I;
      }
      var Gn = S ? S.displayName || S.name : "", Sl = Gn ? oe(Gn) : "";
      return typeof S == "function" && fe.set(S, Sl), Sl;
    }
    function ye(S, V, ne) {
      return j(S, !1);
    }
    function k(S) {
      var V = S.prototype;
      return !!(V && V.isReactComponent);
    }
    function X(S, V, ne) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return j(S, k(S));
      if (typeof S == "string")
        return oe(S);
      switch (S) {
        case u:
          return oe("Suspense");
        case d:
          return oe("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return ye(S.render);
          case f:
            return X(S.type, V, ne);
          case p: {
            var A = S, I = A._payload, B = A._init;
            try {
              return X(B(I), V, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, ce = {}, qe = O.ReactDebugCurrentFrame;
    function He(S) {
      if (S) {
        var V = S._owner, ne = X(S.type, S._source, V ? V.type : null);
        qe.setExtraStackFrame(ne);
      } else
        qe.setExtraStackFrame(null);
    }
    function Ne(S, V, ne, A, I) {
      {
        var B = Function.call.bind(we);
        for (var G in S)
          if (B(S, G)) {
            var ie = void 0;
            try {
              if (typeof S[G] != "function") {
                var xe = Error((A || "React class") + ": " + ne + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              ie = S[G](V, G, A, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              ie = Oe;
            }
            ie && !(ie instanceof Error) && (He(I), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", ne, G, typeof ie), He(null)), ie instanceof Error && !(ie.message in ce) && (ce[ie.message] = !0, He(I), C("Failed %s type: %s", ne, ie.message), He(null));
          }
      }
    }
    var Te = Array.isArray;
    function We(S) {
      return Te(S);
    }
    function Pe(S) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, ne = V && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return ne;
      }
    }
    function Ze(S) {
      try {
        return et(S), !1;
      } catch {
        return !0;
      }
    }
    function et(S) {
      return "" + S;
    }
    function ot(S) {
      if (Ze(S))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(S)), et(S);
    }
    var $e = O.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ue, st, de;
    de = {};
    function Ee(S) {
      if (we.call(S, "ref")) {
        var V = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Ae(S) {
      if (we.call(S, "key")) {
        var V = Object.getOwnPropertyDescriptor(S, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function tt(S, V) {
      if (typeof S.ref == "string" && $e.current && V && $e.current.stateNode !== V) {
        var ne = z($e.current.type);
        de[ne] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z($e.current.type), S.ref), de[ne] = !0);
      }
    }
    function dn(S, V) {
      {
        var ne = function() {
          ue || (ue = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        ne.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function zt(S, V) {
      {
        var ne = function() {
          st || (st = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        ne.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var Tr = function(S, V, ne, A, I, B, G) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: V,
        ref: ne,
        props: G,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function jt(S, V, ne, A, I) {
      {
        var B, G = {}, ie = null, xe = null;
        ne !== void 0 && (ot(ne), ie = "" + ne), Ae(V) && (ot(V.key), ie = "" + V.key), Ee(V) && (xe = V.ref, tt(V, I));
        for (B in V)
          we.call(V, B) && !ve.hasOwnProperty(B) && (G[B] = V[B]);
        if (S && S.defaultProps) {
          var Oe = S.defaultProps;
          for (B in Oe)
            G[B] === void 0 && (G[B] = Oe[B]);
        }
        if (ie || xe) {
          var Re = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          ie && dn(G, Re), xe && zt(G, Re);
        }
        return Tr(S, ie, xe, I, A, $e.current, G);
      }
    }
    var gt = O.ReactCurrentOwner, St = O.ReactDebugCurrentFrame;
    function vt(S) {
      if (S) {
        var V = S._owner, ne = X(S.type, S._source, V ? V.type : null);
        St.setExtraStackFrame(ne);
      } else
        St.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Rn(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function fn() {
      {
        if (gt.current) {
          var S = z(gt.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function Vn(S) {
      {
        if (S !== void 0) {
          var V = S.fileName.replace(/^.*[\\\/]/, ""), ne = S.lineNumber;
          return `

Check your code at ` + V + ":" + ne + ".";
        }
        return "";
      }
    }
    var qn = {};
    function Cr(S) {
      {
        var V = fn();
        if (!V) {
          var ne = typeof S == "string" ? S : S.displayName || S.name;
          ne && (V = `

Check the top-level render call using <` + ne + ">.");
        }
        return V;
      }
    }
    function Hn(S, V) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var ne = Cr(V);
        if (qn[ne])
          return;
        qn[ne] = !0;
        var A = "";
        S && S._owner && S._owner !== gt.current && (A = " It was passed a child from " + z(S._owner.type) + "."), vt(S), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, A), vt(null);
      }
    }
    function pn(S, V) {
      {
        if (typeof S != "object")
          return;
        if (We(S))
          for (var ne = 0; ne < S.length; ne++) {
            var A = S[ne];
            Rn(A) && Hn(A, V);
          }
        else if (Rn(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var I = m(S);
          if (typeof I == "function" && I !== S.entries)
            for (var B = I.call(S), G; !(G = B.next()).done; )
              Rn(G.value) && Hn(G.value, V);
        }
      }
    }
    function lt(S) {
      {
        var V = S.type;
        if (V == null || typeof V == "string")
          return;
        var ne;
        if (typeof V == "function")
          ne = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        V.$$typeof === f))
          ne = V.propTypes;
        else
          return;
        if (ne) {
          var A = z(V);
          Ne(ne, S.props, "prop", A, S);
        } else if (V.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var I = z(V);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(S) {
      {
        for (var V = Object.keys(S.props), ne = 0; ne < V.length; ne++) {
          var A = V[ne];
          if (A !== "children" && A !== "key") {
            vt(S), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), vt(null);
            break;
          }
        }
        S.ref !== null && (vt(S), C("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    function bt(S, V, ne, A, I, B) {
      {
        var G = N(S);
        if (!G) {
          var ie = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = Vn(I);
          xe ? ie += xe : ie += fn();
          var Oe;
          S === null ? Oe = "null" : We(S) ? Oe = "array" : S !== void 0 && S.$$typeof === t ? (Oe = "<" + (z(S.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof S, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, ie);
        }
        var Re = jt(S, V, ne, I, B);
        if (Re == null)
          return Re;
        if (G) {
          var ft = V.children;
          if (ft !== void 0)
            if (A)
              if (We(ft)) {
                for (var Gn = 0; Gn < ft.length; Gn++)
                  pn(ft[Gn], S);
                Object.freeze && Object.freeze(ft);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pn(ft, S);
        }
        return S === r ? rt(Re) : lt(Re), Re;
      }
    }
    function So(S, V, ne) {
      return bt(S, V, ne, !0);
    }
    function Yn(S, V, ne) {
      return bt(S, V, ne, !1);
    }
    var To = Yn, Rr = So;
    $r.Fragment = r, $r.jsx = To, $r.jsxs = Rr;
  }()), $r;
}
process.env.NODE_ENV === "production" ? Ta.exports = ym() : Ta.exports = vm();
var fs = Ta.exports;
const ps = fs.Fragment, w = fs.jsx, pe = fs.jsxs, gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment: ps,
  jsx: w,
  jsxs: pe
}, Symbol.toStringTag, { value: "Module" }));
var Ca = { exports: {} }, Ro = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pl;
function bm() {
  if (Pl)
    return Me;
  Pl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function x(g) {
    if (typeof g == "object" && g !== null) {
      var R = g.$$typeof;
      switch (R) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case r:
            case a:
            case i:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case v:
                case h:
                case s:
                  return g;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function b(g) {
    return x(g) === u;
  }
  return Me.AsyncMode = c, Me.ConcurrentMode = u, Me.ContextConsumer = l, Me.ContextProvider = s, Me.Element = t, Me.ForwardRef = d, Me.Fragment = r, Me.Lazy = v, Me.Memo = h, Me.Portal = n, Me.Profiler = a, Me.StrictMode = i, Me.Suspense = f, Me.isAsyncMode = function(g) {
    return b(g) || x(g) === c;
  }, Me.isConcurrentMode = b, Me.isContextConsumer = function(g) {
    return x(g) === l;
  }, Me.isContextProvider = function(g) {
    return x(g) === s;
  }, Me.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Me.isForwardRef = function(g) {
    return x(g) === d;
  }, Me.isFragment = function(g) {
    return x(g) === r;
  }, Me.isLazy = function(g) {
    return x(g) === v;
  }, Me.isMemo = function(g) {
    return x(g) === h;
  }, Me.isPortal = function(g) {
    return x(g) === n;
  }, Me.isProfiler = function(g) {
    return x(g) === a;
  }, Me.isStrictMode = function(g) {
    return x(g) === i;
  }, Me.isSuspense = function(g) {
    return x(g) === f;
  }, Me.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === u || g === a || g === i || g === f || g === p || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === h || g.$$typeof === s || g.$$typeof === l || g.$$typeof === d || g.$$typeof === m || g.$$typeof === O || g.$$typeof === C || g.$$typeof === y);
  }, Me.typeOf = x, Me;
}
var _e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $l;
function Em() {
  return $l || ($l = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function x(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === r || j === u || j === a || j === i || j === f || j === p || typeof j == "object" && j !== null && (j.$$typeof === v || j.$$typeof === h || j.$$typeof === s || j.$$typeof === l || j.$$typeof === d || j.$$typeof === m || j.$$typeof === O || j.$$typeof === C || j.$$typeof === y);
    }
    function b(j) {
      if (typeof j == "object" && j !== null) {
        var ye = j.$$typeof;
        switch (ye) {
          case t:
            var k = j.type;
            switch (k) {
              case c:
              case u:
              case r:
              case a:
              case i:
              case f:
                return k;
              default:
                var X = k && k.$$typeof;
                switch (X) {
                  case l:
                  case d:
                  case v:
                  case h:
                  case s:
                    return X;
                  default:
                    return ye;
                }
            }
          case n:
            return ye;
        }
      }
    }
    var g = c, R = u, P = l, $ = s, F = t, N = d, M = r, q = v, z = h, L = n, D = a, W = i, H = f, le = !1;
    function te(j) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(j) || b(j) === c;
    }
    function _(j) {
      return b(j) === u;
    }
    function Y(j) {
      return b(j) === l;
    }
    function re(j) {
      return b(j) === s;
    }
    function ee(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function K(j) {
      return b(j) === d;
    }
    function J(j) {
      return b(j) === r;
    }
    function Z(j) {
      return b(j) === v;
    }
    function Q(j) {
      return b(j) === h;
    }
    function oe(j) {
      return b(j) === n;
    }
    function ae(j) {
      return b(j) === a;
    }
    function fe(j) {
      return b(j) === i;
    }
    function se(j) {
      return b(j) === f;
    }
    _e.AsyncMode = g, _e.ConcurrentMode = R, _e.ContextConsumer = P, _e.ContextProvider = $, _e.Element = F, _e.ForwardRef = N, _e.Fragment = M, _e.Lazy = q, _e.Memo = z, _e.Portal = L, _e.Profiler = D, _e.StrictMode = W, _e.Suspense = H, _e.isAsyncMode = te, _e.isConcurrentMode = _, _e.isContextConsumer = Y, _e.isContextProvider = re, _e.isElement = ee, _e.isForwardRef = K, _e.isFragment = J, _e.isLazy = Z, _e.isMemo = Q, _e.isPortal = oe, _e.isProfiler = ae, _e.isStrictMode = fe, _e.isSuspense = se, _e.isValidElementType = x, _e.typeOf = b;
  }()), _e;
}
var Al;
function Gu() {
  return Al || (Al = 1, process.env.NODE_ENV === "production" ? Ro.exports = bm() : Ro.exports = Em()), Ro.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zi, Il;
function xm() {
  if (Il)
    return zi;
  Il = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zi = i() ? Object.assign : function(a, s) {
    for (var l, c = r(a), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          n.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, zi;
}
var Vi, Nl;
function ms() {
  if (Nl)
    return Vi;
  Nl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vi = e, Vi;
}
var qi, kl;
function Ku() {
  return kl || (kl = 1, qi = Function.call.bind(Object.prototype.hasOwnProperty)), qi;
}
var Hi, Ml;
function Om() {
  if (Ml)
    return Hi;
  Ml = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ms(), n = {}, r = Ku();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (r(a, d)) {
          var f;
          try {
            if (typeof a[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = a[d](s, d, c, l, null, t);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var h = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Hi = i, Hi;
}
var Yi, _l;
function wm() {
  if (_l)
    return Yi;
  _l = 1;
  var e = Gu(), t = xm(), n = ms(), r = Ku(), i = Om(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Yi = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(_) {
      var Y = _ && (u && _[u] || _[d]);
      if (typeof Y == "function")
        return Y;
    }
    var p = "<<anonymous>>", h = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: C(),
      arrayOf: x,
      element: b(),
      elementType: g(),
      instanceOf: R,
      node: N(),
      objectOf: $,
      oneOf: P,
      oneOfType: F,
      shape: q,
      exact: z
    };
    function v(_, Y) {
      return _ === Y ? _ !== 0 || 1 / _ === 1 / Y : _ !== _ && Y !== Y;
    }
    function y(_, Y) {
      this.message = _, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function m(_) {
      if (process.env.NODE_ENV !== "production")
        var Y = {}, re = 0;
      function ee(J, Z, Q, oe, ae, fe, se) {
        if (oe = oe || p, fe = fe || Q, se !== n) {
          if (c) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = oe + ":" + Q;
            !Y[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + fe + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Y[ye] = !0, re++);
          }
        }
        return Z[Q] == null ? J ? Z[Q] === null ? new y("The " + ae + " `" + fe + "` is marked as required " + ("in `" + oe + "`, but its value is `null`.")) : new y("The " + ae + " `" + fe + "` is marked as required in " + ("`" + oe + "`, but its value is `undefined`.")) : null : _(Z, Q, oe, ae, fe);
      }
      var K = ee.bind(null, !1);
      return K.isRequired = ee.bind(null, !0), K;
    }
    function O(_) {
      function Y(re, ee, K, J, Z, Q) {
        var oe = re[ee], ae = W(oe);
        if (ae !== _) {
          var fe = H(oe);
          return new y(
            "Invalid " + J + " `" + Z + "` of type " + ("`" + fe + "` supplied to `" + K + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return m(Y);
    }
    function C() {
      return m(s);
    }
    function x(_) {
      function Y(re, ee, K, J, Z) {
        if (typeof _ != "function")
          return new y("Property `" + Z + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var Q = re[ee];
        if (!Array.isArray(Q)) {
          var oe = W(Q);
          return new y("Invalid " + J + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + K + "`, expected an array."));
        }
        for (var ae = 0; ae < Q.length; ae++) {
          var fe = _(Q, ae, K, J, Z + "[" + ae + "]", n);
          if (fe instanceof Error)
            return fe;
        }
        return null;
      }
      return m(Y);
    }
    function b() {
      function _(Y, re, ee, K, J) {
        var Z = Y[re];
        if (!l(Z)) {
          var Q = W(Z);
          return new y("Invalid " + K + " `" + J + "` of type " + ("`" + Q + "` supplied to `" + ee + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(_);
    }
    function g() {
      function _(Y, re, ee, K, J) {
        var Z = Y[re];
        if (!e.isValidElementType(Z)) {
          var Q = W(Z);
          return new y("Invalid " + K + " `" + J + "` of type " + ("`" + Q + "` supplied to `" + ee + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(_);
    }
    function R(_) {
      function Y(re, ee, K, J, Z) {
        if (!(re[ee] instanceof _)) {
          var Q = _.name || p, oe = te(re[ee]);
          return new y("Invalid " + J + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + K + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return m(Y);
    }
    function P(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function Y(re, ee, K, J, Z) {
        for (var Q = re[ee], oe = 0; oe < _.length; oe++)
          if (v(Q, _[oe]))
            return null;
        var ae = JSON.stringify(_, function(se, j) {
          var ye = H(j);
          return ye === "symbol" ? String(j) : j;
        });
        return new y("Invalid " + J + " `" + Z + "` of value `" + String(Q) + "` " + ("supplied to `" + K + "`, expected one of " + ae + "."));
      }
      return m(Y);
    }
    function $(_) {
      function Y(re, ee, K, J, Z) {
        if (typeof _ != "function")
          return new y("Property `" + Z + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var Q = re[ee], oe = W(Q);
        if (oe !== "object")
          return new y("Invalid " + J + " `" + Z + "` of type " + ("`" + oe + "` supplied to `" + K + "`, expected an object."));
        for (var ae in Q)
          if (r(Q, ae)) {
            var fe = _(Q, ae, K, J, Z + "." + ae, n);
            if (fe instanceof Error)
              return fe;
          }
        return null;
      }
      return m(Y);
    }
    function F(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var Y = 0; Y < _.length; Y++) {
        var re = _[Y];
        if (typeof re != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(re) + " at index " + Y + "."
          ), s;
      }
      function ee(K, J, Z, Q, oe) {
        for (var ae = [], fe = 0; fe < _.length; fe++) {
          var se = _[fe], j = se(K, J, Z, Q, oe, n);
          if (j == null)
            return null;
          j.data && r(j.data, "expectedType") && ae.push(j.data.expectedType);
        }
        var ye = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new y("Invalid " + Q + " `" + oe + "` supplied to " + ("`" + Z + "`" + ye + "."));
      }
      return m(ee);
    }
    function N() {
      function _(Y, re, ee, K, J) {
        return L(Y[re]) ? null : new y("Invalid " + K + " `" + J + "` supplied to " + ("`" + ee + "`, expected a ReactNode."));
      }
      return m(_);
    }
    function M(_, Y, re, ee, K) {
      return new y(
        (_ || "React class") + ": " + Y + " type `" + re + "." + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function q(_) {
      function Y(re, ee, K, J, Z) {
        var Q = re[ee], oe = W(Q);
        if (oe !== "object")
          return new y("Invalid " + J + " `" + Z + "` of type `" + oe + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var ae in _) {
          var fe = _[ae];
          if (typeof fe != "function")
            return M(K, J, Z, ae, H(fe));
          var se = fe(Q, ae, K, J, Z + "." + ae, n);
          if (se)
            return se;
        }
        return null;
      }
      return m(Y);
    }
    function z(_) {
      function Y(re, ee, K, J, Z) {
        var Q = re[ee], oe = W(Q);
        if (oe !== "object")
          return new y("Invalid " + J + " `" + Z + "` of type `" + oe + "` " + ("supplied to `" + K + "`, expected `object`."));
        var ae = t({}, re[ee], _);
        for (var fe in ae) {
          var se = _[fe];
          if (r(_, fe) && typeof se != "function")
            return M(K, J, Z, fe, H(se));
          if (!se)
            return new y(
              "Invalid " + J + " `" + Z + "` key `" + fe + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(re[ee], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var j = se(Q, fe, K, J, Z + "." + fe, n);
          if (j)
            return j;
        }
        return null;
      }
      return m(Y);
    }
    function L(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(L);
          if (_ === null || l(_))
            return !0;
          var Y = f(_);
          if (Y) {
            var re = Y.call(_), ee;
            if (Y !== _.entries) {
              for (; !(ee = re.next()).done; )
                if (!L(ee.value))
                  return !1;
            } else
              for (; !(ee = re.next()).done; ) {
                var K = ee.value;
                if (K && !L(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(_, Y) {
      return _ === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
    }
    function W(_) {
      var Y = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : D(Y, _) ? "symbol" : Y;
    }
    function H(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var Y = W(_);
      if (Y === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return Y;
    }
    function le(_) {
      var Y = H(_);
      switch (Y) {
        case "array":
        case "object":
          return "an " + Y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Y;
        default:
          return Y;
      }
    }
    function te(_) {
      return !_.constructor || !_.constructor.name ? p : _.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, Yi;
}
var Gi, Dl;
function Sm() {
  if (Dl)
    return Gi;
  Dl = 1;
  var e = ms();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Gi = function() {
    function r(s, l, c, u, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Gi;
}
if (process.env.NODE_ENV !== "production") {
  var Tm = Gu(), Cm = !0;
  Ca.exports = wm()(Tm.isElement, Cm);
} else
  Ca.exports = Sm()();
var Rm = Ca.exports;
const o = /* @__PURE__ */ Yu(Rm), Wn = () => /* @__PURE__ */ w(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,.7)",
      zIndex: 9
    },
    onClick: (e) => e.stopPropagation(),
    children: /* @__PURE__ */ w(Du, {})
  }
);
function an(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function T() {
  return T = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, T.apply(this, arguments);
}
function In(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Qu(e) {
  if (!In(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Qu(e[n]);
  }), t;
}
function kt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? T({}, e) : e;
  return In(e) && In(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (In(t[i]) && i in e && In(e[i]) ? r[i] = kt(e[i], t[i], n) : n.clone ? r[i] = In(t[i]) ? Qu(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
function Pm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Xu(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !Pm(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ju = an(o.element, Xu);
Ju.isRequired = an(o.element.isRequired, Xu);
const ho = Ju;
function $m(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Am(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !$m(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const hs = an(o.elementType, Am), Im = "exact-prop: ​";
function Zu(e) {
  return process.env.NODE_ENV === "production" ? e : T({}, e, {
    [Im]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function bn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Ra = { exports: {} }, De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fl;
function Nm() {
  if (Fl)
    return De;
  Fl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function y(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case e:
          switch (m = m.type, m) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case s:
                case c:
                case p:
                case f:
                case a:
                  return m;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return De.ContextConsumer = s, De.ContextProvider = a, De.Element = e, De.ForwardRef = c, De.Fragment = n, De.Lazy = p, De.Memo = f, De.Portal = t, De.Profiler = i, De.StrictMode = r, De.Suspense = u, De.SuspenseList = d, De.isAsyncMode = function() {
    return !1;
  }, De.isConcurrentMode = function() {
    return !1;
  }, De.isContextConsumer = function(m) {
    return y(m) === s;
  }, De.isContextProvider = function(m) {
    return y(m) === a;
  }, De.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, De.isForwardRef = function(m) {
    return y(m) === c;
  }, De.isFragment = function(m) {
    return y(m) === n;
  }, De.isLazy = function(m) {
    return y(m) === p;
  }, De.isMemo = function(m) {
    return y(m) === f;
  }, De.isPortal = function(m) {
    return y(m) === t;
  }, De.isProfiler = function(m) {
    return y(m) === i;
  }, De.isStrictMode = function(m) {
    return y(m) === r;
  }, De.isSuspense = function(m) {
    return y(m) === u;
  }, De.isSuspenseList = function(m) {
    return y(m) === d;
  }, De.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === i || m === r || m === u || m === d || m === h || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === a || m.$$typeof === s || m.$$typeof === c || m.$$typeof === v || m.getModuleId !== void 0);
  }, De.typeOf = y, De;
}
var Fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ll;
function km() {
  return Ll || (Ll = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = !1, y = !1, m = !1, O = !1, C = !1, x;
    x = Symbol.for("react.module.reference");
    function b(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === n || k === i || C || k === r || k === u || k === d || O || k === h || v || y || m || typeof k == "object" && k !== null && (k.$$typeof === p || k.$$typeof === f || k.$$typeof === a || k.$$typeof === s || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === x || k.getModuleId !== void 0));
    }
    function g(k) {
      if (typeof k == "object" && k !== null) {
        var X = k.$$typeof;
        switch (X) {
          case e:
            var we = k.type;
            switch (we) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return we;
              default:
                var ce = we && we.$$typeof;
                switch (ce) {
                  case l:
                  case s:
                  case c:
                  case p:
                  case f:
                  case a:
                    return ce;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var R = s, P = a, $ = e, F = c, N = n, M = p, q = f, z = t, L = i, D = r, W = u, H = d, le = !1, te = !1;
    function _(k) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(k) {
      return te || (te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(k) {
      return g(k) === s;
    }
    function ee(k) {
      return g(k) === a;
    }
    function K(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function J(k) {
      return g(k) === c;
    }
    function Z(k) {
      return g(k) === n;
    }
    function Q(k) {
      return g(k) === p;
    }
    function oe(k) {
      return g(k) === f;
    }
    function ae(k) {
      return g(k) === t;
    }
    function fe(k) {
      return g(k) === i;
    }
    function se(k) {
      return g(k) === r;
    }
    function j(k) {
      return g(k) === u;
    }
    function ye(k) {
      return g(k) === d;
    }
    Fe.ContextConsumer = R, Fe.ContextProvider = P, Fe.Element = $, Fe.ForwardRef = F, Fe.Fragment = N, Fe.Lazy = M, Fe.Memo = q, Fe.Portal = z, Fe.Profiler = L, Fe.StrictMode = D, Fe.Suspense = W, Fe.SuspenseList = H, Fe.isAsyncMode = _, Fe.isConcurrentMode = Y, Fe.isContextConsumer = re, Fe.isContextProvider = ee, Fe.isElement = K, Fe.isForwardRef = J, Fe.isFragment = Z, Fe.isLazy = Q, Fe.isMemo = oe, Fe.isPortal = ae, Fe.isProfiler = fe, Fe.isStrictMode = se, Fe.isSuspense = j, Fe.isSuspenseList = ye, Fe.isValidElementType = b, Fe.typeOf = g;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? Ra.exports = Nm() : Ra.exports = km();
var jl = Ra.exports;
const Mm = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function _m(e) {
  const t = `${e}`.match(Mm);
  return t && t[1] || "";
}
function ed(e, t = "") {
  return e.displayName || e.name || _m(e) || t;
}
function Bl(e, t, n) {
  const r = ed(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Dm(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ed(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case jl.ForwardRef:
          return Bl(e, e.render, "ForwardRef");
        case jl.Memo:
          return Bl(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Jt(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Fm = o.oneOfType([o.func, o.object]), Wt = Fm;
function me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : bn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Pa(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function ys(e, t = 166) {
  let n;
  function r(...i) {
    const a = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(a, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Lm(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (n, r, i, a, s) => {
    const l = i || "<<anonymous>>", c = s || r;
    return typeof n[r] < "u" ? new Error(`The ${a} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Do(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function ht(e) {
  return e && e.ownerDocument || document;
}
function En(e) {
  return ht(e).defaultView || window;
}
function td(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? T({}, t.propTypes) : null;
  return (i) => (a, s, l, c, u, ...d) => {
    const f = u || s, p = n == null ? void 0 : n[f];
    if (p) {
      const h = p(a, s, l, c, u, ...d);
      if (h)
        return h;
    }
    return typeof a[s] < "u" && !a[i] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function to(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const jm = typeof window < "u" ? E.useLayoutEffect : E.useEffect, sn = jm;
let Ul = 0;
function Bm(e) {
  const [t, n] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (Ul += 1, n(`mui-${Ul}`));
  }, [t]), r;
}
const Wl = E["useId".toString()];
function vs(e) {
  if (Wl !== void 0) {
    const t = Wl();
    return e ?? t;
  }
  return Bm(e);
}
function nd(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function ir({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = E.useRef(e !== void 0), [a, s] = E.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    E.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = E.useRef(t);
    E.useEffect(() => {
      !i && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = E.useCallback((u) => {
    i || s(u);
  }, []);
  return [l, c];
}
function Ut(e) {
  const t = E.useRef(e);
  return sn(() => {
    t.current = e;
  }), E.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function it(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      to(n, t);
    });
  }, e);
}
let ui = !0, $a = !1, zl;
const Um = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Wm(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Um[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function zm(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ui = !0);
}
function Ki() {
  ui = !1;
}
function Vm() {
  this.visibilityState === "hidden" && $a && (ui = !0);
}
function qm(e) {
  e.addEventListener("keydown", zm, !0), e.addEventListener("mousedown", Ki, !0), e.addEventListener("pointerdown", Ki, !0), e.addEventListener("touchstart", Ki, !0), e.addEventListener("visibilitychange", Vm, !0);
}
function Hm(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ui || Wm(t);
}
function rd() {
  const e = E.useCallback((i) => {
    i != null && qm(i.ownerDocument);
  }, []), t = E.useRef(!1);
  function n() {
    return t.current ? ($a = !0, window.clearTimeout(zl), zl = window.setTimeout(() => {
      $a = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(i) {
    return Hm(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function od(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Ym = (e) => {
  const t = E.useRef({});
  return E.useEffect(() => {
    t.current = e;
  }), t.current;
}, Gm = Ym;
function Km(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Qm(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Xm = Number.isInteger || Qm;
function id(e, t, n, r) {
  const i = e[t];
  if (i == null || !Xm(i)) {
    const a = Km(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function ad(e, t, ...n) {
  return e[t] === void 0 ? null : id(e, t, ...n);
}
function Aa() {
  return null;
}
ad.isRequired = id;
Aa.isRequired = Aa;
const gs = process.env.NODE_ENV === "production" ? Aa : ad;
function sd(e, t) {
  const n = T({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = T({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, a = t[r];
      n[r] = {}, !a || !Object.keys(a) ? n[r] = i : !i || !Object.keys(i) ? n[r] = a : (n[r] = T({}, a), Object.keys(i).forEach((s) => {
        n[r][s] = sd(i[s], a[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Ye(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((a, s) => {
        if (s) {
          const l = t(s);
          l !== "" && a.push(l), n && n[s] && a.push(n[s]);
        }
        return a;
      }, []).join(" ");
    }
  ), r;
}
const Vl = (e) => e, Jm = () => {
  let e = Vl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Vl;
    }
  };
}, Zm = Jm(), ld = Zm, eh = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  readOnly: "readOnly",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function ze(e, t, n = "Mui") {
  const r = eh[t];
  return r ? `${n}-${r}` : `${ld.generate(e)}-${t}`;
}
function Ve(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ze(e, i, n);
  }), r;
}
const di = "$$material";
function ge(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function th(e) {
  return e == null || Object.keys(e).length === 0;
}
function cd(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ w(am, {
    styles: typeof t == "function" ? (i) => t(th(i) ? n : i) : t
  });
}
process.env.NODE_ENV !== "production" && (cd.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function nh(e, t) {
  const n = hm(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const rh = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, oh = ["values", "unit", "step"], ih = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => T({}, n, {
    [r.key]: r.val
  }), {});
};
function ah(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, i = ge(e, oh), a = ih(t), s = Object.keys(a);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, h) {
    const v = s.indexOf(h);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : h) - r / 100}${n})`;
  }
  function d(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const h = s.indexOf(p);
    return h === 0 ? l(s[1]) : h === s.length - 1 ? c(s[h]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return T({
    keys: s,
    values: a,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n
  }, i);
}
const sh = {
  borderRadius: 4
}, lh = sh, ch = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, On = ch;
function Ur(e, t) {
  return t ? kt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const bs = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ql = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${bs[e]}px)`
};
function Dt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || ql;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || ql;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(a.values || bs).indexOf(l) !== -1) {
        const c = a.up(l);
        s[c] = n(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function uh(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function dh(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function fh(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, a) => {
    a < e.length && (n[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (n[i] = !0);
  }), n;
}
function fi({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || fh(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let a;
  return i.reduce((s, l, c) => (Array.isArray(e) ? (s[l] = e[c] != null ? e[c] : e[a], a = c) : typeof e == "object" ? (s[l] = e[l] != null ? e[l] : e[a], a = l) : s[l] = e, s), {});
}
function pi(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Ho(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = pi(e, n) || r, t && (i = t(i, r, e)), i;
}
function Be(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = pi(c, r) || {};
    return Dt(s, l, (f) => {
      let p = Ho(u, i, f);
      return f === p && typeof f == "string" && (p = Ho(u, i, `${t}${f === "default" ? "" : me(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: On
  } : {}, a.filterProps = [t], a;
}
function ph(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const mh = {
  m: "margin",
  p: "padding"
}, hh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Hl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, yh = ph((e) => {
  if (e.length > 2)
    if (Hl[e])
      e = Hl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = mh[t], i = hh[n] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), mi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], hi = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], vh = [...mi, ...hi];
function yo(e, t, n, r) {
  var i;
  const a = (i = pi(e, t, !1)) != null ? i : n;
  return typeof a == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), a * s) : Array.isArray(a) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > a.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${s} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), a[s]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ud(e) {
  return yo(e, "spacing", 8, "spacing");
}
function vo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function gh(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = vo(t, n), r), {});
}
function bh(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = yh(n), a = gh(i, r), s = e[n];
  return Dt(e, s, a);
}
function dd(e, t) {
  const n = ud(e.theme);
  return Object.keys(e).map((r) => bh(e, t, r, n)).reduce(Ur, {});
}
function Xe(e) {
  return dd(e, mi);
}
Xe.propTypes = process.env.NODE_ENV !== "production" ? mi.reduce((e, t) => (e[t] = On, e), {}) : {};
Xe.filterProps = mi;
function Je(e) {
  return dd(e, hi);
}
Je.propTypes = process.env.NODE_ENV !== "production" ? hi.reduce((e, t) => (e[t] = On, e), {}) : {};
Je.filterProps = hi;
process.env.NODE_ENV !== "production" && vh.reduce((e, t) => (e[t] = On, e), {});
function Eh(e = 8) {
  if (e.mui)
    return e;
  const t = ud({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function yi(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, a) => t[a] ? Ur(i, t[a](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Yt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const xh = Be({
  prop: "border",
  themeKey: "borders",
  transform: Yt
}), Oh = Be({
  prop: "borderTop",
  themeKey: "borders",
  transform: Yt
}), wh = Be({
  prop: "borderRight",
  themeKey: "borders",
  transform: Yt
}), Sh = Be({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Yt
}), Th = Be({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Yt
}), Ch = Be({
  prop: "borderColor",
  themeKey: "palette"
}), Rh = Be({
  prop: "borderTopColor",
  themeKey: "palette"
}), Ph = Be({
  prop: "borderRightColor",
  themeKey: "palette"
}), $h = Be({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Ah = Be({
  prop: "borderLeftColor",
  themeKey: "palette"
}), vi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = yo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: vo(t, r)
    });
    return Dt(e, e.borderRadius, n);
  }
  return null;
};
vi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: On
} : {};
vi.filterProps = ["borderRadius"];
yi(xh, Oh, wh, Sh, Th, Ch, Rh, Ph, $h, Ah, vi);
const gi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = yo(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: vo(t, r)
    });
    return Dt(e, e.gap, n);
  }
  return null;
};
gi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: On
} : {};
gi.filterProps = ["gap"];
const bi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = yo(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: vo(t, r)
    });
    return Dt(e, e.columnGap, n);
  }
  return null;
};
bi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: On
} : {};
bi.filterProps = ["columnGap"];
const Ei = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = yo(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: vo(t, r)
    });
    return Dt(e, e.rowGap, n);
  }
  return null;
};
Ei.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: On
} : {};
Ei.filterProps = ["rowGap"];
const Ih = Be({
  prop: "gridColumn"
}), Nh = Be({
  prop: "gridRow"
}), kh = Be({
  prop: "gridAutoFlow"
}), Mh = Be({
  prop: "gridAutoColumns"
}), _h = Be({
  prop: "gridAutoRows"
}), Dh = Be({
  prop: "gridTemplateColumns"
}), Fh = Be({
  prop: "gridTemplateRows"
}), Lh = Be({
  prop: "gridTemplateAreas"
}), jh = Be({
  prop: "gridArea"
});
yi(gi, bi, Ei, Ih, Nh, kh, Mh, _h, Dh, Fh, Lh, jh);
function ar(e, t) {
  return t === "grey" ? t : e;
}
const Bh = Be({
  prop: "color",
  themeKey: "palette",
  transform: ar
}), Uh = Be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ar
}), Wh = Be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ar
});
yi(Bh, Uh, Wh);
function Rt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const zh = Be({
  prop: "width",
  transform: Rt
}), Es = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r;
      return {
        maxWidth: ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || bs[n] || Rt(n)
      };
    };
    return Dt(e, e.maxWidth, t);
  }
  return null;
};
Es.filterProps = ["maxWidth"];
const Vh = Be({
  prop: "minWidth",
  transform: Rt
}), qh = Be({
  prop: "height",
  transform: Rt
}), Hh = Be({
  prop: "maxHeight",
  transform: Rt
}), Yh = Be({
  prop: "minHeight",
  transform: Rt
});
Be({
  prop: "size",
  cssProperty: "width",
  transform: Rt
});
Be({
  prop: "size",
  cssProperty: "height",
  transform: Rt
});
const Gh = Be({
  prop: "boxSizing"
});
yi(zh, Es, Vh, qh, Hh, Yh, Gh);
const Kh = {
  // borders
  border: {
    themeKey: "borders",
    transform: Yt
  },
  borderTop: {
    themeKey: "borders",
    transform: Yt
  },
  borderRight: {
    themeKey: "borders",
    transform: Yt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Yt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Yt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: vi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ar
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ar
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ar
  },
  // spacing
  p: {
    style: Je
  },
  pt: {
    style: Je
  },
  pr: {
    style: Je
  },
  pb: {
    style: Je
  },
  pl: {
    style: Je
  },
  px: {
    style: Je
  },
  py: {
    style: Je
  },
  padding: {
    style: Je
  },
  paddingTop: {
    style: Je
  },
  paddingRight: {
    style: Je
  },
  paddingBottom: {
    style: Je
  },
  paddingLeft: {
    style: Je
  },
  paddingX: {
    style: Je
  },
  paddingY: {
    style: Je
  },
  paddingInline: {
    style: Je
  },
  paddingInlineStart: {
    style: Je
  },
  paddingInlineEnd: {
    style: Je
  },
  paddingBlock: {
    style: Je
  },
  paddingBlockStart: {
    style: Je
  },
  paddingBlockEnd: {
    style: Je
  },
  m: {
    style: Xe
  },
  mt: {
    style: Xe
  },
  mr: {
    style: Xe
  },
  mb: {
    style: Xe
  },
  ml: {
    style: Xe
  },
  mx: {
    style: Xe
  },
  my: {
    style: Xe
  },
  margin: {
    style: Xe
  },
  marginTop: {
    style: Xe
  },
  marginRight: {
    style: Xe
  },
  marginBottom: {
    style: Xe
  },
  marginLeft: {
    style: Xe
  },
  marginX: {
    style: Xe
  },
  marginY: {
    style: Xe
  },
  marginInline: {
    style: Xe
  },
  marginInlineStart: {
    style: Xe
  },
  marginInlineEnd: {
    style: Xe
  },
  marginBlock: {
    style: Xe
  },
  marginBlockStart: {
    style: Xe
  },
  marginBlockEnd: {
    style: Xe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gi
  },
  rowGap: {
    style: Ei
  },
  columnGap: {
    style: bi
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Rt
  },
  maxWidth: {
    style: Es
  },
  minWidth: {
    transform: Rt
  },
  height: {
    transform: Rt
  },
  maxHeight: {
    transform: Rt
  },
  minHeight: {
    transform: Rt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, xi = Kh;
function Qh(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Xh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jh() {
  function e(n, r, i, a) {
    const s = {
      [n]: r,
      theme: i
    }, l = a[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = pi(i, u) || {};
    return f ? f(s) : Dt(s, r, (v) => {
      let y = Ho(p, d, v);
      return v === y && typeof v == "string" && (y = Ho(p, d, `${n}${v === "default" ? "" : me(v)}`, v)), c === !1 ? y : {
        [c]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: a = {}
    } = n || {};
    if (!i)
      return null;
    const s = (r = a.unstable_sxConfig) != null ? r : xi;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(a);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = uh(a.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((h) => {
        const v = Xh(u[h], a);
        if (v != null)
          if (typeof v == "object")
            if (s[h])
              p = Ur(p, e(h, v, a, s));
            else {
              const y = Dt({
                theme: a
              }, v, (m) => ({
                [h]: m
              }));
              Qh(y, v) ? p[h] = t({
                sx: v,
                theme: a
              }) : p = Ur(p, y);
            }
          else
            p = Ur(p, e(h, v, a, s));
      }), dh(f, p);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const fd = Jh();
fd.filterProps = ["sx"];
const xs = fd, Zh = ["breakpoints", "palette", "spacing", "shape"];
function Os(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: a = {}
  } = e, s = ge(e, Zh), l = ah(n), c = Eh(i);
  let u = kt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: T({
      mode: "light"
    }, r),
    spacing: c,
    shape: T({}, lh, a)
  }, s);
  return u = t.reduce((d, f) => kt(d, f), u), u.unstable_sxConfig = T({}, xi, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return xs({
      sx: f,
      theme: this
    });
  }, u;
}
function ey(e) {
  return Object.keys(e).length === 0;
}
function pd(e = null) {
  const t = E.useContext(sm);
  return !t || ey(t) ? e : t;
}
const ty = Os();
function ws(e = ty) {
  return pd(e);
}
function md({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ws(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ w(cd, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (md.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const ny = ["sx"], ry = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : xi;
  return Object.keys(e).forEach((a) => {
    i[a] ? r.systemProps[a] = e[a] : r.otherProps[a] = e[a];
  }), r;
};
function oy(e) {
  const {
    sx: t
  } = e, n = ge(e, ny), {
    systemProps: r,
    otherProps: i
  } = ry(n);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...s) => {
    const l = t(...s);
    return In(l) ? T({}, r, l) : r;
  } : a = T({}, r, t), T({}, i, {
    sx: a
  });
}
function hd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = hd(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function be() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = hd(e)) && (r && (r += " "), r += t);
  return r;
}
const iy = ["variant"];
function Yl(e) {
  return e.length === 0;
}
function yd(e) {
  const {
    variant: t
  } = e, n = ge(e, iy);
  let r = t || "";
  return Object.keys(n).sort().forEach((i) => {
    i === "color" ? r += Yl(r) ? e[i] : me(e[i]) : r += `${Yl(r) ? i : me(i)}${me(e[i].toString())}`;
  }), r;
}
const ay = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function sy(e) {
  return Object.keys(e).length === 0;
}
function ly(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const cy = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, uy = (e, t) => {
  let n = [];
  t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
  const r = {};
  return n.forEach((i) => {
    const a = yd(i.props);
    r[a] = i.style;
  }), r;
}, dy = (e, t, n, r) => {
  var i;
  const {
    ownerState: a = {}
  } = e, s = [], l = n == null || (i = n.components) == null || (i = i[r]) == null ? void 0 : i.variants;
  return l && l.forEach((c) => {
    let u = !0;
    Object.keys(c.props).forEach((d) => {
      a[d] !== c.props[d] && e[d] !== c.props[d] && (u = !1);
    }), u && s.push(t[yd(c.props)]);
  }), s;
};
function Wr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const fy = Os(), Gl = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ar({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return sy(t) ? e : t[n] || t;
}
function py(e) {
  return e ? (t, n) => n[e] : null;
}
function my(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = fy,
    rootShouldForwardProp: r = Wr,
    slotShouldForwardProp: i = Wr
  } = e, a = (s) => xs(T({}, s, {
    theme: Ar(T({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return a.__mui_systemSx = !0, (s, l = {}) => {
    rh(s, (b) => b.filter((g) => !(g != null && g.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = py(Gl(u))
    } = l, h = ge(l, ay), v = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${Gl(u || "Root")}`);
    let O = Wr;
    u === "Root" || u === "root" ? O = r : u ? O = i : ly(s) && (O = void 0);
    const C = nh(s, T({
      shouldForwardProp: O,
      label: m
    }, h)), x = (b, ...g) => {
      const R = g ? g.map((N) => typeof N == "function" && N.__emotion_real !== N ? (M) => N(T({}, M, {
        theme: Ar(T({}, M, {
          defaultTheme: n,
          themeId: t
        }))
      })) : N) : [];
      let P = b;
      c && p && R.push((N) => {
        const M = Ar(T({}, N, {
          defaultTheme: n,
          themeId: t
        })), q = cy(c, M);
        if (q) {
          const z = {};
          return Object.entries(q).forEach(([L, D]) => {
            z[L] = typeof D == "function" ? D(T({}, N, {
              theme: M
            })) : D;
          }), p(N, z);
        }
        return null;
      }), c && !v && R.push((N) => {
        const M = Ar(T({}, N, {
          defaultTheme: n,
          themeId: t
        }));
        return dy(N, uy(c, M), M, c);
      }), y || R.push(a);
      const $ = R.length - g.length;
      if (Array.isArray(b) && $ > 0) {
        const N = new Array($).fill("");
        P = [...b, ...N], P.raw = [...b.raw, ...N];
      } else
        typeof b == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        b.__emotion_real !== b && (P = (N) => b(T({}, N, {
          theme: Ar(T({}, N, {
            defaultTheme: n,
            themeId: t
          }))
        })));
      const F = C(P, ...R);
      if (process.env.NODE_ENV !== "production") {
        let N;
        c && (N = `${c}${me(u || "")}`), N === void 0 && (N = `Styled(${Dm(s)})`), F.displayName = N;
      }
      return s.muiName && (F.muiName = s.muiName), F;
    };
    return C.withConfig && (x.withConfig = C.withConfig), x;
  };
}
function hy(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : sd(t.components[n].defaultProps, r);
}
function yy({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = ws(n);
  return r && (i = i[r] || i), hy({
    theme: i,
    name: t,
    props: e
  });
}
function Ss(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function vy(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ln(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ln(vy(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : bn(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : bn(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
function Oi(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function gy(e) {
  e = Ln(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (u, d = (u + n / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Oi({
    type: l,
    values: c
  });
}
function Kl(e) {
  e = Ln(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ln(gy(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ql(e, t) {
  const n = Kl(e), r = Kl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function pt(e, t) {
  return e = Ln(e), t = Ss(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Oi(e);
}
function by(e, t) {
  if (e = Ln(e), t = Ss(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Oi(e);
}
function Ey(e, t) {
  if (e = Ln(e), t = Ss(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Oi(e);
}
function xy(e, t) {
  return T({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Oy = {
  black: "#000",
  white: "#fff"
}, no = Oy, wy = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Sy = wy, Ty = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Kn = Ty, Cy = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Qn = Cy, Ry = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Ir = Ry, Py = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Xn = Py, $y = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Jn = $y, Ay = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Zn = Ay, Iy = ["mode", "contrastThreshold", "tonalOffset"], Xl = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: no.white,
    default: no.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Qi = {
  text: {
    primary: no.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: no.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Jl(e, t, n, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Ey(e.main, i) : t === "dark" && (e.dark = by(e.main, a)));
}
function Ny(e = "light") {
  return e === "dark" ? {
    main: Xn[200],
    light: Xn[50],
    dark: Xn[400]
  } : {
    main: Xn[700],
    light: Xn[400],
    dark: Xn[800]
  };
}
function ky(e = "light") {
  return e === "dark" ? {
    main: Kn[200],
    light: Kn[50],
    dark: Kn[400]
  } : {
    main: Kn[500],
    light: Kn[300],
    dark: Kn[700]
  };
}
function My(e = "light") {
  return e === "dark" ? {
    main: Qn[500],
    light: Qn[300],
    dark: Qn[700]
  } : {
    main: Qn[700],
    light: Qn[400],
    dark: Qn[800]
  };
}
function _y(e = "light") {
  return e === "dark" ? {
    main: Jn[400],
    light: Jn[300],
    dark: Jn[700]
  } : {
    main: Jn[700],
    light: Jn[500],
    dark: Jn[900]
  };
}
function Dy(e = "light") {
  return e === "dark" ? {
    main: Zn[400],
    light: Zn[300],
    dark: Zn[700]
  } : {
    main: Zn[800],
    light: Zn[500],
    dark: Zn[900]
  };
}
function Fy(e = "light") {
  return e === "dark" ? {
    main: Ir[400],
    light: Ir[300],
    dark: Ir[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ir[500],
    dark: Ir[900]
  };
}
function Ly(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = ge(e, Iy), a = e.primary || Ny(t), s = e.secondary || ky(t), l = e.error || My(t), c = e.info || _y(t), u = e.success || Dy(t), d = e.warning || Fy(t);
  function f(y) {
    const m = Ql(y, Qi.text.primary) >= n ? Qi.text.primary : Xl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = Ql(y, m);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${m} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const p = ({
    color: y,
    name: m,
    mainShade: O = 500,
    lightShade: C = 300,
    darkShade: x = 700
  }) => {
    if (y = T({}, y), !y.main && y[O] && (y.main = y[O]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : bn(11, m ? ` (${m})` : "", O));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : bn(12, m ? ` (${m})` : "", JSON.stringify(y.main)));
    return Jl(y, "light", C, r), Jl(y, "dark", x, r), y.contrastText || (y.contrastText = f(y.main)), y;
  }, h = {
    dark: Qi,
    light: Xl
  };
  return process.env.NODE_ENV !== "production" && (h[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), kt(T({
    // A collection of common colors.
    common: T({}, no),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Sy,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, h[t]), i);
}
const jy = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function By(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zl = {
  textTransform: "uppercase"
}, ec = '"Roboto", "Helvetica", "Arial", sans-serif';
function Uy(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = ec,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f
  } = n, p = ge(n, jy);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = i / 14, v = f || ((O) => `${O / u * h}rem`), y = (O, C, x, b, g) => T({
    fontFamily: r,
    fontWeight: O,
    fontSize: v(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x
  }, r === ec ? {
    letterSpacing: `${By(b / C)}em`
  } : {}, g, d), m = {
    h1: y(a, 96, 1.167, -1.5),
    h2: y(a, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(l, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(l, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(l, 14, 1.75, 0.4, Zl),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Zl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return kt(T({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: a,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, m), p, {
    clone: !1
    // No need to clone deep
  });
}
const Wy = 0.2, zy = 0.14, Vy = 0.12;
function Ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Wy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${zy})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Vy})`].join(",");
}
const qy = ["none", Ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Hy = qy, Yy = ["duration", "easing", "delay"], Gy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ky = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function tc(e) {
  return `${Math.round(e)}ms`;
}
function Qy(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Xy(e) {
  const t = T({}, Gy, e.easing), n = T({}, Ky, e.duration);
  return T({
    getAutoHeightDuration: Qy,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = a, u = ge(a, Yy);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !isNaN(parseFloat(p));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof s == "string" ? s : tc(s)} ${l} ${typeof c == "string" ? c : tc(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Jy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Zy = Jy, ev = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function tv(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: a = {}
  } = e, s = ge(e, ev);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : bn(18));
  const l = Ly(r), c = Os(e);
  let u = kt(c, {
    mixins: xy(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Hy.slice(),
    typography: Uy(l, a),
    transitions: Xy(i),
    zIndex: T({}, Zy)
  });
  if (u = kt(u, s), u = t.reduce((d, f) => kt(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (p, h) => {
      let v;
      for (v in p) {
        const y = p[v];
        if (d.indexOf(v) !== -1 && Object.keys(y).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = ze("", v);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: y
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[v] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const h = u.components[p].styleOverrides;
      h && p.indexOf("Mui") === 0 && f(h, p);
    });
  }
  return u.unstable_sxConfig = T({}, xi, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return xs({
      sx: f,
      theme: this
    });
  }, u;
}
const nv = tv(), wi = nv;
function zn() {
  const e = ws(wi);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[di] || e;
}
function Ge({
  props: e,
  name: t
}) {
  return yy({
    props: e,
    name: t,
    defaultTheme: wi,
    themeId: di
  });
}
const wn = (e) => Wr(e) && e !== "classes", rv = Wr, ov = my({
  themeId: di,
  defaultTheme: wi,
  rootShouldForwardProp: wn
}), he = ov, iv = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, nc = iv, vd = ({
  children: e,
  style: t,
  sx: n,
  component: r,
  onSubmit: i,
  mb: a,
  mt: s,
  isLoading: l = !1,
  ...c
}) => {
  const u = zn();
  return /* @__PURE__ */ pe(
    ls,
    {
      sx: {
        position: "relative",
        padding: "1rem",
        marginBottom: a ? u.spacing(a) : 0,
        marginTop: s ? u.spacing(s) : 0,
        minHeight: l ? "100px" : "auto",
        borderRadius: "8px",
        ...t,
        ...n
      },
      component: r,
      onSubmit: i,
      ...c,
      children: [
        l && /* @__PURE__ */ w(Wn, {}),
        e
      ]
    }
  );
};
vd.propTypes = {
  children: o.node,
  style: o.object,
  sx: o.object,
  component: o.elementType,
  onSubmit: o.func,
  isLoading: o.bool,
  marginBottom: o.string,
  marginTop: o.string,
  mb: o.number,
  mt: o.number
};
const Ts = ({
  open: e,
  onClose: t,
  children: n,
  style: r,
  renderBox: i = !0,
  disableCloseOnBackdropClick: a = !1,
  isLoading: s = !1,
  ...l
}) => {
  const c = (u, d) => {
    a && d === "backdropClick" || t(u, d);
  };
  return /* @__PURE__ */ w(
    Lp,
    {
      disableAutoFocus: !0,
      open: e,
      onClose: c,
      style: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      ...l,
      children: /* @__PURE__ */ pe(wa, { sx: { position: "relative" }, children: [
        s && /* @__PURE__ */ w(Wn, {}),
        i ? /* @__PURE__ */ w(vd, { style: r, children: n }) : /* @__PURE__ */ w("div", { style: r, children: n }),
        /* @__PURE__ */ w(
          Xr,
          {
            onClick: c,
            sx: {
              position: "absolute",
              top: 2,
              right: 2
            },
            children: /* @__PURE__ */ w(lm, {})
          }
        )
      ] })
    }
  );
};
Ts.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  children: o.node.isRequired,
  style: o.object,
  renderBox: o.bool,
  disableCloseOnBackdropClick: o.bool,
  isLoading: o.bool
};
const gd = ({
  open: e,
  title: t,
  description: n,
  onConfirm: r,
  onCancel: i,
  isLoading: a,
  error: s,
  children: l,
  sx: c
}) => {
  const u = () => {
    typeof r == "function" && r();
  }, d = () => {
    !a && i && i();
  };
  return /* @__PURE__ */ pe(
    Ts,
    {
      open: e,
      onClose: d,
      sx: {
        margin: "0 auto",
        maxWidth: 400,
        ...c
      },
      children: [
        a && /* @__PURE__ */ w(Wn, {}),
        /* @__PURE__ */ w(xt, { fontWeight: "bold", variant: "h6", mb: 1, children: /* @__PURE__ */ w("strong", { children: t ?? "" }) }),
        /* @__PURE__ */ w(ci, { sx: { mb: 2 } }),
        /* @__PURE__ */ w(Qe, { mb: 1, fontSize: 16, textAlign: "center", children: n ?? "" }),
        /* @__PURE__ */ pe(Qe, { direction: "column", mb: 2, children: [
          l,
          s && /* @__PURE__ */ pe(Qe, { alignItems: "center", direction: "row", mt: 1, children: [
            /* @__PURE__ */ w(
              Vu,
              {
                color: "error",
                sx: { marginRight: ".5rem", fontSize: "2rem" }
              }
            ),
            /* @__PURE__ */ w(xt, { color: "error", fontSize: "16px", children: typeof s == "string" ? s : "Ocurrió un error, intente nuevamente." })
          ] })
        ] }),
        /* @__PURE__ */ pe(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "end"
            },
            children: [
              /* @__PURE__ */ w(Sa, { color: "secondary", onClick: d, disabled: a, children: "Cancelar" }),
              /* @__PURE__ */ w(Sa, { onClick: u, disabled: a, children: s ? "Reintentar" : "Confirmar" })
            ]
          }
        )
      ]
    }
  );
};
gd.propTypes = {
  open: o.bool.isRequired,
  title: o.string,
  description: o.oneOfType([o.string, o.node]),
  onConfirm: o.func,
  onCancel: o.func,
  isLoading: o.bool,
  error: o.string,
  children: o.node,
  sx: o.object
};
const Yo = ({ name: e, profile_picture: t, size: n = 120, sx: r, ...i }) => /* @__PURE__ */ w(
  jp,
  {
    alt: e,
    src: (t == null ? void 0 : t.url) ?? "/default-avatar.png",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "bottom",
      width: n,
      height: n,
      fontSize: n / 2,
      ...r
    },
    ...i
  }
);
Yo.propTypes = {
  profile_picture: o.shape({
    url: o.string
  }),
  size: o.number,
  sx: o.object,
  name: o.string
};
function av(e) {
  const { children: t, value: n, index: r, ...i } = e;
  return /* @__PURE__ */ w("div", { role: "tabpanel", hidden: n !== r, ...i, children: n === r && t });
}
av.propTypes = {
  index: o.number,
  value: o.any,
  children: o.node
};
const Cs = (e) => {
  const t = zn(), { orderBy: n, orderDirection: r, headCells: i, handleSortRequest: a } = e, s = (l) => (c) => {
    a(c, l);
  };
  return /* @__PURE__ */ w(Bp, { sx: { backgroundColor: t.palette.table.header }, children: /* @__PURE__ */ w(Jr, { children: i.map((l) => /* @__PURE__ */ w(Zr, { component: "th", width: l.width, children: l.isSortable ? /* @__PURE__ */ w(
    Up,
    {
      active: n === l.id,
      direction: n === l.id ? r : "asc",
      onClick: s(l.id),
      children: l.label
    }
  ) : /* @__PURE__ */ w("span", { children: l.label }) }, l.id)) }) });
};
Cs.propTypes = {
  orderBy: o.string,
  orderDirection: o.string,
  headCells: o.array,
  handleSortRequest: o.func
};
const sv = ({
  defaultChecked: e = !1,
  name: t,
  labelText: n = "",
  labelPlacement: r = "end",
  ...i
}) => {
  const { control: a } = po();
  return /* @__PURE__ */ w(fo, { children: /* @__PURE__ */ w(
    mo,
    {
      control: a,
      name: t,
      defaultValue: e,
      render: ({ field: s }) => /* @__PURE__ */ w(
        Fu,
        {
          labelPlacement: r,
          control: /* @__PURE__ */ w(
            Wp,
            {
              ref: s.ref,
              onChange: (l) => s.onChange(l.target.checked),
              checked: !!s.value,
              name: t,
              ...i
            }
          ),
          label: n
        }
      )
    }
  ) });
};
sv.propTypes = {
  control: o.object.isRequired,
  defaultChecked: o.bool,
  name: o.string.isRequired,
  labelText: o.string,
  fullWidth: o.bool,
  labelPlacement: o.string
};
const lv = ({
  name: e,
  labelText: t = "",
  required: n,
  fullWidth: r = !0,
  InputProps: i,
  InputLabelProps: a,
  parentRef: s,
  multiline: l,
  rows: c,
  helperText: u,
  ...d
}) => {
  const { control: f } = po();
  return /* @__PURE__ */ w(fo, { fullWidth: r, ...d, children: /* @__PURE__ */ w(
    mo,
    {
      control: f,
      name: e,
      render: ({ field: { onChange: p, onBlur: h, value: v, name: y, ref: m } }) => /* @__PURE__ */ w(
        zp,
        {
          helperText: u,
          multiline: l,
          rows: c,
          required: n,
          label: t,
          onBlur: h,
          onChange: p,
          inputRef: s || m,
          value: v || "",
          name: y,
          InputProps: i,
          InputLabelProps: a,
          ...d
        }
      )
    }
  ) });
};
lv.propTypes = {
  control: o.object.isRequired,
  name: o.string.isRequired,
  labelText: o.string,
  ref: o.object,
  required: o.bool,
  fullWidth: o.bool,
  multiline: o.bool,
  rows: o.number,
  helperText: o.string,
  InputProps: o.object,
  InputLabelProps: o.object,
  parentRef: o.object
};
const cv = ({ open: e, onConfirm: t, children: n }) => {
  const r = () => {
    typeof t == "function" && t();
  };
  return /* @__PURE__ */ pe(
    Ts,
    {
      open: e,
      onClose: r,
      style: {
        maxWidth: "400px"
      },
      children: [
        /* @__PURE__ */ w(xt, { fontWeight: "bold", variant: "h6", mb: 1, color: "error", children: "Error" }),
        /* @__PURE__ */ w(ci, { sx: { mb: 2 } }),
        /* @__PURE__ */ w(Qe, { direction: "column", mb: 2, children: n && /* @__PURE__ */ pe(Qe, { alignItems: "center", children: [
          /* @__PURE__ */ w(Vu, { color: "error", sx: { mb: "1rem", fontSize: "3rem" } }),
          /* @__PURE__ */ w(xt, { color: "error", fontSize: "16px", textAlign: "center", children: n })
        ] }) }),
        /* @__PURE__ */ w(Qe, { direction: "row", justifyContent: "end", children: /* @__PURE__ */ w(Sa, { onClick: r, children: "Aceptar" }) })
      ]
    }
  );
};
cv.propTypes = {
  open: o.bool.isRequired,
  onConfirm: o.func,
  children: o.node
};
function uv({ money: e, ...t }) {
  return /* @__PURE__ */ w(xt, { component: "span", fontSize: 14, ...t, children: Number(e).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS"
  }) });
}
uv.propTypes = {
  money: o.number.isRequired
};
const dv = ({ title: e, renderAside: t }) => /* @__PURE__ */ pe(
  Qe,
  {
    display: "flex",
    direction: { sm: "row", xs: "column" },
    alignItems: { sm: "center", xs: "flex-start" },
    justifyContent: { sm: "space-between", xs: "flex-start" },
    marginBottom: 2,
    children: [
      /* @__PURE__ */ w(xt, { fontWeight: "bold", fontSize: 24, children: e }),
      t && /* @__PURE__ */ w(Qe, { mt: { xs: 2, sm: 0 }, children: t })
    ]
  }
);
dv.propTypes = {
  title: o.string.isRequired,
  renderAside: o.node
};
function fv(e = []) {
  return e.map((t) => /* @__PURE__ */ w(Hp, { value: t.id, children: t.name }, t.id));
}
const bd = ({
  data: e,
  name: t,
  labelText: n = "",
  required: r = !1,
  disabled: i = !1,
  render: a,
  ...s
}) => {
  const l = kp(), c = a || fv, { control: u } = po();
  return /* @__PURE__ */ pe(fo, { fullWidth: !0, children: [
    /* @__PURE__ */ w(Vp, { id: l, required: r, disabled: i, children: n }),
    /* @__PURE__ */ w(
      mo,
      {
        control: u,
        name: t,
        render: ({ field: { onChange: d, onBlur: f, value: p, name: h, ref: v } }) => /* @__PURE__ */ w(
          qp,
          {
            required: r,
            labelId: l,
            label: n,
            onBlur: f,
            onChange: d,
            inputRef: v,
            value: p || "",
            name: h,
            disabled: i,
            ...s,
            children: e.length > 0 && c(e)
          }
        )
      }
    )
  ] });
};
bd.propTypes = {
  control: o.object.isRequired,
  data: o.array,
  name: o.string.isRequired,
  labelText: o.string,
  createOption: o.func,
  required: o.bool,
  disabled: o.bool,
  render: o.func
};
bd.defaultProps = {
  data: []
};
function Go(e) {
  "@babel/helpers - typeof";
  return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Go(e);
}
function xn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function dt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function At(e) {
  dt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Go(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function pv(e, t) {
  dt(2, arguments);
  var n = At(e).getTime(), r = xn(t);
  return new Date(n + r);
}
var mv = {};
function go() {
  return mv;
}
function ro(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function rc(e) {
  dt(1, arguments);
  var t = At(e);
  return t.setHours(0, 0, 0, 0), t;
}
var hv = 864e5;
function yv(e, t) {
  dt(2, arguments);
  var n = rc(e), r = rc(t), i = n.getTime() - ro(n), a = r.getTime() - ro(r);
  return Math.round((i - a) / hv);
}
function Ed(e) {
  return dt(1, arguments), e instanceof Date || Go(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ia(e) {
  if (dt(1, arguments), !Ed(e) && typeof e != "number")
    return !1;
  var t = At(e);
  return !isNaN(Number(t));
}
function Na(e, t) {
  dt(2, arguments);
  var n = xn(t);
  return pv(e, -n);
}
var vv = 864e5;
function gv(e) {
  dt(1, arguments);
  var t = At(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), i = n - r;
  return Math.floor(i / vv) + 1;
}
function Ko(e) {
  dt(1, arguments);
  var t = 1, n = At(e), r = n.getUTCDay(), i = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - i), n.setUTCHours(0, 0, 0, 0), n;
}
function xd(e) {
  dt(1, arguments);
  var t = At(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var i = Ko(r), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Ko(a);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function bv(e) {
  dt(1, arguments);
  var t = xd(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Ko(n);
  return r;
}
var Ev = 6048e5;
function xv(e) {
  dt(1, arguments);
  var t = At(e), n = Ko(t).getTime() - bv(t).getTime();
  return Math.round(n / Ev) + 1;
}
function Qo(e, t) {
  var n, r, i, a, s, l, c, u;
  dt(1, arguments);
  var d = go(), f = xn((n = (r = (i = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && i !== void 0 ? i : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = At(e), h = p.getUTCDay(), v = (h < f ? 7 : 0) + h - f;
  return p.setUTCDate(p.getUTCDate() - v), p.setUTCHours(0, 0, 0, 0), p;
}
function Od(e, t) {
  var n, r, i, a, s, l, c, u;
  dt(1, arguments);
  var d = At(e), f = d.getUTCFullYear(), p = go(), h = xn((n = (r = (i = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && i !== void 0 ? i : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(f + 1, 0, h), v.setUTCHours(0, 0, 0, 0);
  var y = Qo(v, t), m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(f, 0, h), m.setUTCHours(0, 0, 0, 0);
  var O = Qo(m, t);
  return d.getTime() >= y.getTime() ? f + 1 : d.getTime() >= O.getTime() ? f : f - 1;
}
function Ov(e, t) {
  var n, r, i, a, s, l, c, u;
  dt(1, arguments);
  var d = go(), f = xn((n = (r = (i = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && i !== void 0 ? i : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Od(e, t), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(p, 0, f), h.setUTCHours(0, 0, 0, 0);
  var v = Qo(h, t);
  return v;
}
var wv = 6048e5;
function Sv(e, t) {
  dt(1, arguments);
  var n = At(e), r = Qo(n, t).getTime() - Ov(n, t).getTime();
  return Math.round(r / wv) + 1;
}
function Ue(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Tv = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), i = r > 0 ? r : 1 - r;
    return Ue(n === "yy" ? i % 100 : i, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Ue(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Ue(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, n) {
    return Ue(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Ue(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Ue(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Ue(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, i = t.getUTCMilliseconds(), a = Math.floor(i * Math.pow(10, r - 3));
    return Ue(a, n.length);
  }
};
const mn = Tv;
var er = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Cv = {
  // Era
  G: function(t, n, r) {
    var i = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(i, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(i, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(i, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var i = t.getUTCFullYear(), a = i > 0 ? i : 1 - i;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return mn.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, i) {
    var a = Od(t, i), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var l = s % 100;
      return Ue(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : Ue(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = xd(t);
    return Ue(r, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return Ue(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var i = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(i);
      case "QQ":
        return Ue(i, 2);
      case "Qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(i, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var i = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(i);
      case "qq":
        return Ue(i, 2);
      case "qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(i, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var i = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return mn.M(t, n);
      case "Mo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(i, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var i = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(i + 1);
      case "LL":
        return Ue(i + 1, 2);
      case "Lo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(i, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, i) {
    var a = Sv(t, i);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ue(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var i = xv(t);
    return n === "Io" ? r.ordinalNumber(i, {
      unit: "week"
    }) : Ue(i, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : mn.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var i = gv(t);
    return n === "Do" ? r.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : Ue(i, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var i = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, i) {
    var a = t.getUTCDay(), s = (a - i.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return Ue(s, 2);
      case "eo":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, i) {
    var a = t.getUTCDay(), s = (a - i.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return Ue(s, n.length);
      case "co":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var i = t.getUTCDay(), a = i === 0 ? 7 : i;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return Ue(a, n.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var i = t.getUTCHours(), a = i / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var i = t.getUTCHours(), a;
    switch (i === 12 ? a = er.noon : i === 0 ? a = er.midnight : a = i / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var i = t.getUTCHours(), a;
    switch (i >= 17 ? a = er.evening : i >= 12 ? a = er.afternoon : i >= 4 ? a = er.morning : a = er.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var i = t.getUTCHours() % 12;
      return i === 0 && (i = 12), r.ordinalNumber(i, {
        unit: "hour"
      });
    }
    return mn.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : mn.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var i = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : Ue(i, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var i = t.getUTCHours();
    return i === 0 && (i = 24), n === "ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : Ue(i, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : mn.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : mn.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return mn.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, i) {
    var a = i._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return ic(s);
      case "XXXX":
      case "XX":
        return Pn(s);
      case "XXXXX":
      case "XXX":
      default:
        return Pn(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, i) {
    var a = i._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return ic(s);
      case "xxxx":
      case "xx":
        return Pn(s);
      case "xxxxx":
      case "xxx":
      default:
        return Pn(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, i) {
    var a = i._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + oc(s, ":");
      case "OOOO":
      default:
        return "GMT" + Pn(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, i) {
    var a = i._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + oc(s, ":");
      case "zzzz":
      default:
        return "GMT" + Pn(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, i) {
    var a = i._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return Ue(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, i) {
    var a = i._originalDate || t, s = a.getTime();
    return Ue(s, n.length);
  }
};
function oc(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(i);
  var s = t || "";
  return n + String(i) + s + Ue(a, 2);
}
function ic(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Ue(Math.abs(e) / 60, 2);
  }
  return Pn(e, t);
}
function Pn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", i = Math.abs(e), a = Ue(Math.floor(i / 60), 2), s = Ue(i % 60, 2);
  return r + a + n + s;
}
const Rv = Cv;
var ac = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, wd = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, Pv = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], i = r[1], a = r[2];
  if (!a)
    return ac(t, n);
  var s;
  switch (i) {
    case "P":
      s = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      s = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      s = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      s = n.dateTime({
        width: "full"
      });
      break;
  }
  return s.replace("{{date}}", ac(i, n)).replace("{{time}}", wd(a, n));
}, $v = {
  p: wd,
  P: Pv
};
const Av = $v;
var Iv = ["D", "DD"], Nv = ["YY", "YYYY"];
function kv(e) {
  return Iv.indexOf(e) !== -1;
}
function Mv(e) {
  return Nv.indexOf(e) !== -1;
}
function sc(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var _v = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Dv = function(t, n, r) {
  var i, a = _v[t];
  return typeof a == "string" ? i = a : n === 1 ? i = a.one : i = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const Fv = Dv;
function sr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Lv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, jv = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Bv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Uv = {
  date: sr({
    formats: Lv,
    defaultWidth: "full"
  }),
  time: sr({
    formats: jv,
    defaultWidth: "full"
  }),
  dateTime: sr({
    formats: Bv,
    defaultWidth: "full"
  })
};
const Wv = Uv;
var zv = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Vv = function(t, n, r, i) {
  return zv[t];
};
const qv = Vv;
function Gt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", i;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      i = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var l = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[c] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[u];
  };
}
var Hv = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Yv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Gv = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Kv = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Qv = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Xv = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Jv = function(t, n) {
  var r = Number(t), i = r % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Zv = {
  ordinalNumber: Jv,
  era: Gt({
    values: Hv,
    defaultWidth: "wide"
  }),
  quarter: Gt({
    values: Yv,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Gt({
    values: Gv,
    defaultWidth: "wide"
  }),
  day: Gt({
    values: Kv,
    defaultWidth: "wide"
  }),
  dayPeriod: Gt({
    values: Qv,
    defaultWidth: "wide",
    formattingValues: Xv,
    defaultFormattingWidth: "wide"
  })
};
const eg = Zv;
function Kt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    var s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? ng(l, function(f) {
      return f.test(s);
    }) : tg(l, function(f) {
      return f.test(s);
    }), u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? n.valueCallback(u) : u;
    var d = t.slice(s.length);
    return {
      value: u,
      rest: d
    };
  };
}
function tg(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function ng(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Sd(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var i = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var l = t.slice(i.length);
    return {
      value: s,
      rest: l
    };
  };
}
var rg = /^(\d+)(th|st|nd|rd)?/i, og = /\d+/i, ig = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ag = {
  any: [/^b/i, /^(a|c)/i]
}, sg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, lg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, cg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ug = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, dg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, fg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, pg = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, mg = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, hg = {
  ordinalNumber: Sd({
    matchPattern: rg,
    parsePattern: og,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Kt({
    matchPatterns: ig,
    defaultMatchWidth: "wide",
    parsePatterns: ag,
    defaultParseWidth: "any"
  }),
  quarter: Kt({
    matchPatterns: sg,
    defaultMatchWidth: "wide",
    parsePatterns: lg,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Kt({
    matchPatterns: cg,
    defaultMatchWidth: "wide",
    parsePatterns: ug,
    defaultParseWidth: "any"
  }),
  day: Kt({
    matchPatterns: dg,
    defaultMatchWidth: "wide",
    parsePatterns: fg,
    defaultParseWidth: "any"
  }),
  dayPeriod: Kt({
    matchPatterns: pg,
    defaultMatchWidth: "any",
    parsePatterns: mg,
    defaultParseWidth: "any"
  })
};
const yg = hg;
var vg = {
  code: "en-US",
  formatDistance: Fv,
  formatLong: Wv,
  formatRelative: qv,
  localize: eg,
  match: yg,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Td = vg;
var gg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, bg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Eg = /^'([^]*?)'?$/, xg = /''/g, Og = /[a-zA-Z]/;
function Cd(e, t, n) {
  var r, i, a, s, l, c, u, d, f, p, h, v, y, m, O, C, x, b;
  dt(2, arguments);
  var g = String(t), R = go(), P = (r = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : R.locale) !== null && r !== void 0 ? r : Td, $ = xn((a = (s = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : R.firstWeekContainsDate) !== null && s !== void 0 ? s : (f = R.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!($ >= 1 && $ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var F = xn((h = (v = (y = (m = n == null ? void 0 : n.weekStartsOn) !== null && m !== void 0 ? m : n == null || (O = n.locale) === null || O === void 0 || (C = O.options) === null || C === void 0 ? void 0 : C.weekStartsOn) !== null && y !== void 0 ? y : R.weekStartsOn) !== null && v !== void 0 ? v : (x = R.locale) === null || x === void 0 || (b = x.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(F >= 0 && F <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var N = At(e);
  if (!Ia(N))
    throw new RangeError("Invalid time value");
  var M = ro(N), q = Na(N, M), z = {
    firstWeekContainsDate: $,
    weekStartsOn: F,
    locale: P,
    _originalDate: N
  }, L = g.match(bg).map(function(D) {
    var W = D[0];
    if (W === "p" || W === "P") {
      var H = Av[W];
      return H(D, P.formatLong);
    }
    return D;
  }).join("").match(gg).map(function(D) {
    if (D === "''")
      return "'";
    var W = D[0];
    if (W === "'")
      return wg(D);
    var H = Rv[W];
    if (H)
      return !(n != null && n.useAdditionalWeekYearTokens) && Mv(D) && sc(D, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && kv(D) && sc(D, t, String(e)), H(q, D, P.localize, z);
    if (W.match(Og))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + W + "`");
    return D;
  }).join("");
  return L;
}
function wg(e) {
  var t = e.match(Eg);
  return t ? t[1].replace(xg, "'") : e;
}
function Sg(e, t, n) {
  var r, i, a, s, l, c, u, d, f, p;
  dt(2, arguments);
  var h = At(e), v = At(t), y = go(), m = (r = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : y.locale) !== null && r !== void 0 ? r : Td, O = xn((a = (s = (l = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && l !== void 0 ? l : y.weekStartsOn) !== null && s !== void 0 ? s : (f = y.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!m.localize)
    throw new RangeError("locale must contain localize property");
  if (!m.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!m.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var C = yv(h, v);
  if (isNaN(C))
    throw new RangeError("Invalid time value");
  var x;
  C < -6 ? x = "other" : C < -1 ? x = "lastWeek" : C < 0 ? x = "yesterday" : C < 1 ? x = "today" : C < 2 ? x = "tomorrow" : C < 7 ? x = "nextWeek" : x = "other";
  var b = Na(h, ro(h)), g = Na(v, ro(v)), R = m.formatRelative(x, b, g, {
    locale: m,
    weekStartsOn: O
  });
  return Cd(h, R, {
    locale: m,
    weekStartsOn: O
  });
}
function Tg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ka(e, t) {
  return ka = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ka(e, t);
}
const $t = {
  ASC: "asc",
  DESC: "desc"
};
function Cg(e, t, n, r = $t.ASC, i = null) {
  let a = e[n] ?? "", s = t[n] ?? "";
  if (Ia(new Date(a)) && Ia(new Date(s)))
    return a = new Date(a), s = new Date(s), r === $t.ASC ? a - s : s - a;
  n === "status" && (a = a.deleted_at ? "inactivo" : "activo", s = s.deleted_at ? "inactivo" : "activo"), typeof i == "function" && (a = i(e, n), s = i(t, n)), (typeof a == "object" || typeof s == "object") && (a = a.name, s = s.name), a = String(a).toLowerCase().trim(), s = String(s).toLowerCase().trim();
  const l = a.localeCompare(s);
  return r === $t.ASC ? l : -l;
}
const Rd = Lu({
  palette: {
    mode: "light",
    orange: {
      main: "#ff9800",
      dark: "#b26a00",
      contrastText: "#000"
    },
    cyan: {
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#000"
    },
    purple: {
      main: "#8c54ff",
      contrastText: "#ffffff"
    },
    pink: {
      main: "#ff54a0",
      contrastText: "#ffffff"
    },
    primary: {
      main: "#004e7b",
      light: "#0268a2",
      dark: "#002f4a",
      contrastText: "#ffffff"
    },
    secondary: {
      lighter: "#fafafa",
      light: "#d9d9d9",
      main: "#8c8c8c",
      dark: "#262626",
      darker: "#000000",
      contrastText: "#ffffff"
    },
    cancel: {
      main: "#DADADA",
      light: "#c9c9c9",
      dark: "#c0c0c0",
      contrastText: "#000000"
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff"
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
      disabled: "#545454",
      hint: "#000000"
    },
    success: {
      lighter: "#f0fcf5",
      light: "#6fbf73",
      main: "#4caf50",
      dark: "#357a38",
      darker: "#194D14",
      contrastText: "#ffffff"
    },
    error: {
      lighter: "#fff1f0",
      light: "#f6685e",
      main: "#f44336",
      dark: "#aa2e25",
      darker: "#5c0011",
      contrastText: "#ffffff"
    },
    warning: {
      lighter: "#fffbe6",
      light: "#ffd666",
      main: "#faad14",
      dark: "#faad14",
      darker: "#613400",
      contrastText: "#000000"
    },
    divider: "rgba(0,0,0,0.3)"
  },
  typography: {
    fontSize: 16,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    htmlFontSize: 16,
    marginBottom: 0,
    h1: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "0em"
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "0em"
    },
    h3: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "0em"
    },
    h4: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: "0em"
    },
    h5: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: "0em"
    },
    h6: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: "0em"
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.01,
      letterSpacing: "0em"
    }
  },
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          paddingTop: "0",
          paddingBottom: "0"
        }
      }
    },
    MuiInputBase: {
      defaultProps: {
        size: "small"
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#d20f46",
          "&$error": {
            color: "#d20f46"
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: "translate(14px, 10px) scale(1)"
        },
        shrink: {
          transform: "translate(14px, -9px) scale(0.75)"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        type: "button",
        variant: "contained",
        size: "small"
      },
      styleOverrides: {
        root: {
          padding: "12px 16px",
          lineHeight: "initial",
          textTransform: "initial",
          width: "max-content",
          textDecoration: "none"
        },
        text: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "#002f4a"
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          overflowX: "auto"
        }
      }
    }
  }
}), Rg = (e) => {
  const {
    headCells: t,
    records: n = [],
    defaultRowsPerPage: r = 25,
    isLoading: i = !1,
    onDeleteItem: a = null,
    onEditItem: s = null,
    defaultOrderBy: l = "",
    customPropertiesComparator: c = null,
    defaultOrderDirection: u = $t.ASC,
    Row: d
  } = e, [f, p] = Et(u), [h, v] = Et(l), [y, m] = Et(0), [O, C] = Et(r), x = ($, F) => {
    const N = h === F && f === $t.ASC;
    p(N ? $t.DESC : $t.ASC), v(F);
  }, b = ($, F) => {
    m(F);
  }, g = ($) => {
    C(parseInt($.target.value, 10)), m(0);
  }, P = (() => {
    const $ = n.map((N, M) => [N, M]);
    return $.sort((N, M) => {
      const q = Cg(
        N[0],
        M[0],
        h,
        f,
        c
      );
      return q !== 0 ? q : N[1] - M[1];
    }), $.map((N) => N[0]).slice(
      y * O,
      y * O + O
    );
  })();
  return /* @__PURE__ */ pe(cs, { theme: Rd, children: [
    /* @__PURE__ */ w(ju, { children: /* @__PURE__ */ pe(Bu, { children: [
      /* @__PURE__ */ w(
        Cs,
        {
          headCells: t,
          orderBy: h,
          orderDirection: f,
          handleSortRequest: x
        }
      ),
      /* @__PURE__ */ pe(Uu, { children: [
        i && /* @__PURE__ */ w(Jr, { children: /* @__PURE__ */ w(Zr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ w(Wn, {}) }) }),
        (P == null ? void 0 : P.length) > 0 ? P.map(($) => /* @__PURE__ */ w(
          d,
          {
            data: $,
            onDeleteItem: a,
            onEditItem: s
          },
          $.id
        )) : /* @__PURE__ */ w(Jr, { children: /* @__PURE__ */ w(Zr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ w(xt, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ w(
      Wu,
      {
        rowsPerPage: O,
        page: y,
        count: n.length,
        component: "div",
        rowsPerPageOptions: [5, 10, 25, 50, 100],
        onPageChange: b,
        onRowsPerPageChange: g
      }
    )
  ] });
};
Rg.propTypes = {
  headCells: o.array.isRequired,
  records: o.array,
  customPropertiesComparator: o.func,
  defaultRowsPerPage: o.number,
  isLoading: o.bool,
  onDeleteItem: o.func,
  onEditItem: o.func,
  defaultOrderBy: o.string,
  defaultOrderDirection: o.string,
  Row: o.elementType.isRequired
};
var Pg = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 día",
    other: "{{count}} días"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 año",
    other: "alrededor de {{count}} años"
  },
  xYears: {
    one: "1 año",
    other: "{{count}} años"
  },
  overXYears: {
    one: "más de 1 año",
    other: "más de {{count}} años"
  },
  almostXYears: {
    one: "casi 1 año",
    other: "casi {{count}} años"
  }
}, $g = function(t, n, r) {
  var i, a = Pg[t];
  return typeof a == "string" ? i = a : n === 1 ? i = a.one : i = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + i : "hace " + i : i;
};
const Ag = $g;
var Ig = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Ng = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, kg = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Mg = {
  date: sr({
    formats: Ig,
    defaultWidth: "full"
  }),
  time: sr({
    formats: Ng,
    defaultWidth: "full"
  }),
  dateTime: sr({
    formats: kg,
    defaultWidth: "full"
  })
};
const _g = Mg;
var Dg = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, Fg = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, Lg = function(t, n, r, i) {
  return n.getUTCHours() !== 1 ? Fg[t] : Dg[t];
};
const jg = Lg;
var Bg = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, Ug = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Wg = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, zg = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, Vg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, qg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, Hg = function(t, n) {
  var r = Number(t);
  return r + "º";
}, Yg = {
  ordinalNumber: Hg,
  era: Gt({
    values: Bg,
    defaultWidth: "wide"
  }),
  quarter: Gt({
    values: Ug,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: Gt({
    values: Wg,
    defaultWidth: "wide"
  }),
  day: Gt({
    values: zg,
    defaultWidth: "wide"
  }),
  dayPeriod: Gt({
    values: Vg,
    defaultWidth: "wide",
    formattingValues: qg,
    defaultFormattingWidth: "wide"
  })
};
const Gg = Yg;
var Kg = /^(\d+)(º)?/i, Qg = /\d+/i, Xg = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Jg = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, Zg = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, eb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tb = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, nb = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, rb = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, ob = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, ib = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, ab = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
}, sb = {
  ordinalNumber: Sd({
    matchPattern: Kg,
    parsePattern: Qg,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Kt({
    matchPatterns: Xg,
    defaultMatchWidth: "wide",
    parsePatterns: Jg,
    defaultParseWidth: "any"
  }),
  quarter: Kt({
    matchPatterns: Zg,
    defaultMatchWidth: "wide",
    parsePatterns: eb,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Kt({
    matchPatterns: tb,
    defaultMatchWidth: "wide",
    parsePatterns: nb,
    defaultParseWidth: "any"
  }),
  day: Kt({
    matchPatterns: rb,
    defaultMatchWidth: "wide",
    parsePatterns: ob,
    defaultParseWidth: "any"
  }),
  dayPeriod: Kt({
    matchPatterns: ib,
    defaultMatchWidth: "any",
    parsePatterns: ab,
    defaultParseWidth: "any"
  })
};
const lb = sb;
var cb = {
  code: "es",
  formatDistance: Ag,
  formatLong: _g,
  formatRelative: jg,
  localize: Gg,
  match: lb,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const ub = cb, db = ({ isoDateTimeString: e, relative: t = !1, showTime: n = !0 }) => {
  const r = Ed(e) ? e : new Date(e), i = n ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy";
  return t ? /* @__PURE__ */ w("span", { children: Sg(r, /* @__PURE__ */ new Date(), {
    locale: ub
  }) }) : /* @__PURE__ */ w("span", { children: Cd(r, i) });
};
db.propTypes = {
  isoDateTimeString: o.string.isRequired,
  relative: o.bool,
  showTime: o.bool
};
const fb = ({
  defaultChecked: e = !1,
  name: t,
  labelText: n = "",
  labelPlacement: r = "end",
  ...i
}) => {
  const { control: a } = po();
  return /* @__PURE__ */ w(fo, { children: /* @__PURE__ */ w(
    mo,
    {
      control: a,
      name: t,
      defaultValue: e,
      render: ({ field: s }) => /* @__PURE__ */ w(
        Fu,
        {
          labelPlacement: r,
          control: /* @__PURE__ */ w(
            Yp,
            {
              ref: s.ref,
              onChange: (l) => s.onChange(l.target.checked),
              checked: !!s.value,
              name: t,
              ...i
            }
          ),
          label: n
        }
      )
    }
  ) });
};
fb.propTypes = {
  control: o.object.isRequired,
  defaultChecked: o.bool,
  name: o.string.isRequired,
  labelText: o.string,
  fullWidth: o.bool,
  labelPlacement: o.string
};
class Rs {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    const n = {
      listener: t
    };
    return this.listeners.add(n), this.onSubscribe(), () => {
      this.listeners.delete(n), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const Xo = typeof window > "u" || "Deno" in window;
function pb() {
}
function lc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function mb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function hb(e, t, n) {
  return yb(e) ? typeof t == "function" ? {
    ...n,
    queryKey: e,
    queryFn: t
  } : {
    ...t,
    queryKey: e
  } : e;
}
function Pd(e, t) {
  if (e === t)
    return e;
  const n = cc(e) && cc(t);
  if (n || uc(e) && uc(t)) {
    const r = n ? e.length : Object.keys(e).length, i = n ? t : Object.keys(t), a = i.length, s = n ? [] : {};
    let l = 0;
    for (let c = 0; c < a; c++) {
      const u = n ? c : i[c];
      s[u] = Pd(e[u], t[u]), s[u] === e[u] && l++;
    }
    return r === a && l === r ? e : s;
  }
  return t;
}
function Ma(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function cc(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function uc(e) {
  if (!dc(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const n = t.prototype;
  return !(!dc(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function dc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function yb(e) {
  return Array.isArray(e);
}
function vb(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function fc(e) {
  vb(0).then(e);
}
function pc(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Pd(e, t) : t;
}
class gb extends Rs {
  constructor() {
    super(), this.setup = (t) => {
      if (!Xo && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1), () => {
          window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(t) {
    var n;
    this.setup = t, (n = this.cleanup) == null || n.call(this), this.cleanup = t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    });
  }
  setFocused(t) {
    this.focused !== t && (this.focused = t, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: t
    }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const bb = new gb(), mc = ["online", "offline"];
class Eb extends Rs {
  constructor() {
    super(), this.setup = (t) => {
      if (!Xo && window.addEventListener) {
        const n = () => t();
        return mc.forEach((r) => {
          window.addEventListener(r, n, !1);
        }), () => {
          mc.forEach((r) => {
            window.removeEventListener(r, n);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(t) {
    var n;
    this.setup = t, (n = this.cleanup) == null || n.call(this), this.cleanup = t((r) => {
      typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
    });
  }
  setOnline(t) {
    this.online !== t && (this.online = t, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: t
    }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const xb = new Eb();
function Ob(e) {
  return (e ?? "online") === "online" ? xb.isOnline() : !0;
}
class wb {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
}
function Sb(e) {
  return e instanceof wb;
}
function Tb() {
  let e = [], t = 0, n = (d) => {
    d();
  }, r = (d) => {
    d();
  };
  const i = (d) => {
    let f;
    t++;
    try {
      f = d();
    } finally {
      t--, t || l();
    }
    return f;
  }, a = (d) => {
    t ? e.push(d) : fc(() => {
      n(d);
    });
  }, s = (d) => (...f) => {
    a(() => {
      d(...f);
    });
  }, l = () => {
    const d = e;
    e = [], d.length && fc(() => {
      r(() => {
        d.forEach((f) => {
          n(f);
        });
      });
    });
  };
  return {
    batch: i,
    batchCalls: s,
    schedule: a,
    setNotifyFunction: (d) => {
      n = d;
    },
    setBatchNotifyFunction: (d) => {
      r = d;
    }
  };
}
const Lr = Tb();
class Cb extends Rs {
  constructor(t, n) {
    super(), this.client = t, this.options = n, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), hc(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return _a(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return _a(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, i = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(t), process.env.NODE_ENV !== "production" && typeof (t == null ? void 0 : t.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), Ma(r, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
    const a = this.hasListeners();
    a && yc(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(n), a && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
    const s = this.computeRefetchInterval();
    a && (this.currentQuery !== i || this.options.enabled !== r.enabled || s !== this.currentRefetchInterval) && this.updateRefetchInterval(s);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t), r = this.createResult(n, t);
    return Pb(this, r, t) && (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const n = {};
    return Object.keys(t).forEach((r) => {
      Object.defineProperty(n, r, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(r), t[r])
      });
    }), n;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: t,
    ...n
  } = {}) {
    return this.fetch({
      ...n,
      meta: {
        refetchPage: t
      }
    });
  }
  fetchOptimistic(t) {
    const n = this.client.defaultQueryOptions(t), r = this.client.getQueryCache().build(this.client, n);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    var n;
    return this.executeFetch({
      ...t,
      cancelRefetch: (n = t.cancelRefetch) != null ? n : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, t);
    return t != null && t.throwOnError || (n = n.catch(pb)), n;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), Xo || this.currentResult.isStale || !lc(this.options.staleTime))
      return;
    const n = mb(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (t = this.options.refetchInterval) != null ? t : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(), this.currentRefetchInterval = t, !(Xo || this.options.enabled === !1 || !lc(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || bb.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(t, n) {
    const r = this.currentQuery, i = this.options, a = this.currentResult, s = this.currentResultState, l = this.currentResultOptions, c = t !== r, u = c ? t.state : this.currentQueryInitialState, d = c ? this.currentResult : this.previousQueryResult, {
      state: f
    } = t;
    let {
      dataUpdatedAt: p,
      error: h,
      errorUpdatedAt: v,
      fetchStatus: y,
      status: m
    } = f, O = !1, C = !1, x;
    if (n._optimisticResults) {
      const $ = this.hasListeners(), F = !$ && hc(t, n), N = $ && yc(t, r, n, i);
      (F || N) && (y = Ob(t.options.networkMode) ? "fetching" : "paused", p || (m = "loading")), n._optimisticResults === "isRestoring" && (y = "idle");
    }
    if (n.keepPreviousData && !f.dataUpdatedAt && d != null && d.isSuccess && m !== "error")
      x = d.data, p = d.dataUpdatedAt, m = d.status, O = !0;
    else if (n.select && typeof f.data < "u")
      if (a && f.data === (s == null ? void 0 : s.data) && n.select === this.selectFn)
        x = this.selectResult;
      else
        try {
          this.selectFn = n.select, x = n.select(f.data), x = pc(a == null ? void 0 : a.data, x, n), this.selectResult = x, this.selectError = null;
        } catch ($) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error($), this.selectError = $;
        }
    else
      x = f.data;
    if (typeof n.placeholderData < "u" && typeof x > "u" && m === "loading") {
      let $;
      if (a != null && a.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        $ = a.data;
      else if ($ = typeof n.placeholderData == "function" ? n.placeholderData() : n.placeholderData, n.select && typeof $ < "u")
        try {
          $ = n.select($), this.selectError = null;
        } catch (F) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(F), this.selectError = F;
        }
      typeof $ < "u" && (m = "success", x = pc(a == null ? void 0 : a.data, $, n), C = !0);
    }
    this.selectError && (h = this.selectError, x = this.selectResult, v = Date.now(), m = "error");
    const b = y === "fetching", g = m === "loading", R = m === "error";
    return {
      status: m,
      fetchStatus: y,
      isLoading: g,
      isSuccess: m === "success",
      isError: R,
      isInitialLoading: g && b,
      data: x,
      dataUpdatedAt: p,
      error: h,
      errorUpdatedAt: v,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
      isFetching: b,
      isRefetching: b && !g,
      isLoadingError: R && f.dataUpdatedAt === 0,
      isPaused: y === "paused",
      isPlaceholderData: C,
      isPreviousData: O,
      isRefetchError: R && f.dataUpdatedAt !== 0,
      isStale: Ps(t, n),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(t) {
    const n = this.currentResult, r = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, Ma(r, n))
      return;
    this.currentResult = r;
    const i = {
      cache: !0
    }, a = () => {
      if (!n)
        return !0;
      const {
        notifyOnChangeProps: s
      } = this.options, l = typeof s == "function" ? s() : s;
      if (l === "all" || !l && !this.trackedProps.size)
        return !0;
      const c = new Set(l ?? this.trackedProps);
      return this.options.useErrorBoundary && c.add("error"), Object.keys(this.currentResult).some((u) => {
        const d = u;
        return this.currentResult[d] !== n[d] && c.has(d);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && a() && (i.listeners = !0), this.notify({
      ...i,
      ...t
    });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery)
      return;
    const n = this.currentQuery;
    this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const n = {};
    t.type === "success" ? n.onSuccess = !t.manual : t.type === "error" && !Sb(t.error) && (n.onError = !0), this.updateResult(n), this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    Lr.batch(() => {
      if (t.onSuccess) {
        var n, r, i, a;
        (n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data), (i = (a = this.options).onSettled) == null || i.call(a, this.currentResult.data, null);
      } else if (t.onError) {
        var s, l, c, u;
        (s = (l = this.options).onError) == null || s.call(l, this.currentResult.error), (c = (u = this.options).onSettled) == null || c.call(u, void 0, this.currentResult.error);
      }
      t.listeners && this.listeners.forEach(({
        listener: d
      }) => {
        d(this.currentResult);
      }), t.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function Rb(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function hc(e, t) {
  return Rb(e, t) || e.state.dataUpdatedAt > 0 && _a(e, t, t.refetchOnMount);
}
function _a(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Ps(e, t);
  }
  return !1;
}
function yc(e, t, n, r) {
  return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Ps(e, n);
}
function Ps(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function Pb(e, t, n) {
  return n.keepPreviousData ? !1 : n.placeholderData !== void 0 ? t.isPlaceholderData : !Ma(e.getCurrentResult(), t);
}
var Da = { exports: {} }, Xi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc;
function $b() {
  if (vc)
    return Xi;
  vc = 1;
  var e = Pt;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, i = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function l(f, p) {
    var h = p(), v = r({ inst: { value: h, getSnapshot: p } }), y = v[0].inst, m = v[1];
    return a(function() {
      y.value = h, y.getSnapshot = p, c(y) && m({ inst: y });
    }, [f, h, p]), i(function() {
      return c(y) && m({ inst: y }), f(function() {
        c(y) && m({ inst: y });
      });
    }, [f]), s(h), h;
  }
  function c(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var h = p();
      return !n(f, h);
    } catch {
      return !0;
    }
  }
  function u(f, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : l;
  return Xi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Xi;
}
var Ji = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gc;
function Ab() {
  return gc || (gc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Pt, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var b = arguments.length, g = new Array(b > 1 ? b - 1 : 0), R = 1; R < b; R++)
          g[R - 1] = arguments[R];
        r("error", x, g);
      }
    }
    function r(x, b, g) {
      {
        var R = t.ReactDebugCurrentFrame, P = R.getStackAddendum();
        P !== "" && (b += "%s", g = g.concat([P]));
        var $ = g.map(function(F) {
          return String(F);
        });
        $.unshift("Warning: " + b), Function.prototype.apply.call(console[x], console, $);
      }
    }
    function i(x, b) {
      return x === b && (x !== 0 || 1 / x === 1 / b) || x !== x && b !== b;
    }
    var a = typeof Object.is == "function" ? Object.is : i, s = e.useState, l = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue, d = !1, f = !1;
    function p(x, b, g) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var R = b();
      if (!f) {
        var P = b();
        a(R, P) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var $ = s({
        inst: {
          value: R,
          getSnapshot: b
        }
      }), F = $[0].inst, N = $[1];
      return c(function() {
        F.value = R, F.getSnapshot = b, h(F) && N({
          inst: F
        });
      }, [x, R, b]), l(function() {
        h(F) && N({
          inst: F
        });
        var M = function() {
          h(F) && N({
            inst: F
          });
        };
        return x(M);
      }, [x]), u(R), R;
    }
    function h(x) {
      var b = x.getSnapshot, g = x.value;
      try {
        var R = b();
        return !a(g, R);
      } catch {
        return !0;
      }
    }
    function v(x, b, g) {
      return b();
    }
    var y = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !y, O = m ? v : p, C = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : O;
    Ji.useSyncExternalStore = C, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ji;
}
process.env.NODE_ENV === "production" ? Da.exports = $b() : Da.exports = Ab();
var Ib = Da.exports;
const Nb = Ib.useSyncExternalStore, bc = /* @__PURE__ */ E.createContext(void 0), kb = /* @__PURE__ */ E.createContext(!1);
function Mb(e, t) {
  return e || (t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = bc), window.ReactQueryClientContext) : bc);
}
const _b = ({
  context: e
} = {}) => {
  const t = E.useContext(Mb(e, E.useContext(kb)));
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, $d = /* @__PURE__ */ E.createContext(!1), Db = () => E.useContext($d);
$d.Provider;
function Fb() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
const Lb = /* @__PURE__ */ E.createContext(Fb()), jb = () => E.useContext(Lb);
function Bb(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const Ub = (e, t) => {
  (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
}, Wb = (e) => {
  E.useEffect(() => {
    e.clearReset();
  }, [e]);
}, zb = ({
  result: e,
  errorResetBoundary: t,
  useErrorBoundary: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && Bb(n, [e.error, r]), Vb = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, qb = (e, t) => e.isLoading && e.isFetching && !t, Hb = (e, t, n) => (e == null ? void 0 : e.suspense) && qb(t, n), Yb = (e, t, n) => t.fetchOptimistic(e).then(({
  data: r
}) => {
  e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null);
}).catch((r) => {
  n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r);
});
function Gb(e, t) {
  const n = _b({
    context: e.context
  }), r = Db(), i = jb(), a = n.defaultQueryOptions(e);
  a._optimisticResults = r ? "isRestoring" : "optimistic", a.onError && (a.onError = Lr.batchCalls(a.onError)), a.onSuccess && (a.onSuccess = Lr.batchCalls(a.onSuccess)), a.onSettled && (a.onSettled = Lr.batchCalls(a.onSettled)), Vb(a), Ub(a, i), Wb(i);
  const [s] = E.useState(() => new t(n, a)), l = s.getOptimisticResult(a);
  if (Nb(E.useCallback((c) => {
    const u = r ? () => {
    } : s.subscribe(Lr.batchCalls(c));
    return s.updateResult(), u;
  }, [s, r]), () => s.getCurrentResult(), () => s.getCurrentResult()), E.useEffect(() => {
    s.setOptions(a, {
      listeners: !1
    });
  }, [a, s]), Hb(a, l, r))
    throw Yb(a, s, i);
  if (zb({
    result: l,
    errorResetBoundary: i,
    useErrorBoundary: a.useErrorBoundary,
    query: s.getCurrentQuery()
  }))
    throw l.error;
  return a.notifyOnChangeProps ? l : s.trackResult(l);
}
function Ad(e, t, n) {
  const r = hb(e, t, n);
  return Gb(r, Cb);
}
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fa.apply(this, arguments);
}
var Ec;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ec || (Ec = {}));
function nt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function br(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function La(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Id(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var xc;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(xc || (xc = {}));
function ja(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Kb(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Id(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Qb(n, t) : t,
    search: Xb(r),
    hash: Jb(i)
  };
}
function Qb(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function Zi(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function $s(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function As(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Id(e) : (i = Fa({}, e), nt(!i.pathname || !i.pathname.includes("?"), Zi("?", "pathname", "search", i)), nt(!i.pathname || !i.pathname.includes("#"), Zi("#", "pathname", "hash", i)), nt(!i.search || !i.search.includes("#"), Zi("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "", s = a ? "/" : i.pathname, l;
  if (r || s == null)
    l = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; )
        p.shift(), f -= 1;
      i.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = Kb(i, l), u = s && s !== "/" && s.endsWith("/"), d = (a || s === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Is = (e) => e.join("/").replace(/\/\/+/g, "/"), Xb = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Jb = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Nd = ["post", "put", "patch", "delete"];
new Set(Nd);
const Zb = ["get", ...Nd];
new Set(Zb);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ba.apply(this, arguments);
}
const Si = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Si.displayName = "DataRouter");
const kd = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (kd.displayName = "DataRouterState");
const e0 = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (e0.displayName = "Await");
const cn = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (cn.displayName = "Navigation");
const Ns = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Ns.displayName = "Location");
const Sn = /* @__PURE__ */ E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Sn.displayName = "Route");
const t0 = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (t0.displayName = "RouteError");
function n0(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Ti() || (process.env.NODE_ENV !== "production" ? nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : nt(!1));
  let {
    basename: r,
    navigator: i
  } = E.useContext(cn), {
    hash: a,
    pathname: s,
    search: l
  } = Ri(e, {
    relative: n
  }), c = s;
  return r !== "/" && (c = s === "/" ? r : Is([r, s])), i.createHref({
    pathname: c,
    search: l,
    hash: a
  });
}
function Ti() {
  return E.useContext(Ns) != null;
}
function en() {
  return Ti() || (process.env.NODE_ENV !== "production" ? nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : nt(!1)), E.useContext(Ns).location;
}
const Md = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function _d(e) {
  E.useContext(cn).static || E.useLayoutEffect(e);
}
function Ci() {
  let {
    isDataRoute: e
  } = E.useContext(Sn);
  return e ? c0() : r0();
}
function r0() {
  Ti() || (process.env.NODE_ENV !== "production" ? nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : nt(!1));
  let e = E.useContext(Si), {
    basename: t,
    navigator: n
  } = E.useContext(cn), {
    matches: r
  } = E.useContext(Sn), {
    pathname: i
  } = en(), a = JSON.stringify($s(r).map((c) => c.pathnameBase)), s = E.useRef(!1);
  return _d(() => {
    s.current = !0;
  }), E.useCallback(function(c, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && br(s.current, Md), !s.current)
      return;
    if (typeof c == "number") {
      n.go(c);
      return;
    }
    let d = As(c, JSON.parse(a), i, u.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Is([t, d.pathname])), (u.replace ? n.replace : n.push)(d, u.state, u);
  }, [t, n, a, i, e]);
}
const o0 = /* @__PURE__ */ E.createContext(null);
function i0(e) {
  let t = E.useContext(Sn).outlet;
  return t && /* @__PURE__ */ E.createElement(o0.Provider, {
    value: e
  }, t);
}
function Ri(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    matches: r
  } = E.useContext(Sn), {
    pathname: i
  } = en(), a = JSON.stringify($s(r).map((s) => s.pathnameBase));
  return E.useMemo(() => As(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
var Dd = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Dd || {}), ks = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ks || {});
function Fd(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function a0(e) {
  let t = E.useContext(Si);
  return t || (process.env.NODE_ENV !== "production" ? nt(!1, Fd(e)) : nt(!1)), t;
}
function s0(e) {
  let t = E.useContext(Sn);
  return t || (process.env.NODE_ENV !== "production" ? nt(!1, Fd(e)) : nt(!1)), t;
}
function Ld(e) {
  let t = s0(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? nt(!1, e + ' can only be used on routes that contain a unique "id"') : nt(!1)), n.route.id;
}
function l0() {
  return Ld(ks.UseRouteId);
}
function c0() {
  let {
    router: e
  } = a0(Dd.UseNavigateStable), t = Ld(ks.UseNavigateStable), n = E.useRef(!1);
  return _d(() => {
    n.current = !0;
  }), E.useCallback(function(i, a) {
    a === void 0 && (a = {}), process.env.NODE_ENV !== "production" && br(n.current, Md), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Ba({
      fromRouteId: t
    }, a)));
  }, [e, t]);
}
function jd(e) {
  let {
    to: t,
    replace: n,
    state: r,
    relative: i
  } = e;
  Ti() || (process.env.NODE_ENV !== "production" ? nt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : nt(!1)), process.env.NODE_ENV !== "production" && br(!E.useContext(cn).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: a
  } = E.useContext(Sn), {
    pathname: s
  } = en(), l = Ci(), c = As(t, $s(a).map((d) => d.pathnameBase), s, i === "path"), u = JSON.stringify(c);
  return E.useEffect(() => l(JSON.parse(u), {
    replace: n,
    state: r,
    relative: i
  }), [l, u, i, n, r]), null;
}
function Ms(e) {
  return i0(e.context);
}
new Promise(() => {
});
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function jn() {
  return jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jn.apply(this, arguments);
}
function _s(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const Fo = "get", Lo = "application/x-www-form-urlencoded";
function Pi(e) {
  return e != null && typeof e.tagName == "string";
}
function u0(e) {
  return Pi(e) && e.tagName.toLowerCase() === "button";
}
function d0(e) {
  return Pi(e) && e.tagName.toLowerCase() === "form";
}
function f0(e) {
  return Pi(e) && e.tagName.toLowerCase() === "input";
}
function p0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function m0(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !p0(e);
}
function Ua(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
  }, []));
}
function h0(e, t) {
  let n = Ua(e);
  return t && t.forEach((r, i) => {
    n.has(i) || t.getAll(i).forEach((a) => {
      n.append(i, a);
    });
  }), n;
}
let Po = null;
function y0() {
  if (Po === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Po = !1;
    } catch {
      Po = !0;
    }
  return Po;
}
const v0 = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ea(e) {
  return e != null && !v0.has(e) ? (process.env.NODE_ENV !== "production" && br(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Lo + '"')), null) : e;
}
function g0(e, t) {
  let n, r, i, a, s;
  if (d0(e)) {
    let l = e.getAttribute("action");
    r = l ? ja(l, t) : null, n = e.getAttribute("method") || Fo, i = ea(e.getAttribute("enctype")) || Lo, a = new FormData(e);
  } else if (u0(e) || f0(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (r = c ? ja(c, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || Fo, i = ea(e.getAttribute("formenctype")) || ea(l.getAttribute("enctype")) || Lo, a = new FormData(l, e), !y0()) {
      let {
        name: u,
        type: d,
        value: f
      } = e;
      if (d === "image") {
        let p = u ? u + "." : "";
        a.append(p + "x", "0"), a.append(p + "y", "0");
      } else
        u && a.append(u, f);
    }
  } else {
    if (Pi(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = Fo, r = null, i = Lo, s = e;
  }
  return a && i === "text/plain" && (s = a, a = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: i,
    formData: a,
    body: s
  };
}
const b0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], E0 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], x0 = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"];
process.env.NODE_ENV;
const O0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", w0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, oo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: a,
    replace: s,
    state: l,
    target: c,
    to: u,
    preventScrollReset: d
  } = t, f = _s(t, b0), {
    basename: p
  } = E.useContext(cn), h, v = !1;
  if (typeof u == "string" && w0.test(u) && (h = u, O0))
    try {
      let C = new URL(window.location.href), x = u.startsWith("//") ? new URL(C.protocol + u) : new URL(u), b = ja(x.pathname, p);
      x.origin === C.origin && b != null ? u = b + x.search + x.hash : v = !0;
    } catch {
      process.env.NODE_ENV !== "production" && br(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let y = n0(u, {
    relative: i
  }), m = P0(u, {
    replace: s,
    state: l,
    target: c,
    preventScrollReset: d,
    relative: i
  });
  function O(C) {
    r && r(C), C.defaultPrevented || m(C);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ E.createElement("a", jn({}, f, {
      href: h || y,
      onClick: v || a ? r : O,
      ref: n,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (oo.displayName = "Link");
const S0 = /* @__PURE__ */ E.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: a = "",
    end: s = !1,
    style: l,
    to: c,
    children: u
  } = t, d = _s(t, E0), f = Ri(c, {
    relative: d.relative
  }), p = en(), h = E.useContext(kd), {
    navigator: v
  } = E.useContext(cn), y = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname, m = p.pathname, O = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
  i || (m = m.toLowerCase(), O = O ? O.toLowerCase() : null, y = y.toLowerCase());
  let C = m === y || !s && m.startsWith(y) && m.charAt(y.length) === "/", x = O != null && (O === y || !s && O.startsWith(y) && O.charAt(y.length) === "/"), b = C ? r : void 0, g;
  typeof a == "function" ? g = a({
    isActive: C,
    isPending: x
  }) : g = [a, C ? "active" : null, x ? "pending" : null].filter(Boolean).join(" ");
  let R = typeof l == "function" ? l({
    isActive: C,
    isPending: x
  }) : l;
  return /* @__PURE__ */ E.createElement(oo, jn({}, d, {
    "aria-current": b,
    className: g,
    ref: n,
    style: R,
    to: c
  }), typeof u == "function" ? u({
    isActive: C,
    isPending: x
  }) : u);
});
process.env.NODE_ENV !== "production" && (S0.displayName = "NavLink");
const T0 = /* @__PURE__ */ E.forwardRef((e, t) => {
  let n = A0();
  return /* @__PURE__ */ E.createElement(Bd, jn({}, e, {
    submit: n,
    ref: t
  }));
});
process.env.NODE_ENV !== "production" && (T0.displayName = "Form");
const Bd = /* @__PURE__ */ E.forwardRef((e, t) => {
  let {
    reloadDocument: n,
    replace: r,
    state: i,
    method: a = Fo,
    action: s,
    onSubmit: l,
    submit: c,
    relative: u,
    preventScrollReset: d
  } = e, f = _s(e, x0), p = a.toLowerCase() === "get" ? "get" : "post", h = I0(s, {
    relative: u
  }), v = (y) => {
    if (l && l(y), y.defaultPrevented)
      return;
    y.preventDefault();
    let m = y.nativeEvent.submitter, O = (m == null ? void 0 : m.getAttribute("formmethod")) || a;
    c(m || y.currentTarget, {
      method: O,
      replace: r,
      state: i,
      relative: u,
      preventScrollReset: d
    });
  };
  return /* @__PURE__ */ E.createElement("form", jn({
    ref: t,
    method: p,
    action: h,
    onSubmit: n ? l : v
  }, f));
});
process.env.NODE_ENV !== "production" && (Bd.displayName = "FormImpl");
process.env.NODE_ENV;
var Wa;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher";
})(Wa || (Wa = {}));
var Oc;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Oc || (Oc = {}));
function C0(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function R0(e) {
  let t = E.useContext(Si);
  return t || (process.env.NODE_ENV !== "production" ? nt(!1, C0(e)) : nt(!1)), t;
}
function P0(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: a,
    relative: s
  } = t === void 0 ? {} : t, l = Ci(), c = en(), u = Ri(e, {
    relative: s
  });
  return E.useCallback((d) => {
    if (m0(d, n)) {
      d.preventDefault();
      let f = r !== void 0 ? r : La(c) === La(u);
      l(e, {
        replace: f,
        state: i,
        preventScrollReset: a,
        relative: s
      });
    }
  }, [c, l, u, r, i, n, e, a, s]);
}
function Ud(e) {
  process.env.NODE_ENV !== "production" && br(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
  let t = E.useRef(Ua(e)), n = E.useRef(!1), r = en(), i = E.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    h0(r.search, n.current ? null : t.current)
  ), [r.search]), a = Ci(), s = E.useCallback((l, c) => {
    const u = Ua(typeof l == "function" ? l(i) : l);
    n.current = !0, a("?" + u, c);
  }, [a, i]);
  return [i, s];
}
function $0() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
function A0() {
  let {
    router: e
  } = R0(Wa.UseSubmit), {
    basename: t
  } = E.useContext(cn), n = l0();
  return E.useCallback(function(r, i) {
    i === void 0 && (i = {}), $0();
    let {
      action: a,
      method: s,
      encType: l,
      formData: c,
      body: u
    } = g0(r, t);
    e.navigate(i.action || a, {
      preventScrollReset: i.preventScrollReset,
      formData: c,
      body: u,
      formMethod: i.method || s,
      formEncType: i.encType || l,
      replace: i.replace,
      state: i.state,
      fromRouteId: n
    });
  }, [e, t, n]);
}
function I0(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = E.useContext(cn), i = E.useContext(Sn);
  i || (process.env.NODE_ENV !== "production" ? nt(!1, "useFormAction must be used inside a RouteContext") : nt(!1));
  let [a] = i.matches.slice(-1), s = jn({}, Ri(e || ".", {
    relative: n
  })), l = en();
  if (e == null && (s.search = l.search, a.route.index)) {
    let c = new URLSearchParams(s.search);
    c.delete("index"), s.search = c.toString() ? "?" + c.toString() : "";
  }
  return (!e || e === ".") && a.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (s.pathname = s.pathname === "/" ? r : Is([r, s.pathname])), La(s);
}
var N0 = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var i = 42;
  t[n] = i;
  for (n in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = Object.getOwnPropertyDescriptor(t, n);
    if (s.value !== i || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, wc = typeof Symbol < "u" && Symbol, k0 = N0, M0 = function() {
  return typeof wc != "function" || typeof Symbol != "function" || typeof wc("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : k0();
}, Sc = {
  foo: {}
}, _0 = Object, D0 = function() {
  return { __proto__: Sc }.foo === Sc.foo && !({ __proto__: null } instanceof _0);
}, F0 = "Function.prototype.bind called on incompatible ", ta = Array.prototype.slice, L0 = Object.prototype.toString, j0 = "[object Function]", B0 = function(t) {
  var n = this;
  if (typeof n != "function" || L0.call(n) !== j0)
    throw new TypeError(F0 + n);
  for (var r = ta.call(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var d = n.apply(
        this,
        r.concat(ta.call(arguments))
      );
      return Object(d) === d ? d : this;
    } else
      return n.apply(
        t,
        r.concat(ta.call(arguments))
      );
  }, s = Math.max(0, n.length - r.length), l = [], c = 0; c < s; c++)
    l.push("$" + c);
  if (i = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, U0 = B0, Ds = Function.prototype.bind || U0, W0 = Ds, z0 = W0.call(Function.call, Object.prototype.hasOwnProperty), Ce, dr = SyntaxError, Wd = Function, lr = TypeError, na = function(e) {
  try {
    return Wd('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, _n = Object.getOwnPropertyDescriptor;
if (_n)
  try {
    _n({}, "");
  } catch {
    _n = null;
  }
var ra = function() {
  throw new lr();
}, V0 = _n ? function() {
  try {
    return arguments.callee, ra;
  } catch {
    try {
      return _n(arguments, "callee").get;
    } catch {
      return ra;
    }
  }
}() : ra, tr = M0(), q0 = D0(), ut = Object.getPrototypeOf || (q0 ? function(e) {
  return e.__proto__;
} : null), rr = {}, H0 = typeof Uint8Array > "u" || !ut ? Ce : ut(Uint8Array), Dn = {
  "%AggregateError%": typeof AggregateError > "u" ? Ce : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Ce : ArrayBuffer,
  "%ArrayIteratorPrototype%": tr && ut ? ut([][Symbol.iterator]()) : Ce,
  "%AsyncFromSyncIteratorPrototype%": Ce,
  "%AsyncFunction%": rr,
  "%AsyncGenerator%": rr,
  "%AsyncGeneratorFunction%": rr,
  "%AsyncIteratorPrototype%": rr,
  "%Atomics%": typeof Atomics > "u" ? Ce : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Ce : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Ce : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Ce : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Ce : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? Ce : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Ce : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Ce : FinalizationRegistry,
  "%Function%": Wd,
  "%GeneratorFunction%": rr,
  "%Int8Array%": typeof Int8Array > "u" ? Ce : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Ce : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Ce : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": tr && ut ? ut(ut([][Symbol.iterator]())) : Ce,
  "%JSON%": typeof JSON == "object" ? JSON : Ce,
  "%Map%": typeof Map > "u" ? Ce : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !tr || !ut ? Ce : ut((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Ce : Promise,
  "%Proxy%": typeof Proxy > "u" ? Ce : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? Ce : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Ce : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !tr || !ut ? Ce : ut((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Ce : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": tr && ut ? ut(""[Symbol.iterator]()) : Ce,
  "%Symbol%": tr ? Symbol : Ce,
  "%SyntaxError%": dr,
  "%ThrowTypeError%": V0,
  "%TypedArray%": H0,
  "%TypeError%": lr,
  "%Uint8Array%": typeof Uint8Array > "u" ? Ce : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Ce : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Ce : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Ce : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? Ce : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Ce : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Ce : WeakSet
};
if (ut)
  try {
    null.error;
  } catch (e) {
    var Y0 = ut(ut(e));
    Dn["%Error.prototype%"] = Y0;
  }
var G0 = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = na("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = na("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = na("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && ut && (n = ut(i.prototype));
  }
  return Dn[t] = n, n;
}, Tc = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, bo = Ds, Jo = z0, K0 = bo.call(Function.call, Array.prototype.concat), Q0 = bo.call(Function.apply, Array.prototype.splice), Cc = bo.call(Function.call, String.prototype.replace), Zo = bo.call(Function.call, String.prototype.slice), X0 = bo.call(Function.call, RegExp.prototype.exec), J0 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Z0 = /\\(\\)?/g, eE = function(t) {
  var n = Zo(t, 0, 1), r = Zo(t, -1);
  if (n === "%" && r !== "%")
    throw new dr("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new dr("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Cc(t, J0, function(a, s, l, c) {
    i[i.length] = l ? Cc(c, Z0, "$1") : s || a;
  }), i;
}, tE = function(t, n) {
  var r = t, i;
  if (Jo(Tc, r) && (i = Tc[r], r = "%" + i[0] + "%"), Jo(Dn, r)) {
    var a = Dn[r];
    if (a === rr && (a = G0(r)), typeof a > "u" && !n)
      throw new lr("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: a
    };
  }
  throw new dr("intrinsic " + t + " does not exist!");
}, Fs = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new lr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new lr('"allowMissing" argument must be a boolean');
  if (X0(/^%?[^%]*%?$/, t) === null)
    throw new dr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = eE(t), i = r.length > 0 ? r[0] : "", a = tE("%" + i + "%", n), s = a.name, l = a.value, c = !1, u = a.alias;
  u && (i = u[0], Q0(r, K0([0, 1], u)));
  for (var d = 1, f = !0; d < r.length; d += 1) {
    var p = r[d], h = Zo(p, 0, 1), v = Zo(p, -1);
    if ((h === '"' || h === "'" || h === "`" || v === '"' || v === "'" || v === "`") && h !== v)
      throw new dr("property names with quotes must have matching quotes");
    if ((p === "constructor" || !f) && (c = !0), i += "." + p, s = "%" + i + "%", Jo(Dn, s))
      l = Dn[s];
    else if (l != null) {
      if (!(p in l)) {
        if (!n)
          throw new lr("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (_n && d + 1 >= r.length) {
        var y = _n(l, p);
        f = !!y, f && "get" in y && !("originalValue" in y.get) ? l = y.get : l = l[p];
      } else
        f = Jo(l, p), l = l[p];
      f && !c && (Dn[s] = l);
    }
  }
  return l;
}, zd = { exports: {} };
(function(e) {
  var t = Ds, n = Fs, r = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), a = n("%Reflect.apply%", !0) || t.call(i, r), s = n("%Object.getOwnPropertyDescriptor%", !0), l = n("%Object.defineProperty%", !0), c = n("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
    }
  e.exports = function(f) {
    var p = a(t, i, arguments);
    if (s && l) {
      var h = s(p, "length");
      h.configurable && l(
        p,
        "length",
        { value: 1 + c(0, f.length - (arguments.length - 1)) }
      );
    }
    return p;
  };
  var u = function() {
    return a(t, r, arguments);
  };
  l ? l(e.exports, "apply", { value: u }) : e.exports.apply = u;
})(zd);
var nE = zd.exports, Vd = Fs, qd = nE, rE = qd(Vd("String.prototype.indexOf")), oE = function(t, n) {
  var r = Vd(t, !!n);
  return typeof r == "function" && rE(t, ".prototype.") > -1 ? qd(r) : r;
};
const iE = {}, aE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: iE
}, Symbol.toStringTag, { value: "Module" })), sE = /* @__PURE__ */ ds(aE);
var Ls = typeof Map == "function" && Map.prototype, oa = Object.getOwnPropertyDescriptor && Ls ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, ei = Ls && oa && typeof oa.get == "function" ? oa.get : null, Rc = Ls && Map.prototype.forEach, js = typeof Set == "function" && Set.prototype, ia = Object.getOwnPropertyDescriptor && js ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ti = js && ia && typeof ia.get == "function" ? ia.get : null, Pc = js && Set.prototype.forEach, lE = typeof WeakMap == "function" && WeakMap.prototype, zr = lE ? WeakMap.prototype.has : null, cE = typeof WeakSet == "function" && WeakSet.prototype, Vr = cE ? WeakSet.prototype.has : null, uE = typeof WeakRef == "function" && WeakRef.prototype, $c = uE ? WeakRef.prototype.deref : null, dE = Boolean.prototype.valueOf, fE = Object.prototype.toString, pE = Function.prototype.toString, mE = String.prototype.match, Bs = String.prototype.slice, gn = String.prototype.replace, hE = String.prototype.toUpperCase, Ac = String.prototype.toLowerCase, Hd = RegExp.prototype.test, Ic = Array.prototype.concat, Ht = Array.prototype.join, yE = Array.prototype.slice, Nc = Math.floor, za = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, aa = Object.getOwnPropertySymbols, Va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, fr = typeof Symbol == "function" && typeof Symbol.iterator == "object", yt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === fr || "symbol") ? Symbol.toStringTag : null, Yd = Object.prototype.propertyIsEnumerable, kc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Mc(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Hd.call(/e/, t))
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -Nc(-e) : Nc(e);
    if (r !== e) {
      var i = String(r), a = Bs.call(t, i.length + 1);
      return gn.call(i, n, "$&_") + "." + gn.call(gn.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return gn.call(t, n, "$&_");
}
var qa = sE, _c = qa.custom, Dc = Kd(_c) ? _c : null, vE = function e(t, n, r, i) {
  var a = n || {};
  if (yn(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (yn(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = yn(a, "customInspect") ? a.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (yn(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (yn(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Xd(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return l ? Mc(t, c) : c;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return l ? Mc(t, u) : u;
  }
  var d = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof r > "u" && (r = 0), r >= d && d > 0 && typeof t == "object")
    return Ha(t) ? "[Array]" : "[Object]";
  var f = _E(a, r);
  if (typeof i > "u")
    i = [];
  else if (Qd(i, t) >= 0)
    return "[Circular]";
  function p(z, L, D) {
    if (L && (i = yE.call(i), i.push(L)), D) {
      var W = {
        depth: a.depth
      };
      return yn(a, "quoteStyle") && (W.quoteStyle = a.quoteStyle), e(z, W, r + 1, i);
    }
    return e(z, a, r + 1, i);
  }
  if (typeof t == "function" && !Fc(t)) {
    var h = CE(t), v = $o(t, p);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (v.length > 0 ? " { " + Ht.call(v, ", ") + " }" : "");
  }
  if (Kd(t)) {
    var y = fr ? gn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Va.call(t);
    return typeof t == "object" && !fr ? Nr(y) : y;
  }
  if (NE(t)) {
    for (var m = "<" + Ac.call(String(t.nodeName)), O = t.attributes || [], C = 0; C < O.length; C++)
      m += " " + O[C].name + "=" + Gd(gE(O[C].value), "double", a);
    return m += ">", t.childNodes && t.childNodes.length && (m += "..."), m += "</" + Ac.call(String(t.nodeName)) + ">", m;
  }
  if (Ha(t)) {
    if (t.length === 0)
      return "[]";
    var x = $o(t, p);
    return f && !ME(x) ? "[" + Ya(x, f) + "]" : "[ " + Ht.call(x, ", ") + " ]";
  }
  if (EE(t)) {
    var b = $o(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !Yd.call(t, "cause") ? "{ [" + String(t) + "] " + Ht.call(Ic.call("[cause]: " + p(t.cause), b), ", ") + " }" : b.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ht.call(b, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (Dc && typeof t[Dc] == "function" && qa)
      return qa(t, { depth: d - r });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (RE(t)) {
    var g = [];
    return Rc && Rc.call(t, function(z, L) {
      g.push(p(L, t, !0) + " => " + p(z, t));
    }), Lc("Map", ei.call(t), g, f);
  }
  if (AE(t)) {
    var R = [];
    return Pc && Pc.call(t, function(z) {
      R.push(p(z, t));
    }), Lc("Set", ti.call(t), R, f);
  }
  if (PE(t))
    return sa("WeakMap");
  if (IE(t))
    return sa("WeakSet");
  if ($E(t))
    return sa("WeakRef");
  if (OE(t))
    return Nr(p(Number(t)));
  if (SE(t))
    return Nr(p(za.call(t)));
  if (wE(t))
    return Nr(dE.call(t));
  if (xE(t))
    return Nr(p(String(t)));
  if (!bE(t) && !Fc(t)) {
    var P = $o(t, p), $ = kc ? kc(t) === Object.prototype : t instanceof Object || t.constructor === Object, F = t instanceof Object ? "" : "null prototype", N = !$ && yt && Object(t) === t && yt in t ? Bs.call(Tn(t), 8, -1) : F ? "Object" : "", M = $ || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", q = M + (N || F ? "[" + Ht.call(Ic.call([], N || [], F || []), ": ") + "] " : "");
    return P.length === 0 ? q + "{}" : f ? q + "{" + Ya(P, f) + "}" : q + "{ " + Ht.call(P, ", ") + " }";
  }
  return String(t);
};
function Gd(e, t, n) {
  var r = (n.quoteStyle || t) === "double" ? '"' : "'";
  return r + e + r;
}
function gE(e) {
  return gn.call(String(e), /"/g, "&quot;");
}
function Ha(e) {
  return Tn(e) === "[object Array]" && (!yt || !(typeof e == "object" && yt in e));
}
function bE(e) {
  return Tn(e) === "[object Date]" && (!yt || !(typeof e == "object" && yt in e));
}
function Fc(e) {
  return Tn(e) === "[object RegExp]" && (!yt || !(typeof e == "object" && yt in e));
}
function EE(e) {
  return Tn(e) === "[object Error]" && (!yt || !(typeof e == "object" && yt in e));
}
function xE(e) {
  return Tn(e) === "[object String]" && (!yt || !(typeof e == "object" && yt in e));
}
function OE(e) {
  return Tn(e) === "[object Number]" && (!yt || !(typeof e == "object" && yt in e));
}
function wE(e) {
  return Tn(e) === "[object Boolean]" && (!yt || !(typeof e == "object" && yt in e));
}
function Kd(e) {
  if (fr)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Va)
    return !1;
  try {
    return Va.call(e), !0;
  } catch {
  }
  return !1;
}
function SE(e) {
  if (!e || typeof e != "object" || !za)
    return !1;
  try {
    return za.call(e), !0;
  } catch {
  }
  return !1;
}
var TE = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function yn(e, t) {
  return TE.call(e, t);
}
function Tn(e) {
  return fE.call(e);
}
function CE(e) {
  if (e.name)
    return e.name;
  var t = mE.call(pE.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Qd(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] === t)
      return n;
  return -1;
}
function RE(e) {
  if (!ei || !e || typeof e != "object")
    return !1;
  try {
    ei.call(e);
    try {
      ti.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function PE(e) {
  if (!zr || !e || typeof e != "object")
    return !1;
  try {
    zr.call(e, zr);
    try {
      Vr.call(e, Vr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function $E(e) {
  if (!$c || !e || typeof e != "object")
    return !1;
  try {
    return $c.call(e), !0;
  } catch {
  }
  return !1;
}
function AE(e) {
  if (!ti || !e || typeof e != "object")
    return !1;
  try {
    ti.call(e);
    try {
      ei.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function IE(e) {
  if (!Vr || !e || typeof e != "object")
    return !1;
  try {
    Vr.call(e, Vr);
    try {
      zr.call(e, zr);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function NE(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Xd(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Xd(Bs.call(e, 0, t.maxStringLength), t) + r;
  }
  var i = gn.call(gn.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, kE);
  return Gd(i, "single", t);
}
function kE(e) {
  var t = e.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + hE.call(t.toString(16));
}
function Nr(e) {
  return "Object(" + e + ")";
}
function sa(e) {
  return e + " { ? }";
}
function Lc(e, t, n, r) {
  var i = r ? Ya(n, r) : Ht.call(n, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function ME(e) {
  for (var t = 0; t < e.length; t++)
    if (Qd(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function _E(e, t) {
  var n;
  if (e.indent === "	")
    n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = Ht.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Ht.call(Array(t + 1), n)
  };
}
function Ya(e, t) {
  if (e.length === 0)
    return "";
  var n = `
` + t.prev + t.base;
  return n + Ht.call(e, "," + n) + `
` + t.prev;
}
function $o(e, t) {
  var n = Ha(e), r = [];
  if (n) {
    r.length = e.length;
    for (var i = 0; i < e.length; i++)
      r[i] = yn(e, i) ? t(e[i], e) : "";
  }
  var a = typeof aa == "function" ? aa(e) : [], s;
  if (fr) {
    s = {};
    for (var l = 0; l < a.length; l++)
      s["$" + a[l]] = a[l];
  }
  for (var c in e)
    yn(e, c) && (n && String(Number(c)) === c && c < e.length || fr && s["$" + c] instanceof Symbol || (Hd.call(/[^\w$]/, c) ? r.push(t(c, e) + ": " + t(e[c], e)) : r.push(c + ": " + t(e[c], e))));
  if (typeof aa == "function")
    for (var u = 0; u < a.length; u++)
      Yd.call(e, a[u]) && r.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
  return r;
}
var Us = Fs, Er = oE, DE = vE, FE = Us("%TypeError%"), Ao = Us("%WeakMap%", !0), Io = Us("%Map%", !0), LE = Er("WeakMap.prototype.get", !0), jE = Er("WeakMap.prototype.set", !0), BE = Er("WeakMap.prototype.has", !0), UE = Er("Map.prototype.get", !0), WE = Er("Map.prototype.set", !0), zE = Er("Map.prototype.has", !0), Ws = function(e, t) {
  for (var n = e, r; (r = n.next) !== null; n = r)
    if (r.key === t)
      return n.next = r.next, r.next = e.next, e.next = r, r;
}, VE = function(e, t) {
  var n = Ws(e, t);
  return n && n.value;
}, qE = function(e, t, n) {
  var r = Ws(e, t);
  r ? r.value = n : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: n
  };
}, HE = function(e, t) {
  return !!Ws(e, t);
}, YE = function() {
  var t, n, r, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new FE("Side channel does not contain " + DE(a));
    },
    get: function(a) {
      if (Ao && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return LE(t, a);
      } else if (Io) {
        if (n)
          return UE(n, a);
      } else if (r)
        return VE(r, a);
    },
    has: function(a) {
      if (Ao && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return BE(t, a);
      } else if (Io) {
        if (n)
          return zE(n, a);
      } else if (r)
        return HE(r, a);
      return !1;
    },
    set: function(a, s) {
      Ao && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Ao()), jE(t, a, s)) : Io ? (n || (n = new Io()), WE(n, a, s)) : (r || (r = { key: {}, next: null }), qE(r, a, s));
    }
  };
  return i;
}, GE = String.prototype.replace, KE = /%20/g, la = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, zs = {
  default: la.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return GE.call(e, KE, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: la.RFC1738,
  RFC3986: la.RFC3986
}, QE = zs, ca = Object.prototype.hasOwnProperty, Nn = Array.isArray, Vt = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), XE = function(t) {
  for (; t.length > 1; ) {
    var n = t.pop(), r = n.obj[n.prop];
    if (Nn(r)) {
      for (var i = [], a = 0; a < r.length; ++a)
        typeof r[a] < "u" && i.push(r[a]);
      n.obj[n.prop] = i;
    }
  }
}, Jd = function(t, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (r[i] = t[i]);
  return r;
}, JE = function e(t, n, r) {
  if (!n)
    return t;
  if (typeof n != "object") {
    if (Nn(t))
      t.push(n);
    else if (t && typeof t == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !ca.call(Object.prototype, n)) && (t[n] = !0);
    else
      return [t, n];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(n);
  var i = t;
  return Nn(t) && !Nn(n) && (i = Jd(t, r)), Nn(t) && Nn(n) ? (n.forEach(function(a, s) {
    if (ca.call(t, s)) {
      var l = t[s];
      l && typeof l == "object" && a && typeof a == "object" ? t[s] = e(l, a, r) : t.push(a);
    } else
      t[s] = a;
  }), t) : Object.keys(n).reduce(function(a, s) {
    var l = n[s];
    return ca.call(a, s) ? a[s] = e(a[s], l, r) : a[s] = l, a;
  }, i);
}, ZE = function(t, n) {
  return Object.keys(n).reduce(function(r, i) {
    return r[i] = n[i], r;
  }, t);
}, ex = function(e, t, n) {
  var r = e.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, tx = function(t, n, r, i, a) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), r === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(d) {
      return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
    });
  for (var l = "", c = 0; c < s.length; ++c) {
    var u = s.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === QE.RFC1738 && (u === 40 || u === 41)) {
      l += s.charAt(c);
      continue;
    }
    if (u < 128) {
      l = l + Vt[u];
      continue;
    }
    if (u < 2048) {
      l = l + (Vt[192 | u >> 6] + Vt[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      l = l + (Vt[224 | u >> 12] + Vt[128 | u >> 6 & 63] + Vt[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | s.charCodeAt(c) & 1023), l += Vt[240 | u >> 18] + Vt[128 | u >> 12 & 63] + Vt[128 | u >> 6 & 63] + Vt[128 | u & 63];
  }
  return l;
}, nx = function(t) {
  for (var n = [{ obj: { o: t }, prop: "o" }], r = [], i = 0; i < n.length; ++i)
    for (var a = n[i], s = a.obj[a.prop], l = Object.keys(s), c = 0; c < l.length; ++c) {
      var u = l[c], d = s[u];
      typeof d == "object" && d !== null && r.indexOf(d) === -1 && (n.push({ obj: s, prop: u }), r.push(d));
    }
  return XE(n), t;
}, rx = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, ox = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, ix = function(t, n) {
  return [].concat(t, n);
}, ax = function(t, n) {
  if (Nn(t)) {
    for (var r = [], i = 0; i < t.length; i += 1)
      r.push(n(t[i]));
    return r;
  }
  return n(t);
}, Zd = {
  arrayToObject: Jd,
  assign: ZE,
  combine: ix,
  compact: nx,
  decode: ex,
  encode: tx,
  isBuffer: ox,
  isRegExp: rx,
  maybeMap: ax,
  merge: JE
}, ef = YE, jo = Zd, qr = zs, sx = Object.prototype.hasOwnProperty, jc = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, n) {
    return t + "[" + n + "]";
  },
  repeat: function(t) {
    return t;
  }
}, rn = Array.isArray, lx = Array.prototype.push, tf = function(e, t) {
  lx.apply(e, rn(t) ? t : [t]);
}, cx = Date.prototype.toISOString, Bc = qr.default, mt = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: jo.encode,
  encodeValuesOnly: !1,
  format: Bc,
  formatter: qr.formatters[Bc],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return cx.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ux = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, ua = {}, dx = function e(t, n, r, i, a, s, l, c, u, d, f, p, h, v, y, m) {
  for (var O = t, C = m, x = 0, b = !1; (C = C.get(ua)) !== void 0 && !b; ) {
    var g = C.get(t);
    if (x += 1, typeof g < "u") {
      if (g === x)
        throw new RangeError("Cyclic object value");
      b = !0;
    }
    typeof C.get(ua) > "u" && (x = 0);
  }
  if (typeof c == "function" ? O = c(n, O) : O instanceof Date ? O = f(O) : r === "comma" && rn(O) && (O = jo.maybeMap(O, function(W) {
    return W instanceof Date ? f(W) : W;
  })), O === null) {
    if (a)
      return l && !v ? l(n, mt.encoder, y, "key", p) : n;
    O = "";
  }
  if (ux(O) || jo.isBuffer(O)) {
    if (l) {
      var R = v ? n : l(n, mt.encoder, y, "key", p);
      return [h(R) + "=" + h(l(O, mt.encoder, y, "value", p))];
    }
    return [h(n) + "=" + h(String(O))];
  }
  var P = [];
  if (typeof O > "u")
    return P;
  var $;
  if (r === "comma" && rn(O))
    v && l && (O = jo.maybeMap(O, l)), $ = [{ value: O.length > 0 ? O.join(",") || null : void 0 }];
  else if (rn(c))
    $ = c;
  else {
    var F = Object.keys(O);
    $ = u ? F.sort(u) : F;
  }
  for (var N = i && rn(O) && O.length === 1 ? n + "[]" : n, M = 0; M < $.length; ++M) {
    var q = $[M], z = typeof q == "object" && typeof q.value < "u" ? q.value : O[q];
    if (!(s && z === null)) {
      var L = rn(O) ? typeof r == "function" ? r(N, q) : N : N + (d ? "." + q : "[" + q + "]");
      m.set(t, x);
      var D = ef();
      D.set(ua, m), tf(P, e(
        z,
        L,
        r,
        i,
        a,
        s,
        r === "comma" && v && rn(O) ? null : l,
        c,
        u,
        d,
        f,
        p,
        h,
        v,
        y,
        D
      ));
    }
  }
  return P;
}, fx = function(t) {
  if (!t)
    return mt;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = t.charset || mt.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = qr.default;
  if (typeof t.format < "u") {
    if (!sx.call(qr.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    r = t.format;
  }
  var i = qr.formatters[r], a = mt.filter;
  return (typeof t.filter == "function" || rn(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : mt.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? mt.allowDots : !!t.allowDots,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : mt.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? mt.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : mt.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : mt.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : mt.encodeValuesOnly,
    filter: a,
    format: r,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : mt.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : mt.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : mt.strictNullHandling
  };
}, px = function(e, t) {
  var n = e, r = fx(t), i, a;
  typeof r.filter == "function" ? (a = r.filter, n = a("", n)) : rn(r.filter) && (a = r.filter, i = a);
  var s = [];
  if (typeof n != "object" || n === null)
    return "";
  var l;
  t && t.arrayFormat in jc ? l = t.arrayFormat : t && "indices" in t ? l = t.indices ? "indices" : "repeat" : l = "indices";
  var c = jc[l];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && t && t.commaRoundTrip;
  i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
  for (var d = ef(), f = 0; f < i.length; ++f) {
    var p = i[f];
    r.skipNulls && n[p] === null || tf(s, dx(
      n[p],
      p,
      c,
      u,
      r.strictNullHandling,
      r.skipNulls,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      d
    ));
  }
  var h = s.join(r.delimiter), v = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), h.length > 0 ? v + h : "";
}, pr = Zd, Ga = Object.prototype.hasOwnProperty, mx = Array.isArray, ct = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: pr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, hx = function(e) {
  return e.replace(/&#(\d+);/g, function(t, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, nf = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, yx = "utf8=%26%2310003%3B", vx = "utf8=%E2%9C%93", gx = function(t, n) {
  var r = { __proto__: null }, i = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, s = i.split(n.delimiter, a), l = -1, c, u = n.charset;
  if (n.charsetSentinel)
    for (c = 0; c < s.length; ++c)
      s[c].indexOf("utf8=") === 0 && (s[c] === vx ? u = "utf-8" : s[c] === yx && (u = "iso-8859-1"), l = c, c = s.length);
  for (c = 0; c < s.length; ++c)
    if (c !== l) {
      var d = s[c], f = d.indexOf("]="), p = f === -1 ? d.indexOf("=") : f + 1, h, v;
      p === -1 ? (h = n.decoder(d, ct.decoder, u, "key"), v = n.strictNullHandling ? null : "") : (h = n.decoder(d.slice(0, p), ct.decoder, u, "key"), v = pr.maybeMap(
        nf(d.slice(p + 1), n),
        function(y) {
          return n.decoder(y, ct.decoder, u, "value");
        }
      )), v && n.interpretNumericEntities && u === "iso-8859-1" && (v = hx(v)), d.indexOf("[]=") > -1 && (v = mx(v) ? [v] : v), Ga.call(r, h) ? r[h] = pr.combine(r[h], v) : r[h] = v;
    }
  return r;
}, bx = function(e, t, n, r) {
  for (var i = r ? t : nf(t, n), a = e.length - 1; a >= 0; --a) {
    var s, l = e[a];
    if (l === "[]" && n.parseArrays)
      s = [].concat(i);
    else {
      s = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, u = parseInt(c, 10);
      !n.parseArrays && c === "" ? s = { 0: i } : !isNaN(u) && l !== c && String(u) === c && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (s = [], s[u] = i) : c !== "__proto__" && (s[c] = i);
    }
    i = s;
  }
  return i;
}, Ex = function(t, n, r, i) {
  if (t) {
    var a = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, c = r.depth > 0 && s.exec(a), u = c ? a.slice(0, c.index) : a, d = [];
    if (u) {
      if (!r.plainObjects && Ga.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      d.push(u);
    }
    for (var f = 0; r.depth > 0 && (c = l.exec(a)) !== null && f < r.depth; ) {
      if (f += 1, !r.plainObjects && Ga.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      d.push(c[1]);
    }
    return c && d.push("[" + a.slice(c.index) + "]"), bx(d, n, r, i);
  }
}, xx = function(t) {
  if (!t)
    return ct;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof t.charset > "u" ? ct.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? ct.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : ct.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : ct.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : ct.arrayLimit,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ct.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : ct.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : ct.decoder,
    delimiter: typeof t.delimiter == "string" || pr.isRegExp(t.delimiter) ? t.delimiter : ct.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : ct.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : ct.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : ct.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : ct.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ct.strictNullHandling
  };
}, Ox = function(e, t) {
  var n = xx(t);
  if (e === "" || e === null || typeof e > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof e == "string" ? gx(e, n) : e, i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(r), s = 0; s < a.length; ++s) {
    var l = a[s], c = Ex(l, r[l], n, typeof e == "string");
    i = pr.merge(i, c, n);
  }
  return n.allowSparse === !0 ? i : pr.compact(i);
}, wx = px, Sx = Ox, Tx = zs, Cx = {
  formats: Tx,
  parse: Sx,
  stringify: wx
};
const Uc = /* @__PURE__ */ Yu(Cx), Rx = (e) => {
  var N;
  const {
    headCells: t,
    fetchRecords: n,
    queryKey: r,
    defaultOrderBy: i,
    defaultOrderDirection: a = $t.DESC,
    defaultRowsPerPage: s = 10,
    Row: l,
    Toolbar: c,
    onDeleteItem: u = null,
    onEditItem: d = null,
    filters: f
  } = e, [p, h] = Ud(), [v, y] = Et(i), [m, O] = Et(a), [C, x] = Et({
    ...Uc.parse(p.toString()),
    per_page: s
  }), {
    data: b,
    isLoading: g,
    isFetching: R
  } = Ad({
    queryKey: [r, C],
    queryFn: () => n(C),
    onSuccess: () => {
      h(Uc.stringify(C, { skipNulls: !0 }), {
        replace: !0
      });
    }
  });
  ur(() => {
    x((M) => ({
      ...M,
      sort: {
        field: v,
        direction: m
      }
    }));
  }, [v, m]), ur(() => {
    x((M) => ({
      ...M,
      filter: f
    }));
  }, [f]);
  const P = (M, q) => {
    x({ ...C, page: ++q });
  }, $ = (M) => {
    x({ ...C, per_page: M.target.value });
  };
  return /* @__PURE__ */ pe(cs, { theme: Rd, children: [
    c && /* @__PURE__ */ w(c, { setParams: x, params: C }),
    /* @__PURE__ */ w(ju, { children: /* @__PURE__ */ pe(Bu, { children: [
      /* @__PURE__ */ w(
        Cs,
        {
          headCells: t,
          orderBy: v,
          orderDirection: m,
          handleSortRequest: (M, q) => {
            y(q), O(
              v === q && m === $t.ASC ? $t.DESC : $t.ASC
            );
          }
        }
      ),
      /* @__PURE__ */ pe(Uu, { children: [
        (g || R) && /* @__PURE__ */ w(Jr, { children: /* @__PURE__ */ w(Zr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ w(Wn, {}) }) }),
        ((N = b == null ? void 0 : b.data) == null ? void 0 : N.length) > 0 ? b.data.map((M) => /* @__PURE__ */ w(
          l,
          {
            data: M,
            onDeleteItem: u,
            onEditItem: d
          },
          M.id
        )) : /* @__PURE__ */ w(Jr, { children: /* @__PURE__ */ w(Zr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ w(xt, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    b && /* @__PURE__ */ w(
      Wu,
      {
        component: "div",
        from: b.from,
        to: b.to,
        page: b.current_page - 1,
        rowsPerPage: b.per_page,
        count: b.total,
        onPageChange: P,
        onRowsPerPageChange: $,
        backIconButtonProps: {
          disabled: (b == null ? void 0 : b.current_page) === 1
        },
        nextIconButtonProps: {
          disabled: (b == null ? void 0 : b.current_page) === (b == null ? void 0 : b.last_page)
        }
      }
    )
  ] });
};
Rx.propTypes = {
  headCells: o.array.isRequired,
  fetchRecords: o.func.isRequired,
  queryKey: o.string.isRequired,
  defaultOrderBy: o.string,
  defaultOrderDirection: o.oneOf([
    $t.ASC,
    $t.DESC
  ]),
  defaultRowsPerPage: o.number,
  onDeleteItem: o.func,
  onEditItem: o.func,
  filters: o.object,
  Row: o.elementType.isRequired,
  Toolbar: o.elementType
};
function io(e) {
  return typeof e == "string";
}
function Px(e, t, n) {
  return e === void 0 || io(e) ? t : T({}, t, {
    ownerState: T({}, t.ownerState, n)
  });
}
const $x = {
  disableDefaultClasses: !1
}, Ax = /* @__PURE__ */ E.createContext($x);
function rf(e) {
  const {
    disableDefaultClasses: t
  } = E.useContext(Ax);
  return (n) => t ? "" : e(n);
}
function Ix(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Ka(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Wc(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Nx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const h = be(i == null ? void 0 : i.className, r == null ? void 0 : r.className, a, n == null ? void 0 : n.className), v = T({}, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), y = T({}, n, i, r);
    return h.length > 0 && (y.className = h), Object.keys(v).length > 0 && (y.style = v), {
      props: y,
      internalRef: void 0
    };
  }
  const s = Ix(T({}, i, r)), l = Wc(r), c = Wc(i), u = t(s), d = be(u == null ? void 0 : u.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = T({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), p = T({}, u, n, c, l);
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
const kx = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Bn(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: a = !1
  } = e, s = ge(e, kx), l = a ? {} : Ka(r, i), {
    props: c,
    internalRef: u
  } = Nx(T({}, s, {
    externalSlotProps: l
  })), d = it(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Px(n, T({}, c, {
    ref: d
  }), i);
}
const Mx = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function _x(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Dx(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Fx(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Dx(e));
}
function Lx(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Mx)).forEach((r, i) => {
    const a = _x(r);
    a === -1 || !Fx(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function jx() {
  return !0;
}
function ni(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Lx,
    isEnabled: s = jx,
    open: l
  } = e, c = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), f = E.useRef(null), p = E.useRef(null), h = E.useRef(!1), v = E.useRef(null), y = it(t.ref, v), m = E.useRef(null);
  E.useEffect(() => {
    !l || !v.current || (h.current = !n);
  }, [n, l]), E.useEffect(() => {
    if (!l || !v.current)
      return;
    const x = ht(v.current);
    return v.current.contains(x.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), h.current && v.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), E.useEffect(() => {
    if (!l || !v.current)
      return;
    const x = ht(v.current), b = (P) => {
      const {
        current: $
      } = v;
      if ($ !== null) {
        if (!x.hasFocus() || r || !s() || c.current) {
          c.current = !1;
          return;
        }
        if (!$.contains(x.activeElement)) {
          if (P && p.current !== P.target || x.activeElement !== p.current)
            p.current = null;
          else if (p.current !== null)
            return;
          if (!h.current)
            return;
          let M = [];
          if ((x.activeElement === u.current || x.activeElement === d.current) && (M = a(v.current)), M.length > 0) {
            var F, N;
            const q = !!((F = m.current) != null && F.shiftKey && ((N = m.current) == null ? void 0 : N.key) === "Tab"), z = M[0], L = M[M.length - 1];
            typeof z != "string" && typeof L != "string" && (q ? L.focus() : z.focus());
          } else
            $.focus();
        }
      }
    }, g = (P) => {
      m.current = P, !(r || !s() || P.key !== "Tab") && x.activeElement === v.current && P.shiftKey && (c.current = !0, d.current && d.current.focus());
    };
    x.addEventListener("focusin", b), x.addEventListener("keydown", g, !0);
    const R = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && b(null);
    }, 50);
    return () => {
      clearInterval(R), x.removeEventListener("focusin", b), x.removeEventListener("keydown", g, !0);
    };
  }, [n, r, i, s, l, a]);
  const O = (x) => {
    f.current === null && (f.current = x.relatedTarget), h.current = !0, p.current = x.target;
    const b = t.props.onFocus;
    b && b(x);
  }, C = (x) => {
    f.current === null && (f.current = x.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ pe(E.Fragment, {
    children: [/* @__PURE__ */ w("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: y,
      onFocus: O
    }), /* @__PURE__ */ w("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: ho,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (ni["propTypes"] = Zu(ni.propTypes));
var Ot = "top", Ft = "bottom", Lt = "right", wt = "left", Vs = "auto", Eo = [Ot, Ft, Lt, wt], mr = "start", ao = "end", Bx = "clippingParents", of = "viewport", kr = "popper", Ux = "reference", zc = /* @__PURE__ */ Eo.reduce(function(e, t) {
  return e.concat([t + "-" + mr, t + "-" + ao]);
}, []), af = /* @__PURE__ */ [].concat(Eo, [Vs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + mr, t + "-" + ao]);
}, []), Wx = "beforeRead", zx = "read", Vx = "afterRead", qx = "beforeMain", Hx = "main", Yx = "afterMain", Gx = "beforeWrite", Kx = "write", Qx = "afterWrite", Xx = [Wx, zx, Vx, qx, Hx, Yx, Gx, Kx, Qx];
function Zt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function It(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Un(e) {
  var t = It(e).Element;
  return e instanceof t || e instanceof Element;
}
function Mt(e) {
  var t = It(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = It(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Jx(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !Mt(a) || !Zt(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Zx(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Mt(i) || !Zt(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const eO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Jx,
  effect: Zx,
  requires: ["computeStyles"]
};
function Xt(e) {
  return e.split("-")[0];
}
var Fn = Math.max, ri = Math.min, hr = Math.round;
function Qa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function sf() {
  return !/^((?!chrome|android).)*safari/i.test(Qa());
}
function yr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && Mt(e) && (i = e.offsetWidth > 0 && hr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && hr(r.height) / e.offsetHeight || 1);
  var s = Un(e) ? It(e) : window, l = s.visualViewport, c = !sf() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, d = (r.top + (c && l ? l.offsetTop : 0)) / a, f = r.width / i, p = r.height / a;
  return {
    width: f,
    height: p,
    top: d,
    right: u + f,
    bottom: d + p,
    left: u,
    x: u,
    y: d
  };
}
function Hs(e) {
  var t = yr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function lf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && qs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ln(e) {
  return It(e).getComputedStyle(e);
}
function tO(e) {
  return ["table", "td", "th"].indexOf(Zt(e)) >= 0;
}
function Cn(e) {
  return ((Un(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function $i(e) {
  return Zt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (qs(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Cn(e)
  );
}
function Vc(e) {
  return !Mt(e) || // https://github.com/popperjs/popper-core/issues/837
  ln(e).position === "fixed" ? null : e.offsetParent;
}
function nO(e) {
  var t = /firefox/i.test(Qa()), n = /Trident/i.test(Qa());
  if (n && Mt(e)) {
    var r = ln(e);
    if (r.position === "fixed")
      return null;
  }
  var i = $i(e);
  for (qs(i) && (i = i.host); Mt(i) && ["html", "body"].indexOf(Zt(i)) < 0; ) {
    var a = ln(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function xo(e) {
  for (var t = It(e), n = Vc(e); n && tO(n) && ln(n).position === "static"; )
    n = Vc(n);
  return n && (Zt(n) === "html" || Zt(n) === "body" && ln(n).position === "static") ? t : n || nO(e) || t;
}
function Ys(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Hr(e, t, n) {
  return Fn(e, ri(t, n));
}
function rO(e, t, n) {
  var r = Hr(e, t, n);
  return r > n ? n : r;
}
function cf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function uf(e) {
  return Object.assign({}, cf(), e);
}
function df(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var oO = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, uf(typeof t != "number" ? t : df(t, Eo));
};
function iO(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Xt(n.placement), c = Ys(l), u = [wt, Lt].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var f = oO(i.padding, n), p = Hs(a), h = c === "y" ? Ot : wt, v = c === "y" ? Ft : Lt, y = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], m = s[c] - n.rects.reference[c], O = xo(a), C = O ? c === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, x = y / 2 - m / 2, b = f[h], g = C - p[d] - f[v], R = C / 2 - p[d] / 2 + x, P = Hr(b, R, g), $ = c;
    n.modifiersData[r] = (t = {}, t[$] = P, t.centerOffset = P - R, t);
  }
}
function aO(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || lf(t.elements.popper, i) && (t.elements.arrow = i));
}
const sO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: iO,
  effect: aO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function vr(e) {
  return e.split("-")[1];
}
var lO = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function cO(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: hr(n * i) / i || 0,
    y: hr(r * i) / i || 0
  };
}
function qc(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = s.x, h = p === void 0 ? 0 : p, v = s.y, y = v === void 0 ? 0 : v, m = typeof d == "function" ? d({
    x: h,
    y
  }) : {
    x: h,
    y
  };
  h = m.x, y = m.y;
  var O = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), x = wt, b = Ot, g = window;
  if (u) {
    var R = xo(n), P = "clientHeight", $ = "clientWidth";
    if (R === It(n) && (R = Cn(n), ln(R).position !== "static" && l === "absolute" && (P = "scrollHeight", $ = "scrollWidth")), R = R, i === Ot || (i === wt || i === Lt) && a === ao) {
      b = Ft;
      var F = f && R === g && g.visualViewport ? g.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[P]
      );
      y -= F - r.height, y *= c ? 1 : -1;
    }
    if (i === wt || (i === Ot || i === Ft) && a === ao) {
      x = Lt;
      var N = f && R === g && g.visualViewport ? g.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[$]
      );
      h -= N - r.width, h *= c ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && lO), q = d === !0 ? cO({
    x: h,
    y
  }, It(n)) : {
    x: h,
    y
  };
  if (h = q.x, y = q.y, c) {
    var z;
    return Object.assign({}, M, (z = {}, z[b] = C ? "0" : "", z[x] = O ? "0" : "", z.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + y + "px)" : "translate3d(" + h + "px, " + y + "px, 0)", z));
  }
  return Object.assign({}, M, (t = {}, t[b] = C ? y + "px" : "", t[x] = O ? h + "px" : "", t.transform = "", t));
}
function uO(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Xt(t.placement),
    variation: vr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qc(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qc(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const dO = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: uO,
  data: {}
};
var No = {
  passive: !0
};
function fO(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = It(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, No);
  }), l && c.addEventListener("resize", n.update, No), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, No);
    }), l && c.removeEventListener("resize", n.update, No);
  };
}
const pO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: fO,
  data: {}
};
var mO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return mO[t];
  });
}
var hO = {
  start: "end",
  end: "start"
};
function Hc(e) {
  return e.replace(/start|end/g, function(t) {
    return hO[t];
  });
}
function Gs(e) {
  var t = It(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ks(e) {
  return yr(Cn(e)).left + Gs(e).scrollLeft;
}
function yO(e, t) {
  var n = It(e), r = Cn(e), i = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = sf();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + Ks(e),
    y: c
  };
}
function vO(e) {
  var t, n = Cn(e), r = Gs(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Fn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Fn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Ks(e), c = -r.scrollTop;
  return ln(i || n).direction === "rtl" && (l += Fn(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function Qs(e) {
  var t = ln(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function ff(e) {
  return ["html", "body", "#document"].indexOf(Zt(e)) >= 0 ? e.ownerDocument.body : Mt(e) && Qs(e) ? e : ff($i(e));
}
function Yr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ff(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = It(r), s = i ? [a].concat(a.visualViewport || [], Qs(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Yr($i(s)))
  );
}
function Xa(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function gO(e, t) {
  var n = yr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yc(e, t, n) {
  return t === of ? Xa(yO(e, n)) : Un(t) ? gO(t, n) : Xa(vO(Cn(e)));
}
function bO(e) {
  var t = Yr($i(e)), n = ["absolute", "fixed"].indexOf(ln(e).position) >= 0, r = n && Mt(e) ? xo(e) : e;
  return Un(r) ? t.filter(function(i) {
    return Un(i) && lf(i, r) && Zt(i) !== "body";
  }) : [];
}
function EO(e, t, n, r) {
  var i = t === "clippingParents" ? bO(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, u) {
    var d = Yc(e, u, r);
    return c.top = Fn(d.top, c.top), c.right = ri(d.right, c.right), c.bottom = ri(d.bottom, c.bottom), c.left = Fn(d.left, c.left), c;
  }, Yc(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function pf(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Xt(r) : null, a = r ? vr(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case Ot:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Ft:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Lt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case wt:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? Ys(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case mr:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case ao:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function so(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? Bx : l, u = n.rootBoundary, d = u === void 0 ? of : u, f = n.elementContext, p = f === void 0 ? kr : f, h = n.altBoundary, v = h === void 0 ? !1 : h, y = n.padding, m = y === void 0 ? 0 : y, O = uf(typeof m != "number" ? m : df(m, Eo)), C = p === kr ? Ux : kr, x = e.rects.popper, b = e.elements[v ? C : p], g = EO(Un(b) ? b : b.contextElement || Cn(e.elements.popper), c, d, s), R = yr(e.elements.reference), P = pf({
    reference: R,
    element: x,
    strategy: "absolute",
    placement: i
  }), $ = Xa(Object.assign({}, x, P)), F = p === kr ? $ : R, N = {
    top: g.top - F.top + O.top,
    bottom: F.bottom - g.bottom + O.bottom,
    left: g.left - F.left + O.left,
    right: F.right - g.right + O.right
  }, M = e.modifiersData.offset;
  if (p === kr && M) {
    var q = M[i];
    Object.keys(N).forEach(function(z) {
      var L = [Lt, Ft].indexOf(z) >= 0 ? 1 : -1, D = [Ot, Ft].indexOf(z) >= 0 ? "y" : "x";
      N[z] += q[D] * L;
    });
  }
  return N;
}
function xO(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? af : c, d = vr(r), f = d ? l ? zc : zc.filter(function(v) {
    return vr(v) === d;
  }) : Eo, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f);
  var h = p.reduce(function(v, y) {
    return v[y] = so(e, {
      placement: y,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Xt(y)], v;
  }, {});
  return Object.keys(h).sort(function(v, y) {
    return h[v] - h[y];
  });
}
function OO(e) {
  if (Xt(e) === Vs)
    return [];
  var t = Bo(e);
  return [Hc(e), t, Hc(t)];
}
function wO(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, v = h === void 0 ? !0 : h, y = n.allowedAutoPlacements, m = t.options.placement, O = Xt(m), C = O === m, x = c || (C || !v ? [Bo(m)] : OO(m)), b = [m].concat(x).reduce(function(K, J) {
      return K.concat(Xt(J) === Vs ? xO(t, {
        placement: J,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : J);
    }, []), g = t.rects.reference, R = t.rects.popper, P = /* @__PURE__ */ new Map(), $ = !0, F = b[0], N = 0; N < b.length; N++) {
      var M = b[N], q = Xt(M), z = vr(M) === mr, L = [Ot, Ft].indexOf(q) >= 0, D = L ? "width" : "height", W = so(t, {
        placement: M,
        boundary: d,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), H = L ? z ? Lt : wt : z ? Ft : Ot;
      g[D] > R[D] && (H = Bo(H));
      var le = Bo(H), te = [];
      if (a && te.push(W[q] <= 0), l && te.push(W[H] <= 0, W[le] <= 0), te.every(function(K) {
        return K;
      })) {
        F = M, $ = !1;
        break;
      }
      P.set(M, te);
    }
    if ($)
      for (var _ = v ? 3 : 1, Y = function(J) {
        var Z = b.find(function(Q) {
          var oe = P.get(Q);
          if (oe)
            return oe.slice(0, J).every(function(ae) {
              return ae;
            });
        });
        if (Z)
          return F = Z, "break";
      }, re = _; re > 0; re--) {
        var ee = Y(re);
        if (ee === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[r]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const SO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wO,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Gc(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Kc(e) {
  return [Ot, Lt, Ft, wt].some(function(t) {
    return e[t] >= 0;
  });
}
function TO(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = so(t, {
    elementContext: "reference"
  }), l = so(t, {
    altBoundary: !0
  }), c = Gc(s, r), u = Gc(l, i, a), d = Kc(c), f = Kc(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const CO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: TO
};
function RO(e, t, n) {
  var r = Xt(e), i = [wt, Ot].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [wt, Lt].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function PO(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = af.reduce(function(d, f) {
    return d[f] = RO(f, t.rects, a), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const $O = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: PO
};
function AO(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = pf({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const IO = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: AO,
  data: {}
};
function NO(e) {
  return e === "x" ? "y" : "x";
}
function kO(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, h = p === void 0 ? !0 : p, v = n.tetherOffset, y = v === void 0 ? 0 : v, m = so(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), O = Xt(t.placement), C = vr(t.placement), x = !C, b = Ys(O), g = NO(b), R = t.modifiersData.popperOffsets, P = t.rects.reference, $ = t.rects.popper, F = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, N = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (R) {
    if (a) {
      var z, L = b === "y" ? Ot : wt, D = b === "y" ? Ft : Lt, W = b === "y" ? "height" : "width", H = R[b], le = H + m[L], te = H - m[D], _ = h ? -$[W] / 2 : 0, Y = C === mr ? P[W] : $[W], re = C === mr ? -$[W] : -P[W], ee = t.elements.arrow, K = h && ee ? Hs(ee) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cf(), Z = J[L], Q = J[D], oe = Hr(0, P[W], K[W]), ae = x ? P[W] / 2 - _ - oe - Z - N.mainAxis : Y - oe - Z - N.mainAxis, fe = x ? -P[W] / 2 + _ + oe + Q + N.mainAxis : re + oe + Q + N.mainAxis, se = t.elements.arrow && xo(t.elements.arrow), j = se ? b === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, ye = (z = M == null ? void 0 : M[b]) != null ? z : 0, k = H + ae - ye - j, X = H + fe - ye, we = Hr(h ? ri(le, k) : le, H, h ? Fn(te, X) : te);
      R[b] = we, q[b] = we - H;
    }
    if (l) {
      var ce, qe = b === "x" ? Ot : wt, He = b === "x" ? Ft : Lt, Ne = R[g], Te = g === "y" ? "height" : "width", We = Ne + m[qe], Pe = Ne - m[He], Ze = [Ot, wt].indexOf(O) !== -1, et = (ce = M == null ? void 0 : M[g]) != null ? ce : 0, ot = Ze ? We : Ne - P[Te] - $[Te] - et + N.altAxis, $e = Ze ? Ne + P[Te] + $[Te] - et - N.altAxis : Pe, ve = h && Ze ? rO(ot, Ne, $e) : Hr(h ? ot : We, Ne, h ? $e : Pe);
      R[g] = ve, q[g] = ve - Ne;
    }
    t.modifiersData[r] = q;
  }
}
const MO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: kO,
  requiresIfExists: ["offset"]
};
function _O(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function DO(e) {
  return e === It(e) || !Mt(e) ? Gs(e) : _O(e);
}
function FO(e) {
  var t = e.getBoundingClientRect(), n = hr(t.width) / e.offsetWidth || 1, r = hr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function LO(e, t, n) {
  n === void 0 && (n = !1);
  var r = Mt(t), i = Mt(t) && FO(t), a = Cn(t), s = yr(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Zt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Qs(a)) && (l = DO(t)), Mt(t) ? (c = yr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Ks(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function jO(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function BO(e) {
  var t = jO(e);
  return Xx.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function UO(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function WO(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Qc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function zO(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Qc : i;
  return function(l, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Qc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, h = {
      state: d,
      setOptions: function(O) {
        var C = typeof O == "function" ? O(d.options) : O;
        y(), d.options = Object.assign({}, a, d.options, C), d.scrollParents = {
          reference: Un(l) ? Yr(l) : l.contextElement ? Yr(l.contextElement) : [],
          popper: Yr(c)
        };
        var x = BO(WO([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = x.filter(function(b) {
          return b.enabled;
        }), v(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var O = d.elements, C = O.reference, x = O.popper;
          if (Xc(C, x)) {
            d.rects = {
              reference: LO(C, xo(x), d.options.strategy === "fixed"),
              popper: Hs(x)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
              return d.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var b = 0; b < d.orderedModifiers.length; b++) {
              if (d.reset === !0) {
                d.reset = !1, b = -1;
                continue;
              }
              var g = d.orderedModifiers[b], R = g.fn, P = g.options, $ = P === void 0 ? {} : P, F = g.name;
              typeof R == "function" && (d = R({
                state: d,
                options: $,
                name: F,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: UO(function() {
        return new Promise(function(m) {
          h.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!Xc(l, c))
      return h;
    h.setOptions(u).then(function(m) {
      !p && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function v() {
      d.orderedModifiers.forEach(function(m) {
        var O = m.name, C = m.options, x = C === void 0 ? {} : C, b = m.effect;
        if (typeof b == "function") {
          var g = b({
            state: d,
            name: O,
            instance: h,
            options: x
          }), R = function() {
          };
          f.push(g || R);
        }
      });
    }
    function y() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return h;
  };
}
var VO = [pO, IO, dO, eO, $O, SO, MO, sO, CO], qO = /* @__PURE__ */ zO({
  defaultModifiers: VO
});
function HO(e) {
  return typeof e == "function" ? e() : e;
}
const lo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = E.useState(null), c = it(/* @__PURE__ */ E.isValidElement(r) ? r.ref : null, n);
  if (sn(() => {
    a || l(HO(i) || document.body);
  }, [i, a]), sn(() => {
    if (s && !a)
      return to(n, s), () => {
        to(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ E.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ E.cloneElement(r, u);
    }
    return /* @__PURE__ */ w(E.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ w(E.Fragment, {
    children: s && /* @__PURE__ */ Hu.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (lo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: o.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Jt, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (lo["propTypes"] = Zu(lo.propTypes));
function YO(e) {
  return ze("MuiPopper", e);
}
Ve("MuiPopper", ["root"]);
const GO = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], KO = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function QO(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function oi(e) {
  return typeof e == "function" ? e() : e;
}
function Ai(e) {
  return e.nodeType !== void 0;
}
function XO(e) {
  return !Ai(e);
}
const JO = () => Ye({
  root: ["root"]
}, rf(YO)), ZO = {}, ew = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: i,
    children: a,
    direction: s,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: f,
    popperRef: p,
    slotProps: h = {},
    slots: v = {},
    TransitionProps: y
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, m = ge(t, GO), O = E.useRef(null), C = it(O, n), x = E.useRef(null), b = it(x, p), g = E.useRef(b);
  sn(() => {
    g.current = b;
  }, [b]), E.useImperativeHandle(p, () => x.current, []);
  const R = QO(d, s), [P, $] = E.useState(R), [F, N] = E.useState(oi(i));
  E.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), E.useEffect(() => {
    i && N(oi(i));
  }, [i]), sn(() => {
    if (!F || !u)
      return;
    const D = (le) => {
      $(le.placement);
    };
    if (process.env.NODE_ENV !== "production" && F && Ai(F) && F.nodeType === 1) {
      const le = F.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && le.top === 0 && le.left === 0 && le.right === 0 && le.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let W = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: le
      }) => {
        D(le);
      }
    }];
    c != null && (W = W.concat(c)), f && f.modifiers != null && (W = W.concat(f.modifiers));
    const H = qO(F, O.current, T({
      placement: R
    }, f, {
      modifiers: W
    }));
    return g.current(H), () => {
      H.destroy(), g.current(null);
    };
  }, [F, l, c, u, f, R]);
  const M = {
    placement: P
  };
  y !== null && (M.TransitionProps = y);
  const q = JO(), z = (r = v.root) != null ? r : "div", L = Bn({
    elementType: z,
    externalSlotProps: h.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: q.root
  });
  return /* @__PURE__ */ w(z, T({}, L, {
    children: typeof a == "function" ? a(M) : a
  }));
}), mf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: p = ZO,
    popperRef: h,
    style: v,
    transition: y = !1,
    slotProps: m = {},
    slots: O = {}
  } = t, C = ge(t, KO), [x, b] = E.useState(!0), g = () => {
    b(!1);
  }, R = () => {
    b(!0);
  };
  if (!c && !d && (!y || x))
    return null;
  let P;
  if (a)
    P = a;
  else if (r) {
    const N = oi(r);
    P = N && Ai(N) ? ht(N).body : ht(null).body;
  }
  const $ = !d && c && (!y || x) ? "none" : void 0, F = y ? {
    in: d,
    onEnter: g,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ w(lo, {
    disablePortal: l,
    container: P,
    children: /* @__PURE__ */ w(ew, T({
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: y ? !x : d,
      placement: f,
      popperOptions: p,
      popperRef: h,
      slotProps: m,
      slots: O
    }, C, {
      style: T({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $
      }, v),
      TransitionProps: F,
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (mf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: an(o.oneOfType([Jt, o.object, o.func]), (e) => {
    if (e.open) {
      const t = oi(e.anchorEl);
      if (t && Ai(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || XO(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Jt, o.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: o.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Wt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
function tw(e) {
  const t = ht(e);
  return t.body === e ? En(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Gr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Jc(e) {
  return parseInt(En(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function nw(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Zc(e, t, n, r, i) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = a.indexOf(s) === -1, c = !nw(s);
    l && c && Gr(s, i);
  });
}
function da(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function rw(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (tw(r)) {
      const s = od(ht(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Jc(r) + s}px`;
      const l = ht(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Jc(c) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = ht(r).body;
    else {
      const s = r.parentElement, l = En(r);
      a = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: a,
      el: s,
      property: l
    }) => {
      a ? s.style.setProperty(l, a) : s.style.removeProperty(l);
    });
  };
}
function ow(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class iw {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Gr(t.modalRef, !1);
    const i = ow(n);
    Zc(n, t.mount, t.modalRef, i, !0);
    const a = da(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = da(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = rw(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = da(this.containers, (s) => s.modals.indexOf(t) !== -1), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && Gr(t.modalRef, n), Zc(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && Gr(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function aw(e) {
  return ze("MuiModal", e);
}
Ve("MuiModal", ["root", "hidden", "backdrop"]);
const sw = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], lw = (e) => {
  const {
    open: t,
    exited: n
  } = e;
  return Ye({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, rf(aw));
};
function cw(e) {
  return typeof e == "function" ? e() : e;
}
function uw(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const dw = new iw(), hf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i;
  const {
    children: a,
    closeAfterTransition: s = !1,
    container: l,
    disableAutoFocus: c = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: d = !1,
    disablePortal: f = !1,
    disableRestoreFocus: p = !1,
    disableScrollLock: h = !1,
    hideBackdrop: v = !1,
    keepMounted: y = !1,
    // private
    manager: m = dw,
    onBackdropClick: O,
    onClose: C,
    onKeyDown: x,
    open: b,
    onTransitionEnter: g,
    onTransitionExited: R,
    slotProps: P = {},
    slots: $ = {}
  } = t, F = ge(t, sw), N = m, [M, q] = E.useState(!b), z = E.useRef({}), L = E.useRef(null), D = E.useRef(null), W = it(D, n), H = uw(a), le = (r = t["aria-hidden"]) != null ? r : !0, te = () => ht(L.current), _ = () => (z.current.modalRef = D.current, z.current.mountNode = L.current, z.current), Y = () => {
    N.mount(_(), {
      disableScrollLock: h
    }), D.current && (D.current.scrollTop = 0);
  }, re = Ut(() => {
    const ce = cw(l) || te().body;
    N.add(_(), ce), D.current && Y();
  }), ee = E.useCallback(() => N.isTopModal(_()), [N]), K = Ut((ce) => {
    L.current = ce, !(!ce || !D.current) && (b && ee() ? Y() : Gr(D.current, le));
  }), J = E.useCallback(() => {
    N.remove(_(), le);
  }, [N, le]);
  E.useEffect(() => () => {
    J();
  }, [J]), E.useEffect(() => {
    b ? re() : (!H || !s) && J();
  }, [b, J, H, s, re]);
  const Z = T({}, t, {
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: u,
    disableEscapeKeyDown: d,
    disablePortal: f,
    disableRestoreFocus: p,
    disableScrollLock: h,
    exited: M,
    hideBackdrop: v,
    keepMounted: y
  }), Q = lw(Z), oe = () => {
    q(!1), g && g();
  }, ae = () => {
    q(!0), R && R(), s && J();
  }, fe = (ce) => {
    ce.target === ce.currentTarget && (O && O(ce), C && C(ce, "backdropClick"));
  }, se = (ce) => {
    x && x(ce), !(ce.key !== "Escape" || !ee()) && (d || (ce.stopPropagation(), C && C(ce, "escapeKeyDown")));
  }, j = {};
  a.props.tabIndex === void 0 && (j.tabIndex = "-1"), H && (j.onEnter = Pa(oe, a.props.onEnter), j.onExited = Pa(ae, a.props.onExited));
  const ye = (i = $.root) != null ? i : "div", k = Bn({
    elementType: ye,
    externalSlotProps: P.root,
    externalForwardedProps: F,
    additionalProps: {
      ref: W,
      role: "presentation",
      onKeyDown: se
    },
    className: Q.root,
    ownerState: Z
  }), X = $.backdrop, we = Bn({
    elementType: X,
    externalSlotProps: P.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: fe,
      open: b
    },
    className: Q.backdrop,
    ownerState: Z
  });
  return !y && !b && (!H || M) ? null : /* @__PURE__ */ w(
    lo,
    {
      ref: K,
      container: l,
      disablePortal: f,
      children: /* @__PURE__ */ pe(ye, T({}, k, {
        children: [!v && X ? /* @__PURE__ */ w(X, T({}, we)) : null, /* @__PURE__ */ w(ni, {
          disableEnforceFocus: u,
          disableAutoFocus: c,
          disableRestoreFocus: p,
          isEnabled: ee,
          open: b,
          children: /* @__PURE__ */ E.cloneElement(a, j)
        })]
      }))
    }
  );
});
process.env.NODE_ENV !== "production" && (hf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: ho.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Jt, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  })
});
const fw = ["onChange", "maxRows", "minRows", "style", "value"];
function ko(e) {
  return parseInt(e, 10) || 0;
}
const pw = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function eu(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const yf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l
  } = t, c = ge(t, fw), {
    current: u
  } = E.useRef(l != null), d = E.useRef(null), f = it(n, d), p = E.useRef(null), h = E.useRef(0), [v, y] = E.useState({
    outerHeightStyle: 0
  }), m = E.useCallback(() => {
    const g = d.current, P = En(g).getComputedStyle(g);
    if (P.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const $ = p.current;
    $.style.width = P.width, $.value = g.value || t.placeholder || "x", $.value.slice(-1) === `
` && ($.value += " ");
    const F = P.boxSizing, N = ko(P.paddingBottom) + ko(P.paddingTop), M = ko(P.borderBottomWidth) + ko(P.borderTopWidth), q = $.scrollHeight;
    $.value = "x";
    const z = $.scrollHeight;
    let L = q;
    a && (L = Math.max(Number(a) * z, L)), i && (L = Math.min(Number(i) * z, L)), L = Math.max(L, z);
    const D = L + (F === "border-box" ? N + M : 0), W = Math.abs(L - q) <= 1;
    return {
      outerHeightStyle: D,
      overflow: W
    };
  }, [i, a, t.placeholder]), O = (g, R) => {
    const {
      outerHeightStyle: P,
      overflow: $
    } = R;
    return h.current < 20 && (P > 0 && Math.abs((g.outerHeightStyle || 0) - P) > 1 || g.overflow !== $) ? (h.current += 1, {
      overflow: $,
      outerHeightStyle: P
    }) : (process.env.NODE_ENV !== "production" && h.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), g);
  }, C = E.useCallback(() => {
    const g = m();
    eu(g) || y((R) => O(R, g));
  }, [m]), x = () => {
    const g = m();
    eu(g) || Hu.flushSync(() => {
      y((R) => O(R, g));
    });
  };
  E.useEffect(() => {
    const g = ys(() => {
      h.current = 0, d.current && x();
    });
    let R;
    const P = d.current, $ = En(P);
    return $.addEventListener("resize", g), typeof ResizeObserver < "u" && (R = new ResizeObserver(g), R.observe(P)), () => {
      g.clear(), $.removeEventListener("resize", g), R && R.disconnect();
    };
  }), sn(() => {
    C();
  }), E.useEffect(() => {
    h.current = 0;
  }, [l]);
  const b = (g) => {
    h.current = 0, u || C(), r && r(g);
  };
  return /* @__PURE__ */ pe(E.Fragment, {
    children: [/* @__PURE__ */ w("textarea", T({
      value: l,
      onChange: b,
      ref: f,
      rows: a,
      style: T({
        height: v.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: v.overflow ? "hidden" : void 0
      }, s)
    }, c)), /* @__PURE__ */ w("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: p,
      tabIndex: -1,
      style: T({}, pw.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (yf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
function tu(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function vf(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: i = "any",
    stringify: a,
    trim: s = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: u
  }) => {
    let d = s ? c.trim() : c;
    n && (d = d.toLowerCase()), t && (d = tu(d));
    const f = d ? l.filter((p) => {
      let h = (a || u)(p);
      return n && (h = h.toLowerCase()), t && (h = tu(h)), i === "start" ? h.indexOf(d) === 0 : h.indexOf(d) > -1;
    }) : l;
    return typeof r == "number" ? f.slice(0, r) : f;
  };
}
function fa(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const mw = vf(), nu = 5, hw = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function yw(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = hw,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? [] : null,
    disableClearable: f = !1,
    disableCloseOnSelect: p = !1,
    disabled: h,
    disabledItemsFocusable: v = !1,
    disableListWrap: y = !1,
    filterOptions: m = mw,
    filterSelectedOptions: O = !1,
    freeSolo: C = !1,
    getOptionDisabled: x,
    getOptionLabel: b = (A) => {
      var I;
      return (I = A.label) != null ? I : A;
    },
    groupBy: g,
    handleHomeEndKeys: R = !e.freeSolo,
    id: P,
    includeInputInList: $ = !1,
    inputValue: F,
    isOptionEqualToValue: N = (A, I) => A === I,
    multiple: M = !1,
    onChange: q,
    onClose: z,
    onHighlightChange: L,
    onInputChange: D,
    onOpen: W,
    open: H,
    openOnFocus: le = !1,
    options: te,
    readOnly: _ = !1,
    selectOnFocus: Y = !e.freeSolo,
    value: re
  } = e, ee = vs(P);
  let K = b;
  K = (A) => {
    const I = b(A);
    if (typeof I != "string") {
      if (process.env.NODE_ENV !== "production") {
        const B = I === void 0 ? "undefined" : `${typeof I} (${I})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${B} instead of a string for ${JSON.stringify(A)}.`);
      }
      return String(I);
    }
    return I;
  };
  const J = E.useRef(!1), Z = E.useRef(!0), Q = E.useRef(null), oe = E.useRef(null), [ae, fe] = E.useState(null), [se, j] = E.useState(-1), ye = i ? 0 : -1, k = E.useRef(ye), [X, we] = ir({
    controlled: re,
    default: d,
    name: u
  }), [ce, qe] = ir({
    controlled: F,
    default: "",
    name: u,
    state: "inputValue"
  }), [He, Ne] = E.useState(!1), Te = E.useCallback((A, I) => {
    if (!(M ? X.length < I.length : I !== null) && !l)
      return;
    let G;
    if (M)
      G = "";
    else if (I == null)
      G = "";
    else {
      const ie = K(I);
      G = typeof ie == "string" ? ie : "";
    }
    ce !== G && (qe(G), D && D(A, G, "reset"));
  }, [K, ce, M, D, qe, l, X]), [We, Pe] = ir({
    controlled: H,
    default: !1,
    name: u,
    state: "open"
  }), [Ze, et] = E.useState(!0), ot = !M && X != null && ce === K(X), $e = We && !_, ve = $e ? m(
    te.filter((A) => !(O && (M ? X : [X]).some((I) => I !== null && N(A, I)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: ot && Ze ? "" : ce,
      getOptionLabel: K
    }
  ) : [], ue = Gm({
    filteredOptions: ve,
    value: X,
    inputValue: ce
  });
  E.useEffect(() => {
    const A = X !== ue.value;
    He && !A || C && !A || Te(null, X);
  }, [X, Te, He, ue.value, C]);
  const st = We && ve.length > 0 && !_;
  if (process.env.NODE_ENV !== "production" && X !== null && !C && te.length > 0) {
    const A = (M ? X : [X]).filter((I) => !te.some((B) => N(B, I)));
    A.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${A.length > 1 ? JSON.stringify(A) : JSON.stringify(A[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const de = Ut((A) => {
    A === -1 ? Q.current.focus() : ae.querySelector(`[data-tag-index="${A}"]`).focus();
  });
  E.useEffect(() => {
    M && se > X.length - 1 && (j(-1), de(-1));
  }, [X, M, se, de]);
  function Ee(A, I) {
    if (!oe.current || A === -1)
      return -1;
    let B = A;
    for (; ; ) {
      if (I === "next" && B === ve.length || I === "previous" && B === -1)
        return -1;
      const G = oe.current.querySelector(`[data-option-index="${B}"]`), ie = v ? !1 : !G || G.disabled || G.getAttribute("aria-disabled") === "true";
      if (G && !G.hasAttribute("tabindex") || ie)
        B += I === "next" ? 1 : -1;
      else
        return B;
    }
  }
  const Ae = Ut(({
    event: A,
    index: I,
    reason: B = "auto"
  }) => {
    if (k.current = I, I === -1 ? Q.current.removeAttribute("aria-activedescendant") : Q.current.setAttribute("aria-activedescendant", `${ee}-option-${I}`), L && L(A, I === -1 ? null : ve[I], B), !oe.current)
      return;
    const G = oe.current.querySelector(`[role="option"].${n}-focused`);
    G && (G.classList.remove(`${n}-focused`), G.classList.remove(`${n}-focusVisible`));
    let ie = oe.current;
    if (oe.current.getAttribute("role") !== "listbox" && (ie = oe.current.parentElement.querySelector('[role="listbox"]')), !ie)
      return;
    if (I === -1) {
      ie.scrollTop = 0;
      return;
    }
    const xe = oe.current.querySelector(`[data-option-index="${I}"]`);
    if (xe && (xe.classList.add(`${n}-focused`), B === "keyboard" && xe.classList.add(`${n}-focusVisible`), ie.scrollHeight > ie.clientHeight && B !== "mouse" && B !== "touch")) {
      const Oe = xe, Re = ie.clientHeight + ie.scrollTop, ft = Oe.offsetTop + Oe.offsetHeight;
      ft > Re ? ie.scrollTop = ft - ie.clientHeight : Oe.offsetTop - Oe.offsetHeight * (g ? 1.3 : 0) < ie.scrollTop && (ie.scrollTop = Oe.offsetTop - Oe.offsetHeight * (g ? 1.3 : 0));
    }
  }), tt = Ut(({
    event: A,
    diff: I,
    direction: B = "next",
    reason: G = "auto"
  }) => {
    if (!$e)
      return;
    const xe = Ee((() => {
      const Oe = ve.length - 1;
      if (I === "reset")
        return ye;
      if (I === "start")
        return 0;
      if (I === "end")
        return Oe;
      const Re = k.current + I;
      return Re < 0 ? Re === -1 && $ ? -1 : y && k.current !== -1 || Math.abs(I) > 1 ? 0 : Oe : Re > Oe ? Re === Oe + 1 && $ ? -1 : y || Math.abs(I) > 1 ? Oe : 0 : Re;
    })(), B);
    if (Ae({
      index: xe,
      reason: G,
      event: A
    }), r && I !== "reset")
      if (xe === -1)
        Q.current.value = ce;
      else {
        const Oe = K(ve[xe]);
        Q.current.value = Oe, Oe.toLowerCase().indexOf(ce.toLowerCase()) === 0 && ce.length > 0 && Q.current.setSelectionRange(ce.length, Oe.length);
      }
  }), dn = () => {
    const A = (I, B) => {
      const G = I ? K(I) : "", ie = B ? K(B) : "";
      return G === ie;
    };
    if (k.current !== -1 && ue.filteredOptions && ue.filteredOptions.length !== ve.length && ue.inputValue === ce && (M ? X.length === ue.value.length && ue.value.every((I, B) => K(X[B]) === K(I)) : A(ue.value, X))) {
      const I = ue.filteredOptions[k.current];
      if (I && ve.some((G) => K(G) === K(I)))
        return !0;
    }
    return !1;
  }, zt = E.useCallback(() => {
    if (!$e || dn())
      return;
    const A = M ? X[0] : X;
    if (ve.length === 0 || A == null) {
      tt({
        diff: "reset"
      });
      return;
    }
    if (oe.current) {
      if (A != null) {
        const I = ve[k.current];
        if (M && I && fa(X, (G) => N(I, G)) !== -1)
          return;
        const B = fa(ve, (G) => N(G, A));
        B === -1 ? tt({
          diff: "reset"
        }) : Ae({
          index: B
        });
        return;
      }
      if (k.current >= ve.length - 1) {
        Ae({
          index: ve.length - 1
        });
        return;
      }
      Ae({
        index: k.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    ve.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    M ? !1 : X,
    O,
    tt,
    Ae,
    $e,
    ce,
    M
  ]), Tr = Ut((A) => {
    to(oe, A), A && zt();
  });
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    (!Q.current || Q.current.nodeName !== "INPUT") && (Q.current && Q.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${Q.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), E.useEffect(() => {
    zt();
  }, [zt]);
  const jt = (A) => {
    We || (Pe(!0), et(!0), W && W(A));
  }, gt = (A, I) => {
    We && (Pe(!1), z && z(A, I));
  }, St = (A, I, B, G) => {
    if (M) {
      if (X.length === I.length && X.every((ie, xe) => ie === I[xe]))
        return;
    } else if (X === I)
      return;
    q && q(A, I, B, G), we(I);
  }, vt = E.useRef(!1), Bt = (A, I, B = "selectOption", G = "options") => {
    let ie = B, xe = I;
    if (M) {
      if (xe = Array.isArray(X) ? X.slice() : [], process.env.NODE_ENV !== "production") {
        const Re = xe.filter((ft) => N(I, ft));
        Re.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Re.length} matches.`].join(`
`));
      }
      const Oe = fa(xe, (Re) => N(I, Re));
      Oe === -1 ? xe.push(I) : G !== "freeSolo" && (xe.splice(Oe, 1), ie = "removeOption");
    }
    Te(A, xe), St(A, xe, ie, {
      option: I
    }), !p && (!A || !A.ctrlKey && !A.metaKey) && gt(A, ie), (s === !0 || s === "touch" && vt.current || s === "mouse" && !vt.current) && Q.current.blur();
  };
  function Rn(A, I) {
    if (A === -1)
      return -1;
    let B = A;
    for (; ; ) {
      if (I === "next" && B === X.length || I === "previous" && B === -1)
        return -1;
      const G = ae.querySelector(`[data-tag-index="${B}"]`);
      if (!G || !G.hasAttribute("tabindex") || G.disabled || G.getAttribute("aria-disabled") === "true")
        B += I === "next" ? 1 : -1;
      else
        return B;
    }
  }
  const fn = (A, I) => {
    if (!M)
      return;
    ce === "" && gt(A, "toggleInput");
    let B = se;
    se === -1 ? ce === "" && I === "previous" && (B = X.length - 1) : (B += I === "next" ? 1 : -1, B < 0 && (B = 0), B === X.length && (B = -1)), B = Rn(B, I), j(B), de(B);
  }, Vn = (A) => {
    J.current = !0, qe(""), D && D(A, "", "clear"), St(A, M ? [] : null, "clear");
  }, qn = (A) => (I) => {
    if (A.onKeyDown && A.onKeyDown(I), !I.defaultMuiPrevented && (se !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(I.key) === -1 && (j(-1), de(-1)), I.which !== 229))
      switch (I.key) {
        case "Home":
          $e && R && (I.preventDefault(), tt({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: I
          }));
          break;
        case "End":
          $e && R && (I.preventDefault(), tt({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: I
          }));
          break;
        case "PageUp":
          I.preventDefault(), tt({
            diff: -nu,
            direction: "previous",
            reason: "keyboard",
            event: I
          }), jt(I);
          break;
        case "PageDown":
          I.preventDefault(), tt({
            diff: nu,
            direction: "next",
            reason: "keyboard",
            event: I
          }), jt(I);
          break;
        case "ArrowDown":
          I.preventDefault(), tt({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: I
          }), jt(I);
          break;
        case "ArrowUp":
          I.preventDefault(), tt({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: I
          }), jt(I);
          break;
        case "ArrowLeft":
          fn(I, "previous");
          break;
        case "ArrowRight":
          fn(I, "next");
          break;
        case "Enter":
          if (k.current !== -1 && $e) {
            const B = ve[k.current], G = x ? x(B) : !1;
            if (I.preventDefault(), G)
              return;
            Bt(I, B, "selectOption"), r && Q.current.setSelectionRange(Q.current.value.length, Q.current.value.length);
          } else
            C && ce !== "" && ot === !1 && (M && I.preventDefault(), Bt(I, ce, "createOption", "freeSolo"));
          break;
        case "Escape":
          $e ? (I.preventDefault(), I.stopPropagation(), gt(I, "escape")) : c && (ce !== "" || M && X.length > 0) && (I.preventDefault(), I.stopPropagation(), Vn(I));
          break;
        case "Backspace":
          if (M && !_ && ce === "" && X.length > 0) {
            const B = se === -1 ? X.length - 1 : se, G = X.slice();
            G.splice(B, 1), St(I, G, "removeOption", {
              option: X[B]
            });
          }
          break;
        case "Delete":
          if (M && !_ && ce === "" && X.length > 0 && se !== -1) {
            const B = se, G = X.slice();
            G.splice(B, 1), St(I, G, "removeOption", {
              option: X[B]
            });
          }
          break;
      }
  }, Cr = (A) => {
    Ne(!0), le && !J.current && jt(A);
  }, Hn = (A) => {
    if (t(oe)) {
      Q.current.focus();
      return;
    }
    Ne(!1), Z.current = !0, J.current = !1, a && k.current !== -1 && $e ? Bt(A, ve[k.current], "blur") : a && C && ce !== "" ? Bt(A, ce, "blur", "freeSolo") : l && Te(A, X), gt(A, "blur");
  }, pn = (A) => {
    const I = A.target.value;
    ce !== I && (qe(I), et(!1), D && D(A, I, "input")), I === "" ? !f && !M && St(A, null, "clear") : jt(A);
  }, lt = (A) => {
    const I = Number(A.currentTarget.getAttribute("data-option-index"));
    k.current !== I && Ae({
      event: A,
      index: I,
      reason: "mouse"
    });
  }, rt = (A) => {
    Ae({
      event: A,
      index: Number(A.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), vt.current = !0;
  }, bt = (A) => {
    const I = Number(A.currentTarget.getAttribute("data-option-index"));
    Bt(A, ve[I], "selectOption"), vt.current = !1;
  }, So = (A) => (I) => {
    const B = X.slice();
    B.splice(A, 1), St(I, B, "removeOption", {
      option: X[A]
    });
  }, Yn = (A) => {
    We ? gt(A, "toggleInput") : jt(A);
  }, To = (A) => {
    A.currentTarget.contains(A.target) && A.target.getAttribute("id") !== ee && A.preventDefault();
  }, Rr = (A) => {
    A.currentTarget.contains(A.target) && (Q.current.focus(), Y && Z.current && Q.current.selectionEnd - Q.current.selectionStart === 0 && Q.current.select(), Z.current = !1);
  }, S = (A) => {
    (ce === "" || !We) && Yn(A);
  };
  let V = C && ce.length > 0;
  V = V || (M ? X.length > 0 : X !== null);
  let ne = ve;
  if (g) {
    const A = /* @__PURE__ */ new Map();
    let I = !1;
    ne = ve.reduce((B, G, ie) => {
      const xe = g(G);
      return B.length > 0 && B[B.length - 1].group === xe ? B[B.length - 1].options.push(G) : (process.env.NODE_ENV !== "production" && (A.get(xe) && !I && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), I = !0), A.set(xe, !0)), B.push({
        key: ie,
        index: ie,
        group: xe,
        options: [G]
      })), B;
    }, []);
  }
  return h && He && Hn(), {
    getRootProps: (A = {}) => T({
      "aria-owns": st ? `${ee}-listbox` : null
    }, A, {
      onKeyDown: qn(A),
      onMouseDown: To,
      onClick: Rr
    }),
    getInputLabelProps: () => ({
      id: `${ee}-label`,
      htmlFor: ee
    }),
    getInputProps: () => ({
      id: ee,
      value: ce,
      onBlur: Hn,
      onFocus: Cr,
      onChange: pn,
      onMouseDown: S,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": $e ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": st ? `${ee}-listbox` : void 0,
      "aria-expanded": st,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: Q,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: h
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: Vn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: Yn
    }),
    getTagProps: ({
      index: A
    }) => T({
      key: A,
      "data-tag-index": A,
      tabIndex: -1
    }, !_ && {
      onDelete: So(A)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${ee}-listbox`,
      "aria-labelledby": `${ee}-label`,
      ref: Tr,
      onMouseDown: (A) => {
        A.preventDefault();
      }
    }),
    getOptionProps: ({
      index: A,
      option: I
    }) => {
      const B = (M ? X : [X]).some((ie) => ie != null && N(I, ie)), G = x ? x(I) : !1;
      return {
        key: K(I),
        tabIndex: -1,
        role: "option",
        id: `${ee}-option-${A}`,
        onMouseMove: lt,
        onClick: bt,
        onTouchStart: rt,
        "data-option-index": A,
        "aria-disabled": G,
        "aria-selected": B
      };
    },
    id: ee,
    inputValue: ce,
    value: X,
    dirty: V,
    expanded: $e && ae,
    popupOpen: $e,
    focused: He || se !== -1,
    anchorEl: ae,
    setAnchorEl: fe,
    focusedTag: se,
    groupedOptions: ne
  };
}
const vw = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], gw = he(mf, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), gf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r;
  const i = pd(), a = Ge({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: h,
    open: v,
    placement: y,
    popperOptions: m,
    popperRef: O,
    transition: C,
    slots: x,
    slotProps: b
  } = a, g = ge(a, vw), R = (r = x == null ? void 0 : x.root) != null ? r : c == null ? void 0 : c.Root, P = T({
    anchorEl: s,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: h,
    open: v,
    placement: y,
    popperOptions: m,
    popperRef: O,
    transition: C
  }, g);
  return /* @__PURE__ */ w(gw, T({
    as: l,
    direction: i == null ? void 0 : i.direction,
    slots: {
      root: R
    },
    slotProps: b ?? u
  }, P, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (gf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: o.oneOfType([Jt, o.object, o.func]),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Jt, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Wt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const bf = gf;
function bw(e) {
  return ze("MuiListSubheader", e);
}
Ve("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Ew = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], xw = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${me(n)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return Ye(s, bw, t);
}, Ow = he("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${me(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14)
}, t.color === "primary" && {
  color: (e.vars || e).palette.primary.main
}, t.color === "inherit" && {
  color: "inherit"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.inset && {
  paddingLeft: 72
}, !t.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (e.vars || e).palette.background.paper
})), Xs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: a = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = r, d = ge(r, Ew), f = T({}, r, {
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), p = xw(f);
  return /* @__PURE__ */ w(Ow, T({
    as: s,
    className: be(p.root, i),
    ref: n,
    ownerState: f
  }, d));
});
Xs.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Xs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: o.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: o.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const ww = Xs;
function Sw(e) {
  return ze("MuiPaper", e);
}
Ve("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Tw = ["className", "component", "elevation", "square", "variant"], Cw = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ye(a, Sw, i);
}, Rw = he("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return T({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && T({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${pt("#fff", nc(t.elevation))}, ${pt("#fff", nc(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Ef = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: a = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ge(r, Tw), d = T({}, r, {
    component: a,
    elevation: s,
    square: l,
    variant: c
  }), f = Cw(d);
  return process.env.NODE_ENV !== "production" && zn().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ w(Rw, T({
    as: a,
    ownerState: d,
    className: be(f.root, i),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (Ef.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: an(gs, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
const Js = Ef;
function xf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ka(e, t);
}
const ru = {
  disabled: !1
};
var Pw = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const ii = Pt.createContext(null);
var $w = function(t) {
  return t.scrollTop;
}, jr = "unmounted", $n = "exited", An = "entering", or = "entered", Ja = "exiting", un = /* @__PURE__ */ function(e) {
  xf(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = $n, a.appearStatus = An) : c = or : r.unmountOnExit || r.mountOnEnter ? c = jr : c = $n, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === jr ? {
      status: $n
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== An && s !== or && (a = An) : (s === An || s === or) && (a = Ja);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, s, l;
    return a = s = l = i, i != null && typeof i != "number" && (a = i.exit, s = i.enter, l = i.appear !== void 0 ? i.appear : s), {
      exit: a,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === An) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Co.findDOMNode(this);
          s && $w(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === $n && this.setState({
        status: jr
      });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Co.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), p = l ? f.appear : f.enter;
    if (!i && !s || ru.disabled) {
      this.safeSetState({
        status: or
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: An
    }, function() {
      a.props.onEntering(u, d), a.onTransitionEnd(p, function() {
        a.safeSetState({
          status: or
        }, function() {
          a.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Co.findDOMNode(this);
    if (!a || ru.disabled) {
      this.safeSetState({
        status: $n
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Ja
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: $n
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Co.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === jr)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = ge(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Pt.createElement(ii.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : Pt.cloneElement(Pt.Children.only(s), l))
    );
  }, t;
}(Pt.Component);
un.contextType = ii;
un.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, i, a) {
      var s = e[t];
      return o.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Pw;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function nr() {
}
un.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: nr,
  onEntering: nr,
  onEntered: nr,
  onExit: nr,
  onExiting: nr,
  onExited: nr
};
un.UNMOUNTED = jr;
un.EXITED = $n;
un.ENTERING = An;
un.ENTERED = or;
un.EXITING = Ja;
const Of = un;
function Zs(e, t) {
  var n = function(a) {
    return t && Mo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Mp.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Aw(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (r[a] = i, i = []) : i.push(a);
  var s, l = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var u = r[c][s];
        l[r[c][s]] = n(u);
      }
    l[c] = n(c);
  }
  for (s = 0; s < i.length; s++)
    l[i[s]] = n(i[s]);
  return l;
}
function Mn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Iw(e, t) {
  return Zs(e.children, function(n) {
    return _o(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Mn(n, "appear", e),
      enter: Mn(n, "enter", e),
      exit: Mn(n, "exit", e)
    });
  });
}
function Nw(e, t, n) {
  var r = Zs(e.children), i = Aw(t, r);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (Mo(s)) {
      var l = a in t, c = a in r, u = t[a], d = Mo(u) && !u.props.in;
      c && (!l || d) ? i[a] = _o(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Mn(s, "exit", e),
        enter: Mn(s, "enter", e)
      }) : !c && l && !d ? i[a] = _o(s, {
        in: !1
      }) : c && l && Mo(u) && (i[a] = _o(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: Mn(s, "exit", e),
        enter: Mn(s, "enter", e)
      }));
    }
  }), i;
}
var kw = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Mw = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, el = /* @__PURE__ */ function(e) {
  xf(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(Tg(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, a) {
    var s = a.children, l = a.handleExited, c = a.firstRender;
    return {
      children: c ? Iw(i, l) : Nw(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = Zs(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = T({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = ge(i, ["component", "childFactory"]), c = this.state.contextValue, u = kw(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ Pt.createElement(ii.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Pt.createElement(ii.Provider, {
      value: c
    }, /* @__PURE__ */ Pt.createElement(a, l, u));
  }, t;
}(Pt.Component);
el.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: o.func
} : {};
el.defaultProps = Mw;
const _w = el;
function wf(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = E.useState(!1), p = be(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, v = be(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), E.useEffect(() => {
    if (!l && c != null) {
      const y = setTimeout(c, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ w("span", {
    className: p,
    style: h,
    children: /* @__PURE__ */ w("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (wf.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const Dw = Ve("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Nt = Dw, Fw = ["center", "classes", "className"];
let Ii = (e) => e, ou, iu, au, su;
const Za = 550, Lw = 80, jw = us(ou || (ou = Ii`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Bw = us(iu || (iu = Ii`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Uw = us(au || (au = Ii`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Ww = he("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), zw = he(wf, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(su || (su = Ii`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Nt.rippleVisible, jw, Za, ({
  theme: e
}) => e.transitions.easing.easeInOut, Nt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Nt.child, Nt.childLeaving, Bw, Za, ({
  theme: e
}) => e.transitions.easing.easeInOut, Nt.childPulsate, Uw, ({
  theme: e
}) => e.transitions.easing.easeInOut), Sf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s
  } = r, l = ge(r, Fw), [c, u] = E.useState([]), d = E.useRef(0), f = E.useRef(null);
  E.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const p = E.useRef(!1), h = E.useRef(0), v = E.useRef(null), y = E.useRef(null);
  E.useEffect(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  const m = E.useCallback((b) => {
    const {
      pulsate: g,
      rippleX: R,
      rippleY: P,
      rippleSize: $,
      cb: F
    } = b;
    u((N) => [...N, /* @__PURE__ */ w(zw, {
      classes: {
        ripple: be(a.ripple, Nt.ripple),
        rippleVisible: be(a.rippleVisible, Nt.rippleVisible),
        ripplePulsate: be(a.ripplePulsate, Nt.ripplePulsate),
        child: be(a.child, Nt.child),
        childLeaving: be(a.childLeaving, Nt.childLeaving),
        childPulsate: be(a.childPulsate, Nt.childPulsate)
      },
      timeout: Za,
      pulsate: g,
      rippleX: R,
      rippleY: P,
      rippleSize: $
    }, d.current)]), d.current += 1, f.current = F;
  }, [a]), O = E.useCallback((b = {}, g = {}, R = () => {
  }) => {
    const {
      pulsate: P = !1,
      center: $ = i || g.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = g;
    if ((b == null ? void 0 : b.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (p.current = !0);
    const N = F ? null : y.current, M = N ? N.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let q, z, L;
    if ($ || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      q = Math.round(M.width / 2), z = Math.round(M.height / 2);
    else {
      const {
        clientX: D,
        clientY: W
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      q = Math.round(D - M.left), z = Math.round(W - M.top);
    }
    if ($)
      L = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const D = Math.max(Math.abs((N ? N.clientWidth : 0) - q), q) * 2 + 2, W = Math.max(Math.abs((N ? N.clientHeight : 0) - z), z) * 2 + 2;
      L = Math.sqrt(D ** 2 + W ** 2);
    }
    b != null && b.touches ? v.current === null && (v.current = () => {
      m({
        pulsate: P,
        rippleX: q,
        rippleY: z,
        rippleSize: L,
        cb: R
      });
    }, h.current = setTimeout(() => {
      v.current && (v.current(), v.current = null);
    }, Lw)) : m({
      pulsate: P,
      rippleX: q,
      rippleY: z,
      rippleSize: L,
      cb: R
    });
  }, [i, m]), C = E.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), x = E.useCallback((b, g) => {
    if (clearTimeout(h.current), (b == null ? void 0 : b.type) === "touchend" && v.current) {
      v.current(), v.current = null, h.current = setTimeout(() => {
        x(b, g);
      });
      return;
    }
    v.current = null, u((R) => R.length > 0 ? R.slice(1) : R), f.current = g;
  }, []);
  return E.useImperativeHandle(n, () => ({
    pulsate: C,
    start: O,
    stop: x
  }), [C, O, x]), /* @__PURE__ */ w(Ww, T({
    className: be(Nt.root, a.root, s),
    ref: y
  }, l, {
    children: /* @__PURE__ */ w(_w, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Sf.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
const Vw = Sf;
function qw(e) {
  return ze("MuiButtonBase", e);
}
const Hw = Ve("MuiButtonBase", ["root", "disabled", "focusVisible"]), Yw = Hw, Gw = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Kw = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = Ye({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, qw, i);
  return n && r && (s.root += ` ${r}`), s;
}, Qw = he("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Yw.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Tf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: p = !1,
    LinkComponent: h = "a",
    onBlur: v,
    onClick: y,
    onContextMenu: m,
    onDragLeave: O,
    onFocus: C,
    onFocusVisible: x,
    onKeyDown: b,
    onKeyUp: g,
    onMouseDown: R,
    onMouseLeave: P,
    onMouseUp: $,
    onTouchEnd: F,
    onTouchMove: N,
    onTouchStart: M,
    tabIndex: q = 0,
    TouchRippleProps: z,
    touchRippleRef: L,
    type: D
  } = r, W = ge(r, Gw), H = E.useRef(null), le = E.useRef(null), te = it(le, L), {
    isFocusVisibleRef: _,
    onFocus: Y,
    onBlur: re,
    ref: ee
  } = rd(), [K, J] = E.useState(!1);
  u && K && J(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      J(!0), H.current.focus();
    }
  }), []);
  const [Z, Q] = E.useState(!1);
  E.useEffect(() => {
    Q(!0);
  }, []);
  const oe = Z && !d && !u;
  E.useEffect(() => {
    K && p && !d && Z && le.current.pulsate();
  }, [d, p, K, Z]);
  function ae(ue, st, de = f) {
    return Ut((Ee) => (st && st(Ee), !de && le.current && le.current[ue](Ee), !0));
  }
  const fe = ae("start", R), se = ae("stop", m), j = ae("stop", O), ye = ae("stop", $), k = ae("stop", (ue) => {
    K && ue.preventDefault(), P && P(ue);
  }), X = ae("start", M), we = ae("stop", F), ce = ae("stop", N), qe = ae("stop", (ue) => {
    re(ue), _.current === !1 && J(!1), v && v(ue);
  }, !1), He = Ut((ue) => {
    H.current || (H.current = ue.currentTarget), Y(ue), _.current === !0 && (J(!0), x && x(ue)), C && C(ue);
  }), Ne = () => {
    const ue = H.current;
    return c && c !== "button" && !(ue.tagName === "A" && ue.href);
  }, Te = E.useRef(!1), We = Ut((ue) => {
    p && !Te.current && K && le.current && ue.key === " " && (Te.current = !0, le.current.stop(ue, () => {
      le.current.start(ue);
    })), ue.target === ue.currentTarget && Ne() && ue.key === " " && ue.preventDefault(), b && b(ue), ue.target === ue.currentTarget && Ne() && ue.key === "Enter" && !u && (ue.preventDefault(), y && y(ue));
  }), Pe = Ut((ue) => {
    p && ue.key === " " && le.current && K && !ue.defaultPrevented && (Te.current = !1, le.current.stop(ue, () => {
      le.current.pulsate(ue);
    })), g && g(ue), y && ue.target === ue.currentTarget && Ne() && ue.key === " " && !ue.defaultPrevented && y(ue);
  });
  let Ze = c;
  Ze === "button" && (W.href || W.to) && (Ze = h);
  const et = {};
  Ze === "button" ? (et.type = D === void 0 ? "button" : D, et.disabled = u) : (!W.href && !W.to && (et.role = "button"), u && (et["aria-disabled"] = u));
  const ot = it(n, ee, H);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    oe && !le.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [oe]);
  const $e = T({}, r, {
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: q,
    focusVisible: K
  }), ve = Kw($e);
  return /* @__PURE__ */ pe(Qw, T({
    as: Ze,
    className: be(ve.root, l),
    ownerState: $e,
    onBlur: qe,
    onClick: y,
    onContextMenu: se,
    onFocus: He,
    onKeyDown: We,
    onKeyUp: Pe,
    onMouseDown: fe,
    onMouseLeave: k,
    onMouseUp: ye,
    onDragLeave: j,
    onTouchEnd: we,
    onTouchMove: ce,
    onTouchStart: X,
    ref: ot,
    tabIndex: u ? -1 : q,
    type: D
  }, et, W, {
    children: [s, oe ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ w(Vw, T({
        ref: te,
        center: a
      }, z))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Tf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Wt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: hs,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
const es = Tf;
function Xw(e) {
  return ze("MuiIconButton", e);
}
const Jw = Ve("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Zw = Jw, eS = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], tS = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: a
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${me(r)}`, i && `edge${me(i)}`, `size${me(a)}`]
  };
  return Ye(s, Xw, t);
}, nS = he(es, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${me(n.color)}`], n.edge && t[`edge${me(n.edge)}`], t[`size${me(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : pt(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return T({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && T({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": T({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : pt(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${Zw.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Cf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, f = ge(r, eS), p = T({}, r, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), h = tS(p);
  return /* @__PURE__ */ w(nS, T({
    className: be(h.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n,
    ownerState: p
  }, f, {
    children: a
  }));
});
process.env.NODE_ENV !== "production" && (Cf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: an(o.node, (e) => E.Children.toArray(e.children).some((n) => /* @__PURE__ */ E.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Rf = Cf;
function rS(e) {
  return ze("MuiSvgIcon", e);
}
Ve("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const oS = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], iS = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${me(t)}`, `fontSize${me(n)}`]
  };
  return Ye(i, rS, r);
}, aS = he("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${me(n.color)}`], t[`fontSize${me(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, i, a, s, l, c, u, d, f, p, h, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((a = e.typography) == null || (s = a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? f : {
      action: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.active,
      disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
      inherit: void 0
    }[t.color]
  };
}), tl = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24"
  } = r, h = ge(r, oS), v = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", y = T({}, r, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: v
  }), m = {};
  d || (m.viewBox = p);
  const O = iS(y);
  return /* @__PURE__ */ pe(aS, T({
    as: l,
    className: be(O.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, m, h, v && i.props, {
    ownerState: y,
    children: [v ? i.props.children : i, f ? /* @__PURE__ */ w("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
tl.muiName = "SvgIcon";
const lu = tl;
function Ni(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ w(lu, T({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = lu.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(n));
}
const sS = Ni(/* @__PURE__ */ w("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function lS(e) {
  return ze("MuiChip", e);
}
const cS = Ve("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), ke = cS, uS = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], dS = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: i,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, n && "disabled", `size${me(r)}`, `color${me(i)}`, l && "clickable", l && `clickableColor${me(i)}`, s && "deletable", s && `deletableColor${me(i)}`, `${c}${me(i)}`],
    label: ["label", `label${me(r)}`],
    avatar: ["avatar", `avatar${me(r)}`, `avatarColor${me(i)}`],
    icon: ["icon", `icon${me(r)}`, `iconColor${me(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${me(r)}`, `deleteIconColor${me(i)}`, `deleteIcon${me(c)}Color${me(i)}`]
  };
  return Ye(u, lS, t);
}, fS = he("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: i,
      clickable: a,
      onDelete: s,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${ke.avatar}`]: t.avatar
    }, {
      [`& .${ke.avatar}`]: t[`avatar${me(l)}`]
    }, {
      [`& .${ke.avatar}`]: t[`avatarColor${me(r)}`]
    }, {
      [`& .${ke.icon}`]: t.icon
    }, {
      [`& .${ke.icon}`]: t[`icon${me(l)}`]
    }, {
      [`& .${ke.icon}`]: t[`iconColor${me(i)}`]
    }, {
      [`& .${ke.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ke.deleteIcon}`]: t[`deleteIcon${me(l)}`]
    }, {
      [`& .${ke.deleteIcon}`]: t[`deleteIconColor${me(r)}`]
    }, {
      [`& .${ke.deleteIcon}`]: t[`deleteIcon${me(c)}Color${me(r)}`]
    }, t.root, t[`size${me(l)}`], t[`color${me(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${me(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${me(r)}`], t[c], t[`${c}${me(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return T({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${ke.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ke.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ke.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ke.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ke.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ke.icon}`]: T({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && T({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${ke.deleteIcon}`]: T({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : pt(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : pt(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : pt(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${ke.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : pt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${ke.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => T({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : pt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${ke.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : pt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${ke.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => T({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${ke.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${ke.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${ke.avatar}`]: {
    marginLeft: 4
  },
  [`& .${ke.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${ke.icon}`]: {
    marginLeft: 4
  },
  [`& .${ke.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${ke.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${ke.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : pt(e.palette[t.color].main, 0.7)}`,
  [`&.${ke.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : pt(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${ke.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : pt(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${ke.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : pt(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), pS = he("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${me(r)}`]];
  }
})(({
  ownerState: e
}) => T({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}));
function cu(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Pf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: p,
    onClick: h,
    onDelete: v,
    onKeyDown: y,
    onKeyUp: m,
    size: O = "medium",
    variant: C = "filled",
    tabIndex: x,
    skipFocusWhenDisabled: b = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, g = ge(r, uS), R = E.useRef(null), P = it(R, n), $ = (te) => {
    te.stopPropagation(), v && v(te);
  }, F = (te) => {
    te.currentTarget === te.target && cu(te) && te.preventDefault(), y && y(te);
  }, N = (te) => {
    te.currentTarget === te.target && (v && cu(te) ? v(te) : te.key === "Escape" && R.current && R.current.blur()), m && m(te);
  }, M = s !== !1 && h ? !0 : s, q = M || v ? es : c || "div", z = T({}, r, {
    component: q,
    disabled: d,
    size: O,
    color: l,
    iconColor: /* @__PURE__ */ E.isValidElement(f) && f.props.color || l,
    onDelete: !!v,
    clickable: M,
    variant: C
  }), L = dS(z), D = q === es ? T({
    component: c || "div",
    focusVisibleClassName: L.focusVisible
  }, v && {
    disableRipple: !0
  }) : {};
  let W = null;
  v && (W = u && /* @__PURE__ */ E.isValidElement(u) ? /* @__PURE__ */ E.cloneElement(u, {
    className: be(u.props.className, L.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ w(sS, {
    className: be(L.deleteIcon),
    onClick: $
  }));
  let H = null;
  i && /* @__PURE__ */ E.isValidElement(i) && (H = /* @__PURE__ */ E.cloneElement(i, {
    className: be(L.avatar, i.props.className)
  }));
  let le = null;
  return f && /* @__PURE__ */ E.isValidElement(f) && (le = /* @__PURE__ */ E.cloneElement(f, {
    className: be(L.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && H && le && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ pe(fS, T({
    as: q,
    className: be(L.root, a),
    disabled: M && d ? !0 : void 0,
    onClick: h,
    onKeyDown: F,
    onKeyUp: N,
    ref: P,
    tabIndex: b && d ? -1 : x,
    ownerState: z
  }, D, g, {
    children: [H || le, /* @__PURE__ */ w(pS, {
      className: be(L.label),
      ownerState: z,
      children: p
    }), W]
  }));
});
process.env.NODE_ENV !== "production" && (Pf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Avatar element to display.
   */
  avatar: o.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: nd,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: o.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: o.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Icon element.
   */
  icon: o.element,
  /**
   * The content of the component.
   */
  label: o.node,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  tabIndex: o.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined"]), o.string])
});
const mS = Pf;
function xr({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const $f = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && ($f.displayName = "FormControlContext");
const nl = $f;
function Or() {
  return E.useContext(nl);
}
function Af(e) {
  return /* @__PURE__ */ w(md, T({}, e, {
    defaultTheme: wi,
    themeId: di
  }));
}
process.env.NODE_ENV !== "production" && (Af.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function uu(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ai(e, t = !1) {
  return e && (uu(e.value) && e.value !== "" || t && uu(e.defaultValue) && e.defaultValue !== "");
}
function hS(e) {
  return e.startAdornment;
}
function yS(e) {
  return ze("MuiInputBase", e);
}
const vS = Ve("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), Tt = vS, gS = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], ki = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${me(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Mi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, bS = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: i,
    endAdornment: a,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: p,
    startAdornment: h,
    type: v
  } = e, y = {
    root: ["root", `color${me(n)}`, r && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", p === "small" && "sizeSmall", d && "multiline", h && "adornedStart", a && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", d && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", h && "inputAdornedStart", a && "inputAdornedEnd", f && "readOnly"]
  };
  return Ye(y, yS, t);
}, _i = he("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: ki
})(({
  theme: e,
  ownerState: t
}) => T({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Tt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && T({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Di = he("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Mi
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = T({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), i = {
    opacity: "0 !important"
  }, a = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return T({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Tt.formControl} &`]: {
      "&::-webkit-input-placeholder": i,
      "&::-moz-placeholder": i,
      // Firefox 19+
      "&:-ms-input-placeholder": i,
      // IE11
      "&::-ms-input-placeholder": i,
      // Edge
      "&:focus::-webkit-input-placeholder": a,
      "&:focus::-moz-placeholder": a,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": a,
      // IE11
      "&:focus::-ms-input-placeholder": a
      // Edge
    },
    [`&.${Tt.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), ES = /* @__PURE__ */ w(Af, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), If = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r;
  const i = Ge({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": a,
    autoComplete: s,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: p,
    disableInjectingGlobalStyles: h,
    endAdornment: v,
    fullWidth: y = !1,
    id: m,
    inputComponent: O = "input",
    inputProps: C = {},
    inputRef: x,
    maxRows: b,
    minRows: g,
    multiline: R = !1,
    name: P,
    onBlur: $,
    onChange: F,
    onClick: N,
    onFocus: M,
    onKeyDown: q,
    onKeyUp: z,
    placeholder: L,
    readOnly: D,
    renderSuffix: W,
    rows: H,
    slotProps: le = {},
    slots: te = {},
    startAdornment: _,
    type: Y = "text",
    value: re
  } = i, ee = ge(i, gS), K = C.value != null ? C.value : re, {
    current: J
  } = E.useRef(K != null), Z = E.useRef(), Q = E.useCallback((ve) => {
    process.env.NODE_ENV !== "production" && ve && ve.nodeName !== "INPUT" && !ve.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), oe = it(Z, x, C.ref, Q), [ae, fe] = E.useState(!1), se = Or();
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (se)
      return se.registerEffect();
  }, [se]);
  const j = xr({
    props: i,
    muiFormControl: se,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  j.focused = se ? se.focused : ae, E.useEffect(() => {
    !se && p && ae && (fe(!1), $ && $());
  }, [se, p, ae, $]);
  const ye = se && se.onFilled, k = se && se.onEmpty, X = E.useCallback((ve) => {
    ai(ve) ? ye && ye() : k && k();
  }, [ye, k]);
  sn(() => {
    J && X({
      value: K
    });
  }, [K, X, J]);
  const we = (ve) => {
    if (j.disabled) {
      ve.stopPropagation();
      return;
    }
    M && M(ve), C.onFocus && C.onFocus(ve), se && se.onFocus ? se.onFocus(ve) : fe(!0);
  }, ce = (ve) => {
    $ && $(ve), C.onBlur && C.onBlur(ve), se && se.onBlur ? se.onBlur(ve) : fe(!1);
  }, qe = (ve, ...ue) => {
    if (!J) {
      const st = ve.target || Z.current;
      if (st == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : bn(1));
      X({
        value: st.value
      });
    }
    C.onChange && C.onChange(ve, ...ue), F && F(ve, ...ue);
  };
  E.useEffect(() => {
    X(Z.current);
  }, []);
  const He = (ve) => {
    Z.current && ve.currentTarget === ve.target && Z.current.focus(), N && !j.disabled && N(ve);
  };
  let Ne = O, Te = C;
  R && Ne === "input" && (H ? (process.env.NODE_ENV !== "production" && (g || b) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Te = T({
    type: void 0,
    minRows: H,
    maxRows: H
  }, Te)) : Te = T({
    type: void 0,
    maxRows: b,
    minRows: g
  }, Te), Ne = yf);
  const We = (ve) => {
    X(ve.animationName === "mui-auto-fill-cancel" ? Z.current : {
      value: "x"
    });
  };
  E.useEffect(() => {
    se && se.setAdornedStart(!!_);
  }, [se, _]);
  const Pe = T({}, i, {
    color: j.color || "primary",
    disabled: j.disabled,
    endAdornment: v,
    error: j.error,
    focused: j.focused,
    formControl: se,
    fullWidth: y,
    hiddenLabel: j.hiddenLabel,
    multiline: R,
    size: j.size,
    startAdornment: _,
    type: Y
  }), Ze = bS(Pe), et = te.root || u.Root || _i, ot = le.root || d.root || {}, $e = te.input || u.Input || Di;
  return Te = T({}, Te, (r = le.input) != null ? r : d.input), /* @__PURE__ */ pe(E.Fragment, {
    children: [!h && ES, /* @__PURE__ */ pe(et, T({}, ot, !io(et) && {
      ownerState: T({}, Pe, ot.ownerState)
    }, {
      ref: n,
      onClick: He
    }, ee, {
      className: be(Ze.root, ot.className, c, D && "MuiInputBase-readOnly"),
      children: [_, /* @__PURE__ */ w(nl.Provider, {
        value: null,
        children: /* @__PURE__ */ w($e, T({
          ownerState: Pe,
          "aria-invalid": j.error,
          "aria-describedby": a,
          autoComplete: s,
          autoFocus: l,
          defaultValue: f,
          disabled: j.disabled,
          id: m,
          onAnimationStart: We,
          name: P,
          placeholder: L,
          readOnly: D,
          required: j.required,
          rows: H,
          value: K,
          onKeyDown: q,
          onKeyUp: z,
          type: Y
        }, Te, !io($e) && {
          as: Ne,
          ownerState: T({}, Pe, Te.ownerState)
        }, {
          ref: oe,
          className: be(Ze.input, Te.className, D && "MuiInputBase-readOnly"),
          onBlur: ce,
          onChange: qe,
          onFocus: we
        }))
      }), v, W ? W(T({}, j, {
        startAdornment: _
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (If.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: hs,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
const rl = If;
function xS(e) {
  return ze("MuiInput", e);
}
const OS = T({}, Tt, Ve("MuiInput", ["root", "underline", "input"])), vn = OS;
function wS(e) {
  return ze("MuiOutlinedInput", e);
}
const SS = T({}, Tt, Ve("MuiOutlinedInput", ["root", "notchedOutline", "input"])), qt = SS;
function TS(e) {
  return ze("MuiFilledInput", e);
}
const CS = T({}, Tt, Ve("MuiFilledInput", ["root", "underline", "input"])), Ct = CS, RS = Ni(/* @__PURE__ */ w("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Nf = Ni(/* @__PURE__ */ w("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function PS(e) {
  return ze("MuiAutocomplete", e);
}
const $S = Ve("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), Se = $S;
var du, fu;
const AS = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], IS = ["ref"], NS = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: r,
    focused: i,
    fullWidth: a,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: d
  } = e, f = {
    root: ["root", r && "expanded", i && "focused", a && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${me(d)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", u && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return Ye(f, PS, t);
}, kS = he("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: r,
      hasClearIcon: i,
      hasPopupIcon: a,
      inputFocused: s,
      size: l
    } = n;
    return [{
      [`& .${Se.tag}`]: t.tag
    }, {
      [`& .${Se.tag}`]: t[`tagSize${me(l)}`]
    }, {
      [`& .${Se.inputRoot}`]: t.inputRoot
    }, {
      [`& .${Se.input}`]: t.input
    }, {
      [`& .${Se.input}`]: s && t.inputFocused
    }, t.root, r && t.fullWidth, a && t.hasPopupIcon, i && t.hasClearIcon];
  }
})(({
  ownerState: e
}) => T({
  [`&.${Se.focused} .${Se.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${Se.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, e.fullWidth && {
  width: "100%"
}, {
  [`& .${Se.tag}`]: T({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, e.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${Se.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${Se.hasPopupIcon}&, .${Se.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${Se.hasPopupIcon}.${Se.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${Se.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${vn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${vn.root}.${Tt.sizeSmall}`]: {
    [`& .${vn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${qt.root}`]: {
    padding: 9,
    [`.${Se.hasPopupIcon}&, .${Se.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${Se.hasPopupIcon}.${Se.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${Se.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${Se.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${qt.root}.${Tt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Se.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Ct.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Se.hasPopupIcon}&, .${Se.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${Se.hasPopupIcon}.${Se.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${Ct.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Se.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Ct.root}.${Tt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Ct.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${Tt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Ct.root}.${Tt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${Se.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Ct.root}.${Tt.hiddenLabel}.${Tt.sizeSmall}`]: {
    [`& .${Se.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${Se.input}`]: T({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), MS = he("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), _S = he(Rf, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), DS = he(Rf, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => T({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen)
})(({
  ownerState: e
}) => T({
  padding: 2,
  marginRight: -2
}, e.popupOpen && {
  transform: "rotate(180deg)"
})), FS = he(bf, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Se.option}`]: t.option
    }, t.popper, n.disablePortal && t.popperDisablePortal];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  zIndex: (e.vars || e).zIndex.modal
}, t.disablePortal && {
  position: "absolute"
})), LS = he(Js, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => T({}, e.typography.body1, {
  overflow: "auto"
})), jS = he("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), BS = he("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), US = he("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${Se.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${Se.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${Se.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : pt(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Se.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : pt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Se.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : pt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), WS = he(ww, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), zS = he("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${Se.option}`]: {
    paddingLeft: 24
  }
}), kf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i, a, s;
  const l = Ge({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: c = !1,
    autoHighlight: u = !1,
    autoSelect: d = !1,
    blurOnSelect: f = !1,
    ChipProps: p,
    className: h,
    clearIcon: v = du || (du = /* @__PURE__ */ w(RS, {
      fontSize: "small"
    })),
    clearOnBlur: y = !l.freeSolo,
    clearOnEscape: m = !1,
    clearText: O = "Clear",
    closeText: C = "Close",
    componentsProps: x = {},
    defaultValue: b = l.multiple ? [] : null,
    disableClearable: g = !1,
    disableCloseOnSelect: R = !1,
    disabled: P = !1,
    disabledItemsFocusable: $ = !1,
    disableListWrap: F = !1,
    disablePortal: N = !1,
    filterSelectedOptions: M = !1,
    forcePopupIcon: q = "auto",
    freeSolo: z = !1,
    fullWidth: L = !1,
    getLimitTagsText: D = (B) => `+${B}`,
    getOptionLabel: W,
    groupBy: H,
    handleHomeEndKeys: le = !l.freeSolo,
    includeInputInList: te = !1,
    limitTags: _ = -1,
    ListboxComponent: Y = "ul",
    ListboxProps: re,
    loading: ee = !1,
    loadingText: K = "Loading…",
    multiple: J = !1,
    noOptionsText: Z = "No options",
    openOnFocus: Q = !1,
    openText: oe = "Open",
    PaperComponent: ae = Js,
    PopperComponent: fe = bf,
    popupIcon: se = fu || (fu = /* @__PURE__ */ w(Nf, {})),
    readOnly: j = !1,
    renderGroup: ye,
    renderInput: k,
    renderOption: X,
    renderTags: we,
    selectOnFocus: ce = !l.freeSolo,
    size: qe = "medium",
    slotProps: He = {}
  } = l, Ne = ge(l, AS), {
    getRootProps: Te,
    getInputProps: We,
    getInputLabelProps: Pe,
    getPopupIndicatorProps: Ze,
    getClearProps: et,
    getTagProps: ot,
    getListboxProps: $e,
    getOptionProps: ve,
    value: ue,
    dirty: st,
    expanded: de,
    id: Ee,
    popupOpen: Ae,
    focused: tt,
    focusedTag: dn,
    anchorEl: zt,
    setAnchorEl: Tr,
    inputValue: jt,
    groupedOptions: gt
  } = yw(T({}, l, {
    componentName: "Autocomplete"
  })), St = !g && !P && st && !j, vt = (!z || q === !0) && q !== !1, {
    onMouseDown: Bt
  } = We(), {
    ref: Rn
  } = re ?? {}, fn = $e(), {
    ref: Vn
  } = fn, qn = ge(fn, IS), Cr = it(Vn, Rn), pn = W || ((B) => {
    var G;
    return (G = B.label) != null ? G : B;
  }), lt = T({}, l, {
    disablePortal: N,
    expanded: de,
    focused: tt,
    fullWidth: L,
    getOptionLabel: pn,
    hasClearIcon: St,
    hasPopupIcon: vt,
    inputFocused: dn === -1,
    popupOpen: Ae,
    size: qe
  }), rt = NS(lt);
  let bt;
  if (J && ue.length > 0) {
    const B = (G) => T({
      className: rt.tag,
      disabled: P
    }, ot(G));
    we ? bt = we(ue, B, lt) : bt = ue.map((G, ie) => /* @__PURE__ */ w(mS, T({
      label: pn(G),
      size: qe
    }, B({
      index: ie
    }), p)));
  }
  if (_ > -1 && Array.isArray(bt)) {
    const B = bt.length - _;
    !tt && B > 0 && (bt = bt.splice(0, _), bt.push(/* @__PURE__ */ w("span", {
      className: rt.tag,
      children: D(B)
    }, bt.length)));
  }
  const Yn = ye || ((B) => /* @__PURE__ */ pe("li", {
    children: [/* @__PURE__ */ w(WS, {
      className: rt.groupLabel,
      ownerState: lt,
      component: "div",
      children: B.group
    }), /* @__PURE__ */ w(zS, {
      className: rt.groupUl,
      ownerState: lt,
      children: B.children
    })]
  }, B.key)), Rr = X || ((B, G) => /* @__PURE__ */ w("li", T({}, B, {
    children: pn(G)
  }))), S = (B, G) => {
    const ie = ve({
      option: B,
      index: G
    });
    return Rr(T({}, ie, {
      className: rt.option
    }), B, {
      selected: ie["aria-selected"],
      index: G,
      inputValue: jt
    }, lt);
  }, V = (r = He.clearIndicator) != null ? r : x.clearIndicator, ne = (i = He.paper) != null ? i : x.paper, A = (a = He.popper) != null ? a : x.popper, I = (s = He.popupIndicator) != null ? s : x.popupIndicator;
  return /* @__PURE__ */ pe(E.Fragment, {
    children: [/* @__PURE__ */ w(kS, T({
      ref: n,
      className: be(rt.root, h),
      ownerState: lt
    }, Te(Ne), {
      children: k({
        id: Ee,
        disabled: P,
        fullWidth: !0,
        size: qe === "small" ? "small" : void 0,
        InputLabelProps: Pe(),
        InputProps: T({
          ref: Tr,
          className: rt.inputRoot,
          startAdornment: bt,
          onClick: (B) => {
            B.target === B.currentTarget && Bt(B);
          }
        }, (St || vt) && {
          endAdornment: /* @__PURE__ */ pe(MS, {
            className: rt.endAdornment,
            ownerState: lt,
            children: [St ? /* @__PURE__ */ w(_S, T({}, et(), {
              "aria-label": O,
              title: O,
              ownerState: lt
            }, V, {
              className: be(rt.clearIndicator, V == null ? void 0 : V.className),
              children: v
            })) : null, vt ? /* @__PURE__ */ w(DS, T({}, Ze(), {
              disabled: P,
              "aria-label": Ae ? C : oe,
              title: Ae ? C : oe,
              ownerState: lt
            }, I, {
              className: be(rt.popupIndicator, I == null ? void 0 : I.className),
              children: se
            })) : null]
          })
        }),
        inputProps: T({
          className: rt.input,
          disabled: P,
          readOnly: j
        }, We())
      })
    })), zt ? /* @__PURE__ */ w(FS, T({
      as: fe,
      disablePortal: N,
      style: {
        width: zt ? zt.clientWidth : null
      },
      ownerState: lt,
      role: "presentation",
      anchorEl: zt,
      open: Ae
    }, A, {
      className: be(rt.popper, A == null ? void 0 : A.className),
      children: /* @__PURE__ */ pe(LS, T({
        ownerState: lt,
        as: ae
      }, ne, {
        className: be(rt.paper, ne == null ? void 0 : ne.className),
        children: [ee && gt.length === 0 ? /* @__PURE__ */ w(jS, {
          className: rt.loading,
          ownerState: lt,
          children: K
        }) : null, gt.length === 0 && !z && !ee ? /* @__PURE__ */ w(BS, {
          className: rt.noOptions,
          ownerState: lt,
          role: "presentation",
          onMouseDown: (B) => {
            B.preventDefault();
          },
          children: Z
        }) : null, gt.length > 0 ? /* @__PURE__ */ w(US, T({
          as: Y,
          className: rt.listbox,
          ownerState: lt
        }, qn, re, {
          ref: Cr,
          children: gt.map((B, G) => H ? Yn({
            key: B.key,
            group: B.group,
            children: B.options.map((ie, xe) => S(ie, B.index + xe))
          }) : S(B, G))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (kf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: o.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: o.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: o.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: o.oneOfType([o.oneOf(["mouse", "touch"]), o.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: o.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: o.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: o.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: o.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: o.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: o.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: o.shape({
    clearIndicator: o.object,
    paper: o.object,
    popper: o.object,
    popupIndicator: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: an(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: o.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: o.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: o.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: o.oneOfType([o.oneOf(["auto"]), o.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: o.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: o.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: o.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: o.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: o.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: o.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: o.bool,
  /**
   * The input value.
   */
  inputValue: o.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: o.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: gs,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: o.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: o.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: o.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: o.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: o.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: o.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: o.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: o.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: o.string,
  /**
   * Array of options.
   */
  options: o.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: o.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: o.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: o.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: o.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: o.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: o.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: o.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: o.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    clearIndicator: o.object,
    paper: o.object,
    popper: o.object,
    popupIndicator: o.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: an(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const VS = kf, qS = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], HS = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ye({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, xS, t);
  return T({}, t, i);
}, YS = he(_i, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ki(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), T({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${vn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${vn.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${vn.disabled}, .${vn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${vn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), GS = he(Di, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Mi
})({}), ol = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i, a, s;
  const l = Ge({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: f = !1,
    inputComponent: p = "input",
    multiline: h = !1,
    slotProps: v,
    slots: y = {},
    type: m = "text"
  } = l, O = ge(l, qS), C = HS(l), b = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, g = v ?? d ? kt(v ?? d, b) : b, R = (r = (i = y.root) != null ? i : u.Root) != null ? r : YS, P = (a = (s = y.input) != null ? s : u.Input) != null ? a : GS;
  return /* @__PURE__ */ w(rl, T({
    slots: {
      root: R,
      input: P
    },
    slotProps: g,
    fullWidth: f,
    inputComponent: p,
    multiline: h,
    ref: n,
    type: m
  }, O, {
    classes: C
  }));
});
process.env.NODE_ENV !== "production" && (ol.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
ol.muiName = "Input";
const Mf = ol, KS = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], QS = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ye({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, TS, t);
  return T({}, t, i);
}, XS = he(_i, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ki(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", a = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return T({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
      }
    },
    [`&.${Ct.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
    },
    [`&.${Ct.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Ct.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Ct.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : i}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Ct.disabled}, .${Ct.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Ct.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && T({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), JS = he(Di, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Mi
})(({
  theme: e,
  ownerState: t
}) => T({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
})), il = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i, a, s;
  const l = Ge({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: p = !1,
    slotProps: h,
    slots: v = {},
    type: y = "text"
  } = l, m = ge(l, KS), O = T({}, l, {
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    type: y
  }), C = QS(l), x = {
    root: {
      ownerState: O
    },
    input: {
      ownerState: O
    }
  }, b = h ?? u ? kt(h ?? u, x) : x, g = (r = (i = v.root) != null ? i : c.Root) != null ? r : XS, R = (a = (s = v.input) != null ? s : c.Input) != null ? a : JS;
  return /* @__PURE__ */ w(rl, T({
    slots: {
      root: g,
      input: R
    },
    componentsProps: b,
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    ref: n,
    type: y
  }, m, {
    classes: C
  }));
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
il.muiName = "Input";
const _f = il;
var pu;
const ZS = ["children", "classes", "className", "label", "notched"], eT = he("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), tT = he("legend")(({
  ownerState: e,
  theme: t
}) => T({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && T({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function Df(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, i = ge(e, ZS), a = n != null && n !== "", s = T({}, e, {
    notched: r,
    withLabel: a
  });
  return /* @__PURE__ */ w(eT, T({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, i, {
    children: /* @__PURE__ */ w(tT, {
      ownerState: s,
      children: a ? /* @__PURE__ */ w("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        pu || (pu = /* @__PURE__ */ w("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (Df.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
const nT = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], rT = (e) => {
  const {
    classes: t
  } = e, r = Ye({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, wS, t);
  return T({}, t, r);
}, oT = he(_i, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: ki
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return T({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${qt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${qt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${qt.focused} .${qt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${qt.error} .${qt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${qt.disabled} .${qt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && T({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), iT = he(Df, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), aT = he(Di, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Mi
})(({
  theme: e,
  ownerState: t
}) => T({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), al = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i, a, s, l;
  const c = Ge({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: f = "input",
    label: p,
    multiline: h = !1,
    notched: v,
    slots: y = {},
    type: m = "text"
  } = c, O = ge(c, nT), C = rT(c), x = Or(), b = xr({
    props: c,
    muiFormControl: x,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), g = T({}, c, {
    color: b.color || "primary",
    disabled: b.disabled,
    error: b.error,
    focused: b.focused,
    formControl: x,
    fullWidth: d,
    hiddenLabel: b.hiddenLabel,
    multiline: h,
    size: b.size,
    type: m
  }), R = (r = (i = y.root) != null ? i : u.Root) != null ? r : oT, P = (a = (s = y.input) != null ? s : u.Input) != null ? a : aT;
  return /* @__PURE__ */ w(rl, T({
    slots: {
      root: R,
      input: P
    },
    renderSuffix: ($) => /* @__PURE__ */ w(iT, {
      ownerState: g,
      className: C.notchedOutline,
      label: p != null && p !== "" && b.required ? l || (l = /* @__PURE__ */ pe(E.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof v < "u" ? v : !!($.startAdornment || $.filled || $.focused)
    }),
    fullWidth: d,
    inputComponent: f,
    multiline: h,
    ref: n,
    type: m
  }, O, {
    classes: T({}, C, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
al.muiName = "Input";
const Ff = al;
function sT(e) {
  return ze("MuiFormLabel", e);
}
const lT = Ve("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Kr = lT, cT = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], uT = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${me(n)}`, i && "disabled", a && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return Ye(c, sT, t);
}, dT = he("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => T({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => T({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Kr.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Kr.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Kr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), fT = he("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Kr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Lf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    component: s = "label"
  } = r, l = ge(r, cT), c = Or(), u = xr({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = T({}, r, {
    color: u.color || "primary",
    component: s,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = uT(d);
  return /* @__PURE__ */ pe(dT, T({
    as: s,
    ownerState: d,
    className: be(f.root, a),
    ref: n
  }, l, {
    children: [i, u.required && /* @__PURE__ */ pe(fT, {
      ownerState: d,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Lf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const pT = Lf;
function mT(e) {
  return ze("MuiInputLabel", e);
}
Ve("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const hT = ["disableAnimation", "margin", "shrink", "variant", "className"], yT = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, u = Ye({
    root: ["root", n && "formControl", !a && "animated", i && "shrink", r === "small" && "sizeSmall", s],
    asterisk: [l && "asterisk"]
  }, mT, t);
  return T({}, t, u);
}, vT = he(pT, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Kr.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && T({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && T({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && T({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), jf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    shrink: a,
    className: s
  } = r, l = ge(r, hT), c = Or();
  let u = a;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = xr({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required"]
  }), f = T({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required
  }), p = yT(f);
  return /* @__PURE__ */ w(vT, T({
    "data-shrink": u,
    ownerState: f,
    ref: n,
    className: be(p.root, s)
  }, l, {
    classes: p
  }));
});
process.env.NODE_ENV !== "production" && (jf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const gT = jf;
function bT(e) {
  return ze("MuiFormControl", e);
}
Ve("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const ET = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], xT = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${me(n)}`, r && "fullWidth"]
  };
  return Ye(i, bT, t);
}, OT = he("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => T({}, t.root, t[`margin${me(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => T({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), Bf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: a,
    color: s = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: p = !1,
    margin: h = "none",
    required: v = !1,
    size: y = "medium",
    variant: m = "outlined"
  } = r, O = ge(r, ET), C = T({}, r, {
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: p,
    margin: h,
    required: v,
    size: y,
    variant: m
  }), x = xT(C), [b, g] = E.useState(() => {
    let z = !1;
    return i && E.Children.forEach(i, (L) => {
      if (!Do(L, ["Input", "Select"]))
        return;
      const D = Do(L, ["Select"]) ? L.props.input : L;
      D && hS(D.props) && (z = !0);
    }), z;
  }), [R, P] = E.useState(() => {
    let z = !1;
    return i && E.Children.forEach(i, (L) => {
      Do(L, ["Input", "Select"]) && (ai(L.props, !0) || ai(L.props.inputProps, !0)) && (z = !0);
    }), z;
  }), [$, F] = E.useState(!1);
  c && $ && F(!1);
  const N = d !== void 0 && !c ? d : $;
  let M;
  if (process.env.NODE_ENV !== "production") {
    const z = E.useRef(!1);
    M = () => (z.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), z.current = !0, () => {
      z.current = !1;
    });
  }
  const q = E.useMemo(() => ({
    adornedStart: b,
    setAdornedStart: g,
    color: s,
    disabled: c,
    error: u,
    filled: R,
    focused: N,
    fullWidth: f,
    hiddenLabel: p,
    size: y,
    onBlur: () => {
      F(!1);
    },
    onEmpty: () => {
      P(!1);
    },
    onFilled: () => {
      P(!0);
    },
    onFocus: () => {
      F(!0);
    },
    registerEffect: M,
    required: v,
    variant: m
  }), [b, s, c, u, R, N, f, p, M, v, y, m]);
  return /* @__PURE__ */ w(nl.Provider, {
    value: q,
    children: /* @__PURE__ */ w(OT, T({
      as: l,
      ownerState: C,
      className: be(x.root, a),
      ref: n
    }, O, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (Bf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const wT = Bf;
function ST(e) {
  return ze("MuiFormHelperText", e);
}
const TT = Ve("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), mu = TT;
var hu;
const CT = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], RT = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: i,
    error: a,
    filled: s,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", a && "error", r && `size${me(r)}`, n && "contained", l && "focused", s && "filled", c && "required"]
  };
  return Ye(u, ST, t);
}, PT = he("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${me(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${mu.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${mu.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Uf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: a,
    component: s = "p"
  } = r, l = ge(r, CT), c = Or(), u = xr({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = T({}, r, {
    component: s,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = RT(d);
  return /* @__PURE__ */ w(PT, T({
    as: s,
    ownerState: d,
    className: be(f.root, a),
    ref: n
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      hu || (hu = /* @__PURE__ */ w("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && (Uf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
const $T = Uf;
var ts = { exports: {} }, Le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yu;
function AT() {
  if (yu)
    return Le;
  yu = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function y(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case e:
          switch (m = m.type, m) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case s:
                case c:
                case p:
                case f:
                case a:
                  return m;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return Le.ContextConsumer = s, Le.ContextProvider = a, Le.Element = e, Le.ForwardRef = c, Le.Fragment = n, Le.Lazy = p, Le.Memo = f, Le.Portal = t, Le.Profiler = i, Le.StrictMode = r, Le.Suspense = u, Le.SuspenseList = d, Le.isAsyncMode = function() {
    return !1;
  }, Le.isConcurrentMode = function() {
    return !1;
  }, Le.isContextConsumer = function(m) {
    return y(m) === s;
  }, Le.isContextProvider = function(m) {
    return y(m) === a;
  }, Le.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Le.isForwardRef = function(m) {
    return y(m) === c;
  }, Le.isFragment = function(m) {
    return y(m) === n;
  }, Le.isLazy = function(m) {
    return y(m) === p;
  }, Le.isMemo = function(m) {
    return y(m) === f;
  }, Le.isPortal = function(m) {
    return y(m) === t;
  }, Le.isProfiler = function(m) {
    return y(m) === i;
  }, Le.isStrictMode = function(m) {
    return y(m) === r;
  }, Le.isSuspense = function(m) {
    return y(m) === u;
  }, Le.isSuspenseList = function(m) {
    return y(m) === d;
  }, Le.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === i || m === r || m === u || m === d || m === h || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === a || m.$$typeof === s || m.$$typeof === c || m.$$typeof === v || m.getModuleId !== void 0);
  }, Le.typeOf = y, Le;
}
var je = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vu;
function IT() {
  return vu || (vu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = !1, y = !1, m = !1, O = !1, C = !1, x;
    x = Symbol.for("react.module.reference");
    function b(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === n || k === i || C || k === r || k === u || k === d || O || k === h || v || y || m || typeof k == "object" && k !== null && (k.$$typeof === p || k.$$typeof === f || k.$$typeof === a || k.$$typeof === s || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === x || k.getModuleId !== void 0));
    }
    function g(k) {
      if (typeof k == "object" && k !== null) {
        var X = k.$$typeof;
        switch (X) {
          case e:
            var we = k.type;
            switch (we) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return we;
              default:
                var ce = we && we.$$typeof;
                switch (ce) {
                  case l:
                  case s:
                  case c:
                  case p:
                  case f:
                  case a:
                    return ce;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var R = s, P = a, $ = e, F = c, N = n, M = p, q = f, z = t, L = i, D = r, W = u, H = d, le = !1, te = !1;
    function _(k) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(k) {
      return te || (te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(k) {
      return g(k) === s;
    }
    function ee(k) {
      return g(k) === a;
    }
    function K(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function J(k) {
      return g(k) === c;
    }
    function Z(k) {
      return g(k) === n;
    }
    function Q(k) {
      return g(k) === p;
    }
    function oe(k) {
      return g(k) === f;
    }
    function ae(k) {
      return g(k) === t;
    }
    function fe(k) {
      return g(k) === i;
    }
    function se(k) {
      return g(k) === r;
    }
    function j(k) {
      return g(k) === u;
    }
    function ye(k) {
      return g(k) === d;
    }
    je.ContextConsumer = R, je.ContextProvider = P, je.Element = $, je.ForwardRef = F, je.Fragment = N, je.Lazy = M, je.Memo = q, je.Portal = z, je.Profiler = L, je.StrictMode = D, je.Suspense = W, je.SuspenseList = H, je.isAsyncMode = _, je.isConcurrentMode = Y, je.isContextConsumer = re, je.isContextProvider = ee, je.isElement = K, je.isForwardRef = J, je.isFragment = Z, je.isLazy = Q, je.isMemo = oe, je.isPortal = ae, je.isProfiler = fe, je.isStrictMode = se, je.isSuspense = j, je.isSuspenseList = ye, je.isValidElementType = b, je.typeOf = g;
  }()), je;
}
process.env.NODE_ENV === "production" ? ts.exports = AT() : ts.exports = IT();
var sl = ts.exports;
const Wf = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Wf.displayName = "ListContext");
const NT = Wf;
function kT(e) {
  return ze("MuiList", e);
}
Ve("MuiList", ["root", "padding", "dense", "subheader"]);
const MT = ["children", "className", "component", "dense", "disablePadding", "subheader"], _T = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ye({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, kT, t);
}, DT = he("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => T({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), zf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ge(r, MT), f = E.useMemo(() => ({
    dense: l
  }), [l]), p = T({}, r, {
    component: s,
    dense: l,
    disablePadding: c
  }), h = _T(p);
  return /* @__PURE__ */ w(NT.Provider, {
    value: f,
    children: /* @__PURE__ */ pe(DT, T({
      as: s,
      className: be(h.root, a),
      ref: n,
      ownerState: p
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (zf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const FT = zf, LT = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function pa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function gu(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Vf(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function Mr(e, t, n, r, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Vf(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const qf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu"
  } = t, p = ge(t, LT), h = E.useRef(null), v = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  sn(() => {
    i && h.current.focus();
  }, [i]), E.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (x, b) => {
      const g = !h.current.style.width;
      if (x.clientHeight < h.current.clientHeight && g) {
        const R = `${od(ht(x))}px`;
        h.current.style[b.direction === "rtl" ? "paddingLeft" : "paddingRight"] = R, h.current.style.width = `calc(100% + ${R})`;
      }
      return h.current;
    }
  }), []);
  const y = (x) => {
    const b = h.current, g = x.key, R = ht(b).activeElement;
    if (g === "ArrowDown")
      x.preventDefault(), Mr(b, R, u, c, pa);
    else if (g === "ArrowUp")
      x.preventDefault(), Mr(b, R, u, c, gu);
    else if (g === "Home")
      x.preventDefault(), Mr(b, null, u, c, pa);
    else if (g === "End")
      x.preventDefault(), Mr(b, null, u, c, gu);
    else if (g.length === 1) {
      const P = v.current, $ = g.toLowerCase(), F = performance.now();
      P.keys.length > 0 && (F - P.lastTime > 500 ? (P.keys = [], P.repeating = !0, P.previousKeyMatched = !0) : P.repeating && $ !== P.keys[0] && (P.repeating = !1)), P.lastTime = F, P.keys.push($);
      const N = R && !P.repeating && Vf(R, P);
      P.previousKeyMatched && (N || Mr(b, R, !1, c, pa, P)) ? x.preventDefault() : P.previousKeyMatched = !1;
    }
    d && d(x);
  }, m = it(h, n);
  let O = -1;
  E.Children.forEach(s, (x, b) => {
    if (!/* @__PURE__ */ E.isValidElement(x)) {
      O === b && (O += 1, O >= s.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && sl.isFragment(x) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), x.props.disabled || (f === "selectedMenu" && x.props.selected || O === -1) && (O = b), O === b && (x.props.disabled || x.props.muiSkipListHighlight || x.type.muiSkipListHighlight) && (O += 1, O >= s.length && (O = -1));
  });
  const C = E.Children.map(s, (x, b) => {
    if (b === O) {
      const g = {};
      return a && (g.autoFocus = !0), x.props.tabIndex === void 0 && f === "selectedMenu" && (g.tabIndex = 0), /* @__PURE__ */ E.cloneElement(x, g);
    }
    return x;
  });
  return /* @__PURE__ */ w(FT, T({
    role: "menu",
    ref: m,
    className: l,
    onKeyDown: y,
    tabIndex: i ? 0 : -1
  }, p, {
    children: C
  }));
});
process.env.NODE_ENV !== "production" && (qf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const jT = qf, Hf = (e) => e.scrollTop;
function si(e, t) {
  var n, r;
  const {
    timeout: i,
    easing: a,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof a == "object" ? a[t.mode] : a,
    delay: s.transitionDelay
  };
}
const BT = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ns(e) {
  return `scale(${e}, ${e ** 2})`;
}
const UT = {
  entering: {
    opacity: 1,
    transform: ns(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ma = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ll = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: p,
    onExiting: h,
    style: v,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Of
  } = t, O = ge(t, BT), C = E.useRef(), x = E.useRef(), b = zn(), g = E.useRef(null), R = it(g, a.ref, n), P = (D) => (W) => {
    if (D) {
      const H = g.current;
      W === void 0 ? D(H) : D(H, W);
    }
  }, $ = P(d), F = P((D, W) => {
    Hf(D);
    const {
      duration: H,
      delay: le,
      easing: te
    } = si({
      style: v,
      timeout: y,
      easing: s
    }, {
      mode: "enter"
    });
    let _;
    y === "auto" ? (_ = b.transitions.getAutoHeightDuration(D.clientHeight), x.current = _) : _ = H, D.style.transition = [b.transitions.create("opacity", {
      duration: _,
      delay: le
    }), b.transitions.create("transform", {
      duration: ma ? _ : _ * 0.666,
      delay: le,
      easing: te
    })].join(","), c && c(D, W);
  }), N = P(u), M = P(h), q = P((D) => {
    const {
      duration: W,
      delay: H,
      easing: le
    } = si({
      style: v,
      timeout: y,
      easing: s
    }, {
      mode: "exit"
    });
    let te;
    y === "auto" ? (te = b.transitions.getAutoHeightDuration(D.clientHeight), x.current = te) : te = W, D.style.transition = [b.transitions.create("opacity", {
      duration: te,
      delay: H
    }), b.transitions.create("transform", {
      duration: ma ? te : te * 0.666,
      delay: ma ? H : H || te * 0.333,
      easing: le
    })].join(","), D.style.opacity = 0, D.style.transform = ns(0.75), f && f(D);
  }), z = P(p), L = (D) => {
    y === "auto" && (C.current = setTimeout(D, x.current || 0)), r && r(g.current, D);
  };
  return E.useEffect(() => () => {
    clearTimeout(C.current);
  }, []), /* @__PURE__ */ w(m, T({
    appear: i,
    in: l,
    nodeRef: g,
    onEnter: F,
    onEntered: N,
    onEntering: $,
    onExit: q,
    onExited: z,
    onExiting: M,
    addEndListener: L,
    timeout: y === "auto" ? null : y
  }, O, {
    children: (D, W) => /* @__PURE__ */ E.cloneElement(a, T({
      style: T({
        opacity: 0,
        transform: ns(0.75),
        visibility: D === "exited" && !l ? "hidden" : void 0
      }, UT[D], v, a.props.style),
      ref: R
    }, W))
  }));
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: ho.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
ll.muiSupportAuto = !0;
const WT = ll, zT = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], VT = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Yf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = zn(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: p,
    onExit: h,
    onExited: v,
    onExiting: y,
    style: m,
    timeout: O = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Of
  } = t, x = ge(t, zT), b = E.useRef(null), g = it(b, l.ref, n), R = (L) => (D) => {
    if (L) {
      const W = b.current;
      D === void 0 ? L(W) : L(W, D);
    }
  }, P = R(p), $ = R((L, D) => {
    Hf(L);
    const W = si({
      style: m,
      timeout: O,
      easing: c
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = r.transitions.create("opacity", W), L.style.transition = r.transitions.create("opacity", W), d && d(L, D);
  }), F = R(f), N = R(y), M = R((L) => {
    const D = si({
      style: m,
      timeout: O,
      easing: c
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = r.transitions.create("opacity", D), L.style.transition = r.transitions.create("opacity", D), h && h(L);
  }), q = R(v);
  return /* @__PURE__ */ w(C, T({
    appear: s,
    in: u,
    nodeRef: b,
    onEnter: $,
    onEntered: F,
    onEntering: P,
    onExit: M,
    onExited: q,
    onExiting: N,
    addEndListener: (L) => {
      a && a(b.current, L);
    },
    timeout: O
  }, x, {
    children: (L, D) => /* @__PURE__ */ E.cloneElement(l, T({
      style: T({
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0
      }, VT[L], m, l.props.style),
      ref: g
    }, D))
  }));
});
process.env.NODE_ENV !== "production" && (Yf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: ho.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const qT = Yf;
function HT(e) {
  return ze("MuiBackdrop", e);
}
Ve("MuiBackdrop", ["root", "invisible"]);
const YT = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], GT = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ye({
    root: ["root", n && "invisible"]
  }, HT, t);
}, KT = he("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => T({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Gf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i, a;
  const s = Ge({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: f = {},
    invisible: p = !1,
    open: h,
    slotProps: v = {},
    slots: y = {},
    TransitionComponent: m = qT,
    transitionDuration: O
  } = s, C = ge(s, YT), x = T({}, s, {
    component: u,
    invisible: p
  }), b = GT(x), g = (r = v.root) != null ? r : f.root;
  return /* @__PURE__ */ w(m, T({
    in: h,
    timeout: O
  }, C, {
    children: /* @__PURE__ */ w(KT, T({
      "aria-hidden": !0
    }, g, {
      as: (i = (a = y.root) != null ? a : d.Root) != null ? i : u,
      className: be(b.root, c, g == null ? void 0 : g.className),
      ownerState: T({}, x, g == null ? void 0 : g.ownerState),
      classes: b,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Gf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const QT = Gf, XT = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"], JT = he("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), ZT = he(QT, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Kf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i, a, s, l, c;
  const u = Ge({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = ZT,
    BackdropProps: f,
    classes: p,
    className: h,
    closeAfterTransition: v = !1,
    children: y,
    container: m,
    component: O,
    components: C = {},
    componentsProps: x = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: g = !1,
    disableEscapeKeyDown: R = !1,
    disablePortal: P = !1,
    disableRestoreFocus: $ = !1,
    disableScrollLock: F = !1,
    hideBackdrop: N = !1,
    keepMounted: M = !1,
    onBackdropClick: q,
    onClose: z,
    open: L,
    slotProps: D,
    slots: W,
    // eslint-disable-next-line react/prop-types
    theme: H
  } = u, le = ge(u, XT), [te, _] = E.useState(!0), Y = {
    container: m,
    closeAfterTransition: v,
    disableAutoFocus: b,
    disableEnforceFocus: g,
    disableEscapeKeyDown: R,
    disablePortal: P,
    disableRestoreFocus: $,
    disableScrollLock: F,
    hideBackdrop: N,
    keepMounted: M,
    onBackdropClick: q,
    onClose: z,
    open: L
  }, re = T({}, u, Y, {
    exited: te
  }), ee = (r = (i = W == null ? void 0 : W.root) != null ? i : C.Root) != null ? r : JT, K = (a = (s = W == null ? void 0 : W.backdrop) != null ? s : C.Backdrop) != null ? a : d, J = (l = D == null ? void 0 : D.root) != null ? l : x.root, Z = (c = D == null ? void 0 : D.backdrop) != null ? c : x.backdrop;
  return /* @__PURE__ */ w(hf, T({
    slots: {
      root: ee,
      backdrop: K
    },
    slotProps: {
      root: () => T({}, Ka(J, re), !io(ee) && {
        as: O,
        theme: H
      }, {
        className: be(h, J == null ? void 0 : J.className, p == null ? void 0 : p.root, !re.open && re.exited && (p == null ? void 0 : p.hidden))
      }),
      backdrop: () => T({}, f, Ka(Z, re), {
        className: be(Z == null ? void 0 : Z.className, f == null ? void 0 : f.className, p == null ? void 0 : p.backdrop)
      })
    },
    onTransitionEnter: () => _(!1),
    onTransitionExited: () => _(!0),
    ref: n
  }, le, Y, {
    children: y
  }));
});
process.env.NODE_ENV !== "production" && (Kf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: ho.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Jt, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const eC = Kf;
function tC(e) {
  return ze("MuiPopover", e);
}
Ve("MuiPopover", ["root", "paper"]);
const nC = ["onEntering"], rC = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"], oC = ["slotProps"];
function bu(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Eu(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function xu(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Uo(e) {
  return typeof e == "function" ? e() : e;
}
const iC = (e) => {
  const {
    classes: t
  } = e;
  return Ye({
    root: ["root"],
    paper: ["paper"]
  }, tC, t);
}, aC = he(eC, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qf = he(Js, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Xf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i, a;
  const s = Ge({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: f = "anchorEl",
    children: p,
    className: h,
    container: v,
    elevation: y = 8,
    marginThreshold: m = 16,
    open: O,
    PaperProps: C = {},
    slots: x,
    slotProps: b,
    transformOrigin: g = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: R = WT,
    transitionDuration: P = "auto",
    TransitionProps: {
      onEntering: $
    } = {}
  } = s, F = ge(s.TransitionProps, nC), N = ge(s, rC), M = (r = b == null ? void 0 : b.paper) != null ? r : C, q = E.useRef(), z = it(q, M.ref), L = T({}, s, {
    anchorOrigin: u,
    anchorReference: f,
    elevation: y,
    marginThreshold: m,
    externalPaperSlotProps: M,
    transformOrigin: g,
    TransitionComponent: R,
    transitionDuration: P,
    TransitionProps: F
  }), D = iC(L), W = E.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const j = Uo(c), ye = j && j.nodeType === 1 ? j : ht(q.current).body, k = ye.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const X = ye.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && X.top === 0 && X.left === 0 && X.right === 0 && X.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: k.top + bu(k, u.vertical),
      left: k.left + Eu(k, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, f]), H = E.useCallback((j) => ({
    vertical: bu(j, g.vertical),
    horizontal: Eu(j, g.horizontal)
  }), [g.horizontal, g.vertical]), le = E.useCallback((j) => {
    const ye = {
      width: j.offsetWidth,
      height: j.offsetHeight
    }, k = H(ye);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: xu(k)
      };
    const X = W();
    let we = X.top - k.vertical, ce = X.left - k.horizontal;
    const qe = we + ye.height, He = ce + ye.width, Ne = En(Uo(c)), Te = Ne.innerHeight - m, We = Ne.innerWidth - m;
    if (we < m) {
      const Pe = we - m;
      we -= Pe, k.vertical += Pe;
    } else if (qe > Te) {
      const Pe = qe - Te;
      we -= Pe, k.vertical += Pe;
    }
    if (process.env.NODE_ENV !== "production" && ye.height > Te && ye.height && Te && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ye.height - Te}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), ce < m) {
      const Pe = ce - m;
      ce -= Pe, k.horizontal += Pe;
    } else if (He > We) {
      const Pe = He - We;
      ce -= Pe, k.horizontal += Pe;
    }
    return {
      top: `${Math.round(we)}px`,
      left: `${Math.round(ce)}px`,
      transformOrigin: xu(k)
    };
  }, [c, f, W, H, m]), [te, _] = E.useState(O), Y = E.useCallback(() => {
    const j = q.current;
    if (!j)
      return;
    const ye = le(j);
    ye.top !== null && (j.style.top = ye.top), ye.left !== null && (j.style.left = ye.left), j.style.transformOrigin = ye.transformOrigin, _(!0);
  }, [le]), re = (j, ye) => {
    $ && $(j, ye), Y();
  }, ee = () => {
    _(!1);
  };
  E.useEffect(() => {
    O && Y();
  }), E.useImperativeHandle(l, () => O ? {
    updatePosition: () => {
      Y();
    }
  } : null, [O, Y]), E.useEffect(() => {
    if (!O)
      return;
    const j = ys(() => {
      Y();
    }), ye = En(c);
    return ye.addEventListener("resize", j), () => {
      j.clear(), ye.removeEventListener("resize", j);
    };
  }, [c, O, Y]);
  let K = P;
  P === "auto" && !R.muiSupportAuto && (K = void 0);
  const J = v || (c ? ht(Uo(c)).body : void 0), Z = (i = x == null ? void 0 : x.root) != null ? i : aC, Q = (a = x == null ? void 0 : x.paper) != null ? a : Qf, oe = Bn({
    elementType: Q,
    externalSlotProps: T({}, M, {
      style: te ? M.style : T({}, M.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: y,
      ref: z
    },
    ownerState: L,
    className: be(D.paper, M == null ? void 0 : M.className)
  }), ae = Bn({
    elementType: Z,
    externalSlotProps: (b == null ? void 0 : b.root) || {},
    externalForwardedProps: N,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: J,
      open: O
    },
    ownerState: L,
    className: be(D.root, h)
  }), {
    slotProps: fe
  } = ae, se = ge(ae, oC);
  return /* @__PURE__ */ w(Z, T({}, se, !io(Z) && {
    slotProps: fe
  }, {
    children: /* @__PURE__ */ w(R, T({
      appear: !0,
      in: O,
      onEntering: re,
      onExited: ee,
      timeout: K
    }, F, {
      children: /* @__PURE__ */ w(Q, T({}, oe, {
        children: p
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Xf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Wt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: an(o.oneOfType([Jt, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Uo(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Jt, o.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: gs,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: hs
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
const sC = Xf;
function lC(e) {
  return ze("MuiMenu", e);
}
Ve("MuiMenu", ["root", "paper", "list"]);
const cC = ["onEntering"], uC = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], dC = {
  vertical: "top",
  horizontal: "right"
}, fC = {
  vertical: "top",
  horizontal: "left"
}, pC = (e) => {
  const {
    classes: t
  } = e;
  return Ye({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, lC, t);
}, mC = he(sC, {
  shouldForwardProp: (e) => wn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), hC = he(Qf, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), yC = he(jT, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Jf = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i;
  const a = Ge({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: f,
    open: p,
    PaperProps: h = {},
    PopoverClasses: v,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: m
    } = {},
    variant: O = "selectedMenu",
    slots: C = {},
    slotProps: x = {}
  } = a, b = ge(a.TransitionProps, cC), g = ge(a, uC), R = zn(), P = R.direction === "rtl", $ = T({}, a, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: m,
    PaperProps: h,
    transitionDuration: y,
    TransitionProps: b,
    variant: O
  }), F = pC($), N = s && !u && p, M = E.useRef(null), q = (te, _) => {
    M.current && M.current.adjustStyleForScrollbar(te, R), m && m(te, _);
  }, z = (te) => {
    te.key === "Tab" && (te.preventDefault(), f && f(te, "tabKeyDown"));
  };
  let L = -1;
  E.Children.map(l, (te, _) => {
    /* @__PURE__ */ E.isValidElement(te) && (process.env.NODE_ENV !== "production" && sl.isFragment(te) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), te.props.disabled || (O === "selectedMenu" && te.props.selected || L === -1) && (L = _));
  });
  const D = (r = C.paper) != null ? r : hC, W = (i = x.paper) != null ? i : h, H = Bn({
    elementType: C.root,
    externalSlotProps: x.root,
    ownerState: $,
    className: [F.root, c]
  }), le = Bn({
    elementType: D,
    externalSlotProps: W,
    ownerState: $,
    className: F.paper
  });
  return /* @__PURE__ */ w(mC, T({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: P ? "right" : "left"
    },
    transformOrigin: P ? dC : fC,
    slots: {
      paper: D,
      root: C.root
    },
    slotProps: {
      root: H,
      paper: le
    },
    open: p,
    ref: n,
    transitionDuration: y,
    TransitionProps: T({
      onEntering: q
    }, b),
    ownerState: $
  }, g, {
    classes: v,
    children: /* @__PURE__ */ w(yC, T({
      onKeyDown: z,
      actions: M,
      autoFocus: s && (L === -1 || u),
      autoFocusItem: N,
      variant: O
    }, d, {
      className: be(F.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Jf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Jt, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const vC = Jf;
function gC(e) {
  return ze("MuiNativeSelect", e);
}
const bC = Ve("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), cl = bC, EC = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], xC = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${me(n)}`, a && "iconOpen", r && "disabled"]
  };
  return Ye(l, gC, t);
}, Zf = ({
  ownerState: e,
  theme: t
}) => T({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": T({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${cl.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), OC = he("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: wn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${cl.multiple}`]: t.multiple
    }];
  }
})(Zf), ep = ({
  ownerState: e,
  theme: t
}) => T({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${cl.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), wC = he("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${me(n.variant)}`], n.open && t.iconOpen];
  }
})(ep), tp = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: i,
    error: a,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ge(t, EC), d = T({}, t, {
    disabled: i,
    variant: c,
    error: a
  }), f = xC(d);
  return /* @__PURE__ */ pe(E.Fragment, {
    children: [/* @__PURE__ */ w(OC, T({
      ownerState: d,
      className: be(f.select, r),
      disabled: i,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ w(wC, {
      as: s,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (tp.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Wt,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const SC = tp;
function TC(e) {
  return ze("MuiSelect", e);
}
const CC = Ve("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), _r = CC;
var Ou;
const RC = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], PC = he("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${_r.select}`]: t.select
      },
      {
        [`&.${_r.select}`]: t[n.variant]
      },
      {
        [`&.${_r.error}`]: t.error
      },
      {
        [`&.${_r.multiple}`]: t.multiple
      }
    ];
  }
})(Zf, {
  // Win specificity over the input base
  [`&.${_r.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), $C = he("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${me(n.variant)}`], n.open && t.iconOpen];
  }
})(ep), AC = he("input", {
  shouldForwardProp: (e) => rv(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function wu(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function IC(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const NC = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${me(n)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Ye(l, TC, t);
}, np = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: a,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: p,
    error: h = !1,
    IconComponent: v,
    inputRef: y,
    labelId: m,
    MenuProps: O = {},
    multiple: C,
    name: x,
    onBlur: b,
    onChange: g,
    onClose: R,
    onFocus: P,
    onOpen: $,
    open: F,
    readOnly: N,
    renderValue: M,
    SelectDisplayProps: q = {},
    tabIndex: z,
    value: L,
    variant: D = "standard"
  } = t, W = ge(t, RC), [H, le] = ir({
    controlled: L,
    default: d,
    name: "Select"
  }), [te, _] = ir({
    controlled: F,
    default: u,
    name: "Select"
  }), Y = E.useRef(null), re = E.useRef(null), [ee, K] = E.useState(null), {
    current: J
  } = E.useRef(F != null), [Z, Q] = E.useState(), oe = it(n, y), ae = E.useCallback((de) => {
    re.current = de, de && K(de);
  }, []), fe = ee == null ? void 0 : ee.parentNode;
  E.useImperativeHandle(oe, () => ({
    focus: () => {
      re.current.focus();
    },
    node: Y.current,
    value: H
  }), [H]), E.useEffect(() => {
    u && te && ee && !J && (Q(s ? null : fe.clientWidth), re.current.focus());
  }, [ee, s]), E.useEffect(() => {
    a && re.current.focus();
  }, [a]), E.useEffect(() => {
    if (!m)
      return;
    const de = ht(re.current).getElementById(m);
    if (de) {
      const Ee = () => {
        getSelection().isCollapsed && re.current.focus();
      };
      return de.addEventListener("click", Ee), () => {
        de.removeEventListener("click", Ee);
      };
    }
  }, [m]);
  const se = (de, Ee) => {
    de ? $ && $(Ee) : R && R(Ee), J || (Q(s ? null : fe.clientWidth), _(de));
  }, j = (de) => {
    de.button === 0 && (de.preventDefault(), re.current.focus(), se(!0, de));
  }, ye = (de) => {
    se(!1, de);
  }, k = E.Children.toArray(l), X = (de) => {
    const Ee = k.find((Ae) => Ae.props.value === de.target.value);
    Ee !== void 0 && (le(Ee.props.value), g && g(de, Ee));
  }, we = (de) => (Ee) => {
    let Ae;
    if (Ee.currentTarget.hasAttribute("tabindex")) {
      if (C) {
        Ae = Array.isArray(H) ? H.slice() : [];
        const tt = H.indexOf(de.props.value);
        tt === -1 ? Ae.push(de.props.value) : Ae.splice(tt, 1);
      } else
        Ae = de.props.value;
      if (de.props.onClick && de.props.onClick(Ee), H !== Ae && (le(Ae), g)) {
        const tt = Ee.nativeEvent || Ee, dn = new tt.constructor(tt.type, tt);
        Object.defineProperty(dn, "target", {
          writable: !0,
          value: {
            value: Ae,
            name: x
          }
        }), g(dn, de);
      }
      C || se(!1, Ee);
    }
  }, ce = (de) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(de.key) !== -1 && (de.preventDefault(), se(!0, de));
  }, qe = ee !== null && te, He = (de) => {
    !qe && b && (Object.defineProperty(de, "target", {
      writable: !0,
      value: {
        value: H,
        name: x
      }
    }), b(de));
  };
  delete W["aria-invalid"];
  let Ne, Te;
  const We = [];
  let Pe = !1, Ze = !1;
  (ai({
    value: H
  }) || p) && (M ? Ne = M(H) : Pe = !0);
  const et = k.map((de) => {
    if (!/* @__PURE__ */ E.isValidElement(de))
      return null;
    process.env.NODE_ENV !== "production" && sl.isFragment(de) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Ee;
    if (C) {
      if (!Array.isArray(H))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : bn(2));
      Ee = H.some((Ae) => wu(Ae, de.props.value)), Ee && Pe && We.push(de.props.children);
    } else
      Ee = wu(H, de.props.value), Ee && Pe && (Te = de.props.children);
    return Ee && (Ze = !0), /* @__PURE__ */ E.cloneElement(de, {
      "aria-selected": Ee ? "true" : "false",
      onClick: we(de),
      onKeyUp: (Ae) => {
        Ae.key === " " && Ae.preventDefault(), de.props.onKeyUp && de.props.onKeyUp(Ae);
      },
      role: "option",
      selected: Ee,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": de.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (!Ze && !C && H !== "") {
      const de = k.map((Ee) => Ee.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${H}\` for the select ${x ? `(name="${x}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${de.filter((Ee) => Ee != null).map((Ee) => `\`${Ee}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ze, k, C, x, H]), Pe && (C ? We.length === 0 ? Ne = null : Ne = We.reduce((de, Ee, Ae) => (de.push(Ee), Ae < We.length - 1 && de.push(", "), de), []) : Ne = Te);
  let ot = Z;
  !s && J && ee && (ot = fe.clientWidth);
  let $e;
  typeof z < "u" ? $e = z : $e = f ? null : 0;
  const ve = q.id || (x ? `mui-component-select-${x}` : void 0), ue = T({}, t, {
    variant: D,
    value: H,
    open: qe,
    error: h
  }), st = NC(ue);
  return /* @__PURE__ */ pe(E.Fragment, {
    children: [/* @__PURE__ */ w(PC, T({
      ref: ae,
      tabIndex: $e,
      role: "button",
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": qe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [m, ve].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: ce,
      onMouseDown: f || N ? null : j,
      onBlur: He,
      onFocus: P
    }, q, {
      ownerState: ue,
      className: be(q.className, st.select, c),
      id: ve,
      children: IC(Ne) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ou || (Ou = /* @__PURE__ */ w("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ne
    })), /* @__PURE__ */ w(AC, T({
      "aria-invalid": h,
      value: Array.isArray(H) ? H.join(",") : H,
      name: x,
      ref: Y,
      "aria-hidden": !0,
      onChange: X,
      tabIndex: -1,
      disabled: f,
      className: st.nativeInput,
      autoFocus: a,
      ownerState: ue
    }, W)), /* @__PURE__ */ w($C, {
      as: v,
      className: st.icon,
      ownerState: ue
    }), /* @__PURE__ */ w(vC, T({
      id: `menu-${x || ""}`,
      anchorEl: fe,
      open: qe,
      onClose: ye,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, O, {
      MenuListProps: T({
        "aria-labelledby": m,
        role: "listbox",
        disableListWrap: !0
      }, O.MenuListProps),
      PaperProps: T({}, O.PaperProps, {
        style: T({
          minWidth: ot
        }, O.PaperProps != null ? O.PaperProps.style : null)
      }),
      children: et
    }))]
  });
});
process.env.NODE_ENV !== "production" && (np.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Wt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const kC = np, MC = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], _C = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, ul = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => wn(e) && e !== "variant",
  slot: "Root"
}, DC = he(Mf, ul)(""), FC = he(Ff, ul)(""), LC = he(_f, ul)(""), dl = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = Nf,
    id: f,
    input: p,
    inputProps: h,
    label: v,
    labelId: y,
    MenuProps: m,
    multiple: O = !1,
    native: C = !1,
    onClose: x,
    onOpen: b,
    open: g,
    renderValue: R,
    SelectDisplayProps: P,
    variant: $ = "outlined"
  } = r, F = ge(r, MC), N = C ? SC : kC, M = Or(), q = xr({
    props: r,
    muiFormControl: M,
    states: ["variant", "error"]
  }), z = q.variant || $, L = T({}, r, {
    variant: z,
    classes: s
  }), D = _C(L), W = p || {
    standard: /* @__PURE__ */ w(DC, {
      ownerState: L
    }),
    outlined: /* @__PURE__ */ w(FC, {
      label: v,
      ownerState: L
    }),
    filled: /* @__PURE__ */ w(LC, {
      ownerState: L
    })
  }[z], H = it(n, W.ref);
  return /* @__PURE__ */ w(E.Fragment, {
    children: /* @__PURE__ */ E.cloneElement(W, T({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: T({
        children: a,
        error: q.error,
        IconComponent: d,
        variant: z,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: O
      }, C ? {
        id: f
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: y,
        MenuProps: m,
        onClose: x,
        onOpen: b,
        open: g,
        renderValue: R,
        SelectDisplayProps: T({
          id: f
        }, P)
      }, h, {
        classes: h ? kt(D, h.classes) : D
      }, p ? p.props.inputProps : {})
    }, O && C && z === "outlined" ? {
      notched: !0
    } : {}, {
      ref: H,
      className: be(W.props.className, l)
    }, !p && {
      variant: z
    }, F))
  });
});
process.env.NODE_ENV !== "production" && (dl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
dl.muiName = "Select";
const jC = dl;
function BC(e) {
  return ze("MuiTextField", e);
}
Ve("MuiTextField", ["root"]);
const UC = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], WC = {
  standard: Mf,
  filled: _f,
  outlined: Ff
}, zC = (e) => {
  const {
    classes: t
  } = e;
  return Ye({
    root: ["root"]
  }, BC, t);
}, VC = he(wT, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), rp = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: a = !1,
    children: s,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: p,
    fullWidth: h = !1,
    helperText: v,
    id: y,
    InputLabelProps: m,
    inputProps: O,
    InputProps: C,
    inputRef: x,
    label: b,
    maxRows: g,
    minRows: R,
    multiline: P = !1,
    name: $,
    onBlur: F,
    onChange: N,
    onClick: M,
    onFocus: q,
    placeholder: z,
    required: L = !1,
    rows: D,
    select: W = !1,
    SelectProps: H,
    type: le,
    value: te,
    variant: _ = "outlined"
  } = r, Y = ge(r, UC), re = T({}, r, {
    autoFocus: a,
    color: c,
    disabled: d,
    error: f,
    fullWidth: h,
    multiline: P,
    required: L,
    select: W,
    variant: _
  }), ee = zC(re);
  process.env.NODE_ENV !== "production" && W && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const K = {};
  _ === "outlined" && (m && typeof m.shrink < "u" && (K.notched = m.shrink), K.label = b), W && ((!H || !H.native) && (K.id = void 0), K["aria-describedby"] = void 0);
  const J = vs(y), Z = v && J ? `${J}-helper-text` : void 0, Q = b && J ? `${J}-label` : void 0, oe = WC[_], ae = /* @__PURE__ */ w(oe, T({
    "aria-describedby": Z,
    autoComplete: i,
    autoFocus: a,
    defaultValue: u,
    fullWidth: h,
    multiline: P,
    name: $,
    rows: D,
    maxRows: g,
    minRows: R,
    type: le,
    value: te,
    id: J,
    inputRef: x,
    onBlur: F,
    onChange: N,
    onFocus: q,
    onClick: M,
    placeholder: z,
    inputProps: O
  }, K, C));
  return /* @__PURE__ */ pe(VC, T({
    className: be(ee.root, l),
    disabled: d,
    error: f,
    fullWidth: h,
    ref: n,
    required: L,
    color: c,
    variant: _,
    ownerState: re
  }, Y, {
    children: [b != null && b !== "" && /* @__PURE__ */ w(gT, T({
      htmlFor: J,
      id: Q
    }, m, {
      children: b
    })), W ? /* @__PURE__ */ w(jC, T({
      "aria-describedby": Z,
      id: J,
      labelId: Q,
      value: te,
      input: ae
    }, H, {
      children: s
    })) : ae, v && /* @__PURE__ */ w($T, T({
      id: Z
    }, p, {
      children: v
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (rp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const qC = rp, HC = vf(), YC = (e) => {
  const {
    options: t = [],
    labelText: n,
    name: r,
    multiple: i = !1,
    required: a,
    onCreateNew: s,
    renderLabel: l,
    fetchFunction: c
  } = e, { control: u } = po(), [d, f] = Et(t), [p, h] = Et(""), { isLoading: v, refetch: y } = Ad(["options"], {
    queryFn: () => c({
      filter: {
        query: p
      }
    }),
    enabled: !1
  });
  ur(() => {
    const b = setTimeout(() => {
      if (p) {
        y().then(({ data: g }) => {
          f(g.data);
        });
        return;
      }
      f([]);
    }, 500);
    return () => clearTimeout(b);
  }, [p, y]);
  const m = (b, g, R) => {
    g && g.inputValue ? s && s(g.inputValue) : (b.target.value = (g == null ? void 0 : g.id) ?? null, R(b));
  }, O = (b) => typeof b == "string" ? b : b.inputValue ? b.inputValue : l ? l(b) : b.name, C = (b, g) => /* @__PURE__ */ w("li", { ...b, children: l ? l(g) : g.name }), x = (b, g) => {
    const R = HC(b, g), P = String(g.inputValue).trim(), $ = R.length === 0;
    return s && P !== "" && ($ || !b.find((F) => F.name === P)) && R.push({
      inputValue: P,
      name: `Agregar "${P}"`
    }), R;
  };
  return /* @__PURE__ */ w(fo, { fullWidth: !0, children: /* @__PURE__ */ w(
    mo,
    {
      control: u,
      name: r,
      render: ({ field: { ref: b, onChange: g, value: R, ...P } }) => /* @__PURE__ */ w(
        VS,
        {
          multiple: i,
          value: d.find(($) => $.id === Number(R)) ? d.find(($) => $.id === Number(R)).name : "",
          onChange: ($, F) => m($, F, g),
          onKeyDown: ($) => h($.target.value),
          filterOptions: x,
          options: d,
          selectOnFocus: !0,
          clearOnBlur: !0,
          handleHomeEndKeys: !0,
          getOptionLabel: O,
          renderOption: C,
          freeSolo: !0,
          renderInput: ($) => /* @__PURE__ */ w(
            qC,
            {
              ...$,
              ...P,
              inputRef: b,
              required: a,
              name: r,
              label: n,
              InputProps: {
                ...$.InputProps,
                endAdornment: /* @__PURE__ */ pe(ps, { children: [
                  v ? /* @__PURE__ */ w(Du, { color: "inherit", size: 20 }) : null,
                  $.InputProps.endAdornment
                ] })
              }
            }
          )
        }
      )
    }
  ) });
};
YC.propTypes = {
  control: o.any,
  options: o.array,
  labelText: o.string,
  name: o.string,
  multiple: o.bool,
  required: o.bool,
  onCreateNew: o.func,
  renderLabel: o.func,
  fetchFunction: o.func
};
function op(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: GC } = Object.prototype, { getPrototypeOf: fl } = Object, Fi = ((e) => (t) => {
  const n = GC.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tn = (e) => (e = e.toLowerCase(), (t) => Fi(t) === e), Li = (e) => (t) => typeof t === e, { isArray: wr } = Array, co = Li("undefined");
function KC(e) {
  return e !== null && !co(e) && e.constructor !== null && !co(e.constructor) && _t(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ip = tn("ArrayBuffer");
function QC(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ip(e.buffer), t;
}
const XC = Li("string"), _t = Li("function"), ap = Li("number"), ji = (e) => e !== null && typeof e == "object", JC = (e) => e === !0 || e === !1, Wo = (e) => {
  if (Fi(e) !== "object")
    return !1;
  const t = fl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ZC = tn("Date"), eR = tn("File"), tR = tn("Blob"), nR = tn("FileList"), rR = (e) => ji(e) && _t(e.pipe), oR = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || _t(e.append) && ((t = Fi(e)) === "formdata" || // detect form-data instance
  t === "object" && _t(e.toString) && e.toString() === "[object FormData]"));
}, iR = tn("URLSearchParams"), aR = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Oo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), wr(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let l;
    for (r = 0; r < s; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function sp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const lp = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), cp = (e) => !co(e) && e !== lp;
function rs() {
  const { caseless: e } = cp(this) && this || {}, t = {}, n = (r, i) => {
    const a = e && sp(t, i) || i;
    Wo(t[a]) && Wo(r) ? t[a] = rs(t[a], r) : Wo(r) ? t[a] = rs({}, r) : wr(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Oo(arguments[r], n);
  return t;
}
const sR = (e, t, n, { allOwnKeys: r } = {}) => (Oo(t, (i, a) => {
  n && _t(i) ? e[a] = op(i, n) : e[a] = i;
}, { allOwnKeys: r }), e), lR = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), cR = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, uR = (e, t, n, r) => {
  let i, a, s;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      s = i[a], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && fl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, dR = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, fR = (e) => {
  if (!e)
    return null;
  if (wr(e))
    return e;
  let t = e.length;
  if (!ap(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, pR = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && fl(Uint8Array)), mR = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, hR = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, yR = tn("HTMLFormElement"), vR = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), Su = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), gR = tn("RegExp"), up = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Oo(n, (i, a) => {
    t(i, a, e) !== !1 && (r[a] = i);
  }), Object.defineProperties(e, r);
}, bR = (e) => {
  up(e, (t, n) => {
    if (_t(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (_t(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ER = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((a) => {
      n[a] = !0;
    });
  };
  return wr(e) ? r(e) : r(String(e).split(t)), n;
}, xR = () => {
}, OR = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ha = "abcdefghijklmnopqrstuvwxyz", Tu = "0123456789", dp = {
  DIGIT: Tu,
  ALPHA: ha,
  ALPHA_DIGIT: ha + ha.toUpperCase() + Tu
}, wR = (e = 16, t = dp.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function SR(e) {
  return !!(e && _t(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const TR = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (ji(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const a = wr(r) ? [] : {};
        return Oo(r, (s, l) => {
          const c = n(s, i + 1);
          !co(c) && (a[l] = c);
        }), t[i] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, CR = tn("AsyncFunction"), RR = (e) => e && (ji(e) || _t(e)) && _t(e.then) && _t(e.catch), U = {
  isArray: wr,
  isArrayBuffer: ip,
  isBuffer: KC,
  isFormData: oR,
  isArrayBufferView: QC,
  isString: XC,
  isNumber: ap,
  isBoolean: JC,
  isObject: ji,
  isPlainObject: Wo,
  isUndefined: co,
  isDate: ZC,
  isFile: eR,
  isBlob: tR,
  isRegExp: gR,
  isFunction: _t,
  isStream: rR,
  isURLSearchParams: iR,
  isTypedArray: pR,
  isFileList: nR,
  forEach: Oo,
  merge: rs,
  extend: sR,
  trim: aR,
  stripBOM: lR,
  inherits: cR,
  toFlatObject: uR,
  kindOf: Fi,
  kindOfTest: tn,
  endsWith: dR,
  toArray: fR,
  forEachEntry: mR,
  matchAll: hR,
  isHTMLForm: yR,
  hasOwnProperty: Su,
  hasOwnProp: Su,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: up,
  freezeMethods: bR,
  toObjectSet: ER,
  toCamelCase: vR,
  noop: xR,
  toFiniteNumber: OR,
  findKey: sp,
  global: lp,
  isContextDefined: cp,
  ALPHABET: dp,
  generateString: wR,
  isSpecCompliantForm: SR,
  toJSONObject: TR,
  isAsyncFn: CR,
  isThenable: RR
};
function Ie(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
U.inherits(Ie, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: U.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const fp = Ie.prototype, pp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  pp[e] = { value: e };
});
Object.defineProperties(Ie, pp);
Object.defineProperty(fp, "isAxiosError", { value: !0 });
Ie.from = (e, t, n, r, i, a) => {
  const s = Object.create(fp);
  return U.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Ie.call(s, e.message, t, n, r, i), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const PR = null;
function os(e) {
  return U.isPlainObject(e) || U.isArray(e);
}
function mp(e) {
  return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Cu(e, t, n) {
  return e ? e.concat(t).map(function(i, a) {
    return i = mp(i), !n && a ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function $R(e) {
  return U.isArray(e) && !e.some(os);
}
const AR = U.toFlatObject(U, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bi(e, t, n) {
  if (!U.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = U.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, m) {
    return !U.isUndefined(m[y]);
  });
  const r = n.metaTokens, i = n.visitor || d, a = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
  if (!U.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null)
      return "";
    if (U.isDate(v))
      return v.toISOString();
    if (!c && U.isBlob(v))
      throw new Ie("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(v) || U.isTypedArray(v) ? c && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function d(v, y, m) {
    let O = v;
    if (v && !m && typeof v == "object") {
      if (U.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), v = JSON.stringify(v);
      else if (U.isArray(v) && $R(v) || (U.isFileList(v) || U.endsWith(y, "[]")) && (O = U.toArray(v)))
        return y = mp(y), O.forEach(function(x, b) {
          !(U.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Cu([y], b, a) : s === null ? y : y + "[]",
            u(x)
          );
        }), !1;
    }
    return os(v) ? !0 : (t.append(Cu(m, y, a), u(v)), !1);
  }
  const f = [], p = Object.assign(AR, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: os
  });
  function h(v, y) {
    if (!U.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(v), U.forEach(v, function(O, C) {
        (!(U.isUndefined(O) || O === null) && i.call(
          t,
          O,
          U.isString(C) ? C.trim() : C,
          y,
          p
        )) === !0 && h(O, y ? y.concat(C) : [C]);
      }), f.pop();
    }
  }
  if (!U.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Ru(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function pl(e, t) {
  this._pairs = [], e && Bi(e, this, t);
}
const hp = pl.prototype;
hp.append = function(t, n) {
  this._pairs.push([t, n]);
};
hp.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ru);
  } : Ru;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function IR(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function yp(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || IR, i = n && n.serialize;
  let a;
  if (i ? a = i(t, n) : a = U.isURLSearchParams(t) ? t.toString() : new pl(t, n).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class NR {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    U.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Pu = NR, vp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kR = typeof URLSearchParams < "u" ? URLSearchParams : pl, MR = typeof FormData < "u" ? FormData : null, _R = typeof Blob < "u" ? Blob : null, DR = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), FR = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Qt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kR,
    FormData: MR,
    Blob: _R
  },
  isStandardBrowserEnv: DR,
  isStandardBrowserWebWorkerEnv: FR,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function LR(e, t) {
  return Bi(e, new Qt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, a) {
      return Qt.isNode && U.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function jR(e) {
  return U.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function BR(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let a;
  for (r = 0; r < i; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function gp(e) {
  function t(n, r, i, a) {
    let s = n[a++];
    const l = Number.isFinite(+s), c = a >= n.length;
    return s = !s && U.isArray(i) ? i.length : s, c ? (U.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !l) : ((!i[s] || !U.isObject(i[s])) && (i[s] = []), t(n, r, i[s], a) && U.isArray(i[s]) && (i[s] = BR(i[s])), !l);
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    const n = {};
    return U.forEachEntry(e, (r, i) => {
      t(jR(r), i, n, 0);
    }), n;
  }
  return null;
}
const UR = {
  "Content-Type": void 0
};
function WR(e, t, n) {
  if (U.isString(e))
    try {
      return (t || JSON.parse)(e), U.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ui = {
  transitional: vp,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, a = U.isObject(t);
    if (a && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t))
      return i && i ? JSON.stringify(gp(t)) : t;
    if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
      return t;
    if (U.isArrayBufferView(t))
      return t.buffer;
    if (U.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return LR(t, this.formSerializer).toString();
      if ((l = U.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Bi(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || i ? (n.setContentType("application/json", !1), WR(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ui.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (t && U.isString(t) && (r && !this.responseType || i)) {
      const s = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? Ie.from(l, Ie.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Qt.classes.FormData,
    Blob: Qt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
U.forEach(["delete", "get", "head"], function(t) {
  Ui.headers[t] = {};
});
U.forEach(["post", "put", "patch"], function(t) {
  Ui.headers[t] = U.merge(UR);
});
const ml = Ui, zR = U.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), VR = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || t[n] && zR[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, $u = Symbol("internals");
function Dr(e) {
  return e && String(e).trim().toLowerCase();
}
function zo(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(zo) : String(e);
}
function qR(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const HR = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ya(e, t, n, r, i) {
  if (U.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!U.isString(t)) {
    if (U.isString(r))
      return t.indexOf(r) !== -1;
    if (U.isRegExp(r))
      return r.test(t);
  }
}
function YR(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function GR(e, t) {
  const n = U.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, a, s) {
        return this[r].call(this, t, i, a, s);
      },
      configurable: !0
    });
  });
}
class Wi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function a(l, c, u) {
      const d = Dr(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = U.findKey(i, d);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || c] = zo(l));
    }
    const s = (l, c) => U.forEach(l, (u, d) => a(u, d, c));
    return U.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : U.isString(t) && (t = t.trim()) && !HR(t) ? s(VR(t), n) : t != null && a(n, t, r), this;
  }
  get(t, n) {
    if (t = Dr(t), t) {
      const r = U.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return qR(i);
        if (U.isFunction(n))
          return n.call(this, i, r);
        if (U.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Dr(t), t) {
      const r = U.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ya(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function a(s) {
      if (s = Dr(s), s) {
        const l = U.findKey(r, s);
        l && (!n || ya(r, r[l], l, n)) && (delete r[l], i = !0);
      }
    }
    return U.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || ya(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return U.forEach(this, (i, a) => {
      const s = U.findKey(r, a);
      if (s) {
        n[s] = zo(i), delete n[a];
        return;
      }
      const l = t ? YR(a) : String(a).trim();
      l !== a && delete n[a], n[l] = zo(i), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && U.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[$u] = this[$u] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(s) {
      const l = Dr(s);
      r[l] || (GR(i, s), r[l] = !0);
    }
    return U.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Wi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.freezeMethods(Wi.prototype);
U.freezeMethods(Wi);
const on = Wi;
function va(e, t) {
  const n = this || ml, r = t || n, i = on.from(r.headers);
  let a = r.data;
  return U.forEach(e, function(l) {
    a = l.call(n, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function bp(e) {
  return !!(e && e.__CANCEL__);
}
function wo(e, t, n) {
  Ie.call(this, e ?? "canceled", Ie.ERR_CANCELED, t, n), this.name = "CanceledError";
}
U.inherits(wo, Ie, {
  __CANCEL__: !0
});
function KR(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ie(
    "Request failed with status code " + n.status,
    [Ie.ERR_BAD_REQUEST, Ie.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const QR = Qt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, i, a, s, l) {
        const c = [];
        c.push(n + "=" + encodeURIComponent(r)), U.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), U.isString(a) && c.push("path=" + a), U.isString(s) && c.push("domain=" + s), l === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function XR(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function JR(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ep(e, t) {
  return e && !XR(t) ? JR(e, t) : t;
}
const ZR = Qt.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(a) {
      let s = a;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(s) {
      const l = U.isString(s) ? i(s) : s;
      return l.protocol === r.protocol && l.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function e1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function t1(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = r[a];
    s || (s = u), n[i] = c, r[i] = u;
    let f = a, p = 0;
    for (; f !== i; )
      p += n[f++], f = f % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), u - s < t)
      return;
    const h = d && u - d;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function Au(e, t) {
  let n = 0;
  const r = t1(50, 250);
  return (i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, l = a - n, c = r(l), u = a <= s;
    n = a;
    const d = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && s && u ? (s - a) / c : void 0,
      event: i
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const n1 = typeof XMLHttpRequest < "u", r1 = n1 && function(e) {
  return new Promise(function(n, r) {
    let i = e.data;
    const a = on.from(e.headers).normalize(), s = e.responseType;
    let l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    U.isFormData(i) && (Qt.isStandardBrowserEnv || Qt.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(h + ":" + v));
    }
    const d = Ep(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), yp(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const h = on.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      KR(function(O) {
        n(O), c();
      }, function(O) {
        r(O), c();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (r(new Ie("Request aborted", Ie.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new Ie("Network Error", Ie.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || vp;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), r(new Ie(
        v,
        y.clarifyTimeoutError ? Ie.ETIMEDOUT : Ie.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Qt.isStandardBrowserEnv) {
      const h = (e.withCredentials || ZR(d)) && e.xsrfCookieName && QR.read(e.xsrfCookieName);
      h && a.set(e.xsrfHeaderName, h);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in u && U.forEach(a.toJSON(), function(v, y) {
      u.setRequestHeader(y, v);
    }), U.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Au(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Au(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (h) => {
      u && (r(!h || h.type ? new wo(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const p = e1(d);
    if (p && Qt.protocols.indexOf(p) === -1) {
      r(new Ie("Unsupported protocol " + p + ":", Ie.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(i || null);
  });
}, Vo = {
  http: PR,
  xhr: r1
};
U.forEach(Vo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const o1 = {
  getAdapter: (e) => {
    e = U.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let i = 0; i < t && (n = e[i], !(r = U.isString(n) ? Vo[n.toLowerCase()] : n)); i++)
      ;
    if (!r)
      throw r === !1 ? new Ie(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        U.hasOwnProp(Vo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!U.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Vo
};
function ga(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new wo(null, e);
}
function Iu(e) {
  return ga(e), e.headers = on.from(e.headers), e.data = va.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), o1.getAdapter(e.adapter || ml.adapter)(e).then(function(r) {
    return ga(e), r.data = va.call(
      e,
      e.transformResponse,
      r
    ), r.headers = on.from(r.headers), r;
  }, function(r) {
    return bp(r) || (ga(e), r && r.response && (r.response.data = va.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = on.from(r.response.headers))), Promise.reject(r);
  });
}
const Nu = (e) => e instanceof on ? e.toJSON() : e;
function gr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return U.isPlainObject(u) && U.isPlainObject(d) ? U.merge.call({ caseless: f }, u, d) : U.isPlainObject(d) ? U.merge({}, d) : U.isArray(d) ? d.slice() : d;
  }
  function i(u, d, f) {
    if (U.isUndefined(d)) {
      if (!U.isUndefined(u))
        return r(void 0, u, f);
    } else
      return r(u, d, f);
  }
  function a(u, d) {
    if (!U.isUndefined(d))
      return r(void 0, d);
  }
  function s(u, d) {
    if (U.isUndefined(d)) {
      if (!U.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, d);
  }
  function l(u, d, f) {
    if (f in t)
      return r(u, d);
    if (f in e)
      return r(void 0, u);
  }
  const c = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, d) => i(Nu(u), Nu(d), !0)
  };
  return U.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || i, p = f(e[d], t[d], d);
    U.isUndefined(p) && f !== l || (n[d] = p);
  }), n;
}
const xp = "1.4.0", hl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  hl[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ku = {};
hl.transitional = function(t, n, r) {
  function i(a, s) {
    return "[Axios v" + xp + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, l) => {
    if (t === !1)
      throw new Ie(
        i(s, " has been removed" + (n ? " in " + n : "")),
        Ie.ERR_DEPRECATED
      );
    return n && !ku[s] && (ku[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, l) : !0;
  };
};
function i1(e, t, n) {
  if (typeof e != "object")
    throw new Ie("options must be an object", Ie.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const a = r[i], s = t[a];
    if (s) {
      const l = e[a], c = l === void 0 || s(l, a, e);
      if (c !== !0)
        throw new Ie("option " + a + " must be " + c, Ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Ie("Unknown option " + a, Ie.ERR_BAD_OPTION);
  }
}
const is = {
  assertOptions: i1,
  validators: hl
}, hn = is.validators;
class li {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Pu(),
      response: new Pu()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = gr(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: a } = n;
    r !== void 0 && is.assertOptions(r, {
      silentJSONParsing: hn.transitional(hn.boolean),
      forcedJSONParsing: hn.transitional(hn.boolean),
      clarifyTimeoutError: hn.transitional(hn.boolean)
    }, !1), i != null && (U.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : is.assertOptions(i, {
      encode: hn.function,
      serialize: hn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = a && U.merge(
      a.common,
      a[n.method]
    ), s && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete a[v];
      }
    ), n.headers = on.concat(s, a);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (c = c && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let d, f = 0, p;
    if (!c) {
      const v = [Iu.bind(this), void 0];
      for (v.unshift.apply(v, l), v.push.apply(v, u), p = v.length, d = Promise.resolve(n); f < p; )
        d = d.then(v[f++], v[f++]);
      return d;
    }
    p = l.length;
    let h = n;
    for (f = 0; f < p; ) {
      const v = l[f++], y = l[f++];
      try {
        h = v(h);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      d = Iu.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, p = u.length; f < p; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = gr(this.defaults, t);
    const n = Ep(t.baseURL, t.url);
    return yp(n, t.params, t.paramsSerializer);
  }
}
U.forEach(["delete", "get", "head", "options"], function(t) {
  li.prototype[t] = function(n, r) {
    return this.request(gr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, l) {
      return this.request(gr(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  li.prototype[t] = n(), li.prototype[t + "Form"] = n(!0);
});
const qo = li;
class yl {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const s = new Promise((l) => {
        r.subscribe(l), a = l;
      }).then(i);
      return s.cancel = function() {
        r.unsubscribe(a);
      }, s;
    }, t(function(a, s, l) {
      r.reason || (r.reason = new wo(a, s, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new yl(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const a1 = yl;
function s1(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function l1(e) {
  return U.isObject(e) && e.isAxiosError === !0;
}
const as = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(as).forEach(([e, t]) => {
  as[t] = e;
});
const c1 = as;
function Op(e) {
  const t = new qo(e), n = op(qo.prototype.request, t);
  return U.extend(n, qo.prototype, t, { allOwnKeys: !0 }), U.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Op(gr(e, i));
  }, n;
}
const at = Op(ml);
at.Axios = qo;
at.CanceledError = wo;
at.CancelToken = a1;
at.isCancel = bp;
at.VERSION = xp;
at.toFormData = Bi;
at.AxiosError = Ie;
at.Cancel = at.CanceledError;
at.all = function(t) {
  return Promise.all(t);
};
at.spread = s1;
at.isAxiosError = l1;
at.mergeConfig = gr;
at.AxiosHeaders = on;
at.formToJSON = (e) => gp(U.isHTMLForm(e) ? new FormData(e) : e);
at.HttpStatusCode = c1;
at.default = at;
const u1 = at, kn = u1.create({
  baseURL: "/api"
});
kn.interceptors.request.use((e) => (e.headers.Authorization = `Bearer ${localStorage.getItem("app-token")}`, e));
kn.interceptors.response.use(
  (e) => e,
  (e) => {
    if (e.response.status === 401) {
      window.location = "/login";
      return;
    }
    throw e;
  }
);
class d1 {
  login(t) {
    return kn.post("/login", t);
  }
  me() {
    return kn.get("/me");
  }
  async logout() {
    return await kn.delete("/logout");
  }
  async resetPasswordEmail(t) {
    return await kn.post("/recover-password", t);
  }
  async resetPassword(t) {
    return await kn.post("/reset-password", t);
  }
}
const ba = new d1(), wp = _p({}), f1 = ({ children: e }) => {
  const [t, n] = Et(null), [r, i] = Et(!1), a = localStorage.getItem("app-token");
  ur(() => {
    a && (t || (i(!0), c().finally(() => i(!1))));
  }, [a, t]);
  const s = (u) => ba.login(u).then((d) => {
    localStorage.setItem("app-token", d.data.token), n(d.data.user);
  }), l = () => ba.logout().then(() => {
    n(null), localStorage.removeItem("app-token");
  }), c = async () => ba.me().then((u) => {
    n(u.data.user);
  }).catch(() => {
    n(null), localStorage.removeItem("app-token");
  });
  return /* @__PURE__ */ w(
    wp.Provider,
    {
      value: {
        user: t,
        login: s,
        logout: l,
        me: c
      },
      children: r ? /* @__PURE__ */ w(Wn, {}) : e
    }
  );
};
f1.propTypes = {
  children: o.node.isRequired
};
const Sr = () => Dp(wp), vl = (e, t) => {
  if (!e)
    return !1;
  const n = e.permissions;
  for (let r in t)
    if (!n[r] || n[r] === !1)
      return !1;
  return !0;
}, p1 = ({ has: e, ...t }) => {
  const { user: n } = Sr();
  return vl(n, e) ? /* @__PURE__ */ w(Gp, { ...t }) : null;
};
p1.propTypes = {
  has: o.object
};
function rP() {
  const [e, t] = Ud();
  return {
    tab: Number(e.get("tab")) || 1,
    onChangeTab: (i, a) => {
      t({ tab: a });
    }
  };
}
const Sp = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (Sp.displayName = "GridContext");
const Mu = Sp;
function m1(e) {
  return ze("MuiGrid", e);
}
const h1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y1 = ["column-reverse", "column", "row-reverse", "row"], v1 = ["nowrap", "wrap-reverse", "wrap"], Fr = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], uo = Ve("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...h1.map((e) => `spacing-xs-${e}`),
  // direction values
  ...y1.map((e) => `direction-xs-${e}`),
  // wrap values
  ...v1.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Fr.map((e) => `grid-xs-${e}`),
  ...Fr.map((e) => `grid-sm-${e}`),
  ...Fr.map((e) => `grid-md-${e}`),
  ...Fr.map((e) => `grid-lg-${e}`),
  ...Fr.map((e) => `grid-xl-${e}`)
]), g1 = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function cr(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function b1({
  theme: e,
  ownerState: t
}) {
  let n;
  return e.breakpoints.keys.reduce((r, i) => {
    let a = {};
    if (t[i] && (n = t[i]), !n)
      return r;
    if (n === !0)
      a = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (n === "auto")
      a = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const s = fi({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), l = typeof s == "object" ? s[i] : s;
      if (l == null)
        return r;
      const c = `${Math.round(n / l * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const d = e.spacing(t.columnSpacing);
        if (d !== "0px") {
          const f = `calc(${c} + ${cr(d)})`;
          u = {
            flexBasis: f,
            maxWidth: f
          };
        }
      }
      a = T({
        flexBasis: c,
        flexGrow: 0,
        maxWidth: c
      }, u);
    }
    return e.breakpoints.values[i] === 0 ? Object.assign(r, a) : r[e.breakpoints.up(i)] = a, r;
  }, {});
}
function E1({
  theme: e,
  ownerState: t
}) {
  const n = fi({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return Dt({
    theme: e
  }, n, (r) => {
    const i = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (i[`& > .${uo.item}`] = {
      maxWidth: "none"
    }), i;
  });
}
function Tp({
  breakpoints: e,
  values: t
}) {
  let n = "";
  Object.keys(t).forEach((i) => {
    n === "" && t[i] !== 0 && (n = i);
  });
  const r = Object.keys(e).sort((i, a) => e[i] - e[a]);
  return r.slice(0, r.indexOf(n));
}
function x1({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    rowSpacing: r
  } = t;
  let i = {};
  if (n && r !== 0) {
    const a = fi({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let s;
    typeof a == "object" && (s = Tp({
      breakpoints: e.breakpoints.values,
      values: a
    })), i = Dt({
      theme: e
    }, a, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        marginTop: `-${cr(d)}`,
        [`& > .${uo.item}`]: {
          paddingTop: cr(d)
        }
      } : (u = s) != null && u.includes(c) ? {} : {
        marginTop: 0,
        [`& > .${uo.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return i;
}
function O1({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    columnSpacing: r
  } = t;
  let i = {};
  if (n && r !== 0) {
    const a = fi({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let s;
    typeof a == "object" && (s = Tp({
      breakpoints: e.breakpoints.values,
      values: a
    })), i = Dt({
      theme: e
    }, a, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        width: `calc(100% + ${cr(d)})`,
        marginLeft: `-${cr(d)}`,
        [`& > .${uo.item}`]: {
          paddingLeft: cr(d)
        }
      } : (u = s) != null && u.includes(c) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${uo.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return i;
}
function w1(e, t, n = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return t.forEach((i) => {
    const a = e[i];
    Number(a) > 0 && r.push(n[`spacing-${i}-${String(a)}`]);
  }), r;
}
const S1 = he("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      container: r,
      direction: i,
      item: a,
      spacing: s,
      wrap: l,
      zeroMinWidth: c,
      breakpoints: u
    } = n;
    let d = [];
    r && (d = w1(s, u, t));
    const f = [];
    return u.forEach((p) => {
      const h = n[p];
      h && f.push(t[`grid-${p}-${String(h)}`]);
    }), [t.root, r && t.container, a && t.item, c && t.zeroMinWidth, ...d, i !== "row" && t[`direction-xs-${String(i)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...f];
  }
})(({
  ownerState: e
}) => T({
  boxSizing: "border-box"
}, e.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, e.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, e.zeroMinWidth && {
  minWidth: 0
}, e.wrap !== "wrap" && {
  flexWrap: e.wrap
}), E1, x1, O1, b1);
function T1(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return t.forEach((r) => {
    const i = e[r];
    if (Number(i) > 0) {
      const a = `spacing-${r}-${String(i)}`;
      n.push(a);
    }
  }), n;
}
const C1 = (e) => {
  const {
    classes: t,
    container: n,
    direction: r,
    item: i,
    spacing: a,
    wrap: s,
    zeroMinWidth: l,
    breakpoints: c
  } = e;
  let u = [];
  n && (u = T1(a, c));
  const d = [];
  c.forEach((p) => {
    const h = e[p];
    h && d.push(`grid-${p}-${String(h)}`);
  });
  const f = {
    root: ["root", n && "container", i && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, s !== "wrap" && `wrap-xs-${String(s)}`, ...d]
  };
  return Ye(f, m1, t);
}, Qr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: i
  } = zn(), a = oy(r), {
    className: s,
    columns: l,
    columnSpacing: c,
    component: u = "div",
    container: d = !1,
    direction: f = "row",
    item: p = !1,
    rowSpacing: h,
    spacing: v = 0,
    wrap: y = "wrap",
    zeroMinWidth: m = !1
  } = a, O = ge(a, g1), C = h || v, x = c || v, b = E.useContext(Mu), g = d ? l || 12 : b, R = {}, P = T({}, O);
  i.keys.forEach((N) => {
    O[N] != null && (R[N] = O[N], delete P[N]);
  });
  const $ = T({}, a, {
    columns: g,
    container: d,
    direction: f,
    item: p,
    rowSpacing: C,
    columnSpacing: x,
    wrap: y,
    zeroMinWidth: m,
    spacing: v
  }, R, {
    breakpoints: i.keys
  }), F = C1($);
  return /* @__PURE__ */ w(Mu.Provider, {
    value: g,
    children: /* @__PURE__ */ w(S1, T({
      ownerState: $,
      className: be(F.root, s),
      as: u,
      ref: n
    }, P))
  });
});
process.env.NODE_ENV !== "production" && (Qr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: o.oneOfType([o.arrayOf(o.number), o.number, o.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: o.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: o.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: o.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: o.bool
});
if (process.env.NODE_ENV !== "production") {
  const e = td("Grid", Qr);
  Qr["propTypes"] = T({}, Qr.propTypes, {
    direction: e("container"),
    lg: e("item"),
    md: e("item"),
    sm: e("item"),
    spacing: e("container"),
    wrap: e("container"),
    xs: e("item"),
    zeroMinWidth: e("item")
  });
}
const Ea = Qr, R1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAABBCAYAAABLqZGRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYtSURBVHgB7Zzxdds2EMa/9PX/egRsEG9geIJ4gzAT1J3AygR2JzA7gd0JpEzgZAIhE8QbuLqQbGSZAHEkIYLU93vvnmwIPEI4HHAACAKEEEIIIYQQQgghhBBCCCGE6HmHZXFWi9n7+xC39+lAcsXgtS0PcXufDhlS7uRloPzYyXYn653c7qRAVSEpkEq+3slDfc8+5d0vq/Hcx0bouYeeAvHltAE9LyNIUw9Sl6udXKG9EadA7lOgqsMt+re7da3jChlQYhzDtIn80ALjYGt9Y5fxKnC/mOvvoaNQlM0G9LwklHVdzhSOJTpvUDnCmGW+QwaUSGsYkSf0H6mk8m8Tlu3cc1+r0HGPeAqFXhvQ83IE2aJq+GPxJ8Z3okaukQEljmMYqcRz6BBHekpcLuO5t1XqWSOuJy8UOm1Az8sRZYvhYfsN0paxwAT8hmmQhraGzqEeoHdALc8YB4t4h5obBlWn1tcW4kgrpGUsO6qYypkEaWgPiGtwYgCL9IxpBGlsS3WoPp0h6vwrpOfknEkw6I5vJc8K82TpDhXbGTY8YMFM7UyCTERDBrnBvFmyQxnEL7gUSLdFkgW/oz+bljRpMH0WFgr4lzMtdGx28m0nX+v/P2D6fYfGoS4xUQiSEKlbi/b2sM8H6HA7+bf+lDozyLxjHeJMl550cQ6p4FvE98bvPekW8b2Z28knvDWqQR6beDk41Bf4Q2Yp3wX61ZVcswl837SJWP7C287VYmZRSon45ccuzhW6th4ddwodFul+k1Xo6BJZCWs6mWKE3weFjnt0Y6DfIvmBcMd5pdC1GkGHxQSknDNJmPUYmddniPeIY4PuMCMXcp9DOVRO/rfimq7w3iKeEv57ZE3qBYgvkfl8FWUx7n1yYQ6LEivowtGQM2k6RYeZktqZhswNNAsZXzE/5PfdIl/EdprRKeQwsbb8hhmT2plMZL7nAdcKDiQFsWG6YDzpvqMwbTjMmNTOdBGZz7WkLX1kmgNOkdfnMCdjx5TOZBA/52mrxNg4OzcDfMZyRkpNmE5nQjpuFHnbFhAM4viOvHCo9pIcTgvnSTeI4xnH238Tx7doP6fVfKcmhTM1Z44KxTWblrTYHi3H3sxhGQ41xmpjbhHGR/w6VSz7boft7Ak9D7IOeQKiOPhfKl4q7go6I5R42+g0oYE8phKam2l0jYlD5VBiGIN5oqk7N1CHQVVXoe+HYlA9CCAjoDxlsYE+lJWBQiKp8vDLIc4Us5sew+eWNIN4pnKWGBzm7VBWkbct3Nas5BmkryOLqjziSKUnz2Wdp22kbJ4jRdv1Uz81XmL4Sl7uOMw35PuoyNvW+HKzo6k/XSCPfNcr5JzSmRzaRyUhdkl9LjjMz6EK6EaKTUtaLs4kI4rZyR/1/2ZPzjx5DzF76WcdOn5SYpyHObtki7ChUr/rwSc+rEJHEdBj0P9VVjagN1bHPeIwynKuPXo0DyqPKfagHCvE26us081BeqfNh8yZ+uIQ7qW7HpqcMw75z6GaE7RGcc0/nvTYlbzUPKKq++Zs2/5e4CZOxc/jPb4FiE3bBZIhZY9xh+4JqU1chpCMUaYC3RjoRygb0Ber4x5hLPqNnMajL9WrvPrW1QrddVkGfpNBoB6PMTLJ0qP0XOJILiL/GHsbueMwzQjVtiFpUI0g5+i3WVnCv4h0Crb8n7GdqdnFltUQWSp9rP/WrOVbRd4yIo9FniGVQxVudI0WY3KFcU8dO/gXkTSOJO2kq40YTHToL5YhzvQOadDsmH+KyFdi4S/ymJD9ucchmnmv2LHLmQpk7kw5vJ3okFgjfAeZEnGkMvD9BeJoopnZk5szaXbMj/UsF3mLHBpcdeQxiGMxdszNmXiGKX9kRLqOyHcSp2v3mWKfKcQYD1aSNEgoJnObx4i8J2nH3JzJKPJyZDoOzbsg7hA/tzGIZzF2zM2Z5nq6dolsUO30a5yoYanhukNVF7K9IB3Mq7LPNczjSt54uPqz2RuUzw2GhV+xneIcV/JkziiPFD3tpUn4W6baKyIkR2wtJfydhYw60qmHRmSD14dgm4cTCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQvvwH3JUyEJ4OZkcAAAAASUVORK5CYII=", P1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAYCAYAAAAs7gcTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgBjZM9S8RAEIZ3dmOpXiV2BmwtBEs9TCs2B55gpf4Er1Cw0k70BMU/oKWgYPwFriA2FsbC6pqAoOI1ObkD0WzGnVyy7H34MRDYyTxM3pl3A6wrFoq7JY5iRTiicioroV3jdrJY3FsF5BECNpRSV0vegdsXLk9X14RQ8vxmXVKOiG4cx/cLxf2SgUveQYFAZyD2T+VmqN+5g6Pvs1m9AIgX5ZnqFiWOE8dr8UDr8FxuRzqf1M/F7Py4OzYyxU6OJGs1P4jbLk/vNjgAD/026OnnijpT1ZubYNXjZaMXOERas8pzklCwB3p7aZgzzcMRIdSavAyObDis1fNjQPPwdHpMtVJc2vDdTa0tASAwqwPO846yX+cka2L2TCu04cf7p3wTTAkhDfwluC+U8jLdYZde6ctKZGBKIEE3K17bevU8Zo6Ou2HrzjtrB2UvDCxY8nZcgnO9egvh2e1G0APHjhMoJTxqWn/+DFMFSfJgf9LApBsTSB1svg6luoEzvy/cLmKHg2Txj7C+JkFmPUWQXdn+cDpMZj0yvGZd0bO63Hpg4P8JpyDCcP57/QqT9VpCgf03rCE74hsC1ceDqXwTjQAAAABJRU5ErkJggg==", $1 = ({ sx: e }) => /* @__PURE__ */ pe(Qe, { direction: "column", alignItems: "center", sx: { ...e }, children: [
  /* @__PURE__ */ w("img", { src: R1, alt: "Logo Panda", style: { marginBottom: "-16px" } }),
  /* @__PURE__ */ w(
    xt,
    {
      variant: "caption",
      color: "text.secondary",
      align: "center",
      sx: {
        p: 1,
        width: "100%",
        backgroundColor: "#fff"
      },
      children: /* @__PURE__ */ pe(
        Kp,
        {
          color: "inherit",
          href: "https://crystal-desarrollo.com",
          target: "_blank",
          rel: "noreferrer",
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none"
          },
          children: [
            "Powered by Crystal Desarrollo",
            /* @__PURE__ */ w(
              "img",
              {
                src: P1,
                alt: "Logo de Crystal Desarrollo",
                style: { marginLeft: "8px" }
              }
            )
          ]
        }
      )
    }
  )
] }), A1 = (e) => Lu({
  ...e,
  palette: {
    ...e.palette,
    primary: {
      main: "#6D4F8C"
    }
  }
});
function oP() {
  return /* @__PURE__ */ w(cs, { theme: A1, children: /* @__PURE__ */ pe(Ea, { container: !0, height: "100dvh", sx: {}, children: [
    /* @__PURE__ */ w(
      Ea,
      {
        item: !0,
        xs: 8,
        sx: { overflow: "hidden", display: { xs: "none", lg: "flex" } },
        children: /* @__PURE__ */ w(
          "img",
          {
            src: "/login.webp",
            alt: "Gente haciendo ejercicio",
            style: {
              width: "100%",
              height: "100dvh",
              objectFit: "cover",
              filter: "brightness(.5)"
            }
          }
        )
      }
    ),
    /* @__PURE__ */ pe(
      Ea,
      {
        item: !0,
        xs: 12,
        lg: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        children: [
          /* @__PURE__ */ w(Qe, { display: { xs: "flex", lg: "none" }, children: /* @__PURE__ */ w(
            "img",
            {
              src: "/login.webp",
              alt: "Gente haciendo ejercicio",
              style: {
                height: "100%",
                width: "100%",
                objectFit: "cover",
                filter: "brightness(.5)",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1
              }
            }
          ) }),
          /* @__PURE__ */ w(
            ls,
            {
              elevation: 0,
              sx: { width: "100%", maxWidth: "400px", p: 4, borderRadius: 2 },
              children: /* @__PURE__ */ w(Ms, {})
            }
          ),
          /* @__PURE__ */ w($1, { sx: { position: "absolute", bottom: "0" } })
        ]
      }
    )
  ] }) });
}
const Br = ({ icon: e, text: t, url: n, onClick: r }) => /* @__PURE__ */ w(
  oo,
  {
    onClick: r,
    to: n ?? "",
    style: {
      textDecoration: "none",
      color: "rgb(0 0 0 / 80%)"
    },
    children: /* @__PURE__ */ pe(Qp, { children: [
      /* @__PURE__ */ w(Xp, { children: e }),
      /* @__PURE__ */ w(Jp, { primary: t })
    ] })
  }
);
Br.propTypes = {
  icon: o.node.isRequired,
  text: o.string.isRequired,
  url: o.string,
  onClick: o.func
};
const Cp = ({ onToggleDrawer: e, open: t }) => {
  const n = en(), r = Zp((i) => i.breakpoints.down("md"));
  return ur(() => {
    t && r && e(!1);
  }, [n]), r ? /* @__PURE__ */ pe(Pp, { open: t, onToggleDrawer: e, children: [
    /* @__PURE__ */ w(eo, {}),
    /* @__PURE__ */ w(ss, {})
  ] }) : /* @__PURE__ */ pe(Rp, { variant: "permanent", open: t, children: [
    /* @__PURE__ */ w(eo, {}),
    /* @__PURE__ */ w(ss, {})
  ] });
};
Cp.propTypes = {
  onToggleDrawer: o.func.isRequired,
  open: o.bool.isRequired
};
const Rp = he(zu, {
  shouldForwardProp: (e) => e !== "open"
})(({ theme: e, open: t }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: 240,
    transition: e.transitions.create("width", {
      easing: e.transitions.easing.sharp,
      duration: e.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...!t && {
      overflowX: "hidden",
      transition: e.transitions.create("width", {
        easing: e.transitions.easing.sharp,
        duration: e.transitions.duration.leavingScreen
      }),
      width: e.spacing(7),
      [e.breakpoints.up("sm")]: {
        width: e.spacing(9)
      }
    }
  },
  [e.breakpoints.down("md")]: {
    display: "none"
  }
}));
Rp.propTypes = {
  open: o.bool.isRequired
};
const Pp = ({ onToggleDrawer: e, open: t }) => /* @__PURE__ */ pe(
  zu,
  {
    variant: "temporary",
    anchor: "left",
    open: t,
    onClose: () => e(!1),
    sx: (n) => ({
      ".MuiDrawer-paper": {
        width: "50%",
        [n.breakpoints.down("sm")]: {
          width: "100%"
        }
      },
      [n.breakpoints.up("md")]: {
        display: "none"
      }
    }),
    children: [
      /* @__PURE__ */ w(eo, {}),
      /* @__PURE__ */ w(ss, {})
    ]
  }
), ss = () => {
  var t;
  const { user: e } = Sr();
  return /* @__PURE__ */ pe(
    em,
    {
      component: "nav",
      sx: { height: "100%", display: "flex", flexDirection: "column" },
      children: [
        /* @__PURE__ */ w(
          Br,
          {
            text: "Inicio",
            icon: /* @__PURE__ */ w(cm, {}),
            url: "",
            permissionsRequired: {
              "nav.dashboard": !0
            }
          }
        ),
        /* @__PURE__ */ w(
          Br,
          {
            text: "Clientes",
            icon: /* @__PURE__ */ w(um, {}),
            url: "/customers",
            permissionsRequired: {
              "nav.customers": !0
            }
          }
        ),
        /* @__PURE__ */ w(
          Br,
          {
            text: "Contabilidad",
            icon: /* @__PURE__ */ w(dm, {}),
            url: "/cash-flow",
            permissionsRequired: {
              "nav.cash_flow": !0
            }
          }
        ),
        /* @__PURE__ */ w(ci, { sx: { my: 2 } }),
        /* @__PURE__ */ w(Qe, { direction: "column", children: /* @__PURE__ */ w(
          Br,
          {
            text: "Configuración",
            icon: /* @__PURE__ */ w(fm, {}),
            url: "/settings",
            permissionsRequired: {
              "nav.settings": !0
            }
          }
        ) }),
        /* @__PURE__ */ pe(
          Qe,
          {
            display: { sm: "none", xs: "flex" },
            direction: "column",
            alignItems: "start",
            p: 1,
            mt: "auto",
            children: [
              /* @__PURE__ */ pe(
                Qe,
                {
                  width: "100%",
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1,
                  sx: { overflow: "hidden" },
                  children: [
                    /* @__PURE__ */ pe(Qe, { direction: "row", alignItems: "center", children: [
                      /* @__PURE__ */ w(Yo, { name: e == null ? void 0 : e.name, size: 50, sx: { mr: 2 } }),
                      /* @__PURE__ */ pe(Qe, { direction: "column", children: [
                        /* @__PURE__ */ w(xt, { fontSize: 16, fontWeight: "bold", children: e == null ? void 0 : e.name }),
                        /* @__PURE__ */ w(xt, { fontSize: 14, children: (t = e == null ? void 0 : e.email) == null ? void 0 : t.toLowerCase() })
                      ] })
                    ] }),
                    /* @__PURE__ */ pe(Qe, { direction: "row", alignItems: "center", children: [
                      /* @__PURE__ */ w(Xr, { color: "primary", children: /* @__PURE__ */ w(pm, {}) }),
                      /* @__PURE__ */ w(Xr, { color: "primary", children: /* @__PURE__ */ w(qu, {}) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ pe(
                Qe,
                {
                  px: "25%",
                  width: "100%",
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  children: [
                    /* @__PURE__ */ w(oo, { to: "/profile", children: "Mi perfil" }),
                    /* @__PURE__ */ w(oo, { to: "/configuración", children: "Configuración" })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
Pp.propTypes = {
  onToggleDrawer: o.func.isRequired,
  open: o.bool.isRequired
};
var gl = {}, $p = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})($p);
var bl = $p.exports, xa = {};
const I1 = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), ld.configure(e);
  }
}, N1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: me,
  createChainedFunction: Pa,
  createSvgIcon: Ni,
  debounce: ys,
  deprecatedPropType: Lm,
  isMuiElement: Do,
  ownerDocument: ht,
  ownerWindow: En,
  requirePropFactory: td,
  setRef: to,
  unstable_ClassNameGenerator: I1,
  unstable_useEnhancedEffect: sn,
  unstable_useId: vs,
  unsupportedProp: nd,
  useControlled: ir,
  useEventCallback: Ut,
  useForkRef: it,
  useIsFocusVisible: rd
}, Symbol.toStringTag, { value: "Module" })), k1 = /* @__PURE__ */ ds(N1);
var _u;
function El() {
  return _u || (_u = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = k1;
  }(xa)), xa;
}
const xl = /* @__PURE__ */ ds(gm);
var M1 = bl;
Object.defineProperty(gl, "__esModule", {
  value: !0
});
var Ap = gl.default = void 0, _1 = M1(El()), D1 = xl, F1 = (0, _1.default)(/* @__PURE__ */ (0, D1.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
Ap = gl.default = F1;
var Ol = {}, L1 = bl;
Object.defineProperty(Ol, "__esModule", {
  value: !0
});
var Ip = Ol.default = void 0, j1 = L1(El()), B1 = xl, U1 = (0, j1.default)(/* @__PURE__ */ (0, B1.jsx)("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
}), "Settings");
Ip = Ol.default = U1;
var wl = {}, W1 = bl;
Object.defineProperty(wl, "__esModule", {
  value: !0
});
var Np = wl.default = void 0, z1 = W1(El()), V1 = xl, q1 = (0, z1.default)(/* @__PURE__ */ (0, V1.jsx)("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
}), "Notifications");
Np = wl.default = q1;
const H1 = he(tm, {
  shouldForwardProp: (e) => e !== "open"
})(({ theme: e, open: t }) => ({
  width: "100%",
  zIndex: e.zIndex.drawer + 1,
  transition: e.transitions.create(["width", "margin"], {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.leavingScreen
  }),
  ...t && {
    transition: e.transitions.create(["width", "margin"], {
      easing: e.transitions.easing.sharp,
      duration: e.transitions.duration.enteringScreen
    })
  }
})), Oa = ({ Icon: e, text: t, onClick: n }) => /* @__PURE__ */ pe(
  om,
  {
    sx: {
      width: "100%",
      justifyContent: "start",
      py: 1,
      px: 1,
      "&:hover": {
        backgroundColor: (r) => r.palette.secondary.lighter
      }
    },
    onClick: n,
    children: [
      /* @__PURE__ */ w(e, { fontSize: "small", sx: { mr: 1 }, color: "primary" }),
      t
    ]
  }
), Y1 = ({ onToggleDrawer: e, open: t }) => {
  const { user: n, logout: r } = Sr(), i = Ci(), a = Tl(), s = Tl(), [l, c] = Et(!1), [u, d] = Et(!1);
  ur(() => {
    function v(y) {
      s.current && !s.current.contains(y.target) && c(!1);
    }
    return s && document.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v);
    };
  }, [s, l]);
  const f = () => {
    c(!1), d(!0);
  }, p = () => {
    c(!1), i("/profile");
  }, h = () => {
    c(!1), i("/settings");
  };
  return /* @__PURE__ */ pe(ps, { children: [
    /* @__PURE__ */ w(
      gd,
      {
        open: u,
        title: "Cerrar sesión",
        onCancel: () => d(!1),
        onConfirm: r,
        description: "¿Está seguro que desea cerrar sesión?"
      }
    ),
    /* @__PURE__ */ w(
      nm,
      {
        ref: s,
        open: l,
        anchorEl: a.current,
        role: void 0,
        transition: !0,
        disablePortal: !0,
        sx: {
          zIndex: 9991,
          display: { xs: "none", sm: "flex" }
        },
        children: ({ TransitionProps: v }) => {
          var y;
          return /* @__PURE__ */ w(
            rm,
            {
              ...v,
              style: {
                transformOrigin: "right top",
                position: "absolute",
                right: -100,
                top: 5,
                minWidth: 250
              },
              children: /* @__PURE__ */ w(
                Qe,
                {
                  direction: "column",
                  alignItems: "flex-start",
                  gap: 2,
                  mt: 1,
                  width: "100%",
                  children: /* @__PURE__ */ pe(ls, { sx: { width: "100%" }, children: [
                    /* @__PURE__ */ pe(
                      Qe,
                      {
                        direction: "row",
                        alignItems: "center",
                        p: 1,
                        sx: { maxWidth: "95%", overflow: "hidden" },
                        children: [
                          /* @__PURE__ */ w(Yo, { size: 30, sx: { mr: 1 } }),
                          /* @__PURE__ */ pe(Qe, { direction: "column", children: [
                            /* @__PURE__ */ w(xt, { fontSize: 14, fontWeight: "bold", children: n == null ? void 0 : n.name }),
                            /* @__PURE__ */ w(xt, { fontSize: 12, children: (y = n == null ? void 0 : n.email) == null ? void 0 : y.toLowerCase() })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ pe(Qe, { direction: "column", justifyContent: "flex-start", children: [
                      /* @__PURE__ */ w(
                        Oa,
                        {
                          Icon: Ap,
                          text: "Mi perfil",
                          onClick: p
                        }
                      ),
                      /* @__PURE__ */ w(
                        Oa,
                        {
                          Icon: Ip,
                          text: "Configuración",
                          onClick: h
                        }
                      )
                    ] }),
                    /* @__PURE__ */ w(ci, { light: !0 }),
                    /* @__PURE__ */ w(Qe, { direction: "row", justifyContent: "flex-start", children: /* @__PURE__ */ w(
                      Oa,
                      {
                        Icon: qu,
                        text: "Cerrar sesión",
                        onClick: f
                      }
                    ) })
                  ] })
                }
              )
            }
          );
        }
      }
    ),
    /* @__PURE__ */ w(H1, { position: "absolute", open: t, children: /* @__PURE__ */ pe(eo, { sx: { position: "relative" }, children: [
      /* @__PURE__ */ w(
        Xr,
        {
          edge: "start",
          color: "inherit",
          "aria-label": "Abrir menu",
          onClick: e,
          sx: { mr: 1 },
          children: /* @__PURE__ */ w(mm, {})
        }
      ),
      window.tenant_data.logo_horizontal ? /* @__PURE__ */ w(
        "img",
        {
          src: window.tenant_data.logo_horizontal,
          alt: "Logo",
          style: { maxWidth: 200, maxHeight: 52 }
        }
      ) : /* @__PURE__ */ w(xt, { children: window.tenant_data.name }),
      /* @__PURE__ */ pe(
        Qe,
        {
          display: { xs: "none", sm: "flex" },
          direction: "row",
          alignItems: "center",
          ml: "auto",
          ref: a,
          children: [
            /* @__PURE__ */ w(Xr, { sx: { mr: 1, color: "#fff" }, children: /* @__PURE__ */ w(Np, {}) }),
            /* @__PURE__ */ w(
              Yo,
              {
                name: n == null ? void 0 : n.name,
                size: 50,
                sx: { cursor: "pointer" },
                onClick: () => c(!l)
              }
            )
          ]
        }
      )
    ] }) })
  ] });
};
function iP() {
  const [e, t] = Et(!1), n = () => {
    t(!e);
  };
  return /* @__PURE__ */ pe(wa, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ w(Y1, { open: e, onToggleDrawer: n }),
    /* @__PURE__ */ w(Cp, { open: e, onToggleDrawer: n }),
    /* @__PURE__ */ pe(
      wa,
      {
        component: "main",
        sx: {
          backgroundColor: (r) => r.palette.mode === "light" ? r.palette.grey[100] : r.palette.grey[900],
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        },
        children: [
          /* @__PURE__ */ w(eo, {}),
          /* @__PURE__ */ w(
            im,
            {
              maxWidth: "lg",
              sx: {
                mt: 4,
                mb: 4,
                height: "calc(100vh - 64px)"
              },
              children: /* @__PURE__ */ w(Fp, { fallback: /* @__PURE__ */ w(Wn, {}), children: /* @__PURE__ */ w(Ms, {}) })
            }
          )
        ]
      }
    )
  ] });
}
const aP = () => {
  var r;
  const { user: e } = Sr(), n = ((r = en().state) == null ? void 0 : r.path) || "";
  return e ? /* @__PURE__ */ w(jd, { to: n }) : /* @__PURE__ */ w(Ms, {});
}, G1 = ({ children: e, fallback: t, has: n = {} }) => {
  const { user: r } = Sr();
  return vl(r, n) ? e : t;
};
G1.propTypes = {
  children: o.node.isRequired,
  fallback: o.node,
  has: o.object
};
const K1 = ({ has: e, element: t }) => {
  const { user: n } = Sr(), r = en();
  return n ? vl(n, e) ? t : "No tiene permiso" : /* @__PURE__ */ w(
    jd,
    {
      to: "/login",
      state: {
        path: r.pathname
      }
    }
  );
};
K1.propTypes = {
  element: o.node.isRequired,
  has: o.object
};
export {
  YC as AsyncAutocomplete,
  wp as AuthContext,
  f1 as AuthProvider,
  iP as AuthenticatedLayout,
  Yo as Avatar,
  Rx as BackendTableContent,
  vd as Box,
  fb as Checkbox,
  gd as ConfirmDialog,
  db as DateTime,
  cv as ErrorDialog,
  oP as GuestLayout,
  aP as GuestMiddleware,
  Wn as Loader,
  Ts as Modal,
  uv as Money,
  dv as PageHeader,
  G1 as Permission,
  p1 as PermissionTab,
  K1 as PrivateRoute,
  bd as Select,
  sv as Switch,
  av as TabPanel,
  Rg as TableContent,
  Cs as TableHeader,
  lv as TextField,
  Cg as genericDescendingComparator,
  vl as hasPermissions,
  $t as sortOrderEnum,
  Rd as theme,
  Sr as useAuth,
  rP as useTabs
};
