import * as E from "react";
import Pt, { useId as ic, useState as bt, useEffect as rn, Children as ac, isValidElement as $o, cloneElement as Io, useRef as Ir, Suspense as sc } from "react";
import { CircularProgress as is, Paper as qo, Modal as lc, Box as kr, IconButton as Cn, Typography as st, Divider as Ho, Stack as ze, Button as Mr, Avatar as cc, TableHead as uc, TableRow as eo, TableCell as to, TableSortLabel as dc, FormControl as uo, FormControlLabel as as, Switch as pc, TextField as fc, InputLabel as mc, Select as hc, MenuItem as bc, createTheme as gc, ThemeProvider as Kr, TableContainer as ss, Table as ls, TableBody as cs, TablePagination as us, Checkbox as vc, Tab as yc, Slide as xc, Link as Ec, ListItemButton as Tc, ListItemIcon as Oc, ListItemText as Cc, Drawer as ds, useMediaQuery as Rc, Toolbar as no, List as Sc, AppBar as Pc, Popper as wc, Grow as $c, ButtonBase as Ic, Container as kc } from "@mui/material";
import { Global as Mc, ThemeContext as Ac, keyframes as Gr } from "@emotion/react";
import { Close as Nc, Report as ps, HomeRounded as _c, PeopleRounded as Dc, SavingsRounded as jc, SettingsRounded as Fc, NotificationsRounded as Lc, Logout as fs, Menu as zc } from "@mui/icons-material";
import { useFormContext as po, Controller as fo } from "react-hook-form";
import { isValid as Bi, isDate as Bc, format as Wc, formatRelative as Vc } from "date-fns";
import { useQuery as ms } from "@tanstack/react-query";
import { useSearchParams as hs, Outlet as bs, Link as Ar, useLocation as Uc, useNavigate as qc } from "react-router-dom";
import Wi from "qs";
import Hc from "@emotion/styled";
import * as gs from "react-dom";
import Co from "react-dom";
import Yc from "axios";
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function vs(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var o = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    o.prototype = t.prototype;
  } else
    o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(o, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), o;
}
var Nr = { exports: {} }, _n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function Gc() {
  if (Vi)
    return _n;
  Vi = 1;
  var e = Pt, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, p = {}, m = null, y = null;
    u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (d in c)
      r.call(c, d) && !a.hasOwnProperty(d) && (p[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: t, type: l, key: m, ref: y, props: p, _owner: i.current };
  }
  return _n.Fragment = o, _n.jsx = s, _n.jsxs = s, _n;
}
var Dn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui;
function Xc() {
  return Ui || (Ui = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pt, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = Symbol.iterator, v = "@@iterator";
    function f(T) {
      if (T === null || typeof T != "object")
        return null;
      var B = O && T[O] || T[v];
      return typeof B == "function" ? B : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(T) {
      {
        for (var B = arguments.length, te = new Array(B > 1 ? B - 1 : 0), S = 1; S < B; S++)
          te[S - 1] = arguments[S];
        C("error", T, te);
      }
    }
    function C(T, B, te) {
      {
        var S = R.ReactDebugCurrentFrame, P = S.getStackAddendum();
        P !== "" && (B += "%s", te = te.concat([P]));
        var j = te.map(function(q) {
          return String(q);
        });
        j.unshift("Warning: " + B), Function.prototype.apply.call(console[T], console, j);
      }
    }
    var g = !1, h = !1, $ = !1, I = !1, A = !1, z;
    z = Symbol.for("react.module.reference");
    function N(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === a || A || T === i || T === u || T === d || I || T === y || g || h || $ || typeof T == "object" && T !== null && (T.$$typeof === m || T.$$typeof === p || T.$$typeof === s || T.$$typeof === l || T.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === z || T.getModuleId !== void 0));
    }
    function _(T, B, te) {
      var S = T.displayName;
      if (S)
        return S;
      var P = B.displayName || B.name || "";
      return P !== "" ? te + "(" + P + ")" : te;
    }
    function K(T) {
      return T.displayName || "Context";
    }
    function W(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case r:
          return "Fragment";
        case o:
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
      if (typeof T == "object")
        switch (T.$$typeof) {
          case l:
            var B = T;
            return K(B) + ".Consumer";
          case s:
            var te = T;
            return K(te._context) + ".Provider";
          case c:
            return _(T, T.render, "ForwardRef");
          case p:
            var S = T.displayName || null;
            return S !== null ? S : W(T.type) || "Memo";
          case m: {
            var P = T, j = P._payload, q = P._init;
            try {
              return W(q(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, L = 0, U, Y, se, ee, M, V, ne;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function H() {
      {
        if (L === 0) {
          U = console.log, Y = console.info, se = console.warn, ee = console.error, M = console.group, V = console.groupCollapsed, ne = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        L++;
      }
    }
    function J() {
      {
        if (L--, L === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, T, {
              value: U
            }),
            info: F({}, T, {
              value: Y
            }),
            warn: F({}, T, {
              value: se
            }),
            error: F({}, T, {
              value: ee
            }),
            group: F({}, T, {
              value: M
            }),
            groupCollapsed: F({}, T, {
              value: V
            }),
            groupEnd: F({}, T, {
              value: ne
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = R.ReactCurrentDispatcher, G;
    function oe(T, B, te) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (P) {
            var S = P.stack.trim().match(/\n( *(at )?)/);
            G = S && S[1] || "";
          }
        return `
` + G + T;
      }
    }
    var ie = !1, fe;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new ae();
    }
    function D(T, B) {
      if (!T || ie)
        return "";
      {
        var te = fe.get(T);
        if (te !== void 0)
          return te;
      }
      var S;
      ie = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Q.current, Q.current = null, H();
      try {
        if (B) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Dt) {
              S = Dt;
            }
            Reflect.construct(T, [], q);
          } else {
            try {
              q.call();
            } catch (Dt) {
              S = Dt;
            }
            T.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            S = Dt;
          }
          T();
        }
      } catch (Dt) {
        if (Dt && S && typeof Dt.stack == "string") {
          for (var re = Dt.stack.split(`
`), xe = S.stack.split(`
`), Ee = re.length - 1, Re = xe.length - 1; Ee >= 1 && Re >= 0 && re[Ee] !== xe[Re]; )
            Re--;
          for (; Ee >= 1 && Re >= 0; Ee--, Re--)
            if (re[Ee] !== xe[Re]) {
              if (Ee !== 1 || Re !== 1)
                do
                  if (Ee--, Re--, Re < 0 || re[Ee] !== xe[Re]) {
                    var rt = `
` + re[Ee].replace(" at new ", " at ");
                    return T.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", T.displayName)), typeof T == "function" && fe.set(T, rt), rt;
                  }
                while (Ee >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        ie = !1, Q.current = j, J(), Error.prepareStackTrace = P;
      }
      var fn = T ? T.displayName || T.name : "", zi = fn ? oe(fn) : "";
      return typeof T == "function" && fe.set(T, zi), zi;
    }
    function he(T, B, te) {
      return D(T, !1);
    }
    function k(T) {
      var B = T.prototype;
      return !!(B && B.isReactComponent);
    }
    function X(T, B, te) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return D(T, k(T));
      if (typeof T == "string")
        return oe(T);
      switch (T) {
        case u:
          return oe("Suspense");
        case d:
          return oe("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case c:
            return he(T.render);
          case p:
            return X(T.type, B, te);
          case m: {
            var S = T, P = S._payload, j = S._init;
            try {
              return X(j(P), B, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, ce = {}, Ue = R.ReactDebugCurrentFrame;
    function qe(T) {
      if (T) {
        var B = T._owner, te = X(T.type, T._source, B ? B.type : null);
        Ue.setExtraStackFrame(te);
      } else
        Ue.setExtraStackFrame(null);
    }
    function $e(T, B, te, S, P) {
      {
        var j = Function.call.bind(Te);
        for (var q in T)
          if (j(T, q)) {
            var re = void 0;
            try {
              if (typeof T[q] != "function") {
                var xe = Error((S || "React class") + ": " + te + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              re = T[q](B, q, S, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              re = Ee;
            }
            re && !(re instanceof Error) && (qe(P), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", te, q, typeof re), qe(null)), re instanceof Error && !(re.message in ce) && (ce[re.message] = !0, qe(P), w("Failed %s type: %s", te, re.message), qe(null));
          }
      }
    }
    var Ce = Array.isArray;
    function Fe(T) {
      return Ce(T);
    }
    function Se(T) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, te = B && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return te;
      }
    }
    function Ge(T) {
      try {
        return Xe(T), !1;
      } catch {
        return !0;
      }
    }
    function Xe(T) {
      return "" + T;
    }
    function et(T) {
      if (Ge(T))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(T)), Xe(T);
    }
    var Pe = R.ReactCurrentOwner, be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, nt, pe;
    pe = {};
    function ye(T) {
      if (Te.call(T, "ref")) {
        var B = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function we(T) {
      if (Te.call(T, "key")) {
        var B = Object.getOwnPropertyDescriptor(T, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Je(T, B) {
      if (typeof T.ref == "string" && Pe.current && B && Pe.current.stateNode !== B) {
        var te = W(Pe.current.type);
        pe[te] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Pe.current.type), T.ref), pe[te] = !0);
      }
    }
    function Wt(T, B) {
      {
        var te = function() {
          de || (de = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        te.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function It(T, B) {
      {
        var te = function() {
          nt || (nt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        te.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var Mn = function(T, B, te, S, P, j, q) {
      var re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: T,
        key: B,
        ref: te,
        props: q,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return re._store = {}, Object.defineProperty(re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(re.props), Object.freeze(re)), re;
    };
    function Rt(T, B, te, S, P) {
      {
        var j, q = {}, re = null, xe = null;
        te !== void 0 && (et(te), re = "" + te), we(B) && (et(B.key), re = "" + B.key), ye(B) && (xe = B.ref, Je(B, P));
        for (j in B)
          Te.call(B, j) && !be.hasOwnProperty(j) && (q[j] = B[j]);
        if (T && T.defaultProps) {
          var Ee = T.defaultProps;
          for (j in Ee)
            q[j] === void 0 && (q[j] = Ee[j]);
        }
        if (re || xe) {
          var Re = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          re && Wt(q, Re), xe && It(q, Re);
        }
        return Mn(T, re, xe, P, S, Pe.current, q);
      }
    }
    var lt = R.ReactCurrentOwner, pt = R.ReactDebugCurrentFrame;
    function at(T) {
      if (T) {
        var B = T._owner, te = X(T.type, T._source, B ? B.type : null);
        pt.setExtraStackFrame(te);
      } else
        pt.setExtraStackFrame(null);
    }
    var St;
    St = !1;
    function Jt(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function Vt() {
      {
        if (lt.current) {
          var T = W(lt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function cn(T) {
      {
        if (T !== void 0) {
          var B = T.fileName.replace(/^.*[\\\/]/, ""), te = T.lineNumber;
          return `

Check your code at ` + B + ":" + te + ".";
        }
        return "";
      }
    }
    var un = {};
    function An(T) {
      {
        var B = Vt();
        if (!B) {
          var te = typeof T == "string" ? T : T.displayName || T.name;
          te && (B = `

Check the top-level render call using <` + te + ">.");
        }
        return B;
      }
    }
    function dn(T, B) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var te = An(B);
        if (un[te])
          return;
        un[te] = !0;
        var S = "";
        T && T._owner && T._owner !== lt.current && (S = " It was passed a child from " + W(T._owner.type) + "."), at(T), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, S), at(null);
      }
    }
    function Ut(T, B) {
      {
        if (typeof T != "object")
          return;
        if (Fe(T))
          for (var te = 0; te < T.length; te++) {
            var S = T[te];
            Jt(S) && dn(S, B);
          }
        else if (Jt(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var P = f(T);
          if (typeof P == "function" && P !== T.entries)
            for (var j = P.call(T), q; !(q = j.next()).done; )
              Jt(q.value) && dn(q.value, B);
        }
      }
    }
    function ot(T) {
      {
        var B = T.type;
        if (B == null || typeof B == "string")
          return;
        var te;
        if (typeof B == "function")
          te = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === p))
          te = B.propTypes;
        else
          return;
        if (te) {
          var S = W(B);
          $e(te, T.props, "prop", S, T);
        } else if (B.PropTypes !== void 0 && !St) {
          St = !0;
          var P = W(B);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ze(T) {
      {
        for (var B = Object.keys(T.props), te = 0; te < B.length; te++) {
          var S = B[te];
          if (S !== "children" && S !== "key") {
            at(T), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), at(null);
            break;
          }
        }
        T.ref !== null && (at(T), w("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    function ct(T, B, te, S, P, j) {
      {
        var q = N(T);
        if (!q) {
          var re = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = cn(P);
          xe ? re += xe : re += Vt();
          var Ee;
          T === null ? Ee = "null" : Fe(T) ? Ee = "array" : T !== void 0 && T.$$typeof === t ? (Ee = "<" + (W(T.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof T, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, re);
        }
        var Re = Rt(T, B, te, P, j);
        if (Re == null)
          return Re;
        if (q) {
          var rt = B.children;
          if (rt !== void 0)
            if (S)
              if (Fe(rt)) {
                for (var fn = 0; fn < rt.length; fn++)
                  Ut(rt[fn], T);
                Object.freeze && Object.freeze(rt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(rt, T);
        }
        return T === r ? Ze(Re) : ot(Re), Re;
      }
    }
    function To(T, B, te) {
      return ct(T, B, te, !0);
    }
    function pn(T, B, te) {
      return ct(T, B, te, !1);
    }
    var Oo = pn, Nn = To;
    Dn.Fragment = r, Dn.jsx = Oo, Dn.jsxs = Nn;
  }()), Dn;
}
process.env.NODE_ENV === "production" ? Nr.exports = Gc() : Nr.exports = Xc();
var Xr = Nr.exports;
const Jr = Xr.Fragment, b = Xr.jsx, ue = Xr.jsxs, Jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment: Jr,
  jsx: b,
  jsxs: ue
}, Symbol.toStringTag, { value: "Module" }));
var _r = { exports: {} }, Ro = { exports: {} }, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qi;
function Qc() {
  if (qi)
    return ke;
  qi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var $ = h.$$typeof;
      switch ($) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case r:
            case a:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case d:
                case O:
                case y:
                case s:
                  return h;
                default:
                  return $;
              }
          }
        case o:
          return $;
      }
    }
  }
  function g(h) {
    return C(h) === u;
  }
  return ke.AsyncMode = c, ke.ConcurrentMode = u, ke.ContextConsumer = l, ke.ContextProvider = s, ke.Element = t, ke.ForwardRef = d, ke.Fragment = r, ke.Lazy = O, ke.Memo = y, ke.Portal = o, ke.Profiler = a, ke.StrictMode = i, ke.Suspense = p, ke.isAsyncMode = function(h) {
    return g(h) || C(h) === c;
  }, ke.isConcurrentMode = g, ke.isContextConsumer = function(h) {
    return C(h) === l;
  }, ke.isContextProvider = function(h) {
    return C(h) === s;
  }, ke.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ke.isForwardRef = function(h) {
    return C(h) === d;
  }, ke.isFragment = function(h) {
    return C(h) === r;
  }, ke.isLazy = function(h) {
    return C(h) === O;
  }, ke.isMemo = function(h) {
    return C(h) === y;
  }, ke.isPortal = function(h) {
    return C(h) === o;
  }, ke.isProfiler = function(h) {
    return C(h) === a;
  }, ke.isStrictMode = function(h) {
    return C(h) === i;
  }, ke.isSuspense = function(h) {
    return C(h) === p;
  }, ke.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === a || h === i || h === p || h === m || typeof h == "object" && h !== null && (h.$$typeof === O || h.$$typeof === y || h.$$typeof === s || h.$$typeof === l || h.$$typeof === d || h.$$typeof === f || h.$$typeof === R || h.$$typeof === w || h.$$typeof === v);
  }, ke.typeOf = C, ke;
}
var Me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function Zc() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === u || D === a || D === i || D === p || D === m || typeof D == "object" && D !== null && (D.$$typeof === O || D.$$typeof === y || D.$$typeof === s || D.$$typeof === l || D.$$typeof === d || D.$$typeof === f || D.$$typeof === R || D.$$typeof === w || D.$$typeof === v);
    }
    function g(D) {
      if (typeof D == "object" && D !== null) {
        var he = D.$$typeof;
        switch (he) {
          case t:
            var k = D.type;
            switch (k) {
              case c:
              case u:
              case r:
              case a:
              case i:
              case p:
                return k;
              default:
                var X = k && k.$$typeof;
                switch (X) {
                  case l:
                  case d:
                  case O:
                  case y:
                  case s:
                    return X;
                  default:
                    return he;
                }
            }
          case o:
            return he;
        }
      }
    }
    var h = c, $ = u, I = l, A = s, z = t, N = d, _ = r, K = O, W = y, F = o, L = a, U = i, Y = p, se = !1;
    function ee(D) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(D) || g(D) === c;
    }
    function M(D) {
      return g(D) === u;
    }
    function V(D) {
      return g(D) === l;
    }
    function ne(D) {
      return g(D) === s;
    }
    function Z(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function H(D) {
      return g(D) === d;
    }
    function J(D) {
      return g(D) === r;
    }
    function Q(D) {
      return g(D) === O;
    }
    function G(D) {
      return g(D) === y;
    }
    function oe(D) {
      return g(D) === o;
    }
    function ie(D) {
      return g(D) === a;
    }
    function fe(D) {
      return g(D) === i;
    }
    function ae(D) {
      return g(D) === p;
    }
    Me.AsyncMode = h, Me.ConcurrentMode = $, Me.ContextConsumer = I, Me.ContextProvider = A, Me.Element = z, Me.ForwardRef = N, Me.Fragment = _, Me.Lazy = K, Me.Memo = W, Me.Portal = F, Me.Profiler = L, Me.StrictMode = U, Me.Suspense = Y, Me.isAsyncMode = ee, Me.isConcurrentMode = M, Me.isContextConsumer = V, Me.isContextProvider = ne, Me.isElement = Z, Me.isForwardRef = H, Me.isFragment = J, Me.isLazy = Q, Me.isMemo = G, Me.isPortal = oe, Me.isProfiler = ie, Me.isStrictMode = fe, Me.isSuspense = ae, Me.isValidElementType = C, Me.typeOf = g;
  }()), Me;
}
var Yi;
function ys() {
  return Yi || (Yi = 1, process.env.NODE_ENV === "production" ? Ro.exports = Qc() : Ro.exports = Zc()), Ro.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var hr, Ki;
function eu() {
  if (Ki)
    return hr;
  Ki = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
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
  return hr = i() ? Object.assign : function(a, s) {
    for (var l, c = r(a), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var m = 0; m < u.length; m++)
          o.call(l, u[m]) && (c[u[m]] = l[u[m]]);
      }
    }
    return c;
  }, hr;
}
var br, Gi;
function Qr() {
  if (Gi)
    return br;
  Gi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return br = e, br;
}
var gr, Xi;
function xs() {
  return Xi || (Xi = 1, gr = Function.call.bind(Object.prototype.hasOwnProperty)), gr;
}
var vr, Ji;
function tu() {
  if (Ji)
    return vr;
  Ji = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qr(), o = {}, r = xs();
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
          var p;
          try {
            if (typeof a[d] != "function") {
              var m = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = a[d](s, d, c, l, null, t);
          } catch (O) {
            p = O;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in o)) {
            o[p.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (y ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, vr = i, vr;
}
var yr, Qi;
function nu() {
  if (Qi)
    return yr;
  Qi = 1;
  var e = ys(), t = eu(), o = Qr(), r = xs(), i = tu(), a = function() {
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
  return yr = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(M) {
      var V = M && (u && M[u] || M[d]);
      if (typeof V == "function")
        return V;
    }
    var m = "<<anonymous>>", y = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: w(),
      arrayOf: C,
      element: g(),
      elementType: h(),
      instanceOf: $,
      node: N(),
      objectOf: A,
      oneOf: I,
      oneOfType: z,
      shape: K,
      exact: W
    };
    function O(M, V) {
      return M === V ? M !== 0 || 1 / M === 1 / V : M !== M && V !== V;
    }
    function v(M, V) {
      this.message = M, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function f(M) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, ne = 0;
      function Z(J, Q, G, oe, ie, fe, ae) {
        if (oe = oe || m, fe = fe || G, ae !== o) {
          if (c) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = oe + ":" + G;
            !V[he] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + fe + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[he] = !0, ne++);
          }
        }
        return Q[G] == null ? J ? Q[G] === null ? new v("The " + ie + " `" + fe + "` is marked as required " + ("in `" + oe + "`, but its value is `null`.")) : new v("The " + ie + " `" + fe + "` is marked as required in " + ("`" + oe + "`, but its value is `undefined`.")) : null : M(Q, G, oe, ie, fe);
      }
      var H = Z.bind(null, !1);
      return H.isRequired = Z.bind(null, !0), H;
    }
    function R(M) {
      function V(ne, Z, H, J, Q, G) {
        var oe = ne[Z], ie = U(oe);
        if (ie !== M) {
          var fe = Y(oe);
          return new v(
            "Invalid " + J + " `" + Q + "` of type " + ("`" + fe + "` supplied to `" + H + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return f(V);
    }
    function w() {
      return f(s);
    }
    function C(M) {
      function V(ne, Z, H, J, Q) {
        if (typeof M != "function")
          return new v("Property `" + Q + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var G = ne[Z];
        if (!Array.isArray(G)) {
          var oe = U(G);
          return new v("Invalid " + J + " `" + Q + "` of type " + ("`" + oe + "` supplied to `" + H + "`, expected an array."));
        }
        for (var ie = 0; ie < G.length; ie++) {
          var fe = M(G, ie, H, J, Q + "[" + ie + "]", o);
          if (fe instanceof Error)
            return fe;
        }
        return null;
      }
      return f(V);
    }
    function g() {
      function M(V, ne, Z, H, J) {
        var Q = V[ne];
        if (!l(Q)) {
          var G = U(Q);
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(M);
    }
    function h() {
      function M(V, ne, Z, H, J) {
        var Q = V[ne];
        if (!e.isValidElementType(Q)) {
          var G = U(Q);
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(M);
    }
    function $(M) {
      function V(ne, Z, H, J, Q) {
        if (!(ne[Z] instanceof M)) {
          var G = M.name || m, oe = ee(ne[Z]);
          return new v("Invalid " + J + " `" + Q + "` of type " + ("`" + oe + "` supplied to `" + H + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return f(V);
    }
    function I(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function V(ne, Z, H, J, Q) {
        for (var G = ne[Z], oe = 0; oe < M.length; oe++)
          if (O(G, M[oe]))
            return null;
        var ie = JSON.stringify(M, function(ae, D) {
          var he = Y(D);
          return he === "symbol" ? String(D) : D;
        });
        return new v("Invalid " + J + " `" + Q + "` of value `" + String(G) + "` " + ("supplied to `" + H + "`, expected one of " + ie + "."));
      }
      return f(V);
    }
    function A(M) {
      function V(ne, Z, H, J, Q) {
        if (typeof M != "function")
          return new v("Property `" + Q + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var G = ne[Z], oe = U(G);
        if (oe !== "object")
          return new v("Invalid " + J + " `" + Q + "` of type " + ("`" + oe + "` supplied to `" + H + "`, expected an object."));
        for (var ie in G)
          if (r(G, ie)) {
            var fe = M(G, ie, H, J, Q + "." + ie, o);
            if (fe instanceof Error)
              return fe;
          }
        return null;
      }
      return f(V);
    }
    function z(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var V = 0; V < M.length; V++) {
        var ne = M[V];
        if (typeof ne != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(ne) + " at index " + V + "."
          ), s;
      }
      function Z(H, J, Q, G, oe) {
        for (var ie = [], fe = 0; fe < M.length; fe++) {
          var ae = M[fe], D = ae(H, J, Q, G, oe, o);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && ie.push(D.data.expectedType);
        }
        var he = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new v("Invalid " + G + " `" + oe + "` supplied to " + ("`" + Q + "`" + he + "."));
      }
      return f(Z);
    }
    function N() {
      function M(V, ne, Z, H, J) {
        return F(V[ne]) ? null : new v("Invalid " + H + " `" + J + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return f(M);
    }
    function _(M, V, ne, Z, H) {
      return new v(
        (M || "React class") + ": " + V + " type `" + ne + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function K(M) {
      function V(ne, Z, H, J, Q) {
        var G = ne[Z], oe = U(G);
        if (oe !== "object")
          return new v("Invalid " + J + " `" + Q + "` of type `" + oe + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var ie in M) {
          var fe = M[ie];
          if (typeof fe != "function")
            return _(H, J, Q, ie, Y(fe));
          var ae = fe(G, ie, H, J, Q + "." + ie, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return f(V);
    }
    function W(M) {
      function V(ne, Z, H, J, Q) {
        var G = ne[Z], oe = U(G);
        if (oe !== "object")
          return new v("Invalid " + J + " `" + Q + "` of type `" + oe + "` " + ("supplied to `" + H + "`, expected `object`."));
        var ie = t({}, ne[Z], M);
        for (var fe in ie) {
          var ae = M[fe];
          if (r(M, fe) && typeof ae != "function")
            return _(H, J, Q, fe, Y(ae));
          if (!ae)
            return new v(
              "Invalid " + J + " `" + Q + "` key `" + fe + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(ne[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var D = ae(G, fe, H, J, Q + "." + fe, o);
          if (D)
            return D;
        }
        return null;
      }
      return f(V);
    }
    function F(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(F);
          if (M === null || l(M))
            return !0;
          var V = p(M);
          if (V) {
            var ne = V.call(M), Z;
            if (V !== M.entries) {
              for (; !(Z = ne.next()).done; )
                if (!F(Z.value))
                  return !1;
            } else
              for (; !(Z = ne.next()).done; ) {
                var H = Z.value;
                if (H && !F(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function L(M, V) {
      return M === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function U(M) {
      var V = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : L(V, M) ? "symbol" : V;
    }
    function Y(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var V = U(M);
      if (V === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function se(M) {
      var V = Y(M);
      switch (V) {
        case "array":
        case "object":
          return "an " + V;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + V;
        default:
          return V;
      }
    }
    function ee(M) {
      return !M.constructor || !M.constructor.name ? m : M.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, yr;
}
var xr, Zi;
function ou() {
  if (Zi)
    return xr;
  Zi = 1;
  var e = Qr();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, xr = function() {
    function r(s, l, c, u, d, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
      checkPropTypes: o,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, xr;
}
if (process.env.NODE_ENV !== "production") {
  var ru = ys(), iu = !0;
  _r.exports = nu()(ru.isElement, iu);
} else
  _r.exports = ou()();
var au = _r.exports;
const n = /* @__PURE__ */ Kc(au), $n = () => /* @__PURE__ */ b(
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
    children: /* @__PURE__ */ b(is, {})
  }
);
function jt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, x.apply(this, arguments);
}
function en(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Es(e) {
  if (!en(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Es(e[o]);
  }), t;
}
function xt(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? x({}, e) : e;
  return en(e) && en(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (en(t[i]) && i in e && en(e[i]) ? r[i] = xt(e[i], t[i], o) : o.clone ? r[i] = en(t[i]) ? Es(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
function su(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ts(e, t, o, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !su(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Os = jt(n.element, Ts);
Os.isRequired = jt(n.element.isRequired, Ts);
const mo = Os;
function lu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function cu(e, t, o, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !lu(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Zr = jt(n.elementType, cu), uu = "exact-prop: ​";
function Cs(e) {
  return process.env.NODE_ENV === "production" ? e : x({}, e, {
    [uu]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Ht(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Dr = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea;
function du() {
  if (ea)
    return Ae;
  ea = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function v(f) {
    if (typeof f == "object" && f !== null) {
      var R = f.$$typeof;
      switch (R) {
        case e:
          switch (f = f.type, f) {
            case o:
            case i:
            case r:
            case u:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case s:
                case c:
                case m:
                case p:
                case a:
                  return f;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return Ae.ContextConsumer = s, Ae.ContextProvider = a, Ae.Element = e, Ae.ForwardRef = c, Ae.Fragment = o, Ae.Lazy = m, Ae.Memo = p, Ae.Portal = t, Ae.Profiler = i, Ae.StrictMode = r, Ae.Suspense = u, Ae.SuspenseList = d, Ae.isAsyncMode = function() {
    return !1;
  }, Ae.isConcurrentMode = function() {
    return !1;
  }, Ae.isContextConsumer = function(f) {
    return v(f) === s;
  }, Ae.isContextProvider = function(f) {
    return v(f) === a;
  }, Ae.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Ae.isForwardRef = function(f) {
    return v(f) === c;
  }, Ae.isFragment = function(f) {
    return v(f) === o;
  }, Ae.isLazy = function(f) {
    return v(f) === m;
  }, Ae.isMemo = function(f) {
    return v(f) === p;
  }, Ae.isPortal = function(f) {
    return v(f) === t;
  }, Ae.isProfiler = function(f) {
    return v(f) === i;
  }, Ae.isStrictMode = function(f) {
    return v(f) === r;
  }, Ae.isSuspense = function(f) {
    return v(f) === u;
  }, Ae.isSuspenseList = function(f) {
    return v(f) === d;
  }, Ae.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === i || f === r || f === u || f === d || f === y || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === O || f.getModuleId !== void 0);
  }, Ae.typeOf = v, Ae;
}
var Ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function pu() {
  return ta || (ta = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = !1, v = !1, f = !1, R = !1, w = !1, C;
    C = Symbol.for("react.module.reference");
    function g(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === o || k === i || w || k === r || k === u || k === d || R || k === y || O || v || f || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === p || k.$$typeof === a || k.$$typeof === s || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === C || k.getModuleId !== void 0));
    }
    function h(k) {
      if (typeof k == "object" && k !== null) {
        var X = k.$$typeof;
        switch (X) {
          case e:
            var Te = k.type;
            switch (Te) {
              case o:
              case i:
              case r:
              case u:
              case d:
                return Te;
              default:
                var ce = Te && Te.$$typeof;
                switch (ce) {
                  case l:
                  case s:
                  case c:
                  case m:
                  case p:
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
    var $ = s, I = a, A = e, z = c, N = o, _ = m, K = p, W = t, F = i, L = r, U = u, Y = d, se = !1, ee = !1;
    function M(k) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(k) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(k) {
      return h(k) === s;
    }
    function Z(k) {
      return h(k) === a;
    }
    function H(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function J(k) {
      return h(k) === c;
    }
    function Q(k) {
      return h(k) === o;
    }
    function G(k) {
      return h(k) === m;
    }
    function oe(k) {
      return h(k) === p;
    }
    function ie(k) {
      return h(k) === t;
    }
    function fe(k) {
      return h(k) === i;
    }
    function ae(k) {
      return h(k) === r;
    }
    function D(k) {
      return h(k) === u;
    }
    function he(k) {
      return h(k) === d;
    }
    Ne.ContextConsumer = $, Ne.ContextProvider = I, Ne.Element = A, Ne.ForwardRef = z, Ne.Fragment = N, Ne.Lazy = _, Ne.Memo = K, Ne.Portal = W, Ne.Profiler = F, Ne.StrictMode = L, Ne.Suspense = U, Ne.SuspenseList = Y, Ne.isAsyncMode = M, Ne.isConcurrentMode = V, Ne.isContextConsumer = ne, Ne.isContextProvider = Z, Ne.isElement = H, Ne.isForwardRef = J, Ne.isFragment = Q, Ne.isLazy = G, Ne.isMemo = oe, Ne.isPortal = ie, Ne.isProfiler = fe, Ne.isStrictMode = ae, Ne.isSuspense = D, Ne.isSuspenseList = he, Ne.isValidElementType = g, Ne.typeOf = h;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? Dr.exports = du() : Dr.exports = pu();
var na = Dr.exports;
const fu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function mu(e) {
  const t = `${e}`.match(fu);
  return t && t[1] || "";
}
function Rs(e, t = "") {
  return e.displayName || e.name || mu(e) || t;
}
function oa(e, t, o) {
  const r = Rs(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function hu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Rs(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case na.ForwardRef:
          return oa(e, e.render, "ForwardRef");
        case na.Memo:
          return oa(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Nt(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const bu = n.oneOfType([n.func, n.object]), $t = bu;
function le(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ht(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function jr(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
function ei(e, t = 166) {
  let o;
  function r(...i) {
    const a = () => {
      e.apply(this, i);
    };
    clearTimeout(o), o = setTimeout(a, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function gu(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (o, r, i, a, s) => {
    const l = i || "<<anonymous>>", c = s || r;
    return typeof o[r] < "u" ? new Error(`The ${a} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function ko(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function it(e) {
  return e && e.ownerDocument || document;
}
function Yt(e) {
  return it(e).defaultView || window;
}
function Ss(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const o = t ? x({}, t.propTypes) : null;
  return (i) => (a, s, l, c, u, ...d) => {
    const p = u || s, m = o == null ? void 0 : o[p];
    if (m) {
      const y = m(a, s, l, c, u, ...d);
      if (y)
        return y;
    }
    return typeof a[s] < "u" && !a[i] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function oo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const vu = typeof window < "u" ? E.useLayoutEffect : E.useEffect, Ft = vu;
let ra = 0;
function yu(e) {
  const [t, o] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (ra += 1, o(`mui-${ra}`));
  }, [t]), r;
}
const ia = E["useId".toString()];
function ti(e) {
  if (ia !== void 0) {
    const t = ia();
    return e ?? t;
  }
  return yu(e);
}
function Ps(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function En({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: i
  } = E.useRef(e !== void 0), [a, s] = E.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    E.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${o} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: u
    } = E.useRef(t);
    E.useEffect(() => {
      !i && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = E.useCallback((u) => {
    i || s(u);
  }, []);
  return [l, c];
}
function wt(e) {
  const t = E.useRef(e);
  return Ft(() => {
    t.current = e;
  }), E.useCallback((...o) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...o)
  ), []);
}
function tt(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      oo(o, t);
    });
  }, e);
}
let Yo = !0, Fr = !1, aa;
const xu = {
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
function Eu(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && xu[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Tu(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Yo = !0);
}
function Er() {
  Yo = !1;
}
function Ou() {
  this.visibilityState === "hidden" && Fr && (Yo = !0);
}
function Cu(e) {
  e.addEventListener("keydown", Tu, !0), e.addEventListener("mousedown", Er, !0), e.addEventListener("pointerdown", Er, !0), e.addEventListener("touchstart", Er, !0), e.addEventListener("visibilitychange", Ou, !0);
}
function Ru(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Yo || Eu(t);
}
function ws() {
  const e = E.useCallback((i) => {
    i != null && Cu(i.ownerDocument);
  }, []), t = E.useRef(!1);
  function o() {
    return t.current ? (Fr = !0, window.clearTimeout(aa), aa = window.setTimeout(() => {
      Fr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(i) {
    return Ru(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function $s(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Su = (e) => {
  const t = E.useRef({});
  return E.useEffect(() => {
    t.current = e;
  }), t.current;
}, Pu = Su;
function wu(e) {
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
function $u(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Iu = Number.isInteger || $u;
function Is(e, t, o, r) {
  const i = e[t];
  if (i == null || !Iu(i)) {
    const a = wu(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function ks(e, t, ...o) {
  return e[t] === void 0 ? null : Is(e, t, ...o);
}
function Lr() {
  return null;
}
ks.isRequired = Is;
Lr.isRequired = Lr;
const ni = process.env.NODE_ENV === "production" ? Lr : ks;
function oi(e, t) {
  const o = x({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = x({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, a = t[r];
      o[r] = {}, !a || !Object.keys(a) ? o[r] = i : !i || !Object.keys(i) ? o[r] = a : (o[r] = x({}, a), Object.keys(i).forEach((s) => {
        o[r][s] = oi(i[s], a[s]);
      }));
    } else
      o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function We(e, t, o = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((a, s) => {
        if (s) {
          const l = t(s);
          l !== "" && a.push(l), o && o[s] && a.push(o[s]);
        }
        return a;
      }, []).join(" ");
    }
  ), r;
}
const sa = (e) => e, ku = () => {
  let e = sa;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = sa;
    }
  };
}, Mu = ku(), Ms = Mu, Au = {
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
function Le(e, t, o = "Mui") {
  const r = Au[t];
  return r ? `${o}-${r}` : `${Ms.generate(e)}-${t}`;
}
function Be(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Le(e, i, o);
  }), r;
}
const Ko = "$$material";
function ge(e, t) {
  if (e == null)
    return {};
  var o = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (o[i] = e[i]);
  return o;
}
function Nu(e) {
  return e == null || Object.keys(e).length === 0;
}
function As(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e;
  return /* @__PURE__ */ b(Mc, {
    styles: typeof t == "function" ? (i) => t(Nu(i) ? o : i) : t
  });
}
process.env.NODE_ENV !== "production" && (As.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function _u(e, t) {
  const o = Hc(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const Du = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ju = ["values", "unit", "step"], Fu = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => x({}, o, {
    [r.key]: r.val
  }), {});
};
function Lu(e) {
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
    unit: o = "px",
    step: r = 5
  } = e, i = ge(e, ju), a = Fu(t), s = Object.keys(a);
  function l(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${o})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${o})`;
  }
  function u(m, y) {
    const O = s.indexOf(y);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${o}) and (max-width:${(O !== -1 && typeof t[s[O]] == "number" ? t[s[O]] : y) - r / 100}${o})`;
  }
  function d(m) {
    return s.indexOf(m) + 1 < s.length ? u(m, s[s.indexOf(m) + 1]) : l(m);
  }
  function p(m) {
    const y = s.indexOf(m);
    return y === 0 ? l(s[1]) : y === s.length - 1 ? c(s[y]) : u(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return x({
    keys: s,
    values: a,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: o
  }, i);
}
const zu = {
  borderRadius: 4
}, Bu = zu, Wu = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {}, Kt = Wu;
function Yn(e, t) {
  return t ? xt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ri = {
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
}, la = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ri[e]}px)`
};
function Tt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || la;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = o(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || la;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(a.values || ri).indexOf(l) !== -1) {
        const c = a.up(l);
        s[c] = o(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return o(t);
}
function Vu(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function Uu(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function qu(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, a) => {
    a < e.length && (o[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (o[i] = !0);
  }), o;
}
function Go({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || qu(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let a;
  return i.reduce((s, l, c) => (Array.isArray(e) ? (s[l] = e[c] != null ? e[c] : e[a], a = c) : typeof e == "object" ? (s[l] = e[l] != null ? e[l] : e[a], a = l) : s[l] = e, s), {});
}
function Xo(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function _o(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Xo(e, o) || r, t && (i = t(i, r, e)), i;
}
function je(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = Xo(c, r) || {};
    return Tt(s, l, (p) => {
      let m = _o(u, i, p);
      return p === m && typeof p == "string" && (m = _o(u, i, `${t}${p === "default" ? "" : le(p)}`, p)), o === !1 ? m : {
        [o]: m
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Kt
  } : {}, a.filterProps = [t], a;
}
function Hu(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Yu = {
  m: "margin",
  p: "padding"
}, Ku = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ca = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Gu = Hu((e) => {
  if (e.length > 2)
    if (ca[e])
      e = ca[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Yu[t], i = Ku[o] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Jo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Qo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Xu = [...Jo, ...Qo];
function ho(e, t, o, r) {
  var i;
  const a = (i = Xo(e, t, !1)) != null ? i : o;
  return typeof a == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), a * s) : Array.isArray(a) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > a.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${s} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), a[s]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ns(e) {
  return ho(e, "spacing", 8, "spacing");
}
function bo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ju(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = bo(t, o), r), {});
}
function Qu(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const i = Gu(o), a = Ju(i, r), s = e[o];
  return Tt(e, s, a);
}
function _s(e, t) {
  const o = Ns(e.theme);
  return Object.keys(e).map((r) => Qu(e, t, r, o)).reduce(Yn, {});
}
function Ye(e) {
  return _s(e, Jo);
}
Ye.propTypes = process.env.NODE_ENV !== "production" ? Jo.reduce((e, t) => (e[t] = Kt, e), {}) : {};
Ye.filterProps = Jo;
function Ke(e) {
  return _s(e, Qo);
}
Ke.propTypes = process.env.NODE_ENV !== "production" ? Qo.reduce((e, t) => (e[t] = Kt, e), {}) : {};
Ke.filterProps = Qo;
process.env.NODE_ENV !== "production" && Xu.reduce((e, t) => (e[t] = Kt, e), {});
function Zu(e = 8) {
  if (e.mui)
    return e;
  const t = Ns({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return o.mui = !0, o;
}
function Zo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, a) => t[a] ? Yn(i, t[a](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function Mt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const ed = je({
  prop: "border",
  themeKey: "borders",
  transform: Mt
}), td = je({
  prop: "borderTop",
  themeKey: "borders",
  transform: Mt
}), nd = je({
  prop: "borderRight",
  themeKey: "borders",
  transform: Mt
}), od = je({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Mt
}), rd = je({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Mt
}), id = je({
  prop: "borderColor",
  themeKey: "palette"
}), ad = je({
  prop: "borderTopColor",
  themeKey: "palette"
}), sd = je({
  prop: "borderRightColor",
  themeKey: "palette"
}), ld = je({
  prop: "borderBottomColor",
  themeKey: "palette"
}), cd = je({
  prop: "borderLeftColor",
  themeKey: "palette"
}), er = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ho(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: bo(t, r)
    });
    return Tt(e, e.borderRadius, o);
  }
  return null;
};
er.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Kt
} : {};
er.filterProps = ["borderRadius"];
Zo(ed, td, nd, od, rd, id, ad, sd, ld, cd, er);
const tr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ho(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: bo(t, r)
    });
    return Tt(e, e.gap, o);
  }
  return null;
};
tr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Kt
} : {};
tr.filterProps = ["gap"];
const nr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ho(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: bo(t, r)
    });
    return Tt(e, e.columnGap, o);
  }
  return null;
};
nr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Kt
} : {};
nr.filterProps = ["columnGap"];
const or = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ho(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: bo(t, r)
    });
    return Tt(e, e.rowGap, o);
  }
  return null;
};
or.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Kt
} : {};
or.filterProps = ["rowGap"];
const ud = je({
  prop: "gridColumn"
}), dd = je({
  prop: "gridRow"
}), pd = je({
  prop: "gridAutoFlow"
}), fd = je({
  prop: "gridAutoColumns"
}), md = je({
  prop: "gridAutoRows"
}), hd = je({
  prop: "gridTemplateColumns"
}), bd = je({
  prop: "gridTemplateRows"
}), gd = je({
  prop: "gridTemplateAreas"
}), vd = je({
  prop: "gridArea"
});
Zo(tr, nr, or, ud, dd, pd, fd, md, hd, bd, gd, vd);
function Tn(e, t) {
  return t === "grey" ? t : e;
}
const yd = je({
  prop: "color",
  themeKey: "palette",
  transform: Tn
}), xd = je({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Tn
}), Ed = je({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Tn
});
Zo(yd, xd, Ed);
function ht(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Td = je({
  prop: "width",
  transform: ht
}), ii = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r;
      return {
        maxWidth: ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || ri[o] || ht(o)
      };
    };
    return Tt(e, e.maxWidth, t);
  }
  return null;
};
ii.filterProps = ["maxWidth"];
const Od = je({
  prop: "minWidth",
  transform: ht
}), Cd = je({
  prop: "height",
  transform: ht
}), Rd = je({
  prop: "maxHeight",
  transform: ht
}), Sd = je({
  prop: "minHeight",
  transform: ht
});
je({
  prop: "size",
  cssProperty: "width",
  transform: ht
});
je({
  prop: "size",
  cssProperty: "height",
  transform: ht
});
const Pd = je({
  prop: "boxSizing"
});
Zo(Td, ii, Od, Cd, Rd, Sd, Pd);
const wd = {
  // borders
  border: {
    themeKey: "borders",
    transform: Mt
  },
  borderTop: {
    themeKey: "borders",
    transform: Mt
  },
  borderRight: {
    themeKey: "borders",
    transform: Mt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Mt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Mt
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
    style: er
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Tn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Tn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Tn
  },
  // spacing
  p: {
    style: Ke
  },
  pt: {
    style: Ke
  },
  pr: {
    style: Ke
  },
  pb: {
    style: Ke
  },
  pl: {
    style: Ke
  },
  px: {
    style: Ke
  },
  py: {
    style: Ke
  },
  padding: {
    style: Ke
  },
  paddingTop: {
    style: Ke
  },
  paddingRight: {
    style: Ke
  },
  paddingBottom: {
    style: Ke
  },
  paddingLeft: {
    style: Ke
  },
  paddingX: {
    style: Ke
  },
  paddingY: {
    style: Ke
  },
  paddingInline: {
    style: Ke
  },
  paddingInlineStart: {
    style: Ke
  },
  paddingInlineEnd: {
    style: Ke
  },
  paddingBlock: {
    style: Ke
  },
  paddingBlockStart: {
    style: Ke
  },
  paddingBlockEnd: {
    style: Ke
  },
  m: {
    style: Ye
  },
  mt: {
    style: Ye
  },
  mr: {
    style: Ye
  },
  mb: {
    style: Ye
  },
  ml: {
    style: Ye
  },
  mx: {
    style: Ye
  },
  my: {
    style: Ye
  },
  margin: {
    style: Ye
  },
  marginTop: {
    style: Ye
  },
  marginRight: {
    style: Ye
  },
  marginBottom: {
    style: Ye
  },
  marginLeft: {
    style: Ye
  },
  marginX: {
    style: Ye
  },
  marginY: {
    style: Ye
  },
  marginInline: {
    style: Ye
  },
  marginInlineStart: {
    style: Ye
  },
  marginInlineEnd: {
    style: Ye
  },
  marginBlock: {
    style: Ye
  },
  marginBlockStart: {
    style: Ye
  },
  marginBlockEnd: {
    style: Ye
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
    style: tr
  },
  rowGap: {
    style: or
  },
  columnGap: {
    style: nr
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
    transform: ht
  },
  maxWidth: {
    style: ii
  },
  minWidth: {
    transform: ht
  },
  height: {
    transform: ht
  },
  maxHeight: {
    transform: ht
  },
  minHeight: {
    transform: ht
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
}, rr = wd;
function $d(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Id(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kd() {
  function e(o, r, i, a) {
    const s = {
      [o]: r,
      theme: i
    }, l = a[o];
    if (!l)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: u,
      transform: d,
      style: p
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const m = Xo(i, u) || {};
    return p ? p(s) : Tt(s, r, (O) => {
      let v = _o(m, d, O);
      return O === v && typeof O == "string" && (v = _o(m, d, `${o}${O === "default" ? "" : le(O)}`, O)), c === !1 ? v : {
        [c]: v
      };
    });
  }
  function t(o) {
    var r;
    const {
      sx: i,
      theme: a = {}
    } = o || {};
    if (!i)
      return null;
    const s = (r = a.unstable_sxConfig) != null ? r : rr;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(a);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Vu(a.breakpoints), p = Object.keys(d);
      let m = d;
      return Object.keys(u).forEach((y) => {
        const O = Id(u[y], a);
        if (O != null)
          if (typeof O == "object")
            if (s[y])
              m = Yn(m, e(y, O, a, s));
            else {
              const v = Tt({
                theme: a
              }, O, (f) => ({
                [y]: f
              }));
              $d(v, O) ? m[y] = t({
                sx: O,
                theme: a
              }) : m = Yn(m, v);
            }
          else
            m = Yn(m, e(y, O, a, s));
      }), Uu(p, m);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const Ds = kd();
Ds.filterProps = ["sx"];
const ai = Ds, Md = ["breakpoints", "palette", "spacing", "shape"];
function si(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: a = {}
  } = e, s = ge(e, Md), l = Lu(o), c = Zu(i);
  let u = xt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, r),
    spacing: c,
    shape: x({}, Bu, a)
  }, s);
  return u = t.reduce((d, p) => xt(d, p), u), u.unstable_sxConfig = x({}, rr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return ai({
      sx: p,
      theme: this
    });
  }, u;
}
function Ad(e) {
  return Object.keys(e).length === 0;
}
function js(e = null) {
  const t = E.useContext(Ac);
  return !t || Ad(t) ? e : t;
}
const Nd = si();
function li(e = Nd) {
  return js(e);
}
function Fs({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = li(o), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ b(As, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
const _d = ["sx"], Dd = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : rr;
  return Object.keys(e).forEach((a) => {
    i[a] ? r.systemProps[a] = e[a] : r.otherProps[a] = e[a];
  }), r;
};
function jd(e) {
  const {
    sx: t
  } = e, o = ge(e, _d), {
    systemProps: r,
    otherProps: i
  } = Dd(o);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...s) => {
    const l = t(...s);
    return en(l) ? x({}, r, l) : r;
  } : a = x({}, r, t), x({}, i, {
    sx: a
  });
}
function Ls(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (o = Ls(e[t])) && (r && (r += " "), r += o);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ve() {
  for (var e, t, o = 0, r = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = Ls(e)) && (r && (r += " "), r += t);
  return r;
}
const Fd = ["variant"];
function ua(e) {
  return e.length === 0;
}
function zs(e) {
  const {
    variant: t
  } = e, o = ge(e, Fd);
  let r = t || "";
  return Object.keys(o).sort().forEach((i) => {
    i === "color" ? r += ua(r) ? e[i] : le(e[i]) : r += `${ua(r) ? i : le(i)}${le(e[i].toString())}`;
  }), r;
}
const Ld = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function zd(e) {
  return Object.keys(e).length === 0;
}
function Bd(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Wd = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Vd = (e, t) => {
  let o = [];
  t && t.components && t.components[e] && t.components[e].variants && (o = t.components[e].variants);
  const r = {};
  return o.forEach((i) => {
    const a = zs(i.props);
    r[a] = i.style;
  }), r;
}, Ud = (e, t, o, r) => {
  var i;
  const {
    ownerState: a = {}
  } = e, s = [], l = o == null || (i = o.components) == null || (i = i[r]) == null ? void 0 : i.variants;
  return l && l.forEach((c) => {
    let u = !0;
    Object.keys(c.props).forEach((d) => {
      a[d] !== c.props[d] && e[d] !== c.props[d] && (u = !1);
    }), u && s.push(t[zs(c.props)]);
  }), s;
};
function Kn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const qd = si(), da = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function jn({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return zd(t) ? e : t[o] || t;
}
function Hd(e) {
  return e ? (t, o) => o[e] : null;
}
function Yd(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = qd,
    rootShouldForwardProp: r = Kn,
    slotShouldForwardProp: i = Kn
  } = e, a = (s) => ai(x({}, s, {
    theme: jn(x({}, s, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return a.__mui_systemSx = !0, (s, l = {}) => {
    Du(s, (g) => g.filter((h) => !(h != null && h.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = Hd(da(u))
    } = l, y = ge(l, Ld), O = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), v = p || !1;
    let f;
    process.env.NODE_ENV !== "production" && c && (f = `${c}-${da(u || "Root")}`);
    let R = Kn;
    u === "Root" || u === "root" ? R = r : u ? R = i : Bd(s) && (R = void 0);
    const w = _u(s, x({
      shouldForwardProp: R,
      label: f
    }, y)), C = (g, ...h) => {
      const $ = h ? h.map((N) => typeof N == "function" && N.__emotion_real !== N ? (_) => N(x({}, _, {
        theme: jn(x({}, _, {
          defaultTheme: o,
          themeId: t
        }))
      })) : N) : [];
      let I = g;
      c && m && $.push((N) => {
        const _ = jn(x({}, N, {
          defaultTheme: o,
          themeId: t
        })), K = Wd(c, _);
        if (K) {
          const W = {};
          return Object.entries(K).forEach(([F, L]) => {
            W[F] = typeof L == "function" ? L(x({}, N, {
              theme: _
            })) : L;
          }), m(N, W);
        }
        return null;
      }), c && !O && $.push((N) => {
        const _ = jn(x({}, N, {
          defaultTheme: o,
          themeId: t
        }));
        return Ud(N, Vd(c, _), _, c);
      }), v || $.push(a);
      const A = $.length - h.length;
      if (Array.isArray(g) && A > 0) {
        const N = new Array(A).fill("");
        I = [...g, ...N], I.raw = [...g.raw, ...N];
      } else
        typeof g == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        g.__emotion_real !== g && (I = (N) => g(x({}, N, {
          theme: jn(x({}, N, {
            defaultTheme: o,
            themeId: t
          }))
        })));
      const z = w(I, ...$);
      if (process.env.NODE_ENV !== "production") {
        let N;
        c && (N = `${c}${le(u || "")}`), N === void 0 && (N = `Styled(${hu(s)})`), z.displayName = N;
      }
      return s.muiName && (z.muiName = s.muiName), z;
    };
    return w.withConfig && (C.withConfig = w.withConfig), C;
  };
}
function Kd(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : oi(t.components[o].defaultProps, r);
}
function Gd({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let i = li(o);
  return r && (i = i[r] || i), Kd({
    theme: i,
    name: t,
    props: e
  });
}
function ci(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), Math.min(Math.max(t, e), o);
}
function Xd(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function an(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return an(Xd(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ht(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ht(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
function ir(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Jd(e) {
  e = an(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (u, d = (u + o / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), ir({
    type: l,
    values: c
  });
}
function pa(e) {
  e = an(e);
  let t = e.type === "hsl" || e.type === "hsla" ? an(Jd(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function fa(e, t) {
  const o = pa(e), r = pa(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function Qe(e, t) {
  return e = an(e), t = ci(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ir(e);
}
function Qd(e, t) {
  if (e = an(e), t = ci(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return ir(e);
}
function Zd(e, t) {
  if (e = an(e), t = ci(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return ir(e);
}
function ep(e, t) {
  return x({
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
const tp = {
  black: "#000",
  white: "#fff"
}, ro = tp, np = {
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
}, op = np, rp = {
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
}, mn = rp, ip = {
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
}, hn = ip, ap = {
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
}, Fn = ap, sp = {
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
}, bn = sp, lp = {
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
}, gn = lp, cp = {
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
}, vn = cp, up = ["mode", "contrastThreshold", "tonalOffset"], ma = {
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
    paper: ro.white,
    default: ro.white
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
}, Tr = {
  text: {
    primary: ro.white,
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
    active: ro.white,
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
function ha(e, t, o, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = Zd(e.main, i) : t === "dark" && (e.dark = Qd(e.main, a)));
}
function dp(e = "light") {
  return e === "dark" ? {
    main: bn[200],
    light: bn[50],
    dark: bn[400]
  } : {
    main: bn[700],
    light: bn[400],
    dark: bn[800]
  };
}
function pp(e = "light") {
  return e === "dark" ? {
    main: mn[200],
    light: mn[50],
    dark: mn[400]
  } : {
    main: mn[500],
    light: mn[300],
    dark: mn[700]
  };
}
function fp(e = "light") {
  return e === "dark" ? {
    main: hn[500],
    light: hn[300],
    dark: hn[700]
  } : {
    main: hn[700],
    light: hn[400],
    dark: hn[800]
  };
}
function mp(e = "light") {
  return e === "dark" ? {
    main: gn[400],
    light: gn[300],
    dark: gn[700]
  } : {
    main: gn[700],
    light: gn[500],
    dark: gn[900]
  };
}
function hp(e = "light") {
  return e === "dark" ? {
    main: vn[400],
    light: vn[300],
    dark: vn[700]
  } : {
    main: vn[800],
    light: vn[500],
    dark: vn[900]
  };
}
function bp(e = "light") {
  return e === "dark" ? {
    main: Fn[400],
    light: Fn[300],
    dark: Fn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fn[500],
    dark: Fn[900]
  };
}
function gp(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, i = ge(e, up), a = e.primary || dp(t), s = e.secondary || pp(t), l = e.error || fp(t), c = e.info || mp(t), u = e.success || hp(t), d = e.warning || bp(t);
  function p(v) {
    const f = fa(v, Tr.text.primary) >= o ? Tr.text.primary : ma.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = fa(v, f);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${f} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return f;
  }
  const m = ({
    color: v,
    name: f,
    mainShade: R = 500,
    lightShade: w = 300,
    darkShade: C = 700
  }) => {
    if (v = x({}, v), !v.main && v[R] && (v.main = v[R]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : Ht(11, f ? ` (${f})` : "", R));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ht(12, f ? ` (${f})` : "", JSON.stringify(v.main)));
    return ha(v, "light", w, r), ha(v, "dark", C, r), v.contrastText || (v.contrastText = p(v.main)), v;
  }, y = {
    dark: Tr,
    light: ma
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), xt(x({
    // A collection of common colors.
    common: x({}, ro),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: op,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, y[t]), i);
}
const vp = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function yp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ba = {
  textTransform: "uppercase"
}, ga = '"Roboto", "Helvetica", "Arial", sans-serif';
function xp(e, t) {
  const o = typeof t == "function" ? t(e) : t, {
    fontFamily: r = ga,
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
    pxToRem: p
  } = o, m = ge(o, vp);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = i / 14, O = p || ((R) => `${R / u * y}rem`), v = (R, w, C, g, h) => x({
    fontFamily: r,
    fontWeight: R,
    fontSize: O(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, r === ga ? {
    letterSpacing: `${yp(g / w)}em`
  } : {}, h, d), f = {
    h1: v(a, 96, 1.167, -1.5),
    h2: v(a, 60, 1.2, -0.5),
    h3: v(s, 48, 1.167, 0),
    h4: v(s, 34, 1.235, 0.25),
    h5: v(s, 24, 1.334, 0),
    h6: v(l, 20, 1.6, 0.15),
    subtitle1: v(s, 16, 1.75, 0.15),
    subtitle2: v(l, 14, 1.57, 0.1),
    body1: v(s, 16, 1.5, 0.15),
    body2: v(s, 14, 1.43, 0.15),
    button: v(l, 14, 1.75, 0.4, ba),
    caption: v(s, 12, 1.66, 0.4),
    overline: v(s, 12, 2.66, 1, ba),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return xt(x({
    htmlFontSize: u,
    pxToRem: O,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: a,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, f), m, {
    clone: !1
    // No need to clone deep
  });
}
const Ep = 0.2, Tp = 0.14, Op = 0.12;
function He(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ep})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Tp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Op})`].join(",");
}
const Cp = ["none", He(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), He(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), He(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), He(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), He(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), He(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), He(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), He(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), He(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), He(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), He(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), He(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), He(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), He(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), He(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), He(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), He(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), He(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), He(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), He(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), He(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), He(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), He(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), He(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Rp = Cp, Sp = ["duration", "easing", "delay"], Pp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wp = {
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
function va(e) {
  return `${Math.round(e)}ms`;
}
function $p(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Ip(e) {
  const t = x({}, Pp, e.easing), o = x({}, wp, e.duration);
  return x({
    getAutoHeightDuration: $p,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = a, u = ge(a, Sp);
      if (process.env.NODE_ENV !== "production") {
        const d = (m) => typeof m == "string", p = (m) => !isNaN(parseFloat(m));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof s == "string" ? s : va(s)} ${l} ${typeof c == "string" ? c : va(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: o
  });
}
const kp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Mp = kp, Ap = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Np(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: i = {},
    typography: a = {}
  } = e, s = ge(e, Ap);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ht(18));
  const l = gp(r), c = si(e);
  let u = xt(c, {
    mixins: ep(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Rp.slice(),
    typography: xp(l, a),
    transitions: Ip(i),
    zIndex: x({}, Mp)
  });
  if (u = xt(u, s), u = t.reduce((d, p) => xt(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (m, y) => {
      let O;
      for (O in m) {
        const v = m[O];
        if (d.indexOf(O) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const f = Le("", O);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${f}' syntax:`, JSON.stringify({
              root: {
                [`&.${f}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[O] = {};
        }
      }
    };
    Object.keys(u.components).forEach((m) => {
      const y = u.components[m].styleOverrides;
      y && m.indexOf("Mui") === 0 && p(y, m);
    });
  }
  return u.unstable_sxConfig = x({}, rr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return ai({
      sx: p,
      theme: this
    });
  }, u;
}
const _p = Np(), ar = _p;
function Gt() {
  const e = li(ar);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[Ko] || e;
}
function Ve({
  props: e,
  name: t
}) {
  return Gd({
    props: e,
    name: t,
    defaultTheme: ar,
    themeId: Ko
  });
}
const zt = (e) => Kn(e) && e !== "classes", Dp = Kn, jp = Yd({
  themeId: Ko,
  defaultTheme: ar,
  rootShouldForwardProp: zt
}), me = jp, Fp = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ya = Fp, Bs = ({
  children: e,
  style: t,
  sx: o,
  component: r,
  onSubmit: i,
  mb: a,
  mt: s,
  isLoading: l = !1,
  ...c
}) => {
  const u = Gt();
  return /* @__PURE__ */ ue(
    qo,
    {
      sx: {
        position: "relative",
        padding: "1rem",
        marginBottom: a ? u.spacing(a) : 0,
        marginTop: s ? u.spacing(s) : 0,
        minHeight: l ? "100px" : "auto",
        borderRadius: "8px",
        ...t,
        ...o
      },
      component: r,
      onSubmit: i,
      ...c,
      children: [
        l && /* @__PURE__ */ b($n, {}),
        e
      ]
    }
  );
};
Bs.propTypes = {
  children: n.node,
  style: n.object,
  sx: n.object,
  component: n.elementType,
  onSubmit: n.func,
  isLoading: n.bool,
  marginBottom: n.string,
  marginTop: n.string,
  mb: n.number,
  mt: n.number
};
const ui = ({
  open: e,
  onClose: t,
  children: o,
  style: r,
  renderBox: i = !0,
  disableCloseOnBackdropClick: a = !1,
  isLoading: s = !1,
  ...l
}) => {
  const c = (u, d) => {
    a && d === "backdropClick" || t(u, d);
  };
  return /* @__PURE__ */ b(
    lc,
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
      children: /* @__PURE__ */ ue(kr, { sx: { position: "relative" }, children: [
        s && /* @__PURE__ */ b($n, {}),
        i ? /* @__PURE__ */ b(Bs, { style: r, children: o }) : /* @__PURE__ */ b("div", { style: r, children: o }),
        /* @__PURE__ */ b(
          Cn,
          {
            onClick: c,
            sx: {
              position: "absolute",
              top: 2,
              right: 2
            },
            children: /* @__PURE__ */ b(Nc, {})
          }
        )
      ] })
    }
  );
};
ui.propTypes = {
  open: n.bool.isRequired,
  onClose: n.func.isRequired,
  children: n.node.isRequired,
  style: n.object,
  renderBox: n.bool,
  disableCloseOnBackdropClick: n.bool,
  isLoading: n.bool
};
const Ws = ({
  open: e,
  title: t,
  description: o,
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
  return /* @__PURE__ */ ue(
    ui,
    {
      open: e,
      onClose: d,
      sx: {
        margin: "0 auto",
        maxWidth: 400,
        ...c
      },
      children: [
        a && /* @__PURE__ */ b($n, {}),
        /* @__PURE__ */ b(st, { fontWeight: "bold", variant: "h6", mb: 1, children: /* @__PURE__ */ b("strong", { children: t ?? "" }) }),
        /* @__PURE__ */ b(Ho, { sx: { mb: 2 } }),
        /* @__PURE__ */ b(ze, { mb: 1, fontSize: 16, textAlign: "center", children: o ?? "" }),
        /* @__PURE__ */ ue(ze, { direction: "column", mb: 2, children: [
          l,
          s && /* @__PURE__ */ ue(ze, { alignItems: "center", direction: "row", mt: 1, children: [
            /* @__PURE__ */ b(
              ps,
              {
                color: "error",
                sx: { marginRight: ".5rem", fontSize: "2rem" }
              }
            ),
            /* @__PURE__ */ b(st, { color: "error", fontSize: "16px", children: typeof s == "string" ? s : "Ocurrió un error, intente nuevamente." })
          ] })
        ] }),
        /* @__PURE__ */ ue(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "end"
            },
            children: [
              /* @__PURE__ */ b(Mr, { color: "secondary", onClick: d, disabled: a, children: "Cancelar" }),
              /* @__PURE__ */ b(Mr, { onClick: u, disabled: a, children: s ? "Reintentar" : "Confirmar" })
            ]
          }
        )
      ]
    }
  );
};
Ws.propTypes = {
  open: n.bool.isRequired,
  title: n.string,
  description: n.oneOfType([n.string, n.node]),
  onConfirm: n.func,
  onCancel: n.func,
  isLoading: n.bool,
  error: n.string,
  children: n.node,
  sx: n.object
};
const Do = ({ name: e, profile_picture: t, size: o = 120, sx: r, ...i }) => /* @__PURE__ */ b(
  cc,
  {
    alt: e,
    src: (t == null ? void 0 : t.url) ?? "/default-avatar.png",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "bottom",
      width: o,
      height: o,
      fontSize: o / 2,
      ...r
    },
    ...i
  }
);
Do.propTypes = {
  profile_picture: n.shape({
    url: n.string
  }),
  size: n.number,
  sx: n.object,
  name: n.string
};
function Lp(e) {
  const { children: t, value: o, index: r, ...i } = e;
  return /* @__PURE__ */ b("div", { role: "tabpanel", hidden: o !== r, ...i, children: o === r && t });
}
Lp.propTypes = {
  index: n.number,
  value: n.any,
  children: n.node
};
const di = (e) => {
  const t = Gt(), { orderBy: o, orderDirection: r, headCells: i, handleSortRequest: a } = e, s = (l) => (c) => {
    a(c, l);
  };
  return /* @__PURE__ */ b(uc, { sx: { backgroundColor: t.palette.table.header }, children: /* @__PURE__ */ b(eo, { children: i.map((l) => /* @__PURE__ */ b(to, { component: "th", width: l.width, children: l.isSortable ? /* @__PURE__ */ b(
    dc,
    {
      active: o === l.id,
      direction: o === l.id ? r : "asc",
      onClick: s(l.id),
      children: l.label
    }
  ) : /* @__PURE__ */ b("span", { children: l.label }) }, l.id)) }) });
};
di.propTypes = {
  orderBy: n.string,
  orderDirection: n.string,
  headCells: n.array,
  handleSortRequest: n.func
};
const zp = ({
  defaultChecked: e = !1,
  name: t,
  labelText: o = "",
  labelPlacement: r = "end",
  ...i
}) => {
  const { control: a } = po();
  return /* @__PURE__ */ b(uo, { children: /* @__PURE__ */ b(
    fo,
    {
      control: a,
      name: t,
      defaultValue: e,
      render: ({ field: s }) => /* @__PURE__ */ b(
        as,
        {
          labelPlacement: r,
          control: /* @__PURE__ */ b(
            pc,
            {
              ref: s.ref,
              onChange: (l) => s.onChange(l.target.checked),
              checked: !!s.value,
              name: t,
              ...i
            }
          ),
          label: o
        }
      )
    }
  ) });
};
zp.propTypes = {
  defaultChecked: n.bool,
  name: n.string.isRequired,
  labelText: n.string,
  fullWidth: n.bool,
  labelPlacement: n.string
};
const Bp = ({
  name: e,
  labelText: t = "",
  required: o,
  fullWidth: r = !0,
  InputProps: i,
  InputLabelProps: a,
  parentRef: s,
  multiline: l,
  rows: c,
  helperText: u,
  ...d
}) => {
  const { control: p } = po();
  return /* @__PURE__ */ b(uo, { fullWidth: r, ...d, children: /* @__PURE__ */ b(
    fo,
    {
      control: p,
      name: e,
      render: ({ field: { onChange: m, onBlur: y, value: O, name: v, ref: f } }) => /* @__PURE__ */ b(
        fc,
        {
          helperText: u,
          multiline: l,
          rows: c,
          required: o,
          label: t,
          onBlur: y,
          onChange: m,
          inputRef: s || f,
          value: O || "",
          name: v,
          InputProps: i,
          InputLabelProps: a,
          ...d
        }
      )
    }
  ) });
};
Bp.propTypes = {
  name: n.string.isRequired,
  labelText: n.string,
  ref: n.object,
  required: n.bool,
  fullWidth: n.bool,
  multiline: n.bool,
  rows: n.number,
  helperText: n.string,
  InputProps: n.object,
  InputLabelProps: n.object,
  parentRef: n.object
};
const Wp = ({ open: e, onConfirm: t, children: o }) => {
  const r = () => {
    typeof t == "function" && t();
  };
  return /* @__PURE__ */ ue(
    ui,
    {
      open: e,
      onClose: r,
      style: {
        maxWidth: "400px"
      },
      children: [
        /* @__PURE__ */ b(st, { fontWeight: "bold", variant: "h6", mb: 1, color: "error", children: "Error" }),
        /* @__PURE__ */ b(Ho, { sx: { mb: 2 } }),
        /* @__PURE__ */ b(ze, { direction: "column", mb: 2, children: o && /* @__PURE__ */ ue(ze, { alignItems: "center", children: [
          /* @__PURE__ */ b(ps, { color: "error", sx: { mb: "1rem", fontSize: "3rem" } }),
          /* @__PURE__ */ b(st, { color: "error", fontSize: "16px", textAlign: "center", children: o })
        ] }) }),
        /* @__PURE__ */ b(ze, { direction: "row", justifyContent: "end", children: /* @__PURE__ */ b(Mr, { onClick: r, children: "Aceptar" }) })
      ]
    }
  );
};
Wp.propTypes = {
  open: n.bool.isRequired,
  onConfirm: n.func,
  children: n.node
};
function Vp({ money: e, ...t }) {
  return /* @__PURE__ */ b(st, { component: "span", fontSize: 14, ...t, children: Number(e).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS"
  }) });
}
Vp.propTypes = {
  money: n.number.isRequired
};
const Up = ({ title: e, renderAside: t }) => /* @__PURE__ */ ue(
  ze,
  {
    display: "flex",
    direction: { sm: "row", xs: "column" },
    alignItems: { sm: "center", xs: "flex-start" },
    justifyContent: { sm: "space-between", xs: "flex-start" },
    marginBottom: 2,
    children: [
      /* @__PURE__ */ b(st, { fontWeight: "bold", fontSize: 24, children: e }),
      t && /* @__PURE__ */ b(ze, { mt: { xs: 2, sm: 0 }, children: t })
    ]
  }
);
Up.propTypes = {
  title: n.string.isRequired,
  renderAside: n.node
};
function qp(e = []) {
  return e.map((t) => /* @__PURE__ */ b(bc, { value: t.id, children: t.name }, t.id));
}
const Vs = ({
  data: e,
  name: t,
  labelText: o = "",
  required: r = !1,
  disabled: i = !1,
  render: a,
  ...s
}) => {
  const l = ic(), c = a || qp, { control: u } = po();
  return /* @__PURE__ */ ue(uo, { fullWidth: !0, children: [
    /* @__PURE__ */ b(mc, { id: l, required: r, disabled: i, children: o }),
    /* @__PURE__ */ b(
      fo,
      {
        control: u,
        name: t,
        render: ({ field: { onChange: d, onBlur: p, value: m, name: y, ref: O } }) => /* @__PURE__ */ b(
          hc,
          {
            required: r,
            labelId: l,
            label: o,
            onBlur: p,
            onChange: d,
            inputRef: O,
            value: m || "",
            name: y,
            disabled: i,
            ...s,
            children: e.length > 0 && c(e)
          }
        )
      }
    )
  ] });
};
Vs.propTypes = {
  data: n.array,
  name: n.string.isRequired,
  labelText: n.string,
  createOption: n.func,
  required: n.bool,
  disabled: n.bool,
  render: n.func
};
Vs.defaultProps = {
  data: []
};
const gt = {
  ASC: "asc",
  DESC: "desc"
};
function Hp(e, t, o, r = gt.ASC, i = null) {
  let a = e[o] ?? "", s = t[o] ?? "";
  if (Bi(new Date(a)) && Bi(new Date(s)))
    return a = new Date(a), s = new Date(s), r === gt.ASC ? a - s : s - a;
  o === "status" && (a = a.deleted_at ? "inactivo" : "activo", s = s.deleted_at ? "inactivo" : "activo"), typeof i == "function" && (a = i(e, o), s = i(t, o)), (typeof a == "object" || typeof s == "object") && (a = a.name, s = s.name), a = String(a).toLowerCase().trim(), s = String(s).toLowerCase().trim();
  const l = a.localeCompare(s);
  return r === gt.ASC ? l : -l;
}
const pi = gc({
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
      main: "#6D4F8C",
      light: "#A887CC",
      dark: "#4D3762",
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
}), Yp = (e) => {
  const {
    headCells: t,
    records: o = [],
    defaultRowsPerPage: r = 25,
    isLoading: i = !1,
    onDeleteItem: a = null,
    onEditItem: s = null,
    defaultOrderBy: l = "",
    customPropertiesComparator: c = null,
    defaultOrderDirection: u = gt.ASC,
    Row: d
  } = e, [p, m] = bt(u), [y, O] = bt(l), [v, f] = bt(0), [R, w] = bt(r), C = (A, z) => {
    const N = y === z && p === gt.ASC;
    m(N ? gt.DESC : gt.ASC), O(z);
  }, g = (A, z) => {
    f(z);
  }, h = (A) => {
    w(parseInt(A.target.value, 10)), f(0);
  }, I = (() => {
    const A = o.map((N, _) => [N, _]);
    return A.sort((N, _) => {
      const K = Hp(
        N[0],
        _[0],
        y,
        p,
        c
      );
      return K !== 0 ? K : N[1] - _[1];
    }), A.map((N) => N[0]).slice(
      v * R,
      v * R + R
    );
  })();
  return /* @__PURE__ */ ue(Kr, { theme: pi, children: [
    /* @__PURE__ */ b(ss, { children: /* @__PURE__ */ ue(ls, { children: [
      /* @__PURE__ */ b(
        di,
        {
          headCells: t,
          orderBy: y,
          orderDirection: p,
          handleSortRequest: C
        }
      ),
      /* @__PURE__ */ ue(cs, { children: [
        i && /* @__PURE__ */ b(eo, { children: /* @__PURE__ */ b(to, { colSpan: t.length, align: "center", children: /* @__PURE__ */ b($n, {}) }) }),
        (I == null ? void 0 : I.length) > 0 ? I.map((A) => /* @__PURE__ */ b(
          d,
          {
            data: A,
            onDeleteItem: a,
            onEditItem: s
          },
          A.id
        )) : /* @__PURE__ */ b(eo, { children: /* @__PURE__ */ b(to, { colSpan: t.length, align: "center", children: /* @__PURE__ */ b(st, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ b(
      us,
      {
        rowsPerPage: R,
        page: v,
        count: o.length,
        component: "div",
        rowsPerPageOptions: [5, 10, 25, 50, 100],
        onPageChange: g,
        onRowsPerPageChange: h
      }
    )
  ] });
};
Yp.propTypes = {
  headCells: n.array.isRequired,
  records: n.array,
  customPropertiesComparator: n.func,
  defaultRowsPerPage: n.number,
  isLoading: n.bool,
  onDeleteItem: n.func,
  onEditItem: n.func,
  defaultOrderBy: n.string,
  defaultOrderDirection: n.string,
  Row: n.elementType.isRequired
};
function Or(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = t.width ? String(t.width) : e.defaultWidth, r = e.formats[o] || e.formats[e.defaultWidth];
    return r;
  };
}
function Ln(e) {
  return function(t, o) {
    var r = o != null && o.context ? String(o.context) : "standalone", i;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = o != null && o.width ? String(o.width) : a;
      i = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var l = e.defaultWidth, c = o != null && o.width ? String(o.width) : e.defaultWidth;
      i = e.values[c] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[u];
  };
}
function zn(e) {
  return function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = o.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    var s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? Gp(l, function(p) {
      return p.test(s);
    }) : Kp(l, function(p) {
      return p.test(s);
    }), u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = o.valueCallback ? o.valueCallback(u) : u;
    var d = t.slice(s.length);
    return {
      value: u,
      rest: d
    };
  };
}
function Kp(e, t) {
  for (var o in e)
    if (e.hasOwnProperty(o) && t(e[o]))
      return o;
}
function Gp(e, t) {
  for (var o = 0; o < e.length; o++)
    if (t(e[o]))
      return o;
}
function Xp(e) {
  return function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var i = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = o.valueCallback ? o.valueCallback(s) : s;
    var l = t.slice(i.length);
    return {
      value: s,
      rest: l
    };
  };
}
function Jp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zr(e, t) {
  return zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, zr(e, t);
}
var Qp = {
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
}, Zp = function(t, o, r) {
  var i, a = Qp[t];
  return typeof a == "string" ? i = a : o === 1 ? i = a.one : i = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + i : "hace " + i : i;
};
const ef = Zp;
var tf = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, nf = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, of = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, rf = {
  date: Or({
    formats: tf,
    defaultWidth: "full"
  }),
  time: Or({
    formats: nf,
    defaultWidth: "full"
  }),
  dateTime: Or({
    formats: of,
    defaultWidth: "full"
  })
};
const af = rf;
var sf = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, lf = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, cf = function(t, o, r, i) {
  return o.getUTCHours() !== 1 ? lf[t] : sf[t];
};
const uf = cf;
var df = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, pf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, ff = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, mf = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, hf = {
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
}, bf = {
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
}, gf = function(t, o) {
  var r = Number(t);
  return r + "º";
}, vf = {
  ordinalNumber: gf,
  era: Ln({
    values: df,
    defaultWidth: "wide"
  }),
  quarter: Ln({
    values: pf,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: Ln({
    values: ff,
    defaultWidth: "wide"
  }),
  day: Ln({
    values: mf,
    defaultWidth: "wide"
  }),
  dayPeriod: Ln({
    values: hf,
    defaultWidth: "wide",
    formattingValues: bf,
    defaultFormattingWidth: "wide"
  })
};
const yf = vf;
var xf = /^(\d+)(º)?/i, Ef = /\d+/i, Tf = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Of = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, Cf = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Rf = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Sf = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, Pf = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, wf = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, $f = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, If = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, kf = {
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
}, Mf = {
  ordinalNumber: Xp({
    matchPattern: xf,
    parsePattern: Ef,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: zn({
    matchPatterns: Tf,
    defaultMatchWidth: "wide",
    parsePatterns: Of,
    defaultParseWidth: "any"
  }),
  quarter: zn({
    matchPatterns: Cf,
    defaultMatchWidth: "wide",
    parsePatterns: Rf,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: zn({
    matchPatterns: Sf,
    defaultMatchWidth: "wide",
    parsePatterns: Pf,
    defaultParseWidth: "any"
  }),
  day: zn({
    matchPatterns: wf,
    defaultMatchWidth: "wide",
    parsePatterns: $f,
    defaultParseWidth: "any"
  }),
  dayPeriod: zn({
    matchPatterns: If,
    defaultMatchWidth: "any",
    parsePatterns: kf,
    defaultParseWidth: "any"
  })
};
const Af = Mf;
var Nf = {
  code: "es",
  formatDistance: ef,
  formatLong: af,
  formatRelative: uf,
  localize: yf,
  match: Af,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const _f = Nf, Df = ({ isoDateTimeString: e, relative: t = !1, showTime: o = !0 }) => {
  const r = Bc(e) ? e : new Date(e), i = o ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy";
  return t ? /* @__PURE__ */ b("span", { children: Vc(r, /* @__PURE__ */ new Date(), {
    locale: _f
  }) }) : /* @__PURE__ */ b("span", { children: Wc(r, i) });
};
Df.propTypes = {
  isoDateTimeString: n.string.isRequired,
  relative: n.bool,
  showTime: n.bool
};
const jf = ({
  defaultChecked: e = !1,
  name: t,
  labelText: o = "",
  labelPlacement: r = "end",
  ...i
}) => {
  const { control: a } = po();
  return /* @__PURE__ */ b(uo, { children: /* @__PURE__ */ b(
    fo,
    {
      control: a,
      name: t,
      defaultValue: e,
      render: ({ field: s }) => /* @__PURE__ */ b(
        as,
        {
          labelPlacement: r,
          control: /* @__PURE__ */ b(
            vc,
            {
              ref: s.ref,
              onChange: (l) => s.onChange(l.target.checked),
              checked: !!s.value,
              name: t,
              ...i
            }
          ),
          label: o
        }
      )
    }
  ) });
};
jf.propTypes = {
  defaultChecked: n.bool,
  name: n.string.isRequired,
  labelText: n.string,
  fullWidth: n.bool,
  labelPlacement: n.string
};
const Ff = (e) => {
  var N;
  const {
    headCells: t,
    fetchRecords: o,
    queryKey: r,
    defaultOrderBy: i,
    defaultOrderDirection: a = gt.DESC,
    defaultRowsPerPage: s = 10,
    Row: l,
    Toolbar: c,
    onDeleteItem: u = null,
    onEditItem: d = null,
    filters: p
  } = e, [m, y] = hs(), [O, v] = bt(i), [f, R] = bt(a), [w, C] = bt({
    ...Wi.parse(m.toString()),
    per_page: s
  }), {
    data: g,
    isLoading: h,
    isFetching: $
  } = ms({
    queryKey: [r, w],
    queryFn: () => o(w),
    onSuccess: () => {
      y(Wi.stringify(w, { skipNulls: !0 }), {
        replace: !0
      });
    }
  });
  rn(() => {
    C((_) => ({
      ..._,
      sort: {
        field: O,
        direction: f
      }
    }));
  }, [O, f]), rn(() => {
    C((_) => ({
      ..._,
      filter: p
    }));
  }, [p]);
  const I = (_, K) => {
    C({ ...w, page: ++K });
  }, A = (_) => {
    C({ ...w, per_page: _.target.value });
  };
  return /* @__PURE__ */ ue(Kr, { theme: pi, children: [
    c && /* @__PURE__ */ b(c, { setParams: C, params: w }),
    /* @__PURE__ */ b(ss, { children: /* @__PURE__ */ ue(ls, { children: [
      /* @__PURE__ */ b(
        di,
        {
          headCells: t,
          orderBy: O,
          orderDirection: f,
          handleSortRequest: (_, K) => {
            v(K), R(
              O === K && f === gt.ASC ? gt.DESC : gt.ASC
            );
          }
        }
      ),
      /* @__PURE__ */ ue(cs, { children: [
        (h || $) && /* @__PURE__ */ b(eo, { children: /* @__PURE__ */ b(to, { colSpan: t.length, align: "center", children: /* @__PURE__ */ b($n, {}) }) }),
        ((N = g == null ? void 0 : g.data) == null ? void 0 : N.length) > 0 ? g.data.map((_) => /* @__PURE__ */ b(
          l,
          {
            data: _,
            onDeleteItem: u,
            onEditItem: d
          },
          _.id
        )) : /* @__PURE__ */ b(eo, { children: /* @__PURE__ */ b(to, { colSpan: t.length, align: "center", children: /* @__PURE__ */ b(st, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    g && /* @__PURE__ */ b(
      us,
      {
        component: "div",
        from: g.from,
        to: g.to,
        page: g.current_page - 1,
        rowsPerPage: g.per_page,
        count: g.total,
        onPageChange: I,
        onRowsPerPageChange: A,
        backIconButtonProps: {
          disabled: (g == null ? void 0 : g.current_page) === 1
        },
        nextIconButtonProps: {
          disabled: (g == null ? void 0 : g.current_page) === (g == null ? void 0 : g.last_page)
        }
      }
    )
  ] });
};
Ff.propTypes = {
  headCells: n.array.isRequired,
  fetchRecords: n.func.isRequired,
  queryKey: n.string.isRequired,
  defaultOrderBy: n.string,
  defaultOrderDirection: n.oneOf([
    gt.ASC,
    gt.DESC
  ]),
  defaultRowsPerPage: n.number,
  onDeleteItem: n.func,
  onEditItem: n.func,
  filters: n.object,
  Row: n.elementType.isRequired,
  Toolbar: n.elementType
};
function io(e) {
  return typeof e == "string";
}
function Lf(e, t, o) {
  return e === void 0 || io(e) ? t : x({}, t, {
    ownerState: x({}, t.ownerState, o)
  });
}
const zf = {
  disableDefaultClasses: !1
}, Bf = /* @__PURE__ */ E.createContext(zf);
function Us(e) {
  const {
    disableDefaultClasses: t
  } = E.useContext(Bf);
  return (o) => t ? "" : e(o);
}
function Wf(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Br(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function xa(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Vf(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const y = ve(i == null ? void 0 : i.className, r == null ? void 0 : r.className, a, o == null ? void 0 : o.className), O = x({}, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), v = x({}, o, i, r);
    return y.length > 0 && (v.className = y), Object.keys(O).length > 0 && (v.style = O), {
      props: v,
      internalRef: void 0
    };
  }
  const s = Wf(x({}, i, r)), l = xa(r), c = xa(i), u = t(s), d = ve(u == null ? void 0 : u.className, o == null ? void 0 : o.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = x({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), m = x({}, u, o, c, l);
  return d.length > 0 && (m.className = d), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
const Uf = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function sn(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: a = !1
  } = e, s = ge(e, Uf), l = a ? {} : Br(r, i), {
    props: c,
    internalRef: u
  } = Vf(x({}, s, {
    externalSlotProps: l
  })), d = tt(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Lf(o, x({}, c, {
    ref: d
  }), i);
}
const qf = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Hf(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Yf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function Kf(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Yf(e));
}
function Gf(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(qf)).forEach((r, i) => {
    const a = Hf(r);
    a === -1 || !Kf(r) || (a === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Xf() {
  return !0;
}
function jo(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Gf,
    isEnabled: s = Xf,
    open: l
  } = e, c = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), p = E.useRef(null), m = E.useRef(null), y = E.useRef(!1), O = E.useRef(null), v = tt(t.ref, O), f = E.useRef(null);
  E.useEffect(() => {
    !l || !O.current || (y.current = !o);
  }, [o, l]), E.useEffect(() => {
    if (!l || !O.current)
      return;
    const C = it(O.current);
    return O.current.contains(C.activeElement) || (O.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), O.current.setAttribute("tabIndex", "-1")), y.current && O.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), E.useEffect(() => {
    if (!l || !O.current)
      return;
    const C = it(O.current), g = (I) => {
      const {
        current: A
      } = O;
      if (A !== null) {
        if (!C.hasFocus() || r || !s() || c.current) {
          c.current = !1;
          return;
        }
        if (!A.contains(C.activeElement)) {
          if (I && m.current !== I.target || C.activeElement !== m.current)
            m.current = null;
          else if (m.current !== null)
            return;
          if (!y.current)
            return;
          let _ = [];
          if ((C.activeElement === u.current || C.activeElement === d.current) && (_ = a(O.current)), _.length > 0) {
            var z, N;
            const K = !!((z = f.current) != null && z.shiftKey && ((N = f.current) == null ? void 0 : N.key) === "Tab"), W = _[0], F = _[_.length - 1];
            typeof W != "string" && typeof F != "string" && (K ? F.focus() : W.focus());
          } else
            A.focus();
        }
      }
    }, h = (I) => {
      f.current = I, !(r || !s() || I.key !== "Tab") && C.activeElement === O.current && I.shiftKey && (c.current = !0, d.current && d.current.focus());
    };
    C.addEventListener("focusin", g), C.addEventListener("keydown", h, !0);
    const $ = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && g(null);
    }, 50);
    return () => {
      clearInterval($), C.removeEventListener("focusin", g), C.removeEventListener("keydown", h, !0);
    };
  }, [o, r, i, s, l, a]);
  const R = (C) => {
    p.current === null && (p.current = C.relatedTarget), y.current = !0, m.current = C.target;
    const g = t.props.onFocus;
    g && g(C);
  }, w = (C) => {
    p.current === null && (p.current = C.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ ue(E.Fragment, {
    children: [/* @__PURE__ */ b("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: v,
      onFocus: R
    }), /* @__PURE__ */ b("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (jo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: mo,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (jo["propTypes"] = Cs(jo.propTypes));
var ut = "top", Ot = "bottom", Ct = "right", dt = "left", fi = "auto", go = [ut, Ot, Ct, dt], Rn = "start", ao = "end", Jf = "clippingParents", qs = "viewport", Bn = "popper", Qf = "reference", Ea = /* @__PURE__ */ go.reduce(function(e, t) {
  return e.concat([t + "-" + Rn, t + "-" + ao]);
}, []), Hs = /* @__PURE__ */ [].concat(go, [fi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rn, t + "-" + ao]);
}, []), Zf = "beforeRead", em = "read", tm = "afterRead", nm = "beforeMain", om = "main", rm = "afterMain", im = "beforeWrite", am = "write", sm = "afterWrite", lm = [Zf, em, tm, nm, om, rm, im, am, sm];
function _t(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ln(e) {
  var t = vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Et(e) {
  var t = vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function mi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function cm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, i = t.attributes[o] || {}, a = t.elements[o];
    !Et(a) || !_t(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function um(e) {
  var t = e.state, o = {
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
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), l = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Et(i) || !_t(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const dm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: cm,
  effect: um,
  requires: ["computeStyles"]
};
function At(e) {
  return e.split("-")[0];
}
var on = Math.max, Fo = Math.min, Sn = Math.round;
function Wr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ys() {
  return !/^((?!chrome|android).)*safari/i.test(Wr());
}
function Pn(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && Et(e) && (i = e.offsetWidth > 0 && Sn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Sn(r.height) / e.offsetHeight || 1);
  var s = ln(e) ? vt(e) : window, l = s.visualViewport, c = !Ys() && o, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, d = (r.top + (c && l ? l.offsetTop : 0)) / a, p = r.width / i, m = r.height / a;
  return {
    width: p,
    height: m,
    top: d,
    right: u + p,
    bottom: d + m,
    left: u,
    x: u,
    y: d
  };
}
function hi(e) {
  var t = Pn(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Ks(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && mi(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Lt(e) {
  return vt(e).getComputedStyle(e);
}
function pm(e) {
  return ["table", "td", "th"].indexOf(_t(e)) >= 0;
}
function Xt(e) {
  return ((ln(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function sr(e) {
  return _t(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (mi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xt(e)
  );
}
function Ta(e) {
  return !Et(e) || // https://github.com/popperjs/popper-core/issues/837
  Lt(e).position === "fixed" ? null : e.offsetParent;
}
function fm(e) {
  var t = /firefox/i.test(Wr()), o = /Trident/i.test(Wr());
  if (o && Et(e)) {
    var r = Lt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = sr(e);
  for (mi(i) && (i = i.host); Et(i) && ["html", "body"].indexOf(_t(i)) < 0; ) {
    var a = Lt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function vo(e) {
  for (var t = vt(e), o = Ta(e); o && pm(o) && Lt(o).position === "static"; )
    o = Ta(o);
  return o && (_t(o) === "html" || _t(o) === "body" && Lt(o).position === "static") ? t : o || fm(e) || t;
}
function bi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Gn(e, t, o) {
  return on(e, Fo(t, o));
}
function mm(e, t, o) {
  var r = Gn(e, t, o);
  return r > o ? o : r;
}
function Gs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Xs(e) {
  return Object.assign({}, Gs(), e);
}
function Js(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var hm = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Xs(typeof t != "number" ? t : Js(t, go));
};
function bm(e) {
  var t, o = e.state, r = e.name, i = e.options, a = o.elements.arrow, s = o.modifiersData.popperOffsets, l = At(o.placement), c = bi(l), u = [dt, Ct].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = hm(i.padding, o), m = hi(a), y = c === "y" ? ut : dt, O = c === "y" ? Ot : Ct, v = o.rects.reference[d] + o.rects.reference[c] - s[c] - o.rects.popper[d], f = s[c] - o.rects.reference[c], R = vo(a), w = R ? c === "y" ? R.clientHeight || 0 : R.clientWidth || 0 : 0, C = v / 2 - f / 2, g = p[y], h = w - m[d] - p[O], $ = w / 2 - m[d] / 2 + C, I = Gn(g, $, h), A = c;
    o.modifiersData[r] = (t = {}, t[A] = I, t.centerOffset = I - $, t);
  }
}
function gm(e) {
  var t = e.state, o = e.options, r = o.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Ks(t.elements.popper, i) && (t.elements.arrow = i));
}
const vm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bm,
  effect: gm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wn(e) {
  return e.split("-")[1];
}
var ym = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function xm(e, t) {
  var o = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Sn(o * i) / i || 0,
    y: Sn(r * i) / i || 0
  };
}
function Oa(e) {
  var t, o = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, y = m === void 0 ? 0 : m, O = s.y, v = O === void 0 ? 0 : O, f = typeof d == "function" ? d({
    x: y,
    y: v
  }) : {
    x: y,
    y: v
  };
  y = f.x, v = f.y;
  var R = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), C = dt, g = ut, h = window;
  if (u) {
    var $ = vo(o), I = "clientHeight", A = "clientWidth";
    if ($ === vt(o) && ($ = Xt(o), Lt($).position !== "static" && l === "absolute" && (I = "scrollHeight", A = "scrollWidth")), $ = $, i === ut || (i === dt || i === Ct) && a === ao) {
      g = Ot;
      var z = p && $ === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[I]
      );
      v -= z - r.height, v *= c ? 1 : -1;
    }
    if (i === dt || (i === ut || i === Ot) && a === ao) {
      C = Ct;
      var N = p && $ === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[A]
      );
      y -= N - r.width, y *= c ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: l
  }, u && ym), K = d === !0 ? xm({
    x: y,
    y: v
  }, vt(o)) : {
    x: y,
    y: v
  };
  if (y = K.x, v = K.y, c) {
    var W;
    return Object.assign({}, _, (W = {}, W[g] = w ? "0" : "", W[C] = R ? "0" : "", W.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", W));
  }
  return Object.assign({}, _, (t = {}, t[g] = w ? v + "px" : "", t[C] = R ? y + "px" : "", t.transform = "", t));
}
function Em(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, i = r === void 0 ? !0 : r, a = o.adaptive, s = a === void 0 ? !0 : a, l = o.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: At(t.placement),
    variation: wn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Oa(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Oa(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Tm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Em,
  data: {}
};
var So = {
  passive: !0
};
function Om(e) {
  var t = e.state, o = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", o.update, So);
  }), l && c.addEventListener("resize", o.update, So), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", o.update, So);
    }), l && c.removeEventListener("resize", o.update, So);
  };
}
const Cm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Om,
  data: {}
};
var Rm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Rm[t];
  });
}
var Sm = {
  start: "end",
  end: "start"
};
function Ca(e) {
  return e.replace(/start|end/g, function(t) {
    return Sm[t];
  });
}
function gi(e) {
  var t = vt(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function vi(e) {
  return Pn(Xt(e)).left + gi(e).scrollLeft;
}
function Pm(e, t) {
  var o = vt(e), r = Xt(e), i = o.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = Ys();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + vi(e),
    y: c
  };
}
function wm(e) {
  var t, o = Xt(e), r = gi(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = on(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = on(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + vi(e), c = -r.scrollTop;
  return Lt(i || o).direction === "rtl" && (l += on(o.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function yi(e) {
  var t = Lt(e), o = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + r);
}
function Qs(e) {
  return ["html", "body", "#document"].indexOf(_t(e)) >= 0 ? e.ownerDocument.body : Et(e) && yi(e) ? e : Qs(sr(e));
}
function Xn(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = Qs(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = vt(r), s = i ? [a].concat(a.visualViewport || [], yi(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Xn(sr(s)))
  );
}
function Vr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function $m(e, t) {
  var o = Pn(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Ra(e, t, o) {
  return t === qs ? Vr(Pm(e, o)) : ln(t) ? $m(t, o) : Vr(wm(Xt(e)));
}
function Im(e) {
  var t = Xn(sr(e)), o = ["absolute", "fixed"].indexOf(Lt(e).position) >= 0, r = o && Et(e) ? vo(e) : e;
  return ln(r) ? t.filter(function(i) {
    return ln(i) && Ks(i, r) && _t(i) !== "body";
  }) : [];
}
function km(e, t, o, r) {
  var i = t === "clippingParents" ? Im(e) : [].concat(t), a = [].concat(i, [o]), s = a[0], l = a.reduce(function(c, u) {
    var d = Ra(e, u, r);
    return c.top = on(d.top, c.top), c.right = Fo(d.right, c.right), c.bottom = Fo(d.bottom, c.bottom), c.left = on(d.left, c.left), c;
  }, Ra(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Zs(e) {
  var t = e.reference, o = e.element, r = e.placement, i = r ? At(r) : null, a = r ? wn(r) : null, s = t.x + t.width / 2 - o.width / 2, l = t.y + t.height / 2 - o.height / 2, c;
  switch (i) {
    case ut:
      c = {
        x: s,
        y: t.y - o.height
      };
      break;
    case Ot:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Ct:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case dt:
      c = {
        x: t.x - o.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? bi(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Rn:
        c[u] = c[u] - (t[d] / 2 - o[d] / 2);
        break;
      case ao:
        c[u] = c[u] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function so(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = r === void 0 ? e.placement : r, a = o.strategy, s = a === void 0 ? e.strategy : a, l = o.boundary, c = l === void 0 ? Jf : l, u = o.rootBoundary, d = u === void 0 ? qs : u, p = o.elementContext, m = p === void 0 ? Bn : p, y = o.altBoundary, O = y === void 0 ? !1 : y, v = o.padding, f = v === void 0 ? 0 : v, R = Xs(typeof f != "number" ? f : Js(f, go)), w = m === Bn ? Qf : Bn, C = e.rects.popper, g = e.elements[O ? w : m], h = km(ln(g) ? g : g.contextElement || Xt(e.elements.popper), c, d, s), $ = Pn(e.elements.reference), I = Zs({
    reference: $,
    element: C,
    strategy: "absolute",
    placement: i
  }), A = Vr(Object.assign({}, C, I)), z = m === Bn ? A : $, N = {
    top: h.top - z.top + R.top,
    bottom: z.bottom - h.bottom + R.bottom,
    left: h.left - z.left + R.left,
    right: z.right - h.right + R.right
  }, _ = e.modifiersData.offset;
  if (m === Bn && _) {
    var K = _[i];
    Object.keys(N).forEach(function(W) {
      var F = [Ct, Ot].indexOf(W) >= 0 ? 1 : -1, L = [ut, Ot].indexOf(W) >= 0 ? "y" : "x";
      N[W] += K[L] * F;
    });
  }
  return N;
}
function Mm(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = o.boundary, a = o.rootBoundary, s = o.padding, l = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? Hs : c, d = wn(r), p = d ? l ? Ea : Ea.filter(function(O) {
    return wn(O) === d;
  }) : go, m = p.filter(function(O) {
    return u.indexOf(O) >= 0;
  });
  m.length === 0 && (m = p);
  var y = m.reduce(function(O, v) {
    return O[v] = so(e, {
      placement: v,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[At(v)], O;
  }, {});
  return Object.keys(y).sort(function(O, v) {
    return y[O] - y[v];
  });
}
function Am(e) {
  if (At(e) === fi)
    return [];
  var t = Mo(e);
  return [Ca(e), t, Ca(t)];
}
function Nm(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = o.mainAxis, a = i === void 0 ? !0 : i, s = o.altAxis, l = s === void 0 ? !0 : s, c = o.fallbackPlacements, u = o.padding, d = o.boundary, p = o.rootBoundary, m = o.altBoundary, y = o.flipVariations, O = y === void 0 ? !0 : y, v = o.allowedAutoPlacements, f = t.options.placement, R = At(f), w = R === f, C = c || (w || !O ? [Mo(f)] : Am(f)), g = [f].concat(C).reduce(function(H, J) {
      return H.concat(At(J) === fi ? Mm(t, {
        placement: J,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: O,
        allowedAutoPlacements: v
      }) : J);
    }, []), h = t.rects.reference, $ = t.rects.popper, I = /* @__PURE__ */ new Map(), A = !0, z = g[0], N = 0; N < g.length; N++) {
      var _ = g[N], K = At(_), W = wn(_) === Rn, F = [ut, Ot].indexOf(K) >= 0, L = F ? "width" : "height", U = so(t, {
        placement: _,
        boundary: d,
        rootBoundary: p,
        altBoundary: m,
        padding: u
      }), Y = F ? W ? Ct : dt : W ? Ot : ut;
      h[L] > $[L] && (Y = Mo(Y));
      var se = Mo(Y), ee = [];
      if (a && ee.push(U[K] <= 0), l && ee.push(U[Y] <= 0, U[se] <= 0), ee.every(function(H) {
        return H;
      })) {
        z = _, A = !1;
        break;
      }
      I.set(_, ee);
    }
    if (A)
      for (var M = O ? 3 : 1, V = function(J) {
        var Q = g.find(function(G) {
          var oe = I.get(G);
          if (oe)
            return oe.slice(0, J).every(function(ie) {
              return ie;
            });
        });
        if (Q)
          return z = Q, "break";
      }, ne = M; ne > 0; ne--) {
        var Z = V(ne);
        if (Z === "break")
          break;
      }
    t.placement !== z && (t.modifiersData[r]._skip = !0, t.placement = z, t.reset = !0);
  }
}
const _m = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Nm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Sa(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function Pa(e) {
  return [ut, Ct, Ot, dt].some(function(t) {
    return e[t] >= 0;
  });
}
function Dm(e) {
  var t = e.state, o = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = so(t, {
    elementContext: "reference"
  }), l = so(t, {
    altBoundary: !0
  }), c = Sa(s, r), u = Sa(l, i, a), d = Pa(c), p = Pa(u);
  t.modifiersData[o] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": p
  });
}
const jm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Dm
};
function Fm(e, t, o) {
  var r = At(e), i = [dt, ut].indexOf(r) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [dt, Ct].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function Lm(e) {
  var t = e.state, o = e.options, r = e.name, i = o.offset, a = i === void 0 ? [0, 0] : i, s = Hs.reduce(function(d, p) {
    return d[p] = Fm(p, t.rects, a), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const zm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Lm
};
function Bm(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Zs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Wm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Bm,
  data: {}
};
function Vm(e) {
  return e === "x" ? "y" : "x";
}
function Um(e) {
  var t = e.state, o = e.options, r = e.name, i = o.mainAxis, a = i === void 0 ? !0 : i, s = o.altAxis, l = s === void 0 ? !1 : s, c = o.boundary, u = o.rootBoundary, d = o.altBoundary, p = o.padding, m = o.tether, y = m === void 0 ? !0 : m, O = o.tetherOffset, v = O === void 0 ? 0 : O, f = so(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), R = At(t.placement), w = wn(t.placement), C = !w, g = bi(R), h = Vm(g), $ = t.modifiersData.popperOffsets, I = t.rects.reference, A = t.rects.popper, z = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, N = typeof z == "number" ? {
    mainAxis: z,
    altAxis: z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, z), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if ($) {
    if (a) {
      var W, F = g === "y" ? ut : dt, L = g === "y" ? Ot : Ct, U = g === "y" ? "height" : "width", Y = $[g], se = Y + f[F], ee = Y - f[L], M = y ? -A[U] / 2 : 0, V = w === Rn ? I[U] : A[U], ne = w === Rn ? -A[U] : -I[U], Z = t.elements.arrow, H = y && Z ? hi(Z) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gs(), Q = J[F], G = J[L], oe = Gn(0, I[U], H[U]), ie = C ? I[U] / 2 - M - oe - Q - N.mainAxis : V - oe - Q - N.mainAxis, fe = C ? -I[U] / 2 + M + oe + G + N.mainAxis : ne + oe + G + N.mainAxis, ae = t.elements.arrow && vo(t.elements.arrow), D = ae ? g === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, he = (W = _ == null ? void 0 : _[g]) != null ? W : 0, k = Y + ie - he - D, X = Y + fe - he, Te = Gn(y ? Fo(se, k) : se, Y, y ? on(ee, X) : ee);
      $[g] = Te, K[g] = Te - Y;
    }
    if (l) {
      var ce, Ue = g === "x" ? ut : dt, qe = g === "x" ? Ot : Ct, $e = $[h], Ce = h === "y" ? "height" : "width", Fe = $e + f[Ue], Se = $e - f[qe], Ge = [ut, dt].indexOf(R) !== -1, Xe = (ce = _ == null ? void 0 : _[h]) != null ? ce : 0, et = Ge ? Fe : $e - I[Ce] - A[Ce] - Xe + N.altAxis, Pe = Ge ? $e + I[Ce] + A[Ce] - Xe - N.altAxis : Se, be = y && Ge ? mm(et, $e, Pe) : Gn(y ? et : Fe, $e, y ? Pe : Se);
      $[h] = be, K[h] = be - $e;
    }
    t.modifiersData[r] = K;
  }
}
const qm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Um,
  requiresIfExists: ["offset"]
};
function Hm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ym(e) {
  return e === vt(e) || !Et(e) ? gi(e) : Hm(e);
}
function Km(e) {
  var t = e.getBoundingClientRect(), o = Sn(t.width) / e.offsetWidth || 1, r = Sn(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Gm(e, t, o) {
  o === void 0 && (o = !1);
  var r = Et(t), i = Et(t) && Km(t), a = Xt(t), s = Pn(e, i, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((_t(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  yi(a)) && (l = Ym(t)), Et(t) ? (c = Pn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = vi(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Xm(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    o.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!o.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || i(a);
  }), r;
}
function Jm(e) {
  var t = Xm(e);
  return lm.reduce(function(o, r) {
    return o.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Qm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Zm(e) {
  var t = e.reduce(function(o, r) {
    var i = o[r.name];
    return o[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var wa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $a() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function eh(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, i = t.defaultOptions, a = i === void 0 ? wa : i;
  return function(l, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, wa, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], m = !1, y = {
      state: d,
      setOptions: function(R) {
        var w = typeof R == "function" ? R(d.options) : R;
        v(), d.options = Object.assign({}, a, d.options, w), d.scrollParents = {
          reference: ln(l) ? Xn(l) : l.contextElement ? Xn(l.contextElement) : [],
          popper: Xn(c)
        };
        var C = Jm(Zm([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = C.filter(function(g) {
          return g.enabled;
        }), O(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var R = d.elements, w = R.reference, C = R.popper;
          if ($a(w, C)) {
            d.rects = {
              reference: Gm(w, vo(C), d.options.strategy === "fixed"),
              popper: hi(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
              return d.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var g = 0; g < d.orderedModifiers.length; g++) {
              if (d.reset === !0) {
                d.reset = !1, g = -1;
                continue;
              }
              var h = d.orderedModifiers[g], $ = h.fn, I = h.options, A = I === void 0 ? {} : I, z = h.name;
              typeof $ == "function" && (d = $({
                state: d,
                options: A,
                name: z,
                instance: y
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Qm(function() {
        return new Promise(function(f) {
          y.forceUpdate(), f(d);
        });
      }),
      destroy: function() {
        v(), m = !0;
      }
    };
    if (!$a(l, c))
      return y;
    y.setOptions(u).then(function(f) {
      !m && u.onFirstUpdate && u.onFirstUpdate(f);
    });
    function O() {
      d.orderedModifiers.forEach(function(f) {
        var R = f.name, w = f.options, C = w === void 0 ? {} : w, g = f.effect;
        if (typeof g == "function") {
          var h = g({
            state: d,
            name: R,
            instance: y,
            options: C
          }), $ = function() {
          };
          p.push(h || $);
        }
      });
    }
    function v() {
      p.forEach(function(f) {
        return f();
      }), p = [];
    }
    return y;
  };
}
var th = [Cm, Wm, Tm, dm, zm, _m, qm, vm, jm], nh = /* @__PURE__ */ eh({
  defaultModifiers: th
});
function oh(e) {
  return typeof e == "function" ? e() : e;
}
const lo = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = E.useState(null), c = tt(/* @__PURE__ */ E.isValidElement(r) ? r.ref : null, o);
  if (Ft(() => {
    a || l(oh(i) || document.body);
  }, [i, a]), Ft(() => {
    if (s && !a)
      return oo(o, s), () => {
        oo(o, null);
      };
  }, [o, s, a]), a) {
    if (/* @__PURE__ */ E.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ E.cloneElement(r, u);
    }
    return /* @__PURE__ */ b(E.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ b(E.Fragment, {
    children: s && /* @__PURE__ */ gs.createPortal(r, s)
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
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Nt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (lo["propTypes"] = Cs(lo.propTypes));
function rh(e) {
  return Le("MuiPopper", e);
}
Be("MuiPopper", ["root"]);
const ih = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], ah = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function sh(e, t) {
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
function Lo(e) {
  return typeof e == "function" ? e() : e;
}
function lr(e) {
  return e.nodeType !== void 0;
}
function lh(e) {
  return !lr(e);
}
const ch = () => We({
  root: ["root"]
}, Us(rh)), uh = {}, dh = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r;
  const {
    anchorEl: i,
    children: a,
    direction: s,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: p,
    popperRef: m,
    slotProps: y = {},
    slots: O = {},
    TransitionProps: v
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, f = ge(t, ih), R = E.useRef(null), w = tt(R, o), C = E.useRef(null), g = tt(C, m), h = E.useRef(g);
  Ft(() => {
    h.current = g;
  }, [g]), E.useImperativeHandle(m, () => C.current, []);
  const $ = sh(d, s), [I, A] = E.useState($), [z, N] = E.useState(Lo(i));
  E.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), E.useEffect(() => {
    i && N(Lo(i));
  }, [i]), Ft(() => {
    if (!z || !u)
      return;
    const L = (se) => {
      A(se.placement);
    };
    if (process.env.NODE_ENV !== "production" && z && lr(z) && z.nodeType === 1) {
      const se = z.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && se.top === 0 && se.left === 0 && se.right === 0 && se.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let U = [{
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
        state: se
      }) => {
        L(se);
      }
    }];
    c != null && (U = U.concat(c)), p && p.modifiers != null && (U = U.concat(p.modifiers));
    const Y = nh(z, R.current, x({
      placement: $
    }, p, {
      modifiers: U
    }));
    return h.current(Y), () => {
      Y.destroy(), h.current(null);
    };
  }, [z, l, c, u, p, $]);
  const _ = {
    placement: I
  };
  v !== null && (_.TransitionProps = v);
  const K = ch(), W = (r = O.root) != null ? r : "div", F = sn({
    elementType: W,
    externalSlotProps: y.root,
    externalForwardedProps: f,
    additionalProps: {
      role: "tooltip",
      ref: w
    },
    ownerState: t,
    className: K.root
  });
  return /* @__PURE__ */ b(W, x({}, F, {
    children: typeof a == "function" ? a(_) : a
  }));
}), el = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: i,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: p = "bottom",
    popperOptions: m = uh,
    popperRef: y,
    style: O,
    transition: v = !1,
    slotProps: f = {},
    slots: R = {}
  } = t, w = ge(t, ah), [C, g] = E.useState(!0), h = () => {
    g(!1);
  }, $ = () => {
    g(!0);
  };
  if (!c && !d && (!v || C))
    return null;
  let I;
  if (a)
    I = a;
  else if (r) {
    const N = Lo(r);
    I = N && lr(N) ? it(N).body : it(null).body;
  }
  const A = !d && c && (!v || C) ? "none" : void 0, z = v ? {
    in: d,
    onEnter: h,
    onExited: $
  } : void 0;
  return /* @__PURE__ */ b(lo, {
    disablePortal: l,
    container: I,
    children: /* @__PURE__ */ b(dh, x({
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: o,
      open: v ? !C : d,
      placement: p,
      popperOptions: m,
      popperRef: y,
      slotProps: f,
      slots: R
    }, w, {
      style: x({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: A
      }, O),
      TransitionProps: z,
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
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
  anchorEl: jt(n.oneOfType([Nt, n.object, n.func]), (e) => {
    if (e.open) {
      const t = Lo(e.anchorEl);
      if (t && lr(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || lh(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Nt, n.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: n.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: $t,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
function ph(e) {
  const t = it(e);
  return t.body === e ? Yt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Jn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ia(e) {
  return parseInt(Yt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function fh(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function ka(e, t, o, r, i) {
  const a = [t, o, ...r];
  [].forEach.call(e.children, (s) => {
    const l = a.indexOf(s) === -1, c = !fh(s);
    l && c && Jn(s, i);
  });
}
function Cr(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function mh(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (ph(r)) {
      const s = $s(it(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Ia(r) + s}px`;
      const l = it(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Ia(c) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = it(r).body;
    else {
      const s = r.parentElement, l = Yt(r);
      a = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    o.push({
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
    o.forEach(({
      value: a,
      el: s,
      property: l
    }) => {
      a ? s.style.setProperty(l, a) : s.style.removeProperty(l);
    });
  };
}
function hh(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class bh {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Jn(t.modalRef, !1);
    const i = hh(o);
    ka(o, t.mount, t.modalRef, i, !0);
    const a = Cr(this.containers, (s) => s.container === o);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = Cr(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = mh(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Cr(this.containers, (s) => s.modals.indexOf(t) !== -1), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && Jn(t.modalRef, o), ka(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && Jn(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function gh(e) {
  return Le("MuiModal", e);
}
Be("MuiModal", ["root", "hidden", "backdrop"]);
const vh = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], yh = (e) => {
  const {
    open: t,
    exited: o
  } = e;
  return We({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, Us(gh));
};
function xh(e) {
  return typeof e == "function" ? e() : e;
}
function Eh(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Th = new bh(), tl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i;
  const {
    children: a,
    closeAfterTransition: s = !1,
    container: l,
    disableAutoFocus: c = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: d = !1,
    disablePortal: p = !1,
    disableRestoreFocus: m = !1,
    disableScrollLock: y = !1,
    hideBackdrop: O = !1,
    keepMounted: v = !1,
    // private
    manager: f = Th,
    onBackdropClick: R,
    onClose: w,
    onKeyDown: C,
    open: g,
    onTransitionEnter: h,
    onTransitionExited: $,
    slotProps: I = {},
    slots: A = {}
  } = t, z = ge(t, vh), N = f, [_, K] = E.useState(!g), W = E.useRef({}), F = E.useRef(null), L = E.useRef(null), U = tt(L, o), Y = Eh(a), se = (r = t["aria-hidden"]) != null ? r : !0, ee = () => it(F.current), M = () => (W.current.modalRef = L.current, W.current.mountNode = F.current, W.current), V = () => {
    N.mount(M(), {
      disableScrollLock: y
    }), L.current && (L.current.scrollTop = 0);
  }, ne = wt(() => {
    const ce = xh(l) || ee().body;
    N.add(M(), ce), L.current && V();
  }), Z = E.useCallback(() => N.isTopModal(M()), [N]), H = wt((ce) => {
    F.current = ce, !(!ce || !L.current) && (g && Z() ? V() : Jn(L.current, se));
  }), J = E.useCallback(() => {
    N.remove(M(), se);
  }, [N, se]);
  E.useEffect(() => () => {
    J();
  }, [J]), E.useEffect(() => {
    g ? ne() : (!Y || !s) && J();
  }, [g, J, Y, s, ne]);
  const Q = x({}, t, {
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: u,
    disableEscapeKeyDown: d,
    disablePortal: p,
    disableRestoreFocus: m,
    disableScrollLock: y,
    exited: _,
    hideBackdrop: O,
    keepMounted: v
  }), G = yh(Q), oe = () => {
    K(!1), h && h();
  }, ie = () => {
    K(!0), $ && $(), s && J();
  }, fe = (ce) => {
    ce.target === ce.currentTarget && (R && R(ce), w && w(ce, "backdropClick"));
  }, ae = (ce) => {
    C && C(ce), !(ce.key !== "Escape" || !Z()) && (d || (ce.stopPropagation(), w && w(ce, "escapeKeyDown")));
  }, D = {};
  a.props.tabIndex === void 0 && (D.tabIndex = "-1"), Y && (D.onEnter = jr(oe, a.props.onEnter), D.onExited = jr(ie, a.props.onExited));
  const he = (i = A.root) != null ? i : "div", k = sn({
    elementType: he,
    externalSlotProps: I.root,
    externalForwardedProps: z,
    additionalProps: {
      ref: U,
      role: "presentation",
      onKeyDown: ae
    },
    className: G.root,
    ownerState: Q
  }), X = A.backdrop, Te = sn({
    elementType: X,
    externalSlotProps: I.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: fe,
      open: g
    },
    className: G.backdrop,
    ownerState: Q
  });
  return !v && !g && (!Y || _) ? null : /* @__PURE__ */ b(
    lo,
    {
      ref: H,
      container: l,
      disablePortal: p,
      children: /* @__PURE__ */ ue(he, x({}, k, {
        children: [!O && X ? /* @__PURE__ */ b(X, x({}, Te)) : null, /* @__PURE__ */ b(jo, {
          disableEnforceFocus: u,
          disableAutoFocus: c,
          disableRestoreFocus: m,
          isEnabled: Z,
          open: g,
          children: /* @__PURE__ */ E.cloneElement(a, D)
        })]
      }))
    }
  );
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: mo.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Nt, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  })
});
const Oh = ["onChange", "maxRows", "minRows", "style", "value"];
function Po(e) {
  return parseInt(e, 10) || 0;
}
const Ch = {
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
function Ma(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const nl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l
  } = t, c = ge(t, Oh), {
    current: u
  } = E.useRef(l != null), d = E.useRef(null), p = tt(o, d), m = E.useRef(null), y = E.useRef(0), [O, v] = E.useState({
    outerHeightStyle: 0
  }), f = E.useCallback(() => {
    const h = d.current, I = Yt(h).getComputedStyle(h);
    if (I.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const A = m.current;
    A.style.width = I.width, A.value = h.value || t.placeholder || "x", A.value.slice(-1) === `
` && (A.value += " ");
    const z = I.boxSizing, N = Po(I.paddingBottom) + Po(I.paddingTop), _ = Po(I.borderBottomWidth) + Po(I.borderTopWidth), K = A.scrollHeight;
    A.value = "x";
    const W = A.scrollHeight;
    let F = K;
    a && (F = Math.max(Number(a) * W, F)), i && (F = Math.min(Number(i) * W, F)), F = Math.max(F, W);
    const L = F + (z === "border-box" ? N + _ : 0), U = Math.abs(F - K) <= 1;
    return {
      outerHeightStyle: L,
      overflow: U
    };
  }, [i, a, t.placeholder]), R = (h, $) => {
    const {
      outerHeightStyle: I,
      overflow: A
    } = $;
    return y.current < 20 && (I > 0 && Math.abs((h.outerHeightStyle || 0) - I) > 1 || h.overflow !== A) ? (y.current += 1, {
      overflow: A,
      outerHeightStyle: I
    }) : (process.env.NODE_ENV !== "production" && y.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), h);
  }, w = E.useCallback(() => {
    const h = f();
    Ma(h) || v(($) => R($, h));
  }, [f]), C = () => {
    const h = f();
    Ma(h) || gs.flushSync(() => {
      v(($) => R($, h));
    });
  };
  E.useEffect(() => {
    const h = ei(() => {
      y.current = 0, d.current && C();
    });
    let $;
    const I = d.current, A = Yt(I);
    return A.addEventListener("resize", h), typeof ResizeObserver < "u" && ($ = new ResizeObserver(h), $.observe(I)), () => {
      h.clear(), A.removeEventListener("resize", h), $ && $.disconnect();
    };
  }), Ft(() => {
    w();
  }), E.useEffect(() => {
    y.current = 0;
  }, [l]);
  const g = (h) => {
    y.current = 0, u || w(), r && r(h);
  };
  return /* @__PURE__ */ ue(E.Fragment, {
    children: [/* @__PURE__ */ b("textarea", x({
      value: l,
      onChange: g,
      ref: p,
      rows: a,
      style: x({
        height: O.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: O.overflow ? "hidden" : void 0
      }, s)
    }, c)), /* @__PURE__ */ b("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: m,
      tabIndex: -1,
      style: x({}, Ch.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  placeholder: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * @ignore
   */
  value: n.oneOfType([n.arrayOf(n.string), n.number, n.string])
});
function Aa(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function ol(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: o = !0,
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
    o && (d = d.toLowerCase()), t && (d = Aa(d));
    const p = d ? l.filter((m) => {
      let y = (a || u)(m);
      return o && (y = y.toLowerCase()), t && (y = Aa(y)), i === "start" ? y.indexOf(d) === 0 : y.indexOf(d) > -1;
    }) : l;
    return typeof r == "number" ? p.slice(0, r) : p;
  };
}
function Rr(e, t) {
  for (let o = 0; o < e.length; o += 1)
    if (t(e[o]))
      return o;
  return -1;
}
const Rh = ol(), Na = 5, Sh = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function Ph(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Sh,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: o = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? [] : null,
    disableClearable: p = !1,
    disableCloseOnSelect: m = !1,
    disabled: y,
    disabledItemsFocusable: O = !1,
    disableListWrap: v = !1,
    filterOptions: f = Rh,
    filterSelectedOptions: R = !1,
    freeSolo: w = !1,
    getOptionDisabled: C,
    getOptionLabel: g = (S) => {
      var P;
      return (P = S.label) != null ? P : S;
    },
    groupBy: h,
    handleHomeEndKeys: $ = !e.freeSolo,
    id: I,
    includeInputInList: A = !1,
    inputValue: z,
    isOptionEqualToValue: N = (S, P) => S === P,
    multiple: _ = !1,
    onChange: K,
    onClose: W,
    onHighlightChange: F,
    onInputChange: L,
    onOpen: U,
    open: Y,
    openOnFocus: se = !1,
    options: ee,
    readOnly: M = !1,
    selectOnFocus: V = !e.freeSolo,
    value: ne
  } = e, Z = ti(I);
  let H = g;
  H = (S) => {
    const P = g(S);
    if (typeof P != "string") {
      if (process.env.NODE_ENV !== "production") {
        const j = P === void 0 ? "undefined" : `${typeof P} (${P})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${j} instead of a string for ${JSON.stringify(S)}.`);
      }
      return String(P);
    }
    return P;
  };
  const J = E.useRef(!1), Q = E.useRef(!0), G = E.useRef(null), oe = E.useRef(null), [ie, fe] = E.useState(null), [ae, D] = E.useState(-1), he = i ? 0 : -1, k = E.useRef(he), [X, Te] = En({
    controlled: ne,
    default: d,
    name: u
  }), [ce, Ue] = En({
    controlled: z,
    default: "",
    name: u,
    state: "inputValue"
  }), [qe, $e] = E.useState(!1), Ce = E.useCallback((S, P) => {
    if (!(_ ? X.length < P.length : P !== null) && !l)
      return;
    let q;
    if (_)
      q = "";
    else if (P == null)
      q = "";
    else {
      const re = H(P);
      q = typeof re == "string" ? re : "";
    }
    ce !== q && (Ue(q), L && L(S, q, "reset"));
  }, [H, ce, _, L, Ue, l, X]), [Fe, Se] = En({
    controlled: Y,
    default: !1,
    name: u,
    state: "open"
  }), [Ge, Xe] = E.useState(!0), et = !_ && X != null && ce === H(X), Pe = Fe && !M, be = Pe ? f(
    ee.filter((S) => !(R && (_ ? X : [X]).some((P) => P !== null && N(S, P)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: et && Ge ? "" : ce,
      getOptionLabel: H
    }
  ) : [], de = Pu({
    filteredOptions: be,
    value: X,
    inputValue: ce
  });
  E.useEffect(() => {
    const S = X !== de.value;
    qe && !S || w && !S || Ce(null, X);
  }, [X, Ce, qe, de.value, w]);
  const nt = Fe && be.length > 0 && !M;
  if (process.env.NODE_ENV !== "production" && X !== null && !w && ee.length > 0) {
    const S = (_ ? X : [X]).filter((P) => !ee.some((j) => N(j, P)));
    S.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${S.length > 1 ? JSON.stringify(S) : JSON.stringify(S[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const pe = wt((S) => {
    S === -1 ? G.current.focus() : ie.querySelector(`[data-tag-index="${S}"]`).focus();
  });
  E.useEffect(() => {
    _ && ae > X.length - 1 && (D(-1), pe(-1));
  }, [X, _, ae, pe]);
  function ye(S, P) {
    if (!oe.current || S === -1)
      return -1;
    let j = S;
    for (; ; ) {
      if (P === "next" && j === be.length || P === "previous" && j === -1)
        return -1;
      const q = oe.current.querySelector(`[data-option-index="${j}"]`), re = O ? !1 : !q || q.disabled || q.getAttribute("aria-disabled") === "true";
      if (q && !q.hasAttribute("tabindex") || re)
        j += P === "next" ? 1 : -1;
      else
        return j;
    }
  }
  const we = wt(({
    event: S,
    index: P,
    reason: j = "auto"
  }) => {
    if (k.current = P, P === -1 ? G.current.removeAttribute("aria-activedescendant") : G.current.setAttribute("aria-activedescendant", `${Z}-option-${P}`), F && F(S, P === -1 ? null : be[P], j), !oe.current)
      return;
    const q = oe.current.querySelector(`[role="option"].${o}-focused`);
    q && (q.classList.remove(`${o}-focused`), q.classList.remove(`${o}-focusVisible`));
    let re = oe.current;
    if (oe.current.getAttribute("role") !== "listbox" && (re = oe.current.parentElement.querySelector('[role="listbox"]')), !re)
      return;
    if (P === -1) {
      re.scrollTop = 0;
      return;
    }
    const xe = oe.current.querySelector(`[data-option-index="${P}"]`);
    if (xe && (xe.classList.add(`${o}-focused`), j === "keyboard" && xe.classList.add(`${o}-focusVisible`), re.scrollHeight > re.clientHeight && j !== "mouse" && j !== "touch")) {
      const Ee = xe, Re = re.clientHeight + re.scrollTop, rt = Ee.offsetTop + Ee.offsetHeight;
      rt > Re ? re.scrollTop = rt - re.clientHeight : Ee.offsetTop - Ee.offsetHeight * (h ? 1.3 : 0) < re.scrollTop && (re.scrollTop = Ee.offsetTop - Ee.offsetHeight * (h ? 1.3 : 0));
    }
  }), Je = wt(({
    event: S,
    diff: P,
    direction: j = "next",
    reason: q = "auto"
  }) => {
    if (!Pe)
      return;
    const xe = ye((() => {
      const Ee = be.length - 1;
      if (P === "reset")
        return he;
      if (P === "start")
        return 0;
      if (P === "end")
        return Ee;
      const Re = k.current + P;
      return Re < 0 ? Re === -1 && A ? -1 : v && k.current !== -1 || Math.abs(P) > 1 ? 0 : Ee : Re > Ee ? Re === Ee + 1 && A ? -1 : v || Math.abs(P) > 1 ? Ee : 0 : Re;
    })(), j);
    if (we({
      index: xe,
      reason: q,
      event: S
    }), r && P !== "reset")
      if (xe === -1)
        G.current.value = ce;
      else {
        const Ee = H(be[xe]);
        G.current.value = Ee, Ee.toLowerCase().indexOf(ce.toLowerCase()) === 0 && ce.length > 0 && G.current.setSelectionRange(ce.length, Ee.length);
      }
  }), Wt = () => {
    const S = (P, j) => {
      const q = P ? H(P) : "", re = j ? H(j) : "";
      return q === re;
    };
    if (k.current !== -1 && de.filteredOptions && de.filteredOptions.length !== be.length && de.inputValue === ce && (_ ? X.length === de.value.length && de.value.every((P, j) => H(X[j]) === H(P)) : S(de.value, X))) {
      const P = de.filteredOptions[k.current];
      if (P && be.some((q) => H(q) === H(P)))
        return !0;
    }
    return !1;
  }, It = E.useCallback(() => {
    if (!Pe || Wt())
      return;
    const S = _ ? X[0] : X;
    if (be.length === 0 || S == null) {
      Je({
        diff: "reset"
      });
      return;
    }
    if (oe.current) {
      if (S != null) {
        const P = be[k.current];
        if (_ && P && Rr(X, (q) => N(P, q)) !== -1)
          return;
        const j = Rr(be, (q) => N(q, S));
        j === -1 ? Je({
          diff: "reset"
        }) : we({
          index: j
        });
        return;
      }
      if (k.current >= be.length - 1) {
        we({
          index: be.length - 1
        });
        return;
      }
      we({
        index: k.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    be.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    _ ? !1 : X,
    R,
    Je,
    we,
    Pe,
    ce,
    _
  ]), Mn = wt((S) => {
    oo(oe, S), S && It();
  });
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    (!G.current || G.current.nodeName !== "INPUT") && (G.current && G.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${G.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), E.useEffect(() => {
    It();
  }, [It]);
  const Rt = (S) => {
    Fe || (Se(!0), Xe(!0), U && U(S));
  }, lt = (S, P) => {
    Fe && (Se(!1), W && W(S, P));
  }, pt = (S, P, j, q) => {
    if (_) {
      if (X.length === P.length && X.every((re, xe) => re === P[xe]))
        return;
    } else if (X === P)
      return;
    K && K(S, P, j, q), Te(P);
  }, at = E.useRef(!1), St = (S, P, j = "selectOption", q = "options") => {
    let re = j, xe = P;
    if (_) {
      if (xe = Array.isArray(X) ? X.slice() : [], process.env.NODE_ENV !== "production") {
        const Re = xe.filter((rt) => N(P, rt));
        Re.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Re.length} matches.`].join(`
`));
      }
      const Ee = Rr(xe, (Re) => N(P, Re));
      Ee === -1 ? xe.push(P) : q !== "freeSolo" && (xe.splice(Ee, 1), re = "removeOption");
    }
    Ce(S, xe), pt(S, xe, re, {
      option: P
    }), !m && (!S || !S.ctrlKey && !S.metaKey) && lt(S, re), (s === !0 || s === "touch" && at.current || s === "mouse" && !at.current) && G.current.blur();
  };
  function Jt(S, P) {
    if (S === -1)
      return -1;
    let j = S;
    for (; ; ) {
      if (P === "next" && j === X.length || P === "previous" && j === -1)
        return -1;
      const q = ie.querySelector(`[data-tag-index="${j}"]`);
      if (!q || !q.hasAttribute("tabindex") || q.disabled || q.getAttribute("aria-disabled") === "true")
        j += P === "next" ? 1 : -1;
      else
        return j;
    }
  }
  const Vt = (S, P) => {
    if (!_)
      return;
    ce === "" && lt(S, "toggleInput");
    let j = ae;
    ae === -1 ? ce === "" && P === "previous" && (j = X.length - 1) : (j += P === "next" ? 1 : -1, j < 0 && (j = 0), j === X.length && (j = -1)), j = Jt(j, P), D(j), pe(j);
  }, cn = (S) => {
    J.current = !0, Ue(""), L && L(S, "", "clear"), pt(S, _ ? [] : null, "clear");
  }, un = (S) => (P) => {
    if (S.onKeyDown && S.onKeyDown(P), !P.defaultMuiPrevented && (ae !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(P.key) === -1 && (D(-1), pe(-1)), P.which !== 229))
      switch (P.key) {
        case "Home":
          Pe && $ && (P.preventDefault(), Je({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: P
          }));
          break;
        case "End":
          Pe && $ && (P.preventDefault(), Je({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: P
          }));
          break;
        case "PageUp":
          P.preventDefault(), Je({
            diff: -Na,
            direction: "previous",
            reason: "keyboard",
            event: P
          }), Rt(P);
          break;
        case "PageDown":
          P.preventDefault(), Je({
            diff: Na,
            direction: "next",
            reason: "keyboard",
            event: P
          }), Rt(P);
          break;
        case "ArrowDown":
          P.preventDefault(), Je({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: P
          }), Rt(P);
          break;
        case "ArrowUp":
          P.preventDefault(), Je({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: P
          }), Rt(P);
          break;
        case "ArrowLeft":
          Vt(P, "previous");
          break;
        case "ArrowRight":
          Vt(P, "next");
          break;
        case "Enter":
          if (k.current !== -1 && Pe) {
            const j = be[k.current], q = C ? C(j) : !1;
            if (P.preventDefault(), q)
              return;
            St(P, j, "selectOption"), r && G.current.setSelectionRange(G.current.value.length, G.current.value.length);
          } else
            w && ce !== "" && et === !1 && (_ && P.preventDefault(), St(P, ce, "createOption", "freeSolo"));
          break;
        case "Escape":
          Pe ? (P.preventDefault(), P.stopPropagation(), lt(P, "escape")) : c && (ce !== "" || _ && X.length > 0) && (P.preventDefault(), P.stopPropagation(), cn(P));
          break;
        case "Backspace":
          if (_ && !M && ce === "" && X.length > 0) {
            const j = ae === -1 ? X.length - 1 : ae, q = X.slice();
            q.splice(j, 1), pt(P, q, "removeOption", {
              option: X[j]
            });
          }
          break;
        case "Delete":
          if (_ && !M && ce === "" && X.length > 0 && ae !== -1) {
            const j = ae, q = X.slice();
            q.splice(j, 1), pt(P, q, "removeOption", {
              option: X[j]
            });
          }
          break;
      }
  }, An = (S) => {
    $e(!0), se && !J.current && Rt(S);
  }, dn = (S) => {
    if (t(oe)) {
      G.current.focus();
      return;
    }
    $e(!1), Q.current = !0, J.current = !1, a && k.current !== -1 && Pe ? St(S, be[k.current], "blur") : a && w && ce !== "" ? St(S, ce, "blur", "freeSolo") : l && Ce(S, X), lt(S, "blur");
  }, Ut = (S) => {
    const P = S.target.value;
    ce !== P && (Ue(P), Xe(!1), L && L(S, P, "input")), P === "" ? !p && !_ && pt(S, null, "clear") : Rt(S);
  }, ot = (S) => {
    const P = Number(S.currentTarget.getAttribute("data-option-index"));
    k.current !== P && we({
      event: S,
      index: P,
      reason: "mouse"
    });
  }, Ze = (S) => {
    we({
      event: S,
      index: Number(S.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), at.current = !0;
  }, ct = (S) => {
    const P = Number(S.currentTarget.getAttribute("data-option-index"));
    St(S, be[P], "selectOption"), at.current = !1;
  }, To = (S) => (P) => {
    const j = X.slice();
    j.splice(S, 1), pt(P, j, "removeOption", {
      option: X[S]
    });
  }, pn = (S) => {
    Fe ? lt(S, "toggleInput") : Rt(S);
  }, Oo = (S) => {
    S.currentTarget.contains(S.target) && S.target.getAttribute("id") !== Z && S.preventDefault();
  }, Nn = (S) => {
    S.currentTarget.contains(S.target) && (G.current.focus(), V && Q.current && G.current.selectionEnd - G.current.selectionStart === 0 && G.current.select(), Q.current = !1);
  }, T = (S) => {
    (ce === "" || !Fe) && pn(S);
  };
  let B = w && ce.length > 0;
  B = B || (_ ? X.length > 0 : X !== null);
  let te = be;
  if (h) {
    const S = /* @__PURE__ */ new Map();
    let P = !1;
    te = be.reduce((j, q, re) => {
      const xe = h(q);
      return j.length > 0 && j[j.length - 1].group === xe ? j[j.length - 1].options.push(q) : (process.env.NODE_ENV !== "production" && (S.get(xe) && !P && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), P = !0), S.set(xe, !0)), j.push({
        key: re,
        index: re,
        group: xe,
        options: [q]
      })), j;
    }, []);
  }
  return y && qe && dn(), {
    getRootProps: (S = {}) => x({
      "aria-owns": nt ? `${Z}-listbox` : null
    }, S, {
      onKeyDown: un(S),
      onMouseDown: Oo,
      onClick: Nn
    }),
    getInputLabelProps: () => ({
      id: `${Z}-label`,
      htmlFor: Z
    }),
    getInputProps: () => ({
      id: Z,
      value: ce,
      onBlur: dn,
      onFocus: An,
      onChange: Ut,
      onMouseDown: T,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Pe ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": nt ? `${Z}-listbox` : void 0,
      "aria-expanded": nt,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: G,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: y
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: cn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: pn
    }),
    getTagProps: ({
      index: S
    }) => x({
      key: S,
      "data-tag-index": S,
      tabIndex: -1
    }, !M && {
      onDelete: To(S)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${Z}-listbox`,
      "aria-labelledby": `${Z}-label`,
      ref: Mn,
      onMouseDown: (S) => {
        S.preventDefault();
      }
    }),
    getOptionProps: ({
      index: S,
      option: P
    }) => {
      const j = (_ ? X : [X]).some((re) => re != null && N(P, re)), q = C ? C(P) : !1;
      return {
        key: H(P),
        tabIndex: -1,
        role: "option",
        id: `${Z}-option-${S}`,
        onMouseMove: ot,
        onClick: ct,
        onTouchStart: Ze,
        "data-option-index": S,
        "aria-disabled": q,
        "aria-selected": j
      };
    },
    id: Z,
    inputValue: ce,
    value: X,
    dirty: B,
    expanded: Pe && ie,
    popupOpen: Pe,
    focused: qe || ae !== -1,
    anchorEl: ie,
    setAnchorEl: fe,
    focusedTag: ae,
    groupedOptions: te
  };
}
const wh = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], $h = me(el, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), rl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r;
  const i = js(), a = Ve({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: p,
    keepMounted: m,
    modifiers: y,
    open: O,
    placement: v,
    popperOptions: f,
    popperRef: R,
    transition: w,
    slots: C,
    slotProps: g
  } = a, h = ge(a, wh), $ = (r = C == null ? void 0 : C.root) != null ? r : c == null ? void 0 : c.Root, I = x({
    anchorEl: s,
    container: d,
    disablePortal: p,
    keepMounted: m,
    modifiers: y,
    open: O,
    placement: v,
    popperOptions: f,
    popperRef: R,
    transition: w
  }, h);
  return /* @__PURE__ */ b($h, x({
    as: l,
    direction: i == null ? void 0 : i.direction,
    slots: {
      root: $
    },
    slotProps: g ?? u
  }, I, {
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (rl.propTypes = {
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
  anchorEl: n.oneOfType([Nt, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Nt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: $t,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const il = rl;
function Ih(e) {
  return Le("MuiListSubheader", e);
}
Be("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const kh = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Mh = (e) => {
  const {
    classes: t,
    color: o,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", o !== "default" && `color${le(o)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return We(s, Ih, t);
}, Ah = me("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${le(o.color)}`], !o.disableGutters && t.gutters, o.inset && t.inset, !o.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), xi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: a = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = r, d = ge(r, kh), p = x({}, r, {
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), m = Mh(p);
  return /* @__PURE__ */ b(Ah, x({
    as: s,
    className: ve(m.root, i),
    ref: o,
    ownerState: p
  }, d));
});
xi.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (xi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: n.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: n.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Nh = xi;
function _h(e) {
  return Le("MuiPaper", e);
}
Be("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Dh = ["className", "component", "elevation", "square", "variant"], jh = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return We(a, _h, i);
}, Fh = me("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return x({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && x({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Qe("#fff", ya(t.elevation))}, ${Qe("#fff", ya(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), al = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: a = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ge(r, Dh), d = x({}, r, {
    component: a,
    elevation: s,
    square: l,
    variant: c
  }), p = jh(d);
  return process.env.NODE_ENV !== "production" && Gt().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ b(Fh, x({
    as: a,
    ownerState: d,
    className: ve(p.root, i),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: jt(ni, (e) => {
    const {
      elevation: t,
      variant: o
    } = e;
    return t > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
const Ei = al;
function sl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zr(e, t);
}
const _a = {
  disabled: !1
};
var Lh = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]);
const zo = Pt.createContext(null);
var zh = function(t) {
  return t.scrollTop;
}, qn = "unmounted", Qt = "exited", Zt = "entering", xn = "entered", Ur = "exiting", Bt = /* @__PURE__ */ function(e) {
  sl(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = Qt, a.appearStatus = Zt) : c = xn : r.unmountOnExit || r.mountOnEnter ? c = qn : c = Qt, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === qn ? {
      status: Qt
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Zt && s !== xn && (a = Zt) : (s === Zt || s === xn) && (a = Ur);
    }
    this.updateStatus(!1, a);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var i = this.props.timeout, a, s, l;
    return a = s = l = i, i != null && typeof i != "number" && (a = i.exit, s = i.enter, l = i.appear !== void 0 ? i.appear : s), {
      exit: a,
      enter: s,
      appear: l
    };
  }, o.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Zt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Co.findDOMNode(this);
          s && zh(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Qt && this.setState({
        status: qn
      });
  }, o.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Co.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), m = l ? p.appear : p.enter;
    if (!i && !s || _a.disabled) {
      this.safeSetState({
        status: xn
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Zt
    }, function() {
      a.props.onEntering(u, d), a.onTransitionEnd(m, function() {
        a.safeSetState({
          status: xn
        }, function() {
          a.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Co.findDOMNode(this);
    if (!a || _a.disabled) {
      this.safeSetState({
        status: Qt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Ur
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: Qt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, o.setNextCallback = function(i) {
    var a = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(i, a) {
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
  }, o.render = function() {
    var i = this.state.status;
    if (i === qn)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = ge(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Pt.createElement(zo.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : Pt.cloneElement(Pt.Children.only(s), l))
    );
  }, t;
}(Pt.Component);
Bt.contextType = zo;
Bt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, o, r, i, a) {
      var s = e[t];
      return n.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, o, r, i, a);
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
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
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
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
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
    var o = Lh;
    t.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return o.apply(void 0, [t].concat(i));
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
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function yn() {
}
Bt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yn,
  onEntering: yn,
  onEntered: yn,
  onExit: yn,
  onExiting: yn,
  onExited: yn
};
Bt.UNMOUNTED = qn;
Bt.EXITED = Qt;
Bt.ENTERING = Zt;
Bt.ENTERED = xn;
Bt.EXITING = Ur;
const ll = Bt;
function Ti(e, t) {
  var o = function(a) {
    return t && $o(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && ac.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function Bh(e, t) {
  e = e || {}, t = t || {};
  function o(d) {
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
        l[r[c][s]] = o(u);
      }
    l[c] = o(c);
  }
  for (s = 0; s < i.length; s++)
    l[i[s]] = o(i[s]);
  return l;
}
function nn(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Wh(e, t) {
  return Ti(e.children, function(o) {
    return Io(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: nn(o, "appear", e),
      enter: nn(o, "enter", e),
      exit: nn(o, "exit", e)
    });
  });
}
function Vh(e, t, o) {
  var r = Ti(e.children), i = Bh(t, r);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if ($o(s)) {
      var l = a in t, c = a in r, u = t[a], d = $o(u) && !u.props.in;
      c && (!l || d) ? i[a] = Io(s, {
        onExited: o.bind(null, s),
        in: !0,
        exit: nn(s, "exit", e),
        enter: nn(s, "enter", e)
      }) : !c && l && !d ? i[a] = Io(s, {
        in: !1
      }) : c && l && $o(u) && (i[a] = Io(s, {
        onExited: o.bind(null, s),
        in: u.props.in,
        exit: nn(s, "exit", e),
        enter: nn(s, "enter", e)
      }));
    }
  }), i;
}
var Uh = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, qh = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Oi = /* @__PURE__ */ function(e) {
  sl(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(Jp(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, a) {
    var s = a.children, l = a.handleExited, c = a.firstRender;
    return {
      children: c ? Wh(i, l) : Vh(i, s, l),
      firstRender: !1
    };
  }, o.handleExited = function(i, a) {
    var s = Ti(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = x({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = ge(i, ["component", "childFactory"]), c = this.state.contextValue, u = Uh(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ Pt.createElement(zo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Pt.createElement(zo.Provider, {
      value: c
    }, /* @__PURE__ */ Pt.createElement(a, l, u));
  }, t;
}(Pt.Component);
Oi.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
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
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
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
  childFactory: n.func
} : {};
Oi.defaultProps = qh;
const Hh = Oi;
function cl(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, p] = E.useState(!1), m = ve(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, O = ve(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && p(!0), E.useEffect(() => {
    if (!l && c != null) {
      const v = setTimeout(c, u);
      return () => {
        clearTimeout(v);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ b("span", {
    className: m,
    style: y,
    children: /* @__PURE__ */ b("span", {
      className: O
    })
  });
}
process.env.NODE_ENV !== "production" && (cl.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const Yh = Be("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yt = Yh, Kh = ["center", "classes", "className"];
let cr = (e) => e, Da, ja, Fa, La;
const qr = 550, Gh = 80, Xh = Gr(Da || (Da = cr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Jh = Gr(ja || (ja = cr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Qh = Gr(Fa || (Fa = cr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Zh = me("span", {
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
}), eb = me(cl, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(La || (La = cr`
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
`), yt.rippleVisible, Xh, qr, ({
  theme: e
}) => e.transitions.easing.easeInOut, yt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, yt.child, yt.childLeaving, Jh, qr, ({
  theme: e
}) => e.transitions.easing.easeInOut, yt.childPulsate, Qh, ({
  theme: e
}) => e.transitions.easing.easeInOut), ul = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s
  } = r, l = ge(r, Kh), [c, u] = E.useState([]), d = E.useRef(0), p = E.useRef(null);
  E.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const m = E.useRef(!1), y = E.useRef(0), O = E.useRef(null), v = E.useRef(null);
  E.useEffect(() => () => {
    y.current && clearTimeout(y.current);
  }, []);
  const f = E.useCallback((g) => {
    const {
      pulsate: h,
      rippleX: $,
      rippleY: I,
      rippleSize: A,
      cb: z
    } = g;
    u((N) => [...N, /* @__PURE__ */ b(eb, {
      classes: {
        ripple: ve(a.ripple, yt.ripple),
        rippleVisible: ve(a.rippleVisible, yt.rippleVisible),
        ripplePulsate: ve(a.ripplePulsate, yt.ripplePulsate),
        child: ve(a.child, yt.child),
        childLeaving: ve(a.childLeaving, yt.childLeaving),
        childPulsate: ve(a.childPulsate, yt.childPulsate)
      },
      timeout: qr,
      pulsate: h,
      rippleX: $,
      rippleY: I,
      rippleSize: A
    }, d.current)]), d.current += 1, p.current = z;
  }, [a]), R = E.useCallback((g = {}, h = {}, $ = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: A = i || h.pulsate,
      fakeElement: z = !1
      // For test purposes
    } = h;
    if ((g == null ? void 0 : g.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (m.current = !0);
    const N = z ? null : v.current, _ = N ? N.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let K, W, F;
    if (A || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      K = Math.round(_.width / 2), W = Math.round(_.height / 2);
    else {
      const {
        clientX: L,
        clientY: U
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      K = Math.round(L - _.left), W = Math.round(U - _.top);
    }
    if (A)
      F = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), F % 2 === 0 && (F += 1);
    else {
      const L = Math.max(Math.abs((N ? N.clientWidth : 0) - K), K) * 2 + 2, U = Math.max(Math.abs((N ? N.clientHeight : 0) - W), W) * 2 + 2;
      F = Math.sqrt(L ** 2 + U ** 2);
    }
    g != null && g.touches ? O.current === null && (O.current = () => {
      f({
        pulsate: I,
        rippleX: K,
        rippleY: W,
        rippleSize: F,
        cb: $
      });
    }, y.current = setTimeout(() => {
      O.current && (O.current(), O.current = null);
    }, Gh)) : f({
      pulsate: I,
      rippleX: K,
      rippleY: W,
      rippleSize: F,
      cb: $
    });
  }, [i, f]), w = E.useCallback(() => {
    R({}, {
      pulsate: !0
    });
  }, [R]), C = E.useCallback((g, h) => {
    if (clearTimeout(y.current), (g == null ? void 0 : g.type) === "touchend" && O.current) {
      O.current(), O.current = null, y.current = setTimeout(() => {
        C(g, h);
      });
      return;
    }
    O.current = null, u(($) => $.length > 0 ? $.slice(1) : $), p.current = h;
  }, []);
  return E.useImperativeHandle(o, () => ({
    pulsate: w,
    start: R,
    stop: C
  }), [w, R, C]), /* @__PURE__ */ b(Zh, x({
    className: ve(yt.root, a.root, s),
    ref: v
  }, l, {
    children: /* @__PURE__ */ b(Hh, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (ul.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
const tb = ul;
function nb(e) {
  return Le("MuiButtonBase", e);
}
const ob = Be("MuiButtonBase", ["root", "disabled", "focusVisible"]), rb = ob, ib = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], ab = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, s = We({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, nb, i);
  return o && r && (s.root += ` ${r}`), s;
}, sb = me("button", {
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
  [`&.${rb.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), dl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
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
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    LinkComponent: y = "a",
    onBlur: O,
    onClick: v,
    onContextMenu: f,
    onDragLeave: R,
    onFocus: w,
    onFocusVisible: C,
    onKeyDown: g,
    onKeyUp: h,
    onMouseDown: $,
    onMouseLeave: I,
    onMouseUp: A,
    onTouchEnd: z,
    onTouchMove: N,
    onTouchStart: _,
    tabIndex: K = 0,
    TouchRippleProps: W,
    touchRippleRef: F,
    type: L
  } = r, U = ge(r, ib), Y = E.useRef(null), se = E.useRef(null), ee = tt(se, F), {
    isFocusVisibleRef: M,
    onFocus: V,
    onBlur: ne,
    ref: Z
  } = ws(), [H, J] = E.useState(!1);
  u && H && J(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      J(!0), Y.current.focus();
    }
  }), []);
  const [Q, G] = E.useState(!1);
  E.useEffect(() => {
    G(!0);
  }, []);
  const oe = Q && !d && !u;
  E.useEffect(() => {
    H && m && !d && Q && se.current.pulsate();
  }, [d, m, H, Q]);
  function ie(de, nt, pe = p) {
    return wt((ye) => (nt && nt(ye), !pe && se.current && se.current[de](ye), !0));
  }
  const fe = ie("start", $), ae = ie("stop", f), D = ie("stop", R), he = ie("stop", A), k = ie("stop", (de) => {
    H && de.preventDefault(), I && I(de);
  }), X = ie("start", _), Te = ie("stop", z), ce = ie("stop", N), Ue = ie("stop", (de) => {
    ne(de), M.current === !1 && J(!1), O && O(de);
  }, !1), qe = wt((de) => {
    Y.current || (Y.current = de.currentTarget), V(de), M.current === !0 && (J(!0), C && C(de)), w && w(de);
  }), $e = () => {
    const de = Y.current;
    return c && c !== "button" && !(de.tagName === "A" && de.href);
  }, Ce = E.useRef(!1), Fe = wt((de) => {
    m && !Ce.current && H && se.current && de.key === " " && (Ce.current = !0, se.current.stop(de, () => {
      se.current.start(de);
    })), de.target === de.currentTarget && $e() && de.key === " " && de.preventDefault(), g && g(de), de.target === de.currentTarget && $e() && de.key === "Enter" && !u && (de.preventDefault(), v && v(de));
  }), Se = wt((de) => {
    m && de.key === " " && se.current && H && !de.defaultPrevented && (Ce.current = !1, se.current.stop(de, () => {
      se.current.pulsate(de);
    })), h && h(de), v && de.target === de.currentTarget && $e() && de.key === " " && !de.defaultPrevented && v(de);
  });
  let Ge = c;
  Ge === "button" && (U.href || U.to) && (Ge = y);
  const Xe = {};
  Ge === "button" ? (Xe.type = L === void 0 ? "button" : L, Xe.disabled = u) : (!U.href && !U.to && (Xe.role = "button"), u && (Xe["aria-disabled"] = u));
  const et = tt(o, Z, Y);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    oe && !se.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [oe]);
  const Pe = x({}, r, {
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: K,
    focusVisible: H
  }), be = ab(Pe);
  return /* @__PURE__ */ ue(sb, x({
    as: Ge,
    className: ve(be.root, l),
    ownerState: Pe,
    onBlur: Ue,
    onClick: v,
    onContextMenu: ae,
    onFocus: qe,
    onKeyDown: Fe,
    onKeyUp: Se,
    onMouseDown: fe,
    onMouseLeave: k,
    onMouseUp: he,
    onDragLeave: D,
    onTouchEnd: Te,
    onTouchMove: ce,
    onTouchStart: X,
    ref: et,
    tabIndex: u ? -1 : K,
    type: L
  }, Xe, U, {
    children: [s, oe ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ b(tb, x({
        ref: ee,
        center: a
      }, W))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (dl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: $t,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Zr,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
const Bo = dl;
function lb(e) {
  return Le("MuiIconButton", e);
}
const cb = Be("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), ub = cb, db = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], pb = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: a
  } = e, s = {
    root: ["root", o && "disabled", r !== "default" && `color${le(r)}`, i && `edge${le(i)}`, `size${le(a)}`]
  };
  return We(s, lb, t);
}, fb = me(Bo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${le(o.color)}`], o.edge && t[`edge${le(o.edge)}`], t[`size${le(o.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.action.active, e.palette.action.hoverOpacity),
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
  var o;
  const r = (o = (e.vars || e).palette) == null ? void 0 : o[t.color];
  return x({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && x({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": x({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(r.main, e.palette.action.hoverOpacity)
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
    [`&.${ub.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), pl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
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
  } = r, p = ge(r, db), m = x({}, r, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), y = pb(m);
  return /* @__PURE__ */ b(fb, x({
    className: ve(y.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: o,
    ownerState: m
  }, p, {
    children: a
  }));
});
process.env.NODE_ENV !== "production" && (pl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: jt(n.node, (e) => E.Children.toArray(e.children).some((o) => /* @__PURE__ */ E.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const fl = pl;
function mb(e) {
  return Le("MuiSvgIcon", e);
}
Be("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const hb = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], bb = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${le(t)}`, `fontSize${le(o)}`]
  };
  return We(i, mb, r);
}, gb = me("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${le(o.color)}`], t[`fontSize${le(o.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, i, a, s, l, c, u, d, p, m, y, O;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (o = e.transitions) == null || (r = o.create) == null ? void 0 : r.call(o, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((a = e.typography) == null || (s = a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? p : {
      action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
      disabled: (O = (e.vars || e).palette) == null || (O = O.action) == null ? void 0 : O.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ci = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
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
    titleAccess: p,
    viewBox: m = "0 0 24 24"
  } = r, y = ge(r, hb), O = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", v = x({}, r, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: m,
    hasSvgAsChild: O
  }), f = {};
  d || (f.viewBox = m);
  const R = bb(v);
  return /* @__PURE__ */ ue(gb, x({
    as: l,
    className: ve(R.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: o
  }, f, y, O && i.props, {
    ownerState: v,
    children: [O ? i.props.children : i, p ? /* @__PURE__ */ b("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ci.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
Ci.muiName = "SvgIcon";
const za = Ci;
function ur(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ b(za, x({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = za.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(o));
}
const vb = ur(/* @__PURE__ */ b("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function yb(e) {
  return Le("MuiChip", e);
}
const xb = Be("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Ie = xb, Eb = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], Tb = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: i,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, o && "disabled", `size${le(r)}`, `color${le(i)}`, l && "clickable", l && `clickableColor${le(i)}`, s && "deletable", s && `deletableColor${le(i)}`, `${c}${le(i)}`],
    label: ["label", `label${le(r)}`],
    avatar: ["avatar", `avatar${le(r)}`, `avatarColor${le(i)}`],
    icon: ["icon", `icon${le(r)}`, `iconColor${le(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${le(r)}`, `deleteIconColor${le(i)}`, `deleteIcon${le(c)}Color${le(i)}`]
  };
  return We(u, yb, t);
}, Ob = me("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      color: r,
      iconColor: i,
      clickable: a,
      onDelete: s,
      size: l,
      variant: c
    } = o;
    return [{
      [`& .${Ie.avatar}`]: t.avatar
    }, {
      [`& .${Ie.avatar}`]: t[`avatar${le(l)}`]
    }, {
      [`& .${Ie.avatar}`]: t[`avatarColor${le(r)}`]
    }, {
      [`& .${Ie.icon}`]: t.icon
    }, {
      [`& .${Ie.icon}`]: t[`icon${le(l)}`]
    }, {
      [`& .${Ie.icon}`]: t[`iconColor${le(i)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIcon${le(l)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIconColor${le(r)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIcon${le(c)}Color${le(r)}`]
    }, t.root, t[`size${le(l)}`], t[`color${le(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${le(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${le(r)}`], t[c], t[`${c}${le(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return x({
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
    [`&.${Ie.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ie.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : o,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ie.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Ie.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Ie.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Ie.icon}`]: x({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && x({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : o
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Ie.deleteIcon}`]: x({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Qe(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Qe(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : Qe(e.palette[t.color].contrastText, 0.7),
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
    [`&.${Ie.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Ie.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => x({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Ie.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${Ie.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => x({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${Ie.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Ie.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${Ie.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Ie.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Ie.icon}`]: {
    marginLeft: 4
  },
  [`& .${Ie.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Ie.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Ie.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Qe(e.palette[t.color].main, 0.7)}`,
  [`&.${Ie.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Ie.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Qe(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Ie.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Qe(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Cb = me("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${le(r)}`]];
  }
})(({
  ownerState: e
}) => x({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}));
function Ba(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const ml = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
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
    icon: p,
    label: m,
    onClick: y,
    onDelete: O,
    onKeyDown: v,
    onKeyUp: f,
    size: R = "medium",
    variant: w = "filled",
    tabIndex: C,
    skipFocusWhenDisabled: g = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, h = ge(r, Eb), $ = E.useRef(null), I = tt($, o), A = (ee) => {
    ee.stopPropagation(), O && O(ee);
  }, z = (ee) => {
    ee.currentTarget === ee.target && Ba(ee) && ee.preventDefault(), v && v(ee);
  }, N = (ee) => {
    ee.currentTarget === ee.target && (O && Ba(ee) ? O(ee) : ee.key === "Escape" && $.current && $.current.blur()), f && f(ee);
  }, _ = s !== !1 && y ? !0 : s, K = _ || O ? Bo : c || "div", W = x({}, r, {
    component: K,
    disabled: d,
    size: R,
    color: l,
    iconColor: /* @__PURE__ */ E.isValidElement(p) && p.props.color || l,
    onDelete: !!O,
    clickable: _,
    variant: w
  }), F = Tb(W), L = K === Bo ? x({
    component: c || "div",
    focusVisibleClassName: F.focusVisible
  }, O && {
    disableRipple: !0
  }) : {};
  let U = null;
  O && (U = u && /* @__PURE__ */ E.isValidElement(u) ? /* @__PURE__ */ E.cloneElement(u, {
    className: ve(u.props.className, F.deleteIcon),
    onClick: A
  }) : /* @__PURE__ */ b(vb, {
    className: ve(F.deleteIcon),
    onClick: A
  }));
  let Y = null;
  i && /* @__PURE__ */ E.isValidElement(i) && (Y = /* @__PURE__ */ E.cloneElement(i, {
    className: ve(F.avatar, i.props.className)
  }));
  let se = null;
  return p && /* @__PURE__ */ E.isValidElement(p) && (se = /* @__PURE__ */ E.cloneElement(p, {
    className: ve(F.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && Y && se && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ ue(Ob, x({
    as: K,
    className: ve(F.root, a),
    disabled: _ && d ? !0 : void 0,
    onClick: y,
    onKeyDown: z,
    onKeyUp: N,
    ref: I,
    tabIndex: g && d ? -1 : C,
    ownerState: W
  }, L, h, {
    children: [Y || se, /* @__PURE__ */ b(Cb, {
      className: ve(F.label),
      ownerState: W,
      children: m
    }), U]
  }));
});
process.env.NODE_ENV !== "production" && (ml.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Avatar element to display.
   */
  avatar: n.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Ps,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: n.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: n.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * Icon element.
   */
  icon: n.element,
  /**
   * The content of the component.
   */
  label: n.node,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  tabIndex: n.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined"]), n.string])
});
const Rb = ml;
function In({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
const hl = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (hl.displayName = "FormControlContext");
const Ri = hl;
function kn() {
  return E.useContext(Ri);
}
function bl(e) {
  return /* @__PURE__ */ b(Fs, x({}, e, {
    defaultTheme: ar,
    themeId: Ko
  }));
}
process.env.NODE_ENV !== "production" && (bl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function Wa(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Wo(e, t = !1) {
  return e && (Wa(e.value) && e.value !== "" || t && Wa(e.defaultValue) && e.defaultValue !== "");
}
function Sb(e) {
  return e.startAdornment;
}
function Pb(e) {
  return Le("MuiInputBase", e);
}
const wb = Be("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), ft = wb, $b = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], dr = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${le(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, pr = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, Ib = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    error: i,
    endAdornment: a,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: p,
    size: m,
    startAdornment: y,
    type: O
  } = e, v = {
    root: ["root", `color${le(o)}`, r && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", m === "small" && "sizeSmall", d && "multiline", y && "adornedStart", a && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", O === "search" && "inputTypeSearch", d && "inputMultiline", m === "small" && "inputSizeSmall", u && "inputHiddenLabel", y && "inputAdornedStart", a && "inputAdornedEnd", p && "readOnly"]
  };
  return We(v, Pb, t);
}, fr = me("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: dr
})(({
  theme: e,
  ownerState: t
}) => x({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ft.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && x({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), mr = me("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: pr
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light", r = x({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), i = {
    opacity: "0 !important"
  }, a = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  };
  return x({
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
    [`label[data-shrink=false] + .${ft.formControl} &`]: {
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
    [`&.${ft.disabled}`]: {
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
}), kb = /* @__PURE__ */ b(bl, {
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
}), gl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r;
  const i = Ve({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": a,
    autoComplete: s,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: p,
    disabled: m,
    disableInjectingGlobalStyles: y,
    endAdornment: O,
    fullWidth: v = !1,
    id: f,
    inputComponent: R = "input",
    inputProps: w = {},
    inputRef: C,
    maxRows: g,
    minRows: h,
    multiline: $ = !1,
    name: I,
    onBlur: A,
    onChange: z,
    onClick: N,
    onFocus: _,
    onKeyDown: K,
    onKeyUp: W,
    placeholder: F,
    readOnly: L,
    renderSuffix: U,
    rows: Y,
    slotProps: se = {},
    slots: ee = {},
    startAdornment: M,
    type: V = "text",
    value: ne
  } = i, Z = ge(i, $b), H = w.value != null ? w.value : ne, {
    current: J
  } = E.useRef(H != null), Q = E.useRef(), G = E.useCallback((be) => {
    process.env.NODE_ENV !== "production" && be && be.nodeName !== "INPUT" && !be.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), oe = tt(Q, C, w.ref, G), [ie, fe] = E.useState(!1), ae = kn();
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (ae)
      return ae.registerEffect();
  }, [ae]);
  const D = In({
    props: i,
    muiFormControl: ae,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  D.focused = ae ? ae.focused : ie, E.useEffect(() => {
    !ae && m && ie && (fe(!1), A && A());
  }, [ae, m, ie, A]);
  const he = ae && ae.onFilled, k = ae && ae.onEmpty, X = E.useCallback((be) => {
    Wo(be) ? he && he() : k && k();
  }, [he, k]);
  Ft(() => {
    J && X({
      value: H
    });
  }, [H, X, J]);
  const Te = (be) => {
    if (D.disabled) {
      be.stopPropagation();
      return;
    }
    _ && _(be), w.onFocus && w.onFocus(be), ae && ae.onFocus ? ae.onFocus(be) : fe(!0);
  }, ce = (be) => {
    A && A(be), w.onBlur && w.onBlur(be), ae && ae.onBlur ? ae.onBlur(be) : fe(!1);
  }, Ue = (be, ...de) => {
    if (!J) {
      const nt = be.target || Q.current;
      if (nt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Ht(1));
      X({
        value: nt.value
      });
    }
    w.onChange && w.onChange(be, ...de), z && z(be, ...de);
  };
  E.useEffect(() => {
    X(Q.current);
  }, []);
  const qe = (be) => {
    Q.current && be.currentTarget === be.target && Q.current.focus(), N && !D.disabled && N(be);
  };
  let $e = R, Ce = w;
  $ && $e === "input" && (Y ? (process.env.NODE_ENV !== "production" && (h || g) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Ce = x({
    type: void 0,
    minRows: Y,
    maxRows: Y
  }, Ce)) : Ce = x({
    type: void 0,
    maxRows: g,
    minRows: h
  }, Ce), $e = nl);
  const Fe = (be) => {
    X(be.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  E.useEffect(() => {
    ae && ae.setAdornedStart(!!M);
  }, [ae, M]);
  const Se = x({}, i, {
    color: D.color || "primary",
    disabled: D.disabled,
    endAdornment: O,
    error: D.error,
    focused: D.focused,
    formControl: ae,
    fullWidth: v,
    hiddenLabel: D.hiddenLabel,
    multiline: $,
    size: D.size,
    startAdornment: M,
    type: V
  }), Ge = Ib(Se), Xe = ee.root || u.Root || fr, et = se.root || d.root || {}, Pe = ee.input || u.Input || mr;
  return Ce = x({}, Ce, (r = se.input) != null ? r : d.input), /* @__PURE__ */ ue(E.Fragment, {
    children: [!y && kb, /* @__PURE__ */ ue(Xe, x({}, et, !io(Xe) && {
      ownerState: x({}, Se, et.ownerState)
    }, {
      ref: o,
      onClick: qe
    }, Z, {
      className: ve(Ge.root, et.className, c, L && "MuiInputBase-readOnly"),
      children: [M, /* @__PURE__ */ b(Ri.Provider, {
        value: null,
        children: /* @__PURE__ */ b(Pe, x({
          ownerState: Se,
          "aria-invalid": D.error,
          "aria-describedby": a,
          autoComplete: s,
          autoFocus: l,
          defaultValue: p,
          disabled: D.disabled,
          id: f,
          onAnimationStart: Fe,
          name: I,
          placeholder: F,
          readOnly: L,
          required: D.required,
          rows: Y,
          value: H,
          onKeyDown: K,
          onKeyUp: W,
          type: V
        }, Ce, !io(Pe) && {
          as: $e,
          ownerState: x({}, Se, Ce.ownerState)
        }, {
          ref: oe,
          className: ve(Ge.input, Ce.className, L && "MuiInputBase-readOnly"),
          onBlur: ce,
          onChange: Ue,
          onFocus: Te
        }))
      }), O, U ? U(x({}, D, {
        startAdornment: M
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (gl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
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
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Zr,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * @ignore
   */
  renderSuffix: n.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
const Si = gl;
function Mb(e) {
  return Le("MuiInput", e);
}
const Ab = x({}, ft, Be("MuiInput", ["root", "underline", "input"])), qt = Ab;
function Nb(e) {
  return Le("MuiOutlinedInput", e);
}
const _b = x({}, ft, Be("MuiOutlinedInput", ["root", "notchedOutline", "input"])), kt = _b;
function Db(e) {
  return Le("MuiFilledInput", e);
}
const jb = x({}, ft, Be("MuiFilledInput", ["root", "underline", "input"])), mt = jb, Fb = ur(/* @__PURE__ */ b("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), vl = ur(/* @__PURE__ */ b("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function Lb(e) {
  return Le("MuiAutocomplete", e);
}
const zb = Be("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), Oe = zb;
var Va, Ua;
const Bb = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], Wb = ["ref"], Vb = (e) => {
  const {
    classes: t,
    disablePortal: o,
    expanded: r,
    focused: i,
    fullWidth: a,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: d
  } = e, p = {
    root: ["root", r && "expanded", i && "focused", a && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${le(d)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", u && "popupIndicatorOpen"],
    popper: ["popper", o && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return We(p, Lb, t);
}, Ub = me("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      fullWidth: r,
      hasClearIcon: i,
      hasPopupIcon: a,
      inputFocused: s,
      size: l
    } = o;
    return [{
      [`& .${Oe.tag}`]: t.tag
    }, {
      [`& .${Oe.tag}`]: t[`tagSize${le(l)}`]
    }, {
      [`& .${Oe.inputRoot}`]: t.inputRoot
    }, {
      [`& .${Oe.input}`]: t.input
    }, {
      [`& .${Oe.input}`]: s && t.inputFocused
    }, t.root, r && t.fullWidth, a && t.hasPopupIcon, i && t.hasClearIcon];
  }
})(({
  ownerState: e
}) => x({
  [`&.${Oe.focused} .${Oe.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${Oe.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, e.fullWidth && {
  width: "100%"
}, {
  [`& .${Oe.tag}`]: x({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, e.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${Oe.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${Oe.hasPopupIcon}&, .${Oe.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${Oe.hasPopupIcon}.${Oe.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${Oe.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${qt.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${qt.root}.${ft.sizeSmall}`]: {
    [`& .${qt.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${kt.root}`]: {
    padding: 9,
    [`.${Oe.hasPopupIcon}&, .${Oe.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${Oe.hasPopupIcon}.${Oe.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${Oe.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${Oe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${kt.root}.${ft.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Oe.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${mt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Oe.hasPopupIcon}&, .${Oe.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${Oe.hasPopupIcon}.${Oe.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${mt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Oe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${mt.root}.${ft.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${mt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${ft.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${mt.root}.${ft.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${Oe.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${mt.root}.${ft.hiddenLabel}.${ft.sizeSmall}`]: {
    [`& .${Oe.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${Oe.input}`]: x({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), qb = me("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), Hb = me(fl, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Yb = me(fl, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => x({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen)
})(({
  ownerState: e
}) => x({
  padding: 2,
  marginRight: -2
}, e.popupOpen && {
  transform: "rotate(180deg)"
})), Kb = me(il, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Oe.option}`]: t.option
    }, t.popper, o.disablePortal && t.popperDisablePortal];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  zIndex: (e.vars || e).zIndex.modal
}, t.disablePortal && {
  position: "absolute"
})), Gb = me(Ei, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => x({}, e.typography.body1, {
  overflow: "auto"
})), Xb = me("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Jb = me("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Qb = me("div", {
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
  [`& .${Oe.option}`]: {
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
    [`&.${Oe.focused}`]: {
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
    [`&.${Oe.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Oe.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Oe.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), Zb = me(Nh, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), eg = me("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${Oe.option}`]: {
    paddingLeft: 24
  }
}), yl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, a, s;
  const l = Ve({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: c = !1,
    autoHighlight: u = !1,
    autoSelect: d = !1,
    blurOnSelect: p = !1,
    ChipProps: m,
    className: y,
    clearIcon: O = Va || (Va = /* @__PURE__ */ b(Fb, {
      fontSize: "small"
    })),
    clearOnBlur: v = !l.freeSolo,
    clearOnEscape: f = !1,
    clearText: R = "Clear",
    closeText: w = "Close",
    componentsProps: C = {},
    defaultValue: g = l.multiple ? [] : null,
    disableClearable: h = !1,
    disableCloseOnSelect: $ = !1,
    disabled: I = !1,
    disabledItemsFocusable: A = !1,
    disableListWrap: z = !1,
    disablePortal: N = !1,
    filterSelectedOptions: _ = !1,
    forcePopupIcon: K = "auto",
    freeSolo: W = !1,
    fullWidth: F = !1,
    getLimitTagsText: L = (j) => `+${j}`,
    getOptionLabel: U,
    groupBy: Y,
    handleHomeEndKeys: se = !l.freeSolo,
    includeInputInList: ee = !1,
    limitTags: M = -1,
    ListboxComponent: V = "ul",
    ListboxProps: ne,
    loading: Z = !1,
    loadingText: H = "Loading…",
    multiple: J = !1,
    noOptionsText: Q = "No options",
    openOnFocus: G = !1,
    openText: oe = "Open",
    PaperComponent: ie = Ei,
    PopperComponent: fe = il,
    popupIcon: ae = Ua || (Ua = /* @__PURE__ */ b(vl, {})),
    readOnly: D = !1,
    renderGroup: he,
    renderInput: k,
    renderOption: X,
    renderTags: Te,
    selectOnFocus: ce = !l.freeSolo,
    size: Ue = "medium",
    slotProps: qe = {}
  } = l, $e = ge(l, Bb), {
    getRootProps: Ce,
    getInputProps: Fe,
    getInputLabelProps: Se,
    getPopupIndicatorProps: Ge,
    getClearProps: Xe,
    getTagProps: et,
    getListboxProps: Pe,
    getOptionProps: be,
    value: de,
    dirty: nt,
    expanded: pe,
    id: ye,
    popupOpen: we,
    focused: Je,
    focusedTag: Wt,
    anchorEl: It,
    setAnchorEl: Mn,
    inputValue: Rt,
    groupedOptions: lt
  } = Ph(x({}, l, {
    componentName: "Autocomplete"
  })), pt = !h && !I && nt && !D, at = (!W || K === !0) && K !== !1, {
    onMouseDown: St
  } = Fe(), {
    ref: Jt
  } = ne ?? {}, Vt = Pe(), {
    ref: cn
  } = Vt, un = ge(Vt, Wb), An = tt(cn, Jt), Ut = U || ((j) => {
    var q;
    return (q = j.label) != null ? q : j;
  }), ot = x({}, l, {
    disablePortal: N,
    expanded: pe,
    focused: Je,
    fullWidth: F,
    getOptionLabel: Ut,
    hasClearIcon: pt,
    hasPopupIcon: at,
    inputFocused: Wt === -1,
    popupOpen: we,
    size: Ue
  }), Ze = Vb(ot);
  let ct;
  if (J && de.length > 0) {
    const j = (q) => x({
      className: Ze.tag,
      disabled: I
    }, et(q));
    Te ? ct = Te(de, j, ot) : ct = de.map((q, re) => /* @__PURE__ */ b(Rb, x({
      label: Ut(q),
      size: Ue
    }, j({
      index: re
    }), m)));
  }
  if (M > -1 && Array.isArray(ct)) {
    const j = ct.length - M;
    !Je && j > 0 && (ct = ct.splice(0, M), ct.push(/* @__PURE__ */ b("span", {
      className: Ze.tag,
      children: L(j)
    }, ct.length)));
  }
  const pn = he || ((j) => /* @__PURE__ */ ue("li", {
    children: [/* @__PURE__ */ b(Zb, {
      className: Ze.groupLabel,
      ownerState: ot,
      component: "div",
      children: j.group
    }), /* @__PURE__ */ b(eg, {
      className: Ze.groupUl,
      ownerState: ot,
      children: j.children
    })]
  }, j.key)), Nn = X || ((j, q) => /* @__PURE__ */ b("li", x({}, j, {
    children: Ut(q)
  }))), T = (j, q) => {
    const re = be({
      option: j,
      index: q
    });
    return Nn(x({}, re, {
      className: Ze.option
    }), j, {
      selected: re["aria-selected"],
      index: q,
      inputValue: Rt
    }, ot);
  }, B = (r = qe.clearIndicator) != null ? r : C.clearIndicator, te = (i = qe.paper) != null ? i : C.paper, S = (a = qe.popper) != null ? a : C.popper, P = (s = qe.popupIndicator) != null ? s : C.popupIndicator;
  return /* @__PURE__ */ ue(E.Fragment, {
    children: [/* @__PURE__ */ b(Ub, x({
      ref: o,
      className: ve(Ze.root, y),
      ownerState: ot
    }, Ce($e), {
      children: k({
        id: ye,
        disabled: I,
        fullWidth: !0,
        size: Ue === "small" ? "small" : void 0,
        InputLabelProps: Se(),
        InputProps: x({
          ref: Mn,
          className: Ze.inputRoot,
          startAdornment: ct,
          onClick: (j) => {
            j.target === j.currentTarget && St(j);
          }
        }, (pt || at) && {
          endAdornment: /* @__PURE__ */ ue(qb, {
            className: Ze.endAdornment,
            ownerState: ot,
            children: [pt ? /* @__PURE__ */ b(Hb, x({}, Xe(), {
              "aria-label": R,
              title: R,
              ownerState: ot
            }, B, {
              className: ve(Ze.clearIndicator, B == null ? void 0 : B.className),
              children: O
            })) : null, at ? /* @__PURE__ */ b(Yb, x({}, Ge(), {
              disabled: I,
              "aria-label": we ? w : oe,
              title: we ? w : oe,
              ownerState: ot
            }, P, {
              className: ve(Ze.popupIndicator, P == null ? void 0 : P.className),
              children: ae
            })) : null]
          })
        }),
        inputProps: x({
          className: Ze.input,
          disabled: I,
          readOnly: D
        }, Fe())
      })
    })), It ? /* @__PURE__ */ b(Kb, x({
      as: fe,
      disablePortal: N,
      style: {
        width: It ? It.clientWidth : null
      },
      ownerState: ot,
      role: "presentation",
      anchorEl: It,
      open: we
    }, S, {
      className: ve(Ze.popper, S == null ? void 0 : S.className),
      children: /* @__PURE__ */ ue(Gb, x({
        ownerState: ot,
        as: ie
      }, te, {
        className: ve(Ze.paper, te == null ? void 0 : te.className),
        children: [Z && lt.length === 0 ? /* @__PURE__ */ b(Xb, {
          className: Ze.loading,
          ownerState: ot,
          children: H
        }) : null, lt.length === 0 && !W && !Z ? /* @__PURE__ */ b(Jb, {
          className: Ze.noOptions,
          ownerState: ot,
          role: "presentation",
          onMouseDown: (j) => {
            j.preventDefault();
          },
          children: Q
        }) : null, lt.length > 0 ? /* @__PURE__ */ b(Qb, x({
          as: V,
          className: Ze.listbox,
          ownerState: ot
        }, un, ne, {
          ref: An,
          children: lt.map((j, q) => Y ? pn({
            key: j.key,
            group: j.group,
            children: j.options.map((re, xe) => T(re, j.index + xe))
          }) : T(j, q))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (yl.propTypes = {
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
  autoComplete: n.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: n.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: n.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: n.oneOfType([n.oneOf(["mouse", "touch"]), n.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: n.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: n.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: n.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: n.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: n.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: n.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: n.shape({
    clearIndicator: n.object,
    paper: n.object,
    popper: n.object,
    popupIndicator: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: jt(n.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: n.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: n.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: n.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: n.oneOfType([n.oneOf(["auto"]), n.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: n.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: n.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: n.func,
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
  getOptionLabel: n.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: n.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: n.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: n.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: n.bool,
  /**
   * The input value.
   */
  inputValue: n.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: n.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: ni,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: n.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: n.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: n.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: n.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: n.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: n.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: n.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: n.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: n.string,
  /**
   * Array of options.
   */
  options: n.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: n.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: n.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: n.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: n.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: n.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: n.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: n.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: n.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    clearIndicator: n.object,
    paper: n.object,
    popper: n.object,
    popupIndicator: n.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: jt(n.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const tg = yl, ng = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], og = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = We({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, Mb, t);
  return x({}, t, i);
}, rg = me(fr, {
  shouldForwardProp: (e) => zt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...dr(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), x({
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
    [`&.${qt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${qt.error}`]: {
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
    [`&:hover:not(.${qt.disabled}, .${qt.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${qt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), ig = me(mr, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: pr
})({}), Pi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, a, s;
  const l = Ve({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: p = !1,
    inputComponent: m = "input",
    multiline: y = !1,
    slotProps: O,
    slots: v = {},
    type: f = "text"
  } = l, R = ge(l, ng), w = og(l), g = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, h = O ?? d ? xt(O ?? d, g) : g, $ = (r = (i = v.root) != null ? i : u.Root) != null ? r : rg, I = (a = (s = v.input) != null ? s : u.Input) != null ? a : ig;
  return /* @__PURE__ */ b(Si, x({
    slots: {
      root: $,
      input: I
    },
    slotProps: h,
    fullWidth: p,
    inputComponent: m,
    multiline: y,
    ref: o,
    type: f
  }, R, {
    classes: w
  }));
});
process.env.NODE_ENV !== "production" && (Pi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
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
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Pi.muiName = "Input";
const xl = Pi, ag = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], sg = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = We({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, Db, t);
  return x({}, t, i);
}, lg = me(fr, {
  shouldForwardProp: (e) => zt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...dr(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = e.palette.mode === "light", i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", a = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return x({
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
    [`&.${mt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
    },
    [`&.${mt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(o = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : o.main}`,
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
    [`&.${mt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${mt.error}`]: {
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
    [`&:hover:not(.${mt.disabled}, .${mt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${mt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && x({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), cg = me(mr, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: pr
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), wi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, a, s;
  const l = Ve({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: p = "input",
    multiline: m = !1,
    slotProps: y,
    slots: O = {},
    type: v = "text"
  } = l, f = ge(l, ag), R = x({}, l, {
    fullWidth: d,
    inputComponent: p,
    multiline: m,
    type: v
  }), w = sg(l), C = {
    root: {
      ownerState: R
    },
    input: {
      ownerState: R
    }
  }, g = y ?? u ? xt(y ?? u, C) : C, h = (r = (i = O.root) != null ? i : c.Root) != null ? r : lg, $ = (a = (s = O.input) != null ? s : c.Input) != null ? a : cg;
  return /* @__PURE__ */ b(Si, x({
    slots: {
      root: h,
      input: $
    },
    componentsProps: g,
    fullWidth: d,
    inputComponent: p,
    multiline: m,
    ref: o,
    type: v
  }, f, {
    classes: w
  }));
});
process.env.NODE_ENV !== "production" && (wi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
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
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
wi.muiName = "Input";
const El = wi;
var qa;
const ug = ["children", "classes", "className", "label", "notched"], dg = me("fieldset")({
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
}), pg = me("legend")(({
  ownerState: e,
  theme: t
}) => x({
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
}, e.withLabel && x({
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
function Tl(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, i = ge(e, ug), a = o != null && o !== "", s = x({}, e, {
    notched: r,
    withLabel: a
  });
  return /* @__PURE__ */ b(dg, x({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, i, {
    children: /* @__PURE__ */ b(pg, {
      ownerState: s,
      children: a ? /* @__PURE__ */ b("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        qa || (qa = /* @__PURE__ */ b("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The label.
   */
  label: n.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool.isRequired,
  /**
   * @ignore
   */
  style: n.object
});
const fg = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], mg = (e) => {
  const {
    classes: t
  } = e, r = We({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Nb, t);
  return x({}, t, r);
}, hg = me(fr, {
  shouldForwardProp: (e) => zt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: dr
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return x({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${kt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${kt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
      }
    },
    [`&.${kt.focused} .${kt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${kt.error} .${kt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${kt.disabled} .${kt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && x({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), bg = me(Tl, {
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
}), gg = me(mr, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: pr
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), $i = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, a, s, l;
  const c = Ve({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: p = "input",
    label: m,
    multiline: y = !1,
    notched: O,
    slots: v = {},
    type: f = "text"
  } = c, R = ge(c, fg), w = mg(c), C = kn(), g = In({
    props: c,
    muiFormControl: C,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), h = x({}, c, {
    color: g.color || "primary",
    disabled: g.disabled,
    error: g.error,
    focused: g.focused,
    formControl: C,
    fullWidth: d,
    hiddenLabel: g.hiddenLabel,
    multiline: y,
    size: g.size,
    type: f
  }), $ = (r = (i = v.root) != null ? i : u.Root) != null ? r : hg, I = (a = (s = v.input) != null ? s : u.Input) != null ? a : gg;
  return /* @__PURE__ */ b(Si, x({
    slots: {
      root: $,
      input: I
    },
    renderSuffix: (A) => /* @__PURE__ */ b(bg, {
      ownerState: h,
      className: w.notchedOutline,
      label: m != null && m !== "" && g.required ? l || (l = /* @__PURE__ */ ue(E.Fragment, {
        children: [m, " ", "*"]
      })) : m,
      notched: typeof O < "u" ? O : !!(A.startAdornment || A.filled || A.focused)
    }),
    fullWidth: d,
    inputComponent: p,
    multiline: y,
    ref: o,
    type: f
  }, R, {
    classes: x({}, w, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && ($i.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: n.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
$i.muiName = "Input";
const Ol = $i;
function vg(e) {
  return Le("MuiFormLabel", e);
}
const yg = Be("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Qn = yg, xg = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Eg = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${le(o)}`, i && "disabled", a && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return We(c, vg, t);
}, Tg = me("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => x({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => x({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Qn.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Qn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Qn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Og = me("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Qn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Cl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    component: s = "label"
  } = r, l = ge(r, xg), c = kn(), u = In({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = x({}, r, {
    color: u.color || "primary",
    component: s,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = Eg(d);
  return /* @__PURE__ */ ue(Tg, x({
    as: s,
    ownerState: d,
    className: ve(p.root, a),
    ref: o
  }, l, {
    children: [i, u.required && /* @__PURE__ */ ue(Og, {
      ownerState: d,
      "aria-hidden": !0,
      className: p.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Cg = Cl;
function Rg(e) {
  return Le("MuiInputLabel", e);
}
Be("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Sg = ["disableAnimation", "margin", "shrink", "variant", "className"], Pg = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: i,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, u = We({
    root: ["root", o && "formControl", !a && "animated", i && "shrink", r === "small" && "sizeSmall", s],
    asterisk: [l && "asterisk"]
  }, Rg, t);
  return x({}, t, u);
}, wg = me(Cg, {
  shouldForwardProp: (e) => zt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Qn.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, t[o.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
}, t.variant === "filled" && x({
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
}, t.shrink && x({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && x({
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
}))), Rl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    shrink: a,
    className: s
  } = r, l = ge(r, Sg), c = kn();
  let u = a;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = In({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required"]
  }), p = x({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required
  }), m = Pg(p);
  return /* @__PURE__ */ b(wg, x({
    "data-shrink": u,
    ownerState: p,
    ref: o,
    className: ve(m.root, s)
  }, l, {
    classes: m
  }));
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: n.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: n.oneOfType([n.oneOf(["normal", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const $g = Rl;
function Ig(e) {
  return Le("MuiFormControl", e);
}
Be("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const kg = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Mg = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${le(o)}`, r && "fullWidth"]
  };
  return We(i, Ig, t);
}, Ag = me("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => x({}, t.root, t[`margin${le(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => x({
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
})), Sl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
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
    fullWidth: p = !1,
    hiddenLabel: m = !1,
    margin: y = "none",
    required: O = !1,
    size: v = "medium",
    variant: f = "outlined"
  } = r, R = ge(r, kg), w = x({}, r, {
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: m,
    margin: y,
    required: O,
    size: v,
    variant: f
  }), C = Mg(w), [g, h] = E.useState(() => {
    let W = !1;
    return i && E.Children.forEach(i, (F) => {
      if (!ko(F, ["Input", "Select"]))
        return;
      const L = ko(F, ["Select"]) ? F.props.input : F;
      L && Sb(L.props) && (W = !0);
    }), W;
  }), [$, I] = E.useState(() => {
    let W = !1;
    return i && E.Children.forEach(i, (F) => {
      ko(F, ["Input", "Select"]) && (Wo(F.props, !0) || Wo(F.props.inputProps, !0)) && (W = !0);
    }), W;
  }), [A, z] = E.useState(!1);
  c && A && z(!1);
  const N = d !== void 0 && !c ? d : A;
  let _;
  if (process.env.NODE_ENV !== "production") {
    const W = E.useRef(!1);
    _ = () => (W.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), W.current = !0, () => {
      W.current = !1;
    });
  }
  const K = E.useMemo(() => ({
    adornedStart: g,
    setAdornedStart: h,
    color: s,
    disabled: c,
    error: u,
    filled: $,
    focused: N,
    fullWidth: p,
    hiddenLabel: m,
    size: v,
    onBlur: () => {
      z(!1);
    },
    onEmpty: () => {
      I(!1);
    },
    onFilled: () => {
      I(!0);
    },
    onFocus: () => {
      z(!0);
    },
    registerEffect: _,
    required: O,
    variant: f
  }), [g, s, c, u, $, N, p, m, _, O, v, f]);
  return /* @__PURE__ */ b(Ri.Provider, {
    value: K,
    children: /* @__PURE__ */ b(Ag, x({
      as: l,
      ownerState: w,
      className: ve(C.root, a),
      ref: o
    }, R, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (Sl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const Ng = Sl;
function _g(e) {
  return Le("MuiFormHelperText", e);
}
const Dg = Be("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Ha = Dg;
var Ya;
const jg = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Fg = (e) => {
  const {
    classes: t,
    contained: o,
    size: r,
    disabled: i,
    error: a,
    filled: s,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", a && "error", r && `size${le(r)}`, o && "contained", l && "focused", s && "filled", c && "required"]
  };
  return We(u, _g, t);
}, Lg = me("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${le(o.size)}`], o.contained && t.contained, o.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ha.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ha.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Pl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: a,
    component: s = "p"
  } = r, l = ge(r, jg), c = kn(), u = In({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = x({}, r, {
    component: s,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = Fg(d);
  return /* @__PURE__ */ b(Lg, x({
    as: s,
    ownerState: d,
    className: ve(p.root, a),
    ref: o
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ya || (Ya = /* @__PURE__ */ b("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
const zg = Pl;
var Hr = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ka;
function Bg() {
  if (Ka)
    return _e;
  Ka = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function v(f) {
    if (typeof f == "object" && f !== null) {
      var R = f.$$typeof;
      switch (R) {
        case e:
          switch (f = f.type, f) {
            case o:
            case i:
            case r:
            case u:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case s:
                case c:
                case m:
                case p:
                case a:
                  return f;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return _e.ContextConsumer = s, _e.ContextProvider = a, _e.Element = e, _e.ForwardRef = c, _e.Fragment = o, _e.Lazy = m, _e.Memo = p, _e.Portal = t, _e.Profiler = i, _e.StrictMode = r, _e.Suspense = u, _e.SuspenseList = d, _e.isAsyncMode = function() {
    return !1;
  }, _e.isConcurrentMode = function() {
    return !1;
  }, _e.isContextConsumer = function(f) {
    return v(f) === s;
  }, _e.isContextProvider = function(f) {
    return v(f) === a;
  }, _e.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, _e.isForwardRef = function(f) {
    return v(f) === c;
  }, _e.isFragment = function(f) {
    return v(f) === o;
  }, _e.isLazy = function(f) {
    return v(f) === m;
  }, _e.isMemo = function(f) {
    return v(f) === p;
  }, _e.isPortal = function(f) {
    return v(f) === t;
  }, _e.isProfiler = function(f) {
    return v(f) === i;
  }, _e.isStrictMode = function(f) {
    return v(f) === r;
  }, _e.isSuspense = function(f) {
    return v(f) === u;
  }, _e.isSuspenseList = function(f) {
    return v(f) === d;
  }, _e.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === i || f === r || f === u || f === d || f === y || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === O || f.getModuleId !== void 0);
  }, _e.typeOf = v, _e;
}
var De = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function Wg() {
  return Ga || (Ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = !1, v = !1, f = !1, R = !1, w = !1, C;
    C = Symbol.for("react.module.reference");
    function g(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === o || k === i || w || k === r || k === u || k === d || R || k === y || O || v || f || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === p || k.$$typeof === a || k.$$typeof === s || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === C || k.getModuleId !== void 0));
    }
    function h(k) {
      if (typeof k == "object" && k !== null) {
        var X = k.$$typeof;
        switch (X) {
          case e:
            var Te = k.type;
            switch (Te) {
              case o:
              case i:
              case r:
              case u:
              case d:
                return Te;
              default:
                var ce = Te && Te.$$typeof;
                switch (ce) {
                  case l:
                  case s:
                  case c:
                  case m:
                  case p:
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
    var $ = s, I = a, A = e, z = c, N = o, _ = m, K = p, W = t, F = i, L = r, U = u, Y = d, se = !1, ee = !1;
    function M(k) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(k) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(k) {
      return h(k) === s;
    }
    function Z(k) {
      return h(k) === a;
    }
    function H(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function J(k) {
      return h(k) === c;
    }
    function Q(k) {
      return h(k) === o;
    }
    function G(k) {
      return h(k) === m;
    }
    function oe(k) {
      return h(k) === p;
    }
    function ie(k) {
      return h(k) === t;
    }
    function fe(k) {
      return h(k) === i;
    }
    function ae(k) {
      return h(k) === r;
    }
    function D(k) {
      return h(k) === u;
    }
    function he(k) {
      return h(k) === d;
    }
    De.ContextConsumer = $, De.ContextProvider = I, De.Element = A, De.ForwardRef = z, De.Fragment = N, De.Lazy = _, De.Memo = K, De.Portal = W, De.Profiler = F, De.StrictMode = L, De.Suspense = U, De.SuspenseList = Y, De.isAsyncMode = M, De.isConcurrentMode = V, De.isContextConsumer = ne, De.isContextProvider = Z, De.isElement = H, De.isForwardRef = J, De.isFragment = Q, De.isLazy = G, De.isMemo = oe, De.isPortal = ie, De.isProfiler = fe, De.isStrictMode = ae, De.isSuspense = D, De.isSuspenseList = he, De.isValidElementType = g, De.typeOf = h;
  }()), De;
}
process.env.NODE_ENV === "production" ? Hr.exports = Bg() : Hr.exports = Wg();
var Ii = Hr.exports;
const wl = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (wl.displayName = "ListContext");
const Vg = wl;
function Ug(e) {
  return Le("MuiList", e);
}
Be("MuiList", ["root", "padding", "dense", "subheader"]);
const qg = ["children", "className", "component", "dense", "disablePadding", "subheader"], Hg = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return We({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, Ug, t);
}, Yg = me("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => x({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), $l = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ge(r, qg), p = E.useMemo(() => ({
    dense: l
  }), [l]), m = x({}, r, {
    component: s,
    dense: l,
    disablePadding: c
  }), y = Hg(m);
  return /* @__PURE__ */ b(Vg.Provider, {
    value: p,
    children: /* @__PURE__ */ ue(Yg, x({
      as: s,
      className: ve(y.root, a),
      ref: o,
      ownerState: m
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Kg = $l, Gg = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Sr(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function Xa(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function Il(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.indexOf(t.keys.join("")) === 0;
}
function Wn(e, t, o, r, i, a) {
  let s = !1, l = i(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Il(l, a) || c)
      l = i(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const kl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    variant: p = "selectedMenu"
  } = t, m = ge(t, Gg), y = E.useRef(null), O = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Ft(() => {
    i && y.current.focus();
  }, [i]), E.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (C, g) => {
      const h = !y.current.style.width;
      if (C.clientHeight < y.current.clientHeight && h) {
        const $ = `${$s(it(C))}px`;
        y.current.style[g.direction === "rtl" ? "paddingLeft" : "paddingRight"] = $, y.current.style.width = `calc(100% + ${$})`;
      }
      return y.current;
    }
  }), []);
  const v = (C) => {
    const g = y.current, h = C.key, $ = it(g).activeElement;
    if (h === "ArrowDown")
      C.preventDefault(), Wn(g, $, u, c, Sr);
    else if (h === "ArrowUp")
      C.preventDefault(), Wn(g, $, u, c, Xa);
    else if (h === "Home")
      C.preventDefault(), Wn(g, null, u, c, Sr);
    else if (h === "End")
      C.preventDefault(), Wn(g, null, u, c, Xa);
    else if (h.length === 1) {
      const I = O.current, A = h.toLowerCase(), z = performance.now();
      I.keys.length > 0 && (z - I.lastTime > 500 ? (I.keys = [], I.repeating = !0, I.previousKeyMatched = !0) : I.repeating && A !== I.keys[0] && (I.repeating = !1)), I.lastTime = z, I.keys.push(A);
      const N = $ && !I.repeating && Il($, I);
      I.previousKeyMatched && (N || Wn(g, $, !1, c, Sr, I)) ? C.preventDefault() : I.previousKeyMatched = !1;
    }
    d && d(C);
  }, f = tt(y, o);
  let R = -1;
  E.Children.forEach(s, (C, g) => {
    if (!/* @__PURE__ */ E.isValidElement(C)) {
      R === g && (R += 1, R >= s.length && (R = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ii.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (p === "selectedMenu" && C.props.selected || R === -1) && (R = g), R === g && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (R += 1, R >= s.length && (R = -1));
  });
  const w = E.Children.map(s, (C, g) => {
    if (g === R) {
      const h = {};
      return a && (h.autoFocus = !0), C.props.tabIndex === void 0 && p === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ E.cloneElement(C, h);
    }
    return C;
  });
  return /* @__PURE__ */ b(Kg, x({
    role: "menu",
    ref: f,
    className: l,
    onKeyDown: v,
    tabIndex: i ? 0 : -1
  }, m, {
    children: w
  }));
});
process.env.NODE_ENV !== "production" && (kl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const Xg = kl, Ml = (e) => e.scrollTop;
function Vo(e, t) {
  var o, r;
  const {
    timeout: i,
    easing: a,
    style: s = {}
  } = e;
  return {
    duration: (o = s.transitionDuration) != null ? o : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof a == "object" ? a[t.mode] : a,
    delay: s.transitionDelay
  };
}
const Jg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Yr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Qg = {
  entering: {
    opacity: 1,
    transform: Yr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Pr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ki = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: m,
    onExiting: y,
    style: O,
    timeout: v = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: f = ll
  } = t, R = ge(t, Jg), w = E.useRef(), C = E.useRef(), g = Gt(), h = E.useRef(null), $ = tt(h, a.ref, o), I = (L) => (U) => {
    if (L) {
      const Y = h.current;
      U === void 0 ? L(Y) : L(Y, U);
    }
  }, A = I(d), z = I((L, U) => {
    Ml(L);
    const {
      duration: Y,
      delay: se,
      easing: ee
    } = Vo({
      style: O,
      timeout: v,
      easing: s
    }, {
      mode: "enter"
    });
    let M;
    v === "auto" ? (M = g.transitions.getAutoHeightDuration(L.clientHeight), C.current = M) : M = Y, L.style.transition = [g.transitions.create("opacity", {
      duration: M,
      delay: se
    }), g.transitions.create("transform", {
      duration: Pr ? M : M * 0.666,
      delay: se,
      easing: ee
    })].join(","), c && c(L, U);
  }), N = I(u), _ = I(y), K = I((L) => {
    const {
      duration: U,
      delay: Y,
      easing: se
    } = Vo({
      style: O,
      timeout: v,
      easing: s
    }, {
      mode: "exit"
    });
    let ee;
    v === "auto" ? (ee = g.transitions.getAutoHeightDuration(L.clientHeight), C.current = ee) : ee = U, L.style.transition = [g.transitions.create("opacity", {
      duration: ee,
      delay: Y
    }), g.transitions.create("transform", {
      duration: Pr ? ee : ee * 0.666,
      delay: Pr ? Y : Y || ee * 0.333,
      easing: se
    })].join(","), L.style.opacity = 0, L.style.transform = Yr(0.75), p && p(L);
  }), W = I(m), F = (L) => {
    v === "auto" && (w.current = setTimeout(L, C.current || 0)), r && r(h.current, L);
  };
  return E.useEffect(() => () => {
    clearTimeout(w.current);
  }, []), /* @__PURE__ */ b(f, x({
    appear: i,
    in: l,
    nodeRef: h,
    onEnter: z,
    onEntered: N,
    onEntering: A,
    onExit: K,
    onExited: W,
    onExiting: _,
    addEndListener: F,
    timeout: v === "auto" ? null : v
  }, R, {
    children: (L, U) => /* @__PURE__ */ E.cloneElement(a, x({
      style: x({
        opacity: 0,
        transform: Yr(0.75),
        visibility: L === "exited" && !l ? "hidden" : void 0
      }, Qg[L], O, a.props.style),
      ref: $
    }, U))
  }));
});
process.env.NODE_ENV !== "production" && (ki.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: mo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
ki.muiSupportAuto = !0;
const Zg = ki, ev = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], tv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Al = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Gt(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: m,
    onExit: y,
    onExited: O,
    onExiting: v,
    style: f,
    timeout: R = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = ll
  } = t, C = ge(t, ev), g = E.useRef(null), h = tt(g, l.ref, o), $ = (F) => (L) => {
    if (F) {
      const U = g.current;
      L === void 0 ? F(U) : F(U, L);
    }
  }, I = $(m), A = $((F, L) => {
    Ml(F);
    const U = Vo({
      style: f,
      timeout: R,
      easing: c
    }, {
      mode: "enter"
    });
    F.style.webkitTransition = r.transitions.create("opacity", U), F.style.transition = r.transitions.create("opacity", U), d && d(F, L);
  }), z = $(p), N = $(v), _ = $((F) => {
    const L = Vo({
      style: f,
      timeout: R,
      easing: c
    }, {
      mode: "exit"
    });
    F.style.webkitTransition = r.transitions.create("opacity", L), F.style.transition = r.transitions.create("opacity", L), y && y(F);
  }), K = $(O);
  return /* @__PURE__ */ b(w, x({
    appear: s,
    in: u,
    nodeRef: g,
    onEnter: A,
    onEntered: z,
    onEntering: I,
    onExit: _,
    onExited: K,
    onExiting: N,
    addEndListener: (F) => {
      a && a(g.current, F);
    },
    timeout: R
  }, C, {
    children: (F, L) => /* @__PURE__ */ E.cloneElement(l, x({
      style: x({
        opacity: 0,
        visibility: F === "exited" && !u ? "hidden" : void 0
      }, tv[F], f, l.props.style),
      ref: h
    }, L))
  }));
});
process.env.NODE_ENV !== "production" && (Al.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: mo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const nv = Al;
function ov(e) {
  return Le("MuiBackdrop", e);
}
Be("MuiBackdrop", ["root", "invisible"]);
const rv = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], iv = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return We({
    root: ["root", o && "invisible"]
  }, ov, t);
}, av = me("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => x({
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
})), Nl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, a;
  const s = Ve({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: m = !1,
    open: y,
    slotProps: O = {},
    slots: v = {},
    TransitionComponent: f = nv,
    transitionDuration: R
  } = s, w = ge(s, rv), C = x({}, s, {
    component: u,
    invisible: m
  }), g = iv(C), h = (r = O.root) != null ? r : p.root;
  return /* @__PURE__ */ b(f, x({
    in: y,
    timeout: R
  }, w, {
    children: /* @__PURE__ */ b(av, x({
      "aria-hidden": !0
    }, h, {
      as: (i = (a = v.root) != null ? a : d.Root) != null ? i : u,
      className: ve(g.root, c, h == null ? void 0 : h.className),
      ownerState: x({}, C, h == null ? void 0 : h.ownerState),
      classes: g,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
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
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const sv = Nl, lv = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"], cv = me("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), uv = me(sv, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), _l = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, a, s, l, c;
  const u = Ve({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = uv,
    BackdropProps: p,
    classes: m,
    className: y,
    closeAfterTransition: O = !1,
    children: v,
    container: f,
    component: R,
    components: w = {},
    componentsProps: C = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: h = !1,
    disableEscapeKeyDown: $ = !1,
    disablePortal: I = !1,
    disableRestoreFocus: A = !1,
    disableScrollLock: z = !1,
    hideBackdrop: N = !1,
    keepMounted: _ = !1,
    onBackdropClick: K,
    onClose: W,
    open: F,
    slotProps: L,
    slots: U,
    // eslint-disable-next-line react/prop-types
    theme: Y
  } = u, se = ge(u, lv), [ee, M] = E.useState(!0), V = {
    container: f,
    closeAfterTransition: O,
    disableAutoFocus: g,
    disableEnforceFocus: h,
    disableEscapeKeyDown: $,
    disablePortal: I,
    disableRestoreFocus: A,
    disableScrollLock: z,
    hideBackdrop: N,
    keepMounted: _,
    onBackdropClick: K,
    onClose: W,
    open: F
  }, ne = x({}, u, V, {
    exited: ee
  }), Z = (r = (i = U == null ? void 0 : U.root) != null ? i : w.Root) != null ? r : cv, H = (a = (s = U == null ? void 0 : U.backdrop) != null ? s : w.Backdrop) != null ? a : d, J = (l = L == null ? void 0 : L.root) != null ? l : C.root, Q = (c = L == null ? void 0 : L.backdrop) != null ? c : C.backdrop;
  return /* @__PURE__ */ b(tl, x({
    slots: {
      root: Z,
      backdrop: H
    },
    slotProps: {
      root: () => x({}, Br(J, ne), !io(Z) && {
        as: R,
        theme: Y
      }, {
        className: ve(y, J == null ? void 0 : J.className, m == null ? void 0 : m.root, !ne.open && ne.exited && (m == null ? void 0 : m.hidden))
      }),
      backdrop: () => x({}, p, Br(Q, ne), {
        className: ve(Q == null ? void 0 : Q.className, p == null ? void 0 : p.className, m == null ? void 0 : m.backdrop)
      })
    },
    onTransitionEnter: () => M(!1),
    onTransitionExited: () => M(!0),
    ref: o
  }, se, V, {
    children: v
  }));
});
process.env.NODE_ENV !== "production" && (_l.propTypes = {
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
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: mo.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
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
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Nt, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const dv = _l;
function pv(e) {
  return Le("MuiPopover", e);
}
Be("MuiPopover", ["root", "paper"]);
const fv = ["onEntering"], mv = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"], hv = ["slotProps"];
function Ja(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function Qa(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function Za(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ao(e) {
  return typeof e == "function" ? e() : e;
}
const bv = (e) => {
  const {
    classes: t
  } = e;
  return We({
    root: ["root"],
    paper: ["paper"]
  }, pv, t);
}, gv = me(dv, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Dl = me(Ei, {
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
}), jl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, a;
  const s = Ve({
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
    anchorReference: p = "anchorEl",
    children: m,
    className: y,
    container: O,
    elevation: v = 8,
    marginThreshold: f = 16,
    open: R,
    PaperProps: w = {},
    slots: C,
    slotProps: g,
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: $ = Zg,
    transitionDuration: I = "auto",
    TransitionProps: {
      onEntering: A
    } = {}
  } = s, z = ge(s.TransitionProps, fv), N = ge(s, mv), _ = (r = g == null ? void 0 : g.paper) != null ? r : w, K = E.useRef(), W = tt(K, _.ref), F = x({}, s, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: v,
    marginThreshold: f,
    externalPaperSlotProps: _,
    transformOrigin: h,
    TransitionComponent: $,
    transitionDuration: I,
    TransitionProps: z
  }), L = bv(F), U = E.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const D = Ao(c), he = D && D.nodeType === 1 ? D : it(K.current).body, k = he.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const X = he.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && X.top === 0 && X.left === 0 && X.right === 0 && X.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: k.top + Ja(k, u.vertical),
      left: k.left + Qa(k, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, p]), Y = E.useCallback((D) => ({
    vertical: Ja(D, h.vertical),
    horizontal: Qa(D, h.horizontal)
  }), [h.horizontal, h.vertical]), se = E.useCallback((D) => {
    const he = {
      width: D.offsetWidth,
      height: D.offsetHeight
    }, k = Y(he);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Za(k)
      };
    const X = U();
    let Te = X.top - k.vertical, ce = X.left - k.horizontal;
    const Ue = Te + he.height, qe = ce + he.width, $e = Yt(Ao(c)), Ce = $e.innerHeight - f, Fe = $e.innerWidth - f;
    if (Te < f) {
      const Se = Te - f;
      Te -= Se, k.vertical += Se;
    } else if (Ue > Ce) {
      const Se = Ue - Ce;
      Te -= Se, k.vertical += Se;
    }
    if (process.env.NODE_ENV !== "production" && he.height > Ce && he.height && Ce && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${he.height - Ce}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), ce < f) {
      const Se = ce - f;
      ce -= Se, k.horizontal += Se;
    } else if (qe > Fe) {
      const Se = qe - Fe;
      ce -= Se, k.horizontal += Se;
    }
    return {
      top: `${Math.round(Te)}px`,
      left: `${Math.round(ce)}px`,
      transformOrigin: Za(k)
    };
  }, [c, p, U, Y, f]), [ee, M] = E.useState(R), V = E.useCallback(() => {
    const D = K.current;
    if (!D)
      return;
    const he = se(D);
    he.top !== null && (D.style.top = he.top), he.left !== null && (D.style.left = he.left), D.style.transformOrigin = he.transformOrigin, M(!0);
  }, [se]), ne = (D, he) => {
    A && A(D, he), V();
  }, Z = () => {
    M(!1);
  };
  E.useEffect(() => {
    R && V();
  }), E.useImperativeHandle(l, () => R ? {
    updatePosition: () => {
      V();
    }
  } : null, [R, V]), E.useEffect(() => {
    if (!R)
      return;
    const D = ei(() => {
      V();
    }), he = Yt(c);
    return he.addEventListener("resize", D), () => {
      D.clear(), he.removeEventListener("resize", D);
    };
  }, [c, R, V]);
  let H = I;
  I === "auto" && !$.muiSupportAuto && (H = void 0);
  const J = O || (c ? it(Ao(c)).body : void 0), Q = (i = C == null ? void 0 : C.root) != null ? i : gv, G = (a = C == null ? void 0 : C.paper) != null ? a : Dl, oe = sn({
    elementType: G,
    externalSlotProps: x({}, _, {
      style: ee ? _.style : x({}, _.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: v,
      ref: W
    },
    ownerState: F,
    className: ve(L.paper, _ == null ? void 0 : _.className)
  }), ie = sn({
    elementType: Q,
    externalSlotProps: (g == null ? void 0 : g.root) || {},
    externalForwardedProps: N,
    additionalProps: {
      ref: o,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: J,
      open: R
    },
    ownerState: F,
    className: ve(L.root, y)
  }), {
    slotProps: fe
  } = ie, ae = ge(ie, hv);
  return /* @__PURE__ */ b(Q, x({}, ae, !io(Q) && {
    slotProps: fe
  }, {
    children: /* @__PURE__ */ b($, x({
      appear: !0,
      in: R,
      onEntering: ne,
      onExited: Z,
      timeout: H
    }, z, {
      children: /* @__PURE__ */ b(G, x({}, oe, {
        children: m
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (jl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: $t,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: jt(n.oneOfType([Nt, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ao(e.anchorEl);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
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
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Nt, n.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: ni,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: Zr
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
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
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object
});
const vv = jl;
function yv(e) {
  return Le("MuiMenu", e);
}
Be("MuiMenu", ["root", "paper", "list"]);
const xv = ["onEntering"], Ev = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Tv = {
  vertical: "top",
  horizontal: "right"
}, Ov = {
  vertical: "top",
  horizontal: "left"
}, Cv = (e) => {
  const {
    classes: t
  } = e;
  return We({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, yv, t);
}, Rv = me(vv, {
  shouldForwardProp: (e) => zt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Sv = me(Dl, {
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
}), Pv = me(Xg, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Fl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i;
  const a = Ve({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: p,
    open: m,
    PaperProps: y = {},
    PopoverClasses: O,
    transitionDuration: v = "auto",
    TransitionProps: {
      onEntering: f
    } = {},
    variant: R = "selectedMenu",
    slots: w = {},
    slotProps: C = {}
  } = a, g = ge(a.TransitionProps, xv), h = ge(a, Ev), $ = Gt(), I = $.direction === "rtl", A = x({}, a, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: f,
    PaperProps: y,
    transitionDuration: v,
    TransitionProps: g,
    variant: R
  }), z = Cv(A), N = s && !u && m, _ = E.useRef(null), K = (ee, M) => {
    _.current && _.current.adjustStyleForScrollbar(ee, $), f && f(ee, M);
  }, W = (ee) => {
    ee.key === "Tab" && (ee.preventDefault(), p && p(ee, "tabKeyDown"));
  };
  let F = -1;
  E.Children.map(l, (ee, M) => {
    /* @__PURE__ */ E.isValidElement(ee) && (process.env.NODE_ENV !== "production" && Ii.isFragment(ee) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), ee.props.disabled || (R === "selectedMenu" && ee.props.selected || F === -1) && (F = M));
  });
  const L = (r = w.paper) != null ? r : Sv, U = (i = C.paper) != null ? i : y, Y = sn({
    elementType: w.root,
    externalSlotProps: C.root,
    ownerState: A,
    className: [z.root, c]
  }), se = sn({
    elementType: L,
    externalSlotProps: U,
    ownerState: A,
    className: z.paper
  });
  return /* @__PURE__ */ b(Rv, x({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: I ? "right" : "left"
    },
    transformOrigin: I ? Tv : Ov,
    slots: {
      paper: L,
      root: w.root
    },
    slotProps: {
      root: Y,
      paper: se
    },
    open: m,
    ref: o,
    transitionDuration: v,
    TransitionProps: x({
      onEntering: K
    }, g),
    ownerState: A
  }, h, {
    classes: O,
    children: /* @__PURE__ */ b(Pv, x({
      onKeyDown: W,
      actions: _,
      autoFocus: s && (F === -1 || u),
      autoFocusItem: N,
      variant: R
    }, d, {
      className: ve(z.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Fl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([Nt, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const wv = Fl;
function $v(e) {
  return Le("MuiNativeSelect", e);
}
const Iv = Be("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Mi = Iv, kv = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], Mv = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${le(o)}`, a && "iconOpen", r && "disabled"]
  };
  return We(l, $v, t);
}, Ll = ({
  ownerState: e,
  theme: t
}) => x({
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
  "&:focus": x({}, t.vars ? {
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
  [`&.${Mi.disabled}`]: {
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
}), Av = me("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: zt,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${Mi.multiple}`]: t.multiple
    }];
  }
})(Ll), zl = ({
  ownerState: e,
  theme: t
}) => x({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Mi.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), Nv = me("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${le(o.variant)}`], o.open && t.iconOpen];
  }
})(zl), Bl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: i,
    error: a,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ge(t, kv), d = x({}, t, {
    disabled: i,
    variant: c,
    error: a
  }), p = Mv(d);
  return /* @__PURE__ */ ue(E.Fragment, {
    children: [/* @__PURE__ */ b(Av, x({
      ownerState: d,
      className: ve(p.select, r),
      disabled: i,
      ref: l || o
    }, u)), t.multiple ? null : /* @__PURE__ */ b(Nv, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Bl.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: $t,
  /**
   * @ignore
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const _v = Bl;
function Dv(e) {
  return Le("MuiSelect", e);
}
const jv = Be("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Vn = jv;
var es;
const Fv = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Lv = me("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Vn.select}`]: t.select
      },
      {
        [`&.${Vn.select}`]: t[o.variant]
      },
      {
        [`&.${Vn.error}`]: t.error
      },
      {
        [`&.${Vn.multiple}`]: t.multiple
      }
    ];
  }
})(Ll, {
  // Win specificity over the input base
  [`&.${Vn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), zv = me("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${le(o.variant)}`], o.open && t.iconOpen];
  }
})(zl), Bv = me("input", {
  shouldForwardProp: (e) => Dp(e) && e !== "classes",
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
function ts(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Wv(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Vv = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${le(o)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return We(l, Dv, t);
}, Wl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: a,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: p,
    displayEmpty: m,
    error: y = !1,
    IconComponent: O,
    inputRef: v,
    labelId: f,
    MenuProps: R = {},
    multiple: w,
    name: C,
    onBlur: g,
    onChange: h,
    onClose: $,
    onFocus: I,
    onOpen: A,
    open: z,
    readOnly: N,
    renderValue: _,
    SelectDisplayProps: K = {},
    tabIndex: W,
    value: F,
    variant: L = "standard"
  } = t, U = ge(t, Fv), [Y, se] = En({
    controlled: F,
    default: d,
    name: "Select"
  }), [ee, M] = En({
    controlled: z,
    default: u,
    name: "Select"
  }), V = E.useRef(null), ne = E.useRef(null), [Z, H] = E.useState(null), {
    current: J
  } = E.useRef(z != null), [Q, G] = E.useState(), oe = tt(o, v), ie = E.useCallback((pe) => {
    ne.current = pe, pe && H(pe);
  }, []), fe = Z == null ? void 0 : Z.parentNode;
  E.useImperativeHandle(oe, () => ({
    focus: () => {
      ne.current.focus();
    },
    node: V.current,
    value: Y
  }), [Y]), E.useEffect(() => {
    u && ee && Z && !J && (G(s ? null : fe.clientWidth), ne.current.focus());
  }, [Z, s]), E.useEffect(() => {
    a && ne.current.focus();
  }, [a]), E.useEffect(() => {
    if (!f)
      return;
    const pe = it(ne.current).getElementById(f);
    if (pe) {
      const ye = () => {
        getSelection().isCollapsed && ne.current.focus();
      };
      return pe.addEventListener("click", ye), () => {
        pe.removeEventListener("click", ye);
      };
    }
  }, [f]);
  const ae = (pe, ye) => {
    pe ? A && A(ye) : $ && $(ye), J || (G(s ? null : fe.clientWidth), M(pe));
  }, D = (pe) => {
    pe.button === 0 && (pe.preventDefault(), ne.current.focus(), ae(!0, pe));
  }, he = (pe) => {
    ae(!1, pe);
  }, k = E.Children.toArray(l), X = (pe) => {
    const ye = k.find((we) => we.props.value === pe.target.value);
    ye !== void 0 && (se(ye.props.value), h && h(pe, ye));
  }, Te = (pe) => (ye) => {
    let we;
    if (ye.currentTarget.hasAttribute("tabindex")) {
      if (w) {
        we = Array.isArray(Y) ? Y.slice() : [];
        const Je = Y.indexOf(pe.props.value);
        Je === -1 ? we.push(pe.props.value) : we.splice(Je, 1);
      } else
        we = pe.props.value;
      if (pe.props.onClick && pe.props.onClick(ye), Y !== we && (se(we), h)) {
        const Je = ye.nativeEvent || ye, Wt = new Je.constructor(Je.type, Je);
        Object.defineProperty(Wt, "target", {
          writable: !0,
          value: {
            value: we,
            name: C
          }
        }), h(Wt, pe);
      }
      w || ae(!1, ye);
    }
  }, ce = (pe) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(pe.key) !== -1 && (pe.preventDefault(), ae(!0, pe));
  }, Ue = Z !== null && ee, qe = (pe) => {
    !Ue && g && (Object.defineProperty(pe, "target", {
      writable: !0,
      value: {
        value: Y,
        name: C
      }
    }), g(pe));
  };
  delete U["aria-invalid"];
  let $e, Ce;
  const Fe = [];
  let Se = !1, Ge = !1;
  (Wo({
    value: Y
  }) || m) && (_ ? $e = _(Y) : Se = !0);
  const Xe = k.map((pe) => {
    if (!/* @__PURE__ */ E.isValidElement(pe))
      return null;
    process.env.NODE_ENV !== "production" && Ii.isFragment(pe) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let ye;
    if (w) {
      if (!Array.isArray(Y))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Ht(2));
      ye = Y.some((we) => ts(we, pe.props.value)), ye && Se && Fe.push(pe.props.children);
    } else
      ye = ts(Y, pe.props.value), ye && Se && (Ce = pe.props.children);
    return ye && (Ge = !0), /* @__PURE__ */ E.cloneElement(pe, {
      "aria-selected": ye ? "true" : "false",
      onClick: Te(pe),
      onKeyUp: (we) => {
        we.key === " " && we.preventDefault(), pe.props.onKeyUp && pe.props.onKeyUp(we);
      },
      role: "option",
      selected: ye,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": pe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (!Ge && !w && Y !== "") {
      const pe = k.map((ye) => ye.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${Y}\` for the select ${C ? `(name="${C}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${pe.filter((ye) => ye != null).map((ye) => `\`${ye}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ge, k, w, C, Y]), Se && (w ? Fe.length === 0 ? $e = null : $e = Fe.reduce((pe, ye, we) => (pe.push(ye), we < Fe.length - 1 && pe.push(", "), pe), []) : $e = Ce);
  let et = Q;
  !s && J && Z && (et = fe.clientWidth);
  let Pe;
  typeof W < "u" ? Pe = W : Pe = p ? null : 0;
  const be = K.id || (C ? `mui-component-select-${C}` : void 0), de = x({}, t, {
    variant: L,
    value: Y,
    open: Ue,
    error: y
  }), nt = Vv(de);
  return /* @__PURE__ */ ue(E.Fragment, {
    children: [/* @__PURE__ */ b(Lv, x({
      ref: ie,
      tabIndex: Pe,
      role: "button",
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Ue ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [f, be].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: ce,
      onMouseDown: p || N ? null : D,
      onBlur: qe,
      onFocus: I
    }, K, {
      ownerState: de,
      className: ve(K.className, nt.select, c),
      id: be,
      children: Wv($e) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        es || (es = /* @__PURE__ */ b("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : $e
    })), /* @__PURE__ */ b(Bv, x({
      "aria-invalid": y,
      value: Array.isArray(Y) ? Y.join(",") : Y,
      name: C,
      ref: V,
      "aria-hidden": !0,
      onChange: X,
      tabIndex: -1,
      disabled: p,
      className: nt.nativeInput,
      autoFocus: a,
      ownerState: de
    }, U)), /* @__PURE__ */ b(zv, {
      as: O,
      className: nt.icon,
      ownerState: de
    }), /* @__PURE__ */ b(wv, x({
      id: `menu-${C || ""}`,
      anchorEl: fe,
      open: Ue,
      onClose: he,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, R, {
      MenuListProps: x({
        "aria-labelledby": f,
        role: "listbox",
        disableListWrap: !0
      }, R.MenuListProps),
      PaperProps: x({}, R.PaperProps, {
        style: x({
          minWidth: et
        }, R.PaperProps != null ? R.PaperProps.style : null)
      }),
      children: Xe
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Wl.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * @ignore
   */
  "aria-label": n.string,
  /**
   * @ignore
   */
  autoFocus: n.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: $t,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * @ignore
   */
  readOnly: n.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  type: n.any,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const Uv = Wl, qv = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], Hv = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Ai = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => zt(e) && e !== "variant",
  slot: "Root"
}, Yv = me(xl, Ai)(""), Kv = me(Ol, Ai)(""), Gv = me(El, Ai)(""), Ni = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = vl,
    id: p,
    input: m,
    inputProps: y,
    label: O,
    labelId: v,
    MenuProps: f,
    multiple: R = !1,
    native: w = !1,
    onClose: C,
    onOpen: g,
    open: h,
    renderValue: $,
    SelectDisplayProps: I,
    variant: A = "outlined"
  } = r, z = ge(r, qv), N = w ? _v : Uv, _ = kn(), K = In({
    props: r,
    muiFormControl: _,
    states: ["variant", "error"]
  }), W = K.variant || A, F = x({}, r, {
    variant: W,
    classes: s
  }), L = Hv(F), U = m || {
    standard: /* @__PURE__ */ b(Yv, {
      ownerState: F
    }),
    outlined: /* @__PURE__ */ b(Kv, {
      label: O,
      ownerState: F
    }),
    filled: /* @__PURE__ */ b(Gv, {
      ownerState: F
    })
  }[W], Y = tt(o, U.ref);
  return /* @__PURE__ */ b(E.Fragment, {
    children: /* @__PURE__ */ E.cloneElement(U, x({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: x({
        children: a,
        error: K.error,
        IconComponent: d,
        variant: W,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: R
      }, w ? {
        id: p
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: v,
        MenuProps: f,
        onClose: C,
        onOpen: g,
        open: h,
        renderValue: $,
        SelectDisplayProps: x({
          id: p
        }, I)
      }, y, {
        classes: y ? xt(L, y.classes) : L
      }, m ? m.props.inputProps : {})
    }, R && w && W === "outlined" ? {
      notched: !0
    } : {}, {
      ref: Y,
      className: ve(U.props.className, l)
    }, !m && {
      variant: W
    }, z))
  });
});
process.env.NODE_ENV !== "production" && (Ni.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
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
  displayEmpty: n.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: n.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: n.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: n.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: n.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: n.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: n.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: n.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: n.oneOfType([n.oneOf([""]), n.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
Ni.muiName = "Select";
const Xv = Ni;
function Jv(e) {
  return Le("MuiTextField", e);
}
Be("MuiTextField", ["root"]);
const Qv = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], Zv = {
  standard: xl,
  filled: El,
  outlined: Ol
}, ey = (e) => {
  const {
    classes: t
  } = e;
  return We({
    root: ["root"]
  }, Jv, t);
}, ty = me(Ng, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Vl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
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
    error: p = !1,
    FormHelperTextProps: m,
    fullWidth: y = !1,
    helperText: O,
    id: v,
    InputLabelProps: f,
    inputProps: R,
    InputProps: w,
    inputRef: C,
    label: g,
    maxRows: h,
    minRows: $,
    multiline: I = !1,
    name: A,
    onBlur: z,
    onChange: N,
    onClick: _,
    onFocus: K,
    placeholder: W,
    required: F = !1,
    rows: L,
    select: U = !1,
    SelectProps: Y,
    type: se,
    value: ee,
    variant: M = "outlined"
  } = r, V = ge(r, Qv), ne = x({}, r, {
    autoFocus: a,
    color: c,
    disabled: d,
    error: p,
    fullWidth: y,
    multiline: I,
    required: F,
    select: U,
    variant: M
  }), Z = ey(ne);
  process.env.NODE_ENV !== "production" && U && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const H = {};
  M === "outlined" && (f && typeof f.shrink < "u" && (H.notched = f.shrink), H.label = g), U && ((!Y || !Y.native) && (H.id = void 0), H["aria-describedby"] = void 0);
  const J = ti(v), Q = O && J ? `${J}-helper-text` : void 0, G = g && J ? `${J}-label` : void 0, oe = Zv[M], ie = /* @__PURE__ */ b(oe, x({
    "aria-describedby": Q,
    autoComplete: i,
    autoFocus: a,
    defaultValue: u,
    fullWidth: y,
    multiline: I,
    name: A,
    rows: L,
    maxRows: h,
    minRows: $,
    type: se,
    value: ee,
    id: J,
    inputRef: C,
    onBlur: z,
    onChange: N,
    onFocus: K,
    onClick: _,
    placeholder: W,
    inputProps: R
  }, H, w));
  return /* @__PURE__ */ ue(ty, x({
    className: ve(Z.root, l),
    disabled: d,
    error: p,
    fullWidth: y,
    ref: o,
    required: F,
    color: c,
    variant: M,
    ownerState: ne
  }, V, {
    children: [g != null && g !== "" && /* @__PURE__ */ b($g, x({
      htmlFor: J,
      id: G
    }, f, {
      children: g
    })), U ? /* @__PURE__ */ b(Xv, x({
      "aria-describedby": Q,
      id: J,
      labelId: G,
      value: ee,
      input: ie
    }, Y, {
      children: s
    })) : ie, O && /* @__PURE__ */ b(zg, x({
      id: Q
    }, m, {
      children: O
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Vl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: n.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: n.object,
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const ny = Vl, oy = ol(), ry = (e) => {
  const {
    options: t = [],
    labelText: o,
    name: r,
    multiple: i = !1,
    required: a,
    onCreateNew: s,
    renderLabel: l,
    fetchFunction: c
  } = e, { control: u } = po(), [d, p] = bt(t), [m, y] = bt(""), { isLoading: O, refetch: v } = ms(["options"], {
    queryFn: () => c({
      filter: {
        query: m
      }
    }),
    enabled: !1
  });
  rn(() => {
    const g = setTimeout(() => {
      if (m) {
        v().then(({ data: h }) => {
          p(h.data);
        });
        return;
      }
      p([]);
    }, 500);
    return () => clearTimeout(g);
  }, [m, v]);
  const f = (g, h, $) => {
    h && h.inputValue ? s && s(h.inputValue) : (g.target.value = (h == null ? void 0 : h.id) ?? null, $(g));
  }, R = (g) => typeof g == "string" ? g : g.inputValue ? g.inputValue : l ? l(g) : g.name, w = (g, h) => /* @__PURE__ */ b("li", { ...g, children: l ? l(h) : h.name }), C = (g, h) => {
    const $ = oy(g, h), I = String(h.inputValue).trim(), A = $.length === 0;
    return s && I !== "" && (A || !g.find((z) => z.name === I)) && $.push({
      inputValue: I,
      name: `Agregar "${I}"`
    }), $;
  };
  return /* @__PURE__ */ b(uo, { fullWidth: !0, children: /* @__PURE__ */ b(
    fo,
    {
      control: u,
      name: r,
      render: ({ field: { ref: g, onChange: h, value: $, ...I } }) => /* @__PURE__ */ b(
        tg,
        {
          multiple: i,
          value: d.find((A) => A.id === Number($)) ? d.find((A) => A.id === Number($)).name : "",
          onChange: (A, z) => f(A, z, h),
          onKeyDown: (A) => y(A.target.value),
          filterOptions: C,
          options: d,
          selectOnFocus: !0,
          clearOnBlur: !0,
          handleHomeEndKeys: !0,
          getOptionLabel: R,
          renderOption: w,
          freeSolo: !0,
          renderInput: (A) => /* @__PURE__ */ b(
            ny,
            {
              ...A,
              ...I,
              inputRef: g,
              required: a,
              name: r,
              label: o,
              InputProps: {
                ...A.InputProps,
                endAdornment: /* @__PURE__ */ ue(Jr, { children: [
                  O ? /* @__PURE__ */ b(is, { color: "inherit", size: 20 }) : null,
                  A.InputProps.endAdornment
                ] })
              }
            }
          )
        }
      )
    }
  ) });
};
ry.propTypes = {
  options: n.array,
  labelText: n.string,
  name: n.string,
  multiple: n.bool,
  required: n.bool,
  onCreateNew: n.func,
  renderLabel: n.func,
  fetchFunction: n.func
};
const iy = (e, t) => {
  if (!e)
    return !1;
  const o = e.permissions;
  for (let r in t)
    if (!o[r] || o[r] === !1)
      return !1;
  return !0;
}, ay = ({ user: e, has: t, ...o }) => iy(e, t) ? /* @__PURE__ */ b(yc, { ...o }) : null;
ay.propTypes = {
  has: n.object,
  user: n.object
};
var _i = {}, Ul = { exports: {} };
(function(e) {
  function t(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ul);
var yo = Ul.exports, wr = {};
const sy = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Ms.configure(e);
  }
}, ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: le,
  createChainedFunction: jr,
  createSvgIcon: ur,
  debounce: ei,
  deprecatedPropType: gu,
  isMuiElement: ko,
  ownerDocument: it,
  ownerWindow: Yt,
  requirePropFactory: Ss,
  setRef: oo,
  unstable_ClassNameGenerator: sy,
  unstable_useEnhancedEffect: Ft,
  unstable_useId: ti,
  unsupportedProp: Ps,
  useControlled: En,
  useEventCallback: wt,
  useForkRef: tt,
  useIsFocusVisible: ws
}, Symbol.toStringTag, { value: "Module" })), cy = /* @__PURE__ */ vs(ly);
var ns;
function xo() {
  return ns || (ns = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = cy;
  }(wr)), wr;
}
const Eo = /* @__PURE__ */ vs(Jc);
var uy = yo;
Object.defineProperty(_i, "__esModule", {
  value: !0
});
var ql = _i.default = void 0, dy = uy(xo()), py = Eo, fy = (0, dy.default)(/* @__PURE__ */ (0, py.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
ql = _i.default = fy;
function my(e) {
  return Le("MuiButton", e);
}
const hy = Be("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), wo = hy, Hl = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Hl.displayName = "ButtonGroupContext");
const by = Hl, gy = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], vy = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: i,
    variant: a,
    classes: s
  } = e, l = {
    root: ["root", a, `${a}${le(t)}`, `size${le(i)}`, `${a}Size${le(i)}`, t === "inherit" && "colorInherit", o && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${le(i)}`],
    endIcon: ["endIcon", `iconSize${le(i)}`]
  }, c = We(l, my, s);
  return x({}, s, c);
}, Yl = (e) => x({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), yy = me(Bo, {
  shouldForwardProp: (e) => zt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${le(o.color)}`], t[`size${le(o.size)}`], t[`${o.variant}Size${le(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], a = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return x({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": x({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : a,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${wo.focusVisible}`]: x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${wo.disabled}`]: x({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Qe(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (o = (r = e.palette).getContrastText) == null ? void 0 : o.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${wo.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${wo.disabled}`]: {
    boxShadow: "none"
  }
}), xy = me("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, t[`iconSize${le(o.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Yl(e))), Ey = me("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, t[`iconSize${le(o.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Yl(e))), Kl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = E.useContext(by), i = oi(r, t), a = Ve({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: d = !1,
    disableElevation: p = !1,
    disableFocusRipple: m = !1,
    endIcon: y,
    focusVisibleClassName: O,
    fullWidth: v = !1,
    size: f = "medium",
    startIcon: R,
    type: w,
    variant: C = "text"
  } = a, g = ge(a, gy), h = x({}, a, {
    color: l,
    component: c,
    disabled: d,
    disableElevation: p,
    disableFocusRipple: m,
    fullWidth: v,
    size: f,
    type: w,
    variant: C
  }), $ = vy(h), I = R && /* @__PURE__ */ b(xy, {
    className: $.startIcon,
    ownerState: h,
    children: R
  }), A = y && /* @__PURE__ */ b(Ey, {
    className: $.endIcon,
    ownerState: h,
    children: y
  });
  return /* @__PURE__ */ ue(yy, x({
    ownerState: h,
    className: ve(r.className, $.root, u),
    component: c,
    disabled: d,
    focusRipple: !m,
    focusVisibleClassName: ve($.focusVisible, O),
    ref: o,
    type: w
  }, g, {
    classes: $,
    children: [I, s, A]
  }));
});
process.env.NODE_ENV !== "production" && (Kl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
const os = Kl;
var Di = {}, Ty = yo;
Object.defineProperty(Di, "__esModule", {
  value: !0
});
var Gl = Di.default = void 0, Oy = Ty(xo()), Cy = Eo, Ry = (0, Oy.default)(/* @__PURE__ */ (0, Cy.jsx)("path", {
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), "FilterList");
Gl = Di.default = Ry;
const Sy = ({ children: e, open: t, onClose: o, onAccept: r, onCancel: i }) => {
  const a = Gt(), s = Ir(), [l, c] = bt(!1);
  rn(() => {
    function d(p) {
      var m;
      s.current && !s.current.contains(p.target) && !((m = document.querySelector('div[role="presentation"]')) != null && m.contains(p.target)) && o();
    }
    return t && document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, [s, t]), rn(() => {
    t && c(!0);
  }, [t]);
  const u = () => {
    o();
  };
  return /* @__PURE__ */ b(
    ze,
    {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: a.zIndex.drawer + 1,
      width: "100vw",
      height: "100vh",
      pt: 2,
      pb: 2,
      sx: {
        transitionProperty: "background-color",
        transitionDuration: "0.5s"
      },
      backgroundColor: t ? "rgba(0,0,0,0.5)" : "transparent",
      display: t || l ? "flex" : "none",
      onTransitionEnd: () => {
        t || c(!1);
      },
      onClick: u,
      children: /* @__PURE__ */ b(xc, { in: t, direction: "right", children: /* @__PURE__ */ ue(
        qo,
        {
          onClick: (d) => d.stopPropagation(),
          ref: s,
          sx: {
            maxWidth: { xs: "100%", sm: "60%", lg: "30%" },
            minWidth: "300px",
            height: "100vh",
            p: 2,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            borderBottomRightRadius: "12px",
            borderTopRightRadius: "12px",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          children: [
            /* @__PURE__ */ ue(ze, { direction: "row", alignItems: "center", mb: 1, children: [
              /* @__PURE__ */ b(Gl, { color: "primary" }),
              /* @__PURE__ */ b(st, { variant: "h2", color: "primary", fontWeight: "bold", ml: 1, children: "Filtrar" })
            ] }),
            /* @__PURE__ */ b(
              Cn,
              {
                onClick: u,
                sx: { position: "absolute", top: 2, right: 2 },
                children: /* @__PURE__ */ b(ql, {})
              }
            ),
            /* @__PURE__ */ b(ze, { my: 2, children: e }),
            /* @__PURE__ */ ue(
              ze,
              {
                direction: "row",
                justifyContent: "end",
                alignItems: "center",
                mt: "auto",
                children: [
                  /* @__PURE__ */ b(
                    os,
                    {
                      onClick: i,
                      variant: "outlined",
                      sx: { mr: 1 },
                      disabled: !t,
                      children: "Restablecer"
                    }
                  ),
                  /* @__PURE__ */ b(os, { onClick: r, disabled: !t, children: "Aplicar" })
                ]
              }
            )
          ]
        }
      ) })
    }
  );
};
Sy.propTypes = {
  open: n.bool.isRequired,
  onAccept: n.func,
  onClose: n.func.isRequired,
  onCancel: n.func,
  children: n.node
};
function b0() {
  const [e, t] = hs();
  return {
    tab: Number(e.get("tab")) || 1,
    onChangeTab: (i, a) => {
      t({ tab: a });
    }
  };
}
const Xl = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (Xl.displayName = "GridContext");
const rs = Xl;
function Py(e) {
  return Le("MuiGrid", e);
}
const wy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], $y = ["column-reverse", "column", "row-reverse", "row"], Iy = ["nowrap", "wrap-reverse", "wrap"], Un = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], co = Be("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...wy.map((e) => `spacing-xs-${e}`),
  // direction values
  ...$y.map((e) => `direction-xs-${e}`),
  // wrap values
  ...Iy.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Un.map((e) => `grid-xs-${e}`),
  ...Un.map((e) => `grid-sm-${e}`),
  ...Un.map((e) => `grid-md-${e}`),
  ...Un.map((e) => `grid-lg-${e}`),
  ...Un.map((e) => `grid-xl-${e}`)
]), ky = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function On(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function My({
  theme: e,
  ownerState: t
}) {
  let o;
  return e.breakpoints.keys.reduce((r, i) => {
    let a = {};
    if (t[i] && (o = t[i]), !o)
      return r;
    if (o === !0)
      a = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (o === "auto")
      a = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const s = Go({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), l = typeof s == "object" ? s[i] : s;
      if (l == null)
        return r;
      const c = `${Math.round(o / l * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const d = e.spacing(t.columnSpacing);
        if (d !== "0px") {
          const p = `calc(${c} + ${On(d)})`;
          u = {
            flexBasis: p,
            maxWidth: p
          };
        }
      }
      a = x({
        flexBasis: c,
        flexGrow: 0,
        maxWidth: c
      }, u);
    }
    return e.breakpoints.values[i] === 0 ? Object.assign(r, a) : r[e.breakpoints.up(i)] = a, r;
  }, {});
}
function Ay({
  theme: e,
  ownerState: t
}) {
  const o = Go({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return Tt({
    theme: e
  }, o, (r) => {
    const i = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (i[`& > .${co.item}`] = {
      maxWidth: "none"
    }), i;
  });
}
function Jl({
  breakpoints: e,
  values: t
}) {
  let o = "";
  Object.keys(t).forEach((i) => {
    o === "" && t[i] !== 0 && (o = i);
  });
  const r = Object.keys(e).sort((i, a) => e[i] - e[a]);
  return r.slice(0, r.indexOf(o));
}
function Ny({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    rowSpacing: r
  } = t;
  let i = {};
  if (o && r !== 0) {
    const a = Go({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let s;
    typeof a == "object" && (s = Jl({
      breakpoints: e.breakpoints.values,
      values: a
    })), i = Tt({
      theme: e
    }, a, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        marginTop: `-${On(d)}`,
        [`& > .${co.item}`]: {
          paddingTop: On(d)
        }
      } : (u = s) != null && u.includes(c) ? {} : {
        marginTop: 0,
        [`& > .${co.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return i;
}
function _y({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    columnSpacing: r
  } = t;
  let i = {};
  if (o && r !== 0) {
    const a = Go({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let s;
    typeof a == "object" && (s = Jl({
      breakpoints: e.breakpoints.values,
      values: a
    })), i = Tt({
      theme: e
    }, a, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        width: `calc(100% + ${On(d)})`,
        marginLeft: `-${On(d)}`,
        [`& > .${co.item}`]: {
          paddingLeft: On(d)
        }
      } : (u = s) != null && u.includes(c) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${co.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return i;
}
function Dy(e, t, o = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [o[`spacing-xs-${String(e)}`]];
  const r = [];
  return t.forEach((i) => {
    const a = e[i];
    Number(a) > 0 && r.push(o[`spacing-${i}-${String(a)}`]);
  }), r;
}
const jy = me("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      container: r,
      direction: i,
      item: a,
      spacing: s,
      wrap: l,
      zeroMinWidth: c,
      breakpoints: u
    } = o;
    let d = [];
    r && (d = Dy(s, u, t));
    const p = [];
    return u.forEach((m) => {
      const y = o[m];
      y && p.push(t[`grid-${m}-${String(y)}`]);
    }), [t.root, r && t.container, a && t.item, c && t.zeroMinWidth, ...d, i !== "row" && t[`direction-xs-${String(i)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...p];
  }
})(({
  ownerState: e
}) => x({
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
}), Ay, Ny, _y, My);
function Fy(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const o = [];
  return t.forEach((r) => {
    const i = e[r];
    if (Number(i) > 0) {
      const a = `spacing-${r}-${String(i)}`;
      o.push(a);
    }
  }), o;
}
const Ly = (e) => {
  const {
    classes: t,
    container: o,
    direction: r,
    item: i,
    spacing: a,
    wrap: s,
    zeroMinWidth: l,
    breakpoints: c
  } = e;
  let u = [];
  o && (u = Fy(a, c));
  const d = [];
  c.forEach((m) => {
    const y = e[m];
    y && d.push(`grid-${m}-${String(y)}`);
  });
  const p = {
    root: ["root", o && "container", i && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, s !== "wrap" && `wrap-xs-${String(s)}`, ...d]
  };
  return We(p, Py, t);
}, Zn = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: i
  } = Gt(), a = jd(r), {
    className: s,
    columns: l,
    columnSpacing: c,
    component: u = "div",
    container: d = !1,
    direction: p = "row",
    item: m = !1,
    rowSpacing: y,
    spacing: O = 0,
    wrap: v = "wrap",
    zeroMinWidth: f = !1
  } = a, R = ge(a, ky), w = y || O, C = c || O, g = E.useContext(rs), h = d ? l || 12 : g, $ = {}, I = x({}, R);
  i.keys.forEach((N) => {
    R[N] != null && ($[N] = R[N], delete I[N]);
  });
  const A = x({}, a, {
    columns: h,
    container: d,
    direction: p,
    item: m,
    rowSpacing: w,
    columnSpacing: C,
    wrap: v,
    zeroMinWidth: f,
    spacing: O
  }, $, {
    breakpoints: i.keys
  }), z = Ly(A);
  return /* @__PURE__ */ b(rs.Provider, {
    value: h,
    children: /* @__PURE__ */ b(jy, x({
      ownerState: A,
      className: ve(z.root, s),
      as: u,
      ref: o
    }, I))
  });
});
process.env.NODE_ENV !== "production" && (Zn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: n.oneOfType([n.arrayOf(n.number), n.number, n.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: n.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: n.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: n.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: n.bool
});
if (process.env.NODE_ENV !== "production") {
  const e = Ss("Grid", Zn);
  Zn["propTypes"] = x({}, Zn.propTypes, {
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
const $r = Zn, zy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAABBCAYAAABLqZGRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYtSURBVHgB7Zzxdds2EMa/9PX/egRsEG9geIJ4gzAT1J3AygR2JzA7gd0JpEzgZAIhE8QbuLqQbGSZAHEkIYLU93vvnmwIPEI4HHAACAKEEEIIIYQQQgghhBBCCCGE6HmHZXFWi9n7+xC39+lAcsXgtS0PcXufDhlS7uRloPzYyXYn653c7qRAVSEpkEq+3slDfc8+5d0vq/Hcx0bouYeeAvHltAE9LyNIUw9Sl6udXKG9EadA7lOgqsMt+re7da3jChlQYhzDtIn80ALjYGt9Y5fxKnC/mOvvoaNQlM0G9LwklHVdzhSOJTpvUDnCmGW+QwaUSGsYkSf0H6mk8m8Tlu3cc1+r0HGPeAqFXhvQ83IE2aJq+GPxJ8Z3okaukQEljmMYqcRz6BBHekpcLuO5t1XqWSOuJy8UOm1Az8sRZYvhYfsN0paxwAT8hmmQhraGzqEeoHdALc8YB4t4h5obBlWn1tcW4kgrpGUsO6qYypkEaWgPiGtwYgCL9IxpBGlsS3WoPp0h6vwrpOfknEkw6I5vJc8K82TpDhXbGTY8YMFM7UyCTERDBrnBvFmyQxnEL7gUSLdFkgW/oz+bljRpMH0WFgr4lzMtdGx28m0nX+v/P2D6fYfGoS4xUQiSEKlbi/b2sM8H6HA7+bf+lDozyLxjHeJMl550cQ6p4FvE98bvPekW8b2Z28knvDWqQR6beDk41Bf4Q2Yp3wX61ZVcswl837SJWP7C287VYmZRSon45ccuzhW6th4ddwodFul+k1Xo6BJZCWs6mWKE3weFjnt0Y6DfIvmBcMd5pdC1GkGHxQSknDNJmPUYmddniPeIY4PuMCMXcp9DOVRO/rfimq7w3iKeEv57ZE3qBYgvkfl8FWUx7n1yYQ6LEivowtGQM2k6RYeZktqZhswNNAsZXzE/5PfdIl/EdprRKeQwsbb8hhmT2plMZL7nAdcKDiQFsWG6YDzpvqMwbTjMmNTOdBGZz7WkLX1kmgNOkdfnMCdjx5TOZBA/52mrxNg4OzcDfMZyRkpNmE5nQjpuFHnbFhAM4viOvHCo9pIcTgvnSTeI4xnH238Tx7doP6fVfKcmhTM1Z44KxTWblrTYHi3H3sxhGQ41xmpjbhHGR/w6VSz7boft7Ak9D7IOeQKiOPhfKl4q7go6I5R42+g0oYE8phKam2l0jYlD5VBiGIN5oqk7N1CHQVVXoe+HYlA9CCAjoDxlsYE+lJWBQiKp8vDLIc4Us5sew+eWNIN4pnKWGBzm7VBWkbct3Nas5BmkryOLqjziSKUnz2Wdp22kbJ4jRdv1Uz81XmL4Sl7uOMw35PuoyNvW+HKzo6k/XSCPfNcr5JzSmRzaRyUhdkl9LjjMz6EK6EaKTUtaLs4kI4rZyR/1/2ZPzjx5DzF76WcdOn5SYpyHObtki7ChUr/rwSc+rEJHEdBj0P9VVjagN1bHPeIwynKuPXo0DyqPKfagHCvE26us081BeqfNh8yZ+uIQ7qW7HpqcMw75z6GaE7RGcc0/nvTYlbzUPKKq++Zs2/5e4CZOxc/jPb4FiE3bBZIhZY9xh+4JqU1chpCMUaYC3RjoRygb0Ber4x5hLPqNnMajL9WrvPrW1QrddVkGfpNBoB6PMTLJ0qP0XOJILiL/GHsbueMwzQjVtiFpUI0g5+i3WVnCv4h0Crb8n7GdqdnFltUQWSp9rP/WrOVbRd4yIo9FniGVQxVudI0WY3KFcU8dO/gXkTSOJO2kq40YTHToL5YhzvQOadDsmH+KyFdi4S/ymJD9ucchmnmv2LHLmQpk7kw5vJ3okFgjfAeZEnGkMvD9BeJoopnZk5szaXbMj/UsF3mLHBpcdeQxiGMxdszNmXiGKX9kRLqOyHcSp2v3mWKfKcQYD1aSNEgoJnObx4i8J2nH3JzJKPJyZDoOzbsg7hA/tzGIZzF2zM2Z5nq6dolsUO30a5yoYanhukNVF7K9IB3Mq7LPNczjSt54uPqz2RuUzw2GhV+xneIcV/JkziiPFD3tpUn4W6baKyIkR2wtJfydhYw60qmHRmSD14dgm4cTCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQvvwH3JUyEJ4OZkcAAAAASUVORK5CYII=", By = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAYCAYAAAAs7gcTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgBjZM9S8RAEIZ3dmOpXiV2BmwtBEs9TCs2B55gpf4Er1Cw0k70BMU/oKWgYPwFriA2FsbC6pqAoOI1ObkD0WzGnVyy7H34MRDYyTxM3pl3A6wrFoq7JY5iRTiicioroV3jdrJY3FsF5BECNpRSV0vegdsXLk9X14RQ8vxmXVKOiG4cx/cLxf2SgUveQYFAZyD2T+VmqN+5g6Pvs1m9AIgX5ZnqFiWOE8dr8UDr8FxuRzqf1M/F7Py4OzYyxU6OJGs1P4jbLk/vNjgAD/026OnnijpT1ZubYNXjZaMXOERas8pzklCwB3p7aZgzzcMRIdSavAyObDis1fNjQPPwdHpMtVJc2vDdTa0tASAwqwPO846yX+cka2L2TCu04cf7p3wTTAkhDfwluC+U8jLdYZde6ctKZGBKIEE3K17bevU8Zo6Ou2HrzjtrB2UvDCxY8nZcgnO9egvh2e1G0APHjhMoJTxqWn/+DFMFSfJgf9LApBsTSB1svg6luoEzvy/cLmKHg2Txj7C+JkFmPUWQXdn+cDpMZj0yvGZd0bO63Hpg4P8JpyDCcP57/QqT9VpCgf03rCE74hsC1ceDqXwTjQAAAABJRU5ErkJggg==", Wy = ({ sx: e }) => /* @__PURE__ */ ue(ze, { direction: "column", alignItems: "center", sx: { ...e }, children: [
  /* @__PURE__ */ b("img", { src: zy, alt: "Logo Panda", style: { marginBottom: "-16px" } }),
  /* @__PURE__ */ b(
    st,
    {
      variant: "caption",
      color: "text.secondary",
      align: "center",
      sx: {
        p: 1,
        width: "100%",
        backgroundColor: "#fff"
      },
      children: /* @__PURE__ */ ue(
        Ec,
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
            /* @__PURE__ */ b(
              "img",
              {
                src: By,
                alt: "Logo de Crystal Desarrollo",
                style: { marginLeft: "8px" }
              }
            )
          ]
        }
      )
    }
  )
] });
function g0() {
  return /* @__PURE__ */ b(Kr, { theme: pi, children: /* @__PURE__ */ ue($r, { container: !0, height: "100dvh", sx: {}, children: [
    /* @__PURE__ */ b(
      $r,
      {
        item: !0,
        xs: 8,
        sx: { overflow: "hidden", display: { xs: "none", lg: "flex" } },
        children: /* @__PURE__ */ b(
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
    /* @__PURE__ */ ue(
      $r,
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
          /* @__PURE__ */ b(ze, { display: { xs: "flex", lg: "none" }, children: /* @__PURE__ */ b(
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
          /* @__PURE__ */ b(
            qo,
            {
              elevation: 0,
              sx: { width: "100%", maxWidth: "400px", p: 4, borderRadius: 2 },
              children: /* @__PURE__ */ b(bs, {})
            }
          ),
          /* @__PURE__ */ b(Wy, { sx: { position: "absolute", bottom: "0" } })
        ]
      }
    )
  ] }) });
}
const Hn = ({ icon: e, text: t, url: o, onClick: r }) => /* @__PURE__ */ b(
  Ar,
  {
    onClick: r,
    to: o ?? "",
    style: {
      textDecoration: "none",
      color: "rgb(0 0 0 / 80%)"
    },
    children: /* @__PURE__ */ ue(Tc, { children: [
      /* @__PURE__ */ b(Oc, { children: e }),
      /* @__PURE__ */ b(Cc, { primary: t })
    ] })
  }
);
Hn.propTypes = {
  icon: n.node.isRequired,
  text: n.string.isRequired,
  url: n.string,
  onClick: n.func
};
const Ql = ({ user: e, logout: t, onToggleDrawer: o, open: r }) => {
  const i = Uc(), a = Rc((s) => s.breakpoints.down("md"));
  return rn(() => {
    r && a && o(!1);
  }, [i, a, o, r]), a ? /* @__PURE__ */ ue(ec, { open: r, onToggleDrawer: o, children: [
    /* @__PURE__ */ b(no, {}),
    /* @__PURE__ */ b(Uo, { user: e, logout: t })
  ] }) : /* @__PURE__ */ ue(Zl, { variant: "permanent", open: r, children: [
    /* @__PURE__ */ b(no, {}),
    /* @__PURE__ */ b(Uo, { user: e, logout: t })
  ] });
};
Ql.propTypes = {
  onToggleDrawer: n.func.isRequired,
  open: n.bool.isRequired,
  user: n.object.isRequired,
  logout: n.func.isRequired
};
const Zl = me(ds, {
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
Zl.propTypes = {
  open: n.bool.isRequired
};
const ec = ({ onToggleDrawer: e, open: t }) => /* @__PURE__ */ ue(
  ds,
  {
    variant: "temporary",
    anchor: "left",
    open: t,
    onClose: () => e(!1),
    sx: (o) => ({
      ".MuiDrawer-paper": {
        width: "50%",
        [o.breakpoints.down("sm")]: {
          width: "100%"
        }
      },
      [o.breakpoints.up("md")]: {
        display: "none"
      }
    }),
    children: [
      /* @__PURE__ */ b(no, {}),
      /* @__PURE__ */ b(Uo, {})
    ]
  }
), Uo = ({ user: e, logout: t }) => {
  var o;
  return /* @__PURE__ */ ue(
    Sc,
    {
      component: "nav",
      sx: { height: "100%", display: "flex", flexDirection: "column" },
      children: [
        /* @__PURE__ */ b(
          Hn,
          {
            text: "Inicio",
            icon: /* @__PURE__ */ b(_c, {}),
            url: "",
            permissionsRequired: {
              "nav.dashboard": !0
            }
          }
        ),
        /* @__PURE__ */ b(
          Hn,
          {
            text: "Clientes",
            icon: /* @__PURE__ */ b(Dc, {}),
            url: "/customers",
            permissionsRequired: {
              "nav.customers": !0
            }
          }
        ),
        /* @__PURE__ */ b(
          Hn,
          {
            text: "Contabilidad",
            icon: /* @__PURE__ */ b(jc, {}),
            url: "/cash-flow",
            permissionsRequired: {
              "nav.cash_flow": !0
            }
          }
        ),
        /* @__PURE__ */ b(Ho, { sx: { my: 2 } }),
        /* @__PURE__ */ b(ze, { direction: "column", children: /* @__PURE__ */ b(
          Hn,
          {
            text: "Configuración",
            icon: /* @__PURE__ */ b(Fc, {}),
            url: "/settings",
            permissionsRequired: {
              "nav.settings": !0
            }
          }
        ) }),
        /* @__PURE__ */ ue(
          ze,
          {
            display: { sm: "none", xs: "flex" },
            direction: "column",
            alignItems: "start",
            p: 1,
            mt: "auto",
            children: [
              /* @__PURE__ */ ue(
                ze,
                {
                  width: "100%",
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1,
                  sx: { overflow: "hidden" },
                  children: [
                    /* @__PURE__ */ ue(ze, { direction: "row", alignItems: "center", children: [
                      /* @__PURE__ */ b(Do, { name: e == null ? void 0 : e.name, size: 50, sx: { mr: 2 } }),
                      /* @__PURE__ */ ue(ze, { direction: "column", children: [
                        /* @__PURE__ */ b(st, { fontSize: 16, fontWeight: "bold", children: e == null ? void 0 : e.name }),
                        /* @__PURE__ */ b(st, { fontSize: 14, children: (o = e == null ? void 0 : e.email) == null ? void 0 : o.toLowerCase() })
                      ] })
                    ] }),
                    /* @__PURE__ */ ue(ze, { direction: "row", alignItems: "center", children: [
                      /* @__PURE__ */ b(Cn, { color: "primary", children: /* @__PURE__ */ b(Lc, {}) }),
                      /* @__PURE__ */ b(Cn, { color: "primary", onClick: t, children: /* @__PURE__ */ b(fs, {}) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ ue(
                ze,
                {
                  px: "25%",
                  width: "100%",
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  children: [
                    /* @__PURE__ */ b(Ar, { to: "/profile", children: "Mi perfil" }),
                    /* @__PURE__ */ b(Ar, { to: "/configuración", children: "Configuración" })
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
ec.propTypes = {
  onToggleDrawer: n.func.isRequired,
  open: n.bool.isRequired
};
Uo.propTypes = {
  user: n.object,
  logout: n.func
};
var ji = {}, Vy = yo;
Object.defineProperty(ji, "__esModule", {
  value: !0
});
var tc = ji.default = void 0, Uy = Vy(xo()), qy = Eo, Hy = (0, Uy.default)(/* @__PURE__ */ (0, qy.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
tc = ji.default = Hy;
var Fi = {}, Yy = yo;
Object.defineProperty(Fi, "__esModule", {
  value: !0
});
var nc = Fi.default = void 0, Ky = Yy(xo()), Gy = Eo, Xy = (0, Ky.default)(/* @__PURE__ */ (0, Gy.jsx)("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
}), "Settings");
nc = Fi.default = Xy;
var Li = {}, Jy = yo;
Object.defineProperty(Li, "__esModule", {
  value: !0
});
var oc = Li.default = void 0, Qy = Jy(xo()), Zy = Eo, e0 = (0, Qy.default)(/* @__PURE__ */ (0, Zy.jsx)("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
}), "Notifications");
oc = Li.default = e0;
const t0 = me(Pc, {
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
})), No = ({ Icon: e, text: t, onClick: o }) => /* @__PURE__ */ ue(
  Ic,
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
    onClick: o,
    children: [
      /* @__PURE__ */ b(e, { fontSize: "small", sx: { mr: 1 }, color: "primary" }),
      t
    ]
  }
);
No.propTypes = {
  Icon: n.elementType.isRequired,
  onClick: n.func.isRequired,
  text: n.string.isRequired
};
const rc = ({ user: e, logout: t, onToggleDrawer: o, open: r }) => {
  const i = qc(), a = Ir(), s = Ir(), [l, c] = bt(!1), [u, d] = bt(!1);
  rn(() => {
    function O(v) {
      s.current && !s.current.contains(v.target) && c(!1);
    }
    return s && document.addEventListener("mousedown", O), () => {
      document.removeEventListener("mousedown", O);
    };
  }, [s, l]);
  const p = () => {
    c(!1), d(!0);
  }, m = () => {
    c(!1), i("/profile");
  }, y = () => {
    c(!1), i("/settings");
  };
  return /* @__PURE__ */ ue(Jr, { children: [
    /* @__PURE__ */ b(
      Ws,
      {
        open: u,
        title: "Cerrar sesión",
        onCancel: () => d(!1),
        onConfirm: t,
        description: "¿Está seguro que desea cerrar sesión?"
      }
    ),
    /* @__PURE__ */ b(
      wc,
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
        children: ({ TransitionProps: O }) => {
          var v;
          return /* @__PURE__ */ b(
            $c,
            {
              ...O,
              style: {
                transformOrigin: "right top",
                position: "absolute",
                right: -100,
                top: 5,
                minWidth: 250
              },
              children: /* @__PURE__ */ b(
                ze,
                {
                  direction: "column",
                  alignItems: "flex-start",
                  gap: 2,
                  mt: 1,
                  width: "100%",
                  children: /* @__PURE__ */ ue(qo, { sx: { width: "100%" }, children: [
                    /* @__PURE__ */ ue(
                      ze,
                      {
                        direction: "row",
                        alignItems: "center",
                        p: 1,
                        sx: { maxWidth: "95%", overflow: "hidden" },
                        children: [
                          /* @__PURE__ */ b(Do, { size: 30, sx: { mr: 1 } }),
                          /* @__PURE__ */ ue(ze, { direction: "column", children: [
                            /* @__PURE__ */ b(st, { fontSize: 14, fontWeight: "bold", children: e == null ? void 0 : e.name }),
                            /* @__PURE__ */ b(st, { fontSize: 12, children: (v = e == null ? void 0 : e.email) == null ? void 0 : v.toLowerCase() })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ ue(ze, { direction: "column", justifyContent: "flex-start", children: [
                      /* @__PURE__ */ b(
                        No,
                        {
                          Icon: tc,
                          text: "Mi perfil",
                          onClick: m
                        }
                      ),
                      /* @__PURE__ */ b(
                        No,
                        {
                          Icon: nc,
                          text: "Configuración",
                          onClick: y
                        }
                      )
                    ] }),
                    /* @__PURE__ */ b(Ho, { light: !0 }),
                    /* @__PURE__ */ b(ze, { direction: "row", justifyContent: "flex-start", children: /* @__PURE__ */ b(
                      No,
                      {
                        Icon: fs,
                        text: "Cerrar sesión",
                        onClick: p
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
    /* @__PURE__ */ b(t0, { position: "absolute", open: r, children: /* @__PURE__ */ ue(no, { sx: { position: "relative" }, children: [
      /* @__PURE__ */ b(
        Cn,
        {
          edge: "start",
          color: "inherit",
          "aria-label": "Abrir menu",
          onClick: o,
          sx: { mr: 1 },
          children: /* @__PURE__ */ b(zc, {})
        }
      ),
      window.tenant_data.logo_horizontal ? /* @__PURE__ */ b(
        "img",
        {
          src: window.tenant_data.logo_horizontal,
          alt: "Logo",
          style: { maxWidth: 200, maxHeight: 52 }
        }
      ) : /* @__PURE__ */ b(st, { children: window.tenant_data.name }),
      /* @__PURE__ */ ue(
        ze,
        {
          display: { xs: "none", sm: "flex" },
          direction: "row",
          alignItems: "center",
          ml: "auto",
          ref: a,
          children: [
            /* @__PURE__ */ b(Cn, { sx: { mr: 1, color: "#fff" }, children: /* @__PURE__ */ b(oc, {}) }),
            /* @__PURE__ */ b(
              Do,
              {
                name: e == null ? void 0 : e.name,
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
rc.propTypes = {
  user: n.object.isRequired,
  logout: n.func.isRequired,
  onToggleDrawer: n.func.isRequired,
  open: n.bool.isRequired
};
function n0({ logout: e, user: t }) {
  const [o, r] = bt(!1), i = () => r(!o);
  return /* @__PURE__ */ ue(kr, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ b(
      rc,
      {
        logout: e,
        user: t,
        open: o,
        onToggleDrawer: i
      }
    ),
    /* @__PURE__ */ b(
      Ql,
      {
        user: t,
        logout: e,
        open: o,
        onToggleDrawer: i
      }
    ),
    /* @__PURE__ */ ue(
      kr,
      {
        component: "main",
        sx: {
          backgroundColor: (a) => a.palette.mode === "light" ? a.palette.grey[100] : a.palette.grey[900],
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        },
        children: [
          /* @__PURE__ */ b(no, {}),
          /* @__PURE__ */ b(
            kc,
            {
              maxWidth: "lg",
              sx: {
                mt: 4,
                mb: 4,
                height: "calc(100vh - 64px)"
              },
              children: /* @__PURE__ */ b(sc, { fallback: /* @__PURE__ */ b($n, {}), children: /* @__PURE__ */ b(bs, {}) })
            }
          )
        ]
      }
    )
  ] });
}
n0.propTypes = {
  logout: n.func.isRequired,
  user: n.object.isRequired
};
const v0 = (e, t) => {
  var i;
  const o = (i = e.response) == null ? void 0 : i.data;
  return o ? typeof o == "string" ? o : (o.errors ? Object.values(o.errors)[0][0] : o.message ?? null) || t || "Lo sentimos, ha ocurrido un error." : e;
}, tn = Yc.create({
  baseURL: "/api"
});
tn.interceptors.request.use((e) => (e.headers.Authorization = `Bearer ${localStorage.getItem("app-token")}`, e));
tn.interceptors.response.use(
  (e) => e,
  (e) => {
    if (e.response.status === 401) {
      window.location = "/login";
      return;
    }
    throw e;
  }
);
class o0 {
  login(t) {
    return tn.post("/login", t);
  }
  me() {
    return tn.get("/me");
  }
  async logout() {
    return await tn.delete("/logout");
  }
  async resetPasswordEmail(t) {
    return await tn.post("/recover-password", t);
  }
  async resetPassword(t) {
    return await tn.post("/reset-password", t);
  }
}
const y0 = new o0();
export {
  ry as AsyncAutocomplete,
  y0 as AuthApi,
  n0 as AuthenticatedLayout,
  Do as Avatar,
  Ff as BackendTableContent,
  Bs as Box,
  jf as Checkbox,
  Ws as ConfirmDialog,
  Df as DateTime,
  Wp as ErrorDialog,
  g0 as GuestLayout,
  $n as Loader,
  ui as Modal,
  Vp as Money,
  Up as PageHeader,
  ay as PermissionTab,
  Vs as Select,
  Sy as SidePanel,
  zp as Switch,
  Lp as TabPanel,
  Yp as TableContent,
  di as TableHeader,
  Bp as TextField,
  tn as axiosInstance,
  Hp as genericDescendingComparator,
  iy as hasPermissions,
  v0 as parseBackendErrors,
  gt as sortOrderEnum,
  pi as theme,
  b0 as useTabs
};
