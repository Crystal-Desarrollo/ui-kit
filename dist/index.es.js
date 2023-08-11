import * as b from "react";
import Ot, { useId as Od, useState as Yt, useEffect as Ta, Children as Sd, isValidElement as io, cloneElement as so } from "react";
import { CircularProgress as nc, Paper as wd, Modal as Td, Box as Cd, IconButton as Rd, Typography as sn, Divider as rc, Stack as an, Button as Ca, Avatar as Pd, TableHead as $d, TableRow as Nr, TableCell as Mr, TableSortLabel as Id, FormControl as jr, FormControlLabel as oc, Switch as Nd, TextField as Md, InputLabel as kd, Select as _d, MenuItem as Ad, createTheme as Dd, ThemeProvider as ac, TableContainer as ic, Table as sc, TableBody as lc, TablePagination as cc, Checkbox as Fd } from "@mui/material";
import { Global as Ld, ThemeContext as jd, keyframes as oi } from "@emotion/react";
import { Close as Wd, Report as uc } from "@mui/icons-material";
import { Controller as Wr } from "react-hook-form";
import Bd from "@emotion/styled";
import * as dc from "react-dom";
import Jr from "react-dom";
function fc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ud(e) {
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
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Ra = { exports: {} }, dr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs;
function Vd() {
  if (rs)
    return dr;
  rs = 1;
  var e = Ot, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, f = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (d in c)
      r.call(c, d) && !i.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: p, ref: h, props: f, _owner: a.current };
  }
  return dr.Fragment = n, dr.jsx = s, dr.jsxs = s, dr;
}
var fr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function zd() {
  return os || (os = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ot, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), E = Symbol.iterator, v = "@@iterator";
    function m(S) {
      if (S === null || typeof S != "object")
        return null;
      var V = E && S[E] || S[v];
      return typeof V == "function" ? V : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(S) {
      {
        for (var V = arguments.length, te = new Array(V > 1 ? V - 1 : 0), I = 1; I < V; I++)
          te[I - 1] = arguments[I];
        x("error", S, te);
      }
    }
    function x(S, V, te) {
      {
        var I = O.ReactDebugCurrentFrame, N = I.getStackAddendum();
        N !== "" && (V += "%s", te = te.concat([N]));
        var W = te.map(function(Y) {
          return String(Y);
        });
        W.unshift("Warning: " + V), Function.prototype.apply.call(console[S], console, W);
      }
    }
    var g = !1, y = !1, C = !1, R = !1, $ = !1, F;
    F = Symbol.for("react.module.reference");
    function k(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === i || $ || S === a || S === u || S === d || R || S === h || g || y || C || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === f || S.$$typeof === s || S.$$typeof === l || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === F || S.getModuleId !== void 0));
    }
    function _(S, V, te) {
      var I = S.displayName;
      if (I)
        return I;
      var N = V.displayName || V.name || "";
      return N !== "" ? te + "(" + N + ")" : te;
    }
    function z(S) {
      return S.displayName || "Context";
    }
    function U(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
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
            return z(V) + ".Consumer";
          case s:
            var te = S;
            return z(te._context) + ".Provider";
          case c:
            return _(S, S.render, "ForwardRef");
          case f:
            var I = S.displayName || null;
            return I !== null ? I : U(S.type) || "Memo";
          case p: {
            var N = S, W = N._payload, Y = N._init;
            try {
              return U(Y(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, D = 0, B, q, se, ee, A, H, ne;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function K() {
      {
        if (D === 0) {
          B = console.log, q = console.info, se = console.warn, ee = console.error, A = console.group, H = console.groupCollapsed, ne = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: Z,
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
    function X() {
      {
        if (D--, D === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, S, {
              value: B
            }),
            info: L({}, S, {
              value: q
            }),
            warn: L({}, S, {
              value: se
            }),
            error: L({}, S, {
              value: ee
            }),
            group: L({}, S, {
              value: A
            }),
            groupCollapsed: L({}, S, {
              value: H
            }),
            groupEnd: L({}, S, {
              value: ne
            })
          });
        }
        D < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, G;
    function re(S, V, te) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (N) {
            var I = N.stack.trim().match(/\n( *(at )?)/);
            G = I && I[1] || "";
          }
        return `
` + G + S;
      }
    }
    var ae = !1, de;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      de = new ie();
    }
    function j(S, V) {
      if (!S || ae)
        return "";
      {
        var te = de.get(S);
        if (te !== void 0)
          return te;
      }
      var I;
      ae = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = J.current, J.current = null, K();
      try {
        if (V) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (qt) {
              I = qt;
            }
            Reflect.construct(S, [], Y);
          } else {
            try {
              Y.call();
            } catch (qt) {
              I = qt;
            }
            S.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qt) {
            I = qt;
          }
          S();
        }
      } catch (qt) {
        if (qt && I && typeof qt.stack == "string") {
          for (var oe = qt.stack.split(`
`), be = I.stack.split(`
`), Ee = oe.length - 1, Ce = be.length - 1; Ee >= 1 && Ce >= 0 && oe[Ee] !== be[Ce]; )
            Ce--;
          for (; Ee >= 1 && Ce >= 0; Ee--, Ce--)
            if (oe[Ee] !== be[Ce]) {
              if (Ee !== 1 || Ce !== 1)
                do
                  if (Ee--, Ce--, Ce < 0 || oe[Ee] !== be[Ce]) {
                    var lt = `
` + oe[Ee].replace(" at new ", " at ");
                    return S.displayName && lt.includes("<anonymous>") && (lt = lt.replace("<anonymous>", S.displayName)), typeof S == "function" && de.set(S, lt), lt;
                  }
                while (Ee >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        ae = !1, J.current = W, X(), Error.prepareStackTrace = N;
      }
      var _n = S ? S.displayName || S.name : "", ns = _n ? re(_n) : "";
      return typeof S == "function" && de.set(S, ns), ns;
    }
    function pe(S, V, te) {
      return j(S, !1);
    }
    function M(S) {
      var V = S.prototype;
      return !!(V && V.isReactComponent);
    }
    function Q(S, V, te) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return j(S, M(S));
      if (typeof S == "string")
        return re(S);
      switch (S) {
        case u:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return pe(S.render);
          case f:
            return Q(S.type, V, te);
          case p: {
            var I = S, N = I._payload, W = I._init;
            try {
              return Q(W(N), V, te);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, le = {}, Ue = O.ReactDebugCurrentFrame;
    function Ve(S) {
      if (S) {
        var V = S._owner, te = Q(S.type, S._source, V ? V.type : null);
        Ue.setExtraStackFrame(te);
      } else
        Ue.setExtraStackFrame(null);
    }
    function Ie(S, V, te, I, N) {
      {
        var W = Function.call.bind(xe);
        for (var Y in S)
          if (W(S, Y)) {
            var oe = void 0;
            try {
              if (typeof S[Y] != "function") {
                var be = Error((I || "React class") + ": " + te + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              oe = S[Y](V, Y, I, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              oe = Ee;
            }
            oe && !(oe instanceof Error) && (Ve(N), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", te, Y, typeof oe), Ve(null)), oe instanceof Error && !(oe.message in le) && (le[oe.message] = !0, Ve(N), T("Failed %s type: %s", te, oe.message), Ve(null));
          }
      }
    }
    var Se = Array.isArray;
    function We(S) {
      return Se(S);
    }
    function Re(S) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, te = V && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return te;
      }
    }
    function Qe(S) {
      try {
        return Xe(S), !1;
      } catch {
        return !0;
      }
    }
    function Xe(S) {
      return "" + S;
    }
    function et(S) {
      if (Qe(S))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(S)), Xe(S);
    }
    var Pe = O.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ce, nt, ue;
    ue = {};
    function ge(S) {
      if (xe.call(S, "ref")) {
        var V = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function $e(S) {
      if (xe.call(S, "key")) {
        var V = Object.getOwnPropertyDescriptor(S, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Je(S, V) {
      if (typeof S.ref == "string" && Pe.current && V && Pe.current.stateNode !== V) {
        var te = U(Pe.current.type);
        ue[te] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Pe.current.type), S.ref), ue[te] = !0);
      }
    }
    function Jt(S, V) {
      {
        var te = function() {
          ce || (ce = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        te.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function _t(S, V) {
      {
        var te = function() {
          nt || (nt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        te.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var lr = function(S, V, te, I, N, W, Y) {
      var oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: V,
        ref: te,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return oe._store = {}, Object.defineProperty(oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(oe.props), Object.freeze(oe)), oe;
    };
    function Nt(S, V, te, I, N) {
      {
        var W, Y = {}, oe = null, be = null;
        te !== void 0 && (et(te), oe = "" + te), $e(V) && (et(V.key), oe = "" + V.key), ge(V) && (be = V.ref, Je(V, N));
        for (W in V)
          xe.call(V, W) && !me.hasOwnProperty(W) && (Y[W] = V[W]);
        if (S && S.defaultProps) {
          var Ee = S.defaultProps;
          for (W in Ee)
            Y[W] === void 0 && (Y[W] = Ee[W]);
        }
        if (oe || be) {
          var Ce = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          oe && Jt(Y, Ce), be && _t(Y, Ce);
        }
        return lr(S, oe, be, N, I, Pe.current, Y);
      }
    }
    var mt = O.ReactCurrentOwner, gt = O.ReactDebugCurrentFrame;
    function ft(S) {
      if (S) {
        var V = S._owner, te = Q(S.type, S._source, V ? V.type : null);
        gt.setExtraStackFrame(te);
      } else
        gt.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function vn(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Zt() {
      {
        if (mt.current) {
          var S = U(mt.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function In(S) {
      {
        if (S !== void 0) {
          var V = S.fileName.replace(/^.*[\\\/]/, ""), te = S.lineNumber;
          return `

Check your code at ` + V + ":" + te + ".";
        }
        return "";
      }
    }
    var Nn = {};
    function cr(S) {
      {
        var V = Zt();
        if (!V) {
          var te = typeof S == "string" ? S : S.displayName || S.name;
          te && (V = `

Check the top-level render call using <` + te + ">.");
        }
        return V;
      }
    }
    function Mn(S, V) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var te = cr(V);
        if (Nn[te])
          return;
        Nn[te] = !0;
        var I = "";
        S && S._owner && S._owner !== mt.current && (I = " It was passed a child from " + U(S._owner.type) + "."), ft(S), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, I), ft(null);
      }
    }
    function en(S, V) {
      {
        if (typeof S != "object")
          return;
        if (We(S))
          for (var te = 0; te < S.length; te++) {
            var I = S[te];
            vn(I) && Mn(I, V);
          }
        else if (vn(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var N = m(S);
          if (typeof N == "function" && N !== S.entries)
            for (var W = N.call(S), Y; !(Y = W.next()).done; )
              vn(Y.value) && Mn(Y.value, V);
        }
      }
    }
    function rt(S) {
      {
        var V = S.type;
        if (V == null || typeof V == "string")
          return;
        var te;
        if (typeof V == "function")
          te = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        V.$$typeof === f))
          te = V.propTypes;
        else
          return;
        if (te) {
          var I = U(V);
          Ie(te, S.props, "prop", I, S);
        } else if (V.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var N = U(V);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ze(S) {
      {
        for (var V = Object.keys(S.props), te = 0; te < V.length; te++) {
          var I = V[te];
          if (I !== "children" && I !== "key") {
            ft(S), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), ft(null);
            break;
          }
        }
        S.ref !== null && (ft(S), T("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    function ht(S, V, te, I, N, W) {
      {
        var Y = k(S);
        if (!Y) {
          var oe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = In(N);
          be ? oe += be : oe += Zt();
          var Ee;
          S === null ? Ee = "null" : We(S) ? Ee = "array" : S !== void 0 && S.$$typeof === t ? (Ee = "<" + (U(S.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof S, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, oe);
        }
        var Ce = Nt(S, V, te, N, W);
        if (Ce == null)
          return Ce;
        if (Y) {
          var lt = V.children;
          if (lt !== void 0)
            if (I)
              if (We(lt)) {
                for (var _n = 0; _n < lt.length; _n++)
                  en(lt[_n], S);
                Object.freeze && Object.freeze(lt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              en(lt, S);
        }
        return S === r ? Ze(Ce) : rt(Ce), Ce;
      }
    }
    function Qr(S, V, te) {
      return ht(S, V, te, !0);
    }
    function kn(S, V, te) {
      return ht(S, V, te, !1);
    }
    var Xr = kn, ur = Qr;
    fr.Fragment = r, fr.jsx = Xr, fr.jsxs = ur;
  }()), fr;
}
process.env.NODE_ENV === "production" ? Ra.exports = Vd() : Ra.exports = zd();
var ai = Ra.exports;
const qd = ai.Fragment, P = ai.jsx, Te = ai.jsxs;
var Pa = { exports: {} }, Zr = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var as;
function Hd() {
  if (as)
    return Me;
  as = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var C = y.$$typeof;
      switch (C) {
        case t:
          switch (y = y.type, y) {
            case c:
            case u:
            case r:
            case i:
            case a:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case d:
                case E:
                case h:
                case s:
                  return y;
                default:
                  return C;
              }
          }
        case n:
          return C;
      }
    }
  }
  function g(y) {
    return x(y) === u;
  }
  return Me.AsyncMode = c, Me.ConcurrentMode = u, Me.ContextConsumer = l, Me.ContextProvider = s, Me.Element = t, Me.ForwardRef = d, Me.Fragment = r, Me.Lazy = E, Me.Memo = h, Me.Portal = n, Me.Profiler = i, Me.StrictMode = a, Me.Suspense = f, Me.isAsyncMode = function(y) {
    return g(y) || x(y) === c;
  }, Me.isConcurrentMode = g, Me.isContextConsumer = function(y) {
    return x(y) === l;
  }, Me.isContextProvider = function(y) {
    return x(y) === s;
  }, Me.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Me.isForwardRef = function(y) {
    return x(y) === d;
  }, Me.isFragment = function(y) {
    return x(y) === r;
  }, Me.isLazy = function(y) {
    return x(y) === E;
  }, Me.isMemo = function(y) {
    return x(y) === h;
  }, Me.isPortal = function(y) {
    return x(y) === n;
  }, Me.isProfiler = function(y) {
    return x(y) === i;
  }, Me.isStrictMode = function(y) {
    return x(y) === a;
  }, Me.isSuspense = function(y) {
    return x(y) === f;
  }, Me.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === u || y === i || y === a || y === f || y === p || typeof y == "object" && y !== null && (y.$$typeof === E || y.$$typeof === h || y.$$typeof === s || y.$$typeof === l || y.$$typeof === d || y.$$typeof === m || y.$$typeof === O || y.$$typeof === T || y.$$typeof === v);
  }, Me.typeOf = x, Me;
}
var ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function Yd() {
  return is || (is = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function x(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === r || j === u || j === i || j === a || j === f || j === p || typeof j == "object" && j !== null && (j.$$typeof === E || j.$$typeof === h || j.$$typeof === s || j.$$typeof === l || j.$$typeof === d || j.$$typeof === m || j.$$typeof === O || j.$$typeof === T || j.$$typeof === v);
    }
    function g(j) {
      if (typeof j == "object" && j !== null) {
        var pe = j.$$typeof;
        switch (pe) {
          case t:
            var M = j.type;
            switch (M) {
              case c:
              case u:
              case r:
              case i:
              case a:
              case f:
                return M;
              default:
                var Q = M && M.$$typeof;
                switch (Q) {
                  case l:
                  case d:
                  case E:
                  case h:
                  case s:
                    return Q;
                  default:
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var y = c, C = u, R = l, $ = s, F = t, k = d, _ = r, z = E, U = h, L = n, D = i, B = a, q = f, se = !1;
    function ee(j) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(j) || g(j) === c;
    }
    function A(j) {
      return g(j) === u;
    }
    function H(j) {
      return g(j) === l;
    }
    function ne(j) {
      return g(j) === s;
    }
    function Z(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function K(j) {
      return g(j) === d;
    }
    function X(j) {
      return g(j) === r;
    }
    function J(j) {
      return g(j) === E;
    }
    function G(j) {
      return g(j) === h;
    }
    function re(j) {
      return g(j) === n;
    }
    function ae(j) {
      return g(j) === i;
    }
    function de(j) {
      return g(j) === a;
    }
    function ie(j) {
      return g(j) === f;
    }
    ke.AsyncMode = y, ke.ConcurrentMode = C, ke.ContextConsumer = R, ke.ContextProvider = $, ke.Element = F, ke.ForwardRef = k, ke.Fragment = _, ke.Lazy = z, ke.Memo = U, ke.Portal = L, ke.Profiler = D, ke.StrictMode = B, ke.Suspense = q, ke.isAsyncMode = ee, ke.isConcurrentMode = A, ke.isContextConsumer = H, ke.isContextProvider = ne, ke.isElement = Z, ke.isForwardRef = K, ke.isFragment = X, ke.isLazy = J, ke.isMemo = G, ke.isPortal = re, ke.isProfiler = ae, ke.isStrictMode = de, ke.isSuspense = ie, ke.isValidElementType = x, ke.typeOf = g;
  }()), ke;
}
var ss;
function pc() {
  return ss || (ss = 1, process.env.NODE_ENV === "production" ? Zr.exports = Hd() : Zr.exports = Yd()), Zr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jo, ls;
function Kd() {
  if (ls)
    return Jo;
  ls = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
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
  return Jo = a() ? Object.assign : function(i, s) {
    for (var l, c = r(i), u, d = 1; d < arguments.length; d++) {
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
  }, Jo;
}
var Zo, cs;
function ii() {
  if (cs)
    return Zo;
  cs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zo = e, Zo;
}
var ea, us;
function mc() {
  return us || (us = 1, ea = Function.call.bind(Object.prototype.hasOwnProperty)), ea;
}
var ta, ds;
function Gd() {
  if (ds)
    return ta;
  ds = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ii(), n = {}, r = mc();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(i, s, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var f;
          try {
            if (typeof i[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = i[d](s, d, c, l, null, t);
          } catch (E) {
            f = E;
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
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ta = a, ta;
}
var na, fs;
function Qd() {
  if (fs)
    return na;
  fs = 1;
  var e = pc(), t = Kd(), n = ii(), r = mc(), a = Gd(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
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
  return na = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(A) {
      var H = A && (u && A[u] || A[d]);
      if (typeof H == "function")
        return H;
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
      any: T(),
      arrayOf: x,
      element: g(),
      elementType: y(),
      instanceOf: C,
      node: k(),
      objectOf: $,
      oneOf: R,
      oneOfType: F,
      shape: z,
      exact: U
    };
    function E(A, H) {
      return A === H ? A !== 0 || 1 / A === 1 / H : A !== A && H !== H;
    }
    function v(A, H) {
      this.message = A, this.data = H && typeof H == "object" ? H : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function m(A) {
      if (process.env.NODE_ENV !== "production")
        var H = {}, ne = 0;
      function Z(X, J, G, re, ae, de, ie) {
        if (re = re || p, de = de || G, ie !== n) {
          if (c) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = re + ":" + G;
            !H[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + de + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), H[pe] = !0, ne++);
          }
        }
        return J[G] == null ? X ? J[G] === null ? new v("The " + ae + " `" + de + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new v("The " + ae + " `" + de + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : A(J, G, re, ae, de);
      }
      var K = Z.bind(null, !1);
      return K.isRequired = Z.bind(null, !0), K;
    }
    function O(A) {
      function H(ne, Z, K, X, J, G) {
        var re = ne[Z], ae = B(re);
        if (ae !== A) {
          var de = q(re);
          return new v(
            "Invalid " + X + " `" + J + "` of type " + ("`" + de + "` supplied to `" + K + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return m(H);
    }
    function T() {
      return m(s);
    }
    function x(A) {
      function H(ne, Z, K, X, J) {
        if (typeof A != "function")
          return new v("Property `" + J + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var G = ne[Z];
        if (!Array.isArray(G)) {
          var re = B(G);
          return new v("Invalid " + X + " `" + J + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected an array."));
        }
        for (var ae = 0; ae < G.length; ae++) {
          var de = A(G, ae, K, X, J + "[" + ae + "]", n);
          if (de instanceof Error)
            return de;
        }
        return null;
      }
      return m(H);
    }
    function g() {
      function A(H, ne, Z, K, X) {
        var J = H[ne];
        if (!l(J)) {
          var G = B(J);
          return new v("Invalid " + K + " `" + X + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(A);
    }
    function y() {
      function A(H, ne, Z, K, X) {
        var J = H[ne];
        if (!e.isValidElementType(J)) {
          var G = B(J);
          return new v("Invalid " + K + " `" + X + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(A);
    }
    function C(A) {
      function H(ne, Z, K, X, J) {
        if (!(ne[Z] instanceof A)) {
          var G = A.name || p, re = ee(ne[Z]);
          return new v("Invalid " + X + " `" + J + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return m(H);
    }
    function R(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function H(ne, Z, K, X, J) {
        for (var G = ne[Z], re = 0; re < A.length; re++)
          if (E(G, A[re]))
            return null;
        var ae = JSON.stringify(A, function(ie, j) {
          var pe = q(j);
          return pe === "symbol" ? String(j) : j;
        });
        return new v("Invalid " + X + " `" + J + "` of value `" + String(G) + "` " + ("supplied to `" + K + "`, expected one of " + ae + "."));
      }
      return m(H);
    }
    function $(A) {
      function H(ne, Z, K, X, J) {
        if (typeof A != "function")
          return new v("Property `" + J + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var G = ne[Z], re = B(G);
        if (re !== "object")
          return new v("Invalid " + X + " `" + J + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected an object."));
        for (var ae in G)
          if (r(G, ae)) {
            var de = A(G, ae, K, X, J + "." + ae, n);
            if (de instanceof Error)
              return de;
          }
        return null;
      }
      return m(H);
    }
    function F(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var H = 0; H < A.length; H++) {
        var ne = A[H];
        if (typeof ne != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(ne) + " at index " + H + "."
          ), s;
      }
      function Z(K, X, J, G, re) {
        for (var ae = [], de = 0; de < A.length; de++) {
          var ie = A[de], j = ie(K, X, J, G, re, n);
          if (j == null)
            return null;
          j.data && r(j.data, "expectedType") && ae.push(j.data.expectedType);
        }
        var pe = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new v("Invalid " + G + " `" + re + "` supplied to " + ("`" + J + "`" + pe + "."));
      }
      return m(Z);
    }
    function k() {
      function A(H, ne, Z, K, X) {
        return L(H[ne]) ? null : new v("Invalid " + K + " `" + X + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return m(A);
    }
    function _(A, H, ne, Z, K) {
      return new v(
        (A || "React class") + ": " + H + " type `" + ne + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function z(A) {
      function H(ne, Z, K, X, J) {
        var G = ne[Z], re = B(G);
        if (re !== "object")
          return new v("Invalid " + X + " `" + J + "` of type `" + re + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var ae in A) {
          var de = A[ae];
          if (typeof de != "function")
            return _(K, X, J, ae, q(de));
          var ie = de(G, ae, K, X, J + "." + ae, n);
          if (ie)
            return ie;
        }
        return null;
      }
      return m(H);
    }
    function U(A) {
      function H(ne, Z, K, X, J) {
        var G = ne[Z], re = B(G);
        if (re !== "object")
          return new v("Invalid " + X + " `" + J + "` of type `" + re + "` " + ("supplied to `" + K + "`, expected `object`."));
        var ae = t({}, ne[Z], A);
        for (var de in ae) {
          var ie = A[de];
          if (r(A, de) && typeof ie != "function")
            return _(K, X, J, de, q(ie));
          if (!ie)
            return new v(
              "Invalid " + X + " `" + J + "` key `" + de + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(ne[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var j = ie(G, de, K, X, J + "." + de, n);
          if (j)
            return j;
        }
        return null;
      }
      return m(H);
    }
    function L(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(L);
          if (A === null || l(A))
            return !0;
          var H = f(A);
          if (H) {
            var ne = H.call(A), Z;
            if (H !== A.entries) {
              for (; !(Z = ne.next()).done; )
                if (!L(Z.value))
                  return !1;
            } else
              for (; !(Z = ne.next()).done; ) {
                var K = Z.value;
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
    function D(A, H) {
      return A === "symbol" ? !0 : H ? H["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && H instanceof Symbol : !1;
    }
    function B(A) {
      var H = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : D(H, A) ? "symbol" : H;
    }
    function q(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var H = B(A);
      if (H === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return H;
    }
    function se(A) {
      var H = q(A);
      switch (H) {
        case "array":
        case "object":
          return "an " + H;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + H;
        default:
          return H;
      }
    }
    function ee(A) {
      return !A.constructor || !A.constructor.name ? p : A.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, na;
}
var ra, ps;
function Xd() {
  if (ps)
    return ra;
  ps = 1;
  var e = ii();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ra = function() {
    function r(s, l, c, u, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, ra;
}
if (process.env.NODE_ENV !== "production") {
  var Jd = pc(), Zd = !0;
  Pa.exports = Qd()(Jd.isElement, Zd);
} else
  Pa.exports = Xd()();
var ef = Pa.exports;
const o = /* @__PURE__ */ fc(ef), Br = () => /* @__PURE__ */ P(
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
    children: /* @__PURE__ */ P(nc, {})
  }
);
function Kt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function w() {
  return w = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, w.apply(this, arguments);
}
function Vn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function hc(e) {
  if (!Vn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = hc(e[n]);
  }), t;
}
function Rt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? w({}, e) : e;
  return Vn(e) && Vn(t) && Object.keys(t).forEach((a) => {
    a !== "__proto__" && (Vn(t[a]) && a in e && Vn(e[a]) ? r[a] = Rt(e[a], t[a], n) : n.clone ? r[a] = Vn(t[a]) ? hc(t[a]) : t[a] : r[a] = t[a]);
  }), r;
}
function tf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function vc(e, t, n, r, a) {
  const i = e[t], s = a || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !tf(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const yc = Kt(o.element, vc);
yc.isRequired = Kt(o.element.isRequired, vc);
const Ur = yc;
function nf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function rf(e, t, n, r, a) {
  const i = e[t], s = a || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !nf(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const si = Kt(o.elementType, rf), of = "exact-prop: ​";
function gc(e) {
  return process.env.NODE_ENV === "production" ? e : w({}, e, {
    [of]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function ln(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var $a = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function af() {
  if (ms)
    return _e;
  ms = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case e:
          switch (m = m.type, m) {
            case n:
            case a:
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
                case i:
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
  return _e.ContextConsumer = s, _e.ContextProvider = i, _e.Element = e, _e.ForwardRef = c, _e.Fragment = n, _e.Lazy = p, _e.Memo = f, _e.Portal = t, _e.Profiler = a, _e.StrictMode = r, _e.Suspense = u, _e.SuspenseList = d, _e.isAsyncMode = function() {
    return !1;
  }, _e.isConcurrentMode = function() {
    return !1;
  }, _e.isContextConsumer = function(m) {
    return v(m) === s;
  }, _e.isContextProvider = function(m) {
    return v(m) === i;
  }, _e.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, _e.isForwardRef = function(m) {
    return v(m) === c;
  }, _e.isFragment = function(m) {
    return v(m) === n;
  }, _e.isLazy = function(m) {
    return v(m) === p;
  }, _e.isMemo = function(m) {
    return v(m) === f;
  }, _e.isPortal = function(m) {
    return v(m) === t;
  }, _e.isProfiler = function(m) {
    return v(m) === a;
  }, _e.isStrictMode = function(m) {
    return v(m) === r;
  }, _e.isSuspense = function(m) {
    return v(m) === u;
  }, _e.isSuspenseList = function(m) {
    return v(m) === d;
  }, _e.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === a || m === r || m === u || m === d || m === h || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === i || m.$$typeof === s || m.$$typeof === c || m.$$typeof === E || m.getModuleId !== void 0);
  }, _e.typeOf = v, _e;
}
var Ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs;
function sf() {
  return hs || (hs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), E = !1, v = !1, m = !1, O = !1, T = !1, x;
    x = Symbol.for("react.module.reference");
    function g(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === n || M === a || T || M === r || M === u || M === d || O || M === h || E || v || m || typeof M == "object" && M !== null && (M.$$typeof === p || M.$$typeof === f || M.$$typeof === i || M.$$typeof === s || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === x || M.getModuleId !== void 0));
    }
    function y(M) {
      if (typeof M == "object" && M !== null) {
        var Q = M.$$typeof;
        switch (Q) {
          case e:
            var xe = M.type;
            switch (xe) {
              case n:
              case a:
              case r:
              case u:
              case d:
                return xe;
              default:
                var le = xe && xe.$$typeof;
                switch (le) {
                  case l:
                  case s:
                  case c:
                  case p:
                  case f:
                  case i:
                    return le;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var C = s, R = i, $ = e, F = c, k = n, _ = p, z = f, U = t, L = a, D = r, B = u, q = d, se = !1, ee = !1;
    function A(M) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(M) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(M) {
      return y(M) === s;
    }
    function Z(M) {
      return y(M) === i;
    }
    function K(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function X(M) {
      return y(M) === c;
    }
    function J(M) {
      return y(M) === n;
    }
    function G(M) {
      return y(M) === p;
    }
    function re(M) {
      return y(M) === f;
    }
    function ae(M) {
      return y(M) === t;
    }
    function de(M) {
      return y(M) === a;
    }
    function ie(M) {
      return y(M) === r;
    }
    function j(M) {
      return y(M) === u;
    }
    function pe(M) {
      return y(M) === d;
    }
    Ae.ContextConsumer = C, Ae.ContextProvider = R, Ae.Element = $, Ae.ForwardRef = F, Ae.Fragment = k, Ae.Lazy = _, Ae.Memo = z, Ae.Portal = U, Ae.Profiler = L, Ae.StrictMode = D, Ae.Suspense = B, Ae.SuspenseList = q, Ae.isAsyncMode = A, Ae.isConcurrentMode = H, Ae.isContextConsumer = ne, Ae.isContextProvider = Z, Ae.isElement = K, Ae.isForwardRef = X, Ae.isFragment = J, Ae.isLazy = G, Ae.isMemo = re, Ae.isPortal = ae, Ae.isProfiler = de, Ae.isStrictMode = ie, Ae.isSuspense = j, Ae.isSuspenseList = pe, Ae.isValidElementType = g, Ae.typeOf = y;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? $a.exports = af() : $a.exports = sf();
var vs = $a.exports;
const lf = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function cf(e) {
  const t = `${e}`.match(lf);
  return t && t[1] || "";
}
function bc(e, t = "") {
  return e.displayName || e.name || cf(e) || t;
}
function ys(e, t, n) {
  const r = bc(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function uf(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return bc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vs.ForwardRef:
          return ys(e, e.render, "ForwardRef");
        case vs.Memo:
          return ys(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Vt(e, t, n, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = a || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const df = o.oneOfType([o.func, o.object]), kt = df;
function fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ln(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function gs(...e) {
  return e.reduce((t, n) => n == null ? t : function(...a) {
    t.apply(this, a), n.apply(this, a);
  }, () => {
  });
}
function Ec(e, t = 166) {
  let n;
  function r(...a) {
    const i = () => {
      e.apply(this, a);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function oa(e, t) {
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function pt(e) {
  return e && e.ownerDocument || document;
}
function Tn(e) {
  return pt(e).defaultView || window;
}
function mo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const ff = typeof window < "u" ? b.useLayoutEffect : b.useEffect, cn = ff;
let bs = 0;
function pf(e) {
  const [t, n] = b.useState(e), r = e || t;
  return b.useEffect(() => {
    t == null && (bs += 1, n(`mui-${bs}`));
  }, [t]), r;
}
const Es = b["useId".toString()];
function xc(e) {
  if (Es !== void 0) {
    const t = Es();
    return e ?? t;
  }
  return pf(e);
}
function mf(e, t, n, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = a || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function xr({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: a
  } = b.useRef(e !== void 0), [i, s] = b.useState(t), l = a ? e : i;
  if (process.env.NODE_ENV !== "production") {
    b.useEffect(() => {
      a !== (e !== void 0) && console.error([`MUI: A component is changing the ${a ? "" : "un"}controlled ${r} state of ${n} to be ${a ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = b.useRef(t);
    b.useEffect(() => {
      !a && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = b.useCallback((u) => {
    a || s(u);
  }, []);
  return [l, c];
}
function Bt(e) {
  const t = b.useRef(e);
  return cn(() => {
    t.current = e;
  }), b.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function it(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      mo(n, t);
    });
  }, e);
}
let Io = !0, Ia = !1, xs;
const hf = {
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
function vf(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && hf[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function yf(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Io = !0);
}
function aa() {
  Io = !1;
}
function gf() {
  this.visibilityState === "hidden" && Ia && (Io = !0);
}
function bf(e) {
  e.addEventListener("keydown", yf, !0), e.addEventListener("mousedown", aa, !0), e.addEventListener("pointerdown", aa, !0), e.addEventListener("touchstart", aa, !0), e.addEventListener("visibilitychange", gf, !0);
}
function Ef(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Io || vf(t);
}
function xf() {
  const e = b.useCallback((a) => {
    a != null && bf(a.ownerDocument);
  }, []), t = b.useRef(!1);
  function n() {
    return t.current ? (Ia = !0, window.clearTimeout(xs), xs = window.setTimeout(() => {
      Ia = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(a) {
    return Ef(a) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Oc(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Of = (e) => {
  const t = b.useRef({});
  return b.useEffect(() => {
    t.current = e;
  }), t.current;
}, Sf = Of;
function wf(e) {
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
function Tf(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Cf = Number.isInteger || Tf;
function Sc(e, t, n, r) {
  const a = e[t];
  if (a == null || !Cf(a)) {
    const i = wf(a);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function wc(e, t, ...n) {
  return e[t] === void 0 ? null : Sc(e, t, ...n);
}
function Na() {
  return null;
}
wc.isRequired = Sc;
Na.isRequired = Na;
const li = process.env.NODE_ENV === "production" ? Na : wc;
function Tc(e, t) {
  const n = w({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = w({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = a : !a || !Object.keys(a) ? n[r] = i : (n[r] = w({}, i), Object.keys(a).forEach((s) => {
        n[r][s] = Tc(a[s], i[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function He(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (a) => {
      r[a] = e[a].reduce((i, s) => {
        if (s) {
          const l = t(s);
          l !== "" && i.push(l), n && n[s] && i.push(n[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const Os = (e) => e, Rf = () => {
  let e = Os;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Os;
    }
  };
}, Pf = Rf(), $f = Pf, If = {
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
function Be(e, t, n = "Mui") {
  const r = If[t];
  return r ? `${n}-${r}` : `${$f.generate(e)}-${t}`;
}
function ze(e, t, n = "Mui") {
  const r = {};
  return t.forEach((a) => {
    r[a] = Be(e, a, n);
  }), r;
}
const No = "$$material";
function ve(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Nf(e) {
  return e == null || Object.keys(e).length === 0;
}
function Cc(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ P(Ld, {
    styles: typeof t == "function" ? (a) => t(Nf(a) ? n : a) : t
  });
}
process.env.NODE_ENV !== "production" && (Cc.propTypes = {
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
function Mf(e, t) {
  const n = Bd(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const a = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${a})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${a})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const kf = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, _f = ["values", "unit", "step"], Af = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => w({}, n, {
    [r.key]: r.val
  }), {});
};
function Df(e) {
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
  } = e, a = ve(e, _f), i = Af(t), s = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, h) {
    const E = s.indexOf(h);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(E !== -1 && typeof t[s[E]] == "number" ? t[s[E]] : h) - r / 100}${n})`;
  }
  function d(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const h = s.indexOf(p);
    return h === 0 ? l(s[1]) : h === s.length - 1 ? c(s[h]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return w({
    keys: s,
    values: i,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n
  }, a);
}
const Ff = {
  borderRadius: 4
}, Lf = Ff, jf = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, dn = jf;
function Or(e, t) {
  return t ? Rt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ci = {
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
}, Ss = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ci[e]}px)`
};
function Gt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Ss;
    return t.reduce((s, l, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Ss;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || ci).indexOf(l) !== -1) {
        const c = i.up(l);
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
function Wf(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, a) => {
    const i = e.up(a);
    return r[i] = {}, r;
  }, {})) || {};
}
function Bf(e, t) {
  return e.reduce((n, r) => {
    const a = n[r];
    return (!a || Object.keys(a).length === 0) && delete n[r], n;
  }, t);
}
function Mo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((a, i) => a && a[i] ? a[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, a) => r && r[a] != null ? r[a] : null, e);
}
function ho(e, t, n, r = n) {
  let a;
  return typeof e == "function" ? a = e(n) : Array.isArray(e) ? a = e[n] || r : a = Mo(e, n) || r, t && (a = t(a, r, e)), a;
}
function Le(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: a
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = Mo(c, r) || {};
    return Gt(s, l, (f) => {
      let p = ho(u, a, f);
      return f === p && typeof f == "string" && (p = ho(u, a, `${t}${f === "default" ? "" : fe(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: dn
  } : {}, i.filterProps = [t], i;
}
function Uf(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Vf = {
  m: "margin",
  p: "padding"
}, zf = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ws = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, qf = Uf((e) => {
  if (e.length > 2)
    if (ws[e])
      e = ws[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Vf[t], a = zf[n] || "";
  return Array.isArray(a) ? a.map((i) => r + i) : [r + a];
}), ko = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _o = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Hf = [...ko, ..._o];
function Vr(e, t, n, r) {
  var a;
  const i = (a = Mo(e, t, !1)) != null ? a : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Rc(e) {
  return Vr(e, "spacing", 8, "spacing");
}
function zr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Yf(e, t) {
  return (n) => e.reduce((r, a) => (r[a] = zr(t, n), r), {});
}
function Kf(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const a = qf(n), i = Yf(a, r), s = e[n];
  return Gt(e, s, i);
}
function Pc(e, t) {
  const n = Rc(e.theme);
  return Object.keys(e).map((r) => Kf(e, t, r, n)).reduce(Or, {});
}
function Ke(e) {
  return Pc(e, ko);
}
Ke.propTypes = process.env.NODE_ENV !== "production" ? ko.reduce((e, t) => (e[t] = dn, e), {}) : {};
Ke.filterProps = ko;
function Ge(e) {
  return Pc(e, _o);
}
Ge.propTypes = process.env.NODE_ENV !== "production" ? _o.reduce((e, t) => (e[t] = dn, e), {}) : {};
Ge.filterProps = _o;
process.env.NODE_ENV !== "production" && Hf.reduce((e, t) => (e[t] = dn, e), {});
function Gf(e = 8) {
  if (e.mui)
    return e;
  const t = Rc({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function Ao(...e) {
  const t = e.reduce((r, a) => (a.filterProps.forEach((i) => {
    r[i] = a;
  }), r), {}), n = (r) => Object.keys(r).reduce((a, i) => t[i] ? Or(a, t[i](r)) : a, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, a) => Object.assign(r, a.propTypes), {}) : {}, n.filterProps = e.reduce((r, a) => r.concat(a.filterProps), []), n;
}
function Lt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Qf = Le({
  prop: "border",
  themeKey: "borders",
  transform: Lt
}), Xf = Le({
  prop: "borderTop",
  themeKey: "borders",
  transform: Lt
}), Jf = Le({
  prop: "borderRight",
  themeKey: "borders",
  transform: Lt
}), Zf = Le({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Lt
}), ep = Le({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Lt
}), tp = Le({
  prop: "borderColor",
  themeKey: "palette"
}), np = Le({
  prop: "borderTopColor",
  themeKey: "palette"
}), rp = Le({
  prop: "borderRightColor",
  themeKey: "palette"
}), op = Le({
  prop: "borderBottomColor",
  themeKey: "palette"
}), ap = Le({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Do = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Vr(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: zr(t, r)
    });
    return Gt(e, e.borderRadius, n);
  }
  return null;
};
Do.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: dn
} : {};
Do.filterProps = ["borderRadius"];
Ao(Qf, Xf, Jf, Zf, ep, tp, np, rp, op, ap, Do);
const Fo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Vr(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: zr(t, r)
    });
    return Gt(e, e.gap, n);
  }
  return null;
};
Fo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: dn
} : {};
Fo.filterProps = ["gap"];
const Lo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Vr(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: zr(t, r)
    });
    return Gt(e, e.columnGap, n);
  }
  return null;
};
Lo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: dn
} : {};
Lo.filterProps = ["columnGap"];
const jo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Vr(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: zr(t, r)
    });
    return Gt(e, e.rowGap, n);
  }
  return null;
};
jo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: dn
} : {};
jo.filterProps = ["rowGap"];
const ip = Le({
  prop: "gridColumn"
}), sp = Le({
  prop: "gridRow"
}), lp = Le({
  prop: "gridAutoFlow"
}), cp = Le({
  prop: "gridAutoColumns"
}), up = Le({
  prop: "gridAutoRows"
}), dp = Le({
  prop: "gridTemplateColumns"
}), fp = Le({
  prop: "gridTemplateRows"
}), pp = Le({
  prop: "gridTemplateAreas"
}), mp = Le({
  prop: "gridArea"
});
Ao(Fo, Lo, jo, ip, sp, lp, cp, up, dp, fp, pp, mp);
function Hn(e, t) {
  return t === "grey" ? t : e;
}
const hp = Le({
  prop: "color",
  themeKey: "palette",
  transform: Hn
}), vp = Le({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Hn
}), yp = Le({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Hn
});
Ao(hp, vp, yp);
function xt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const gp = Le({
  prop: "width",
  transform: xt
}), ui = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r;
      return {
        maxWidth: ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ci[n] || xt(n)
      };
    };
    return Gt(e, e.maxWidth, t);
  }
  return null;
};
ui.filterProps = ["maxWidth"];
const bp = Le({
  prop: "minWidth",
  transform: xt
}), Ep = Le({
  prop: "height",
  transform: xt
}), xp = Le({
  prop: "maxHeight",
  transform: xt
}), Op = Le({
  prop: "minHeight",
  transform: xt
});
Le({
  prop: "size",
  cssProperty: "width",
  transform: xt
});
Le({
  prop: "size",
  cssProperty: "height",
  transform: xt
});
const Sp = Le({
  prop: "boxSizing"
});
Ao(gp, ui, bp, Ep, xp, Op, Sp);
const wp = {
  // borders
  border: {
    themeKey: "borders",
    transform: Lt
  },
  borderTop: {
    themeKey: "borders",
    transform: Lt
  },
  borderRight: {
    themeKey: "borders",
    transform: Lt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Lt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Lt
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
    style: Do
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Hn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Hn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Hn
  },
  // spacing
  p: {
    style: Ge
  },
  pt: {
    style: Ge
  },
  pr: {
    style: Ge
  },
  pb: {
    style: Ge
  },
  pl: {
    style: Ge
  },
  px: {
    style: Ge
  },
  py: {
    style: Ge
  },
  padding: {
    style: Ge
  },
  paddingTop: {
    style: Ge
  },
  paddingRight: {
    style: Ge
  },
  paddingBottom: {
    style: Ge
  },
  paddingLeft: {
    style: Ge
  },
  paddingX: {
    style: Ge
  },
  paddingY: {
    style: Ge
  },
  paddingInline: {
    style: Ge
  },
  paddingInlineStart: {
    style: Ge
  },
  paddingInlineEnd: {
    style: Ge
  },
  paddingBlock: {
    style: Ge
  },
  paddingBlockStart: {
    style: Ge
  },
  paddingBlockEnd: {
    style: Ge
  },
  m: {
    style: Ke
  },
  mt: {
    style: Ke
  },
  mr: {
    style: Ke
  },
  mb: {
    style: Ke
  },
  ml: {
    style: Ke
  },
  mx: {
    style: Ke
  },
  my: {
    style: Ke
  },
  margin: {
    style: Ke
  },
  marginTop: {
    style: Ke
  },
  marginRight: {
    style: Ke
  },
  marginBottom: {
    style: Ke
  },
  marginLeft: {
    style: Ke
  },
  marginX: {
    style: Ke
  },
  marginY: {
    style: Ke
  },
  marginInline: {
    style: Ke
  },
  marginInlineStart: {
    style: Ke
  },
  marginInlineEnd: {
    style: Ke
  },
  marginBlock: {
    style: Ke
  },
  marginBlockStart: {
    style: Ke
  },
  marginBlockEnd: {
    style: Ke
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
    style: Fo
  },
  rowGap: {
    style: jo
  },
  columnGap: {
    style: Lo
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
    transform: xt
  },
  maxWidth: {
    style: ui
  },
  minWidth: {
    transform: xt
  },
  height: {
    transform: xt
  },
  maxHeight: {
    transform: xt
  },
  minHeight: {
    transform: xt
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
}, di = wp;
function Tp(...e) {
  const t = e.reduce((r, a) => r.concat(Object.keys(a)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Cp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rp() {
  function e(n, r, a, i) {
    const s = {
      [n]: r,
      theme: a
    }, l = i[n];
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
    const p = Mo(a, u) || {};
    return f ? f(s) : Gt(s, r, (E) => {
      let v = ho(p, d, E);
      return E === v && typeof E == "string" && (v = ho(p, d, `${n}${E === "default" ? "" : fe(E)}`, E)), c === !1 ? v : {
        [c]: v
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: a,
      theme: i = {}
    } = n || {};
    if (!a)
      return null;
    const s = (r = i.unstable_sxConfig) != null ? r : di;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Wf(i.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((h) => {
        const E = Cp(u[h], i);
        if (E != null)
          if (typeof E == "object")
            if (s[h])
              p = Or(p, e(h, E, i, s));
            else {
              const v = Gt({
                theme: i
              }, E, (m) => ({
                [h]: m
              }));
              Tp(v, E) ? p[h] = t({
                sx: E,
                theme: i
              }) : p = Or(p, v);
            }
          else
            p = Or(p, e(h, E, i, s));
      }), Bf(f, p);
    }
    return Array.isArray(a) ? a.map(l) : l(a);
  }
  return t;
}
const $c = Rp();
$c.filterProps = ["sx"];
const fi = $c, Pp = ["breakpoints", "palette", "spacing", "shape"];
function pi(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: a,
    shape: i = {}
  } = e, s = ve(e, Pp), l = Df(n), c = Gf(a);
  let u = Rt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: w({
      mode: "light"
    }, r),
    spacing: c,
    shape: w({}, Lf, i)
  }, s);
  return u = t.reduce((d, f) => Rt(d, f), u), u.unstable_sxConfig = w({}, di, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return fi({
      sx: f,
      theme: this
    });
  }, u;
}
function $p(e) {
  return Object.keys(e).length === 0;
}
function Ic(e = null) {
  const t = b.useContext(jd);
  return !t || $p(t) ? e : t;
}
const Ip = pi();
function mi(e = Ip) {
  return Ic(e);
}
function Nc({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = mi(n), a = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ P(Cc, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (Nc.propTypes = {
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
function Mc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Mc(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ye() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Mc(e)) && (r && (r += " "), r += t);
  return r;
}
const Np = ["variant"];
function Ts(e) {
  return e.length === 0;
}
function kc(e) {
  const {
    variant: t
  } = e, n = ve(e, Np);
  let r = t || "";
  return Object.keys(n).sort().forEach((a) => {
    a === "color" ? r += Ts(r) ? e[a] : fe(e[a]) : r += `${Ts(r) ? a : fe(a)}${fe(e[a].toString())}`;
  }), r;
}
const Mp = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function kp(e) {
  return Object.keys(e).length === 0;
}
function _p(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Ap = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Dp = (e, t) => {
  let n = [];
  t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
  const r = {};
  return n.forEach((a) => {
    const i = kc(a.props);
    r[i] = a.style;
  }), r;
}, Fp = (e, t, n, r) => {
  var a;
  const {
    ownerState: i = {}
  } = e, s = [], l = n == null || (a = n.components) == null || (a = a[r]) == null ? void 0 : a.variants;
  return l && l.forEach((c) => {
    let u = !0;
    Object.keys(c.props).forEach((d) => {
      i[d] !== c.props[d] && e[d] !== c.props[d] && (u = !1);
    }), u && s.push(t[kc(c.props)]);
  }), s;
};
function Sr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Lp = pi(), Cs = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function pr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return kp(t) ? e : t[n] || t;
}
function jp(e) {
  return e ? (t, n) => n[e] : null;
}
function Wp(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Lp,
    rootShouldForwardProp: r = Sr,
    slotShouldForwardProp: a = Sr
  } = e, i = (s) => fi(w({}, s, {
    theme: pr(w({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    kf(s, (g) => g.filter((y) => !(y != null && y.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = jp(Cs(u))
    } = l, h = ve(l, Mp), E = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), v = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${Cs(u || "Root")}`);
    let O = Sr;
    u === "Root" || u === "root" ? O = r : u ? O = a : _p(s) && (O = void 0);
    const T = Mf(s, w({
      shouldForwardProp: O,
      label: m
    }, h)), x = (g, ...y) => {
      const C = y ? y.map((k) => typeof k == "function" && k.__emotion_real !== k ? (_) => k(w({}, _, {
        theme: pr(w({}, _, {
          defaultTheme: n,
          themeId: t
        }))
      })) : k) : [];
      let R = g;
      c && p && C.push((k) => {
        const _ = pr(w({}, k, {
          defaultTheme: n,
          themeId: t
        })), z = Ap(c, _);
        if (z) {
          const U = {};
          return Object.entries(z).forEach(([L, D]) => {
            U[L] = typeof D == "function" ? D(w({}, k, {
              theme: _
            })) : D;
          }), p(k, U);
        }
        return null;
      }), c && !E && C.push((k) => {
        const _ = pr(w({}, k, {
          defaultTheme: n,
          themeId: t
        }));
        return Fp(k, Dp(c, _), _, c);
      }), v || C.push(i);
      const $ = C.length - y.length;
      if (Array.isArray(g) && $ > 0) {
        const k = new Array($).fill("");
        R = [...g, ...k], R.raw = [...g.raw, ...k];
      } else
        typeof g == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        g.__emotion_real !== g && (R = (k) => g(w({}, k, {
          theme: pr(w({}, k, {
            defaultTheme: n,
            themeId: t
          }))
        })));
      const F = T(R, ...C);
      if (process.env.NODE_ENV !== "production") {
        let k;
        c && (k = `${c}${fe(u || "")}`), k === void 0 && (k = `Styled(${uf(s)})`), F.displayName = k;
      }
      return s.muiName && (F.muiName = s.muiName), F;
    };
    return T.withConfig && (x.withConfig = T.withConfig), x;
  };
}
function Bp(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Tc(t.components[n].defaultProps, r);
}
function Up({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let a = mi(n);
  return r && (a = a[r] || a), Bp({
    theme: a,
    name: t,
    props: e
  });
}
function hi(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function Vp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Cn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Cn(Vp(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ln(9, e));
  let r = e.substring(t + 1, e.length - 1), a;
  if (n === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ln(10, a));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: a
  };
}
function Wo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((a, i) => i < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function zp(e) {
  e = Cn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, a = t[2] / 100, i = r * Math.min(a, 1 - a), s = (u, d = (u + n / 30) % 12) => a - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Wo({
    type: l,
    values: c
  });
}
function Rs(e) {
  e = Cn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Cn(zp(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ps(e, t) {
  const n = Rs(e), r = Rs(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ct(e, t) {
  return e = Cn(e), t = hi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Wo(e);
}
function qp(e, t) {
  if (e = Cn(e), t = hi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Wo(e);
}
function Hp(e, t) {
  if (e = Cn(e), t = hi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Wo(e);
}
function Yp(e, t) {
  return w({
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
const Kp = {
  black: "#000",
  white: "#fff"
}, kr = Kp, Gp = {
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
}, Qp = Gp, Xp = {
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
}, An = Xp, Jp = {
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
}, Dn = Jp, Zp = {
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
}, mr = Zp, em = {
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
}, Fn = em, tm = {
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
}, Ln = tm, nm = {
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
}, jn = nm, rm = ["mode", "contrastThreshold", "tonalOffset"], $s = {
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
    paper: kr.white,
    default: kr.white
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
}, ia = {
  text: {
    primary: kr.white,
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
    active: kr.white,
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
function Is(e, t, n, r) {
  const a = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Hp(e.main, a) : t === "dark" && (e.dark = qp(e.main, i)));
}
function om(e = "light") {
  return e === "dark" ? {
    main: Fn[200],
    light: Fn[50],
    dark: Fn[400]
  } : {
    main: Fn[700],
    light: Fn[400],
    dark: Fn[800]
  };
}
function am(e = "light") {
  return e === "dark" ? {
    main: An[200],
    light: An[50],
    dark: An[400]
  } : {
    main: An[500],
    light: An[300],
    dark: An[700]
  };
}
function im(e = "light") {
  return e === "dark" ? {
    main: Dn[500],
    light: Dn[300],
    dark: Dn[700]
  } : {
    main: Dn[700],
    light: Dn[400],
    dark: Dn[800]
  };
}
function sm(e = "light") {
  return e === "dark" ? {
    main: Ln[400],
    light: Ln[300],
    dark: Ln[700]
  } : {
    main: Ln[700],
    light: Ln[500],
    dark: Ln[900]
  };
}
function lm(e = "light") {
  return e === "dark" ? {
    main: jn[400],
    light: jn[300],
    dark: jn[700]
  } : {
    main: jn[800],
    light: jn[500],
    dark: jn[900]
  };
}
function cm(e = "light") {
  return e === "dark" ? {
    main: mr[400],
    light: mr[300],
    dark: mr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: mr[500],
    dark: mr[900]
  };
}
function um(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, a = ve(e, rm), i = e.primary || om(t), s = e.secondary || am(t), l = e.error || im(t), c = e.info || sm(t), u = e.success || lm(t), d = e.warning || cm(t);
  function f(v) {
    const m = Ps(v, ia.text.primary) >= n ? ia.text.primary : $s.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = Ps(v, m);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${m} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const p = ({
    color: v,
    name: m,
    mainShade: O = 500,
    lightShade: T = 300,
    darkShade: x = 700
  }) => {
    if (v = w({}, v), !v.main && v[O] && (v.main = v[O]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : ln(11, m ? ` (${m})` : "", O));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ln(12, m ? ` (${m})` : "", JSON.stringify(v.main)));
    return Is(v, "light", T, r), Is(v, "dark", x, r), v.contrastText || (v.contrastText = f(v.main)), v;
  }, h = {
    dark: ia,
    light: $s
  };
  return process.env.NODE_ENV !== "production" && (h[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Rt(w({
    // A collection of common colors.
    common: w({}, kr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
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
    grey: Qp,
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
  }, h[t]), a);
}
const dm = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function fm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ns = {
  textTransform: "uppercase"
}, Ms = '"Roboto", "Helvetica", "Arial", sans-serif';
function pm(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Ms,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f
  } = n, p = ve(n, dm);
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = a / 14, E = f || ((O) => `${O / u * h}rem`), v = (O, T, x, g, y) => w({
    fontFamily: r,
    fontWeight: O,
    fontSize: E(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x
  }, r === Ms ? {
    letterSpacing: `${fm(g / T)}em`
  } : {}, y, d), m = {
    h1: v(i, 96, 1.167, -1.5),
    h2: v(i, 60, 1.2, -0.5),
    h3: v(s, 48, 1.167, 0),
    h4: v(s, 34, 1.235, 0.25),
    h5: v(s, 24, 1.334, 0),
    h6: v(l, 20, 1.6, 0.15),
    subtitle1: v(s, 16, 1.75, 0.15),
    subtitle2: v(l, 14, 1.57, 0.1),
    body1: v(s, 16, 1.5, 0.15),
    body2: v(s, 14, 1.43, 0.15),
    button: v(l, 14, 1.75, 0.4, Ns),
    caption: v(s, 12, 1.66, 0.4),
    overline: v(s, 12, 2.66, 1, Ns),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Rt(w({
    htmlFontSize: u,
    pxToRem: E,
    fontFamily: r,
    fontSize: a,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, m), p, {
    clone: !1
    // No need to clone deep
  });
}
const mm = 0.2, hm = 0.14, vm = 0.12;
function qe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${mm})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${vm})`].join(",");
}
const ym = ["none", qe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), qe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), qe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), qe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), qe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), qe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), qe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), qe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), qe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), qe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), qe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), qe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), qe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), qe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), qe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), qe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), qe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), qe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), qe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), qe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), qe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), qe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), qe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), qe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], gm = ym, bm = ["duration", "easing", "delay"], Em = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, xm = {
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
function ks(e) {
  return `${Math.round(e)}ms`;
}
function Om(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Sm(e) {
  const t = w({}, Em, e.easing), n = w({}, xm, e.duration);
  return w({
    getAutoHeightDuration: Om,
    create: (a = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = ve(i, bm);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !isNaN(parseFloat(p));
        !d(a) && !Array.isArray(a) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(a) ? a : [a]).map((d) => `${d} ${typeof s == "string" ? s : ks(s)} ${l} ${typeof c == "string" ? c : ks(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const wm = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Tm = wm, Cm = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Rm(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: a = {},
    typography: i = {}
  } = e, s = ve(e, Cm);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ln(18));
  const l = um(r), c = pi(e);
  let u = Rt(c, {
    mixins: Yp(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: gm.slice(),
    typography: pm(l, i),
    transitions: Sm(a),
    zIndex: w({}, Tm)
  });
  if (u = Rt(u, s), u = t.reduce((d, f) => Rt(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (p, h) => {
      let E;
      for (E in p) {
        const v = p[E];
        if (d.indexOf(E) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Be("", E);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[E] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const h = u.components[p].styleOverrides;
      h && p.indexOf("Mui") === 0 && f(h, p);
    });
  }
  return u.unstable_sxConfig = w({}, di, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return fi({
      sx: f,
      theme: this
    });
  }, u;
}
const Pm = Rm(), Bo = Pm;
function nr() {
  const e = mi(Bo);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[No] || e;
}
function Ye({
  props: e,
  name: t
}) {
  return Up({
    props: e,
    name: t,
    defaultTheme: Bo,
    themeId: No
  });
}
const fn = (e) => Sr(e) && e !== "classes", $m = Sr, Im = Wp({
  themeId: No,
  defaultTheme: Bo,
  rootShouldForwardProp: fn
}), he = Im, Nm = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, _s = Nm, _c = ({
  children: e,
  style: t,
  sx: n,
  component: r,
  onSubmit: a,
  mb: i,
  mt: s,
  isLoading: l = !1,
  ...c
}) => {
  const u = nr();
  return /* @__PURE__ */ Te(
    wd,
    {
      sx: {
        position: "relative",
        padding: "1rem",
        marginBottom: i ? u.spacing(i) : 0,
        marginTop: s ? u.spacing(s) : 0,
        minHeight: l ? "100px" : "auto",
        borderRadius: "8px",
        ...t,
        ...n
      },
      component: r,
      onSubmit: a,
      ...c,
      children: [
        l && /* @__PURE__ */ P(Br, {}),
        e
      ]
    }
  );
};
_c.propTypes = {
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
const vi = ({
  open: e,
  onClose: t,
  children: n,
  style: r,
  renderBox: a = !0,
  disableCloseOnBackdropClick: i = !1,
  isLoading: s = !1,
  ...l
}) => {
  const c = (u, d) => {
    i && d === "backdropClick" || t(u, d);
  };
  return /* @__PURE__ */ P(
    Td,
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
      children: /* @__PURE__ */ Te(Cd, { sx: { position: "relative" }, children: [
        s && /* @__PURE__ */ P(Br, {}),
        a ? /* @__PURE__ */ P(_c, { style: r, children: n }) : /* @__PURE__ */ P("div", { style: r, children: n }),
        /* @__PURE__ */ P(
          Rd,
          {
            onClick: c,
            sx: {
              position: "absolute",
              top: 2,
              right: 2
            },
            children: /* @__PURE__ */ P(Wd, {})
          }
        )
      ] })
    }
  );
};
vi.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  children: o.node.isRequired,
  style: o.object,
  renderBox: o.bool,
  disableCloseOnBackdropClick: o.bool,
  isLoading: o.bool
};
const Mm = ({
  open: e,
  title: t,
  description: n,
  onConfirm: r,
  onCancel: a,
  isLoading: i,
  error: s,
  children: l,
  sx: c
}) => {
  const u = () => {
    typeof r == "function" && r();
  }, d = () => {
    !i && a && a();
  };
  return /* @__PURE__ */ Te(
    vi,
    {
      open: e,
      onClose: d,
      sx: {
        margin: "0 auto",
        maxWidth: 400,
        ...c
      },
      children: [
        i && /* @__PURE__ */ P(Br, {}),
        /* @__PURE__ */ P(sn, { fontWeight: "bold", variant: "h6", mb: 1, children: /* @__PURE__ */ P("strong", { children: t ?? "" }) }),
        /* @__PURE__ */ P(rc, { sx: { mb: 2 } }),
        /* @__PURE__ */ P(an, { mb: 1, fontSize: 16, textAlign: "center", children: n ?? "" }),
        /* @__PURE__ */ Te(an, { direction: "column", mb: 2, children: [
          l,
          s && /* @__PURE__ */ Te(an, { alignItems: "center", direction: "row", mt: 1, children: [
            /* @__PURE__ */ P(
              uc,
              {
                color: "error",
                sx: { marginRight: ".5rem", fontSize: "2rem" }
              }
            ),
            /* @__PURE__ */ P(sn, { color: "error", fontSize: "16px", children: typeof s == "string" ? s : "Ocurrió un error, intente nuevamente." })
          ] })
        ] }),
        /* @__PURE__ */ Te(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "end"
            },
            children: [
              /* @__PURE__ */ P(Ca, { color: "secondary", onClick: d, disabled: i, children: "Cancelar" }),
              /* @__PURE__ */ P(Ca, { onClick: u, disabled: i, children: s ? "Reintentar" : "Confirmar" })
            ]
          }
        )
      ]
    }
  );
};
Mm.propTypes = {
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
const km = ({ name: e, profile_picture: t, size: n = 120, sx: r, ...a }) => /* @__PURE__ */ P(
  Pd,
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
    ...a
  }
);
km.propTypes = {
  profile_picture: o.shape({
    url: o.string
  }),
  size: o.number,
  sx: o.object,
  name: o.string
};
function _m(e) {
  const { children: t, value: n, index: r, ...a } = e;
  return /* @__PURE__ */ P("div", { role: "tabpanel", hidden: n !== r, ...a, children: n === r && t });
}
_m.propTypes = {
  index: o.number,
  value: o.any,
  children: o.node
};
const yi = (e) => {
  const t = nr(), { orderBy: n, orderDirection: r, headCells: a, handleSortRequest: i } = e, s = (l) => (c) => {
    i(c, l);
  };
  return /* @__PURE__ */ P($d, { sx: { backgroundColor: t.palette.table.header }, children: /* @__PURE__ */ P(Nr, { children: a.map((l) => /* @__PURE__ */ P(Mr, { component: "th", width: l.width, children: l.isSortable ? /* @__PURE__ */ P(
    Id,
    {
      active: n === l.id,
      direction: n === l.id ? r : "asc",
      onClick: s(l.id),
      children: l.label
    }
  ) : /* @__PURE__ */ P("span", { children: l.label }) }, l.id)) }) });
};
yi.propTypes = {
  orderBy: o.string,
  orderDirection: o.string,
  headCells: o.array,
  handleSortRequest: o.func
};
const Am = ({
  control: e,
  defaultChecked: t = !1,
  name: n,
  labelText: r = "",
  labelPlacement: a = "end",
  ...i
}) => /* @__PURE__ */ P(jr, { children: /* @__PURE__ */ P(
  Wr,
  {
    control: e,
    name: n,
    defaultValue: t,
    render: ({ field: s }) => /* @__PURE__ */ P(
      oc,
      {
        labelPlacement: a,
        control: /* @__PURE__ */ P(
          Nd,
          {
            ref: s.ref,
            onChange: (l) => s.onChange(l.target.checked),
            checked: !!s.value,
            name: n,
            ...i
          }
        ),
        label: r
      }
    )
  }
) });
Am.propTypes = {
  control: o.object.isRequired,
  defaultChecked: o.bool,
  name: o.string.isRequired,
  labelText: o.string,
  fullWidth: o.bool,
  labelPlacement: o.string
};
const Dm = ({
  control: e,
  name: t,
  labelText: n = "",
  required: r,
  fullWidth: a = !0,
  InputProps: i,
  InputLabelProps: s,
  parentRef: l,
  multiline: c,
  rows: u,
  helperText: d,
  ...f
}) => /* @__PURE__ */ P(jr, { fullWidth: a, ...f, children: /* @__PURE__ */ P(
  Wr,
  {
    control: e,
    name: t,
    render: ({ field: { onChange: p, onBlur: h, value: E, name: v, ref: m } }) => /* @__PURE__ */ P(
      Md,
      {
        helperText: d,
        multiline: c,
        rows: u,
        required: r,
        label: n,
        onBlur: h,
        onChange: p,
        inputRef: l || m,
        value: E || "",
        name: v,
        InputProps: i,
        InputLabelProps: s,
        ...f
      }
    )
  }
) });
Dm.propTypes = {
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
const Fm = ({ open: e, onConfirm: t, children: n }) => {
  const r = () => {
    typeof t == "function" && t();
  };
  return /* @__PURE__ */ Te(
    vi,
    {
      open: e,
      onClose: r,
      style: {
        maxWidth: "400px"
      },
      children: [
        /* @__PURE__ */ P(sn, { fontWeight: "bold", variant: "h6", mb: 1, color: "error", children: "Error" }),
        /* @__PURE__ */ P(rc, { sx: { mb: 2 } }),
        /* @__PURE__ */ P(an, { direction: "column", mb: 2, children: n && /* @__PURE__ */ Te(an, { alignItems: "center", children: [
          /* @__PURE__ */ P(uc, { color: "error", sx: { mb: "1rem", fontSize: "3rem" } }),
          /* @__PURE__ */ P(sn, { color: "error", fontSize: "16px", textAlign: "center", children: n })
        ] }) }),
        /* @__PURE__ */ P(an, { direction: "row", justifyContent: "end", children: /* @__PURE__ */ P(Ca, { onClick: r, children: "Aceptar" }) })
      ]
    }
  );
};
Fm.propTypes = {
  open: o.bool.isRequired,
  onConfirm: o.func,
  children: o.node
};
function Lm({ money: e, ...t }) {
  return /* @__PURE__ */ P(sn, { component: "span", fontSize: 14, ...t, children: Number(e).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS"
  }) });
}
Lm.propTypes = {
  money: o.number.isRequired
};
const jm = ({ title: e, renderAside: t }) => /* @__PURE__ */ Te(
  an,
  {
    display: "flex",
    direction: { sm: "row", xs: "column" },
    alignItems: { sm: "center", xs: "flex-start" },
    justifyContent: { sm: "space-between", xs: "flex-start" },
    marginBottom: 2,
    children: [
      /* @__PURE__ */ P(sn, { fontWeight: "bold", fontSize: 24, children: e }),
      t && /* @__PURE__ */ P(an, { mt: { xs: 2, sm: 0 }, children: t })
    ]
  }
);
jm.propTypes = {
  title: o.string.isRequired,
  renderAside: o.node
};
function Wm(e = []) {
  return e.map((t) => /* @__PURE__ */ P(Ad, { value: t.id, children: t.name }, t.id));
}
const Ac = ({
  control: e,
  data: t,
  name: n,
  labelText: r = "",
  required: a = !1,
  disabled: i = !1,
  render: s,
  ...l
}) => {
  const c = Od(), u = s || Wm;
  return /* @__PURE__ */ Te(jr, { fullWidth: !0, children: [
    /* @__PURE__ */ P(kd, { id: c, required: a, disabled: i, children: r }),
    /* @__PURE__ */ P(
      Wr,
      {
        control: e,
        name: n,
        render: ({ field: { onChange: d, onBlur: f, value: p, name: h, ref: E } }) => /* @__PURE__ */ P(
          _d,
          {
            required: a,
            labelId: c,
            label: r,
            onBlur: f,
            onChange: d,
            inputRef: E,
            value: p || "",
            name: h,
            disabled: i,
            ...l,
            children: t.length > 0 && u(t)
          }
        )
      }
    )
  ] });
};
Ac.propTypes = {
  control: o.object.isRequired,
  data: o.array,
  name: o.string.isRequired,
  labelText: o.string,
  createOption: o.func,
  required: o.bool,
  disabled: o.bool,
  render: o.func
};
Ac.defaultProps = {
  data: []
};
function vo(e) {
  "@babel/helpers - typeof";
  return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vo(e);
}
function un(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function st(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function wt(e) {
  st(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || vo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Bm(e, t) {
  st(2, arguments);
  var n = wt(e).getTime(), r = un(t);
  return new Date(n + r);
}
var Um = {};
function qr() {
  return Um;
}
function _r(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function As(e) {
  st(1, arguments);
  var t = wt(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Vm = 864e5;
function zm(e, t) {
  st(2, arguments);
  var n = As(e), r = As(t), a = n.getTime() - _r(n), i = r.getTime() - _r(r);
  return Math.round((a - i) / Vm);
}
function Dc(e) {
  return st(1, arguments), e instanceof Date || vo(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ma(e) {
  if (st(1, arguments), !Dc(e) && typeof e != "number")
    return !1;
  var t = wt(e);
  return !isNaN(Number(t));
}
function ka(e, t) {
  st(2, arguments);
  var n = un(t);
  return Bm(e, -n);
}
var qm = 864e5;
function Hm(e) {
  st(1, arguments);
  var t = wt(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / qm) + 1;
}
function yo(e) {
  st(1, arguments);
  var t = 1, n = wt(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Fc(e) {
  st(1, arguments);
  var t = wt(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = yo(r), i = /* @__PURE__ */ new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = yo(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Ym(e) {
  st(1, arguments);
  var t = Fc(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = yo(n);
  return r;
}
var Km = 6048e5;
function Gm(e) {
  st(1, arguments);
  var t = wt(e), n = yo(t).getTime() - Ym(t).getTime();
  return Math.round(n / Km) + 1;
}
function go(e, t) {
  var n, r, a, i, s, l, c, u;
  st(1, arguments);
  var d = qr(), f = un((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = wt(e), h = p.getUTCDay(), E = (h < f ? 7 : 0) + h - f;
  return p.setUTCDate(p.getUTCDate() - E), p.setUTCHours(0, 0, 0, 0), p;
}
function Lc(e, t) {
  var n, r, a, i, s, l, c, u;
  st(1, arguments);
  var d = wt(e), f = d.getUTCFullYear(), p = qr(), h = un((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = /* @__PURE__ */ new Date(0);
  E.setUTCFullYear(f + 1, 0, h), E.setUTCHours(0, 0, 0, 0);
  var v = go(E, t), m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(f, 0, h), m.setUTCHours(0, 0, 0, 0);
  var O = go(m, t);
  return d.getTime() >= v.getTime() ? f + 1 : d.getTime() >= O.getTime() ? f : f - 1;
}
function Qm(e, t) {
  var n, r, a, i, s, l, c, u;
  st(1, arguments);
  var d = qr(), f = un((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Lc(e, t), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(p, 0, f), h.setUTCHours(0, 0, 0, 0);
  var E = go(h, t);
  return E;
}
var Xm = 6048e5;
function Jm(e, t) {
  st(1, arguments);
  var n = wt(e), r = go(n, t).getTime() - Qm(n, t).getTime();
  return Math.round(r / Xm) + 1;
}
function je(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Zm = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return je(n === "yy" ? a % 100 : a, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : je(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return je(t.getUTCDate(), n.length);
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
    return je(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return je(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return je(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return je(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), i = Math.floor(a * Math.pow(10, r - 3));
    return je(i, n.length);
  }
};
const tn = Zm;
var Wn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, eh = {
  // Era
  G: function(t, n, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var a = t.getUTCFullYear(), i = a > 0 ? a : 1 - a;
      return r.ordinalNumber(i, {
        unit: "year"
      });
    }
    return tn.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, a) {
    var i = Lc(t, a), s = i > 0 ? i : 1 - i;
    if (n === "YY") {
      var l = s % 100;
      return je(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : je(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Fc(t);
    return je(r, n.length);
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
    return je(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return je(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return je(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return tn.M(t, n);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return je(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, a) {
    var i = Jm(t, a);
    return n === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : je(i, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = Gm(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : je(a, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : tn.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var a = Hm(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : je(a, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var a = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, a) {
    var i = t.getUTCDay(), s = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return je(s, 2);
      case "eo":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, a) {
    var i = t.getUTCDay(), s = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return je(s, n.length);
      case "co":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var a = t.getUTCDay(), i = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return je(i, n.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var a = t.getUTCHours(), i = a / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a === 12 ? i = Wn.noon : a === 0 ? i = Wn.midnight : i = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a >= 17 ? i = Wn.evening : a >= 12 ? i = Wn.afternoon : a >= 4 ? i = Wn.morning : i = Wn.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return tn.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : tn.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : je(a, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : je(a, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : tn.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : tn.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return tn.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return Fs(s);
      case "XXXX":
      case "XX":
        return yn(s);
      case "XXXXX":
      case "XXX":
      default:
        return yn(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return Fs(s);
      case "xxxx":
      case "xx":
        return yn(s);
      case "xxxxx":
      case "xxx":
      default:
        return yn(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ds(s, ":");
      case "OOOO":
      default:
        return "GMT" + yn(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ds(s, ":");
      case "zzzz":
      default:
        return "GMT" + yn(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, a) {
    var i = a._originalDate || t, s = Math.floor(i.getTime() / 1e3);
    return je(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTime();
    return je(s, n.length);
  }
};
function Ds(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(a);
  var s = t || "";
  return n + String(a) + s + je(i, 2);
}
function Fs(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + je(Math.abs(e) / 60, 2);
  }
  return yn(e, t);
}
function yn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), i = je(Math.floor(a / 60), 2), s = je(a % 60, 2);
  return r + i + n + s;
}
const th = eh;
var Ls = function(t, n) {
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
}, jc = function(t, n) {
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
}, nh = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], i = r[2];
  if (!i)
    return Ls(t, n);
  var s;
  switch (a) {
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
  return s.replace("{{date}}", Ls(a, n)).replace("{{time}}", jc(i, n));
}, rh = {
  p: jc,
  P: nh
};
const oh = rh;
var ah = ["D", "DD"], ih = ["YY", "YYYY"];
function sh(e) {
  return ah.indexOf(e) !== -1;
}
function lh(e) {
  return ih.indexOf(e) !== -1;
}
function js(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var ch = {
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
}, uh = function(t, n, r) {
  var a, i = ch[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const dh = uh;
function Yn(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var fh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ph = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, mh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, hh = {
  date: Yn({
    formats: fh,
    defaultWidth: "full"
  }),
  time: Yn({
    formats: ph,
    defaultWidth: "full"
  }),
  dateTime: Yn({
    formats: mh,
    defaultWidth: "full"
  })
};
const vh = hh;
var yh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, gh = function(t, n, r, a) {
  return yh[t];
};
const bh = gh;
function jt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[s] || e.formattingValues[i];
    } else {
      var l = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[c] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[u];
  };
}
var Eh = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, xh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Oh = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Sh = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, wh = {
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
}, Th = {
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
}, Ch = function(t, n) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Rh = {
  ordinalNumber: Ch,
  era: jt({
    values: Eh,
    defaultWidth: "wide"
  }),
  quarter: jt({
    values: xh,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: jt({
    values: Oh,
    defaultWidth: "wide"
  }),
  day: jt({
    values: Sh,
    defaultWidth: "wide"
  }),
  dayPeriod: jt({
    values: wh,
    defaultWidth: "wide",
    formattingValues: Th,
    defaultFormattingWidth: "wide"
  })
};
const Ph = Rh;
function Wt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    var s = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? Ih(l, function(f) {
      return f.test(s);
    }) : $h(l, function(f) {
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
function $h(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Ih(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Wc(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var l = t.slice(a.length);
    return {
      value: s,
      rest: l
    };
  };
}
var Nh = /^(\d+)(th|st|nd|rd)?/i, Mh = /\d+/i, kh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, _h = {
  any: [/^b/i, /^(a|c)/i]
}, Ah = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Dh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Fh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Lh = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, jh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Wh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Bh = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Uh = {
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
}, Vh = {
  ordinalNumber: Wc({
    matchPattern: Nh,
    parsePattern: Mh,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Wt({
    matchPatterns: kh,
    defaultMatchWidth: "wide",
    parsePatterns: _h,
    defaultParseWidth: "any"
  }),
  quarter: Wt({
    matchPatterns: Ah,
    defaultMatchWidth: "wide",
    parsePatterns: Dh,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Wt({
    matchPatterns: Fh,
    defaultMatchWidth: "wide",
    parsePatterns: Lh,
    defaultParseWidth: "any"
  }),
  day: Wt({
    matchPatterns: jh,
    defaultMatchWidth: "wide",
    parsePatterns: Wh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Wt({
    matchPatterns: Bh,
    defaultMatchWidth: "any",
    parsePatterns: Uh,
    defaultParseWidth: "any"
  })
};
const zh = Vh;
var qh = {
  code: "en-US",
  formatDistance: dh,
  formatLong: vh,
  formatRelative: bh,
  localize: Ph,
  match: zh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Bc = qh;
var Hh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Yh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Kh = /^'([^]*?)'?$/, Gh = /''/g, Qh = /[a-zA-Z]/;
function Uc(e, t, n) {
  var r, a, i, s, l, c, u, d, f, p, h, E, v, m, O, T, x, g;
  st(2, arguments);
  var y = String(t), C = qr(), R = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : C.locale) !== null && r !== void 0 ? r : Bc, $ = un((i = (s = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : C.firstWeekContainsDate) !== null && s !== void 0 ? s : (f = C.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!($ >= 1 && $ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var F = un((h = (E = (v = (m = n == null ? void 0 : n.weekStartsOn) !== null && m !== void 0 ? m : n == null || (O = n.locale) === null || O === void 0 || (T = O.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && v !== void 0 ? v : C.weekStartsOn) !== null && E !== void 0 ? E : (x = C.locale) === null || x === void 0 || (g = x.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(F >= 0 && F <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!R.localize)
    throw new RangeError("locale must contain localize property");
  if (!R.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var k = wt(e);
  if (!Ma(k))
    throw new RangeError("Invalid time value");
  var _ = _r(k), z = ka(k, _), U = {
    firstWeekContainsDate: $,
    weekStartsOn: F,
    locale: R,
    _originalDate: k
  }, L = y.match(Yh).map(function(D) {
    var B = D[0];
    if (B === "p" || B === "P") {
      var q = oh[B];
      return q(D, R.formatLong);
    }
    return D;
  }).join("").match(Hh).map(function(D) {
    if (D === "''")
      return "'";
    var B = D[0];
    if (B === "'")
      return Xh(D);
    var q = th[B];
    if (q)
      return !(n != null && n.useAdditionalWeekYearTokens) && lh(D) && js(D, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && sh(D) && js(D, t, String(e)), q(z, D, R.localize, U);
    if (B.match(Qh))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + B + "`");
    return D;
  }).join("");
  return L;
}
function Xh(e) {
  var t = e.match(Kh);
  return t ? t[1].replace(Gh, "'") : e;
}
function Jh(e, t, n) {
  var r, a, i, s, l, c, u, d, f, p;
  st(2, arguments);
  var h = wt(e), E = wt(t), v = qr(), m = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : v.locale) !== null && r !== void 0 ? r : Bc, O = un((i = (s = (l = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && l !== void 0 ? l : v.weekStartsOn) !== null && s !== void 0 ? s : (f = v.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && i !== void 0 ? i : 0);
  if (!m.localize)
    throw new RangeError("locale must contain localize property");
  if (!m.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!m.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var T = zm(h, E);
  if (isNaN(T))
    throw new RangeError("Invalid time value");
  var x;
  T < -6 ? x = "other" : T < -1 ? x = "lastWeek" : T < 0 ? x = "yesterday" : T < 1 ? x = "today" : T < 2 ? x = "tomorrow" : T < 7 ? x = "nextWeek" : x = "other";
  var g = ka(h, _r(h)), y = ka(E, _r(E)), C = m.formatRelative(x, g, y, {
    locale: m,
    weekStartsOn: O
  });
  return Uc(h, C, {
    locale: m,
    weekStartsOn: O
  });
}
function Zh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _a(e, t) {
  return _a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, _a(e, t);
}
const St = {
  ASC: "asc",
  DESC: "desc"
};
function ev(e, t, n, r = St.ASC, a = null) {
  let i = e[n] ?? "", s = t[n] ?? "";
  if (Ma(new Date(i)) && Ma(new Date(s)))
    return i = new Date(i), s = new Date(s), r === St.ASC ? i - s : s - i;
  n === "status" && (i = i.deleted_at ? "inactivo" : "activo", s = s.deleted_at ? "inactivo" : "activo"), typeof a == "function" && (i = a(e, n), s = a(t, n)), (typeof i == "object" || typeof s == "object") && (i = i.name, s = s.name), i = String(i).toLowerCase().trim(), s = String(s).toLowerCase().trim();
  const l = i.localeCompare(s);
  return r === St.ASC ? l : -l;
}
const Vc = Dd({
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
}), tv = (e) => {
  const {
    headCells: t,
    records: n = [],
    defaultRowsPerPage: r = 25,
    isLoading: a = !1,
    onDeleteItem: i = null,
    onEditItem: s = null,
    defaultOrderBy: l = "",
    customPropertiesComparator: c = null,
    defaultOrderDirection: u = St.ASC,
    Row: d
  } = e, [f, p] = Yt(u), [h, E] = Yt(l), [v, m] = Yt(0), [O, T] = Yt(r), x = ($, F) => {
    const k = h === F && f === St.ASC;
    p(k ? St.DESC : St.ASC), E(F);
  }, g = ($, F) => {
    m(F);
  }, y = ($) => {
    T(parseInt($.target.value, 10)), m(0);
  }, R = (() => {
    const $ = n.map((k, _) => [k, _]);
    return $.sort((k, _) => {
      const z = ev(
        k[0],
        _[0],
        h,
        f,
        c
      );
      return z !== 0 ? z : k[1] - _[1];
    }), $.map((k) => k[0]).slice(
      v * O,
      v * O + O
    );
  })();
  return /* @__PURE__ */ Te(ac, { theme: Vc, children: [
    /* @__PURE__ */ P(ic, { children: /* @__PURE__ */ Te(sc, { children: [
      /* @__PURE__ */ P(
        yi,
        {
          headCells: t,
          orderBy: h,
          orderDirection: f,
          handleSortRequest: x
        }
      ),
      /* @__PURE__ */ Te(lc, { children: [
        a && /* @__PURE__ */ P(Nr, { children: /* @__PURE__ */ P(Mr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ P(Br, {}) }) }),
        (R == null ? void 0 : R.length) > 0 ? R.map(($) => /* @__PURE__ */ P(
          d,
          {
            data: $,
            onDeleteItem: i,
            onEditItem: s
          },
          $.id
        )) : /* @__PURE__ */ P(Nr, { children: /* @__PURE__ */ P(Mr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ P(sn, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ P(
      cc,
      {
        rowsPerPage: O,
        page: v,
        count: n.length,
        component: "div",
        rowsPerPageOptions: [5, 10, 25, 50, 100],
        onPageChange: g,
        onRowsPerPageChange: y
      }
    )
  ] });
};
tv.propTypes = {
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
var nv = {
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
}, rv = function(t, n, r) {
  var a, i = nv[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + a : "hace " + a : a;
};
const ov = rv;
var av = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, iv = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, sv = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, lv = {
  date: Yn({
    formats: av,
    defaultWidth: "full"
  }),
  time: Yn({
    formats: iv,
    defaultWidth: "full"
  }),
  dateTime: Yn({
    formats: sv,
    defaultWidth: "full"
  })
};
const cv = lv;
var uv = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, dv = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, fv = function(t, n, r, a) {
  return n.getUTCHours() !== 1 ? dv[t] : uv[t];
};
const pv = fv;
var mv = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, hv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, vv = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, yv = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, gv = {
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
}, bv = {
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
}, Ev = function(t, n) {
  var r = Number(t);
  return r + "º";
}, xv = {
  ordinalNumber: Ev,
  era: jt({
    values: mv,
    defaultWidth: "wide"
  }),
  quarter: jt({
    values: hv,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: jt({
    values: vv,
    defaultWidth: "wide"
  }),
  day: jt({
    values: yv,
    defaultWidth: "wide"
  }),
  dayPeriod: jt({
    values: gv,
    defaultWidth: "wide",
    formattingValues: bv,
    defaultFormattingWidth: "wide"
  })
};
const Ov = xv;
var Sv = /^(\d+)(º)?/i, wv = /\d+/i, Tv = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Cv = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, Rv = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Pv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $v = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, Iv = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, Nv = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, Mv = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, kv = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, _v = {
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
}, Av = {
  ordinalNumber: Wc({
    matchPattern: Sv,
    parsePattern: wv,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Wt({
    matchPatterns: Tv,
    defaultMatchWidth: "wide",
    parsePatterns: Cv,
    defaultParseWidth: "any"
  }),
  quarter: Wt({
    matchPatterns: Rv,
    defaultMatchWidth: "wide",
    parsePatterns: Pv,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Wt({
    matchPatterns: $v,
    defaultMatchWidth: "wide",
    parsePatterns: Iv,
    defaultParseWidth: "any"
  }),
  day: Wt({
    matchPatterns: Nv,
    defaultMatchWidth: "wide",
    parsePatterns: Mv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Wt({
    matchPatterns: kv,
    defaultMatchWidth: "any",
    parsePatterns: _v,
    defaultParseWidth: "any"
  })
};
const Dv = Av;
var Fv = {
  code: "es",
  formatDistance: ov,
  formatLong: cv,
  formatRelative: pv,
  localize: Ov,
  match: Dv,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Lv = Fv, jv = ({ isoDateTimeString: e, relative: t = !1, showTime: n = !0 }) => {
  const r = Dc(e) ? e : new Date(e), a = n ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy";
  return t ? /* @__PURE__ */ P("span", { children: Jh(r, /* @__PURE__ */ new Date(), {
    locale: Lv
  }) }) : /* @__PURE__ */ P("span", { children: Uc(r, a) });
};
jv.propTypes = {
  isoDateTimeString: o.string.isRequired,
  relative: o.bool,
  showTime: o.bool
};
const Wv = ({
  control: e,
  defaultChecked: t = !1,
  name: n,
  labelText: r = "",
  labelPlacement: a = "end",
  ...i
}) => /* @__PURE__ */ P(jr, { children: /* @__PURE__ */ P(
  Wr,
  {
    control: e,
    name: n,
    defaultValue: t,
    render: ({ field: s }) => /* @__PURE__ */ P(
      oc,
      {
        labelPlacement: a,
        control: /* @__PURE__ */ P(
          Fd,
          {
            ref: s.ref,
            onChange: (l) => s.onChange(l.target.checked),
            checked: !!s.value,
            name: n,
            ...i
          }
        ),
        label: r
      }
    )
  }
) });
Wv.propTypes = {
  control: o.object.isRequired,
  defaultChecked: o.bool,
  name: o.string.isRequired,
  labelText: o.string,
  fullWidth: o.bool,
  labelPlacement: o.string
};
class gi {
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
const bo = typeof window > "u" || "Deno" in window;
function Bv() {
}
function Ws(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Uv(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Vv(e, t, n) {
  return zv(e) ? typeof t == "function" ? {
    ...n,
    queryKey: e,
    queryFn: t
  } : {
    ...t,
    queryKey: e
  } : e;
}
function zc(e, t) {
  if (e === t)
    return e;
  const n = Bs(e) && Bs(t);
  if (n || Us(e) && Us(t)) {
    const r = n ? e.length : Object.keys(e).length, a = n ? t : Object.keys(t), i = a.length, s = n ? [] : {};
    let l = 0;
    for (let c = 0; c < i; c++) {
      const u = n ? c : a[c];
      s[u] = zc(e[u], t[u]), s[u] === e[u] && l++;
    }
    return r === i && l === r ? e : s;
  }
  return t;
}
function Aa(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Bs(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Us(e) {
  if (!Vs(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const n = t.prototype;
  return !(!Vs(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Vs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function zv(e) {
  return Array.isArray(e);
}
function qv(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function zs(e) {
  qv(0).then(e);
}
function qs(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? zc(e, t) : t;
}
class Hv extends gi {
  constructor() {
    super(), this.setup = (t) => {
      if (!bo && window.addEventListener) {
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
const Yv = new Hv(), Hs = ["online", "offline"];
class Kv extends gi {
  constructor() {
    super(), this.setup = (t) => {
      if (!bo && window.addEventListener) {
        const n = () => t();
        return Hs.forEach((r) => {
          window.addEventListener(r, n, !1);
        }), () => {
          Hs.forEach((r) => {
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
const Gv = new Kv();
function Qv(e) {
  return (e ?? "online") === "online" ? Gv.isOnline() : !0;
}
class Xv {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
}
function Jv(e) {
  return e instanceof Xv;
}
function Zv() {
  let e = [], t = 0, n = (d) => {
    d();
  }, r = (d) => {
    d();
  };
  const a = (d) => {
    let f;
    t++;
    try {
      f = d();
    } finally {
      t--, t || l();
    }
    return f;
  }, i = (d) => {
    t ? e.push(d) : zs(() => {
      n(d);
    });
  }, s = (d) => (...f) => {
    i(() => {
      d(...f);
    });
  }, l = () => {
    const d = e;
    e = [], d.length && zs(() => {
      r(() => {
        d.forEach((f) => {
          n(f);
        });
      });
    });
  };
  return {
    batch: a,
    batchCalls: s,
    schedule: i,
    setNotifyFunction: (d) => {
      n = d;
    },
    setBatchNotifyFunction: (d) => {
      r = d;
    }
  };
}
const br = Zv();
class ey extends gi {
  constructor(t, n) {
    super(), this.client = t, this.options = n, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), Ys(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Da(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Da(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, a = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(t), process.env.NODE_ENV !== "production" && typeof (t == null ? void 0 : t.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), Aa(r, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
    const i = this.hasListeners();
    i && Ks(this.currentQuery, a, this.options, r) && this.executeFetch(), this.updateResult(n), i && (this.currentQuery !== a || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
    const s = this.computeRefetchInterval();
    i && (this.currentQuery !== a || this.options.enabled !== r.enabled || s !== this.currentRefetchInterval) && this.updateRefetchInterval(s);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t), r = this.createResult(n, t);
    return ny(this, r, t) && (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r;
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
    return t != null && t.throwOnError || (n = n.catch(Bv)), n;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), bo || this.currentResult.isStale || !Ws(this.options.staleTime))
      return;
    const n = Uv(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (t = this.options.refetchInterval) != null ? t : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(), this.currentRefetchInterval = t, !(bo || this.options.enabled === !1 || !Ws(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || Yv.isFocused()) && this.executeFetch();
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
    const r = this.currentQuery, a = this.options, i = this.currentResult, s = this.currentResultState, l = this.currentResultOptions, c = t !== r, u = c ? t.state : this.currentQueryInitialState, d = c ? this.currentResult : this.previousQueryResult, {
      state: f
    } = t;
    let {
      dataUpdatedAt: p,
      error: h,
      errorUpdatedAt: E,
      fetchStatus: v,
      status: m
    } = f, O = !1, T = !1, x;
    if (n._optimisticResults) {
      const $ = this.hasListeners(), F = !$ && Ys(t, n), k = $ && Ks(t, r, n, a);
      (F || k) && (v = Qv(t.options.networkMode) ? "fetching" : "paused", p || (m = "loading")), n._optimisticResults === "isRestoring" && (v = "idle");
    }
    if (n.keepPreviousData && !f.dataUpdatedAt && d != null && d.isSuccess && m !== "error")
      x = d.data, p = d.dataUpdatedAt, m = d.status, O = !0;
    else if (n.select && typeof f.data < "u")
      if (i && f.data === (s == null ? void 0 : s.data) && n.select === this.selectFn)
        x = this.selectResult;
      else
        try {
          this.selectFn = n.select, x = n.select(f.data), x = qs(i == null ? void 0 : i.data, x, n), this.selectResult = x, this.selectError = null;
        } catch ($) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error($), this.selectError = $;
        }
    else
      x = f.data;
    if (typeof n.placeholderData < "u" && typeof x > "u" && m === "loading") {
      let $;
      if (i != null && i.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        $ = i.data;
      else if ($ = typeof n.placeholderData == "function" ? n.placeholderData() : n.placeholderData, n.select && typeof $ < "u")
        try {
          $ = n.select($), this.selectError = null;
        } catch (F) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(F), this.selectError = F;
        }
      typeof $ < "u" && (m = "success", x = qs(i == null ? void 0 : i.data, $, n), T = !0);
    }
    this.selectError && (h = this.selectError, x = this.selectResult, E = Date.now(), m = "error");
    const g = v === "fetching", y = m === "loading", C = m === "error";
    return {
      status: m,
      fetchStatus: v,
      isLoading: y,
      isSuccess: m === "success",
      isError: C,
      isInitialLoading: y && g,
      data: x,
      dataUpdatedAt: p,
      error: h,
      errorUpdatedAt: E,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
      isFetching: g,
      isRefetching: g && !y,
      isLoadingError: C && f.dataUpdatedAt === 0,
      isPaused: v === "paused",
      isPlaceholderData: T,
      isPreviousData: O,
      isRefetchError: C && f.dataUpdatedAt !== 0,
      isStale: bi(t, n),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(t) {
    const n = this.currentResult, r = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, Aa(r, n))
      return;
    this.currentResult = r;
    const a = {
      cache: !0
    }, i = () => {
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
    (t == null ? void 0 : t.listeners) !== !1 && i() && (a.listeners = !0), this.notify({
      ...a,
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
    t.type === "success" ? n.onSuccess = !t.manual : t.type === "error" && !Jv(t.error) && (n.onError = !0), this.updateResult(n), this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    br.batch(() => {
      if (t.onSuccess) {
        var n, r, a, i;
        (n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data), (a = (i = this.options).onSettled) == null || a.call(i, this.currentResult.data, null);
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
function ty(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Ys(e, t) {
  return ty(e, t) || e.state.dataUpdatedAt > 0 && Da(e, t, t.refetchOnMount);
}
function Da(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && bi(e, t);
  }
  return !1;
}
function Ks(e, t, n, r) {
  return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && bi(e, n);
}
function bi(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function ny(e, t, n) {
  return n.keepPreviousData ? !1 : n.placeholderData !== void 0 ? t.isPlaceholderData : !Aa(e.getCurrentResult(), t);
}
var Fa = { exports: {} }, sa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function ry() {
  if (Gs)
    return sa;
  Gs = 1;
  var e = Ot;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, a = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function l(f, p) {
    var h = p(), E = r({ inst: { value: h, getSnapshot: p } }), v = E[0].inst, m = E[1];
    return i(function() {
      v.value = h, v.getSnapshot = p, c(v) && m({ inst: v });
    }, [f, h, p]), a(function() {
      return c(v) && m({ inst: v }), f(function() {
        c(v) && m({ inst: v });
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
  return sa.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, sa;
}
var la = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function oy() {
  return Qs || (Qs = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ot, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), C = 1; C < g; C++)
          y[C - 1] = arguments[C];
        r("error", x, y);
      }
    }
    function r(x, g, y) {
      {
        var C = t.ReactDebugCurrentFrame, R = C.getStackAddendum();
        R !== "" && (g += "%s", y = y.concat([R]));
        var $ = y.map(function(F) {
          return String(F);
        });
        $.unshift("Warning: " + g), Function.prototype.apply.call(console[x], console, $);
      }
    }
    function a(x, g) {
      return x === g && (x !== 0 || 1 / x === 1 / g) || x !== x && g !== g;
    }
    var i = typeof Object.is == "function" ? Object.is : a, s = e.useState, l = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue, d = !1, f = !1;
    function p(x, g, y) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var C = g();
      if (!f) {
        var R = g();
        i(C, R) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var $ = s({
        inst: {
          value: C,
          getSnapshot: g
        }
      }), F = $[0].inst, k = $[1];
      return c(function() {
        F.value = C, F.getSnapshot = g, h(F) && k({
          inst: F
        });
      }, [x, C, g]), l(function() {
        h(F) && k({
          inst: F
        });
        var _ = function() {
          h(F) && k({
            inst: F
          });
        };
        return x(_);
      }, [x]), u(C), C;
    }
    function h(x) {
      var g = x.getSnapshot, y = x.value;
      try {
        var C = g();
        return !i(y, C);
      } catch {
        return !0;
      }
    }
    function E(x, g, y) {
      return g();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !v, O = m ? E : p, T = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : O;
    la.useSyncExternalStore = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), la;
}
process.env.NODE_ENV === "production" ? Fa.exports = ry() : Fa.exports = oy();
var ay = Fa.exports;
const iy = ay.useSyncExternalStore, Xs = /* @__PURE__ */ b.createContext(void 0), sy = /* @__PURE__ */ b.createContext(!1);
function ly(e, t) {
  return e || (t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Xs), window.ReactQueryClientContext) : Xs);
}
const cy = ({
  context: e
} = {}) => {
  const t = b.useContext(ly(e, b.useContext(sy)));
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, qc = /* @__PURE__ */ b.createContext(!1), uy = () => b.useContext(qc);
qc.Provider;
function dy() {
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
const fy = /* @__PURE__ */ b.createContext(dy()), py = () => b.useContext(fy);
function my(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const hy = (e, t) => {
  (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
}, vy = (e) => {
  b.useEffect(() => {
    e.clearReset();
  }, [e]);
}, yy = ({
  result: e,
  errorResetBoundary: t,
  useErrorBoundary: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && my(n, [e.error, r]), gy = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, by = (e, t) => e.isLoading && e.isFetching && !t, Ey = (e, t, n) => (e == null ? void 0 : e.suspense) && by(t, n), xy = (e, t, n) => t.fetchOptimistic(e).then(({
  data: r
}) => {
  e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null);
}).catch((r) => {
  n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r);
});
function Oy(e, t) {
  const n = cy({
    context: e.context
  }), r = uy(), a = py(), i = n.defaultQueryOptions(e);
  i._optimisticResults = r ? "isRestoring" : "optimistic", i.onError && (i.onError = br.batchCalls(i.onError)), i.onSuccess && (i.onSuccess = br.batchCalls(i.onSuccess)), i.onSettled && (i.onSettled = br.batchCalls(i.onSettled)), gy(i), hy(i, a), vy(a);
  const [s] = b.useState(() => new t(n, i)), l = s.getOptimisticResult(i);
  if (iy(b.useCallback((c) => {
    const u = r ? () => {
    } : s.subscribe(br.batchCalls(c));
    return s.updateResult(), u;
  }, [s, r]), () => s.getCurrentResult(), () => s.getCurrentResult()), b.useEffect(() => {
    s.setOptions(i, {
      listeners: !1
    });
  }, [i, s]), Ey(i, l, r))
    throw xy(i, s, a);
  if (yy({
    result: l,
    errorResetBoundary: a,
    useErrorBoundary: i.useErrorBoundary,
    query: s.getCurrentQuery()
  }))
    throw l.error;
  return i.notifyOnChangeProps ? l : s.trackResult(l);
}
function Hc(e, t, n) {
  const r = Vv(e, t, n);
  return Oy(r, ey);
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
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, La.apply(this, arguments);
}
var Js;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Js || (Js = {}));
function tt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Hr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function ja(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Yc(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var Zs;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Zs || (Zs = {}));
function Wa(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Sy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: a = ""
  } = typeof e == "string" ? Yc(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : wy(n, t) : t,
    search: Ty(r),
    hash: Cy(a)
  };
}
function wy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
  }), n.length > 1 ? n.join("/") : "/";
}
function ca(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Kc(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Gc(e, t, n, r) {
  r === void 0 && (r = !1);
  let a;
  typeof e == "string" ? a = Yc(e) : (a = La({}, e), tt(!a.pathname || !a.pathname.includes("?"), ca("?", "pathname", "search", a)), tt(!a.pathname || !a.pathname.includes("#"), ca("#", "pathname", "hash", a)), tt(!a.search || !a.search.includes("#"), ca("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "", s = i ? "/" : a.pathname, l;
  if (r || s == null)
    l = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; )
        p.shift(), f -= 1;
      a.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = Sy(a, l), u = s && s !== "/" && s.endsWith("/"), d = (i || s === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Ei = (e) => e.join("/").replace(/\/\/+/g, "/"), Ty = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Cy = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Qc = ["post", "put", "patch", "delete"];
new Set(Qc);
const Ry = ["get", ...Qc];
new Set(Ry);
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
const Uo = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Uo.displayName = "DataRouter");
const Xc = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Xc.displayName = "DataRouterState");
const Py = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Py.displayName = "Await");
const pn = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (pn.displayName = "Navigation");
const xi = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (xi.displayName = "Location");
const rr = /* @__PURE__ */ b.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (rr.displayName = "Route");
const $y = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && ($y.displayName = "RouteError");
function Iy(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Oi() || (process.env.NODE_ENV !== "production" ? tt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : tt(!1));
  let {
    basename: r,
    navigator: a
  } = b.useContext(pn), {
    hash: i,
    pathname: s,
    search: l
  } = Vo(e, {
    relative: n
  }), c = s;
  return r !== "/" && (c = s === "/" ? r : Ei([r, s])), a.createHref({
    pathname: c,
    search: l,
    hash: i
  });
}
function Oi() {
  return b.useContext(xi) != null;
}
function or() {
  return Oi() || (process.env.NODE_ENV !== "production" ? tt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : tt(!1)), b.useContext(xi).location;
}
const Jc = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Zc(e) {
  b.useContext(pn).static || b.useLayoutEffect(e);
}
function eu() {
  let {
    isDataRoute: e
  } = b.useContext(rr);
  return e ? Ay() : Ny();
}
function Ny() {
  Oi() || (process.env.NODE_ENV !== "production" ? tt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : tt(!1));
  let e = b.useContext(Uo), {
    basename: t,
    navigator: n
  } = b.useContext(pn), {
    matches: r
  } = b.useContext(rr), {
    pathname: a
  } = or(), i = JSON.stringify(Kc(r).map((c) => c.pathnameBase)), s = b.useRef(!1);
  return Zc(() => {
    s.current = !0;
  }), b.useCallback(function(c, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && Hr(s.current, Jc), !s.current)
      return;
    if (typeof c == "number") {
      n.go(c);
      return;
    }
    let d = Gc(c, JSON.parse(i), a, u.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Ei([t, d.pathname])), (u.replace ? n.replace : n.push)(d, u.state, u);
  }, [t, n, i, a, e]);
}
function Vo(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    matches: r
  } = b.useContext(rr), {
    pathname: a
  } = or(), i = JSON.stringify(Kc(r).map((s) => s.pathnameBase));
  return b.useMemo(() => Gc(e, JSON.parse(i), a, n === "path"), [e, i, a, n]);
}
var tu = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(tu || {}), Si = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Si || {});
function nu(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function My(e) {
  let t = b.useContext(Uo);
  return t || (process.env.NODE_ENV !== "production" ? tt(!1, nu(e)) : tt(!1)), t;
}
function ky(e) {
  let t = b.useContext(rr);
  return t || (process.env.NODE_ENV !== "production" ? tt(!1, nu(e)) : tt(!1)), t;
}
function ru(e) {
  let t = ky(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? tt(!1, e + ' can only be used on routes that contain a unique "id"') : tt(!1)), n.route.id;
}
function _y() {
  return ru(Si.UseRouteId);
}
function Ay() {
  let {
    router: e
  } = My(tu.UseNavigateStable), t = ru(Si.UseNavigateStable), n = b.useRef(!1);
  return Zc(() => {
    n.current = !0;
  }), b.useCallback(function(a, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && Hr(n.current, Jc), n.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, Ba({
      fromRouteId: t
    }, i)));
  }, [e, t]);
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
function Rn() {
  return Rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Rn.apply(this, arguments);
}
function wi(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
const lo = "get", co = "application/x-www-form-urlencoded";
function zo(e) {
  return e != null && typeof e.tagName == "string";
}
function Dy(e) {
  return zo(e) && e.tagName.toLowerCase() === "button";
}
function Fy(e) {
  return zo(e) && e.tagName.toLowerCase() === "form";
}
function Ly(e) {
  return zo(e) && e.tagName.toLowerCase() === "input";
}
function jy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Wy(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !jy(e);
}
function Ua(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return t.concat(Array.isArray(r) ? r.map((a) => [n, a]) : [[n, r]]);
  }, []));
}
function By(e, t) {
  let n = Ua(e);
  return t && t.forEach((r, a) => {
    n.has(a) || t.getAll(a).forEach((i) => {
      n.append(a, i);
    });
  }), n;
}
let eo = null;
function Uy() {
  if (eo === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), eo = !1;
    } catch {
      eo = !0;
    }
  return eo;
}
const Vy = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ua(e) {
  return e != null && !Vy.has(e) ? (process.env.NODE_ENV !== "production" && Hr(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + co + '"')), null) : e;
}
function zy(e, t) {
  let n, r, a, i, s;
  if (Fy(e)) {
    let l = e.getAttribute("action");
    r = l ? Wa(l, t) : null, n = e.getAttribute("method") || lo, a = ua(e.getAttribute("enctype")) || co, i = new FormData(e);
  } else if (Dy(e) || Ly(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (r = c ? Wa(c, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || lo, a = ua(e.getAttribute("formenctype")) || ua(l.getAttribute("enctype")) || co, i = new FormData(l, e), !Uy()) {
      let {
        name: u,
        type: d,
        value: f
      } = e;
      if (d === "image") {
        let p = u ? u + "." : "";
        i.append(p + "x", "0"), i.append(p + "y", "0");
      } else
        u && i.append(u, f);
    }
  } else {
    if (zo(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = lo, r = null, a = co, s = e;
  }
  return i && a === "text/plain" && (s = i, i = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: a,
    formData: i,
    body: s
  };
}
const qy = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], Hy = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], Yy = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"];
process.env.NODE_ENV;
const Ky = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ou = /* @__PURE__ */ b.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: a,
    reloadDocument: i,
    replace: s,
    state: l,
    target: c,
    to: u,
    preventScrollReset: d
  } = t, f = wi(t, qy), {
    basename: p
  } = b.useContext(pn), h, E = !1;
  if (typeof u == "string" && Gy.test(u) && (h = u, Ky))
    try {
      let T = new URL(window.location.href), x = u.startsWith("//") ? new URL(T.protocol + u) : new URL(u), g = Wa(x.pathname, p);
      x.origin === T.origin && g != null ? u = g + x.search + x.hash : E = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Hr(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let v = Iy(u, {
    relative: a
  }), m = eg(u, {
    replace: s,
    state: l,
    target: c,
    preventScrollReset: d,
    relative: a
  });
  function O(T) {
    r && r(T), T.defaultPrevented || m(T);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ b.createElement("a", Rn({}, f, {
      href: h || v,
      onClick: E || i ? r : O,
      ref: n,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (ou.displayName = "Link");
const Qy = /* @__PURE__ */ b.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: s = !1,
    style: l,
    to: c,
    children: u
  } = t, d = wi(t, Hy), f = Vo(c, {
    relative: d.relative
  }), p = or(), h = b.useContext(Xc), {
    navigator: E
  } = b.useContext(pn), v = E.encodeLocation ? E.encodeLocation(f).pathname : f.pathname, m = p.pathname, O = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
  a || (m = m.toLowerCase(), O = O ? O.toLowerCase() : null, v = v.toLowerCase());
  let T = m === v || !s && m.startsWith(v) && m.charAt(v.length) === "/", x = O != null && (O === v || !s && O.startsWith(v) && O.charAt(v.length) === "/"), g = T ? r : void 0, y;
  typeof i == "function" ? y = i({
    isActive: T,
    isPending: x
  }) : y = [i, T ? "active" : null, x ? "pending" : null].filter(Boolean).join(" ");
  let C = typeof l == "function" ? l({
    isActive: T,
    isPending: x
  }) : l;
  return /* @__PURE__ */ b.createElement(ou, Rn({}, d, {
    "aria-current": g,
    className: y,
    ref: n,
    style: C,
    to: c
  }), typeof u == "function" ? u({
    isActive: T,
    isPending: x
  }) : u);
});
process.env.NODE_ENV !== "production" && (Qy.displayName = "NavLink");
const Xy = /* @__PURE__ */ b.forwardRef((e, t) => {
  let n = ng();
  return /* @__PURE__ */ b.createElement(au, Rn({}, e, {
    submit: n,
    ref: t
  }));
});
process.env.NODE_ENV !== "production" && (Xy.displayName = "Form");
const au = /* @__PURE__ */ b.forwardRef((e, t) => {
  let {
    reloadDocument: n,
    replace: r,
    state: a,
    method: i = lo,
    action: s,
    onSubmit: l,
    submit: c,
    relative: u,
    preventScrollReset: d
  } = e, f = wi(e, Yy), p = i.toLowerCase() === "get" ? "get" : "post", h = rg(s, {
    relative: u
  }), E = (v) => {
    if (l && l(v), v.defaultPrevented)
      return;
    v.preventDefault();
    let m = v.nativeEvent.submitter, O = (m == null ? void 0 : m.getAttribute("formmethod")) || i;
    c(m || v.currentTarget, {
      method: O,
      replace: r,
      state: a,
      relative: u,
      preventScrollReset: d
    });
  };
  return /* @__PURE__ */ b.createElement("form", Rn({
    ref: t,
    method: p,
    action: h,
    onSubmit: n ? l : E
  }, f));
});
process.env.NODE_ENV !== "production" && (au.displayName = "FormImpl");
process.env.NODE_ENV;
var Va;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher";
})(Va || (Va = {}));
var el;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(el || (el = {}));
function Jy(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Zy(e) {
  let t = b.useContext(Uo);
  return t || (process.env.NODE_ENV !== "production" ? tt(!1, Jy(e)) : tt(!1)), t;
}
function eg(e, t) {
  let {
    target: n,
    replace: r,
    state: a,
    preventScrollReset: i,
    relative: s
  } = t === void 0 ? {} : t, l = eu(), c = or(), u = Vo(e, {
    relative: s
  });
  return b.useCallback((d) => {
    if (Wy(d, n)) {
      d.preventDefault();
      let f = r !== void 0 ? r : ja(c) === ja(u);
      l(e, {
        replace: f,
        state: a,
        preventScrollReset: i,
        relative: s
      });
    }
  }, [c, l, u, r, a, n, e, i, s]);
}
function iu(e) {
  process.env.NODE_ENV !== "production" && Hr(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
  let t = b.useRef(Ua(e)), n = b.useRef(!1), r = or(), a = b.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    By(r.search, n.current ? null : t.current)
  ), [r.search]), i = eu(), s = b.useCallback((l, c) => {
    const u = Ua(typeof l == "function" ? l(a) : l);
    n.current = !0, i("?" + u, c);
  }, [i, a]);
  return [a, s];
}
function tg() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
function ng() {
  let {
    router: e
  } = Zy(Va.UseSubmit), {
    basename: t
  } = b.useContext(pn), n = _y();
  return b.useCallback(function(r, a) {
    a === void 0 && (a = {}), tg();
    let {
      action: i,
      method: s,
      encType: l,
      formData: c,
      body: u
    } = zy(r, t);
    e.navigate(a.action || i, {
      preventScrollReset: a.preventScrollReset,
      formData: c,
      body: u,
      formMethod: a.method || s,
      formEncType: a.encType || l,
      replace: a.replace,
      state: a.state,
      fromRouteId: n
    });
  }, [e, t, n]);
}
function rg(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = b.useContext(pn), a = b.useContext(rr);
  a || (process.env.NODE_ENV !== "production" ? tt(!1, "useFormAction must be used inside a RouteContext") : tt(!1));
  let [i] = a.matches.slice(-1), s = Rn({}, Vo(e || ".", {
    relative: n
  })), l = or();
  if (e == null && (s.search = l.search, i.route.index)) {
    let c = new URLSearchParams(s.search);
    c.delete("index"), s.search = c.toString() ? "?" + c.toString() : "";
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (s.pathname = s.pathname === "/" ? r : Ei([r, s.pathname])), ja(s);
}
var og = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var a = 42;
  t[n] = a;
  for (n in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(t);
  if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = Object.getOwnPropertyDescriptor(t, n);
    if (s.value !== a || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, tl = typeof Symbol < "u" && Symbol, ag = og, ig = function() {
  return typeof tl != "function" || typeof Symbol != "function" || typeof tl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ag();
}, nl = {
  foo: {}
}, sg = Object, lg = function() {
  return { __proto__: nl }.foo === nl.foo && !({ __proto__: null } instanceof sg);
}, cg = "Function.prototype.bind called on incompatible ", da = Array.prototype.slice, ug = Object.prototype.toString, dg = "[object Function]", fg = function(t) {
  var n = this;
  if (typeof n != "function" || ug.call(n) !== dg)
    throw new TypeError(cg + n);
  for (var r = da.call(arguments, 1), a, i = function() {
    if (this instanceof a) {
      var d = n.apply(
        this,
        r.concat(da.call(arguments))
      );
      return Object(d) === d ? d : this;
    } else
      return n.apply(
        t,
        r.concat(da.call(arguments))
      );
  }, s = Math.max(0, n.length - r.length), l = [], c = 0; c < s; c++)
    l.push("$" + c);
  if (a = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(i), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, pg = fg, Ti = Function.prototype.bind || pg, mg = Ti, hg = mg.call(Function.call, Object.prototype.hasOwnProperty), we, Gn = SyntaxError, su = Function, Kn = TypeError, fa = function(e) {
  try {
    return su('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, On = Object.getOwnPropertyDescriptor;
if (On)
  try {
    On({}, "");
  } catch {
    On = null;
  }
var pa = function() {
  throw new Kn();
}, vg = On ? function() {
  try {
    return arguments.callee, pa;
  } catch {
    try {
      return On(arguments, "callee").get;
    } catch {
      return pa;
    }
  }
}() : pa, Bn = ig(), yg = lg(), at = Object.getPrototypeOf || (yg ? function(e) {
  return e.__proto__;
} : null), zn = {}, gg = typeof Uint8Array > "u" || !at ? we : at(Uint8Array), Sn = {
  "%AggregateError%": typeof AggregateError > "u" ? we : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? we : ArrayBuffer,
  "%ArrayIteratorPrototype%": Bn && at ? at([][Symbol.iterator]()) : we,
  "%AsyncFromSyncIteratorPrototype%": we,
  "%AsyncFunction%": zn,
  "%AsyncGenerator%": zn,
  "%AsyncGeneratorFunction%": zn,
  "%AsyncIteratorPrototype%": zn,
  "%Atomics%": typeof Atomics > "u" ? we : Atomics,
  "%BigInt%": typeof BigInt > "u" ? we : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? we : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? we : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? we : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? we : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? we : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? we : FinalizationRegistry,
  "%Function%": su,
  "%GeneratorFunction%": zn,
  "%Int8Array%": typeof Int8Array > "u" ? we : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? we : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? we : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Bn && at ? at(at([][Symbol.iterator]())) : we,
  "%JSON%": typeof JSON == "object" ? JSON : we,
  "%Map%": typeof Map > "u" ? we : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Bn || !at ? we : at((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? we : Promise,
  "%Proxy%": typeof Proxy > "u" ? we : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? we : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? we : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Bn || !at ? we : at((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? we : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Bn && at ? at(""[Symbol.iterator]()) : we,
  "%Symbol%": Bn ? Symbol : we,
  "%SyntaxError%": Gn,
  "%ThrowTypeError%": vg,
  "%TypedArray%": gg,
  "%TypeError%": Kn,
  "%Uint8Array%": typeof Uint8Array > "u" ? we : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? we : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? we : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? we : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? we : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? we : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? we : WeakSet
};
if (at)
  try {
    null.error;
  } catch (e) {
    var bg = at(at(e));
    Sn["%Error.prototype%"] = bg;
  }
var Eg = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = fa("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = fa("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = fa("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && at && (n = at(a.prototype));
  }
  return Sn[t] = n, n;
}, rl = {
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
}, Yr = Ti, Eo = hg, xg = Yr.call(Function.call, Array.prototype.concat), Og = Yr.call(Function.apply, Array.prototype.splice), ol = Yr.call(Function.call, String.prototype.replace), xo = Yr.call(Function.call, String.prototype.slice), Sg = Yr.call(Function.call, RegExp.prototype.exec), wg = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Tg = /\\(\\)?/g, Cg = function(t) {
  var n = xo(t, 0, 1), r = xo(t, -1);
  if (n === "%" && r !== "%")
    throw new Gn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new Gn("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return ol(t, wg, function(i, s, l, c) {
    a[a.length] = l ? ol(c, Tg, "$1") : s || i;
  }), a;
}, Rg = function(t, n) {
  var r = t, a;
  if (Eo(rl, r) && (a = rl[r], r = "%" + a[0] + "%"), Eo(Sn, r)) {
    var i = Sn[r];
    if (i === zn && (i = Eg(r)), typeof i > "u" && !n)
      throw new Kn("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: i
    };
  }
  throw new Gn("intrinsic " + t + " does not exist!");
}, Ci = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new Kn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Kn('"allowMissing" argument must be a boolean');
  if (Sg(/^%?[^%]*%?$/, t) === null)
    throw new Gn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Cg(t), a = r.length > 0 ? r[0] : "", i = Rg("%" + a + "%", n), s = i.name, l = i.value, c = !1, u = i.alias;
  u && (a = u[0], Og(r, xg([0, 1], u)));
  for (var d = 1, f = !0; d < r.length; d += 1) {
    var p = r[d], h = xo(p, 0, 1), E = xo(p, -1);
    if ((h === '"' || h === "'" || h === "`" || E === '"' || E === "'" || E === "`") && h !== E)
      throw new Gn("property names with quotes must have matching quotes");
    if ((p === "constructor" || !f) && (c = !0), a += "." + p, s = "%" + a + "%", Eo(Sn, s))
      l = Sn[s];
    else if (l != null) {
      if (!(p in l)) {
        if (!n)
          throw new Kn("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (On && d + 1 >= r.length) {
        var v = On(l, p);
        f = !!v, f && "get" in v && !("originalValue" in v.get) ? l = v.get : l = l[p];
      } else
        f = Eo(l, p), l = l[p];
      f && !c && (Sn[s] = l);
    }
  }
  return l;
}, lu = { exports: {} };
(function(e) {
  var t = Ti, n = Ci, r = n("%Function.prototype.apply%"), a = n("%Function.prototype.call%"), i = n("%Reflect.apply%", !0) || t.call(a, r), s = n("%Object.getOwnPropertyDescriptor%", !0), l = n("%Object.defineProperty%", !0), c = n("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
    }
  e.exports = function(f) {
    var p = i(t, a, arguments);
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
    return i(t, r, arguments);
  };
  l ? l(e.exports, "apply", { value: u }) : e.exports.apply = u;
})(lu);
var Pg = lu.exports, cu = Ci, uu = Pg, $g = uu(cu("String.prototype.indexOf")), Ig = function(t, n) {
  var r = cu(t, !!n);
  return typeof r == "function" && $g(t, ".prototype.") > -1 ? uu(r) : r;
};
const Ng = {}, Mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ng
}, Symbol.toStringTag, { value: "Module" })), kg = /* @__PURE__ */ Ud(Mg);
var Ri = typeof Map == "function" && Map.prototype, ma = Object.getOwnPropertyDescriptor && Ri ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Oo = Ri && ma && typeof ma.get == "function" ? ma.get : null, al = Ri && Map.prototype.forEach, Pi = typeof Set == "function" && Set.prototype, ha = Object.getOwnPropertyDescriptor && Pi ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, So = Pi && ha && typeof ha.get == "function" ? ha.get : null, il = Pi && Set.prototype.forEach, _g = typeof WeakMap == "function" && WeakMap.prototype, wr = _g ? WeakMap.prototype.has : null, Ag = typeof WeakSet == "function" && WeakSet.prototype, Tr = Ag ? WeakSet.prototype.has : null, Dg = typeof WeakRef == "function" && WeakRef.prototype, sl = Dg ? WeakRef.prototype.deref : null, Fg = Boolean.prototype.valueOf, Lg = Object.prototype.toString, jg = Function.prototype.toString, Wg = String.prototype.match, $i = String.prototype.slice, on = String.prototype.replace, Bg = String.prototype.toUpperCase, ll = String.prototype.toLowerCase, du = RegExp.prototype.test, cl = Array.prototype.concat, Ft = Array.prototype.join, Ug = Array.prototype.slice, ul = Math.floor, za = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, va = Object.getOwnPropertySymbols, qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Qn = typeof Symbol == "function" && typeof Symbol.iterator == "object", dt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Qn || "symbol") ? Symbol.toStringTag : null, fu = Object.prototype.propertyIsEnumerable, dl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function fl(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || du.call(/e/, t))
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -ul(-e) : ul(e);
    if (r !== e) {
      var a = String(r), i = $i.call(t, a.length + 1);
      return on.call(a, n, "$&_") + "." + on.call(on.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return on.call(t, n, "$&_");
}
var Ha = kg, pl = Ha.custom, ml = mu(pl) ? pl : null, Vg = function e(t, n, r, a) {
  var i = n || {};
  if (nn(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (nn(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = nn(i, "customInspect") ? i.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (nn(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (nn(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = i.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return vu(t, i);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return l ? fl(t, c) : c;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return l ? fl(t, u) : u;
  }
  var d = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof r > "u" && (r = 0), r >= d && d > 0 && typeof t == "object")
    return Ya(t) ? "[Array]" : "[Object]";
  var f = sb(i, r);
  if (typeof a > "u")
    a = [];
  else if (hu(a, t) >= 0)
    return "[Circular]";
  function p(U, L, D) {
    if (L && (a = Ug.call(a), a.push(L)), D) {
      var B = {
        depth: i.depth
      };
      return nn(i, "quoteStyle") && (B.quoteStyle = i.quoteStyle), e(U, B, r + 1, a);
    }
    return e(U, i, r + 1, a);
  }
  if (typeof t == "function" && !hl(t)) {
    var h = Jg(t), E = to(t, p);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (E.length > 0 ? " { " + Ft.call(E, ", ") + " }" : "");
  }
  if (mu(t)) {
    var v = Qn ? on.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : qa.call(t);
    return typeof t == "object" && !Qn ? hr(v) : v;
  }
  if (ob(t)) {
    for (var m = "<" + ll.call(String(t.nodeName)), O = t.attributes || [], T = 0; T < O.length; T++)
      m += " " + O[T].name + "=" + pu(zg(O[T].value), "double", i);
    return m += ">", t.childNodes && t.childNodes.length && (m += "..."), m += "</" + ll.call(String(t.nodeName)) + ">", m;
  }
  if (Ya(t)) {
    if (t.length === 0)
      return "[]";
    var x = to(t, p);
    return f && !ib(x) ? "[" + Ka(x, f) + "]" : "[ " + Ft.call(x, ", ") + " ]";
  }
  if (Hg(t)) {
    var g = to(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !fu.call(t, "cause") ? "{ [" + String(t) + "] " + Ft.call(cl.call("[cause]: " + p(t.cause), g), ", ") + " }" : g.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ft.call(g, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (ml && typeof t[ml] == "function" && Ha)
      return Ha(t, { depth: d - r });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Zg(t)) {
    var y = [];
    return al && al.call(t, function(U, L) {
      y.push(p(L, t, !0) + " => " + p(U, t));
    }), vl("Map", Oo.call(t), y, f);
  }
  if (nb(t)) {
    var C = [];
    return il && il.call(t, function(U) {
      C.push(p(U, t));
    }), vl("Set", So.call(t), C, f);
  }
  if (eb(t))
    return ya("WeakMap");
  if (rb(t))
    return ya("WeakSet");
  if (tb(t))
    return ya("WeakRef");
  if (Kg(t))
    return hr(p(Number(t)));
  if (Qg(t))
    return hr(p(za.call(t)));
  if (Gg(t))
    return hr(Fg.call(t));
  if (Yg(t))
    return hr(p(String(t)));
  if (!qg(t) && !hl(t)) {
    var R = to(t, p), $ = dl ? dl(t) === Object.prototype : t instanceof Object || t.constructor === Object, F = t instanceof Object ? "" : "null prototype", k = !$ && dt && Object(t) === t && dt in t ? $i.call(mn(t), 8, -1) : F ? "Object" : "", _ = $ || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", z = _ + (k || F ? "[" + Ft.call(cl.call([], k || [], F || []), ": ") + "] " : "");
    return R.length === 0 ? z + "{}" : f ? z + "{" + Ka(R, f) + "}" : z + "{ " + Ft.call(R, ", ") + " }";
  }
  return String(t);
};
function pu(e, t, n) {
  var r = (n.quoteStyle || t) === "double" ? '"' : "'";
  return r + e + r;
}
function zg(e) {
  return on.call(String(e), /"/g, "&quot;");
}
function Ya(e) {
  return mn(e) === "[object Array]" && (!dt || !(typeof e == "object" && dt in e));
}
function qg(e) {
  return mn(e) === "[object Date]" && (!dt || !(typeof e == "object" && dt in e));
}
function hl(e) {
  return mn(e) === "[object RegExp]" && (!dt || !(typeof e == "object" && dt in e));
}
function Hg(e) {
  return mn(e) === "[object Error]" && (!dt || !(typeof e == "object" && dt in e));
}
function Yg(e) {
  return mn(e) === "[object String]" && (!dt || !(typeof e == "object" && dt in e));
}
function Kg(e) {
  return mn(e) === "[object Number]" && (!dt || !(typeof e == "object" && dt in e));
}
function Gg(e) {
  return mn(e) === "[object Boolean]" && (!dt || !(typeof e == "object" && dt in e));
}
function mu(e) {
  if (Qn)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !qa)
    return !1;
  try {
    return qa.call(e), !0;
  } catch {
  }
  return !1;
}
function Qg(e) {
  if (!e || typeof e != "object" || !za)
    return !1;
  try {
    return za.call(e), !0;
  } catch {
  }
  return !1;
}
var Xg = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function nn(e, t) {
  return Xg.call(e, t);
}
function mn(e) {
  return Lg.call(e);
}
function Jg(e) {
  if (e.name)
    return e.name;
  var t = Wg.call(jg.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function hu(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] === t)
      return n;
  return -1;
}
function Zg(e) {
  if (!Oo || !e || typeof e != "object")
    return !1;
  try {
    Oo.call(e);
    try {
      So.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function eb(e) {
  if (!wr || !e || typeof e != "object")
    return !1;
  try {
    wr.call(e, wr);
    try {
      Tr.call(e, Tr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function tb(e) {
  if (!sl || !e || typeof e != "object")
    return !1;
  try {
    return sl.call(e), !0;
  } catch {
  }
  return !1;
}
function nb(e) {
  if (!So || !e || typeof e != "object")
    return !1;
  try {
    So.call(e);
    try {
      Oo.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function rb(e) {
  if (!Tr || !e || typeof e != "object")
    return !1;
  try {
    Tr.call(e, Tr);
    try {
      wr.call(e, wr);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function ob(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function vu(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return vu($i.call(e, 0, t.maxStringLength), t) + r;
  }
  var a = on.call(on.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ab);
  return pu(a, "single", t);
}
function ab(e) {
  var t = e.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + Bg.call(t.toString(16));
}
function hr(e) {
  return "Object(" + e + ")";
}
function ya(e) {
  return e + " { ? }";
}
function vl(e, t, n, r) {
  var a = r ? Ka(n, r) : Ft.call(n, ", ");
  return e + " (" + t + ") {" + a + "}";
}
function ib(e) {
  for (var t = 0; t < e.length; t++)
    if (hu(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function sb(e, t) {
  var n;
  if (e.indent === "	")
    n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = Ft.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Ft.call(Array(t + 1), n)
  };
}
function Ka(e, t) {
  if (e.length === 0)
    return "";
  var n = `
` + t.prev + t.base;
  return n + Ft.call(e, "," + n) + `
` + t.prev;
}
function to(e, t) {
  var n = Ya(e), r = [];
  if (n) {
    r.length = e.length;
    for (var a = 0; a < e.length; a++)
      r[a] = nn(e, a) ? t(e[a], e) : "";
  }
  var i = typeof va == "function" ? va(e) : [], s;
  if (Qn) {
    s = {};
    for (var l = 0; l < i.length; l++)
      s["$" + i[l]] = i[l];
  }
  for (var c in e)
    nn(e, c) && (n && String(Number(c)) === c && c < e.length || Qn && s["$" + c] instanceof Symbol || (du.call(/[^\w$]/, c) ? r.push(t(c, e) + ": " + t(e[c], e)) : r.push(c + ": " + t(e[c], e))));
  if (typeof va == "function")
    for (var u = 0; u < i.length; u++)
      fu.call(e, i[u]) && r.push("[" + t(i[u]) + "]: " + t(e[i[u]], e));
  return r;
}
var Ii = Ci, ar = Ig, lb = Vg, cb = Ii("%TypeError%"), no = Ii("%WeakMap%", !0), ro = Ii("%Map%", !0), ub = ar("WeakMap.prototype.get", !0), db = ar("WeakMap.prototype.set", !0), fb = ar("WeakMap.prototype.has", !0), pb = ar("Map.prototype.get", !0), mb = ar("Map.prototype.set", !0), hb = ar("Map.prototype.has", !0), Ni = function(e, t) {
  for (var n = e, r; (r = n.next) !== null; n = r)
    if (r.key === t)
      return n.next = r.next, r.next = e.next, e.next = r, r;
}, vb = function(e, t) {
  var n = Ni(e, t);
  return n && n.value;
}, yb = function(e, t, n) {
  var r = Ni(e, t);
  r ? r.value = n : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: n
  };
}, gb = function(e, t) {
  return !!Ni(e, t);
}, bb = function() {
  var t, n, r, a = {
    assert: function(i) {
      if (!a.has(i))
        throw new cb("Side channel does not contain " + lb(i));
    },
    get: function(i) {
      if (no && i && (typeof i == "object" || typeof i == "function")) {
        if (t)
          return ub(t, i);
      } else if (ro) {
        if (n)
          return pb(n, i);
      } else if (r)
        return vb(r, i);
    },
    has: function(i) {
      if (no && i && (typeof i == "object" || typeof i == "function")) {
        if (t)
          return fb(t, i);
      } else if (ro) {
        if (n)
          return hb(n, i);
      } else if (r)
        return gb(r, i);
      return !1;
    },
    set: function(i, s) {
      no && i && (typeof i == "object" || typeof i == "function") ? (t || (t = new no()), db(t, i, s)) : ro ? (n || (n = new ro()), mb(n, i, s)) : (r || (r = { key: {}, next: null }), yb(r, i, s));
    }
  };
  return a;
}, Eb = String.prototype.replace, xb = /%20/g, ga = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Mi = {
  default: ga.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return Eb.call(e, xb, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: ga.RFC1738,
  RFC3986: ga.RFC3986
}, Ob = Mi, ba = Object.prototype.hasOwnProperty, En = Array.isArray, At = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), Sb = function(t) {
  for (; t.length > 1; ) {
    var n = t.pop(), r = n.obj[n.prop];
    if (En(r)) {
      for (var a = [], i = 0; i < r.length; ++i)
        typeof r[i] < "u" && a.push(r[i]);
      n.obj[n.prop] = a;
    }
  }
}, yu = function(t, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < t.length; ++a)
    typeof t[a] < "u" && (r[a] = t[a]);
  return r;
}, wb = function e(t, n, r) {
  if (!n)
    return t;
  if (typeof n != "object") {
    if (En(t))
      t.push(n);
    else if (t && typeof t == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !ba.call(Object.prototype, n)) && (t[n] = !0);
    else
      return [t, n];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(n);
  var a = t;
  return En(t) && !En(n) && (a = yu(t, r)), En(t) && En(n) ? (n.forEach(function(i, s) {
    if (ba.call(t, s)) {
      var l = t[s];
      l && typeof l == "object" && i && typeof i == "object" ? t[s] = e(l, i, r) : t.push(i);
    } else
      t[s] = i;
  }), t) : Object.keys(n).reduce(function(i, s) {
    var l = n[s];
    return ba.call(i, s) ? i[s] = e(i[s], l, r) : i[s] = l, i;
  }, a);
}, Tb = function(t, n) {
  return Object.keys(n).reduce(function(r, a) {
    return r[a] = n[a], r;
  }, t);
}, Cb = function(e, t, n) {
  var r = e.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, Rb = function(t, n, r, a, i) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), r === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(d) {
      return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
    });
  for (var l = "", c = 0; c < s.length; ++c) {
    var u = s.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === Ob.RFC1738 && (u === 40 || u === 41)) {
      l += s.charAt(c);
      continue;
    }
    if (u < 128) {
      l = l + At[u];
      continue;
    }
    if (u < 2048) {
      l = l + (At[192 | u >> 6] + At[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      l = l + (At[224 | u >> 12] + At[128 | u >> 6 & 63] + At[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | s.charCodeAt(c) & 1023), l += At[240 | u >> 18] + At[128 | u >> 12 & 63] + At[128 | u >> 6 & 63] + At[128 | u & 63];
  }
  return l;
}, Pb = function(t) {
  for (var n = [{ obj: { o: t }, prop: "o" }], r = [], a = 0; a < n.length; ++a)
    for (var i = n[a], s = i.obj[i.prop], l = Object.keys(s), c = 0; c < l.length; ++c) {
      var u = l[c], d = s[u];
      typeof d == "object" && d !== null && r.indexOf(d) === -1 && (n.push({ obj: s, prop: u }), r.push(d));
    }
  return Sb(n), t;
}, $b = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Ib = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, Nb = function(t, n) {
  return [].concat(t, n);
}, Mb = function(t, n) {
  if (En(t)) {
    for (var r = [], a = 0; a < t.length; a += 1)
      r.push(n(t[a]));
    return r;
  }
  return n(t);
}, gu = {
  arrayToObject: yu,
  assign: Tb,
  combine: Nb,
  compact: Pb,
  decode: Cb,
  encode: Rb,
  isBuffer: Ib,
  isRegExp: $b,
  maybeMap: Mb,
  merge: wb
}, bu = bb, uo = gu, Cr = Mi, kb = Object.prototype.hasOwnProperty, yl = {
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
}, Ht = Array.isArray, _b = Array.prototype.push, Eu = function(e, t) {
  _b.apply(e, Ht(t) ? t : [t]);
}, Ab = Date.prototype.toISOString, gl = Cr.default, ut = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: uo.encode,
  encodeValuesOnly: !1,
  format: gl,
  formatter: Cr.formatters[gl],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Ab.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Db = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Ea = {}, Fb = function e(t, n, r, a, i, s, l, c, u, d, f, p, h, E, v, m) {
  for (var O = t, T = m, x = 0, g = !1; (T = T.get(Ea)) !== void 0 && !g; ) {
    var y = T.get(t);
    if (x += 1, typeof y < "u") {
      if (y === x)
        throw new RangeError("Cyclic object value");
      g = !0;
    }
    typeof T.get(Ea) > "u" && (x = 0);
  }
  if (typeof c == "function" ? O = c(n, O) : O instanceof Date ? O = f(O) : r === "comma" && Ht(O) && (O = uo.maybeMap(O, function(B) {
    return B instanceof Date ? f(B) : B;
  })), O === null) {
    if (i)
      return l && !E ? l(n, ut.encoder, v, "key", p) : n;
    O = "";
  }
  if (Db(O) || uo.isBuffer(O)) {
    if (l) {
      var C = E ? n : l(n, ut.encoder, v, "key", p);
      return [h(C) + "=" + h(l(O, ut.encoder, v, "value", p))];
    }
    return [h(n) + "=" + h(String(O))];
  }
  var R = [];
  if (typeof O > "u")
    return R;
  var $;
  if (r === "comma" && Ht(O))
    E && l && (O = uo.maybeMap(O, l)), $ = [{ value: O.length > 0 ? O.join(",") || null : void 0 }];
  else if (Ht(c))
    $ = c;
  else {
    var F = Object.keys(O);
    $ = u ? F.sort(u) : F;
  }
  for (var k = a && Ht(O) && O.length === 1 ? n + "[]" : n, _ = 0; _ < $.length; ++_) {
    var z = $[_], U = typeof z == "object" && typeof z.value < "u" ? z.value : O[z];
    if (!(s && U === null)) {
      var L = Ht(O) ? typeof r == "function" ? r(k, z) : k : k + (d ? "." + z : "[" + z + "]");
      m.set(t, x);
      var D = bu();
      D.set(Ea, m), Eu(R, e(
        U,
        L,
        r,
        a,
        i,
        s,
        r === "comma" && E && Ht(O) ? null : l,
        c,
        u,
        d,
        f,
        p,
        h,
        E,
        v,
        D
      ));
    }
  }
  return R;
}, Lb = function(t) {
  if (!t)
    return ut;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = t.charset || ut.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Cr.default;
  if (typeof t.format < "u") {
    if (!kb.call(Cr.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    r = t.format;
  }
  var a = Cr.formatters[r], i = ut.filter;
  return (typeof t.filter == "function" || Ht(t.filter)) && (i = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : ut.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? ut.allowDots : !!t.allowDots,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ut.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? ut.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : ut.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : ut.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : ut.encodeValuesOnly,
    filter: i,
    format: r,
    formatter: a,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : ut.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ut.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ut.strictNullHandling
  };
}, jb = function(e, t) {
  var n = e, r = Lb(t), a, i;
  typeof r.filter == "function" ? (i = r.filter, n = i("", n)) : Ht(r.filter) && (i = r.filter, a = i);
  var s = [];
  if (typeof n != "object" || n === null)
    return "";
  var l;
  t && t.arrayFormat in yl ? l = t.arrayFormat : t && "indices" in t ? l = t.indices ? "indices" : "repeat" : l = "indices";
  var c = yl[l];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && t && t.commaRoundTrip;
  a || (a = Object.keys(n)), r.sort && a.sort(r.sort);
  for (var d = bu(), f = 0; f < a.length; ++f) {
    var p = a[f];
    r.skipNulls && n[p] === null || Eu(s, Fb(
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
  var h = s.join(r.delimiter), E = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? E += "utf8=%26%2310003%3B&" : E += "utf8=%E2%9C%93&"), h.length > 0 ? E + h : "";
}, Xn = gu, Ga = Object.prototype.hasOwnProperty, Wb = Array.isArray, ot = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Xn.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Bb = function(e) {
  return e.replace(/&#(\d+);/g, function(t, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, xu = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, Ub = "utf8=%26%2310003%3B", Vb = "utf8=%E2%9C%93", zb = function(t, n) {
  var r = { __proto__: null }, a = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, i = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, s = a.split(n.delimiter, i), l = -1, c, u = n.charset;
  if (n.charsetSentinel)
    for (c = 0; c < s.length; ++c)
      s[c].indexOf("utf8=") === 0 && (s[c] === Vb ? u = "utf-8" : s[c] === Ub && (u = "iso-8859-1"), l = c, c = s.length);
  for (c = 0; c < s.length; ++c)
    if (c !== l) {
      var d = s[c], f = d.indexOf("]="), p = f === -1 ? d.indexOf("=") : f + 1, h, E;
      p === -1 ? (h = n.decoder(d, ot.decoder, u, "key"), E = n.strictNullHandling ? null : "") : (h = n.decoder(d.slice(0, p), ot.decoder, u, "key"), E = Xn.maybeMap(
        xu(d.slice(p + 1), n),
        function(v) {
          return n.decoder(v, ot.decoder, u, "value");
        }
      )), E && n.interpretNumericEntities && u === "iso-8859-1" && (E = Bb(E)), d.indexOf("[]=") > -1 && (E = Wb(E) ? [E] : E), Ga.call(r, h) ? r[h] = Xn.combine(r[h], E) : r[h] = E;
    }
  return r;
}, qb = function(e, t, n, r) {
  for (var a = r ? t : xu(t, n), i = e.length - 1; i >= 0; --i) {
    var s, l = e[i];
    if (l === "[]" && n.parseArrays)
      s = [].concat(a);
    else {
      s = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, u = parseInt(c, 10);
      !n.parseArrays && c === "" ? s = { 0: a } : !isNaN(u) && l !== c && String(u) === c && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (s = [], s[u] = a) : c !== "__proto__" && (s[c] = a);
    }
    a = s;
  }
  return a;
}, Hb = function(t, n, r, a) {
  if (t) {
    var i = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, c = r.depth > 0 && s.exec(i), u = c ? i.slice(0, c.index) : i, d = [];
    if (u) {
      if (!r.plainObjects && Ga.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      d.push(u);
    }
    for (var f = 0; r.depth > 0 && (c = l.exec(i)) !== null && f < r.depth; ) {
      if (f += 1, !r.plainObjects && Ga.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      d.push(c[1]);
    }
    return c && d.push("[" + i.slice(c.index) + "]"), qb(d, n, r, a);
  }
}, Yb = function(t) {
  if (!t)
    return ot;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof t.charset > "u" ? ot.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? ot.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : ot.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : ot.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : ot.arrayLimit,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ot.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : ot.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : ot.decoder,
    delimiter: typeof t.delimiter == "string" || Xn.isRegExp(t.delimiter) ? t.delimiter : ot.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : ot.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : ot.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : ot.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : ot.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ot.strictNullHandling
  };
}, Kb = function(e, t) {
  var n = Yb(t);
  if (e === "" || e === null || typeof e > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof e == "string" ? zb(e, n) : e, a = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(r), s = 0; s < i.length; ++s) {
    var l = i[s], c = Hb(l, r[l], n, typeof e == "string");
    a = Xn.merge(a, c, n);
  }
  return n.allowSparse === !0 ? a : Xn.compact(a);
}, Gb = jb, Qb = Kb, Xb = Mi, Jb = {
  formats: Xb,
  parse: Qb,
  stringify: Gb
};
const bl = /* @__PURE__ */ fc(Jb), Zb = (e) => {
  var k;
  const {
    headCells: t,
    fetchRecords: n,
    queryKey: r,
    defaultOrderBy: a,
    defaultOrderDirection: i = St.DESC,
    defaultRowsPerPage: s = 10,
    Row: l,
    Toolbar: c,
    onDeleteItem: u = null,
    onEditItem: d = null,
    filters: f
  } = e, [p, h] = iu(), [E, v] = Yt(a), [m, O] = Yt(i), [T, x] = Yt({
    ...bl.parse(p.toString()),
    per_page: s
  }), {
    data: g,
    isLoading: y,
    isFetching: C
  } = Hc({
    queryKey: [r, T],
    queryFn: () => n(T),
    onSuccess: () => {
      h(bl.stringify(T, { skipNulls: !0 }), {
        replace: !0
      });
    }
  });
  Ta(() => {
    x((_) => ({
      ..._,
      sort: {
        field: E,
        direction: m
      }
    }));
  }, [E, m]), Ta(() => {
    x((_) => ({
      ..._,
      filter: f
    }));
  }, [f]);
  const R = (_, z) => {
    x({ ...T, page: ++z });
  }, $ = (_) => {
    x({ ...T, per_page: _.target.value });
  };
  return /* @__PURE__ */ Te(ac, { theme: Vc, children: [
    c && /* @__PURE__ */ P(c, { setParams: x, params: T }),
    /* @__PURE__ */ P(ic, { children: /* @__PURE__ */ Te(sc, { children: [
      /* @__PURE__ */ P(
        yi,
        {
          headCells: t,
          orderBy: E,
          orderDirection: m,
          handleSortRequest: (_, z) => {
            v(z), O(
              E === z && m === St.ASC ? St.DESC : St.ASC
            );
          }
        }
      ),
      /* @__PURE__ */ Te(lc, { children: [
        (y || C) && /* @__PURE__ */ P(Nr, { children: /* @__PURE__ */ P(Mr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ P(Br, {}) }) }),
        ((k = g == null ? void 0 : g.data) == null ? void 0 : k.length) > 0 ? g.data.map((_) => /* @__PURE__ */ P(
          l,
          {
            data: _,
            onDeleteItem: u,
            onEditItem: d
          },
          _.id
        )) : /* @__PURE__ */ P(Nr, { children: /* @__PURE__ */ P(Mr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ P(sn, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    g && /* @__PURE__ */ P(
      cc,
      {
        component: "div",
        from: g.from,
        to: g.to,
        page: g.current_page - 1,
        rowsPerPage: g.per_page,
        count: g.total,
        onPageChange: R,
        onRowsPerPageChange: $,
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
Zb.propTypes = {
  headCells: o.array.isRequired,
  fetchRecords: o.func.isRequired,
  queryKey: o.string.isRequired,
  defaultOrderBy: o.string,
  defaultOrderDirection: o.oneOf([
    St.ASC,
    St.DESC
  ]),
  defaultRowsPerPage: o.number,
  onDeleteItem: o.func,
  onEditItem: o.func,
  filters: o.object,
  Row: o.elementType.isRequired,
  Toolbar: o.elementType
};
function Ar(e) {
  return typeof e == "string";
}
function e0(e, t, n) {
  return e === void 0 || Ar(e) ? t : w({}, t, {
    ownerState: w({}, t.ownerState, n)
  });
}
const t0 = {
  disableDefaultClasses: !1
}, n0 = /* @__PURE__ */ b.createContext(t0);
function Ou(e) {
  const {
    disableDefaultClasses: t
  } = b.useContext(n0);
  return (n) => t ? "" : e(n);
}
function r0(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Qa(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function El(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function o0(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: i
  } = e;
  if (!t) {
    const h = ye(a == null ? void 0 : a.className, r == null ? void 0 : r.className, i, n == null ? void 0 : n.className), E = w({}, n == null ? void 0 : n.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), v = w({}, n, a, r);
    return h.length > 0 && (v.className = h), Object.keys(E).length > 0 && (v.style = E), {
      props: v,
      internalRef: void 0
    };
  }
  const s = r0(w({}, a, r)), l = El(r), c = El(a), u = t(s), d = ye(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, a == null ? void 0 : a.className, r == null ? void 0 : r.className), f = w({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), p = w({}, u, n, c, l);
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
const a0 = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Pn(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: i = !1
  } = e, s = ve(e, a0), l = i ? {} : Qa(r, a), {
    props: c,
    internalRef: u
  } = o0(w({}, s, {
    externalSlotProps: l
  })), d = it(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return e0(n, w({}, c, {
    ref: d
  }), a);
}
const i0 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function s0(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function l0(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function c0(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || l0(e));
}
function u0(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(i0)).forEach((r, a) => {
    const i = s0(r);
    i === -1 || !c0(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: a,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, a) => r.tabIndex === a.tabIndex ? r.documentOrder - a.documentOrder : r.tabIndex - a.tabIndex).map((r) => r.node).concat(t);
}
function d0() {
  return !0;
}
function wo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: a = !1,
    getTabbable: i = u0,
    isEnabled: s = d0,
    open: l
  } = e, c = b.useRef(!1), u = b.useRef(null), d = b.useRef(null), f = b.useRef(null), p = b.useRef(null), h = b.useRef(!1), E = b.useRef(null), v = it(t.ref, E), m = b.useRef(null);
  b.useEffect(() => {
    !l || !E.current || (h.current = !n);
  }, [n, l]), b.useEffect(() => {
    if (!l || !E.current)
      return;
    const x = pt(E.current);
    return E.current.contains(x.activeElement) || (E.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), E.current.setAttribute("tabIndex", "-1")), h.current && E.current.focus()), () => {
      a || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), b.useEffect(() => {
    if (!l || !E.current)
      return;
    const x = pt(E.current), g = (R) => {
      const {
        current: $
      } = E;
      if ($ !== null) {
        if (!x.hasFocus() || r || !s() || c.current) {
          c.current = !1;
          return;
        }
        if (!$.contains(x.activeElement)) {
          if (R && p.current !== R.target || x.activeElement !== p.current)
            p.current = null;
          else if (p.current !== null)
            return;
          if (!h.current)
            return;
          let _ = [];
          if ((x.activeElement === u.current || x.activeElement === d.current) && (_ = i(E.current)), _.length > 0) {
            var F, k;
            const z = !!((F = m.current) != null && F.shiftKey && ((k = m.current) == null ? void 0 : k.key) === "Tab"), U = _[0], L = _[_.length - 1];
            typeof U != "string" && typeof L != "string" && (z ? L.focus() : U.focus());
          } else
            $.focus();
        }
      }
    }, y = (R) => {
      m.current = R, !(r || !s() || R.key !== "Tab") && x.activeElement === E.current && R.shiftKey && (c.current = !0, d.current && d.current.focus());
    };
    x.addEventListener("focusin", g), x.addEventListener("keydown", y, !0);
    const C = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && g(null);
    }, 50);
    return () => {
      clearInterval(C), x.removeEventListener("focusin", g), x.removeEventListener("keydown", y, !0);
    };
  }, [n, r, a, s, l, i]);
  const O = (x) => {
    f.current === null && (f.current = x.relatedTarget), h.current = !0, p.current = x.target;
    const g = t.props.onFocus;
    g && g(x);
  }, T = (x) => {
    f.current === null && (f.current = x.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ Te(b.Fragment, {
    children: [/* @__PURE__ */ P("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: v,
      onFocus: O
    }), /* @__PURE__ */ P("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (wo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Ur,
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
process.env.NODE_ENV !== "production" && (wo["propTypes"] = gc(wo.propTypes));
var vt = "top", $t = "bottom", It = "right", yt = "left", ki = "auto", Kr = [vt, $t, It, yt], Jn = "start", Dr = "end", f0 = "clippingParents", Su = "viewport", vr = "popper", p0 = "reference", xl = /* @__PURE__ */ Kr.reduce(function(e, t) {
  return e.concat([t + "-" + Jn, t + "-" + Dr]);
}, []), wu = /* @__PURE__ */ [].concat(Kr, [ki]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Jn, t + "-" + Dr]);
}, []), m0 = "beforeRead", h0 = "read", v0 = "afterRead", y0 = "beforeMain", g0 = "main", b0 = "afterMain", E0 = "beforeWrite", x0 = "write", O0 = "afterWrite", S0 = [m0, h0, v0, y0, g0, b0, E0, x0, O0];
function zt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function $n(e) {
  var t = Tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pt(e) {
  var t = Tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function _i(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function w0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Pt(i) || !zt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(s) {
      var l = a[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function T0(e) {
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
      var a = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Pt(a) || !zt(a) || (Object.assign(a.style, l), Object.keys(i).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
const C0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: w0,
  effect: T0,
  requires: ["computeStyles"]
};
function Ut(e) {
  return e.split("-")[0];
}
var wn = Math.max, To = Math.min, Zn = Math.round;
function Xa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Tu() {
  return !/^((?!chrome|android).)*safari/i.test(Xa());
}
function er(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && Pt(e) && (a = e.offsetWidth > 0 && Zn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Zn(r.height) / e.offsetHeight || 1);
  var s = $n(e) ? Tt(e) : window, l = s.visualViewport, c = !Tu() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / a, d = (r.top + (c && l ? l.offsetTop : 0)) / i, f = r.width / a, p = r.height / i;
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
function Ai(e) {
  var t = er(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Cu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && _i(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Qt(e) {
  return Tt(e).getComputedStyle(e);
}
function R0(e) {
  return ["table", "td", "th"].indexOf(zt(e)) >= 0;
}
function hn(e) {
  return (($n(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function qo(e) {
  return zt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (_i(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    hn(e)
  );
}
function Ol(e) {
  return !Pt(e) || // https://github.com/popperjs/popper-core/issues/837
  Qt(e).position === "fixed" ? null : e.offsetParent;
}
function P0(e) {
  var t = /firefox/i.test(Xa()), n = /Trident/i.test(Xa());
  if (n && Pt(e)) {
    var r = Qt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = qo(e);
  for (_i(a) && (a = a.host); Pt(a) && ["html", "body"].indexOf(zt(a)) < 0; ) {
    var i = Qt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Gr(e) {
  for (var t = Tt(e), n = Ol(e); n && R0(n) && Qt(n).position === "static"; )
    n = Ol(n);
  return n && (zt(n) === "html" || zt(n) === "body" && Qt(n).position === "static") ? t : n || P0(e) || t;
}
function Di(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Rr(e, t, n) {
  return wn(e, To(t, n));
}
function $0(e, t, n) {
  var r = Rr(e, t, n);
  return r > n ? n : r;
}
function Ru() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Pu(e) {
  return Object.assign({}, Ru(), e);
}
function $u(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var I0 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Pu(typeof t != "number" ? t : $u(t, Kr));
};
function N0(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Ut(n.placement), c = Di(l), u = [yt, It].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var f = I0(a.padding, n), p = Ai(i), h = c === "y" ? vt : yt, E = c === "y" ? $t : It, v = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], m = s[c] - n.rects.reference[c], O = Gr(i), T = O ? c === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, x = v / 2 - m / 2, g = f[h], y = T - p[d] - f[E], C = T / 2 - p[d] / 2 + x, R = Rr(g, C, y), $ = c;
    n.modifiersData[r] = (t = {}, t[$] = R, t.centerOffset = R - C, t);
  }
}
function M0(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Cu(t.elements.popper, a) && (t.elements.arrow = a));
}
const k0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: N0,
  effect: M0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function tr(e) {
  return e.split("-")[1];
}
var _0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function A0(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: Zn(n * a) / a || 0,
    y: Zn(r * a) / a || 0
  };
}
function Sl(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = s.x, h = p === void 0 ? 0 : p, E = s.y, v = E === void 0 ? 0 : E, m = typeof d == "function" ? d({
    x: h,
    y: v
  }) : {
    x: h,
    y: v
  };
  h = m.x, v = m.y;
  var O = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), x = yt, g = vt, y = window;
  if (u) {
    var C = Gr(n), R = "clientHeight", $ = "clientWidth";
    if (C === Tt(n) && (C = hn(n), Qt(C).position !== "static" && l === "absolute" && (R = "scrollHeight", $ = "scrollWidth")), C = C, a === vt || (a === yt || a === It) && i === Dr) {
      g = $t;
      var F = f && C === y && y.visualViewport ? y.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[R]
      );
      v -= F - r.height, v *= c ? 1 : -1;
    }
    if (a === yt || (a === vt || a === $t) && i === Dr) {
      x = It;
      var k = f && C === y && y.visualViewport ? y.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[$]
      );
      h -= k - r.width, h *= c ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: l
  }, u && _0), z = d === !0 ? A0({
    x: h,
    y: v
  }, Tt(n)) : {
    x: h,
    y: v
  };
  if (h = z.x, v = z.y, c) {
    var U;
    return Object.assign({}, _, (U = {}, U[g] = T ? "0" : "", U[x] = O ? "0" : "", U.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", U));
  }
  return Object.assign({}, _, (t = {}, t[g] = T ? v + "px" : "", t[x] = O ? h + "px" : "", t.transform = "", t));
}
function D0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Ut(t.placement),
    variation: tr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Sl(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Sl(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const F0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: D0,
  data: {}
};
var oo = {
  passive: !0
};
function L0(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, s = r.resize, l = s === void 0 ? !0 : s, c = Tt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, oo);
  }), l && c.addEventListener("resize", n.update, oo), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, oo);
    }), l && c.removeEventListener("resize", n.update, oo);
  };
}
const j0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: L0,
  data: {}
};
var W0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return W0[t];
  });
}
var B0 = {
  start: "end",
  end: "start"
};
function wl(e) {
  return e.replace(/start|end/g, function(t) {
    return B0[t];
  });
}
function Fi(e) {
  var t = Tt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Li(e) {
  return er(hn(e)).left + Fi(e).scrollLeft;
}
function U0(e, t) {
  var n = Tt(e), r = hn(e), a = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (a) {
    i = a.width, s = a.height;
    var u = Tu();
    (u || !u && t === "fixed") && (l = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Li(e),
    y: c
  };
}
function V0(e) {
  var t, n = hn(e), r = Fi(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = wn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = wn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + Li(e), c = -r.scrollTop;
  return Qt(a || n).direction === "rtl" && (l += wn(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function ji(e) {
  var t = Qt(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Iu(e) {
  return ["html", "body", "#document"].indexOf(zt(e)) >= 0 ? e.ownerDocument.body : Pt(e) && ji(e) ? e : Iu(qo(e));
}
function Pr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Iu(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Tt(r), s = a ? [i].concat(i.visualViewport || [], ji(r) ? r : []) : r, l = t.concat(s);
  return a ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Pr(qo(s)))
  );
}
function Ja(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function z0(e, t) {
  var n = er(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Tl(e, t, n) {
  return t === Su ? Ja(U0(e, n)) : $n(t) ? z0(t, n) : Ja(V0(hn(e)));
}
function q0(e) {
  var t = Pr(qo(e)), n = ["absolute", "fixed"].indexOf(Qt(e).position) >= 0, r = n && Pt(e) ? Gr(e) : e;
  return $n(r) ? t.filter(function(a) {
    return $n(a) && Cu(a, r) && zt(a) !== "body";
  }) : [];
}
function H0(e, t, n, r) {
  var a = t === "clippingParents" ? q0(e) : [].concat(t), i = [].concat(a, [n]), s = i[0], l = i.reduce(function(c, u) {
    var d = Tl(e, u, r);
    return c.top = wn(d.top, c.top), c.right = To(d.right, c.right), c.bottom = To(d.bottom, c.bottom), c.left = wn(d.left, c.left), c;
  }, Tl(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Nu(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? Ut(r) : null, i = r ? tr(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (a) {
    case vt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case $t:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case It:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case yt:
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
  var u = a ? Di(a) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Jn:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Dr:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Fr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, c = l === void 0 ? f0 : l, u = n.rootBoundary, d = u === void 0 ? Su : u, f = n.elementContext, p = f === void 0 ? vr : f, h = n.altBoundary, E = h === void 0 ? !1 : h, v = n.padding, m = v === void 0 ? 0 : v, O = Pu(typeof m != "number" ? m : $u(m, Kr)), T = p === vr ? p0 : vr, x = e.rects.popper, g = e.elements[E ? T : p], y = H0($n(g) ? g : g.contextElement || hn(e.elements.popper), c, d, s), C = er(e.elements.reference), R = Nu({
    reference: C,
    element: x,
    strategy: "absolute",
    placement: a
  }), $ = Ja(Object.assign({}, x, R)), F = p === vr ? $ : C, k = {
    top: y.top - F.top + O.top,
    bottom: F.bottom - y.bottom + O.bottom,
    left: y.left - F.left + O.left,
    right: F.right - y.right + O.right
  }, _ = e.modifiersData.offset;
  if (p === vr && _) {
    var z = _[a];
    Object.keys(k).forEach(function(U) {
      var L = [It, $t].indexOf(U) >= 0 ? 1 : -1, D = [vt, $t].indexOf(U) >= 0 ? "y" : "x";
      k[U] += z[D] * L;
    });
  }
  return k;
}
function Y0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? wu : c, d = tr(r), f = d ? l ? xl : xl.filter(function(E) {
    return tr(E) === d;
  }) : Kr, p = f.filter(function(E) {
    return u.indexOf(E) >= 0;
  });
  p.length === 0 && (p = f);
  var h = p.reduce(function(E, v) {
    return E[v] = Fr(e, {
      placement: v,
      boundary: a,
      rootBoundary: i,
      padding: s
    })[Ut(v)], E;
  }, {});
  return Object.keys(h).sort(function(E, v) {
    return h[E] - h[v];
  });
}
function K0(e) {
  if (Ut(e) === ki)
    return [];
  var t = fo(e);
  return [wl(e), t, wl(t)];
}
function G0(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, E = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, m = t.options.placement, O = Ut(m), T = O === m, x = c || (T || !E ? [fo(m)] : K0(m)), g = [m].concat(x).reduce(function(K, X) {
      return K.concat(Ut(X) === ki ? Y0(t, {
        placement: X,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: E,
        allowedAutoPlacements: v
      }) : X);
    }, []), y = t.rects.reference, C = t.rects.popper, R = /* @__PURE__ */ new Map(), $ = !0, F = g[0], k = 0; k < g.length; k++) {
      var _ = g[k], z = Ut(_), U = tr(_) === Jn, L = [vt, $t].indexOf(z) >= 0, D = L ? "width" : "height", B = Fr(t, {
        placement: _,
        boundary: d,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), q = L ? U ? It : yt : U ? $t : vt;
      y[D] > C[D] && (q = fo(q));
      var se = fo(q), ee = [];
      if (i && ee.push(B[z] <= 0), l && ee.push(B[q] <= 0, B[se] <= 0), ee.every(function(K) {
        return K;
      })) {
        F = _, $ = !1;
        break;
      }
      R.set(_, ee);
    }
    if ($)
      for (var A = E ? 3 : 1, H = function(X) {
        var J = g.find(function(G) {
          var re = R.get(G);
          if (re)
            return re.slice(0, X).every(function(ae) {
              return ae;
            });
        });
        if (J)
          return F = J, "break";
      }, ne = A; ne > 0; ne--) {
        var Z = H(ne);
        if (Z === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[r]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const Q0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: G0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Cl(e, t, n) {
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
function Rl(e) {
  return [vt, It, $t, yt].some(function(t) {
    return e[t] >= 0;
  });
}
function X0(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, s = Fr(t, {
    elementContext: "reference"
  }), l = Fr(t, {
    altBoundary: !0
  }), c = Cl(s, r), u = Cl(l, a, i), d = Rl(c), f = Rl(u);
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
const J0 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: X0
};
function Z0(e, t, n) {
  var r = Ut(e), a = [yt, vt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * a, [yt, It].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function eE(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, s = wu.reduce(function(d, f) {
    return d[f] = Z0(f, t.rects, i), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const tE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: eE
};
function nE(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Nu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const rE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: nE,
  data: {}
};
function oE(e) {
  return e === "x" ? "y" : "x";
}
function aE(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, h = p === void 0 ? !0 : p, E = n.tetherOffset, v = E === void 0 ? 0 : E, m = Fr(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), O = Ut(t.placement), T = tr(t.placement), x = !T, g = Di(O), y = oE(g), C = t.modifiersData.popperOffsets, R = t.rects.reference, $ = t.rects.popper, F = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, k = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (C) {
    if (i) {
      var U, L = g === "y" ? vt : yt, D = g === "y" ? $t : It, B = g === "y" ? "height" : "width", q = C[g], se = q + m[L], ee = q - m[D], A = h ? -$[B] / 2 : 0, H = T === Jn ? R[B] : $[B], ne = T === Jn ? -$[B] : -R[B], Z = t.elements.arrow, K = h && Z ? Ai(Z) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ru(), J = X[L], G = X[D], re = Rr(0, R[B], K[B]), ae = x ? R[B] / 2 - A - re - J - k.mainAxis : H - re - J - k.mainAxis, de = x ? -R[B] / 2 + A + re + G + k.mainAxis : ne + re + G + k.mainAxis, ie = t.elements.arrow && Gr(t.elements.arrow), j = ie ? g === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, pe = (U = _ == null ? void 0 : _[g]) != null ? U : 0, M = q + ae - pe - j, Q = q + de - pe, xe = Rr(h ? To(se, M) : se, q, h ? wn(ee, Q) : ee);
      C[g] = xe, z[g] = xe - q;
    }
    if (l) {
      var le, Ue = g === "x" ? vt : yt, Ve = g === "x" ? $t : It, Ie = C[y], Se = y === "y" ? "height" : "width", We = Ie + m[Ue], Re = Ie - m[Ve], Qe = [vt, yt].indexOf(O) !== -1, Xe = (le = _ == null ? void 0 : _[y]) != null ? le : 0, et = Qe ? We : Ie - R[Se] - $[Se] - Xe + k.altAxis, Pe = Qe ? Ie + R[Se] + $[Se] - Xe - k.altAxis : Re, me = h && Qe ? $0(et, Ie, Pe) : Rr(h ? et : We, Ie, h ? Pe : Re);
      C[y] = me, z[y] = me - Ie;
    }
    t.modifiersData[r] = z;
  }
}
const iE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: aE,
  requiresIfExists: ["offset"]
};
function sE(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function lE(e) {
  return e === Tt(e) || !Pt(e) ? Fi(e) : sE(e);
}
function cE(e) {
  var t = e.getBoundingClientRect(), n = Zn(t.width) / e.offsetWidth || 1, r = Zn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function uE(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pt(t), a = Pt(t) && cE(t), i = hn(t), s = er(e, a, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((zt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ji(i)) && (l = lE(t)), Pt(t) ? (c = er(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Li(i))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function dE(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && a(c);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function fE(e) {
  var t = dE(e);
  return S0.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function pE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function mE(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Pl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $l() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function hE(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Pl : a;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Pl, i),
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
        var T = typeof O == "function" ? O(d.options) : O;
        v(), d.options = Object.assign({}, i, d.options, T), d.scrollParents = {
          reference: $n(l) ? Pr(l) : l.contextElement ? Pr(l.contextElement) : [],
          popper: Pr(c)
        };
        var x = fE(mE([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = x.filter(function(g) {
          return g.enabled;
        }), E(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var O = d.elements, T = O.reference, x = O.popper;
          if ($l(T, x)) {
            d.rects = {
              reference: uE(T, Gr(x), d.options.strategy === "fixed"),
              popper: Ai(x)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(k) {
              return d.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var g = 0; g < d.orderedModifiers.length; g++) {
              if (d.reset === !0) {
                d.reset = !1, g = -1;
                continue;
              }
              var y = d.orderedModifiers[g], C = y.fn, R = y.options, $ = R === void 0 ? {} : R, F = y.name;
              typeof C == "function" && (d = C({
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
      update: pE(function() {
        return new Promise(function(m) {
          h.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        v(), p = !0;
      }
    };
    if (!$l(l, c))
      return h;
    h.setOptions(u).then(function(m) {
      !p && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function E() {
      d.orderedModifiers.forEach(function(m) {
        var O = m.name, T = m.options, x = T === void 0 ? {} : T, g = m.effect;
        if (typeof g == "function") {
          var y = g({
            state: d,
            name: O,
            instance: h,
            options: x
          }), C = function() {
          };
          f.push(y || C);
        }
      });
    }
    function v() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return h;
  };
}
var vE = [j0, rE, F0, C0, tE, Q0, iE, k0, J0], yE = /* @__PURE__ */ hE({
  defaultModifiers: vE
});
function gE(e) {
  return typeof e == "function" ? e() : e;
}
const Lr = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    children: r,
    container: a,
    disablePortal: i = !1
  } = t, [s, l] = b.useState(null), c = it(/* @__PURE__ */ b.isValidElement(r) ? r.ref : null, n);
  if (cn(() => {
    i || l(gE(a) || document.body);
  }, [a, i]), cn(() => {
    if (s && !i)
      return mo(n, s), () => {
        mo(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ b.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ b.cloneElement(r, u);
    }
    return /* @__PURE__ */ P(b.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ P(b.Fragment, {
    children: s && /* @__PURE__ */ dc.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (Lr.propTypes = {
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
  container: o.oneOfType([Vt, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (Lr["propTypes"] = gc(Lr.propTypes));
function bE(e) {
  return Be("MuiPopper", e);
}
ze("MuiPopper", ["root"]);
const EE = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], xE = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function OE(e, t) {
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
function Co(e) {
  return typeof e == "function" ? e() : e;
}
function Ho(e) {
  return e.nodeType !== void 0;
}
function SE(e) {
  return !Ho(e);
}
const wE = () => He({
  root: ["root"]
}, Ou(bE)), TE = {}, CE = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: a,
    children: i,
    direction: s,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: f,
    popperRef: p,
    slotProps: h = {},
    slots: E = {},
    TransitionProps: v
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, m = ve(t, EE), O = b.useRef(null), T = it(O, n), x = b.useRef(null), g = it(x, p), y = b.useRef(g);
  cn(() => {
    y.current = g;
  }, [g]), b.useImperativeHandle(p, () => x.current, []);
  const C = OE(d, s), [R, $] = b.useState(C), [F, k] = b.useState(Co(a));
  b.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), b.useEffect(() => {
    a && k(Co(a));
  }, [a]), cn(() => {
    if (!F || !u)
      return;
    const D = (se) => {
      $(se.placement);
    };
    if (process.env.NODE_ENV !== "production" && F && Ho(F) && F.nodeType === 1) {
      const se = F.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && se.top === 0 && se.left === 0 && se.right === 0 && se.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let B = [{
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
        D(se);
      }
    }];
    c != null && (B = B.concat(c)), f && f.modifiers != null && (B = B.concat(f.modifiers));
    const q = yE(F, O.current, w({
      placement: C
    }, f, {
      modifiers: B
    }));
    return y.current(q), () => {
      q.destroy(), y.current(null);
    };
  }, [F, l, c, u, f, C]);
  const _ = {
    placement: R
  };
  v !== null && (_.TransitionProps = v);
  const z = wE(), U = (r = E.root) != null ? r : "div", L = Pn({
    elementType: U,
    externalSlotProps: h.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: z.root
  });
  return /* @__PURE__ */ P(U, w({}, L, {
    children: typeof i == "function" ? i(_) : i
  }));
}), Mu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: a,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: p = TE,
    popperRef: h,
    style: E,
    transition: v = !1,
    slotProps: m = {},
    slots: O = {}
  } = t, T = ve(t, xE), [x, g] = b.useState(!0), y = () => {
    g(!1);
  }, C = () => {
    g(!0);
  };
  if (!c && !d && (!v || x))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const k = Co(r);
    R = k && Ho(k) ? pt(k).body : pt(null).body;
  }
  const $ = !d && c && (!v || x) ? "none" : void 0, F = v ? {
    in: d,
    onEnter: y,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ P(Lr, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ P(CE, w({
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: v ? !x : d,
      placement: f,
      popperOptions: p,
      popperRef: h,
      slotProps: m,
      slots: O
    }, T, {
      style: w({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $
      }, E),
      TransitionProps: F,
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (Mu.propTypes = {
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
  anchorEl: Kt(o.oneOfType([Vt, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Co(e.anchorEl);
      if (t && Ho(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || SE(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: o.oneOfType([Vt, o.func]),
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
  popperRef: kt,
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
function RE(e) {
  const t = pt(e);
  return t.body === e ? Tn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function $r(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Il(e) {
  return parseInt(Tn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function PE(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Nl(e, t, n, r, a) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1, c = !PE(s);
    l && c && $r(s, a);
  });
}
function xa(e, t) {
  let n = -1;
  return e.some((r, a) => t(r) ? (n = a, !0) : !1), n;
}
function $E(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (RE(r)) {
      const s = Oc(pt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Il(r) + s}px`;
      const l = pt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Il(c) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = pt(r).body;
    else {
      const s = r.parentElement, l = Tn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: l
    }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function IE(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class NE {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && $r(t.modalRef, !1);
    const a = IE(n);
    Nl(n, t.mount, t.modalRef, a, !0);
    const i = xa(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: a
    }), r);
  }
  mount(t, n) {
    const r = xa(this.containers, (i) => i.modals.indexOf(t) !== -1), a = this.containers[r];
    a.restore || (a.restore = $E(a, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const a = xa(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[a];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && $r(t.modalRef, n), Nl(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(a, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && $r(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function ME(e) {
  return Be("MuiModal", e);
}
ze("MuiModal", ["root", "hidden", "backdrop"]);
const kE = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], _E = (e) => {
  const {
    open: t,
    exited: n
  } = e;
  return He({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Ou(ME));
};
function AE(e) {
  return typeof e == "function" ? e() : e;
}
function DE(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const FE = new NE(), ku = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a;
  const {
    children: i,
    closeAfterTransition: s = !1,
    container: l,
    disableAutoFocus: c = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: d = !1,
    disablePortal: f = !1,
    disableRestoreFocus: p = !1,
    disableScrollLock: h = !1,
    hideBackdrop: E = !1,
    keepMounted: v = !1,
    // private
    manager: m = FE,
    onBackdropClick: O,
    onClose: T,
    onKeyDown: x,
    open: g,
    onTransitionEnter: y,
    onTransitionExited: C,
    slotProps: R = {},
    slots: $ = {}
  } = t, F = ve(t, kE), k = m, [_, z] = b.useState(!g), U = b.useRef({}), L = b.useRef(null), D = b.useRef(null), B = it(D, n), q = DE(i), se = (r = t["aria-hidden"]) != null ? r : !0, ee = () => pt(L.current), A = () => (U.current.modalRef = D.current, U.current.mountNode = L.current, U.current), H = () => {
    k.mount(A(), {
      disableScrollLock: h
    }), D.current && (D.current.scrollTop = 0);
  }, ne = Bt(() => {
    const le = AE(l) || ee().body;
    k.add(A(), le), D.current && H();
  }), Z = b.useCallback(() => k.isTopModal(A()), [k]), K = Bt((le) => {
    L.current = le, !(!le || !D.current) && (g && Z() ? H() : $r(D.current, se));
  }), X = b.useCallback(() => {
    k.remove(A(), se);
  }, [k, se]);
  b.useEffect(() => () => {
    X();
  }, [X]), b.useEffect(() => {
    g ? ne() : (!q || !s) && X();
  }, [g, X, q, s, ne]);
  const J = w({}, t, {
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: u,
    disableEscapeKeyDown: d,
    disablePortal: f,
    disableRestoreFocus: p,
    disableScrollLock: h,
    exited: _,
    hideBackdrop: E,
    keepMounted: v
  }), G = _E(J), re = () => {
    z(!1), y && y();
  }, ae = () => {
    z(!0), C && C(), s && X();
  }, de = (le) => {
    le.target === le.currentTarget && (O && O(le), T && T(le, "backdropClick"));
  }, ie = (le) => {
    x && x(le), !(le.key !== "Escape" || !Z()) && (d || (le.stopPropagation(), T && T(le, "escapeKeyDown")));
  }, j = {};
  i.props.tabIndex === void 0 && (j.tabIndex = "-1"), q && (j.onEnter = gs(re, i.props.onEnter), j.onExited = gs(ae, i.props.onExited));
  const pe = (a = $.root) != null ? a : "div", M = Pn({
    elementType: pe,
    externalSlotProps: R.root,
    externalForwardedProps: F,
    additionalProps: {
      ref: B,
      role: "presentation",
      onKeyDown: ie
    },
    className: G.root,
    ownerState: J
  }), Q = $.backdrop, xe = Pn({
    elementType: Q,
    externalSlotProps: R.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: de,
      open: g
    },
    className: G.backdrop,
    ownerState: J
  });
  return !v && !g && (!q || _) ? null : /* @__PURE__ */ P(
    Lr,
    {
      ref: K,
      container: l,
      disablePortal: f,
      children: /* @__PURE__ */ Te(pe, w({}, M, {
        children: [!E && Q ? /* @__PURE__ */ P(Q, w({}, xe)) : null, /* @__PURE__ */ P(wo, {
          disableEnforceFocus: u,
          disableAutoFocus: c,
          disableRestoreFocus: p,
          isEnabled: Z,
          open: g,
          children: /* @__PURE__ */ b.cloneElement(i, j)
        })]
      }))
    }
  );
});
process.env.NODE_ENV !== "production" && (ku.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Ur.isRequired,
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
  container: o.oneOfType([Vt, o.func]),
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
const LE = ["onChange", "maxRows", "minRows", "style", "value"];
function ao(e) {
  return parseInt(e, 10) || 0;
}
const jE = {
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
function Ml(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const _u = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: a,
    minRows: i = 1,
    style: s,
    value: l
  } = t, c = ve(t, LE), {
    current: u
  } = b.useRef(l != null), d = b.useRef(null), f = it(n, d), p = b.useRef(null), h = b.useRef(0), [E, v] = b.useState({
    outerHeightStyle: 0
  }), m = b.useCallback(() => {
    const y = d.current, R = Tn(y).getComputedStyle(y);
    if (R.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const $ = p.current;
    $.style.width = R.width, $.value = y.value || t.placeholder || "x", $.value.slice(-1) === `
` && ($.value += " ");
    const F = R.boxSizing, k = ao(R.paddingBottom) + ao(R.paddingTop), _ = ao(R.borderBottomWidth) + ao(R.borderTopWidth), z = $.scrollHeight;
    $.value = "x";
    const U = $.scrollHeight;
    let L = z;
    i && (L = Math.max(Number(i) * U, L)), a && (L = Math.min(Number(a) * U, L)), L = Math.max(L, U);
    const D = L + (F === "border-box" ? k + _ : 0), B = Math.abs(L - z) <= 1;
    return {
      outerHeightStyle: D,
      overflow: B
    };
  }, [a, i, t.placeholder]), O = (y, C) => {
    const {
      outerHeightStyle: R,
      overflow: $
    } = C;
    return h.current < 20 && (R > 0 && Math.abs((y.outerHeightStyle || 0) - R) > 1 || y.overflow !== $) ? (h.current += 1, {
      overflow: $,
      outerHeightStyle: R
    }) : (process.env.NODE_ENV !== "production" && h.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), y);
  }, T = b.useCallback(() => {
    const y = m();
    Ml(y) || v((C) => O(C, y));
  }, [m]), x = () => {
    const y = m();
    Ml(y) || dc.flushSync(() => {
      v((C) => O(C, y));
    });
  };
  b.useEffect(() => {
    const y = Ec(() => {
      h.current = 0, d.current && x();
    });
    let C;
    const R = d.current, $ = Tn(R);
    return $.addEventListener("resize", y), typeof ResizeObserver < "u" && (C = new ResizeObserver(y), C.observe(R)), () => {
      y.clear(), $.removeEventListener("resize", y), C && C.disconnect();
    };
  }), cn(() => {
    T();
  }), b.useEffect(() => {
    h.current = 0;
  }, [l]);
  const g = (y) => {
    h.current = 0, u || T(), r && r(y);
  };
  return /* @__PURE__ */ Te(b.Fragment, {
    children: [/* @__PURE__ */ P("textarea", w({
      value: l,
      onChange: g,
      ref: f,
      rows: i,
      style: w({
        height: E.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: E.overflow ? "hidden" : void 0
      }, s)
    }, c)), /* @__PURE__ */ P("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: p,
      tabIndex: -1,
      style: w({}, jE.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (_u.propTypes = {
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
function kl(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function Au(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: a = "any",
    stringify: i,
    trim: s = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: u
  }) => {
    let d = s ? c.trim() : c;
    n && (d = d.toLowerCase()), t && (d = kl(d));
    const f = d ? l.filter((p) => {
      let h = (i || u)(p);
      return n && (h = h.toLowerCase()), t && (h = kl(h)), a === "start" ? h.indexOf(d) === 0 : h.indexOf(d) > -1;
    }) : l;
    return typeof r == "number" ? f.slice(0, r) : f;
  };
}
function Oa(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const WE = Au(), _l = 5, BE = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function UE(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = BE,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: a = !1,
    autoSelect: i = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? [] : null,
    disableClearable: f = !1,
    disableCloseOnSelect: p = !1,
    disabled: h,
    disabledItemsFocusable: E = !1,
    disableListWrap: v = !1,
    filterOptions: m = WE,
    filterSelectedOptions: O = !1,
    freeSolo: T = !1,
    getOptionDisabled: x,
    getOptionLabel: g = (I) => {
      var N;
      return (N = I.label) != null ? N : I;
    },
    groupBy: y,
    handleHomeEndKeys: C = !e.freeSolo,
    id: R,
    includeInputInList: $ = !1,
    inputValue: F,
    isOptionEqualToValue: k = (I, N) => I === N,
    multiple: _ = !1,
    onChange: z,
    onClose: U,
    onHighlightChange: L,
    onInputChange: D,
    onOpen: B,
    open: q,
    openOnFocus: se = !1,
    options: ee,
    readOnly: A = !1,
    selectOnFocus: H = !e.freeSolo,
    value: ne
  } = e, Z = xc(R);
  let K = g;
  K = (I) => {
    const N = g(I);
    if (typeof N != "string") {
      if (process.env.NODE_ENV !== "production") {
        const W = N === void 0 ? "undefined" : `${typeof N} (${N})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${W} instead of a string for ${JSON.stringify(I)}.`);
      }
      return String(N);
    }
    return N;
  };
  const X = b.useRef(!1), J = b.useRef(!0), G = b.useRef(null), re = b.useRef(null), [ae, de] = b.useState(null), [ie, j] = b.useState(-1), pe = a ? 0 : -1, M = b.useRef(pe), [Q, xe] = xr({
    controlled: ne,
    default: d,
    name: u
  }), [le, Ue] = xr({
    controlled: F,
    default: "",
    name: u,
    state: "inputValue"
  }), [Ve, Ie] = b.useState(!1), Se = b.useCallback((I, N) => {
    if (!(_ ? Q.length < N.length : N !== null) && !l)
      return;
    let Y;
    if (_)
      Y = "";
    else if (N == null)
      Y = "";
    else {
      const oe = K(N);
      Y = typeof oe == "string" ? oe : "";
    }
    le !== Y && (Ue(Y), D && D(I, Y, "reset"));
  }, [K, le, _, D, Ue, l, Q]), [We, Re] = xr({
    controlled: q,
    default: !1,
    name: u,
    state: "open"
  }), [Qe, Xe] = b.useState(!0), et = !_ && Q != null && le === K(Q), Pe = We && !A, me = Pe ? m(
    ee.filter((I) => !(O && (_ ? Q : [Q]).some((N) => N !== null && k(I, N)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: et && Qe ? "" : le,
      getOptionLabel: K
    }
  ) : [], ce = Sf({
    filteredOptions: me,
    value: Q,
    inputValue: le
  });
  b.useEffect(() => {
    const I = Q !== ce.value;
    Ve && !I || T && !I || Se(null, Q);
  }, [Q, Se, Ve, ce.value, T]);
  const nt = We && me.length > 0 && !A;
  if (process.env.NODE_ENV !== "production" && Q !== null && !T && ee.length > 0) {
    const I = (_ ? Q : [Q]).filter((N) => !ee.some((W) => k(W, N)));
    I.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${I.length > 1 ? JSON.stringify(I) : JSON.stringify(I[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const ue = Bt((I) => {
    I === -1 ? G.current.focus() : ae.querySelector(`[data-tag-index="${I}"]`).focus();
  });
  b.useEffect(() => {
    _ && ie > Q.length - 1 && (j(-1), ue(-1));
  }, [Q, _, ie, ue]);
  function ge(I, N) {
    if (!re.current || I === -1)
      return -1;
    let W = I;
    for (; ; ) {
      if (N === "next" && W === me.length || N === "previous" && W === -1)
        return -1;
      const Y = re.current.querySelector(`[data-option-index="${W}"]`), oe = E ? !1 : !Y || Y.disabled || Y.getAttribute("aria-disabled") === "true";
      if (Y && !Y.hasAttribute("tabindex") || oe)
        W += N === "next" ? 1 : -1;
      else
        return W;
    }
  }
  const $e = Bt(({
    event: I,
    index: N,
    reason: W = "auto"
  }) => {
    if (M.current = N, N === -1 ? G.current.removeAttribute("aria-activedescendant") : G.current.setAttribute("aria-activedescendant", `${Z}-option-${N}`), L && L(I, N === -1 ? null : me[N], W), !re.current)
      return;
    const Y = re.current.querySelector(`[role="option"].${n}-focused`);
    Y && (Y.classList.remove(`${n}-focused`), Y.classList.remove(`${n}-focusVisible`));
    let oe = re.current;
    if (re.current.getAttribute("role") !== "listbox" && (oe = re.current.parentElement.querySelector('[role="listbox"]')), !oe)
      return;
    if (N === -1) {
      oe.scrollTop = 0;
      return;
    }
    const be = re.current.querySelector(`[data-option-index="${N}"]`);
    if (be && (be.classList.add(`${n}-focused`), W === "keyboard" && be.classList.add(`${n}-focusVisible`), oe.scrollHeight > oe.clientHeight && W !== "mouse" && W !== "touch")) {
      const Ee = be, Ce = oe.clientHeight + oe.scrollTop, lt = Ee.offsetTop + Ee.offsetHeight;
      lt > Ce ? oe.scrollTop = lt - oe.clientHeight : Ee.offsetTop - Ee.offsetHeight * (y ? 1.3 : 0) < oe.scrollTop && (oe.scrollTop = Ee.offsetTop - Ee.offsetHeight * (y ? 1.3 : 0));
    }
  }), Je = Bt(({
    event: I,
    diff: N,
    direction: W = "next",
    reason: Y = "auto"
  }) => {
    if (!Pe)
      return;
    const be = ge((() => {
      const Ee = me.length - 1;
      if (N === "reset")
        return pe;
      if (N === "start")
        return 0;
      if (N === "end")
        return Ee;
      const Ce = M.current + N;
      return Ce < 0 ? Ce === -1 && $ ? -1 : v && M.current !== -1 || Math.abs(N) > 1 ? 0 : Ee : Ce > Ee ? Ce === Ee + 1 && $ ? -1 : v || Math.abs(N) > 1 ? Ee : 0 : Ce;
    })(), W);
    if ($e({
      index: be,
      reason: Y,
      event: I
    }), r && N !== "reset")
      if (be === -1)
        G.current.value = le;
      else {
        const Ee = K(me[be]);
        G.current.value = Ee, Ee.toLowerCase().indexOf(le.toLowerCase()) === 0 && le.length > 0 && G.current.setSelectionRange(le.length, Ee.length);
      }
  }), Jt = () => {
    const I = (N, W) => {
      const Y = N ? K(N) : "", oe = W ? K(W) : "";
      return Y === oe;
    };
    if (M.current !== -1 && ce.filteredOptions && ce.filteredOptions.length !== me.length && ce.inputValue === le && (_ ? Q.length === ce.value.length && ce.value.every((N, W) => K(Q[W]) === K(N)) : I(ce.value, Q))) {
      const N = ce.filteredOptions[M.current];
      if (N && me.some((Y) => K(Y) === K(N)))
        return !0;
    }
    return !1;
  }, _t = b.useCallback(() => {
    if (!Pe || Jt())
      return;
    const I = _ ? Q[0] : Q;
    if (me.length === 0 || I == null) {
      Je({
        diff: "reset"
      });
      return;
    }
    if (re.current) {
      if (I != null) {
        const N = me[M.current];
        if (_ && N && Oa(Q, (Y) => k(N, Y)) !== -1)
          return;
        const W = Oa(me, (Y) => k(Y, I));
        W === -1 ? Je({
          diff: "reset"
        }) : $e({
          index: W
        });
        return;
      }
      if (M.current >= me.length - 1) {
        $e({
          index: me.length - 1
        });
        return;
      }
      $e({
        index: M.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    me.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    _ ? !1 : Q,
    O,
    Je,
    $e,
    Pe,
    le,
    _
  ]), lr = Bt((I) => {
    mo(re, I), I && _t();
  });
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    (!G.current || G.current.nodeName !== "INPUT") && (G.current && G.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${G.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), b.useEffect(() => {
    _t();
  }, [_t]);
  const Nt = (I) => {
    We || (Re(!0), Xe(!0), B && B(I));
  }, mt = (I, N) => {
    We && (Re(!1), U && U(I, N));
  }, gt = (I, N, W, Y) => {
    if (_) {
      if (Q.length === N.length && Q.every((oe, be) => oe === N[be]))
        return;
    } else if (Q === N)
      return;
    z && z(I, N, W, Y), xe(N);
  }, ft = b.useRef(!1), Mt = (I, N, W = "selectOption", Y = "options") => {
    let oe = W, be = N;
    if (_) {
      if (be = Array.isArray(Q) ? Q.slice() : [], process.env.NODE_ENV !== "production") {
        const Ce = be.filter((lt) => k(N, lt));
        Ce.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ce.length} matches.`].join(`
`));
      }
      const Ee = Oa(be, (Ce) => k(N, Ce));
      Ee === -1 ? be.push(N) : Y !== "freeSolo" && (be.splice(Ee, 1), oe = "removeOption");
    }
    Se(I, be), gt(I, be, oe, {
      option: N
    }), !p && (!I || !I.ctrlKey && !I.metaKey) && mt(I, oe), (s === !0 || s === "touch" && ft.current || s === "mouse" && !ft.current) && G.current.blur();
  };
  function vn(I, N) {
    if (I === -1)
      return -1;
    let W = I;
    for (; ; ) {
      if (N === "next" && W === Q.length || N === "previous" && W === -1)
        return -1;
      const Y = ae.querySelector(`[data-tag-index="${W}"]`);
      if (!Y || !Y.hasAttribute("tabindex") || Y.disabled || Y.getAttribute("aria-disabled") === "true")
        W += N === "next" ? 1 : -1;
      else
        return W;
    }
  }
  const Zt = (I, N) => {
    if (!_)
      return;
    le === "" && mt(I, "toggleInput");
    let W = ie;
    ie === -1 ? le === "" && N === "previous" && (W = Q.length - 1) : (W += N === "next" ? 1 : -1, W < 0 && (W = 0), W === Q.length && (W = -1)), W = vn(W, N), j(W), ue(W);
  }, In = (I) => {
    X.current = !0, Ue(""), D && D(I, "", "clear"), gt(I, _ ? [] : null, "clear");
  }, Nn = (I) => (N) => {
    if (I.onKeyDown && I.onKeyDown(N), !N.defaultMuiPrevented && (ie !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(N.key) === -1 && (j(-1), ue(-1)), N.which !== 229))
      switch (N.key) {
        case "Home":
          Pe && C && (N.preventDefault(), Je({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: N
          }));
          break;
        case "End":
          Pe && C && (N.preventDefault(), Je({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: N
          }));
          break;
        case "PageUp":
          N.preventDefault(), Je({
            diff: -_l,
            direction: "previous",
            reason: "keyboard",
            event: N
          }), Nt(N);
          break;
        case "PageDown":
          N.preventDefault(), Je({
            diff: _l,
            direction: "next",
            reason: "keyboard",
            event: N
          }), Nt(N);
          break;
        case "ArrowDown":
          N.preventDefault(), Je({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: N
          }), Nt(N);
          break;
        case "ArrowUp":
          N.preventDefault(), Je({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: N
          }), Nt(N);
          break;
        case "ArrowLeft":
          Zt(N, "previous");
          break;
        case "ArrowRight":
          Zt(N, "next");
          break;
        case "Enter":
          if (M.current !== -1 && Pe) {
            const W = me[M.current], Y = x ? x(W) : !1;
            if (N.preventDefault(), Y)
              return;
            Mt(N, W, "selectOption"), r && G.current.setSelectionRange(G.current.value.length, G.current.value.length);
          } else
            T && le !== "" && et === !1 && (_ && N.preventDefault(), Mt(N, le, "createOption", "freeSolo"));
          break;
        case "Escape":
          Pe ? (N.preventDefault(), N.stopPropagation(), mt(N, "escape")) : c && (le !== "" || _ && Q.length > 0) && (N.preventDefault(), N.stopPropagation(), In(N));
          break;
        case "Backspace":
          if (_ && !A && le === "" && Q.length > 0) {
            const W = ie === -1 ? Q.length - 1 : ie, Y = Q.slice();
            Y.splice(W, 1), gt(N, Y, "removeOption", {
              option: Q[W]
            });
          }
          break;
        case "Delete":
          if (_ && !A && le === "" && Q.length > 0 && ie !== -1) {
            const W = ie, Y = Q.slice();
            Y.splice(W, 1), gt(N, Y, "removeOption", {
              option: Q[W]
            });
          }
          break;
      }
  }, cr = (I) => {
    Ie(!0), se && !X.current && Nt(I);
  }, Mn = (I) => {
    if (t(re)) {
      G.current.focus();
      return;
    }
    Ie(!1), J.current = !0, X.current = !1, i && M.current !== -1 && Pe ? Mt(I, me[M.current], "blur") : i && T && le !== "" ? Mt(I, le, "blur", "freeSolo") : l && Se(I, Q), mt(I, "blur");
  }, en = (I) => {
    const N = I.target.value;
    le !== N && (Ue(N), Xe(!1), D && D(I, N, "input")), N === "" ? !f && !_ && gt(I, null, "clear") : Nt(I);
  }, rt = (I) => {
    const N = Number(I.currentTarget.getAttribute("data-option-index"));
    M.current !== N && $e({
      event: I,
      index: N,
      reason: "mouse"
    });
  }, Ze = (I) => {
    $e({
      event: I,
      index: Number(I.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), ft.current = !0;
  }, ht = (I) => {
    const N = Number(I.currentTarget.getAttribute("data-option-index"));
    Mt(I, me[N], "selectOption"), ft.current = !1;
  }, Qr = (I) => (N) => {
    const W = Q.slice();
    W.splice(I, 1), gt(N, W, "removeOption", {
      option: Q[I]
    });
  }, kn = (I) => {
    We ? mt(I, "toggleInput") : Nt(I);
  }, Xr = (I) => {
    I.currentTarget.contains(I.target) && I.target.getAttribute("id") !== Z && I.preventDefault();
  }, ur = (I) => {
    I.currentTarget.contains(I.target) && (G.current.focus(), H && J.current && G.current.selectionEnd - G.current.selectionStart === 0 && G.current.select(), J.current = !1);
  }, S = (I) => {
    (le === "" || !We) && kn(I);
  };
  let V = T && le.length > 0;
  V = V || (_ ? Q.length > 0 : Q !== null);
  let te = me;
  if (y) {
    const I = /* @__PURE__ */ new Map();
    let N = !1;
    te = me.reduce((W, Y, oe) => {
      const be = y(Y);
      return W.length > 0 && W[W.length - 1].group === be ? W[W.length - 1].options.push(Y) : (process.env.NODE_ENV !== "production" && (I.get(be) && !N && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), N = !0), I.set(be, !0)), W.push({
        key: oe,
        index: oe,
        group: be,
        options: [Y]
      })), W;
    }, []);
  }
  return h && Ve && Mn(), {
    getRootProps: (I = {}) => w({
      "aria-owns": nt ? `${Z}-listbox` : null
    }, I, {
      onKeyDown: Nn(I),
      onMouseDown: Xr,
      onClick: ur
    }),
    getInputLabelProps: () => ({
      id: `${Z}-label`,
      htmlFor: Z
    }),
    getInputProps: () => ({
      id: Z,
      value: le,
      onBlur: Mn,
      onFocus: cr,
      onChange: en,
      onMouseDown: S,
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
      disabled: h
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: In
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: kn
    }),
    getTagProps: ({
      index: I
    }) => w({
      key: I,
      "data-tag-index": I,
      tabIndex: -1
    }, !A && {
      onDelete: Qr(I)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${Z}-listbox`,
      "aria-labelledby": `${Z}-label`,
      ref: lr,
      onMouseDown: (I) => {
        I.preventDefault();
      }
    }),
    getOptionProps: ({
      index: I,
      option: N
    }) => {
      const W = (_ ? Q : [Q]).some((oe) => oe != null && k(N, oe)), Y = x ? x(N) : !1;
      return {
        key: K(N),
        tabIndex: -1,
        role: "option",
        id: `${Z}-option-${I}`,
        onMouseMove: rt,
        onClick: ht,
        onTouchStart: Ze,
        "data-option-index": I,
        "aria-disabled": Y,
        "aria-selected": W
      };
    },
    id: Z,
    inputValue: le,
    value: Q,
    dirty: V,
    expanded: Pe && ae,
    popupOpen: Pe,
    focused: Ve || ie !== -1,
    anchorEl: ae,
    setAnchorEl: de,
    focusedTag: ie,
    groupedOptions: te
  };
}
const VE = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], zE = he(Mu, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Du = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r;
  const a = Ic(), i = Ye({
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
    open: E,
    placement: v,
    popperOptions: m,
    popperRef: O,
    transition: T,
    slots: x,
    slotProps: g
  } = i, y = ve(i, VE), C = (r = x == null ? void 0 : x.root) != null ? r : c == null ? void 0 : c.Root, R = w({
    anchorEl: s,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: h,
    open: E,
    placement: v,
    popperOptions: m,
    popperRef: O,
    transition: T
  }, y);
  return /* @__PURE__ */ P(zE, w({
    as: l,
    direction: a == null ? void 0 : a.direction,
    slots: {
      root: C
    },
    slotProps: g ?? u
  }, R, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (Du.propTypes = {
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
  anchorEl: o.oneOfType([Vt, o.object, o.func]),
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
  container: o.oneOfType([Vt, o.func]),
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
  popperRef: kt,
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
const Fu = Du;
function qE(e) {
  return Be("MuiListSubheader", e);
}
ze("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const HE = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], YE = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: a,
    disableSticky: i
  } = e, s = {
    root: ["root", n !== "default" && `color${fe(n)}`, !r && "gutters", a && "inset", !i && "sticky"]
  };
  return He(s, qE, t);
}, KE = he("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${fe(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
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
})), Wi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: a,
    color: i = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = r, d = ve(r, HE), f = w({}, r, {
    color: i,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), p = YE(f);
  return /* @__PURE__ */ P(KE, w({
    as: s,
    className: ye(p.root, a),
    ref: n,
    ownerState: f
  }, d));
});
Wi.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Wi.propTypes = {
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
const GE = Wi;
function QE(e) {
  return Be("MuiPaper", e);
}
ze("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const XE = ["className", "component", "elevation", "square", "variant"], JE = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: a
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return He(i, QE, a);
}, ZE = he("div", {
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
  return w({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && w({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${ct("#fff", _s(t.elevation))}, ${ct("#fff", _s(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Lu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiPaper"
  }), {
    className: a,
    component: i = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ve(r, XE), d = w({}, r, {
    component: i,
    elevation: s,
    square: l,
    variant: c
  }), f = JE(d);
  return process.env.NODE_ENV !== "production" && nr().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ P(ZE, w({
    as: i,
    ownerState: d,
    className: ye(f.root, a),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (Lu.propTypes = {
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
  elevation: Kt(li, (e) => {
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
const Bi = Lu;
function ju(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _a(e, t);
}
const Al = {
  disabled: !1
};
var ex = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const Ro = Ot.createContext(null);
var tx = function(t) {
  return t.scrollTop;
}, Er = "unmounted", gn = "exited", bn = "entering", qn = "entered", Za = "exiting", Xt = /* @__PURE__ */ function(e) {
  ju(t, e);
  function t(r, a) {
    var i;
    i = e.call(this, r, a) || this;
    var s = a, l = s && !s.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? l ? (c = gn, i.appearStatus = bn) : c = qn : r.unmountOnExit || r.mountOnEnter ? c = Er : c = gn, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(a, i) {
    var s = a.in;
    return s && i.status === Er ? {
      status: gn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(a) {
    var i = null;
    if (a !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== bn && s !== qn && (i = bn) : (s === bn || s === qn) && (i = Za);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var a = this.props.timeout, i, s, l;
    return i = s = l = a, a != null && typeof a != "number" && (i = a.exit, s = a.enter, l = a.appear !== void 0 ? a.appear : s), {
      exit: i,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(a, i) {
    if (a === void 0 && (a = !1), i !== null)
      if (this.cancelNextCallback(), i === bn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Jr.findDOMNode(this);
          s && tx(s);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === gn && this.setState({
        status: Er
      });
  }, n.performEnter = function(a) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : a, c = this.props.nodeRef ? [l] : [Jr.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), p = l ? f.appear : f.enter;
    if (!a && !s || Al.disabled) {
      this.safeSetState({
        status: qn
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: bn
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: qn
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var a = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Jr.findDOMNode(this);
    if (!i || Al.disabled) {
      this.safeSetState({
        status: gn
      }, function() {
        a.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Za
    }, function() {
      a.props.onExiting(l), a.onTransitionEnd(s.exit, function() {
        a.safeSetState({
          status: gn
        }, function() {
          a.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(a, i) {
    i = this.setNextCallback(i), this.setState(a, i);
  }, n.setNextCallback = function(a) {
    var i = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, i.nextCallback = null, a(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(a, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Jr.findDOMNode(this), l = a == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    a != null && setTimeout(this.nextCallback, a);
  }, n.render = function() {
    var a = this.state.status;
    if (a === Er)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = ve(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ot.createElement(Ro.Provider, {
        value: null
      }, typeof s == "function" ? s(a, l) : Ot.cloneElement(Ot.Children.only(s), l))
    );
  }, t;
}(Ot.Component);
Xt.contextType = Ro;
Xt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    current: typeof Element > "u" ? o.any : function(e, t, n, r, a, i) {
      var s = e[t];
      return o.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, a, i);
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
    var n = ex;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      a[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(a));
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
function Un() {
}
Xt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Un,
  onEntering: Un,
  onEntered: Un,
  onExit: Un,
  onExiting: Un,
  onExited: Un
};
Xt.UNMOUNTED = Er;
Xt.EXITED = gn;
Xt.ENTERING = bn;
Xt.ENTERED = qn;
Xt.EXITING = Za;
const Wu = Xt;
function Ui(e, t) {
  var n = function(i) {
    return t && io(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Sd.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    r[a.key] = n(a);
  }), r;
}
function nx(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), a = [];
  for (var i in e)
    i in t ? a.length && (r[i] = a, a = []) : a.push(i);
  var s, l = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var u = r[c][s];
        l[r[c][s]] = n(u);
      }
    l[c] = n(c);
  }
  for (s = 0; s < a.length; s++)
    l[a[s]] = n(a[s]);
  return l;
}
function xn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function rx(e, t) {
  return Ui(e.children, function(n) {
    return so(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: xn(n, "appear", e),
      enter: xn(n, "enter", e),
      exit: xn(n, "exit", e)
    });
  });
}
function ox(e, t, n) {
  var r = Ui(e.children), a = nx(t, r);
  return Object.keys(a).forEach(function(i) {
    var s = a[i];
    if (io(s)) {
      var l = i in t, c = i in r, u = t[i], d = io(u) && !u.props.in;
      c && (!l || d) ? a[i] = so(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: xn(s, "exit", e),
        enter: xn(s, "enter", e)
      }) : !c && l && !d ? a[i] = so(s, {
        in: !1
      }) : c && l && io(u) && (a[i] = so(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: xn(s, "exit", e),
        enter: xn(s, "enter", e)
      }));
    }
  }), a;
}
var ax = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, ix = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Vi = /* @__PURE__ */ function(e) {
  ju(t, e);
  function t(r, a) {
    var i;
    i = e.call(this, r, a) || this;
    var s = i.handleExited.bind(Zh(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
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
  }, t.getDerivedStateFromProps = function(a, i) {
    var s = i.children, l = i.handleExited, c = i.firstRender;
    return {
      children: c ? rx(a, l) : ox(a, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(a, i) {
    var s = Ui(this.props.children);
    a.key in s || (a.props.onExited && a.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = w({}, l.children);
      return delete c[a.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var a = this.props, i = a.component, s = a.childFactory, l = ve(a, ["component", "childFactory"]), c = this.state.contextValue, u = ax(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ Ot.createElement(Ro.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Ot.createElement(Ro.Provider, {
      value: c
    }, /* @__PURE__ */ Ot.createElement(i, l, u));
  }, t;
}(Ot.Component);
Vi.propTypes = process.env.NODE_ENV !== "production" ? {
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
Vi.defaultProps = ix;
const sx = Vi;
function Bu(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: a,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = b.useState(!1), p = ye(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + a
  }, E = ye(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), b.useEffect(() => {
    if (!l && c != null) {
      const v = setTimeout(c, u);
      return () => {
        clearTimeout(v);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ P("span", {
    className: p,
    style: h,
    children: /* @__PURE__ */ P("span", {
      className: E
    })
  });
}
process.env.NODE_ENV !== "production" && (Bu.propTypes = {
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
const lx = ze("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ct = lx, cx = ["center", "classes", "className"];
let Yo = (e) => e, Dl, Fl, Ll, jl;
const ei = 550, ux = 80, dx = oi(Dl || (Dl = Yo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), fx = oi(Fl || (Fl = Yo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), px = oi(Ll || (Ll = Yo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), mx = he("span", {
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
}), hx = he(Bu, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(jl || (jl = Yo`
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
`), Ct.rippleVisible, dx, ei, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ct.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ct.child, Ct.childLeaving, fx, ei, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ct.childPulsate, px, ({
  theme: e
}) => e.transitions.easing.easeInOut), Uu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: a = !1,
    classes: i = {},
    className: s
  } = r, l = ve(r, cx), [c, u] = b.useState([]), d = b.useRef(0), f = b.useRef(null);
  b.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const p = b.useRef(!1), h = b.useRef(0), E = b.useRef(null), v = b.useRef(null);
  b.useEffect(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  const m = b.useCallback((g) => {
    const {
      pulsate: y,
      rippleX: C,
      rippleY: R,
      rippleSize: $,
      cb: F
    } = g;
    u((k) => [...k, /* @__PURE__ */ P(hx, {
      classes: {
        ripple: ye(i.ripple, Ct.ripple),
        rippleVisible: ye(i.rippleVisible, Ct.rippleVisible),
        ripplePulsate: ye(i.ripplePulsate, Ct.ripplePulsate),
        child: ye(i.child, Ct.child),
        childLeaving: ye(i.childLeaving, Ct.childLeaving),
        childPulsate: ye(i.childPulsate, Ct.childPulsate)
      },
      timeout: ei,
      pulsate: y,
      rippleX: C,
      rippleY: R,
      rippleSize: $
    }, d.current)]), d.current += 1, f.current = F;
  }, [i]), O = b.useCallback((g = {}, y = {}, C = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: $ = a || y.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = y;
    if ((g == null ? void 0 : g.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (p.current = !0);
    const k = F ? null : v.current, _ = k ? k.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let z, U, L;
    if ($ || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      z = Math.round(_.width / 2), U = Math.round(_.height / 2);
    else {
      const {
        clientX: D,
        clientY: B
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      z = Math.round(D - _.left), U = Math.round(B - _.top);
    }
    if ($)
      L = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const D = Math.max(Math.abs((k ? k.clientWidth : 0) - z), z) * 2 + 2, B = Math.max(Math.abs((k ? k.clientHeight : 0) - U), U) * 2 + 2;
      L = Math.sqrt(D ** 2 + B ** 2);
    }
    g != null && g.touches ? E.current === null && (E.current = () => {
      m({
        pulsate: R,
        rippleX: z,
        rippleY: U,
        rippleSize: L,
        cb: C
      });
    }, h.current = setTimeout(() => {
      E.current && (E.current(), E.current = null);
    }, ux)) : m({
      pulsate: R,
      rippleX: z,
      rippleY: U,
      rippleSize: L,
      cb: C
    });
  }, [a, m]), T = b.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), x = b.useCallback((g, y) => {
    if (clearTimeout(h.current), (g == null ? void 0 : g.type) === "touchend" && E.current) {
      E.current(), E.current = null, h.current = setTimeout(() => {
        x(g, y);
      });
      return;
    }
    E.current = null, u((C) => C.length > 0 ? C.slice(1) : C), f.current = y;
  }, []);
  return b.useImperativeHandle(n, () => ({
    pulsate: T,
    start: O,
    stop: x
  }), [T, O, x]), /* @__PURE__ */ P(mx, w({
    className: ye(Ct.root, i.root, s),
    ref: v
  }, l, {
    children: /* @__PURE__ */ P(sx, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Uu.propTypes = {
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
const vx = Uu;
function yx(e) {
  return Be("MuiButtonBase", e);
}
const gx = ze("MuiButtonBase", ["root", "disabled", "focusVisible"]), bx = gx, Ex = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], xx = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: a
  } = e, s = He({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, yx, a);
  return n && r && (s.root += ` ${r}`), s;
}, Ox = he("button", {
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
  [`&.${bx.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Vu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: a,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: p = !1,
    LinkComponent: h = "a",
    onBlur: E,
    onClick: v,
    onContextMenu: m,
    onDragLeave: O,
    onFocus: T,
    onFocusVisible: x,
    onKeyDown: g,
    onKeyUp: y,
    onMouseDown: C,
    onMouseLeave: R,
    onMouseUp: $,
    onTouchEnd: F,
    onTouchMove: k,
    onTouchStart: _,
    tabIndex: z = 0,
    TouchRippleProps: U,
    touchRippleRef: L,
    type: D
  } = r, B = ve(r, Ex), q = b.useRef(null), se = b.useRef(null), ee = it(se, L), {
    isFocusVisibleRef: A,
    onFocus: H,
    onBlur: ne,
    ref: Z
  } = xf(), [K, X] = b.useState(!1);
  u && K && X(!1), b.useImperativeHandle(a, () => ({
    focusVisible: () => {
      X(!0), q.current.focus();
    }
  }), []);
  const [J, G] = b.useState(!1);
  b.useEffect(() => {
    G(!0);
  }, []);
  const re = J && !d && !u;
  b.useEffect(() => {
    K && p && !d && J && se.current.pulsate();
  }, [d, p, K, J]);
  function ae(ce, nt, ue = f) {
    return Bt((ge) => (nt && nt(ge), !ue && se.current && se.current[ce](ge), !0));
  }
  const de = ae("start", C), ie = ae("stop", m), j = ae("stop", O), pe = ae("stop", $), M = ae("stop", (ce) => {
    K && ce.preventDefault(), R && R(ce);
  }), Q = ae("start", _), xe = ae("stop", F), le = ae("stop", k), Ue = ae("stop", (ce) => {
    ne(ce), A.current === !1 && X(!1), E && E(ce);
  }, !1), Ve = Bt((ce) => {
    q.current || (q.current = ce.currentTarget), H(ce), A.current === !0 && (X(!0), x && x(ce)), T && T(ce);
  }), Ie = () => {
    const ce = q.current;
    return c && c !== "button" && !(ce.tagName === "A" && ce.href);
  }, Se = b.useRef(!1), We = Bt((ce) => {
    p && !Se.current && K && se.current && ce.key === " " && (Se.current = !0, se.current.stop(ce, () => {
      se.current.start(ce);
    })), ce.target === ce.currentTarget && Ie() && ce.key === " " && ce.preventDefault(), g && g(ce), ce.target === ce.currentTarget && Ie() && ce.key === "Enter" && !u && (ce.preventDefault(), v && v(ce));
  }), Re = Bt((ce) => {
    p && ce.key === " " && se.current && K && !ce.defaultPrevented && (Se.current = !1, se.current.stop(ce, () => {
      se.current.pulsate(ce);
    })), y && y(ce), v && ce.target === ce.currentTarget && Ie() && ce.key === " " && !ce.defaultPrevented && v(ce);
  });
  let Qe = c;
  Qe === "button" && (B.href || B.to) && (Qe = h);
  const Xe = {};
  Qe === "button" ? (Xe.type = D === void 0 ? "button" : D, Xe.disabled = u) : (!B.href && !B.to && (Xe.role = "button"), u && (Xe["aria-disabled"] = u));
  const et = it(n, Z, q);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    re && !se.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [re]);
  const Pe = w({}, r, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: z,
    focusVisible: K
  }), me = xx(Pe);
  return /* @__PURE__ */ Te(Ox, w({
    as: Qe,
    className: ye(me.root, l),
    ownerState: Pe,
    onBlur: Ue,
    onClick: v,
    onContextMenu: ie,
    onFocus: Ve,
    onKeyDown: We,
    onKeyUp: Re,
    onMouseDown: de,
    onMouseLeave: M,
    onMouseUp: pe,
    onDragLeave: j,
    onTouchEnd: xe,
    onTouchMove: le,
    onTouchStart: Q,
    ref: et,
    tabIndex: u ? -1 : z,
    type: D
  }, Xe, B, {
    children: [s, re ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ P(vx, w({
        ref: ee,
        center: i
      }, U))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Vu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: kt,
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
  component: si,
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
const ti = Vu;
function Sx(e) {
  return Be("MuiIconButton", e);
}
const wx = ze("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Tx = wx, Cx = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Rx = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: a,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${fe(r)}`, a && `edge${fe(a)}`, `size${fe(i)}`]
  };
  return He(s, Sx, t);
}, Px = he(ti, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${fe(n.color)}`], n.edge && t[`edge${fe(n.edge)}`], t[`size${fe(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return w({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && w({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": w({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(r.main, e.palette.action.hoverOpacity)
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
    [`&.${Tx.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), zu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: a = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, f = ve(r, Cx), p = w({}, r, {
    edge: a,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), h = Rx(p);
  return /* @__PURE__ */ P(Px, w({
    className: ye(h.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n,
    ownerState: p
  }, f, {
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (zu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: Kt(o.node, (e) => b.Children.toArray(e.children).some((n) => /* @__PURE__ */ b.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const qu = zu;
function $x(e) {
  return Be("MuiSvgIcon", e);
}
ze("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ix = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Nx = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, a = {
    root: ["root", t !== "inherit" && `color${fe(t)}`, `fontSize${fe(n)}`]
  };
  return He(a, $x, r);
}, Mx = he("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${fe(n.color)}`], t[`fontSize${fe(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, a, i, s, l, c, u, d, f, p, h, E;
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
      duration: (a = e.transitions) == null || (a = a.duration) == null ? void 0 : a.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? f : {
      action: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.active,
      disabled: (E = (e.vars || e).palette) == null || (E = E.action) == null ? void 0 : E.disabled,
      inherit: void 0
    }[t.color]
  };
}), zi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: a,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24"
  } = r, h = ve(r, Ix), E = /* @__PURE__ */ b.isValidElement(a) && a.type === "svg", v = w({}, r, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: E
  }), m = {};
  d || (m.viewBox = p);
  const O = Nx(v);
  return /* @__PURE__ */ Te(Mx, w({
    as: l,
    className: ye(O.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, m, h, E && a.props, {
    ownerState: v,
    children: [E ? a.props.children : a, f ? /* @__PURE__ */ P("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (zi.propTypes = {
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
zi.muiName = "SvgIcon";
const Wl = zi;
function qi(e, t) {
  function n(r, a) {
    return /* @__PURE__ */ P(Wl, w({
      "data-testid": `${t}Icon`,
      ref: a
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Wl.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(n));
}
const kx = qi(/* @__PURE__ */ P("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function _x(e) {
  return Be("MuiChip", e);
}
const Ax = ze("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Ne = Ax, Dx = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], Fx = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: a,
    iconColor: i,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, n && "disabled", `size${fe(r)}`, `color${fe(a)}`, l && "clickable", l && `clickableColor${fe(a)}`, s && "deletable", s && `deletableColor${fe(a)}`, `${c}${fe(a)}`],
    label: ["label", `label${fe(r)}`],
    avatar: ["avatar", `avatar${fe(r)}`, `avatarColor${fe(a)}`],
    icon: ["icon", `icon${fe(r)}`, `iconColor${fe(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${fe(r)}`, `deleteIconColor${fe(a)}`, `deleteIcon${fe(c)}Color${fe(a)}`]
  };
  return He(u, _x, t);
}, Lx = he("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: a,
      clickable: i,
      onDelete: s,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${Ne.avatar}`]: t.avatar
    }, {
      [`& .${Ne.avatar}`]: t[`avatar${fe(l)}`]
    }, {
      [`& .${Ne.avatar}`]: t[`avatarColor${fe(r)}`]
    }, {
      [`& .${Ne.icon}`]: t.icon
    }, {
      [`& .${Ne.icon}`]: t[`icon${fe(l)}`]
    }, {
      [`& .${Ne.icon}`]: t[`iconColor${fe(a)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIcon${fe(l)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIconColor${fe(r)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIcon${fe(c)}Color${fe(r)}`]
    }, t.root, t[`size${fe(l)}`], t[`color${fe(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${fe(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${fe(r)}`], t[c], t[`${c}${fe(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return w({
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
    [`&.${Ne.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ne.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ne.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Ne.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Ne.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Ne.icon}`]: w({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && w({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Ne.deleteIcon}`]: w({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : ct(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : ct(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : ct(e.palette[t.color].contrastText, 0.7),
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
    [`&.${Ne.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ct(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Ne.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => w({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ct(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Ne.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ct(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${Ne.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => w({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${Ne.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Ne.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${Ne.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Ne.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Ne.icon}`]: {
    marginLeft: 4
  },
  [`& .${Ne.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Ne.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Ne.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : ct(e.palette[t.color].main, 0.7)}`,
  [`&.${Ne.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Ne.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : ct(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Ne.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : ct(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), jx = he("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${fe(r)}`]];
  }
})(({
  ownerState: e
}) => w({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}));
function Bl(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Hu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiChip"
  }), {
    avatar: a,
    className: i,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: p,
    onClick: h,
    onDelete: E,
    onKeyDown: v,
    onKeyUp: m,
    size: O = "medium",
    variant: T = "filled",
    tabIndex: x,
    skipFocusWhenDisabled: g = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, y = ve(r, Dx), C = b.useRef(null), R = it(C, n), $ = (ee) => {
    ee.stopPropagation(), E && E(ee);
  }, F = (ee) => {
    ee.currentTarget === ee.target && Bl(ee) && ee.preventDefault(), v && v(ee);
  }, k = (ee) => {
    ee.currentTarget === ee.target && (E && Bl(ee) ? E(ee) : ee.key === "Escape" && C.current && C.current.blur()), m && m(ee);
  }, _ = s !== !1 && h ? !0 : s, z = _ || E ? ti : c || "div", U = w({}, r, {
    component: z,
    disabled: d,
    size: O,
    color: l,
    iconColor: /* @__PURE__ */ b.isValidElement(f) && f.props.color || l,
    onDelete: !!E,
    clickable: _,
    variant: T
  }), L = Fx(U), D = z === ti ? w({
    component: c || "div",
    focusVisibleClassName: L.focusVisible
  }, E && {
    disableRipple: !0
  }) : {};
  let B = null;
  E && (B = u && /* @__PURE__ */ b.isValidElement(u) ? /* @__PURE__ */ b.cloneElement(u, {
    className: ye(u.props.className, L.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ P(kx, {
    className: ye(L.deleteIcon),
    onClick: $
  }));
  let q = null;
  a && /* @__PURE__ */ b.isValidElement(a) && (q = /* @__PURE__ */ b.cloneElement(a, {
    className: ye(L.avatar, a.props.className)
  }));
  let se = null;
  return f && /* @__PURE__ */ b.isValidElement(f) && (se = /* @__PURE__ */ b.cloneElement(f, {
    className: ye(L.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && q && se && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ Te(Lx, w({
    as: z,
    className: ye(L.root, i),
    disabled: _ && d ? !0 : void 0,
    onClick: h,
    onKeyDown: F,
    onKeyUp: k,
    ref: R,
    tabIndex: g && d ? -1 : x,
    ownerState: U
  }, D, y, {
    children: [q || se, /* @__PURE__ */ P(jx, {
      className: ye(L.label),
      ownerState: U,
      children: p
    }), B]
  }));
});
process.env.NODE_ENV !== "production" && (Hu.propTypes = {
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
  children: mf,
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
const Wx = Hu;
function ir({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, a) => (r[a] = e[a], n && typeof e[a] > "u" && (r[a] = n[a]), r), {});
}
const Yu = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (Yu.displayName = "FormControlContext");
const Hi = Yu;
function sr() {
  return b.useContext(Hi);
}
function Ku(e) {
  return /* @__PURE__ */ P(Nc, w({}, e, {
    defaultTheme: Bo,
    themeId: No
  }));
}
process.env.NODE_ENV !== "production" && (Ku.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Ul(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Po(e, t = !1) {
  return e && (Ul(e.value) && e.value !== "" || t && Ul(e.defaultValue) && e.defaultValue !== "");
}
function Bx(e) {
  return e.startAdornment;
}
function Ux(e) {
  return Be("MuiInputBase", e);
}
const Vx = ze("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), bt = Vx, zx = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Ko = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${fe(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Go = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, qx = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: a,
    endAdornment: i,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: p,
    startAdornment: h,
    type: E
  } = e, v = {
    root: ["root", `color${fe(n)}`, r && "disabled", a && "error", c && "fullWidth", s && "focused", l && "formControl", p === "small" && "sizeSmall", d && "multiline", h && "adornedStart", i && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", E === "search" && "inputTypeSearch", d && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", h && "inputAdornedStart", i && "inputAdornedEnd", f && "readOnly"]
  };
  return He(v, Ux, t);
}, Qo = he("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ko
})(({
  theme: e,
  ownerState: t
}) => w({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${bt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && w({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Xo = he("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Go
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = w({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), a = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return w({
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
    [`label[data-shrink=false] + .${bt.formControl} &`]: {
      "&::-webkit-input-placeholder": a,
      "&::-moz-placeholder": a,
      // Firefox 19+
      "&:-ms-input-placeholder": a,
      // IE11
      "&::-ms-input-placeholder": a,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${bt.disabled}`]: {
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
}), Hx = /* @__PURE__ */ P(Ku, {
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
}), Gu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r;
  const a = Ye({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: p,
    disableInjectingGlobalStyles: h,
    endAdornment: E,
    fullWidth: v = !1,
    id: m,
    inputComponent: O = "input",
    inputProps: T = {},
    inputRef: x,
    maxRows: g,
    minRows: y,
    multiline: C = !1,
    name: R,
    onBlur: $,
    onChange: F,
    onClick: k,
    onFocus: _,
    onKeyDown: z,
    onKeyUp: U,
    placeholder: L,
    readOnly: D,
    renderSuffix: B,
    rows: q,
    slotProps: se = {},
    slots: ee = {},
    startAdornment: A,
    type: H = "text",
    value: ne
  } = a, Z = ve(a, zx), K = T.value != null ? T.value : ne, {
    current: X
  } = b.useRef(K != null), J = b.useRef(), G = b.useCallback((me) => {
    process.env.NODE_ENV !== "production" && me && me.nodeName !== "INPUT" && !me.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), re = it(J, x, T.ref, G), [ae, de] = b.useState(!1), ie = sr();
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (ie)
      return ie.registerEffect();
  }, [ie]);
  const j = ir({
    props: a,
    muiFormControl: ie,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  j.focused = ie ? ie.focused : ae, b.useEffect(() => {
    !ie && p && ae && (de(!1), $ && $());
  }, [ie, p, ae, $]);
  const pe = ie && ie.onFilled, M = ie && ie.onEmpty, Q = b.useCallback((me) => {
    Po(me) ? pe && pe() : M && M();
  }, [pe, M]);
  cn(() => {
    X && Q({
      value: K
    });
  }, [K, Q, X]);
  const xe = (me) => {
    if (j.disabled) {
      me.stopPropagation();
      return;
    }
    _ && _(me), T.onFocus && T.onFocus(me), ie && ie.onFocus ? ie.onFocus(me) : de(!0);
  }, le = (me) => {
    $ && $(me), T.onBlur && T.onBlur(me), ie && ie.onBlur ? ie.onBlur(me) : de(!1);
  }, Ue = (me, ...ce) => {
    if (!X) {
      const nt = me.target || J.current;
      if (nt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : ln(1));
      Q({
        value: nt.value
      });
    }
    T.onChange && T.onChange(me, ...ce), F && F(me, ...ce);
  };
  b.useEffect(() => {
    Q(J.current);
  }, []);
  const Ve = (me) => {
    J.current && me.currentTarget === me.target && J.current.focus(), k && !j.disabled && k(me);
  };
  let Ie = O, Se = T;
  C && Ie === "input" && (q ? (process.env.NODE_ENV !== "production" && (y || g) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Se = w({
    type: void 0,
    minRows: q,
    maxRows: q
  }, Se)) : Se = w({
    type: void 0,
    maxRows: g,
    minRows: y
  }, Se), Ie = _u);
  const We = (me) => {
    Q(me.animationName === "mui-auto-fill-cancel" ? J.current : {
      value: "x"
    });
  };
  b.useEffect(() => {
    ie && ie.setAdornedStart(!!A);
  }, [ie, A]);
  const Re = w({}, a, {
    color: j.color || "primary",
    disabled: j.disabled,
    endAdornment: E,
    error: j.error,
    focused: j.focused,
    formControl: ie,
    fullWidth: v,
    hiddenLabel: j.hiddenLabel,
    multiline: C,
    size: j.size,
    startAdornment: A,
    type: H
  }), Qe = qx(Re), Xe = ee.root || u.Root || Qo, et = se.root || d.root || {}, Pe = ee.input || u.Input || Xo;
  return Se = w({}, Se, (r = se.input) != null ? r : d.input), /* @__PURE__ */ Te(b.Fragment, {
    children: [!h && Hx, /* @__PURE__ */ Te(Xe, w({}, et, !Ar(Xe) && {
      ownerState: w({}, Re, et.ownerState)
    }, {
      ref: n,
      onClick: Ve
    }, Z, {
      className: ye(Qe.root, et.className, c, D && "MuiInputBase-readOnly"),
      children: [A, /* @__PURE__ */ P(Hi.Provider, {
        value: null,
        children: /* @__PURE__ */ P(Pe, w({
          ownerState: Re,
          "aria-invalid": j.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: f,
          disabled: j.disabled,
          id: m,
          onAnimationStart: We,
          name: R,
          placeholder: L,
          readOnly: D,
          required: j.required,
          rows: q,
          value: K,
          onKeyDown: z,
          onKeyUp: U,
          type: H
        }, Se, !Ar(Pe) && {
          as: Ie,
          ownerState: w({}, Re, Se.ownerState)
        }, {
          ref: re,
          className: ye(Qe.input, Se.className, D && "MuiInputBase-readOnly"),
          onBlur: le,
          onChange: Ue,
          onFocus: xe
        }))
      }), E, B ? B(w({}, j, {
        startAdornment: A
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Gu.propTypes = {
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
  inputComponent: si,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: kt,
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
const Yi = Gu;
function Yx(e) {
  return Be("MuiInput", e);
}
const Kx = w({}, bt, ze("MuiInput", ["root", "underline", "input"])), rn = Kx;
function Gx(e) {
  return Be("MuiOutlinedInput", e);
}
const Qx = w({}, bt, ze("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Dt = Qx;
function Xx(e) {
  return Be("MuiFilledInput", e);
}
const Jx = w({}, bt, ze("MuiFilledInput", ["root", "underline", "input"])), Et = Jx, Zx = qi(/* @__PURE__ */ P("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Qu = qi(/* @__PURE__ */ P("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function eO(e) {
  return Be("MuiAutocomplete", e);
}
const tO = ze("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), Oe = tO;
var Vl, zl;
const nO = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], rO = ["ref"], oO = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: r,
    focused: a,
    fullWidth: i,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: d
  } = e, f = {
    root: ["root", r && "expanded", a && "focused", i && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${fe(d)}`],
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
  return He(f, eO, t);
}, aO = he("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: r,
      hasClearIcon: a,
      hasPopupIcon: i,
      inputFocused: s,
      size: l
    } = n;
    return [{
      [`& .${Oe.tag}`]: t.tag
    }, {
      [`& .${Oe.tag}`]: t[`tagSize${fe(l)}`]
    }, {
      [`& .${Oe.inputRoot}`]: t.inputRoot
    }, {
      [`& .${Oe.input}`]: t.input
    }, {
      [`& .${Oe.input}`]: s && t.inputFocused
    }, t.root, r && t.fullWidth, i && t.hasPopupIcon, a && t.hasClearIcon];
  }
})(({
  ownerState: e
}) => w({
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
  [`& .${Oe.tag}`]: w({
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
  [`& .${rn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${rn.root}.${bt.sizeSmall}`]: {
    [`& .${rn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${Dt.root}`]: {
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
  [`& .${Dt.root}.${bt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Oe.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Et.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Oe.hasPopupIcon}&, .${Oe.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${Oe.hasPopupIcon}.${Oe.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${Et.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Oe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Et.root}.${bt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Et.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${bt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Et.root}.${bt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${Oe.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Et.root}.${bt.hiddenLabel}.${bt.sizeSmall}`]: {
    [`& .${Oe.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${Oe.input}`]: w({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), iO = he("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), sO = he(qu, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), lO = he(qu, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => w({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen)
})(({
  ownerState: e
}) => w({
  padding: 2,
  marginRight: -2
}, e.popupOpen && {
  transform: "rotate(180deg)"
})), cO = he(Fu, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Oe.option}`]: t.option
    }, t.popper, n.disablePortal && t.popperDisablePortal];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  zIndex: (e.vars || e).zIndex.modal
}, t.disablePortal && {
  position: "absolute"
})), uO = he(Bi, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => w({}, e.typography.body1, {
  overflow: "auto"
})), dO = he("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), fO = he("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), pO = he("div", {
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ct(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Oe.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ct(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Oe.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ct(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), mO = he(GE, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), hO = he("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${Oe.option}`]: {
    paddingLeft: 24
  }
}), Xu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a, i, s;
  const l = Ye({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: c = !1,
    autoHighlight: u = !1,
    autoSelect: d = !1,
    blurOnSelect: f = !1,
    ChipProps: p,
    className: h,
    clearIcon: E = Vl || (Vl = /* @__PURE__ */ P(Zx, {
      fontSize: "small"
    })),
    clearOnBlur: v = !l.freeSolo,
    clearOnEscape: m = !1,
    clearText: O = "Clear",
    closeText: T = "Close",
    componentsProps: x = {},
    defaultValue: g = l.multiple ? [] : null,
    disableClearable: y = !1,
    disableCloseOnSelect: C = !1,
    disabled: R = !1,
    disabledItemsFocusable: $ = !1,
    disableListWrap: F = !1,
    disablePortal: k = !1,
    filterSelectedOptions: _ = !1,
    forcePopupIcon: z = "auto",
    freeSolo: U = !1,
    fullWidth: L = !1,
    getLimitTagsText: D = (W) => `+${W}`,
    getOptionLabel: B,
    groupBy: q,
    handleHomeEndKeys: se = !l.freeSolo,
    includeInputInList: ee = !1,
    limitTags: A = -1,
    ListboxComponent: H = "ul",
    ListboxProps: ne,
    loading: Z = !1,
    loadingText: K = "Loading…",
    multiple: X = !1,
    noOptionsText: J = "No options",
    openOnFocus: G = !1,
    openText: re = "Open",
    PaperComponent: ae = Bi,
    PopperComponent: de = Fu,
    popupIcon: ie = zl || (zl = /* @__PURE__ */ P(Qu, {})),
    readOnly: j = !1,
    renderGroup: pe,
    renderInput: M,
    renderOption: Q,
    renderTags: xe,
    selectOnFocus: le = !l.freeSolo,
    size: Ue = "medium",
    slotProps: Ve = {}
  } = l, Ie = ve(l, nO), {
    getRootProps: Se,
    getInputProps: We,
    getInputLabelProps: Re,
    getPopupIndicatorProps: Qe,
    getClearProps: Xe,
    getTagProps: et,
    getListboxProps: Pe,
    getOptionProps: me,
    value: ce,
    dirty: nt,
    expanded: ue,
    id: ge,
    popupOpen: $e,
    focused: Je,
    focusedTag: Jt,
    anchorEl: _t,
    setAnchorEl: lr,
    inputValue: Nt,
    groupedOptions: mt
  } = UE(w({}, l, {
    componentName: "Autocomplete"
  })), gt = !y && !R && nt && !j, ft = (!U || z === !0) && z !== !1, {
    onMouseDown: Mt
  } = We(), {
    ref: vn
  } = ne ?? {}, Zt = Pe(), {
    ref: In
  } = Zt, Nn = ve(Zt, rO), cr = it(In, vn), en = B || ((W) => {
    var Y;
    return (Y = W.label) != null ? Y : W;
  }), rt = w({}, l, {
    disablePortal: k,
    expanded: ue,
    focused: Je,
    fullWidth: L,
    getOptionLabel: en,
    hasClearIcon: gt,
    hasPopupIcon: ft,
    inputFocused: Jt === -1,
    popupOpen: $e,
    size: Ue
  }), Ze = oO(rt);
  let ht;
  if (X && ce.length > 0) {
    const W = (Y) => w({
      className: Ze.tag,
      disabled: R
    }, et(Y));
    xe ? ht = xe(ce, W, rt) : ht = ce.map((Y, oe) => /* @__PURE__ */ P(Wx, w({
      label: en(Y),
      size: Ue
    }, W({
      index: oe
    }), p)));
  }
  if (A > -1 && Array.isArray(ht)) {
    const W = ht.length - A;
    !Je && W > 0 && (ht = ht.splice(0, A), ht.push(/* @__PURE__ */ P("span", {
      className: Ze.tag,
      children: D(W)
    }, ht.length)));
  }
  const kn = pe || ((W) => /* @__PURE__ */ Te("li", {
    children: [/* @__PURE__ */ P(mO, {
      className: Ze.groupLabel,
      ownerState: rt,
      component: "div",
      children: W.group
    }), /* @__PURE__ */ P(hO, {
      className: Ze.groupUl,
      ownerState: rt,
      children: W.children
    })]
  }, W.key)), ur = Q || ((W, Y) => /* @__PURE__ */ P("li", w({}, W, {
    children: en(Y)
  }))), S = (W, Y) => {
    const oe = me({
      option: W,
      index: Y
    });
    return ur(w({}, oe, {
      className: Ze.option
    }), W, {
      selected: oe["aria-selected"],
      index: Y,
      inputValue: Nt
    }, rt);
  }, V = (r = Ve.clearIndicator) != null ? r : x.clearIndicator, te = (a = Ve.paper) != null ? a : x.paper, I = (i = Ve.popper) != null ? i : x.popper, N = (s = Ve.popupIndicator) != null ? s : x.popupIndicator;
  return /* @__PURE__ */ Te(b.Fragment, {
    children: [/* @__PURE__ */ P(aO, w({
      ref: n,
      className: ye(Ze.root, h),
      ownerState: rt
    }, Se(Ie), {
      children: M({
        id: ge,
        disabled: R,
        fullWidth: !0,
        size: Ue === "small" ? "small" : void 0,
        InputLabelProps: Re(),
        InputProps: w({
          ref: lr,
          className: Ze.inputRoot,
          startAdornment: ht,
          onClick: (W) => {
            W.target === W.currentTarget && Mt(W);
          }
        }, (gt || ft) && {
          endAdornment: /* @__PURE__ */ Te(iO, {
            className: Ze.endAdornment,
            ownerState: rt,
            children: [gt ? /* @__PURE__ */ P(sO, w({}, Xe(), {
              "aria-label": O,
              title: O,
              ownerState: rt
            }, V, {
              className: ye(Ze.clearIndicator, V == null ? void 0 : V.className),
              children: E
            })) : null, ft ? /* @__PURE__ */ P(lO, w({}, Qe(), {
              disabled: R,
              "aria-label": $e ? T : re,
              title: $e ? T : re,
              ownerState: rt
            }, N, {
              className: ye(Ze.popupIndicator, N == null ? void 0 : N.className),
              children: ie
            })) : null]
          })
        }),
        inputProps: w({
          className: Ze.input,
          disabled: R,
          readOnly: j
        }, We())
      })
    })), _t ? /* @__PURE__ */ P(cO, w({
      as: de,
      disablePortal: k,
      style: {
        width: _t ? _t.clientWidth : null
      },
      ownerState: rt,
      role: "presentation",
      anchorEl: _t,
      open: $e
    }, I, {
      className: ye(Ze.popper, I == null ? void 0 : I.className),
      children: /* @__PURE__ */ Te(uO, w({
        ownerState: rt,
        as: ae
      }, te, {
        className: ye(Ze.paper, te == null ? void 0 : te.className),
        children: [Z && mt.length === 0 ? /* @__PURE__ */ P(dO, {
          className: Ze.loading,
          ownerState: rt,
          children: K
        }) : null, mt.length === 0 && !U && !Z ? /* @__PURE__ */ P(fO, {
          className: Ze.noOptions,
          ownerState: rt,
          role: "presentation",
          onMouseDown: (W) => {
            W.preventDefault();
          },
          children: J
        }) : null, mt.length > 0 ? /* @__PURE__ */ P(pO, w({
          as: H,
          className: Ze.listbox,
          ownerState: rt
        }, Nn, ne, {
          ref: cr,
          children: mt.map((W, Y) => q ? kn({
            key: W.key,
            group: W.group,
            children: W.options.map((oe, be) => S(oe, W.index + be))
          }) : S(W, Y))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (Xu.propTypes = {
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
  defaultValue: Kt(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
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
  limitTags: li,
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
  value: Kt(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const vO = Xu, yO = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], gO = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, a = He({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Yx, t);
  return w({}, t, a);
}, bO = he(Qo, {
  shouldForwardProp: (e) => fn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ko(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), w({
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
    [`&.${rn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${rn.error}`]: {
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
    [`&:hover:not(.${rn.disabled}, .${rn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${rn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), EO = he(Xo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Go
})({}), Ki = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a, i, s;
  const l = Ye({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: f = !1,
    inputComponent: p = "input",
    multiline: h = !1,
    slotProps: E,
    slots: v = {},
    type: m = "text"
  } = l, O = ve(l, yO), T = gO(l), g = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, y = E ?? d ? Rt(E ?? d, g) : g, C = (r = (a = v.root) != null ? a : u.Root) != null ? r : bO, R = (i = (s = v.input) != null ? s : u.Input) != null ? i : EO;
  return /* @__PURE__ */ P(Yi, w({
    slots: {
      root: C,
      input: R
    },
    slotProps: y,
    fullWidth: f,
    inputComponent: p,
    multiline: h,
    ref: n,
    type: m
  }, O, {
    classes: T
  }));
});
process.env.NODE_ENV !== "production" && (Ki.propTypes = {
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
  inputRef: kt,
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
Ki.muiName = "Input";
const Ju = Ki, xO = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], OO = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, a = He({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Xx, t);
  return w({}, t, a);
}, SO = he(Qo, {
  shouldForwardProp: (e) => fn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ko(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", a = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return w({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
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
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${Et.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${Et.disabled}`]: {
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
    [`&.${Et.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Et.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : a}`,
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
    [`&:hover:not(.${Et.disabled}, .${Et.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Et.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && w({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), wO = he(Xo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Go
})(({
  theme: e,
  ownerState: t
}) => w({
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
})), Gi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a, i, s;
  const l = Ye({
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
    slots: E = {},
    type: v = "text"
  } = l, m = ve(l, xO), O = w({}, l, {
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    type: v
  }), T = OO(l), x = {
    root: {
      ownerState: O
    },
    input: {
      ownerState: O
    }
  }, g = h ?? u ? Rt(h ?? u, x) : x, y = (r = (a = E.root) != null ? a : c.Root) != null ? r : SO, C = (i = (s = E.input) != null ? s : c.Input) != null ? i : wO;
  return /* @__PURE__ */ P(Yi, w({
    slots: {
      root: y,
      input: C
    },
    componentsProps: g,
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    ref: n,
    type: v
  }, m, {
    classes: T
  }));
});
process.env.NODE_ENV !== "production" && (Gi.propTypes = {
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
  inputRef: kt,
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
Gi.muiName = "Input";
const Zu = Gi;
var ql;
const TO = ["children", "classes", "className", "label", "notched"], CO = he("fieldset")({
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
}), RO = he("legend")(({
  ownerState: e,
  theme: t
}) => w({
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
}, e.withLabel && w({
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
function ed(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, a = ve(e, TO), i = n != null && n !== "", s = w({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ P(CO, w({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, a, {
    children: /* @__PURE__ */ P(RO, {
      ownerState: s,
      children: i ? /* @__PURE__ */ P("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ql || (ql = /* @__PURE__ */ P("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (ed.propTypes = {
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
const PO = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], $O = (e) => {
  const {
    classes: t
  } = e, r = He({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Gx, t);
  return w({}, t, r);
}, IO = he(Qo, {
  shouldForwardProp: (e) => fn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ko
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return w({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Dt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Dt.focused} .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Dt.error} .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Dt.disabled} .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && w({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), NO = he(ed, {
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
}), MO = he(Xo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Go
})(({
  theme: e,
  ownerState: t
}) => w({
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
})), Qi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a, i, s, l;
  const c = Ye({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: f = "input",
    label: p,
    multiline: h = !1,
    notched: E,
    slots: v = {},
    type: m = "text"
  } = c, O = ve(c, PO), T = $O(c), x = sr(), g = ir({
    props: c,
    muiFormControl: x,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), y = w({}, c, {
    color: g.color || "primary",
    disabled: g.disabled,
    error: g.error,
    focused: g.focused,
    formControl: x,
    fullWidth: d,
    hiddenLabel: g.hiddenLabel,
    multiline: h,
    size: g.size,
    type: m
  }), C = (r = (a = v.root) != null ? a : u.Root) != null ? r : IO, R = (i = (s = v.input) != null ? s : u.Input) != null ? i : MO;
  return /* @__PURE__ */ P(Yi, w({
    slots: {
      root: C,
      input: R
    },
    renderSuffix: ($) => /* @__PURE__ */ P(NO, {
      ownerState: y,
      className: T.notchedOutline,
      label: p != null && p !== "" && g.required ? l || (l = /* @__PURE__ */ Te(b.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof E < "u" ? E : !!($.startAdornment || $.filled || $.focused)
    }),
    fullWidth: d,
    inputComponent: f,
    multiline: h,
    ref: n,
    type: m
  }, O, {
    classes: w({}, T, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Qi.propTypes = {
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
  inputRef: kt,
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
Qi.muiName = "Input";
const td = Qi;
function kO(e) {
  return Be("MuiFormLabel", e);
}
const _O = ze("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Ir = _O, AO = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], DO = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: a,
    error: i,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${fe(n)}`, a && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return He(c, kO, t);
}, FO = he("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => w({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => w({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Ir.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Ir.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ir.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), LO = he("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Ir.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), nd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: a,
    className: i,
    component: s = "label"
  } = r, l = ve(r, AO), c = sr(), u = ir({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = w({}, r, {
    color: u.color || "primary",
    component: s,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = DO(d);
  return /* @__PURE__ */ Te(FO, w({
    as: s,
    ownerState: d,
    className: ye(f.root, i),
    ref: n
  }, l, {
    children: [a, u.required && /* @__PURE__ */ Te(LO, {
      ownerState: d,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (nd.propTypes = {
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
const jO = nd;
function WO(e) {
  return Be("MuiInputLabel", e);
}
ze("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const BO = ["disableAnimation", "margin", "shrink", "variant", "className"], UO = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: a,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, u = He({
    root: ["root", n && "formControl", !i && "animated", a && "shrink", r === "small" && "sizeSmall", s],
    asterisk: [l && "asterisk"]
  }, WO, t);
  return w({}, t, u);
}, VO = he(jO, {
  shouldForwardProp: (e) => fn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ir.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
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
}, t.variant === "filled" && w({
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
}, t.shrink && w({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && w({
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
}))), rd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: a = !1,
    shrink: i,
    className: s
  } = r, l = ve(r, BO), c = sr();
  let u = i;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = ir({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required"]
  }), f = w({}, r, {
    disableAnimation: a,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required
  }), p = UO(f);
  return /* @__PURE__ */ P(VO, w({
    "data-shrink": u,
    ownerState: f,
    ref: n,
    className: ye(p.root, s)
  }, l, {
    classes: p
  }));
});
process.env.NODE_ENV !== "production" && (rd.propTypes = {
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
const zO = rd;
function qO(e) {
  return Be("MuiFormControl", e);
}
ze("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const HO = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], YO = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, a = {
    root: ["root", n !== "none" && `margin${fe(n)}`, r && "fullWidth"]
  };
  return He(a, qO, t);
}, KO = he("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => w({}, t.root, t[`margin${fe(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => w({
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
})), od = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiFormControl"
  }), {
    children: a,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: p = !1,
    margin: h = "none",
    required: E = !1,
    size: v = "medium",
    variant: m = "outlined"
  } = r, O = ve(r, HO), T = w({}, r, {
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: p,
    margin: h,
    required: E,
    size: v,
    variant: m
  }), x = YO(T), [g, y] = b.useState(() => {
    let U = !1;
    return a && b.Children.forEach(a, (L) => {
      if (!oa(L, ["Input", "Select"]))
        return;
      const D = oa(L, ["Select"]) ? L.props.input : L;
      D && Bx(D.props) && (U = !0);
    }), U;
  }), [C, R] = b.useState(() => {
    let U = !1;
    return a && b.Children.forEach(a, (L) => {
      oa(L, ["Input", "Select"]) && (Po(L.props, !0) || Po(L.props.inputProps, !0)) && (U = !0);
    }), U;
  }), [$, F] = b.useState(!1);
  c && $ && F(!1);
  const k = d !== void 0 && !c ? d : $;
  let _;
  if (process.env.NODE_ENV !== "production") {
    const U = b.useRef(!1);
    _ = () => (U.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), U.current = !0, () => {
      U.current = !1;
    });
  }
  const z = b.useMemo(() => ({
    adornedStart: g,
    setAdornedStart: y,
    color: s,
    disabled: c,
    error: u,
    filled: C,
    focused: k,
    fullWidth: f,
    hiddenLabel: p,
    size: v,
    onBlur: () => {
      F(!1);
    },
    onEmpty: () => {
      R(!1);
    },
    onFilled: () => {
      R(!0);
    },
    onFocus: () => {
      F(!0);
    },
    registerEffect: _,
    required: E,
    variant: m
  }), [g, s, c, u, C, k, f, p, _, E, v, m]);
  return /* @__PURE__ */ P(Hi.Provider, {
    value: z,
    children: /* @__PURE__ */ P(KO, w({
      as: l,
      ownerState: T,
      className: ye(x.root, i),
      ref: n
    }, O, {
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (od.propTypes = {
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
const GO = od;
function QO(e) {
  return Be("MuiFormHelperText", e);
}
const XO = ze("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Hl = XO;
var Yl;
const JO = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], ZO = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: a,
    error: i,
    filled: s,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", a && "disabled", i && "error", r && `size${fe(r)}`, n && "contained", l && "focused", s && "filled", c && "required"]
  };
  return He(u, QO, t);
}, eS = he("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${fe(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Hl.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Hl.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), ad = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: a,
    className: i,
    component: s = "p"
  } = r, l = ve(r, JO), c = sr(), u = ir({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = w({}, r, {
    component: s,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = ZO(d);
  return /* @__PURE__ */ P(eS, w({
    as: s,
    ownerState: d,
    className: ye(f.root, i),
    ref: n
  }, l, {
    children: a === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Yl || (Yl = /* @__PURE__ */ P("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : a
  }));
});
process.env.NODE_ENV !== "production" && (ad.propTypes = {
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
const tS = ad;
var ni = { exports: {} }, De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kl;
function nS() {
  if (Kl)
    return De;
  Kl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case e:
          switch (m = m.type, m) {
            case n:
            case a:
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
                case i:
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
  return De.ContextConsumer = s, De.ContextProvider = i, De.Element = e, De.ForwardRef = c, De.Fragment = n, De.Lazy = p, De.Memo = f, De.Portal = t, De.Profiler = a, De.StrictMode = r, De.Suspense = u, De.SuspenseList = d, De.isAsyncMode = function() {
    return !1;
  }, De.isConcurrentMode = function() {
    return !1;
  }, De.isContextConsumer = function(m) {
    return v(m) === s;
  }, De.isContextProvider = function(m) {
    return v(m) === i;
  }, De.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, De.isForwardRef = function(m) {
    return v(m) === c;
  }, De.isFragment = function(m) {
    return v(m) === n;
  }, De.isLazy = function(m) {
    return v(m) === p;
  }, De.isMemo = function(m) {
    return v(m) === f;
  }, De.isPortal = function(m) {
    return v(m) === t;
  }, De.isProfiler = function(m) {
    return v(m) === a;
  }, De.isStrictMode = function(m) {
    return v(m) === r;
  }, De.isSuspense = function(m) {
    return v(m) === u;
  }, De.isSuspenseList = function(m) {
    return v(m) === d;
  }, De.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === a || m === r || m === u || m === d || m === h || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === i || m.$$typeof === s || m.$$typeof === c || m.$$typeof === E || m.getModuleId !== void 0);
  }, De.typeOf = v, De;
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
var Gl;
function rS() {
  return Gl || (Gl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), E = !1, v = !1, m = !1, O = !1, T = !1, x;
    x = Symbol.for("react.module.reference");
    function g(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === n || M === a || T || M === r || M === u || M === d || O || M === h || E || v || m || typeof M == "object" && M !== null && (M.$$typeof === p || M.$$typeof === f || M.$$typeof === i || M.$$typeof === s || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === x || M.getModuleId !== void 0));
    }
    function y(M) {
      if (typeof M == "object" && M !== null) {
        var Q = M.$$typeof;
        switch (Q) {
          case e:
            var xe = M.type;
            switch (xe) {
              case n:
              case a:
              case r:
              case u:
              case d:
                return xe;
              default:
                var le = xe && xe.$$typeof;
                switch (le) {
                  case l:
                  case s:
                  case c:
                  case p:
                  case f:
                  case i:
                    return le;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var C = s, R = i, $ = e, F = c, k = n, _ = p, z = f, U = t, L = a, D = r, B = u, q = d, se = !1, ee = !1;
    function A(M) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(M) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(M) {
      return y(M) === s;
    }
    function Z(M) {
      return y(M) === i;
    }
    function K(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function X(M) {
      return y(M) === c;
    }
    function J(M) {
      return y(M) === n;
    }
    function G(M) {
      return y(M) === p;
    }
    function re(M) {
      return y(M) === f;
    }
    function ae(M) {
      return y(M) === t;
    }
    function de(M) {
      return y(M) === a;
    }
    function ie(M) {
      return y(M) === r;
    }
    function j(M) {
      return y(M) === u;
    }
    function pe(M) {
      return y(M) === d;
    }
    Fe.ContextConsumer = C, Fe.ContextProvider = R, Fe.Element = $, Fe.ForwardRef = F, Fe.Fragment = k, Fe.Lazy = _, Fe.Memo = z, Fe.Portal = U, Fe.Profiler = L, Fe.StrictMode = D, Fe.Suspense = B, Fe.SuspenseList = q, Fe.isAsyncMode = A, Fe.isConcurrentMode = H, Fe.isContextConsumer = ne, Fe.isContextProvider = Z, Fe.isElement = K, Fe.isForwardRef = X, Fe.isFragment = J, Fe.isLazy = G, Fe.isMemo = re, Fe.isPortal = ae, Fe.isProfiler = de, Fe.isStrictMode = ie, Fe.isSuspense = j, Fe.isSuspenseList = pe, Fe.isValidElementType = g, Fe.typeOf = y;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? ni.exports = nS() : ni.exports = rS();
var Xi = ni.exports;
const id = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (id.displayName = "ListContext");
const oS = id;
function aS(e) {
  return Be("MuiList", e);
}
ze("MuiList", ["root", "padding", "dense", "subheader"]);
const iS = ["children", "className", "component", "dense", "disablePadding", "subheader"], sS = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: a
  } = e;
  return He({
    root: ["root", !n && "padding", r && "dense", a && "subheader"]
  }, aS, t);
}, lS = he("ul", {
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
}) => w({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), sd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiList"
  }), {
    children: a,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ve(r, iS), f = b.useMemo(() => ({
    dense: l
  }), [l]), p = w({}, r, {
    component: s,
    dense: l,
    disablePadding: c
  }), h = sS(p);
  return /* @__PURE__ */ P(oS.Provider, {
    value: f,
    children: /* @__PURE__ */ Te(lS, w({
      as: s,
      className: ye(h.root, i),
      ref: n,
      ownerState: p
    }, d, {
      children: [u, a]
    }))
  });
});
process.env.NODE_ENV !== "production" && (sd.propTypes = {
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
const cS = sd, uS = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Sa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Ql(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function ld(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function yr(e, t, n, r, a, i) {
  let s = !1, l = a(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !ld(l, i) || c)
      l = a(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const cd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: a = !1,
    autoFocusItem: i = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu"
  } = t, p = ve(t, uS), h = b.useRef(null), E = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  cn(() => {
    a && h.current.focus();
  }, [a]), b.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (x, g) => {
      const y = !h.current.style.width;
      if (x.clientHeight < h.current.clientHeight && y) {
        const C = `${Oc(pt(x))}px`;
        h.current.style[g.direction === "rtl" ? "paddingLeft" : "paddingRight"] = C, h.current.style.width = `calc(100% + ${C})`;
      }
      return h.current;
    }
  }), []);
  const v = (x) => {
    const g = h.current, y = x.key, C = pt(g).activeElement;
    if (y === "ArrowDown")
      x.preventDefault(), yr(g, C, u, c, Sa);
    else if (y === "ArrowUp")
      x.preventDefault(), yr(g, C, u, c, Ql);
    else if (y === "Home")
      x.preventDefault(), yr(g, null, u, c, Sa);
    else if (y === "End")
      x.preventDefault(), yr(g, null, u, c, Ql);
    else if (y.length === 1) {
      const R = E.current, $ = y.toLowerCase(), F = performance.now();
      R.keys.length > 0 && (F - R.lastTime > 500 ? (R.keys = [], R.repeating = !0, R.previousKeyMatched = !0) : R.repeating && $ !== R.keys[0] && (R.repeating = !1)), R.lastTime = F, R.keys.push($);
      const k = C && !R.repeating && ld(C, R);
      R.previousKeyMatched && (k || yr(g, C, !1, c, Sa, R)) ? x.preventDefault() : R.previousKeyMatched = !1;
    }
    d && d(x);
  }, m = it(h, n);
  let O = -1;
  b.Children.forEach(s, (x, g) => {
    if (!/* @__PURE__ */ b.isValidElement(x)) {
      O === g && (O += 1, O >= s.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Xi.isFragment(x) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), x.props.disabled || (f === "selectedMenu" && x.props.selected || O === -1) && (O = g), O === g && (x.props.disabled || x.props.muiSkipListHighlight || x.type.muiSkipListHighlight) && (O += 1, O >= s.length && (O = -1));
  });
  const T = b.Children.map(s, (x, g) => {
    if (g === O) {
      const y = {};
      return i && (y.autoFocus = !0), x.props.tabIndex === void 0 && f === "selectedMenu" && (y.tabIndex = 0), /* @__PURE__ */ b.cloneElement(x, y);
    }
    return x;
  });
  return /* @__PURE__ */ P(cS, w({
    role: "menu",
    ref: m,
    className: l,
    onKeyDown: v,
    tabIndex: a ? 0 : -1
  }, p, {
    children: T
  }));
});
process.env.NODE_ENV !== "production" && (cd.propTypes = {
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
const dS = cd, ud = (e) => e.scrollTop;
function $o(e, t) {
  var n, r;
  const {
    timeout: a,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof a == "number" ? a : a[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
const fS = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ri(e) {
  return `scale(${e}, ${e ** 2})`;
}
const pS = {
  entering: {
    opacity: 1,
    transform: ri(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, wa = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ji = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: a = !0,
    children: i,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: p,
    onExiting: h,
    style: E,
    timeout: v = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Wu
  } = t, O = ve(t, fS), T = b.useRef(), x = b.useRef(), g = nr(), y = b.useRef(null), C = it(y, i.ref, n), R = (D) => (B) => {
    if (D) {
      const q = y.current;
      B === void 0 ? D(q) : D(q, B);
    }
  }, $ = R(d), F = R((D, B) => {
    ud(D);
    const {
      duration: q,
      delay: se,
      easing: ee
    } = $o({
      style: E,
      timeout: v,
      easing: s
    }, {
      mode: "enter"
    });
    let A;
    v === "auto" ? (A = g.transitions.getAutoHeightDuration(D.clientHeight), x.current = A) : A = q, D.style.transition = [g.transitions.create("opacity", {
      duration: A,
      delay: se
    }), g.transitions.create("transform", {
      duration: wa ? A : A * 0.666,
      delay: se,
      easing: ee
    })].join(","), c && c(D, B);
  }), k = R(u), _ = R(h), z = R((D) => {
    const {
      duration: B,
      delay: q,
      easing: se
    } = $o({
      style: E,
      timeout: v,
      easing: s
    }, {
      mode: "exit"
    });
    let ee;
    v === "auto" ? (ee = g.transitions.getAutoHeightDuration(D.clientHeight), x.current = ee) : ee = B, D.style.transition = [g.transitions.create("opacity", {
      duration: ee,
      delay: q
    }), g.transitions.create("transform", {
      duration: wa ? ee : ee * 0.666,
      delay: wa ? q : q || ee * 0.333,
      easing: se
    })].join(","), D.style.opacity = 0, D.style.transform = ri(0.75), f && f(D);
  }), U = R(p), L = (D) => {
    v === "auto" && (T.current = setTimeout(D, x.current || 0)), r && r(y.current, D);
  };
  return b.useEffect(() => () => {
    clearTimeout(T.current);
  }, []), /* @__PURE__ */ P(m, w({
    appear: a,
    in: l,
    nodeRef: y,
    onEnter: F,
    onEntered: k,
    onEntering: $,
    onExit: z,
    onExited: U,
    onExiting: _,
    addEndListener: L,
    timeout: v === "auto" ? null : v
  }, O, {
    children: (D, B) => /* @__PURE__ */ b.cloneElement(i, w({
      style: w({
        opacity: 0,
        transform: ri(0.75),
        visibility: D === "exited" && !l ? "hidden" : void 0
      }, pS[D], E, i.props.style),
      ref: C
    }, B))
  }));
});
process.env.NODE_ENV !== "production" && (Ji.propTypes = {
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
  children: Ur.isRequired,
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
Ji.muiSupportAuto = !0;
const mS = Ji, hS = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], vS = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, dd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = nr(), a = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: p,
    onExit: h,
    onExited: E,
    onExiting: v,
    style: m,
    timeout: O = a,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Wu
  } = t, x = ve(t, hS), g = b.useRef(null), y = it(g, l.ref, n), C = (L) => (D) => {
    if (L) {
      const B = g.current;
      D === void 0 ? L(B) : L(B, D);
    }
  }, R = C(p), $ = C((L, D) => {
    ud(L);
    const B = $o({
      style: m,
      timeout: O,
      easing: c
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = r.transitions.create("opacity", B), L.style.transition = r.transitions.create("opacity", B), d && d(L, D);
  }), F = C(f), k = C(v), _ = C((L) => {
    const D = $o({
      style: m,
      timeout: O,
      easing: c
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = r.transitions.create("opacity", D), L.style.transition = r.transitions.create("opacity", D), h && h(L);
  }), z = C(E);
  return /* @__PURE__ */ P(T, w({
    appear: s,
    in: u,
    nodeRef: g,
    onEnter: $,
    onEntered: F,
    onEntering: R,
    onExit: _,
    onExited: z,
    onExiting: k,
    addEndListener: (L) => {
      i && i(g.current, L);
    },
    timeout: O
  }, x, {
    children: (L, D) => /* @__PURE__ */ b.cloneElement(l, w({
      style: w({
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0
      }, vS[L], m, l.props.style),
      ref: y
    }, D))
  }));
});
process.env.NODE_ENV !== "production" && (dd.propTypes = {
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
  children: Ur.isRequired,
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
const yS = dd;
function gS(e) {
  return Be("MuiBackdrop", e);
}
ze("MuiBackdrop", ["root", "invisible"]);
const bS = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], ES = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return He({
    root: ["root", n && "invisible"]
  }, gS, t);
}, xS = he("div", {
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
}) => w({
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
})), fd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a, i;
  const s = Ye({
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
    slotProps: E = {},
    slots: v = {},
    TransitionComponent: m = yS,
    transitionDuration: O
  } = s, T = ve(s, bS), x = w({}, s, {
    component: u,
    invisible: p
  }), g = ES(x), y = (r = E.root) != null ? r : f.root;
  return /* @__PURE__ */ P(m, w({
    in: h,
    timeout: O
  }, T, {
    children: /* @__PURE__ */ P(xS, w({
      "aria-hidden": !0
    }, y, {
      as: (a = (i = v.root) != null ? i : d.Root) != null ? a : u,
      className: ye(g.root, c, y == null ? void 0 : y.className),
      ownerState: w({}, x, y == null ? void 0 : y.ownerState),
      classes: g,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (fd.propTypes = {
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
const OS = fd, SS = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"], wS = he("div", {
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
}) => w({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), TS = he(OS, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), pd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a, i, s, l, c;
  const u = Ye({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = TS,
    BackdropProps: f,
    classes: p,
    className: h,
    closeAfterTransition: E = !1,
    children: v,
    container: m,
    component: O,
    components: T = {},
    componentsProps: x = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: C = !1,
    disablePortal: R = !1,
    disableRestoreFocus: $ = !1,
    disableScrollLock: F = !1,
    hideBackdrop: k = !1,
    keepMounted: _ = !1,
    onBackdropClick: z,
    onClose: U,
    open: L,
    slotProps: D,
    slots: B,
    // eslint-disable-next-line react/prop-types
    theme: q
  } = u, se = ve(u, SS), [ee, A] = b.useState(!0), H = {
    container: m,
    closeAfterTransition: E,
    disableAutoFocus: g,
    disableEnforceFocus: y,
    disableEscapeKeyDown: C,
    disablePortal: R,
    disableRestoreFocus: $,
    disableScrollLock: F,
    hideBackdrop: k,
    keepMounted: _,
    onBackdropClick: z,
    onClose: U,
    open: L
  }, ne = w({}, u, H, {
    exited: ee
  }), Z = (r = (a = B == null ? void 0 : B.root) != null ? a : T.Root) != null ? r : wS, K = (i = (s = B == null ? void 0 : B.backdrop) != null ? s : T.Backdrop) != null ? i : d, X = (l = D == null ? void 0 : D.root) != null ? l : x.root, J = (c = D == null ? void 0 : D.backdrop) != null ? c : x.backdrop;
  return /* @__PURE__ */ P(ku, w({
    slots: {
      root: Z,
      backdrop: K
    },
    slotProps: {
      root: () => w({}, Qa(X, ne), !Ar(Z) && {
        as: O,
        theme: q
      }, {
        className: ye(h, X == null ? void 0 : X.className, p == null ? void 0 : p.root, !ne.open && ne.exited && (p == null ? void 0 : p.hidden))
      }),
      backdrop: () => w({}, f, Qa(J, ne), {
        className: ye(J == null ? void 0 : J.className, f == null ? void 0 : f.className, p == null ? void 0 : p.backdrop)
      })
    },
    onTransitionEnter: () => A(!1),
    onTransitionExited: () => A(!0),
    ref: n
  }, se, H, {
    children: v
  }));
});
process.env.NODE_ENV !== "production" && (pd.propTypes = {
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
  children: Ur.isRequired,
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
  container: o.oneOfType([Vt, o.func]),
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
const CS = pd;
function RS(e) {
  return Be("MuiPopover", e);
}
ze("MuiPopover", ["root", "paper"]);
const PS = ["onEntering"], $S = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"], IS = ["slotProps"];
function Xl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Jl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Zl(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function po(e) {
  return typeof e == "function" ? e() : e;
}
const NS = (e) => {
  const {
    classes: t
  } = e;
  return He({
    root: ["root"],
    paper: ["paper"]
  }, RS, t);
}, MS = he(CS, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), md = he(Bi, {
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
}), hd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a, i;
  const s = Ye({
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
    container: E,
    elevation: v = 8,
    marginThreshold: m = 16,
    open: O,
    PaperProps: T = {},
    slots: x,
    slotProps: g,
    transformOrigin: y = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: C = mS,
    transitionDuration: R = "auto",
    TransitionProps: {
      onEntering: $
    } = {}
  } = s, F = ve(s.TransitionProps, PS), k = ve(s, $S), _ = (r = g == null ? void 0 : g.paper) != null ? r : T, z = b.useRef(), U = it(z, _.ref), L = w({}, s, {
    anchorOrigin: u,
    anchorReference: f,
    elevation: v,
    marginThreshold: m,
    externalPaperSlotProps: _,
    transformOrigin: y,
    TransitionComponent: C,
    transitionDuration: R,
    TransitionProps: F
  }), D = NS(L), B = b.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const j = po(c), pe = j && j.nodeType === 1 ? j : pt(z.current).body, M = pe.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Q = pe.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Q.top === 0 && Q.left === 0 && Q.right === 0 && Q.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: M.top + Xl(M, u.vertical),
      left: M.left + Jl(M, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, f]), q = b.useCallback((j) => ({
    vertical: Xl(j, y.vertical),
    horizontal: Jl(j, y.horizontal)
  }), [y.horizontal, y.vertical]), se = b.useCallback((j) => {
    const pe = {
      width: j.offsetWidth,
      height: j.offsetHeight
    }, M = q(pe);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Zl(M)
      };
    const Q = B();
    let xe = Q.top - M.vertical, le = Q.left - M.horizontal;
    const Ue = xe + pe.height, Ve = le + pe.width, Ie = Tn(po(c)), Se = Ie.innerHeight - m, We = Ie.innerWidth - m;
    if (xe < m) {
      const Re = xe - m;
      xe -= Re, M.vertical += Re;
    } else if (Ue > Se) {
      const Re = Ue - Se;
      xe -= Re, M.vertical += Re;
    }
    if (process.env.NODE_ENV !== "production" && pe.height > Se && pe.height && Se && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${pe.height - Se}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), le < m) {
      const Re = le - m;
      le -= Re, M.horizontal += Re;
    } else if (Ve > We) {
      const Re = Ve - We;
      le -= Re, M.horizontal += Re;
    }
    return {
      top: `${Math.round(xe)}px`,
      left: `${Math.round(le)}px`,
      transformOrigin: Zl(M)
    };
  }, [c, f, B, q, m]), [ee, A] = b.useState(O), H = b.useCallback(() => {
    const j = z.current;
    if (!j)
      return;
    const pe = se(j);
    pe.top !== null && (j.style.top = pe.top), pe.left !== null && (j.style.left = pe.left), j.style.transformOrigin = pe.transformOrigin, A(!0);
  }, [se]), ne = (j, pe) => {
    $ && $(j, pe), H();
  }, Z = () => {
    A(!1);
  };
  b.useEffect(() => {
    O && H();
  }), b.useImperativeHandle(l, () => O ? {
    updatePosition: () => {
      H();
    }
  } : null, [O, H]), b.useEffect(() => {
    if (!O)
      return;
    const j = Ec(() => {
      H();
    }), pe = Tn(c);
    return pe.addEventListener("resize", j), () => {
      j.clear(), pe.removeEventListener("resize", j);
    };
  }, [c, O, H]);
  let K = R;
  R === "auto" && !C.muiSupportAuto && (K = void 0);
  const X = E || (c ? pt(po(c)).body : void 0), J = (a = x == null ? void 0 : x.root) != null ? a : MS, G = (i = x == null ? void 0 : x.paper) != null ? i : md, re = Pn({
    elementType: G,
    externalSlotProps: w({}, _, {
      style: ee ? _.style : w({}, _.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: v,
      ref: U
    },
    ownerState: L,
    className: ye(D.paper, _ == null ? void 0 : _.className)
  }), ae = Pn({
    elementType: J,
    externalSlotProps: (g == null ? void 0 : g.root) || {},
    externalForwardedProps: k,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: X,
      open: O
    },
    ownerState: L,
    className: ye(D.root, h)
  }), {
    slotProps: de
  } = ae, ie = ve(ae, IS);
  return /* @__PURE__ */ P(J, w({}, ie, !Ar(J) && {
    slotProps: de
  }, {
    children: /* @__PURE__ */ P(C, w({
      appear: !0,
      in: O,
      onEntering: ne,
      onExited: Z,
      timeout: K
    }, F, {
      children: /* @__PURE__ */ P(G, w({}, re, {
        children: p
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (hd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: kt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Kt(o.oneOfType([Vt, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = po(e.anchorEl);
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
  container: o.oneOfType([Vt, o.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: li,
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
    component: si
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
const kS = hd;
function _S(e) {
  return Be("MuiMenu", e);
}
ze("MuiMenu", ["root", "paper", "list"]);
const AS = ["onEntering"], DS = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], FS = {
  vertical: "top",
  horizontal: "right"
}, LS = {
  vertical: "top",
  horizontal: "left"
}, jS = (e) => {
  const {
    classes: t
  } = e;
  return He({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, _S, t);
}, WS = he(kS, {
  shouldForwardProp: (e) => fn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), BS = he(md, {
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
}), US = he(dS, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), vd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, a;
  const i = Ye({
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
    PopoverClasses: E,
    transitionDuration: v = "auto",
    TransitionProps: {
      onEntering: m
    } = {},
    variant: O = "selectedMenu",
    slots: T = {},
    slotProps: x = {}
  } = i, g = ve(i.TransitionProps, AS), y = ve(i, DS), C = nr(), R = C.direction === "rtl", $ = w({}, i, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: m,
    PaperProps: h,
    transitionDuration: v,
    TransitionProps: g,
    variant: O
  }), F = jS($), k = s && !u && p, _ = b.useRef(null), z = (ee, A) => {
    _.current && _.current.adjustStyleForScrollbar(ee, C), m && m(ee, A);
  }, U = (ee) => {
    ee.key === "Tab" && (ee.preventDefault(), f && f(ee, "tabKeyDown"));
  };
  let L = -1;
  b.Children.map(l, (ee, A) => {
    /* @__PURE__ */ b.isValidElement(ee) && (process.env.NODE_ENV !== "production" && Xi.isFragment(ee) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), ee.props.disabled || (O === "selectedMenu" && ee.props.selected || L === -1) && (L = A));
  });
  const D = (r = T.paper) != null ? r : BS, B = (a = x.paper) != null ? a : h, q = Pn({
    elementType: T.root,
    externalSlotProps: x.root,
    ownerState: $,
    className: [F.root, c]
  }), se = Pn({
    elementType: D,
    externalSlotProps: B,
    ownerState: $,
    className: F.paper
  });
  return /* @__PURE__ */ P(WS, w({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: R ? "right" : "left"
    },
    transformOrigin: R ? FS : LS,
    slots: {
      paper: D,
      root: T.root
    },
    slotProps: {
      root: q,
      paper: se
    },
    open: p,
    ref: n,
    transitionDuration: v,
    TransitionProps: w({
      onEntering: z
    }, g),
    ownerState: $
  }, y, {
    classes: E,
    children: /* @__PURE__ */ P(US, w({
      onKeyDown: U,
      actions: _,
      autoFocus: s && (L === -1 || u),
      autoFocusItem: k,
      variant: O
    }, d, {
      className: ye(F.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Vt, o.func]),
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
const VS = vd;
function zS(e) {
  return Be("MuiNativeSelect", e);
}
const qS = ze("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Zi = qS, HS = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], YS = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: a,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", a && "multiple", s && "error"],
    icon: ["icon", `icon${fe(n)}`, i && "iconOpen", r && "disabled"]
  };
  return He(l, zS, t);
}, yd = ({
  ownerState: e,
  theme: t
}) => w({
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
  "&:focus": w({}, t.vars ? {
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
  [`&.${Zi.disabled}`]: {
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
}), KS = he("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: fn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Zi.multiple}`]: t.multiple
    }];
  }
})(yd), gd = ({
  ownerState: e,
  theme: t
}) => w({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Zi.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), GS = he("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${fe(n.variant)}`], n.open && t.iconOpen];
  }
})(gd), bd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: a,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ve(t, HS), d = w({}, t, {
    disabled: a,
    variant: c,
    error: i
  }), f = YS(d);
  return /* @__PURE__ */ Te(b.Fragment, {
    children: [/* @__PURE__ */ P(KS, w({
      ownerState: d,
      className: ye(f.select, r),
      disabled: a,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ P(GS, {
      as: s,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (bd.propTypes = {
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
  inputRef: kt,
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
const QS = bd;
function XS(e) {
  return Be("MuiSelect", e);
}
const JS = ze("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), gr = JS;
var ec;
const ZS = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], ew = he("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${gr.select}`]: t.select
      },
      {
        [`&.${gr.select}`]: t[n.variant]
      },
      {
        [`&.${gr.error}`]: t.error
      },
      {
        [`&.${gr.multiple}`]: t.multiple
      }
    ];
  }
})(yd, {
  // Win specificity over the input base
  [`&.${gr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), tw = he("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${fe(n.variant)}`], n.open && t.iconOpen];
  }
})(gd), nw = he("input", {
  shouldForwardProp: (e) => $m(e) && e !== "classes",
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
function tc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function rw(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const ow = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: a,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", a && "multiple", s && "error"],
    icon: ["icon", `icon${fe(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return He(l, XS, t);
}, Ed = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    "aria-describedby": r,
    "aria-label": a,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: p,
    error: h = !1,
    IconComponent: E,
    inputRef: v,
    labelId: m,
    MenuProps: O = {},
    multiple: T,
    name: x,
    onBlur: g,
    onChange: y,
    onClose: C,
    onFocus: R,
    onOpen: $,
    open: F,
    readOnly: k,
    renderValue: _,
    SelectDisplayProps: z = {},
    tabIndex: U,
    value: L,
    variant: D = "standard"
  } = t, B = ve(t, ZS), [q, se] = xr({
    controlled: L,
    default: d,
    name: "Select"
  }), [ee, A] = xr({
    controlled: F,
    default: u,
    name: "Select"
  }), H = b.useRef(null), ne = b.useRef(null), [Z, K] = b.useState(null), {
    current: X
  } = b.useRef(F != null), [J, G] = b.useState(), re = it(n, v), ae = b.useCallback((ue) => {
    ne.current = ue, ue && K(ue);
  }, []), de = Z == null ? void 0 : Z.parentNode;
  b.useImperativeHandle(re, () => ({
    focus: () => {
      ne.current.focus();
    },
    node: H.current,
    value: q
  }), [q]), b.useEffect(() => {
    u && ee && Z && !X && (G(s ? null : de.clientWidth), ne.current.focus());
  }, [Z, s]), b.useEffect(() => {
    i && ne.current.focus();
  }, [i]), b.useEffect(() => {
    if (!m)
      return;
    const ue = pt(ne.current).getElementById(m);
    if (ue) {
      const ge = () => {
        getSelection().isCollapsed && ne.current.focus();
      };
      return ue.addEventListener("click", ge), () => {
        ue.removeEventListener("click", ge);
      };
    }
  }, [m]);
  const ie = (ue, ge) => {
    ue ? $ && $(ge) : C && C(ge), X || (G(s ? null : de.clientWidth), A(ue));
  }, j = (ue) => {
    ue.button === 0 && (ue.preventDefault(), ne.current.focus(), ie(!0, ue));
  }, pe = (ue) => {
    ie(!1, ue);
  }, M = b.Children.toArray(l), Q = (ue) => {
    const ge = M.find(($e) => $e.props.value === ue.target.value);
    ge !== void 0 && (se(ge.props.value), y && y(ue, ge));
  }, xe = (ue) => (ge) => {
    let $e;
    if (ge.currentTarget.hasAttribute("tabindex")) {
      if (T) {
        $e = Array.isArray(q) ? q.slice() : [];
        const Je = q.indexOf(ue.props.value);
        Je === -1 ? $e.push(ue.props.value) : $e.splice(Je, 1);
      } else
        $e = ue.props.value;
      if (ue.props.onClick && ue.props.onClick(ge), q !== $e && (se($e), y)) {
        const Je = ge.nativeEvent || ge, Jt = new Je.constructor(Je.type, Je);
        Object.defineProperty(Jt, "target", {
          writable: !0,
          value: {
            value: $e,
            name: x
          }
        }), y(Jt, ue);
      }
      T || ie(!1, ge);
    }
  }, le = (ue) => {
    k || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ue.key) !== -1 && (ue.preventDefault(), ie(!0, ue));
  }, Ue = Z !== null && ee, Ve = (ue) => {
    !Ue && g && (Object.defineProperty(ue, "target", {
      writable: !0,
      value: {
        value: q,
        name: x
      }
    }), g(ue));
  };
  delete B["aria-invalid"];
  let Ie, Se;
  const We = [];
  let Re = !1, Qe = !1;
  (Po({
    value: q
  }) || p) && (_ ? Ie = _(q) : Re = !0);
  const Xe = M.map((ue) => {
    if (!/* @__PURE__ */ b.isValidElement(ue))
      return null;
    process.env.NODE_ENV !== "production" && Xi.isFragment(ue) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let ge;
    if (T) {
      if (!Array.isArray(q))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : ln(2));
      ge = q.some(($e) => tc($e, ue.props.value)), ge && Re && We.push(ue.props.children);
    } else
      ge = tc(q, ue.props.value), ge && Re && (Se = ue.props.children);
    return ge && (Qe = !0), /* @__PURE__ */ b.cloneElement(ue, {
      "aria-selected": ge ? "true" : "false",
      onClick: xe(ue),
      onKeyUp: ($e) => {
        $e.key === " " && $e.preventDefault(), ue.props.onKeyUp && ue.props.onKeyUp($e);
      },
      role: "option",
      selected: ge,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ue.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (!Qe && !T && q !== "") {
      const ue = M.map((ge) => ge.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${q}\` for the select ${x ? `(name="${x}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ue.filter((ge) => ge != null).map((ge) => `\`${ge}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Qe, M, T, x, q]), Re && (T ? We.length === 0 ? Ie = null : Ie = We.reduce((ue, ge, $e) => (ue.push(ge), $e < We.length - 1 && ue.push(", "), ue), []) : Ie = Se);
  let et = J;
  !s && X && Z && (et = de.clientWidth);
  let Pe;
  typeof U < "u" ? Pe = U : Pe = f ? null : 0;
  const me = z.id || (x ? `mui-component-select-${x}` : void 0), ce = w({}, t, {
    variant: D,
    value: q,
    open: Ue,
    error: h
  }), nt = ow(ce);
  return /* @__PURE__ */ Te(b.Fragment, {
    children: [/* @__PURE__ */ P(ew, w({
      ref: ae,
      tabIndex: Pe,
      role: "button",
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Ue ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": a,
      "aria-labelledby": [m, me].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: le,
      onMouseDown: f || k ? null : j,
      onBlur: Ve,
      onFocus: R
    }, z, {
      ownerState: ce,
      className: ye(z.className, nt.select, c),
      id: me,
      children: rw(Ie) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ec || (ec = /* @__PURE__ */ P("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ie
    })), /* @__PURE__ */ P(nw, w({
      "aria-invalid": h,
      value: Array.isArray(q) ? q.join(",") : q,
      name: x,
      ref: H,
      "aria-hidden": !0,
      onChange: Q,
      tabIndex: -1,
      disabled: f,
      className: nt.nativeInput,
      autoFocus: i,
      ownerState: ce
    }, B)), /* @__PURE__ */ P(tw, {
      as: E,
      className: nt.icon,
      ownerState: ce
    }), /* @__PURE__ */ P(VS, w({
      id: `menu-${x || ""}`,
      anchorEl: de,
      open: Ue,
      onClose: pe,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, O, {
      MenuListProps: w({
        "aria-labelledby": m,
        role: "listbox",
        disableListWrap: !0
      }, O.MenuListProps),
      PaperProps: w({}, O.PaperProps, {
        style: w({
          minWidth: et
        }, O.PaperProps != null ? O.PaperProps.style : null)
      }),
      children: Xe
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Ed.propTypes = {
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
  inputRef: kt,
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
const aw = Ed, iw = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], sw = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, es = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => fn(e) && e !== "variant",
  slot: "Root"
}, lw = he(Ju, es)(""), cw = he(td, es)(""), uw = he(Zu, es)(""), ts = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: a = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = Qu,
    id: f,
    input: p,
    inputProps: h,
    label: E,
    labelId: v,
    MenuProps: m,
    multiple: O = !1,
    native: T = !1,
    onClose: x,
    onOpen: g,
    open: y,
    renderValue: C,
    SelectDisplayProps: R,
    variant: $ = "outlined"
  } = r, F = ve(r, iw), k = T ? QS : aw, _ = sr(), z = ir({
    props: r,
    muiFormControl: _,
    states: ["variant", "error"]
  }), U = z.variant || $, L = w({}, r, {
    variant: U,
    classes: s
  }), D = sw(L), B = p || {
    standard: /* @__PURE__ */ P(lw, {
      ownerState: L
    }),
    outlined: /* @__PURE__ */ P(cw, {
      label: E,
      ownerState: L
    }),
    filled: /* @__PURE__ */ P(uw, {
      ownerState: L
    })
  }[U], q = it(n, B.ref);
  return /* @__PURE__ */ P(b.Fragment, {
    children: /* @__PURE__ */ b.cloneElement(B, w({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: k,
      inputProps: w({
        children: i,
        error: z.error,
        IconComponent: d,
        variant: U,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: O
      }, T ? {
        id: f
      } : {
        autoWidth: a,
        defaultOpen: c,
        displayEmpty: u,
        labelId: v,
        MenuProps: m,
        onClose: x,
        onOpen: g,
        open: y,
        renderValue: C,
        SelectDisplayProps: w({
          id: f
        }, R)
      }, h, {
        classes: h ? Rt(D, h.classes) : D
      }, p ? p.props.inputProps : {})
    }, O && T && U === "outlined" ? {
      notched: !0
    } : {}, {
      ref: q,
      className: ye(B.props.className, l)
    }, !p && {
      variant: U
    }, F))
  });
});
process.env.NODE_ENV !== "production" && (ts.propTypes = {
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
ts.muiName = "Select";
const dw = ts;
function fw(e) {
  return Be("MuiTextField", e);
}
ze("MuiTextField", ["root"]);
const pw = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], mw = {
  standard: Ju,
  filled: Zu,
  outlined: td
}, hw = (e) => {
  const {
    classes: t
  } = e;
  return He({
    root: ["root"]
  }, fw, t);
}, vw = he(GO, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), xd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: a,
    autoFocus: i = !1,
    children: s,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: p,
    fullWidth: h = !1,
    helperText: E,
    id: v,
    InputLabelProps: m,
    inputProps: O,
    InputProps: T,
    inputRef: x,
    label: g,
    maxRows: y,
    minRows: C,
    multiline: R = !1,
    name: $,
    onBlur: F,
    onChange: k,
    onClick: _,
    onFocus: z,
    placeholder: U,
    required: L = !1,
    rows: D,
    select: B = !1,
    SelectProps: q,
    type: se,
    value: ee,
    variant: A = "outlined"
  } = r, H = ve(r, pw), ne = w({}, r, {
    autoFocus: i,
    color: c,
    disabled: d,
    error: f,
    fullWidth: h,
    multiline: R,
    required: L,
    select: B,
    variant: A
  }), Z = hw(ne);
  process.env.NODE_ENV !== "production" && B && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const K = {};
  A === "outlined" && (m && typeof m.shrink < "u" && (K.notched = m.shrink), K.label = g), B && ((!q || !q.native) && (K.id = void 0), K["aria-describedby"] = void 0);
  const X = xc(v), J = E && X ? `${X}-helper-text` : void 0, G = g && X ? `${X}-label` : void 0, re = mw[A], ae = /* @__PURE__ */ P(re, w({
    "aria-describedby": J,
    autoComplete: a,
    autoFocus: i,
    defaultValue: u,
    fullWidth: h,
    multiline: R,
    name: $,
    rows: D,
    maxRows: y,
    minRows: C,
    type: se,
    value: ee,
    id: X,
    inputRef: x,
    onBlur: F,
    onChange: k,
    onFocus: z,
    onClick: _,
    placeholder: U,
    inputProps: O
  }, K, T));
  return /* @__PURE__ */ Te(vw, w({
    className: ye(Z.root, l),
    disabled: d,
    error: f,
    fullWidth: h,
    ref: n,
    required: L,
    color: c,
    variant: A,
    ownerState: ne
  }, H, {
    children: [g != null && g !== "" && /* @__PURE__ */ P(zO, w({
      htmlFor: X,
      id: G
    }, m, {
      children: g
    })), B ? /* @__PURE__ */ P(dw, w({
      "aria-describedby": J,
      id: X,
      labelId: G,
      value: ee,
      input: ae
    }, q, {
      children: s
    })) : ae, E && /* @__PURE__ */ P(tS, w({
      id: J
    }, p, {
      children: E
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (xd.propTypes = {
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
  inputRef: kt,
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
const yw = xd, gw = Au(), bw = (e) => {
  const {
    control: t,
    options: n = [],
    labelText: r,
    name: a,
    multiple: i = !1,
    required: s,
    onCreateNew: l,
    renderLabel: c,
    fetchFunction: u
  } = e, [d, f] = Yt(n), [p, h] = Yt(""), { isLoading: E, refetch: v } = Hc(["options"], {
    queryFn: () => u({
      filter: {
        query: p
      }
    }),
    enabled: !1
  });
  Ta(() => {
    const g = setTimeout(() => {
      if (p) {
        v().then(({ data: y }) => {
          f(y.data);
        });
        return;
      }
      f([]);
    }, 500);
    return () => clearTimeout(g);
  }, [p, v]);
  const m = (g, y, C) => {
    y && y.inputValue ? l && l(y.inputValue) : (g.target.value = (y == null ? void 0 : y.id) ?? null, C(g));
  }, O = (g) => typeof g == "string" ? g : g.inputValue ? g.inputValue : c ? c(g) : g.name, T = (g, y) => /* @__PURE__ */ P("li", { ...g, children: c ? c(y) : y.name }), x = (g, y) => {
    const C = gw(g, y), R = String(y.inputValue).trim(), $ = C.length === 0;
    return l && R !== "" && ($ || !g.find((F) => F.name === R)) && C.push({
      inputValue: R,
      name: `Agregar "${R}"`
    }), C;
  };
  return /* @__PURE__ */ P(jr, { fullWidth: !0, children: /* @__PURE__ */ P(
    Wr,
    {
      control: t,
      name: a,
      render: ({ field: { ref: g, onChange: y, value: C, ...R } }) => /* @__PURE__ */ P(
        vO,
        {
          multiple: i,
          value: d.find(($) => $.id === Number(C)) ? d.find(($) => $.id === Number(C)).name : "",
          onChange: ($, F) => m($, F, y),
          onKeyDown: ($) => h($.target.value),
          filterOptions: x,
          options: d,
          selectOnFocus: !0,
          clearOnBlur: !0,
          handleHomeEndKeys: !0,
          getOptionLabel: O,
          renderOption: T,
          freeSolo: !0,
          renderInput: ($) => /* @__PURE__ */ P(
            yw,
            {
              ...$,
              ...R,
              inputRef: g,
              required: s,
              name: a,
              label: r,
              InputProps: {
                ...$.InputProps,
                endAdornment: /* @__PURE__ */ Te(qd, { children: [
                  E ? /* @__PURE__ */ P(nc, { color: "inherit", size: 20 }) : null,
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
bw.propTypes = {
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
function Rw() {
  const [e, t] = iu();
  return {
    tab: Number(e.get("tab")) || 1,
    onChangeTab: (a, i) => {
      t({ tab: i });
    }
  };
}
export {
  bw as AsyncAutocomplete,
  km as Avatar,
  Zb as BackendTableContent,
  _c as Box,
  Wv as Checkbox,
  Mm as ConfirmDialog,
  jv as DateTime,
  Fm as ErrorDialog,
  Br as Loader,
  vi as Modal,
  Lm as Money,
  jm as PageHeader,
  Ac as Select,
  Am as Switch,
  _m as TabPanel,
  tv as TableContent,
  yi as TableHeader,
  Dm as TextField,
  Rw as useTabs
};
