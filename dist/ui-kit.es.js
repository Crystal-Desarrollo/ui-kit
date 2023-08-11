import * as h from "react";
import Fe, { Children as rd, isValidElement as ao, cloneElement as io, useState as qt, useEffect as Oa, useId as od } from "react";
import { Avatar as ad, CircularProgress as _l, Paper as id, Typography as on, Stack as rn, Modal as sd, Box as ld, IconButton as cd, Divider as Dl, Button as Ea, FormControl as Fr, FormControlLabel as jl, Checkbox as ud, InputLabel as dd, Select as fd, MenuItem as pd, TextField as md, Switch as hd, createTheme as vd, ThemeProvider as Fl, TableContainer as Ll, Table as Wl, TableBody as Bl, TableRow as $r, TableCell as Ir, TablePagination as Ul, TableHead as gd, TableSortLabel as yd } from "@mui/material";
import { Global as bd, ThemeContext as xd, keyframes as Qa } from "@emotion/react";
import { Close as Od, Report as Vl } from "@mui/icons-material";
import { useQuery as zl } from "react-query";
import Ed from "@emotion/styled";
import * as ql from "react-dom";
import Jr from "react-dom";
function Hl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function wd(e) {
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
var wa = { exports: {} }, ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi;
function Td() {
  if (Gi)
    return ur;
  Gi = 1;
  var e = Fe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, f = {}, p = null, m = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c)
      r.call(c, d) && !i.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: p, ref: m, props: f, _owner: a.current };
  }
  return ur.Fragment = n, ur.jsx = s, ur.jsxs = s, ur;
}
var dr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi;
function Sd() {
  return Xi || (Xi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Fe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), x = Symbol.iterator, y = "@@iterator";
    function v(O) {
      if (O === null || typeof O != "object")
        return null;
      var U = x && O[x] || O[y];
      return typeof U == "function" ? U : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(O) {
      {
        for (var U = arguments.length, ee = new Array(U > 1 ? U - 1 : 0), P = 1; P < U; P++)
          ee[P - 1] = arguments[P];
        w("error", O, ee);
      }
    }
    function w(O, U, ee) {
      {
        var P = E.ReactDebugCurrentFrame, R = P.getStackAddendum();
        R !== "" && (U += "%s", ee = ee.concat([R]));
        var D = ee.map(function(Y) {
          return String(Y);
        });
        D.unshift("Warning: " + U), Function.prototype.apply.call(console[O], console, D);
      }
    }
    var b = !1, g = !1, I = !1, $ = !1, k = !1, W;
    W = Symbol.for("react.module.reference");
    function A(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === i || k || O === a || O === u || O === d || $ || O === m || b || g || I || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === f || O.$$typeof === s || O.$$typeof === l || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === W || O.getModuleId !== void 0));
    }
    function M(O, U, ee) {
      var P = O.displayName;
      if (P)
        return P;
      var R = U.displayName || U.name || "";
      return R !== "" ? ee + "(" + R + ")" : ee;
    }
    function z(O) {
      return O.displayName || "Context";
    }
    function B(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
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
      if (typeof O == "object")
        switch (O.$$typeof) {
          case l:
            var U = O;
            return z(U) + ".Consumer";
          case s:
            var ee = O;
            return z(ee._context) + ".Provider";
          case c:
            return M(O, O.render, "ForwardRef");
          case f:
            var P = O.displayName || null;
            return P !== null ? P : B(O.type) || "Memo";
          case p: {
            var R = O, D = R._payload, Y = R._init;
            try {
              return B(Y(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, _ = 0, L, q, se, te, N, H, ne;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function K() {
      {
        if (_ === 0) {
          L = console.log, q = console.info, se = console.warn, te = console.error, N = console.group, H = console.groupCollapsed, ne = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        _++;
      }
    }
    function X() {
      {
        if (_--, _ === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, O, {
              value: L
            }),
            info: j({}, O, {
              value: q
            }),
            warn: j({}, O, {
              value: se
            }),
            error: j({}, O, {
              value: te
            }),
            group: j({}, O, {
              value: N
            }),
            groupCollapsed: j({}, O, {
              value: H
            }),
            groupEnd: j({}, O, {
              value: ne
            })
          });
        }
        _ < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = E.ReactCurrentDispatcher, G;
    function re(O, U, ee) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (R) {
            var P = R.stack.trim().match(/\n( *(at )?)/);
            G = P && P[1] || "";
          }
        return `
` + G + O;
      }
    }
    var ae = !1, de;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      de = new ie();
    }
    function F(O, U) {
      if (!O || ae)
        return "";
      {
        var ee = de.get(O);
        if (ee !== void 0)
          return ee;
      }
      var P;
      ae = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = J.current, J.current = null, K();
      try {
        if (U) {
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
            } catch (Vt) {
              P = Vt;
            }
            Reflect.construct(O, [], Y);
          } else {
            try {
              Y.call();
            } catch (Vt) {
              P = Vt;
            }
            O.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Vt) {
            P = Vt;
          }
          O();
        }
      } catch (Vt) {
        if (Vt && P && typeof Vt.stack == "string") {
          for (var oe = Vt.stack.split(`
`), be = P.stack.split(`
`), xe = oe.length - 1, Te = be.length - 1; xe >= 1 && Te >= 0 && oe[xe] !== be[Te]; )
            Te--;
          for (; xe >= 1 && Te >= 0; xe--, Te--)
            if (oe[xe] !== be[Te]) {
              if (xe !== 1 || Te !== 1)
                do
                  if (xe--, Te--, Te < 0 || oe[xe] !== be[Te]) {
                    var it = `
` + oe[xe].replace(" at new ", " at ");
                    return O.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", O.displayName)), typeof O == "function" && de.set(O, it), it;
                  }
                while (xe >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        ae = !1, J.current = D, X(), Error.prepareStackTrace = R;
      }
      var kn = O ? O.displayName || O.name : "", Ki = kn ? re(kn) : "";
      return typeof O == "function" && de.set(O, Ki), Ki;
    }
    function he(O, U, ee) {
      return F(O, !1);
    }
    function V(O) {
      var U = O.prototype;
      return !!(U && U.isReactComponent);
    }
    function Q(O, U, ee) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return F(O, V(O));
      if (typeof O == "string")
        return re(O);
      switch (O) {
        case u:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case c:
            return he(O.render);
          case f:
            return Q(O.type, U, ee);
          case p: {
            var P = O, R = P._payload, D = P._init;
            try {
              return Q(D(R), U, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, ue = {}, We = E.ReactDebugCurrentFrame;
    function Be(O) {
      if (O) {
        var U = O._owner, ee = Q(O.type, O._source, U ? U.type : null);
        We.setExtraStackFrame(ee);
      } else
        We.setExtraStackFrame(null);
    }
    function $e(O, U, ee, P, R) {
      {
        var D = Function.call.bind(Re);
        for (var Y in O)
          if (D(O, Y)) {
            var oe = void 0;
            try {
              if (typeof O[Y] != "function") {
                var be = Error((P || "React class") + ": " + ee + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              oe = O[Y](U, Y, P, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              oe = xe;
            }
            oe && !(oe instanceof Error) && (Be(R), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", ee, Y, typeof oe), Be(null)), oe instanceof Error && !(oe.message in ue) && (ue[oe.message] = !0, Be(R), C("Failed %s type: %s", ee, oe.message), Be(null));
          }
      }
    }
    var Ee = Array.isArray;
    function je(O) {
      return Ee(O);
    }
    function Se(O) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, ee = U && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return ee;
      }
    }
    function Ke(O) {
      try {
        return Ge(O), !1;
      } catch {
        return !0;
      }
    }
    function Ge(O) {
      return "" + O;
    }
    function Qe(O) {
      if (Ke(O))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(O)), Ge(O);
    }
    var Ce = E.ReactCurrentOwner, pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, et, ce;
    ce = {};
    function ye(O) {
      if (Re.call(O, "ref")) {
        var U = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Pe(O) {
      if (Re.call(O, "key")) {
        var U = Object.getOwnPropertyDescriptor(O, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Xe(O, U) {
      if (typeof O.ref == "string" && Ce.current && U && Ce.current.stateNode !== U) {
        var ee = B(Ce.current.type);
        ce[ee] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Ce.current.type), O.ref), ce[ee] = !0);
      }
    }
    function Xt(O, U) {
      {
        var ee = function() {
          le || (le = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ee.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function kt(O, U) {
      {
        var ee = function() {
          et || (et = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ee.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var sr = function(O, U, ee, P, R, D, Y) {
      var oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: U,
        ref: ee,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: D
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
        value: P
      }), Object.defineProperty(oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(oe.props), Object.freeze(oe)), oe;
    };
    function $t(O, U, ee, P, R) {
      {
        var D, Y = {}, oe = null, be = null;
        ee !== void 0 && (Qe(ee), oe = "" + ee), Pe(U) && (Qe(U.key), oe = "" + U.key), ye(U) && (be = U.ref, Xe(U, R));
        for (D in U)
          Re.call(U, D) && !pe.hasOwnProperty(D) && (Y[D] = U[D]);
        if (O && O.defaultProps) {
          var xe = O.defaultProps;
          for (D in xe)
            Y[D] === void 0 && (Y[D] = xe[D]);
        }
        if (oe || be) {
          var Te = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          oe && Xt(Y, Te), be && kt(Y, Te);
        }
        return sr(O, oe, be, R, P, Ce.current, Y);
      }
    }
    var ft = E.ReactCurrentOwner, vt = E.ReactDebugCurrentFrame;
    function ut(O) {
      if (O) {
        var U = O._owner, ee = Q(O.type, O._source, U ? U.type : null);
        vt.setExtraStackFrame(ee);
      } else
        vt.setExtraStackFrame(null);
    }
    var It;
    It = !1;
    function mn(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function Jt() {
      {
        if (ft.current) {
          var O = B(ft.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Rn(O) {
      {
        if (O !== void 0) {
          var U = O.fileName.replace(/^.*[\\\/]/, ""), ee = O.lineNumber;
          return `

Check your code at ` + U + ":" + ee + ".";
        }
        return "";
      }
    }
    var $n = {};
    function lr(O) {
      {
        var U = Jt();
        if (!U) {
          var ee = typeof O == "string" ? O : O.displayName || O.name;
          ee && (U = `

Check the top-level render call using <` + ee + ">.");
        }
        return U;
      }
    }
    function In(O, U) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var ee = lr(U);
        if ($n[ee])
          return;
        $n[ee] = !0;
        var P = "";
        O && O._owner && O._owner !== ft.current && (P = " It was passed a child from " + B(O._owner.type) + "."), ut(O), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, P), ut(null);
      }
    }
    function Qt(O, U) {
      {
        if (typeof O != "object")
          return;
        if (je(O))
          for (var ee = 0; ee < O.length; ee++) {
            var P = O[ee];
            mn(P) && In(P, U);
          }
        else if (mn(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var R = v(O);
          if (typeof R == "function" && R !== O.entries)
            for (var D = R.call(O), Y; !(Y = D.next()).done; )
              mn(Y.value) && In(Y.value, U);
        }
      }
    }
    function tt(O) {
      {
        var U = O.type;
        if (U == null || typeof U == "string")
          return;
        var ee;
        if (typeof U == "function")
          ee = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === f))
          ee = U.propTypes;
        else
          return;
        if (ee) {
          var P = B(U);
          $e(ee, O.props, "prop", P, O);
        } else if (U.PropTypes !== void 0 && !It) {
          It = !0;
          var R = B(U);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Je(O) {
      {
        for (var U = Object.keys(O.props), ee = 0; ee < U.length; ee++) {
          var P = U[ee];
          if (P !== "children" && P !== "key") {
            ut(O), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), ut(null);
            break;
          }
        }
        O.ref !== null && (ut(O), C("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
      }
    }
    function pt(O, U, ee, P, R, D) {
      {
        var Y = A(O);
        if (!Y) {
          var oe = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Rn(R);
          be ? oe += be : oe += Jt();
          var xe;
          O === null ? xe = "null" : je(O) ? xe = "array" : O !== void 0 && O.$$typeof === t ? (xe = "<" + (B(O.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof O, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, oe);
        }
        var Te = $t(O, U, ee, R, D);
        if (Te == null)
          return Te;
        if (Y) {
          var it = U.children;
          if (it !== void 0)
            if (P)
              if (je(it)) {
                for (var kn = 0; kn < it.length; kn++)
                  Qt(it[kn], O);
                Object.freeze && Object.freeze(it);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qt(it, O);
        }
        return O === r ? Je(Te) : tt(Te), Te;
      }
    }
    function Gr(O, U, ee) {
      return pt(O, U, ee, !0);
    }
    function Nn(O, U, ee) {
      return pt(O, U, ee, !1);
    }
    var Xr = Nn, cr = Gr;
    dr.Fragment = r, dr.jsx = Xr, dr.jsxs = cr;
  }()), dr;
}
process.env.NODE_ENV === "production" ? wa.exports = Td() : wa.exports = Sd();
var S = wa.exports, Ta = { exports: {} }, Qr = { exports: {} }, Ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ji;
function Cd() {
  if (Ji)
    return Ne;
  Ji = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function w(g) {
    if (typeof g == "object" && g !== null) {
      var I = g.$$typeof;
      switch (I) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case r:
            case i:
            case a:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case x:
                case m:
                case s:
                  return g;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function b(g) {
    return w(g) === u;
  }
  return Ne.AsyncMode = c, Ne.ConcurrentMode = u, Ne.ContextConsumer = l, Ne.ContextProvider = s, Ne.Element = t, Ne.ForwardRef = d, Ne.Fragment = r, Ne.Lazy = x, Ne.Memo = m, Ne.Portal = n, Ne.Profiler = i, Ne.StrictMode = a, Ne.Suspense = f, Ne.isAsyncMode = function(g) {
    return b(g) || w(g) === c;
  }, Ne.isConcurrentMode = b, Ne.isContextConsumer = function(g) {
    return w(g) === l;
  }, Ne.isContextProvider = function(g) {
    return w(g) === s;
  }, Ne.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Ne.isForwardRef = function(g) {
    return w(g) === d;
  }, Ne.isFragment = function(g) {
    return w(g) === r;
  }, Ne.isLazy = function(g) {
    return w(g) === x;
  }, Ne.isMemo = function(g) {
    return w(g) === m;
  }, Ne.isPortal = function(g) {
    return w(g) === n;
  }, Ne.isProfiler = function(g) {
    return w(g) === i;
  }, Ne.isStrictMode = function(g) {
    return w(g) === a;
  }, Ne.isSuspense = function(g) {
    return w(g) === f;
  }, Ne.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === u || g === i || g === a || g === f || g === p || typeof g == "object" && g !== null && (g.$$typeof === x || g.$$typeof === m || g.$$typeof === s || g.$$typeof === l || g.$$typeof === d || g.$$typeof === v || g.$$typeof === E || g.$$typeof === C || g.$$typeof === y);
  }, Ne.typeOf = w, Ne;
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
var Qi;
function Pd() {
  return Qi || (Qi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function w(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === r || F === u || F === i || F === a || F === f || F === p || typeof F == "object" && F !== null && (F.$$typeof === x || F.$$typeof === m || F.$$typeof === s || F.$$typeof === l || F.$$typeof === d || F.$$typeof === v || F.$$typeof === E || F.$$typeof === C || F.$$typeof === y);
    }
    function b(F) {
      if (typeof F == "object" && F !== null) {
        var he = F.$$typeof;
        switch (he) {
          case t:
            var V = F.type;
            switch (V) {
              case c:
              case u:
              case r:
              case i:
              case a:
              case f:
                return V;
              default:
                var Q = V && V.$$typeof;
                switch (Q) {
                  case l:
                  case d:
                  case x:
                  case m:
                  case s:
                    return Q;
                  default:
                    return he;
                }
            }
          case n:
            return he;
        }
      }
    }
    var g = c, I = u, $ = l, k = s, W = t, A = d, M = r, z = x, B = m, j = n, _ = i, L = a, q = f, se = !1;
    function te(F) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(F) || b(F) === c;
    }
    function N(F) {
      return b(F) === u;
    }
    function H(F) {
      return b(F) === l;
    }
    function ne(F) {
      return b(F) === s;
    }
    function Z(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function K(F) {
      return b(F) === d;
    }
    function X(F) {
      return b(F) === r;
    }
    function J(F) {
      return b(F) === x;
    }
    function G(F) {
      return b(F) === m;
    }
    function re(F) {
      return b(F) === n;
    }
    function ae(F) {
      return b(F) === i;
    }
    function de(F) {
      return b(F) === a;
    }
    function ie(F) {
      return b(F) === f;
    }
    ke.AsyncMode = g, ke.ConcurrentMode = I, ke.ContextConsumer = $, ke.ContextProvider = k, ke.Element = W, ke.ForwardRef = A, ke.Fragment = M, ke.Lazy = z, ke.Memo = B, ke.Portal = j, ke.Profiler = _, ke.StrictMode = L, ke.Suspense = q, ke.isAsyncMode = te, ke.isConcurrentMode = N, ke.isContextConsumer = H, ke.isContextProvider = ne, ke.isElement = Z, ke.isForwardRef = K, ke.isFragment = X, ke.isLazy = J, ke.isMemo = G, ke.isPortal = re, ke.isProfiler = ae, ke.isStrictMode = de, ke.isSuspense = ie, ke.isValidElementType = w, ke.typeOf = b;
  }()), ke;
}
var Zi;
function Yl() {
  return Zi || (Zi = 1, process.env.NODE_ENV === "production" ? Qr.exports = Cd() : Qr.exports = Pd()), Qr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xo, es;
function Rd() {
  if (es)
    return Xo;
  es = 1;
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
  return Xo = a() ? Object.assign : function(i, s) {
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
  }, Xo;
}
var Jo, ts;
function Za() {
  if (ts)
    return Jo;
  ts = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jo = e, Jo;
}
var Qo, ns;
function Kl() {
  return ns || (ns = 1, Qo = Function.call.bind(Object.prototype.hasOwnProperty)), Qo;
}
var Zo, rs;
function $d() {
  if (rs)
    return Zo;
  rs = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Za(), n = {}, r = Kl();
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
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var m = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (m ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Zo = a, Zo;
}
var ea, os;
function Id() {
  if (os)
    return ea;
  os = 1;
  var e = Yl(), t = Rd(), n = Za(), r = Kl(), a = $d(), i = function() {
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
  return ea = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(N) {
      var H = N && (u && N[u] || N[d]);
      if (typeof H == "function")
        return H;
    }
    var p = "<<anonymous>>", m = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: C(),
      arrayOf: w,
      element: b(),
      elementType: g(),
      instanceOf: I,
      node: A(),
      objectOf: k,
      oneOf: $,
      oneOfType: W,
      shape: z,
      exact: B
    };
    function x(N, H) {
      return N === H ? N !== 0 || 1 / N === 1 / H : N !== N && H !== H;
    }
    function y(N, H) {
      this.message = N, this.data = H && typeof H == "object" ? H : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function v(N) {
      if (process.env.NODE_ENV !== "production")
        var H = {}, ne = 0;
      function Z(X, J, G, re, ae, de, ie) {
        if (re = re || p, de = de || G, ie !== n) {
          if (c) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = re + ":" + G;
            !H[he] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + de + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), H[he] = !0, ne++);
          }
        }
        return J[G] == null ? X ? J[G] === null ? new y("The " + ae + " `" + de + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new y("The " + ae + " `" + de + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : N(J, G, re, ae, de);
      }
      var K = Z.bind(null, !1);
      return K.isRequired = Z.bind(null, !0), K;
    }
    function E(N) {
      function H(ne, Z, K, X, J, G) {
        var re = ne[Z], ae = L(re);
        if (ae !== N) {
          var de = q(re);
          return new y(
            "Invalid " + X + " `" + J + "` of type " + ("`" + de + "` supplied to `" + K + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return v(H);
    }
    function C() {
      return v(s);
    }
    function w(N) {
      function H(ne, Z, K, X, J) {
        if (typeof N != "function")
          return new y("Property `" + J + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var G = ne[Z];
        if (!Array.isArray(G)) {
          var re = L(G);
          return new y("Invalid " + X + " `" + J + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected an array."));
        }
        for (var ae = 0; ae < G.length; ae++) {
          var de = N(G, ae, K, X, J + "[" + ae + "]", n);
          if (de instanceof Error)
            return de;
        }
        return null;
      }
      return v(H);
    }
    function b() {
      function N(H, ne, Z, K, X) {
        var J = H[ne];
        if (!l(J)) {
          var G = L(J);
          return new y("Invalid " + K + " `" + X + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(N);
    }
    function g() {
      function N(H, ne, Z, K, X) {
        var J = H[ne];
        if (!e.isValidElementType(J)) {
          var G = L(J);
          return new y("Invalid " + K + " `" + X + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(N);
    }
    function I(N) {
      function H(ne, Z, K, X, J) {
        if (!(ne[Z] instanceof N)) {
          var G = N.name || p, re = te(ne[Z]);
          return new y("Invalid " + X + " `" + J + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return v(H);
    }
    function $(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function H(ne, Z, K, X, J) {
        for (var G = ne[Z], re = 0; re < N.length; re++)
          if (x(G, N[re]))
            return null;
        var ae = JSON.stringify(N, function(ie, F) {
          var he = q(F);
          return he === "symbol" ? String(F) : F;
        });
        return new y("Invalid " + X + " `" + J + "` of value `" + String(G) + "` " + ("supplied to `" + K + "`, expected one of " + ae + "."));
      }
      return v(H);
    }
    function k(N) {
      function H(ne, Z, K, X, J) {
        if (typeof N != "function")
          return new y("Property `" + J + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var G = ne[Z], re = L(G);
        if (re !== "object")
          return new y("Invalid " + X + " `" + J + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected an object."));
        for (var ae in G)
          if (r(G, ae)) {
            var de = N(G, ae, K, X, J + "." + ae, n);
            if (de instanceof Error)
              return de;
          }
        return null;
      }
      return v(H);
    }
    function W(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var H = 0; H < N.length; H++) {
        var ne = N[H];
        if (typeof ne != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(ne) + " at index " + H + "."
          ), s;
      }
      function Z(K, X, J, G, re) {
        for (var ae = [], de = 0; de < N.length; de++) {
          var ie = N[de], F = ie(K, X, J, G, re, n);
          if (F == null)
            return null;
          F.data && r(F.data, "expectedType") && ae.push(F.data.expectedType);
        }
        var he = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new y("Invalid " + G + " `" + re + "` supplied to " + ("`" + J + "`" + he + "."));
      }
      return v(Z);
    }
    function A() {
      function N(H, ne, Z, K, X) {
        return j(H[ne]) ? null : new y("Invalid " + K + " `" + X + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return v(N);
    }
    function M(N, H, ne, Z, K) {
      return new y(
        (N || "React class") + ": " + H + " type `" + ne + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function z(N) {
      function H(ne, Z, K, X, J) {
        var G = ne[Z], re = L(G);
        if (re !== "object")
          return new y("Invalid " + X + " `" + J + "` of type `" + re + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var ae in N) {
          var de = N[ae];
          if (typeof de != "function")
            return M(K, X, J, ae, q(de));
          var ie = de(G, ae, K, X, J + "." + ae, n);
          if (ie)
            return ie;
        }
        return null;
      }
      return v(H);
    }
    function B(N) {
      function H(ne, Z, K, X, J) {
        var G = ne[Z], re = L(G);
        if (re !== "object")
          return new y("Invalid " + X + " `" + J + "` of type `" + re + "` " + ("supplied to `" + K + "`, expected `object`."));
        var ae = t({}, ne[Z], N);
        for (var de in ae) {
          var ie = N[de];
          if (r(N, de) && typeof ie != "function")
            return M(K, X, J, de, q(ie));
          if (!ie)
            return new y(
              "Invalid " + X + " `" + J + "` key `" + de + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(ne[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var F = ie(G, de, K, X, J + "." + de, n);
          if (F)
            return F;
        }
        return null;
      }
      return v(H);
    }
    function j(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(j);
          if (N === null || l(N))
            return !0;
          var H = f(N);
          if (H) {
            var ne = H.call(N), Z;
            if (H !== N.entries) {
              for (; !(Z = ne.next()).done; )
                if (!j(Z.value))
                  return !1;
            } else
              for (; !(Z = ne.next()).done; ) {
                var K = Z.value;
                if (K && !j(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _(N, H) {
      return N === "symbol" ? !0 : H ? H["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && H instanceof Symbol : !1;
    }
    function L(N) {
      var H = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : _(H, N) ? "symbol" : H;
    }
    function q(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var H = L(N);
      if (H === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return H;
    }
    function se(N) {
      var H = q(N);
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
    function te(N) {
      return !N.constructor || !N.constructor.name ? p : N.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, ea;
}
var ta, as;
function Nd() {
  if (as)
    return ta;
  as = 1;
  var e = Za();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ta = function() {
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
  }, ta;
}
if (process.env.NODE_ENV !== "production") {
  var kd = Yl(), Md = !0;
  Ta.exports = Id()(kd.isElement, Md);
} else
  Ta.exports = Nd()();
var Ad = Ta.exports;
const o = /* @__PURE__ */ Hl(Ad), _d = ({ name: e, profile_picture: t, size: n = 120, sx: r, ...a }) => /* @__PURE__ */ S.jsx(
  ad,
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
_d.propTypes = {
  profile_picture: o.shape({
    url: o.string
  }),
  size: o.number,
  sx: o.object,
  name: o.string
};
const Lr = () => /* @__PURE__ */ S.jsx(
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
    children: /* @__PURE__ */ S.jsx(_l, {})
  }
);
function Ht(e, t) {
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
function Bn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Gl(e) {
  if (!Bn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Gl(e[n]);
  }), t;
}
function St(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? T({}, e) : e;
  return Bn(e) && Bn(t) && Object.keys(t).forEach((a) => {
    a !== "__proto__" && (Bn(t[a]) && a in e && Bn(e[a]) ? r[a] = St(e[a], t[a], n) : n.clone ? r[a] = Bn(t[a]) ? Gl(t[a]) : t[a] : r[a] = t[a]);
  }), r;
}
function Dd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Xl(e, t, n, r, a) {
  const i = e[t], s = a || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !Dd(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Jl = Ht(o.element, Xl);
Jl.isRequired = Ht(o.element.isRequired, Xl);
const Wr = Jl;
function jd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Fd(e, t, n, r, a) {
  const i = e[t], s = a || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !jd(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ei = Ht(o.elementType, Fd), Ld = "exact-prop: ​";
function Ql(e) {
  return process.env.NODE_ENV === "production" ? e : T({}, e, {
    [Ld]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function an(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Sa = { exports: {} }, Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function Wd() {
  if (is)
    return Me;
  is = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var E = v.$$typeof;
      switch (E) {
        case e:
          switch (v = v.type, v) {
            case n:
            case a:
            case r:
            case u:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case s:
                case c:
                case p:
                case f:
                case i:
                  return v;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Me.ContextConsumer = s, Me.ContextProvider = i, Me.Element = e, Me.ForwardRef = c, Me.Fragment = n, Me.Lazy = p, Me.Memo = f, Me.Portal = t, Me.Profiler = a, Me.StrictMode = r, Me.Suspense = u, Me.SuspenseList = d, Me.isAsyncMode = function() {
    return !1;
  }, Me.isConcurrentMode = function() {
    return !1;
  }, Me.isContextConsumer = function(v) {
    return y(v) === s;
  }, Me.isContextProvider = function(v) {
    return y(v) === i;
  }, Me.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, Me.isForwardRef = function(v) {
    return y(v) === c;
  }, Me.isFragment = function(v) {
    return y(v) === n;
  }, Me.isLazy = function(v) {
    return y(v) === p;
  }, Me.isMemo = function(v) {
    return y(v) === f;
  }, Me.isPortal = function(v) {
    return y(v) === t;
  }, Me.isProfiler = function(v) {
    return y(v) === a;
  }, Me.isStrictMode = function(v) {
    return y(v) === r;
  }, Me.isSuspense = function(v) {
    return y(v) === u;
  }, Me.isSuspenseList = function(v) {
    return y(v) === d;
  }, Me.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === a || v === r || v === u || v === d || v === m || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === f || v.$$typeof === i || v.$$typeof === s || v.$$typeof === c || v.$$typeof === x || v.getModuleId !== void 0);
  }, Me.typeOf = y, Me;
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
var ss;
function Bd() {
  return ss || (ss = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), x = !1, y = !1, v = !1, E = !1, C = !1, w;
    w = Symbol.for("react.module.reference");
    function b(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === n || V === a || C || V === r || V === u || V === d || E || V === m || x || y || v || typeof V == "object" && V !== null && (V.$$typeof === p || V.$$typeof === f || V.$$typeof === i || V.$$typeof === s || V.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === w || V.getModuleId !== void 0));
    }
    function g(V) {
      if (typeof V == "object" && V !== null) {
        var Q = V.$$typeof;
        switch (Q) {
          case e:
            var Re = V.type;
            switch (Re) {
              case n:
              case a:
              case r:
              case u:
              case d:
                return Re;
              default:
                var ue = Re && Re.$$typeof;
                switch (ue) {
                  case l:
                  case s:
                  case c:
                  case p:
                  case f:
                  case i:
                    return ue;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var I = s, $ = i, k = e, W = c, A = n, M = p, z = f, B = t, j = a, _ = r, L = u, q = d, se = !1, te = !1;
    function N(V) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(V) {
      return te || (te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(V) {
      return g(V) === s;
    }
    function Z(V) {
      return g(V) === i;
    }
    function K(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function X(V) {
      return g(V) === c;
    }
    function J(V) {
      return g(V) === n;
    }
    function G(V) {
      return g(V) === p;
    }
    function re(V) {
      return g(V) === f;
    }
    function ae(V) {
      return g(V) === t;
    }
    function de(V) {
      return g(V) === a;
    }
    function ie(V) {
      return g(V) === r;
    }
    function F(V) {
      return g(V) === u;
    }
    function he(V) {
      return g(V) === d;
    }
    Ae.ContextConsumer = I, Ae.ContextProvider = $, Ae.Element = k, Ae.ForwardRef = W, Ae.Fragment = A, Ae.Lazy = M, Ae.Memo = z, Ae.Portal = B, Ae.Profiler = j, Ae.StrictMode = _, Ae.Suspense = L, Ae.SuspenseList = q, Ae.isAsyncMode = N, Ae.isConcurrentMode = H, Ae.isContextConsumer = ne, Ae.isContextProvider = Z, Ae.isElement = K, Ae.isForwardRef = X, Ae.isFragment = J, Ae.isLazy = G, Ae.isMemo = re, Ae.isPortal = ae, Ae.isProfiler = de, Ae.isStrictMode = ie, Ae.isSuspense = F, Ae.isSuspenseList = he, Ae.isValidElementType = b, Ae.typeOf = g;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? Sa.exports = Wd() : Sa.exports = Bd();
var Nr = Sa.exports;
const Ud = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Vd(e) {
  const t = `${e}`.match(Ud);
  return t && t[1] || "";
}
function Zl(e, t = "") {
  return e.displayName || e.name || Vd(e) || t;
}
function ls(e, t, n) {
  const r = Zl(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function zd(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Zl(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Nr.ForwardRef:
          return ls(e, e.render, "ForwardRef");
        case Nr.Memo:
          return ls(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Bt(e, t, n, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = a || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const qd = o.oneOfType([o.func, o.object]), Nt = qd;
function fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : an(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function cs(...e) {
  return e.reduce((t, n) => n == null ? t : function(...a) {
    t.apply(this, a), n.apply(this, a);
  }, () => {
  });
}
function ec(e, t = 166) {
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
function na(e, t) {
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function dt(e) {
  return e && e.ownerDocument || document;
}
function wn(e) {
  return dt(e).defaultView || window;
}
function po(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Hd = typeof window < "u" ? h.useLayoutEffect : h.useEffect, sn = Hd;
let us = 0;
function Yd(e) {
  const [t, n] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (us += 1, n(`mui-${us}`));
  }, [t]), r;
}
const ds = h["useId".toString()];
function tc(e) {
  if (ds !== void 0) {
    const t = ds();
    return e ?? t;
  }
  return Yd(e);
}
function Kd(e, t, n, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = a || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function br({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: a
  } = h.useRef(e !== void 0), [i, s] = h.useState(t), l = a ? e : i;
  if (process.env.NODE_ENV !== "production") {
    h.useEffect(() => {
      a !== (e !== void 0) && console.error([`MUI: A component is changing the ${a ? "" : "un"}controlled ${r} state of ${n} to be ${a ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = h.useRef(t);
    h.useEffect(() => {
      !a && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = h.useCallback((u) => {
    a || s(u);
  }, []);
  return [l, c];
}
function Lt(e) {
  const t = h.useRef(e);
  return sn(() => {
    t.current = e;
  }), h.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function ot(...e) {
  return h.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      po(n, t);
    });
  }, e);
}
let Ro = !0, Ca = !1, fs;
const Gd = {
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
function Xd(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Gd[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Jd(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ro = !0);
}
function ra() {
  Ro = !1;
}
function Qd() {
  this.visibilityState === "hidden" && Ca && (Ro = !0);
}
function Zd(e) {
  e.addEventListener("keydown", Jd, !0), e.addEventListener("mousedown", ra, !0), e.addEventListener("pointerdown", ra, !0), e.addEventListener("touchstart", ra, !0), e.addEventListener("visibilitychange", Qd, !0);
}
function ef(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ro || Xd(t);
}
function tf() {
  const e = h.useCallback((a) => {
    a != null && Zd(a.ownerDocument);
  }, []), t = h.useRef(!1);
  function n() {
    return t.current ? (Ca = !0, window.clearTimeout(fs), fs = window.setTimeout(() => {
      Ca = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(a) {
    return ef(a) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function nc(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const nf = (e) => {
  const t = h.useRef({});
  return h.useEffect(() => {
    t.current = e;
  }), t.current;
}, rf = nf;
function of(e) {
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
function af(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const sf = Number.isInteger || af;
function rc(e, t, n, r) {
  const a = e[t];
  if (a == null || !sf(a)) {
    const i = of(a);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function oc(e, t, ...n) {
  return e[t] === void 0 ? null : rc(e, t, ...n);
}
function Pa() {
  return null;
}
oc.isRequired = rc;
Pa.isRequired = Pa;
const ti = process.env.NODE_ENV === "production" ? Pa : oc;
function ac(e, t) {
  const n = T({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = T({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = a : !a || !Object.keys(a) ? n[r] = i : (n[r] = T({}, i), Object.keys(a).forEach((s) => {
        n[r][s] = ac(a[s], i[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function ze(e, t, n = void 0) {
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
const ps = (e) => e, lf = () => {
  let e = ps;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ps;
    }
  };
}, cf = lf(), uf = cf, df = {
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
function Le(e, t, n = "Mui") {
  const r = df[t];
  return r ? `${n}-${r}` : `${uf.generate(e)}-${t}`;
}
function Ue(e, t, n = "Mui") {
  const r = {};
  return t.forEach((a) => {
    r[a] = Le(e, a, n);
  }), r;
}
const $o = "$$material";
function ve(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ff(e) {
  return e == null || Object.keys(e).length === 0;
}
function ic(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (a) => t(ff(a) ? n : a) : t;
  return /* @__PURE__ */ S.jsx(bd, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (ic.propTypes = {
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
function pf(e, t) {
  const n = Ed(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const a = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${a})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${a})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const mf = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, hf = ["values", "unit", "step"], vf = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => T({}, n, {
    [r.key]: r.val
  }), {});
};
function gf(e) {
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
  } = e, a = ve(e, hf), i = vf(t), s = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, m) {
    const x = s.indexOf(m);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(x !== -1 && typeof t[s[x]] == "number" ? t[s[x]] : m) - r / 100}${n})`;
  }
  function d(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const m = s.indexOf(p);
    return m === 0 ? l(s[1]) : m === s.length - 1 ? c(s[m]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return T({
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
const yf = {
  borderRadius: 4
}, bf = yf, xf = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, cn = xf;
function xr(e, t) {
  return t ? St(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ni = {
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
}, ms = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ni[e]}px)`
};
function Yt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || ms;
    return t.reduce((s, l, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || ms;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || ni).indexOf(l) !== -1) {
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
function Of(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, a) => {
    const i = e.up(a);
    return r[i] = {}, r;
  }, {})) || {};
}
function Ef(e, t) {
  return e.reduce((n, r) => {
    const a = n[r];
    return (!a || Object.keys(a).length === 0) && delete n[r], n;
  }, t);
}
function Io(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((a, i) => a && a[i] ? a[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, a) => r && r[a] != null ? r[a] : null, e);
}
function mo(e, t, n, r = n) {
  let a;
  return typeof e == "function" ? a = e(n) : Array.isArray(e) ? a = e[n] || r : a = Io(e, n) || r, t && (a = t(a, r, e)), a;
}
function _e(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: a
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = Io(c, r) || {};
    return Yt(s, l, (f) => {
      let p = mo(u, a, f);
      return f === p && typeof f == "string" && (p = mo(u, a, `${t}${f === "default" ? "" : fe(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: cn
  } : {}, i.filterProps = [t], i;
}
function wf(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Tf = {
  m: "margin",
  p: "padding"
}, Sf = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, hs = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Cf = wf((e) => {
  if (e.length > 2)
    if (hs[e])
      e = hs[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Tf[t], a = Sf[n] || "";
  return Array.isArray(a) ? a.map((i) => r + i) : [r + a];
}), No = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ko = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Pf = [...No, ...ko];
function Br(e, t, n, r) {
  var a;
  const i = (a = Io(e, t, !1)) != null ? a : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function sc(e) {
  return Br(e, "spacing", 8, "spacing");
}
function Ur(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Rf(e, t) {
  return (n) => e.reduce((r, a) => (r[a] = Ur(t, n), r), {});
}
function $f(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const a = Cf(n), i = Rf(a, r), s = e[n];
  return Yt(e, s, i);
}
function lc(e, t) {
  const n = sc(e.theme);
  return Object.keys(e).map((r) => $f(e, t, r, n)).reduce(xr, {});
}
function He(e) {
  return lc(e, No);
}
He.propTypes = process.env.NODE_ENV !== "production" ? No.reduce((e, t) => (e[t] = cn, e), {}) : {};
He.filterProps = No;
function Ye(e) {
  return lc(e, ko);
}
Ye.propTypes = process.env.NODE_ENV !== "production" ? ko.reduce((e, t) => (e[t] = cn, e), {}) : {};
Ye.filterProps = ko;
process.env.NODE_ENV !== "production" && Pf.reduce((e, t) => (e[t] = cn, e), {});
function If(e = 8) {
  if (e.mui)
    return e;
  const t = sc({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function Mo(...e) {
  const t = e.reduce((r, a) => (a.filterProps.forEach((i) => {
    r[i] = a;
  }), r), {}), n = (r) => Object.keys(r).reduce((a, i) => t[i] ? xr(a, t[i](r)) : a, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, a) => Object.assign(r, a.propTypes), {}) : {}, n.filterProps = e.reduce((r, a) => r.concat(a.filterProps), []), n;
}
function Dt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Nf = _e({
  prop: "border",
  themeKey: "borders",
  transform: Dt
}), kf = _e({
  prop: "borderTop",
  themeKey: "borders",
  transform: Dt
}), Mf = _e({
  prop: "borderRight",
  themeKey: "borders",
  transform: Dt
}), Af = _e({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Dt
}), _f = _e({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Dt
}), Df = _e({
  prop: "borderColor",
  themeKey: "palette"
}), jf = _e({
  prop: "borderTopColor",
  themeKey: "palette"
}), Ff = _e({
  prop: "borderRightColor",
  themeKey: "palette"
}), Lf = _e({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Wf = _e({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Ao = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Br(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Ur(t, r)
    });
    return Yt(e, e.borderRadius, n);
  }
  return null;
};
Ao.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: cn
} : {};
Ao.filterProps = ["borderRadius"];
Mo(Nf, kf, Mf, Af, _f, Df, jf, Ff, Lf, Wf, Ao);
const _o = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Br(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Ur(t, r)
    });
    return Yt(e, e.gap, n);
  }
  return null;
};
_o.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: cn
} : {};
_o.filterProps = ["gap"];
const Do = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Br(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Ur(t, r)
    });
    return Yt(e, e.columnGap, n);
  }
  return null;
};
Do.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: cn
} : {};
Do.filterProps = ["columnGap"];
const jo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Br(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Ur(t, r)
    });
    return Yt(e, e.rowGap, n);
  }
  return null;
};
jo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: cn
} : {};
jo.filterProps = ["rowGap"];
const Bf = _e({
  prop: "gridColumn"
}), Uf = _e({
  prop: "gridRow"
}), Vf = _e({
  prop: "gridAutoFlow"
}), zf = _e({
  prop: "gridAutoColumns"
}), qf = _e({
  prop: "gridAutoRows"
}), Hf = _e({
  prop: "gridTemplateColumns"
}), Yf = _e({
  prop: "gridTemplateRows"
}), Kf = _e({
  prop: "gridTemplateAreas"
}), Gf = _e({
  prop: "gridArea"
});
Mo(_o, Do, jo, Bf, Uf, Vf, zf, qf, Hf, Yf, Kf, Gf);
function zn(e, t) {
  return t === "grey" ? t : e;
}
const Xf = _e({
  prop: "color",
  themeKey: "palette",
  transform: zn
}), Jf = _e({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: zn
}), Qf = _e({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: zn
});
Mo(Xf, Jf, Qf);
function xt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Zf = _e({
  prop: "width",
  transform: xt
}), ri = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r;
      return {
        maxWidth: ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ni[n] || xt(n)
      };
    };
    return Yt(e, e.maxWidth, t);
  }
  return null;
};
ri.filterProps = ["maxWidth"];
const ep = _e({
  prop: "minWidth",
  transform: xt
}), tp = _e({
  prop: "height",
  transform: xt
}), np = _e({
  prop: "maxHeight",
  transform: xt
}), rp = _e({
  prop: "minHeight",
  transform: xt
});
_e({
  prop: "size",
  cssProperty: "width",
  transform: xt
});
_e({
  prop: "size",
  cssProperty: "height",
  transform: xt
});
const op = _e({
  prop: "boxSizing"
});
Mo(Zf, ri, ep, tp, np, rp, op);
const ap = {
  // borders
  border: {
    themeKey: "borders",
    transform: Dt
  },
  borderTop: {
    themeKey: "borders",
    transform: Dt
  },
  borderRight: {
    themeKey: "borders",
    transform: Dt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Dt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Dt
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
    style: Ao
  },
  // palette
  color: {
    themeKey: "palette",
    transform: zn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: zn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: zn
  },
  // spacing
  p: {
    style: Ye
  },
  pt: {
    style: Ye
  },
  pr: {
    style: Ye
  },
  pb: {
    style: Ye
  },
  pl: {
    style: Ye
  },
  px: {
    style: Ye
  },
  py: {
    style: Ye
  },
  padding: {
    style: Ye
  },
  paddingTop: {
    style: Ye
  },
  paddingRight: {
    style: Ye
  },
  paddingBottom: {
    style: Ye
  },
  paddingLeft: {
    style: Ye
  },
  paddingX: {
    style: Ye
  },
  paddingY: {
    style: Ye
  },
  paddingInline: {
    style: Ye
  },
  paddingInlineStart: {
    style: Ye
  },
  paddingInlineEnd: {
    style: Ye
  },
  paddingBlock: {
    style: Ye
  },
  paddingBlockStart: {
    style: Ye
  },
  paddingBlockEnd: {
    style: Ye
  },
  m: {
    style: He
  },
  mt: {
    style: He
  },
  mr: {
    style: He
  },
  mb: {
    style: He
  },
  ml: {
    style: He
  },
  mx: {
    style: He
  },
  my: {
    style: He
  },
  margin: {
    style: He
  },
  marginTop: {
    style: He
  },
  marginRight: {
    style: He
  },
  marginBottom: {
    style: He
  },
  marginLeft: {
    style: He
  },
  marginX: {
    style: He
  },
  marginY: {
    style: He
  },
  marginInline: {
    style: He
  },
  marginInlineStart: {
    style: He
  },
  marginInlineEnd: {
    style: He
  },
  marginBlock: {
    style: He
  },
  marginBlockStart: {
    style: He
  },
  marginBlockEnd: {
    style: He
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
    style: _o
  },
  rowGap: {
    style: jo
  },
  columnGap: {
    style: Do
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
    style: ri
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
}, oi = ap;
function ip(...e) {
  const t = e.reduce((r, a) => r.concat(Object.keys(a)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function sp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lp() {
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
    const p = Io(a, u) || {};
    return f ? f(s) : Yt(s, r, (x) => {
      let y = mo(p, d, x);
      return x === y && typeof x == "string" && (y = mo(p, d, `${n}${x === "default" ? "" : fe(x)}`, x)), c === !1 ? y : {
        [c]: y
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
    const s = (r = i.unstable_sxConfig) != null ? r : oi;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Of(i.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((m) => {
        const x = sp(u[m], i);
        if (x != null)
          if (typeof x == "object")
            if (s[m])
              p = xr(p, e(m, x, i, s));
            else {
              const y = Yt({
                theme: i
              }, x, (v) => ({
                [m]: v
              }));
              ip(y, x) ? p[m] = t({
                sx: x,
                theme: i
              }) : p = xr(p, y);
            }
          else
            p = xr(p, e(m, x, i, s));
      }), Ef(f, p);
    }
    return Array.isArray(a) ? a.map(l) : l(a);
  }
  return t;
}
const cc = lp();
cc.filterProps = ["sx"];
const ai = cc, cp = ["breakpoints", "palette", "spacing", "shape"];
function ii(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: a,
    shape: i = {}
  } = e, s = ve(e, cp), l = gf(n), c = If(a);
  let u = St({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: T({
      mode: "light"
    }, r),
    spacing: c,
    shape: T({}, bf, i)
  }, s);
  return u = t.reduce((d, f) => St(d, f), u), u.unstable_sxConfig = T({}, oi, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return ai({
      sx: f,
      theme: this
    });
  }, u;
}
function up(e) {
  return Object.keys(e).length === 0;
}
function uc(e = null) {
  const t = h.useContext(xd);
  return !t || up(t) ? e : t;
}
const dp = ii();
function si(e = dp) {
  return uc(e);
}
function dc({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = si(n), a = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ S.jsx(ic, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (dc.propTypes = {
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
function fc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = fc(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ge() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = fc(e)) && (r && (r += " "), r += t);
  return r;
}
const fp = ["variant"];
function vs(e) {
  return e.length === 0;
}
function pc(e) {
  const {
    variant: t
  } = e, n = ve(e, fp);
  let r = t || "";
  return Object.keys(n).sort().forEach((a) => {
    a === "color" ? r += vs(r) ? e[a] : fe(e[a]) : r += `${vs(r) ? a : fe(a)}${fe(e[a].toString())}`;
  }), r;
}
const pp = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function mp(e) {
  return Object.keys(e).length === 0;
}
function hp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const vp = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, gp = (e, t) => {
  let n = [];
  t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
  const r = {};
  return n.forEach((a) => {
    const i = pc(a.props);
    r[i] = a.style;
  }), r;
}, yp = (e, t, n, r) => {
  var a;
  const {
    ownerState: i = {}
  } = e, s = [], l = n == null || (a = n.components) == null || (a = a[r]) == null ? void 0 : a.variants;
  return l && l.forEach((c) => {
    let u = !0;
    Object.keys(c.props).forEach((d) => {
      i[d] !== c.props[d] && e[d] !== c.props[d] && (u = !1);
    }), u && s.push(t[pc(c.props)]);
  }), s;
};
function Or(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const bp = ii(), gs = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function fr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return mp(t) ? e : t[n] || t;
}
function xp(e) {
  return e ? (t, n) => n[e] : null;
}
function Op(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = bp,
    rootShouldForwardProp: r = Or,
    slotShouldForwardProp: a = Or
  } = e, i = (s) => ai(T({}, s, {
    theme: fr(T({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    mf(s, (b) => b.filter((g) => !(g != null && g.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = xp(gs(u))
    } = l, m = ve(l, pp), x = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = f || !1;
    let v;
    process.env.NODE_ENV !== "production" && c && (v = `${c}-${gs(u || "Root")}`);
    let E = Or;
    u === "Root" || u === "root" ? E = r : u ? E = a : hp(s) && (E = void 0);
    const C = pf(s, T({
      shouldForwardProp: E,
      label: v
    }, m)), w = (b, ...g) => {
      const I = g ? g.map((A) => typeof A == "function" && A.__emotion_real !== A ? (M) => A(T({}, M, {
        theme: fr(T({}, M, {
          defaultTheme: n,
          themeId: t
        }))
      })) : A) : [];
      let $ = b;
      c && p && I.push((A) => {
        const M = fr(T({}, A, {
          defaultTheme: n,
          themeId: t
        })), z = vp(c, M);
        if (z) {
          const B = {};
          return Object.entries(z).forEach(([j, _]) => {
            B[j] = typeof _ == "function" ? _(T({}, A, {
              theme: M
            })) : _;
          }), p(A, B);
        }
        return null;
      }), c && !x && I.push((A) => {
        const M = fr(T({}, A, {
          defaultTheme: n,
          themeId: t
        }));
        return yp(A, gp(c, M), M, c);
      }), y || I.push(i);
      const k = I.length - g.length;
      if (Array.isArray(b) && k > 0) {
        const A = new Array(k).fill("");
        $ = [...b, ...A], $.raw = [...b.raw, ...A];
      } else
        typeof b == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        b.__emotion_real !== b && ($ = (A) => b(T({}, A, {
          theme: fr(T({}, A, {
            defaultTheme: n,
            themeId: t
          }))
        })));
      const W = C($, ...I);
      if (process.env.NODE_ENV !== "production") {
        let A;
        c && (A = `${c}${fe(u || "")}`), A === void 0 && (A = `Styled(${zd(s)})`), W.displayName = A;
      }
      return s.muiName && (W.muiName = s.muiName), W;
    };
    return C.withConfig && (w.withConfig = C.withConfig), w;
  };
}
function Ep(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ac(t.components[n].defaultProps, r);
}
function wp({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let a = si(n);
  return r && (a = a[r] || a), Ep({
    theme: a,
    name: t,
    props: e
  });
}
function li(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function Tp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Tn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Tn(Tp(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : an(9, e));
  let r = e.substring(t + 1, e.length - 1), a;
  if (n === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : an(10, a));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: a
  };
}
function Fo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((a, i) => i < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Sp(e) {
  e = Tn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, a = t[2] / 100, i = r * Math.min(a, 1 - a), s = (u, d = (u + n / 30) % 12) => a - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Fo({
    type: l,
    values: c
  });
}
function ys(e) {
  e = Tn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Tn(Sp(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function bs(e, t) {
  const n = ys(e), r = ys(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function st(e, t) {
  return e = Tn(e), t = li(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Fo(e);
}
function Cp(e, t) {
  if (e = Tn(e), t = li(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Fo(e);
}
function Pp(e, t) {
  if (e = Tn(e), t = li(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Fo(e);
}
function Rp(e, t) {
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
const $p = {
  black: "#000",
  white: "#fff"
}, kr = $p, Ip = {
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
}, Np = Ip, kp = {
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
}, Mn = kp, Mp = {
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
}, An = Mp, Ap = {
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
}, pr = Ap, _p = {
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
}, _n = _p, Dp = {
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
}, Dn = Dp, jp = {
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
}, jn = jp, Fp = ["mode", "contrastThreshold", "tonalOffset"], xs = {
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
}, oa = {
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
function Os(e, t, n, r) {
  const a = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Pp(e.main, a) : t === "dark" && (e.dark = Cp(e.main, i)));
}
function Lp(e = "light") {
  return e === "dark" ? {
    main: _n[200],
    light: _n[50],
    dark: _n[400]
  } : {
    main: _n[700],
    light: _n[400],
    dark: _n[800]
  };
}
function Wp(e = "light") {
  return e === "dark" ? {
    main: Mn[200],
    light: Mn[50],
    dark: Mn[400]
  } : {
    main: Mn[500],
    light: Mn[300],
    dark: Mn[700]
  };
}
function Bp(e = "light") {
  return e === "dark" ? {
    main: An[500],
    light: An[300],
    dark: An[700]
  } : {
    main: An[700],
    light: An[400],
    dark: An[800]
  };
}
function Up(e = "light") {
  return e === "dark" ? {
    main: Dn[400],
    light: Dn[300],
    dark: Dn[700]
  } : {
    main: Dn[700],
    light: Dn[500],
    dark: Dn[900]
  };
}
function Vp(e = "light") {
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
function zp(e = "light") {
  return e === "dark" ? {
    main: pr[400],
    light: pr[300],
    dark: pr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: pr[500],
    dark: pr[900]
  };
}
function qp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, a = ve(e, Fp), i = e.primary || Lp(t), s = e.secondary || Wp(t), l = e.error || Bp(t), c = e.info || Up(t), u = e.success || Vp(t), d = e.warning || zp(t);
  function f(y) {
    const v = bs(y, oa.text.primary) >= n ? oa.text.primary : xs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = bs(y, v);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${v} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const p = ({
    color: y,
    name: v,
    mainShade: E = 500,
    lightShade: C = 300,
    darkShade: w = 700
  }) => {
    if (y = T({}, y), !y.main && y[E] && (y.main = y[E]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : an(11, v ? ` (${v})` : "", E));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : an(12, v ? ` (${v})` : "", JSON.stringify(y.main)));
    return Os(y, "light", C, r), Os(y, "dark", w, r), y.contrastText || (y.contrastText = f(y.main)), y;
  }, m = {
    dark: oa,
    light: xs
  };
  return process.env.NODE_ENV !== "production" && (m[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), St(T({
    // A collection of common colors.
    common: T({}, kr),
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
    grey: Np,
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
  }, m[t]), a);
}
const Hp = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Yp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Es = {
  textTransform: "uppercase"
}, ws = '"Roboto", "Helvetica", "Arial", sans-serif';
function Kp(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = ws,
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
  } = n, p = ve(n, Hp);
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = a / 14, x = f || ((E) => `${E / u * m}rem`), y = (E, C, w, b, g) => T({
    fontFamily: r,
    fontWeight: E,
    fontSize: x(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w
  }, r === ws ? {
    letterSpacing: `${Yp(b / C)}em`
  } : {}, g, d), v = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(l, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(l, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(l, 14, 1.75, 0.4, Es),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Es),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return St(T({
    htmlFontSize: u,
    pxToRem: x,
    fontFamily: r,
    fontSize: a,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), p, {
    clone: !1
    // No need to clone deep
  });
}
const Gp = 0.2, Xp = 0.14, Jp = 0.12;
function Ve(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Gp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Xp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Jp})`].join(",");
}
const Qp = ["none", Ve(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ve(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ve(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ve(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ve(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ve(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ve(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ve(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ve(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ve(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ve(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ve(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ve(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ve(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ve(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ve(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ve(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ve(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ve(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ve(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ve(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ve(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ve(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ve(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Zp = Qp, em = ["duration", "easing", "delay"], tm = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, nm = {
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
function Ts(e) {
  return `${Math.round(e)}ms`;
}
function rm(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function om(e) {
  const t = T({}, tm, e.easing), n = T({}, nm, e.duration);
  return T({
    getAutoHeightDuration: rm,
    create: (a = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = ve(i, em);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !isNaN(parseFloat(p));
        !d(a) && !Array.isArray(a) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(a) ? a : [a]).map((d) => `${d} ${typeof s == "string" ? s : Ts(s)} ${l} ${typeof c == "string" ? c : Ts(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const am = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, im = am, sm = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function lm(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: a = {},
    typography: i = {}
  } = e, s = ve(e, sm);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : an(18));
  const l = qp(r), c = ii(e);
  let u = St(c, {
    mixins: Rp(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Zp.slice(),
    typography: Kp(l, i),
    transitions: om(a),
    zIndex: T({}, im)
  });
  if (u = St(u, s), u = t.reduce((d, f) => St(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (p, m) => {
      let x;
      for (x in p) {
        const y = p[x];
        if (d.indexOf(x) !== -1 && Object.keys(y).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Le("", x);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: y
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[x] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const m = u.components[p].styleOverrides;
      m && p.indexOf("Mui") === 0 && f(m, p);
    });
  }
  return u.unstable_sxConfig = T({}, oi, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return ai({
      sx: f,
      theme: this
    });
  }, u;
}
const cm = lm(), Lo = cm;
function er() {
  const e = si(Lo);
  return process.env.NODE_ENV !== "production" && h.useDebugValue(e), e[$o] || e;
}
function qe({
  props: e,
  name: t
}) {
  return wp({
    props: e,
    name: t,
    defaultTheme: Lo,
    themeId: $o
  });
}
const un = (e) => Or(e) && e !== "classes", um = Or, dm = Op({
  themeId: $o,
  defaultTheme: Lo,
  rootShouldForwardProp: un
}), me = dm, fm = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Ss = fm, mc = ({ children: e, style: t, sx: n, component: r, onSubmit: a, mb: i, mt: s, isLoading: l = !1, ...c }) => {
  const u = er();
  return /* @__PURE__ */ S.jsxs(
    id,
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
        l && /* @__PURE__ */ S.jsx(Lr, {}),
        e
      ]
    }
  );
};
mc.propTypes = {
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
function ho(e) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e);
}
function ln(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function at(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Et(e) {
  at(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || ho(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function pm(e, t) {
  at(2, arguments);
  var n = Et(e).getTime(), r = ln(t);
  return new Date(n + r);
}
var mm = {};
function Vr() {
  return mm;
}
function Mr(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Cs(e) {
  at(1, arguments);
  var t = Et(e);
  return t.setHours(0, 0, 0, 0), t;
}
var hm = 864e5;
function vm(e, t) {
  at(2, arguments);
  var n = Cs(e), r = Cs(t), a = n.getTime() - Mr(n), i = r.getTime() - Mr(r);
  return Math.round((a - i) / hm);
}
function hc(e) {
  return at(1, arguments), e instanceof Date || ho(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ra(e) {
  if (at(1, arguments), !hc(e) && typeof e != "number")
    return !1;
  var t = Et(e);
  return !isNaN(Number(t));
}
function $a(e, t) {
  at(2, arguments);
  var n = ln(t);
  return pm(e, -n);
}
var gm = 864e5;
function ym(e) {
  at(1, arguments);
  var t = Et(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / gm) + 1;
}
function vo(e) {
  at(1, arguments);
  var t = 1, n = Et(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function vc(e) {
  at(1, arguments);
  var t = Et(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = vo(r), i = /* @__PURE__ */ new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = vo(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function bm(e) {
  at(1, arguments);
  var t = vc(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = vo(n);
  return r;
}
var xm = 6048e5;
function Om(e) {
  at(1, arguments);
  var t = Et(e), n = vo(t).getTime() - bm(t).getTime();
  return Math.round(n / xm) + 1;
}
function go(e, t) {
  var n, r, a, i, s, l, c, u;
  at(1, arguments);
  var d = Vr(), f = ln((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Et(e), m = p.getUTCDay(), x = (m < f ? 7 : 0) + m - f;
  return p.setUTCDate(p.getUTCDate() - x), p.setUTCHours(0, 0, 0, 0), p;
}
function gc(e, t) {
  var n, r, a, i, s, l, c, u;
  at(1, arguments);
  var d = Et(e), f = d.getUTCFullYear(), p = Vr(), m = ln((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var x = /* @__PURE__ */ new Date(0);
  x.setUTCFullYear(f + 1, 0, m), x.setUTCHours(0, 0, 0, 0);
  var y = go(x, t), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(f, 0, m), v.setUTCHours(0, 0, 0, 0);
  var E = go(v, t);
  return d.getTime() >= y.getTime() ? f + 1 : d.getTime() >= E.getTime() ? f : f - 1;
}
function Em(e, t) {
  var n, r, a, i, s, l, c, u;
  at(1, arguments);
  var d = Vr(), f = ln((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = gc(e, t), m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(p, 0, f), m.setUTCHours(0, 0, 0, 0);
  var x = go(m, t);
  return x;
}
var wm = 6048e5;
function Tm(e, t) {
  at(1, arguments);
  var n = Et(e), r = go(n, t).getTime() - Em(n, t).getTime();
  return Math.round(r / wm) + 1;
}
function De(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Sm = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return De(n === "yy" ? a % 100 : a, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : De(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return De(t.getUTCDate(), n.length);
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
    return De(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return De(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return De(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return De(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), i = Math.floor(a * Math.pow(10, r - 3));
    return De(i, n.length);
  }
};
const Zt = Sm;
var Fn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Cm = {
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
    return Zt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, a) {
    var i = gc(t, a), s = i > 0 ? i : 1 - i;
    if (n === "YY") {
      var l = s % 100;
      return De(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : De(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = vc(t);
    return De(r, n.length);
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
    return De(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return De(a, 2);
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
        return De(a, 2);
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
        return Zt.M(t, n);
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
        return De(a + 1, 2);
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
    var i = Tm(t, a);
    return n === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : De(i, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = Om(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : De(a, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Zt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var a = ym(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : De(a, n.length);
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
        return De(s, 2);
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
        return De(s, n.length);
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
        return De(i, n.length);
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
    switch (a === 12 ? i = Fn.noon : a === 0 ? i = Fn.midnight : i = a / 12 >= 1 ? "pm" : "am", n) {
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
    switch (a >= 17 ? i = Fn.evening : a >= 12 ? i = Fn.afternoon : a >= 4 ? i = Fn.morning : i = Fn.night, n) {
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
    return Zt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Zt.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : De(a, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : De(a, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Zt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Zt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Zt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return Rs(s);
      case "XXXX":
      case "XX":
        return hn(s);
      case "XXXXX":
      case "XXX":
      default:
        return hn(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return Rs(s);
      case "xxxx":
      case "xx":
        return hn(s);
      case "xxxxx":
      case "xxx":
      default:
        return hn(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ps(s, ":");
      case "OOOO":
      default:
        return "GMT" + hn(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ps(s, ":");
      case "zzzz":
      default:
        return "GMT" + hn(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, a) {
    var i = a._originalDate || t, s = Math.floor(i.getTime() / 1e3);
    return De(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTime();
    return De(s, n.length);
  }
};
function Ps(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(a);
  var s = t || "";
  return n + String(a) + s + De(i, 2);
}
function Rs(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + De(Math.abs(e) / 60, 2);
  }
  return hn(e, t);
}
function hn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), i = De(Math.floor(a / 60), 2), s = De(a % 60, 2);
  return r + i + n + s;
}
const Pm = Cm;
var $s = function(t, n) {
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
}, yc = function(t, n) {
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
}, Rm = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], i = r[2];
  if (!i)
    return $s(t, n);
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
  return s.replace("{{date}}", $s(a, n)).replace("{{time}}", yc(i, n));
}, $m = {
  p: yc,
  P: Rm
};
const Im = $m;
var Nm = ["D", "DD"], km = ["YY", "YYYY"];
function Mm(e) {
  return Nm.indexOf(e) !== -1;
}
function Am(e) {
  return km.indexOf(e) !== -1;
}
function Is(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var _m = {
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
}, Dm = function(t, n, r) {
  var a, i = _m[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const jm = Dm;
function qn(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Fm = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Lm = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Wm = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Bm = {
  date: qn({
    formats: Fm,
    defaultWidth: "full"
  }),
  time: qn({
    formats: Lm,
    defaultWidth: "full"
  }),
  dateTime: qn({
    formats: Wm,
    defaultWidth: "full"
  })
};
const Um = Bm;
var Vm = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zm = function(t, n, r, a) {
  return Vm[t];
};
const qm = zm;
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
var Hm = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ym = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Km = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Gm = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Xm = {
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
}, Jm = {
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
}, Qm = function(t, n) {
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
}, Zm = {
  ordinalNumber: Qm,
  era: jt({
    values: Hm,
    defaultWidth: "wide"
  }),
  quarter: jt({
    values: Ym,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: jt({
    values: Km,
    defaultWidth: "wide"
  }),
  day: jt({
    values: Gm,
    defaultWidth: "wide"
  }),
  dayPeriod: jt({
    values: Xm,
    defaultWidth: "wide",
    formattingValues: Jm,
    defaultFormattingWidth: "wide"
  })
};
const eh = Zm;
function Ft(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    var s = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? nh(l, function(f) {
      return f.test(s);
    }) : th(l, function(f) {
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
function th(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function nh(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function bc(e) {
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
var rh = /^(\d+)(th|st|nd|rd)?/i, oh = /\d+/i, ah = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ih = {
  any: [/^b/i, /^(a|c)/i]
}, sh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, lh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ch = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, uh = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, dh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, fh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ph = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, mh = {
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
}, hh = {
  ordinalNumber: bc({
    matchPattern: rh,
    parsePattern: oh,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Ft({
    matchPatterns: ah,
    defaultMatchWidth: "wide",
    parsePatterns: ih,
    defaultParseWidth: "any"
  }),
  quarter: Ft({
    matchPatterns: sh,
    defaultMatchWidth: "wide",
    parsePatterns: lh,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Ft({
    matchPatterns: ch,
    defaultMatchWidth: "wide",
    parsePatterns: uh,
    defaultParseWidth: "any"
  }),
  day: Ft({
    matchPatterns: dh,
    defaultMatchWidth: "wide",
    parsePatterns: fh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ft({
    matchPatterns: ph,
    defaultMatchWidth: "any",
    parsePatterns: mh,
    defaultParseWidth: "any"
  })
};
const vh = hh;
var gh = {
  code: "en-US",
  formatDistance: jm,
  formatLong: Um,
  formatRelative: qm,
  localize: eh,
  match: vh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const xc = gh;
var yh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, bh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, xh = /^'([^]*?)'?$/, Oh = /''/g, Eh = /[a-zA-Z]/;
function Oc(e, t, n) {
  var r, a, i, s, l, c, u, d, f, p, m, x, y, v, E, C, w, b;
  at(2, arguments);
  var g = String(t), I = Vr(), $ = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : I.locale) !== null && r !== void 0 ? r : xc, k = ln((i = (s = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : I.firstWeekContainsDate) !== null && s !== void 0 ? s : (f = I.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var W = ln((m = (x = (y = (v = n == null ? void 0 : n.weekStartsOn) !== null && v !== void 0 ? v : n == null || (E = n.locale) === null || E === void 0 || (C = E.options) === null || C === void 0 ? void 0 : C.weekStartsOn) !== null && y !== void 0 ? y : I.weekStartsOn) !== null && x !== void 0 ? x : (w = I.locale) === null || w === void 0 || (b = w.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(W >= 0 && W <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!$.localize)
    throw new RangeError("locale must contain localize property");
  if (!$.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var A = Et(e);
  if (!Ra(A))
    throw new RangeError("Invalid time value");
  var M = Mr(A), z = $a(A, M), B = {
    firstWeekContainsDate: k,
    weekStartsOn: W,
    locale: $,
    _originalDate: A
  }, j = g.match(bh).map(function(_) {
    var L = _[0];
    if (L === "p" || L === "P") {
      var q = Im[L];
      return q(_, $.formatLong);
    }
    return _;
  }).join("").match(yh).map(function(_) {
    if (_ === "''")
      return "'";
    var L = _[0];
    if (L === "'")
      return wh(_);
    var q = Pm[L];
    if (q)
      return !(n != null && n.useAdditionalWeekYearTokens) && Am(_) && Is(_, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Mm(_) && Is(_, t, String(e)), q(z, _, $.localize, B);
    if (L.match(Eh))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + L + "`");
    return _;
  }).join("");
  return j;
}
function wh(e) {
  var t = e.match(xh);
  return t ? t[1].replace(Oh, "'") : e;
}
function Th(e, t, n) {
  var r, a, i, s, l, c, u, d, f, p;
  at(2, arguments);
  var m = Et(e), x = Et(t), y = Vr(), v = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : y.locale) !== null && r !== void 0 ? r : xc, E = ln((i = (s = (l = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && l !== void 0 ? l : y.weekStartsOn) !== null && s !== void 0 ? s : (f = y.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && i !== void 0 ? i : 0);
  if (!v.localize)
    throw new RangeError("locale must contain localize property");
  if (!v.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!v.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var C = vm(m, x);
  if (isNaN(C))
    throw new RangeError("Invalid time value");
  var w;
  C < -6 ? w = "other" : C < -1 ? w = "lastWeek" : C < 0 ? w = "yesterday" : C < 1 ? w = "today" : C < 2 ? w = "tomorrow" : C < 7 ? w = "nextWeek" : w = "other";
  var b = $a(m, Mr(m)), g = $a(x, Mr(x)), I = v.formatRelative(w, b, g, {
    locale: v,
    weekStartsOn: E
  });
  return Oc(m, I, {
    locale: v,
    weekStartsOn: E
  });
}
function Sh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ia(e, t) {
  return Ia = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Ia(e, t);
}
var Ch = {
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
}, Ph = function(t, n, r) {
  var a, i = Ch[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + a : "hace " + a : a;
};
const Rh = Ph;
var $h = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Ih = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Nh = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, kh = {
  date: qn({
    formats: $h,
    defaultWidth: "full"
  }),
  time: qn({
    formats: Ih,
    defaultWidth: "full"
  }),
  dateTime: qn({
    formats: Nh,
    defaultWidth: "full"
  })
};
const Mh = kh;
var Ah = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, _h = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, Dh = function(t, n, r, a) {
  return n.getUTCHours() !== 1 ? _h[t] : Ah[t];
};
const jh = Dh;
var Fh = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, Lh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Wh = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, Bh = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, Uh = {
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
}, Vh = {
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
}, zh = function(t, n) {
  var r = Number(t);
  return r + "º";
}, qh = {
  ordinalNumber: zh,
  era: jt({
    values: Fh,
    defaultWidth: "wide"
  }),
  quarter: jt({
    values: Lh,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: jt({
    values: Wh,
    defaultWidth: "wide"
  }),
  day: jt({
    values: Bh,
    defaultWidth: "wide"
  }),
  dayPeriod: jt({
    values: Uh,
    defaultWidth: "wide",
    formattingValues: Vh,
    defaultFormattingWidth: "wide"
  })
};
const Hh = qh;
var Yh = /^(\d+)(º)?/i, Kh = /\d+/i, Gh = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Xh = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, Jh = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Qh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Zh = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, ev = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, tv = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, nv = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, rv = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, ov = {
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
}, av = {
  ordinalNumber: bc({
    matchPattern: Yh,
    parsePattern: Kh,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Ft({
    matchPatterns: Gh,
    defaultMatchWidth: "wide",
    parsePatterns: Xh,
    defaultParseWidth: "any"
  }),
  quarter: Ft({
    matchPatterns: Jh,
    defaultMatchWidth: "wide",
    parsePatterns: Qh,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Ft({
    matchPatterns: Zh,
    defaultMatchWidth: "wide",
    parsePatterns: ev,
    defaultParseWidth: "any"
  }),
  day: Ft({
    matchPatterns: tv,
    defaultMatchWidth: "wide",
    parsePatterns: nv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ft({
    matchPatterns: rv,
    defaultMatchWidth: "any",
    parsePatterns: ov,
    defaultParseWidth: "any"
  })
};
const iv = av;
var sv = {
  code: "es",
  formatDistance: Rh,
  formatLong: Mh,
  formatRelative: jh,
  localize: Hh,
  match: iv,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const lv = sv, cv = ({ isoDateTimeString: e, relative: t = !1, showTime: n = !0 }) => {
  const r = hc(e) ? e : new Date(e), a = n ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy";
  return t ? /* @__PURE__ */ S.jsx("span", { children: Th(r, /* @__PURE__ */ new Date(), {
    locale: lv
  }) }) : /* @__PURE__ */ S.jsx("span", { children: Oc(r, a) });
};
cv.propTypes = {
  isoDateTimeString: o.string.isRequired,
  relative: o.bool,
  showTime: o.bool
};
function uv({ money: e, ...t }) {
  return /* @__PURE__ */ S.jsx(on, { component: "span", fontSize: 14, ...t, children: Number(e).toLocaleString("es-AR", { style: "currency", currency: "ARS" }) });
}
uv.propTypes = {
  money: o.number.isRequired
};
const dv = ({ title: e, renderAside: t }) => /* @__PURE__ */ S.jsxs(
  rn,
  {
    display: "flex",
    direction: { sm: "row", xs: "column" },
    alignItems: { sm: "center", xs: "flex-start" },
    justifyContent: { sm: "space-between", xs: "flex-start" },
    marginBottom: 2,
    children: [
      /* @__PURE__ */ S.jsx(on, { fontWeight: "bold", fontSize: 24, children: e }),
      t && /* @__PURE__ */ S.jsx(rn, { mt: { xs: 2, sm: 0 }, children: t })
    ]
  }
);
dv.propTypes = {
  title: o.string.isRequired,
  renderAside: o.node
};
const ci = ({
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
  return /* @__PURE__ */ S.jsx(
    sd,
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
      children: /* @__PURE__ */ S.jsxs(ld, { sx: { position: "relative" }, children: [
        s && /* @__PURE__ */ S.jsx(Lr, {}),
        a ? /* @__PURE__ */ S.jsx(mc, { style: r, children: n }) : /* @__PURE__ */ S.jsx("div", { style: r, children: n }),
        /* @__PURE__ */ S.jsx(
          cd,
          {
            onClick: c,
            sx: {
              position: "absolute",
              top: 2,
              right: 2
            },
            children: /* @__PURE__ */ S.jsx(Od, {})
          }
        )
      ] })
    }
  );
};
ci.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired,
  children: o.node.isRequired,
  style: o.object,
  renderBox: o.bool,
  disableCloseOnBackdropClick: o.bool,
  isLoading: o.bool
};
const fv = ({ open: e, title: t, description: n, onConfirm: r, onCancel: a, isLoading: i, error: s, children: l, sx: c }) => {
  const u = () => {
    typeof r == "function" && r();
  }, d = () => {
    !i && a && a();
  };
  return /* @__PURE__ */ S.jsxs(
    ci,
    {
      open: e,
      onClose: d,
      sx: {
        margin: "0 auto",
        maxWidth: 400,
        ...c
      },
      children: [
        i && /* @__PURE__ */ S.jsx(Lr, {}),
        /* @__PURE__ */ S.jsx(on, { fontWeight: "bold", variant: "h6", mb: 1, children: /* @__PURE__ */ S.jsx("strong", { children: t ?? "" }) }),
        /* @__PURE__ */ S.jsx(Dl, { sx: { mb: 2 } }),
        /* @__PURE__ */ S.jsx(rn, { mb: 1, fontSize: 16, textAlign: "center", children: n ?? "" }),
        /* @__PURE__ */ S.jsxs(rn, { direction: "column", mb: 2, children: [
          l,
          s && /* @__PURE__ */ S.jsxs(rn, { alignItems: "center", direction: "row", mt: 1, children: [
            /* @__PURE__ */ S.jsx(Vl, { color: "error", sx: { marginRight: ".5rem", fontSize: "2rem" } }),
            /* @__PURE__ */ S.jsx(on, { color: "error", fontSize: "16px", children: typeof s == "string" ? s : "Ocurrió un error, intente nuevamente." })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "end"
            },
            children: [
              /* @__PURE__ */ S.jsx(Ea, { color: "secondary", onClick: d, disabled: i, children: "Cancelar" }),
              /* @__PURE__ */ S.jsx(Ea, { onClick: u, disabled: i, children: s ? "Reintentar" : "Confirmar" })
            ]
          }
        )
      ]
    }
  );
};
fv.propTypes = {
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
const pv = ({ open: e, onConfirm: t, children: n }) => {
  const r = () => {
    typeof t == "function" && t();
  };
  return /* @__PURE__ */ S.jsxs(
    ci,
    {
      open: e,
      onClose: r,
      style: {
        maxWidth: "400px"
      },
      children: [
        /* @__PURE__ */ S.jsx(on, { fontWeight: "bold", variant: "h6", mb: 1, color: "error", children: "Error" }),
        /* @__PURE__ */ S.jsx(Dl, { sx: { mb: 2 } }),
        /* @__PURE__ */ S.jsx(rn, { direction: "column", mb: 2, children: n && /* @__PURE__ */ S.jsxs(rn, { alignItems: "center", children: [
          /* @__PURE__ */ S.jsx(Vl, { color: "error", sx: { mb: "1rem", fontSize: "3rem" } }),
          /* @__PURE__ */ S.jsx(on, { color: "error", fontSize: "16px", textAlign: "center", children: n })
        ] }) }),
        /* @__PURE__ */ S.jsx(rn, { direction: "row", justifyContent: "end", children: /* @__PURE__ */ S.jsx(Ea, { onClick: r, children: "Aceptar" }) })
      ]
    }
  );
};
pv.propTypes = {
  open: o.bool.isRequired,
  onConfirm: o.func,
  children: o.node
};
function Ar(e) {
  return typeof e == "string";
}
function mv(e, t, n) {
  return e === void 0 || Ar(e) ? t : T({}, t, {
    ownerState: T({}, t.ownerState, n)
  });
}
const hv = {
  disableDefaultClasses: !1
}, vv = /* @__PURE__ */ h.createContext(hv);
function Ec(e) {
  const {
    disableDefaultClasses: t
  } = h.useContext(vv);
  return (n) => t ? "" : e(n);
}
function gv(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Na(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ns(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function yv(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: i
  } = e;
  if (!t) {
    const m = ge(a == null ? void 0 : a.className, r == null ? void 0 : r.className, i, n == null ? void 0 : n.className), x = T({}, n == null ? void 0 : n.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), y = T({}, n, a, r);
    return m.length > 0 && (y.className = m), Object.keys(x).length > 0 && (y.style = x), {
      props: y,
      internalRef: void 0
    };
  }
  const s = gv(T({}, a, r)), l = Ns(r), c = Ns(a), u = t(s), d = ge(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, a == null ? void 0 : a.className, r == null ? void 0 : r.className), f = T({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), p = T({}, u, n, c, l);
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
const bv = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Sn(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: i = !1
  } = e, s = ve(e, bv), l = i ? {} : Na(r, a), {
    props: c,
    internalRef: u
  } = yv(T({}, s, {
    externalSlotProps: l
  })), d = ot(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return mv(n, T({}, c, {
    ref: d
  }), a);
}
const xv = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ov(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Ev(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function wv(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ev(e));
}
function Tv(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(xv)).forEach((r, a) => {
    const i = Ov(r);
    i === -1 || !wv(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: a,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, a) => r.tabIndex === a.tabIndex ? r.documentOrder - a.documentOrder : r.tabIndex - a.tabIndex).map((r) => r.node).concat(t);
}
function Sv() {
  return !0;
}
function yo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: a = !1,
    getTabbable: i = Tv,
    isEnabled: s = Sv,
    open: l
  } = e, c = h.useRef(!1), u = h.useRef(null), d = h.useRef(null), f = h.useRef(null), p = h.useRef(null), m = h.useRef(!1), x = h.useRef(null), y = ot(t.ref, x), v = h.useRef(null);
  h.useEffect(() => {
    !l || !x.current || (m.current = !n);
  }, [n, l]), h.useEffect(() => {
    if (!l || !x.current)
      return;
    const w = dt(x.current);
    return x.current.contains(w.activeElement) || (x.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), x.current.setAttribute("tabIndex", "-1")), m.current && x.current.focus()), () => {
      a || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), h.useEffect(() => {
    if (!l || !x.current)
      return;
    const w = dt(x.current), b = ($) => {
      const {
        current: k
      } = x;
      if (k !== null) {
        if (!w.hasFocus() || r || !s() || c.current) {
          c.current = !1;
          return;
        }
        if (!k.contains(w.activeElement)) {
          if ($ && p.current !== $.target || w.activeElement !== p.current)
            p.current = null;
          else if (p.current !== null)
            return;
          if (!m.current)
            return;
          let M = [];
          if ((w.activeElement === u.current || w.activeElement === d.current) && (M = i(x.current)), M.length > 0) {
            var W, A;
            const z = !!((W = v.current) != null && W.shiftKey && ((A = v.current) == null ? void 0 : A.key) === "Tab"), B = M[0], j = M[M.length - 1];
            typeof B != "string" && typeof j != "string" && (z ? j.focus() : B.focus());
          } else
            k.focus();
        }
      }
    }, g = ($) => {
      v.current = $, !(r || !s() || $.key !== "Tab") && w.activeElement === x.current && $.shiftKey && (c.current = !0, d.current && d.current.focus());
    };
    w.addEventListener("focusin", b), w.addEventListener("keydown", g, !0);
    const I = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && b(null);
    }, 50);
    return () => {
      clearInterval(I), w.removeEventListener("focusin", b), w.removeEventListener("keydown", g, !0);
    };
  }, [n, r, a, s, l, i]);
  const E = (w) => {
    f.current === null && (f.current = w.relatedTarget), m.current = !0, p.current = w.target;
    const b = t.props.onFocus;
    b && b(w);
  }, C = (w) => {
    f.current === null && (f.current = w.relatedTarget), m.current = !0;
  };
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: y,
      onFocus: E
    }), /* @__PURE__ */ S.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (yo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Wr,
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
process.env.NODE_ENV !== "production" && (yo["propTypes"] = Ql(yo.propTypes));
var mt = "top", Pt = "bottom", Rt = "right", ht = "left", ui = "auto", zr = [mt, Pt, Rt, ht], Yn = "start", _r = "end", Cv = "clippingParents", wc = "viewport", mr = "popper", Pv = "reference", ks = /* @__PURE__ */ zr.reduce(function(e, t) {
  return e.concat([t + "-" + Yn, t + "-" + _r]);
}, []), Tc = /* @__PURE__ */ [].concat(zr, [ui]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yn, t + "-" + _r]);
}, []), Rv = "beforeRead", $v = "read", Iv = "afterRead", Nv = "beforeMain", kv = "main", Mv = "afterMain", Av = "beforeWrite", _v = "write", Dv = "afterWrite", jv = [Rv, $v, Iv, Nv, kv, Mv, Av, _v, Dv];
function Ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Cn(e) {
  var t = wt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ct(e) {
  var t = wt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function di(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = wt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Fv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Ct(i) || !Ut(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(s) {
      var l = a[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Lv(e) {
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
      !Ct(a) || !Ut(a) || (Object.assign(a.style, l), Object.keys(i).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
const Wv = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Fv,
  effect: Lv,
  requires: ["computeStyles"]
};
function Wt(e) {
  return e.split("-")[0];
}
var xn = Math.max, bo = Math.min, Kn = Math.round;
function ka() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Sc() {
  return !/^((?!chrome|android).)*safari/i.test(ka());
}
function Gn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && Ct(e) && (a = e.offsetWidth > 0 && Kn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Kn(r.height) / e.offsetHeight || 1);
  var s = Cn(e) ? wt(e) : window, l = s.visualViewport, c = !Sc() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / a, d = (r.top + (c && l ? l.offsetTop : 0)) / i, f = r.width / a, p = r.height / i;
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
function fi(e) {
  var t = Gn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Cc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && di(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Kt(e) {
  return wt(e).getComputedStyle(e);
}
function Bv(e) {
  return ["table", "td", "th"].indexOf(Ut(e)) >= 0;
}
function dn(e) {
  return ((Cn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Wo(e) {
  return Ut(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (di(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    dn(e)
  );
}
function Ms(e) {
  return !Ct(e) || // https://github.com/popperjs/popper-core/issues/837
  Kt(e).position === "fixed" ? null : e.offsetParent;
}
function Uv(e) {
  var t = /firefox/i.test(ka()), n = /Trident/i.test(ka());
  if (n && Ct(e)) {
    var r = Kt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Wo(e);
  for (di(a) && (a = a.host); Ct(a) && ["html", "body"].indexOf(Ut(a)) < 0; ) {
    var i = Kt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function qr(e) {
  for (var t = wt(e), n = Ms(e); n && Bv(n) && Kt(n).position === "static"; )
    n = Ms(n);
  return n && (Ut(n) === "html" || Ut(n) === "body" && Kt(n).position === "static") ? t : n || Uv(e) || t;
}
function pi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Er(e, t, n) {
  return xn(e, bo(t, n));
}
function Vv(e, t, n) {
  var r = Er(e, t, n);
  return r > n ? n : r;
}
function Pc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Rc(e) {
  return Object.assign({}, Pc(), e);
}
function $c(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var zv = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Rc(typeof t != "number" ? t : $c(t, zr));
};
function qv(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Wt(n.placement), c = pi(l), u = [ht, Rt].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var f = zv(a.padding, n), p = fi(i), m = c === "y" ? mt : ht, x = c === "y" ? Pt : Rt, y = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], v = s[c] - n.rects.reference[c], E = qr(i), C = E ? c === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, w = y / 2 - v / 2, b = f[m], g = C - p[d] - f[x], I = C / 2 - p[d] / 2 + w, $ = Er(b, I, g), k = c;
    n.modifiersData[r] = (t = {}, t[k] = $, t.centerOffset = $ - I, t);
  }
}
function Hv(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Cc(t.elements.popper, a) && (t.elements.arrow = a));
}
const Yv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: qv,
  effect: Hv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Xn(e) {
  return e.split("-")[1];
}
var Kv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gv(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: Kn(n * a) / a || 0,
    y: Kn(r * a) / a || 0
  };
}
function As(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = s.x, m = p === void 0 ? 0 : p, x = s.y, y = x === void 0 ? 0 : x, v = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = v.x, y = v.y;
  var E = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), w = ht, b = mt, g = window;
  if (u) {
    var I = qr(n), $ = "clientHeight", k = "clientWidth";
    if (I === wt(n) && (I = dn(n), Kt(I).position !== "static" && l === "absolute" && ($ = "scrollHeight", k = "scrollWidth")), I = I, a === mt || (a === ht || a === Rt) && i === _r) {
      b = Pt;
      var W = f && I === g && g.visualViewport ? g.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[$]
      );
      y -= W - r.height, y *= c ? 1 : -1;
    }
    if (a === ht || (a === mt || a === Pt) && i === _r) {
      w = Rt;
      var A = f && I === g && g.visualViewport ? g.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[k]
      );
      m -= A - r.width, m *= c ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && Kv), z = d === !0 ? Gv({
    x: m,
    y
  }, wt(n)) : {
    x: m,
    y
  };
  if (m = z.x, y = z.y, c) {
    var B;
    return Object.assign({}, M, (B = {}, B[b] = C ? "0" : "", B[w] = E ? "0" : "", B.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", B));
  }
  return Object.assign({}, M, (t = {}, t[b] = C ? y + "px" : "", t[w] = E ? m + "px" : "", t.transform = "", t));
}
function Xv(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Wt(t.placement),
    variation: Xn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, As(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, As(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Jv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Xv,
  data: {}
};
var Zr = {
  passive: !0
};
function Qv(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, s = r.resize, l = s === void 0 ? !0 : s, c = wt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Zr);
  }), l && c.addEventListener("resize", n.update, Zr), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Zr);
    }), l && c.removeEventListener("resize", n.update, Zr);
  };
}
const Zv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Qv,
  data: {}
};
var eg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function so(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return eg[t];
  });
}
var tg = {
  start: "end",
  end: "start"
};
function _s(e) {
  return e.replace(/start|end/g, function(t) {
    return tg[t];
  });
}
function mi(e) {
  var t = wt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function hi(e) {
  return Gn(dn(e)).left + mi(e).scrollLeft;
}
function ng(e, t) {
  var n = wt(e), r = dn(e), a = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (a) {
    i = a.width, s = a.height;
    var u = Sc();
    (u || !u && t === "fixed") && (l = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + hi(e),
    y: c
  };
}
function rg(e) {
  var t, n = dn(e), r = mi(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = xn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = xn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + hi(e), c = -r.scrollTop;
  return Kt(a || n).direction === "rtl" && (l += xn(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function vi(e) {
  var t = Kt(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Ic(e) {
  return ["html", "body", "#document"].indexOf(Ut(e)) >= 0 ? e.ownerDocument.body : Ct(e) && vi(e) ? e : Ic(Wo(e));
}
function wr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ic(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = wt(r), s = a ? [i].concat(i.visualViewport || [], vi(r) ? r : []) : r, l = t.concat(s);
  return a ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(wr(Wo(s)))
  );
}
function Ma(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function og(e, t) {
  var n = Gn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ds(e, t, n) {
  return t === wc ? Ma(ng(e, n)) : Cn(t) ? og(t, n) : Ma(rg(dn(e)));
}
function ag(e) {
  var t = wr(Wo(e)), n = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, r = n && Ct(e) ? qr(e) : e;
  return Cn(r) ? t.filter(function(a) {
    return Cn(a) && Cc(a, r) && Ut(a) !== "body";
  }) : [];
}
function ig(e, t, n, r) {
  var a = t === "clippingParents" ? ag(e) : [].concat(t), i = [].concat(a, [n]), s = i[0], l = i.reduce(function(c, u) {
    var d = Ds(e, u, r);
    return c.top = xn(d.top, c.top), c.right = bo(d.right, c.right), c.bottom = bo(d.bottom, c.bottom), c.left = xn(d.left, c.left), c;
  }, Ds(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Nc(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? Wt(r) : null, i = r ? Xn(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (a) {
    case mt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Pt:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Rt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ht:
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
  var u = a ? pi(a) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Yn:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case _r:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Dr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, c = l === void 0 ? Cv : l, u = n.rootBoundary, d = u === void 0 ? wc : u, f = n.elementContext, p = f === void 0 ? mr : f, m = n.altBoundary, x = m === void 0 ? !1 : m, y = n.padding, v = y === void 0 ? 0 : y, E = Rc(typeof v != "number" ? v : $c(v, zr)), C = p === mr ? Pv : mr, w = e.rects.popper, b = e.elements[x ? C : p], g = ig(Cn(b) ? b : b.contextElement || dn(e.elements.popper), c, d, s), I = Gn(e.elements.reference), $ = Nc({
    reference: I,
    element: w,
    strategy: "absolute",
    placement: a
  }), k = Ma(Object.assign({}, w, $)), W = p === mr ? k : I, A = {
    top: g.top - W.top + E.top,
    bottom: W.bottom - g.bottom + E.bottom,
    left: g.left - W.left + E.left,
    right: W.right - g.right + E.right
  }, M = e.modifiersData.offset;
  if (p === mr && M) {
    var z = M[a];
    Object.keys(A).forEach(function(B) {
      var j = [Rt, Pt].indexOf(B) >= 0 ? 1 : -1, _ = [mt, Pt].indexOf(B) >= 0 ? "y" : "x";
      A[B] += z[_] * j;
    });
  }
  return A;
}
function sg(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Tc : c, d = Xn(r), f = d ? l ? ks : ks.filter(function(x) {
    return Xn(x) === d;
  }) : zr, p = f.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  p.length === 0 && (p = f);
  var m = p.reduce(function(x, y) {
    return x[y] = Dr(e, {
      placement: y,
      boundary: a,
      rootBoundary: i,
      padding: s
    })[Wt(y)], x;
  }, {});
  return Object.keys(m).sort(function(x, y) {
    return m[x] - m[y];
  });
}
function lg(e) {
  if (Wt(e) === ui)
    return [];
  var t = so(e);
  return [_s(e), t, _s(t)];
}
function cg(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, x = m === void 0 ? !0 : m, y = n.allowedAutoPlacements, v = t.options.placement, E = Wt(v), C = E === v, w = c || (C || !x ? [so(v)] : lg(v)), b = [v].concat(w).reduce(function(K, X) {
      return K.concat(Wt(X) === ui ? sg(t, {
        placement: X,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: y
      }) : X);
    }, []), g = t.rects.reference, I = t.rects.popper, $ = /* @__PURE__ */ new Map(), k = !0, W = b[0], A = 0; A < b.length; A++) {
      var M = b[A], z = Wt(M), B = Xn(M) === Yn, j = [mt, Pt].indexOf(z) >= 0, _ = j ? "width" : "height", L = Dr(t, {
        placement: M,
        boundary: d,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), q = j ? B ? Rt : ht : B ? Pt : mt;
      g[_] > I[_] && (q = so(q));
      var se = so(q), te = [];
      if (i && te.push(L[z] <= 0), l && te.push(L[q] <= 0, L[se] <= 0), te.every(function(K) {
        return K;
      })) {
        W = M, k = !1;
        break;
      }
      $.set(M, te);
    }
    if (k)
      for (var N = x ? 3 : 1, H = function(X) {
        var J = b.find(function(G) {
          var re = $.get(G);
          if (re)
            return re.slice(0, X).every(function(ae) {
              return ae;
            });
        });
        if (J)
          return W = J, "break";
      }, ne = N; ne > 0; ne--) {
        var Z = H(ne);
        if (Z === "break")
          break;
      }
    t.placement !== W && (t.modifiersData[r]._skip = !0, t.placement = W, t.reset = !0);
  }
}
const ug = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function js(e, t, n) {
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
function Fs(e) {
  return [mt, Rt, Pt, ht].some(function(t) {
    return e[t] >= 0;
  });
}
function dg(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, s = Dr(t, {
    elementContext: "reference"
  }), l = Dr(t, {
    altBoundary: !0
  }), c = js(s, r), u = js(l, a, i), d = Fs(c), f = Fs(u);
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
const fg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: dg
};
function pg(e, t, n) {
  var r = Wt(e), a = [ht, mt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * a, [ht, Rt].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function mg(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, s = Tc.reduce(function(d, f) {
    return d[f] = pg(f, t.rects, i), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const hg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: mg
};
function vg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Nc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: vg,
  data: {}
};
function yg(e) {
  return e === "x" ? "y" : "x";
}
function bg(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, m = p === void 0 ? !0 : p, x = n.tetherOffset, y = x === void 0 ? 0 : x, v = Dr(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), E = Wt(t.placement), C = Xn(t.placement), w = !C, b = pi(E), g = yg(b), I = t.modifiersData.popperOffsets, $ = t.rects.reference, k = t.rects.popper, W = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, A = typeof W == "number" ? {
    mainAxis: W,
    altAxis: W
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, W), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (I) {
    if (i) {
      var B, j = b === "y" ? mt : ht, _ = b === "y" ? Pt : Rt, L = b === "y" ? "height" : "width", q = I[b], se = q + v[j], te = q - v[_], N = m ? -k[L] / 2 : 0, H = C === Yn ? $[L] : k[L], ne = C === Yn ? -k[L] : -$[L], Z = t.elements.arrow, K = m && Z ? fi(Z) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pc(), J = X[j], G = X[_], re = Er(0, $[L], K[L]), ae = w ? $[L] / 2 - N - re - J - A.mainAxis : H - re - J - A.mainAxis, de = w ? -$[L] / 2 + N + re + G + A.mainAxis : ne + re + G + A.mainAxis, ie = t.elements.arrow && qr(t.elements.arrow), F = ie ? b === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, he = (B = M == null ? void 0 : M[b]) != null ? B : 0, V = q + ae - he - F, Q = q + de - he, Re = Er(m ? bo(se, V) : se, q, m ? xn(te, Q) : te);
      I[b] = Re, z[b] = Re - q;
    }
    if (l) {
      var ue, We = b === "x" ? mt : ht, Be = b === "x" ? Pt : Rt, $e = I[g], Ee = g === "y" ? "height" : "width", je = $e + v[We], Se = $e - v[Be], Ke = [mt, ht].indexOf(E) !== -1, Ge = (ue = M == null ? void 0 : M[g]) != null ? ue : 0, Qe = Ke ? je : $e - $[Ee] - k[Ee] - Ge + A.altAxis, Ce = Ke ? $e + $[Ee] + k[Ee] - Ge - A.altAxis : Se, pe = m && Ke ? Vv(Qe, $e, Ce) : Er(m ? Qe : je, $e, m ? Ce : Se);
      I[g] = pe, z[g] = pe - $e;
    }
    t.modifiersData[r] = z;
  }
}
const xg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bg,
  requiresIfExists: ["offset"]
};
function Og(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Eg(e) {
  return e === wt(e) || !Ct(e) ? mi(e) : Og(e);
}
function wg(e) {
  var t = e.getBoundingClientRect(), n = Kn(t.width) / e.offsetWidth || 1, r = Kn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Tg(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ct(t), a = Ct(t) && wg(t), i = dn(t), s = Gn(e, a, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ut(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  vi(i)) && (l = Eg(t)), Ct(t) ? (c = Gn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = hi(i))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Sg(e) {
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
function Cg(e) {
  var t = Sg(e);
  return jv.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Pg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Rg(e) {
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
var Ls = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ws() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function $g(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Ls : a;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ls, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, m = {
      state: d,
      setOptions: function(E) {
        var C = typeof E == "function" ? E(d.options) : E;
        y(), d.options = Object.assign({}, i, d.options, C), d.scrollParents = {
          reference: Cn(l) ? wr(l) : l.contextElement ? wr(l.contextElement) : [],
          popper: wr(c)
        };
        var w = Cg(Rg([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(b) {
          return b.enabled;
        }), x(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var E = d.elements, C = E.reference, w = E.popper;
          if (Ws(C, w)) {
            d.rects = {
              reference: Tg(C, qr(w), d.options.strategy === "fixed"),
              popper: fi(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(A) {
              return d.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var b = 0; b < d.orderedModifiers.length; b++) {
              if (d.reset === !0) {
                d.reset = !1, b = -1;
                continue;
              }
              var g = d.orderedModifiers[b], I = g.fn, $ = g.options, k = $ === void 0 ? {} : $, W = g.name;
              typeof I == "function" && (d = I({
                state: d,
                options: k,
                name: W,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pg(function() {
        return new Promise(function(v) {
          m.forceUpdate(), v(d);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!Ws(l, c))
      return m;
    m.setOptions(u).then(function(v) {
      !p && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function x() {
      d.orderedModifiers.forEach(function(v) {
        var E = v.name, C = v.options, w = C === void 0 ? {} : C, b = v.effect;
        if (typeof b == "function") {
          var g = b({
            state: d,
            name: E,
            instance: m,
            options: w
          }), I = function() {
          };
          f.push(g || I);
        }
      });
    }
    function y() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return m;
  };
}
var Ig = [Zv, gg, Jv, Wv, hg, ug, xg, Yv, fg], Ng = /* @__PURE__ */ $g({
  defaultModifiers: Ig
});
function kg(e) {
  return typeof e == "function" ? e() : e;
}
const jr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    children: r,
    container: a,
    disablePortal: i = !1
  } = t, [s, l] = h.useState(null), c = ot(/* @__PURE__ */ h.isValidElement(r) ? r.ref : null, n);
  if (sn(() => {
    i || l(kg(a) || document.body);
  }, [a, i]), sn(() => {
    if (s && !i)
      return po(n, s), () => {
        po(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ h.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ h.cloneElement(r, u);
    }
    return /* @__PURE__ */ S.jsx(h.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ S.jsx(h.Fragment, {
    children: s && /* @__PURE__ */ ql.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (jr.propTypes = {
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
  container: o.oneOfType([Bt, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (jr["propTypes"] = Ql(jr.propTypes));
function Mg(e) {
  return Le("MuiPopper", e);
}
Ue("MuiPopper", ["root"]);
const Ag = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], _g = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Dg(e, t) {
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
function xo(e) {
  return typeof e == "function" ? e() : e;
}
function Bo(e) {
  return e.nodeType !== void 0;
}
function jg(e) {
  return !Bo(e);
}
const Fg = () => ze({
  root: ["root"]
}, Ec(Mg)), Lg = {}, Wg = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slotProps: m = {},
    slots: x = {},
    TransitionProps: y
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, v = ve(t, Ag), E = h.useRef(null), C = ot(E, n), w = h.useRef(null), b = ot(w, p), g = h.useRef(b);
  sn(() => {
    g.current = b;
  }, [b]), h.useImperativeHandle(p, () => w.current, []);
  const I = Dg(d, s), [$, k] = h.useState(I), [W, A] = h.useState(xo(a));
  h.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), h.useEffect(() => {
    a && A(xo(a));
  }, [a]), sn(() => {
    if (!W || !u)
      return;
    const _ = (se) => {
      k(se.placement);
    };
    if (process.env.NODE_ENV !== "production" && W && Bo(W) && W.nodeType === 1) {
      const se = W.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && se.top === 0 && se.left === 0 && se.right === 0 && se.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let L = [{
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
        _(se);
      }
    }];
    c != null && (L = L.concat(c)), f && f.modifiers != null && (L = L.concat(f.modifiers));
    const q = Ng(W, E.current, T({
      placement: I
    }, f, {
      modifiers: L
    }));
    return g.current(q), () => {
      q.destroy(), g.current(null);
    };
  }, [W, l, c, u, f, I]);
  const M = {
    placement: $
  };
  y !== null && (M.TransitionProps = y);
  const z = Fg(), B = (r = x.root) != null ? r : "div", j = Sn({
    elementType: B,
    externalSlotProps: m.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: z.root
  });
  return /* @__PURE__ */ S.jsx(B, T({}, j, {
    children: typeof i == "function" ? i(M) : i
  }));
}), kc = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    popperOptions: p = Lg,
    popperRef: m,
    style: x,
    transition: y = !1,
    slotProps: v = {},
    slots: E = {}
  } = t, C = ve(t, _g), [w, b] = h.useState(!0), g = () => {
    b(!1);
  }, I = () => {
    b(!0);
  };
  if (!c && !d && (!y || w))
    return null;
  let $;
  if (i)
    $ = i;
  else if (r) {
    const A = xo(r);
    $ = A && Bo(A) ? dt(A).body : dt(null).body;
  }
  const k = !d && c && (!y || w) ? "none" : void 0, W = y ? {
    in: d,
    onEnter: g,
    onExited: I
  } : void 0;
  return /* @__PURE__ */ S.jsx(jr, {
    disablePortal: l,
    container: $,
    children: /* @__PURE__ */ S.jsx(Wg, T({
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: y ? !w : d,
      placement: f,
      popperOptions: p,
      popperRef: m,
      slotProps: v,
      slots: E
    }, C, {
      style: T({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: k
      }, x),
      TransitionProps: W,
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (kc.propTypes = {
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
  anchorEl: Ht(o.oneOfType([Bt, o.object, o.func]), (e) => {
    if (e.open) {
      const t = xo(e.anchorEl);
      if (t && Bo(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || jg(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: o.oneOfType([Bt, o.func]),
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
  popperRef: Nt,
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
function Bg(e) {
  const t = dt(e);
  return t.body === e ? wn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Tr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Bs(e) {
  return parseInt(wn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ug(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Us(e, t, n, r, a) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1, c = !Ug(s);
    l && c && Tr(s, a);
  });
}
function aa(e, t) {
  let n = -1;
  return e.some((r, a) => t(r) ? (n = a, !0) : !1), n;
}
function Vg(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Bg(r)) {
      const s = nc(dt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Bs(r) + s}px`;
      const l = dt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Bs(c) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = dt(r).body;
    else {
      const s = r.parentElement, l = wn(r);
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
function zg(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class qg {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Tr(t.modalRef, !1);
    const a = zg(n);
    Us(n, t.mount, t.modalRef, a, !0);
    const i = aa(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: a
    }), r);
  }
  mount(t, n) {
    const r = aa(this.containers, (i) => i.modals.indexOf(t) !== -1), a = this.containers[r];
    a.restore || (a.restore = Vg(a, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const a = aa(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[a];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Tr(t.modalRef, n), Us(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(a, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Tr(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Hg(e) {
  return Le("MuiModal", e);
}
Ue("MuiModal", ["root", "hidden", "backdrop"]);
const Yg = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], Kg = (e) => {
  const {
    open: t,
    exited: n
  } = e;
  return ze({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Ec(Hg));
};
function Gg(e) {
  return typeof e == "function" ? e() : e;
}
function Xg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Jg = new qg(), Mc = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    disableScrollLock: m = !1,
    hideBackdrop: x = !1,
    keepMounted: y = !1,
    // private
    manager: v = Jg,
    onBackdropClick: E,
    onClose: C,
    onKeyDown: w,
    open: b,
    onTransitionEnter: g,
    onTransitionExited: I,
    slotProps: $ = {},
    slots: k = {}
  } = t, W = ve(t, Yg), A = v, [M, z] = h.useState(!b), B = h.useRef({}), j = h.useRef(null), _ = h.useRef(null), L = ot(_, n), q = Xg(i), se = (r = t["aria-hidden"]) != null ? r : !0, te = () => dt(j.current), N = () => (B.current.modalRef = _.current, B.current.mountNode = j.current, B.current), H = () => {
    A.mount(N(), {
      disableScrollLock: m
    }), _.current && (_.current.scrollTop = 0);
  }, ne = Lt(() => {
    const ue = Gg(l) || te().body;
    A.add(N(), ue), _.current && H();
  }), Z = h.useCallback(() => A.isTopModal(N()), [A]), K = Lt((ue) => {
    j.current = ue, !(!ue || !_.current) && (b && Z() ? H() : Tr(_.current, se));
  }), X = h.useCallback(() => {
    A.remove(N(), se);
  }, [A, se]);
  h.useEffect(() => () => {
    X();
  }, [X]), h.useEffect(() => {
    b ? ne() : (!q || !s) && X();
  }, [b, X, q, s, ne]);
  const J = T({}, t, {
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: u,
    disableEscapeKeyDown: d,
    disablePortal: f,
    disableRestoreFocus: p,
    disableScrollLock: m,
    exited: M,
    hideBackdrop: x,
    keepMounted: y
  }), G = Kg(J), re = () => {
    z(!1), g && g();
  }, ae = () => {
    z(!0), I && I(), s && X();
  }, de = (ue) => {
    ue.target === ue.currentTarget && (E && E(ue), C && C(ue, "backdropClick"));
  }, ie = (ue) => {
    w && w(ue), !(ue.key !== "Escape" || !Z()) && (d || (ue.stopPropagation(), C && C(ue, "escapeKeyDown")));
  }, F = {};
  i.props.tabIndex === void 0 && (F.tabIndex = "-1"), q && (F.onEnter = cs(re, i.props.onEnter), F.onExited = cs(ae, i.props.onExited));
  const he = (a = k.root) != null ? a : "div", V = Sn({
    elementType: he,
    externalSlotProps: $.root,
    externalForwardedProps: W,
    additionalProps: {
      ref: L,
      role: "presentation",
      onKeyDown: ie
    },
    className: G.root,
    ownerState: J
  }), Q = k.backdrop, Re = Sn({
    elementType: Q,
    externalSlotProps: $.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: de,
      open: b
    },
    className: G.backdrop,
    ownerState: J
  });
  return !y && !b && (!q || M) ? null : /* @__PURE__ */ S.jsx(
    jr,
    {
      ref: K,
      container: l,
      disablePortal: f,
      children: /* @__PURE__ */ S.jsxs(he, T({}, V, {
        children: [!x && Q ? /* @__PURE__ */ S.jsx(Q, T({}, Re)) : null, /* @__PURE__ */ S.jsx(yo, {
          disableEnforceFocus: u,
          disableAutoFocus: c,
          disableRestoreFocus: p,
          isEnabled: Z,
          open: b,
          children: /* @__PURE__ */ h.cloneElement(i, F)
        })]
      }))
    }
  );
});
process.env.NODE_ENV !== "production" && (Mc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Wr.isRequired,
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
  container: o.oneOfType([Bt, o.func]),
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
const Qg = ["onChange", "maxRows", "minRows", "style", "value"];
function eo(e) {
  return parseInt(e, 10) || 0;
}
const Zg = {
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
function Vs(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const Ac = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: a,
    minRows: i = 1,
    style: s,
    value: l
  } = t, c = ve(t, Qg), {
    current: u
  } = h.useRef(l != null), d = h.useRef(null), f = ot(n, d), p = h.useRef(null), m = h.useRef(0), [x, y] = h.useState({
    outerHeightStyle: 0
  }), v = h.useCallback(() => {
    const g = d.current, $ = wn(g).getComputedStyle(g);
    if ($.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const k = p.current;
    k.style.width = $.width, k.value = g.value || t.placeholder || "x", k.value.slice(-1) === `
` && (k.value += " ");
    const W = $.boxSizing, A = eo($.paddingBottom) + eo($.paddingTop), M = eo($.borderBottomWidth) + eo($.borderTopWidth), z = k.scrollHeight;
    k.value = "x";
    const B = k.scrollHeight;
    let j = z;
    i && (j = Math.max(Number(i) * B, j)), a && (j = Math.min(Number(a) * B, j)), j = Math.max(j, B);
    const _ = j + (W === "border-box" ? A + M : 0), L = Math.abs(j - z) <= 1;
    return {
      outerHeightStyle: _,
      overflow: L
    };
  }, [a, i, t.placeholder]), E = (g, I) => {
    const {
      outerHeightStyle: $,
      overflow: k
    } = I;
    return m.current < 20 && ($ > 0 && Math.abs((g.outerHeightStyle || 0) - $) > 1 || g.overflow !== k) ? (m.current += 1, {
      overflow: k,
      outerHeightStyle: $
    }) : (process.env.NODE_ENV !== "production" && m.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), g);
  }, C = h.useCallback(() => {
    const g = v();
    Vs(g) || y((I) => E(I, g));
  }, [v]), w = () => {
    const g = v();
    Vs(g) || ql.flushSync(() => {
      y((I) => E(I, g));
    });
  };
  h.useEffect(() => {
    const g = ec(() => {
      m.current = 0, d.current && w();
    });
    let I;
    const $ = d.current, k = wn($);
    return k.addEventListener("resize", g), typeof ResizeObserver < "u" && (I = new ResizeObserver(g), I.observe($)), () => {
      g.clear(), k.removeEventListener("resize", g), I && I.disconnect();
    };
  }), sn(() => {
    C();
  }), h.useEffect(() => {
    m.current = 0;
  }, [l]);
  const b = (g) => {
    m.current = 0, u || C(), r && r(g);
  };
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx("textarea", T({
      value: l,
      onChange: b,
      ref: f,
      rows: i,
      style: T({
        height: x.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: x.overflow ? "hidden" : void 0
      }, s)
    }, c)), /* @__PURE__ */ S.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: p,
      tabIndex: -1,
      style: T({}, Zg.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ac.propTypes = {
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
function zs(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function _c(e = {}) {
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
    n && (d = d.toLowerCase()), t && (d = zs(d));
    const f = d ? l.filter((p) => {
      let m = (i || u)(p);
      return n && (m = m.toLowerCase()), t && (m = zs(m)), a === "start" ? m.indexOf(d) === 0 : m.indexOf(d) > -1;
    }) : l;
    return typeof r == "number" ? f.slice(0, r) : f;
  };
}
function ia(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const ey = _c(), qs = 5, ty = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function ny(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = ty,
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
    disabled: m,
    disabledItemsFocusable: x = !1,
    disableListWrap: y = !1,
    filterOptions: v = ey,
    filterSelectedOptions: E = !1,
    freeSolo: C = !1,
    getOptionDisabled: w,
    getOptionLabel: b = (P) => {
      var R;
      return (R = P.label) != null ? R : P;
    },
    groupBy: g,
    handleHomeEndKeys: I = !e.freeSolo,
    id: $,
    includeInputInList: k = !1,
    inputValue: W,
    isOptionEqualToValue: A = (P, R) => P === R,
    multiple: M = !1,
    onChange: z,
    onClose: B,
    onHighlightChange: j,
    onInputChange: _,
    onOpen: L,
    open: q,
    openOnFocus: se = !1,
    options: te,
    readOnly: N = !1,
    selectOnFocus: H = !e.freeSolo,
    value: ne
  } = e, Z = tc($);
  let K = b;
  K = (P) => {
    const R = b(P);
    if (typeof R != "string") {
      if (process.env.NODE_ENV !== "production") {
        const D = R === void 0 ? "undefined" : `${typeof R} (${R})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${D} instead of a string for ${JSON.stringify(P)}.`);
      }
      return String(R);
    }
    return R;
  };
  const X = h.useRef(!1), J = h.useRef(!0), G = h.useRef(null), re = h.useRef(null), [ae, de] = h.useState(null), [ie, F] = h.useState(-1), he = a ? 0 : -1, V = h.useRef(he), [Q, Re] = br({
    controlled: ne,
    default: d,
    name: u
  }), [ue, We] = br({
    controlled: W,
    default: "",
    name: u,
    state: "inputValue"
  }), [Be, $e] = h.useState(!1), Ee = h.useCallback((P, R) => {
    if (!(M ? Q.length < R.length : R !== null) && !l)
      return;
    let Y;
    if (M)
      Y = "";
    else if (R == null)
      Y = "";
    else {
      const oe = K(R);
      Y = typeof oe == "string" ? oe : "";
    }
    ue !== Y && (We(Y), _ && _(P, Y, "reset"));
  }, [K, ue, M, _, We, l, Q]), [je, Se] = br({
    controlled: q,
    default: !1,
    name: u,
    state: "open"
  }), [Ke, Ge] = h.useState(!0), Qe = !M && Q != null && ue === K(Q), Ce = je && !N, pe = Ce ? v(
    te.filter((P) => !(E && (M ? Q : [Q]).some((R) => R !== null && A(P, R)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Qe && Ke ? "" : ue,
      getOptionLabel: K
    }
  ) : [], le = rf({
    filteredOptions: pe,
    value: Q,
    inputValue: ue
  });
  h.useEffect(() => {
    const P = Q !== le.value;
    Be && !P || C && !P || Ee(null, Q);
  }, [Q, Ee, Be, le.value, C]);
  const et = je && pe.length > 0 && !N;
  if (process.env.NODE_ENV !== "production" && Q !== null && !C && te.length > 0) {
    const P = (M ? Q : [Q]).filter((R) => !te.some((D) => A(D, R)));
    P.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${P.length > 1 ? JSON.stringify(P) : JSON.stringify(P[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const ce = Lt((P) => {
    P === -1 ? G.current.focus() : ae.querySelector(`[data-tag-index="${P}"]`).focus();
  });
  h.useEffect(() => {
    M && ie > Q.length - 1 && (F(-1), ce(-1));
  }, [Q, M, ie, ce]);
  function ye(P, R) {
    if (!re.current || P === -1)
      return -1;
    let D = P;
    for (; ; ) {
      if (R === "next" && D === pe.length || R === "previous" && D === -1)
        return -1;
      const Y = re.current.querySelector(`[data-option-index="${D}"]`), oe = x ? !1 : !Y || Y.disabled || Y.getAttribute("aria-disabled") === "true";
      if (Y && !Y.hasAttribute("tabindex") || oe)
        D += R === "next" ? 1 : -1;
      else
        return D;
    }
  }
  const Pe = Lt(({
    event: P,
    index: R,
    reason: D = "auto"
  }) => {
    if (V.current = R, R === -1 ? G.current.removeAttribute("aria-activedescendant") : G.current.setAttribute("aria-activedescendant", `${Z}-option-${R}`), j && j(P, R === -1 ? null : pe[R], D), !re.current)
      return;
    const Y = re.current.querySelector(`[role="option"].${n}-focused`);
    Y && (Y.classList.remove(`${n}-focused`), Y.classList.remove(`${n}-focusVisible`));
    let oe = re.current;
    if (re.current.getAttribute("role") !== "listbox" && (oe = re.current.parentElement.querySelector('[role="listbox"]')), !oe)
      return;
    if (R === -1) {
      oe.scrollTop = 0;
      return;
    }
    const be = re.current.querySelector(`[data-option-index="${R}"]`);
    if (be && (be.classList.add(`${n}-focused`), D === "keyboard" && be.classList.add(`${n}-focusVisible`), oe.scrollHeight > oe.clientHeight && D !== "mouse" && D !== "touch")) {
      const xe = be, Te = oe.clientHeight + oe.scrollTop, it = xe.offsetTop + xe.offsetHeight;
      it > Te ? oe.scrollTop = it - oe.clientHeight : xe.offsetTop - xe.offsetHeight * (g ? 1.3 : 0) < oe.scrollTop && (oe.scrollTop = xe.offsetTop - xe.offsetHeight * (g ? 1.3 : 0));
    }
  }), Xe = Lt(({
    event: P,
    diff: R,
    direction: D = "next",
    reason: Y = "auto"
  }) => {
    if (!Ce)
      return;
    const be = ye((() => {
      const xe = pe.length - 1;
      if (R === "reset")
        return he;
      if (R === "start")
        return 0;
      if (R === "end")
        return xe;
      const Te = V.current + R;
      return Te < 0 ? Te === -1 && k ? -1 : y && V.current !== -1 || Math.abs(R) > 1 ? 0 : xe : Te > xe ? Te === xe + 1 && k ? -1 : y || Math.abs(R) > 1 ? xe : 0 : Te;
    })(), D);
    if (Pe({
      index: be,
      reason: Y,
      event: P
    }), r && R !== "reset")
      if (be === -1)
        G.current.value = ue;
      else {
        const xe = K(pe[be]);
        G.current.value = xe, xe.toLowerCase().indexOf(ue.toLowerCase()) === 0 && ue.length > 0 && G.current.setSelectionRange(ue.length, xe.length);
      }
  }), Xt = () => {
    const P = (R, D) => {
      const Y = R ? K(R) : "", oe = D ? K(D) : "";
      return Y === oe;
    };
    if (V.current !== -1 && le.filteredOptions && le.filteredOptions.length !== pe.length && le.inputValue === ue && (M ? Q.length === le.value.length && le.value.every((R, D) => K(Q[D]) === K(R)) : P(le.value, Q))) {
      const R = le.filteredOptions[V.current];
      if (R && pe.some((Y) => K(Y) === K(R)))
        return !0;
    }
    return !1;
  }, kt = h.useCallback(() => {
    if (!Ce || Xt())
      return;
    const P = M ? Q[0] : Q;
    if (pe.length === 0 || P == null) {
      Xe({
        diff: "reset"
      });
      return;
    }
    if (re.current) {
      if (P != null) {
        const R = pe[V.current];
        if (M && R && ia(Q, (Y) => A(R, Y)) !== -1)
          return;
        const D = ia(pe, (Y) => A(Y, P));
        D === -1 ? Xe({
          diff: "reset"
        }) : Pe({
          index: D
        });
        return;
      }
      if (V.current >= pe.length - 1) {
        Pe({
          index: pe.length - 1
        });
        return;
      }
      Pe({
        index: V.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    pe.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    M ? !1 : Q,
    E,
    Xe,
    Pe,
    Ce,
    ue,
    M
  ]), sr = Lt((P) => {
    po(re, P), P && kt();
  });
  process.env.NODE_ENV !== "production" && h.useEffect(() => {
    (!G.current || G.current.nodeName !== "INPUT") && (G.current && G.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${G.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), h.useEffect(() => {
    kt();
  }, [kt]);
  const $t = (P) => {
    je || (Se(!0), Ge(!0), L && L(P));
  }, ft = (P, R) => {
    je && (Se(!1), B && B(P, R));
  }, vt = (P, R, D, Y) => {
    if (M) {
      if (Q.length === R.length && Q.every((oe, be) => oe === R[be]))
        return;
    } else if (Q === R)
      return;
    z && z(P, R, D, Y), Re(R);
  }, ut = h.useRef(!1), It = (P, R, D = "selectOption", Y = "options") => {
    let oe = D, be = R;
    if (M) {
      if (be = Array.isArray(Q) ? Q.slice() : [], process.env.NODE_ENV !== "production") {
        const Te = be.filter((it) => A(R, it));
        Te.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Te.length} matches.`].join(`
`));
      }
      const xe = ia(be, (Te) => A(R, Te));
      xe === -1 ? be.push(R) : Y !== "freeSolo" && (be.splice(xe, 1), oe = "removeOption");
    }
    Ee(P, be), vt(P, be, oe, {
      option: R
    }), !p && (!P || !P.ctrlKey && !P.metaKey) && ft(P, oe), (s === !0 || s === "touch" && ut.current || s === "mouse" && !ut.current) && G.current.blur();
  };
  function mn(P, R) {
    if (P === -1)
      return -1;
    let D = P;
    for (; ; ) {
      if (R === "next" && D === Q.length || R === "previous" && D === -1)
        return -1;
      const Y = ae.querySelector(`[data-tag-index="${D}"]`);
      if (!Y || !Y.hasAttribute("tabindex") || Y.disabled || Y.getAttribute("aria-disabled") === "true")
        D += R === "next" ? 1 : -1;
      else
        return D;
    }
  }
  const Jt = (P, R) => {
    if (!M)
      return;
    ue === "" && ft(P, "toggleInput");
    let D = ie;
    ie === -1 ? ue === "" && R === "previous" && (D = Q.length - 1) : (D += R === "next" ? 1 : -1, D < 0 && (D = 0), D === Q.length && (D = -1)), D = mn(D, R), F(D), ce(D);
  }, Rn = (P) => {
    X.current = !0, We(""), _ && _(P, "", "clear"), vt(P, M ? [] : null, "clear");
  }, $n = (P) => (R) => {
    if (P.onKeyDown && P.onKeyDown(R), !R.defaultMuiPrevented && (ie !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(R.key) === -1 && (F(-1), ce(-1)), R.which !== 229))
      switch (R.key) {
        case "Home":
          Ce && I && (R.preventDefault(), Xe({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: R
          }));
          break;
        case "End":
          Ce && I && (R.preventDefault(), Xe({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: R
          }));
          break;
        case "PageUp":
          R.preventDefault(), Xe({
            diff: -qs,
            direction: "previous",
            reason: "keyboard",
            event: R
          }), $t(R);
          break;
        case "PageDown":
          R.preventDefault(), Xe({
            diff: qs,
            direction: "next",
            reason: "keyboard",
            event: R
          }), $t(R);
          break;
        case "ArrowDown":
          R.preventDefault(), Xe({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: R
          }), $t(R);
          break;
        case "ArrowUp":
          R.preventDefault(), Xe({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: R
          }), $t(R);
          break;
        case "ArrowLeft":
          Jt(R, "previous");
          break;
        case "ArrowRight":
          Jt(R, "next");
          break;
        case "Enter":
          if (V.current !== -1 && Ce) {
            const D = pe[V.current], Y = w ? w(D) : !1;
            if (R.preventDefault(), Y)
              return;
            It(R, D, "selectOption"), r && G.current.setSelectionRange(G.current.value.length, G.current.value.length);
          } else
            C && ue !== "" && Qe === !1 && (M && R.preventDefault(), It(R, ue, "createOption", "freeSolo"));
          break;
        case "Escape":
          Ce ? (R.preventDefault(), R.stopPropagation(), ft(R, "escape")) : c && (ue !== "" || M && Q.length > 0) && (R.preventDefault(), R.stopPropagation(), Rn(R));
          break;
        case "Backspace":
          if (M && !N && ue === "" && Q.length > 0) {
            const D = ie === -1 ? Q.length - 1 : ie, Y = Q.slice();
            Y.splice(D, 1), vt(R, Y, "removeOption", {
              option: Q[D]
            });
          }
          break;
        case "Delete":
          if (M && !N && ue === "" && Q.length > 0 && ie !== -1) {
            const D = ie, Y = Q.slice();
            Y.splice(D, 1), vt(R, Y, "removeOption", {
              option: Q[D]
            });
          }
          break;
      }
  }, lr = (P) => {
    $e(!0), se && !X.current && $t(P);
  }, In = (P) => {
    if (t(re)) {
      G.current.focus();
      return;
    }
    $e(!1), J.current = !0, X.current = !1, i && V.current !== -1 && Ce ? It(P, pe[V.current], "blur") : i && C && ue !== "" ? It(P, ue, "blur", "freeSolo") : l && Ee(P, Q), ft(P, "blur");
  }, Qt = (P) => {
    const R = P.target.value;
    ue !== R && (We(R), Ge(!1), _ && _(P, R, "input")), R === "" ? !f && !M && vt(P, null, "clear") : $t(P);
  }, tt = (P) => {
    const R = Number(P.currentTarget.getAttribute("data-option-index"));
    V.current !== R && Pe({
      event: P,
      index: R,
      reason: "mouse"
    });
  }, Je = (P) => {
    Pe({
      event: P,
      index: Number(P.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), ut.current = !0;
  }, pt = (P) => {
    const R = Number(P.currentTarget.getAttribute("data-option-index"));
    It(P, pe[R], "selectOption"), ut.current = !1;
  }, Gr = (P) => (R) => {
    const D = Q.slice();
    D.splice(P, 1), vt(R, D, "removeOption", {
      option: Q[P]
    });
  }, Nn = (P) => {
    je ? ft(P, "toggleInput") : $t(P);
  }, Xr = (P) => {
    P.currentTarget.contains(P.target) && P.target.getAttribute("id") !== Z && P.preventDefault();
  }, cr = (P) => {
    P.currentTarget.contains(P.target) && (G.current.focus(), H && J.current && G.current.selectionEnd - G.current.selectionStart === 0 && G.current.select(), J.current = !1);
  }, O = (P) => {
    (ue === "" || !je) && Nn(P);
  };
  let U = C && ue.length > 0;
  U = U || (M ? Q.length > 0 : Q !== null);
  let ee = pe;
  if (g) {
    const P = /* @__PURE__ */ new Map();
    let R = !1;
    ee = pe.reduce((D, Y, oe) => {
      const be = g(Y);
      return D.length > 0 && D[D.length - 1].group === be ? D[D.length - 1].options.push(Y) : (process.env.NODE_ENV !== "production" && (P.get(be) && !R && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), R = !0), P.set(be, !0)), D.push({
        key: oe,
        index: oe,
        group: be,
        options: [Y]
      })), D;
    }, []);
  }
  return m && Be && In(), {
    getRootProps: (P = {}) => T({
      "aria-owns": et ? `${Z}-listbox` : null
    }, P, {
      onKeyDown: $n(P),
      onMouseDown: Xr,
      onClick: cr
    }),
    getInputLabelProps: () => ({
      id: `${Z}-label`,
      htmlFor: Z
    }),
    getInputProps: () => ({
      id: Z,
      value: ue,
      onBlur: In,
      onFocus: lr,
      onChange: Qt,
      onMouseDown: O,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Ce ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": et ? `${Z}-listbox` : void 0,
      "aria-expanded": et,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: G,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: m
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: Rn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: Nn
    }),
    getTagProps: ({
      index: P
    }) => T({
      key: P,
      "data-tag-index": P,
      tabIndex: -1
    }, !N && {
      onDelete: Gr(P)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${Z}-listbox`,
      "aria-labelledby": `${Z}-label`,
      ref: sr,
      onMouseDown: (P) => {
        P.preventDefault();
      }
    }),
    getOptionProps: ({
      index: P,
      option: R
    }) => {
      const D = (M ? Q : [Q]).some((oe) => oe != null && A(R, oe)), Y = w ? w(R) : !1;
      return {
        key: K(R),
        tabIndex: -1,
        role: "option",
        id: `${Z}-option-${P}`,
        onMouseMove: tt,
        onClick: pt,
        onTouchStart: Je,
        "data-option-index": P,
        "aria-disabled": Y,
        "aria-selected": D
      };
    },
    id: Z,
    inputValue: ue,
    value: Q,
    dirty: U,
    expanded: Ce && ae,
    popupOpen: Ce,
    focused: Be || ie !== -1,
    anchorEl: ae,
    setAnchorEl: de,
    focusedTag: ie,
    groupedOptions: ee
  };
}
const ry = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], oy = me(kc, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Dc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r;
  const a = uc(), i = qe({
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
    modifiers: m,
    open: x,
    placement: y,
    popperOptions: v,
    popperRef: E,
    transition: C,
    slots: w,
    slotProps: b
  } = i, g = ve(i, ry), I = (r = w == null ? void 0 : w.root) != null ? r : c == null ? void 0 : c.Root, $ = T({
    anchorEl: s,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: m,
    open: x,
    placement: y,
    popperOptions: v,
    popperRef: E,
    transition: C
  }, g);
  return /* @__PURE__ */ S.jsx(oy, T({
    as: l,
    direction: a == null ? void 0 : a.direction,
    slots: {
      root: I
    },
    slotProps: b ?? u
  }, $, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (Dc.propTypes = {
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
  anchorEl: o.oneOfType([Bt, o.object, o.func]),
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
  container: o.oneOfType([Bt, o.func]),
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
  popperRef: Nt,
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
const jc = Dc;
function ay(e) {
  return Le("MuiListSubheader", e);
}
Ue("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const iy = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], sy = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: a,
    disableSticky: i
  } = e, s = {
    root: ["root", n !== "default" && `color${fe(n)}`, !r && "gutters", a && "inset", !i && "sticky"]
  };
  return ze(s, ay, t);
}, ly = me("li", {
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
})), gi = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: a,
    color: i = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = r, d = ve(r, iy), f = T({}, r, {
    color: i,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), p = sy(f);
  return /* @__PURE__ */ S.jsx(ly, T({
    as: s,
    className: ge(p.root, a),
    ref: n,
    ownerState: f
  }, d));
});
gi.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (gi.propTypes = {
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
const cy = gi;
function uy(e) {
  return Le("MuiPaper", e);
}
Ue("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const dy = ["className", "component", "elevation", "square", "variant"], fy = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: a
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ze(i, uy, a);
}, py = me("div", {
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
    backgroundImage: `linear-gradient(${st("#fff", Ss(t.elevation))}, ${st("#fff", Ss(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Fc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
    props: t,
    name: "MuiPaper"
  }), {
    className: a,
    component: i = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ve(r, dy), d = T({}, r, {
    component: i,
    elevation: s,
    square: l,
    variant: c
  }), f = fy(d);
  return process.env.NODE_ENV !== "production" && er().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ S.jsx(py, T({
    as: i,
    ownerState: d,
    className: ge(f.root, a),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
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
  elevation: Ht(ti, (e) => {
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
const yi = Fc;
function Lc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ia(e, t);
}
const Hs = {
  disabled: !1
};
var my = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const Oo = Fe.createContext(null);
var hy = function(t) {
  return t.scrollTop;
}, yr = "unmounted", vn = "exited", gn = "entering", Un = "entered", Aa = "exiting", Gt = /* @__PURE__ */ function(e) {
  Lc(t, e);
  function t(r, a) {
    var i;
    i = e.call(this, r, a) || this;
    var s = a, l = s && !s.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? l ? (c = vn, i.appearStatus = gn) : c = Un : r.unmountOnExit || r.mountOnEnter ? c = yr : c = vn, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(a, i) {
    var s = a.in;
    return s && i.status === yr ? {
      status: vn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(a) {
    var i = null;
    if (a !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== gn && s !== Un && (i = gn) : (s === gn || s === Un) && (i = Aa);
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
      if (this.cancelNextCallback(), i === gn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Jr.findDOMNode(this);
          s && hy(s);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === vn && this.setState({
        status: yr
      });
  }, n.performEnter = function(a) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : a, c = this.props.nodeRef ? [l] : [Jr.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), p = l ? f.appear : f.enter;
    if (!a && !s || Hs.disabled) {
      this.safeSetState({
        status: Un
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: gn
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: Un
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var a = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Jr.findDOMNode(this);
    if (!i || Hs.disabled) {
      this.safeSetState({
        status: vn
      }, function() {
        a.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Aa
    }, function() {
      a.props.onExiting(l), a.onTransitionEnd(s.exit, function() {
        a.safeSetState({
          status: vn
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
    if (a === yr)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = ve(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Fe.createElement(Oo.Provider, {
        value: null
      }, typeof s == "function" ? s(a, l) : Fe.cloneElement(Fe.Children.only(s), l))
    );
  }, t;
}(Fe.Component);
Gt.contextType = Oo;
Gt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = my;
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
function Ln() {
}
Gt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ln,
  onEntering: Ln,
  onEntered: Ln,
  onExit: Ln,
  onExiting: Ln,
  onExited: Ln
};
Gt.UNMOUNTED = yr;
Gt.EXITED = vn;
Gt.ENTERING = gn;
Gt.ENTERED = Un;
Gt.EXITING = Aa;
const Wc = Gt;
function bi(e, t) {
  var n = function(i) {
    return t && ao(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && rd.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    r[a.key] = n(a);
  }), r;
}
function vy(e, t) {
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
function bn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function gy(e, t) {
  return bi(e.children, function(n) {
    return io(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: bn(n, "appear", e),
      enter: bn(n, "enter", e),
      exit: bn(n, "exit", e)
    });
  });
}
function yy(e, t, n) {
  var r = bi(e.children), a = vy(t, r);
  return Object.keys(a).forEach(function(i) {
    var s = a[i];
    if (ao(s)) {
      var l = i in t, c = i in r, u = t[i], d = ao(u) && !u.props.in;
      c && (!l || d) ? a[i] = io(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: bn(s, "exit", e),
        enter: bn(s, "enter", e)
      }) : !c && l && !d ? a[i] = io(s, {
        in: !1
      }) : c && l && ao(u) && (a[i] = io(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: bn(s, "exit", e),
        enter: bn(s, "enter", e)
      }));
    }
  }), a;
}
var by = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, xy = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, xi = /* @__PURE__ */ function(e) {
  Lc(t, e);
  function t(r, a) {
    var i;
    i = e.call(this, r, a) || this;
    var s = i.handleExited.bind(Sh(i));
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
      children: c ? gy(a, l) : yy(a, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(a, i) {
    var s = bi(this.props.children);
    a.key in s || (a.props.onExited && a.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = T({}, l.children);
      return delete c[a.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var a = this.props, i = a.component, s = a.childFactory, l = ve(a, ["component", "childFactory"]), c = this.state.contextValue, u = by(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ Fe.createElement(Oo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Fe.createElement(Oo.Provider, {
      value: c
    }, /* @__PURE__ */ Fe.createElement(i, l, u));
  }, t;
}(Fe.Component);
xi.propTypes = process.env.NODE_ENV !== "production" ? {
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
xi.defaultProps = xy;
const Oy = xi;
function Bc(e) {
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
  } = e, [d, f] = h.useState(!1), p = ge(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), m = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + a
  }, x = ge(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), h.useEffect(() => {
    if (!l && c != null) {
      const y = setTimeout(c, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ S.jsx("span", {
    className: p,
    style: m,
    children: /* @__PURE__ */ S.jsx("span", {
      className: x
    })
  });
}
process.env.NODE_ENV !== "production" && (Bc.propTypes = {
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
const Ey = Ue("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Tt = Ey, wy = ["center", "classes", "className"];
let Uo = (e) => e, Ys, Ks, Gs, Xs;
const _a = 550, Ty = 80, Sy = Qa(Ys || (Ys = Uo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Cy = Qa(Ks || (Ks = Uo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Py = Qa(Gs || (Gs = Uo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Ry = me("span", {
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
}), $y = me(Bc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Xs || (Xs = Uo`
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
`), Tt.rippleVisible, Sy, _a, ({
  theme: e
}) => e.transitions.easing.easeInOut, Tt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Tt.child, Tt.childLeaving, Cy, _a, ({
  theme: e
}) => e.transitions.easing.easeInOut, Tt.childPulsate, Py, ({
  theme: e
}) => e.transitions.easing.easeInOut), Uc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: a = !1,
    classes: i = {},
    className: s
  } = r, l = ve(r, wy), [c, u] = h.useState([]), d = h.useRef(0), f = h.useRef(null);
  h.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const p = h.useRef(!1), m = h.useRef(0), x = h.useRef(null), y = h.useRef(null);
  h.useEffect(() => () => {
    m.current && clearTimeout(m.current);
  }, []);
  const v = h.useCallback((b) => {
    const {
      pulsate: g,
      rippleX: I,
      rippleY: $,
      rippleSize: k,
      cb: W
    } = b;
    u((A) => [...A, /* @__PURE__ */ S.jsx($y, {
      classes: {
        ripple: ge(i.ripple, Tt.ripple),
        rippleVisible: ge(i.rippleVisible, Tt.rippleVisible),
        ripplePulsate: ge(i.ripplePulsate, Tt.ripplePulsate),
        child: ge(i.child, Tt.child),
        childLeaving: ge(i.childLeaving, Tt.childLeaving),
        childPulsate: ge(i.childPulsate, Tt.childPulsate)
      },
      timeout: _a,
      pulsate: g,
      rippleX: I,
      rippleY: $,
      rippleSize: k
    }, d.current)]), d.current += 1, f.current = W;
  }, [i]), E = h.useCallback((b = {}, g = {}, I = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: k = a || g.pulsate,
      fakeElement: W = !1
      // For test purposes
    } = g;
    if ((b == null ? void 0 : b.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (p.current = !0);
    const A = W ? null : y.current, M = A ? A.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let z, B, j;
    if (k || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      z = Math.round(M.width / 2), B = Math.round(M.height / 2);
    else {
      const {
        clientX: _,
        clientY: L
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      z = Math.round(_ - M.left), B = Math.round(L - M.top);
    }
    if (k)
      j = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const _ = Math.max(Math.abs((A ? A.clientWidth : 0) - z), z) * 2 + 2, L = Math.max(Math.abs((A ? A.clientHeight : 0) - B), B) * 2 + 2;
      j = Math.sqrt(_ ** 2 + L ** 2);
    }
    b != null && b.touches ? x.current === null && (x.current = () => {
      v({
        pulsate: $,
        rippleX: z,
        rippleY: B,
        rippleSize: j,
        cb: I
      });
    }, m.current = setTimeout(() => {
      x.current && (x.current(), x.current = null);
    }, Ty)) : v({
      pulsate: $,
      rippleX: z,
      rippleY: B,
      rippleSize: j,
      cb: I
    });
  }, [a, v]), C = h.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), w = h.useCallback((b, g) => {
    if (clearTimeout(m.current), (b == null ? void 0 : b.type) === "touchend" && x.current) {
      x.current(), x.current = null, m.current = setTimeout(() => {
        w(b, g);
      });
      return;
    }
    x.current = null, u((I) => I.length > 0 ? I.slice(1) : I), f.current = g;
  }, []);
  return h.useImperativeHandle(n, () => ({
    pulsate: C,
    start: E,
    stop: w
  }), [C, E, w]), /* @__PURE__ */ S.jsx(Ry, T({
    className: ge(Tt.root, i.root, s),
    ref: y
  }, l, {
    children: /* @__PURE__ */ S.jsx(Oy, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Uc.propTypes = {
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
const Iy = Uc;
function Ny(e) {
  return Le("MuiButtonBase", e);
}
const ky = Ue("MuiButtonBase", ["root", "disabled", "focusVisible"]), My = ky, Ay = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], _y = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: a
  } = e, s = ze({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Ny, a);
  return n && r && (s.root += ` ${r}`), s;
}, Dy = me("button", {
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
  [`&.${My.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Vc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
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
    LinkComponent: m = "a",
    onBlur: x,
    onClick: y,
    onContextMenu: v,
    onDragLeave: E,
    onFocus: C,
    onFocusVisible: w,
    onKeyDown: b,
    onKeyUp: g,
    onMouseDown: I,
    onMouseLeave: $,
    onMouseUp: k,
    onTouchEnd: W,
    onTouchMove: A,
    onTouchStart: M,
    tabIndex: z = 0,
    TouchRippleProps: B,
    touchRippleRef: j,
    type: _
  } = r, L = ve(r, Ay), q = h.useRef(null), se = h.useRef(null), te = ot(se, j), {
    isFocusVisibleRef: N,
    onFocus: H,
    onBlur: ne,
    ref: Z
  } = tf(), [K, X] = h.useState(!1);
  u && K && X(!1), h.useImperativeHandle(a, () => ({
    focusVisible: () => {
      X(!0), q.current.focus();
    }
  }), []);
  const [J, G] = h.useState(!1);
  h.useEffect(() => {
    G(!0);
  }, []);
  const re = J && !d && !u;
  h.useEffect(() => {
    K && p && !d && J && se.current.pulsate();
  }, [d, p, K, J]);
  function ae(le, et, ce = f) {
    return Lt((ye) => (et && et(ye), !ce && se.current && se.current[le](ye), !0));
  }
  const de = ae("start", I), ie = ae("stop", v), F = ae("stop", E), he = ae("stop", k), V = ae("stop", (le) => {
    K && le.preventDefault(), $ && $(le);
  }), Q = ae("start", M), Re = ae("stop", W), ue = ae("stop", A), We = ae("stop", (le) => {
    ne(le), N.current === !1 && X(!1), x && x(le);
  }, !1), Be = Lt((le) => {
    q.current || (q.current = le.currentTarget), H(le), N.current === !0 && (X(!0), w && w(le)), C && C(le);
  }), $e = () => {
    const le = q.current;
    return c && c !== "button" && !(le.tagName === "A" && le.href);
  }, Ee = h.useRef(!1), je = Lt((le) => {
    p && !Ee.current && K && se.current && le.key === " " && (Ee.current = !0, se.current.stop(le, () => {
      se.current.start(le);
    })), le.target === le.currentTarget && $e() && le.key === " " && le.preventDefault(), b && b(le), le.target === le.currentTarget && $e() && le.key === "Enter" && !u && (le.preventDefault(), y && y(le));
  }), Se = Lt((le) => {
    p && le.key === " " && se.current && K && !le.defaultPrevented && (Ee.current = !1, se.current.stop(le, () => {
      se.current.pulsate(le);
    })), g && g(le), y && le.target === le.currentTarget && $e() && le.key === " " && !le.defaultPrevented && y(le);
  });
  let Ke = c;
  Ke === "button" && (L.href || L.to) && (Ke = m);
  const Ge = {};
  Ke === "button" ? (Ge.type = _ === void 0 ? "button" : _, Ge.disabled = u) : (!L.href && !L.to && (Ge.role = "button"), u && (Ge["aria-disabled"] = u));
  const Qe = ot(n, Z, q);
  process.env.NODE_ENV !== "production" && h.useEffect(() => {
    re && !se.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [re]);
  const Ce = T({}, r, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: z,
    focusVisible: K
  }), pe = _y(Ce);
  return /* @__PURE__ */ S.jsxs(Dy, T({
    as: Ke,
    className: ge(pe.root, l),
    ownerState: Ce,
    onBlur: We,
    onClick: y,
    onContextMenu: ie,
    onFocus: Be,
    onKeyDown: je,
    onKeyUp: Se,
    onMouseDown: de,
    onMouseLeave: V,
    onMouseUp: he,
    onDragLeave: F,
    onTouchEnd: Re,
    onTouchMove: ue,
    onTouchStart: Q,
    ref: Qe,
    tabIndex: u ? -1 : z,
    type: _
  }, Ge, L, {
    children: [s, re ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ S.jsx(Iy, T({
        ref: te,
        center: i
      }, B))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Nt,
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
  component: ei,
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
const Da = Vc;
function jy(e) {
  return Le("MuiIconButton", e);
}
const Fy = Ue("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Ly = Fy, Wy = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], By = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: a,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${fe(r)}`, a && `edge${fe(a)}`, `size${fe(i)}`]
  };
  return ze(s, jy, t);
}, Uy = me(Da, {
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette.action.active, e.palette.action.hoverOpacity),
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
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(r.main, e.palette.action.hoverOpacity)
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
    [`&.${Ly.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), zc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
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
  } = r, f = ve(r, Wy), p = T({}, r, {
    edge: a,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), m = By(p);
  return /* @__PURE__ */ S.jsx(Uy, T({
    className: ge(m.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n,
    ownerState: p
  }, f, {
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (zc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: Ht(o.node, (e) => h.Children.toArray(e.children).some((n) => /* @__PURE__ */ h.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const qc = zc;
function Vy(e) {
  return Le("MuiSvgIcon", e);
}
Ue("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const zy = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], qy = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, a = {
    root: ["root", t !== "inherit" && `color${fe(t)}`, `fontSize${fe(n)}`]
  };
  return ze(a, Vy, r);
}, Hy = me("svg", {
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
  var n, r, a, i, s, l, c, u, d, f, p, m, x;
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
      action: (m = (e.vars || e).palette) == null || (m = m.action) == null ? void 0 : m.active,
      disabled: (x = (e.vars || e).palette) == null || (x = x.action) == null ? void 0 : x.disabled,
      inherit: void 0
    }[t.color]
  };
}), Oi = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
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
  } = r, m = ve(r, zy), x = /* @__PURE__ */ h.isValidElement(a) && a.type === "svg", y = T({}, r, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: x
  }), v = {};
  d || (v.viewBox = p);
  const E = qy(y);
  return /* @__PURE__ */ S.jsxs(Hy, T({
    as: l,
    className: ge(E.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, v, m, x && a.props, {
    ownerState: y,
    children: [x ? a.props.children : a, f ? /* @__PURE__ */ S.jsx("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Oi.propTypes = {
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
Oi.muiName = "SvgIcon";
const Js = Oi;
function Ei(e, t) {
  function n(r, a) {
    return /* @__PURE__ */ S.jsx(Js, T({
      "data-testid": `${t}Icon`,
      ref: a
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Js.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(n));
}
const Yy = Ei(/* @__PURE__ */ S.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Ky(e) {
  return Le("MuiChip", e);
}
const Gy = Ue("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Ie = Gy, Xy = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], Jy = (e) => {
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
  return ze(u, Ky, t);
}, Qy = me("div", {
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
      [`& .${Ie.avatar}`]: t.avatar
    }, {
      [`& .${Ie.avatar}`]: t[`avatar${fe(l)}`]
    }, {
      [`& .${Ie.avatar}`]: t[`avatarColor${fe(r)}`]
    }, {
      [`& .${Ie.icon}`]: t.icon
    }, {
      [`& .${Ie.icon}`]: t[`icon${fe(l)}`]
    }, {
      [`& .${Ie.icon}`]: t[`iconColor${fe(a)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIcon${fe(l)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIconColor${fe(r)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIcon${fe(c)}Color${fe(r)}`]
    }, t.root, t[`size${fe(l)}`], t[`color${fe(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${fe(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${fe(r)}`], t[c], t[`${c}${fe(r)}`]];
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
    [`&.${Ie.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ie.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
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
    [`& .${Ie.icon}`]: T({
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
    [`& .${Ie.deleteIcon}`]: T({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : st(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : st(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : st(e.palette[t.color].contrastText, 0.7),
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Ie.focusVisible}`]: {
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Ie.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
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
}) => T({}, t.variant === "outlined" && {
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
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : st(e.palette[t.color].main, 0.7)}`,
  [`&.${Ie.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Ie.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : st(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Ie.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : st(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Zy = me("span", {
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
function Qs(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Hc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
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
    onClick: m,
    onDelete: x,
    onKeyDown: y,
    onKeyUp: v,
    size: E = "medium",
    variant: C = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: b = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, g = ve(r, Xy), I = h.useRef(null), $ = ot(I, n), k = (te) => {
    te.stopPropagation(), x && x(te);
  }, W = (te) => {
    te.currentTarget === te.target && Qs(te) && te.preventDefault(), y && y(te);
  }, A = (te) => {
    te.currentTarget === te.target && (x && Qs(te) ? x(te) : te.key === "Escape" && I.current && I.current.blur()), v && v(te);
  }, M = s !== !1 && m ? !0 : s, z = M || x ? Da : c || "div", B = T({}, r, {
    component: z,
    disabled: d,
    size: E,
    color: l,
    iconColor: /* @__PURE__ */ h.isValidElement(f) && f.props.color || l,
    onDelete: !!x,
    clickable: M,
    variant: C
  }), j = Jy(B), _ = z === Da ? T({
    component: c || "div",
    focusVisibleClassName: j.focusVisible
  }, x && {
    disableRipple: !0
  }) : {};
  let L = null;
  x && (L = u && /* @__PURE__ */ h.isValidElement(u) ? /* @__PURE__ */ h.cloneElement(u, {
    className: ge(u.props.className, j.deleteIcon),
    onClick: k
  }) : /* @__PURE__ */ S.jsx(Yy, {
    className: ge(j.deleteIcon),
    onClick: k
  }));
  let q = null;
  a && /* @__PURE__ */ h.isValidElement(a) && (q = /* @__PURE__ */ h.cloneElement(a, {
    className: ge(j.avatar, a.props.className)
  }));
  let se = null;
  return f && /* @__PURE__ */ h.isValidElement(f) && (se = /* @__PURE__ */ h.cloneElement(f, {
    className: ge(j.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && q && se && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ S.jsxs(Qy, T({
    as: z,
    className: ge(j.root, i),
    disabled: M && d ? !0 : void 0,
    onClick: m,
    onKeyDown: W,
    onKeyUp: A,
    ref: $,
    tabIndex: b && d ? -1 : w,
    ownerState: B
  }, _, g, {
    children: [q || se, /* @__PURE__ */ S.jsx(Zy, {
      className: ge(j.label),
      ownerState: B,
      children: p
    }), L]
  }));
});
process.env.NODE_ENV !== "production" && (Hc.propTypes = {
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
  children: Kd,
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
const eb = Hc;
function tr({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, a) => (r[a] = e[a], n && typeof e[a] > "u" && (r[a] = n[a]), r), {});
}
const Yc = /* @__PURE__ */ h.createContext(void 0);
process.env.NODE_ENV !== "production" && (Yc.displayName = "FormControlContext");
const wi = Yc;
function nr() {
  return h.useContext(wi);
}
function Kc(e) {
  return /* @__PURE__ */ S.jsx(dc, T({}, e, {
    defaultTheme: Lo,
    themeId: $o
  }));
}
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Zs(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Eo(e, t = !1) {
  return e && (Zs(e.value) && e.value !== "" || t && Zs(e.defaultValue) && e.defaultValue !== "");
}
function tb(e) {
  return e.startAdornment;
}
function nb(e) {
  return Le("MuiInputBase", e);
}
const rb = Ue("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), yt = rb, ob = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Vo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${fe(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, zo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, ab = (e) => {
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
    startAdornment: m,
    type: x
  } = e, y = {
    root: ["root", `color${fe(n)}`, r && "disabled", a && "error", c && "fullWidth", s && "focused", l && "formControl", p === "small" && "sizeSmall", d && "multiline", m && "adornedStart", i && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", d && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", m && "inputAdornedStart", i && "inputAdornedEnd", f && "readOnly"]
  };
  return ze(y, nb, t);
}, qo = me("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Vo
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
  [`&.${yt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && T({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Ho = me("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: zo
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
  }), a = {
    opacity: "0 !important"
  }, i = e.vars ? {
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
    [`label[data-shrink=false] + .${yt.formControl} &`]: {
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
    [`&.${yt.disabled}`]: {
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
}), ib = /* @__PURE__ */ S.jsx(Kc, {
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
}), Gc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r;
  const a = qe({
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
    disableInjectingGlobalStyles: m,
    endAdornment: x,
    fullWidth: y = !1,
    id: v,
    inputComponent: E = "input",
    inputProps: C = {},
    inputRef: w,
    maxRows: b,
    minRows: g,
    multiline: I = !1,
    name: $,
    onBlur: k,
    onChange: W,
    onClick: A,
    onFocus: M,
    onKeyDown: z,
    onKeyUp: B,
    placeholder: j,
    readOnly: _,
    renderSuffix: L,
    rows: q,
    slotProps: se = {},
    slots: te = {},
    startAdornment: N,
    type: H = "text",
    value: ne
  } = a, Z = ve(a, ob), K = C.value != null ? C.value : ne, {
    current: X
  } = h.useRef(K != null), J = h.useRef(), G = h.useCallback((pe) => {
    process.env.NODE_ENV !== "production" && pe && pe.nodeName !== "INPUT" && !pe.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), re = ot(J, w, C.ref, G), [ae, de] = h.useState(!1), ie = nr();
  process.env.NODE_ENV !== "production" && h.useEffect(() => {
    if (ie)
      return ie.registerEffect();
  }, [ie]);
  const F = tr({
    props: a,
    muiFormControl: ie,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  F.focused = ie ? ie.focused : ae, h.useEffect(() => {
    !ie && p && ae && (de(!1), k && k());
  }, [ie, p, ae, k]);
  const he = ie && ie.onFilled, V = ie && ie.onEmpty, Q = h.useCallback((pe) => {
    Eo(pe) ? he && he() : V && V();
  }, [he, V]);
  sn(() => {
    X && Q({
      value: K
    });
  }, [K, Q, X]);
  const Re = (pe) => {
    if (F.disabled) {
      pe.stopPropagation();
      return;
    }
    M && M(pe), C.onFocus && C.onFocus(pe), ie && ie.onFocus ? ie.onFocus(pe) : de(!0);
  }, ue = (pe) => {
    k && k(pe), C.onBlur && C.onBlur(pe), ie && ie.onBlur ? ie.onBlur(pe) : de(!1);
  }, We = (pe, ...le) => {
    if (!X) {
      const et = pe.target || J.current;
      if (et == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : an(1));
      Q({
        value: et.value
      });
    }
    C.onChange && C.onChange(pe, ...le), W && W(pe, ...le);
  };
  h.useEffect(() => {
    Q(J.current);
  }, []);
  const Be = (pe) => {
    J.current && pe.currentTarget === pe.target && J.current.focus(), A && !F.disabled && A(pe);
  };
  let $e = E, Ee = C;
  I && $e === "input" && (q ? (process.env.NODE_ENV !== "production" && (g || b) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Ee = T({
    type: void 0,
    minRows: q,
    maxRows: q
  }, Ee)) : Ee = T({
    type: void 0,
    maxRows: b,
    minRows: g
  }, Ee), $e = Ac);
  const je = (pe) => {
    Q(pe.animationName === "mui-auto-fill-cancel" ? J.current : {
      value: "x"
    });
  };
  h.useEffect(() => {
    ie && ie.setAdornedStart(!!N);
  }, [ie, N]);
  const Se = T({}, a, {
    color: F.color || "primary",
    disabled: F.disabled,
    endAdornment: x,
    error: F.error,
    focused: F.focused,
    formControl: ie,
    fullWidth: y,
    hiddenLabel: F.hiddenLabel,
    multiline: I,
    size: F.size,
    startAdornment: N,
    type: H
  }), Ke = ab(Se), Ge = te.root || u.Root || qo, Qe = se.root || d.root || {}, Ce = te.input || u.Input || Ho;
  return Ee = T({}, Ee, (r = se.input) != null ? r : d.input), /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [!m && ib, /* @__PURE__ */ S.jsxs(Ge, T({}, Qe, !Ar(Ge) && {
      ownerState: T({}, Se, Qe.ownerState)
    }, {
      ref: n,
      onClick: Be
    }, Z, {
      className: ge(Ke.root, Qe.className, c, _ && "MuiInputBase-readOnly"),
      children: [N, /* @__PURE__ */ S.jsx(wi.Provider, {
        value: null,
        children: /* @__PURE__ */ S.jsx(Ce, T({
          ownerState: Se,
          "aria-invalid": F.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: f,
          disabled: F.disabled,
          id: v,
          onAnimationStart: je,
          name: $,
          placeholder: j,
          readOnly: _,
          required: F.required,
          rows: q,
          value: K,
          onKeyDown: z,
          onKeyUp: B,
          type: H
        }, Ee, !Ar(Ce) && {
          as: $e,
          ownerState: T({}, Se, Ee.ownerState)
        }, {
          ref: re,
          className: ge(Ke.input, Ee.className, _ && "MuiInputBase-readOnly"),
          onBlur: ue,
          onChange: We,
          onFocus: Re
        }))
      }), x, L ? L(T({}, F, {
        startAdornment: N
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Gc.propTypes = {
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
  inputComponent: ei,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Nt,
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
const Ti = Gc;
function sb(e) {
  return Le("MuiInput", e);
}
const lb = T({}, yt, Ue("MuiInput", ["root", "underline", "input"])), tn = lb;
function cb(e) {
  return Le("MuiOutlinedInput", e);
}
const ub = T({}, yt, Ue("MuiOutlinedInput", ["root", "notchedOutline", "input"])), At = ub;
function db(e) {
  return Le("MuiFilledInput", e);
}
const fb = T({}, yt, Ue("MuiFilledInput", ["root", "underline", "input"])), bt = fb, pb = Ei(/* @__PURE__ */ S.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Xc = Ei(/* @__PURE__ */ S.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function mb(e) {
  return Le("MuiAutocomplete", e);
}
const hb = Ue("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), Oe = hb;
var el, tl;
const vb = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], gb = ["ref"], yb = (e) => {
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
  return ze(f, mb, t);
}, bb = me("div", {
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
}) => T({
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
  [`& .${Oe.tag}`]: T({
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
  [`& .${tn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${tn.root}.${yt.sizeSmall}`]: {
    [`& .${tn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${At.root}`]: {
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
  [`& .${At.root}.${yt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Oe.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${bt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Oe.hasPopupIcon}&, .${Oe.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${Oe.hasPopupIcon}.${Oe.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${bt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Oe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${bt.root}.${yt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${bt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${yt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${bt.root}.${yt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${Oe.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${bt.root}.${yt.hiddenLabel}.${yt.sizeSmall}`]: {
    [`& .${Oe.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${Oe.input}`]: T({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), xb = me("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), Ob = me(qc, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Eb = me(qc, {
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
})), wb = me(jc, {
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
}) => T({
  zIndex: (e.vars || e).zIndex.modal
}, t.disablePortal && {
  position: "absolute"
})), Tb = me(yi, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => T({}, e.typography.body1, {
  overflow: "auto"
})), Sb = me("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Cb = me("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Pb = me("div", {
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : st(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Oe.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : st(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Oe.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), Rb = me(cy, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), $b = me("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${Oe.option}`]: {
    paddingLeft: 24
  }
}), Jc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r, a, i, s;
  const l = qe({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: c = !1,
    autoHighlight: u = !1,
    autoSelect: d = !1,
    blurOnSelect: f = !1,
    ChipProps: p,
    className: m,
    clearIcon: x = el || (el = /* @__PURE__ */ S.jsx(pb, {
      fontSize: "small"
    })),
    clearOnBlur: y = !l.freeSolo,
    clearOnEscape: v = !1,
    clearText: E = "Clear",
    closeText: C = "Close",
    componentsProps: w = {},
    defaultValue: b = l.multiple ? [] : null,
    disableClearable: g = !1,
    disableCloseOnSelect: I = !1,
    disabled: $ = !1,
    disabledItemsFocusable: k = !1,
    disableListWrap: W = !1,
    disablePortal: A = !1,
    filterSelectedOptions: M = !1,
    forcePopupIcon: z = "auto",
    freeSolo: B = !1,
    fullWidth: j = !1,
    getLimitTagsText: _ = (D) => `+${D}`,
    getOptionLabel: L,
    groupBy: q,
    handleHomeEndKeys: se = !l.freeSolo,
    includeInputInList: te = !1,
    limitTags: N = -1,
    ListboxComponent: H = "ul",
    ListboxProps: ne,
    loading: Z = !1,
    loadingText: K = "Loading…",
    multiple: X = !1,
    noOptionsText: J = "No options",
    openOnFocus: G = !1,
    openText: re = "Open",
    PaperComponent: ae = yi,
    PopperComponent: de = jc,
    popupIcon: ie = tl || (tl = /* @__PURE__ */ S.jsx(Xc, {})),
    readOnly: F = !1,
    renderGroup: he,
    renderInput: V,
    renderOption: Q,
    renderTags: Re,
    selectOnFocus: ue = !l.freeSolo,
    size: We = "medium",
    slotProps: Be = {}
  } = l, $e = ve(l, vb), {
    getRootProps: Ee,
    getInputProps: je,
    getInputLabelProps: Se,
    getPopupIndicatorProps: Ke,
    getClearProps: Ge,
    getTagProps: Qe,
    getListboxProps: Ce,
    getOptionProps: pe,
    value: le,
    dirty: et,
    expanded: ce,
    id: ye,
    popupOpen: Pe,
    focused: Xe,
    focusedTag: Xt,
    anchorEl: kt,
    setAnchorEl: sr,
    inputValue: $t,
    groupedOptions: ft
  } = ny(T({}, l, {
    componentName: "Autocomplete"
  })), vt = !g && !$ && et && !F, ut = (!B || z === !0) && z !== !1, {
    onMouseDown: It
  } = je(), {
    ref: mn
  } = ne ?? {}, Jt = Ce(), {
    ref: Rn
  } = Jt, $n = ve(Jt, gb), lr = ot(Rn, mn), Qt = L || ((D) => {
    var Y;
    return (Y = D.label) != null ? Y : D;
  }), tt = T({}, l, {
    disablePortal: A,
    expanded: ce,
    focused: Xe,
    fullWidth: j,
    getOptionLabel: Qt,
    hasClearIcon: vt,
    hasPopupIcon: ut,
    inputFocused: Xt === -1,
    popupOpen: Pe,
    size: We
  }), Je = yb(tt);
  let pt;
  if (X && le.length > 0) {
    const D = (Y) => T({
      className: Je.tag,
      disabled: $
    }, Qe(Y));
    Re ? pt = Re(le, D, tt) : pt = le.map((Y, oe) => /* @__PURE__ */ S.jsx(eb, T({
      label: Qt(Y),
      size: We
    }, D({
      index: oe
    }), p)));
  }
  if (N > -1 && Array.isArray(pt)) {
    const D = pt.length - N;
    !Xe && D > 0 && (pt = pt.splice(0, N), pt.push(/* @__PURE__ */ S.jsx("span", {
      className: Je.tag,
      children: _(D)
    }, pt.length)));
  }
  const Nn = he || ((D) => /* @__PURE__ */ S.jsxs("li", {
    children: [/* @__PURE__ */ S.jsx(Rb, {
      className: Je.groupLabel,
      ownerState: tt,
      component: "div",
      children: D.group
    }), /* @__PURE__ */ S.jsx($b, {
      className: Je.groupUl,
      ownerState: tt,
      children: D.children
    })]
  }, D.key)), cr = Q || ((D, Y) => /* @__PURE__ */ S.jsx("li", T({}, D, {
    children: Qt(Y)
  }))), O = (D, Y) => {
    const oe = pe({
      option: D,
      index: Y
    });
    return cr(T({}, oe, {
      className: Je.option
    }), D, {
      selected: oe["aria-selected"],
      index: Y,
      inputValue: $t
    }, tt);
  }, U = (r = Be.clearIndicator) != null ? r : w.clearIndicator, ee = (a = Be.paper) != null ? a : w.paper, P = (i = Be.popper) != null ? i : w.popper, R = (s = Be.popupIndicator) != null ? s : w.popupIndicator;
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx(bb, T({
      ref: n,
      className: ge(Je.root, m),
      ownerState: tt
    }, Ee($e), {
      children: V({
        id: ye,
        disabled: $,
        fullWidth: !0,
        size: We === "small" ? "small" : void 0,
        InputLabelProps: Se(),
        InputProps: T({
          ref: sr,
          className: Je.inputRoot,
          startAdornment: pt,
          onClick: (D) => {
            D.target === D.currentTarget && It(D);
          }
        }, (vt || ut) && {
          endAdornment: /* @__PURE__ */ S.jsxs(xb, {
            className: Je.endAdornment,
            ownerState: tt,
            children: [vt ? /* @__PURE__ */ S.jsx(Ob, T({}, Ge(), {
              "aria-label": E,
              title: E,
              ownerState: tt
            }, U, {
              className: ge(Je.clearIndicator, U == null ? void 0 : U.className),
              children: x
            })) : null, ut ? /* @__PURE__ */ S.jsx(Eb, T({}, Ke(), {
              disabled: $,
              "aria-label": Pe ? C : re,
              title: Pe ? C : re,
              ownerState: tt
            }, R, {
              className: ge(Je.popupIndicator, R == null ? void 0 : R.className),
              children: ie
            })) : null]
          })
        }),
        inputProps: T({
          className: Je.input,
          disabled: $,
          readOnly: F
        }, je())
      })
    })), kt ? /* @__PURE__ */ S.jsx(wb, T({
      as: de,
      disablePortal: A,
      style: {
        width: kt ? kt.clientWidth : null
      },
      ownerState: tt,
      role: "presentation",
      anchorEl: kt,
      open: Pe
    }, P, {
      className: ge(Je.popper, P == null ? void 0 : P.className),
      children: /* @__PURE__ */ S.jsxs(Tb, T({
        ownerState: tt,
        as: ae
      }, ee, {
        className: ge(Je.paper, ee == null ? void 0 : ee.className),
        children: [Z && ft.length === 0 ? /* @__PURE__ */ S.jsx(Sb, {
          className: Je.loading,
          ownerState: tt,
          children: K
        }) : null, ft.length === 0 && !B && !Z ? /* @__PURE__ */ S.jsx(Cb, {
          className: Je.noOptions,
          ownerState: tt,
          role: "presentation",
          onMouseDown: (D) => {
            D.preventDefault();
          },
          children: J
        }) : null, ft.length > 0 ? /* @__PURE__ */ S.jsx(Pb, T({
          as: H,
          className: Je.listbox,
          ownerState: tt
        }, $n, ne, {
          ref: lr,
          children: ft.map((D, Y) => q ? Nn({
            key: D.key,
            group: D.group,
            children: D.options.map((oe, be) => O(oe, D.index + be))
          }) : O(D, Y))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (Jc.propTypes = {
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
  defaultValue: Ht(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
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
  limitTags: ti,
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
  value: Ht(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Ib = Jc, Nb = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], kb = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, a = ze({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, sb, t);
  return T({}, t, a);
}, Mb = me(qo, {
  shouldForwardProp: (e) => un(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Vo(e, t), !n.disableUnderline && t.underline];
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
    [`&.${tn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${tn.error}`]: {
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
    [`&:hover:not(.${tn.disabled}, .${tn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${tn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Ab = me(Ho, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: zo
})({}), Si = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r, a, i, s;
  const l = qe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: f = !1,
    inputComponent: p = "input",
    multiline: m = !1,
    slotProps: x,
    slots: y = {},
    type: v = "text"
  } = l, E = ve(l, Nb), C = kb(l), b = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, g = x ?? d ? St(x ?? d, b) : b, I = (r = (a = y.root) != null ? a : u.Root) != null ? r : Mb, $ = (i = (s = y.input) != null ? s : u.Input) != null ? i : Ab;
  return /* @__PURE__ */ S.jsx(Ti, T({
    slots: {
      root: I,
      input: $
    },
    slotProps: g,
    fullWidth: f,
    inputComponent: p,
    multiline: m,
    ref: n,
    type: v
  }, E, {
    classes: C
  }));
});
process.env.NODE_ENV !== "production" && (Si.propTypes = {
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
  inputRef: Nt,
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
Si.muiName = "Input";
const Qc = Si, _b = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Db = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, a = ze({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, db, t);
  return T({}, t, a);
}, jb = me(qo, {
  shouldForwardProp: (e) => un(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Vo(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", a = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return T({
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
    [`&.${bt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${bt.disabled}`]: {
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
    [`&.${bt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${bt.error}`]: {
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
    [`&:hover:not(.${bt.disabled}, .${bt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${bt.disabled}:before`]: {
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
}), Fb = me(Ho, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: zo
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
})), Ci = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r, a, i, s;
  const l = qe({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: p = !1,
    slotProps: m,
    slots: x = {},
    type: y = "text"
  } = l, v = ve(l, _b), E = T({}, l, {
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    type: y
  }), C = Db(l), w = {
    root: {
      ownerState: E
    },
    input: {
      ownerState: E
    }
  }, b = m ?? u ? St(m ?? u, w) : w, g = (r = (a = x.root) != null ? a : c.Root) != null ? r : jb, I = (i = (s = x.input) != null ? s : c.Input) != null ? i : Fb;
  return /* @__PURE__ */ S.jsx(Ti, T({
    slots: {
      root: g,
      input: I
    },
    componentsProps: b,
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    ref: n,
    type: y
  }, v, {
    classes: C
  }));
});
process.env.NODE_ENV !== "production" && (Ci.propTypes = {
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
  inputRef: Nt,
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
Ci.muiName = "Input";
const Zc = Ci;
var nl;
const Lb = ["children", "classes", "className", "label", "notched"], Wb = me("fieldset")({
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
}), Bb = me("legend")(({
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
function eu(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, a = ve(e, Lb), i = n != null && n !== "", s = T({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ S.jsx(Wb, T({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, a, {
    children: /* @__PURE__ */ S.jsx(Bb, {
      ownerState: s,
      children: i ? /* @__PURE__ */ S.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        nl || (nl = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (eu.propTypes = {
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
const Ub = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Vb = (e) => {
  const {
    classes: t
  } = e, r = ze({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, cb, t);
  return T({}, t, r);
}, zb = me(qo, {
  shouldForwardProp: (e) => un(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Vo
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return T({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${At.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${At.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${At.focused} .${At.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${At.error} .${At.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${At.disabled} .${At.notchedOutline}`]: {
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
}), qb = me(eu, {
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
}), Hb = me(Ho, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: zo
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
})), Pi = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r, a, i, s, l;
  const c = qe({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: f = "input",
    label: p,
    multiline: m = !1,
    notched: x,
    slots: y = {},
    type: v = "text"
  } = c, E = ve(c, Ub), C = Vb(c), w = nr(), b = tr({
    props: c,
    muiFormControl: w,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), g = T({}, c, {
    color: b.color || "primary",
    disabled: b.disabled,
    error: b.error,
    focused: b.focused,
    formControl: w,
    fullWidth: d,
    hiddenLabel: b.hiddenLabel,
    multiline: m,
    size: b.size,
    type: v
  }), I = (r = (a = y.root) != null ? a : u.Root) != null ? r : zb, $ = (i = (s = y.input) != null ? s : u.Input) != null ? i : Hb;
  return /* @__PURE__ */ S.jsx(Ti, T({
    slots: {
      root: I,
      input: $
    },
    renderSuffix: (k) => /* @__PURE__ */ S.jsx(qb, {
      ownerState: g,
      className: C.notchedOutline,
      label: p != null && p !== "" && b.required ? l || (l = /* @__PURE__ */ S.jsxs(h.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof x < "u" ? x : !!(k.startAdornment || k.filled || k.focused)
    }),
    fullWidth: d,
    inputComponent: f,
    multiline: m,
    ref: n,
    type: v
  }, E, {
    classes: T({}, C, {
      notchedOutline: null
    })
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
  inputRef: Nt,
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
Pi.muiName = "Input";
const tu = Pi;
function Yb(e) {
  return Le("MuiFormLabel", e);
}
const Kb = Ue("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Sr = Kb, Gb = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Xb = (e) => {
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
  return ze(c, Yb, t);
}, Jb = me("label", {
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
  [`&.${Sr.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Sr.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Sr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Qb = me("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Sr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), nu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: a,
    className: i,
    component: s = "label"
  } = r, l = ve(r, Gb), c = nr(), u = tr({
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
  }), f = Xb(d);
  return /* @__PURE__ */ S.jsxs(Jb, T({
    as: s,
    ownerState: d,
    className: ge(f.root, i),
    ref: n
  }, l, {
    children: [a, u.required && /* @__PURE__ */ S.jsxs(Qb, {
      ownerState: d,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (nu.propTypes = {
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
const Zb = nu;
function e0(e) {
  return Le("MuiInputLabel", e);
}
Ue("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const t0 = ["disableAnimation", "margin", "shrink", "variant", "className"], n0 = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: a,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, u = ze({
    root: ["root", n && "formControl", !i && "animated", a && "shrink", r === "small" && "sizeSmall", s],
    asterisk: [l && "asterisk"]
  }, e0, t);
  return T({}, t, u);
}, r0 = me(Zb, {
  shouldForwardProp: (e) => un(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Sr.asterisk}`]: t.asterisk
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
}))), ru = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: a = !1,
    shrink: i,
    className: s
  } = r, l = ve(r, t0), c = nr();
  let u = i;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = tr({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required"]
  }), f = T({}, r, {
    disableAnimation: a,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required
  }), p = n0(f);
  return /* @__PURE__ */ S.jsx(r0, T({
    "data-shrink": u,
    ownerState: f,
    ref: n,
    className: ge(p.root, s)
  }, l, {
    classes: p
  }));
});
process.env.NODE_ENV !== "production" && (ru.propTypes = {
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
const o0 = ru;
function a0(e) {
  return Le("MuiFormControl", e);
}
Ue("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const i0 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], s0 = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, a = {
    root: ["root", n !== "none" && `margin${fe(n)}`, r && "fullWidth"]
  };
  return ze(a, a0, t);
}, l0 = me("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => T({}, t.root, t[`margin${fe(e.margin)}`], e.fullWidth && t.fullWidth)
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
})), ou = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
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
    margin: m = "none",
    required: x = !1,
    size: y = "medium",
    variant: v = "outlined"
  } = r, E = ve(r, i0), C = T({}, r, {
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: p,
    margin: m,
    required: x,
    size: y,
    variant: v
  }), w = s0(C), [b, g] = h.useState(() => {
    let B = !1;
    return a && h.Children.forEach(a, (j) => {
      if (!na(j, ["Input", "Select"]))
        return;
      const _ = na(j, ["Select"]) ? j.props.input : j;
      _ && tb(_.props) && (B = !0);
    }), B;
  }), [I, $] = h.useState(() => {
    let B = !1;
    return a && h.Children.forEach(a, (j) => {
      na(j, ["Input", "Select"]) && (Eo(j.props, !0) || Eo(j.props.inputProps, !0)) && (B = !0);
    }), B;
  }), [k, W] = h.useState(!1);
  c && k && W(!1);
  const A = d !== void 0 && !c ? d : k;
  let M;
  if (process.env.NODE_ENV !== "production") {
    const B = h.useRef(!1);
    M = () => (B.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), B.current = !0, () => {
      B.current = !1;
    });
  }
  const z = h.useMemo(() => ({
    adornedStart: b,
    setAdornedStart: g,
    color: s,
    disabled: c,
    error: u,
    filled: I,
    focused: A,
    fullWidth: f,
    hiddenLabel: p,
    size: y,
    onBlur: () => {
      W(!1);
    },
    onEmpty: () => {
      $(!1);
    },
    onFilled: () => {
      $(!0);
    },
    onFocus: () => {
      W(!0);
    },
    registerEffect: M,
    required: x,
    variant: v
  }), [b, s, c, u, I, A, f, p, M, x, y, v]);
  return /* @__PURE__ */ S.jsx(wi.Provider, {
    value: z,
    children: /* @__PURE__ */ S.jsx(l0, T({
      as: l,
      ownerState: C,
      className: ge(w.root, i),
      ref: n
    }, E, {
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (ou.propTypes = {
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
const c0 = ou;
function u0(e) {
  return Le("MuiFormHelperText", e);
}
const d0 = Ue("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), rl = d0;
var ol;
const f0 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], p0 = (e) => {
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
  return ze(u, u0, t);
}, m0 = me("p", {
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
}) => T({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${rl.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${rl.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), au = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: a,
    className: i,
    component: s = "p"
  } = r, l = ve(r, f0), c = nr(), u = tr({
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
  }), f = p0(d);
  return /* @__PURE__ */ S.jsx(m0, T({
    as: s,
    ownerState: d,
    className: ge(f.root, i),
    ref: n
  }, l, {
    children: a === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      ol || (ol = /* @__PURE__ */ S.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : a
  }));
});
process.env.NODE_ENV !== "production" && (au.propTypes = {
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
const h0 = au, iu = /* @__PURE__ */ h.createContext({});
process.env.NODE_ENV !== "production" && (iu.displayName = "ListContext");
const v0 = iu;
function g0(e) {
  return Le("MuiList", e);
}
Ue("MuiList", ["root", "padding", "dense", "subheader"]);
const y0 = ["children", "className", "component", "dense", "disablePadding", "subheader"], b0 = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: a
  } = e;
  return ze({
    root: ["root", !n && "padding", r && "dense", a && "subheader"]
  }, g0, t);
}, x0 = me("ul", {
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
})), su = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
    props: t,
    name: "MuiList"
  }), {
    children: a,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ve(r, y0), f = h.useMemo(() => ({
    dense: l
  }), [l]), p = T({}, r, {
    component: s,
    dense: l,
    disablePadding: c
  }), m = b0(p);
  return /* @__PURE__ */ S.jsx(v0.Provider, {
    value: f,
    children: /* @__PURE__ */ S.jsxs(x0, T({
      as: s,
      className: ge(m.root, i),
      ref: n,
      ownerState: p
    }, d, {
      children: [u, a]
    }))
  });
});
process.env.NODE_ENV !== "production" && (su.propTypes = {
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
const O0 = su, E0 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function sa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function al(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function lu(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function hr(e, t, n, r, a, i) {
  let s = !1, l = a(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !lu(l, i) || c)
      l = a(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const cu = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = t, p = ve(t, E0), m = h.useRef(null), x = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  sn(() => {
    a && m.current.focus();
  }, [a]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, b) => {
      const g = !m.current.style.width;
      if (w.clientHeight < m.current.clientHeight && g) {
        const I = `${nc(dt(w))}px`;
        m.current.style[b.direction === "rtl" ? "paddingLeft" : "paddingRight"] = I, m.current.style.width = `calc(100% + ${I})`;
      }
      return m.current;
    }
  }), []);
  const y = (w) => {
    const b = m.current, g = w.key, I = dt(b).activeElement;
    if (g === "ArrowDown")
      w.preventDefault(), hr(b, I, u, c, sa);
    else if (g === "ArrowUp")
      w.preventDefault(), hr(b, I, u, c, al);
    else if (g === "Home")
      w.preventDefault(), hr(b, null, u, c, sa);
    else if (g === "End")
      w.preventDefault(), hr(b, null, u, c, al);
    else if (g.length === 1) {
      const $ = x.current, k = g.toLowerCase(), W = performance.now();
      $.keys.length > 0 && (W - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && k !== $.keys[0] && ($.repeating = !1)), $.lastTime = W, $.keys.push(k);
      const A = I && !$.repeating && lu(I, $);
      $.previousKeyMatched && (A || hr(b, I, !1, c, sa, $)) ? w.preventDefault() : $.previousKeyMatched = !1;
    }
    d && d(w);
  }, v = ot(m, n);
  let E = -1;
  h.Children.forEach(s, (w, b) => {
    if (!/* @__PURE__ */ h.isValidElement(w)) {
      E === b && (E += 1, E >= s.length && (E = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Nr.isFragment(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (f === "selectedMenu" && w.props.selected || E === -1) && (E = b), E === b && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (E += 1, E >= s.length && (E = -1));
  });
  const C = h.Children.map(s, (w, b) => {
    if (b === E) {
      const g = {};
      return i && (g.autoFocus = !0), w.props.tabIndex === void 0 && f === "selectedMenu" && (g.tabIndex = 0), /* @__PURE__ */ h.cloneElement(w, g);
    }
    return w;
  });
  return /* @__PURE__ */ S.jsx(O0, T({
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: y,
    tabIndex: a ? 0 : -1
  }, p, {
    children: C
  }));
});
process.env.NODE_ENV !== "production" && (cu.propTypes = {
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
const w0 = cu, uu = (e) => e.scrollTop;
function wo(e, t) {
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
const T0 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ja(e) {
  return `scale(${e}, ${e ** 2})`;
}
const S0 = {
  entering: {
    opacity: 1,
    transform: ja(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, la = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ri = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    onExiting: m,
    style: x,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Wc
  } = t, E = ve(t, T0), C = h.useRef(), w = h.useRef(), b = er(), g = h.useRef(null), I = ot(g, i.ref, n), $ = (_) => (L) => {
    if (_) {
      const q = g.current;
      L === void 0 ? _(q) : _(q, L);
    }
  }, k = $(d), W = $((_, L) => {
    uu(_);
    const {
      duration: q,
      delay: se,
      easing: te
    } = wo({
      style: x,
      timeout: y,
      easing: s
    }, {
      mode: "enter"
    });
    let N;
    y === "auto" ? (N = b.transitions.getAutoHeightDuration(_.clientHeight), w.current = N) : N = q, _.style.transition = [b.transitions.create("opacity", {
      duration: N,
      delay: se
    }), b.transitions.create("transform", {
      duration: la ? N : N * 0.666,
      delay: se,
      easing: te
    })].join(","), c && c(_, L);
  }), A = $(u), M = $(m), z = $((_) => {
    const {
      duration: L,
      delay: q,
      easing: se
    } = wo({
      style: x,
      timeout: y,
      easing: s
    }, {
      mode: "exit"
    });
    let te;
    y === "auto" ? (te = b.transitions.getAutoHeightDuration(_.clientHeight), w.current = te) : te = L, _.style.transition = [b.transitions.create("opacity", {
      duration: te,
      delay: q
    }), b.transitions.create("transform", {
      duration: la ? te : te * 0.666,
      delay: la ? q : q || te * 0.333,
      easing: se
    })].join(","), _.style.opacity = 0, _.style.transform = ja(0.75), f && f(_);
  }), B = $(p), j = (_) => {
    y === "auto" && (C.current = setTimeout(_, w.current || 0)), r && r(g.current, _);
  };
  return h.useEffect(() => () => {
    clearTimeout(C.current);
  }, []), /* @__PURE__ */ S.jsx(v, T({
    appear: a,
    in: l,
    nodeRef: g,
    onEnter: W,
    onEntered: A,
    onEntering: k,
    onExit: z,
    onExited: B,
    onExiting: M,
    addEndListener: j,
    timeout: y === "auto" ? null : y
  }, E, {
    children: (_, L) => /* @__PURE__ */ h.cloneElement(i, T({
      style: T({
        opacity: 0,
        transform: ja(0.75),
        visibility: _ === "exited" && !l ? "hidden" : void 0
      }, S0[_], x, i.props.style),
      ref: I
    }, L))
  }));
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
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
  children: Wr.isRequired,
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
Ri.muiSupportAuto = !0;
const C0 = Ri, P0 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], R0 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, du = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = er(), a = {
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
    onExit: m,
    onExited: x,
    onExiting: y,
    style: v,
    timeout: E = a,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Wc
  } = t, w = ve(t, P0), b = h.useRef(null), g = ot(b, l.ref, n), I = (j) => (_) => {
    if (j) {
      const L = b.current;
      _ === void 0 ? j(L) : j(L, _);
    }
  }, $ = I(p), k = I((j, _) => {
    uu(j);
    const L = wo({
      style: v,
      timeout: E,
      easing: c
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = r.transitions.create("opacity", L), j.style.transition = r.transitions.create("opacity", L), d && d(j, _);
  }), W = I(f), A = I(y), M = I((j) => {
    const _ = wo({
      style: v,
      timeout: E,
      easing: c
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = r.transitions.create("opacity", _), j.style.transition = r.transitions.create("opacity", _), m && m(j);
  }), z = I(x), B = (j) => {
    i && i(b.current, j);
  };
  return /* @__PURE__ */ S.jsx(C, T({
    appear: s,
    in: u,
    nodeRef: b,
    onEnter: k,
    onEntered: W,
    onEntering: $,
    onExit: M,
    onExited: z,
    onExiting: A,
    addEndListener: B,
    timeout: E
  }, w, {
    children: (j, _) => /* @__PURE__ */ h.cloneElement(l, T({
      style: T({
        opacity: 0,
        visibility: j === "exited" && !u ? "hidden" : void 0
      }, R0[j], v, l.props.style),
      ref: g
    }, _))
  }));
});
process.env.NODE_ENV !== "production" && (du.propTypes = {
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
  children: Wr.isRequired,
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
const $0 = du;
function I0(e) {
  return Le("MuiBackdrop", e);
}
Ue("MuiBackdrop", ["root", "invisible"]);
const N0 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], k0 = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ze({
    root: ["root", n && "invisible"]
  }, I0, t);
}, M0 = me("div", {
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
})), fu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r, a, i;
  const s = qe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: f = {},
    invisible: p = !1,
    open: m,
    slotProps: x = {},
    slots: y = {},
    TransitionComponent: v = $0,
    transitionDuration: E
  } = s, C = ve(s, N0), w = T({}, s, {
    component: u,
    invisible: p
  }), b = k0(w), g = (r = x.root) != null ? r : f.root;
  return /* @__PURE__ */ S.jsx(v, T({
    in: m,
    timeout: E
  }, C, {
    children: /* @__PURE__ */ S.jsx(M0, T({
      "aria-hidden": !0
    }, g, {
      as: (a = (i = y.root) != null ? i : d.Root) != null ? a : u,
      className: ge(b.root, c, g == null ? void 0 : g.className),
      ownerState: T({}, w, g == null ? void 0 : g.ownerState),
      classes: b,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (fu.propTypes = {
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
const A0 = fu, _0 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"], D0 = me("div", {
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
})), j0 = me(A0, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), pu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r, a, i, s, l, c;
  const u = qe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = j0,
    BackdropProps: f,
    classes: p,
    className: m,
    closeAfterTransition: x = !1,
    children: y,
    container: v,
    component: E,
    components: C = {},
    componentsProps: w = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: g = !1,
    disableEscapeKeyDown: I = !1,
    disablePortal: $ = !1,
    disableRestoreFocus: k = !1,
    disableScrollLock: W = !1,
    hideBackdrop: A = !1,
    keepMounted: M = !1,
    onBackdropClick: z,
    onClose: B,
    open: j,
    slotProps: _,
    slots: L,
    // eslint-disable-next-line react/prop-types
    theme: q
  } = u, se = ve(u, _0), [te, N] = h.useState(!0), H = {
    container: v,
    closeAfterTransition: x,
    disableAutoFocus: b,
    disableEnforceFocus: g,
    disableEscapeKeyDown: I,
    disablePortal: $,
    disableRestoreFocus: k,
    disableScrollLock: W,
    hideBackdrop: A,
    keepMounted: M,
    onBackdropClick: z,
    onClose: B,
    open: j
  }, ne = T({}, u, H, {
    exited: te
  }), Z = (r = (a = L == null ? void 0 : L.root) != null ? a : C.Root) != null ? r : D0, K = (i = (s = L == null ? void 0 : L.backdrop) != null ? s : C.Backdrop) != null ? i : d, X = (l = _ == null ? void 0 : _.root) != null ? l : w.root, J = (c = _ == null ? void 0 : _.backdrop) != null ? c : w.backdrop;
  return /* @__PURE__ */ S.jsx(Mc, T({
    slots: {
      root: Z,
      backdrop: K
    },
    slotProps: {
      root: () => T({}, Na(X, ne), !Ar(Z) && {
        as: E,
        theme: q
      }, {
        className: ge(m, X == null ? void 0 : X.className, p == null ? void 0 : p.root, !ne.open && ne.exited && (p == null ? void 0 : p.hidden))
      }),
      backdrop: () => T({}, f, Na(J, ne), {
        className: ge(J == null ? void 0 : J.className, f == null ? void 0 : f.className, p == null ? void 0 : p.backdrop)
      })
    },
    onTransitionEnter: () => N(!1),
    onTransitionExited: () => N(!0),
    ref: n
  }, se, H, {
    children: y
  }));
});
process.env.NODE_ENV !== "production" && (pu.propTypes = {
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
  children: Wr.isRequired,
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
  container: o.oneOfType([Bt, o.func]),
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
const F0 = pu;
function L0(e) {
  return Le("MuiPopover", e);
}
Ue("MuiPopover", ["root", "paper"]);
const W0 = ["onEntering"], B0 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"], U0 = ["slotProps"];
function il(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function sl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ll(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function lo(e) {
  return typeof e == "function" ? e() : e;
}
const V0 = (e) => {
  const {
    classes: t
  } = e;
  return ze({
    root: ["root"],
    paper: ["paper"]
  }, L0, t);
}, z0 = me(F0, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), mu = me(yi, {
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
}), hu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r, a, i;
  const s = qe({
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
    className: m,
    container: x,
    elevation: y = 8,
    marginThreshold: v = 16,
    open: E,
    PaperProps: C = {},
    slots: w,
    slotProps: b,
    transformOrigin: g = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: I = C0,
    transitionDuration: $ = "auto",
    TransitionProps: {
      onEntering: k
    } = {}
  } = s, W = ve(s.TransitionProps, W0), A = ve(s, B0), M = (r = b == null ? void 0 : b.paper) != null ? r : C, z = h.useRef(), B = ot(z, M.ref), j = T({}, s, {
    anchorOrigin: u,
    anchorReference: f,
    elevation: y,
    marginThreshold: v,
    externalPaperSlotProps: M,
    transformOrigin: g,
    TransitionComponent: I,
    transitionDuration: $,
    TransitionProps: W
  }), _ = V0(j), L = h.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const F = lo(c), he = F && F.nodeType === 1 ? F : dt(z.current).body, V = he.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Q = he.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Q.top === 0 && Q.left === 0 && Q.right === 0 && Q.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: V.top + il(V, u.vertical),
      left: V.left + sl(V, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, f]), q = h.useCallback((F) => ({
    vertical: il(F, g.vertical),
    horizontal: sl(F, g.horizontal)
  }), [g.horizontal, g.vertical]), se = h.useCallback((F) => {
    const he = {
      width: F.offsetWidth,
      height: F.offsetHeight
    }, V = q(he);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ll(V)
      };
    const Q = L();
    let Re = Q.top - V.vertical, ue = Q.left - V.horizontal;
    const We = Re + he.height, Be = ue + he.width, $e = wn(lo(c)), Ee = $e.innerHeight - v, je = $e.innerWidth - v;
    if (Re < v) {
      const Se = Re - v;
      Re -= Se, V.vertical += Se;
    } else if (We > Ee) {
      const Se = We - Ee;
      Re -= Se, V.vertical += Se;
    }
    if (process.env.NODE_ENV !== "production" && he.height > Ee && he.height && Ee && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${he.height - Ee}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), ue < v) {
      const Se = ue - v;
      ue -= Se, V.horizontal += Se;
    } else if (Be > je) {
      const Se = Be - je;
      ue -= Se, V.horizontal += Se;
    }
    return {
      top: `${Math.round(Re)}px`,
      left: `${Math.round(ue)}px`,
      transformOrigin: ll(V)
    };
  }, [c, f, L, q, v]), [te, N] = h.useState(E), H = h.useCallback(() => {
    const F = z.current;
    if (!F)
      return;
    const he = se(F);
    he.top !== null && (F.style.top = he.top), he.left !== null && (F.style.left = he.left), F.style.transformOrigin = he.transformOrigin, N(!0);
  }, [se]), ne = (F, he) => {
    k && k(F, he), H();
  }, Z = () => {
    N(!1);
  };
  h.useEffect(() => {
    E && H();
  }), h.useImperativeHandle(l, () => E ? {
    updatePosition: () => {
      H();
    }
  } : null, [E, H]), h.useEffect(() => {
    if (!E)
      return;
    const F = ec(() => {
      H();
    }), he = wn(c);
    return he.addEventListener("resize", F), () => {
      F.clear(), he.removeEventListener("resize", F);
    };
  }, [c, E, H]);
  let K = $;
  $ === "auto" && !I.muiSupportAuto && (K = void 0);
  const X = x || (c ? dt(lo(c)).body : void 0), J = (a = w == null ? void 0 : w.root) != null ? a : z0, G = (i = w == null ? void 0 : w.paper) != null ? i : mu, re = Sn({
    elementType: G,
    externalSlotProps: T({}, M, {
      style: te ? M.style : T({}, M.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: y,
      ref: B
    },
    ownerState: j,
    className: ge(_.paper, M == null ? void 0 : M.className)
  }), ae = Sn({
    elementType: J,
    externalSlotProps: (b == null ? void 0 : b.root) || {},
    externalForwardedProps: A,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: X,
      open: E
    },
    ownerState: j,
    className: ge(_.root, m)
  }), {
    slotProps: de
  } = ae, ie = ve(ae, U0);
  return /* @__PURE__ */ S.jsx(J, T({}, ie, !Ar(J) && {
    slotProps: de
  }, {
    children: /* @__PURE__ */ S.jsx(I, T({
      appear: !0,
      in: E,
      onEntering: ne,
      onExited: Z,
      timeout: K
    }, W, {
      children: /* @__PURE__ */ S.jsx(G, T({}, re, {
        children: p
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (hu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Nt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Ht(o.oneOfType([Bt, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = lo(e.anchorEl);
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
  container: o.oneOfType([Bt, o.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: ti,
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
    component: ei
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
const q0 = hu;
function H0(e) {
  return Le("MuiMenu", e);
}
Ue("MuiMenu", ["root", "paper", "list"]);
const Y0 = ["onEntering"], K0 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], G0 = {
  vertical: "top",
  horizontal: "right"
}, X0 = {
  vertical: "top",
  horizontal: "left"
}, J0 = (e) => {
  const {
    classes: t
  } = e;
  return ze({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, H0, t);
}, Q0 = me(q0, {
  shouldForwardProp: (e) => un(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Z0 = me(mu, {
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
}), ex = me(w0, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), vu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var r, a;
  const i = qe({
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
    PaperProps: m = {},
    PopoverClasses: x,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: v
    } = {},
    variant: E = "selectedMenu",
    slots: C = {},
    slotProps: w = {}
  } = i, b = ve(i.TransitionProps, Y0), g = ve(i, K0), I = er(), $ = I.direction === "rtl", k = T({}, i, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: v,
    PaperProps: m,
    transitionDuration: y,
    TransitionProps: b,
    variant: E
  }), W = J0(k), A = s && !u && p, M = h.useRef(null), z = (te, N) => {
    M.current && M.current.adjustStyleForScrollbar(te, I), v && v(te, N);
  }, B = (te) => {
    te.key === "Tab" && (te.preventDefault(), f && f(te, "tabKeyDown"));
  };
  let j = -1;
  h.Children.map(l, (te, N) => {
    /* @__PURE__ */ h.isValidElement(te) && (process.env.NODE_ENV !== "production" && Nr.isFragment(te) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), te.props.disabled || (E === "selectedMenu" && te.props.selected || j === -1) && (j = N));
  });
  const _ = (r = C.paper) != null ? r : Z0, L = (a = w.paper) != null ? a : m, q = Sn({
    elementType: C.root,
    externalSlotProps: w.root,
    ownerState: k,
    className: [W.root, c]
  }), se = Sn({
    elementType: _,
    externalSlotProps: L,
    ownerState: k,
    className: W.paper
  });
  return /* @__PURE__ */ S.jsx(Q0, T({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: $ ? "right" : "left"
    },
    transformOrigin: $ ? G0 : X0,
    slots: {
      paper: _,
      root: C.root
    },
    slotProps: {
      root: q,
      paper: se
    },
    open: p,
    ref: n,
    transitionDuration: y,
    TransitionProps: T({
      onEntering: z
    }, b),
    ownerState: k
  }, g, {
    classes: x,
    children: /* @__PURE__ */ S.jsx(ex, T({
      onKeyDown: B,
      actions: M,
      autoFocus: s && (j === -1 || u),
      autoFocusItem: A,
      variant: E
    }, d, {
      className: ge(W.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (vu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Bt, o.func]),
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
const tx = vu;
function nx(e) {
  return Le("MuiNativeSelect", e);
}
const rx = Ue("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), $i = rx, ox = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], ax = (e) => {
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
  return ze(l, nx, t);
}, gu = ({
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
  [`&.${$i.disabled}`]: {
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
}), ix = me("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: un,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${$i.multiple}`]: t.multiple
    }];
  }
})(gu), yu = ({
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
  [`&.${$i.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), sx = me("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${fe(n.variant)}`], n.open && t.iconOpen];
  }
})(yu), bu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: a,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ve(t, ox), d = T({}, t, {
    disabled: a,
    variant: c,
    error: i
  }), f = ax(d);
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx(ix, T({
      ownerState: d,
      className: ge(f.select, r),
      disabled: a,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ S.jsx(sx, {
      as: s,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (bu.propTypes = {
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
  inputRef: Nt,
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
const lx = bu;
function cx(e) {
  return Le("MuiSelect", e);
}
const ux = Ue("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), vr = ux;
var cl;
const dx = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], fx = me("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${vr.select}`]: t.select
      },
      {
        [`&.${vr.select}`]: t[n.variant]
      },
      {
        [`&.${vr.error}`]: t.error
      },
      {
        [`&.${vr.multiple}`]: t.multiple
      }
    ];
  }
})(gu, {
  // Win specificity over the input base
  [`&.${vr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), px = me("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${fe(n.variant)}`], n.open && t.iconOpen];
  }
})(yu), mx = me("input", {
  shouldForwardProp: (e) => um(e) && e !== "classes",
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
function ul(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function hx(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const vx = (e) => {
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
  return ze(l, cx, t);
}, xu = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    error: m = !1,
    IconComponent: x,
    inputRef: y,
    labelId: v,
    MenuProps: E = {},
    multiple: C,
    name: w,
    onBlur: b,
    onChange: g,
    onClose: I,
    onFocus: $,
    onOpen: k,
    open: W,
    readOnly: A,
    renderValue: M,
    SelectDisplayProps: z = {},
    tabIndex: B,
    value: j,
    variant: _ = "standard"
  } = t, L = ve(t, dx), [q, se] = br({
    controlled: j,
    default: d,
    name: "Select"
  }), [te, N] = br({
    controlled: W,
    default: u,
    name: "Select"
  }), H = h.useRef(null), ne = h.useRef(null), [Z, K] = h.useState(null), {
    current: X
  } = h.useRef(W != null), [J, G] = h.useState(), re = ot(n, y), ae = h.useCallback((ce) => {
    ne.current = ce, ce && K(ce);
  }, []), de = Z == null ? void 0 : Z.parentNode;
  h.useImperativeHandle(re, () => ({
    focus: () => {
      ne.current.focus();
    },
    node: H.current,
    value: q
  }), [q]), h.useEffect(() => {
    u && te && Z && !X && (G(s ? null : de.clientWidth), ne.current.focus());
  }, [Z, s]), h.useEffect(() => {
    i && ne.current.focus();
  }, [i]), h.useEffect(() => {
    if (!v)
      return;
    const ce = dt(ne.current).getElementById(v);
    if (ce) {
      const ye = () => {
        getSelection().isCollapsed && ne.current.focus();
      };
      return ce.addEventListener("click", ye), () => {
        ce.removeEventListener("click", ye);
      };
    }
  }, [v]);
  const ie = (ce, ye) => {
    ce ? k && k(ye) : I && I(ye), X || (G(s ? null : de.clientWidth), N(ce));
  }, F = (ce) => {
    ce.button === 0 && (ce.preventDefault(), ne.current.focus(), ie(!0, ce));
  }, he = (ce) => {
    ie(!1, ce);
  }, V = h.Children.toArray(l), Q = (ce) => {
    const ye = V.find((Pe) => Pe.props.value === ce.target.value);
    ye !== void 0 && (se(ye.props.value), g && g(ce, ye));
  }, Re = (ce) => (ye) => {
    let Pe;
    if (ye.currentTarget.hasAttribute("tabindex")) {
      if (C) {
        Pe = Array.isArray(q) ? q.slice() : [];
        const Xe = q.indexOf(ce.props.value);
        Xe === -1 ? Pe.push(ce.props.value) : Pe.splice(Xe, 1);
      } else
        Pe = ce.props.value;
      if (ce.props.onClick && ce.props.onClick(ye), q !== Pe && (se(Pe), g)) {
        const Xe = ye.nativeEvent || ye, Xt = new Xe.constructor(Xe.type, Xe);
        Object.defineProperty(Xt, "target", {
          writable: !0,
          value: {
            value: Pe,
            name: w
          }
        }), g(Xt, ce);
      }
      C || ie(!1, ye);
    }
  }, ue = (ce) => {
    A || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ce.key) !== -1 && (ce.preventDefault(), ie(!0, ce));
  }, We = Z !== null && te, Be = (ce) => {
    !We && b && (Object.defineProperty(ce, "target", {
      writable: !0,
      value: {
        value: q,
        name: w
      }
    }), b(ce));
  };
  delete L["aria-invalid"];
  let $e, Ee;
  const je = [];
  let Se = !1, Ke = !1;
  (Eo({
    value: q
  }) || p) && (M ? $e = M(q) : Se = !0);
  const Ge = V.map((ce) => {
    if (!/* @__PURE__ */ h.isValidElement(ce))
      return null;
    process.env.NODE_ENV !== "production" && Nr.isFragment(ce) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let ye;
    if (C) {
      if (!Array.isArray(q))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : an(2));
      ye = q.some((Pe) => ul(Pe, ce.props.value)), ye && Se && je.push(ce.props.children);
    } else
      ye = ul(q, ce.props.value), ye && Se && (Ee = ce.props.children);
    return ye && (Ke = !0), /* @__PURE__ */ h.cloneElement(ce, {
      "aria-selected": ye ? "true" : "false",
      onClick: Re(ce),
      onKeyUp: (Pe) => {
        Pe.key === " " && Pe.preventDefault(), ce.props.onKeyUp && ce.props.onKeyUp(Pe);
      },
      role: "option",
      selected: ye,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ce.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && h.useEffect(() => {
    if (!Ke && !C && q !== "") {
      const ce = V.map((ye) => ye.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${q}\` for the select ${w ? `(name="${w}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ce.filter((ye) => ye != null).map((ye) => `\`${ye}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ke, V, C, w, q]), Se && (C ? je.length === 0 ? $e = null : $e = je.reduce((ce, ye, Pe) => (ce.push(ye), Pe < je.length - 1 && ce.push(", "), ce), []) : $e = Ee);
  let Qe = J;
  !s && X && Z && (Qe = de.clientWidth);
  let Ce;
  typeof B < "u" ? Ce = B : Ce = f ? null : 0;
  const pe = z.id || (w ? `mui-component-select-${w}` : void 0), le = T({}, t, {
    variant: _,
    value: q,
    open: We,
    error: m
  }), et = vx(le);
  return /* @__PURE__ */ S.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ S.jsx(fx, T({
      ref: ae,
      tabIndex: Ce,
      role: "button",
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": We ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": a,
      "aria-labelledby": [v, pe].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: ue,
      onMouseDown: f || A ? null : F,
      onBlur: Be,
      onFocus: $
    }, z, {
      ownerState: le,
      className: ge(z.className, et.select, c),
      id: pe,
      children: hx($e) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        cl || (cl = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : $e
    })), /* @__PURE__ */ S.jsx(mx, T({
      "aria-invalid": m,
      value: Array.isArray(q) ? q.join(",") : q,
      name: w,
      ref: H,
      "aria-hidden": !0,
      onChange: Q,
      tabIndex: -1,
      disabled: f,
      className: et.nativeInput,
      autoFocus: i,
      ownerState: le
    }, L)), /* @__PURE__ */ S.jsx(px, {
      as: x,
      className: et.icon,
      ownerState: le
    }), /* @__PURE__ */ S.jsx(tx, T({
      id: `menu-${w || ""}`,
      anchorEl: de,
      open: We,
      onClose: he,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, E, {
      MenuListProps: T({
        "aria-labelledby": v,
        role: "listbox",
        disableListWrap: !0
      }, E.MenuListProps),
      PaperProps: T({}, E.PaperProps, {
        style: T({
          minWidth: Qe
        }, E.PaperProps != null ? E.PaperProps.style : null)
      }),
      children: Ge
    }))]
  });
});
process.env.NODE_ENV !== "production" && (xu.propTypes = {
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
  inputRef: Nt,
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
const gx = xu, yx = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], bx = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Ii = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => un(e) && e !== "variant",
  slot: "Root"
}, xx = me(Qc, Ii)(""), Ox = me(tu, Ii)(""), Ex = me(Zc, Ii)(""), Ni = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: a = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = Xc,
    id: f,
    input: p,
    inputProps: m,
    label: x,
    labelId: y,
    MenuProps: v,
    multiple: E = !1,
    native: C = !1,
    onClose: w,
    onOpen: b,
    open: g,
    renderValue: I,
    SelectDisplayProps: $,
    variant: k = "outlined"
  } = r, W = ve(r, yx), A = C ? lx : gx, M = nr(), z = tr({
    props: r,
    muiFormControl: M,
    states: ["variant", "error"]
  }), B = z.variant || k, j = T({}, r, {
    variant: B,
    classes: s
  }), _ = bx(j), L = p || {
    standard: /* @__PURE__ */ S.jsx(xx, {
      ownerState: j
    }),
    outlined: /* @__PURE__ */ S.jsx(Ox, {
      label: x,
      ownerState: j
    }),
    filled: /* @__PURE__ */ S.jsx(Ex, {
      ownerState: j
    })
  }[B], q = ot(n, L.ref);
  return /* @__PURE__ */ S.jsx(h.Fragment, {
    children: /* @__PURE__ */ h.cloneElement(L, T({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: A,
      inputProps: T({
        children: i,
        error: z.error,
        IconComponent: d,
        variant: B,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: E
      }, C ? {
        id: f
      } : {
        autoWidth: a,
        defaultOpen: c,
        displayEmpty: u,
        labelId: y,
        MenuProps: v,
        onClose: w,
        onOpen: b,
        open: g,
        renderValue: I,
        SelectDisplayProps: T({
          id: f
        }, $)
      }, m, {
        classes: m ? St(_, m.classes) : _
      }, p ? p.props.inputProps : {})
    }, E && C && B === "outlined" ? {
      notched: !0
    } : {}, {
      ref: q,
      className: ge(L.props.className, l)
    }, !p && {
      variant: B
    }, W))
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
Ni.muiName = "Select";
const wx = Ni;
function Tx(e) {
  return Le("MuiTextField", e);
}
Ue("MuiTextField", ["root"]);
const Sx = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], Cx = {
  standard: Qc,
  filled: Zc,
  outlined: tu
}, Px = (e) => {
  const {
    classes: t
  } = e;
  return ze({
    root: ["root"]
  }, Tx, t);
}, Rx = me(c0, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ou = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = qe({
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
    fullWidth: m = !1,
    helperText: x,
    id: y,
    InputLabelProps: v,
    inputProps: E,
    InputProps: C,
    inputRef: w,
    label: b,
    maxRows: g,
    minRows: I,
    multiline: $ = !1,
    name: k,
    onBlur: W,
    onChange: A,
    onClick: M,
    onFocus: z,
    placeholder: B,
    required: j = !1,
    rows: _,
    select: L = !1,
    SelectProps: q,
    type: se,
    value: te,
    variant: N = "outlined"
  } = r, H = ve(r, Sx), ne = T({}, r, {
    autoFocus: i,
    color: c,
    disabled: d,
    error: f,
    fullWidth: m,
    multiline: $,
    required: j,
    select: L,
    variant: N
  }), Z = Px(ne);
  process.env.NODE_ENV !== "production" && L && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const K = {};
  N === "outlined" && (v && typeof v.shrink < "u" && (K.notched = v.shrink), K.label = b), L && ((!q || !q.native) && (K.id = void 0), K["aria-describedby"] = void 0);
  const X = tc(y), J = x && X ? `${X}-helper-text` : void 0, G = b && X ? `${X}-label` : void 0, re = Cx[N], ae = /* @__PURE__ */ S.jsx(re, T({
    "aria-describedby": J,
    autoComplete: a,
    autoFocus: i,
    defaultValue: u,
    fullWidth: m,
    multiline: $,
    name: k,
    rows: _,
    maxRows: g,
    minRows: I,
    type: se,
    value: te,
    id: X,
    inputRef: w,
    onBlur: W,
    onChange: A,
    onFocus: z,
    onClick: M,
    placeholder: B,
    inputProps: E
  }, K, C));
  return /* @__PURE__ */ S.jsxs(Rx, T({
    className: ge(Z.root, l),
    disabled: d,
    error: f,
    fullWidth: m,
    ref: n,
    required: j,
    color: c,
    variant: N,
    ownerState: ne
  }, H, {
    children: [b != null && b !== "" && /* @__PURE__ */ S.jsx(o0, T({
      htmlFor: X,
      id: G
    }, v, {
      children: b
    })), L ? /* @__PURE__ */ S.jsx(wx, T({
      "aria-describedby": J,
      id: X,
      labelId: G,
      value: te,
      input: ae
    }, q, {
      children: s
    })) : ae, x && /* @__PURE__ */ S.jsx(h0, T({
      id: J
    }, p, {
      children: x
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Ou.propTypes = {
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
  inputRef: Nt,
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
const $x = Ou;
var Ix = (e) => e.type === "checkbox", Nx = (e) => e instanceof Date, Eu = (e) => e == null;
const kx = (e) => typeof e == "object";
var rr = (e) => !Eu(e) && !Array.isArray(e) && kx(e) && !Nx(e), Mx = (e) => rr(e) && e.target ? Ix(e.target) ? e.target.checked : e.target.value : e, Ax = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, _x = (e, t) => e.has(Ax(t)), Dx = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return rr(t) && t.hasOwnProperty("isPrototypeOf");
}, jx = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ki(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(jx && (e instanceof Blob || e instanceof FileList)) && (n || rr(e)))
    if (t = n ? [] : {}, !n && !Dx(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = ki(e[r]));
  else
    return e;
  return t;
}
var wu = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Fa = (e) => e === void 0, gt = (e, t, n) => {
  if (!t || !rr(e))
    return n;
  const r = wu(t.split(/[,[\].]+?/)).reduce((a, i) => Eu(a) ? a : a[i], e);
  return Fa(r) || r === e ? Fa(e[t]) ? n : e[t] : r;
};
const dl = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, La = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Fx = Fe.createContext(null), Mi = () => Fe.useContext(Fx);
var Lx = (e, t, n, r = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(a, i, {
      get: () => {
        const s = i;
        return t._proxyFormState[s] !== La.all && (t._proxyFormState[s] = !r || La.all), n && (n[s] = !0), e[s];
      }
    });
  return a;
}, Wx = (e) => rr(e) && !Object.keys(e).length, Bx = (e, t, n, r) => {
  n(e);
  const { name: a, ...i } = e;
  return Wx(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((s) => t[s] === (!r || La.all));
}, Ux = (e) => Array.isArray(e) ? e : [e], Tu = (e, t, n) => n && t ? e === t : !e || !t || e === t || Ux(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Su(e) {
  const t = Fe.useRef(e);
  t.current = e, Fe.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function Vx(e) {
  const t = Mi(), { control: n = t.control, disabled: r, name: a, exact: i } = e || {}, [s, l] = Fe.useState(n._formState), c = Fe.useRef(!0), u = Fe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = Fe.useRef(a);
  return d.current = a, Su({
    disabled: r,
    next: (f) => c.current && Tu(d.current, f.name, i) && Bx(f, u.current, n._updateFormState) && l({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), Fe.useEffect(() => (c.current = !0, u.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Lx(s, n, u.current, !1);
}
var zx = (e) => typeof e == "string", qx = (e, t, n, r, a) => zx(e) ? (r && t.watch.add(e), gt(n, e, a)) : Array.isArray(e) ? e.map((i) => (r && t.watch.add(i), gt(n, i))) : (r && (t.watchAll = !0), n);
function Hx(e) {
  const t = Mi(), { control: n = t.control, name: r, defaultValue: a, disabled: i, exact: s } = e || {}, l = Fe.useRef(r);
  l.current = r, Su({
    disabled: i,
    subject: n._subjects.values,
    next: (d) => {
      Tu(l.current, d.name, s) && u(ki(qx(l.current, n._names, d.values || n._formValues, !1, a)));
    }
  });
  const [c, u] = Fe.useState(n._getWatch(r, a));
  return Fe.useEffect(() => n._removeUnmounted()), c;
}
var Yx = (e) => /^\w*$/.test(e), Kx = (e) => wu(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function fl(e, t, n) {
  let r = -1;
  const a = Yx(t) ? [t] : Kx(t), i = a.length, s = i - 1;
  for (; ++r < i; ) {
    const l = a[r];
    let c = n;
    if (r !== s) {
      const u = e[l];
      c = rr(u) || Array.isArray(u) ? u : isNaN(+a[r + 1]) ? {} : [];
    }
    e[l] = c, e = e[l];
  }
  return e;
}
function Gx(e) {
  const t = Mi(), { name: n, control: r = t.control, shouldUnregister: a } = e, i = _x(r._names.array, n), s = Hx({
    control: r,
    name: n,
    defaultValue: gt(r._formValues, n, gt(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = Vx({
    control: r,
    name: n
  }), c = Fe.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), Fe.useEffect(() => {
    const u = r._options.shouldUnregister || a, d = (f, p) => {
      const m = gt(r._fields, f);
      m && (m._f.mount = p);
    };
    if (d(n, !0), u) {
      const f = ki(gt(r._options.defaultValues, n));
      fl(r._defaultValues, n, f), Fa(gt(r._formValues, n)) && fl(r._formValues, n, f);
    }
    return () => {
      (i ? u && !r._state.action : u) ? r.unregister(n) : d(n, !1);
    };
  }, [n, r, i, a]), {
    field: {
      name: n,
      value: s,
      onChange: Fe.useCallback((u) => c.current.onChange({
        target: {
          value: Mx(u),
          name: n
        },
        type: dl.CHANGE
      }), [n]),
      onBlur: Fe.useCallback(() => c.current.onBlur({
        target: {
          value: gt(r._formValues, n),
          name: n
        },
        type: dl.BLUR
      }), [n, r]),
      ref: (u) => {
        const d = gt(r._fields, n);
        d && u && (d._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (f) => u.setCustomValidity(f),
          reportValidity: () => u.reportValidity()
        });
      }
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!gt(l.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!gt(l.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!gt(l.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => gt(l.errors, n)
      }
    })
  };
}
const Hr = (e) => e.render(Gx(e)), Xx = _c(), Jx = (e) => {
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
  } = e, [d, f] = qt(n), [p, m] = qt(""), { isLoading: x, refetch: y } = zl(["options"], {
    queryFn: () => u({
      filter: {
        query: p
      }
    }),
    enabled: !1
  });
  Oa(() => {
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
  const v = (b, g, I) => {
    g && g.inputValue ? l && l(g.inputValue) : (b.target.value = (g == null ? void 0 : g.id) ?? null, I(b));
  }, E = (b) => typeof b == "string" ? b : b.inputValue ? b.inputValue : c ? c(b) : b.name, C = (b, g) => /* @__PURE__ */ S.jsx("li", { ...b, children: c ? c(g) : g.name }), w = (b, g) => {
    const I = Xx(b, g), $ = String(g.inputValue).trim(), k = I.length === 0;
    return l && $ !== "" && (k || !b.find((W) => W.name === $)) && I.push({
      inputValue: $,
      name: `Agregar "${$}"`
    }), I;
  };
  return /* @__PURE__ */ S.jsx(Fr, { fullWidth: !0, children: /* @__PURE__ */ S.jsx(
    Hr,
    {
      control: t,
      name: a,
      render: ({ field: { ref: b, onChange: g, value: I, ...$ } }) => /* @__PURE__ */ S.jsx(
        Ib,
        {
          multiple: i,
          value: d.find((k) => k.id === Number(I)) ? d.find((k) => k.id === Number(I)).name : "",
          onChange: (k, W) => v(k, W, g),
          onKeyDown: (k) => m(k.target.value),
          filterOptions: w,
          options: d,
          selectOnFocus: !0,
          clearOnBlur: !0,
          handleHomeEndKeys: !0,
          getOptionLabel: E,
          renderOption: C,
          freeSolo: !0,
          renderInput: (k) => /* @__PURE__ */ S.jsx(
            $x,
            {
              ...k,
              ...$,
              inputRef: b,
              required: s,
              name: a,
              label: r,
              InputProps: {
                ...k.InputProps,
                endAdornment: /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
                  x ? /* @__PURE__ */ S.jsx(_l, { color: "inherit", size: 20 }) : null,
                  k.InputProps.endAdornment
                ] })
              }
            }
          )
        }
      )
    }
  ) });
};
Jx.propTypes = {
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
const Qx = ({ control: e, defaultChecked: t = !1, name: n, labelText: r = "", labelPlacement: a = "end", ...i }) => /* @__PURE__ */ S.jsx(Fr, { children: /* @__PURE__ */ S.jsx(
  Hr,
  {
    control: e,
    name: n,
    defaultValue: t,
    render: ({ field: s }) => /* @__PURE__ */ S.jsx(
      jl,
      {
        labelPlacement: a,
        control: /* @__PURE__ */ S.jsx(
          ud,
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
Qx.propTypes = {
  control: o.object.isRequired,
  defaultChecked: o.bool,
  name: o.string.isRequired,
  labelText: o.string,
  fullWidth: o.bool,
  labelPlacement: o.string
};
function Zx(e = []) {
  return e.map((t) => /* @__PURE__ */ S.jsx(pd, { value: t.id, children: t.name }, t.id));
}
const Cu = ({ control: e, data: t, name: n, labelText: r = "", required: a = !1, disabled: i = !1, render: s, ...l }) => {
  const c = od(), u = s || Zx;
  return /* @__PURE__ */ S.jsxs(Fr, { fullWidth: !0, children: [
    /* @__PURE__ */ S.jsx(dd, { id: c, required: a, disabled: i, children: r }),
    /* @__PURE__ */ S.jsx(
      Hr,
      {
        control: e,
        name: n,
        render: ({ field: { onChange: d, onBlur: f, value: p, name: m, ref: x } }) => /* @__PURE__ */ S.jsx(
          fd,
          {
            required: a,
            labelId: c,
            label: r,
            onBlur: f,
            onChange: d,
            inputRef: x,
            value: p || "",
            name: m,
            disabled: i,
            ...l,
            children: t.length > 0 && u(t)
          }
        )
      }
    )
  ] });
};
Cu.propTypes = {
  control: o.object.isRequired,
  data: o.array,
  name: o.string.isRequired,
  labelText: o.string,
  createOption: o.func,
  required: o.bool,
  disabled: o.bool,
  render: o.func
};
Cu.defaultProps = {
  data: []
};
const eO = ({
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
}) => /* @__PURE__ */ S.jsx(Fr, { fullWidth: a, ...f, children: /* @__PURE__ */ S.jsx(
  Hr,
  {
    control: e,
    name: t,
    render: ({ field: { onChange: p, onBlur: m, value: x, name: y, ref: v } }) => /* @__PURE__ */ S.jsx(
      md,
      {
        helperText: d,
        multiline: c,
        rows: u,
        required: r,
        label: n,
        onBlur: m,
        onChange: p,
        inputRef: l || v,
        value: x || "",
        name: y,
        InputProps: i,
        InputLabelProps: s,
        ...f
      }
    )
  }
) });
eO.propTypes = {
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
const tO = ({ control: e, defaultChecked: t = !1, name: n, labelText: r = "", labelPlacement: a = "end", ...i }) => /* @__PURE__ */ S.jsx(Fr, { children: /* @__PURE__ */ S.jsx(
  Hr,
  {
    control: e,
    name: n,
    defaultValue: t,
    render: ({ field: s }) => /* @__PURE__ */ S.jsx(
      jl,
      {
        labelPlacement: a,
        control: /* @__PURE__ */ S.jsx(
          hd,
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
tO.propTypes = {
  control: o.object.isRequired,
  defaultChecked: o.bool,
  name: o.string.isRequired,
  labelText: o.string,
  fullWidth: o.bool,
  labelPlacement: o.string
};
const Vw = (e, t) => {
  if (!e)
    return !1;
  const n = e.permissions;
  for (let r in t)
    if (!n[r] || n[r] === !1)
      return !1;
  return !0;
}, Ot = {
  ASC: "asc",
  DESC: "desc"
};
function nO(e, t, n, r = Ot.ASC, a = null) {
  let i = e[n] ?? "", s = t[n] ?? "";
  if (Ra(new Date(i)) && Ra(new Date(s)))
    return i = new Date(i), s = new Date(s), r === Ot.ASC ? i - s : s - i;
  n === "status" && (i = i.deleted_at ? "inactivo" : "activo", s = s.deleted_at ? "inactivo" : "activo"), typeof a == "function" && (i = a(e, n), s = a(t, n)), (typeof i == "object" || typeof s == "object") && (i = i.name, s = s.name), i = String(i).toLowerCase().trim(), s = String(s).toLowerCase().trim();
  const l = i.localeCompare(s);
  return r === Ot.ASC ? l : -l;
}
const Pu = vd({
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
});
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
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wa.apply(this, arguments);
}
var pl;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(pl || (pl = {}));
function Ze(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Yr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Ba(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Ru(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var ml;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(ml || (ml = {}));
function Ua(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function rO(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: a = ""
  } = typeof e == "string" ? Ru(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : oO(n, t) : t,
    search: aO(r),
    hash: iO(a)
  };
}
function oO(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
  }), n.length > 1 ? n.join("/") : "/";
}
function ca(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function $u(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Iu(e, t, n, r) {
  r === void 0 && (r = !1);
  let a;
  typeof e == "string" ? a = Ru(e) : (a = Wa({}, e), Ze(!a.pathname || !a.pathname.includes("?"), ca("?", "pathname", "search", a)), Ze(!a.pathname || !a.pathname.includes("#"), ca("#", "pathname", "hash", a)), Ze(!a.search || !a.search.includes("#"), ca("#", "search", "hash", a)));
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
  let c = rO(a, l), u = s && s !== "/" && s.endsWith("/"), d = (i || s === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Ai = (e) => e.join("/").replace(/\/\/+/g, "/"), aO = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, iO = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Nu = ["post", "put", "patch", "delete"];
new Set(Nu);
const sO = ["get", ...Nu];
new Set(sO);
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
function Va() {
  return Va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Va.apply(this, arguments);
}
const Yo = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (Yo.displayName = "DataRouter");
const ku = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (ku.displayName = "DataRouterState");
const lO = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (lO.displayName = "Await");
const fn = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (fn.displayName = "Navigation");
const _i = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (_i.displayName = "Location");
const or = /* @__PURE__ */ h.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (or.displayName = "Route");
const cO = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (cO.displayName = "RouteError");
function uO(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Di() || (process.env.NODE_ENV !== "production" ? Ze(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : Ze(!1));
  let {
    basename: r,
    navigator: a
  } = h.useContext(fn), {
    hash: i,
    pathname: s,
    search: l
  } = Ko(e, {
    relative: n
  }), c = s;
  return r !== "/" && (c = s === "/" ? r : Ai([r, s])), a.createHref({
    pathname: c,
    search: l,
    hash: i
  });
}
function Di() {
  return h.useContext(_i) != null;
}
function ar() {
  return Di() || (process.env.NODE_ENV !== "production" ? Ze(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Ze(!1)), h.useContext(_i).location;
}
const Mu = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Au(e) {
  h.useContext(fn).static || h.useLayoutEffect(e);
}
function _u() {
  let {
    isDataRoute: e
  } = h.useContext(or);
  return e ? hO() : dO();
}
function dO() {
  Di() || (process.env.NODE_ENV !== "production" ? Ze(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Ze(!1));
  let e = h.useContext(Yo), {
    basename: t,
    navigator: n
  } = h.useContext(fn), {
    matches: r
  } = h.useContext(or), {
    pathname: a
  } = ar(), i = JSON.stringify($u(r).map((c) => c.pathnameBase)), s = h.useRef(!1);
  return Au(() => {
    s.current = !0;
  }), h.useCallback(function(c, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && Yr(s.current, Mu), !s.current)
      return;
    if (typeof c == "number") {
      n.go(c);
      return;
    }
    let d = Iu(c, JSON.parse(i), a, u.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Ai([t, d.pathname])), (u.replace ? n.replace : n.push)(d, u.state, u);
  }, [t, n, i, a, e]);
}
function Ko(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    matches: r
  } = h.useContext(or), {
    pathname: a
  } = ar(), i = JSON.stringify($u(r).map((s) => s.pathnameBase));
  return h.useMemo(() => Iu(e, JSON.parse(i), a, n === "path"), [e, i, a, n]);
}
var Du = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Du || {}), ji = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ji || {});
function ju(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function fO(e) {
  let t = h.useContext(Yo);
  return t || (process.env.NODE_ENV !== "production" ? Ze(!1, ju(e)) : Ze(!1)), t;
}
function pO(e) {
  let t = h.useContext(or);
  return t || (process.env.NODE_ENV !== "production" ? Ze(!1, ju(e)) : Ze(!1)), t;
}
function Fu(e) {
  let t = pO(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? Ze(!1, e + ' can only be used on routes that contain a unique "id"') : Ze(!1)), n.route.id;
}
function mO() {
  return Fu(ji.UseRouteId);
}
function hO() {
  let {
    router: e
  } = fO(Du.UseNavigateStable), t = Fu(ji.UseNavigateStable), n = h.useRef(!1);
  return Au(() => {
    n.current = !0;
  }), h.useCallback(function(a, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && Yr(n.current, Mu), n.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, Va({
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
function Pn() {
  return Pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pn.apply(this, arguments);
}
function Fi(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
const co = "get", uo = "application/x-www-form-urlencoded";
function Go(e) {
  return e != null && typeof e.tagName == "string";
}
function vO(e) {
  return Go(e) && e.tagName.toLowerCase() === "button";
}
function gO(e) {
  return Go(e) && e.tagName.toLowerCase() === "form";
}
function yO(e) {
  return Go(e) && e.tagName.toLowerCase() === "input";
}
function bO(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function xO(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !bO(e);
}
function za(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return t.concat(Array.isArray(r) ? r.map((a) => [n, a]) : [[n, r]]);
  }, []));
}
function OO(e, t) {
  let n = za(e);
  return t && t.forEach((r, a) => {
    n.has(a) || t.getAll(a).forEach((i) => {
      n.append(a, i);
    });
  }), n;
}
let to = null;
function EO() {
  if (to === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), to = !1;
    } catch {
      to = !0;
    }
  return to;
}
const wO = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ua(e) {
  return e != null && !wO.has(e) ? (process.env.NODE_ENV !== "production" && Yr(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + uo + '"')), null) : e;
}
function TO(e, t) {
  let n, r, a, i, s;
  if (gO(e)) {
    let l = e.getAttribute("action");
    r = l ? Ua(l, t) : null, n = e.getAttribute("method") || co, a = ua(e.getAttribute("enctype")) || uo, i = new FormData(e);
  } else if (vO(e) || yO(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (r = c ? Ua(c, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || co, a = ua(e.getAttribute("formenctype")) || ua(l.getAttribute("enctype")) || uo, i = new FormData(l, e), !EO()) {
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
    if (Go(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = co, r = null, a = uo, s = e;
  }
  return i && a === "text/plain" && (s = i, i = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: a,
    formData: i,
    body: s
  };
}
const SO = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], CO = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], PO = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"];
process.env.NODE_ENV;
const RO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $O = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Lu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: a,
    reloadDocument: i,
    replace: s,
    state: l,
    target: c,
    to: u,
    preventScrollReset: d
  } = t, f = Fi(t, SO), {
    basename: p
  } = h.useContext(fn), m, x = !1;
  if (typeof u == "string" && $O.test(u) && (m = u, RO))
    try {
      let C = new URL(window.location.href), w = u.startsWith("//") ? new URL(C.protocol + u) : new URL(u), b = Ua(w.pathname, p);
      w.origin === C.origin && b != null ? u = b + w.search + w.hash : x = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Yr(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let y = uO(u, {
    relative: a
  }), v = AO(u, {
    replace: s,
    state: l,
    target: c,
    preventScrollReset: d,
    relative: a
  });
  function E(C) {
    r && r(C), C.defaultPrevented || v(C);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ h.createElement("a", Pn({}, f, {
      href: m || y,
      onClick: x || i ? r : E,
      ref: n,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (Lu.displayName = "Link");
const IO = /* @__PURE__ */ h.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: s = !1,
    style: l,
    to: c,
    children: u
  } = t, d = Fi(t, CO), f = Ko(c, {
    relative: d.relative
  }), p = ar(), m = h.useContext(ku), {
    navigator: x
  } = h.useContext(fn), y = x.encodeLocation ? x.encodeLocation(f).pathname : f.pathname, v = p.pathname, E = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
  a || (v = v.toLowerCase(), E = E ? E.toLowerCase() : null, y = y.toLowerCase());
  let C = v === y || !s && v.startsWith(y) && v.charAt(y.length) === "/", w = E != null && (E === y || !s && E.startsWith(y) && E.charAt(y.length) === "/"), b = C ? r : void 0, g;
  typeof i == "function" ? g = i({
    isActive: C,
    isPending: w
  }) : g = [i, C ? "active" : null, w ? "pending" : null].filter(Boolean).join(" ");
  let I = typeof l == "function" ? l({
    isActive: C,
    isPending: w
  }) : l;
  return /* @__PURE__ */ h.createElement(Lu, Pn({}, d, {
    "aria-current": b,
    className: g,
    ref: n,
    style: I,
    to: c
  }), typeof u == "function" ? u({
    isActive: C,
    isPending: w
  }) : u);
});
process.env.NODE_ENV !== "production" && (IO.displayName = "NavLink");
const NO = /* @__PURE__ */ h.forwardRef((e, t) => {
  let n = DO();
  return /* @__PURE__ */ h.createElement(Wu, Pn({}, e, {
    submit: n,
    ref: t
  }));
});
process.env.NODE_ENV !== "production" && (NO.displayName = "Form");
const Wu = /* @__PURE__ */ h.forwardRef((e, t) => {
  let {
    reloadDocument: n,
    replace: r,
    state: a,
    method: i = co,
    action: s,
    onSubmit: l,
    submit: c,
    relative: u,
    preventScrollReset: d
  } = e, f = Fi(e, PO), p = i.toLowerCase() === "get" ? "get" : "post", m = jO(s, {
    relative: u
  }), x = (y) => {
    if (l && l(y), y.defaultPrevented)
      return;
    y.preventDefault();
    let v = y.nativeEvent.submitter, E = (v == null ? void 0 : v.getAttribute("formmethod")) || i;
    c(v || y.currentTarget, {
      method: E,
      replace: r,
      state: a,
      relative: u,
      preventScrollReset: d
    });
  };
  return /* @__PURE__ */ h.createElement("form", Pn({
    ref: t,
    method: p,
    action: m,
    onSubmit: n ? l : x
  }, f));
});
process.env.NODE_ENV !== "production" && (Wu.displayName = "FormImpl");
process.env.NODE_ENV;
var qa;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher";
})(qa || (qa = {}));
var hl;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(hl || (hl = {}));
function kO(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function MO(e) {
  let t = h.useContext(Yo);
  return t || (process.env.NODE_ENV !== "production" ? Ze(!1, kO(e)) : Ze(!1)), t;
}
function AO(e, t) {
  let {
    target: n,
    replace: r,
    state: a,
    preventScrollReset: i,
    relative: s
  } = t === void 0 ? {} : t, l = _u(), c = ar(), u = Ko(e, {
    relative: s
  });
  return h.useCallback((d) => {
    if (xO(d, n)) {
      d.preventDefault();
      let f = r !== void 0 ? r : Ba(c) === Ba(u);
      l(e, {
        replace: f,
        state: a,
        preventScrollReset: i,
        relative: s
      });
    }
  }, [c, l, u, r, a, n, e, i, s]);
}
function Bu(e) {
  process.env.NODE_ENV !== "production" && Yr(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
  let t = h.useRef(za(e)), n = h.useRef(!1), r = ar(), a = h.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    OO(r.search, n.current ? null : t.current)
  ), [r.search]), i = _u(), s = h.useCallback((l, c) => {
    const u = za(typeof l == "function" ? l(a) : l);
    n.current = !0, i("?" + u, c);
  }, [i, a]);
  return [a, s];
}
function _O() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
function DO() {
  let {
    router: e
  } = MO(qa.UseSubmit), {
    basename: t
  } = h.useContext(fn), n = mO();
  return h.useCallback(function(r, a) {
    a === void 0 && (a = {}), _O();
    let {
      action: i,
      method: s,
      encType: l,
      formData: c,
      body: u
    } = TO(r, t);
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
function jO(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = h.useContext(fn), a = h.useContext(or);
  a || (process.env.NODE_ENV !== "production" ? Ze(!1, "useFormAction must be used inside a RouteContext") : Ze(!1));
  let [i] = a.matches.slice(-1), s = Pn({}, Ko(e || ".", {
    relative: n
  })), l = ar();
  if (e == null && (s.search = l.search, i.route.index)) {
    let c = new URLSearchParams(s.search);
    c.delete("index"), s.search = c.toString() ? "?" + c.toString() : "";
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (s.pathname = s.pathname === "/" ? r : Ai([r, s.pathname])), Ba(s);
}
var FO = function() {
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
}, vl = typeof Symbol < "u" && Symbol, LO = FO, WO = function() {
  return typeof vl != "function" || typeof Symbol != "function" || typeof vl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : LO();
}, gl = {
  foo: {}
}, BO = Object, UO = function() {
  return { __proto__: gl }.foo === gl.foo && !({ __proto__: null } instanceof BO);
}, VO = "Function.prototype.bind called on incompatible ", da = Array.prototype.slice, zO = Object.prototype.toString, qO = "[object Function]", HO = function(t) {
  var n = this;
  if (typeof n != "function" || zO.call(n) !== qO)
    throw new TypeError(VO + n);
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
}, YO = HO, Li = Function.prototype.bind || YO, KO = Li, GO = KO.call(Function.call, Object.prototype.hasOwnProperty), we, Jn = SyntaxError, Uu = Function, Hn = TypeError, fa = function(e) {
  try {
    return Uu('"use strict"; return (' + e + ").constructor;")();
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
  throw new Hn();
}, XO = On ? function() {
  try {
    return arguments.callee, pa;
  } catch {
    try {
      return On(arguments, "callee").get;
    } catch {
      return pa;
    }
  }
}() : pa, Wn = WO(), JO = UO(), rt = Object.getPrototypeOf || (JO ? function(e) {
  return e.__proto__;
} : null), Vn = {}, QO = typeof Uint8Array > "u" || !rt ? we : rt(Uint8Array), En = {
  "%AggregateError%": typeof AggregateError > "u" ? we : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? we : ArrayBuffer,
  "%ArrayIteratorPrototype%": Wn && rt ? rt([][Symbol.iterator]()) : we,
  "%AsyncFromSyncIteratorPrototype%": we,
  "%AsyncFunction%": Vn,
  "%AsyncGenerator%": Vn,
  "%AsyncGeneratorFunction%": Vn,
  "%AsyncIteratorPrototype%": Vn,
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
  "%Function%": Uu,
  "%GeneratorFunction%": Vn,
  "%Int8Array%": typeof Int8Array > "u" ? we : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? we : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? we : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Wn && rt ? rt(rt([][Symbol.iterator]())) : we,
  "%JSON%": typeof JSON == "object" ? JSON : we,
  "%Map%": typeof Map > "u" ? we : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Wn || !rt ? we : rt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
  "%SetIteratorPrototype%": typeof Set > "u" || !Wn || !rt ? we : rt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? we : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Wn && rt ? rt(""[Symbol.iterator]()) : we,
  "%Symbol%": Wn ? Symbol : we,
  "%SyntaxError%": Jn,
  "%ThrowTypeError%": XO,
  "%TypedArray%": QO,
  "%TypeError%": Hn,
  "%Uint8Array%": typeof Uint8Array > "u" ? we : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? we : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? we : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? we : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? we : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? we : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? we : WeakSet
};
if (rt)
  try {
    null.error;
  } catch (e) {
    var ZO = rt(rt(e));
    En["%Error.prototype%"] = ZO;
  }
var eE = function e(t) {
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
    a && rt && (n = rt(a.prototype));
  }
  return En[t] = n, n;
}, yl = {
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
}, Kr = Li, To = GO, tE = Kr.call(Function.call, Array.prototype.concat), nE = Kr.call(Function.apply, Array.prototype.splice), bl = Kr.call(Function.call, String.prototype.replace), So = Kr.call(Function.call, String.prototype.slice), rE = Kr.call(Function.call, RegExp.prototype.exec), oE = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, aE = /\\(\\)?/g, iE = function(t) {
  var n = So(t, 0, 1), r = So(t, -1);
  if (n === "%" && r !== "%")
    throw new Jn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new Jn("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return bl(t, oE, function(i, s, l, c) {
    a[a.length] = l ? bl(c, aE, "$1") : s || i;
  }), a;
}, sE = function(t, n) {
  var r = t, a;
  if (To(yl, r) && (a = yl[r], r = "%" + a[0] + "%"), To(En, r)) {
    var i = En[r];
    if (i === Vn && (i = eE(r)), typeof i > "u" && !n)
      throw new Hn("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: i
    };
  }
  throw new Jn("intrinsic " + t + " does not exist!");
}, Wi = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new Hn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Hn('"allowMissing" argument must be a boolean');
  if (rE(/^%?[^%]*%?$/, t) === null)
    throw new Jn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = iE(t), a = r.length > 0 ? r[0] : "", i = sE("%" + a + "%", n), s = i.name, l = i.value, c = !1, u = i.alias;
  u && (a = u[0], nE(r, tE([0, 1], u)));
  for (var d = 1, f = !0; d < r.length; d += 1) {
    var p = r[d], m = So(p, 0, 1), x = So(p, -1);
    if ((m === '"' || m === "'" || m === "`" || x === '"' || x === "'" || x === "`") && m !== x)
      throw new Jn("property names with quotes must have matching quotes");
    if ((p === "constructor" || !f) && (c = !0), a += "." + p, s = "%" + a + "%", To(En, s))
      l = En[s];
    else if (l != null) {
      if (!(p in l)) {
        if (!n)
          throw new Hn("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (On && d + 1 >= r.length) {
        var y = On(l, p);
        f = !!y, f && "get" in y && !("originalValue" in y.get) ? l = y.get : l = l[p];
      } else
        f = To(l, p), l = l[p];
      f && !c && (En[s] = l);
    }
  }
  return l;
}, Vu = { exports: {} };
(function(e) {
  var t = Li, n = Wi, r = n("%Function.prototype.apply%"), a = n("%Function.prototype.call%"), i = n("%Reflect.apply%", !0) || t.call(a, r), s = n("%Object.getOwnPropertyDescriptor%", !0), l = n("%Object.defineProperty%", !0), c = n("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
    }
  e.exports = function(f) {
    var p = i(t, a, arguments);
    if (s && l) {
      var m = s(p, "length");
      m.configurable && l(
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
})(Vu);
var lE = Vu.exports, zu = Wi, qu = lE, cE = qu(zu("String.prototype.indexOf")), uE = function(t, n) {
  var r = zu(t, !!n);
  return typeof r == "function" && cE(t, ".prototype.") > -1 ? qu(r) : r;
};
const dE = {}, fE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dE
}, Symbol.toStringTag, { value: "Module" })), pE = /* @__PURE__ */ wd(fE);
var Bi = typeof Map == "function" && Map.prototype, ma = Object.getOwnPropertyDescriptor && Bi ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Co = Bi && ma && typeof ma.get == "function" ? ma.get : null, xl = Bi && Map.prototype.forEach, Ui = typeof Set == "function" && Set.prototype, ha = Object.getOwnPropertyDescriptor && Ui ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Po = Ui && ha && typeof ha.get == "function" ? ha.get : null, Ol = Ui && Set.prototype.forEach, mE = typeof WeakMap == "function" && WeakMap.prototype, Cr = mE ? WeakMap.prototype.has : null, hE = typeof WeakSet == "function" && WeakSet.prototype, Pr = hE ? WeakSet.prototype.has : null, vE = typeof WeakRef == "function" && WeakRef.prototype, El = vE ? WeakRef.prototype.deref : null, gE = Boolean.prototype.valueOf, yE = Object.prototype.toString, bE = Function.prototype.toString, xE = String.prototype.match, Vi = String.prototype.slice, nn = String.prototype.replace, OE = String.prototype.toUpperCase, wl = String.prototype.toLowerCase, Hu = RegExp.prototype.test, Tl = Array.prototype.concat, _t = Array.prototype.join, EE = Array.prototype.slice, Sl = Math.floor, Ha = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, va = Object.getOwnPropertySymbols, Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Qn = typeof Symbol == "function" && typeof Symbol.iterator == "object", ct = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Qn || "symbol") ? Symbol.toStringTag : null, Yu = Object.prototype.propertyIsEnumerable, Cl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Pl(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Hu.call(/e/, t))
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -Sl(-e) : Sl(e);
    if (r !== e) {
      var a = String(r), i = Vi.call(t, a.length + 1);
      return nn.call(a, n, "$&_") + "." + nn.call(nn.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return nn.call(t, n, "$&_");
}
var Ka = pE, Rl = Ka.custom, $l = Gu(Rl) ? Rl : null, wE = function e(t, n, r, a) {
  var i = n || {};
  if (en(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (en(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = en(i, "customInspect") ? i.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (en(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (en(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = i.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Ju(t, i);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return l ? Pl(t, c) : c;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return l ? Pl(t, u) : u;
  }
  var d = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof r > "u" && (r = 0), r >= d && d > 0 && typeof t == "object")
    return Ga(t) ? "[Array]" : "[Object]";
  var f = BE(i, r);
  if (typeof a > "u")
    a = [];
  else if (Xu(a, t) >= 0)
    return "[Circular]";
  function p(B, j, _) {
    if (j && (a = EE.call(a), a.push(j)), _) {
      var L = {
        depth: i.depth
      };
      return en(i, "quoteStyle") && (L.quoteStyle = i.quoteStyle), e(B, L, r + 1, a);
    }
    return e(B, i, r + 1, a);
  }
  if (typeof t == "function" && !Il(t)) {
    var m = kE(t), x = no(t, p);
    return "[Function" + (m ? ": " + m : " (anonymous)") + "]" + (x.length > 0 ? " { " + _t.call(x, ", ") + " }" : "");
  }
  if (Gu(t)) {
    var y = Qn ? nn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ya.call(t);
    return typeof t == "object" && !Qn ? gr(y) : y;
  }
  if (FE(t)) {
    for (var v = "<" + wl.call(String(t.nodeName)), E = t.attributes || [], C = 0; C < E.length; C++)
      v += " " + E[C].name + "=" + Ku(TE(E[C].value), "double", i);
    return v += ">", t.childNodes && t.childNodes.length && (v += "..."), v += "</" + wl.call(String(t.nodeName)) + ">", v;
  }
  if (Ga(t)) {
    if (t.length === 0)
      return "[]";
    var w = no(t, p);
    return f && !WE(w) ? "[" + Xa(w, f) + "]" : "[ " + _t.call(w, ", ") + " ]";
  }
  if (CE(t)) {
    var b = no(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !Yu.call(t, "cause") ? "{ [" + String(t) + "] " + _t.call(Tl.call("[cause]: " + p(t.cause), b), ", ") + " }" : b.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + _t.call(b, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if ($l && typeof t[$l] == "function" && Ka)
      return Ka(t, { depth: d - r });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (ME(t)) {
    var g = [];
    return xl && xl.call(t, function(B, j) {
      g.push(p(j, t, !0) + " => " + p(B, t));
    }), Nl("Map", Co.call(t), g, f);
  }
  if (DE(t)) {
    var I = [];
    return Ol && Ol.call(t, function(B) {
      I.push(p(B, t));
    }), Nl("Set", Po.call(t), I, f);
  }
  if (AE(t))
    return ga("WeakMap");
  if (jE(t))
    return ga("WeakSet");
  if (_E(t))
    return ga("WeakRef");
  if (RE(t))
    return gr(p(Number(t)));
  if (IE(t))
    return gr(p(Ha.call(t)));
  if ($E(t))
    return gr(gE.call(t));
  if (PE(t))
    return gr(p(String(t)));
  if (!SE(t) && !Il(t)) {
    var $ = no(t, p), k = Cl ? Cl(t) === Object.prototype : t instanceof Object || t.constructor === Object, W = t instanceof Object ? "" : "null prototype", A = !k && ct && Object(t) === t && ct in t ? Vi.call(pn(t), 8, -1) : W ? "Object" : "", M = k || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", z = M + (A || W ? "[" + _t.call(Tl.call([], A || [], W || []), ": ") + "] " : "");
    return $.length === 0 ? z + "{}" : f ? z + "{" + Xa($, f) + "}" : z + "{ " + _t.call($, ", ") + " }";
  }
  return String(t);
};
function Ku(e, t, n) {
  var r = (n.quoteStyle || t) === "double" ? '"' : "'";
  return r + e + r;
}
function TE(e) {
  return nn.call(String(e), /"/g, "&quot;");
}
function Ga(e) {
  return pn(e) === "[object Array]" && (!ct || !(typeof e == "object" && ct in e));
}
function SE(e) {
  return pn(e) === "[object Date]" && (!ct || !(typeof e == "object" && ct in e));
}
function Il(e) {
  return pn(e) === "[object RegExp]" && (!ct || !(typeof e == "object" && ct in e));
}
function CE(e) {
  return pn(e) === "[object Error]" && (!ct || !(typeof e == "object" && ct in e));
}
function PE(e) {
  return pn(e) === "[object String]" && (!ct || !(typeof e == "object" && ct in e));
}
function RE(e) {
  return pn(e) === "[object Number]" && (!ct || !(typeof e == "object" && ct in e));
}
function $E(e) {
  return pn(e) === "[object Boolean]" && (!ct || !(typeof e == "object" && ct in e));
}
function Gu(e) {
  if (Qn)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Ya)
    return !1;
  try {
    return Ya.call(e), !0;
  } catch {
  }
  return !1;
}
function IE(e) {
  if (!e || typeof e != "object" || !Ha)
    return !1;
  try {
    return Ha.call(e), !0;
  } catch {
  }
  return !1;
}
var NE = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function en(e, t) {
  return NE.call(e, t);
}
function pn(e) {
  return yE.call(e);
}
function kE(e) {
  if (e.name)
    return e.name;
  var t = xE.call(bE.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Xu(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] === t)
      return n;
  return -1;
}
function ME(e) {
  if (!Co || !e || typeof e != "object")
    return !1;
  try {
    Co.call(e);
    try {
      Po.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function AE(e) {
  if (!Cr || !e || typeof e != "object")
    return !1;
  try {
    Cr.call(e, Cr);
    try {
      Pr.call(e, Pr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function _E(e) {
  if (!El || !e || typeof e != "object")
    return !1;
  try {
    return El.call(e), !0;
  } catch {
  }
  return !1;
}
function DE(e) {
  if (!Po || !e || typeof e != "object")
    return !1;
  try {
    Po.call(e);
    try {
      Co.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function jE(e) {
  if (!Pr || !e || typeof e != "object")
    return !1;
  try {
    Pr.call(e, Pr);
    try {
      Cr.call(e, Cr);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function FE(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Ju(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Ju(Vi.call(e, 0, t.maxStringLength), t) + r;
  }
  var a = nn.call(nn.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, LE);
  return Ku(a, "single", t);
}
function LE(e) {
  var t = e.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + OE.call(t.toString(16));
}
function gr(e) {
  return "Object(" + e + ")";
}
function ga(e) {
  return e + " { ? }";
}
function Nl(e, t, n, r) {
  var a = r ? Xa(n, r) : _t.call(n, ", ");
  return e + " (" + t + ") {" + a + "}";
}
function WE(e) {
  for (var t = 0; t < e.length; t++)
    if (Xu(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function BE(e, t) {
  var n;
  if (e.indent === "	")
    n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = _t.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: _t.call(Array(t + 1), n)
  };
}
function Xa(e, t) {
  if (e.length === 0)
    return "";
  var n = `
` + t.prev + t.base;
  return n + _t.call(e, "," + n) + `
` + t.prev;
}
function no(e, t) {
  var n = Ga(e), r = [];
  if (n) {
    r.length = e.length;
    for (var a = 0; a < e.length; a++)
      r[a] = en(e, a) ? t(e[a], e) : "";
  }
  var i = typeof va == "function" ? va(e) : [], s;
  if (Qn) {
    s = {};
    for (var l = 0; l < i.length; l++)
      s["$" + i[l]] = i[l];
  }
  for (var c in e)
    en(e, c) && (n && String(Number(c)) === c && c < e.length || Qn && s["$" + c] instanceof Symbol || (Hu.call(/[^\w$]/, c) ? r.push(t(c, e) + ": " + t(e[c], e)) : r.push(c + ": " + t(e[c], e))));
  if (typeof va == "function")
    for (var u = 0; u < i.length; u++)
      Yu.call(e, i[u]) && r.push("[" + t(i[u]) + "]: " + t(e[i[u]], e));
  return r;
}
var zi = Wi, ir = uE, UE = wE, VE = zi("%TypeError%"), ro = zi("%WeakMap%", !0), oo = zi("%Map%", !0), zE = ir("WeakMap.prototype.get", !0), qE = ir("WeakMap.prototype.set", !0), HE = ir("WeakMap.prototype.has", !0), YE = ir("Map.prototype.get", !0), KE = ir("Map.prototype.set", !0), GE = ir("Map.prototype.has", !0), qi = function(e, t) {
  for (var n = e, r; (r = n.next) !== null; n = r)
    if (r.key === t)
      return n.next = r.next, r.next = e.next, e.next = r, r;
}, XE = function(e, t) {
  var n = qi(e, t);
  return n && n.value;
}, JE = function(e, t, n) {
  var r = qi(e, t);
  r ? r.value = n : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: n
  };
}, QE = function(e, t) {
  return !!qi(e, t);
}, ZE = function() {
  var t, n, r, a = {
    assert: function(i) {
      if (!a.has(i))
        throw new VE("Side channel does not contain " + UE(i));
    },
    get: function(i) {
      if (ro && i && (typeof i == "object" || typeof i == "function")) {
        if (t)
          return zE(t, i);
      } else if (oo) {
        if (n)
          return YE(n, i);
      } else if (r)
        return XE(r, i);
    },
    has: function(i) {
      if (ro && i && (typeof i == "object" || typeof i == "function")) {
        if (t)
          return HE(t, i);
      } else if (oo) {
        if (n)
          return GE(n, i);
      } else if (r)
        return QE(r, i);
      return !1;
    },
    set: function(i, s) {
      ro && i && (typeof i == "object" || typeof i == "function") ? (t || (t = new ro()), qE(t, i, s)) : oo ? (n || (n = new oo()), KE(n, i, s)) : (r || (r = { key: {}, next: null }), JE(r, i, s));
    }
  };
  return a;
}, ew = String.prototype.replace, tw = /%20/g, ya = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Hi = {
  default: ya.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return ew.call(e, tw, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: ya.RFC1738,
  RFC3986: ya.RFC3986
}, nw = Hi, ba = Object.prototype.hasOwnProperty, yn = Array.isArray, Mt = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), rw = function(t) {
  for (; t.length > 1; ) {
    var n = t.pop(), r = n.obj[n.prop];
    if (yn(r)) {
      for (var a = [], i = 0; i < r.length; ++i)
        typeof r[i] < "u" && a.push(r[i]);
      n.obj[n.prop] = a;
    }
  }
}, Qu = function(t, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < t.length; ++a)
    typeof t[a] < "u" && (r[a] = t[a]);
  return r;
}, ow = function e(t, n, r) {
  if (!n)
    return t;
  if (typeof n != "object") {
    if (yn(t))
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
  return yn(t) && !yn(n) && (a = Qu(t, r)), yn(t) && yn(n) ? (n.forEach(function(i, s) {
    if (ba.call(t, s)) {
      var l = t[s];
      l && typeof l == "object" && i && typeof i == "object" ? t[s] = e(l, i, r) : t.push(i);
    } else
      t[s] = i;
  }), t) : Object.keys(n).reduce(function(i, s) {
    var l = n[s];
    return ba.call(i, s) ? i[s] = e(i[s], l, r) : i[s] = l, i;
  }, a);
}, aw = function(t, n) {
  return Object.keys(n).reduce(function(r, a) {
    return r[a] = n[a], r;
  }, t);
}, iw = function(e, t, n) {
  var r = e.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, sw = function(t, n, r, a, i) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), r === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(d) {
      return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
    });
  for (var l = "", c = 0; c < s.length; ++c) {
    var u = s.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === nw.RFC1738 && (u === 40 || u === 41)) {
      l += s.charAt(c);
      continue;
    }
    if (u < 128) {
      l = l + Mt[u];
      continue;
    }
    if (u < 2048) {
      l = l + (Mt[192 | u >> 6] + Mt[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      l = l + (Mt[224 | u >> 12] + Mt[128 | u >> 6 & 63] + Mt[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | s.charCodeAt(c) & 1023), l += Mt[240 | u >> 18] + Mt[128 | u >> 12 & 63] + Mt[128 | u >> 6 & 63] + Mt[128 | u & 63];
  }
  return l;
}, lw = function(t) {
  for (var n = [{ obj: { o: t }, prop: "o" }], r = [], a = 0; a < n.length; ++a)
    for (var i = n[a], s = i.obj[i.prop], l = Object.keys(s), c = 0; c < l.length; ++c) {
      var u = l[c], d = s[u];
      typeof d == "object" && d !== null && r.indexOf(d) === -1 && (n.push({ obj: s, prop: u }), r.push(d));
    }
  return rw(n), t;
}, cw = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, uw = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, dw = function(t, n) {
  return [].concat(t, n);
}, fw = function(t, n) {
  if (yn(t)) {
    for (var r = [], a = 0; a < t.length; a += 1)
      r.push(n(t[a]));
    return r;
  }
  return n(t);
}, Zu = {
  arrayToObject: Qu,
  assign: aw,
  combine: dw,
  compact: lw,
  decode: iw,
  encode: sw,
  isBuffer: uw,
  isRegExp: cw,
  maybeMap: fw,
  merge: ow
}, ed = ZE, fo = Zu, Rr = Hi, pw = Object.prototype.hasOwnProperty, kl = {
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
}, zt = Array.isArray, mw = Array.prototype.push, td = function(e, t) {
  mw.apply(e, zt(t) ? t : [t]);
}, hw = Date.prototype.toISOString, Ml = Rr.default, lt = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: fo.encode,
  encodeValuesOnly: !1,
  format: Ml,
  formatter: Rr.formatters[Ml],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return hw.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, vw = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, xa = {}, gw = function e(t, n, r, a, i, s, l, c, u, d, f, p, m, x, y, v) {
  for (var E = t, C = v, w = 0, b = !1; (C = C.get(xa)) !== void 0 && !b; ) {
    var g = C.get(t);
    if (w += 1, typeof g < "u") {
      if (g === w)
        throw new RangeError("Cyclic object value");
      b = !0;
    }
    typeof C.get(xa) > "u" && (w = 0);
  }
  if (typeof c == "function" ? E = c(n, E) : E instanceof Date ? E = f(E) : r === "comma" && zt(E) && (E = fo.maybeMap(E, function(L) {
    return L instanceof Date ? f(L) : L;
  })), E === null) {
    if (i)
      return l && !x ? l(n, lt.encoder, y, "key", p) : n;
    E = "";
  }
  if (vw(E) || fo.isBuffer(E)) {
    if (l) {
      var I = x ? n : l(n, lt.encoder, y, "key", p);
      return [m(I) + "=" + m(l(E, lt.encoder, y, "value", p))];
    }
    return [m(n) + "=" + m(String(E))];
  }
  var $ = [];
  if (typeof E > "u")
    return $;
  var k;
  if (r === "comma" && zt(E))
    x && l && (E = fo.maybeMap(E, l)), k = [{ value: E.length > 0 ? E.join(",") || null : void 0 }];
  else if (zt(c))
    k = c;
  else {
    var W = Object.keys(E);
    k = u ? W.sort(u) : W;
  }
  for (var A = a && zt(E) && E.length === 1 ? n + "[]" : n, M = 0; M < k.length; ++M) {
    var z = k[M], B = typeof z == "object" && typeof z.value < "u" ? z.value : E[z];
    if (!(s && B === null)) {
      var j = zt(E) ? typeof r == "function" ? r(A, z) : A : A + (d ? "." + z : "[" + z + "]");
      v.set(t, w);
      var _ = ed();
      _.set(xa, v), td($, e(
        B,
        j,
        r,
        a,
        i,
        s,
        r === "comma" && x && zt(E) ? null : l,
        c,
        u,
        d,
        f,
        p,
        m,
        x,
        y,
        _
      ));
    }
  }
  return $;
}, yw = function(t) {
  if (!t)
    return lt;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = t.charset || lt.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Rr.default;
  if (typeof t.format < "u") {
    if (!pw.call(Rr.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    r = t.format;
  }
  var a = Rr.formatters[r], i = lt.filter;
  return (typeof t.filter == "function" || zt(t.filter)) && (i = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : lt.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? lt.allowDots : !!t.allowDots,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : lt.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? lt.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : lt.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : lt.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : lt.encodeValuesOnly,
    filter: i,
    format: r,
    formatter: a,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : lt.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : lt.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : lt.strictNullHandling
  };
}, bw = function(e, t) {
  var n = e, r = yw(t), a, i;
  typeof r.filter == "function" ? (i = r.filter, n = i("", n)) : zt(r.filter) && (i = r.filter, a = i);
  var s = [];
  if (typeof n != "object" || n === null)
    return "";
  var l;
  t && t.arrayFormat in kl ? l = t.arrayFormat : t && "indices" in t ? l = t.indices ? "indices" : "repeat" : l = "indices";
  var c = kl[l];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && t && t.commaRoundTrip;
  a || (a = Object.keys(n)), r.sort && a.sort(r.sort);
  for (var d = ed(), f = 0; f < a.length; ++f) {
    var p = a[f];
    r.skipNulls && n[p] === null || td(s, gw(
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
  var m = s.join(r.delimiter), x = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), m.length > 0 ? x + m : "";
}, Zn = Zu, Ja = Object.prototype.hasOwnProperty, xw = Array.isArray, nt = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Zn.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Ow = function(e) {
  return e.replace(/&#(\d+);/g, function(t, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, nd = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, Ew = "utf8=%26%2310003%3B", ww = "utf8=%E2%9C%93", Tw = function(t, n) {
  var r = { __proto__: null }, a = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, i = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, s = a.split(n.delimiter, i), l = -1, c, u = n.charset;
  if (n.charsetSentinel)
    for (c = 0; c < s.length; ++c)
      s[c].indexOf("utf8=") === 0 && (s[c] === ww ? u = "utf-8" : s[c] === Ew && (u = "iso-8859-1"), l = c, c = s.length);
  for (c = 0; c < s.length; ++c)
    if (c !== l) {
      var d = s[c], f = d.indexOf("]="), p = f === -1 ? d.indexOf("=") : f + 1, m, x;
      p === -1 ? (m = n.decoder(d, nt.decoder, u, "key"), x = n.strictNullHandling ? null : "") : (m = n.decoder(d.slice(0, p), nt.decoder, u, "key"), x = Zn.maybeMap(
        nd(d.slice(p + 1), n),
        function(y) {
          return n.decoder(y, nt.decoder, u, "value");
        }
      )), x && n.interpretNumericEntities && u === "iso-8859-1" && (x = Ow(x)), d.indexOf("[]=") > -1 && (x = xw(x) ? [x] : x), Ja.call(r, m) ? r[m] = Zn.combine(r[m], x) : r[m] = x;
    }
  return r;
}, Sw = function(e, t, n, r) {
  for (var a = r ? t : nd(t, n), i = e.length - 1; i >= 0; --i) {
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
}, Cw = function(t, n, r, a) {
  if (t) {
    var i = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, c = r.depth > 0 && s.exec(i), u = c ? i.slice(0, c.index) : i, d = [];
    if (u) {
      if (!r.plainObjects && Ja.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      d.push(u);
    }
    for (var f = 0; r.depth > 0 && (c = l.exec(i)) !== null && f < r.depth; ) {
      if (f += 1, !r.plainObjects && Ja.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      d.push(c[1]);
    }
    return c && d.push("[" + i.slice(c.index) + "]"), Sw(d, n, r, a);
  }
}, Pw = function(t) {
  if (!t)
    return nt;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof t.charset > "u" ? nt.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? nt.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : nt.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : nt.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : nt.arrayLimit,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : nt.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : nt.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : nt.decoder,
    delimiter: typeof t.delimiter == "string" || Zn.isRegExp(t.delimiter) ? t.delimiter : nt.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : nt.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : nt.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : nt.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : nt.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : nt.strictNullHandling
  };
}, Rw = function(e, t) {
  var n = Pw(t);
  if (e === "" || e === null || typeof e > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof e == "string" ? Tw(e, n) : e, a = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(r), s = 0; s < i.length; ++s) {
    var l = i[s], c = Cw(l, r[l], n, typeof e == "string");
    a = Zn.merge(a, c, n);
  }
  return n.allowSparse === !0 ? a : Zn.compact(a);
}, $w = bw, Iw = Rw, Nw = Hi, kw = {
  formats: Nw,
  parse: Iw,
  stringify: $w
};
const Al = /* @__PURE__ */ Hl(kw), Mw = (e) => {
  var A;
  const {
    headCells: t,
    fetchRecords: n,
    queryKey: r,
    defaultOrderBy: a,
    defaultOrderDirection: i = Ot.DESC,
    defaultRowsPerPage: s = 10,
    Row: l,
    Toolbar: c,
    onDeleteItem: u = null,
    onEditItem: d = null,
    filters: f
  } = e, [p, m] = Bu(), [x, y] = qt(a), [v, E] = qt(i), [C, w] = qt({
    ...Al.parse(p.toString()),
    per_page: s
  }), {
    data: b,
    isLoading: g,
    isFetching: I
  } = zl({
    queryKey: [r, C],
    queryFn: () => n(C),
    onSuccess: () => {
      m(Al.stringify(C, { skipNulls: !0 }), { replace: !0 });
    }
  });
  Oa(() => {
    w((M) => ({
      ...M,
      sort: {
        field: x,
        direction: v
      }
    }));
  }, [x, v]), Oa(() => {
    w((M) => ({
      ...M,
      filter: f
    }));
  }, [f]);
  const $ = (M, z) => {
    w({ ...C, page: ++z });
  }, k = (M) => {
    w({ ...C, per_page: M.target.value });
  }, W = (M, z) => {
    y(z), E(
      x === z && v === Ot.ASC ? Ot.DESC : Ot.ASC
    );
  };
  return /* @__PURE__ */ S.jsxs(Fl, { theme: Pu, children: [
    c && /* @__PURE__ */ S.jsx(c, { setParams: w, params: C }),
    /* @__PURE__ */ S.jsx(Ll, { children: /* @__PURE__ */ S.jsxs(Wl, { children: [
      /* @__PURE__ */ S.jsx(
        Yi,
        {
          headCells: t,
          orderBy: x,
          orderDirection: v,
          handleSortRequest: W
        }
      ),
      /* @__PURE__ */ S.jsxs(Bl, { children: [
        (g || I) && /* @__PURE__ */ S.jsx($r, { children: /* @__PURE__ */ S.jsx(Ir, { colSpan: t.length, align: "center", children: /* @__PURE__ */ S.jsx(Lr, {}) }) }),
        ((A = b == null ? void 0 : b.data) == null ? void 0 : A.length) > 0 ? b.data.map((M) => /* @__PURE__ */ S.jsx(l, { data: M, onDeleteItem: u, onEditItem: d }, M.id)) : /* @__PURE__ */ S.jsx($r, { children: /* @__PURE__ */ S.jsx(Ir, { colSpan: t.length, align: "center", children: /* @__PURE__ */ S.jsx(on, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    b && /* @__PURE__ */ S.jsx(
      Ul,
      {
        component: "div",
        from: b.from,
        to: b.to,
        page: b.current_page - 1,
        rowsPerPage: b.per_page,
        count: b.total,
        onPageChange: $,
        onRowsPerPageChange: k,
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
Mw.propTypes = {
  headCells: o.array.isRequired,
  fetchRecords: o.func.isRequired,
  queryKey: o.string.isRequired,
  defaultOrderBy: o.string,
  defaultOrderDirection: o.oneOf([Ot.ASC, Ot.DESC]),
  defaultRowsPerPage: o.number,
  onDeleteItem: o.func,
  onEditItem: o.func,
  filters: o.object,
  Row: o.elementType.isRequired,
  Toolbar: o.elementType
};
const Yi = (e) => {
  const t = er(), { orderBy: n, orderDirection: r, headCells: a, handleSortRequest: i } = e, s = (l) => (c) => {
    i(c, l);
  };
  return /* @__PURE__ */ S.jsx(gd, { sx: { backgroundColor: t.palette.table.header }, children: /* @__PURE__ */ S.jsx($r, { children: a.map((l) => /* @__PURE__ */ S.jsx(Ir, { component: "th", width: l.width, children: l.isSortable ? /* @__PURE__ */ S.jsx(
    yd,
    {
      active: n === l.id,
      direction: n === l.id ? r : "asc",
      onClick: s(l.id),
      children: l.label
    }
  ) : /* @__PURE__ */ S.jsx("span", { children: l.label }) }, l.id)) }) });
};
Yi.propTypes = {
  orderBy: o.string,
  orderDirection: o.string,
  headCells: o.array,
  handleSortRequest: o.func
};
const Aw = (e) => {
  const {
    headCells: t,
    records: n = [],
    defaultRowsPerPage: r = 25,
    isLoading: a = !1,
    onDeleteItem: i = null,
    onEditItem: s = null,
    defaultOrderBy: l = "",
    customPropertiesComparator: c = null,
    defaultOrderDirection: u = Ot.ASC,
    Row: d
  } = e, [f, p] = qt(u), [m, x] = qt(l), [y, v] = qt(0), [E, C] = qt(r), w = (k, W) => {
    const A = m === W && f === Ot.ASC;
    p(A ? Ot.DESC : Ot.ASC), x(W);
  }, b = (k, W) => {
    v(W);
  }, g = (k) => {
    C(parseInt(k.target.value, 10)), v(0);
  }, $ = (() => {
    const k = n.map((A, M) => [A, M]);
    return k.sort((A, M) => {
      const z = nO(A[0], M[0], m, f, c);
      return z !== 0 ? z : A[1] - M[1];
    }), k.map((A) => A[0]).slice(y * E, y * E + E);
  })();
  return /* @__PURE__ */ S.jsxs(Fl, { theme: Pu, children: [
    /* @__PURE__ */ S.jsx(Ll, { children: /* @__PURE__ */ S.jsxs(Wl, { children: [
      /* @__PURE__ */ S.jsx(
        Yi,
        {
          headCells: t,
          orderBy: m,
          orderDirection: f,
          handleSortRequest: w
        }
      ),
      /* @__PURE__ */ S.jsxs(Bl, { children: [
        a && /* @__PURE__ */ S.jsx($r, { children: /* @__PURE__ */ S.jsx(Ir, { colSpan: t.length, align: "center", children: /* @__PURE__ */ S.jsx(Lr, {}) }) }),
        ($ == null ? void 0 : $.length) > 0 ? $.map((k) => /* @__PURE__ */ S.jsx(d, { data: k, onDeleteItem: i, onEditItem: s }, k.id)) : /* @__PURE__ */ S.jsx($r, { children: /* @__PURE__ */ S.jsx(Ir, { colSpan: t.length, align: "center", children: /* @__PURE__ */ S.jsx(on, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ S.jsx(
      Ul,
      {
        rowsPerPage: E,
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
Aw.propTypes = {
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
function _w(e) {
  const { children: t, value: n, index: r, ...a } = e;
  return /* @__PURE__ */ S.jsx("div", { role: "tabpanel", hidden: n !== r, ...a, children: n === r && t });
}
_w.propTypes = {
  index: o.number,
  value: o.any,
  children: o.node
};
function zw() {
  const [e, t] = Bu();
  return {
    tab: Number(e.get("tab")) || 1,
    onChangeTab: (a, i) => {
      t({ tab: i });
    }
  };
}
export {
  Jx as AsyncAutocomplete,
  _d as Avatar,
  Mw as BackendTableContent,
  mc as Box,
  Qx as Checkbox,
  fv as ConfirmDialog,
  cv as DateTime,
  pv as ErrorDialog,
  Lr as Loader,
  ci as Modal,
  uv as Money,
  dv as PageHeader,
  Cu as Select,
  tO as Switch,
  _w as TabPanel,
  Aw as TableContent,
  Yi as TableHeader,
  eO as TextField,
  nO as genericDescendingComparator,
  Vw as hasPermissions,
  Ot as sortOrderEnum,
  Pu as theme,
  zw as useTabs
};
