import * as g from "react";
import Oe, { createContext as Ff, useState as _t, useEffect as ko, useContext as Lf, Children as Bf, isValidElement as Oo, cloneElement as wo, useId as Uf } from "react";
import { Avatar as Wf, CircularProgress as qu, Paper as Vf, Typography as pn, Stack as fn, Modal as zf, Box as qf, IconButton as Hf, Divider as Hu, Button as ta, FormControl as eo, FormControlLabel as Yu, Checkbox as Yf, InputLabel as Kf, Select as Gf, MenuItem as Qf, TextField as Xf, Switch as Jf, createTheme as Zf, ThemeProvider as Ku, TableContainer as Gu, Table as Qu, TableBody as Xu, TableRow as zr, TableCell as qr, TablePagination as Ju, TableHead as ep, TableSortLabel as tp, Tab as np } from "@mui/material";
import { Global as rp, ThemeContext as op, keyframes as Fa } from "@emotion/react";
import { Close as ip, Report as Zu } from "@mui/icons-material";
import * as ec from "react-dom";
import Ar from "react-dom";
import ap from "@emotion/styled";
function tc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function sp(e) {
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
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var na = { exports: {} }, wr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Us;
function lp() {
  if (Us)
    return wr;
  Us = 1;
  var e = Oe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, f = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (d in c)
      r.call(c, d) && !a.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: p, ref: h, props: f, _owner: o.current };
  }
  return wr.Fragment = n, wr.jsx = s, wr.jsxs = s, wr;
}
var Sr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws;
function up() {
  return Ws || (Ws = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Oe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function v(w) {
      if (w === null || typeof w != "object")
        return null;
      var z = m && w[m] || w[y];
      return typeof z == "function" ? z : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(w) {
      {
        for (var z = arguments.length, te = new Array(z > 1 ? z - 1 : 0), $ = 1; $ < z; $++)
          te[$ - 1] = arguments[$];
        E("error", w, te);
      }
    }
    function E(w, z, te) {
      {
        var $ = O.ReactDebugCurrentFrame, I = $.getStackAddendum();
        I !== "" && (z += "%s", te = te.concat([I]));
        var D = te.map(function(K) {
          return String(K);
        });
        D.unshift("Warning: " + z), Function.prototype.apply.call(console[w], console, D);
      }
    }
    var x = !1, b = !1, R = !1, P = !1, A = !1, B;
    B = Symbol.for("react.module.reference");
    function N(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === r || w === a || A || w === o || w === u || w === d || P || w === h || x || b || R || typeof w == "object" && w !== null && (w.$$typeof === p || w.$$typeof === f || w.$$typeof === s || w.$$typeof === l || w.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === B || w.getModuleId !== void 0));
    }
    function k(w, z, te) {
      var $ = w.displayName;
      if ($)
        return $;
      var I = z.displayName || z.name || "";
      return I !== "" ? te + "(" + I + ")" : te;
    }
    function V(w) {
      return w.displayName || "Context";
    }
    function W(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case l:
            var z = w;
            return V(z) + ".Consumer";
          case s:
            var te = w;
            return V(te._context) + ".Provider";
          case c:
            return k(w, w.render, "ForwardRef");
          case f:
            var $ = w.displayName || null;
            return $ !== null ? $ : W(w.type) || "Memo";
          case p: {
            var I = w, D = I._payload, K = I._init;
            try {
              return W(K(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, _ = 0, U, H, le, ne, M, Y, re;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function G() {
      {
        if (_ === 0) {
          U = console.log, H = console.info, le = console.warn, ne = console.error, M = console.group, Y = console.groupCollapsed, re = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        _++;
      }
    }
    function X() {
      {
        if (_--, _ === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, w, {
              value: U
            }),
            info: j({}, w, {
              value: H
            }),
            warn: j({}, w, {
              value: le
            }),
            error: j({}, w, {
              value: ne
            }),
            group: j({}, w, {
              value: M
            }),
            groupCollapsed: j({}, w, {
              value: Y
            }),
            groupEnd: j({}, w, {
              value: re
            })
          });
        }
        _ < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, Q;
    function oe(w, z, te) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (I) {
            var $ = I.stack.trim().match(/\n( *(at )?)/);
            Q = $ && $[1] || "";
          }
        return `
` + Q + w;
      }
    }
    var ae = !1, fe;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new se();
    }
    function F(w, z) {
      if (!w || ae)
        return "";
      {
        var te = fe.get(w);
        if (te !== void 0)
          return te;
      }
      var $;
      ae = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = J.current, J.current = null, G();
      try {
        if (z) {
          var K = function() {
            throw Error();
          };
          if (Object.defineProperty(K.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(K, []);
            } catch (Qt) {
              $ = Qt;
            }
            Reflect.construct(w, [], K);
          } else {
            try {
              K.call();
            } catch (Qt) {
              $ = Qt;
            }
            w.call(K.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qt) {
            $ = Qt;
          }
          w();
        }
      } catch (Qt) {
        if (Qt && $ && typeof Qt.stack == "string") {
          for (var ie = Qt.stack.split(`
`), xe = $.stack.split(`
`), Ee = ie.length - 1, Ce = xe.length - 1; Ee >= 1 && Ce >= 0 && ie[Ee] !== xe[Ce]; )
            Ce--;
          for (; Ee >= 1 && Ce >= 0; Ee--, Ce--)
            if (ie[Ee] !== xe[Ce]) {
              if (Ee !== 1 || Ce !== 1)
                do
                  if (Ee--, Ce--, Ce < 0 || ie[Ee] !== xe[Ce]) {
                    var ut = `
` + ie[Ee].replace(" at new ", " at ");
                    return w.displayName && ut.includes("<anonymous>") && (ut = ut.replace("<anonymous>", w.displayName)), typeof w == "function" && fe.set(w, ut), ut;
                  }
                while (Ee >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        ae = !1, J.current = D, X(), Error.prepareStackTrace = I;
      }
      var Un = w ? w.displayName || w.name : "", Bs = Un ? oe(Un) : "";
      return typeof w == "function" && fe.set(w, Bs), Bs;
    }
    function ye(w, z, te) {
      return F(w, !1);
    }
    function q(w) {
      var z = w.prototype;
      return !!(z && z.isReactComponent);
    }
    function Z(w, z, te) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return F(w, q(w));
      if (typeof w == "string")
        return oe(w);
      switch (w) {
        case u:
          return oe("Suspense");
        case d:
          return oe("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case c:
            return ye(w.render);
          case f:
            return Z(w.type, z, te);
          case p: {
            var $ = w, I = $._payload, D = $._init;
            try {
              return Z(D(I), z, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, de = {}, We = O.ReactDebugCurrentFrame;
    function Ve(w) {
      if (w) {
        var z = w._owner, te = Z(w.type, w._source, z ? z.type : null);
        We.setExtraStackFrame(te);
      } else
        We.setExtraStackFrame(null);
    }
    function Ae(w, z, te, $, I) {
      {
        var D = Function.call.bind(Ne);
        for (var K in w)
          if (D(w, K)) {
            var ie = void 0;
            try {
              if (typeof w[K] != "function") {
                var xe = Error(($ || "React class") + ": " + te + " type `" + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[K] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              ie = w[K](z, K, $, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              ie = Ee;
            }
            ie && !(ie instanceof Error) && (Ve(I), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", te, K, typeof ie), Ve(null)), ie instanceof Error && !(ie.message in de) && (de[ie.message] = !0, Ve(I), C("Failed %s type: %s", te, ie.message), Ve(null));
          }
      }
    }
    var Se = Array.isArray;
    function Be(w) {
      return Se(w);
    }
    function Re(w) {
      {
        var z = typeof Symbol == "function" && Symbol.toStringTag, te = z && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return te;
      }
    }
    function Qe(w) {
      try {
        return Xe(w), !1;
      } catch {
        return !0;
      }
    }
    function Xe(w) {
      return "" + w;
    }
    function et(w) {
      if (Qe(w))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(w)), Xe(w);
    }
    var Pe = O.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ue, rt, ce;
    ce = {};
    function be(w) {
      if (Ne.call(w, "ref")) {
        var z = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function $e(w) {
      if (Ne.call(w, "key")) {
        var z = Object.getOwnPropertyDescriptor(w, "key").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Je(w, z) {
      if (typeof w.ref == "string" && Pe.current && z && Pe.current.stateNode !== z) {
        var te = W(Pe.current.type);
        ce[te] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Pe.current.type), w.ref), ce[te] = !0);
      }
    }
    function rn(w, z) {
      {
        var te = function() {
          ue || (ue = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        te.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function jt(w, z) {
      {
        var te = function() {
          rt || (rt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        te.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var xr = function(w, z, te, $, I, D, K) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: z,
        ref: te,
        props: K,
        // Record the component responsible for creating this element.
        _owner: D
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
        value: $
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function kt(w, z, te, $, I) {
      {
        var D, K = {}, ie = null, xe = null;
        te !== void 0 && (et(te), ie = "" + te), $e(z) && (et(z.key), ie = "" + z.key), be(z) && (xe = z.ref, Je(z, I));
        for (D in z)
          Ne.call(z, D) && !me.hasOwnProperty(D) && (K[D] = z[D]);
        if (w && w.defaultProps) {
          var Ee = w.defaultProps;
          for (D in Ee)
            K[D] === void 0 && (K[D] = Ee[D]);
        }
        if (ie || xe) {
          var Ce = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          ie && rn(K, Ce), xe && jt(K, Ce);
        }
        return xr(w, ie, xe, I, $, Pe.current, K);
      }
    }
    var ht = O.ReactCurrentOwner, bt = O.ReactDebugCurrentFrame;
    function pt(w) {
      if (w) {
        var z = w._owner, te = Z(w.type, w._source, z ? z.type : null);
        bt.setExtraStackFrame(te);
      } else
        bt.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function On(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function on() {
      {
        if (ht.current) {
          var w = W(ht.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function jn(w) {
      {
        if (w !== void 0) {
          var z = w.fileName.replace(/^.*[\\\/]/, ""), te = w.lineNumber;
          return `

Check your code at ` + z + ":" + te + ".";
        }
        return "";
      }
    }
    var Fn = {};
    function Er(w) {
      {
        var z = on();
        if (!z) {
          var te = typeof w == "string" ? w : w.displayName || w.name;
          te && (z = `

Check the top-level render call using <` + te + ">.");
        }
        return z;
      }
    }
    function Ln(w, z) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var te = Er(z);
        if (Fn[te])
          return;
        Fn[te] = !0;
        var $ = "";
        w && w._owner && w._owner !== ht.current && ($ = " It was passed a child from " + W(w._owner.type) + "."), pt(w), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, $), pt(null);
      }
    }
    function an(w, z) {
      {
        if (typeof w != "object")
          return;
        if (Be(w))
          for (var te = 0; te < w.length; te++) {
            var $ = w[te];
            On($) && Ln($, z);
          }
        else if (On(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var I = v(w);
          if (typeof I == "function" && I !== w.entries)
            for (var D = I.call(w), K; !(K = D.next()).done; )
              On(K.value) && Ln(K.value, z);
        }
      }
    }
    function ot(w) {
      {
        var z = w.type;
        if (z == null || typeof z == "string")
          return;
        var te;
        if (typeof z == "function")
          te = z.propTypes;
        else if (typeof z == "object" && (z.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        z.$$typeof === f))
          te = z.propTypes;
        else
          return;
        if (te) {
          var $ = W(z);
          Ae(te, w.props, "prop", $, w);
        } else if (z.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var I = W(z);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ze(w) {
      {
        for (var z = Object.keys(w.props), te = 0; te < z.length; te++) {
          var $ = z[te];
          if ($ !== "children" && $ !== "key") {
            pt(w), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), pt(null);
            break;
          }
        }
        w.ref !== null && (pt(w), C("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    function yt(w, z, te, $, I, D) {
      {
        var K = N(w);
        if (!K) {
          var ie = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = jn(I);
          xe ? ie += xe : ie += on();
          var Ee;
          w === null ? Ee = "null" : Be(w) ? Ee = "array" : w !== void 0 && w.$$typeof === t ? (Ee = "<" + (W(w.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof w, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ie);
        }
        var Ce = kt(w, z, te, I, D);
        if (Ce == null)
          return Ce;
        if (K) {
          var ut = z.children;
          if (ut !== void 0)
            if ($)
              if (Be(ut)) {
                for (var Un = 0; Un < ut.length; Un++)
                  an(ut[Un], w);
                Object.freeze && Object.freeze(ut);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              an(ut, w);
        }
        return w === r ? Ze(Ce) : ot(Ce), Ce;
      }
    }
    function po(w, z, te) {
      return yt(w, z, te, !0);
    }
    function Bn(w, z, te) {
      return yt(w, z, te, !1);
    }
    var mo = Bn, Or = po;
    Sr.Fragment = r, Sr.jsx = mo, Sr.jsxs = Or;
  }()), Sr;
}
process.env.NODE_ENV === "production" ? na.exports = lp() : na.exports = up();
var T = na.exports, ra = { exports: {} }, ho = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs;
function cp() {
  if (Vs)
    return Me;
  Vs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var R = b.$$typeof;
      switch (R) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case r:
            case a:
            case o:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case d:
                case m:
                case h:
                case s:
                  return b;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function x(b) {
    return E(b) === u;
  }
  return Me.AsyncMode = c, Me.ConcurrentMode = u, Me.ContextConsumer = l, Me.ContextProvider = s, Me.Element = t, Me.ForwardRef = d, Me.Fragment = r, Me.Lazy = m, Me.Memo = h, Me.Portal = n, Me.Profiler = a, Me.StrictMode = o, Me.Suspense = f, Me.isAsyncMode = function(b) {
    return x(b) || E(b) === c;
  }, Me.isConcurrentMode = x, Me.isContextConsumer = function(b) {
    return E(b) === l;
  }, Me.isContextProvider = function(b) {
    return E(b) === s;
  }, Me.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Me.isForwardRef = function(b) {
    return E(b) === d;
  }, Me.isFragment = function(b) {
    return E(b) === r;
  }, Me.isLazy = function(b) {
    return E(b) === m;
  }, Me.isMemo = function(b) {
    return E(b) === h;
  }, Me.isPortal = function(b) {
    return E(b) === n;
  }, Me.isProfiler = function(b) {
    return E(b) === a;
  }, Me.isStrictMode = function(b) {
    return E(b) === o;
  }, Me.isSuspense = function(b) {
    return E(b) === f;
  }, Me.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === u || b === a || b === o || b === f || b === p || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === h || b.$$typeof === s || b.$$typeof === l || b.$$typeof === d || b.$$typeof === v || b.$$typeof === O || b.$$typeof === C || b.$$typeof === y);
  }, Me.typeOf = E, Me;
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
var zs;
function dp() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function E(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === r || F === u || F === a || F === o || F === f || F === p || typeof F == "object" && F !== null && (F.$$typeof === m || F.$$typeof === h || F.$$typeof === s || F.$$typeof === l || F.$$typeof === d || F.$$typeof === v || F.$$typeof === O || F.$$typeof === C || F.$$typeof === y);
    }
    function x(F) {
      if (typeof F == "object" && F !== null) {
        var ye = F.$$typeof;
        switch (ye) {
          case t:
            var q = F.type;
            switch (q) {
              case c:
              case u:
              case r:
              case a:
              case o:
              case f:
                return q;
              default:
                var Z = q && q.$$typeof;
                switch (Z) {
                  case l:
                  case d:
                  case m:
                  case h:
                  case s:
                    return Z;
                  default:
                    return ye;
                }
            }
          case n:
            return ye;
        }
      }
    }
    var b = c, R = u, P = l, A = s, B = t, N = d, k = r, V = m, W = h, j = n, _ = a, U = o, H = f, le = !1;
    function ne(F) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(F) || x(F) === c;
    }
    function M(F) {
      return x(F) === u;
    }
    function Y(F) {
      return x(F) === l;
    }
    function re(F) {
      return x(F) === s;
    }
    function ee(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function G(F) {
      return x(F) === d;
    }
    function X(F) {
      return x(F) === r;
    }
    function J(F) {
      return x(F) === m;
    }
    function Q(F) {
      return x(F) === h;
    }
    function oe(F) {
      return x(F) === n;
    }
    function ae(F) {
      return x(F) === a;
    }
    function fe(F) {
      return x(F) === o;
    }
    function se(F) {
      return x(F) === f;
    }
    _e.AsyncMode = b, _e.ConcurrentMode = R, _e.ContextConsumer = P, _e.ContextProvider = A, _e.Element = B, _e.ForwardRef = N, _e.Fragment = k, _e.Lazy = V, _e.Memo = W, _e.Portal = j, _e.Profiler = _, _e.StrictMode = U, _e.Suspense = H, _e.isAsyncMode = ne, _e.isConcurrentMode = M, _e.isContextConsumer = Y, _e.isContextProvider = re, _e.isElement = ee, _e.isForwardRef = G, _e.isFragment = X, _e.isLazy = J, _e.isMemo = Q, _e.isPortal = oe, _e.isProfiler = ae, _e.isStrictMode = fe, _e.isSuspense = se, _e.isValidElementType = E, _e.typeOf = x;
  }()), _e;
}
var qs;
function nc() {
  return qs || (qs = 1, process.env.NODE_ENV === "production" ? ho.exports = cp() : ho.exports = dp()), ho.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ti, Hs;
function fp() {
  if (Hs)
    return Ti;
  Hs = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
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
  return Ti = o() ? Object.assign : function(a, s) {
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
  }, Ti;
}
var Ci, Ys;
function La() {
  if (Ys)
    return Ci;
  Ys = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ci = e, Ci;
}
var Ri, Ks;
function rc() {
  return Ks || (Ks = 1, Ri = Function.call.bind(Object.prototype.hasOwnProperty)), Ri;
}
var Pi, Gs;
function pp() {
  if (Gs)
    return Pi;
  Gs = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = La(), n = {}, r = rc();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, l, c, u) {
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
          } catch (m) {
            f = m;
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
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Pi = o, Pi;
}
var $i, Qs;
function mp() {
  if (Qs)
    return $i;
  Qs = 1;
  var e = nc(), t = fp(), n = La(), r = rc(), o = pp(), a = function() {
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
  return $i = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(M) {
      var Y = M && (u && M[u] || M[d]);
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
      arrayOf: E,
      element: x(),
      elementType: b(),
      instanceOf: R,
      node: N(),
      objectOf: A,
      oneOf: P,
      oneOfType: B,
      shape: V,
      exact: W
    };
    function m(M, Y) {
      return M === Y ? M !== 0 || 1 / M === 1 / Y : M !== M && Y !== Y;
    }
    function y(M, Y) {
      this.message = M, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function v(M) {
      if (process.env.NODE_ENV !== "production")
        var Y = {}, re = 0;
      function ee(X, J, Q, oe, ae, fe, se) {
        if (oe = oe || p, fe = fe || Q, se !== n) {
          if (c) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = oe + ":" + Q;
            !Y[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + fe + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Y[ye] = !0, re++);
          }
        }
        return J[Q] == null ? X ? J[Q] === null ? new y("The " + ae + " `" + fe + "` is marked as required " + ("in `" + oe + "`, but its value is `null`.")) : new y("The " + ae + " `" + fe + "` is marked as required in " + ("`" + oe + "`, but its value is `undefined`.")) : null : M(J, Q, oe, ae, fe);
      }
      var G = ee.bind(null, !1);
      return G.isRequired = ee.bind(null, !0), G;
    }
    function O(M) {
      function Y(re, ee, G, X, J, Q) {
        var oe = re[ee], ae = U(oe);
        if (ae !== M) {
          var fe = H(oe);
          return new y(
            "Invalid " + X + " `" + J + "` of type " + ("`" + fe + "` supplied to `" + G + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return v(Y);
    }
    function C() {
      return v(s);
    }
    function E(M) {
      function Y(re, ee, G, X, J) {
        if (typeof M != "function")
          return new y("Property `" + J + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var Q = re[ee];
        if (!Array.isArray(Q)) {
          var oe = U(Q);
          return new y("Invalid " + X + " `" + J + "` of type " + ("`" + oe + "` supplied to `" + G + "`, expected an array."));
        }
        for (var ae = 0; ae < Q.length; ae++) {
          var fe = M(Q, ae, G, X, J + "[" + ae + "]", n);
          if (fe instanceof Error)
            return fe;
        }
        return null;
      }
      return v(Y);
    }
    function x() {
      function M(Y, re, ee, G, X) {
        var J = Y[re];
        if (!l(J)) {
          var Q = U(J);
          return new y("Invalid " + G + " `" + X + "` of type " + ("`" + Q + "` supplied to `" + ee + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(M);
    }
    function b() {
      function M(Y, re, ee, G, X) {
        var J = Y[re];
        if (!e.isValidElementType(J)) {
          var Q = U(J);
          return new y("Invalid " + G + " `" + X + "` of type " + ("`" + Q + "` supplied to `" + ee + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(M);
    }
    function R(M) {
      function Y(re, ee, G, X, J) {
        if (!(re[ee] instanceof M)) {
          var Q = M.name || p, oe = ne(re[ee]);
          return new y("Invalid " + X + " `" + J + "` of type " + ("`" + oe + "` supplied to `" + G + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return v(Y);
    }
    function P(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function Y(re, ee, G, X, J) {
        for (var Q = re[ee], oe = 0; oe < M.length; oe++)
          if (m(Q, M[oe]))
            return null;
        var ae = JSON.stringify(M, function(se, F) {
          var ye = H(F);
          return ye === "symbol" ? String(F) : F;
        });
        return new y("Invalid " + X + " `" + J + "` of value `" + String(Q) + "` " + ("supplied to `" + G + "`, expected one of " + ae + "."));
      }
      return v(Y);
    }
    function A(M) {
      function Y(re, ee, G, X, J) {
        if (typeof M != "function")
          return new y("Property `" + J + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var Q = re[ee], oe = U(Q);
        if (oe !== "object")
          return new y("Invalid " + X + " `" + J + "` of type " + ("`" + oe + "` supplied to `" + G + "`, expected an object."));
        for (var ae in Q)
          if (r(Q, ae)) {
            var fe = M(Q, ae, G, X, J + "." + ae, n);
            if (fe instanceof Error)
              return fe;
          }
        return null;
      }
      return v(Y);
    }
    function B(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var Y = 0; Y < M.length; Y++) {
        var re = M[Y];
        if (typeof re != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(re) + " at index " + Y + "."
          ), s;
      }
      function ee(G, X, J, Q, oe) {
        for (var ae = [], fe = 0; fe < M.length; fe++) {
          var se = M[fe], F = se(G, X, J, Q, oe, n);
          if (F == null)
            return null;
          F.data && r(F.data, "expectedType") && ae.push(F.data.expectedType);
        }
        var ye = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new y("Invalid " + Q + " `" + oe + "` supplied to " + ("`" + J + "`" + ye + "."));
      }
      return v(ee);
    }
    function N() {
      function M(Y, re, ee, G, X) {
        return j(Y[re]) ? null : new y("Invalid " + G + " `" + X + "` supplied to " + ("`" + ee + "`, expected a ReactNode."));
      }
      return v(M);
    }
    function k(M, Y, re, ee, G) {
      return new y(
        (M || "React class") + ": " + Y + " type `" + re + "." + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function V(M) {
      function Y(re, ee, G, X, J) {
        var Q = re[ee], oe = U(Q);
        if (oe !== "object")
          return new y("Invalid " + X + " `" + J + "` of type `" + oe + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var ae in M) {
          var fe = M[ae];
          if (typeof fe != "function")
            return k(G, X, J, ae, H(fe));
          var se = fe(Q, ae, G, X, J + "." + ae, n);
          if (se)
            return se;
        }
        return null;
      }
      return v(Y);
    }
    function W(M) {
      function Y(re, ee, G, X, J) {
        var Q = re[ee], oe = U(Q);
        if (oe !== "object")
          return new y("Invalid " + X + " `" + J + "` of type `" + oe + "` " + ("supplied to `" + G + "`, expected `object`."));
        var ae = t({}, re[ee], M);
        for (var fe in ae) {
          var se = M[fe];
          if (r(M, fe) && typeof se != "function")
            return k(G, X, J, fe, H(se));
          if (!se)
            return new y(
              "Invalid " + X + " `" + J + "` key `" + fe + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(re[ee], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var F = se(Q, fe, G, X, J + "." + fe, n);
          if (F)
            return F;
        }
        return null;
      }
      return v(Y);
    }
    function j(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(j);
          if (M === null || l(M))
            return !0;
          var Y = f(M);
          if (Y) {
            var re = Y.call(M), ee;
            if (Y !== M.entries) {
              for (; !(ee = re.next()).done; )
                if (!j(ee.value))
                  return !1;
            } else
              for (; !(ee = re.next()).done; ) {
                var G = ee.value;
                if (G && !j(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _(M, Y) {
      return M === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
    }
    function U(M) {
      var Y = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : _(Y, M) ? "symbol" : Y;
    }
    function H(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var Y = U(M);
      if (Y === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return Y;
    }
    function le(M) {
      var Y = H(M);
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
    function ne(M) {
      return !M.constructor || !M.constructor.name ? p : M.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, $i;
}
var Ii, Xs;
function hp() {
  if (Xs)
    return Ii;
  Xs = 1;
  var e = La();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ii = function() {
    function r(s, l, c, u, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
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
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ii;
}
if (process.env.NODE_ENV !== "production") {
  var yp = nc(), vp = !0;
  ra.exports = mp()(yp.isElement, vp);
} else
  ra.exports = hp()();
var gp = ra.exports;
const i = /* @__PURE__ */ tc(gp), bp = ({ name: e, profile_picture: t, size: n = 120, sx: r, ...o }) => /* @__PURE__ */ T.jsx(
  Wf,
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
    ...o
  }
);
bp.propTypes = {
  profile_picture: i.shape({
    url: i.string
  }),
  size: i.number,
  sx: i.object,
  name: i.string
};
const dr = () => /* @__PURE__ */ T.jsx(
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
    children: /* @__PURE__ */ T.jsx(qu, {})
  }
);
function Zt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function S() {
  return S = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, S.apply(this, arguments);
}
function Qn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function oc(e) {
  if (!Qn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = oc(e[n]);
  }), t;
}
function Pt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? S({}, e) : e;
  return Qn(e) && Qn(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Qn(t[o]) && o in e && Qn(e[o]) ? r[o] = Pt(e[o], t[o], n) : n.clone ? r[o] = Qn(t[o]) ? oc(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function xp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ic(e, t, n, r, o) {
  const a = e[t], s = o || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !xp(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ac = Zt(i.element, ic);
ac.isRequired = Zt(i.element.isRequired, ic);
const to = ac;
function Ep(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Op(e, t, n, r, o) {
  const a = e[t], s = o || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !Ep(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ba = Zt(i.elementType, Op), wp = "exact-prop: ​";
function sc(e) {
  return process.env.NODE_ENV === "production" ? e : S({}, e, {
    [wp]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function mn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var oa = { exports: {} }, De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Js;
function Sp() {
  if (Js)
    return De;
  Js = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var O = v.$$typeof;
      switch (O) {
        case e:
          switch (v = v.type, v) {
            case n:
            case o:
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
                case a:
                  return v;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return De.ContextConsumer = s, De.ContextProvider = a, De.Element = e, De.ForwardRef = c, De.Fragment = n, De.Lazy = p, De.Memo = f, De.Portal = t, De.Profiler = o, De.StrictMode = r, De.Suspense = u, De.SuspenseList = d, De.isAsyncMode = function() {
    return !1;
  }, De.isConcurrentMode = function() {
    return !1;
  }, De.isContextConsumer = function(v) {
    return y(v) === s;
  }, De.isContextProvider = function(v) {
    return y(v) === a;
  }, De.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, De.isForwardRef = function(v) {
    return y(v) === c;
  }, De.isFragment = function(v) {
    return y(v) === n;
  }, De.isLazy = function(v) {
    return y(v) === p;
  }, De.isMemo = function(v) {
    return y(v) === f;
  }, De.isPortal = function(v) {
    return y(v) === t;
  }, De.isProfiler = function(v) {
    return y(v) === o;
  }, De.isStrictMode = function(v) {
    return y(v) === r;
  }, De.isSuspense = function(v) {
    return y(v) === u;
  }, De.isSuspenseList = function(v) {
    return y(v) === d;
  }, De.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === o || v === r || v === u || v === d || v === h || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === f || v.$$typeof === a || v.$$typeof === s || v.$$typeof === c || v.$$typeof === m || v.getModuleId !== void 0);
  }, De.typeOf = y, De;
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
var Zs;
function Tp() {
  return Zs || (Zs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, y = !1, v = !1, O = !1, C = !1, E;
    E = Symbol.for("react.module.reference");
    function x(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === n || q === o || C || q === r || q === u || q === d || O || q === h || m || y || v || typeof q == "object" && q !== null && (q.$$typeof === p || q.$$typeof === f || q.$$typeof === a || q.$$typeof === s || q.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === E || q.getModuleId !== void 0));
    }
    function b(q) {
      if (typeof q == "object" && q !== null) {
        var Z = q.$$typeof;
        switch (Z) {
          case e:
            var Ne = q.type;
            switch (Ne) {
              case n:
              case o:
              case r:
              case u:
              case d:
                return Ne;
              default:
                var de = Ne && Ne.$$typeof;
                switch (de) {
                  case l:
                  case s:
                  case c:
                  case p:
                  case f:
                  case a:
                    return de;
                  default:
                    return Z;
                }
            }
          case t:
            return Z;
        }
      }
    }
    var R = s, P = a, A = e, B = c, N = n, k = p, V = f, W = t, j = o, _ = r, U = u, H = d, le = !1, ne = !1;
    function M(q) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(q) {
      return ne || (ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(q) {
      return b(q) === s;
    }
    function ee(q) {
      return b(q) === a;
    }
    function G(q) {
      return typeof q == "object" && q !== null && q.$$typeof === e;
    }
    function X(q) {
      return b(q) === c;
    }
    function J(q) {
      return b(q) === n;
    }
    function Q(q) {
      return b(q) === p;
    }
    function oe(q) {
      return b(q) === f;
    }
    function ae(q) {
      return b(q) === t;
    }
    function fe(q) {
      return b(q) === o;
    }
    function se(q) {
      return b(q) === r;
    }
    function F(q) {
      return b(q) === u;
    }
    function ye(q) {
      return b(q) === d;
    }
    je.ContextConsumer = R, je.ContextProvider = P, je.Element = A, je.ForwardRef = B, je.Fragment = N, je.Lazy = k, je.Memo = V, je.Portal = W, je.Profiler = j, je.StrictMode = _, je.Suspense = U, je.SuspenseList = H, je.isAsyncMode = M, je.isConcurrentMode = Y, je.isContextConsumer = re, je.isContextProvider = ee, je.isElement = G, je.isForwardRef = X, je.isFragment = J, je.isLazy = Q, je.isMemo = oe, je.isPortal = ae, je.isProfiler = fe, je.isStrictMode = se, je.isSuspense = F, je.isSuspenseList = ye, je.isValidElementType = x, je.typeOf = b;
  }()), je;
}
process.env.NODE_ENV === "production" ? oa.exports = Sp() : oa.exports = Tp();
var Hr = oa.exports;
const Cp = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Rp(e) {
  const t = `${e}`.match(Cp);
  return t && t[1] || "";
}
function lc(e, t = "") {
  return e.displayName || e.name || Rp(e) || t;
}
function el(e, t, n) {
  const r = lc(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Pp(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return lc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Hr.ForwardRef:
          return el(e, e.render, "ForwardRef");
        case Hr.Memo:
          return el(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Yt(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = o || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const $p = i.oneOfType([i.func, i.object]), Dt = $p;
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : mn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function tl(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function uc(e, t = 166) {
  let n;
  function r(...o) {
    const a = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(a, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Ni(e, t) {
  return /* @__PURE__ */ g.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function mt(e) {
  return e && e.ownerDocument || document;
}
function An(e) {
  return mt(e).defaultView || window;
}
function Mo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Ip = typeof window < "u" ? g.useLayoutEffect : g.useEffect, hn = Ip;
let nl = 0;
function Np(e) {
  const [t, n] = g.useState(e), r = e || t;
  return g.useEffect(() => {
    t == null && (nl += 1, n(`mui-${nl}`));
  }, [t]), r;
}
const rl = g["useId".toString()];
function cc(e) {
  if (rl !== void 0) {
    const t = rl();
    return e ?? t;
  }
  return Np(e);
}
function Ap(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function Mr({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = g.useRef(e !== void 0), [a, s] = g.useState(t), l = o ? e : a;
  if (process.env.NODE_ENV !== "production") {
    g.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = g.useRef(t);
    g.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = g.useCallback((u) => {
    o || s(u);
  }, []);
  return [l, c];
}
function zt(e) {
  const t = g.useRef(e);
  return hn(() => {
    t.current = e;
  }), g.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function st(...e) {
  return g.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Mo(n, t);
    });
  }, e);
}
let Qo = !0, ia = !1, ol;
const kp = {
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
function Mp(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && kp[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function _p(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Qo = !0);
}
function Ai() {
  Qo = !1;
}
function Dp() {
  this.visibilityState === "hidden" && ia && (Qo = !0);
}
function jp(e) {
  e.addEventListener("keydown", _p, !0), e.addEventListener("mousedown", Ai, !0), e.addEventListener("pointerdown", Ai, !0), e.addEventListener("touchstart", Ai, !0), e.addEventListener("visibilitychange", Dp, !0);
}
function Fp(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Qo || Mp(t);
}
function Lp() {
  const e = g.useCallback((o) => {
    o != null && jp(o.ownerDocument);
  }, []), t = g.useRef(!1);
  function n() {
    return t.current ? (ia = !0, window.clearTimeout(ol), ol = window.setTimeout(() => {
      ia = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return Fp(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function dc(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Bp = (e) => {
  const t = g.useRef({});
  return g.useEffect(() => {
    t.current = e;
  }), t.current;
}, Up = Bp;
function Wp(e) {
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
function Vp(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const zp = Number.isInteger || Vp;
function fc(e, t, n, r) {
  const o = e[t];
  if (o == null || !zp(o)) {
    const a = Wp(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function pc(e, t, ...n) {
  return e[t] === void 0 ? null : fc(e, t, ...n);
}
function aa() {
  return null;
}
pc.isRequired = fc;
aa.isRequired = aa;
const Ua = process.env.NODE_ENV === "production" ? aa : pc;
function mc(e, t) {
  const n = S({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = S({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, a = t[r];
      n[r] = {}, !a || !Object.keys(a) ? n[r] = o : !o || !Object.keys(o) ? n[r] = a : (n[r] = S({}, a), Object.keys(o).forEach((s) => {
        n[r][s] = mc(o[s], a[s]);
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
    (o) => {
      r[o] = e[o].reduce((a, s) => {
        if (s) {
          const l = t(s);
          l !== "" && a.push(l), n && n[s] && a.push(n[s]);
        }
        return a;
      }, []).join(" ");
    }
  ), r;
}
const il = (e) => e, qp = () => {
  let e = il;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = il;
    }
  };
}, Hp = qp(), Yp = Hp, Kp = {
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
function Ue(e, t, n = "Mui") {
  const r = Kp[t];
  return r ? `${n}-${r}` : `${Yp.generate(e)}-${t}`;
}
function ze(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ue(e, o, n);
  }), r;
}
const Xo = "$$material";
function ve(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Gp(e) {
  return e == null || Object.keys(e).length === 0;
}
function hc(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Gp(o) ? n : o) : t;
  return /* @__PURE__ */ T.jsx(rp, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (hc.propTypes = {
  defaultTheme: i.object,
  styles: i.oneOfType([i.array, i.string, i.object, i.func])
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Qp(e, t) {
  const n = ap(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Xp = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Jp = ["values", "unit", "step"], Zp = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => S({}, n, {
    [r.key]: r.val
  }), {});
};
function em(e) {
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
  } = e, o = ve(e, Jp), a = Zp(t), s = Object.keys(a);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, h) {
    const m = s.indexOf(h);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(m !== -1 && typeof t[s[m]] == "number" ? t[s[m]] : h) - r / 100}${n})`;
  }
  function d(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const h = s.indexOf(p);
    return h === 0 ? l(s[1]) : h === s.length - 1 ? c(s[h]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return S({
    keys: s,
    values: a,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n
  }, o);
}
const tm = {
  borderRadius: 4
}, nm = tm, rm = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.string, i.object, i.array]) : {}, vn = rm;
function _r(e, t) {
  return t ? Pt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Wa = {
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
}, al = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Wa[e]}px)`
};
function en(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || al;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || al;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(a.values || Wa).indexOf(l) !== -1) {
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
function om(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const a = e.up(o);
    return r[a] = {}, r;
  }, {})) || {};
}
function im(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Jo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function _o(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Jo(e, n) || r, t && (o = t(o, r, e)), o;
}
function Fe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = Jo(c, r) || {};
    return en(s, l, (f) => {
      let p = _o(u, o, f);
      return f === p && typeof f == "string" && (p = _o(u, o, `${t}${f === "default" ? "" : pe(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: vn
  } : {}, a.filterProps = [t], a;
}
function am(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const sm = {
  m: "margin",
  p: "padding"
}, lm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, sl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, um = am((e) => {
  if (e.length > 2)
    if (sl[e])
      e = sl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = sm[t], o = lm[n] || "";
  return Array.isArray(o) ? o.map((a) => r + a) : [r + o];
}), Zo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ei = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], cm = [...Zo, ...ei];
function no(e, t, n, r) {
  var o;
  const a = (o = Jo(e, t, !1)) != null ? o : n;
  return typeof a == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), a * s) : Array.isArray(a) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > a.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${s} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), a[s]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function yc(e) {
  return no(e, "spacing", 8, "spacing");
}
function ro(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function dm(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = ro(t, n), r), {});
}
function fm(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = um(n), a = dm(o, r), s = e[n];
  return en(e, s, a);
}
function vc(e, t) {
  const n = yc(e.theme);
  return Object.keys(e).map((r) => fm(e, t, r, n)).reduce(_r, {});
}
function Ke(e) {
  return vc(e, Zo);
}
Ke.propTypes = process.env.NODE_ENV !== "production" ? Zo.reduce((e, t) => (e[t] = vn, e), {}) : {};
Ke.filterProps = Zo;
function Ge(e) {
  return vc(e, ei);
}
Ge.propTypes = process.env.NODE_ENV !== "production" ? ei.reduce((e, t) => (e[t] = vn, e), {}) : {};
Ge.filterProps = ei;
process.env.NODE_ENV !== "production" && cm.reduce((e, t) => (e[t] = vn, e), {});
function pm(e = 8) {
  if (e.mui)
    return e;
  const t = yc({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function ti(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((a) => {
    r[a] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, a) => t[a] ? _r(o, t[a](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ut(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const mm = Fe({
  prop: "border",
  themeKey: "borders",
  transform: Ut
}), hm = Fe({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ut
}), ym = Fe({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ut
}), vm = Fe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ut
}), gm = Fe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ut
}), bm = Fe({
  prop: "borderColor",
  themeKey: "palette"
}), xm = Fe({
  prop: "borderTopColor",
  themeKey: "palette"
}), Em = Fe({
  prop: "borderRightColor",
  themeKey: "palette"
}), Om = Fe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), wm = Fe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), ni = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = no(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: ro(t, r)
    });
    return en(e, e.borderRadius, n);
  }
  return null;
};
ni.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: vn
} : {};
ni.filterProps = ["borderRadius"];
ti(mm, hm, ym, vm, gm, bm, xm, Em, Om, wm, ni);
const ri = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = no(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: ro(t, r)
    });
    return en(e, e.gap, n);
  }
  return null;
};
ri.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: vn
} : {};
ri.filterProps = ["gap"];
const oi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = no(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: ro(t, r)
    });
    return en(e, e.columnGap, n);
  }
  return null;
};
oi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: vn
} : {};
oi.filterProps = ["columnGap"];
const ii = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = no(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: ro(t, r)
    });
    return en(e, e.rowGap, n);
  }
  return null;
};
ii.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: vn
} : {};
ii.filterProps = ["rowGap"];
const Sm = Fe({
  prop: "gridColumn"
}), Tm = Fe({
  prop: "gridRow"
}), Cm = Fe({
  prop: "gridAutoFlow"
}), Rm = Fe({
  prop: "gridAutoColumns"
}), Pm = Fe({
  prop: "gridAutoRows"
}), $m = Fe({
  prop: "gridTemplateColumns"
}), Im = Fe({
  prop: "gridTemplateRows"
}), Nm = Fe({
  prop: "gridTemplateAreas"
}), Am = Fe({
  prop: "gridArea"
});
ti(ri, oi, ii, Sm, Tm, Cm, Rm, Pm, $m, Im, Nm, Am);
function er(e, t) {
  return t === "grey" ? t : e;
}
const km = Fe({
  prop: "color",
  themeKey: "palette",
  transform: er
}), Mm = Fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: er
}), _m = Fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: er
});
ti(km, Mm, _m);
function wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Dm = Fe({
  prop: "width",
  transform: wt
}), Va = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r;
      return {
        maxWidth: ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Wa[n] || wt(n)
      };
    };
    return en(e, e.maxWidth, t);
  }
  return null;
};
Va.filterProps = ["maxWidth"];
const jm = Fe({
  prop: "minWidth",
  transform: wt
}), Fm = Fe({
  prop: "height",
  transform: wt
}), Lm = Fe({
  prop: "maxHeight",
  transform: wt
}), Bm = Fe({
  prop: "minHeight",
  transform: wt
});
Fe({
  prop: "size",
  cssProperty: "width",
  transform: wt
});
Fe({
  prop: "size",
  cssProperty: "height",
  transform: wt
});
const Um = Fe({
  prop: "boxSizing"
});
ti(Dm, Va, jm, Fm, Lm, Bm, Um);
const Wm = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ut
  },
  borderTop: {
    themeKey: "borders",
    transform: Ut
  },
  borderRight: {
    themeKey: "borders",
    transform: Ut
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ut
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ut
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
    style: ni
  },
  // palette
  color: {
    themeKey: "palette",
    transform: er
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: er
  },
  backgroundColor: {
    themeKey: "palette",
    transform: er
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
    style: ri
  },
  rowGap: {
    style: ii
  },
  columnGap: {
    style: oi
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
    transform: wt
  },
  maxWidth: {
    style: Va
  },
  minWidth: {
    transform: wt
  },
  height: {
    transform: wt
  },
  maxHeight: {
    transform: wt
  },
  minHeight: {
    transform: wt
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
}, za = Wm;
function Vm(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function zm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qm() {
  function e(n, r, o, a) {
    const s = {
      [n]: r,
      theme: o
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
    const p = Jo(o, u) || {};
    return f ? f(s) : en(s, r, (m) => {
      let y = _o(p, d, m);
      return m === y && typeof m == "string" && (y = _o(p, d, `${n}${m === "default" ? "" : pe(m)}`, m)), c === !1 ? y : {
        [c]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: a = {}
    } = n || {};
    if (!o)
      return null;
    const s = (r = a.unstable_sxConfig) != null ? r : za;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(a);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = om(a.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((h) => {
        const m = zm(u[h], a);
        if (m != null)
          if (typeof m == "object")
            if (s[h])
              p = _r(p, e(h, m, a, s));
            else {
              const y = en({
                theme: a
              }, m, (v) => ({
                [h]: v
              }));
              Vm(y, m) ? p[h] = t({
                sx: m,
                theme: a
              }) : p = _r(p, y);
            }
          else
            p = _r(p, e(h, m, a, s));
      }), im(f, p);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const gc = qm();
gc.filterProps = ["sx"];
const qa = gc, Hm = ["breakpoints", "palette", "spacing", "shape"];
function Ha(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: a = {}
  } = e, s = ve(e, Hm), l = em(n), c = pm(o);
  let u = Pt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: S({
      mode: "light"
    }, r),
    spacing: c,
    shape: S({}, nm, a)
  }, s);
  return u = t.reduce((d, f) => Pt(d, f), u), u.unstable_sxConfig = S({}, za, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return qa({
      sx: f,
      theme: this
    });
  }, u;
}
function Ym(e) {
  return Object.keys(e).length === 0;
}
function bc(e = null) {
  const t = g.useContext(op);
  return !t || Ym(t) ? e : t;
}
const Km = Ha();
function Ya(e = Km) {
  return bc(e);
}
function xc({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ya(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ T.jsx(hc, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (xc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  defaultTheme: i.object,
  /**
   * @ignore
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool]),
  /**
   * @ignore
   */
  themeId: i.string
});
function Ec(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ec(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ge() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ec(e)) && (r && (r += " "), r += t);
  return r;
}
const Gm = ["variant"];
function ll(e) {
  return e.length === 0;
}
function Oc(e) {
  const {
    variant: t
  } = e, n = ve(e, Gm);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += ll(r) ? e[o] : pe(e[o]) : r += `${ll(r) ? o : pe(o)}${pe(e[o].toString())}`;
  }), r;
}
const Qm = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Xm(e) {
  return Object.keys(e).length === 0;
}
function Jm(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Zm = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, eh = (e, t) => {
  let n = [];
  t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
  const r = {};
  return n.forEach((o) => {
    const a = Oc(o.props);
    r[a] = o.style;
  }), r;
}, th = (e, t, n, r) => {
  var o;
  const {
    ownerState: a = {}
  } = e, s = [], l = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return l && l.forEach((c) => {
    let u = !0;
    Object.keys(c.props).forEach((d) => {
      a[d] !== c.props[d] && e[d] !== c.props[d] && (u = !1);
    }), u && s.push(t[Oc(c.props)]);
  }), s;
};
function Dr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const nh = Ha(), ul = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Tr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Xm(t) ? e : t[n] || t;
}
function rh(e) {
  return e ? (t, n) => n[e] : null;
}
function oh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = nh,
    rootShouldForwardProp: r = Dr,
    slotShouldForwardProp: o = Dr
  } = e, a = (s) => qa(S({}, s, {
    theme: Tr(S({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return a.__mui_systemSx = !0, (s, l = {}) => {
    Xp(s, (x) => x.filter((b) => !(b != null && b.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = rh(ul(u))
    } = l, h = ve(l, Qm), m = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = f || !1;
    let v;
    process.env.NODE_ENV !== "production" && c && (v = `${c}-${ul(u || "Root")}`);
    let O = Dr;
    u === "Root" || u === "root" ? O = r : u ? O = o : Jm(s) && (O = void 0);
    const C = Qp(s, S({
      shouldForwardProp: O,
      label: v
    }, h)), E = (x, ...b) => {
      const R = b ? b.map((N) => typeof N == "function" && N.__emotion_real !== N ? (k) => N(S({}, k, {
        theme: Tr(S({}, k, {
          defaultTheme: n,
          themeId: t
        }))
      })) : N) : [];
      let P = x;
      c && p && R.push((N) => {
        const k = Tr(S({}, N, {
          defaultTheme: n,
          themeId: t
        })), V = Zm(c, k);
        if (V) {
          const W = {};
          return Object.entries(V).forEach(([j, _]) => {
            W[j] = typeof _ == "function" ? _(S({}, N, {
              theme: k
            })) : _;
          }), p(N, W);
        }
        return null;
      }), c && !m && R.push((N) => {
        const k = Tr(S({}, N, {
          defaultTheme: n,
          themeId: t
        }));
        return th(N, eh(c, k), k, c);
      }), y || R.push(a);
      const A = R.length - b.length;
      if (Array.isArray(x) && A > 0) {
        const N = new Array(A).fill("");
        P = [...x, ...N], P.raw = [...x.raw, ...N];
      } else
        typeof x == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        x.__emotion_real !== x && (P = (N) => x(S({}, N, {
          theme: Tr(S({}, N, {
            defaultTheme: n,
            themeId: t
          }))
        })));
      const B = C(P, ...R);
      if (process.env.NODE_ENV !== "production") {
        let N;
        c && (N = `${c}${pe(u || "")}`), N === void 0 && (N = `Styled(${Pp(s)})`), B.displayName = N;
      }
      return s.muiName && (B.muiName = s.muiName), B;
    };
    return C.withConfig && (E.withConfig = C.withConfig), E;
  };
}
function ih(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : mc(t.components[n].defaultProps, r);
}
function ah({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Ya(n);
  return r && (o = o[r] || o), ih({
    theme: o,
    name: t,
    props: e
  });
}
function Ka(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function sh(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function kn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return kn(sh(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : mn(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : mn(10, o));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function ai(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function lh(e) {
  e = kn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, a = r * Math.min(o, 1 - o), s = (u, d = (u + n / 30) % 12) => o - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), ai({
    type: l,
    values: c
  });
}
function cl(e) {
  e = kn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? kn(lh(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function dl(e, t) {
  const n = cl(e), r = cl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ct(e, t) {
  return e = kn(e), t = Ka(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ai(e);
}
function uh(e, t) {
  if (e = kn(e), t = Ka(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ai(e);
}
function ch(e, t) {
  if (e = kn(e), t = Ka(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ai(e);
}
function dh(e, t) {
  return S({
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
const fh = {
  black: "#000",
  white: "#fff"
}, Yr = fh, ph = {
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
}, mh = ph, hh = {
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
}, Wn = hh, yh = {
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
}, Vn = yh, vh = {
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
}, Cr = vh, gh = {
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
}, zn = gh, bh = {
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
}, qn = bh, xh = {
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
}, Hn = xh, Eh = ["mode", "contrastThreshold", "tonalOffset"], fl = {
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
    paper: Yr.white,
    default: Yr.white
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
}, ki = {
  text: {
    primary: Yr.white,
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
    active: Yr.white,
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
function pl(e, t, n, r) {
  const o = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = ch(e.main, o) : t === "dark" && (e.dark = uh(e.main, a)));
}
function Oh(e = "light") {
  return e === "dark" ? {
    main: zn[200],
    light: zn[50],
    dark: zn[400]
  } : {
    main: zn[700],
    light: zn[400],
    dark: zn[800]
  };
}
function wh(e = "light") {
  return e === "dark" ? {
    main: Wn[200],
    light: Wn[50],
    dark: Wn[400]
  } : {
    main: Wn[500],
    light: Wn[300],
    dark: Wn[700]
  };
}
function Sh(e = "light") {
  return e === "dark" ? {
    main: Vn[500],
    light: Vn[300],
    dark: Vn[700]
  } : {
    main: Vn[700],
    light: Vn[400],
    dark: Vn[800]
  };
}
function Th(e = "light") {
  return e === "dark" ? {
    main: qn[400],
    light: qn[300],
    dark: qn[700]
  } : {
    main: qn[700],
    light: qn[500],
    dark: qn[900]
  };
}
function Ch(e = "light") {
  return e === "dark" ? {
    main: Hn[400],
    light: Hn[300],
    dark: Hn[700]
  } : {
    main: Hn[800],
    light: Hn[500],
    dark: Hn[900]
  };
}
function Rh(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Cr[500],
    dark: Cr[900]
  };
}
function Ph(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = ve(e, Eh), a = e.primary || Oh(t), s = e.secondary || wh(t), l = e.error || Sh(t), c = e.info || Th(t), u = e.success || Ch(t), d = e.warning || Rh(t);
  function f(y) {
    const v = dl(y, ki.text.primary) >= n ? ki.text.primary : fl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = dl(y, v);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${v} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const p = ({
    color: y,
    name: v,
    mainShade: O = 500,
    lightShade: C = 300,
    darkShade: E = 700
  }) => {
    if (y = S({}, y), !y.main && y[O] && (y.main = y[O]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : mn(11, v ? ` (${v})` : "", O));
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
} });` : mn(12, v ? ` (${v})` : "", JSON.stringify(y.main)));
    return pl(y, "light", C, r), pl(y, "dark", E, r), y.contrastText || (y.contrastText = f(y.main)), y;
  }, h = {
    dark: ki,
    light: fl
  };
  return process.env.NODE_ENV !== "production" && (h[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Pt(S({
    // A collection of common colors.
    common: S({}, Yr),
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
    grey: mh,
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
  }, h[t]), o);
}
const $h = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ih(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ml = {
  textTransform: "uppercase"
}, hl = '"Roboto", "Helvetica", "Arial", sans-serif';
function Nh(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = hl,
    // The default font size of the Material Specification.
    fontSize: o = 14,
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
  } = n, p = ve(n, $h);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = o / 14, m = f || ((O) => `${O / u * h}rem`), y = (O, C, E, x, b) => S({
    fontFamily: r,
    fontWeight: O,
    fontSize: m(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: E
  }, r === hl ? {
    letterSpacing: `${Ih(x / C)}em`
  } : {}, b, d), v = {
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
    button: y(l, 14, 1.75, 0.4, ml),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, ml),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Pt(S({
    htmlFontSize: u,
    pxToRem: m,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: a,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), p, {
    clone: !1
    // No need to clone deep
  });
}
const Ah = 0.2, kh = 0.14, Mh = 0.12;
function qe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ah})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${kh})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Mh})`].join(",");
}
const _h = ["none", qe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), qe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), qe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), qe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), qe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), qe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), qe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), qe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), qe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), qe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), qe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), qe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), qe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), qe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), qe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), qe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), qe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), qe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), qe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), qe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), qe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), qe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), qe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), qe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Dh = _h, jh = ["duration", "easing", "delay"], Fh = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Lh = {
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
function yl(e) {
  return `${Math.round(e)}ms`;
}
function Bh(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Uh(e) {
  const t = S({}, Fh, e.easing), n = S({}, Lh, e.duration);
  return S({
    getAutoHeightDuration: Bh,
    create: (o = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = a, u = ve(a, jh);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof s == "string" ? s : yl(s)} ${l} ${typeof c == "string" ? c : yl(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Wh = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Vh = Wh, zh = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function qh(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: a = {}
  } = e, s = ve(e, zh);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : mn(18));
  const l = Ph(r), c = Ha(e);
  let u = Pt(c, {
    mixins: dh(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Dh.slice(),
    typography: Nh(l, a),
    transitions: Uh(o),
    zIndex: S({}, Vh)
  });
  if (u = Pt(u, s), u = t.reduce((d, f) => Pt(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (p, h) => {
      let m;
      for (m in p) {
        const y = p[m];
        if (d.indexOf(m) !== -1 && Object.keys(y).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Ue("", m);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${m}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: y
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[m] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const h = u.components[p].styleOverrides;
      h && p.indexOf("Mui") === 0 && f(h, p);
    });
  }
  return u.unstable_sxConfig = S({}, za, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return qa({
      sx: f,
      theme: this
    });
  }, u;
}
const Hh = qh(), si = Hh;
function fr() {
  const e = Ya(si);
  return process.env.NODE_ENV !== "production" && g.useDebugValue(e), e[Xo] || e;
}
function Ye({
  props: e,
  name: t
}) {
  return ah({
    props: e,
    name: t,
    defaultTheme: si,
    themeId: Xo
  });
}
const gn = (e) => Dr(e) && e !== "classes", Yh = Dr, Kh = oh({
  themeId: Xo,
  defaultTheme: si,
  rootShouldForwardProp: gn
}), he = Kh, Gh = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, vl = Gh, wc = ({ children: e, style: t, sx: n, component: r, onSubmit: o, mb: a, mt: s, isLoading: l = !1, ...c }) => {
  const u = fr();
  return /* @__PURE__ */ T.jsxs(
    Vf,
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
      onSubmit: o,
      ...c,
      children: [
        l && /* @__PURE__ */ T.jsx(dr, {}),
        e
      ]
    }
  );
};
wc.propTypes = {
  children: i.node,
  style: i.object,
  sx: i.object,
  component: i.elementType,
  onSubmit: i.func,
  isLoading: i.bool,
  marginBottom: i.string,
  marginTop: i.string,
  mb: i.number,
  mt: i.number
};
function Do(e) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Do(e);
}
function yn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function lt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Tt(e) {
  lt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Do(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Qh(e, t) {
  lt(2, arguments);
  var n = Tt(e).getTime(), r = yn(t);
  return new Date(n + r);
}
var Xh = {};
function oo() {
  return Xh;
}
function Kr(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function gl(e) {
  lt(1, arguments);
  var t = Tt(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Jh = 864e5;
function Zh(e, t) {
  lt(2, arguments);
  var n = gl(e), r = gl(t), o = n.getTime() - Kr(n), a = r.getTime() - Kr(r);
  return Math.round((o - a) / Jh);
}
function Sc(e) {
  return lt(1, arguments), e instanceof Date || Do(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function sa(e) {
  if (lt(1, arguments), !Sc(e) && typeof e != "number")
    return !1;
  var t = Tt(e);
  return !isNaN(Number(t));
}
function la(e, t) {
  lt(2, arguments);
  var n = yn(t);
  return Qh(e, -n);
}
var ey = 864e5;
function ty(e) {
  lt(1, arguments);
  var t = Tt(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / ey) + 1;
}
function jo(e) {
  lt(1, arguments);
  var t = 1, n = Tt(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Tc(e) {
  lt(1, arguments);
  var t = Tt(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = jo(r), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = jo(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function ny(e) {
  lt(1, arguments);
  var t = Tc(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = jo(n);
  return r;
}
var ry = 6048e5;
function oy(e) {
  lt(1, arguments);
  var t = Tt(e), n = jo(t).getTime() - ny(t).getTime();
  return Math.round(n / ry) + 1;
}
function Fo(e, t) {
  var n, r, o, a, s, l, c, u;
  lt(1, arguments);
  var d = oo(), f = yn((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Tt(e), h = p.getUTCDay(), m = (h < f ? 7 : 0) + h - f;
  return p.setUTCDate(p.getUTCDate() - m), p.setUTCHours(0, 0, 0, 0), p;
}
function Cc(e, t) {
  var n, r, o, a, s, l, c, u;
  lt(1, arguments);
  var d = Tt(e), f = d.getUTCFullYear(), p = oo(), h = yn((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(f + 1, 0, h), m.setUTCHours(0, 0, 0, 0);
  var y = Fo(m, t), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(f, 0, h), v.setUTCHours(0, 0, 0, 0);
  var O = Fo(v, t);
  return d.getTime() >= y.getTime() ? f + 1 : d.getTime() >= O.getTime() ? f : f - 1;
}
function iy(e, t) {
  var n, r, o, a, s, l, c, u;
  lt(1, arguments);
  var d = oo(), f = yn((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Cc(e, t), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(p, 0, f), h.setUTCHours(0, 0, 0, 0);
  var m = Fo(h, t);
  return m;
}
var ay = 6048e5;
function sy(e, t) {
  lt(1, arguments);
  var n = Tt(e), r = Fo(n, t).getTime() - iy(n, t).getTime();
  return Math.round(r / ay) + 1;
}
function Le(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var ly = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return Le(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Le(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Le(t.getUTCDate(), n.length);
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
    return Le(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Le(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Le(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Le(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return Le(a, n.length);
  }
};
const sn = ly;
var Yn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, uy = {
  // Era
  G: function(t, n, r) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var o = t.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return sn.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = Cc(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var l = s % 100;
      return Le(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : Le(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Tc(t);
    return Le(r, n.length);
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
    return Le(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return Le(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return Le(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return sn.M(t, n);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return Le(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, o) {
    var a = sy(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Le(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = oy(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Le(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : sn.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = ty(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : Le(o, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var o = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, o) {
    var a = t.getUTCDay(), s = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return Le(s, 2);
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
  c: function(t, n, r, o) {
    var a = t.getUTCDay(), s = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return Le(s, n.length);
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
    var o = t.getUTCDay(), a = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return Le(a, n.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var o = t.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
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
    var o = t.getUTCHours(), a;
    switch (o === 12 ? a = Yn.noon : o === 0 ? a = Yn.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    var o = t.getUTCHours(), a;
    switch (o >= 17 ? a = Yn.evening : o >= 12 ? a = Yn.afternoon : o >= 4 ? a = Yn.morning : a = Yn.night, n) {
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
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return sn.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : sn.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Le(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Le(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : sn.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : sn.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return sn.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return xl(s);
      case "XXXX":
      case "XX":
        return wn(s);
      case "XXXXX":
      case "XXX":
      default:
        return wn(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return xl(s);
      case "xxxx":
      case "xx":
        return wn(s);
      case "xxxxx":
      case "xxx":
      default:
        return wn(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + bl(s, ":");
      case "OOOO":
      default:
        return "GMT" + wn(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + bl(s, ":");
      case "zzzz":
      default:
        return "GMT" + wn(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return Le(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return Le(s, n.length);
  }
};
function bl(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + Le(a, 2);
}
function xl(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Le(Math.abs(e) / 60, 2);
  }
  return wn(e, t);
}
function wn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Le(Math.floor(o / 60), 2), s = Le(o % 60, 2);
  return r + a + n + s;
}
const cy = uy;
var El = function(t, n) {
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
}, Rc = function(t, n) {
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
}, dy = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return El(t, n);
  var s;
  switch (o) {
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
  return s.replace("{{date}}", El(o, n)).replace("{{time}}", Rc(a, n));
}, fy = {
  p: Rc,
  P: dy
};
const py = fy;
var my = ["D", "DD"], hy = ["YY", "YYYY"];
function yy(e) {
  return my.indexOf(e) !== -1;
}
function vy(e) {
  return hy.indexOf(e) !== -1;
}
function Ol(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var gy = {
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
}, by = function(t, n, r) {
  var o, a = gy[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const xy = by;
function tr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Ey = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Oy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, wy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Sy = {
  date: tr({
    formats: Ey,
    defaultWidth: "full"
  }),
  time: tr({
    formats: Oy,
    defaultWidth: "full"
  }),
  dateTime: tr({
    formats: wy,
    defaultWidth: "full"
  })
};
const Ty = Sy;
var Cy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ry = function(t, n, r, o) {
  return Cy[t];
};
const Py = Ry;
function Wt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var l = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[u];
  };
}
var $y = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Iy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ny = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ay = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, ky = {
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
}, My = {
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
}, _y = function(t, n) {
  var r = Number(t), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Dy = {
  ordinalNumber: _y,
  era: Wt({
    values: $y,
    defaultWidth: "wide"
  }),
  quarter: Wt({
    values: Iy,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Wt({
    values: Ny,
    defaultWidth: "wide"
  }),
  day: Wt({
    values: Ay,
    defaultWidth: "wide"
  }),
  dayPeriod: Wt({
    values: ky,
    defaultWidth: "wide",
    formattingValues: My,
    defaultFormattingWidth: "wide"
  })
};
const jy = Dy;
function Vt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? Ly(l, function(f) {
      return f.test(s);
    }) : Fy(l, function(f) {
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
function Fy(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Ly(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Pc(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var l = t.slice(o.length);
    return {
      value: s,
      rest: l
    };
  };
}
var By = /^(\d+)(th|st|nd|rd)?/i, Uy = /\d+/i, Wy = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Vy = {
  any: [/^b/i, /^(a|c)/i]
}, zy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, qy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Hy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Yy = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Ky = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Gy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Qy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Xy = {
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
}, Jy = {
  ordinalNumber: Pc({
    matchPattern: By,
    parsePattern: Uy,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Vt({
    matchPatterns: Wy,
    defaultMatchWidth: "wide",
    parsePatterns: Vy,
    defaultParseWidth: "any"
  }),
  quarter: Vt({
    matchPatterns: zy,
    defaultMatchWidth: "wide",
    parsePatterns: qy,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Vt({
    matchPatterns: Hy,
    defaultMatchWidth: "wide",
    parsePatterns: Yy,
    defaultParseWidth: "any"
  }),
  day: Vt({
    matchPatterns: Ky,
    defaultMatchWidth: "wide",
    parsePatterns: Gy,
    defaultParseWidth: "any"
  }),
  dayPeriod: Vt({
    matchPatterns: Qy,
    defaultMatchWidth: "any",
    parsePatterns: Xy,
    defaultParseWidth: "any"
  })
};
const Zy = Jy;
var ev = {
  code: "en-US",
  formatDistance: xy,
  formatLong: Ty,
  formatRelative: Py,
  localize: jy,
  match: Zy,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const $c = ev;
var tv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, nv = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, rv = /^'([^]*?)'?$/, ov = /''/g, iv = /[a-zA-Z]/;
function Ic(e, t, n) {
  var r, o, a, s, l, c, u, d, f, p, h, m, y, v, O, C, E, x;
  lt(2, arguments);
  var b = String(t), R = oo(), P = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : R.locale) !== null && r !== void 0 ? r : $c, A = yn((a = (s = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : R.firstWeekContainsDate) !== null && s !== void 0 ? s : (f = R.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var B = yn((h = (m = (y = (v = n == null ? void 0 : n.weekStartsOn) !== null && v !== void 0 ? v : n == null || (O = n.locale) === null || O === void 0 || (C = O.options) === null || C === void 0 ? void 0 : C.weekStartsOn) !== null && y !== void 0 ? y : R.weekStartsOn) !== null && m !== void 0 ? m : (E = R.locale) === null || E === void 0 || (x = E.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(B >= 0 && B <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var N = Tt(e);
  if (!sa(N))
    throw new RangeError("Invalid time value");
  var k = Kr(N), V = la(N, k), W = {
    firstWeekContainsDate: A,
    weekStartsOn: B,
    locale: P,
    _originalDate: N
  }, j = b.match(nv).map(function(_) {
    var U = _[0];
    if (U === "p" || U === "P") {
      var H = py[U];
      return H(_, P.formatLong);
    }
    return _;
  }).join("").match(tv).map(function(_) {
    if (_ === "''")
      return "'";
    var U = _[0];
    if (U === "'")
      return av(_);
    var H = cy[U];
    if (H)
      return !(n != null && n.useAdditionalWeekYearTokens) && vy(_) && Ol(_, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && yy(_) && Ol(_, t, String(e)), H(V, _, P.localize, W);
    if (U.match(iv))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + U + "`");
    return _;
  }).join("");
  return j;
}
function av(e) {
  var t = e.match(rv);
  return t ? t[1].replace(ov, "'") : e;
}
function sv(e, t, n) {
  var r, o, a, s, l, c, u, d, f, p;
  lt(2, arguments);
  var h = Tt(e), m = Tt(t), y = oo(), v = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : y.locale) !== null && r !== void 0 ? r : $c, O = yn((a = (s = (l = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && l !== void 0 ? l : y.weekStartsOn) !== null && s !== void 0 ? s : (f = y.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!v.localize)
    throw new RangeError("locale must contain localize property");
  if (!v.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!v.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var C = Zh(h, m);
  if (isNaN(C))
    throw new RangeError("Invalid time value");
  var E;
  C < -6 ? E = "other" : C < -1 ? E = "lastWeek" : C < 0 ? E = "yesterday" : C < 1 ? E = "today" : C < 2 ? E = "tomorrow" : C < 7 ? E = "nextWeek" : E = "other";
  var x = la(h, Kr(h)), b = la(m, Kr(m)), R = v.formatRelative(E, x, b, {
    locale: v,
    weekStartsOn: O
  });
  return Ic(h, R, {
    locale: v,
    weekStartsOn: O
  });
}
function lv(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ua(e, t) {
  return ua = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ua(e, t);
}
var uv = {
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
}, cv = function(t, n, r) {
  var o, a = uv[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + o : "hace " + o : o;
};
const dv = cv;
var fv = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, pv = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, mv = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, hv = {
  date: tr({
    formats: fv,
    defaultWidth: "full"
  }),
  time: tr({
    formats: pv,
    defaultWidth: "full"
  }),
  dateTime: tr({
    formats: mv,
    defaultWidth: "full"
  })
};
const yv = hv;
var vv = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, gv = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, bv = function(t, n, r, o) {
  return n.getUTCHours() !== 1 ? gv[t] : vv[t];
};
const xv = bv;
var Ev = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, Ov = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, wv = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, Sv = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, Tv = {
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
}, Cv = {
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
}, Rv = function(t, n) {
  var r = Number(t);
  return r + "º";
}, Pv = {
  ordinalNumber: Rv,
  era: Wt({
    values: Ev,
    defaultWidth: "wide"
  }),
  quarter: Wt({
    values: Ov,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: Wt({
    values: wv,
    defaultWidth: "wide"
  }),
  day: Wt({
    values: Sv,
    defaultWidth: "wide"
  }),
  dayPeriod: Wt({
    values: Tv,
    defaultWidth: "wide",
    formattingValues: Cv,
    defaultFormattingWidth: "wide"
  })
};
const $v = Pv;
var Iv = /^(\d+)(º)?/i, Nv = /\d+/i, Av = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, kv = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, Mv = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, _v = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Dv = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, jv = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, Fv = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, Lv = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, Bv = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, Uv = {
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
}, Wv = {
  ordinalNumber: Pc({
    matchPattern: Iv,
    parsePattern: Nv,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Vt({
    matchPatterns: Av,
    defaultMatchWidth: "wide",
    parsePatterns: kv,
    defaultParseWidth: "any"
  }),
  quarter: Vt({
    matchPatterns: Mv,
    defaultMatchWidth: "wide",
    parsePatterns: _v,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Vt({
    matchPatterns: Dv,
    defaultMatchWidth: "wide",
    parsePatterns: jv,
    defaultParseWidth: "any"
  }),
  day: Vt({
    matchPatterns: Fv,
    defaultMatchWidth: "wide",
    parsePatterns: Lv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Vt({
    matchPatterns: Bv,
    defaultMatchWidth: "any",
    parsePatterns: Uv,
    defaultParseWidth: "any"
  })
};
const Vv = Wv;
var zv = {
  code: "es",
  formatDistance: dv,
  formatLong: yv,
  formatRelative: xv,
  localize: $v,
  match: Vv,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const qv = zv, Hv = ({ isoDateTimeString: e, relative: t = !1, showTime: n = !0 }) => {
  const r = Sc(e) ? e : new Date(e), o = n ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy";
  return t ? /* @__PURE__ */ T.jsx("span", { children: sv(r, /* @__PURE__ */ new Date(), {
    locale: qv
  }) }) : /* @__PURE__ */ T.jsx("span", { children: Ic(r, o) });
};
Hv.propTypes = {
  isoDateTimeString: i.string.isRequired,
  relative: i.bool,
  showTime: i.bool
};
function Yv({ money: e, ...t }) {
  return /* @__PURE__ */ T.jsx(pn, { component: "span", fontSize: 14, ...t, children: Number(e).toLocaleString("es-AR", { style: "currency", currency: "ARS" }) });
}
Yv.propTypes = {
  money: i.number.isRequired
};
const Kv = ({ title: e, renderAside: t }) => /* @__PURE__ */ T.jsxs(
  fn,
  {
    display: "flex",
    direction: { sm: "row", xs: "column" },
    alignItems: { sm: "center", xs: "flex-start" },
    justifyContent: { sm: "space-between", xs: "flex-start" },
    marginBottom: 2,
    children: [
      /* @__PURE__ */ T.jsx(pn, { fontWeight: "bold", fontSize: 24, children: e }),
      t && /* @__PURE__ */ T.jsx(fn, { mt: { xs: 2, sm: 0 }, children: t })
    ]
  }
);
Kv.propTypes = {
  title: i.string.isRequired,
  renderAside: i.node
};
function Nc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Gv } = Object.prototype, { getPrototypeOf: Ga } = Object, li = ((e) => (t) => {
  const n = Gv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Gt = (e) => (e = e.toLowerCase(), (t) => li(t) === e), ui = (e) => (t) => typeof t === e, { isArray: pr } = Array, Gr = ui("undefined");
function Qv(e) {
  return e !== null && !Gr(e) && e.constructor !== null && !Gr(e.constructor) && $t(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ac = Gt("ArrayBuffer");
function Xv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ac(e.buffer), t;
}
const Jv = ui("string"), $t = ui("function"), kc = ui("number"), ci = (e) => e !== null && typeof e == "object", Zv = (e) => e === !0 || e === !1, So = (e) => {
  if (li(e) !== "object")
    return !1;
  const t = Ga(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, eg = Gt("Date"), tg = Gt("File"), ng = Gt("Blob"), rg = Gt("FileList"), og = (e) => ci(e) && $t(e.pipe), ig = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || $t(e.append) && ((t = li(e)) === "formdata" || // detect form-data instance
  t === "object" && $t(e.toString) && e.toString() === "[object FormData]"));
}, ag = Gt("URLSearchParams"), sg = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function io(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), pr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let l;
    for (r = 0; r < s; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function Mc(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const _c = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Dc = (e) => !Gr(e) && e !== _c;
function ca() {
  const { caseless: e } = Dc(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && Mc(t, o) || o;
    So(t[a]) && So(r) ? t[a] = ca(t[a], r) : So(r) ? t[a] = ca({}, r) : pr(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && io(arguments[r], n);
  return t;
}
const lg = (e, t, n, { allOwnKeys: r } = {}) => (io(t, (o, a) => {
  n && $t(o) ? e[a] = Nc(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), ug = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), cg = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, dg = (e, t, n, r) => {
  let o, a, s;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && Ga(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, fg = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, pg = (e) => {
  if (!e)
    return null;
  if (pr(e))
    return e;
  let t = e.length;
  if (!kc(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, mg = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ga(Uint8Array)), hg = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, yg = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, vg = Gt("HTMLFormElement"), gg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), wl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), bg = Gt("RegExp"), jc = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  io(n, (o, a) => {
    t(o, a, e) !== !1 && (r[a] = o);
  }), Object.defineProperties(e, r);
}, xg = (e) => {
  jc(e, (t, n) => {
    if ($t(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if ($t(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Eg = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return pr(e) ? r(e) : r(String(e).split(t)), n;
}, Og = () => {
}, wg = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Mi = "abcdefghijklmnopqrstuvwxyz", Sl = "0123456789", Fc = {
  DIGIT: Sl,
  ALPHA: Mi,
  ALPHA_DIGIT: Mi + Mi.toUpperCase() + Sl
}, Sg = (e = 16, t = Fc.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Tg(e) {
  return !!(e && $t(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Cg = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ci(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = pr(r) ? [] : {};
        return io(r, (s, l) => {
          const c = n(s, o + 1);
          !Gr(c) && (a[l] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, Rg = Gt("AsyncFunction"), Pg = (e) => e && (ci(e) || $t(e)) && $t(e.then) && $t(e.catch), L = {
  isArray: pr,
  isArrayBuffer: Ac,
  isBuffer: Qv,
  isFormData: ig,
  isArrayBufferView: Xv,
  isString: Jv,
  isNumber: kc,
  isBoolean: Zv,
  isObject: ci,
  isPlainObject: So,
  isUndefined: Gr,
  isDate: eg,
  isFile: tg,
  isBlob: ng,
  isRegExp: bg,
  isFunction: $t,
  isStream: og,
  isURLSearchParams: ag,
  isTypedArray: mg,
  isFileList: rg,
  forEach: io,
  merge: ca,
  extend: lg,
  trim: sg,
  stripBOM: ug,
  inherits: cg,
  toFlatObject: dg,
  kindOf: li,
  kindOfTest: Gt,
  endsWith: fg,
  toArray: pg,
  forEachEntry: hg,
  matchAll: yg,
  isHTMLForm: vg,
  hasOwnProperty: wl,
  hasOwnProp: wl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jc,
  freezeMethods: xg,
  toObjectSet: Eg,
  toCamelCase: gg,
  noop: Og,
  toFiniteNumber: wg,
  findKey: Mc,
  global: _c,
  isContextDefined: Dc,
  ALPHABET: Fc,
  generateString: Sg,
  isSpecCompliantForm: Tg,
  toJSONObject: Cg,
  isAsyncFn: Rg,
  isThenable: Pg
};
function Ie(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
L.inherits(Ie, Error, {
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
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Lc = Ie.prototype, Bc = {};
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
  Bc[e] = { value: e };
});
Object.defineProperties(Ie, Bc);
Object.defineProperty(Lc, "isAxiosError", { value: !0 });
Ie.from = (e, t, n, r, o, a) => {
  const s = Object.create(Lc);
  return L.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Ie.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const $g = null;
function da(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function Uc(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tl(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = Uc(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Ig(e) {
  return L.isArray(e) && !e.some(da);
}
const Ng = L.toFlatObject(L, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function di(e, t, n) {
  if (!L.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = L.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, v) {
    return !L.isUndefined(v[y]);
  });
  const r = n.metaTokens, o = n.visitor || d, a = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(t);
  if (!L.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (L.isDate(m))
      return m.toISOString();
    if (!c && L.isBlob(m))
      throw new Ie("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(m) || L.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function d(m, y, v) {
    let O = m;
    if (m && !v && typeof m == "object") {
      if (L.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), m = JSON.stringify(m);
      else if (L.isArray(m) && Ig(m) || (L.isFileList(m) || L.endsWith(y, "[]")) && (O = L.toArray(m)))
        return y = Uc(y), O.forEach(function(E, x) {
          !(L.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Tl([y], x, a) : s === null ? y : y + "[]",
            u(E)
          );
        }), !1;
    }
    return da(m) ? !0 : (t.append(Tl(v, y, a), u(m)), !1);
  }
  const f = [], p = Object.assign(Ng, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: da
  });
  function h(m, y) {
    if (!L.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(m), L.forEach(m, function(O, C) {
        (!(L.isUndefined(O) || O === null) && o.call(
          t,
          O,
          L.isString(C) ? C.trim() : C,
          y,
          p
        )) === !0 && h(O, y ? y.concat(C) : [C]);
      }), f.pop();
    }
  }
  if (!L.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Cl(e) {
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
function Qa(e, t) {
  this._pairs = [], e && di(e, this, t);
}
const Wc = Qa.prototype;
Wc.append = function(t, n) {
  this._pairs.push([t, n]);
};
Wc.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Cl);
  } : Cl;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Ag(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Vc(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ag, o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = L.isURLSearchParams(t) ? t.toString() : new Qa(t, n).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class kg {
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
    L.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Rl = kg, zc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Mg = typeof URLSearchParams < "u" ? URLSearchParams : Qa, _g = typeof FormData < "u" ? FormData : null, Dg = typeof Blob < "u" ? Blob : null, jg = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Fg = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), qt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Mg,
    FormData: _g,
    Blob: Dg
  },
  isStandardBrowserEnv: jg,
  isStandardBrowserWebWorkerEnv: Fg,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Lg(e, t) {
  return di(e, new qt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return qt.isNode && L.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Bg(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ug(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function qc(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    const l = Number.isFinite(+s), c = a >= n.length;
    return s = !s && L.isArray(o) ? o.length : s, c ? (L.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !l) : ((!o[s] || !L.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && L.isArray(o[s]) && (o[s] = Ug(o[s])), !l);
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const n = {};
    return L.forEachEntry(e, (r, o) => {
      t(Bg(r), o, n, 0);
    }), n;
  }
  return null;
}
const Wg = {
  "Content-Type": void 0
};
function Vg(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const fi = {
  transitional: zc,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = L.isObject(t);
    if (a && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
      return o && o ? JSON.stringify(qc(t)) : t;
    if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t))
      return t;
    if (L.isArrayBufferView(t))
      return t.buffer;
    if (L.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Lg(t, this.formSerializer).toString();
      if ((l = L.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return di(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), Vg(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || fi.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && L.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
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
    FormData: qt.classes.FormData,
    Blob: qt.classes.Blob
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
L.forEach(["delete", "get", "head"], function(t) {
  fi.headers[t] = {};
});
L.forEach(["post", "put", "patch"], function(t) {
  fi.headers[t] = L.merge(Wg);
});
const Xa = fi, zg = L.toObjectSet([
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
]), qg = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && zg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Pl = Symbol("internals");
function Rr(e) {
  return e && String(e).trim().toLowerCase();
}
function To(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(To) : String(e);
}
function Hg(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Yg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _i(e, t, n, r, o) {
  if (L.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!L.isString(t)) {
    if (L.isString(r))
      return t.indexOf(r) !== -1;
    if (L.isRegExp(r))
      return r.test(t);
  }
}
function Kg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Gg(e, t) {
  const n = L.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, s) {
        return this[r].call(this, t, o, a, s);
      },
      configurable: !0
    });
  });
}
class pi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(l, c, u) {
      const d = Rr(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = L.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = To(l));
    }
    const s = (l, c) => L.forEach(l, (u, d) => a(u, d, c));
    return L.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : L.isString(t) && (t = t.trim()) && !Yg(t) ? s(qg(t), n) : t != null && a(n, t, r), this;
  }
  get(t, n) {
    if (t = Rr(t), t) {
      const r = L.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Hg(o);
        if (L.isFunction(n))
          return n.call(this, o, r);
        if (L.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Rr(t), t) {
      const r = L.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || _i(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = Rr(s), s) {
        const l = L.findKey(r, s);
        l && (!n || _i(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return L.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || _i(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return L.forEach(this, (o, a) => {
      const s = L.findKey(r, a);
      if (s) {
        n[s] = To(o), delete n[a];
        return;
      }
      const l = t ? Kg(a) : String(a).trim();
      l !== a && delete n[a], n[l] = To(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && L.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Pl] = this[Pl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const l = Rr(s);
      r[l] || (Gg(o, s), r[l] = !0);
    }
    return L.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
pi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.freezeMethods(pi.prototype);
L.freezeMethods(pi);
const Jt = pi;
function Di(e, t) {
  const n = this || Xa, r = t || n, o = Jt.from(r.headers);
  let a = r.data;
  return L.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Hc(e) {
  return !!(e && e.__CANCEL__);
}
function ao(e, t, n) {
  Ie.call(this, e ?? "canceled", Ie.ERR_CANCELED, t, n), this.name = "CanceledError";
}
L.inherits(ao, Ie, {
  __CANCEL__: !0
});
function Qg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ie(
    "Request failed with status code " + n.status,
    [Ie.ERR_BAD_REQUEST, Ie.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Xg = qt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, a, s, l) {
        const c = [];
        c.push(n + "=" + encodeURIComponent(r)), L.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), L.isString(a) && c.push("path=" + a), L.isString(s) && c.push("domain=" + s), l === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function Jg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zg(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Yc(e, t) {
  return e && !Jg(t) ? Zg(e, t) : t;
}
const eb = qt.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(a) {
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
    return r = o(window.location.href), function(s) {
      const l = L.isString(s) ? o(s) : s;
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
function tb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function nb(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = r[a];
    s || (s = u), n[o] = c, r[o] = u;
    let f = a, p = 0;
    for (; f !== o; )
      p += n[f++], f = f % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - s < t)
      return;
    const h = d && u - d;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function $l(e, t) {
  let n = 0;
  const r = nb(50, 250);
  return (o) => {
    const a = o.loaded, s = o.lengthComputable ? o.total : void 0, l = a - n, c = r(l), u = a <= s;
    n = a;
    const d = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && s && u ? (s - a) / c : void 0,
      event: o
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const rb = typeof XMLHttpRequest < "u", ob = rb && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const a = Jt.from(e.headers).normalize(), s = e.responseType;
    let l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    L.isFormData(o) && (qt.isStandardBrowserEnv || qt.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const d = Yc(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Vc(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const h = Jt.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      Qg(function(O) {
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
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || zc;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new Ie(
        m,
        y.clarifyTimeoutError ? Ie.ETIMEDOUT : Ie.ECONNABORTED,
        e,
        u
      )), u = null;
    }, qt.isStandardBrowserEnv) {
      const h = (e.withCredentials || eb(d)) && e.xsrfCookieName && Xg.read(e.xsrfCookieName);
      h && a.set(e.xsrfHeaderName, h);
    }
    o === void 0 && a.setContentType(null), "setRequestHeader" in u && L.forEach(a.toJSON(), function(m, y) {
      u.setRequestHeader(y, m);
    }), L.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", $l(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", $l(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (h) => {
      u && (r(!h || h.type ? new ao(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const p = tb(d);
    if (p && qt.protocols.indexOf(p) === -1) {
      r(new Ie("Unsupported protocol " + p + ":", Ie.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, Co = {
  http: $g,
  xhr: ob
};
L.forEach(Co, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ib = {
  getAdapter: (e) => {
    e = L.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = L.isString(n) ? Co[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new Ie(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        L.hasOwnProp(Co, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!L.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Co
};
function ji(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ao(null, e);
}
function Il(e) {
  return ji(e), e.headers = Jt.from(e.headers), e.data = Di.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ib.getAdapter(e.adapter || Xa.adapter)(e).then(function(r) {
    return ji(e), r.data = Di.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Jt.from(r.headers), r;
  }, function(r) {
    return Hc(r) || (ji(e), r && r.response && (r.response.data = Di.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Jt.from(r.response.headers))), Promise.reject(r);
  });
}
const Nl = (e) => e instanceof Jt ? e.toJSON() : e;
function rr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return L.isPlainObject(u) && L.isPlainObject(d) ? L.merge.call({ caseless: f }, u, d) : L.isPlainObject(d) ? L.merge({}, d) : L.isArray(d) ? d.slice() : d;
  }
  function o(u, d, f) {
    if (L.isUndefined(d)) {
      if (!L.isUndefined(u))
        return r(void 0, u, f);
    } else
      return r(u, d, f);
  }
  function a(u, d) {
    if (!L.isUndefined(d))
      return r(void 0, d);
  }
  function s(u, d) {
    if (L.isUndefined(d)) {
      if (!L.isUndefined(u))
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
    headers: (u, d) => o(Nl(u), Nl(d), !0)
  };
  return L.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || o, p = f(e[d], t[d], d);
    L.isUndefined(p) && f !== l || (n[d] = p);
  }), n;
}
const Kc = "1.4.0", Ja = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ja[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Al = {};
Ja.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + Kc + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, l) => {
    if (t === !1)
      throw new Ie(
        o(s, " has been removed" + (n ? " in " + n : "")),
        Ie.ERR_DEPRECATED
      );
    return n && !Al[s] && (Al[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, l) : !0;
  };
};
function ab(e, t, n) {
  if (typeof e != "object")
    throw new Ie("options must be an object", Ie.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], s = t[a];
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
const fa = {
  assertOptions: ab,
  validators: Ja
}, ln = fa.validators;
class Lo {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Rl(),
      response: new Rl()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = rr(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && fa.assertOptions(r, {
      silentJSONParsing: ln.transitional(ln.boolean),
      forcedJSONParsing: ln.transitional(ln.boolean),
      clarifyTimeoutError: ln.transitional(ln.boolean)
    }, !1), o != null && (L.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : fa.assertOptions(o, {
      encode: ln.function,
      serialize: ln.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = a && L.merge(
      a.common,
      a[n.method]
    ), s && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
      }
    ), n.headers = Jt.concat(s, a);
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
      const m = [Il.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, u), p = m.length, d = Promise.resolve(n); f < p; )
        d = d.then(m[f++], m[f++]);
      return d;
    }
    p = l.length;
    let h = n;
    for (f = 0; f < p; ) {
      const m = l[f++], y = l[f++];
      try {
        h = m(h);
      } catch (v) {
        y.call(this, v);
        break;
      }
    }
    try {
      d = Il.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, p = u.length; f < p; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = rr(this.defaults, t);
    const n = Yc(t.baseURL, t.url);
    return Vc(n, t.params, t.paramsSerializer);
  }
}
L.forEach(["delete", "get", "head", "options"], function(t) {
  Lo.prototype[t] = function(n, r) {
    return this.request(rr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, l) {
      return this.request(rr(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  Lo.prototype[t] = n(), Lo.prototype[t + "Form"] = n(!0);
});
const Ro = Lo;
class Za {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const s = new Promise((l) => {
        r.subscribe(l), a = l;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(a);
      }, s;
    }, t(function(a, s, l) {
      r.reason || (r.reason = new ao(a, s, l), n(r.reason));
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
      token: new Za(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const sb = Za;
function lb(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ub(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const pa = {
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
Object.entries(pa).forEach(([e, t]) => {
  pa[t] = e;
});
const cb = pa;
function Gc(e) {
  const t = new Ro(e), n = Nc(Ro.prototype.request, t);
  return L.extend(n, Ro.prototype, t, { allOwnKeys: !0 }), L.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Gc(rr(e, o));
  }, n;
}
const nt = Gc(Xa);
nt.Axios = Ro;
nt.CanceledError = ao;
nt.CancelToken = sb;
nt.isCancel = Hc;
nt.VERSION = Kc;
nt.toFormData = di;
nt.AxiosError = Ie;
nt.Cancel = nt.CanceledError;
nt.all = function(t) {
  return Promise.all(t);
};
nt.spread = lb;
nt.isAxiosError = ub;
nt.mergeConfig = rr;
nt.AxiosHeaders = Jt;
nt.formToJSON = (e) => qc(L.isHTMLForm(e) ? new FormData(e) : e);
nt.HttpStatusCode = cb;
nt.default = nt;
const db = nt, Cn = db.create({
  baseURL: "/api"
});
Cn.interceptors.request.use((e) => (e.headers.Authorization = `Bearer ${localStorage.getItem("app-token")}`, e));
Cn.interceptors.response.use(
  (e) => e,
  (e) => {
    if (e.response.status === 401) {
      window.location = "/login";
      return;
    }
    throw e;
  }
);
class fb {
  login(t) {
    return Cn.post("/login", t);
  }
  me() {
    return Cn.get("/me");
  }
  async logout() {
    return await Cn.delete("/logout");
  }
  async resetPasswordEmail(t) {
    return await Cn.post("/recover-password", t);
  }
  async resetPassword(t) {
    return await Cn.post("/reset-password", t);
  }
}
const Fi = new fb();
function mi(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ua(e, t);
}
var Qc = /* @__PURE__ */ function() {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return t.subscribe = function(r) {
    var o = this, a = r || function() {
    };
    return this.listeners.push(a), this.onSubscribe(), function() {
      o.listeners = o.listeners.filter(function(s) {
        return s !== a;
      }), o.onUnsubscribe();
    };
  }, t.hasListeners = function() {
    return this.listeners.length > 0;
  }, t.onSubscribe = function() {
  }, t.onUnsubscribe = function() {
  }, e;
}(), ma = typeof window > "u";
function pb() {
}
function kl(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function mb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function hb(e, t, n) {
  return vb(e) ? typeof t == "function" ? S({}, n, {
    queryKey: e,
    queryFn: t
  }) : S({}, t, {
    queryKey: e
  }) : e;
}
function ha(e, t) {
  if (e === t)
    return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || Ml(e) && Ml(t)) {
    for (var r = n ? e.length : Object.keys(e).length, o = n ? t : Object.keys(t), a = o.length, s = n ? [] : {}, l = 0, c = 0; c < a; c++) {
      var u = n ? c : o[c];
      s[u] = ha(e[u], t[u]), s[u] === e[u] && l++;
    }
    return r === a && l === r ? e : s;
  }
  return t;
}
function yb(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Ml(e) {
  if (!_l(e))
    return !1;
  var t = e.constructor;
  if (typeof t > "u")
    return !0;
  var n = t.prototype;
  return !(!_l(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function _l(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function vb(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Dl(e) {
  Promise.resolve().then(e).catch(function(t) {
    return setTimeout(function() {
      throw t;
    });
  });
}
var gb = /* @__PURE__ */ function(e) {
  mi(t, e);
  function t() {
    var r;
    return r = e.call(this) || this, r.setup = function(o) {
      var a;
      if (!ma && ((a = window) != null && a.addEventListener)) {
        var s = function() {
          return o();
        };
        return window.addEventListener("visibilitychange", s, !1), window.addEventListener("focus", s, !1), function() {
          window.removeEventListener("visibilitychange", s), window.removeEventListener("focus", s);
        };
      }
    }, r;
  }
  var n = t.prototype;
  return n.onSubscribe = function() {
    this.cleanup || this.setEventListener(this.setup);
  }, n.onUnsubscribe = function() {
    if (!this.hasListeners()) {
      var o;
      (o = this.cleanup) == null || o.call(this), this.cleanup = void 0;
    }
  }, n.setEventListener = function(o) {
    var a, s = this;
    this.setup = o, (a = this.cleanup) == null || a.call(this), this.cleanup = o(function(l) {
      typeof l == "boolean" ? s.setFocused(l) : s.onFocus();
    });
  }, n.setFocused = function(o) {
    this.focused = o, o && this.onFocus();
  }, n.onFocus = function() {
    this.listeners.forEach(function(o) {
      o();
    });
  }, n.isFocused = function() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }, t;
}(Qc), bb = new gb(), xb = function(t) {
  this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
};
function Eb(e) {
  return e instanceof xb;
}
var Ob = /* @__PURE__ */ function() {
  function e() {
    this.queue = [], this.transactions = 0, this.notifyFn = function(n) {
      n();
    }, this.batchNotifyFn = function(n) {
      n();
    };
  }
  var t = e.prototype;
  return t.batch = function(r) {
    var o;
    this.transactions++;
    try {
      o = r();
    } finally {
      this.transactions--, this.transactions || this.flush();
    }
    return o;
  }, t.schedule = function(r) {
    var o = this;
    this.transactions ? this.queue.push(r) : Dl(function() {
      o.notifyFn(r);
    });
  }, t.batchCalls = function(r) {
    var o = this;
    return function() {
      for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
        s[l] = arguments[l];
      o.schedule(function() {
        r.apply(void 0, s);
      });
    };
  }, t.flush = function() {
    var r = this, o = this.queue;
    this.queue = [], o.length && Dl(function() {
      r.batchNotifyFn(function() {
        o.forEach(function(a) {
          r.notifyFn(a);
        });
      });
    });
  }, t.setNotifyFunction = function(r) {
    this.notifyFn = r;
  }, t.setBatchNotifyFunction = function(r) {
    this.batchNotifyFn = r;
  }, e;
}(), Zn = new Ob(), Xc = console;
function jl() {
  return Xc;
}
function wb(e) {
  Xc = e;
}
var Sb = /* @__PURE__ */ function(e) {
  mi(t, e);
  function t(r, o) {
    var a;
    return a = e.call(this) || this, a.client = r, a.options = o, a.trackedProps = [], a.selectError = null, a.bindMethods(), a.setOptions(o), a;
  }
  var n = t.prototype;
  return n.bindMethods = function() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }, n.onSubscribe = function() {
    this.listeners.length === 1 && (this.currentQuery.addObserver(this), Fl(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }, n.onUnsubscribe = function() {
    this.listeners.length || this.destroy();
  }, n.shouldFetchOnReconnect = function() {
    return ya(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }, n.shouldFetchOnWindowFocus = function() {
    return ya(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }, n.destroy = function() {
    this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this);
  }, n.setOptions = function(o, a) {
    var s = this.options, l = this.currentQuery;
    if (this.options = this.client.defaultQueryObserverOptions(o), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey), this.updateQuery();
    var c = this.hasListeners();
    c && Ll(this.currentQuery, l, this.options, s) && this.executeFetch(), this.updateResult(a), c && (this.currentQuery !== l || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && this.updateStaleTimeout();
    var u = this.computeRefetchInterval();
    c && (this.currentQuery !== l || this.options.enabled !== s.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u);
  }, n.getOptimisticResult = function(o) {
    var a = this.client.defaultQueryObserverOptions(o), s = this.client.getQueryCache().build(this.client, a);
    return this.createResult(s, a);
  }, n.getCurrentResult = function() {
    return this.currentResult;
  }, n.trackResult = function(o, a) {
    var s = this, l = {}, c = function(d) {
      s.trackedProps.includes(d) || s.trackedProps.push(d);
    };
    return Object.keys(o).forEach(function(u) {
      Object.defineProperty(l, u, {
        configurable: !1,
        enumerable: !0,
        get: function() {
          return c(u), o[u];
        }
      });
    }), (a.useErrorBoundary || a.suspense) && c("error"), l;
  }, n.getNextResult = function(o) {
    var a = this;
    return new Promise(function(s, l) {
      var c = a.subscribe(function(u) {
        u.isFetching || (c(), u.isError && (o != null && o.throwOnError) ? l(u.error) : s(u));
      });
    });
  }, n.getCurrentQuery = function() {
    return this.currentQuery;
  }, n.remove = function() {
    this.client.getQueryCache().remove(this.currentQuery);
  }, n.refetch = function(o) {
    return this.fetch(S({}, o, {
      meta: {
        refetchPage: o == null ? void 0 : o.refetchPage
      }
    }));
  }, n.fetchOptimistic = function(o) {
    var a = this, s = this.client.defaultQueryObserverOptions(o), l = this.client.getQueryCache().build(this.client, s);
    return l.fetch().then(function() {
      return a.createResult(l, s);
    });
  }, n.fetch = function(o) {
    var a = this;
    return this.executeFetch(o).then(function() {
      return a.updateResult(), a.currentResult;
    });
  }, n.executeFetch = function(o) {
    this.updateQuery();
    var a = this.currentQuery.fetch(this.options, o);
    return o != null && o.throwOnError || (a = a.catch(pb)), a;
  }, n.updateStaleTimeout = function() {
    var o = this;
    if (this.clearStaleTimeout(), !(ma || this.currentResult.isStale || !kl(this.options.staleTime))) {
      var a = mb(this.currentResult.dataUpdatedAt, this.options.staleTime), s = a + 1;
      this.staleTimeoutId = setTimeout(function() {
        o.currentResult.isStale || o.updateResult();
      }, s);
    }
  }, n.computeRefetchInterval = function() {
    var o;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (o = this.options.refetchInterval) != null ? o : !1;
  }, n.updateRefetchInterval = function(o) {
    var a = this;
    this.clearRefetchInterval(), this.currentRefetchInterval = o, !(ma || this.options.enabled === !1 || !kl(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(function() {
      (a.options.refetchIntervalInBackground || bb.isFocused()) && a.executeFetch();
    }, this.currentRefetchInterval));
  }, n.updateTimers = function() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }, n.clearTimers = function() {
    this.clearStaleTimeout(), this.clearRefetchInterval();
  }, n.clearStaleTimeout = function() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }, n.clearRefetchInterval = function() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }, n.createResult = function(o, a) {
    var s = this.currentQuery, l = this.options, c = this.currentResult, u = this.currentResultState, d = this.currentResultOptions, f = o !== s, p = f ? o.state : this.currentQueryInitialState, h = f ? this.currentResult : this.previousQueryResult, m = o.state, y = m.dataUpdatedAt, v = m.error, O = m.errorUpdatedAt, C = m.isFetching, E = m.status, x = !1, b = !1, R;
    if (a.optimisticResults) {
      var P = this.hasListeners(), A = !P && Fl(o, a), B = P && Ll(o, s, a, l);
      (A || B) && (C = !0, y || (E = "loading"));
    }
    if (a.keepPreviousData && !m.dataUpdateCount && (h != null && h.isSuccess) && E !== "error")
      R = h.data, y = h.dataUpdatedAt, E = h.status, x = !0;
    else if (a.select && typeof m.data < "u")
      if (c && m.data === (u == null ? void 0 : u.data) && a.select === this.selectFn)
        R = this.selectResult;
      else
        try {
          this.selectFn = a.select, R = a.select(m.data), a.structuralSharing !== !1 && (R = ha(c == null ? void 0 : c.data, R)), this.selectResult = R, this.selectError = null;
        } catch (V) {
          jl().error(V), this.selectError = V;
        }
    else
      R = m.data;
    if (typeof a.placeholderData < "u" && typeof R > "u" && (E === "loading" || E === "idle")) {
      var N;
      if (c != null && c.isPlaceholderData && a.placeholderData === (d == null ? void 0 : d.placeholderData))
        N = c.data;
      else if (N = typeof a.placeholderData == "function" ? a.placeholderData() : a.placeholderData, a.select && typeof N < "u")
        try {
          N = a.select(N), a.structuralSharing !== !1 && (N = ha(c == null ? void 0 : c.data, N)), this.selectError = null;
        } catch (V) {
          jl().error(V), this.selectError = V;
        }
      typeof N < "u" && (E = "success", R = N, b = !0);
    }
    this.selectError && (v = this.selectError, R = this.selectResult, O = Date.now(), E = "error");
    var k = {
      status: E,
      isLoading: E === "loading",
      isSuccess: E === "success",
      isError: E === "error",
      isIdle: E === "idle",
      data: R,
      dataUpdatedAt: y,
      error: v,
      errorUpdatedAt: O,
      failureCount: m.fetchFailureCount,
      errorUpdateCount: m.errorUpdateCount,
      isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
      isFetchedAfterMount: m.dataUpdateCount > p.dataUpdateCount || m.errorUpdateCount > p.errorUpdateCount,
      isFetching: C,
      isRefetching: C && E !== "loading",
      isLoadingError: E === "error" && m.dataUpdatedAt === 0,
      isPlaceholderData: b,
      isPreviousData: x,
      isRefetchError: E === "error" && m.dataUpdatedAt !== 0,
      isStale: es(o, a),
      refetch: this.refetch,
      remove: this.remove
    };
    return k;
  }, n.shouldNotifyListeners = function(o, a) {
    if (!a)
      return !0;
    var s = this.options, l = s.notifyOnChangeProps, c = s.notifyOnChangePropsExclusions;
    if (!l && !c || l === "tracked" && !this.trackedProps.length)
      return !0;
    var u = l === "tracked" ? this.trackedProps : l;
    return Object.keys(o).some(function(d) {
      var f = d, p = o[f] !== a[f], h = u == null ? void 0 : u.some(function(y) {
        return y === d;
      }), m = c == null ? void 0 : c.some(function(y) {
        return y === d;
      });
      return p && !m && (!u || h);
    });
  }, n.updateResult = function(o) {
    var a = this.currentResult;
    if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !yb(this.currentResult, a)) {
      var s = {
        cache: !0
      };
      (o == null ? void 0 : o.listeners) !== !1 && this.shouldNotifyListeners(this.currentResult, a) && (s.listeners = !0), this.notify(S({}, s, o));
    }
  }, n.updateQuery = function() {
    var o = this.client.getQueryCache().build(this.client, this.options);
    if (o !== this.currentQuery) {
      var a = this.currentQuery;
      this.currentQuery = o, this.currentQueryInitialState = o.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (a == null || a.removeObserver(this), o.addObserver(this));
    }
  }, n.onQueryUpdate = function(o) {
    var a = {};
    o.type === "success" ? a.onSuccess = !0 : o.type === "error" && !Eb(o.error) && (a.onError = !0), this.updateResult(a), this.hasListeners() && this.updateTimers();
  }, n.notify = function(o) {
    var a = this;
    Zn.batch(function() {
      o.onSuccess ? (a.options.onSuccess == null || a.options.onSuccess(a.currentResult.data), a.options.onSettled == null || a.options.onSettled(a.currentResult.data, null)) : o.onError && (a.options.onError == null || a.options.onError(a.currentResult.error), a.options.onSettled == null || a.options.onSettled(void 0, a.currentResult.error)), o.listeners && a.listeners.forEach(function(s) {
        s(a.currentResult);
      }), o.cache && a.client.getQueryCache().notify({
        query: a.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }, t;
}(Qc);
function Tb(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Fl(e, t) {
  return Tb(e, t) || e.state.dataUpdatedAt > 0 && ya(e, t, t.refetchOnMount);
}
function ya(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && es(e, t);
  }
  return !1;
}
function Ll(e, t, n, r) {
  return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && es(e, n);
}
function es(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var Cb = Ar.unstable_batchedUpdates;
Zn.setBatchNotifyFunction(Cb);
var Rb = console;
wb(Rb);
var Bl = /* @__PURE__ */ Oe.createContext(void 0), Pb = /* @__PURE__ */ Oe.createContext(!1);
function $b(e) {
  return e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Bl), window.ReactQueryClientContext) : Bl;
}
var Jc = function() {
  var t = Oe.useContext($b(Oe.useContext(Pb)));
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
};
function Ib() {
  var e = !1;
  return {
    clearReset: function() {
      e = !1;
    },
    reset: function() {
      e = !0;
    },
    isReset: function() {
      return e;
    }
  };
}
var Nb = /* @__PURE__ */ Oe.createContext(Ib()), Ab = function() {
  return Oe.useContext(Nb);
};
function kb(e, t, n) {
  return typeof t == "function" ? t.apply(void 0, n) : typeof t == "boolean" ? t : !!e;
}
function Mb(e, t) {
  var n = Oe.useRef(!1), r = Oe.useState(0), o = r[1], a = Jc(), s = Ab(), l = a.defaultQueryObserverOptions(e);
  l.optimisticResults = !0, l.onError && (l.onError = Zn.batchCalls(l.onError)), l.onSuccess && (l.onSuccess = Zn.batchCalls(l.onSuccess)), l.onSettled && (l.onSettled = Zn.batchCalls(l.onSettled)), l.suspense && (typeof l.staleTime != "number" && (l.staleTime = 1e3), l.cacheTime === 0 && (l.cacheTime = 1)), (l.suspense || l.useErrorBoundary) && (s.isReset() || (l.retryOnMount = !1));
  var c = Oe.useState(function() {
    return new t(a, l);
  }), u = c[0], d = u.getOptimisticResult(l);
  if (Oe.useEffect(function() {
    n.current = !0, s.clearReset();
    var f = u.subscribe(Zn.batchCalls(function() {
      n.current && o(function(p) {
        return p + 1;
      });
    }));
    return u.updateResult(), function() {
      n.current = !1, f();
    };
  }, [s, u]), Oe.useEffect(function() {
    u.setOptions(l, {
      listeners: !1
    });
  }, [l, u]), l.suspense && d.isLoading)
    throw u.fetchOptimistic(l).then(function(f) {
      var p = f.data;
      l.onSuccess == null || l.onSuccess(p), l.onSettled == null || l.onSettled(p, null);
    }).catch(function(f) {
      s.clearReset(), l.onError == null || l.onError(f), l.onSettled == null || l.onSettled(void 0, f);
    });
  if (d.isError && !s.isReset() && !d.isFetching && kb(l.suspense, l.useErrorBoundary, [d.error, u.getCurrentQuery()]))
    throw d.error;
  return l.notifyOnChangeProps === "tracked" && (d = u.trackResult(d, l)), d;
}
function Zc(e, t, n) {
  var r = hb(e, t, n);
  return Mb(r, Sb);
}
const ed = Ff({}), _b = ({ children: e }) => {
  const [t, n] = _t(null), [r, o] = _t(!1), a = Jc(), s = localStorage.getItem("app-token");
  ko(() => {
    s && (t || (o(!0), u().finally(() => o(!1))));
  }, [s, t]);
  const l = (d) => Fi.login(d).then((f) => {
    localStorage.setItem("app-token", f.data.token), n(f.data.user);
  }), c = () => {
    Fi.logout().then(() => {
      n(null), a.clear(), localStorage.removeItem("app-token");
    });
  }, u = async () => Fi.me().then((d) => {
    n(d.data.user);
  }).catch(() => {
    n(null), localStorage.removeItem("app-token");
  });
  return /* @__PURE__ */ T.jsx(
    ed.Provider,
    {
      value: {
        user: t,
        login: l,
        logout: c,
        me: u
      },
      children: r ? /* @__PURE__ */ T.jsx(dr, {}) : e
    }
  );
};
_b.propTypes = {
  children: i.node.isRequired
};
const td = () => Lf(ed);
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
function va() {
  return va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, va.apply(this, arguments);
}
var Ul;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ul || (Ul = {}));
function tt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function so(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function ga(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function nd(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var Wl;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Wl || (Wl = {}));
function ba(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Db(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = ""
  } = typeof e == "string" ? nd(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : jb(n, t) : t,
    search: Fb(r),
    hash: Lb(o)
  };
}
function jb(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
  }), n.length > 1 ? n.join("/") : "/";
}
function Li(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function rd(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function od(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string" ? o = nd(e) : (o = va({}, e), tt(!o.pathname || !o.pathname.includes("?"), Li("?", "pathname", "search", o)), tt(!o.pathname || !o.pathname.includes("#"), Li("#", "pathname", "hash", o)), tt(!o.search || !o.search.includes("#"), Li("#", "search", "hash", o)));
  let a = e === "" || o.pathname === "", s = a ? "/" : o.pathname, l;
  if (r || s == null)
    l = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; )
        p.shift(), f -= 1;
      o.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = Db(o, l), u = s && s !== "/" && s.endsWith("/"), d = (a || s === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const ts = (e) => e.join("/").replace(/\/\/+/g, "/"), Fb = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Lb = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, id = ["post", "put", "patch", "delete"];
new Set(id);
const Bb = ["get", ...id];
new Set(Bb);
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
function xa() {
  return xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xa.apply(this, arguments);
}
const hi = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (hi.displayName = "DataRouter");
const ad = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (ad.displayName = "DataRouterState");
const Ub = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (Ub.displayName = "Await");
const bn = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (bn.displayName = "Navigation");
const ns = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (ns.displayName = "Location");
const mr = /* @__PURE__ */ g.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (mr.displayName = "Route");
const Wb = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (Wb.displayName = "RouteError");
function Vb(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  rs() || (process.env.NODE_ENV !== "production" ? tt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : tt(!1));
  let {
    basename: r,
    navigator: o
  } = g.useContext(bn), {
    hash: a,
    pathname: s,
    search: l
  } = yi(e, {
    relative: n
  }), c = s;
  return r !== "/" && (c = s === "/" ? r : ts([r, s])), o.createHref({
    pathname: c,
    search: l,
    hash: a
  });
}
function rs() {
  return g.useContext(ns) != null;
}
function hr() {
  return rs() || (process.env.NODE_ENV !== "production" ? tt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : tt(!1)), g.useContext(ns).location;
}
const sd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ld(e) {
  g.useContext(bn).static || g.useLayoutEffect(e);
}
function ud() {
  let {
    isDataRoute: e
  } = g.useContext(mr);
  return e ? Kb() : zb();
}
function zb() {
  rs() || (process.env.NODE_ENV !== "production" ? tt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : tt(!1));
  let e = g.useContext(hi), {
    basename: t,
    navigator: n
  } = g.useContext(bn), {
    matches: r
  } = g.useContext(mr), {
    pathname: o
  } = hr(), a = JSON.stringify(rd(r).map((c) => c.pathnameBase)), s = g.useRef(!1);
  return ld(() => {
    s.current = !0;
  }), g.useCallback(function(c, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && so(s.current, sd), !s.current)
      return;
    if (typeof c == "number") {
      n.go(c);
      return;
    }
    let d = od(c, JSON.parse(a), o, u.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : ts([t, d.pathname])), (u.replace ? n.replace : n.push)(d, u.state, u);
  }, [t, n, a, o, e]);
}
function yi(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    matches: r
  } = g.useContext(mr), {
    pathname: o
  } = hr(), a = JSON.stringify(rd(r).map((s) => s.pathnameBase));
  return g.useMemo(() => od(e, JSON.parse(a), o, n === "path"), [e, a, o, n]);
}
var cd = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(cd || {}), os = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(os || {});
function dd(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function qb(e) {
  let t = g.useContext(hi);
  return t || (process.env.NODE_ENV !== "production" ? tt(!1, dd(e)) : tt(!1)), t;
}
function Hb(e) {
  let t = g.useContext(mr);
  return t || (process.env.NODE_ENV !== "production" ? tt(!1, dd(e)) : tt(!1)), t;
}
function fd(e) {
  let t = Hb(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? tt(!1, e + ' can only be used on routes that contain a unique "id"') : tt(!1)), n.route.id;
}
function Yb() {
  return fd(os.UseRouteId);
}
function Kb() {
  let {
    router: e
  } = qb(cd.UseNavigateStable), t = fd(os.UseNavigateStable), n = g.useRef(!1);
  return ld(() => {
    n.current = !0;
  }), g.useCallback(function(o, a) {
    a === void 0 && (a = {}), process.env.NODE_ENV !== "production" && so(n.current, sd), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, xa({
      fromRouteId: t
    }, a)));
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
function Mn() {
  return Mn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mn.apply(this, arguments);
}
function is(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Po = "get", $o = "application/x-www-form-urlencoded";
function vi(e) {
  return e != null && typeof e.tagName == "string";
}
function Gb(e) {
  return vi(e) && e.tagName.toLowerCase() === "button";
}
function Qb(e) {
  return vi(e) && e.tagName.toLowerCase() === "form";
}
function Xb(e) {
  return vi(e) && e.tagName.toLowerCase() === "input";
}
function Jb(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Zb(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Jb(e);
}
function Ea(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]);
  }, []));
}
function e0(e, t) {
  let n = Ea(e);
  return t && t.forEach((r, o) => {
    n.has(o) || t.getAll(o).forEach((a) => {
      n.append(o, a);
    });
  }), n;
}
let yo = null;
function t0() {
  if (yo === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), yo = !1;
    } catch {
      yo = !0;
    }
  return yo;
}
const n0 = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Bi(e) {
  return e != null && !n0.has(e) ? (process.env.NODE_ENV !== "production" && so(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + $o + '"')), null) : e;
}
function r0(e, t) {
  let n, r, o, a, s;
  if (Qb(e)) {
    let l = e.getAttribute("action");
    r = l ? ba(l, t) : null, n = e.getAttribute("method") || Po, o = Bi(e.getAttribute("enctype")) || $o, a = new FormData(e);
  } else if (Gb(e) || Xb(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (r = c ? ba(c, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || Po, o = Bi(e.getAttribute("formenctype")) || Bi(l.getAttribute("enctype")) || $o, a = new FormData(l, e), !t0()) {
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
    if (vi(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = Po, r = null, o = $o, s = e;
  }
  return a && o === "text/plain" && (s = a, a = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: o,
    formData: a,
    body: s
  };
}
const o0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], i0 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], a0 = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"];
process.env.NODE_ENV;
const s0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", l0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, pd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: o,
    reloadDocument: a,
    replace: s,
    state: l,
    target: c,
    to: u,
    preventScrollReset: d
  } = t, f = is(t, o0), {
    basename: p
  } = g.useContext(bn), h, m = !1;
  if (typeof u == "string" && l0.test(u) && (h = u, s0))
    try {
      let C = new URL(window.location.href), E = u.startsWith("//") ? new URL(C.protocol + u) : new URL(u), x = ba(E.pathname, p);
      E.origin === C.origin && x != null ? u = x + E.search + E.hash : m = !0;
    } catch {
      process.env.NODE_ENV !== "production" && so(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let y = Vb(u, {
    relative: o
  }), v = p0(u, {
    replace: s,
    state: l,
    target: c,
    preventScrollReset: d,
    relative: o
  });
  function O(C) {
    r && r(C), C.defaultPrevented || v(C);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ g.createElement("a", Mn({}, f, {
      href: h || y,
      onClick: m || a ? r : O,
      ref: n,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (pd.displayName = "Link");
const u0 = /* @__PURE__ */ g.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: a = "",
    end: s = !1,
    style: l,
    to: c,
    children: u
  } = t, d = is(t, i0), f = yi(c, {
    relative: d.relative
  }), p = hr(), h = g.useContext(ad), {
    navigator: m
  } = g.useContext(bn), y = m.encodeLocation ? m.encodeLocation(f).pathname : f.pathname, v = p.pathname, O = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
  o || (v = v.toLowerCase(), O = O ? O.toLowerCase() : null, y = y.toLowerCase());
  let C = v === y || !s && v.startsWith(y) && v.charAt(y.length) === "/", E = O != null && (O === y || !s && O.startsWith(y) && O.charAt(y.length) === "/"), x = C ? r : void 0, b;
  typeof a == "function" ? b = a({
    isActive: C,
    isPending: E
  }) : b = [a, C ? "active" : null, E ? "pending" : null].filter(Boolean).join(" ");
  let R = typeof l == "function" ? l({
    isActive: C,
    isPending: E
  }) : l;
  return /* @__PURE__ */ g.createElement(pd, Mn({}, d, {
    "aria-current": x,
    className: b,
    ref: n,
    style: R,
    to: c
  }), typeof u == "function" ? u({
    isActive: C,
    isPending: E
  }) : u);
});
process.env.NODE_ENV !== "production" && (u0.displayName = "NavLink");
const c0 = /* @__PURE__ */ g.forwardRef((e, t) => {
  let n = h0();
  return /* @__PURE__ */ g.createElement(md, Mn({}, e, {
    submit: n,
    ref: t
  }));
});
process.env.NODE_ENV !== "production" && (c0.displayName = "Form");
const md = /* @__PURE__ */ g.forwardRef((e, t) => {
  let {
    reloadDocument: n,
    replace: r,
    state: o,
    method: a = Po,
    action: s,
    onSubmit: l,
    submit: c,
    relative: u,
    preventScrollReset: d
  } = e, f = is(e, a0), p = a.toLowerCase() === "get" ? "get" : "post", h = y0(s, {
    relative: u
  }), m = (y) => {
    if (l && l(y), y.defaultPrevented)
      return;
    y.preventDefault();
    let v = y.nativeEvent.submitter, O = (v == null ? void 0 : v.getAttribute("formmethod")) || a;
    c(v || y.currentTarget, {
      method: O,
      replace: r,
      state: o,
      relative: u,
      preventScrollReset: d
    });
  };
  return /* @__PURE__ */ g.createElement("form", Mn({
    ref: t,
    method: p,
    action: h,
    onSubmit: n ? l : m
  }, f));
});
process.env.NODE_ENV !== "production" && (md.displayName = "FormImpl");
process.env.NODE_ENV;
var Oa;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher";
})(Oa || (Oa = {}));
var Vl;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Vl || (Vl = {}));
function d0(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function f0(e) {
  let t = g.useContext(hi);
  return t || (process.env.NODE_ENV !== "production" ? tt(!1, d0(e)) : tt(!1)), t;
}
function p0(e, t) {
  let {
    target: n,
    replace: r,
    state: o,
    preventScrollReset: a,
    relative: s
  } = t === void 0 ? {} : t, l = ud(), c = hr(), u = yi(e, {
    relative: s
  });
  return g.useCallback((d) => {
    if (Zb(d, n)) {
      d.preventDefault();
      let f = r !== void 0 ? r : ga(c) === ga(u);
      l(e, {
        replace: f,
        state: o,
        preventScrollReset: a,
        relative: s
      });
    }
  }, [c, l, u, r, o, n, e, a, s]);
}
function hd(e) {
  process.env.NODE_ENV !== "production" && so(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
  let t = g.useRef(Ea(e)), n = g.useRef(!1), r = hr(), o = g.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    e0(r.search, n.current ? null : t.current)
  ), [r.search]), a = ud(), s = g.useCallback((l, c) => {
    const u = Ea(typeof l == "function" ? l(o) : l);
    n.current = !0, a("?" + u, c);
  }, [a, o]);
  return [o, s];
}
function m0() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
function h0() {
  let {
    router: e
  } = f0(Oa.UseSubmit), {
    basename: t
  } = g.useContext(bn), n = Yb();
  return g.useCallback(function(r, o) {
    o === void 0 && (o = {}), m0();
    let {
      action: a,
      method: s,
      encType: l,
      formData: c,
      body: u
    } = r0(r, t);
    e.navigate(o.action || a, {
      preventScrollReset: o.preventScrollReset,
      formData: c,
      body: u,
      formMethod: o.method || s,
      formEncType: o.encType || l,
      replace: o.replace,
      state: o.state,
      fromRouteId: n
    });
  }, [e, t, n]);
}
function y0(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = g.useContext(bn), o = g.useContext(mr);
  o || (process.env.NODE_ENV !== "production" ? tt(!1, "useFormAction must be used inside a RouteContext") : tt(!1));
  let [a] = o.matches.slice(-1), s = Mn({}, yi(e || ".", {
    relative: n
  })), l = hr();
  if (e == null && (s.search = l.search, a.route.index)) {
    let c = new URLSearchParams(s.search);
    c.delete("index"), s.search = c.toString() ? "?" + c.toString() : "";
  }
  return (!e || e === ".") && a.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (s.pathname = s.pathname === "/" ? r : ts([r, s.pathname])), ga(s);
}
function mR() {
  const [e, t] = hd();
  return {
    tab: Number(e.get("tab")) || 1,
    onChangeTab: (o, a) => {
      t({ tab: a });
    }
  };
}
const yd = (e, t) => {
  if (!e)
    return !1;
  const n = e.permissions;
  for (let r in t)
    if (!n[r] || n[r] === !1)
      return !1;
  return !0;
}, St = {
  ASC: "asc",
  DESC: "desc"
};
function v0(e, t, n, r = St.ASC, o = null) {
  let a = e[n] ?? "", s = t[n] ?? "";
  if (sa(new Date(a)) && sa(new Date(s)))
    return a = new Date(a), s = new Date(s), r === St.ASC ? a - s : s - a;
  n === "status" && (a = a.deleted_at ? "inactivo" : "activo", s = s.deleted_at ? "inactivo" : "activo"), typeof o == "function" && (a = o(e, n), s = o(t, n)), (typeof a == "object" || typeof s == "object") && (a = a.name, s = s.name), a = String(a).toLowerCase().trim(), s = String(s).toLowerCase().trim();
  const l = a.localeCompare(s);
  return r === St.ASC ? l : -l;
}
const g0 = ({ children: e, fallback: t, has: n = {} }) => {
  const { user: r } = td();
  return yd(r, n) ? e : t;
};
g0.propTypes = {
  children: i.node.isRequired,
  fallback: i.node,
  has: i.object
};
const as = ({
  open: e,
  onClose: t,
  children: n,
  style: r,
  renderBox: o = !0,
  disableCloseOnBackdropClick: a = !1,
  isLoading: s = !1,
  ...l
}) => {
  const c = (u, d) => {
    a && d === "backdropClick" || t(u, d);
  };
  return /* @__PURE__ */ T.jsx(
    zf,
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
      children: /* @__PURE__ */ T.jsxs(qf, { sx: { position: "relative" }, children: [
        s && /* @__PURE__ */ T.jsx(dr, {}),
        o ? /* @__PURE__ */ T.jsx(wc, { style: r, children: n }) : /* @__PURE__ */ T.jsx("div", { style: r, children: n }),
        /* @__PURE__ */ T.jsx(
          Hf,
          {
            onClick: c,
            sx: {
              position: "absolute",
              top: 2,
              right: 2
            },
            children: /* @__PURE__ */ T.jsx(ip, {})
          }
        )
      ] })
    }
  );
};
as.propTypes = {
  open: i.bool.isRequired,
  onClose: i.func.isRequired,
  children: i.node.isRequired,
  style: i.object,
  renderBox: i.bool,
  disableCloseOnBackdropClick: i.bool,
  isLoading: i.bool
};
const b0 = ({ open: e, title: t, description: n, onConfirm: r, onCancel: o, isLoading: a, error: s, children: l, sx: c }) => {
  const u = () => {
    typeof r == "function" && r();
  }, d = () => {
    !a && o && o();
  };
  return /* @__PURE__ */ T.jsxs(
    as,
    {
      open: e,
      onClose: d,
      sx: {
        margin: "0 auto",
        maxWidth: 400,
        ...c
      },
      children: [
        a && /* @__PURE__ */ T.jsx(dr, {}),
        /* @__PURE__ */ T.jsx(pn, { fontWeight: "bold", variant: "h6", mb: 1, children: /* @__PURE__ */ T.jsx("strong", { children: t ?? "" }) }),
        /* @__PURE__ */ T.jsx(Hu, { sx: { mb: 2 } }),
        /* @__PURE__ */ T.jsx(fn, { mb: 1, fontSize: 16, textAlign: "center", children: n ?? "" }),
        /* @__PURE__ */ T.jsxs(fn, { direction: "column", mb: 2, children: [
          l,
          s && /* @__PURE__ */ T.jsxs(fn, { alignItems: "center", direction: "row", mt: 1, children: [
            /* @__PURE__ */ T.jsx(Zu, { color: "error", sx: { marginRight: ".5rem", fontSize: "2rem" } }),
            /* @__PURE__ */ T.jsx(pn, { color: "error", fontSize: "16px", children: typeof s == "string" ? s : "Ocurrió un error, intente nuevamente." })
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "end"
            },
            children: [
              /* @__PURE__ */ T.jsx(ta, { color: "secondary", onClick: d, disabled: a, children: "Cancelar" }),
              /* @__PURE__ */ T.jsx(ta, { onClick: u, disabled: a, children: s ? "Reintentar" : "Confirmar" })
            ]
          }
        )
      ]
    }
  );
};
b0.propTypes = {
  open: i.bool.isRequired,
  title: i.string,
  description: i.oneOfType([i.string, i.node]),
  onConfirm: i.func,
  onCancel: i.func,
  isLoading: i.bool,
  error: i.string,
  children: i.node,
  sx: i.object
};
const x0 = ({ open: e, onConfirm: t, children: n }) => {
  const r = () => {
    typeof t == "function" && t();
  };
  return /* @__PURE__ */ T.jsxs(
    as,
    {
      open: e,
      onClose: r,
      style: {
        maxWidth: "400px"
      },
      children: [
        /* @__PURE__ */ T.jsx(pn, { fontWeight: "bold", variant: "h6", mb: 1, color: "error", children: "Error" }),
        /* @__PURE__ */ T.jsx(Hu, { sx: { mb: 2 } }),
        /* @__PURE__ */ T.jsx(fn, { direction: "column", mb: 2, children: n && /* @__PURE__ */ T.jsxs(fn, { alignItems: "center", children: [
          /* @__PURE__ */ T.jsx(Zu, { color: "error", sx: { mb: "1rem", fontSize: "3rem" } }),
          /* @__PURE__ */ T.jsx(pn, { color: "error", fontSize: "16px", textAlign: "center", children: n })
        ] }) }),
        /* @__PURE__ */ T.jsx(fn, { direction: "row", justifyContent: "end", children: /* @__PURE__ */ T.jsx(ta, { onClick: r, children: "Aceptar" }) })
      ]
    }
  );
};
x0.propTypes = {
  open: i.bool.isRequired,
  onConfirm: i.func,
  children: i.node
};
function Qr(e) {
  return typeof e == "string";
}
function E0(e, t, n) {
  return e === void 0 || Qr(e) ? t : S({}, t, {
    ownerState: S({}, t.ownerState, n)
  });
}
const O0 = {
  disableDefaultClasses: !1
}, w0 = /* @__PURE__ */ g.createContext(O0);
function vd(e) {
  const {
    disableDefaultClasses: t
  } = g.useContext(w0);
  return (n) => t ? "" : e(n);
}
function S0(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function wa(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function zl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function T0(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: a
  } = e;
  if (!t) {
    const h = ge(o == null ? void 0 : o.className, r == null ? void 0 : r.className, a, n == null ? void 0 : n.className), m = S({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), y = S({}, n, o, r);
    return h.length > 0 && (y.className = h), Object.keys(m).length > 0 && (y.style = m), {
      props: y,
      internalRef: void 0
    };
  }
  const s = S0(S({}, o, r)), l = zl(r), c = zl(o), u = t(s), d = ge(u == null ? void 0 : u.className, n == null ? void 0 : n.className, a, o == null ? void 0 : o.className, r == null ? void 0 : r.className), f = S({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = S({}, u, n, c, l);
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
const C0 = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function _n(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: a = !1
  } = e, s = ve(e, C0), l = a ? {} : wa(r, o), {
    props: c,
    internalRef: u
  } = T0(S({}, s, {
    externalSlotProps: l
  })), d = st(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return E0(n, S({}, c, {
    ref: d
  }), o);
}
const R0 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function P0(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function $0(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function I0(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || $0(e));
}
function N0(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(R0)).forEach((r, o) => {
    const a = P0(r);
    a === -1 || !I0(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function A0() {
  return !0;
}
function Bo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: a = N0,
    isEnabled: s = A0,
    open: l
  } = e, c = g.useRef(!1), u = g.useRef(null), d = g.useRef(null), f = g.useRef(null), p = g.useRef(null), h = g.useRef(!1), m = g.useRef(null), y = st(t.ref, m), v = g.useRef(null);
  g.useEffect(() => {
    !l || !m.current || (h.current = !n);
  }, [n, l]), g.useEffect(() => {
    if (!l || !m.current)
      return;
    const E = mt(m.current);
    return m.current.contains(E.activeElement) || (m.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), m.current.setAttribute("tabIndex", "-1")), h.current && m.current.focus()), () => {
      o || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), g.useEffect(() => {
    if (!l || !m.current)
      return;
    const E = mt(m.current), x = (P) => {
      const {
        current: A
      } = m;
      if (A !== null) {
        if (!E.hasFocus() || r || !s() || c.current) {
          c.current = !1;
          return;
        }
        if (!A.contains(E.activeElement)) {
          if (P && p.current !== P.target || E.activeElement !== p.current)
            p.current = null;
          else if (p.current !== null)
            return;
          if (!h.current)
            return;
          let k = [];
          if ((E.activeElement === u.current || E.activeElement === d.current) && (k = a(m.current)), k.length > 0) {
            var B, N;
            const V = !!((B = v.current) != null && B.shiftKey && ((N = v.current) == null ? void 0 : N.key) === "Tab"), W = k[0], j = k[k.length - 1];
            typeof W != "string" && typeof j != "string" && (V ? j.focus() : W.focus());
          } else
            A.focus();
        }
      }
    }, b = (P) => {
      v.current = P, !(r || !s() || P.key !== "Tab") && E.activeElement === m.current && P.shiftKey && (c.current = !0, d.current && d.current.focus());
    };
    E.addEventListener("focusin", x), E.addEventListener("keydown", b, !0);
    const R = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && x(null);
    }, 50);
    return () => {
      clearInterval(R), E.removeEventListener("focusin", x), E.removeEventListener("keydown", b, !0);
    };
  }, [n, r, o, s, l, a]);
  const O = (E) => {
    f.current === null && (f.current = E.relatedTarget), h.current = !0, p.current = E.target;
    const x = t.props.onFocus;
    x && x(E);
  }, C = (E) => {
    f.current === null && (f.current = E.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ T.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ T.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ g.cloneElement(t, {
      ref: y,
      onFocus: O
    }), /* @__PURE__ */ T.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Bo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: to,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: i.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: i.func,
  /**
   * If `true`, focus is locked.
   */
  open: i.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Bo["propTypes"] = sc(Bo.propTypes));
var vt = "top", Nt = "bottom", At = "right", gt = "left", ss = "auto", lo = [vt, Nt, At, gt], or = "start", Xr = "end", k0 = "clippingParents", gd = "viewport", Pr = "popper", M0 = "reference", ql = /* @__PURE__ */ lo.reduce(function(e, t) {
  return e.concat([t + "-" + or, t + "-" + Xr]);
}, []), bd = /* @__PURE__ */ [].concat(lo, [ss]).reduce(function(e, t) {
  return e.concat([t, t + "-" + or, t + "-" + Xr]);
}, []), _0 = "beforeRead", D0 = "read", j0 = "afterRead", F0 = "beforeMain", L0 = "main", B0 = "afterMain", U0 = "beforeWrite", W0 = "write", V0 = "afterWrite", z0 = [_0, D0, j0, F0, L0, B0, U0, W0, V0];
function Kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ct(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Dn(e) {
  var t = Ct(e).Element;
  return e instanceof t || e instanceof Element;
}
function It(e) {
  var t = Ct(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ls(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function q0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !It(a) || !Kt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function H0(e) {
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
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !It(o) || !Kt(o) || (Object.assign(o.style, l), Object.keys(a).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const Y0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: q0,
  effect: H0,
  requires: ["computeStyles"]
};
function Ht(e) {
  return e.split("-")[0];
}
var $n = Math.max, Uo = Math.min, ir = Math.round;
function Sa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function xd() {
  return !/^((?!chrome|android).)*safari/i.test(Sa());
}
function ar(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && It(e) && (o = e.offsetWidth > 0 && ir(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ir(r.height) / e.offsetHeight || 1);
  var s = Dn(e) ? Ct(e) : window, l = s.visualViewport, c = !xd() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / o, d = (r.top + (c && l ? l.offsetTop : 0)) / a, f = r.width / o, p = r.height / a;
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
function us(e) {
  var t = ar(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ed(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ls(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function tn(e) {
  return Ct(e).getComputedStyle(e);
}
function K0(e) {
  return ["table", "td", "th"].indexOf(Kt(e)) >= 0;
}
function xn(e) {
  return ((Dn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function gi(e) {
  return Kt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ls(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    xn(e)
  );
}
function Hl(e) {
  return !It(e) || // https://github.com/popperjs/popper-core/issues/837
  tn(e).position === "fixed" ? null : e.offsetParent;
}
function G0(e) {
  var t = /firefox/i.test(Sa()), n = /Trident/i.test(Sa());
  if (n && It(e)) {
    var r = tn(e);
    if (r.position === "fixed")
      return null;
  }
  var o = gi(e);
  for (ls(o) && (o = o.host); It(o) && ["html", "body"].indexOf(Kt(o)) < 0; ) {
    var a = tn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function uo(e) {
  for (var t = Ct(e), n = Hl(e); n && K0(n) && tn(n).position === "static"; )
    n = Hl(n);
  return n && (Kt(n) === "html" || Kt(n) === "body" && tn(n).position === "static") ? t : n || G0(e) || t;
}
function cs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function jr(e, t, n) {
  return $n(e, Uo(t, n));
}
function Q0(e, t, n) {
  var r = jr(e, t, n);
  return r > n ? n : r;
}
function Od() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wd(e) {
  return Object.assign({}, Od(), e);
}
function Sd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var X0 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, wd(typeof t != "number" ? t : Sd(t, lo));
};
function J0(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Ht(n.placement), c = cs(l), u = [gt, At].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var f = X0(o.padding, n), p = us(a), h = c === "y" ? vt : gt, m = c === "y" ? Nt : At, y = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], v = s[c] - n.rects.reference[c], O = uo(a), C = O ? c === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, E = y / 2 - v / 2, x = f[h], b = C - p[d] - f[m], R = C / 2 - p[d] / 2 + E, P = jr(x, R, b), A = c;
    n.modifiersData[r] = (t = {}, t[A] = P, t.centerOffset = P - R, t);
  }
}
function Z0(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ed(t.elements.popper, o) && (t.elements.arrow = o));
}
const ex = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: J0,
  effect: Z0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function sr(e) {
  return e.split("-")[1];
}
var tx = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function nx(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ir(n * o) / o || 0,
    y: ir(r * o) / o || 0
  };
}
function Yl(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = s.x, h = p === void 0 ? 0 : p, m = s.y, y = m === void 0 ? 0 : m, v = typeof d == "function" ? d({
    x: h,
    y
  }) : {
    x: h,
    y
  };
  h = v.x, y = v.y;
  var O = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), E = gt, x = vt, b = window;
  if (u) {
    var R = uo(n), P = "clientHeight", A = "clientWidth";
    if (R === Ct(n) && (R = xn(n), tn(R).position !== "static" && l === "absolute" && (P = "scrollHeight", A = "scrollWidth")), R = R, o === vt || (o === gt || o === At) && a === Xr) {
      x = Nt;
      var B = f && R === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[P]
      );
      y -= B - r.height, y *= c ? 1 : -1;
    }
    if (o === gt || (o === vt || o === Nt) && a === Xr) {
      E = At;
      var N = f && R === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[A]
      );
      h -= N - r.width, h *= c ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: l
  }, u && tx), V = d === !0 ? nx({
    x: h,
    y
  }, Ct(n)) : {
    x: h,
    y
  };
  if (h = V.x, y = V.y, c) {
    var W;
    return Object.assign({}, k, (W = {}, W[x] = C ? "0" : "", W[E] = O ? "0" : "", W.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + y + "px)" : "translate3d(" + h + "px, " + y + "px, 0)", W));
  }
  return Object.assign({}, k, (t = {}, t[x] = C ? y + "px" : "", t[E] = O ? h + "px" : "", t.transform = "", t));
}
function rx(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Ht(t.placement),
    variation: sr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Yl(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Yl(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ox = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: rx,
  data: {}
};
var vo = {
  passive: !0
};
function ix(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, c = Ct(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, vo);
  }), l && c.addEventListener("resize", n.update, vo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, vo);
    }), l && c.removeEventListener("resize", n.update, vo);
  };
}
const ax = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ix,
  data: {}
};
var sx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Io(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sx[t];
  });
}
var lx = {
  start: "end",
  end: "start"
};
function Kl(e) {
  return e.replace(/start|end/g, function(t) {
    return lx[t];
  });
}
function ds(e) {
  var t = Ct(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function fs(e) {
  return ar(xn(e)).left + ds(e).scrollLeft;
}
function ux(e, t) {
  var n = Ct(e), r = xn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = xd();
    (u || !u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + fs(e),
    y: c
  };
}
function cx(e) {
  var t, n = xn(e), r = ds(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = $n(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = $n(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + fs(e), c = -r.scrollTop;
  return tn(o || n).direction === "rtl" && (l += $n(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function ps(e) {
  var t = tn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Td(e) {
  return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : It(e) && ps(e) ? e : Td(gi(e));
}
function Fr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Td(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ct(r), s = o ? [a].concat(a.visualViewport || [], ps(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Fr(gi(s)))
  );
}
function Ta(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function dx(e, t) {
  var n = ar(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gl(e, t, n) {
  return t === gd ? Ta(ux(e, n)) : Dn(t) ? dx(t, n) : Ta(cx(xn(e)));
}
function fx(e) {
  var t = Fr(gi(e)), n = ["absolute", "fixed"].indexOf(tn(e).position) >= 0, r = n && It(e) ? uo(e) : e;
  return Dn(r) ? t.filter(function(o) {
    return Dn(o) && Ed(o, r) && Kt(o) !== "body";
  }) : [];
}
function px(e, t, n, r) {
  var o = t === "clippingParents" ? fx(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], l = a.reduce(function(c, u) {
    var d = Gl(e, u, r);
    return c.top = $n(d.top, c.top), c.right = Uo(d.right, c.right), c.bottom = Uo(d.bottom, c.bottom), c.left = $n(d.left, c.left), c;
  }, Gl(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Cd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ht(r) : null, a = r ? sr(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case vt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Nt:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case At:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case gt:
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
  var u = o ? cs(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case or:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Xr:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Jr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? k0 : l, u = n.rootBoundary, d = u === void 0 ? gd : u, f = n.elementContext, p = f === void 0 ? Pr : f, h = n.altBoundary, m = h === void 0 ? !1 : h, y = n.padding, v = y === void 0 ? 0 : y, O = wd(typeof v != "number" ? v : Sd(v, lo)), C = p === Pr ? M0 : Pr, E = e.rects.popper, x = e.elements[m ? C : p], b = px(Dn(x) ? x : x.contextElement || xn(e.elements.popper), c, d, s), R = ar(e.elements.reference), P = Cd({
    reference: R,
    element: E,
    strategy: "absolute",
    placement: o
  }), A = Ta(Object.assign({}, E, P)), B = p === Pr ? A : R, N = {
    top: b.top - B.top + O.top,
    bottom: B.bottom - b.bottom + O.bottom,
    left: b.left - B.left + O.left,
    right: B.right - b.right + O.right
  }, k = e.modifiersData.offset;
  if (p === Pr && k) {
    var V = k[o];
    Object.keys(N).forEach(function(W) {
      var j = [At, Nt].indexOf(W) >= 0 ? 1 : -1, _ = [vt, Nt].indexOf(W) >= 0 ? "y" : "x";
      N[W] += V[_] * j;
    });
  }
  return N;
}
function mx(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? bd : c, d = sr(r), f = d ? l ? ql : ql.filter(function(m) {
    return sr(m) === d;
  }) : lo, p = f.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  p.length === 0 && (p = f);
  var h = p.reduce(function(m, y) {
    return m[y] = Jr(e, {
      placement: y,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[Ht(y)], m;
  }, {});
  return Object.keys(h).sort(function(m, y) {
    return h[m] - h[y];
  });
}
function hx(e) {
  if (Ht(e) === ss)
    return [];
  var t = Io(e);
  return [Kl(e), t, Kl(t)];
}
function yx(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, y = n.allowedAutoPlacements, v = t.options.placement, O = Ht(v), C = O === v, E = c || (C || !m ? [Io(v)] : hx(v)), x = [v].concat(E).reduce(function(G, X) {
      return G.concat(Ht(X) === ss ? mx(t, {
        placement: X,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: y
      }) : X);
    }, []), b = t.rects.reference, R = t.rects.popper, P = /* @__PURE__ */ new Map(), A = !0, B = x[0], N = 0; N < x.length; N++) {
      var k = x[N], V = Ht(k), W = sr(k) === or, j = [vt, Nt].indexOf(V) >= 0, _ = j ? "width" : "height", U = Jr(t, {
        placement: k,
        boundary: d,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), H = j ? W ? At : gt : W ? Nt : vt;
      b[_] > R[_] && (H = Io(H));
      var le = Io(H), ne = [];
      if (a && ne.push(U[V] <= 0), l && ne.push(U[H] <= 0, U[le] <= 0), ne.every(function(G) {
        return G;
      })) {
        B = k, A = !1;
        break;
      }
      P.set(k, ne);
    }
    if (A)
      for (var M = m ? 3 : 1, Y = function(X) {
        var J = x.find(function(Q) {
          var oe = P.get(Q);
          if (oe)
            return oe.slice(0, X).every(function(ae) {
              return ae;
            });
        });
        if (J)
          return B = J, "break";
      }, re = M; re > 0; re--) {
        var ee = Y(re);
        if (ee === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
  }
}
const vx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yx,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ql(e, t, n) {
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
function Xl(e) {
  return [vt, At, Nt, gt].some(function(t) {
    return e[t] >= 0;
  });
}
function gx(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Jr(t, {
    elementContext: "reference"
  }), l = Jr(t, {
    altBoundary: !0
  }), c = Ql(s, r), u = Ql(l, o, a), d = Xl(c), f = Xl(u);
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
const bx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: gx
};
function xx(e, t, n) {
  var r = Ht(e), o = [gt, vt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * o, [gt, At].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function Ex(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = bd.reduce(function(d, f) {
    return d[f] = xx(f, t.rects, a), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const Ox = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ex
};
function wx(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Cd({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Sx = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: wx,
  data: {}
};
function Tx(e) {
  return e === "x" ? "y" : "x";
}
function Cx(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, h = p === void 0 ? !0 : p, m = n.tetherOffset, y = m === void 0 ? 0 : m, v = Jr(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), O = Ht(t.placement), C = sr(t.placement), E = !C, x = cs(O), b = Tx(x), R = t.modifiersData.popperOffsets, P = t.rects.reference, A = t.rects.popper, B = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, N = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (R) {
    if (a) {
      var W, j = x === "y" ? vt : gt, _ = x === "y" ? Nt : At, U = x === "y" ? "height" : "width", H = R[x], le = H + v[j], ne = H - v[_], M = h ? -A[U] / 2 : 0, Y = C === or ? P[U] : A[U], re = C === or ? -A[U] : -P[U], ee = t.elements.arrow, G = h && ee ? us(ee) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Od(), J = X[j], Q = X[_], oe = jr(0, P[U], G[U]), ae = E ? P[U] / 2 - M - oe - J - N.mainAxis : Y - oe - J - N.mainAxis, fe = E ? -P[U] / 2 + M + oe + Q + N.mainAxis : re + oe + Q + N.mainAxis, se = t.elements.arrow && uo(t.elements.arrow), F = se ? x === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, ye = (W = k == null ? void 0 : k[x]) != null ? W : 0, q = H + ae - ye - F, Z = H + fe - ye, Ne = jr(h ? Uo(le, q) : le, H, h ? $n(ne, Z) : ne);
      R[x] = Ne, V[x] = Ne - H;
    }
    if (l) {
      var de, We = x === "x" ? vt : gt, Ve = x === "x" ? Nt : At, Ae = R[b], Se = b === "y" ? "height" : "width", Be = Ae + v[We], Re = Ae - v[Ve], Qe = [vt, gt].indexOf(O) !== -1, Xe = (de = k == null ? void 0 : k[b]) != null ? de : 0, et = Qe ? Be : Ae - P[Se] - A[Se] - Xe + N.altAxis, Pe = Qe ? Ae + P[Se] + A[Se] - Xe - N.altAxis : Re, me = h && Qe ? Q0(et, Ae, Pe) : jr(h ? et : Be, Ae, h ? Pe : Re);
      R[b] = me, V[b] = me - Ae;
    }
    t.modifiersData[r] = V;
  }
}
const Rx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Cx,
  requiresIfExists: ["offset"]
};
function Px(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function $x(e) {
  return e === Ct(e) || !It(e) ? ds(e) : Px(e);
}
function Ix(e) {
  var t = e.getBoundingClientRect(), n = ir(t.width) / e.offsetWidth || 1, r = ir(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Nx(e, t, n) {
  n === void 0 && (n = !1);
  var r = It(t), o = It(t) && Ix(t), a = xn(t), s = ar(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Kt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ps(a)) && (l = $x(t)), It(t) ? (c = ar(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = fs(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Ax(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && o(c);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function kx(e) {
  var t = Ax(e);
  return z0.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Mx(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function _x(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Jl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Zl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Dx(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Jl : o;
  return function(l, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Jl, a),
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
          reference: Dn(l) ? Fr(l) : l.contextElement ? Fr(l.contextElement) : [],
          popper: Fr(c)
        };
        var E = kx(_x([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = E.filter(function(x) {
          return x.enabled;
        }), m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var O = d.elements, C = O.reference, E = O.popper;
          if (Zl(C, E)) {
            d.rects = {
              reference: Nx(C, uo(E), d.options.strategy === "fixed"),
              popper: us(E)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
              return d.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var x = 0; x < d.orderedModifiers.length; x++) {
              if (d.reset === !0) {
                d.reset = !1, x = -1;
                continue;
              }
              var b = d.orderedModifiers[x], R = b.fn, P = b.options, A = P === void 0 ? {} : P, B = b.name;
              typeof R == "function" && (d = R({
                state: d,
                options: A,
                name: B,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Mx(function() {
        return new Promise(function(v) {
          h.forceUpdate(), v(d);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!Zl(l, c))
      return h;
    h.setOptions(u).then(function(v) {
      !p && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function m() {
      d.orderedModifiers.forEach(function(v) {
        var O = v.name, C = v.options, E = C === void 0 ? {} : C, x = v.effect;
        if (typeof x == "function") {
          var b = x({
            state: d,
            name: O,
            instance: h,
            options: E
          }), R = function() {
          };
          f.push(b || R);
        }
      });
    }
    function y() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return h;
  };
}
var jx = [ax, Sx, ox, Y0, Ox, vx, Rx, ex, bx], Fx = /* @__PURE__ */ Dx({
  defaultModifiers: jx
});
function Lx(e) {
  return typeof e == "function" ? e() : e;
}
const Zr = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: a = !1
  } = t, [s, l] = g.useState(null), c = st(/* @__PURE__ */ g.isValidElement(r) ? r.ref : null, n);
  if (hn(() => {
    a || l(Lx(o) || document.body);
  }, [o, a]), hn(() => {
    if (s && !a)
      return Mo(n, s), () => {
        Mo(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ g.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ g.cloneElement(r, u);
    }
    return /* @__PURE__ */ T.jsx(g.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ T.jsx(g.Fragment, {
    children: s && /* @__PURE__ */ ec.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (Zr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: i.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Yt, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool
});
process.env.NODE_ENV !== "production" && (Zr["propTypes"] = sc(Zr.propTypes));
function Bx(e) {
  return Ue("MuiPopper", e);
}
ze("MuiPopper", ["root"]);
const Ux = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Wx = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Vx(e, t) {
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
function Wo(e) {
  return typeof e == "function" ? e() : e;
}
function bi(e) {
  return e.nodeType !== void 0;
}
function zx(e) {
  return !bi(e);
}
const qx = () => He({
  root: ["root"]
}, vd(Bx)), Hx = {}, Yx = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: o,
    children: a,
    direction: s,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: f,
    popperRef: p,
    slotProps: h = {},
    slots: m = {},
    TransitionProps: y
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, v = ve(t, Ux), O = g.useRef(null), C = st(O, n), E = g.useRef(null), x = st(E, p), b = g.useRef(x);
  hn(() => {
    b.current = x;
  }, [x]), g.useImperativeHandle(p, () => E.current, []);
  const R = Vx(d, s), [P, A] = g.useState(R), [B, N] = g.useState(Wo(o));
  g.useEffect(() => {
    E.current && E.current.forceUpdate();
  }), g.useEffect(() => {
    o && N(Wo(o));
  }, [o]), hn(() => {
    if (!B || !u)
      return;
    const _ = (le) => {
      A(le.placement);
    };
    if (process.env.NODE_ENV !== "production" && B && bi(B) && B.nodeType === 1) {
      const le = B.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && le.top === 0 && le.left === 0 && le.right === 0 && le.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
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
        state: le
      }) => {
        _(le);
      }
    }];
    c != null && (U = U.concat(c)), f && f.modifiers != null && (U = U.concat(f.modifiers));
    const H = Fx(B, O.current, S({
      placement: R
    }, f, {
      modifiers: U
    }));
    return b.current(H), () => {
      H.destroy(), b.current(null);
    };
  }, [B, l, c, u, f, R]);
  const k = {
    placement: P
  };
  y !== null && (k.TransitionProps = y);
  const V = qx(), W = (r = m.root) != null ? r : "div", j = _n({
    elementType: W,
    externalSlotProps: h.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: V.root
  });
  return /* @__PURE__ */ T.jsx(W, S({}, j, {
    children: typeof a == "function" ? a(k) : a
  }));
}), Rd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: p = Hx,
    popperRef: h,
    style: m,
    transition: y = !1,
    slotProps: v = {},
    slots: O = {}
  } = t, C = ve(t, Wx), [E, x] = g.useState(!0), b = () => {
    x(!1);
  }, R = () => {
    x(!0);
  };
  if (!c && !d && (!y || E))
    return null;
  let P;
  if (a)
    P = a;
  else if (r) {
    const N = Wo(r);
    P = N && bi(N) ? mt(N).body : mt(null).body;
  }
  const A = !d && c && (!y || E) ? "none" : void 0, B = y ? {
    in: d,
    onEnter: b,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ T.jsx(Zr, {
    disablePortal: l,
    container: P,
    children: /* @__PURE__ */ T.jsx(Yx, S({
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: y ? !E : d,
      placement: f,
      popperOptions: p,
      popperRef: h,
      slotProps: v,
      slots: O
    }, C, {
      style: S({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: A
      }, m),
      TransitionProps: B,
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
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
  anchorEl: Zt(i.oneOfType([Yt, i.object, i.func]), (e) => {
    if (e.open) {
      const t = Wo(e.anchorEl);
      if (t && bi(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || zx(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: i.oneOfType([i.node, i.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Yt, i.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: i.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: i.arrayOf(i.shape({
    data: i.object,
    effect: i.func,
    enabled: i.bool,
    fn: i.func,
    name: i.any,
    options: i.object,
    phase: i.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: i.arrayOf(i.string),
    requiresIfExists: i.arrayOf(i.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: i.shape({
    modifiers: i.array,
    onFirstUpdate: i.func,
    placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: i.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Dt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: i.bool
});
function Kx(e) {
  const t = mt(e);
  return t.body === e ? An(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Lr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function eu(e) {
  return parseInt(An(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Gx(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function tu(e, t, n, r, o) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = a.indexOf(s) === -1, c = !Gx(s);
    l && c && Lr(s, o);
  });
}
function Ui(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Qx(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Kx(r)) {
      const s = dc(mt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${eu(r) + s}px`;
      const l = mt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${eu(c) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = mt(r).body;
    else {
      const s = r.parentElement, l = An(r);
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
function Xx(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Jx {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Lr(t.modalRef, !1);
    const o = Xx(n);
    tu(n, t.mount, t.modalRef, o, !0);
    const a = Ui(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Ui(this.containers, (a) => a.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Qx(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Ui(this.containers, (s) => s.modals.indexOf(t) !== -1), a = this.containers[o];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && Lr(t.modalRef, n), tu(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && Lr(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Zx(e) {
  return Ue("MuiModal", e);
}
ze("MuiModal", ["root", "hidden", "backdrop"]);
const eE = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], tE = (e) => {
  const {
    open: t,
    exited: n
  } = e;
  return He({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, vd(Zx));
};
function nE(e) {
  return typeof e == "function" ? e() : e;
}
function rE(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const oE = new Jx(), Pd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o;
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
    hideBackdrop: m = !1,
    keepMounted: y = !1,
    // private
    manager: v = oE,
    onBackdropClick: O,
    onClose: C,
    onKeyDown: E,
    open: x,
    onTransitionEnter: b,
    onTransitionExited: R,
    slotProps: P = {},
    slots: A = {}
  } = t, B = ve(t, eE), N = v, [k, V] = g.useState(!x), W = g.useRef({}), j = g.useRef(null), _ = g.useRef(null), U = st(_, n), H = rE(a), le = (r = t["aria-hidden"]) != null ? r : !0, ne = () => mt(j.current), M = () => (W.current.modalRef = _.current, W.current.mountNode = j.current, W.current), Y = () => {
    N.mount(M(), {
      disableScrollLock: h
    }), _.current && (_.current.scrollTop = 0);
  }, re = zt(() => {
    const de = nE(l) || ne().body;
    N.add(M(), de), _.current && Y();
  }), ee = g.useCallback(() => N.isTopModal(M()), [N]), G = zt((de) => {
    j.current = de, !(!de || !_.current) && (x && ee() ? Y() : Lr(_.current, le));
  }), X = g.useCallback(() => {
    N.remove(M(), le);
  }, [N, le]);
  g.useEffect(() => () => {
    X();
  }, [X]), g.useEffect(() => {
    x ? re() : (!H || !s) && X();
  }, [x, X, H, s, re]);
  const J = S({}, t, {
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: u,
    disableEscapeKeyDown: d,
    disablePortal: f,
    disableRestoreFocus: p,
    disableScrollLock: h,
    exited: k,
    hideBackdrop: m,
    keepMounted: y
  }), Q = tE(J), oe = () => {
    V(!1), b && b();
  }, ae = () => {
    V(!0), R && R(), s && X();
  }, fe = (de) => {
    de.target === de.currentTarget && (O && O(de), C && C(de, "backdropClick"));
  }, se = (de) => {
    E && E(de), !(de.key !== "Escape" || !ee()) && (d || (de.stopPropagation(), C && C(de, "escapeKeyDown")));
  }, F = {};
  a.props.tabIndex === void 0 && (F.tabIndex = "-1"), H && (F.onEnter = tl(oe, a.props.onEnter), F.onExited = tl(ae, a.props.onExited));
  const ye = (o = A.root) != null ? o : "div", q = _n({
    elementType: ye,
    externalSlotProps: P.root,
    externalForwardedProps: B,
    additionalProps: {
      ref: U,
      role: "presentation",
      onKeyDown: se
    },
    className: Q.root,
    ownerState: J
  }), Z = A.backdrop, Ne = _n({
    elementType: Z,
    externalSlotProps: P.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: fe,
      open: x
    },
    className: Q.backdrop,
    ownerState: J
  });
  return !y && !x && (!H || k) ? null : /* @__PURE__ */ T.jsx(
    Zr,
    {
      ref: G,
      container: l,
      disablePortal: f,
      children: /* @__PURE__ */ T.jsxs(ye, S({}, q, {
        children: [!m && Z ? /* @__PURE__ */ T.jsx(Z, S({}, Ne)) : null, /* @__PURE__ */ T.jsx(Bo, {
          disableEnforceFocus: u,
          disableAutoFocus: c,
          disableRestoreFocus: p,
          isEnabled: ee,
          open: x,
          children: /* @__PURE__ */ g.cloneElement(a, F)
        })]
      }))
    }
  );
});
process.env.NODE_ENV !== "production" && (Pd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: to.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Yt, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  })
});
const iE = ["onChange", "maxRows", "minRows", "style", "value"];
function go(e) {
  return parseInt(e, 10) || 0;
}
const aE = {
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
function nu(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const $d = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: a = 1,
    style: s,
    value: l
  } = t, c = ve(t, iE), {
    current: u
  } = g.useRef(l != null), d = g.useRef(null), f = st(n, d), p = g.useRef(null), h = g.useRef(0), [m, y] = g.useState({
    outerHeightStyle: 0
  }), v = g.useCallback(() => {
    const b = d.current, P = An(b).getComputedStyle(b);
    if (P.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const A = p.current;
    A.style.width = P.width, A.value = b.value || t.placeholder || "x", A.value.slice(-1) === `
` && (A.value += " ");
    const B = P.boxSizing, N = go(P.paddingBottom) + go(P.paddingTop), k = go(P.borderBottomWidth) + go(P.borderTopWidth), V = A.scrollHeight;
    A.value = "x";
    const W = A.scrollHeight;
    let j = V;
    a && (j = Math.max(Number(a) * W, j)), o && (j = Math.min(Number(o) * W, j)), j = Math.max(j, W);
    const _ = j + (B === "border-box" ? N + k : 0), U = Math.abs(j - V) <= 1;
    return {
      outerHeightStyle: _,
      overflow: U
    };
  }, [o, a, t.placeholder]), O = (b, R) => {
    const {
      outerHeightStyle: P,
      overflow: A
    } = R;
    return h.current < 20 && (P > 0 && Math.abs((b.outerHeightStyle || 0) - P) > 1 || b.overflow !== A) ? (h.current += 1, {
      overflow: A,
      outerHeightStyle: P
    }) : (process.env.NODE_ENV !== "production" && h.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), b);
  }, C = g.useCallback(() => {
    const b = v();
    nu(b) || y((R) => O(R, b));
  }, [v]), E = () => {
    const b = v();
    nu(b) || ec.flushSync(() => {
      y((R) => O(R, b));
    });
  };
  g.useEffect(() => {
    const b = uc(() => {
      h.current = 0, d.current && E();
    });
    let R;
    const P = d.current, A = An(P);
    return A.addEventListener("resize", b), typeof ResizeObserver < "u" && (R = new ResizeObserver(b), R.observe(P)), () => {
      b.clear(), A.removeEventListener("resize", b), R && R.disconnect();
    };
  }), hn(() => {
    C();
  }), g.useEffect(() => {
    h.current = 0;
  }, [l]);
  const x = (b) => {
    h.current = 0, u || C(), r && r(b);
  };
  return /* @__PURE__ */ T.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ T.jsx("textarea", S({
      value: l,
      onChange: x,
      ref: f,
      rows: a,
      style: S({
        height: m.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: m.overflow ? "hidden" : void 0
      }, s)
    }, c)), /* @__PURE__ */ T.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: p,
      tabIndex: -1,
      style: S({}, aE.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && ($d.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: i.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  onChange: i.func,
  /**
   * @ignore
   */
  placeholder: i.string,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * @ignore
   */
  value: i.oneOfType([i.arrayOf(i.string), i.number, i.string])
});
function ru(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function Id(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: o = "any",
    stringify: a,
    trim: s = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: u
  }) => {
    let d = s ? c.trim() : c;
    n && (d = d.toLowerCase()), t && (d = ru(d));
    const f = d ? l.filter((p) => {
      let h = (a || u)(p);
      return n && (h = h.toLowerCase()), t && (h = ru(h)), o === "start" ? h.indexOf(d) === 0 : h.indexOf(d) > -1;
    }) : l;
    return typeof r == "number" ? f.slice(0, r) : f;
  };
}
function Wi(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const sE = Id(), ou = 5, lE = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function uE(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = lE,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: o = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? [] : null,
    disableClearable: f = !1,
    disableCloseOnSelect: p = !1,
    disabled: h,
    disabledItemsFocusable: m = !1,
    disableListWrap: y = !1,
    filterOptions: v = sE,
    filterSelectedOptions: O = !1,
    freeSolo: C = !1,
    getOptionDisabled: E,
    getOptionLabel: x = ($) => {
      var I;
      return (I = $.label) != null ? I : $;
    },
    groupBy: b,
    handleHomeEndKeys: R = !e.freeSolo,
    id: P,
    includeInputInList: A = !1,
    inputValue: B,
    isOptionEqualToValue: N = ($, I) => $ === I,
    multiple: k = !1,
    onChange: V,
    onClose: W,
    onHighlightChange: j,
    onInputChange: _,
    onOpen: U,
    open: H,
    openOnFocus: le = !1,
    options: ne,
    readOnly: M = !1,
    selectOnFocus: Y = !e.freeSolo,
    value: re
  } = e, ee = cc(P);
  let G = x;
  G = ($) => {
    const I = x($);
    if (typeof I != "string") {
      if (process.env.NODE_ENV !== "production") {
        const D = I === void 0 ? "undefined" : `${typeof I} (${I})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${D} instead of a string for ${JSON.stringify($)}.`);
      }
      return String(I);
    }
    return I;
  };
  const X = g.useRef(!1), J = g.useRef(!0), Q = g.useRef(null), oe = g.useRef(null), [ae, fe] = g.useState(null), [se, F] = g.useState(-1), ye = o ? 0 : -1, q = g.useRef(ye), [Z, Ne] = Mr({
    controlled: re,
    default: d,
    name: u
  }), [de, We] = Mr({
    controlled: B,
    default: "",
    name: u,
    state: "inputValue"
  }), [Ve, Ae] = g.useState(!1), Se = g.useCallback(($, I) => {
    if (!(k ? Z.length < I.length : I !== null) && !l)
      return;
    let K;
    if (k)
      K = "";
    else if (I == null)
      K = "";
    else {
      const ie = G(I);
      K = typeof ie == "string" ? ie : "";
    }
    de !== K && (We(K), _ && _($, K, "reset"));
  }, [G, de, k, _, We, l, Z]), [Be, Re] = Mr({
    controlled: H,
    default: !1,
    name: u,
    state: "open"
  }), [Qe, Xe] = g.useState(!0), et = !k && Z != null && de === G(Z), Pe = Be && !M, me = Pe ? v(
    ne.filter(($) => !(O && (k ? Z : [Z]).some((I) => I !== null && N($, I)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: et && Qe ? "" : de,
      getOptionLabel: G
    }
  ) : [], ue = Up({
    filteredOptions: me,
    value: Z,
    inputValue: de
  });
  g.useEffect(() => {
    const $ = Z !== ue.value;
    Ve && !$ || C && !$ || Se(null, Z);
  }, [Z, Se, Ve, ue.value, C]);
  const rt = Be && me.length > 0 && !M;
  if (process.env.NODE_ENV !== "production" && Z !== null && !C && ne.length > 0) {
    const $ = (k ? Z : [Z]).filter((I) => !ne.some((D) => N(D, I)));
    $.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${$.length > 1 ? JSON.stringify($) : JSON.stringify($[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const ce = zt(($) => {
    $ === -1 ? Q.current.focus() : ae.querySelector(`[data-tag-index="${$}"]`).focus();
  });
  g.useEffect(() => {
    k && se > Z.length - 1 && (F(-1), ce(-1));
  }, [Z, k, se, ce]);
  function be($, I) {
    if (!oe.current || $ === -1)
      return -1;
    let D = $;
    for (; ; ) {
      if (I === "next" && D === me.length || I === "previous" && D === -1)
        return -1;
      const K = oe.current.querySelector(`[data-option-index="${D}"]`), ie = m ? !1 : !K || K.disabled || K.getAttribute("aria-disabled") === "true";
      if (K && !K.hasAttribute("tabindex") || ie)
        D += I === "next" ? 1 : -1;
      else
        return D;
    }
  }
  const $e = zt(({
    event: $,
    index: I,
    reason: D = "auto"
  }) => {
    if (q.current = I, I === -1 ? Q.current.removeAttribute("aria-activedescendant") : Q.current.setAttribute("aria-activedescendant", `${ee}-option-${I}`), j && j($, I === -1 ? null : me[I], D), !oe.current)
      return;
    const K = oe.current.querySelector(`[role="option"].${n}-focused`);
    K && (K.classList.remove(`${n}-focused`), K.classList.remove(`${n}-focusVisible`));
    let ie = oe.current;
    if (oe.current.getAttribute("role") !== "listbox" && (ie = oe.current.parentElement.querySelector('[role="listbox"]')), !ie)
      return;
    if (I === -1) {
      ie.scrollTop = 0;
      return;
    }
    const xe = oe.current.querySelector(`[data-option-index="${I}"]`);
    if (xe && (xe.classList.add(`${n}-focused`), D === "keyboard" && xe.classList.add(`${n}-focusVisible`), ie.scrollHeight > ie.clientHeight && D !== "mouse" && D !== "touch")) {
      const Ee = xe, Ce = ie.clientHeight + ie.scrollTop, ut = Ee.offsetTop + Ee.offsetHeight;
      ut > Ce ? ie.scrollTop = ut - ie.clientHeight : Ee.offsetTop - Ee.offsetHeight * (b ? 1.3 : 0) < ie.scrollTop && (ie.scrollTop = Ee.offsetTop - Ee.offsetHeight * (b ? 1.3 : 0));
    }
  }), Je = zt(({
    event: $,
    diff: I,
    direction: D = "next",
    reason: K = "auto"
  }) => {
    if (!Pe)
      return;
    const xe = be((() => {
      const Ee = me.length - 1;
      if (I === "reset")
        return ye;
      if (I === "start")
        return 0;
      if (I === "end")
        return Ee;
      const Ce = q.current + I;
      return Ce < 0 ? Ce === -1 && A ? -1 : y && q.current !== -1 || Math.abs(I) > 1 ? 0 : Ee : Ce > Ee ? Ce === Ee + 1 && A ? -1 : y || Math.abs(I) > 1 ? Ee : 0 : Ce;
    })(), D);
    if ($e({
      index: xe,
      reason: K,
      event: $
    }), r && I !== "reset")
      if (xe === -1)
        Q.current.value = de;
      else {
        const Ee = G(me[xe]);
        Q.current.value = Ee, Ee.toLowerCase().indexOf(de.toLowerCase()) === 0 && de.length > 0 && Q.current.setSelectionRange(de.length, Ee.length);
      }
  }), rn = () => {
    const $ = (I, D) => {
      const K = I ? G(I) : "", ie = D ? G(D) : "";
      return K === ie;
    };
    if (q.current !== -1 && ue.filteredOptions && ue.filteredOptions.length !== me.length && ue.inputValue === de && (k ? Z.length === ue.value.length && ue.value.every((I, D) => G(Z[D]) === G(I)) : $(ue.value, Z))) {
      const I = ue.filteredOptions[q.current];
      if (I && me.some((K) => G(K) === G(I)))
        return !0;
    }
    return !1;
  }, jt = g.useCallback(() => {
    if (!Pe || rn())
      return;
    const $ = k ? Z[0] : Z;
    if (me.length === 0 || $ == null) {
      Je({
        diff: "reset"
      });
      return;
    }
    if (oe.current) {
      if ($ != null) {
        const I = me[q.current];
        if (k && I && Wi(Z, (K) => N(I, K)) !== -1)
          return;
        const D = Wi(me, (K) => N(K, $));
        D === -1 ? Je({
          diff: "reset"
        }) : $e({
          index: D
        });
        return;
      }
      if (q.current >= me.length - 1) {
        $e({
          index: me.length - 1
        });
        return;
      }
      $e({
        index: q.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    me.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    k ? !1 : Z,
    O,
    Je,
    $e,
    Pe,
    de,
    k
  ]), xr = zt(($) => {
    Mo(oe, $), $ && jt();
  });
  process.env.NODE_ENV !== "production" && g.useEffect(() => {
    (!Q.current || Q.current.nodeName !== "INPUT") && (Q.current && Q.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${Q.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), g.useEffect(() => {
    jt();
  }, [jt]);
  const kt = ($) => {
    Be || (Re(!0), Xe(!0), U && U($));
  }, ht = ($, I) => {
    Be && (Re(!1), W && W($, I));
  }, bt = ($, I, D, K) => {
    if (k) {
      if (Z.length === I.length && Z.every((ie, xe) => ie === I[xe]))
        return;
    } else if (Z === I)
      return;
    V && V($, I, D, K), Ne(I);
  }, pt = g.useRef(!1), Mt = ($, I, D = "selectOption", K = "options") => {
    let ie = D, xe = I;
    if (k) {
      if (xe = Array.isArray(Z) ? Z.slice() : [], process.env.NODE_ENV !== "production") {
        const Ce = xe.filter((ut) => N(I, ut));
        Ce.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ce.length} matches.`].join(`
`));
      }
      const Ee = Wi(xe, (Ce) => N(I, Ce));
      Ee === -1 ? xe.push(I) : K !== "freeSolo" && (xe.splice(Ee, 1), ie = "removeOption");
    }
    Se($, xe), bt($, xe, ie, {
      option: I
    }), !p && (!$ || !$.ctrlKey && !$.metaKey) && ht($, ie), (s === !0 || s === "touch" && pt.current || s === "mouse" && !pt.current) && Q.current.blur();
  };
  function On($, I) {
    if ($ === -1)
      return -1;
    let D = $;
    for (; ; ) {
      if (I === "next" && D === Z.length || I === "previous" && D === -1)
        return -1;
      const K = ae.querySelector(`[data-tag-index="${D}"]`);
      if (!K || !K.hasAttribute("tabindex") || K.disabled || K.getAttribute("aria-disabled") === "true")
        D += I === "next" ? 1 : -1;
      else
        return D;
    }
  }
  const on = ($, I) => {
    if (!k)
      return;
    de === "" && ht($, "toggleInput");
    let D = se;
    se === -1 ? de === "" && I === "previous" && (D = Z.length - 1) : (D += I === "next" ? 1 : -1, D < 0 && (D = 0), D === Z.length && (D = -1)), D = On(D, I), F(D), ce(D);
  }, jn = ($) => {
    X.current = !0, We(""), _ && _($, "", "clear"), bt($, k ? [] : null, "clear");
  }, Fn = ($) => (I) => {
    if ($.onKeyDown && $.onKeyDown(I), !I.defaultMuiPrevented && (se !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(I.key) === -1 && (F(-1), ce(-1)), I.which !== 229))
      switch (I.key) {
        case "Home":
          Pe && R && (I.preventDefault(), Je({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: I
          }));
          break;
        case "End":
          Pe && R && (I.preventDefault(), Je({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: I
          }));
          break;
        case "PageUp":
          I.preventDefault(), Je({
            diff: -ou,
            direction: "previous",
            reason: "keyboard",
            event: I
          }), kt(I);
          break;
        case "PageDown":
          I.preventDefault(), Je({
            diff: ou,
            direction: "next",
            reason: "keyboard",
            event: I
          }), kt(I);
          break;
        case "ArrowDown":
          I.preventDefault(), Je({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: I
          }), kt(I);
          break;
        case "ArrowUp":
          I.preventDefault(), Je({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: I
          }), kt(I);
          break;
        case "ArrowLeft":
          on(I, "previous");
          break;
        case "ArrowRight":
          on(I, "next");
          break;
        case "Enter":
          if (q.current !== -1 && Pe) {
            const D = me[q.current], K = E ? E(D) : !1;
            if (I.preventDefault(), K)
              return;
            Mt(I, D, "selectOption"), r && Q.current.setSelectionRange(Q.current.value.length, Q.current.value.length);
          } else
            C && de !== "" && et === !1 && (k && I.preventDefault(), Mt(I, de, "createOption", "freeSolo"));
          break;
        case "Escape":
          Pe ? (I.preventDefault(), I.stopPropagation(), ht(I, "escape")) : c && (de !== "" || k && Z.length > 0) && (I.preventDefault(), I.stopPropagation(), jn(I));
          break;
        case "Backspace":
          if (k && !M && de === "" && Z.length > 0) {
            const D = se === -1 ? Z.length - 1 : se, K = Z.slice();
            K.splice(D, 1), bt(I, K, "removeOption", {
              option: Z[D]
            });
          }
          break;
        case "Delete":
          if (k && !M && de === "" && Z.length > 0 && se !== -1) {
            const D = se, K = Z.slice();
            K.splice(D, 1), bt(I, K, "removeOption", {
              option: Z[D]
            });
          }
          break;
      }
  }, Er = ($) => {
    Ae(!0), le && !X.current && kt($);
  }, Ln = ($) => {
    if (t(oe)) {
      Q.current.focus();
      return;
    }
    Ae(!1), J.current = !0, X.current = !1, a && q.current !== -1 && Pe ? Mt($, me[q.current], "blur") : a && C && de !== "" ? Mt($, de, "blur", "freeSolo") : l && Se($, Z), ht($, "blur");
  }, an = ($) => {
    const I = $.target.value;
    de !== I && (We(I), Xe(!1), _ && _($, I, "input")), I === "" ? !f && !k && bt($, null, "clear") : kt($);
  }, ot = ($) => {
    const I = Number($.currentTarget.getAttribute("data-option-index"));
    q.current !== I && $e({
      event: $,
      index: I,
      reason: "mouse"
    });
  }, Ze = ($) => {
    $e({
      event: $,
      index: Number($.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), pt.current = !0;
  }, yt = ($) => {
    const I = Number($.currentTarget.getAttribute("data-option-index"));
    Mt($, me[I], "selectOption"), pt.current = !1;
  }, po = ($) => (I) => {
    const D = Z.slice();
    D.splice($, 1), bt(I, D, "removeOption", {
      option: Z[$]
    });
  }, Bn = ($) => {
    Be ? ht($, "toggleInput") : kt($);
  }, mo = ($) => {
    $.currentTarget.contains($.target) && $.target.getAttribute("id") !== ee && $.preventDefault();
  }, Or = ($) => {
    $.currentTarget.contains($.target) && (Q.current.focus(), Y && J.current && Q.current.selectionEnd - Q.current.selectionStart === 0 && Q.current.select(), J.current = !1);
  }, w = ($) => {
    (de === "" || !Be) && Bn($);
  };
  let z = C && de.length > 0;
  z = z || (k ? Z.length > 0 : Z !== null);
  let te = me;
  if (b) {
    const $ = /* @__PURE__ */ new Map();
    let I = !1;
    te = me.reduce((D, K, ie) => {
      const xe = b(K);
      return D.length > 0 && D[D.length - 1].group === xe ? D[D.length - 1].options.push(K) : (process.env.NODE_ENV !== "production" && ($.get(xe) && !I && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), I = !0), $.set(xe, !0)), D.push({
        key: ie,
        index: ie,
        group: xe,
        options: [K]
      })), D;
    }, []);
  }
  return h && Ve && Ln(), {
    getRootProps: ($ = {}) => S({
      "aria-owns": rt ? `${ee}-listbox` : null
    }, $, {
      onKeyDown: Fn($),
      onMouseDown: mo,
      onClick: Or
    }),
    getInputLabelProps: () => ({
      id: `${ee}-label`,
      htmlFor: ee
    }),
    getInputProps: () => ({
      id: ee,
      value: de,
      onBlur: Ln,
      onFocus: Er,
      onChange: an,
      onMouseDown: w,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Pe ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": rt ? `${ee}-listbox` : void 0,
      "aria-expanded": rt,
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
      onClick: jn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: Bn
    }),
    getTagProps: ({
      index: $
    }) => S({
      key: $,
      "data-tag-index": $,
      tabIndex: -1
    }, !M && {
      onDelete: po($)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${ee}-listbox`,
      "aria-labelledby": `${ee}-label`,
      ref: xr,
      onMouseDown: ($) => {
        $.preventDefault();
      }
    }),
    getOptionProps: ({
      index: $,
      option: I
    }) => {
      const D = (k ? Z : [Z]).some((ie) => ie != null && N(I, ie)), K = E ? E(I) : !1;
      return {
        key: G(I),
        tabIndex: -1,
        role: "option",
        id: `${ee}-option-${$}`,
        onMouseMove: ot,
        onClick: yt,
        onTouchStart: Ze,
        "data-option-index": $,
        "aria-disabled": K,
        "aria-selected": D
      };
    },
    id: ee,
    inputValue: de,
    value: Z,
    dirty: z,
    expanded: Pe && ae,
    popupOpen: Pe,
    focused: Ve || se !== -1,
    anchorEl: ae,
    setAnchorEl: fe,
    focusedTag: se,
    groupedOptions: te
  };
}
const cE = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], dE = he(Rd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Nd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r;
  const o = bc(), a = Ye({
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
    open: m,
    placement: y,
    popperOptions: v,
    popperRef: O,
    transition: C,
    slots: E,
    slotProps: x
  } = a, b = ve(a, cE), R = (r = E == null ? void 0 : E.root) != null ? r : c == null ? void 0 : c.Root, P = S({
    anchorEl: s,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: h,
    open: m,
    placement: y,
    popperOptions: v,
    popperRef: O,
    transition: C
  }, b);
  return /* @__PURE__ */ T.jsx(dE, S({
    as: l,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: R
    },
    slotProps: x ?? u
  }, P, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (Nd.propTypes = {
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
  anchorEl: i.oneOfType([Yt, i.object, i.func]),
  /**
   * Popper render function or node.
   */
  children: i.oneOfType([i.node, i.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Yt, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: i.arrayOf(i.shape({
    data: i.object,
    effect: i.func,
    enabled: i.bool,
    fn: i.func,
    name: i.any,
    options: i.object,
    phase: i.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: i.arrayOf(i.string),
    requiresIfExists: i.arrayOf(i.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: i.shape({
    modifiers: i.array,
    onFirstUpdate: i.func,
    placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: i.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Dt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: i.bool
});
const Ad = Nd;
function fE(e) {
  return Ue("MuiListSubheader", e);
}
ze("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const pE = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], mE = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: o,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${pe(n)}`, !r && "gutters", o && "inset", !a && "sticky"]
  };
  return He(s, fE, t);
}, hE = he("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${pe(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
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
})), ms = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: a = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = r, d = ve(r, pE), f = S({}, r, {
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), p = mE(f);
  return /* @__PURE__ */ T.jsx(hE, S({
    as: s,
    className: ge(p.root, o),
    ref: n,
    ownerState: f
  }, d));
});
ms.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (ms.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: i.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: i.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: i.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const yE = ms;
function vE(e) {
  return Ue("MuiPaper", e);
}
ze("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const gE = ["className", "component", "elevation", "square", "variant"], bE = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return He(a, vE, o);
}, xE = he("div", {
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
  return S({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && S({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${ct("#fff", vl(t.elevation))}, ${ct("#fff", vl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), kd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: a = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ve(r, gE), d = S({}, r, {
    component: a,
    elevation: s,
    square: l,
    variant: c
  }), f = bE(d);
  return process.env.NODE_ENV !== "production" && fr().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ T.jsx(xE, S({
    as: a,
    ownerState: d,
    className: ge(f.root, o),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (kd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Zt(Ua, (e) => {
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
  square: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: i.oneOfType([i.oneOf(["elevation", "outlined"]), i.string])
});
const hs = kd, iu = {
  disabled: !1
};
var EE = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.shape({
  enter: i.number,
  exit: i.number,
  appear: i.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && i.oneOfType([i.string, i.shape({
  enter: i.string,
  exit: i.string,
  active: i.string
}), i.shape({
  enter: i.string,
  enterDone: i.string,
  enterActive: i.string,
  exit: i.string,
  exitDone: i.string,
  exitActive: i.string
})]);
const Vo = Oe.createContext(null);
var OE = function(t) {
  return t.scrollTop;
}, kr = "unmounted", Sn = "exited", Tn = "entering", Xn = "entered", Ca = "exiting", nn = /* @__PURE__ */ function(e) {
  mi(t, e);
  function t(r, o) {
    var a;
    a = e.call(this, r, o) || this;
    var s = o, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = Sn, a.appearStatus = Tn) : c = Xn : r.unmountOnExit || r.mountOnEnter ? c = kr : c = Sn, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(o, a) {
    var s = o.in;
    return s && a.status === kr ? {
      status: Sn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var a = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Tn && s !== Xn && (a = Tn) : (s === Tn || s === Xn) && (a = Ca);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, a, s, l;
    return a = s = l = o, o != null && typeof o != "number" && (a = o.exit, s = o.enter, l = o.appear !== void 0 ? o.appear : s), {
      exit: a,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(o, a) {
    if (o === void 0 && (o = !1), a !== null)
      if (this.cancelNextCallback(), a === Tn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Ar.findDOMNode(this);
          s && OE(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Sn && this.setState({
        status: kr
      });
  }, n.performEnter = function(o) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [Ar.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), p = l ? f.appear : f.enter;
    if (!o && !s || iu.disabled) {
      this.safeSetState({
        status: Xn
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Tn
    }, function() {
      a.props.onEntering(u, d), a.onTransitionEnd(p, function() {
        a.safeSetState({
          status: Xn
        }, function() {
          a.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Ar.findDOMNode(this);
    if (!a || iu.disabled) {
      this.safeSetState({
        status: Sn
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Ca
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Sn
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, a) {
    a = this.setNextCallback(a), this.setState(o, a);
  }, n.setNextCallback = function(o) {
    var a = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, a.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Ar.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === kr)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = ve(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Oe.createElement(Vo.Provider, {
        value: null
      }, typeof s == "function" ? s(o, l) : Oe.cloneElement(Oe.Children.only(s), l))
    );
  }, t;
}(Oe.Component);
nn.contextType = Vo;
nn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: i.shape({
    current: typeof Element > "u" ? i.any : function(e, t, n, r, o, a) {
      var s = e[t];
      return i.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, a);
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
  children: i.oneOfType([i.func.isRequired, i.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: i.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: i.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: i.bool,
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
  appear: i.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: i.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: i.bool,
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
    var n = EE;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      o[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(o));
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
  addEndListener: i.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: i.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: i.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: i.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: i.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: i.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: i.func
} : {};
function Kn() {
}
nn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Kn,
  onEntering: Kn,
  onEntered: Kn,
  onExit: Kn,
  onExiting: Kn,
  onExited: Kn
};
nn.UNMOUNTED = kr;
nn.EXITED = Sn;
nn.ENTERING = Tn;
nn.ENTERED = Xn;
nn.EXITING = Ca;
const Md = nn;
function ys(e, t) {
  var n = function(a) {
    return t && Oo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Bf.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function wE(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var a in e)
    a in t ? o.length && (r[a] = o, o = []) : o.push(a);
  var s, l = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var u = r[c][s];
        l[r[c][s]] = n(u);
      }
    l[c] = n(c);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = n(o[s]);
  return l;
}
function Pn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function SE(e, t) {
  return ys(e.children, function(n) {
    return wo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Pn(n, "appear", e),
      enter: Pn(n, "enter", e),
      exit: Pn(n, "exit", e)
    });
  });
}
function TE(e, t, n) {
  var r = ys(e.children), o = wE(t, r);
  return Object.keys(o).forEach(function(a) {
    var s = o[a];
    if (Oo(s)) {
      var l = a in t, c = a in r, u = t[a], d = Oo(u) && !u.props.in;
      c && (!l || d) ? o[a] = wo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Pn(s, "exit", e),
        enter: Pn(s, "enter", e)
      }) : !c && l && !d ? o[a] = wo(s, {
        in: !1
      }) : c && l && Oo(u) && (o[a] = wo(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: Pn(s, "exit", e),
        enter: Pn(s, "enter", e)
      }));
    }
  }), o;
}
var CE = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, RE = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, vs = /* @__PURE__ */ function(e) {
  mi(t, e);
  function t(r, o) {
    var a;
    a = e.call(this, r, o) || this;
    var s = a.handleExited.bind(lv(a));
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
  }, t.getDerivedStateFromProps = function(o, a) {
    var s = a.children, l = a.handleExited, c = a.firstRender;
    return {
      children: c ? SE(o, l) : TE(o, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(o, a) {
    var s = ys(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = S({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, a = o.component, s = o.childFactory, l = ve(o, ["component", "childFactory"]), c = this.state.contextValue, u = CE(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ Oe.createElement(Vo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Oe.createElement(Vo.Provider, {
      value: c
    }, /* @__PURE__ */ Oe.createElement(a, l, u));
  }, t;
}(Oe.Component);
vs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: i.any,
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
  children: i.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: i.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: i.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: i.bool,
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
  childFactory: i.func
} : {};
vs.defaultProps = RE;
const PE = vs;
function _d(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = g.useState(!1), p = ge(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + o
  }, m = ge(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), g.useEffect(() => {
    if (!l && c != null) {
      const y = setTimeout(c, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ T.jsx("span", {
    className: p,
    style: h,
    children: /* @__PURE__ */ T.jsx("span", {
      className: m
    })
  });
}
process.env.NODE_ENV !== "production" && (_d.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: i.object.isRequired,
  className: i.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: i.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: i.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: i.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: i.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: i.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: i.number,
  /**
   * exit delay
   */
  timeout: i.number.isRequired
});
const $E = ze("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Rt = $E, IE = ["center", "classes", "className"];
let xi = (e) => e, au, su, lu, uu;
const Ra = 550, NE = 80, AE = Fa(au || (au = xi`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), kE = Fa(su || (su = xi`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), ME = Fa(lu || (lu = xi`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), _E = he("span", {
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
}), DE = he(_d, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(uu || (uu = xi`
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
`), Rt.rippleVisible, AE, Ra, ({
  theme: e
}) => e.transitions.easing.easeInOut, Rt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Rt.child, Rt.childLeaving, kE, Ra, ({
  theme: e
}) => e.transitions.easing.easeInOut, Rt.childPulsate, ME, ({
  theme: e
}) => e.transitions.easing.easeInOut), Dd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: a = {},
    className: s
  } = r, l = ve(r, IE), [c, u] = g.useState([]), d = g.useRef(0), f = g.useRef(null);
  g.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const p = g.useRef(!1), h = g.useRef(0), m = g.useRef(null), y = g.useRef(null);
  g.useEffect(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  const v = g.useCallback((x) => {
    const {
      pulsate: b,
      rippleX: R,
      rippleY: P,
      rippleSize: A,
      cb: B
    } = x;
    u((N) => [...N, /* @__PURE__ */ T.jsx(DE, {
      classes: {
        ripple: ge(a.ripple, Rt.ripple),
        rippleVisible: ge(a.rippleVisible, Rt.rippleVisible),
        ripplePulsate: ge(a.ripplePulsate, Rt.ripplePulsate),
        child: ge(a.child, Rt.child),
        childLeaving: ge(a.childLeaving, Rt.childLeaving),
        childPulsate: ge(a.childPulsate, Rt.childPulsate)
      },
      timeout: Ra,
      pulsate: b,
      rippleX: R,
      rippleY: P,
      rippleSize: A
    }, d.current)]), d.current += 1, f.current = B;
  }, [a]), O = g.useCallback((x = {}, b = {}, R = () => {
  }) => {
    const {
      pulsate: P = !1,
      center: A = o || b.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = b;
    if ((x == null ? void 0 : x.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (p.current = !0);
    const N = B ? null : y.current, k = N ? N.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let V, W, j;
    if (A || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      V = Math.round(k.width / 2), W = Math.round(k.height / 2);
    else {
      const {
        clientX: _,
        clientY: U
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      V = Math.round(_ - k.left), W = Math.round(U - k.top);
    }
    if (A)
      j = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const _ = Math.max(Math.abs((N ? N.clientWidth : 0) - V), V) * 2 + 2, U = Math.max(Math.abs((N ? N.clientHeight : 0) - W), W) * 2 + 2;
      j = Math.sqrt(_ ** 2 + U ** 2);
    }
    x != null && x.touches ? m.current === null && (m.current = () => {
      v({
        pulsate: P,
        rippleX: V,
        rippleY: W,
        rippleSize: j,
        cb: R
      });
    }, h.current = setTimeout(() => {
      m.current && (m.current(), m.current = null);
    }, NE)) : v({
      pulsate: P,
      rippleX: V,
      rippleY: W,
      rippleSize: j,
      cb: R
    });
  }, [o, v]), C = g.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), E = g.useCallback((x, b) => {
    if (clearTimeout(h.current), (x == null ? void 0 : x.type) === "touchend" && m.current) {
      m.current(), m.current = null, h.current = setTimeout(() => {
        E(x, b);
      });
      return;
    }
    m.current = null, u((R) => R.length > 0 ? R.slice(1) : R), f.current = b;
  }, []);
  return g.useImperativeHandle(n, () => ({
    pulsate: C,
    start: O,
    stop: E
  }), [C, O, E]), /* @__PURE__ */ T.jsx(_E, S({
    className: ge(Rt.root, a.root, s),
    ref: y
  }, l, {
    children: /* @__PURE__ */ T.jsx(PE, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Dd.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: i.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string
});
const jE = Dd;
function FE(e) {
  return Ue("MuiButtonBase", e);
}
const LE = ze("MuiButtonBase", ["root", "disabled", "focusVisible"]), BE = LE, UE = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], WE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = He({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, FE, o);
  return n && r && (s.root += ` ${r}`), s;
}, VE = he("button", {
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
  [`&.${BE.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), jd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: a = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: p = !1,
    LinkComponent: h = "a",
    onBlur: m,
    onClick: y,
    onContextMenu: v,
    onDragLeave: O,
    onFocus: C,
    onFocusVisible: E,
    onKeyDown: x,
    onKeyUp: b,
    onMouseDown: R,
    onMouseLeave: P,
    onMouseUp: A,
    onTouchEnd: B,
    onTouchMove: N,
    onTouchStart: k,
    tabIndex: V = 0,
    TouchRippleProps: W,
    touchRippleRef: j,
    type: _
  } = r, U = ve(r, UE), H = g.useRef(null), le = g.useRef(null), ne = st(le, j), {
    isFocusVisibleRef: M,
    onFocus: Y,
    onBlur: re,
    ref: ee
  } = Lp(), [G, X] = g.useState(!1);
  u && G && X(!1), g.useImperativeHandle(o, () => ({
    focusVisible: () => {
      X(!0), H.current.focus();
    }
  }), []);
  const [J, Q] = g.useState(!1);
  g.useEffect(() => {
    Q(!0);
  }, []);
  const oe = J && !d && !u;
  g.useEffect(() => {
    G && p && !d && J && le.current.pulsate();
  }, [d, p, G, J]);
  function ae(ue, rt, ce = f) {
    return zt((be) => (rt && rt(be), !ce && le.current && le.current[ue](be), !0));
  }
  const fe = ae("start", R), se = ae("stop", v), F = ae("stop", O), ye = ae("stop", A), q = ae("stop", (ue) => {
    G && ue.preventDefault(), P && P(ue);
  }), Z = ae("start", k), Ne = ae("stop", B), de = ae("stop", N), We = ae("stop", (ue) => {
    re(ue), M.current === !1 && X(!1), m && m(ue);
  }, !1), Ve = zt((ue) => {
    H.current || (H.current = ue.currentTarget), Y(ue), M.current === !0 && (X(!0), E && E(ue)), C && C(ue);
  }), Ae = () => {
    const ue = H.current;
    return c && c !== "button" && !(ue.tagName === "A" && ue.href);
  }, Se = g.useRef(!1), Be = zt((ue) => {
    p && !Se.current && G && le.current && ue.key === " " && (Se.current = !0, le.current.stop(ue, () => {
      le.current.start(ue);
    })), ue.target === ue.currentTarget && Ae() && ue.key === " " && ue.preventDefault(), x && x(ue), ue.target === ue.currentTarget && Ae() && ue.key === "Enter" && !u && (ue.preventDefault(), y && y(ue));
  }), Re = zt((ue) => {
    p && ue.key === " " && le.current && G && !ue.defaultPrevented && (Se.current = !1, le.current.stop(ue, () => {
      le.current.pulsate(ue);
    })), b && b(ue), y && ue.target === ue.currentTarget && Ae() && ue.key === " " && !ue.defaultPrevented && y(ue);
  });
  let Qe = c;
  Qe === "button" && (U.href || U.to) && (Qe = h);
  const Xe = {};
  Qe === "button" ? (Xe.type = _ === void 0 ? "button" : _, Xe.disabled = u) : (!U.href && !U.to && (Xe.role = "button"), u && (Xe["aria-disabled"] = u));
  const et = st(n, ee, H);
  process.env.NODE_ENV !== "production" && g.useEffect(() => {
    oe && !le.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [oe]);
  const Pe = S({}, r, {
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: V,
    focusVisible: G
  }), me = WE(Pe);
  return /* @__PURE__ */ T.jsxs(VE, S({
    as: Qe,
    className: ge(me.root, l),
    ownerState: Pe,
    onBlur: We,
    onClick: y,
    onContextMenu: se,
    onFocus: Ve,
    onKeyDown: Be,
    onKeyUp: Re,
    onMouseDown: fe,
    onMouseLeave: q,
    onMouseUp: ye,
    onDragLeave: F,
    onTouchEnd: Ne,
    onTouchMove: de,
    onTouchStart: Z,
    ref: et,
    tabIndex: u ? -1 : V,
    type: _
  }, Xe, U, {
    children: [s, oe ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ T.jsx(jE, S({
        ref: ne,
        center: a
      }, W))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (jd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Dt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ba,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: i.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  href: i.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: i.elementType,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onContextMenu: i.func,
  /**
   * @ignore
   */
  onDragLeave: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * @ignore
   */
  onMouseDown: i.func,
  /**
   * @ignore
   */
  onMouseLeave: i.func,
  /**
   * @ignore
   */
  onMouseUp: i.func,
  /**
   * @ignore
   */
  onTouchEnd: i.func,
  /**
   * @ignore
   */
  onTouchMove: i.func,
  /**
   * @ignore
   */
  onTouchStart: i.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: i.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: i.oneOfType([i.func, i.shape({
    current: i.shape({
      pulsate: i.func.isRequired,
      start: i.func.isRequired,
      stop: i.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string])
});
const Pa = jd;
function zE(e) {
  return Ue("MuiIconButton", e);
}
const qE = ze("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), HE = qE, YE = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], KE = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: a
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${pe(r)}`, o && `edge${pe(o)}`, `size${pe(a)}`]
  };
  return He(s, zE, t);
}, GE = he(Pa, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${pe(n.color)}`], n.edge && t[`edge${pe(n.edge)}`], t[`size${pe(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
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
  return S({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && S({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": S({}, r && {
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
    [`&.${HE.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Fd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: a,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, f = ve(r, YE), p = S({}, r, {
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), h = KE(p);
  return /* @__PURE__ */ T.jsx(GE, S({
    className: ge(h.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n,
    ownerState: p
  }, f, {
    children: a
  }));
});
process.env.NODE_ENV !== "production" && (Fd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: Zt(i.node, (e) => g.Children.toArray(e.children).some((n) => /* @__PURE__ */ g.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: i.oneOfType([i.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: i.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium", "large"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const Ld = Fd;
function QE(e) {
  return Ue("MuiSvgIcon", e);
}
ze("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const XE = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], JE = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(n)}`]
  };
  return He(o, QE, r);
}, ZE = he("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${pe(n.color)}`], t[`fontSize${pe(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, a, s, l, c, u, d, f, p, h, m;
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
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
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
      disabled: (m = (e.vars || e).palette) == null || (m = m.action) == null ? void 0 : m.disabled,
      inherit: void 0
    }[t.color]
  };
}), gs = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24"
  } = r, h = ve(r, XE), m = /* @__PURE__ */ g.isValidElement(o) && o.type === "svg", y = S({}, r, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: m
  }), v = {};
  d || (v.viewBox = p);
  const O = JE(y);
  return /* @__PURE__ */ T.jsxs(ZE, S({
    as: l,
    className: ge(O.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, v, h, m && o.props, {
    ownerState: y,
    children: [m ? o.props.children : o, f ? /* @__PURE__ */ T.jsx("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: i.oneOfType([i.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: i.oneOfType([i.oneOf(["inherit", "large", "medium", "small"]), i.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: i.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: i.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: i.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: i.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: i.string
});
gs.muiName = "SvgIcon";
const cu = gs;
function bs(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ T.jsx(cu, S({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = cu.muiName, /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(n));
}
const eO = bs(/* @__PURE__ */ T.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function tO(e) {
  return Ue("MuiChip", e);
}
const nO = ze("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), ke = nO, rO = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], oO = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, n && "disabled", `size${pe(r)}`, `color${pe(o)}`, l && "clickable", l && `clickableColor${pe(o)}`, s && "deletable", s && `deletableColor${pe(o)}`, `${c}${pe(o)}`],
    label: ["label", `label${pe(r)}`],
    avatar: ["avatar", `avatar${pe(r)}`, `avatarColor${pe(o)}`],
    icon: ["icon", `icon${pe(r)}`, `iconColor${pe(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${pe(r)}`, `deleteIconColor${pe(o)}`, `deleteIcon${pe(c)}Color${pe(o)}`]
  };
  return He(u, tO, t);
}, iO = he("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: o,
      clickable: a,
      onDelete: s,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${ke.avatar}`]: t.avatar
    }, {
      [`& .${ke.avatar}`]: t[`avatar${pe(l)}`]
    }, {
      [`& .${ke.avatar}`]: t[`avatarColor${pe(r)}`]
    }, {
      [`& .${ke.icon}`]: t.icon
    }, {
      [`& .${ke.icon}`]: t[`icon${pe(l)}`]
    }, {
      [`& .${ke.icon}`]: t[`iconColor${pe(o)}`]
    }, {
      [`& .${ke.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ke.deleteIcon}`]: t[`deleteIcon${pe(l)}`]
    }, {
      [`& .${ke.deleteIcon}`]: t[`deleteIconColor${pe(r)}`]
    }, {
      [`& .${ke.deleteIcon}`]: t[`deleteIcon${pe(c)}Color${pe(r)}`]
    }, t.root, t[`size${pe(l)}`], t[`color${pe(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${pe(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${pe(r)}`], t[c], t[`${c}${pe(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return S({
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
    [`& .${ke.icon}`]: S({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && S({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${ke.deleteIcon}`]: S({
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
    [`&.${ke.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ct(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${ke.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => S({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ct(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${ke.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ct(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
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
}) => S({}, t.variant === "outlined" && {
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
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : ct(e.palette[t.color].main, 0.7)}`,
  [`&.${ke.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${ke.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : ct(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${ke.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : ct(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), aO = he("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${pe(r)}`]];
  }
})(({
  ownerState: e
}) => S({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}));
function du(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Bd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: a,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: p,
    onClick: h,
    onDelete: m,
    onKeyDown: y,
    onKeyUp: v,
    size: O = "medium",
    variant: C = "filled",
    tabIndex: E,
    skipFocusWhenDisabled: x = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, b = ve(r, rO), R = g.useRef(null), P = st(R, n), A = (ne) => {
    ne.stopPropagation(), m && m(ne);
  }, B = (ne) => {
    ne.currentTarget === ne.target && du(ne) && ne.preventDefault(), y && y(ne);
  }, N = (ne) => {
    ne.currentTarget === ne.target && (m && du(ne) ? m(ne) : ne.key === "Escape" && R.current && R.current.blur()), v && v(ne);
  }, k = s !== !1 && h ? !0 : s, V = k || m ? Pa : c || "div", W = S({}, r, {
    component: V,
    disabled: d,
    size: O,
    color: l,
    iconColor: /* @__PURE__ */ g.isValidElement(f) && f.props.color || l,
    onDelete: !!m,
    clickable: k,
    variant: C
  }), j = oO(W), _ = V === Pa ? S({
    component: c || "div",
    focusVisibleClassName: j.focusVisible
  }, m && {
    disableRipple: !0
  }) : {};
  let U = null;
  m && (U = u && /* @__PURE__ */ g.isValidElement(u) ? /* @__PURE__ */ g.cloneElement(u, {
    className: ge(u.props.className, j.deleteIcon),
    onClick: A
  }) : /* @__PURE__ */ T.jsx(eO, {
    className: ge(j.deleteIcon),
    onClick: A
  }));
  let H = null;
  o && /* @__PURE__ */ g.isValidElement(o) && (H = /* @__PURE__ */ g.cloneElement(o, {
    className: ge(j.avatar, o.props.className)
  }));
  let le = null;
  return f && /* @__PURE__ */ g.isValidElement(f) && (le = /* @__PURE__ */ g.cloneElement(f, {
    className: ge(j.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && H && le && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ T.jsxs(iO, S({
    as: V,
    className: ge(j.root, a),
    disabled: k && d ? !0 : void 0,
    onClick: h,
    onKeyDown: B,
    onKeyUp: N,
    ref: P,
    tabIndex: x && d ? -1 : E,
    ownerState: W
  }, _, b, {
    children: [H || le, /* @__PURE__ */ T.jsx(aO, {
      className: ge(j.label),
      ownerState: W,
      children: p
    }), U]
  }));
});
process.env.NODE_ENV !== "production" && (Bd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Avatar element to display.
   */
  avatar: i.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Ap,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: i.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: i.oneOfType([i.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: i.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * Icon element.
   */
  icon: i.element,
  /**
   * The content of the component.
   */
  label: i.node,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @ignore
   */
  tabIndex: i.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined"]), i.string])
});
const sO = Bd;
function yr({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const Ud = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ud.displayName = "FormControlContext");
const xs = Ud;
function vr() {
  return g.useContext(xs);
}
function Wd(e) {
  return /* @__PURE__ */ T.jsx(xc, S({}, e, {
    defaultTheme: si,
    themeId: Xo
  }));
}
process.env.NODE_ENV !== "production" && (Wd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool])
});
function fu(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function zo(e, t = !1) {
  return e && (fu(e.value) && e.value !== "" || t && fu(e.defaultValue) && e.defaultValue !== "");
}
function lO(e) {
  return e.startAdornment;
}
function uO(e) {
  return Ue("MuiInputBase", e);
}
const cO = ze("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), Et = cO, dO = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Ei = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${pe(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Oi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, fO = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: a,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: p,
    startAdornment: h,
    type: m
  } = e, y = {
    root: ["root", `color${pe(n)}`, r && "disabled", o && "error", c && "fullWidth", s && "focused", l && "formControl", p === "small" && "sizeSmall", d && "multiline", h && "adornedStart", a && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", m === "search" && "inputTypeSearch", d && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", h && "inputAdornedStart", a && "inputAdornedEnd", f && "readOnly"]
  };
  return He(y, uO, t);
}, wi = he("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ei
})(({
  theme: e,
  ownerState: t
}) => S({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Et.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && S({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Si = he("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Oi
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = S({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), o = {
    opacity: "0 !important"
  }, a = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return S({
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
    [`label[data-shrink=false] + .${Et.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&:-ms-input-placeholder": o,
      // IE11
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": a,
      "&:focus::-moz-placeholder": a,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": a,
      // IE11
      "&:focus::-ms-input-placeholder": a
      // Edge
    },
    [`&.${Et.disabled}`]: {
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
}), pO = /* @__PURE__ */ T.jsx(Wd, {
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
}), Vd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r;
  const o = Ye({
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
    endAdornment: m,
    fullWidth: y = !1,
    id: v,
    inputComponent: O = "input",
    inputProps: C = {},
    inputRef: E,
    maxRows: x,
    minRows: b,
    multiline: R = !1,
    name: P,
    onBlur: A,
    onChange: B,
    onClick: N,
    onFocus: k,
    onKeyDown: V,
    onKeyUp: W,
    placeholder: j,
    readOnly: _,
    renderSuffix: U,
    rows: H,
    slotProps: le = {},
    slots: ne = {},
    startAdornment: M,
    type: Y = "text",
    value: re
  } = o, ee = ve(o, dO), G = C.value != null ? C.value : re, {
    current: X
  } = g.useRef(G != null), J = g.useRef(), Q = g.useCallback((me) => {
    process.env.NODE_ENV !== "production" && me && me.nodeName !== "INPUT" && !me.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), oe = st(J, E, C.ref, Q), [ae, fe] = g.useState(!1), se = vr();
  process.env.NODE_ENV !== "production" && g.useEffect(() => {
    if (se)
      return se.registerEffect();
  }, [se]);
  const F = yr({
    props: o,
    muiFormControl: se,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  F.focused = se ? se.focused : ae, g.useEffect(() => {
    !se && p && ae && (fe(!1), A && A());
  }, [se, p, ae, A]);
  const ye = se && se.onFilled, q = se && se.onEmpty, Z = g.useCallback((me) => {
    zo(me) ? ye && ye() : q && q();
  }, [ye, q]);
  hn(() => {
    X && Z({
      value: G
    });
  }, [G, Z, X]);
  const Ne = (me) => {
    if (F.disabled) {
      me.stopPropagation();
      return;
    }
    k && k(me), C.onFocus && C.onFocus(me), se && se.onFocus ? se.onFocus(me) : fe(!0);
  }, de = (me) => {
    A && A(me), C.onBlur && C.onBlur(me), se && se.onBlur ? se.onBlur(me) : fe(!1);
  }, We = (me, ...ue) => {
    if (!X) {
      const rt = me.target || J.current;
      if (rt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : mn(1));
      Z({
        value: rt.value
      });
    }
    C.onChange && C.onChange(me, ...ue), B && B(me, ...ue);
  };
  g.useEffect(() => {
    Z(J.current);
  }, []);
  const Ve = (me) => {
    J.current && me.currentTarget === me.target && J.current.focus(), N && !F.disabled && N(me);
  };
  let Ae = O, Se = C;
  R && Ae === "input" && (H ? (process.env.NODE_ENV !== "production" && (b || x) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Se = S({
    type: void 0,
    minRows: H,
    maxRows: H
  }, Se)) : Se = S({
    type: void 0,
    maxRows: x,
    minRows: b
  }, Se), Ae = $d);
  const Be = (me) => {
    Z(me.animationName === "mui-auto-fill-cancel" ? J.current : {
      value: "x"
    });
  };
  g.useEffect(() => {
    se && se.setAdornedStart(!!M);
  }, [se, M]);
  const Re = S({}, o, {
    color: F.color || "primary",
    disabled: F.disabled,
    endAdornment: m,
    error: F.error,
    focused: F.focused,
    formControl: se,
    fullWidth: y,
    hiddenLabel: F.hiddenLabel,
    multiline: R,
    size: F.size,
    startAdornment: M,
    type: Y
  }), Qe = fO(Re), Xe = ne.root || u.Root || wi, et = le.root || d.root || {}, Pe = ne.input || u.Input || Si;
  return Se = S({}, Se, (r = le.input) != null ? r : d.input), /* @__PURE__ */ T.jsxs(g.Fragment, {
    children: [!h && pO, /* @__PURE__ */ T.jsxs(Xe, S({}, et, !Qr(Xe) && {
      ownerState: S({}, Re, et.ownerState)
    }, {
      ref: n,
      onClick: Ve
    }, ee, {
      className: ge(Qe.root, et.className, c, _ && "MuiInputBase-readOnly"),
      children: [M, /* @__PURE__ */ T.jsx(xs.Provider, {
        value: null,
        children: /* @__PURE__ */ T.jsx(Pe, S({
          ownerState: Re,
          "aria-invalid": F.error,
          "aria-describedby": a,
          autoComplete: s,
          autoFocus: l,
          defaultValue: f,
          disabled: F.disabled,
          id: v,
          onAnimationStart: Be,
          name: P,
          placeholder: j,
          readOnly: _,
          required: F.required,
          rows: H,
          value: G,
          onKeyDown: V,
          onKeyUp: W,
          type: Y
        }, Se, !Qr(Pe) && {
          as: Ae,
          ownerState: S({}, Re, Se.ownerState)
        }, {
          ref: oe,
          className: ge(Qe.input, Se.className, _ && "MuiInputBase-readOnly"),
          onBlur: de,
          onChange: We,
          onFocus: Ne
        }))
      }), m, U ? U(S({}, F, {
        startAdornment: M
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Vd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
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
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Ba,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * @ignore
   */
  renderSuffix: i.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
const Es = Vd;
function mO(e) {
  return Ue("MuiInput", e);
}
const hO = S({}, Et, ze("MuiInput", ["root", "underline", "input"])), cn = hO;
function yO(e) {
  return Ue("MuiOutlinedInput", e);
}
const vO = S({}, Et, ze("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Lt = vO;
function gO(e) {
  return Ue("MuiFilledInput", e);
}
const bO = S({}, Et, ze("MuiFilledInput", ["root", "underline", "input"])), Ot = bO, xO = bs(/* @__PURE__ */ T.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), zd = bs(/* @__PURE__ */ T.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function EO(e) {
  return Ue("MuiAutocomplete", e);
}
const OO = ze("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), we = OO;
var pu, mu;
const wO = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], SO = ["ref"], TO = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: r,
    focused: o,
    fullWidth: a,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: d
  } = e, f = {
    root: ["root", r && "expanded", o && "focused", a && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${pe(d)}`],
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
  return He(f, EO, t);
}, CO = he("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: r,
      hasClearIcon: o,
      hasPopupIcon: a,
      inputFocused: s,
      size: l
    } = n;
    return [{
      [`& .${we.tag}`]: t.tag
    }, {
      [`& .${we.tag}`]: t[`tagSize${pe(l)}`]
    }, {
      [`& .${we.inputRoot}`]: t.inputRoot
    }, {
      [`& .${we.input}`]: t.input
    }, {
      [`& .${we.input}`]: s && t.inputFocused
    }, t.root, r && t.fullWidth, a && t.hasPopupIcon, o && t.hasClearIcon];
  }
})(({
  ownerState: e
}) => S({
  [`&.${we.focused} .${we.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${we.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, e.fullWidth && {
  width: "100%"
}, {
  [`& .${we.tag}`]: S({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, e.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${we.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${we.hasPopupIcon}&, .${we.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${we.hasPopupIcon}.${we.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${we.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${cn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${cn.root}.${Et.sizeSmall}`]: {
    [`& .${cn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${Lt.root}`]: {
    padding: 9,
    [`.${we.hasPopupIcon}&, .${we.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${we.hasPopupIcon}.${we.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${we.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${we.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Lt.root}.${Et.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${we.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Ot.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${we.hasPopupIcon}&, .${we.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${we.hasPopupIcon}.${we.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${Ot.input}`]: {
      padding: "7px 4px"
    },
    [`& .${we.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Ot.root}.${Et.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Ot.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${Et.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Ot.root}.${Et.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${we.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Ot.root}.${Et.hiddenLabel}.${Et.sizeSmall}`]: {
    [`& .${we.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${we.input}`]: S({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), RO = he("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), PO = he(Ld, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), $O = he(Ld, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => S({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen)
})(({
  ownerState: e
}) => S({
  padding: 2,
  marginRight: -2
}, e.popupOpen && {
  transform: "rotate(180deg)"
})), IO = he(Ad, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${we.option}`]: t.option
    }, t.popper, n.disablePortal && t.popperDisablePortal];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
  zIndex: (e.vars || e).zIndex.modal
}, t.disablePortal && {
  position: "absolute"
})), NO = he(hs, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => S({}, e.typography.body1, {
  overflow: "auto"
})), AO = he("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), kO = he("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), MO = he("div", {
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
  [`& .${we.option}`]: {
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
    [`&.${we.focused}`]: {
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
    [`&.${we.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ct(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${we.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ct(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${we.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ct(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), _O = he(yE, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), DO = he("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${we.option}`]: {
    paddingLeft: 24
  }
}), qd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o, a, s;
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
    clearIcon: m = pu || (pu = /* @__PURE__ */ T.jsx(xO, {
      fontSize: "small"
    })),
    clearOnBlur: y = !l.freeSolo,
    clearOnEscape: v = !1,
    clearText: O = "Clear",
    closeText: C = "Close",
    componentsProps: E = {},
    defaultValue: x = l.multiple ? [] : null,
    disableClearable: b = !1,
    disableCloseOnSelect: R = !1,
    disabled: P = !1,
    disabledItemsFocusable: A = !1,
    disableListWrap: B = !1,
    disablePortal: N = !1,
    filterSelectedOptions: k = !1,
    forcePopupIcon: V = "auto",
    freeSolo: W = !1,
    fullWidth: j = !1,
    getLimitTagsText: _ = (D) => `+${D}`,
    getOptionLabel: U,
    groupBy: H,
    handleHomeEndKeys: le = !l.freeSolo,
    includeInputInList: ne = !1,
    limitTags: M = -1,
    ListboxComponent: Y = "ul",
    ListboxProps: re,
    loading: ee = !1,
    loadingText: G = "Loading…",
    multiple: X = !1,
    noOptionsText: J = "No options",
    openOnFocus: Q = !1,
    openText: oe = "Open",
    PaperComponent: ae = hs,
    PopperComponent: fe = Ad,
    popupIcon: se = mu || (mu = /* @__PURE__ */ T.jsx(zd, {})),
    readOnly: F = !1,
    renderGroup: ye,
    renderInput: q,
    renderOption: Z,
    renderTags: Ne,
    selectOnFocus: de = !l.freeSolo,
    size: We = "medium",
    slotProps: Ve = {}
  } = l, Ae = ve(l, wO), {
    getRootProps: Se,
    getInputProps: Be,
    getInputLabelProps: Re,
    getPopupIndicatorProps: Qe,
    getClearProps: Xe,
    getTagProps: et,
    getListboxProps: Pe,
    getOptionProps: me,
    value: ue,
    dirty: rt,
    expanded: ce,
    id: be,
    popupOpen: $e,
    focused: Je,
    focusedTag: rn,
    anchorEl: jt,
    setAnchorEl: xr,
    inputValue: kt,
    groupedOptions: ht
  } = uE(S({}, l, {
    componentName: "Autocomplete"
  })), bt = !b && !P && rt && !F, pt = (!W || V === !0) && V !== !1, {
    onMouseDown: Mt
  } = Be(), {
    ref: On
  } = re ?? {}, on = Pe(), {
    ref: jn
  } = on, Fn = ve(on, SO), Er = st(jn, On), an = U || ((D) => {
    var K;
    return (K = D.label) != null ? K : D;
  }), ot = S({}, l, {
    disablePortal: N,
    expanded: ce,
    focused: Je,
    fullWidth: j,
    getOptionLabel: an,
    hasClearIcon: bt,
    hasPopupIcon: pt,
    inputFocused: rn === -1,
    popupOpen: $e,
    size: We
  }), Ze = TO(ot);
  let yt;
  if (X && ue.length > 0) {
    const D = (K) => S({
      className: Ze.tag,
      disabled: P
    }, et(K));
    Ne ? yt = Ne(ue, D, ot) : yt = ue.map((K, ie) => /* @__PURE__ */ T.jsx(sO, S({
      label: an(K),
      size: We
    }, D({
      index: ie
    }), p)));
  }
  if (M > -1 && Array.isArray(yt)) {
    const D = yt.length - M;
    !Je && D > 0 && (yt = yt.splice(0, M), yt.push(/* @__PURE__ */ T.jsx("span", {
      className: Ze.tag,
      children: _(D)
    }, yt.length)));
  }
  const Bn = ye || ((D) => /* @__PURE__ */ T.jsxs("li", {
    children: [/* @__PURE__ */ T.jsx(_O, {
      className: Ze.groupLabel,
      ownerState: ot,
      component: "div",
      children: D.group
    }), /* @__PURE__ */ T.jsx(DO, {
      className: Ze.groupUl,
      ownerState: ot,
      children: D.children
    })]
  }, D.key)), Or = Z || ((D, K) => /* @__PURE__ */ T.jsx("li", S({}, D, {
    children: an(K)
  }))), w = (D, K) => {
    const ie = me({
      option: D,
      index: K
    });
    return Or(S({}, ie, {
      className: Ze.option
    }), D, {
      selected: ie["aria-selected"],
      index: K,
      inputValue: kt
    }, ot);
  }, z = (r = Ve.clearIndicator) != null ? r : E.clearIndicator, te = (o = Ve.paper) != null ? o : E.paper, $ = (a = Ve.popper) != null ? a : E.popper, I = (s = Ve.popupIndicator) != null ? s : E.popupIndicator;
  return /* @__PURE__ */ T.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ T.jsx(CO, S({
      ref: n,
      className: ge(Ze.root, h),
      ownerState: ot
    }, Se(Ae), {
      children: q({
        id: be,
        disabled: P,
        fullWidth: !0,
        size: We === "small" ? "small" : void 0,
        InputLabelProps: Re(),
        InputProps: S({
          ref: xr,
          className: Ze.inputRoot,
          startAdornment: yt,
          onClick: (D) => {
            D.target === D.currentTarget && Mt(D);
          }
        }, (bt || pt) && {
          endAdornment: /* @__PURE__ */ T.jsxs(RO, {
            className: Ze.endAdornment,
            ownerState: ot,
            children: [bt ? /* @__PURE__ */ T.jsx(PO, S({}, Xe(), {
              "aria-label": O,
              title: O,
              ownerState: ot
            }, z, {
              className: ge(Ze.clearIndicator, z == null ? void 0 : z.className),
              children: m
            })) : null, pt ? /* @__PURE__ */ T.jsx($O, S({}, Qe(), {
              disabled: P,
              "aria-label": $e ? C : oe,
              title: $e ? C : oe,
              ownerState: ot
            }, I, {
              className: ge(Ze.popupIndicator, I == null ? void 0 : I.className),
              children: se
            })) : null]
          })
        }),
        inputProps: S({
          className: Ze.input,
          disabled: P,
          readOnly: F
        }, Be())
      })
    })), jt ? /* @__PURE__ */ T.jsx(IO, S({
      as: fe,
      disablePortal: N,
      style: {
        width: jt ? jt.clientWidth : null
      },
      ownerState: ot,
      role: "presentation",
      anchorEl: jt,
      open: $e
    }, $, {
      className: ge(Ze.popper, $ == null ? void 0 : $.className),
      children: /* @__PURE__ */ T.jsxs(NO, S({
        ownerState: ot,
        as: ae
      }, te, {
        className: ge(Ze.paper, te == null ? void 0 : te.className),
        children: [ee && ht.length === 0 ? /* @__PURE__ */ T.jsx(AO, {
          className: Ze.loading,
          ownerState: ot,
          children: G
        }) : null, ht.length === 0 && !W && !ee ? /* @__PURE__ */ T.jsx(kO, {
          className: Ze.noOptions,
          ownerState: ot,
          role: "presentation",
          onMouseDown: (D) => {
            D.preventDefault();
          },
          children: J
        }) : null, ht.length > 0 ? /* @__PURE__ */ T.jsx(MO, S({
          as: Y,
          className: Ze.listbox,
          ownerState: ot
        }, Fn, re, {
          ref: Er,
          children: ht.map((D, K) => H ? Bn({
            key: D.key,
            group: D.group,
            children: D.options.map((ie, xe) => w(ie, D.index + xe))
          }) : w(D, K))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (qd.propTypes = {
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
  autoComplete: i.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: i.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: i.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: i.oneOfType([i.oneOf(["mouse", "touch"]), i.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: i.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: i.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: i.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: i.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: i.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: i.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: i.shape({
    clearIndicator: i.object,
    paper: i.object,
    popper: i.object,
    popupIndicator: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: Zt(i.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: i.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: i.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: i.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: i.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: i.oneOfType([i.oneOf(["auto"]), i.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: i.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: i.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: i.func,
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
  getOptionLabel: i.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: i.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: i.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: i.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: i.bool,
  /**
   * The input value.
   */
  inputValue: i.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: i.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: Ua,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: i.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: i.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: i.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: i.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: i.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: i.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: i.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: i.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: i.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: i.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: i.string,
  /**
   * Array of options.
   */
  options: i.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: i.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: i.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: i.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: i.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: i.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: i.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: i.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: i.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    clearIndicator: i.object,
    paper: i.object,
    popper: i.object,
    popupIndicator: i.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: Zt(i.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const jO = qd, FO = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], LO = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = He({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, mO, t);
  return S({}, t, o);
}, BO = he(wi, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ei(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), S({
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
    [`&.${cn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${cn.error}`]: {
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
    [`&:hover:not(.${cn.disabled}, .${cn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${cn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), UO = he(Si, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Oi
})({}), Os = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o, a, s;
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
    slotProps: m,
    slots: y = {},
    type: v = "text"
  } = l, O = ve(l, FO), C = LO(l), x = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, b = m ?? d ? Pt(m ?? d, x) : x, R = (r = (o = y.root) != null ? o : u.Root) != null ? r : BO, P = (a = (s = y.input) != null ? s : u.Input) != null ? a : UO;
  return /* @__PURE__ */ T.jsx(Es, S({
    slots: {
      root: R,
      input: P
    },
    slotProps: b,
    fullWidth: f,
    inputComponent: p,
    multiline: h,
    ref: n,
    type: v
  }, O, {
    classes: C
  }));
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
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
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
Os.muiName = "Input";
const Hd = Os, WO = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], VO = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = He({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, gO, t);
  return S({}, t, o);
}, zO = he(wi, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ei(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", a = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return S({
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
    [`&.${Ot.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
    },
    [`&.${Ot.disabled}`]: {
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
    [`&.${Ot.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Ot.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
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
    [`&:hover:not(.${Ot.disabled}, .${Ot.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Ot.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && S({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), qO = he(Si, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Oi
})(({
  theme: e,
  ownerState: t
}) => S({
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
})), ws = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o, a, s;
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
    slots: m = {},
    type: y = "text"
  } = l, v = ve(l, WO), O = S({}, l, {
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    type: y
  }), C = VO(l), E = {
    root: {
      ownerState: O
    },
    input: {
      ownerState: O
    }
  }, x = h ?? u ? Pt(h ?? u, E) : E, b = (r = (o = m.root) != null ? o : c.Root) != null ? r : zO, R = (a = (s = m.input) != null ? s : c.Input) != null ? a : qO;
  return /* @__PURE__ */ T.jsx(Es, S({
    slots: {
      root: b,
      input: R
    },
    componentsProps: x,
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    ref: n,
    type: y
  }, v, {
    classes: C
  }));
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
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
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
ws.muiName = "Input";
const Yd = ws;
var hu;
const HO = ["children", "classes", "className", "label", "notched"], YO = he("fieldset")({
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
}), KO = he("legend")(({
  ownerState: e,
  theme: t
}) => S({
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
}, e.withLabel && S({
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
function Kd(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, o = ve(e, HO), a = n != null && n !== "", s = S({}, e, {
    notched: r,
    withLabel: a
  });
  return /* @__PURE__ */ T.jsx(YO, S({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, o, {
    children: /* @__PURE__ */ T.jsx(KO, {
      ownerState: s,
      children: a ? /* @__PURE__ */ T.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        hu || (hu = /* @__PURE__ */ T.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (Kd.propTypes = {
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The label.
   */
  label: i.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool.isRequired,
  /**
   * @ignore
   */
  style: i.object
});
const GO = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], QO = (e) => {
  const {
    classes: t
  } = e, r = He({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, yO, t);
  return S({}, t, r);
}, XO = he(wi, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ei
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return S({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Lt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Lt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Lt.focused} .${Lt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Lt.error} .${Lt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Lt.disabled} .${Lt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && S({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), JO = he(Kd, {
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
}), ZO = he(Si, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Oi
})(({
  theme: e,
  ownerState: t
}) => S({
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
})), Ss = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o, a, s, l;
  const c = Ye({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: f = "input",
    label: p,
    multiline: h = !1,
    notched: m,
    slots: y = {},
    type: v = "text"
  } = c, O = ve(c, GO), C = QO(c), E = vr(), x = yr({
    props: c,
    muiFormControl: E,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), b = S({}, c, {
    color: x.color || "primary",
    disabled: x.disabled,
    error: x.error,
    focused: x.focused,
    formControl: E,
    fullWidth: d,
    hiddenLabel: x.hiddenLabel,
    multiline: h,
    size: x.size,
    type: v
  }), R = (r = (o = y.root) != null ? o : u.Root) != null ? r : XO, P = (a = (s = y.input) != null ? s : u.Input) != null ? a : ZO;
  return /* @__PURE__ */ T.jsx(Es, S({
    slots: {
      root: R,
      input: P
    },
    renderSuffix: (A) => /* @__PURE__ */ T.jsx(JO, {
      ownerState: b,
      className: C.notchedOutline,
      label: p != null && p !== "" && x.required ? l || (l = /* @__PURE__ */ T.jsxs(g.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof m < "u" ? m : !!(A.startAdornment || A.filled || A.focused)
    }),
    fullWidth: d,
    inputComponent: f,
    multiline: h,
    ref: n,
    type: v
  }, O, {
    classes: S({}, C, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: i.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
Ss.muiName = "Input";
const Gd = Ss;
function ew(e) {
  return Ue("MuiFormLabel", e);
}
const tw = ze("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Br = tw, nw = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], rw = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${pe(n)}`, o && "disabled", a && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return He(c, ew, t);
}, ow = he("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => S({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => S({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Br.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Br.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Br.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), iw = he("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Br.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Qd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: a,
    component: s = "label"
  } = r, l = ve(r, nw), c = vr(), u = yr({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = S({}, r, {
    color: u.color || "primary",
    component: s,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = rw(d);
  return /* @__PURE__ */ T.jsxs(ow, S({
    as: s,
    ownerState: d,
    className: ge(f.root, a),
    ref: n
  }, l, {
    children: [o, u.required && /* @__PURE__ */ T.jsxs(iw, {
      ownerState: d,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Qd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: i.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const aw = Qd;
function sw(e) {
  return Ue("MuiInputLabel", e);
}
ze("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const lw = ["disableAnimation", "margin", "shrink", "variant", "className"], uw = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, u = He({
    root: ["root", n && "formControl", !a && "animated", o && "shrink", r === "small" && "sizeSmall", s],
    asterisk: [l && "asterisk"]
  }, sw, t);
  return S({}, t, u);
}, cw = he(aw, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Br.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
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
}, t.variant === "filled" && S({
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
}, t.shrink && S({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && S({
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
}))), Xd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    shrink: a,
    className: s
  } = r, l = ve(r, lw), c = vr();
  let u = a;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = yr({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required"]
  }), f = S({}, r, {
    disableAnimation: o,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required
  }), p = uw(f);
  return /* @__PURE__ */ T.jsx(cw, S({
    "data-shrink": u,
    ownerState: f,
    ref: n,
    className: ge(p.root, s)
  }, l, {
    classes: p
  }));
});
process.env.NODE_ENV !== "production" && (Xd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: i.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: i.oneOfType([i.oneOf(["normal", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
const dw = Xd;
function fw(e) {
  return Ue("MuiFormControl", e);
}
ze("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const pw = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], mw = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${pe(n)}`, r && "fullWidth"]
  };
  return He(o, fw, t);
}, hw = he("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => S({}, t.root, t[`margin${pe(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => S({
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
})), Jd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: a,
    color: s = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: p = !1,
    margin: h = "none",
    required: m = !1,
    size: y = "medium",
    variant: v = "outlined"
  } = r, O = ve(r, pw), C = S({}, r, {
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: p,
    margin: h,
    required: m,
    size: y,
    variant: v
  }), E = mw(C), [x, b] = g.useState(() => {
    let W = !1;
    return o && g.Children.forEach(o, (j) => {
      if (!Ni(j, ["Input", "Select"]))
        return;
      const _ = Ni(j, ["Select"]) ? j.props.input : j;
      _ && lO(_.props) && (W = !0);
    }), W;
  }), [R, P] = g.useState(() => {
    let W = !1;
    return o && g.Children.forEach(o, (j) => {
      Ni(j, ["Input", "Select"]) && (zo(j.props, !0) || zo(j.props.inputProps, !0)) && (W = !0);
    }), W;
  }), [A, B] = g.useState(!1);
  c && A && B(!1);
  const N = d !== void 0 && !c ? d : A;
  let k;
  if (process.env.NODE_ENV !== "production") {
    const W = g.useRef(!1);
    k = () => (W.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), W.current = !0, () => {
      W.current = !1;
    });
  }
  const V = g.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: b,
    color: s,
    disabled: c,
    error: u,
    filled: R,
    focused: N,
    fullWidth: f,
    hiddenLabel: p,
    size: y,
    onBlur: () => {
      B(!1);
    },
    onEmpty: () => {
      P(!1);
    },
    onFilled: () => {
      P(!0);
    },
    onFocus: () => {
      B(!0);
    },
    registerEffect: k,
    required: m,
    variant: v
  }), [x, s, c, u, R, N, f, p, k, m, y, v]);
  return /* @__PURE__ */ T.jsx(xs.Provider, {
    value: V,
    children: /* @__PURE__ */ T.jsx(hw, S({
      as: l,
      ownerState: C,
      className: ge(E.root, a),
      ref: n
    }, O, {
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (Jd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: i.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
const yw = Jd;
function vw(e) {
  return Ue("MuiFormHelperText", e);
}
const gw = ze("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), yu = gw;
var vu;
const bw = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], xw = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: a,
    filled: s,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", o && "disabled", a && "error", r && `size${pe(r)}`, n && "contained", l && "focused", s && "filled", c && "required"]
  };
  return He(u, vw, t);
}, Ew = he("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${pe(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => S({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${yu.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${yu.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Zd = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: a,
    component: s = "p"
  } = r, l = ve(r, bw), c = vr(), u = yr({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = S({}, r, {
    component: s,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = xw(d);
  return /* @__PURE__ */ T.jsx(Ew, S({
    as: s,
    ownerState: d,
    className: ge(f.root, a),
    ref: n
  }, l, {
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      vu || (vu = /* @__PURE__ */ T.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  }));
});
process.env.NODE_ENV !== "production" && (Zd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined", "standard"]), i.string])
});
const Ow = Zd, ef = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (ef.displayName = "ListContext");
const ww = ef;
function Sw(e) {
  return Ue("MuiList", e);
}
ze("MuiList", ["root", "padding", "dense", "subheader"]);
const Tw = ["children", "className", "component", "dense", "disablePadding", "subheader"], Cw = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return He({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, Sw, t);
}, Rw = he("ul", {
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
}) => S({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), tf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ve(r, Tw), f = g.useMemo(() => ({
    dense: l
  }), [l]), p = S({}, r, {
    component: s,
    dense: l,
    disablePadding: c
  }), h = Cw(p);
  return /* @__PURE__ */ T.jsx(ww.Provider, {
    value: f,
    children: /* @__PURE__ */ T.jsxs(Rw, S({
      as: s,
      className: ge(h.root, a),
      ref: n,
      ownerState: p
    }, d, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (tf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: i.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: i.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const Pw = tf, $w = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Vi(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function gu(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function nf(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function $r(e, t, n, r, o, a) {
  let s = !1, l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !nf(l, a) || c)
      l = o(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const rf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: a = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu"
  } = t, p = ve(t, $w), h = g.useRef(null), m = g.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  hn(() => {
    o && h.current.focus();
  }, [o]), g.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (E, x) => {
      const b = !h.current.style.width;
      if (E.clientHeight < h.current.clientHeight && b) {
        const R = `${dc(mt(E))}px`;
        h.current.style[x.direction === "rtl" ? "paddingLeft" : "paddingRight"] = R, h.current.style.width = `calc(100% + ${R})`;
      }
      return h.current;
    }
  }), []);
  const y = (E) => {
    const x = h.current, b = E.key, R = mt(x).activeElement;
    if (b === "ArrowDown")
      E.preventDefault(), $r(x, R, u, c, Vi);
    else if (b === "ArrowUp")
      E.preventDefault(), $r(x, R, u, c, gu);
    else if (b === "Home")
      E.preventDefault(), $r(x, null, u, c, Vi);
    else if (b === "End")
      E.preventDefault(), $r(x, null, u, c, gu);
    else if (b.length === 1) {
      const P = m.current, A = b.toLowerCase(), B = performance.now();
      P.keys.length > 0 && (B - P.lastTime > 500 ? (P.keys = [], P.repeating = !0, P.previousKeyMatched = !0) : P.repeating && A !== P.keys[0] && (P.repeating = !1)), P.lastTime = B, P.keys.push(A);
      const N = R && !P.repeating && nf(R, P);
      P.previousKeyMatched && (N || $r(x, R, !1, c, Vi, P)) ? E.preventDefault() : P.previousKeyMatched = !1;
    }
    d && d(E);
  }, v = st(h, n);
  let O = -1;
  g.Children.forEach(s, (E, x) => {
    if (!/* @__PURE__ */ g.isValidElement(E)) {
      O === x && (O += 1, O >= s.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Hr.isFragment(E) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), E.props.disabled || (f === "selectedMenu" && E.props.selected || O === -1) && (O = x), O === x && (E.props.disabled || E.props.muiSkipListHighlight || E.type.muiSkipListHighlight) && (O += 1, O >= s.length && (O = -1));
  });
  const C = g.Children.map(s, (E, x) => {
    if (x === O) {
      const b = {};
      return a && (b.autoFocus = !0), E.props.tabIndex === void 0 && f === "selectedMenu" && (b.tabIndex = 0), /* @__PURE__ */ g.cloneElement(E, b);
    }
    return E;
  });
  return /* @__PURE__ */ T.jsx(Pw, S({
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: y,
    tabIndex: o ? 0 : -1
  }, p, {
    children: C
  }));
});
process.env.NODE_ENV !== "production" && (rf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: i.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
const Iw = rf, of = (e) => e.scrollTop;
function qo(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: a,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof a == "object" ? a[t.mode] : a,
    delay: s.transitionDelay
  };
}
const Nw = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function $a(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Aw = {
  entering: {
    opacity: 1,
    transform: $a(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, zi = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ts = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: p,
    onExiting: h,
    style: m,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Md
  } = t, O = ve(t, Nw), C = g.useRef(), E = g.useRef(), x = fr(), b = g.useRef(null), R = st(b, a.ref, n), P = (_) => (U) => {
    if (_) {
      const H = b.current;
      U === void 0 ? _(H) : _(H, U);
    }
  }, A = P(d), B = P((_, U) => {
    of(_);
    const {
      duration: H,
      delay: le,
      easing: ne
    } = qo({
      style: m,
      timeout: y,
      easing: s
    }, {
      mode: "enter"
    });
    let M;
    y === "auto" ? (M = x.transitions.getAutoHeightDuration(_.clientHeight), E.current = M) : M = H, _.style.transition = [x.transitions.create("opacity", {
      duration: M,
      delay: le
    }), x.transitions.create("transform", {
      duration: zi ? M : M * 0.666,
      delay: le,
      easing: ne
    })].join(","), c && c(_, U);
  }), N = P(u), k = P(h), V = P((_) => {
    const {
      duration: U,
      delay: H,
      easing: le
    } = qo({
      style: m,
      timeout: y,
      easing: s
    }, {
      mode: "exit"
    });
    let ne;
    y === "auto" ? (ne = x.transitions.getAutoHeightDuration(_.clientHeight), E.current = ne) : ne = U, _.style.transition = [x.transitions.create("opacity", {
      duration: ne,
      delay: H
    }), x.transitions.create("transform", {
      duration: zi ? ne : ne * 0.666,
      delay: zi ? H : H || ne * 0.333,
      easing: le
    })].join(","), _.style.opacity = 0, _.style.transform = $a(0.75), f && f(_);
  }), W = P(p), j = (_) => {
    y === "auto" && (C.current = setTimeout(_, E.current || 0)), r && r(b.current, _);
  };
  return g.useEffect(() => () => {
    clearTimeout(C.current);
  }, []), /* @__PURE__ */ T.jsx(v, S({
    appear: o,
    in: l,
    nodeRef: b,
    onEnter: B,
    onEntered: N,
    onEntering: A,
    onExit: V,
    onExited: W,
    onExiting: k,
    addEndListener: j,
    timeout: y === "auto" ? null : y
  }, O, {
    children: (_, U) => /* @__PURE__ */ g.cloneElement(a, S({
      style: S({
        opacity: 0,
        transform: $a(0.75),
        visibility: _ === "exited" && !l ? "hidden" : void 0
      }, Aw[_], m, a.props.style),
      ref: R
    }, U))
  }));
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: to.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
Ts.muiSupportAuto = !0;
const kw = Ts, Mw = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], _w = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, af = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = fr(), o = {
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
    onExited: m,
    onExiting: y,
    style: v,
    timeout: O = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Md
  } = t, E = ve(t, Mw), x = g.useRef(null), b = st(x, l.ref, n), R = (j) => (_) => {
    if (j) {
      const U = x.current;
      _ === void 0 ? j(U) : j(U, _);
    }
  }, P = R(p), A = R((j, _) => {
    of(j);
    const U = qo({
      style: v,
      timeout: O,
      easing: c
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = r.transitions.create("opacity", U), j.style.transition = r.transitions.create("opacity", U), d && d(j, _);
  }), B = R(f), N = R(y), k = R((j) => {
    const _ = qo({
      style: v,
      timeout: O,
      easing: c
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = r.transitions.create("opacity", _), j.style.transition = r.transitions.create("opacity", _), h && h(j);
  }), V = R(m), W = (j) => {
    a && a(x.current, j);
  };
  return /* @__PURE__ */ T.jsx(C, S({
    appear: s,
    in: u,
    nodeRef: x,
    onEnter: A,
    onEntered: B,
    onEntering: P,
    onExit: k,
    onExited: V,
    onExiting: N,
    addEndListener: W,
    timeout: O
  }, E, {
    children: (j, _) => /* @__PURE__ */ g.cloneElement(l, S({
      style: S({
        opacity: 0,
        visibility: j === "exited" && !u ? "hidden" : void 0
      }, _w[j], v, l.props.style),
      ref: b
    }, _))
  }));
});
process.env.NODE_ENV !== "production" && (af.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: to.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
const Dw = af;
function jw(e) {
  return Ue("MuiBackdrop", e);
}
ze("MuiBackdrop", ["root", "invisible"]);
const Fw = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Lw = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return He({
    root: ["root", n && "invisible"]
  }, jw, t);
}, Bw = he("div", {
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
}) => S({
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
})), sf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o, a;
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
    slotProps: m = {},
    slots: y = {},
    TransitionComponent: v = Dw,
    transitionDuration: O
  } = s, C = ve(s, Fw), E = S({}, s, {
    component: u,
    invisible: p
  }), x = Lw(E), b = (r = m.root) != null ? r : f.root;
  return /* @__PURE__ */ T.jsx(v, S({
    in: h,
    timeout: O
  }, C, {
    children: /* @__PURE__ */ T.jsx(Bw, S({
      "aria-hidden": !0
    }, b, {
      as: (o = (a = y.root) != null ? a : d.Root) != null ? o : u,
      className: ge(x.root, c, b == null ? void 0 : b.className),
      ownerState: S({}, E, b == null ? void 0 : b.ownerState),
      classes: x,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (sf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
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
  componentsProps: i.shape({
    root: i.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: i.bool,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: i.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
const Uw = sf, Ww = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"], Vw = he("div", {
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
}) => S({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), zw = he(Uw, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), lf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o, a, s, l, c;
  const u = Ye({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = zw,
    BackdropProps: f,
    classes: p,
    className: h,
    closeAfterTransition: m = !1,
    children: y,
    container: v,
    component: O,
    components: C = {},
    componentsProps: E = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: b = !1,
    disableEscapeKeyDown: R = !1,
    disablePortal: P = !1,
    disableRestoreFocus: A = !1,
    disableScrollLock: B = !1,
    hideBackdrop: N = !1,
    keepMounted: k = !1,
    onBackdropClick: V,
    onClose: W,
    open: j,
    slotProps: _,
    slots: U,
    // eslint-disable-next-line react/prop-types
    theme: H
  } = u, le = ve(u, Ww), [ne, M] = g.useState(!0), Y = {
    container: v,
    closeAfterTransition: m,
    disableAutoFocus: x,
    disableEnforceFocus: b,
    disableEscapeKeyDown: R,
    disablePortal: P,
    disableRestoreFocus: A,
    disableScrollLock: B,
    hideBackdrop: N,
    keepMounted: k,
    onBackdropClick: V,
    onClose: W,
    open: j
  }, re = S({}, u, Y, {
    exited: ne
  }), ee = (r = (o = U == null ? void 0 : U.root) != null ? o : C.Root) != null ? r : Vw, G = (a = (s = U == null ? void 0 : U.backdrop) != null ? s : C.Backdrop) != null ? a : d, X = (l = _ == null ? void 0 : _.root) != null ? l : E.root, J = (c = _ == null ? void 0 : _.backdrop) != null ? c : E.backdrop;
  return /* @__PURE__ */ T.jsx(Pd, S({
    slots: {
      root: ee,
      backdrop: G
    },
    slotProps: {
      root: () => S({}, wa(X, re), !Qr(ee) && {
        as: O,
        theme: H
      }, {
        className: ge(h, X == null ? void 0 : X.className, p == null ? void 0 : p.root, !re.open && re.exited && (p == null ? void 0 : p.hidden))
      }),
      backdrop: () => S({}, f, wa(J, re), {
        className: ge(J == null ? void 0 : J.className, f == null ? void 0 : f.className, p == null ? void 0 : p.backdrop)
      })
    },
    onTransitionEnter: () => M(!1),
    onTransitionExited: () => M(!0),
    ref: n
  }, le, Y, {
    children: y
  }));
});
process.env.NODE_ENV !== "production" && (lf.propTypes = {
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
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * A single child content element.
   */
  children: to.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Backdrop: i.elementType,
    Root: i.elementType
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
  componentsProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Yt, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const qw = lf;
function Hw(e) {
  return Ue("MuiPopover", e);
}
ze("MuiPopover", ["root", "paper"]);
const Yw = ["onEntering"], Kw = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"], Gw = ["slotProps"];
function bu(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function xu(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Eu(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function No(e) {
  return typeof e == "function" ? e() : e;
}
const Qw = (e) => {
  const {
    classes: t
  } = e;
  return He({
    root: ["root"],
    paper: ["paper"]
  }, Hw, t);
}, Xw = he(qw, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), uf = he(hs, {
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
}), cf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o, a;
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
    container: m,
    elevation: y = 8,
    marginThreshold: v = 16,
    open: O,
    PaperProps: C = {},
    slots: E,
    slotProps: x,
    transformOrigin: b = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: R = kw,
    transitionDuration: P = "auto",
    TransitionProps: {
      onEntering: A
    } = {}
  } = s, B = ve(s.TransitionProps, Yw), N = ve(s, Kw), k = (r = x == null ? void 0 : x.paper) != null ? r : C, V = g.useRef(), W = st(V, k.ref), j = S({}, s, {
    anchorOrigin: u,
    anchorReference: f,
    elevation: y,
    marginThreshold: v,
    externalPaperSlotProps: k,
    transformOrigin: b,
    TransitionComponent: R,
    transitionDuration: P,
    TransitionProps: B
  }), _ = Qw(j), U = g.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const F = No(c), ye = F && F.nodeType === 1 ? F : mt(V.current).body, q = ye.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Z = ye.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Z.top === 0 && Z.left === 0 && Z.right === 0 && Z.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: q.top + bu(q, u.vertical),
      left: q.left + xu(q, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, f]), H = g.useCallback((F) => ({
    vertical: bu(F, b.vertical),
    horizontal: xu(F, b.horizontal)
  }), [b.horizontal, b.vertical]), le = g.useCallback((F) => {
    const ye = {
      width: F.offsetWidth,
      height: F.offsetHeight
    }, q = H(ye);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Eu(q)
      };
    const Z = U();
    let Ne = Z.top - q.vertical, de = Z.left - q.horizontal;
    const We = Ne + ye.height, Ve = de + ye.width, Ae = An(No(c)), Se = Ae.innerHeight - v, Be = Ae.innerWidth - v;
    if (Ne < v) {
      const Re = Ne - v;
      Ne -= Re, q.vertical += Re;
    } else if (We > Se) {
      const Re = We - Se;
      Ne -= Re, q.vertical += Re;
    }
    if (process.env.NODE_ENV !== "production" && ye.height > Se && ye.height && Se && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ye.height - Se}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), de < v) {
      const Re = de - v;
      de -= Re, q.horizontal += Re;
    } else if (Ve > Be) {
      const Re = Ve - Be;
      de -= Re, q.horizontal += Re;
    }
    return {
      top: `${Math.round(Ne)}px`,
      left: `${Math.round(de)}px`,
      transformOrigin: Eu(q)
    };
  }, [c, f, U, H, v]), [ne, M] = g.useState(O), Y = g.useCallback(() => {
    const F = V.current;
    if (!F)
      return;
    const ye = le(F);
    ye.top !== null && (F.style.top = ye.top), ye.left !== null && (F.style.left = ye.left), F.style.transformOrigin = ye.transformOrigin, M(!0);
  }, [le]), re = (F, ye) => {
    A && A(F, ye), Y();
  }, ee = () => {
    M(!1);
  };
  g.useEffect(() => {
    O && Y();
  }), g.useImperativeHandle(l, () => O ? {
    updatePosition: () => {
      Y();
    }
  } : null, [O, Y]), g.useEffect(() => {
    if (!O)
      return;
    const F = uc(() => {
      Y();
    }), ye = An(c);
    return ye.addEventListener("resize", F), () => {
      F.clear(), ye.removeEventListener("resize", F);
    };
  }, [c, O, Y]);
  let G = P;
  P === "auto" && !R.muiSupportAuto && (G = void 0);
  const X = m || (c ? mt(No(c)).body : void 0), J = (o = E == null ? void 0 : E.root) != null ? o : Xw, Q = (a = E == null ? void 0 : E.paper) != null ? a : uf, oe = _n({
    elementType: Q,
    externalSlotProps: S({}, k, {
      style: ne ? k.style : S({}, k.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: y,
      ref: W
    },
    ownerState: j,
    className: ge(_.paper, k == null ? void 0 : k.className)
  }), ae = _n({
    elementType: J,
    externalSlotProps: (x == null ? void 0 : x.root) || {},
    externalForwardedProps: N,
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
    ownerState: j,
    className: ge(_.root, h)
  }), {
    slotProps: fe
  } = ae, se = ve(ae, Gw);
  return /* @__PURE__ */ T.jsx(J, S({}, se, !Qr(J) && {
    slotProps: fe
  }, {
    children: /* @__PURE__ */ T.jsx(R, S({
      appear: !0,
      in: O,
      onEntering: re,
      onExited: ee,
      timeout: G
    }, B, {
      children: /* @__PURE__ */ T.jsx(Q, S({}, oe, {
        children: p
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (cf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Dt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Zt(i.oneOfType([Yt, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = No(e.anchorEl);
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
  anchorOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: i.shape({
    left: i.number.isRequired,
    top: i.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: i.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Yt, i.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Ua,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * @default 16
   */
  marginThreshold: i.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: i.shape({
    component: Ba
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
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
  transformOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: i.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object
});
const Jw = cf;
function Zw(e) {
  return Ue("MuiMenu", e);
}
ze("MuiMenu", ["root", "paper", "list"]);
const eS = ["onEntering"], tS = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], nS = {
  vertical: "top",
  horizontal: "right"
}, rS = {
  vertical: "top",
  horizontal: "left"
}, oS = (e) => {
  const {
    classes: t
  } = e;
  return He({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Zw, t);
}, iS = he(Jw, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), aS = he(uf, {
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
}), sS = he(Iw, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), df = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o;
  const a = Ye({
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
    PopoverClasses: m,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: v
    } = {},
    variant: O = "selectedMenu",
    slots: C = {},
    slotProps: E = {}
  } = a, x = ve(a.TransitionProps, eS), b = ve(a, tS), R = fr(), P = R.direction === "rtl", A = S({}, a, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: v,
    PaperProps: h,
    transitionDuration: y,
    TransitionProps: x,
    variant: O
  }), B = oS(A), N = s && !u && p, k = g.useRef(null), V = (ne, M) => {
    k.current && k.current.adjustStyleForScrollbar(ne, R), v && v(ne, M);
  }, W = (ne) => {
    ne.key === "Tab" && (ne.preventDefault(), f && f(ne, "tabKeyDown"));
  };
  let j = -1;
  g.Children.map(l, (ne, M) => {
    /* @__PURE__ */ g.isValidElement(ne) && (process.env.NODE_ENV !== "production" && Hr.isFragment(ne) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), ne.props.disabled || (O === "selectedMenu" && ne.props.selected || j === -1) && (j = M));
  });
  const _ = (r = C.paper) != null ? r : aS, U = (o = E.paper) != null ? o : h, H = _n({
    elementType: C.root,
    externalSlotProps: E.root,
    ownerState: A,
    className: [B.root, c]
  }), le = _n({
    elementType: _,
    externalSlotProps: U,
    ownerState: A,
    className: B.paper
  });
  return /* @__PURE__ */ T.jsx(iS, S({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: P ? "right" : "left"
    },
    transformOrigin: P ? nS : rS,
    slots: {
      paper: _,
      root: C.root
    },
    slotProps: {
      root: H,
      paper: le
    },
    open: p,
    ref: n,
    transitionDuration: y,
    TransitionProps: S({
      onEntering: V
    }, x),
    ownerState: A
  }, b, {
    classes: m,
    children: /* @__PURE__ */ T.jsx(sS, S({
      onKeyDown: W,
      actions: k,
      autoFocus: s && (j === -1 || u),
      autoFocusItem: N,
      variant: O
    }, d, {
      className: ge(B.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (df.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([Yt, i.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: i.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: i.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: i.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: i.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: i.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
const lS = df;
function uS(e) {
  return Ue("MuiNativeSelect", e);
}
const cS = ze("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Cs = cS, dS = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], fS = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${pe(n)}`, a && "iconOpen", r && "disabled"]
  };
  return He(l, uS, t);
}, ff = ({
  ownerState: e,
  theme: t
}) => S({
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
  "&:focus": S({}, t.vars ? {
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
  [`&.${Cs.disabled}`]: {
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
}), pS = he("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: gn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Cs.multiple}`]: t.multiple
    }];
  }
})(ff), pf = ({
  ownerState: e,
  theme: t
}) => S({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Cs.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), mS = he("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${pe(n.variant)}`], n.open && t.iconOpen];
  }
})(pf), mf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: a,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ve(t, dS), d = S({}, t, {
    disabled: o,
    variant: c,
    error: a
  }), f = fS(d);
  return /* @__PURE__ */ T.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ T.jsx(pS, S({
      ownerState: d,
      className: ge(f.select, r),
      disabled: o,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ T.jsx(mS, {
      as: s,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (mf.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Dt,
  /**
   * @ignore
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
const hS = mf;
function yS(e) {
  return Ue("MuiSelect", e);
}
const vS = ze("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Ir = vS;
var Ou;
const gS = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], bS = he("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Ir.select}`]: t.select
      },
      {
        [`&.${Ir.select}`]: t[n.variant]
      },
      {
        [`&.${Ir.error}`]: t.error
      },
      {
        [`&.${Ir.multiple}`]: t.multiple
      }
    ];
  }
})(ff, {
  // Win specificity over the input base
  [`&.${Ir.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), xS = he("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${pe(n.variant)}`], n.open && t.iconOpen];
  }
})(pf), ES = he("input", {
  shouldForwardProp: (e) => Yh(e) && e !== "classes",
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
function OS(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const wS = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${pe(n)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return He(l, yS, t);
}, hf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: a,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: p,
    error: h = !1,
    IconComponent: m,
    inputRef: y,
    labelId: v,
    MenuProps: O = {},
    multiple: C,
    name: E,
    onBlur: x,
    onChange: b,
    onClose: R,
    onFocus: P,
    onOpen: A,
    open: B,
    readOnly: N,
    renderValue: k,
    SelectDisplayProps: V = {},
    tabIndex: W,
    value: j,
    variant: _ = "standard"
  } = t, U = ve(t, gS), [H, le] = Mr({
    controlled: j,
    default: d,
    name: "Select"
  }), [ne, M] = Mr({
    controlled: B,
    default: u,
    name: "Select"
  }), Y = g.useRef(null), re = g.useRef(null), [ee, G] = g.useState(null), {
    current: X
  } = g.useRef(B != null), [J, Q] = g.useState(), oe = st(n, y), ae = g.useCallback((ce) => {
    re.current = ce, ce && G(ce);
  }, []), fe = ee == null ? void 0 : ee.parentNode;
  g.useImperativeHandle(oe, () => ({
    focus: () => {
      re.current.focus();
    },
    node: Y.current,
    value: H
  }), [H]), g.useEffect(() => {
    u && ne && ee && !X && (Q(s ? null : fe.clientWidth), re.current.focus());
  }, [ee, s]), g.useEffect(() => {
    a && re.current.focus();
  }, [a]), g.useEffect(() => {
    if (!v)
      return;
    const ce = mt(re.current).getElementById(v);
    if (ce) {
      const be = () => {
        getSelection().isCollapsed && re.current.focus();
      };
      return ce.addEventListener("click", be), () => {
        ce.removeEventListener("click", be);
      };
    }
  }, [v]);
  const se = (ce, be) => {
    ce ? A && A(be) : R && R(be), X || (Q(s ? null : fe.clientWidth), M(ce));
  }, F = (ce) => {
    ce.button === 0 && (ce.preventDefault(), re.current.focus(), se(!0, ce));
  }, ye = (ce) => {
    se(!1, ce);
  }, q = g.Children.toArray(l), Z = (ce) => {
    const be = q.find(($e) => $e.props.value === ce.target.value);
    be !== void 0 && (le(be.props.value), b && b(ce, be));
  }, Ne = (ce) => (be) => {
    let $e;
    if (be.currentTarget.hasAttribute("tabindex")) {
      if (C) {
        $e = Array.isArray(H) ? H.slice() : [];
        const Je = H.indexOf(ce.props.value);
        Je === -1 ? $e.push(ce.props.value) : $e.splice(Je, 1);
      } else
        $e = ce.props.value;
      if (ce.props.onClick && ce.props.onClick(be), H !== $e && (le($e), b)) {
        const Je = be.nativeEvent || be, rn = new Je.constructor(Je.type, Je);
        Object.defineProperty(rn, "target", {
          writable: !0,
          value: {
            value: $e,
            name: E
          }
        }), b(rn, ce);
      }
      C || se(!1, be);
    }
  }, de = (ce) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ce.key) !== -1 && (ce.preventDefault(), se(!0, ce));
  }, We = ee !== null && ne, Ve = (ce) => {
    !We && x && (Object.defineProperty(ce, "target", {
      writable: !0,
      value: {
        value: H,
        name: E
      }
    }), x(ce));
  };
  delete U["aria-invalid"];
  let Ae, Se;
  const Be = [];
  let Re = !1, Qe = !1;
  (zo({
    value: H
  }) || p) && (k ? Ae = k(H) : Re = !0);
  const Xe = q.map((ce) => {
    if (!/* @__PURE__ */ g.isValidElement(ce))
      return null;
    process.env.NODE_ENV !== "production" && Hr.isFragment(ce) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let be;
    if (C) {
      if (!Array.isArray(H))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : mn(2));
      be = H.some(($e) => wu($e, ce.props.value)), be && Re && Be.push(ce.props.children);
    } else
      be = wu(H, ce.props.value), be && Re && (Se = ce.props.children);
    return be && (Qe = !0), /* @__PURE__ */ g.cloneElement(ce, {
      "aria-selected": be ? "true" : "false",
      onClick: Ne(ce),
      onKeyUp: ($e) => {
        $e.key === " " && $e.preventDefault(), ce.props.onKeyUp && ce.props.onKeyUp($e);
      },
      role: "option",
      selected: be,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ce.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && g.useEffect(() => {
    if (!Qe && !C && H !== "") {
      const ce = q.map((be) => be.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${H}\` for the select ${E ? `(name="${E}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ce.filter((be) => be != null).map((be) => `\`${be}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Qe, q, C, E, H]), Re && (C ? Be.length === 0 ? Ae = null : Ae = Be.reduce((ce, be, $e) => (ce.push(be), $e < Be.length - 1 && ce.push(", "), ce), []) : Ae = Se);
  let et = J;
  !s && X && ee && (et = fe.clientWidth);
  let Pe;
  typeof W < "u" ? Pe = W : Pe = f ? null : 0;
  const me = V.id || (E ? `mui-component-select-${E}` : void 0), ue = S({}, t, {
    variant: _,
    value: H,
    open: We,
    error: h
  }), rt = wS(ue);
  return /* @__PURE__ */ T.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ T.jsx(bS, S({
      ref: ae,
      tabIndex: Pe,
      role: "button",
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": We ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [v, me].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: de,
      onMouseDown: f || N ? null : F,
      onBlur: Ve,
      onFocus: P
    }, V, {
      ownerState: ue,
      className: ge(V.className, rt.select, c),
      id: me,
      children: OS(Ae) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ou || (Ou = /* @__PURE__ */ T.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ae
    })), /* @__PURE__ */ T.jsx(ES, S({
      "aria-invalid": h,
      value: Array.isArray(H) ? H.join(",") : H,
      name: E,
      ref: Y,
      "aria-hidden": !0,
      onChange: Z,
      tabIndex: -1,
      disabled: f,
      className: rt.nativeInput,
      autoFocus: a,
      ownerState: ue
    }, U)), /* @__PURE__ */ T.jsx(xS, {
      as: m,
      className: rt.icon,
      ownerState: ue
    }), /* @__PURE__ */ T.jsx(lS, S({
      id: `menu-${E || ""}`,
      anchorEl: fe,
      open: We,
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
      MenuListProps: S({
        "aria-labelledby": v,
        role: "listbox",
        disableListWrap: !0
      }, O.MenuListProps),
      PaperProps: S({}, O.PaperProps, {
        style: S({
          minWidth: et
        }, O.PaperProps != null ? O.PaperProps.style : null)
      }),
      children: Xe
    }))]
  });
});
process.env.NODE_ENV !== "production" && (hf.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * @ignore
   */
  "aria-label": i.string,
  /**
   * @ignore
   */
  autoFocus: i.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Dt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * @ignore
   */
  readOnly: i.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  type: i.any,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
const SS = hf, TS = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], CS = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Rs = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => gn(e) && e !== "variant",
  slot: "Root"
}, RS = he(Hd, Rs)(""), PS = he(Gd, Rs)(""), $S = he(Yd, Rs)(""), Ps = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = zd,
    id: f,
    input: p,
    inputProps: h,
    label: m,
    labelId: y,
    MenuProps: v,
    multiple: O = !1,
    native: C = !1,
    onClose: E,
    onOpen: x,
    open: b,
    renderValue: R,
    SelectDisplayProps: P,
    variant: A = "outlined"
  } = r, B = ve(r, TS), N = C ? hS : SS, k = vr(), V = yr({
    props: r,
    muiFormControl: k,
    states: ["variant", "error"]
  }), W = V.variant || A, j = S({}, r, {
    variant: W,
    classes: s
  }), _ = CS(j), U = p || {
    standard: /* @__PURE__ */ T.jsx(RS, {
      ownerState: j
    }),
    outlined: /* @__PURE__ */ T.jsx(PS, {
      label: m,
      ownerState: j
    }),
    filled: /* @__PURE__ */ T.jsx($S, {
      ownerState: j
    })
  }[W], H = st(n, U.ref);
  return /* @__PURE__ */ T.jsx(g.Fragment, {
    children: /* @__PURE__ */ g.cloneElement(U, S({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: S({
        children: a,
        error: V.error,
        IconComponent: d,
        variant: W,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: O
      }, C ? {
        id: f
      } : {
        autoWidth: o,
        defaultOpen: c,
        displayEmpty: u,
        labelId: y,
        MenuProps: v,
        onClose: E,
        onOpen: x,
        open: b,
        renderValue: R,
        SelectDisplayProps: S({
          id: f
        }, P)
      }, h, {
        classes: h ? Pt(_, h.classes) : _
      }, p ? p.props.inputProps : {})
    }, O && C && W === "outlined" ? {
      notched: !0
    } : {}, {
      ref: H,
      className: ge(U.props.className, l)
    }, !p && {
      variant: W
    }, B))
  });
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
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
  displayEmpty: i.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: i.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: i.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: i.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: i.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: i.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: i.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: i.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: i.oneOfType([i.oneOf([""]), i.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
Ps.muiName = "Select";
const IS = Ps;
function NS(e) {
  return Ue("MuiTextField", e);
}
ze("MuiTextField", ["root"]);
const AS = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], kS = {
  standard: Hd,
  filled: Yd,
  outlined: Gd
}, MS = (e) => {
  const {
    classes: t
  } = e;
  return He({
    root: ["root"]
  }, NS, t);
}, _S = he(yw, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), yf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ye({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: a = !1,
    children: s,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: p,
    fullWidth: h = !1,
    helperText: m,
    id: y,
    InputLabelProps: v,
    inputProps: O,
    InputProps: C,
    inputRef: E,
    label: x,
    maxRows: b,
    minRows: R,
    multiline: P = !1,
    name: A,
    onBlur: B,
    onChange: N,
    onClick: k,
    onFocus: V,
    placeholder: W,
    required: j = !1,
    rows: _,
    select: U = !1,
    SelectProps: H,
    type: le,
    value: ne,
    variant: M = "outlined"
  } = r, Y = ve(r, AS), re = S({}, r, {
    autoFocus: a,
    color: c,
    disabled: d,
    error: f,
    fullWidth: h,
    multiline: P,
    required: j,
    select: U,
    variant: M
  }), ee = MS(re);
  process.env.NODE_ENV !== "production" && U && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const G = {};
  M === "outlined" && (v && typeof v.shrink < "u" && (G.notched = v.shrink), G.label = x), U && ((!H || !H.native) && (G.id = void 0), G["aria-describedby"] = void 0);
  const X = cc(y), J = m && X ? `${X}-helper-text` : void 0, Q = x && X ? `${X}-label` : void 0, oe = kS[M], ae = /* @__PURE__ */ T.jsx(oe, S({
    "aria-describedby": J,
    autoComplete: o,
    autoFocus: a,
    defaultValue: u,
    fullWidth: h,
    multiline: P,
    name: A,
    rows: _,
    maxRows: b,
    minRows: R,
    type: le,
    value: ne,
    id: X,
    inputRef: E,
    onBlur: B,
    onChange: N,
    onFocus: V,
    onClick: k,
    placeholder: W,
    inputProps: O
  }, G, C));
  return /* @__PURE__ */ T.jsxs(_S, S({
    className: ge(ee.root, l),
    disabled: d,
    error: f,
    fullWidth: h,
    ref: n,
    required: j,
    color: c,
    variant: M,
    ownerState: re
  }, Y, {
    children: [x != null && x !== "" && /* @__PURE__ */ T.jsx(dw, S({
      htmlFor: X,
      id: Q
    }, v, {
      children: x
    })), U ? /* @__PURE__ */ T.jsx(IS, S({
      "aria-describedby": J,
      id: X,
      labelId: Q,
      value: ne,
      input: ae
    }, H, {
      children: s
    })) : ae, m && /* @__PURE__ */ T.jsx(Ow, S({
      id: J
    }, p, {
      children: m
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (yf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * @ignore
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: i.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The helper text content.
   */
  helperText: i.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: i.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: i.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: i.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * The label content.
   */
  label: i.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: i.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: i.object,
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
const DS = yf;
var jS = (e) => e.type === "checkbox", FS = (e) => e instanceof Date, vf = (e) => e == null;
const LS = (e) => typeof e == "object";
var gr = (e) => !vf(e) && !Array.isArray(e) && LS(e) && !FS(e), BS = (e) => gr(e) && e.target ? jS(e.target) ? e.target.checked : e.target.value : e, US = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, WS = (e, t) => e.has(US(t)), VS = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return gr(t) && t.hasOwnProperty("isPrototypeOf");
}, zS = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function $s(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(zS && (e instanceof Blob || e instanceof FileList)) && (n || gr(e)))
    if (t = n ? [] : {}, !n && !VS(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = $s(e[r]));
  else
    return e;
  return t;
}
var gf = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Ia = (e) => e === void 0, xt = (e, t, n) => {
  if (!t || !gr(e))
    return n;
  const r = gf(t.split(/[,[\].]+?/)).reduce((o, a) => vf(o) ? o : o[a], e);
  return Ia(r) || r === e ? Ia(e[t]) ? n : e[t] : r;
};
const Su = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Na = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, qS = Oe.createContext(null), Is = () => Oe.useContext(qS);
var HS = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Na.all && (t._proxyFormState[s] = !r || Na.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, YS = (e) => gr(e) && !Object.keys(e).length, KS = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return YS(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Na.all));
}, GS = (e) => Array.isArray(e) ? e : [e], bf = (e, t, n) => n && t ? e === t : !e || !t || e === t || GS(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function xf(e) {
  const t = Oe.useRef(e);
  t.current = e, Oe.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function QS(e) {
  const t = Is(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, l] = Oe.useState(n._formState), c = Oe.useRef(!0), u = Oe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = Oe.useRef(o);
  return d.current = o, xf({
    disabled: r,
    next: (f) => c.current && bf(d.current, f.name, a) && KS(f, u.current, n._updateFormState) && l({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), Oe.useEffect(() => (c.current = !0, u.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), HS(s, n, u.current, !1);
}
var XS = (e) => typeof e == "string", JS = (e, t, n, r, o) => XS(e) ? (r && t.watch.add(e), xt(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), xt(n, a))) : (r && (t.watchAll = !0), n);
function ZS(e) {
  const t = Is(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, l = Oe.useRef(r);
  l.current = r, xf({
    disabled: a,
    subject: n._subjects.values,
    next: (d) => {
      bf(l.current, d.name, s) && u($s(JS(l.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [c, u] = Oe.useState(n._getWatch(r, o));
  return Oe.useEffect(() => n._removeUnmounted()), c;
}
var eT = (e) => /^\w*$/.test(e), tT = (e) => gf(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Tu(e, t, n) {
  let r = -1;
  const o = eT(t) ? [t] : tT(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const l = o[r];
    let c = n;
    if (r !== s) {
      const u = e[l];
      c = gr(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    e[l] = c, e = e[l];
  }
  return e;
}
function nT(e) {
  const t = Is(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = WS(r._names.array, n), s = ZS({
    control: r,
    name: n,
    defaultValue: xt(r._formValues, n, xt(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = QS({
    control: r,
    name: n
  }), c = Oe.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), Oe.useEffect(() => {
    const u = r._options.shouldUnregister || o, d = (f, p) => {
      const h = xt(r._fields, f);
      h && (h._f.mount = p);
    };
    if (d(n, !0), u) {
      const f = $s(xt(r._options.defaultValues, n));
      Tu(r._defaultValues, n, f), Ia(xt(r._formValues, n)) && Tu(r._formValues, n, f);
    }
    return () => {
      (a ? u && !r._state.action : u) ? r.unregister(n) : d(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: Oe.useCallback((u) => c.current.onChange({
        target: {
          value: BS(u),
          name: n
        },
        type: Su.CHANGE
      }), [n]),
      onBlur: Oe.useCallback(() => c.current.onBlur({
        target: {
          value: xt(r._formValues, n),
          name: n
        },
        type: Su.BLUR
      }), [n, r]),
      ref: (u) => {
        const d = xt(r._fields, n);
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
        get: () => !!xt(l.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!xt(l.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!xt(l.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => xt(l.errors, n)
      }
    })
  };
}
const co = (e) => e.render(nT(e)), rT = Id(), oT = (e) => {
  const {
    control: t,
    options: n = [],
    labelText: r,
    name: o,
    multiple: a = !1,
    required: s,
    onCreateNew: l,
    renderLabel: c,
    fetchFunction: u
  } = e, [d, f] = _t(n), [p, h] = _t(""), { isLoading: m, refetch: y } = Zc(["options"], {
    queryFn: () => u({
      filter: {
        query: p
      }
    }),
    enabled: !1
  });
  ko(() => {
    const x = setTimeout(() => {
      if (p) {
        y().then(({ data: b }) => {
          f(b.data);
        });
        return;
      }
      f([]);
    }, 500);
    return () => clearTimeout(x);
  }, [p, y]);
  const v = (x, b, R) => {
    b && b.inputValue ? l && l(b.inputValue) : (x.target.value = (b == null ? void 0 : b.id) ?? null, R(x));
  }, O = (x) => typeof x == "string" ? x : x.inputValue ? x.inputValue : c ? c(x) : x.name, C = (x, b) => /* @__PURE__ */ T.jsx("li", { ...x, children: c ? c(b) : b.name }), E = (x, b) => {
    const R = rT(x, b), P = String(b.inputValue).trim(), A = R.length === 0;
    return l && P !== "" && (A || !x.find((B) => B.name === P)) && R.push({
      inputValue: P,
      name: `Agregar "${P}"`
    }), R;
  };
  return /* @__PURE__ */ T.jsx(eo, { fullWidth: !0, children: /* @__PURE__ */ T.jsx(
    co,
    {
      control: t,
      name: o,
      render: ({ field: { ref: x, onChange: b, value: R, ...P } }) => /* @__PURE__ */ T.jsx(
        jO,
        {
          multiple: a,
          value: d.find((A) => A.id === Number(R)) ? d.find((A) => A.id === Number(R)).name : "",
          onChange: (A, B) => v(A, B, b),
          onKeyDown: (A) => h(A.target.value),
          filterOptions: E,
          options: d,
          selectOnFocus: !0,
          clearOnBlur: !0,
          handleHomeEndKeys: !0,
          getOptionLabel: O,
          renderOption: C,
          freeSolo: !0,
          renderInput: (A) => /* @__PURE__ */ T.jsx(
            DS,
            {
              ...A,
              ...P,
              inputRef: x,
              required: s,
              name: o,
              label: r,
              InputProps: {
                ...A.InputProps,
                endAdornment: /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
                  m ? /* @__PURE__ */ T.jsx(qu, { color: "inherit", size: 20 }) : null,
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
oT.propTypes = {
  control: i.any,
  options: i.array,
  labelText: i.string,
  name: i.string,
  multiple: i.bool,
  required: i.bool,
  onCreateNew: i.func,
  renderLabel: i.func,
  fetchFunction: i.func
};
const iT = ({ control: e, defaultChecked: t = !1, name: n, labelText: r = "", labelPlacement: o = "end", ...a }) => /* @__PURE__ */ T.jsx(eo, { children: /* @__PURE__ */ T.jsx(
  co,
  {
    control: e,
    name: n,
    defaultValue: t,
    render: ({ field: s }) => /* @__PURE__ */ T.jsx(
      Yu,
      {
        labelPlacement: o,
        control: /* @__PURE__ */ T.jsx(
          Yf,
          {
            ref: s.ref,
            onChange: (l) => s.onChange(l.target.checked),
            checked: !!s.value,
            name: n,
            ...a
          }
        ),
        label: r
      }
    )
  }
) });
iT.propTypes = {
  control: i.object.isRequired,
  defaultChecked: i.bool,
  name: i.string.isRequired,
  labelText: i.string,
  fullWidth: i.bool,
  labelPlacement: i.string
};
function aT(e = []) {
  return e.map((t) => /* @__PURE__ */ T.jsx(Qf, { value: t.id, children: t.name }, t.id));
}
const Ef = ({ control: e, data: t, name: n, labelText: r = "", required: o = !1, disabled: a = !1, render: s, ...l }) => {
  const c = Uf(), u = s || aT;
  return /* @__PURE__ */ T.jsxs(eo, { fullWidth: !0, children: [
    /* @__PURE__ */ T.jsx(Kf, { id: c, required: o, disabled: a, children: r }),
    /* @__PURE__ */ T.jsx(
      co,
      {
        control: e,
        name: n,
        render: ({ field: { onChange: d, onBlur: f, value: p, name: h, ref: m } }) => /* @__PURE__ */ T.jsx(
          Gf,
          {
            required: o,
            labelId: c,
            label: r,
            onBlur: f,
            onChange: d,
            inputRef: m,
            value: p || "",
            name: h,
            disabled: a,
            ...l,
            children: t.length > 0 && u(t)
          }
        )
      }
    )
  ] });
};
Ef.propTypes = {
  control: i.object.isRequired,
  data: i.array,
  name: i.string.isRequired,
  labelText: i.string,
  createOption: i.func,
  required: i.bool,
  disabled: i.bool,
  render: i.func
};
Ef.defaultProps = {
  data: []
};
const sT = ({
  control: e,
  name: t,
  labelText: n = "",
  required: r,
  fullWidth: o = !0,
  InputProps: a,
  InputLabelProps: s,
  parentRef: l,
  multiline: c,
  rows: u,
  helperText: d,
  ...f
}) => /* @__PURE__ */ T.jsx(eo, { fullWidth: o, ...f, children: /* @__PURE__ */ T.jsx(
  co,
  {
    control: e,
    name: t,
    render: ({ field: { onChange: p, onBlur: h, value: m, name: y, ref: v } }) => /* @__PURE__ */ T.jsx(
      Xf,
      {
        helperText: d,
        multiline: c,
        rows: u,
        required: r,
        label: n,
        onBlur: h,
        onChange: p,
        inputRef: l || v,
        value: m || "",
        name: y,
        InputProps: a,
        InputLabelProps: s,
        ...f
      }
    )
  }
) });
sT.propTypes = {
  control: i.object.isRequired,
  name: i.string.isRequired,
  labelText: i.string,
  ref: i.object,
  required: i.bool,
  fullWidth: i.bool,
  multiline: i.bool,
  rows: i.number,
  helperText: i.string,
  InputProps: i.object,
  InputLabelProps: i.object,
  parentRef: i.object
};
const lT = ({ control: e, defaultChecked: t = !1, name: n, labelText: r = "", labelPlacement: o = "end", ...a }) => /* @__PURE__ */ T.jsx(eo, { children: /* @__PURE__ */ T.jsx(
  co,
  {
    control: e,
    name: n,
    defaultValue: t,
    render: ({ field: s }) => /* @__PURE__ */ T.jsx(
      Yu,
      {
        labelPlacement: o,
        control: /* @__PURE__ */ T.jsx(
          Jf,
          {
            ref: s.ref,
            onChange: (l) => s.onChange(l.target.checked),
            checked: !!s.value,
            name: n,
            ...a
          }
        ),
        label: r
      }
    )
  }
) });
lT.propTypes = {
  control: i.object.isRequired,
  defaultChecked: i.bool,
  name: i.string.isRequired,
  labelText: i.string,
  fullWidth: i.bool,
  labelPlacement: i.string
};
const Of = Zf({
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
var uT = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var o = 42;
  t[n] = o;
  for (n in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = Object.getOwnPropertyDescriptor(t, n);
    if (s.value !== o || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, Cu = typeof Symbol < "u" && Symbol, cT = uT, dT = function() {
  return typeof Cu != "function" || typeof Symbol != "function" || typeof Cu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : cT();
}, Ru = {
  foo: {}
}, fT = Object, pT = function() {
  return { __proto__: Ru }.foo === Ru.foo && !({ __proto__: null } instanceof fT);
}, mT = "Function.prototype.bind called on incompatible ", qi = Array.prototype.slice, hT = Object.prototype.toString, yT = "[object Function]", vT = function(t) {
  var n = this;
  if (typeof n != "function" || hT.call(n) !== yT)
    throw new TypeError(mT + n);
  for (var r = qi.call(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var d = n.apply(
        this,
        r.concat(qi.call(arguments))
      );
      return Object(d) === d ? d : this;
    } else
      return n.apply(
        t,
        r.concat(qi.call(arguments))
      );
  }, s = Math.max(0, n.length - r.length), l = [], c = 0; c < s; c++)
    l.push("$" + c);
  if (o = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, gT = vT, Ns = Function.prototype.bind || gT, bT = Ns, xT = bT.call(Function.call, Object.prototype.hasOwnProperty), Te, lr = SyntaxError, wf = Function, nr = TypeError, Hi = function(e) {
  try {
    return wf('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, In = Object.getOwnPropertyDescriptor;
if (In)
  try {
    In({}, "");
  } catch {
    In = null;
  }
var Yi = function() {
  throw new nr();
}, ET = In ? function() {
  try {
    return arguments.callee, Yi;
  } catch {
    try {
      return In(arguments, "callee").get;
    } catch {
      return Yi;
    }
  }
}() : Yi, Gn = dT(), OT = pT(), at = Object.getPrototypeOf || (OT ? function(e) {
  return e.__proto__;
} : null), Jn = {}, wT = typeof Uint8Array > "u" || !at ? Te : at(Uint8Array), Nn = {
  "%AggregateError%": typeof AggregateError > "u" ? Te : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Te : ArrayBuffer,
  "%ArrayIteratorPrototype%": Gn && at ? at([][Symbol.iterator]()) : Te,
  "%AsyncFromSyncIteratorPrototype%": Te,
  "%AsyncFunction%": Jn,
  "%AsyncGenerator%": Jn,
  "%AsyncGeneratorFunction%": Jn,
  "%AsyncIteratorPrototype%": Jn,
  "%Atomics%": typeof Atomics > "u" ? Te : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Te : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Te : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Te : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Te : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? Te : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Te : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Te : FinalizationRegistry,
  "%Function%": wf,
  "%GeneratorFunction%": Jn,
  "%Int8Array%": typeof Int8Array > "u" ? Te : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Te : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Te : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Gn && at ? at(at([][Symbol.iterator]())) : Te,
  "%JSON%": typeof JSON == "object" ? JSON : Te,
  "%Map%": typeof Map > "u" ? Te : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Gn || !at ? Te : at((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Te : Promise,
  "%Proxy%": typeof Proxy > "u" ? Te : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? Te : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Te : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Gn || !at ? Te : at((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Te : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Gn && at ? at(""[Symbol.iterator]()) : Te,
  "%Symbol%": Gn ? Symbol : Te,
  "%SyntaxError%": lr,
  "%ThrowTypeError%": ET,
  "%TypedArray%": wT,
  "%TypeError%": nr,
  "%Uint8Array%": typeof Uint8Array > "u" ? Te : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Te : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Te : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Te : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? Te : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Te : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Te : WeakSet
};
if (at)
  try {
    null.error;
  } catch (e) {
    var ST = at(at(e));
    Nn["%Error.prototype%"] = ST;
  }
var TT = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = Hi("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = Hi("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = Hi("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && at && (n = at(o.prototype));
  }
  return Nn[t] = n, n;
}, Pu = {
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
}, fo = Ns, Ho = xT, CT = fo.call(Function.call, Array.prototype.concat), RT = fo.call(Function.apply, Array.prototype.splice), $u = fo.call(Function.call, String.prototype.replace), Yo = fo.call(Function.call, String.prototype.slice), PT = fo.call(Function.call, RegExp.prototype.exec), $T = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, IT = /\\(\\)?/g, NT = function(t) {
  var n = Yo(t, 0, 1), r = Yo(t, -1);
  if (n === "%" && r !== "%")
    throw new lr("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new lr("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return $u(t, $T, function(a, s, l, c) {
    o[o.length] = l ? $u(c, IT, "$1") : s || a;
  }), o;
}, AT = function(t, n) {
  var r = t, o;
  if (Ho(Pu, r) && (o = Pu[r], r = "%" + o[0] + "%"), Ho(Nn, r)) {
    var a = Nn[r];
    if (a === Jn && (a = TT(r)), typeof a > "u" && !n)
      throw new nr("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: a
    };
  }
  throw new lr("intrinsic " + t + " does not exist!");
}, As = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new nr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new nr('"allowMissing" argument must be a boolean');
  if (PT(/^%?[^%]*%?$/, t) === null)
    throw new lr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = NT(t), o = r.length > 0 ? r[0] : "", a = AT("%" + o + "%", n), s = a.name, l = a.value, c = !1, u = a.alias;
  u && (o = u[0], RT(r, CT([0, 1], u)));
  for (var d = 1, f = !0; d < r.length; d += 1) {
    var p = r[d], h = Yo(p, 0, 1), m = Yo(p, -1);
    if ((h === '"' || h === "'" || h === "`" || m === '"' || m === "'" || m === "`") && h !== m)
      throw new lr("property names with quotes must have matching quotes");
    if ((p === "constructor" || !f) && (c = !0), o += "." + p, s = "%" + o + "%", Ho(Nn, s))
      l = Nn[s];
    else if (l != null) {
      if (!(p in l)) {
        if (!n)
          throw new nr("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (In && d + 1 >= r.length) {
        var y = In(l, p);
        f = !!y, f && "get" in y && !("originalValue" in y.get) ? l = y.get : l = l[p];
      } else
        f = Ho(l, p), l = l[p];
      f && !c && (Nn[s] = l);
    }
  }
  return l;
}, Sf = { exports: {} };
(function(e) {
  var t = Ns, n = As, r = n("%Function.prototype.apply%"), o = n("%Function.prototype.call%"), a = n("%Reflect.apply%", !0) || t.call(o, r), s = n("%Object.getOwnPropertyDescriptor%", !0), l = n("%Object.defineProperty%", !0), c = n("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
    }
  e.exports = function(f) {
    var p = a(t, o, arguments);
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
})(Sf);
var kT = Sf.exports, Tf = As, Cf = kT, MT = Cf(Tf("String.prototype.indexOf")), _T = function(t, n) {
  var r = Tf(t, !!n);
  return typeof r == "function" && MT(t, ".prototype.") > -1 ? Cf(r) : r;
};
const DT = {}, jT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DT
}, Symbol.toStringTag, { value: "Module" })), FT = /* @__PURE__ */ sp(jT);
var ks = typeof Map == "function" && Map.prototype, Ki = Object.getOwnPropertyDescriptor && ks ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ko = ks && Ki && typeof Ki.get == "function" ? Ki.get : null, Iu = ks && Map.prototype.forEach, Ms = typeof Set == "function" && Set.prototype, Gi = Object.getOwnPropertyDescriptor && Ms ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Go = Ms && Gi && typeof Gi.get == "function" ? Gi.get : null, Nu = Ms && Set.prototype.forEach, LT = typeof WeakMap == "function" && WeakMap.prototype, Ur = LT ? WeakMap.prototype.has : null, BT = typeof WeakSet == "function" && WeakSet.prototype, Wr = BT ? WeakSet.prototype.has : null, UT = typeof WeakRef == "function" && WeakRef.prototype, Au = UT ? WeakRef.prototype.deref : null, WT = Boolean.prototype.valueOf, VT = Object.prototype.toString, zT = Function.prototype.toString, qT = String.prototype.match, _s = String.prototype.slice, dn = String.prototype.replace, HT = String.prototype.toUpperCase, ku = String.prototype.toLowerCase, Rf = RegExp.prototype.test, Mu = Array.prototype.concat, Bt = Array.prototype.join, YT = Array.prototype.slice, _u = Math.floor, Aa = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Qi = Object.getOwnPropertySymbols, ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ur = typeof Symbol == "function" && typeof Symbol.iterator == "object", ft = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ur || "symbol") ? Symbol.toStringTag : null, Pf = Object.prototype.propertyIsEnumerable, Du = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function ju(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Rf.call(/e/, t))
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -_u(-e) : _u(e);
    if (r !== e) {
      var o = String(r), a = _s.call(t, o.length + 1);
      return dn.call(o, n, "$&_") + "." + dn.call(dn.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return dn.call(t, n, "$&_");
}
var Ma = FT, Fu = Ma.custom, Lu = If(Fu) ? Fu : null, KT = function e(t, n, r, o) {
  var a = n || {};
  if (un(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (un(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = un(a, "customInspect") ? a.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (un(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (un(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Af(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return l ? ju(t, c) : c;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return l ? ju(t, u) : u;
  }
  var d = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof r > "u" && (r = 0), r >= d && d > 0 && typeof t == "object")
    return _a(t) ? "[Array]" : "[Object]";
  var f = fC(a, r);
  if (typeof o > "u")
    o = [];
  else if (Nf(o, t) >= 0)
    return "[Circular]";
  function p(W, j, _) {
    if (j && (o = YT.call(o), o.push(j)), _) {
      var U = {
        depth: a.depth
      };
      return un(a, "quoteStyle") && (U.quoteStyle = a.quoteStyle), e(W, U, r + 1, o);
    }
    return e(W, a, r + 1, o);
  }
  if (typeof t == "function" && !Bu(t)) {
    var h = rC(t), m = bo(t, p);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (m.length > 0 ? " { " + Bt.call(m, ", ") + " }" : "");
  }
  if (If(t)) {
    var y = ur ? dn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : ka.call(t);
    return typeof t == "object" && !ur ? Nr(y) : y;
  }
  if (uC(t)) {
    for (var v = "<" + ku.call(String(t.nodeName)), O = t.attributes || [], C = 0; C < O.length; C++)
      v += " " + O[C].name + "=" + $f(GT(O[C].value), "double", a);
    return v += ">", t.childNodes && t.childNodes.length && (v += "..."), v += "</" + ku.call(String(t.nodeName)) + ">", v;
  }
  if (_a(t)) {
    if (t.length === 0)
      return "[]";
    var E = bo(t, p);
    return f && !dC(E) ? "[" + Da(E, f) + "]" : "[ " + Bt.call(E, ", ") + " ]";
  }
  if (XT(t)) {
    var x = bo(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !Pf.call(t, "cause") ? "{ [" + String(t) + "] " + Bt.call(Mu.call("[cause]: " + p(t.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Bt.call(x, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (Lu && typeof t[Lu] == "function" && Ma)
      return Ma(t, { depth: d - r });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (oC(t)) {
    var b = [];
    return Iu && Iu.call(t, function(W, j) {
      b.push(p(j, t, !0) + " => " + p(W, t));
    }), Uu("Map", Ko.call(t), b, f);
  }
  if (sC(t)) {
    var R = [];
    return Nu && Nu.call(t, function(W) {
      R.push(p(W, t));
    }), Uu("Set", Go.call(t), R, f);
  }
  if (iC(t))
    return Xi("WeakMap");
  if (lC(t))
    return Xi("WeakSet");
  if (aC(t))
    return Xi("WeakRef");
  if (ZT(t))
    return Nr(p(Number(t)));
  if (tC(t))
    return Nr(p(Aa.call(t)));
  if (eC(t))
    return Nr(WT.call(t));
  if (JT(t))
    return Nr(p(String(t)));
  if (!QT(t) && !Bu(t)) {
    var P = bo(t, p), A = Du ? Du(t) === Object.prototype : t instanceof Object || t.constructor === Object, B = t instanceof Object ? "" : "null prototype", N = !A && ft && Object(t) === t && ft in t ? _s.call(En(t), 8, -1) : B ? "Object" : "", k = A || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", V = k + (N || B ? "[" + Bt.call(Mu.call([], N || [], B || []), ": ") + "] " : "");
    return P.length === 0 ? V + "{}" : f ? V + "{" + Da(P, f) + "}" : V + "{ " + Bt.call(P, ", ") + " }";
  }
  return String(t);
};
function $f(e, t, n) {
  var r = (n.quoteStyle || t) === "double" ? '"' : "'";
  return r + e + r;
}
function GT(e) {
  return dn.call(String(e), /"/g, "&quot;");
}
function _a(e) {
  return En(e) === "[object Array]" && (!ft || !(typeof e == "object" && ft in e));
}
function QT(e) {
  return En(e) === "[object Date]" && (!ft || !(typeof e == "object" && ft in e));
}
function Bu(e) {
  return En(e) === "[object RegExp]" && (!ft || !(typeof e == "object" && ft in e));
}
function XT(e) {
  return En(e) === "[object Error]" && (!ft || !(typeof e == "object" && ft in e));
}
function JT(e) {
  return En(e) === "[object String]" && (!ft || !(typeof e == "object" && ft in e));
}
function ZT(e) {
  return En(e) === "[object Number]" && (!ft || !(typeof e == "object" && ft in e));
}
function eC(e) {
  return En(e) === "[object Boolean]" && (!ft || !(typeof e == "object" && ft in e));
}
function If(e) {
  if (ur)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !ka)
    return !1;
  try {
    return ka.call(e), !0;
  } catch {
  }
  return !1;
}
function tC(e) {
  if (!e || typeof e != "object" || !Aa)
    return !1;
  try {
    return Aa.call(e), !0;
  } catch {
  }
  return !1;
}
var nC = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function un(e, t) {
  return nC.call(e, t);
}
function En(e) {
  return VT.call(e);
}
function rC(e) {
  if (e.name)
    return e.name;
  var t = qT.call(zT.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Nf(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] === t)
      return n;
  return -1;
}
function oC(e) {
  if (!Ko || !e || typeof e != "object")
    return !1;
  try {
    Ko.call(e);
    try {
      Go.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function iC(e) {
  if (!Ur || !e || typeof e != "object")
    return !1;
  try {
    Ur.call(e, Ur);
    try {
      Wr.call(e, Wr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function aC(e) {
  if (!Au || !e || typeof e != "object")
    return !1;
  try {
    return Au.call(e), !0;
  } catch {
  }
  return !1;
}
function sC(e) {
  if (!Go || !e || typeof e != "object")
    return !1;
  try {
    Go.call(e);
    try {
      Ko.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function lC(e) {
  if (!Wr || !e || typeof e != "object")
    return !1;
  try {
    Wr.call(e, Wr);
    try {
      Ur.call(e, Ur);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function uC(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Af(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Af(_s.call(e, 0, t.maxStringLength), t) + r;
  }
  var o = dn.call(dn.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, cC);
  return $f(o, "single", t);
}
function cC(e) {
  var t = e.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + HT.call(t.toString(16));
}
function Nr(e) {
  return "Object(" + e + ")";
}
function Xi(e) {
  return e + " { ? }";
}
function Uu(e, t, n, r) {
  var o = r ? Da(n, r) : Bt.call(n, ", ");
  return e + " (" + t + ") {" + o + "}";
}
function dC(e) {
  for (var t = 0; t < e.length; t++)
    if (Nf(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function fC(e, t) {
  var n;
  if (e.indent === "	")
    n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = Bt.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Bt.call(Array(t + 1), n)
  };
}
function Da(e, t) {
  if (e.length === 0)
    return "";
  var n = `
` + t.prev + t.base;
  return n + Bt.call(e, "," + n) + `
` + t.prev;
}
function bo(e, t) {
  var n = _a(e), r = [];
  if (n) {
    r.length = e.length;
    for (var o = 0; o < e.length; o++)
      r[o] = un(e, o) ? t(e[o], e) : "";
  }
  var a = typeof Qi == "function" ? Qi(e) : [], s;
  if (ur) {
    s = {};
    for (var l = 0; l < a.length; l++)
      s["$" + a[l]] = a[l];
  }
  for (var c in e)
    un(e, c) && (n && String(Number(c)) === c && c < e.length || ur && s["$" + c] instanceof Symbol || (Rf.call(/[^\w$]/, c) ? r.push(t(c, e) + ": " + t(e[c], e)) : r.push(c + ": " + t(e[c], e))));
  if (typeof Qi == "function")
    for (var u = 0; u < a.length; u++)
      Pf.call(e, a[u]) && r.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
  return r;
}
var Ds = As, br = _T, pC = KT, mC = Ds("%TypeError%"), xo = Ds("%WeakMap%", !0), Eo = Ds("%Map%", !0), hC = br("WeakMap.prototype.get", !0), yC = br("WeakMap.prototype.set", !0), vC = br("WeakMap.prototype.has", !0), gC = br("Map.prototype.get", !0), bC = br("Map.prototype.set", !0), xC = br("Map.prototype.has", !0), js = function(e, t) {
  for (var n = e, r; (r = n.next) !== null; n = r)
    if (r.key === t)
      return n.next = r.next, r.next = e.next, e.next = r, r;
}, EC = function(e, t) {
  var n = js(e, t);
  return n && n.value;
}, OC = function(e, t, n) {
  var r = js(e, t);
  r ? r.value = n : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: n
  };
}, wC = function(e, t) {
  return !!js(e, t);
}, SC = function() {
  var t, n, r, o = {
    assert: function(a) {
      if (!o.has(a))
        throw new mC("Side channel does not contain " + pC(a));
    },
    get: function(a) {
      if (xo && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return hC(t, a);
      } else if (Eo) {
        if (n)
          return gC(n, a);
      } else if (r)
        return EC(r, a);
    },
    has: function(a) {
      if (xo && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return vC(t, a);
      } else if (Eo) {
        if (n)
          return xC(n, a);
      } else if (r)
        return wC(r, a);
      return !1;
    },
    set: function(a, s) {
      xo && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new xo()), yC(t, a, s)) : Eo ? (n || (n = new Eo()), bC(n, a, s)) : (r || (r = { key: {}, next: null }), OC(r, a, s));
    }
  };
  return o;
}, TC = String.prototype.replace, CC = /%20/g, Ji = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Fs = {
  default: Ji.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return TC.call(e, CC, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Ji.RFC1738,
  RFC3986: Ji.RFC3986
}, RC = Fs, Zi = Object.prototype.hasOwnProperty, Rn = Array.isArray, Ft = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), PC = function(t) {
  for (; t.length > 1; ) {
    var n = t.pop(), r = n.obj[n.prop];
    if (Rn(r)) {
      for (var o = [], a = 0; a < r.length; ++a)
        typeof r[a] < "u" && o.push(r[a]);
      n.obj[n.prop] = o;
    }
  }
}, kf = function(t, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < t.length; ++o)
    typeof t[o] < "u" && (r[o] = t[o]);
  return r;
}, $C = function e(t, n, r) {
  if (!n)
    return t;
  if (typeof n != "object") {
    if (Rn(t))
      t.push(n);
    else if (t && typeof t == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Zi.call(Object.prototype, n)) && (t[n] = !0);
    else
      return [t, n];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(n);
  var o = t;
  return Rn(t) && !Rn(n) && (o = kf(t, r)), Rn(t) && Rn(n) ? (n.forEach(function(a, s) {
    if (Zi.call(t, s)) {
      var l = t[s];
      l && typeof l == "object" && a && typeof a == "object" ? t[s] = e(l, a, r) : t.push(a);
    } else
      t[s] = a;
  }), t) : Object.keys(n).reduce(function(a, s) {
    var l = n[s];
    return Zi.call(a, s) ? a[s] = e(a[s], l, r) : a[s] = l, a;
  }, o);
}, IC = function(t, n) {
  return Object.keys(n).reduce(function(r, o) {
    return r[o] = n[o], r;
  }, t);
}, NC = function(e, t, n) {
  var r = e.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, AC = function(t, n, r, o, a) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), r === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(d) {
      return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
    });
  for (var l = "", c = 0; c < s.length; ++c) {
    var u = s.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === RC.RFC1738 && (u === 40 || u === 41)) {
      l += s.charAt(c);
      continue;
    }
    if (u < 128) {
      l = l + Ft[u];
      continue;
    }
    if (u < 2048) {
      l = l + (Ft[192 | u >> 6] + Ft[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      l = l + (Ft[224 | u >> 12] + Ft[128 | u >> 6 & 63] + Ft[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | s.charCodeAt(c) & 1023), l += Ft[240 | u >> 18] + Ft[128 | u >> 12 & 63] + Ft[128 | u >> 6 & 63] + Ft[128 | u & 63];
  }
  return l;
}, kC = function(t) {
  for (var n = [{ obj: { o: t }, prop: "o" }], r = [], o = 0; o < n.length; ++o)
    for (var a = n[o], s = a.obj[a.prop], l = Object.keys(s), c = 0; c < l.length; ++c) {
      var u = l[c], d = s[u];
      typeof d == "object" && d !== null && r.indexOf(d) === -1 && (n.push({ obj: s, prop: u }), r.push(d));
    }
  return PC(n), t;
}, MC = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, _C = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, DC = function(t, n) {
  return [].concat(t, n);
}, jC = function(t, n) {
  if (Rn(t)) {
    for (var r = [], o = 0; o < t.length; o += 1)
      r.push(n(t[o]));
    return r;
  }
  return n(t);
}, Mf = {
  arrayToObject: kf,
  assign: IC,
  combine: DC,
  compact: kC,
  decode: NC,
  encode: AC,
  isBuffer: _C,
  isRegExp: MC,
  maybeMap: jC,
  merge: $C
}, _f = SC, Ao = Mf, Vr = Fs, FC = Object.prototype.hasOwnProperty, Wu = {
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
}, Xt = Array.isArray, LC = Array.prototype.push, Df = function(e, t) {
  LC.apply(e, Xt(t) ? t : [t]);
}, BC = Date.prototype.toISOString, Vu = Vr.default, dt = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Ao.encode,
  encodeValuesOnly: !1,
  format: Vu,
  formatter: Vr.formatters[Vu],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return BC.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, UC = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, ea = {}, WC = function e(t, n, r, o, a, s, l, c, u, d, f, p, h, m, y, v) {
  for (var O = t, C = v, E = 0, x = !1; (C = C.get(ea)) !== void 0 && !x; ) {
    var b = C.get(t);
    if (E += 1, typeof b < "u") {
      if (b === E)
        throw new RangeError("Cyclic object value");
      x = !0;
    }
    typeof C.get(ea) > "u" && (E = 0);
  }
  if (typeof c == "function" ? O = c(n, O) : O instanceof Date ? O = f(O) : r === "comma" && Xt(O) && (O = Ao.maybeMap(O, function(U) {
    return U instanceof Date ? f(U) : U;
  })), O === null) {
    if (a)
      return l && !m ? l(n, dt.encoder, y, "key", p) : n;
    O = "";
  }
  if (UC(O) || Ao.isBuffer(O)) {
    if (l) {
      var R = m ? n : l(n, dt.encoder, y, "key", p);
      return [h(R) + "=" + h(l(O, dt.encoder, y, "value", p))];
    }
    return [h(n) + "=" + h(String(O))];
  }
  var P = [];
  if (typeof O > "u")
    return P;
  var A;
  if (r === "comma" && Xt(O))
    m && l && (O = Ao.maybeMap(O, l)), A = [{ value: O.length > 0 ? O.join(",") || null : void 0 }];
  else if (Xt(c))
    A = c;
  else {
    var B = Object.keys(O);
    A = u ? B.sort(u) : B;
  }
  for (var N = o && Xt(O) && O.length === 1 ? n + "[]" : n, k = 0; k < A.length; ++k) {
    var V = A[k], W = typeof V == "object" && typeof V.value < "u" ? V.value : O[V];
    if (!(s && W === null)) {
      var j = Xt(O) ? typeof r == "function" ? r(N, V) : N : N + (d ? "." + V : "[" + V + "]");
      v.set(t, E);
      var _ = _f();
      _.set(ea, v), Df(P, e(
        W,
        j,
        r,
        o,
        a,
        s,
        r === "comma" && m && Xt(O) ? null : l,
        c,
        u,
        d,
        f,
        p,
        h,
        m,
        y,
        _
      ));
    }
  }
  return P;
}, VC = function(t) {
  if (!t)
    return dt;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = t.charset || dt.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Vr.default;
  if (typeof t.format < "u") {
    if (!FC.call(Vr.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    r = t.format;
  }
  var o = Vr.formatters[r], a = dt.filter;
  return (typeof t.filter == "function" || Xt(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : dt.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? dt.allowDots : !!t.allowDots,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : dt.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? dt.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : dt.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : dt.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : dt.encodeValuesOnly,
    filter: a,
    format: r,
    formatter: o,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : dt.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : dt.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : dt.strictNullHandling
  };
}, zC = function(e, t) {
  var n = e, r = VC(t), o, a;
  typeof r.filter == "function" ? (a = r.filter, n = a("", n)) : Xt(r.filter) && (a = r.filter, o = a);
  var s = [];
  if (typeof n != "object" || n === null)
    return "";
  var l;
  t && t.arrayFormat in Wu ? l = t.arrayFormat : t && "indices" in t ? l = t.indices ? "indices" : "repeat" : l = "indices";
  var c = Wu[l];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && t && t.commaRoundTrip;
  o || (o = Object.keys(n)), r.sort && o.sort(r.sort);
  for (var d = _f(), f = 0; f < o.length; ++f) {
    var p = o[f];
    r.skipNulls && n[p] === null || Df(s, WC(
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
  var h = s.join(r.delimiter), m = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), h.length > 0 ? m + h : "";
}, cr = Mf, ja = Object.prototype.hasOwnProperty, qC = Array.isArray, it = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: cr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, HC = function(e) {
  return e.replace(/&#(\d+);/g, function(t, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, jf = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, YC = "utf8=%26%2310003%3B", KC = "utf8=%E2%9C%93", GC = function(t, n) {
  var r = { __proto__: null }, o = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, s = o.split(n.delimiter, a), l = -1, c, u = n.charset;
  if (n.charsetSentinel)
    for (c = 0; c < s.length; ++c)
      s[c].indexOf("utf8=") === 0 && (s[c] === KC ? u = "utf-8" : s[c] === YC && (u = "iso-8859-1"), l = c, c = s.length);
  for (c = 0; c < s.length; ++c)
    if (c !== l) {
      var d = s[c], f = d.indexOf("]="), p = f === -1 ? d.indexOf("=") : f + 1, h, m;
      p === -1 ? (h = n.decoder(d, it.decoder, u, "key"), m = n.strictNullHandling ? null : "") : (h = n.decoder(d.slice(0, p), it.decoder, u, "key"), m = cr.maybeMap(
        jf(d.slice(p + 1), n),
        function(y) {
          return n.decoder(y, it.decoder, u, "value");
        }
      )), m && n.interpretNumericEntities && u === "iso-8859-1" && (m = HC(m)), d.indexOf("[]=") > -1 && (m = qC(m) ? [m] : m), ja.call(r, h) ? r[h] = cr.combine(r[h], m) : r[h] = m;
    }
  return r;
}, QC = function(e, t, n, r) {
  for (var o = r ? t : jf(t, n), a = e.length - 1; a >= 0; --a) {
    var s, l = e[a];
    if (l === "[]" && n.parseArrays)
      s = [].concat(o);
    else {
      s = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, u = parseInt(c, 10);
      !n.parseArrays && c === "" ? s = { 0: o } : !isNaN(u) && l !== c && String(u) === c && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (s = [], s[u] = o) : c !== "__proto__" && (s[c] = o);
    }
    o = s;
  }
  return o;
}, XC = function(t, n, r, o) {
  if (t) {
    var a = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, c = r.depth > 0 && s.exec(a), u = c ? a.slice(0, c.index) : a, d = [];
    if (u) {
      if (!r.plainObjects && ja.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      d.push(u);
    }
    for (var f = 0; r.depth > 0 && (c = l.exec(a)) !== null && f < r.depth; ) {
      if (f += 1, !r.plainObjects && ja.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      d.push(c[1]);
    }
    return c && d.push("[" + a.slice(c.index) + "]"), QC(d, n, r, o);
  }
}, JC = function(t) {
  if (!t)
    return it;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof t.charset > "u" ? it.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? it.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : it.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : it.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : it.arrayLimit,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : it.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : it.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : it.decoder,
    delimiter: typeof t.delimiter == "string" || cr.isRegExp(t.delimiter) ? t.delimiter : it.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : it.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : it.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : it.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : it.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : it.strictNullHandling
  };
}, ZC = function(e, t) {
  var n = JC(t);
  if (e === "" || e === null || typeof e > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof e == "string" ? GC(e, n) : e, o = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(r), s = 0; s < a.length; ++s) {
    var l = a[s], c = XC(l, r[l], n, typeof e == "string");
    o = cr.merge(o, c, n);
  }
  return n.allowSparse === !0 ? o : cr.compact(o);
}, eR = zC, tR = ZC, nR = Fs, rR = {
  formats: nR,
  parse: tR,
  stringify: eR
};
const zu = /* @__PURE__ */ tc(rR), oR = (e) => {
  var N;
  const {
    headCells: t,
    fetchRecords: n,
    queryKey: r,
    defaultOrderBy: o,
    defaultOrderDirection: a = St.DESC,
    defaultRowsPerPage: s = 10,
    Row: l,
    Toolbar: c,
    onDeleteItem: u = null,
    onEditItem: d = null,
    filters: f
  } = e, [p, h] = hd(), [m, y] = _t(o), [v, O] = _t(a), [C, E] = _t({
    ...zu.parse(p.toString()),
    per_page: s
  }), {
    data: x,
    isLoading: b,
    isFetching: R
  } = Zc({
    queryKey: [r, C],
    queryFn: () => n(C),
    onSuccess: () => {
      h(zu.stringify(C, { skipNulls: !0 }), { replace: !0 });
    }
  });
  ko(() => {
    E((k) => ({
      ...k,
      sort: {
        field: m,
        direction: v
      }
    }));
  }, [m, v]), ko(() => {
    E((k) => ({
      ...k,
      filter: f
    }));
  }, [f]);
  const P = (k, V) => {
    E({ ...C, page: ++V });
  }, A = (k) => {
    E({ ...C, per_page: k.target.value });
  }, B = (k, V) => {
    y(V), O(
      m === V && v === St.ASC ? St.DESC : St.ASC
    );
  };
  return /* @__PURE__ */ T.jsxs(Ku, { theme: Of, children: [
    c && /* @__PURE__ */ T.jsx(c, { setParams: E, params: C }),
    /* @__PURE__ */ T.jsx(Gu, { children: /* @__PURE__ */ T.jsxs(Qu, { children: [
      /* @__PURE__ */ T.jsx(
        Ls,
        {
          headCells: t,
          orderBy: m,
          orderDirection: v,
          handleSortRequest: B
        }
      ),
      /* @__PURE__ */ T.jsxs(Xu, { children: [
        (b || R) && /* @__PURE__ */ T.jsx(zr, { children: /* @__PURE__ */ T.jsx(qr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ T.jsx(dr, {}) }) }),
        ((N = x == null ? void 0 : x.data) == null ? void 0 : N.length) > 0 ? x.data.map((k) => /* @__PURE__ */ T.jsx(l, { data: k, onDeleteItem: u, onEditItem: d }, k.id)) : /* @__PURE__ */ T.jsx(zr, { children: /* @__PURE__ */ T.jsx(qr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ T.jsx(pn, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    x && /* @__PURE__ */ T.jsx(
      Ju,
      {
        component: "div",
        from: x.from,
        to: x.to,
        page: x.current_page - 1,
        rowsPerPage: x.per_page,
        count: x.total,
        onPageChange: P,
        onRowsPerPageChange: A,
        backIconButtonProps: {
          disabled: (x == null ? void 0 : x.current_page) === 1
        },
        nextIconButtonProps: {
          disabled: (x == null ? void 0 : x.current_page) === (x == null ? void 0 : x.last_page)
        }
      }
    )
  ] });
};
oR.propTypes = {
  headCells: i.array.isRequired,
  fetchRecords: i.func.isRequired,
  queryKey: i.string.isRequired,
  defaultOrderBy: i.string,
  defaultOrderDirection: i.oneOf([St.ASC, St.DESC]),
  defaultRowsPerPage: i.number,
  onDeleteItem: i.func,
  onEditItem: i.func,
  filters: i.object,
  Row: i.elementType.isRequired,
  Toolbar: i.elementType
};
const Ls = (e) => {
  const t = fr(), { orderBy: n, orderDirection: r, headCells: o, handleSortRequest: a } = e, s = (l) => (c) => {
    a(c, l);
  };
  return /* @__PURE__ */ T.jsx(ep, { sx: { backgroundColor: t.palette.table.header }, children: /* @__PURE__ */ T.jsx(zr, { children: o.map((l) => /* @__PURE__ */ T.jsx(qr, { component: "th", width: l.width, children: l.isSortable ? /* @__PURE__ */ T.jsx(
    tp,
    {
      active: n === l.id,
      direction: n === l.id ? r : "asc",
      onClick: s(l.id),
      children: l.label
    }
  ) : /* @__PURE__ */ T.jsx("span", { children: l.label }) }, l.id)) }) });
};
Ls.propTypes = {
  orderBy: i.string,
  orderDirection: i.string,
  headCells: i.array,
  handleSortRequest: i.func
};
const iR = (e) => {
  const {
    headCells: t,
    records: n = [],
    defaultRowsPerPage: r = 25,
    isLoading: o = !1,
    onDeleteItem: a = null,
    onEditItem: s = null,
    defaultOrderBy: l = "",
    customPropertiesComparator: c = null,
    defaultOrderDirection: u = St.ASC,
    Row: d
  } = e, [f, p] = _t(u), [h, m] = _t(l), [y, v] = _t(0), [O, C] = _t(r), E = (A, B) => {
    const N = h === B && f === St.ASC;
    p(N ? St.DESC : St.ASC), m(B);
  }, x = (A, B) => {
    v(B);
  }, b = (A) => {
    C(parseInt(A.target.value, 10)), v(0);
  }, P = (() => {
    const A = n.map((N, k) => [N, k]);
    return A.sort((N, k) => {
      const V = v0(N[0], k[0], h, f, c);
      return V !== 0 ? V : N[1] - k[1];
    }), A.map((N) => N[0]).slice(y * O, y * O + O);
  })();
  return /* @__PURE__ */ T.jsxs(Ku, { theme: Of, children: [
    /* @__PURE__ */ T.jsx(Gu, { children: /* @__PURE__ */ T.jsxs(Qu, { children: [
      /* @__PURE__ */ T.jsx(
        Ls,
        {
          headCells: t,
          orderBy: h,
          orderDirection: f,
          handleSortRequest: E
        }
      ),
      /* @__PURE__ */ T.jsxs(Xu, { children: [
        o && /* @__PURE__ */ T.jsx(zr, { children: /* @__PURE__ */ T.jsx(qr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ T.jsx(dr, {}) }) }),
        (P == null ? void 0 : P.length) > 0 ? P.map((A) => /* @__PURE__ */ T.jsx(d, { data: A, onDeleteItem: a, onEditItem: s }, A.id)) : /* @__PURE__ */ T.jsx(zr, { children: /* @__PURE__ */ T.jsx(qr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ T.jsx(pn, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ T.jsx(
      Ju,
      {
        rowsPerPage: O,
        page: y,
        count: n.length,
        component: "div",
        rowsPerPageOptions: [5, 10, 25, 50, 100],
        onPageChange: x,
        onRowsPerPageChange: b
      }
    )
  ] });
};
iR.propTypes = {
  headCells: i.array.isRequired,
  records: i.array,
  customPropertiesComparator: i.func,
  defaultRowsPerPage: i.number,
  isLoading: i.bool,
  onDeleteItem: i.func,
  onEditItem: i.func,
  defaultOrderBy: i.string,
  defaultOrderDirection: i.string,
  Row: i.elementType.isRequired
};
function aR(e) {
  const { children: t, value: n, index: r, ...o } = e;
  return /* @__PURE__ */ T.jsx("div", { role: "tabpanel", hidden: n !== r, ...o, children: n === r && t });
}
aR.propTypes = {
  index: i.number,
  value: i.any,
  children: i.node
};
const sR = ({ has: e, ...t }) => {
  const { user: n } = td();
  return yd(n, e) ? /* @__PURE__ */ T.jsx(np, { ...t }) : null;
};
sR.propTypes = {
  has: i.object
};
export {
  oT as AsyncAutocomplete,
  ed as AuthContext,
  _b as AuthProvider,
  bp as Avatar,
  oR as BackendTableContent,
  wc as Box,
  iT as Checkbox,
  b0 as ConfirmDialog,
  Hv as DateTime,
  x0 as ErrorDialog,
  dr as Loader,
  as as Modal,
  Yv as Money,
  Kv as PageHeader,
  g0 as Permission,
  sR as PermissionTab,
  Ef as Select,
  lT as Switch,
  aR as TabPanel,
  iR as TableContent,
  Ls as TableHeader,
  sT as TextField,
  v0 as genericDescendingComparator,
  yd as hasPermissions,
  St as sortOrderEnum,
  td as useAuth,
  mR as useTabs
};
