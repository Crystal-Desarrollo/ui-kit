import * as S from "react";
import ht, { useId as Ca, useState as tt, Children as Ii, isValidElement as Ur, cloneElement as Tr, createElement as Ea, useEffect as Ft, useRef as _i } from "react";
import { CircularProgress as Ln, Paper as Pa, Modal as ki, IconButton as Fn, Typography as Xe, Divider as wa, Stack as Be, Button as wr, Avatar as Ai, TableHead as Mi, TableRow as Rr, TableCell as Sr, TableSortLabel as Di, FormControl as Mr, InputLabel as Ra, Switch as Ni, TextField as Vn, Select as ji, MenuItem as Li, createTheme as Fi, ThemeProvider as Vi, TableContainer as Sa, Table as $a, TableBody as Ia, TablePagination as _a, FormControlLabel as zi, Checkbox as Bi, Tab as Wi, Slide as qi, ToggleButtonGroup as Ui, Chip as Hi } from "@mui/material";
import { Close as Yi, Report as ka } from "@mui/icons-material";
import { useFormContext as Bt, Controller as Wt, useForm as Ki, FormProvider as Gi } from "react-hook-form";
import { isValid as Gr, isDate as Xi, parseISO as Ji, parse as Qi, formatRelative as Zi, format as es } from "date-fns";
import { ThemeContext as ts, keyframes as zn } from "@emotion/react";
import rs from "@emotion/styled";
import * as ns from "react-dom";
import { useQuery as Aa } from "@tanstack/react-query";
import { useNavigate as os, useSearchParams as Ma } from "react-router-dom";
import Br from "qs";
import as from "axios";
function is(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Da(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Sn = { exports: {} }, hr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function ss() {
  if (To)
    return hr;
  To = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, m = {}, p = null, y = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (d in c)
      n.call(c, d) && !i.hasOwnProperty(d) && (m[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: t, type: l, key: p, ref: y, props: m, _owner: o.current };
  }
  return hr.Fragment = r, hr.jsx = s, hr.jsxs = s, hr;
}
var gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function ls() {
  return Co || (Co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = Symbol.iterator, g = "@@iterator";
    function h(f) {
      if (f === null || typeof f != "object")
        return null;
      var $ = O && f[O] || f[g];
      return typeof $ == "function" ? $ : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(f) {
      {
        for (var $ = arguments.length, j = new Array($ > 1 ? $ - 1 : 0), v = 1; v < $; v++)
          j[v - 1] = arguments[v];
        k("error", f, j);
      }
    }
    function k(f, $, j) {
      {
        var v = P.ReactDebugCurrentFrame, b = v.getStackAddendum();
        b !== "" && ($ += "%s", j = j.concat([b]));
        var E = j.map(function(_) {
          return String(_);
        });
        E.unshift("Warning: " + $), Function.prototype.apply.call(console[f], console, E);
      }
    }
    var C = !1, x = !1, A = !1, N = !1, G = !1, Y;
    Y = Symbol.for("react.module.reference");
    function M(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === i || G || f === o || f === u || f === d || N || f === y || C || x || A || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === m || f.$$typeof === s || f.$$typeof === l || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Y || f.getModuleId !== void 0));
    }
    function L(f, $, j) {
      var v = f.displayName;
      if (v)
        return v;
      var b = $.displayName || $.name || "";
      return b !== "" ? j + "(" + b + ")" : j;
    }
    function q(f) {
      return f.displayName || "Context";
    }
    function U(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            var $ = f;
            return q($) + ".Consumer";
          case s:
            var j = f;
            return q(j._context) + ".Provider";
          case c:
            return L(f, f.render, "ForwardRef");
          case m:
            var v = f.displayName || null;
            return v !== null ? v : U(f.type) || "Memo";
          case p: {
            var b = f, E = b._payload, _ = b._init;
            try {
              return U(_(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, J = 0, ee, se, le, de, w, F, oe;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function z() {
      {
        if (J === 0) {
          ee = console.log, se = console.info, le = console.warn, de = console.error, w = console.group, F = console.groupCollapsed, oe = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        J++;
      }
    }
    function re() {
      {
        if (J--, J === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, f, {
              value: ee
            }),
            info: Q({}, f, {
              value: se
            }),
            warn: Q({}, f, {
              value: le
            }),
            error: Q({}, f, {
              value: de
            }),
            group: Q({}, f, {
              value: w
            }),
            groupCollapsed: Q({}, f, {
              value: F
            }),
            groupEnd: Q({}, f, {
              value: oe
            })
          });
        }
        J < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = P.ReactCurrentDispatcher, W;
    function H(f, $, j) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (b) {
            var v = b.stack.trim().match(/\n( *(at )?)/);
            W = v && v[1] || "";
          }
        return `
` + W + f;
      }
    }
    var ne = !1, ie;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new fe();
    }
    function D(f, $) {
      if (!f || ne)
        return "";
      {
        var j = ie.get(f);
        if (j !== void 0)
          return j;
      }
      var v;
      ne = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = Z.current, Z.current = null, z();
      try {
        if ($) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (Tt) {
              v = Tt;
            }
            Reflect.construct(f, [], _);
          } else {
            try {
              _.call();
            } catch (Tt) {
              v = Tt;
            }
            f.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tt) {
            v = Tt;
          }
          f();
        }
      } catch (Tt) {
        if (Tt && v && typeof Tt.stack == "string") {
          for (var B = Tt.stack.split(`
`), ce = v.stack.split(`
`), ue = B.length - 1, he = ce.length - 1; ue >= 1 && he >= 0 && B[ue] !== ce[he]; )
            he--;
          for (; ue >= 1 && he >= 0; ue--, he--)
            if (B[ue] !== ce[he]) {
              if (ue !== 1 || he !== 1)
                do
                  if (ue--, he--, he < 0 || B[ue] !== ce[he]) {
                    var Fe = `
` + B[ue].replace(" at new ", " at ");
                    return f.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", f.displayName)), typeof f == "function" && ie.set(f, Fe), Fe;
                  }
                while (ue >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        ne = !1, Z.current = E, re(), Error.prepareStackTrace = b;
      }
      var Kt = f ? f.displayName || f.name : "", Oo = Kt ? H(Kt) : "";
      return typeof f == "function" && ie.set(f, Oo), Oo;
    }
    function we(f, $, j) {
      return D(f, !1);
    }
    function V(f) {
      var $ = f.prototype;
      return !!($ && $.isReactComponent);
    }
    function K(f, $, j) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return D(f, V(f));
      if (typeof f == "string")
        return H(f);
      switch (f) {
        case u:
          return H("Suspense");
        case d:
          return H("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return we(f.render);
          case m:
            return K(f.type, $, j);
          case p: {
            var v = f, b = v._payload, E = v._init;
            try {
              return K(E(b), $, j);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, pe = {}, We = P.ReactDebugCurrentFrame;
    function Me(f) {
      if (f) {
        var $ = f._owner, j = K(f.type, f._source, $ ? $.type : null);
        We.setExtraStackFrame(j);
      } else
        We.setExtraStackFrame(null);
    }
    function De(f, $, j, v, b) {
      {
        var E = Function.call.bind(Ae);
        for (var _ in f)
          if (E(f, _)) {
            var B = void 0;
            try {
              if (typeof f[_] != "function") {
                var ce = Error((v || "React class") + ": " + j + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              B = f[_]($, _, v, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              B = ue;
            }
            B && !(B instanceof Error) && (Me(b), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", j, _, typeof B), Me(null)), B instanceof Error && !(B.message in pe) && (pe[B.message] = !0, Me(b), I("Failed %s type: %s", j, B.message), Me(null));
          }
      }
    }
    var Le = Array.isArray;
    function Ne(f) {
      return Le(f);
    }
    function dt(f) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, j = $ && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return j;
      }
    }
    function He(f) {
      try {
        return ze(f), !1;
      } catch {
        return !0;
      }
    }
    function ze(f) {
      return "" + f;
    }
    function at(f) {
      if (He(f))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(f)), ze(f);
    }
    var Pe = P.ReactCurrentOwner, Ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, te, ft, it;
    it = {};
    function $t(f) {
      if (Ae.call(f, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(f, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function qe(f) {
      if (Ae.call(f, "key")) {
        var $ = Object.getOwnPropertyDescriptor(f, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Ye(f, $) {
      if (typeof f.ref == "string" && Pe.current && $ && Pe.current.stateNode !== $) {
        var j = U(Pe.current.type);
        it[j] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Pe.current.type), f.ref), it[j] = !0);
      }
    }
    function dr(f, $) {
      {
        var j = function() {
          te || (te = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        j.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function gt(f, $) {
      {
        var j = function() {
          ft || (ft = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        j.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var fr = function(f, $, j, v, b, E, _) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: $,
        ref: j,
        props: _,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function pt(f, $, j, v, b) {
      {
        var E, _ = {}, B = null, ce = null;
        j !== void 0 && (at(j), B = "" + j), qe($) && (at($.key), B = "" + $.key), $t($) && (ce = $.ref, Ye($, b));
        for (E in $)
          Ae.call($, E) && !Ce.hasOwnProperty(E) && (_[E] = $[E]);
        if (f && f.defaultProps) {
          var ue = f.defaultProps;
          for (E in ue)
            _[E] === void 0 && (_[E] = ue[E]);
        }
        if (B || ce) {
          var he = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          B && dr(_, he), ce && gt(_, he);
        }
        return fr(f, B, ce, b, v, Pe.current, _);
      }
    }
    var Ke = P.ReactCurrentOwner, Ze = P.ReactDebugCurrentFrame;
    function Ue(f) {
      if (f) {
        var $ = f._owner, j = K(f.type, f._source, $ ? $.type : null);
        Ze.setExtraStackFrame(j);
      } else
        Ze.setExtraStackFrame(null);
    }
    var mt;
    mt = !1;
    function Dt(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function It() {
      {
        if (Ke.current) {
          var f = U(Ke.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function qt(f) {
      {
        if (f !== void 0) {
          var $ = f.fileName.replace(/^.*[\\\/]/, ""), j = f.lineNumber;
          return `

Check your code at ` + $ + ":" + j + ".";
        }
        return "";
      }
    }
    var Ut = {};
    function pr(f) {
      {
        var $ = It();
        if (!$) {
          var j = typeof f == "string" ? f : f.displayName || f.name;
          j && ($ = `

Check the top-level render call using <` + j + ">.");
        }
        return $;
      }
    }
    function Ht(f, $) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var j = pr($);
        if (Ut[j])
          return;
        Ut[j] = !0;
        var v = "";
        f && f._owner && f._owner !== Ke.current && (v = " It was passed a child from " + U(f._owner.type) + "."), Ue(f), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, v), Ue(null);
      }
    }
    function _t(f, $) {
      {
        if (typeof f != "object")
          return;
        if (Ne(f))
          for (var j = 0; j < f.length; j++) {
            var v = f[j];
            Dt(v) && Ht(v, $);
          }
        else if (Dt(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var b = h(f);
          if (typeof b == "function" && b !== f.entries)
            for (var E = b.call(f), _; !(_ = E.next()).done; )
              Dt(_.value) && Ht(_.value, $);
        }
      }
    }
    function je(f) {
      {
        var $ = f.type;
        if ($ == null || typeof $ == "string")
          return;
        var j;
        if (typeof $ == "function")
          j = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === m))
          j = $.propTypes;
        else
          return;
        if (j) {
          var v = U($);
          De(j, f.props, "prop", v, f);
        } else if ($.PropTypes !== void 0 && !mt) {
          mt = !0;
          var b = U($);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ke(f) {
      {
        for (var $ = Object.keys(f.props), j = 0; j < $.length; j++) {
          var v = $[j];
          if (v !== "children" && v !== "key") {
            Ue(f), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Ue(null);
            break;
          }
        }
        f.ref !== null && (Ue(f), I("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
      }
    }
    function Ge(f, $, j, v, b, E) {
      {
        var _ = M(f);
        if (!_) {
          var B = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = qt(b);
          ce ? B += ce : B += It();
          var ue;
          f === null ? ue = "null" : Ne(f) ? ue = "array" : f !== void 0 && f.$$typeof === t ? (ue = "<" + (U(f.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof f, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, B);
        }
        var he = pt(f, $, j, b, E);
        if (he == null)
          return he;
        if (_) {
          var Fe = $.children;
          if (Fe !== void 0)
            if (v)
              if (Ne(Fe)) {
                for (var Kt = 0; Kt < Fe.length; Kt++)
                  _t(Fe[Kt], f);
                Object.freeze && Object.freeze(Fe);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _t(Fe, f);
        }
        return f === n ? ke(he) : je(he), he;
      }
    }
    function Vr(f, $, j) {
      return Ge(f, $, j, !0);
    }
    function Yt(f, $, j) {
      return Ge(f, $, j, !1);
    }
    var zr = Yt, mr = Vr;
    gr.Fragment = n, gr.jsx = zr, gr.jsxs = mr;
  }()), gr;
}
process.env.NODE_ENV === "production" ? Sn.exports = ss() : Sn.exports = ls();
var Bn = Sn.exports;
const Dr = Bn.Fragment, T = Bn.jsx, ge = Bn.jsxs, cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment: Dr,
  jsx: T,
  jsxs: ge
}, Symbol.toStringTag, { value: "Module" }));
var $n = { exports: {} }, Wr = { exports: {} }, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function us() {
  if (Eo)
    return be;
  Eo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function k(x) {
    if (typeof x == "object" && x !== null) {
      var A = x.$$typeof;
      switch (A) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case m:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case d:
                case O:
                case y:
                case s:
                  return x;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function C(x) {
    return k(x) === u;
  }
  return be.AsyncMode = c, be.ConcurrentMode = u, be.ContextConsumer = l, be.ContextProvider = s, be.Element = t, be.ForwardRef = d, be.Fragment = n, be.Lazy = O, be.Memo = y, be.Portal = r, be.Profiler = i, be.StrictMode = o, be.Suspense = m, be.isAsyncMode = function(x) {
    return C(x) || k(x) === c;
  }, be.isConcurrentMode = C, be.isContextConsumer = function(x) {
    return k(x) === l;
  }, be.isContextProvider = function(x) {
    return k(x) === s;
  }, be.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, be.isForwardRef = function(x) {
    return k(x) === d;
  }, be.isFragment = function(x) {
    return k(x) === n;
  }, be.isLazy = function(x) {
    return k(x) === O;
  }, be.isMemo = function(x) {
    return k(x) === y;
  }, be.isPortal = function(x) {
    return k(x) === r;
  }, be.isProfiler = function(x) {
    return k(x) === i;
  }, be.isStrictMode = function(x) {
    return k(x) === o;
  }, be.isSuspense = function(x) {
    return k(x) === m;
  }, be.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === u || x === i || x === o || x === m || x === p || typeof x == "object" && x !== null && (x.$$typeof === O || x.$$typeof === y || x.$$typeof === s || x.$$typeof === l || x.$$typeof === d || x.$$typeof === h || x.$$typeof === P || x.$$typeof === I || x.$$typeof === g);
  }, be.typeOf = k, be;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function ds() {
  return Po || (Po = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function k(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === i || D === o || D === m || D === p || typeof D == "object" && D !== null && (D.$$typeof === O || D.$$typeof === y || D.$$typeof === s || D.$$typeof === l || D.$$typeof === d || D.$$typeof === h || D.$$typeof === P || D.$$typeof === I || D.$$typeof === g);
    }
    function C(D) {
      if (typeof D == "object" && D !== null) {
        var we = D.$$typeof;
        switch (we) {
          case t:
            var V = D.type;
            switch (V) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case m:
                return V;
              default:
                var K = V && V.$$typeof;
                switch (K) {
                  case l:
                  case d:
                  case O:
                  case y:
                  case s:
                    return K;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var x = c, A = u, N = l, G = s, Y = t, M = d, L = n, q = O, U = y, Q = r, J = i, ee = o, se = m, le = !1;
    function de(D) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(D) || C(D) === c;
    }
    function w(D) {
      return C(D) === u;
    }
    function F(D) {
      return C(D) === l;
    }
    function oe(D) {
      return C(D) === s;
    }
    function X(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function z(D) {
      return C(D) === d;
    }
    function re(D) {
      return C(D) === n;
    }
    function Z(D) {
      return C(D) === O;
    }
    function W(D) {
      return C(D) === y;
    }
    function H(D) {
      return C(D) === r;
    }
    function ne(D) {
      return C(D) === i;
    }
    function ie(D) {
      return C(D) === o;
    }
    function fe(D) {
      return C(D) === m;
    }
    ye.AsyncMode = x, ye.ConcurrentMode = A, ye.ContextConsumer = N, ye.ContextProvider = G, ye.Element = Y, ye.ForwardRef = M, ye.Fragment = L, ye.Lazy = q, ye.Memo = U, ye.Portal = Q, ye.Profiler = J, ye.StrictMode = ee, ye.Suspense = se, ye.isAsyncMode = de, ye.isConcurrentMode = w, ye.isContextConsumer = F, ye.isContextProvider = oe, ye.isElement = X, ye.isForwardRef = z, ye.isFragment = re, ye.isLazy = Z, ye.isMemo = W, ye.isPortal = H, ye.isProfiler = ne, ye.isStrictMode = ie, ye.isSuspense = fe, ye.isValidElementType = k, ye.typeOf = C;
  }()), ye;
}
var wo;
function Na() {
  return wo || (wo = 1, process.env.NODE_ENV === "production" ? Wr.exports = us() : Wr.exports = ds()), Wr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var gn, Ro;
function fs() {
  if (Ro)
    return gn;
  Ro = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
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
  return gn = o() ? Object.assign : function(i, s) {
    for (var l, c = n(i), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var m in l)
        t.call(l, m) && (c[m] = l[m]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          r.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, gn;
}
var vn, So;
function Wn() {
  if (So)
    return vn;
  So = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return vn = e, vn;
}
var bn, $o;
function ja() {
  return $o || ($o = 1, bn = Function.call.bind(Object.prototype.hasOwnProperty)), bn;
}
var yn, Io;
function ps() {
  if (Io)
    return yn;
  Io = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Wn(), r = {}, n = ja();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var m;
          try {
            if (typeof i[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = i[d](s, d, c, l, null, t);
          } catch (O) {
            m = O;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, yn = o, yn;
}
var xn, _o;
function ms() {
  if (_o)
    return xn;
  _o = 1;
  var e = Na(), t = fs(), r = Wn(), n = ja(), o = ps(), i = function() {
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
  return xn = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(w) {
      var F = w && (u && w[u] || w[d]);
      if (typeof F == "function")
        return F;
    }
    var p = "<<anonymous>>", y = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: I(),
      arrayOf: k,
      element: C(),
      elementType: x(),
      instanceOf: A,
      node: M(),
      objectOf: G,
      oneOf: N,
      oneOfType: Y,
      shape: q,
      exact: U
    };
    function O(w, F) {
      return w === F ? w !== 0 || 1 / w === 1 / F : w !== w && F !== F;
    }
    function g(w, F) {
      this.message = w, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function h(w) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, oe = 0;
      function X(re, Z, W, H, ne, ie, fe) {
        if (H = H || p, ie = ie || W, fe !== r) {
          if (c) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = H + ":" + W;
            !F[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            oe < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + ie + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[we] = !0, oe++);
          }
        }
        return Z[W] == null ? re ? Z[W] === null ? new g("The " + ne + " `" + ie + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new g("The " + ne + " `" + ie + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : w(Z, W, H, ne, ie);
      }
      var z = X.bind(null, !1);
      return z.isRequired = X.bind(null, !0), z;
    }
    function P(w) {
      function F(oe, X, z, re, Z, W) {
        var H = oe[X], ne = ee(H);
        if (ne !== w) {
          var ie = se(H);
          return new g(
            "Invalid " + re + " `" + Z + "` of type " + ("`" + ie + "` supplied to `" + z + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return h(F);
    }
    function I() {
      return h(s);
    }
    function k(w) {
      function F(oe, X, z, re, Z) {
        if (typeof w != "function")
          return new g("Property `" + Z + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var W = oe[X];
        if (!Array.isArray(W)) {
          var H = ee(W);
          return new g("Invalid " + re + " `" + Z + "` of type " + ("`" + H + "` supplied to `" + z + "`, expected an array."));
        }
        for (var ne = 0; ne < W.length; ne++) {
          var ie = w(W, ne, z, re, Z + "[" + ne + "]", r);
          if (ie instanceof Error)
            return ie;
        }
        return null;
      }
      return h(F);
    }
    function C() {
      function w(F, oe, X, z, re) {
        var Z = F[oe];
        if (!l(Z)) {
          var W = ee(Z);
          return new g("Invalid " + z + " `" + re + "` of type " + ("`" + W + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(w);
    }
    function x() {
      function w(F, oe, X, z, re) {
        var Z = F[oe];
        if (!e.isValidElementType(Z)) {
          var W = ee(Z);
          return new g("Invalid " + z + " `" + re + "` of type " + ("`" + W + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(w);
    }
    function A(w) {
      function F(oe, X, z, re, Z) {
        if (!(oe[X] instanceof w)) {
          var W = w.name || p, H = de(oe[X]);
          return new g("Invalid " + re + " `" + Z + "` of type " + ("`" + H + "` supplied to `" + z + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return h(F);
    }
    function N(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function F(oe, X, z, re, Z) {
        for (var W = oe[X], H = 0; H < w.length; H++)
          if (O(W, w[H]))
            return null;
        var ne = JSON.stringify(w, function(fe, D) {
          var we = se(D);
          return we === "symbol" ? String(D) : D;
        });
        return new g("Invalid " + re + " `" + Z + "` of value `" + String(W) + "` " + ("supplied to `" + z + "`, expected one of " + ne + "."));
      }
      return h(F);
    }
    function G(w) {
      function F(oe, X, z, re, Z) {
        if (typeof w != "function")
          return new g("Property `" + Z + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var W = oe[X], H = ee(W);
        if (H !== "object")
          return new g("Invalid " + re + " `" + Z + "` of type " + ("`" + H + "` supplied to `" + z + "`, expected an object."));
        for (var ne in W)
          if (n(W, ne)) {
            var ie = w(W, ne, z, re, Z + "." + ne, r);
            if (ie instanceof Error)
              return ie;
          }
        return null;
      }
      return h(F);
    }
    function Y(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var F = 0; F < w.length; F++) {
        var oe = w[F];
        if (typeof oe != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(oe) + " at index " + F + "."
          ), s;
      }
      function X(z, re, Z, W, H) {
        for (var ne = [], ie = 0; ie < w.length; ie++) {
          var fe = w[ie], D = fe(z, re, Z, W, H, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && ne.push(D.data.expectedType);
        }
        var we = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new g("Invalid " + W + " `" + H + "` supplied to " + ("`" + Z + "`" + we + "."));
      }
      return h(X);
    }
    function M() {
      function w(F, oe, X, z, re) {
        return Q(F[oe]) ? null : new g("Invalid " + z + " `" + re + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return h(w);
    }
    function L(w, F, oe, X, z) {
      return new g(
        (w || "React class") + ": " + F + " type `" + oe + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function q(w) {
      function F(oe, X, z, re, Z) {
        var W = oe[X], H = ee(W);
        if (H !== "object")
          return new g("Invalid " + re + " `" + Z + "` of type `" + H + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var ne in w) {
          var ie = w[ne];
          if (typeof ie != "function")
            return L(z, re, Z, ne, se(ie));
          var fe = ie(W, ne, z, re, Z + "." + ne, r);
          if (fe)
            return fe;
        }
        return null;
      }
      return h(F);
    }
    function U(w) {
      function F(oe, X, z, re, Z) {
        var W = oe[X], H = ee(W);
        if (H !== "object")
          return new g("Invalid " + re + " `" + Z + "` of type `" + H + "` " + ("supplied to `" + z + "`, expected `object`."));
        var ne = t({}, oe[X], w);
        for (var ie in ne) {
          var fe = w[ie];
          if (n(w, ie) && typeof fe != "function")
            return L(z, re, Z, ie, se(fe));
          if (!fe)
            return new g(
              "Invalid " + re + " `" + Z + "` key `" + ie + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(oe[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var D = fe(W, ie, z, re, Z + "." + ie, r);
          if (D)
            return D;
        }
        return null;
      }
      return h(F);
    }
    function Q(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(Q);
          if (w === null || l(w))
            return !0;
          var F = m(w);
          if (F) {
            var oe = F.call(w), X;
            if (F !== w.entries) {
              for (; !(X = oe.next()).done; )
                if (!Q(X.value))
                  return !1;
            } else
              for (; !(X = oe.next()).done; ) {
                var z = X.value;
                if (z && !Q(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(w, F) {
      return w === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function ee(w) {
      var F = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : J(F, w) ? "symbol" : F;
    }
    function se(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var F = ee(w);
      if (F === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function le(w) {
      var F = se(w);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function de(w) {
      return !w.constructor || !w.constructor.name ? p : w.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, xn;
}
var On, ko;
function hs() {
  if (ko)
    return On;
  ko = 1;
  var e = Wn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, On = function() {
    function n(s, l, c, u, d, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, On;
}
if (process.env.NODE_ENV !== "production") {
  var gs = Na(), vs = !0;
  $n.exports = ms()(gs.isElement, vs);
} else
  $n.exports = hs()();
var bs = $n.exports;
const a = /* @__PURE__ */ is(bs), ur = ht.forwardRef(
  (e, t) => {
    const { size: r } = e;
    return /* @__PURE__ */ T(
      "div",
      {
        ref: t,
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
        onClick: (n) => n.stopPropagation(),
        children: /* @__PURE__ */ T(Ln, { size: r })
      }
    );
  }
);
ur.displayName = "Loader";
const ys = ({ sx: e, isLoading: t = !1, children: r = null, ...n }) => /* @__PURE__ */ ge(
  Pa,
  {
    sx: {
      display: "flex",
      flexDirection: "column",
      p: 2,
      position: "relative",
      ...e
    },
    ...n,
    children: [
      t && /* @__PURE__ */ T(ur, {}),
      r
    ]
  }
), qn = ({
  open: e,
  onClose: t,
  children: r,
  sx: n = null,
  disableCloseOnBackdropClick: o = !1,
  isLoading: i = !1,
  ...s
}) => {
  const l = (c, u) => {
    o && u === "backdropClick" || t(c, u);
  };
  return /* @__PURE__ */ T(
    ki,
    {
      disableAutoFocus: !0,
      open: e,
      onClose: l,
      style: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      ...s,
      children: /* @__PURE__ */ T(Dr, { children: /* @__PURE__ */ ge(
        ys,
        {
          isLoading: i,
          sx: {
            position: "relative",
            ...n
          },
          children: [
            /* @__PURE__ */ T(
              Fn,
              {
                onClick: l,
                sx: {
                  position: "absolute",
                  top: 2,
                  right: 2
                },
                children: /* @__PURE__ */ T(Yi, {})
              }
            ),
            r
          ]
        }
      ) })
    }
  );
};
qn.propTypes = {
  open: a.bool.isRequired,
  onClose: a.func.isRequired,
  children: a.node.isRequired,
  sx: a.object,
  disableCloseOnBackdropClick: a.bool,
  isLoading: a.bool
};
const xs = ({
  open: e,
  title: t,
  description: r,
  onConfirm: n,
  onCancel: o,
  isLoading: i = !1,
  error: s = null,
  children: l = null,
  cancelText: c,
  confirmText: u,
  sx: d = null
}) => {
  const m = () => {
    typeof n == "function" && n();
  }, p = () => {
    !i && o && o();
  };
  return /* @__PURE__ */ ge(
    qn,
    {
      open: e,
      onClose: p,
      sx: {
        margin: "0 auto",
        maxWidth: 400,
        ...d
      },
      children: [
        i && /* @__PURE__ */ T(ur, {}),
        /* @__PURE__ */ T(Xe, { fontWeight: "bold", variant: "h6", mb: 1, children: /* @__PURE__ */ T("strong", { children: t ?? "" }) }),
        /* @__PURE__ */ T(wa, { sx: { mb: 2 } }),
        /* @__PURE__ */ T(Be, { mb: 1, fontSize: 16, textAlign: "center", children: r ?? "" }),
        /* @__PURE__ */ ge(Be, { direction: "column", mb: 2, children: [
          l,
          s && /* @__PURE__ */ ge(Be, { alignItems: "center", direction: "row", mt: 1, children: [
            /* @__PURE__ */ T(
              ka,
              {
                color: "error",
                sx: { marginRight: ".5rem", fontSize: "2rem" }
              }
            ),
            /* @__PURE__ */ T(Xe, { color: "error", fontSize: "16px", children: typeof s == "string" ? s : "Ocurrió un error, intente nuevamente." })
          ] })
        ] }),
        /* @__PURE__ */ ge(Be, { direction: "row", justifyContent: "end", children: [
          /* @__PURE__ */ T(
            wr,
            {
              variant: "outlined",
              onClick: p,
              disabled: i,
              sx: { mr: 2 },
              children: c || "Cancelar"
            }
          ),
          /* @__PURE__ */ T(wr, { onClick: m, disabled: i, children: s ? "Reintentar" : u || "Confirmar" })
        ] })
      ]
    }
  );
};
xs.propTypes = {
  open: a.bool.isRequired,
  title: a.string,
  description: a.oneOfType([a.string, a.node]),
  onConfirm: a.func,
  onCancel: a.func,
  isLoading: a.bool,
  error: a.string,
  children: a.node,
  sx: a.object,
  cancelText: a.string,
  confirmText: a.string
};
const Os = ({ name: e, profilePicture: t, size: r = 120, sx: n, ...o }) => /* @__PURE__ */ T(
  Ai,
  {
    alt: e,
    src: t ?? "/default-avatar.png",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "bottom",
      width: r,
      height: r,
      fontSize: r / 2,
      ...n
    },
    ...o
  }
);
Os.propTypes = {
  profilePicture: a.string,
  size: a.number,
  sx: a.object,
  name: a.string
};
function Ts(e) {
  const { children: t, value: r, index: n } = e;
  return /* @__PURE__ */ T(Dr, { children: r === n && t });
}
Ts.propTypes = {
  index: a.number,
  value: a.any,
  children: a.node
};
const Un = (e) => {
  const { orderBy: t, orderDirection: r, headCells: n, handleSortRequest: o } = e, i = (s) => (l) => {
    o(l, s);
  };
  return /* @__PURE__ */ T(Mi, { sx: { backgroundColor: (s) => s.palette.table.header }, children: /* @__PURE__ */ T(Rr, { children: n.map((s) => /* @__PURE__ */ T(Sr, { component: "th", children: s.isSortable ? /* @__PURE__ */ T(
    Di,
    {
      active: t === s.id,
      direction: t === s.id ? r : "asc",
      onClick: i(s.id),
      children: s.label
    }
  ) : /* @__PURE__ */ T("span", { children: s.label }) }, s.id)) }) });
};
Un.propTypes = {
  orderBy: a.string,
  orderDirection: a.string,
  headCells: a.array,
  handleSortRequest: a.func
};
const Cs = ({
  defaultChecked: e = !1,
  name: t,
  labelText: r = "",
  leftText: n = "No",
  rightText: o = "Si",
  ...i
}) => {
  const s = Ca(), { control: l } = Bt();
  return /* @__PURE__ */ ge(Mr, { style: { marginTop: "8px", marginLeft: "4px" }, ...i, children: [
    /* @__PURE__ */ T(
      Ra,
      {
        id: s,
        shrink: !0,
        sx: {
          overflow: "visible",
          textOverflow: "initial",
          transform: "translate(0px, -12px)"
        },
        children: r
      }
    ),
    /* @__PURE__ */ T(
      Wt,
      {
        control: l,
        name: t,
        defaultValue: e,
        render: ({ field: c }) => /* @__PURE__ */ ge(
          Be,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "start",
            pt: 1,
            pl: 1,
            children: [
              /* @__PURE__ */ T(Xe, { variant: "caption", children: n }),
              /* @__PURE__ */ T(
                Ni,
                {
                  ref: c.ref,
                  onChange: (u) => c.onChange(u.target.checked),
                  checked: !!c.value,
                  name: t
                }
              ),
              /* @__PURE__ */ T(Xe, { variant: "caption", children: o })
            ]
          }
        )
      }
    )
  ] });
};
Cs.propTypes = {
  defaultChecked: a.bool,
  name: a.string.isRequired,
  labelText: a.string,
  leftText: a.string,
  rightText: a.string
};
const La = ({
  name: e,
  labelText: t = "",
  required: r = !1,
  fullWidth: n = !0,
  InputProps: o = null,
  InputLabelProps: i = null,
  parentRef: s = null,
  multiline: l = !1,
  rows: c = 1,
  helperText: u = "",
  ...d
}) => {
  const { control: m } = Bt();
  return /* @__PURE__ */ T(Mr, { fullWidth: n, ...d, children: /* @__PURE__ */ T(
    Wt,
    {
      control: m,
      name: e,
      render: ({ field: { onChange: p, onBlur: y, value: O, name: g, ref: h } }) => /* @__PURE__ */ T(
        Vn,
        {
          helperText: u,
          multiline: l,
          rows: c,
          required: r,
          label: t,
          onBlur: y,
          onChange: p,
          inputRef: s || h,
          value: O || "",
          name: g,
          InputProps: o,
          InputLabelProps: i,
          ...d
        }
      )
    }
  ) });
};
La.propTypes = {
  name: a.string.isRequired,
  labelText: a.string,
  ref: a.object,
  required: a.bool,
  fullWidth: a.bool,
  multiline: a.bool,
  rows: a.number,
  helperText: a.string,
  InputProps: a.object,
  InputLabelProps: a.object,
  parentRef: a.object
};
const Es = ({ open: e, onConfirm: t, children: r }) => {
  const n = () => {
    typeof t == "function" && t();
  };
  return /* @__PURE__ */ ge(
    qn,
    {
      open: e,
      onClose: n,
      style: {
        maxWidth: "400px"
      },
      children: [
        /* @__PURE__ */ T(Xe, { fontWeight: "bold", variant: "h6", mb: 1, color: "error", children: "Error" }),
        /* @__PURE__ */ T(wa, { sx: { mb: 2 } }),
        /* @__PURE__ */ T(Be, { direction: "column", mb: 2, children: r && /* @__PURE__ */ ge(Be, { alignItems: "center", children: [
          /* @__PURE__ */ T(ka, { color: "error", sx: { mb: "1rem", fontSize: "3rem" } }),
          /* @__PURE__ */ T(Xe, { color: "error", fontSize: "16px", textAlign: "center", children: r })
        ] }) }),
        /* @__PURE__ */ T(Be, { direction: "row", justifyContent: "end", children: /* @__PURE__ */ T(wr, { onClick: n, children: "Aceptar" }) })
      ]
    }
  );
};
Es.propTypes = {
  open: a.bool.isRequired,
  onConfirm: a.func,
  children: a.node
};
function Ps({ money: e, ...t }) {
  return /* @__PURE__ */ T(Xe, { component: "span", fontSize: 14, ...t, children: Number(e).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS"
  }) });
}
Ps.propTypes = {
  money: a.number.isRequired
};
const ws = ({ title: e, renderAside: t = null }) => /* @__PURE__ */ ge(
  Be,
  {
    display: "flex",
    direction: {
      xs: "column",
      sm: "row"
    },
    alignItems: "center",
    justifyContent: "space-between",
    children: [
      /* @__PURE__ */ T(Xe, { fontWeight: "bold", fontSize: 24, textAlign: "center", sx: { mb: { xs: 2, sm: 0 } }, children: e }),
      t && /* @__PURE__ */ T(Be, { children: t })
    ]
  }
);
ws.propTypes = {
  title: a.string.isRequired,
  renderAside: a.node
};
function Rs(e = []) {
  return e.map((t) => /* @__PURE__ */ T(Li, { value: t.id, children: t.name }, t.id));
}
const Fa = ({
  data: e,
  name: t,
  labelText: r = "",
  required: n = !1,
  disabled: o = !1,
  render: i = null,
  children: s = null,
  ...l
}) => {
  const c = Ca(), u = i || Rs, { control: d } = Bt(), m = (e == null ? void 0 : e.data) || e;
  return /* @__PURE__ */ ge(Mr, { fullWidth: !0, children: [
    /* @__PURE__ */ T(Ra, { id: c, required: n, disabled: o, children: r }),
    /* @__PURE__ */ T(
      Wt,
      {
        control: d,
        name: t,
        render: ({ field: { onChange: p, onBlur: y, value: O, name: g, ref: h } }) => /* @__PURE__ */ ge(
          ji,
          {
            required: n,
            labelId: c,
            label: r,
            onBlur: y,
            onChange: p,
            inputRef: h,
            value: O || "",
            name: g,
            disabled: o,
            ...l,
            children: [
              s,
              m.length > 0 && u(m)
            ]
          }
        )
      }
    )
  ] });
};
Fa.propTypes = {
  data: a.oneOfType([a.array, a.object]),
  name: a.string.isRequired,
  labelText: a.string,
  createOption: a.func,
  required: a.bool,
  disabled: a.bool,
  render: a.func,
  children: a.node
};
Fa.defaultProps = {
  data: []
};
const rt = {
  ASC: "asc",
  DESC: "desc"
};
function Ss(e, t, r, n = rt.ASC, o = null) {
  let i = e[r] ?? "", s = t[r] ?? "";
  if (Gr(new Date(i)) && Gr(new Date(s)))
    return i = new Date(i), s = new Date(s), n === rt.ASC ? i - s : s - i;
  r === "status" && (i = i.deleted_at ? "inactivo" : "activo", s = s.deleted_at ? "inactivo" : "activo"), typeof o == "function" && (i = o(e, r), s = o(t, r)), (typeof i == "object" || typeof s == "object") && (i = i.name, s = s.name), i = String(i).toLowerCase().trim(), s = String(s).toLowerCase().trim();
  const l = i.localeCompare(s);
  return n === rt.ASC ? l : -l;
}
const $s = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: "Mostrar ruta"
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: (e) => e === "first" ? "Ir a la primera página" : e === "last" ? "Ir a la última página" : e === "next" ? "Ir a la página siguiente" : "Ir a la página anterior",
        labelRowsPerPage: "Filas por página:",
        labelDisplayedRows: ({
          from: e,
          to: t,
          count: r
        }) => `${e}–${t} de ${r !== -1 ? r : `más de ${t}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: (e) => `${e} Estrella${e !== 1 ? "s" : ""}`,
        emptyLabelText: "Vacío"
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: "Limpiar",
        closeText: "Cerrar",
        loadingText: "Cargando…",
        noOptionsText: "Sin opciones",
        openText: "Abierto"
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: "Cerrar"
      }
    },
    MuiPagination: {
      defaultProps: {
        "aria-label": "Paginador",
        getItemAriaLabel: (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}página ${t}` : e === "first" ? "Ir a la primera página" : e === "last" ? "Ir a la última página" : e === "next" ? "Ir a la página siguiente" : "Ir a la página anterior"
      }
    }
  }
}, Is = Fi(
  {
    palette: {
      mode: "light",
      table: {
        header: "#e2e2e2",
        openRow: "#ebf1fa"
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
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            whiteSpace: "nowrap",
            padding: "0.5rem 1rem"
          }
        }
      },
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
  },
  $s
), _s = (e) => {
  const {
    headCells: t,
    records: r = [],
    defaultRowsPerPage: n = 25,
    isLoading: o = !1,
    defaultOrderBy: i = "",
    customPropertiesComparator: s = null,
    defaultOrderDirection: l = rt.ASC,
    row: c
  } = e, [u, d] = tt(l), [m, p] = tt(i), [y, O] = tt(0), [g, h] = tt(n), P = (A, N) => {
    const G = m === N && u === rt.ASC;
    d(G ? rt.DESC : rt.ASC), p(N);
  }, I = (A, N) => {
    O(N);
  }, k = (A) => {
    h(parseInt(A.target.value, 10)), O(0);
  }, x = (() => {
    const A = r.map((G, Y) => [G, Y]);
    return A.sort((G, Y) => {
      const M = Ss(G[0], Y[0], m, u, s);
      return M !== 0 ? M : G[1] - Y[1];
    }), A.map((G) => G[0]).slice(y * g, y * g + g);
  })();
  return /* @__PURE__ */ ge(Vi, { theme: Is, children: [
    /* @__PURE__ */ T(Sa, { children: /* @__PURE__ */ ge($a, { children: [
      /* @__PURE__ */ T(
        Un,
        {
          headCells: t,
          orderBy: m,
          orderDirection: u,
          handleSortRequest: P
        }
      ),
      /* @__PURE__ */ ge(Ia, { children: [
        o && /* @__PURE__ */ T(Rr, { children: /* @__PURE__ */ T(Sr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ T(ur, {}) }) }),
        (x == null ? void 0 : x.length) > 0 ? x.map((A) => ht.cloneElement(c, { key: A.key || A.id, data: A })) : /* @__PURE__ */ T(Rr, { children: /* @__PURE__ */ T(Sr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ T(Xe, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ T(
      _a,
      {
        rowsPerPage: g,
        page: y,
        count: r.length,
        component: "div",
        rowsPerPageOptions: [5, 10, 25, 50, 100],
        onPageChange: I,
        onRowsPerPageChange: k
      }
    )
  ] });
};
_s.propTypes = {
  headCells: a.array.isRequired,
  records: a.array,
  customPropertiesComparator: a.func,
  defaultRowsPerPage: a.number,
  isLoading: a.bool,
  defaultOrderBy: a.string,
  defaultOrderDirection: a.string,
  row: a.element
};
function Tn(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.width ? String(t.width) : e.defaultWidth, n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
function vr(e) {
  return function(t, r) {
    var n = r != null && r.context ? String(r.context) : "standalone", o;
    if (n === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      var l = e.defaultWidth, c = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[c] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[u];
  };
}
function br(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    var s = i[0], l = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? As(l, function(m) {
      return m.test(s);
    }) : ks(l, function(m) {
      return m.test(s);
    }), u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = r.valueCallback ? r.valueCallback(u) : u;
    var d = t.slice(s.length);
    return {
      value: u,
      rest: d
    };
  };
}
function ks(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r) && t(e[r]))
      return r;
}
function As(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Ms(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.match(e.matchPattern);
    if (!n)
      return null;
    var o = n[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = r.valueCallback ? r.valueCallback(s) : s;
    var l = t.slice(o.length);
    return {
      value: s,
      rest: l
    };
  };
}
function Ds(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function In(e, t) {
  return In = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, In(e, t);
}
var Ns = {
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
}, js = function(t, r, n) {
  var o, i = Ns[t];
  return typeof i == "string" ? o = i : r === 1 ? o = i.one : o = i.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "en " + o : "hace " + o : o;
};
const Ls = js;
var Fs = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Vs = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, zs = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Bs = {
  date: Tn({
    formats: Fs,
    defaultWidth: "full"
  }),
  time: Tn({
    formats: Vs,
    defaultWidth: "full"
  }),
  dateTime: Tn({
    formats: zs,
    defaultWidth: "full"
  })
};
const Ws = Bs;
var qs = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, Us = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, Hs = function(t, r, n, o) {
  return r.getUTCHours() !== 1 ? Us[t] : qs[t];
};
const Ys = Hs;
var Ks = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, Gs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Xs = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, Js = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, Qs = {
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
}, Zs = {
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
}, el = function(t, r) {
  var n = Number(t);
  return n + "º";
}, tl = {
  ordinalNumber: el,
  era: vr({
    values: Ks,
    defaultWidth: "wide"
  }),
  quarter: vr({
    values: Gs,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: vr({
    values: Xs,
    defaultWidth: "wide"
  }),
  day: vr({
    values: Js,
    defaultWidth: "wide"
  }),
  dayPeriod: vr({
    values: Qs,
    defaultWidth: "wide",
    formattingValues: Zs,
    defaultFormattingWidth: "wide"
  })
};
const rl = tl;
var nl = /^(\d+)(º)?/i, ol = /\d+/i, al = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, il = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, sl = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, ll = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, cl = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, ul = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, dl = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, fl = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, pl = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, ml = {
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
}, hl = {
  ordinalNumber: Ms({
    matchPattern: nl,
    parsePattern: ol,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: br({
    matchPatterns: al,
    defaultMatchWidth: "wide",
    parsePatterns: il,
    defaultParseWidth: "any"
  }),
  quarter: br({
    matchPatterns: sl,
    defaultMatchWidth: "wide",
    parsePatterns: ll,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: br({
    matchPatterns: cl,
    defaultMatchWidth: "wide",
    parsePatterns: ul,
    defaultParseWidth: "any"
  }),
  day: br({
    matchPatterns: dl,
    defaultMatchWidth: "wide",
    parsePatterns: fl,
    defaultParseWidth: "any"
  }),
  dayPeriod: br({
    matchPatterns: pl,
    defaultMatchWidth: "any",
    parsePatterns: ml,
    defaultParseWidth: "any"
  })
};
const gl = hl;
var vl = {
  code: "es",
  formatDistance: Ls,
  formatLong: Ws,
  formatRelative: Ys,
  localize: rl,
  match: gl,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Ao = vl, bl = ({ isoDateTimeString: e, relative: t = !1, showTime: r = !0 }) => {
  let n = Xi(e) ? e : Ji(e);
  if (!Gr(n)) {
    const s = e.length >= 10 ? "yyyy-MM-dd'T'HH:mm:ss.SSSSSSSSS" : "yyyy-MM-dd";
    n = Qi(e, s, /* @__PURE__ */ new Date());
  }
  if (!Gr(n))
    return /* @__PURE__ */ T("span", { children: "Fecha inválida" });
  const i = t ? Zi(n, /* @__PURE__ */ new Date(), {
    locale: Ao
  }) : es(n, r ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy", {
    locale: Ao
  });
  return /* @__PURE__ */ T("span", { children: i });
};
bl.propTypes = {
  isoDateTimeString: a.string.isRequired,
  relative: a.bool,
  showTime: a.bool
};
const yl = ({
  defaultChecked: e = !1,
  name: t,
  labelText: r = "",
  labelPlacement: n = "end",
  ...o
}) => {
  const { control: i } = Bt();
  return /* @__PURE__ */ T(
    Wt,
    {
      control: i,
      name: t,
      defaultValue: e,
      render: ({ field: s }) => /* @__PURE__ */ T(
        zi,
        {
          labelPlacement: n,
          control: /* @__PURE__ */ T(
            Bi,
            {
              ref: s.ref,
              onChange: (l) => s.onChange(l.target.checked),
              checked: !!s.value,
              name: t,
              ...o
            }
          ),
          label: r
        }
      )
    }
  );
};
yl.propTypes = {
  defaultChecked: a.bool,
  name: a.string.isRequired,
  labelText: a.string,
  labelPlacement: a.string
};
function Ie(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, R.apply(this, arguments);
}
function Va(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Va(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ee() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Va(e)) && (n && (n += " "), n += t);
  return n;
}
function nr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function tr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function za(e) {
  if (!tr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = za(e[r]);
  }), t;
}
function Et(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? R({}, e) : e;
  return tr(e) && tr(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (tr(t[o]) && o in e && tr(e[o]) ? n[o] = Et(e[o], t[o], r) : r.clone ? n[o] = tr(t[o]) ? za(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
function xl(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ol(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !xl(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Tl = nr(a.elementType, Ol), Cl = "exact-prop: ​";
function El(e) {
  return process.env.NODE_ENV === "production" ? e : R({}, e, {
    [Cl]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function or(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var _n = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function Pl() {
  if (Mo)
    return xe;
  Mo = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var P = h.$$typeof;
      switch (P) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case u:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case s:
                case c:
                case p:
                case m:
                case i:
                  return h;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return xe.ContextConsumer = s, xe.ContextProvider = i, xe.Element = e, xe.ForwardRef = c, xe.Fragment = r, xe.Lazy = p, xe.Memo = m, xe.Portal = t, xe.Profiler = o, xe.StrictMode = n, xe.Suspense = u, xe.SuspenseList = d, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(h) {
    return g(h) === s;
  }, xe.isContextProvider = function(h) {
    return g(h) === i;
  }, xe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, xe.isForwardRef = function(h) {
    return g(h) === c;
  }, xe.isFragment = function(h) {
    return g(h) === r;
  }, xe.isLazy = function(h) {
    return g(h) === p;
  }, xe.isMemo = function(h) {
    return g(h) === m;
  }, xe.isPortal = function(h) {
    return g(h) === t;
  }, xe.isProfiler = function(h) {
    return g(h) === o;
  }, xe.isStrictMode = function(h) {
    return g(h) === n;
  }, xe.isSuspense = function(h) {
    return g(h) === u;
  }, xe.isSuspenseList = function(h) {
    return g(h) === d;
  }, xe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === u || h === d || h === y || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === m || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === O || h.getModuleId !== void 0);
  }, xe.typeOf = g, xe;
}
var Oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function wl() {
  return Do || (Do = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = !1, g = !1, h = !1, P = !1, I = !1, k;
    k = Symbol.for("react.module.reference");
    function C(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === r || V === o || I || V === n || V === u || V === d || P || V === y || O || g || h || typeof V == "object" && V !== null && (V.$$typeof === p || V.$$typeof === m || V.$$typeof === i || V.$$typeof === s || V.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === k || V.getModuleId !== void 0));
    }
    function x(V) {
      if (typeof V == "object" && V !== null) {
        var K = V.$$typeof;
        switch (K) {
          case e:
            var Ae = V.type;
            switch (Ae) {
              case r:
              case o:
              case n:
              case u:
              case d:
                return Ae;
              default:
                var pe = Ae && Ae.$$typeof;
                switch (pe) {
                  case l:
                  case s:
                  case c:
                  case p:
                  case m:
                  case i:
                    return pe;
                  default:
                    return K;
                }
            }
          case t:
            return K;
        }
      }
    }
    var A = s, N = i, G = e, Y = c, M = r, L = p, q = m, U = t, Q = o, J = n, ee = u, se = d, le = !1, de = !1;
    function w(V) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(V) {
      return de || (de = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(V) {
      return x(V) === s;
    }
    function X(V) {
      return x(V) === i;
    }
    function z(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function re(V) {
      return x(V) === c;
    }
    function Z(V) {
      return x(V) === r;
    }
    function W(V) {
      return x(V) === p;
    }
    function H(V) {
      return x(V) === m;
    }
    function ne(V) {
      return x(V) === t;
    }
    function ie(V) {
      return x(V) === o;
    }
    function fe(V) {
      return x(V) === n;
    }
    function D(V) {
      return x(V) === u;
    }
    function we(V) {
      return x(V) === d;
    }
    Oe.ContextConsumer = A, Oe.ContextProvider = N, Oe.Element = G, Oe.ForwardRef = Y, Oe.Fragment = M, Oe.Lazy = L, Oe.Memo = q, Oe.Portal = U, Oe.Profiler = Q, Oe.StrictMode = J, Oe.Suspense = ee, Oe.SuspenseList = se, Oe.isAsyncMode = w, Oe.isConcurrentMode = F, Oe.isContextConsumer = oe, Oe.isContextProvider = X, Oe.isElement = z, Oe.isForwardRef = re, Oe.isFragment = Z, Oe.isLazy = W, Oe.isMemo = H, Oe.isPortal = ne, Oe.isProfiler = ie, Oe.isStrictMode = fe, Oe.isSuspense = D, Oe.isSuspenseList = we, Oe.isValidElementType = C, Oe.typeOf = x;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? _n.exports = Pl() : _n.exports = wl();
var No = _n.exports;
const Rl = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Sl(e) {
  const t = `${e}`.match(Rl);
  return t && t[1] || "";
}
function Ba(e, t = "") {
  return e.displayName || e.name || Sl(e) || t;
}
function jo(e, t, r) {
  const n = Ba(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function $l(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ba(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case No.ForwardRef:
          return jo(e, e.render, "ForwardRef");
        case No.Memo:
          return jo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function $r(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Il = a.oneOfType([a.func, a.object]), Hn = Il;
function ae(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : or(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _l(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function kl(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(i, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Al(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, s) => {
    const l = o || "<<anonymous>>", c = s || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Ml(e, t) {
  return /* @__PURE__ */ S.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function Xr(e) {
  return e && e.ownerDocument || document;
}
function Dl(e) {
  return Xr(e).defaultView || window;
}
function Nl(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? R({}, t.propTypes) : null;
  return (o) => (i, s, l, c, u, ...d) => {
    const m = u || s, p = r == null ? void 0 : r[m];
    if (p) {
      const y = p(i, s, l, c, u, ...d);
      if (y)
        return y;
    }
    return typeof i[s] < "u" && !i[o] ? new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Ir(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const jl = typeof window < "u" ? S.useLayoutEffect : S.useEffect, ar = jl;
let Lo = 0;
function Ll(e) {
  const [t, r] = S.useState(e), n = e || t;
  return S.useEffect(() => {
    t == null && (Lo += 1, r(`mui-${Lo}`));
  }, [t]), n;
}
const Fo = S["useId".toString()];
function Wa(e) {
  if (Fo !== void 0) {
    const t = Fo();
    return e ?? t;
  }
  return Ll(e);
}
function qa(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Hr({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = S.useRef(e !== void 0), [i, s] = S.useState(t), l = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    S.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = S.useRef(t);
    S.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = S.useCallback((u) => {
    o || s(u);
  }, []);
  return [l, c];
}
function Ct(e) {
  const t = S.useRef(e);
  return ar(() => {
    t.current = e;
  }), S.useCallback((...r) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...r)
  ), []);
}
function Pt(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Ir(r, t);
    });
  }, e);
}
let tn = !0, kn = !1, Vo;
const Fl = {
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
function Vl(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Fl[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function zl(e) {
  e.metaKey || e.altKey || e.ctrlKey || (tn = !0);
}
function Cn() {
  tn = !1;
}
function Bl() {
  this.visibilityState === "hidden" && kn && (tn = !0);
}
function Wl(e) {
  e.addEventListener("keydown", zl, !0), e.addEventListener("mousedown", Cn, !0), e.addEventListener("pointerdown", Cn, !0), e.addEventListener("touchstart", Cn, !0), e.addEventListener("visibilitychange", Bl, !0);
}
function ql(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return tn || Vl(t);
}
function Ua() {
  const e = S.useCallback((o) => {
    o != null && Wl(o.ownerDocument);
  }, []), t = S.useRef(!1);
  function r() {
    return t.current ? (kn = !0, window.clearTimeout(Vo), Vo = window.setTimeout(() => {
      kn = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(o) {
    return ql(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
const Ul = (e) => {
  const t = S.useRef({});
  return S.useEffect(() => {
    t.current = e;
  }), t.current;
}, Hl = Ul;
function Yl(e) {
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
function Kl(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Gl = Number.isInteger || Kl;
function Ha(e, t, r, n) {
  const o = e[t];
  if (o == null || !Gl(o)) {
    const i = Yl(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Ya(e, t, ...r) {
  return e[t] === void 0 ? null : Ha(e, t, ...r);
}
function An() {
  return null;
}
Ya.isRequired = Ha;
An.isRequired = An;
const Ka = process.env.NODE_ENV === "production" ? An : Ya;
function Ga(e, t) {
  const r = R({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = R({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = R({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = Ga(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function kt(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const l = t(s);
          l !== "" && i.push(l), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const zo = (e) => e, Xl = () => {
  let e = zo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = zo;
    }
  };
}, Jl = Xl(), Xa = Jl, Ql = {
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
function Ot(e, t, r = "Mui") {
  const n = Ql[t];
  return n ? `${r}-${n}` : `${Xa.generate(e)}-${t}`;
}
function ot(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ot(e, o, r);
  }), n;
}
function Zl(e) {
  return typeof e == "string";
}
function ec(e, t, r) {
  return e === void 0 || Zl(e) ? t : R({}, t, {
    ownerState: R({}, t.ownerState, r)
  });
}
const tc = {
  disableDefaultClasses: !1
}, rc = /* @__PURE__ */ S.createContext(tc);
function nc(e) {
  const {
    disableDefaultClasses: t
  } = S.useContext(rc);
  return (r) => t ? "" : e(r);
}
function oc(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function ac(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Bo(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function ic(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const y = Ee(o == null ? void 0 : o.className, n == null ? void 0 : n.className, i, r == null ? void 0 : r.className), O = R({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), g = R({}, r, o, n);
    return y.length > 0 && (g.className = y), Object.keys(O).length > 0 && (g.style = O), {
      props: g,
      internalRef: void 0
    };
  }
  const s = oc(R({}, o, n)), l = Bo(n), c = Bo(o), u = t(s), d = Ee(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), m = R({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), p = R({}, u, r, c, l);
  return d.length > 0 && (p.className = d), Object.keys(m).length > 0 && (p.style = m), {
    props: p,
    internalRef: u.ref
  };
}
const sc = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function lc(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = Ie(e, sc), l = i ? {} : ac(n, o), {
    props: c,
    internalRef: u
  } = ic(R({}, s, {
    externalSlotProps: l
  })), d = Pt(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return ec(r, R({}, c, {
    ref: d
  }), o);
}
var Je = "top", ct = "bottom", ut = "right", Qe = "left", Yn = "auto", Nr = [Je, ct, ut, Qe], ir = "start", _r = "end", cc = "clippingParents", Ja = "viewport", yr = "popper", uc = "reference", Wo = /* @__PURE__ */ Nr.reduce(function(e, t) {
  return e.concat([t + "-" + ir, t + "-" + _r]);
}, []), Qa = /* @__PURE__ */ [].concat(Nr, [Yn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ir, t + "-" + _r]);
}, []), dc = "beforeRead", fc = "read", pc = "afterRead", mc = "beforeMain", hc = "main", gc = "afterMain", vc = "beforeWrite", bc = "write", yc = "afterWrite", xc = [dc, fc, pc, mc, hc, gc, vc, bc, yc];
function xt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function nt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Vt(e) {
  var t = nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function lt(e) {
  var t = nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Kn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Oc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !lt(i) || !xt(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Tc(e) {
  var t = e.state, r = {
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
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), l = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !lt(o) || !xt(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const Cc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Oc,
  effect: Tc,
  requires: ["computeStyles"]
};
function yt(e) {
  return e.split("-")[0];
}
var Lt = Math.max, Jr = Math.min, sr = Math.round;
function Mn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Za() {
  return !/^((?!chrome|android).)*safari/i.test(Mn());
}
function lr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && lt(e) && (o = e.offsetWidth > 0 && sr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && sr(n.height) / e.offsetHeight || 1);
  var s = Vt(e) ? nt(e) : window, l = s.visualViewport, c = !Za() && r, u = (n.left + (c && l ? l.offsetLeft : 0)) / o, d = (n.top + (c && l ? l.offsetTop : 0)) / i, m = n.width / o, p = n.height / i;
  return {
    width: m,
    height: p,
    top: d,
    right: u + m,
    bottom: d + p,
    left: u,
    x: u,
    y: d
  };
}
function Gn(e) {
  var t = lr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function ei(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Kn(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function wt(e) {
  return nt(e).getComputedStyle(e);
}
function Ec(e) {
  return ["table", "td", "th"].indexOf(xt(e)) >= 0;
}
function At(e) {
  return ((Vt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function rn(e) {
  return xt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Kn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    At(e)
  );
}
function qo(e) {
  return !lt(e) || // https://github.com/popperjs/popper-core/issues/837
  wt(e).position === "fixed" ? null : e.offsetParent;
}
function Pc(e) {
  var t = /firefox/i.test(Mn()), r = /Trident/i.test(Mn());
  if (r && lt(e)) {
    var n = wt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = rn(e);
  for (Kn(o) && (o = o.host); lt(o) && ["html", "body"].indexOf(xt(o)) < 0; ) {
    var i = wt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function jr(e) {
  for (var t = nt(e), r = qo(e); r && Ec(r) && wt(r).position === "static"; )
    r = qo(r);
  return r && (xt(r) === "html" || xt(r) === "body" && wt(r).position === "static") ? t : r || Pc(e) || t;
}
function Xn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cr(e, t, r) {
  return Lt(e, Jr(t, r));
}
function wc(e, t, r) {
  var n = Cr(e, t, r);
  return n > r ? r : n;
}
function ti() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ri(e) {
  return Object.assign({}, ti(), e);
}
function ni(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Rc = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ri(typeof t != "number" ? t : ni(t, Nr));
};
function Sc(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, l = yt(r.placement), c = Xn(l), u = [Qe, ut].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var m = Rc(o.padding, r), p = Gn(i), y = c === "y" ? Je : Qe, O = c === "y" ? ct : ut, g = r.rects.reference[d] + r.rects.reference[c] - s[c] - r.rects.popper[d], h = s[c] - r.rects.reference[c], P = jr(i), I = P ? c === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0, k = g / 2 - h / 2, C = m[y], x = I - p[d] - m[O], A = I / 2 - p[d] / 2 + k, N = Cr(C, A, x), G = c;
    r.modifiersData[n] = (t = {}, t[G] = N, t.centerOffset = N - A, t);
  }
}
function $c(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ei(t.elements.popper, o) && (t.elements.arrow = o));
}
const Ic = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Sc,
  effect: $c,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function cr(e) {
  return e.split("-")[1];
}
var _c = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function kc(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: sr(r * o) / o || 0,
    y: sr(n * o) / o || 0
  };
}
function Uo(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, p = s.x, y = p === void 0 ? 0 : p, O = s.y, g = O === void 0 ? 0 : O, h = typeof d == "function" ? d({
    x: y,
    y: g
  }) : {
    x: y,
    y: g
  };
  y = h.x, g = h.y;
  var P = s.hasOwnProperty("x"), I = s.hasOwnProperty("y"), k = Qe, C = Je, x = window;
  if (u) {
    var A = jr(r), N = "clientHeight", G = "clientWidth";
    if (A === nt(r) && (A = At(r), wt(A).position !== "static" && l === "absolute" && (N = "scrollHeight", G = "scrollWidth")), A = A, o === Je || (o === Qe || o === ut) && i === _r) {
      C = ct;
      var Y = m && A === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[N]
      );
      g -= Y - n.height, g *= c ? 1 : -1;
    }
    if (o === Qe || (o === Je || o === ct) && i === _r) {
      k = ut;
      var M = m && A === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[G]
      );
      y -= M - n.width, y *= c ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: l
  }, u && _c), q = d === !0 ? kc({
    x: y,
    y: g
  }, nt(r)) : {
    x: y,
    y: g
  };
  if (y = q.x, g = q.y, c) {
    var U;
    return Object.assign({}, L, (U = {}, U[C] = I ? "0" : "", U[k] = P ? "0" : "", U.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + g + "px)" : "translate3d(" + y + "px, " + g + "px, 0)", U));
  }
  return Object.assign({}, L, (t = {}, t[C] = I ? g + "px" : "", t[k] = P ? y + "px" : "", t.transform = "", t));
}
function Ac(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, l = r.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: yt(t.placement),
    variation: cr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Uo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Uo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Mc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ac,
  data: {}
};
var qr = {
  passive: !0
};
function Dc(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, s = n.resize, l = s === void 0 ? !0 : s, c = nt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, qr);
  }), l && c.addEventListener("resize", r.update, qr), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, qr);
    }), l && c.removeEventListener("resize", r.update, qr);
  };
}
const Nc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Dc,
  data: {}
};
var jc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return jc[t];
  });
}
var Lc = {
  start: "end",
  end: "start"
};
function Ho(e) {
  return e.replace(/start|end/g, function(t) {
    return Lc[t];
  });
}
function Jn(e) {
  var t = nt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Qn(e) {
  return lr(At(e)).left + Jn(e).scrollLeft;
}
function Fc(e, t) {
  var r = nt(e), n = At(e), o = r.visualViewport, i = n.clientWidth, s = n.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = Za();
    (u || !u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Qn(e),
    y: c
  };
}
function Vc(e) {
  var t, r = At(e), n = Jn(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Lt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Lt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -n.scrollLeft + Qn(e), c = -n.scrollTop;
  return wt(o || r).direction === "rtl" && (l += Lt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Zn(e) {
  var t = wt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function oi(e) {
  return ["html", "body", "#document"].indexOf(xt(e)) >= 0 ? e.ownerDocument.body : lt(e) && Zn(e) ? e : oi(rn(e));
}
function Er(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = oi(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = nt(n), s = o ? [i].concat(i.visualViewport || [], Zn(n) ? n : []) : n, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Er(rn(s)))
  );
}
function Dn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zc(e, t) {
  var r = lr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Yo(e, t, r) {
  return t === Ja ? Dn(Fc(e, r)) : Vt(t) ? zc(t, r) : Dn(Vc(At(e)));
}
function Bc(e) {
  var t = Er(rn(e)), r = ["absolute", "fixed"].indexOf(wt(e).position) >= 0, n = r && lt(e) ? jr(e) : e;
  return Vt(n) ? t.filter(function(o) {
    return Vt(o) && ei(o, n) && xt(o) !== "body";
  }) : [];
}
function Wc(e, t, r, n) {
  var o = t === "clippingParents" ? Bc(e) : [].concat(t), i = [].concat(o, [r]), s = i[0], l = i.reduce(function(c, u) {
    var d = Yo(e, u, n);
    return c.top = Lt(d.top, c.top), c.right = Jr(d.right, c.right), c.bottom = Jr(d.bottom, c.bottom), c.left = Lt(d.left, c.left), c;
  }, Yo(e, s, n));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ai(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? yt(n) : null, i = n ? cr(n) : null, s = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case Je:
      c = {
        x: s,
        y: t.y - r.height
      };
      break;
    case ct:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case ut:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Qe:
      c = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? Xn(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case ir:
        c[u] = c[u] - (t[d] / 2 - r[d] / 2);
        break;
      case _r:
        c[u] = c[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return c;
}
function kr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, s = i === void 0 ? e.strategy : i, l = r.boundary, c = l === void 0 ? cc : l, u = r.rootBoundary, d = u === void 0 ? Ja : u, m = r.elementContext, p = m === void 0 ? yr : m, y = r.altBoundary, O = y === void 0 ? !1 : y, g = r.padding, h = g === void 0 ? 0 : g, P = ri(typeof h != "number" ? h : ni(h, Nr)), I = p === yr ? uc : yr, k = e.rects.popper, C = e.elements[O ? I : p], x = Wc(Vt(C) ? C : C.contextElement || At(e.elements.popper), c, d, s), A = lr(e.elements.reference), N = ai({
    reference: A,
    element: k,
    strategy: "absolute",
    placement: o
  }), G = Dn(Object.assign({}, k, N)), Y = p === yr ? G : A, M = {
    top: x.top - Y.top + P.top,
    bottom: Y.bottom - x.bottom + P.bottom,
    left: x.left - Y.left + P.left,
    right: Y.right - x.right + P.right
  }, L = e.modifiersData.offset;
  if (p === yr && L) {
    var q = L[o];
    Object.keys(M).forEach(function(U) {
      var Q = [ut, ct].indexOf(U) >= 0 ? 1 : -1, J = [Je, ct].indexOf(U) >= 0 ? "y" : "x";
      M[U] += q[J] * Q;
    });
  }
  return M;
}
function qc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, s = r.padding, l = r.flipVariations, c = r.allowedAutoPlacements, u = c === void 0 ? Qa : c, d = cr(n), m = d ? l ? Wo : Wo.filter(function(O) {
    return cr(O) === d;
  }) : Nr, p = m.filter(function(O) {
    return u.indexOf(O) >= 0;
  });
  p.length === 0 && (p = m);
  var y = p.reduce(function(O, g) {
    return O[g] = kr(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[yt(g)], O;
  }, {});
  return Object.keys(y).sort(function(O, g) {
    return y[O] - y[g];
  });
}
function Uc(e) {
  if (yt(e) === Yn)
    return [];
  var t = Yr(e);
  return [Ho(e), t, Ho(t)];
}
function Hc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, l = s === void 0 ? !0 : s, c = r.fallbackPlacements, u = r.padding, d = r.boundary, m = r.rootBoundary, p = r.altBoundary, y = r.flipVariations, O = y === void 0 ? !0 : y, g = r.allowedAutoPlacements, h = t.options.placement, P = yt(h), I = P === h, k = c || (I || !O ? [Yr(h)] : Uc(h)), C = [h].concat(k).reduce(function(z, re) {
      return z.concat(yt(re) === Yn ? qc(t, {
        placement: re,
        boundary: d,
        rootBoundary: m,
        padding: u,
        flipVariations: O,
        allowedAutoPlacements: g
      }) : re);
    }, []), x = t.rects.reference, A = t.rects.popper, N = /* @__PURE__ */ new Map(), G = !0, Y = C[0], M = 0; M < C.length; M++) {
      var L = C[M], q = yt(L), U = cr(L) === ir, Q = [Je, ct].indexOf(q) >= 0, J = Q ? "width" : "height", ee = kr(t, {
        placement: L,
        boundary: d,
        rootBoundary: m,
        altBoundary: p,
        padding: u
      }), se = Q ? U ? ut : Qe : U ? ct : Je;
      x[J] > A[J] && (se = Yr(se));
      var le = Yr(se), de = [];
      if (i && de.push(ee[q] <= 0), l && de.push(ee[se] <= 0, ee[le] <= 0), de.every(function(z) {
        return z;
      })) {
        Y = L, G = !1;
        break;
      }
      N.set(L, de);
    }
    if (G)
      for (var w = O ? 3 : 1, F = function(re) {
        var Z = C.find(function(W) {
          var H = N.get(W);
          if (H)
            return H.slice(0, re).every(function(ne) {
              return ne;
            });
        });
        if (Z)
          return Y = Z, "break";
      }, oe = w; oe > 0; oe--) {
        var X = F(oe);
        if (X === "break")
          break;
      }
    t.placement !== Y && (t.modifiersData[n]._skip = !0, t.placement = Y, t.reset = !0);
  }
}
const Yc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Hc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ko(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Go(e) {
  return [Je, ut, ct, Qe].some(function(t) {
    return e[t] >= 0;
  });
}
function Kc(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = kr(t, {
    elementContext: "reference"
  }), l = kr(t, {
    altBoundary: !0
  }), c = Ko(s, n), u = Ko(l, o, i), d = Go(c), m = Go(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const Gc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Kc
};
function Xc(e, t, r) {
  var n = yt(e), o = [Qe, Je].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [Qe, ut].indexOf(n) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function Jc(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, s = Qa.reduce(function(d, m) {
    return d[m] = Xc(m, t.rects, i), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = s;
}
const Qc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Jc
};
function Zc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ai({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const eu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Zc,
  data: {}
};
function tu(e) {
  return e === "x" ? "y" : "x";
}
function ru(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, l = s === void 0 ? !1 : s, c = r.boundary, u = r.rootBoundary, d = r.altBoundary, m = r.padding, p = r.tether, y = p === void 0 ? !0 : p, O = r.tetherOffset, g = O === void 0 ? 0 : O, h = kr(t, {
    boundary: c,
    rootBoundary: u,
    padding: m,
    altBoundary: d
  }), P = yt(t.placement), I = cr(t.placement), k = !I, C = Xn(P), x = tu(C), A = t.modifiersData.popperOffsets, N = t.rects.reference, G = t.rects.popper, Y = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, M = typeof Y == "number" ? {
    mainAxis: Y,
    altAxis: Y
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Y), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (A) {
    if (i) {
      var U, Q = C === "y" ? Je : Qe, J = C === "y" ? ct : ut, ee = C === "y" ? "height" : "width", se = A[C], le = se + h[Q], de = se - h[J], w = y ? -G[ee] / 2 : 0, F = I === ir ? N[ee] : G[ee], oe = I === ir ? -G[ee] : -N[ee], X = t.elements.arrow, z = y && X ? Gn(X) : {
        width: 0,
        height: 0
      }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ti(), Z = re[Q], W = re[J], H = Cr(0, N[ee], z[ee]), ne = k ? N[ee] / 2 - w - H - Z - M.mainAxis : F - H - Z - M.mainAxis, ie = k ? -N[ee] / 2 + w + H + W + M.mainAxis : oe + H + W + M.mainAxis, fe = t.elements.arrow && jr(t.elements.arrow), D = fe ? C === "y" ? fe.clientTop || 0 : fe.clientLeft || 0 : 0, we = (U = L == null ? void 0 : L[C]) != null ? U : 0, V = se + ne - we - D, K = se + ie - we, Ae = Cr(y ? Jr(le, V) : le, se, y ? Lt(de, K) : de);
      A[C] = Ae, q[C] = Ae - se;
    }
    if (l) {
      var pe, We = C === "x" ? Je : Qe, Me = C === "x" ? ct : ut, De = A[x], Le = x === "y" ? "height" : "width", Ne = De + h[We], dt = De - h[Me], He = [Je, Qe].indexOf(P) !== -1, ze = (pe = L == null ? void 0 : L[x]) != null ? pe : 0, at = He ? Ne : De - N[Le] - G[Le] - ze + M.altAxis, Pe = He ? De + N[Le] + G[Le] - ze - M.altAxis : dt, Ce = y && He ? wc(at, De, Pe) : Cr(y ? at : Ne, De, y ? Pe : dt);
      A[x] = Ce, q[x] = Ce - De;
    }
    t.modifiersData[n] = q;
  }
}
const nu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ru,
  requiresIfExists: ["offset"]
};
function ou(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function au(e) {
  return e === nt(e) || !lt(e) ? Jn(e) : ou(e);
}
function iu(e) {
  var t = e.getBoundingClientRect(), r = sr(t.width) / e.offsetWidth || 1, n = sr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function su(e, t, r) {
  r === void 0 && (r = !1);
  var n = lt(t), o = lt(t) && iu(t), i = At(t), s = lr(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((xt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Zn(i)) && (l = au(t)), lt(t) ? (c = lr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Qn(i))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function lu(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(l) {
      if (!r.has(l)) {
        var c = t.get(l);
        c && o(c);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function cu(e) {
  var t = lu(e);
  return xc.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function uu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function du(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Xo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Jo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function fu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? Xo : o;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xo, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], p = !1, y = {
      state: d,
      setOptions: function(P) {
        var I = typeof P == "function" ? P(d.options) : P;
        g(), d.options = Object.assign({}, i, d.options, I), d.scrollParents = {
          reference: Vt(l) ? Er(l) : l.contextElement ? Er(l.contextElement) : [],
          popper: Er(c)
        };
        var k = cu(du([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = k.filter(function(C) {
          return C.enabled;
        }), O(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var P = d.elements, I = P.reference, k = P.popper;
          if (Jo(I, k)) {
            d.rects = {
              reference: su(I, jr(k), d.options.strategy === "fixed"),
              popper: Gn(k)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
              return d.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var C = 0; C < d.orderedModifiers.length; C++) {
              if (d.reset === !0) {
                d.reset = !1, C = -1;
                continue;
              }
              var x = d.orderedModifiers[C], A = x.fn, N = x.options, G = N === void 0 ? {} : N, Y = x.name;
              typeof A == "function" && (d = A({
                state: d,
                options: G,
                name: Y,
                instance: y
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: uu(function() {
        return new Promise(function(h) {
          y.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!Jo(l, c))
      return y;
    y.setOptions(u).then(function(h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function O() {
      d.orderedModifiers.forEach(function(h) {
        var P = h.name, I = h.options, k = I === void 0 ? {} : I, C = h.effect;
        if (typeof C == "function") {
          var x = C({
            state: d,
            name: P,
            instance: y,
            options: k
          }), A = function() {
          };
          m.push(x || A);
        }
      });
    }
    function g() {
      m.forEach(function(h) {
        return h();
      }), m = [];
    }
    return y;
  };
}
var pu = [Nc, eu, Mc, Cc, Qc, Yc, nu, Ic, Gc], mu = /* @__PURE__ */ fu({
  defaultModifiers: pu
});
function hu(e) {
  return typeof e == "function" ? e() : e;
}
const Qr = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = S.useState(null), c = Pt(/* @__PURE__ */ S.isValidElement(n) ? n.ref : null, r);
  if (ar(() => {
    i || l(hu(o) || document.body);
  }, [o, i]), ar(() => {
    if (s && !i)
      return Ir(r, s), () => {
        Ir(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ S.isValidElement(n)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ S.cloneElement(n, u);
    }
    return /* @__PURE__ */ T(S.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ T(S.Fragment, {
    children: s && /* @__PURE__ */ ns.createPortal(n, s)
  });
});
process.env.NODE_ENV !== "production" && (Qr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: a.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([$r, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (Qr["propTypes"] = El(Qr.propTypes));
function gu(e) {
  return Ot("MuiPopper", e);
}
ot("MuiPopper", ["root"]);
const vu = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], bu = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function yu(e, t) {
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
function Zr(e) {
  return typeof e == "function" ? e() : e;
}
function nn(e) {
  return e.nodeType !== void 0;
}
function xu(e) {
  return !nn(e);
}
const Ou = () => kt({
  root: ["root"]
}, nc(gu)), Tu = {}, Cu = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n;
  const {
    anchorEl: o,
    children: i,
    direction: s,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: m,
    popperRef: p,
    slotProps: y = {},
    slots: O = {},
    TransitionProps: g
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, h = Ie(t, vu), P = S.useRef(null), I = Pt(P, r), k = S.useRef(null), C = Pt(k, p), x = S.useRef(C);
  ar(() => {
    x.current = C;
  }, [C]), S.useImperativeHandle(p, () => k.current, []);
  const A = yu(d, s), [N, G] = S.useState(A), [Y, M] = S.useState(Zr(o));
  S.useEffect(() => {
    k.current && k.current.forceUpdate();
  }), S.useEffect(() => {
    o && M(Zr(o));
  }, [o]), ar(() => {
    if (!Y || !u)
      return;
    const J = (le) => {
      G(le.placement);
    };
    if (process.env.NODE_ENV !== "production" && Y && nn(Y) && Y.nodeType === 1) {
      const le = Y.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && le.top === 0 && le.left === 0 && le.right === 0 && le.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let ee = [{
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
        J(le);
      }
    }];
    c != null && (ee = ee.concat(c)), m && m.modifiers != null && (ee = ee.concat(m.modifiers));
    const se = mu(Y, P.current, R({
      placement: A
    }, m, {
      modifiers: ee
    }));
    return x.current(se), () => {
      se.destroy(), x.current(null);
    };
  }, [Y, l, c, u, m, A]);
  const L = {
    placement: N
  };
  g !== null && (L.TransitionProps = g);
  const q = Ou(), U = (n = O.root) != null ? n : "div", Q = lc({
    elementType: U,
    externalSlotProps: y.root,
    externalForwardedProps: h,
    additionalProps: {
      role: "tooltip",
      ref: I
    },
    ownerState: t,
    className: q.root
  });
  return /* @__PURE__ */ T(U, R({}, Q, {
    children: typeof i == "function" ? i(L) : i
  }));
}), ii = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: m = "bottom",
    popperOptions: p = Tu,
    popperRef: y,
    style: O,
    transition: g = !1,
    slotProps: h = {},
    slots: P = {}
  } = t, I = Ie(t, bu), [k, C] = S.useState(!0), x = () => {
    C(!1);
  }, A = () => {
    C(!0);
  };
  if (!c && !d && (!g || k))
    return null;
  let N;
  if (i)
    N = i;
  else if (n) {
    const M = Zr(n);
    N = M && nn(M) ? Xr(M).body : Xr(null).body;
  }
  const G = !d && c && (!g || k) ? "none" : void 0, Y = g ? {
    in: d,
    onEnter: x,
    onExited: A
  } : void 0;
  return /* @__PURE__ */ T(Qr, {
    disablePortal: l,
    container: N,
    children: /* @__PURE__ */ T(Cu, R({
      anchorEl: n,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: r,
      open: g ? !k : d,
      placement: m,
      popperOptions: p,
      popperRef: y,
      slotProps: h,
      slots: P
    }, I, {
      style: R({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: G
      }, O),
      TransitionProps: Y,
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
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
  anchorEl: nr(a.oneOfType([$r, a.object, a.func]), (e) => {
    if (e.open) {
      const t = Zr(e.anchorEl);
      if (t && nn(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || xu(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: a.oneOfType([a.node, a.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([$r, a.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: a.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: a.arrayOf(a.shape({
    data: a.object,
    effect: a.func,
    enabled: a.bool,
    fn: a.func,
    name: a.any,
    options: a.object,
    phase: a.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: a.arrayOf(a.string),
    requiresIfExists: a.arrayOf(a.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: a.shape({
    modifiers: a.array,
    onFirstUpdate: a.func,
    placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: a.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Hn,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: a.bool
});
function Qo(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function eo(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: r = !0,
    limit: n,
    matchFrom: o = "any",
    stringify: i,
    trim: s = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: u
  }) => {
    let d = s ? c.trim() : c;
    r && (d = d.toLowerCase()), t && (d = Qo(d));
    const m = d ? l.filter((p) => {
      let y = (i || u)(p);
      return r && (y = y.toLowerCase()), t && (y = Qo(y)), o === "start" ? y.indexOf(d) === 0 : y.indexOf(d) > -1;
    }) : l;
    return typeof n == "number" ? m.slice(0, n) : m;
  };
}
function En(e, t) {
  for (let r = 0; r < e.length; r += 1)
    if (t(e[r]))
      return r;
  return -1;
}
const Eu = eo(), Zo = 5, Pu = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function wu(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Pu,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: r = "Mui",
    autoComplete: n = !1,
    autoHighlight: o = !1,
    autoSelect: i = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? [] : null,
    disableClearable: m = !1,
    disableCloseOnSelect: p = !1,
    disabled: y,
    disabledItemsFocusable: O = !1,
    disableListWrap: g = !1,
    filterOptions: h = Eu,
    filterSelectedOptions: P = !1,
    freeSolo: I = !1,
    getOptionDisabled: k,
    getOptionLabel: C = (v) => {
      var b;
      return (b = v.label) != null ? b : v;
    },
    groupBy: x,
    handleHomeEndKeys: A = !e.freeSolo,
    id: N,
    includeInputInList: G = !1,
    inputValue: Y,
    isOptionEqualToValue: M = (v, b) => v === b,
    multiple: L = !1,
    onChange: q,
    onClose: U,
    onHighlightChange: Q,
    onInputChange: J,
    onOpen: ee,
    open: se,
    openOnFocus: le = !1,
    options: de,
    readOnly: w = !1,
    selectOnFocus: F = !e.freeSolo,
    value: oe
  } = e, X = Wa(N);
  let z = C;
  z = (v) => {
    const b = C(v);
    if (typeof b != "string") {
      if (process.env.NODE_ENV !== "production") {
        const E = b === void 0 ? "undefined" : `${typeof b} (${b})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${E} instead of a string for ${JSON.stringify(v)}.`);
      }
      return String(b);
    }
    return b;
  };
  const re = S.useRef(!1), Z = S.useRef(!0), W = S.useRef(null), H = S.useRef(null), [ne, ie] = S.useState(null), [fe, D] = S.useState(-1), we = o ? 0 : -1, V = S.useRef(we), [K, Ae] = Hr({
    controlled: oe,
    default: d,
    name: u
  }), [pe, We] = Hr({
    controlled: Y,
    default: "",
    name: u,
    state: "inputValue"
  }), [Me, De] = S.useState(!1), Le = S.useCallback((v, b) => {
    if (!(L ? K.length < b.length : b !== null) && !l)
      return;
    let _;
    if (L)
      _ = "";
    else if (b == null)
      _ = "";
    else {
      const B = z(b);
      _ = typeof B == "string" ? B : "";
    }
    pe !== _ && (We(_), J && J(v, _, "reset"));
  }, [z, pe, L, J, We, l, K]), [Ne, dt] = Hr({
    controlled: se,
    default: !1,
    name: u,
    state: "open"
  }), [He, ze] = S.useState(!0), at = !L && K != null && pe === z(K), Pe = Ne && !w, Ce = Pe ? h(
    de.filter((v) => !(P && (L ? K : [K]).some((b) => b !== null && M(v, b)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: at && He ? "" : pe,
      getOptionLabel: z
    }
  ) : [], te = Hl({
    filteredOptions: Ce,
    value: K,
    inputValue: pe
  });
  S.useEffect(() => {
    const v = K !== te.value;
    Me && !v || I && !v || Le(null, K);
  }, [K, Le, Me, te.value, I]);
  const ft = Ne && Ce.length > 0 && !w;
  if (process.env.NODE_ENV !== "production" && K !== null && !I && de.length > 0) {
    const v = (L ? K : [K]).filter((b) => !de.some((E) => M(E, b)));
    v.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${v.length > 1 ? JSON.stringify(v) : JSON.stringify(v[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const it = Ct((v) => {
    v === -1 ? W.current.focus() : ne.querySelector(`[data-tag-index="${v}"]`).focus();
  });
  S.useEffect(() => {
    L && fe > K.length - 1 && (D(-1), it(-1));
  }, [K, L, fe, it]);
  function $t(v, b) {
    if (!H.current || v === -1)
      return -1;
    let E = v;
    for (; ; ) {
      if (b === "next" && E === Ce.length || b === "previous" && E === -1)
        return -1;
      const _ = H.current.querySelector(`[data-option-index="${E}"]`), B = O ? !1 : !_ || _.disabled || _.getAttribute("aria-disabled") === "true";
      if (_ && !_.hasAttribute("tabindex") || B)
        E += b === "next" ? 1 : -1;
      else
        return E;
    }
  }
  const qe = Ct(({
    event: v,
    index: b,
    reason: E = "auto"
  }) => {
    if (V.current = b, b === -1 ? W.current.removeAttribute("aria-activedescendant") : W.current.setAttribute("aria-activedescendant", `${X}-option-${b}`), Q && Q(v, b === -1 ? null : Ce[b], E), !H.current)
      return;
    const _ = H.current.querySelector(`[role="option"].${r}-focused`);
    _ && (_.classList.remove(`${r}-focused`), _.classList.remove(`${r}-focusVisible`));
    let B = H.current;
    if (H.current.getAttribute("role") !== "listbox" && (B = H.current.parentElement.querySelector('[role="listbox"]')), !B)
      return;
    if (b === -1) {
      B.scrollTop = 0;
      return;
    }
    const ce = H.current.querySelector(`[data-option-index="${b}"]`);
    if (ce && (ce.classList.add(`${r}-focused`), E === "keyboard" && ce.classList.add(`${r}-focusVisible`), B.scrollHeight > B.clientHeight && E !== "mouse" && E !== "touch")) {
      const ue = ce, he = B.clientHeight + B.scrollTop, Fe = ue.offsetTop + ue.offsetHeight;
      Fe > he ? B.scrollTop = Fe - B.clientHeight : ue.offsetTop - ue.offsetHeight * (x ? 1.3 : 0) < B.scrollTop && (B.scrollTop = ue.offsetTop - ue.offsetHeight * (x ? 1.3 : 0));
    }
  }), Ye = Ct(({
    event: v,
    diff: b,
    direction: E = "next",
    reason: _ = "auto"
  }) => {
    if (!Pe)
      return;
    const ce = $t((() => {
      const ue = Ce.length - 1;
      if (b === "reset")
        return we;
      if (b === "start")
        return 0;
      if (b === "end")
        return ue;
      const he = V.current + b;
      return he < 0 ? he === -1 && G ? -1 : g && V.current !== -1 || Math.abs(b) > 1 ? 0 : ue : he > ue ? he === ue + 1 && G ? -1 : g || Math.abs(b) > 1 ? ue : 0 : he;
    })(), E);
    if (qe({
      index: ce,
      reason: _,
      event: v
    }), n && b !== "reset")
      if (ce === -1)
        W.current.value = pe;
      else {
        const ue = z(Ce[ce]);
        W.current.value = ue, ue.toLowerCase().indexOf(pe.toLowerCase()) === 0 && pe.length > 0 && W.current.setSelectionRange(pe.length, ue.length);
      }
  }), dr = () => {
    const v = (b, E) => {
      const _ = b ? z(b) : "", B = E ? z(E) : "";
      return _ === B;
    };
    if (V.current !== -1 && te.filteredOptions && te.filteredOptions.length !== Ce.length && te.inputValue === pe && (L ? K.length === te.value.length && te.value.every((b, E) => z(K[E]) === z(b)) : v(te.value, K))) {
      const b = te.filteredOptions[V.current];
      if (b && Ce.some((_) => z(_) === z(b)))
        return !0;
    }
    return !1;
  }, gt = S.useCallback(() => {
    if (!Pe || dr())
      return;
    const v = L ? K[0] : K;
    if (Ce.length === 0 || v == null) {
      Ye({
        diff: "reset"
      });
      return;
    }
    if (H.current) {
      if (v != null) {
        const b = Ce[V.current];
        if (L && b && En(K, (_) => M(b, _)) !== -1)
          return;
        const E = En(Ce, (_) => M(_, v));
        E === -1 ? Ye({
          diff: "reset"
        }) : qe({
          index: E
        });
        return;
      }
      if (V.current >= Ce.length - 1) {
        qe({
          index: Ce.length - 1
        });
        return;
      }
      qe({
        index: V.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Ce.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    L ? !1 : K,
    P,
    Ye,
    qe,
    Pe,
    pe,
    L
  ]), fr = Ct((v) => {
    Ir(H, v), v && gt();
  });
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    (!W.current || W.current.nodeName !== "INPUT") && (W.current && W.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${W.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), S.useEffect(() => {
    gt();
  }, [gt]);
  const pt = (v) => {
    Ne || (dt(!0), ze(!0), ee && ee(v));
  }, Ke = (v, b) => {
    Ne && (dt(!1), U && U(v, b));
  }, Ze = (v, b, E, _) => {
    if (L) {
      if (K.length === b.length && K.every((B, ce) => B === b[ce]))
        return;
    } else if (K === b)
      return;
    q && q(v, b, E, _), Ae(b);
  }, Ue = S.useRef(!1), mt = (v, b, E = "selectOption", _ = "options") => {
    let B = E, ce = b;
    if (L) {
      if (ce = Array.isArray(K) ? K.slice() : [], process.env.NODE_ENV !== "production") {
        const he = ce.filter((Fe) => M(b, Fe));
        he.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${he.length} matches.`].join(`
`));
      }
      const ue = En(ce, (he) => M(b, he));
      ue === -1 ? ce.push(b) : _ !== "freeSolo" && (ce.splice(ue, 1), B = "removeOption");
    }
    Le(v, ce), Ze(v, ce, B, {
      option: b
    }), !p && (!v || !v.ctrlKey && !v.metaKey) && Ke(v, B), (s === !0 || s === "touch" && Ue.current || s === "mouse" && !Ue.current) && W.current.blur();
  };
  function Dt(v, b) {
    if (v === -1)
      return -1;
    let E = v;
    for (; ; ) {
      if (b === "next" && E === K.length || b === "previous" && E === -1)
        return -1;
      const _ = ne.querySelector(`[data-tag-index="${E}"]`);
      if (!_ || !_.hasAttribute("tabindex") || _.disabled || _.getAttribute("aria-disabled") === "true")
        E += b === "next" ? 1 : -1;
      else
        return E;
    }
  }
  const It = (v, b) => {
    if (!L)
      return;
    pe === "" && Ke(v, "toggleInput");
    let E = fe;
    fe === -1 ? pe === "" && b === "previous" && (E = K.length - 1) : (E += b === "next" ? 1 : -1, E < 0 && (E = 0), E === K.length && (E = -1)), E = Dt(E, b), D(E), it(E);
  }, qt = (v) => {
    re.current = !0, We(""), J && J(v, "", "clear"), Ze(v, L ? [] : null, "clear");
  }, Ut = (v) => (b) => {
    if (v.onKeyDown && v.onKeyDown(b), !b.defaultMuiPrevented && (fe !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(b.key) === -1 && (D(-1), it(-1)), b.which !== 229))
      switch (b.key) {
        case "Home":
          Pe && A && (b.preventDefault(), Ye({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: b
          }));
          break;
        case "End":
          Pe && A && (b.preventDefault(), Ye({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: b
          }));
          break;
        case "PageUp":
          b.preventDefault(), Ye({
            diff: -Zo,
            direction: "previous",
            reason: "keyboard",
            event: b
          }), pt(b);
          break;
        case "PageDown":
          b.preventDefault(), Ye({
            diff: Zo,
            direction: "next",
            reason: "keyboard",
            event: b
          }), pt(b);
          break;
        case "ArrowDown":
          b.preventDefault(), Ye({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: b
          }), pt(b);
          break;
        case "ArrowUp":
          b.preventDefault(), Ye({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: b
          }), pt(b);
          break;
        case "ArrowLeft":
          It(b, "previous");
          break;
        case "ArrowRight":
          It(b, "next");
          break;
        case "Enter":
          if (V.current !== -1 && Pe) {
            const E = Ce[V.current], _ = k ? k(E) : !1;
            if (b.preventDefault(), _)
              return;
            mt(b, E, "selectOption"), n && W.current.setSelectionRange(W.current.value.length, W.current.value.length);
          } else
            I && pe !== "" && at === !1 && (L && b.preventDefault(), mt(b, pe, "createOption", "freeSolo"));
          break;
        case "Escape":
          Pe ? (b.preventDefault(), b.stopPropagation(), Ke(b, "escape")) : c && (pe !== "" || L && K.length > 0) && (b.preventDefault(), b.stopPropagation(), qt(b));
          break;
        case "Backspace":
          if (L && !w && pe === "" && K.length > 0) {
            const E = fe === -1 ? K.length - 1 : fe, _ = K.slice();
            _.splice(E, 1), Ze(b, _, "removeOption", {
              option: K[E]
            });
          }
          break;
        case "Delete":
          if (L && !w && pe === "" && K.length > 0 && fe !== -1) {
            const E = fe, _ = K.slice();
            _.splice(E, 1), Ze(b, _, "removeOption", {
              option: K[E]
            });
          }
          break;
      }
  }, pr = (v) => {
    De(!0), le && !re.current && pt(v);
  }, Ht = (v) => {
    if (t(H)) {
      W.current.focus();
      return;
    }
    De(!1), Z.current = !0, re.current = !1, i && V.current !== -1 && Pe ? mt(v, Ce[V.current], "blur") : i && I && pe !== "" ? mt(v, pe, "blur", "freeSolo") : l && Le(v, K), Ke(v, "blur");
  }, _t = (v) => {
    const b = v.target.value;
    pe !== b && (We(b), ze(!1), J && J(v, b, "input")), b === "" ? !m && !L && Ze(v, null, "clear") : pt(v);
  }, je = (v) => {
    const b = Number(v.currentTarget.getAttribute("data-option-index"));
    V.current !== b && qe({
      event: v,
      index: b,
      reason: "mouse"
    });
  }, ke = (v) => {
    qe({
      event: v,
      index: Number(v.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Ue.current = !0;
  }, Ge = (v) => {
    const b = Number(v.currentTarget.getAttribute("data-option-index"));
    mt(v, Ce[b], "selectOption"), Ue.current = !1;
  }, Vr = (v) => (b) => {
    const E = K.slice();
    E.splice(v, 1), Ze(b, E, "removeOption", {
      option: K[v]
    });
  }, Yt = (v) => {
    Ne ? Ke(v, "toggleInput") : pt(v);
  }, zr = (v) => {
    v.currentTarget.contains(v.target) && v.target.getAttribute("id") !== X && v.preventDefault();
  }, mr = (v) => {
    v.currentTarget.contains(v.target) && (W.current.focus(), F && Z.current && W.current.selectionEnd - W.current.selectionStart === 0 && W.current.select(), Z.current = !1);
  }, f = (v) => {
    (pe === "" || !Ne) && Yt(v);
  };
  let $ = I && pe.length > 0;
  $ = $ || (L ? K.length > 0 : K !== null);
  let j = Ce;
  if (x) {
    const v = /* @__PURE__ */ new Map();
    let b = !1;
    j = Ce.reduce((E, _, B) => {
      const ce = x(_);
      return E.length > 0 && E[E.length - 1].group === ce ? E[E.length - 1].options.push(_) : (process.env.NODE_ENV !== "production" && (v.get(ce) && !b && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), b = !0), v.set(ce, !0)), E.push({
        key: B,
        index: B,
        group: ce,
        options: [_]
      })), E;
    }, []);
  }
  return y && Me && Ht(), {
    getRootProps: (v = {}) => R({
      "aria-owns": ft ? `${X}-listbox` : null
    }, v, {
      onKeyDown: Ut(v),
      onMouseDown: zr,
      onClick: mr
    }),
    getInputLabelProps: () => ({
      id: `${X}-label`,
      htmlFor: X
    }),
    getInputProps: () => ({
      id: X,
      value: pe,
      onBlur: Ht,
      onFocus: pr,
      onChange: _t,
      onMouseDown: f,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Pe ? "" : null,
      "aria-autocomplete": n ? "both" : "list",
      "aria-controls": ft ? `${X}-listbox` : void 0,
      "aria-expanded": ft,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: W,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: y
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: qt
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: Yt
    }),
    getTagProps: ({
      index: v
    }) => R({
      key: v,
      "data-tag-index": v,
      tabIndex: -1
    }, !w && {
      onDelete: Vr(v)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${X}-listbox`,
      "aria-labelledby": `${X}-label`,
      ref: fr,
      onMouseDown: (v) => {
        v.preventDefault();
      }
    }),
    getOptionProps: ({
      index: v,
      option: b
    }) => {
      const E = (L ? K : [K]).some((B) => B != null && M(b, B)), _ = k ? k(b) : !1;
      return {
        key: z(b),
        tabIndex: -1,
        role: "option",
        id: `${X}-option-${v}`,
        onMouseMove: je,
        onClick: Ge,
        onTouchStart: ke,
        "data-option-index": v,
        "aria-disabled": _,
        "aria-selected": E
      };
    },
    id: X,
    inputValue: pe,
    value: K,
    dirty: $,
    expanded: Pe && ne,
    popupOpen: Pe,
    focused: Me || fe !== -1,
    anchorEl: ne,
    setAnchorEl: ie,
    focusedTag: fe,
    groupedOptions: j
  };
}
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ru(e, t) {
  const r = rs(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Su = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, $u = ["values", "unit", "step"], Iu = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => R({}, r, {
    [n.key]: n.val
  }), {});
};
function _u(e) {
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
    unit: r = "px",
    step: n = 5
  } = e, o = Ie(e, $u), i = Iu(t), s = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function u(p, y) {
    const O = s.indexOf(y);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(O !== -1 && typeof t[s[O]] == "number" ? t[s[O]] : y) - n / 100}${r})`;
  }
  function d(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p);
  }
  function m(p) {
    const y = s.indexOf(p);
    return y === 0 ? l(s[1]) : y === s.length - 1 ? c(s[y]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return R({
    keys: s,
    values: i,
    up: l,
    down: c,
    between: u,
    only: d,
    not: m,
    unit: r
  }, o);
}
const ku = {
  borderRadius: 4
}, Au = ku, Mu = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {}, Mt = Mu;
function Pr(e, t) {
  return t ? Et(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const to = {
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
}, ea = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${to[e]}px)`
};
function Rt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || ea;
    return t.reduce((s, l, c) => (s[i.up(i.keys[c])] = r(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || ea;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || to).indexOf(l) !== -1) {
        const c = i.up(l);
        s[c] = r(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Du(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Nu(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function on(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function en(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = on(e, r) || n, t && (o = t(o, n, e)), o;
}
function Te(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = on(c, n) || {};
    return Rt(s, l, (m) => {
      let p = en(u, o, m);
      return m === p && typeof m == "string" && (p = en(u, o, `${t}${m === "default" ? "" : ae(m)}`, m)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Mt
  } : {}, i.filterProps = [t], i;
}
function ju(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Lu = {
  m: "margin",
  p: "padding"
}, Fu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ta = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Vu = ju((e) => {
  if (e.length > 2)
    if (ta[e])
      e = ta[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Lu[t], o = Fu[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), an = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], sn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], zu = [...an, ...sn];
function Lr(e, t, r, n) {
  var o;
  const i = (o = on(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function si(e) {
  return Lr(e, "spacing", 8, "spacing");
}
function Fr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Bu(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Fr(t, r), n), {});
}
function Wu(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Vu(r), i = Bu(o, n), s = e[r];
  return Rt(e, s, i);
}
function li(e, t) {
  const r = si(e.theme);
  return Object.keys(e).map((n) => Wu(e, t, n, r)).reduce(Pr, {});
}
function Se(e) {
  return li(e, an);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? an.reduce((e, t) => (e[t] = Mt, e), {}) : {};
Se.filterProps = an;
function $e(e) {
  return li(e, sn);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? sn.reduce((e, t) => (e[t] = Mt, e), {}) : {};
$e.filterProps = sn;
process.env.NODE_ENV !== "production" && zu.reduce((e, t) => (e[t] = Mt, e), {});
function qu(e = 8) {
  if (e.mui)
    return e;
  const t = si({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function ln(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Pr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function bt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Uu = Te({
  prop: "border",
  themeKey: "borders",
  transform: bt
}), Hu = Te({
  prop: "borderTop",
  themeKey: "borders",
  transform: bt
}), Yu = Te({
  prop: "borderRight",
  themeKey: "borders",
  transform: bt
}), Ku = Te({
  prop: "borderBottom",
  themeKey: "borders",
  transform: bt
}), Gu = Te({
  prop: "borderLeft",
  themeKey: "borders",
  transform: bt
}), Xu = Te({
  prop: "borderColor",
  themeKey: "palette"
}), Ju = Te({
  prop: "borderTopColor",
  themeKey: "palette"
}), Qu = Te({
  prop: "borderRightColor",
  themeKey: "palette"
}), Zu = Te({
  prop: "borderBottomColor",
  themeKey: "palette"
}), ed = Te({
  prop: "borderLeftColor",
  themeKey: "palette"
}), cn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Lr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Fr(t, n)
    });
    return Rt(e, e.borderRadius, r);
  }
  return null;
};
cn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Mt
} : {};
cn.filterProps = ["borderRadius"];
ln(Uu, Hu, Yu, Ku, Gu, Xu, Ju, Qu, Zu, ed, cn);
const un = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Lr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Fr(t, n)
    });
    return Rt(e, e.gap, r);
  }
  return null;
};
un.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Mt
} : {};
un.filterProps = ["gap"];
const dn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Lr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Fr(t, n)
    });
    return Rt(e, e.columnGap, r);
  }
  return null;
};
dn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Mt
} : {};
dn.filterProps = ["columnGap"];
const fn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Lr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Fr(t, n)
    });
    return Rt(e, e.rowGap, r);
  }
  return null;
};
fn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Mt
} : {};
fn.filterProps = ["rowGap"];
const td = Te({
  prop: "gridColumn"
}), rd = Te({
  prop: "gridRow"
}), nd = Te({
  prop: "gridAutoFlow"
}), od = Te({
  prop: "gridAutoColumns"
}), ad = Te({
  prop: "gridAutoRows"
}), id = Te({
  prop: "gridTemplateColumns"
}), sd = Te({
  prop: "gridTemplateRows"
}), ld = Te({
  prop: "gridTemplateAreas"
}), cd = Te({
  prop: "gridArea"
});
ln(un, dn, fn, td, rd, nd, od, ad, id, sd, ld, cd);
function rr(e, t) {
  return t === "grey" ? t : e;
}
const ud = Te({
  prop: "color",
  themeKey: "palette",
  transform: rr
}), dd = Te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: rr
}), fd = Te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: rr
});
ln(ud, dd, fd);
function et(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const pd = Te({
  prop: "width",
  transform: et
}), ro = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n;
      return {
        maxWidth: ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || to[r] || et(r)
      };
    };
    return Rt(e, e.maxWidth, t);
  }
  return null;
};
ro.filterProps = ["maxWidth"];
const md = Te({
  prop: "minWidth",
  transform: et
}), hd = Te({
  prop: "height",
  transform: et
}), gd = Te({
  prop: "maxHeight",
  transform: et
}), vd = Te({
  prop: "minHeight",
  transform: et
});
Te({
  prop: "size",
  cssProperty: "width",
  transform: et
});
Te({
  prop: "size",
  cssProperty: "height",
  transform: et
});
const bd = Te({
  prop: "boxSizing"
});
ln(pd, ro, md, hd, gd, vd, bd);
const yd = {
  // borders
  border: {
    themeKey: "borders",
    transform: bt
  },
  borderTop: {
    themeKey: "borders",
    transform: bt
  },
  borderRight: {
    themeKey: "borders",
    transform: bt
  },
  borderBottom: {
    themeKey: "borders",
    transform: bt
  },
  borderLeft: {
    themeKey: "borders",
    transform: bt
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
    style: cn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: rr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: rr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: rr
  },
  // spacing
  p: {
    style: $e
  },
  pt: {
    style: $e
  },
  pr: {
    style: $e
  },
  pb: {
    style: $e
  },
  pl: {
    style: $e
  },
  px: {
    style: $e
  },
  py: {
    style: $e
  },
  padding: {
    style: $e
  },
  paddingTop: {
    style: $e
  },
  paddingRight: {
    style: $e
  },
  paddingBottom: {
    style: $e
  },
  paddingLeft: {
    style: $e
  },
  paddingX: {
    style: $e
  },
  paddingY: {
    style: $e
  },
  paddingInline: {
    style: $e
  },
  paddingInlineStart: {
    style: $e
  },
  paddingInlineEnd: {
    style: $e
  },
  paddingBlock: {
    style: $e
  },
  paddingBlockStart: {
    style: $e
  },
  paddingBlockEnd: {
    style: $e
  },
  m: {
    style: Se
  },
  mt: {
    style: Se
  },
  mr: {
    style: Se
  },
  mb: {
    style: Se
  },
  ml: {
    style: Se
  },
  mx: {
    style: Se
  },
  my: {
    style: Se
  },
  margin: {
    style: Se
  },
  marginTop: {
    style: Se
  },
  marginRight: {
    style: Se
  },
  marginBottom: {
    style: Se
  },
  marginLeft: {
    style: Se
  },
  marginX: {
    style: Se
  },
  marginY: {
    style: Se
  },
  marginInline: {
    style: Se
  },
  marginInlineStart: {
    style: Se
  },
  marginInlineEnd: {
    style: Se
  },
  marginBlock: {
    style: Se
  },
  marginBlockStart: {
    style: Se
  },
  marginBlockEnd: {
    style: Se
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
    style: un
  },
  rowGap: {
    style: fn
  },
  columnGap: {
    style: dn
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
    transform: et
  },
  maxWidth: {
    style: ro
  },
  minWidth: {
    transform: et
  },
  height: {
    transform: et
  },
  maxHeight: {
    transform: et
  },
  minHeight: {
    transform: et
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
}, no = yd;
function xd(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Od(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Td() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, l = i[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: d,
      style: m
    } = l;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const p = on(o, u) || {};
    return m ? m(s) : Rt(s, n, (O) => {
      let g = en(p, d, O);
      return O === g && typeof O == "string" && (g = en(p, d, `${r}${O === "default" ? "" : ae(O)}`, O)), c === !1 ? g : {
        [c]: g
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : no;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Du(i.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((y) => {
        const O = Od(u[y], i);
        if (O != null)
          if (typeof O == "object")
            if (s[y])
              p = Pr(p, e(y, O, i, s));
            else {
              const g = Rt({
                theme: i
              }, O, (h) => ({
                [y]: h
              }));
              xd(g, O) ? p[y] = t({
                sx: O,
                theme: i
              }) : p = Pr(p, g);
            }
          else
            p = Pr(p, e(y, O, i, s));
      }), Nu(m, p);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const ci = Td();
ci.filterProps = ["sx"];
const oo = ci, Cd = ["breakpoints", "palette", "spacing", "shape"];
function ao(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Ie(e, Cd), l = _u(r), c = qu(o);
  let u = Et({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: R({
      mode: "light"
    }, n),
    spacing: c,
    shape: R({}, Au, i)
  }, s);
  return u = t.reduce((d, m) => Et(d, m), u), u.unstable_sxConfig = R({}, no, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return oo({
      sx: m,
      theme: this
    });
  }, u;
}
function Ed(e) {
  return Object.keys(e).length === 0;
}
function ui(e = null) {
  const t = S.useContext(ts);
  return !t || Ed(t) ? e : t;
}
const Pd = ao();
function di(e = Pd) {
  return ui(e);
}
const wd = ["variant"];
function ra(e) {
  return e.length === 0;
}
function fi(e) {
  const {
    variant: t
  } = e, r = Ie(e, wd);
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += ra(n) ? e[o] : ae(e[o]) : n += `${ra(n) ? o : ae(o)}${ae(e[o].toString())}`;
  }), n;
}
const Rd = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Sd(e) {
  return Object.keys(e).length === 0;
}
function $d(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Id = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, _d = (e, t) => {
  let r = [];
  t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants);
  const n = {};
  return r.forEach((o) => {
    const i = fi(o.props);
    n[i] = o.style;
  }), n;
}, kd = (e, t, r, n) => {
  var o;
  const {
    ownerState: i = {}
  } = e, s = [], l = r == null || (o = r.components) == null || (o = o[n]) == null ? void 0 : o.variants;
  return l && l.forEach((c) => {
    let u = !0;
    Object.keys(c.props).forEach((d) => {
      i[d] !== c.props[d] && e[d] !== c.props[d] && (u = !1);
    }), u && s.push(t[fi(c.props)]);
  }), s;
};
function Kr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ad = ao(), na = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function xr({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Sd(t) ? e : t[r] || t;
}
function Md(e) {
  return e ? (t, r) => r[e] : null;
}
function Dd(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Ad,
    rootShouldForwardProp: n = Kr,
    slotShouldForwardProp: o = Kr
  } = e, i = (s) => oo(R({}, s, {
    theme: xr(R({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    Su(s, (C) => C.filter((x) => !(x != null && x.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Md(na(u))
    } = l, y = Ie(l, Rd), O = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), g = m || !1;
    let h;
    process.env.NODE_ENV !== "production" && c && (h = `${c}-${na(u || "Root")}`);
    let P = Kr;
    u === "Root" || u === "root" ? P = n : u ? P = o : $d(s) && (P = void 0);
    const I = Ru(s, R({
      shouldForwardProp: P,
      label: h
    }, y)), k = (C, ...x) => {
      const A = x ? x.map((M) => typeof M == "function" && M.__emotion_real !== M ? (L) => M(R({}, L, {
        theme: xr(R({}, L, {
          defaultTheme: r,
          themeId: t
        }))
      })) : M) : [];
      let N = C;
      c && p && A.push((M) => {
        const L = xr(R({}, M, {
          defaultTheme: r,
          themeId: t
        })), q = Id(c, L);
        if (q) {
          const U = {};
          return Object.entries(q).forEach(([Q, J]) => {
            U[Q] = typeof J == "function" ? J(R({}, M, {
              theme: L
            })) : J;
          }), p(M, U);
        }
        return null;
      }), c && !O && A.push((M) => {
        const L = xr(R({}, M, {
          defaultTheme: r,
          themeId: t
        }));
        return kd(M, _d(c, L), L, c);
      }), g || A.push(i);
      const G = A.length - x.length;
      if (Array.isArray(C) && G > 0) {
        const M = new Array(G).fill("");
        N = [...C, ...M], N.raw = [...C.raw, ...M];
      } else
        typeof C == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        C.__emotion_real !== C && (N = (M) => C(R({}, M, {
          theme: xr(R({}, M, {
            defaultTheme: r,
            themeId: t
          }))
        })));
      const Y = I(N, ...A);
      if (process.env.NODE_ENV !== "production") {
        let M;
        c && (M = `${c}${ae(u || "")}`), M === void 0 && (M = `Styled(${$l(s)})`), Y.displayName = M;
      }
      return s.muiName && (Y.muiName = s.muiName), Y;
    };
    return I.withConfig && (k.withConfig = I.withConfig), k;
  };
}
function Nd(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Ga(t.components[r].defaultProps, n);
}
function jd({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = di(r);
  return n && (o = o[n] || o), Nd({
    theme: o,
    name: t,
    props: e
  });
}
function io(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function Ld(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function zt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return zt(Ld(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : or(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : or(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
function pn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Fd(e) {
  e = zt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, d = (u + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), pn({
    type: l,
    values: c
  });
}
function oa(e) {
  e = zt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? zt(Fd(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function aa(e, t) {
  const r = oa(e), n = oa(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ve(e, t) {
  return e = zt(e), t = io(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, pn(e);
}
function Vd(e, t) {
  if (e = zt(e), t = io(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return pn(e);
}
function zd(e, t) {
  if (e = zt(e), t = io(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return pn(e);
}
const so = "$$material";
function Bd(e, t) {
  return R({
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
const Wd = {
  black: "#000",
  white: "#fff"
}, Ar = Wd, qd = {
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
}, Ud = qd, Hd = {
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
}, Gt = Hd, Yd = {
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
}, Xt = Yd, Kd = {
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
}, Or = Kd, Gd = {
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
}, Jt = Gd, Xd = {
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
}, Qt = Xd, Jd = {
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
}, Zt = Jd, Qd = ["mode", "contrastThreshold", "tonalOffset"], ia = {
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
    paper: Ar.white,
    default: Ar.white
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
}, Pn = {
  text: {
    primary: Ar.white,
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
    active: Ar.white,
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
function sa(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = zd(e.main, o) : t === "dark" && (e.dark = Vd(e.main, i)));
}
function Zd(e = "light") {
  return e === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[700],
    light: Jt[400],
    dark: Jt[800]
  };
}
function ef(e = "light") {
  return e === "dark" ? {
    main: Gt[200],
    light: Gt[50],
    dark: Gt[400]
  } : {
    main: Gt[500],
    light: Gt[300],
    dark: Gt[700]
  };
}
function tf(e = "light") {
  return e === "dark" ? {
    main: Xt[500],
    light: Xt[300],
    dark: Xt[700]
  } : {
    main: Xt[700],
    light: Xt[400],
    dark: Xt[800]
  };
}
function rf(e = "light") {
  return e === "dark" ? {
    main: Qt[400],
    light: Qt[300],
    dark: Qt[700]
  } : {
    main: Qt[700],
    light: Qt[500],
    dark: Qt[900]
  };
}
function nf(e = "light") {
  return e === "dark" ? {
    main: Zt[400],
    light: Zt[300],
    dark: Zt[700]
  } : {
    main: Zt[800],
    light: Zt[500],
    dark: Zt[900]
  };
}
function of(e = "light") {
  return e === "dark" ? {
    main: Or[400],
    light: Or[300],
    dark: Or[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Or[500],
    dark: Or[900]
  };
}
function af(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Ie(e, Qd), i = e.primary || Zd(t), s = e.secondary || ef(t), l = e.error || tf(t), c = e.info || rf(t), u = e.success || nf(t), d = e.warning || of(t);
  function m(g) {
    const h = aa(g, Pn.text.primary) >= r ? Pn.text.primary : ia.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = aa(g, h);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${h} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const p = ({
    color: g,
    name: h,
    mainShade: P = 500,
    lightShade: I = 300,
    darkShade: k = 700
  }) => {
    if (g = R({}, g), !g.main && g[P] && (g.main = g[P]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : or(11, h ? ` (${h})` : "", P));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : or(12, h ? ` (${h})` : "", JSON.stringify(g.main)));
    return sa(g, "light", I, n), sa(g, "dark", k, n), g.contrastText || (g.contrastText = m(g.main)), g;
  }, y = {
    dark: Pn,
    light: ia
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Et(R({
    // A collection of common colors.
    common: R({}, Ar),
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
    grey: Ud,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, y[t]), o);
}
const sf = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function lf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const la = {
  textTransform: "uppercase"
}, ca = '"Roboto", "Helvetica", "Arial", sans-serif';
function cf(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = ca,
    // The default font size of the Material Specification.
    fontSize: o = 14,
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
    pxToRem: m
  } = r, p = Ie(r, sf);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = o / 14, O = m || ((P) => `${P / u * y}rem`), g = (P, I, k, C, x) => R({
    fontFamily: n,
    fontWeight: P,
    fontSize: O(I),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k
  }, n === ca ? {
    letterSpacing: `${lf(C / I)}em`
  } : {}, x, d), h = {
    h1: g(i, 96, 1.167, -1.5),
    h2: g(i, 60, 1.2, -0.5),
    h3: g(s, 48, 1.167, 0),
    h4: g(s, 34, 1.235, 0.25),
    h5: g(s, 24, 1.334, 0),
    h6: g(l, 20, 1.6, 0.15),
    subtitle1: g(s, 16, 1.75, 0.15),
    subtitle2: g(l, 14, 1.57, 0.1),
    body1: g(s, 16, 1.5, 0.15),
    body2: g(s, 14, 1.43, 0.15),
    button: g(l, 14, 1.75, 0.4, la),
    caption: g(s, 12, 1.66, 0.4),
    overline: g(s, 12, 2.66, 1, la),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Et(R({
    htmlFontSize: u,
    pxToRem: O,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, h), p, {
    clone: !1
    // No need to clone deep
  });
}
const uf = 0.2, df = 0.14, ff = 0.12;
function Re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${uf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${df})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ff})`].join(",");
}
const pf = ["none", Re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], mf = pf, hf = ["duration", "easing", "delay"], gf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, vf = {
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
function ua(e) {
  return `${Math.round(e)}ms`;
}
function bf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function yf(e) {
  const t = R({}, gf, e.easing), r = R({}, vf, e.duration);
  return R({
    getAutoHeightDuration: bf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = Ie(i, hf);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof s == "string" ? s : ua(s)} ${l} ${typeof c == "string" ? c : ua(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const xf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Of = xf, Tf = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Cf(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Ie(e, Tf);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : or(18));
  const l = af(n), c = ao(e);
  let u = Et(c, {
    mixins: Bd(c.breakpoints, r),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: mf.slice(),
    typography: cf(l, i),
    transitions: yf(o),
    zIndex: R({}, Of)
  });
  if (u = Et(u, s), u = t.reduce((d, m) => Et(d, m), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, y) => {
      let O;
      for (O in p) {
        const g = p[O];
        if (d.indexOf(O) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const h = Ot("", O);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${h}' syntax:`, JSON.stringify({
              root: {
                [`&.${h}`]: g
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[O] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const y = u.components[p].styleOverrides;
      y && p.indexOf("Mui") === 0 && m(y, p);
    });
  }
  return u.unstable_sxConfig = R({}, no, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return oo({
      sx: m,
      theme: this
    });
  }, u;
}
const Ef = Cf(), lo = Ef;
function Pf() {
  const e = di(lo);
  return process.env.NODE_ENV !== "production" && S.useDebugValue(e), e[so] || e;
}
function St({
  props: e,
  name: t
}) {
  return jd({
    props: e,
    name: t,
    defaultTheme: lo,
    themeId: so
  });
}
const wf = (e) => Kr(e) && e !== "classes", Rf = Dd({
  themeId: so,
  defaultTheme: lo,
  rootShouldForwardProp: wf
}), _e = Rf, Sf = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, da = Sf, $f = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], If = _e(ii, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), pi = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n;
  const o = ui(), i = St({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: m,
    keepMounted: p,
    modifiers: y,
    open: O,
    placement: g,
    popperOptions: h,
    popperRef: P,
    transition: I,
    slots: k,
    slotProps: C
  } = i, x = Ie(i, $f), A = (n = k == null ? void 0 : k.root) != null ? n : c == null ? void 0 : c.Root, N = R({
    anchorEl: s,
    container: d,
    disablePortal: m,
    keepMounted: p,
    modifiers: y,
    open: O,
    placement: g,
    popperOptions: h,
    popperRef: P,
    transition: I
  }, x);
  return /* @__PURE__ */ T(If, R({
    as: l,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: A
    },
    slotProps: C ?? u
  }, N, {
    ref: r
  }));
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
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
  anchorEl: a.oneOfType([$r, a.object, a.func]),
  /**
   * Popper render function or node.
   */
  children: a.oneOfType([a.node, a.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([$r, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: a.arrayOf(a.shape({
    data: a.object,
    effect: a.func,
    enabled: a.bool,
    fn: a.func,
    name: a.any,
    options: a.object,
    phase: a.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: a.arrayOf(a.string),
    requiresIfExists: a.arrayOf(a.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: a.shape({
    modifiers: a.array,
    onFirstUpdate: a.func,
    placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: a.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Hn,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: a.bool
});
const mi = pi;
function _f(e) {
  return Ot("MuiListSubheader", e);
}
ot("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const kf = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Af = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, s = {
    root: ["root", r !== "default" && `color${ae(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return kt(s, _f, t);
}, Mf = _e("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${ae(r.color)}`], !r.disableGutters && t.gutters, r.inset && t.inset, !r.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => R({
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
})), co = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = St({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: i = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = n, d = Ie(n, kf), m = R({}, n, {
    color: i,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), p = Af(m);
  return /* @__PURE__ */ T(Mf, R({
    as: s,
    className: Ee(p.root, o),
    ref: r,
    ownerState: m
  }, d));
});
co.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (co.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: a.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: a.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: a.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Df = co;
function Nf(e) {
  return Ot("MuiPaper", e);
}
ot("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const jf = ["className", "component", "elevation", "square", "variant"], Lf = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return kt(i, Nf, o);
}, Ff = _e("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  return R({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && R({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Ve("#fff", da(t.elevation))}, ${Ve("#fff", da(t.elevation))})`
  }, e.vars && {
    backgroundImage: (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
  }));
}), hi = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = St({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = n, u = Ie(n, jf), d = R({}, n, {
    component: i,
    elevation: s,
    square: l,
    variant: c
  }), m = Lf(d);
  return process.env.NODE_ENV !== "production" && Pf().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ T(Ff, R({
    as: i,
    ownerState: d,
    className: Ee(m.root, o),
    ref: r
  }, u));
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: nr(Ka, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: a.oneOfType([a.oneOf(["elevation", "outlined"]), a.string])
});
const gi = hi;
function Vf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, In(e, t);
}
const fa = ht.createContext(null);
function uo(e, t) {
  var r = function(i) {
    return t && Ur(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ii.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function zf(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var c in t) {
    if (n[c])
      for (s = 0; s < n[c].length; s++) {
        var u = n[c][s];
        l[n[c][s]] = r(u);
      }
    l[c] = r(c);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = r(o[s]);
  return l;
}
function jt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Bf(e, t) {
  return uo(e.children, function(r) {
    return Tr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: jt(r, "appear", e),
      enter: jt(r, "enter", e),
      exit: jt(r, "exit", e)
    });
  });
}
function Wf(e, t, r) {
  var n = uo(e.children), o = zf(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Ur(s)) {
      var l = i in t, c = i in n, u = t[i], d = Ur(u) && !u.props.in;
      c && (!l || d) ? o[i] = Tr(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: jt(s, "exit", e),
        enter: jt(s, "enter", e)
      }) : !c && l && !d ? o[i] = Tr(s, {
        in: !1
      }) : c && l && Ur(u) && (o[i] = Tr(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: jt(s, "exit", e),
        enter: jt(s, "enter", e)
      }));
    }
  }), o;
}
var qf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Uf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, fo = /* @__PURE__ */ function(e) {
  Vf(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Ds(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, l = i.handleExited, c = i.firstRender;
    return {
      children: c ? Bf(o, l) : Wf(o, s, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = uo(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = R({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = Ie(o, ["component", "childFactory"]), c = this.state.contextValue, u = qf(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ ht.createElement(fa.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ht.createElement(fa.Provider, {
      value: c
    }, /* @__PURE__ */ ht.createElement(i, l, u));
  }, t;
}(ht.Component);
fo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: a.any,
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
  children: a.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: a.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: a.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: a.bool,
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
  childFactory: a.func
} : {};
fo.defaultProps = Uf;
const Hf = fo;
function vi(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, m] = S.useState(!1), p = Ee(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, O = Ee(r.child, d && r.childLeaving, n && r.childPulsate);
  return !l && !d && m(!0), S.useEffect(() => {
    if (!l && c != null) {
      const g = setTimeout(c, u);
      return () => {
        clearTimeout(g);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ T("span", {
    className: p,
    style: y,
    children: /* @__PURE__ */ T("span", {
      className: O
    })
  });
}
process.env.NODE_ENV !== "production" && (vi.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: a.object.isRequired,
  className: a.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: a.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: a.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: a.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: a.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: a.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: a.number,
  /**
   * exit delay
   */
  timeout: a.number.isRequired
});
const Yf = ot("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), st = Yf, Kf = ["center", "classes", "className"];
let mn = (e) => e, pa, ma, ha, ga;
const Nn = 550, Gf = 80, Xf = zn(pa || (pa = mn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Jf = zn(ma || (ma = mn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Qf = zn(ha || (ha = mn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Zf = _e("span", {
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
}), ep = _e(vi, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ga || (ga = mn`
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
`), st.rippleVisible, Xf, Nn, ({
  theme: e
}) => e.transitions.easing.easeInOut, st.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, st.child, st.childLeaving, Jf, Nn, ({
  theme: e
}) => e.transitions.easing.easeInOut, st.childPulsate, Qf, ({
  theme: e
}) => e.transitions.easing.easeInOut), bi = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = St({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, l = Ie(n, Kf), [c, u] = S.useState([]), d = S.useRef(0), m = S.useRef(null);
  S.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const p = S.useRef(!1), y = S.useRef(0), O = S.useRef(null), g = S.useRef(null);
  S.useEffect(() => () => {
    y.current && clearTimeout(y.current);
  }, []);
  const h = S.useCallback((C) => {
    const {
      pulsate: x,
      rippleX: A,
      rippleY: N,
      rippleSize: G,
      cb: Y
    } = C;
    u((M) => [...M, /* @__PURE__ */ T(ep, {
      classes: {
        ripple: Ee(i.ripple, st.ripple),
        rippleVisible: Ee(i.rippleVisible, st.rippleVisible),
        ripplePulsate: Ee(i.ripplePulsate, st.ripplePulsate),
        child: Ee(i.child, st.child),
        childLeaving: Ee(i.childLeaving, st.childLeaving),
        childPulsate: Ee(i.childPulsate, st.childPulsate)
      },
      timeout: Nn,
      pulsate: x,
      rippleX: A,
      rippleY: N,
      rippleSize: G
    }, d.current)]), d.current += 1, m.current = Y;
  }, [i]), P = S.useCallback((C = {}, x = {}, A = () => {
  }) => {
    const {
      pulsate: N = !1,
      center: G = o || x.pulsate,
      fakeElement: Y = !1
      // For test purposes
    } = x;
    if ((C == null ? void 0 : C.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (p.current = !0);
    const M = Y ? null : g.current, L = M ? M.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let q, U, Q;
    if (G || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      q = Math.round(L.width / 2), U = Math.round(L.height / 2);
    else {
      const {
        clientX: J,
        clientY: ee
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      q = Math.round(J - L.left), U = Math.round(ee - L.top);
    }
    if (G)
      Q = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3), Q % 2 === 0 && (Q += 1);
    else {
      const J = Math.max(Math.abs((M ? M.clientWidth : 0) - q), q) * 2 + 2, ee = Math.max(Math.abs((M ? M.clientHeight : 0) - U), U) * 2 + 2;
      Q = Math.sqrt(J ** 2 + ee ** 2);
    }
    C != null && C.touches ? O.current === null && (O.current = () => {
      h({
        pulsate: N,
        rippleX: q,
        rippleY: U,
        rippleSize: Q,
        cb: A
      });
    }, y.current = setTimeout(() => {
      O.current && (O.current(), O.current = null);
    }, Gf)) : h({
      pulsate: N,
      rippleX: q,
      rippleY: U,
      rippleSize: Q,
      cb: A
    });
  }, [o, h]), I = S.useCallback(() => {
    P({}, {
      pulsate: !0
    });
  }, [P]), k = S.useCallback((C, x) => {
    if (clearTimeout(y.current), (C == null ? void 0 : C.type) === "touchend" && O.current) {
      O.current(), O.current = null, y.current = setTimeout(() => {
        k(C, x);
      });
      return;
    }
    O.current = null, u((A) => A.length > 0 ? A.slice(1) : A), m.current = x;
  }, []);
  return S.useImperativeHandle(r, () => ({
    pulsate: I,
    start: P,
    stop: k
  }), [I, P, k]), /* @__PURE__ */ T(Zf, R({
    className: Ee(st.root, i.root, s),
    ref: g
  }, l, {
    children: /* @__PURE__ */ T(Hf, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (bi.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: a.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string
});
const tp = bi;
function rp(e) {
  return Ot("MuiButtonBase", e);
}
const np = ot("MuiButtonBase", ["root", "disabled", "focusVisible"]), op = np, ap = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], ip = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = kt({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, rp, o);
  return r && n && (s.root += ` ${n}`), s;
}, sp = _e("button", {
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
  [`&.${op.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), yi = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = St({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: m = !1,
    focusRipple: p = !1,
    LinkComponent: y = "a",
    onBlur: O,
    onClick: g,
    onContextMenu: h,
    onDragLeave: P,
    onFocus: I,
    onFocusVisible: k,
    onKeyDown: C,
    onKeyUp: x,
    onMouseDown: A,
    onMouseLeave: N,
    onMouseUp: G,
    onTouchEnd: Y,
    onTouchMove: M,
    onTouchStart: L,
    tabIndex: q = 0,
    TouchRippleProps: U,
    touchRippleRef: Q,
    type: J
  } = n, ee = Ie(n, ap), se = S.useRef(null), le = S.useRef(null), de = Pt(le, Q), {
    isFocusVisibleRef: w,
    onFocus: F,
    onBlur: oe,
    ref: X
  } = Ua(), [z, re] = S.useState(!1);
  u && z && re(!1), S.useImperativeHandle(o, () => ({
    focusVisible: () => {
      re(!0), se.current.focus();
    }
  }), []);
  const [Z, W] = S.useState(!1);
  S.useEffect(() => {
    W(!0);
  }, []);
  const H = Z && !d && !u;
  S.useEffect(() => {
    z && p && !d && Z && le.current.pulsate();
  }, [d, p, z, Z]);
  function ne(te, ft, it = m) {
    return Ct(($t) => (ft && ft($t), !it && le.current && le.current[te]($t), !0));
  }
  const ie = ne("start", A), fe = ne("stop", h), D = ne("stop", P), we = ne("stop", G), V = ne("stop", (te) => {
    z && te.preventDefault(), N && N(te);
  }), K = ne("start", L), Ae = ne("stop", Y), pe = ne("stop", M), We = ne("stop", (te) => {
    oe(te), w.current === !1 && re(!1), O && O(te);
  }, !1), Me = Ct((te) => {
    se.current || (se.current = te.currentTarget), F(te), w.current === !0 && (re(!0), k && k(te)), I && I(te);
  }), De = () => {
    const te = se.current;
    return c && c !== "button" && !(te.tagName === "A" && te.href);
  }, Le = S.useRef(!1), Ne = Ct((te) => {
    p && !Le.current && z && le.current && te.key === " " && (Le.current = !0, le.current.stop(te, () => {
      le.current.start(te);
    })), te.target === te.currentTarget && De() && te.key === " " && te.preventDefault(), C && C(te), te.target === te.currentTarget && De() && te.key === "Enter" && !u && (te.preventDefault(), g && g(te));
  }), dt = Ct((te) => {
    p && te.key === " " && le.current && z && !te.defaultPrevented && (Le.current = !1, le.current.stop(te, () => {
      le.current.pulsate(te);
    })), x && x(te), g && te.target === te.currentTarget && De() && te.key === " " && !te.defaultPrevented && g(te);
  });
  let He = c;
  He === "button" && (ee.href || ee.to) && (He = y);
  const ze = {};
  He === "button" ? (ze.type = J === void 0 ? "button" : J, ze.disabled = u) : (!ee.href && !ee.to && (ze.role = "button"), u && (ze["aria-disabled"] = u));
  const at = Pt(r, X, se);
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    H && !le.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [H]);
  const Pe = R({}, n, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: p,
    tabIndex: q,
    focusVisible: z
  }), Ce = ip(Pe);
  return /* @__PURE__ */ ge(sp, R({
    as: He,
    className: Ee(Ce.root, l),
    ownerState: Pe,
    onBlur: We,
    onClick: g,
    onContextMenu: fe,
    onFocus: Me,
    onKeyDown: Ne,
    onKeyUp: dt,
    onMouseDown: ie,
    onMouseLeave: V,
    onMouseUp: we,
    onDragLeave: D,
    onTouchEnd: Ae,
    onTouchMove: pe,
    onTouchStart: K,
    ref: at,
    tabIndex: u ? -1 : q,
    type: J
  }, ze, ee, {
    children: [s, H ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ T(tp, R({
        ref: de,
        center: i
      }, U))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Hn,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: a.bool,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Tl,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: a.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  /**
   * @ignore
   */
  href: a.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: a.elementType,
  /**
   * @ignore
   */
  onBlur: a.func,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * @ignore
   */
  onContextMenu: a.func,
  /**
   * @ignore
   */
  onDragLeave: a.func,
  /**
   * @ignore
   */
  onFocus: a.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * @ignore
   */
  onMouseDown: a.func,
  /**
   * @ignore
   */
  onMouseLeave: a.func,
  /**
   * @ignore
   */
  onMouseUp: a.func,
  /**
   * @ignore
   */
  onTouchEnd: a.func,
  /**
   * @ignore
   */
  onTouchMove: a.func,
  /**
   * @ignore
   */
  onTouchStart: a.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @default 0
   */
  tabIndex: a.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: a.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: a.oneOfType([a.func, a.shape({
    current: a.shape({
      pulsate: a.func.isRequired,
      start: a.func.isRequired,
      stop: a.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string])
});
const jn = yi;
function lp(e) {
  return Ot("MuiIconButton", e);
}
const cp = ot("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), up = cp, dp = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], fp = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", r && "disabled", n !== "default" && `color${ae(n)}`, o && `edge${ae(o)}`, `size${ae(i)}`]
  };
  return kt(s, lp, t);
}, pp = _e(jn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${ae(r.color)}`], r.edge && t[`edge${ae(r.edge)}`], t[`size${ae(r.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => R({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette.action.active, e.palette.action.hoverOpacity),
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
  var r;
  const n = (r = (e.vars || e).palette) == null ? void 0 : r[t.color];
  return R({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && R({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": R({}, n && {
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(n.main, e.palette.action.hoverOpacity)
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
    [`&.${up.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), xi = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = St({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = n, m = Ie(n, dp), p = R({}, n, {
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), y = fp(p);
  return /* @__PURE__ */ T(pp, R({
    className: Ee(y.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r,
    ownerState: p
  }, m, {
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (xi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: nr(a.node, (e) => S.Children.toArray(e.children).some((r) => /* @__PURE__ */ S.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: a.oneOfType([a.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: a.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium", "large"]), a.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Oi = xi;
function mp(e) {
  return Ot("MuiSvgIcon", e);
}
ot("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const hp = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], gp = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ae(t)}`, `fontSize${ae(r)}`]
  };
  return kt(o, mp, n);
}, vp = _e("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ae(r.color)}`], t[`fontSize${ae(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, i, s, l, c, u, d, m, p, y, O;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (m = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? m : {
      action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
      disabled: (O = (e.vars || e).palette) == null || (O = O.action) == null ? void 0 : O.disabled,
      inherit: void 0
    }[t.color]
  };
}), po = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = St({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: m,
    viewBox: p = "0 0 24 24"
  } = n, y = Ie(n, hp), O = /* @__PURE__ */ S.isValidElement(o) && o.type === "svg", g = R({}, n, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: O
  }), h = {};
  d || (h.viewBox = p);
  const P = gp(g);
  return /* @__PURE__ */ ge(vp, R({
    as: l,
    className: Ee(P.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r
  }, h, y, O && o.props, {
    ownerState: g,
    children: [O ? o.props.children : o, m ? /* @__PURE__ */ T("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (po.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: a.oneOfType([a.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: a.oneOfType([a.oneOf(["inherit", "large", "medium", "small"]), a.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: a.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: a.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: a.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: a.string
});
po.muiName = "SvgIcon";
const va = po;
function hn(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ T(va, R({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = va.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(r));
}
const bp = hn(/* @__PURE__ */ T("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function yp(e) {
  return Ot("MuiChip", e);
}
const xp = ot("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), ve = xp, Op = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], Tp = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: i,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, r && "disabled", `size${ae(n)}`, `color${ae(o)}`, l && "clickable", l && `clickableColor${ae(o)}`, s && "deletable", s && `deletableColor${ae(o)}`, `${c}${ae(o)}`],
    label: ["label", `label${ae(n)}`],
    avatar: ["avatar", `avatar${ae(n)}`, `avatarColor${ae(o)}`],
    icon: ["icon", `icon${ae(n)}`, `iconColor${ae(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ae(n)}`, `deleteIconColor${ae(o)}`, `deleteIcon${ae(c)}Color${ae(o)}`]
  };
  return kt(u, yp, t);
}, Cp = _e("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      color: n,
      iconColor: o,
      clickable: i,
      onDelete: s,
      size: l,
      variant: c
    } = r;
    return [{
      [`& .${ve.avatar}`]: t.avatar
    }, {
      [`& .${ve.avatar}`]: t[`avatar${ae(l)}`]
    }, {
      [`& .${ve.avatar}`]: t[`avatarColor${ae(n)}`]
    }, {
      [`& .${ve.icon}`]: t.icon
    }, {
      [`& .${ve.icon}`]: t[`icon${ae(l)}`]
    }, {
      [`& .${ve.icon}`]: t[`iconColor${ae(o)}`]
    }, {
      [`& .${ve.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ve.deleteIcon}`]: t[`deleteIcon${ae(l)}`]
    }, {
      [`& .${ve.deleteIcon}`]: t[`deleteIconColor${ae(n)}`]
    }, {
      [`& .${ve.deleteIcon}`]: t[`deleteIcon${ae(c)}Color${ae(n)}`]
    }, t.root, t[`size${ae(l)}`], t[`color${ae(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${ae(n)})`], s && t.deletable, s && n !== "default" && t[`deletableColor${ae(n)}`], t[c], t[`${c}${ae(n)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const r = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return R({
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
    [`&.${ve.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ve.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : r,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ve.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ve.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ve.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ve.icon}`]: R({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && R({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : r
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${ve.deleteIcon}`]: R({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Ve(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Ve(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : Ve(e.palette[t.color].contrastText, 0.7),
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
    [`&.${ve.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ve(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${ve.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => R({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ve(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${ve.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ve(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${ve.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => R({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${ve.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${ve.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${ve.avatar}`]: {
    marginLeft: 4
  },
  [`& .${ve.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${ve.icon}`]: {
    marginLeft: 4
  },
  [`& .${ve.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${ve.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${ve.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ve(e.palette[t.color].main, 0.7)}`,
  [`&.${ve.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${ve.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ve(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${ve.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ve(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Ep = _e("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${ae(n)}`]];
  }
})(({
  ownerState: e
}) => R({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}));
function ba(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Ti = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = St({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: m,
    label: p,
    onClick: y,
    onDelete: O,
    onKeyDown: g,
    onKeyUp: h,
    size: P = "medium",
    variant: I = "filled",
    tabIndex: k,
    skipFocusWhenDisabled: C = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = n, x = Ie(n, Op), A = S.useRef(null), N = Pt(A, r), G = (de) => {
    de.stopPropagation(), O && O(de);
  }, Y = (de) => {
    de.currentTarget === de.target && ba(de) && de.preventDefault(), g && g(de);
  }, M = (de) => {
    de.currentTarget === de.target && (O && ba(de) ? O(de) : de.key === "Escape" && A.current && A.current.blur()), h && h(de);
  }, L = s !== !1 && y ? !0 : s, q = L || O ? jn : c || "div", U = R({}, n, {
    component: q,
    disabled: d,
    size: P,
    color: l,
    iconColor: /* @__PURE__ */ S.isValidElement(m) && m.props.color || l,
    onDelete: !!O,
    clickable: L,
    variant: I
  }), Q = Tp(U), J = q === jn ? R({
    component: c || "div",
    focusVisibleClassName: Q.focusVisible
  }, O && {
    disableRipple: !0
  }) : {};
  let ee = null;
  O && (ee = u && /* @__PURE__ */ S.isValidElement(u) ? /* @__PURE__ */ S.cloneElement(u, {
    className: Ee(u.props.className, Q.deleteIcon),
    onClick: G
  }) : /* @__PURE__ */ T(bp, {
    className: Ee(Q.deleteIcon),
    onClick: G
  }));
  let se = null;
  o && /* @__PURE__ */ S.isValidElement(o) && (se = /* @__PURE__ */ S.cloneElement(o, {
    className: Ee(Q.avatar, o.props.className)
  }));
  let le = null;
  return m && /* @__PURE__ */ S.isValidElement(m) && (le = /* @__PURE__ */ S.cloneElement(m, {
    className: Ee(Q.icon, m.props.className)
  })), process.env.NODE_ENV !== "production" && se && le && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ ge(Cp, R({
    as: q,
    className: Ee(Q.root, i),
    disabled: L && d ? !0 : void 0,
    onClick: y,
    onKeyDown: Y,
    onKeyUp: M,
    ref: N,
    tabIndex: C && d ? -1 : k,
    ownerState: U
  }, J, x, {
    children: [se || le, /* @__PURE__ */ T(Ep, {
      className: Ee(Q.label),
      ownerState: U,
      children: p
    }), ee]
  }));
});
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Avatar element to display.
   */
  avatar: a.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: qa,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: a.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: a.oneOfType([a.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: a.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * Icon element.
   */
  icon: a.element,
  /**
   * The content of the component.
   */
  label: a.node,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["medium", "small"]), a.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @ignore
   */
  tabIndex: a.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: a.oneOfType([a.oneOf(["filled", "outlined"]), a.string])
});
const Pp = Ti, wp = ot("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), vt = wp, Rp = R({}, vt, ot("MuiInput", ["root", "underline", "input"])), wn = Rp, Sp = R({}, vt, ot("MuiOutlinedInput", ["root", "notchedOutline", "input"])), ya = Sp, $p = R({}, vt, ot("MuiFilledInput", ["root", "underline", "input"])), er = $p, Ip = hn(/* @__PURE__ */ T("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), _p = hn(/* @__PURE__ */ T("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function kp(e) {
  return Ot("MuiAutocomplete", e);
}
const Ap = ot("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), me = Ap;
var xa, Oa;
const Mp = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], Dp = ["ref"], Np = (e) => {
  const {
    classes: t,
    disablePortal: r,
    expanded: n,
    focused: o,
    fullWidth: i,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: d
  } = e, m = {
    root: ["root", n && "expanded", o && "focused", i && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${ae(d)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", u && "popupIndicatorOpen"],
    popper: ["popper", r && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return kt(m, kp, t);
}, jp = _e("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      fullWidth: n,
      hasClearIcon: o,
      hasPopupIcon: i,
      inputFocused: s,
      size: l
    } = r;
    return [{
      [`& .${me.tag}`]: t.tag
    }, {
      [`& .${me.tag}`]: t[`tagSize${ae(l)}`]
    }, {
      [`& .${me.inputRoot}`]: t.inputRoot
    }, {
      [`& .${me.input}`]: t.input
    }, {
      [`& .${me.input}`]: s && t.inputFocused
    }, t.root, n && t.fullWidth, i && t.hasPopupIcon, o && t.hasClearIcon];
  }
})(({
  ownerState: e
}) => R({
  [`&.${me.focused} .${me.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${me.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, e.fullWidth && {
  width: "100%"
}, {
  [`& .${me.tag}`]: R({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, e.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${me.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${me.hasPopupIcon}&, .${me.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${me.hasPopupIcon}.${me.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${me.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${wn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${wn.root}.${vt.sizeSmall}`]: {
    [`& .${wn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${ya.root}`]: {
    padding: 9,
    [`.${me.hasPopupIcon}&, .${me.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${me.hasPopupIcon}.${me.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${me.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${me.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${ya.root}.${vt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${me.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${er.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${me.hasPopupIcon}&, .${me.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${me.hasPopupIcon}.${me.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${er.input}`]: {
      padding: "7px 4px"
    },
    [`& .${me.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${er.root}.${vt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${er.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${vt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${er.root}.${vt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${me.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${er.root}.${vt.hiddenLabel}.${vt.sizeSmall}`]: {
    [`& .${me.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${me.input}`]: R({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), Lp = _e("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), Fp = _e(Oi, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Vp = _e(Oi, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => R({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen)
})(({
  ownerState: e
}) => R({
  padding: 2,
  marginRight: -2
}, e.popupOpen && {
  transform: "rotate(180deg)"
})), zp = _e(mi, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${me.option}`]: t.option
    }, t.popper, r.disablePortal && t.popperDisablePortal];
  }
})(({
  theme: e,
  ownerState: t
}) => R({
  zIndex: (e.vars || e).zIndex.modal
}, t.disablePortal && {
  position: "absolute"
})), Bp = _e(gi, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => R({}, e.typography.body1, {
  overflow: "auto"
})), Wp = _e("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), qp = _e("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Up = _e("div", {
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
  [`& .${me.option}`]: {
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
    [`&.${me.focused}`]: {
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
    [`&.${me.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${me.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${me.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), Hp = _e(Df, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), Yp = _e("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${me.option}`]: {
    paddingLeft: 24
  }
}), Ci = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n, o, i, s;
  const l = St({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: c = !1,
    autoHighlight: u = !1,
    autoSelect: d = !1,
    blurOnSelect: m = !1,
    ChipProps: p,
    className: y,
    clearIcon: O = xa || (xa = /* @__PURE__ */ T(Ip, {
      fontSize: "small"
    })),
    clearOnBlur: g = !l.freeSolo,
    clearOnEscape: h = !1,
    clearText: P = "Clear",
    closeText: I = "Close",
    componentsProps: k = {},
    defaultValue: C = l.multiple ? [] : null,
    disableClearable: x = !1,
    disableCloseOnSelect: A = !1,
    disabled: N = !1,
    disabledItemsFocusable: G = !1,
    disableListWrap: Y = !1,
    disablePortal: M = !1,
    filterSelectedOptions: L = !1,
    forcePopupIcon: q = "auto",
    freeSolo: U = !1,
    fullWidth: Q = !1,
    getLimitTagsText: J = (E) => `+${E}`,
    getOptionLabel: ee,
    groupBy: se,
    handleHomeEndKeys: le = !l.freeSolo,
    includeInputInList: de = !1,
    limitTags: w = -1,
    ListboxComponent: F = "ul",
    ListboxProps: oe,
    loading: X = !1,
    loadingText: z = "Loading…",
    multiple: re = !1,
    noOptionsText: Z = "No options",
    openOnFocus: W = !1,
    openText: H = "Open",
    PaperComponent: ne = gi,
    PopperComponent: ie = mi,
    popupIcon: fe = Oa || (Oa = /* @__PURE__ */ T(_p, {})),
    readOnly: D = !1,
    renderGroup: we,
    renderInput: V,
    renderOption: K,
    renderTags: Ae,
    selectOnFocus: pe = !l.freeSolo,
    size: We = "medium",
    slotProps: Me = {}
  } = l, De = Ie(l, Mp), {
    getRootProps: Le,
    getInputProps: Ne,
    getInputLabelProps: dt,
    getPopupIndicatorProps: He,
    getClearProps: ze,
    getTagProps: at,
    getListboxProps: Pe,
    getOptionProps: Ce,
    value: te,
    dirty: ft,
    expanded: it,
    id: $t,
    popupOpen: qe,
    focused: Ye,
    focusedTag: dr,
    anchorEl: gt,
    setAnchorEl: fr,
    inputValue: pt,
    groupedOptions: Ke
  } = wu(R({}, l, {
    componentName: "Autocomplete"
  })), Ze = !x && !N && ft && !D, Ue = (!U || q === !0) && q !== !1, {
    onMouseDown: mt
  } = Ne(), {
    ref: Dt
  } = oe ?? {}, It = Pe(), {
    ref: qt
  } = It, Ut = Ie(It, Dp), pr = Pt(qt, Dt), _t = ee || ((E) => {
    var _;
    return (_ = E.label) != null ? _ : E;
  }), je = R({}, l, {
    disablePortal: M,
    expanded: it,
    focused: Ye,
    fullWidth: Q,
    getOptionLabel: _t,
    hasClearIcon: Ze,
    hasPopupIcon: Ue,
    inputFocused: dr === -1,
    popupOpen: qe,
    size: We
  }), ke = Np(je);
  let Ge;
  if (re && te.length > 0) {
    const E = (_) => R({
      className: ke.tag,
      disabled: N
    }, at(_));
    Ae ? Ge = Ae(te, E, je) : Ge = te.map((_, B) => /* @__PURE__ */ T(Pp, R({
      label: _t(_),
      size: We
    }, E({
      index: B
    }), p)));
  }
  if (w > -1 && Array.isArray(Ge)) {
    const E = Ge.length - w;
    !Ye && E > 0 && (Ge = Ge.splice(0, w), Ge.push(/* @__PURE__ */ T("span", {
      className: ke.tag,
      children: J(E)
    }, Ge.length)));
  }
  const Yt = we || ((E) => /* @__PURE__ */ ge("li", {
    children: [/* @__PURE__ */ T(Hp, {
      className: ke.groupLabel,
      ownerState: je,
      component: "div",
      children: E.group
    }), /* @__PURE__ */ T(Yp, {
      className: ke.groupUl,
      ownerState: je,
      children: E.children
    })]
  }, E.key)), mr = K || ((E, _) => /* @__PURE__ */ T("li", R({}, E, {
    children: _t(_)
  }))), f = (E, _) => {
    const B = Ce({
      option: E,
      index: _
    });
    return mr(R({}, B, {
      className: ke.option
    }), E, {
      selected: B["aria-selected"],
      index: _,
      inputValue: pt
    }, je);
  }, $ = (n = Me.clearIndicator) != null ? n : k.clearIndicator, j = (o = Me.paper) != null ? o : k.paper, v = (i = Me.popper) != null ? i : k.popper, b = (s = Me.popupIndicator) != null ? s : k.popupIndicator;
  return /* @__PURE__ */ ge(S.Fragment, {
    children: [/* @__PURE__ */ T(jp, R({
      ref: r,
      className: Ee(ke.root, y),
      ownerState: je
    }, Le(De), {
      children: V({
        id: $t,
        disabled: N,
        fullWidth: !0,
        size: We === "small" ? "small" : void 0,
        InputLabelProps: dt(),
        InputProps: R({
          ref: fr,
          className: ke.inputRoot,
          startAdornment: Ge,
          onClick: (E) => {
            E.target === E.currentTarget && mt(E);
          }
        }, (Ze || Ue) && {
          endAdornment: /* @__PURE__ */ ge(Lp, {
            className: ke.endAdornment,
            ownerState: je,
            children: [Ze ? /* @__PURE__ */ T(Fp, R({}, ze(), {
              "aria-label": P,
              title: P,
              ownerState: je
            }, $, {
              className: Ee(ke.clearIndicator, $ == null ? void 0 : $.className),
              children: O
            })) : null, Ue ? /* @__PURE__ */ T(Vp, R({}, He(), {
              disabled: N,
              "aria-label": qe ? I : H,
              title: qe ? I : H,
              ownerState: je
            }, b, {
              className: Ee(ke.popupIndicator, b == null ? void 0 : b.className),
              children: fe
            })) : null]
          })
        }),
        inputProps: R({
          className: ke.input,
          disabled: N,
          readOnly: D
        }, Ne())
      })
    })), gt ? /* @__PURE__ */ T(zp, R({
      as: ie,
      disablePortal: M,
      style: {
        width: gt ? gt.clientWidth : null
      },
      ownerState: je,
      role: "presentation",
      anchorEl: gt,
      open: qe
    }, v, {
      className: Ee(ke.popper, v == null ? void 0 : v.className),
      children: /* @__PURE__ */ ge(Bp, R({
        ownerState: je,
        as: ne
      }, j, {
        className: Ee(ke.paper, j == null ? void 0 : j.className),
        children: [X && Ke.length === 0 ? /* @__PURE__ */ T(Wp, {
          className: ke.loading,
          ownerState: je,
          children: z
        }) : null, Ke.length === 0 && !U && !X ? /* @__PURE__ */ T(qp, {
          className: ke.noOptions,
          ownerState: je,
          role: "presentation",
          onMouseDown: (E) => {
            E.preventDefault();
          },
          children: Z
        }) : null, Ke.length > 0 ? /* @__PURE__ */ T(Up, R({
          as: F,
          className: ke.listbox,
          ownerState: je
        }, Ut, oe, {
          ref: pr,
          children: Ke.map((E, _) => se ? Yt({
            key: E.key,
            group: E.group,
            children: E.options.map((B, ce) => f(B, E.index + ce))
          }) : f(E, _))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ci.propTypes = {
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
  autoComplete: a.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: a.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: a.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: a.oneOfType([a.oneOf(["mouse", "touch"]), a.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: a.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: a.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: a.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: a.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: a.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: a.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: a.shape({
    clearIndicator: a.object,
    paper: a.object,
    popper: a.object,
    popupIndicator: a.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: nr(a.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: a.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: a.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: a.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: a.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: a.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: a.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: a.oneOfType([a.oneOf(["auto"]), a.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: a.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: a.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: a.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: a.func,
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
  getOptionLabel: a.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: a.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: a.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: a.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: a.bool,
  /**
   * The input value.
   */
  inputValue: a.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: a.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: Ka,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: a.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: a.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: a.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: a.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: a.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: a.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: a.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: a.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: a.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: a.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: a.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: a.string,
  /**
   * Array of options.
   */
  options: a.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: a.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: a.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: a.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: a.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: a.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: a.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: a.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: a.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: a.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium"]), a.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    clearIndicator: a.object,
    paper: a.object,
    popper: a.object,
    popupIndicator: a.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: nr(a.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Ei = Ci, Kp = eo(), Gp = (e) => {
  const {
    labelText: t,
    name: r,
    required: n = !1,
    onCreateNew: o = null,
    renderLabel: i,
    multiple: s = !1,
    showHelperText: l = !0,
    options: c = [],
    ...u
  } = e, { control: d } = Bt(), [m, p] = tt(s ? [] : ""), y = (P, I, k) => {
    if (I && I.inputValue) {
      o && o(I.inputValue);
      return;
    }
    p(I), k(I);
  }, O = (P) => typeof P == "string" ? P : P.inputValue && o ? `Crear ${P.inputValue}` : i ? i(P) : P.dni ? `${P.name} - ${P.dni}` : P.name, g = (P, I) => (
    // eslint-disable-next-line
    /* @__PURE__ */ Ea("li", { ...P, key: I.id ?? P.key }, O(I))
  ), h = (P, I) => {
    const k = Kp(P, I), C = String(I.inputValue).trim(), x = k.length === 0;
    return o && C !== "" && (x || !P.find((A) => A.name === C)) && k.push({
      inputValue: C,
      name: `Agregar "${C}"`
    }), !o && x && C !== "" && k.push({
      inputValue: C,
      name: "No se encontraron resultados"
    }), k;
  };
  return /* @__PURE__ */ T(Mr, { fullWidth: !0, ...u, children: /* @__PURE__ */ T(
    Wt,
    {
      control: d,
      name: r,
      render: ({ field: { ref: P, onChange: I, ...k } }) => /* @__PURE__ */ T(
        Ei,
        {
          multiple: s,
          value: m,
          onChange: (C, x) => y(C, x, I),
          filterOptions: h,
          options: c,
          selectOnFocus: !0,
          clearOnBlur: !0,
          handleHomeEndKeys: !0,
          getOptionLabel: O,
          renderOption: g,
          freeSolo: !0,
          renderInput: (C) => /* @__PURE__ */ T(
            Vn,
            {
              ...C,
              ...k,
              inputRef: P,
              required: n,
              name: r,
              label: t,
              helperText: l ? "Ingrese al menos 3 caracteres para buscar" : "",
              InputProps: C.InputProps
            }
          )
        }
      )
    }
  ) });
};
Gp.propTypes = {
  multiple: a.bool,
  labelText: a.string,
  name: a.string,
  required: a.bool,
  onCreateNew: a.func,
  renderLabel: a.func,
  onChange: a.func,
  showHelperText: a.bool,
  options: a.array.isRequired
};
function Xp(e) {
  return [10, 25, 50, 100].includes(e);
}
const Jp = (e) => {
  var x, A;
  const {
    headCells: t,
    fetchFunction: r,
    resourceName: n,
    defaultOrderBy: o,
    defaultOrderDirection: i = rt.DESC,
    defaultRowsPerPage: s = 10,
    baseParams: l,
    row: c,
    toolbar: u
  } = e, d = os(), [m] = Ma(), [p, y] = tt({
    per_page: s,
    page: 1,
    sort: {
      field: o,
      direction: i
    },
    // Take URL and Base params at the end, so it overrides the default ones
    ...l,
    ...Br.parse(m.toString())
  }), {
    isLoading: O,
    isFetching: g,
    data: h
  } = Aa({
    queryKey: [n, p],
    queryFn: () => r(p),
    keepPreviousData: !0,
    staleTime: 1e3 * 60 * 5
  });
  Ft(() => {
    const N = Br.stringify(p, {
      skipNulls: !0,
      encodeValuesOnly: !0
    }), G = Br.parse(location.search, { ignoreQueryPrefix: !0 }), Y = Br.stringify(G, {
      skipNulls: !0,
      encodeValuesOnly: !0
    });
    N !== Y && d(`${location.pathname}?${N}`, { replace: !0 });
  }, [p]);
  const P = (N, G) => {
    y({ ...p, page: ++G });
  }, I = (N) => {
    y({ ...p, per_page: N.target.value, page: 1 });
  }, k = (N, G) => {
    const Y = m.get("sort[direction]") === rt.ASC ? rt.DESC : rt.ASC;
    y((M) => ({
      ...M,
      page: 1,
      sort: {
        field: G,
        direction: Y
      }
    }));
  }, C = u ? ht.cloneElement(u, { setParams: y }) : null;
  return /* @__PURE__ */ ge(Dr, { children: [
    /* @__PURE__ */ ge(Sa, { sx: { position: "relative", overflow: "visible" }, children: [
      C,
      /* @__PURE__ */ ge($a, { children: [
        /* @__PURE__ */ T(
          Un,
          {
            headCells: t,
            orderBy: m.get("sort[field]"),
            orderDirection: m.get("sort[direction]"),
            handleSortRequest: k
          }
        ),
        /* @__PURE__ */ ge(Ia, { children: [
          (O || g) && /* @__PURE__ */ T(Rr, { children: /* @__PURE__ */ T(Sr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ T(ur, {}) }) }),
          ((x = h == null ? void 0 : h.data) == null ? void 0 : x.length) > 0 && h.data.map((N) => ht.cloneElement(c, { key: N.key || N.id, data: N })),
          !O && !g && ((A = h == null ? void 0 : h.data) == null ? void 0 : A.length) === 0 && /* @__PURE__ */ T(Rr, { children: /* @__PURE__ */ T(Sr, { colSpan: t.length, align: "center", children: /* @__PURE__ */ T(Xe, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
        ] })
      ] })
    ] }),
    h && /* @__PURE__ */ T(
      _a,
      {
        component: "div",
        from: h.from,
        to: h.to,
        page: h.current_page - 1,
        rowsPerPage: Xp(h.per_page) ? h.per_page : s,
        count: h.total,
        onPageChange: P,
        onRowsPerPageChange: I,
        backIconButtonProps: {
          disabled: (h == null ? void 0 : h.current_page) === 1
        },
        nextIconButtonProps: {
          disabled: (h == null ? void 0 : h.current_page) === (h == null ? void 0 : h.last_page)
        }
      }
    )
  ] });
};
Jp.propTypes = {
  headCells: a.array.isRequired,
  fetchFunction: a.func.isRequired,
  resourceName: a.string.isRequired,
  defaultOrderBy: a.string,
  defaultOrderDirection: a.oneOf([rt.ASC, rt.DESC]),
  defaultRowsPerPage: a.number,
  onDeleteItem: a.func,
  onEditItem: a.func,
  baseParams: a.object,
  row: a.element.isRequired,
  toolbar: a.element
};
const Qp = eo(), Zp = (e) => {
  const {
    labelText: t,
    name: r,
    required: n = !1,
    onCreateNew: o = null,
    renderLabel: i,
    fetchFunction: s,
    multiple: l = !1,
    baseParams: c = null,
    showHelperText: u = !0,
    ...d
  } = e, { control: m, watch: p } = Bt(), y = p(r), [O, g] = tt([]), [h, P] = tt(l ? [] : ""), [I, k] = tt(""), [C, x] = tt(""), { isFetching: A, isFetched: N } = Aa({
    queryKey: [s, C],
    queryFn: () => s({ filter: { query: C, ...c } }),
    enabled: C.length >= 2,
    onSuccess: (q) => {
      if (Array.isArray(q)) {
        g(q);
        return;
      }
      q.data && g(q.data);
    }
  });
  Ft(() => {
    P(y || "");
  }, [y]), Ft(() => {
    const q = setTimeout(() => {
      I && x(I);
    }, 500);
    return () => clearTimeout(q);
  }, [I]);
  const G = (q, U, Q) => {
    if (U && U.inputValue) {
      o && o(U.inputValue);
      return;
    }
    P(U), Q(U);
  }, Y = (q) => typeof q == "string" ? q : q.inputValue && o ? `Crear ${q.inputValue}` : i ? i(q) : q.dni ? `${q.name} - ${q.dni}` : q.name, M = (q, U) => (
    // eslint-disable-next-line
    /* @__PURE__ */ Ea("li", { ...q, key: U.id ?? q.key }, Y(U))
  ), L = (q, U) => {
    const Q = Qp(q, U), J = String(U.inputValue).trim(), ee = Q.length === 0;
    return o && J !== "" && (ee || !q.find((se) => se.name === J)) && Q.push({
      inputValue: J,
      name: `Agregar "${J}"`
    }), !o && ee && J !== "" && !A && N && Q.push({
      inputValue: J,
      name: "No se encontraron resultados"
    }), Q;
  };
  return /* @__PURE__ */ T(Mr, { fullWidth: !0, ...d, children: /* @__PURE__ */ T(
    Wt,
    {
      control: m,
      name: r,
      render: ({ field: { ref: q, onChange: U, ...Q } }) => /* @__PURE__ */ T(
        Ei,
        {
          multiple: l,
          value: h,
          onChange: (J, ee) => G(J, ee, U),
          onKeyDown: (J) => k(J.target.value),
          filterOptions: L,
          options: O,
          selectOnFocus: !0,
          clearOnBlur: !0,
          handleHomeEndKeys: !0,
          getOptionLabel: Y,
          renderOption: M,
          freeSolo: !0,
          renderInput: (J) => /* @__PURE__ */ T(
            Vn,
            {
              ...J,
              ...Q,
              inputRef: q,
              required: n,
              name: r,
              label: t,
              helperText: u ? "Ingrese al menos 3 caracteres para buscar" : "",
              InputProps: {
                ...J.InputProps,
                endAdornment: /* @__PURE__ */ ge(Dr, { children: [
                  A ? /* @__PURE__ */ T(Ln, { color: "inherit", size: 20 }) : null,
                  J.InputProps.endAdornment
                ] })
              }
            }
          )
        }
      )
    }
  ) });
};
Zp.propTypes = {
  multiple: a.bool,
  labelText: a.string,
  name: a.string,
  required: a.bool,
  onCreateNew: a.func,
  renderLabel: a.func,
  fetchFunction: a.func,
  baseParams: a.object,
  showHelperText: a.bool
};
const em = (e, t) => {
  if (!e)
    return !1;
  const r = e.permissions;
  for (let n in t)
    if (!r[n] || r[n] === !1)
      return !1;
  return !0;
}, tm = ({ user: e, has: t, ...r }) => em(e, t) ? /* @__PURE__ */ T(Wi, { ...r }) : null;
tm.propTypes = {
  has: a.object,
  user: a.object
};
var mo = {}, Pi = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Pi);
var ho = Pi.exports, Rn = {};
const rm = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Xa.configure(e);
  }
}, nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: ae,
  createChainedFunction: _l,
  createSvgIcon: hn,
  debounce: kl,
  deprecatedPropType: Al,
  isMuiElement: Ml,
  ownerDocument: Xr,
  ownerWindow: Dl,
  requirePropFactory: Nl,
  setRef: Ir,
  unstable_ClassNameGenerator: rm,
  unstable_useEnhancedEffect: ar,
  unstable_useId: Wa,
  unsupportedProp: qa,
  useControlled: Hr,
  useEventCallback: Ct,
  useForkRef: Pt,
  useIsFocusVisible: Ua
}, Symbol.toStringTag, { value: "Module" })), om = /* @__PURE__ */ Da(nm);
var Ta;
function go() {
  return Ta || (Ta = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = om;
  }(Rn)), Rn;
}
const vo = /* @__PURE__ */ Da(cs);
var am = ho;
Object.defineProperty(mo, "__esModule", {
  value: !0
});
var bo = mo.default = void 0, im = am(go()), sm = vo, lm = (0, im.default)(/* @__PURE__ */ (0, sm.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
bo = mo.default = lm;
const cm = ({ title: e = "Filtrar", children: t, open: r, onClose: n, isLoading: o = !1 }) => {
  const i = _i(), [s, l] = tt(!1);
  console.log("SidePanel"), Ft(() => {
    function u(d) {
      var m, p, y, O;
      i.current && !i.current.contains(d.target) && !((m = document.querySelector('div[role="presentation"]')) != null && m.contains(d.target)) && !((p = document.querySelector('div[role="dialog"]')) != null && p.contains(d.target)) && !((y = document.querySelector('div[role="alert"]')) != null && y.contains(d.target)) && !((O = document.querySelector('div[role="alertdialog"]')) != null && O.contains(d.target)) && !o && n();
    }
    return r && document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, [i, r, o, n]), Ft(() => {
    r && l(!0);
  }, [r]);
  const c = () => {
    o || n();
  };
  return /* @__PURE__ */ T(
    Be,
    {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: (u) => u.zIndex.drawer + 1,
      width: "100vw",
      height: "100vh",
      sx: {
        transitionProperty: "background-color",
        transitionDuration: "0.2s"
      },
      backgroundColor: r ? "rgba(0,0,0,0.5)" : "transparent",
      display: r || s ? "flex" : "none",
      onTransitionEnd: () => {
        r || l(!1);
      },
      onClick: c,
      children: /* @__PURE__ */ T(qi, { in: r, direction: "right", children: /* @__PURE__ */ ge(
        Pa,
        {
          onClick: (u) => u.stopPropagation(),
          ref: i,
          sx: {
            maxWidth: { xs: "100%", sm: "70%", md: "40%", lg: "30%" },
            minWidth: "300px",
            height: "100vh",
            p: 2,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            borderBottomRightRadius: "12px",
            borderTopRightRadius: "12px"
          },
          children: [
            /* @__PURE__ */ T(Be, { direction: "row", alignItems: "center", mb: 1, children: /* @__PURE__ */ T(Xe, { variant: "h2", color: "primary", fontWeight: "bold", children: e }) }),
            /* @__PURE__ */ T(Fn, { onClick: c, sx: { position: "absolute", top: 4, right: 4 }, children: /* @__PURE__ */ T(bo, {}) }),
            /* @__PURE__ */ T(Be, { my: 2, children: t })
          ]
        }
      ) })
    }
  );
};
cm.propTypes = {
  title: a.string,
  open: a.bool.isRequired,
  onClose: a.func.isRequired,
  isLoading: a.bool,
  children: a.node
};
const Mm = ({
  children: e,
  sx: t,
  ...r
}) => /* @__PURE__ */ T(wr, { sx: { px: 1, py: 1, ...t }, ...r, children: e }), um = ({ name: e, children: t, ...r }) => {
  const { control: n } = Bt();
  return /* @__PURE__ */ T(
    Wt,
    {
      control: n,
      name: e,
      render: ({ field: o }) => /* @__PURE__ */ T(
        Ui,
        {
          value: o.value,
          onChange: o.onChange,
          name: e,
          exclusive: !0,
          ...r,
          children: t
        }
      )
    }
  );
};
um.propTypes = {
  defaultChecked: a.bool,
  name: a.string.isRequired,
  children: a.node.isRequired
};
const dm = ({
  color: e,
  title: t,
  value: r,
  caption: n = null,
  isLoading: o = !1,
  sx: i = null
}) => o ? /* @__PURE__ */ T(ur, {}) : /* @__PURE__ */ ge(
  Be,
  {
    width: "100%",
    direction: "column",
    px: 2,
    py: 1,
    borderLeft: (s) => `6px solid ${s.palette[e].main}`,
    bgcolor: (s) => `${s.palette[e].light}10`,
    borderRadius: 1,
    sx: i,
    children: [
      /* @__PURE__ */ T(Xe, { variant: "subtitle", fontWeight: "bold", children: t }),
      /* @__PURE__ */ T(Xe, { variant: "body", fontSize: 28, children: r }),
      /* @__PURE__ */ T(Xe, { variant: "caption", ml: "auto", children: n })
    ]
  }
);
dm.propTypes = {
  color: a.string.isRequired,
  title: a.string.isRequired,
  value: a.oneOfType([
    a.string,
    a.number,
    a.node
  ]),
  caption: a.string,
  isLoading: a.bool,
  sx: a.object
};
function wi({ label: e, backgroundColor: t, color: r, icon: n, sx: o }) {
  return /* @__PURE__ */ T(
    Hi,
    {
      label: e,
      icon: n ? /* @__PURE__ */ T(n, { color: r, sx: { fontSize: "18px" } }) : null,
      sx: {
        height: "auto",
        padding: "4px 0",
        borderRadius: "4px",
        borderStyle: "solid",
        borderWidth: "1px",
        color: r,
        backgroundColor: t,
        fontSize: "16px",
        ...o
      }
    }
  );
}
wi.propTypes = {
  label: a.string.isRequired,
  backgroundColor: a.string,
  color: a.string,
  icon: a.elementType,
  sx: a.object
};
wi.defaultProps = {
  color: "#fff",
  backgroundColor: "success.main",
  icon: null
};
var yo = {}, fm = ho;
Object.defineProperty(yo, "__esModule", {
  value: !0
});
var Ri = yo.default = void 0, pm = fm(go()), mm = vo, hm = (0, pm.default)(/* @__PURE__ */ (0, mm.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), "Search");
Ri = yo.default = hm;
var xo = {}, gm = ho;
Object.defineProperty(xo, "__esModule", {
  value: !0
});
var Si = xo.default = void 0, vm = gm(go()), bm = vo, ym = (0, vm.default)(/* @__PURE__ */ (0, bm.jsx)("path", {
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), "FilterList");
Si = xo.default = ym;
function xm(e = 1) {
  const [t, r] = Ma();
  return {
    tab: t.get("tab") ? Number(t.get("tab")) : e,
    onChangeTab: (i, s) => {
      r({ tab: s });
    }
  };
}
const Om = ({ children: e }) => /* @__PURE__ */ T(
  Be,
  {
    direction: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    mb: { xs: 2, sm: 0 },
    children: e
  }
);
Om.propTypes = {
  children: a.oneOfType([a.arrayOf(a.node), a.node])
};
const $i = ({ onFilter: e, SidePanel: t, searchPlaceholder: r }) => {
  const n = Ki(), o = n.watch("query"), { tab: i } = xm(), [s, l] = tt(!1), [c, u] = tt(!1);
  Ft(() => {
    o && l(!0);
    const p = setTimeout(() => {
      e(n.getValues()), l(!1);
    }, [1e3]);
    return () => clearTimeout(p);
  }, [o, e, n]), Ft(() => {
    n.reset();
  }, [i, n]);
  const d = () => {
    l(!0), n.setValue("query", "");
  }, m = t ? Tr(t, {
    open: c,
    onClose: () => u(!1)
  }) : null;
  return /* @__PURE__ */ ge(Be, { direction: "row", gap: 1, children: [
    m,
    /* @__PURE__ */ ge(Gi, { ...n, children: [
      /* @__PURE__ */ T(
        La,
        {
          name: "query",
          type: "search",
          labelText: r,
          InputProps: {
            endAdornment: s ? /* @__PURE__ */ T(Ln, { size: 16 }) : o ? /* @__PURE__ */ T(Fn, { disableRipple: !0, sx: { mr: -2 }, onClick: d, children: /* @__PURE__ */ T(bo, {}) }) : /* @__PURE__ */ T(Ri, {})
          },
          sx: {
            minWidth: 300
          }
        }
      ),
      m && /* @__PURE__ */ T(wr, { startIcon: /* @__PURE__ */ T(Si, {}), variant: "outlined", onClick: () => u(!0), children: "Filtros" })
    ] })
  ] });
};
$i.propTypes = {
  onFilter: a.func,
  SidePanel: a.element,
  searchPlaceholder: a.string
};
$i.defaultProps = {
  searchPlaceholder: "Nombre o DNI"
};
const Dm = (e, t) => {
  var o;
  const r = (o = e.response) == null ? void 0 : o.data;
  return r ? typeof r == "string" ? r : (r.errors ? Object.values(r.errors)[0][0] : r.message ?? null) || t || "Lo sentimos, ha ocurrido un error." : e;
}, Nt = as.create({
  baseURL: "/api"
});
Nt.interceptors.request.use((e) => (e.headers.Authorization = `Bearer ${localStorage.getItem("app-token")}`, e));
Nt.interceptors.response.use(
  (e) => e,
  (e) => {
    if (e.response.status === 401) {
      window.location = "/login";
      return;
    }
    if (e.response.status === 503) {
      window.location = "/";
      return;
    }
    throw e;
  }
);
class Tm {
  login(t) {
    return Nt.post("/login", t);
  }
  me() {
    return Nt.get("/me");
  }
  async logout() {
    return await Nt.delete("/logout");
  }
  async resetPasswordEmail(t) {
    return await Nt.post("/recover-password", t);
  }
  async resetPassword(t) {
    return await Nt.post("/reset-password", t);
  }
}
const Nm = new Tm();
export {
  Zp as AsyncAutocomplete,
  Nm as AuthApi,
  Gp as Autocomplete,
  Os as Avatar,
  ys as Box,
  yl as Checkbox,
  wi as Chip,
  xs as ConfirmDialog,
  bl as DateTime,
  Es as ErrorDialog,
  ur as Loader,
  qn as Modal,
  Ps as Money,
  ws as PageHeader,
  Jp as PaginatedTableContent,
  tm as PermissionTab,
  Fa as Select,
  cm as SidePanel,
  Mm as SmallButton,
  dm as SummaryBox,
  Cs as Switch,
  Ts as TabPanel,
  _s as TableContent,
  Un as TableHeader,
  $i as TabsAside,
  Om as TabsContainer,
  La as TextField,
  um as ToggleButtonGroup,
  Nt as axiosInstance,
  Ss as genericDescendingComparator,
  em as hasPermissions,
  Dm as parseBackendErrors,
  rt as sortOrderEnum,
  Is as theme,
  xm as useTabs
};
