import * as x from "react";
import St, { useId as nc, useState as ct, useEffect as Cn, Children as oc, isValidElement as wo, cloneElement as So, createContext as rc, useContext as ic, useRef as Bi, Suspense as ac } from "react";
import { CircularProgress as rs, Paper as Ur, Modal as sc, Box as Rr, IconButton as eo, Typography as ut, Divider as Lo, Stack as He, Button as wr, Avatar as lc, TableHead as cc, TableRow as to, TableCell as no, TableSortLabel as uc, FormControl as po, FormControlLabel as is, Switch as dc, TextField as pc, InputLabel as fc, Select as mc, MenuItem as hc, createTheme as as, ThemeProvider as qr, TableContainer as ss, Table as ls, TableBody as cs, TablePagination as us, Checkbox as bc, Tab as gc, Link as vc, ListItemButton as yc, ListItemIcon as xc, ListItemText as Ec, Drawer as ds, useMediaQuery as Tc, Toolbar as oo, List as Oc, AppBar as Cc, Popper as Rc, Grow as wc, ButtonBase as Sc, Container as Pc } from "@mui/material";
import { Global as $c, ThemeContext as Ic, keyframes as Hr } from "@emotion/react";
import { Close as kc, Report as ps, HomeRounded as Ac, PeopleRounded as Mc, SavingsRounded as Nc, SettingsRounded as _c, NotificationsRounded as Dc, Logout as fs, Menu as jc } from "@mui/icons-material";
import { useFormContext as fo, Controller as mo } from "react-hook-form";
import { isValid as zi, isDate as Fc, format as Lc, formatRelative as Bc } from "date-fns";
import { useQuery as ms, useQueryClient as zc } from "@tanstack/react-query";
import { useSearchParams as hs, Outlet as Yr, Link as Sr, useLocation as Kr, useNavigate as Wc, Navigate as bs } from "react-router-dom";
import Wi from "qs";
import Vc from "@emotion/styled";
import * as gs from "react-dom";
import To from "react-dom";
import Uc from "axios";
function qc(e) {
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
var Pr = { exports: {} }, _n = {};
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
function Hc() {
  if (Vi)
    return _n;
  Vi = 1;
  var e = St, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
function Yc() {
  return Ui || (Ui = 1, process.env.NODE_ENV !== "production" && function() {
    var e = St, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = Symbol.iterator, v = "@@iterator";
    function f(E) {
      if (E === null || typeof E != "object")
        return null;
      var z = O && E[O] || E[v];
      return typeof z == "function" ? z : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(E) {
      {
        for (var z = arguments.length, te = new Array(z > 1 ? z - 1 : 0), w = 1; w < z; w++)
          te[w - 1] = arguments[w];
        C("error", E, te);
      }
    }
    function C(E, z, te) {
      {
        var w = R.ReactDebugCurrentFrame, S = w.getStackAddendum();
        S !== "" && (z += "%s", te = te.concat([S]));
        var j = te.map(function(q) {
          return String(q);
        });
        j.unshift("Warning: " + z), Function.prototype.apply.call(console[E], console, j);
      }
    }
    var b = !1, h = !1, I = !1, $ = !1, _ = !1, B;
    B = Symbol.for("react.module.reference");
    function M(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === a || _ || E === i || E === u || E === d || $ || E === y || b || h || I || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === p || E.$$typeof === s || E.$$typeof === l || E.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === B || E.getModuleId !== void 0));
    }
    function N(E, z, te) {
      var w = E.displayName;
      if (w)
        return w;
      var S = z.displayName || z.name || "";
      return S !== "" ? te + "(" + S + ")" : te;
    }
    function K(E) {
      return E.displayName || "Context";
    }
    function W(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
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
      if (typeof E == "object")
        switch (E.$$typeof) {
          case l:
            var z = E;
            return K(z) + ".Consumer";
          case s:
            var te = E;
            return K(te._context) + ".Provider";
          case c:
            return N(E, E.render, "ForwardRef");
          case p:
            var w = E.displayName || null;
            return w !== null ? w : W(E.type) || "Memo";
          case m: {
            var S = E, j = S._payload, q = S._init;
            try {
              return W(q(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, L = 0, U, Y, se, ee, A, V, ne;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function H() {
      {
        if (L === 0) {
          U = console.log, Y = console.info, se = console.warn, ee = console.error, A = console.group, V = console.groupCollapsed, ne = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        L++;
      }
    }
    function J() {
      {
        if (L--, L === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, E, {
              value: U
            }),
            info: F({}, E, {
              value: Y
            }),
            warn: F({}, E, {
              value: se
            }),
            error: F({}, E, {
              value: ee
            }),
            group: F({}, E, {
              value: A
            }),
            groupCollapsed: F({}, E, {
              value: V
            }),
            groupEnd: F({}, E, {
              value: ne
            })
          });
        }
        L < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = R.ReactCurrentDispatcher, G;
    function oe(E, z, te) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (S) {
            var w = S.stack.trim().match(/\n( *(at )?)/);
            G = w && w[1] || "";
          }
        return `
` + G + E;
      }
    }
    var ie = !1, de;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      de = new ae();
    }
    function D(E, z) {
      if (!E || ie)
        return "";
      {
        var te = de.get(E);
        if (te !== void 0)
          return te;
      }
      var w;
      ie = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Q.current, Q.current = null, H();
      try {
        if (z) {
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
              w = Dt;
            }
            Reflect.construct(E, [], q);
          } else {
            try {
              q.call();
            } catch (Dt) {
              w = Dt;
            }
            E.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            w = Dt;
          }
          E();
        }
      } catch (Dt) {
        if (Dt && w && typeof Dt.stack == "string") {
          for (var re = Dt.stack.split(`
`), xe = w.stack.split(`
`), Ee = re.length - 1, Re = xe.length - 1; Ee >= 1 && Re >= 0 && re[Ee] !== xe[Re]; )
            Re--;
          for (; Ee >= 1 && Re >= 0; Ee--, Re--)
            if (re[Ee] !== xe[Re]) {
              if (Ee !== 1 || Re !== 1)
                do
                  if (Ee--, Re--, Re < 0 || re[Ee] !== xe[Re]) {
                    var ot = `
` + re[Ee].replace(" at new ", " at ");
                    return E.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", E.displayName)), typeof E == "function" && de.set(E, ot), ot;
                  }
                while (Ee >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        ie = !1, Q.current = j, J(), Error.prepareStackTrace = S;
      }
      var fn = E ? E.displayName || E.name : "", Li = fn ? oe(fn) : "";
      return typeof E == "function" && de.set(E, Li), Li;
    }
    function he(E, z, te) {
      return D(E, !1);
    }
    function k(E) {
      var z = E.prototype;
      return !!(z && z.isReactComponent);
    }
    function X(E, z, te) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return D(E, k(E));
      if (typeof E == "string")
        return oe(E);
      switch (E) {
        case u:
          return oe("Suspense");
        case d:
          return oe("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case c:
            return he(E.render);
          case p:
            return X(E.type, z, te);
          case m: {
            var w = E, S = w._payload, j = w._init;
            try {
              return X(j(S), z, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, le = {}, ze = R.ReactDebugCurrentFrame;
    function We(E) {
      if (E) {
        var z = E._owner, te = X(E.type, E._source, z ? z.type : null);
        ze.setExtraStackFrame(te);
      } else
        ze.setExtraStackFrame(null);
    }
    function $e(E, z, te, w, S) {
      {
        var j = Function.call.bind(Te);
        for (var q in E)
          if (j(E, q)) {
            var re = void 0;
            try {
              if (typeof E[q] != "function") {
                var xe = Error((w || "React class") + ": " + te + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              re = E[q](z, q, w, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              re = Ee;
            }
            re && !(re instanceof Error) && (We(S), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", te, q, typeof re), We(null)), re instanceof Error && !(re.message in le) && (le[re.message] = !0, We(S), P("Failed %s type: %s", te, re.message), We(null));
          }
      }
    }
    var Ce = Array.isArray;
    function Fe(E) {
      return Ce(E);
    }
    function we(E) {
      {
        var z = typeof Symbol == "function" && Symbol.toStringTag, te = z && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return te;
      }
    }
    function Ge(E) {
      try {
        return Xe(E), !1;
      } catch {
        return !0;
      }
    }
    function Xe(E) {
      return "" + E;
    }
    function Ze(E) {
      if (Ge(E))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", we(E)), Xe(E);
    }
    var Se = R.ReactCurrentOwner, be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ce, tt, ue;
    ue = {};
    function ye(E) {
      if (Te.call(E, "ref")) {
        var z = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Pe(E) {
      if (Te.call(E, "key")) {
        var z = Object.getOwnPropertyDescriptor(E, "key").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Je(E, z) {
      if (typeof E.ref == "string" && Se.current && z && Se.current.stateNode !== z) {
        var te = W(Se.current.type);
        ue[te] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Se.current.type), E.ref), ue[te] = !0);
      }
    }
    function zt(E, z) {
      {
        var te = function() {
          ce || (ce = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        te.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function It(E, z) {
      {
        var te = function() {
          tt || (tt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        te.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var An = function(E, z, te, w, S, j, q) {
      var re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: z,
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
        value: w
      }), Object.defineProperty(re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(re.props), Object.freeze(re)), re;
    };
    function Rt(E, z, te, w, S) {
      {
        var j, q = {}, re = null, xe = null;
        te !== void 0 && (Ze(te), re = "" + te), Pe(z) && (Ze(z.key), re = "" + z.key), ye(z) && (xe = z.ref, Je(z, S));
        for (j in z)
          Te.call(z, j) && !be.hasOwnProperty(j) && (q[j] = z[j]);
        if (E && E.defaultProps) {
          var Ee = E.defaultProps;
          for (j in Ee)
            q[j] === void 0 && (q[j] = Ee[j]);
        }
        if (re || xe) {
          var Re = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          re && zt(q, Re), xe && It(q, Re);
        }
        return An(E, re, xe, S, w, Se.current, q);
      }
    }
    var st = R.ReactCurrentOwner, ft = R.ReactDebugCurrentFrame;
    function at(E) {
      if (E) {
        var z = E._owner, te = X(E.type, E._source, z ? z.type : null);
        ft.setExtraStackFrame(te);
      } else
        ft.setExtraStackFrame(null);
    }
    var wt;
    wt = !1;
    function Xt(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function Wt() {
      {
        if (st.current) {
          var E = W(st.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function cn(E) {
      {
        if (E !== void 0) {
          var z = E.fileName.replace(/^.*[\\\/]/, ""), te = E.lineNumber;
          return `

Check your code at ` + z + ":" + te + ".";
        }
        return "";
      }
    }
    var un = {};
    function Mn(E) {
      {
        var z = Wt();
        if (!z) {
          var te = typeof E == "string" ? E : E.displayName || E.name;
          te && (z = `

Check the top-level render call using <` + te + ">.");
        }
        return z;
      }
    }
    function dn(E, z) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var te = Mn(z);
        if (un[te])
          return;
        un[te] = !0;
        var w = "";
        E && E._owner && E._owner !== st.current && (w = " It was passed a child from " + W(E._owner.type) + "."), at(E), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, w), at(null);
      }
    }
    function Vt(E, z) {
      {
        if (typeof E != "object")
          return;
        if (Fe(E))
          for (var te = 0; te < E.length; te++) {
            var w = E[te];
            Xt(w) && dn(w, z);
          }
        else if (Xt(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var S = f(E);
          if (typeof S == "function" && S !== E.entries)
            for (var j = S.call(E), q; !(q = j.next()).done; )
              Xt(q.value) && dn(q.value, z);
        }
      }
    }
    function nt(E) {
      {
        var z = E.type;
        if (z == null || typeof z == "string")
          return;
        var te;
        if (typeof z == "function")
          te = z.propTypes;
        else if (typeof z == "object" && (z.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        z.$$typeof === p))
          te = z.propTypes;
        else
          return;
        if (te) {
          var w = W(z);
          $e(te, E.props, "prop", w, E);
        } else if (z.PropTypes !== void 0 && !wt) {
          wt = !0;
          var S = W(z);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(E) {
      {
        for (var z = Object.keys(E.props), te = 0; te < z.length; te++) {
          var w = z[te];
          if (w !== "children" && w !== "key") {
            at(E), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), at(null);
            break;
          }
        }
        E.ref !== null && (at(E), P("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    function lt(E, z, te, w, S, j) {
      {
        var q = M(E);
        if (!q) {
          var re = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = cn(S);
          xe ? re += xe : re += Wt();
          var Ee;
          E === null ? Ee = "null" : Fe(E) ? Ee = "array" : E !== void 0 && E.$$typeof === t ? (Ee = "<" + (W(E.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof E, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, re);
        }
        var Re = Rt(E, z, te, S, j);
        if (Re == null)
          return Re;
        if (q) {
          var ot = z.children;
          if (ot !== void 0)
            if (w)
              if (Fe(ot)) {
                for (var fn = 0; fn < ot.length; fn++)
                  Vt(ot[fn], E);
                Object.freeze && Object.freeze(ot);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vt(ot, E);
        }
        return E === r ? Qe(Re) : nt(Re), Re;
      }
    }
    function xo(E, z, te) {
      return lt(E, z, te, !0);
    }
    function pn(E, z, te) {
      return lt(E, z, te, !1);
    }
    var Eo = pn, Nn = xo;
    Dn.Fragment = r, Dn.jsx = Eo, Dn.jsxs = Nn;
  }()), Dn;
}
process.env.NODE_ENV === "production" ? Pr.exports = Hc() : Pr.exports = Yc();
var Gr = Pr.exports;
const Xr = Gr.Fragment, g = Gr.jsx, pe = Gr.jsxs, Kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment: Xr,
  jsx: g,
  jsxs: pe
}, Symbol.toStringTag, { value: "Module" }));
var $r = { exports: {} }, Oo = { exports: {} }, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qi;
function Gc() {
  if (qi)
    return ke;
  qi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var I = h.$$typeof;
      switch (I) {
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
                  return I;
              }
          }
        case o:
          return I;
      }
    }
  }
  function b(h) {
    return C(h) === u;
  }
  return ke.AsyncMode = c, ke.ConcurrentMode = u, ke.ContextConsumer = l, ke.ContextProvider = s, ke.Element = t, ke.ForwardRef = d, ke.Fragment = r, ke.Lazy = O, ke.Memo = y, ke.Portal = o, ke.Profiler = a, ke.StrictMode = i, ke.Suspense = p, ke.isAsyncMode = function(h) {
    return b(h) || C(h) === c;
  }, ke.isConcurrentMode = b, ke.isContextConsumer = function(h) {
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
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === a || h === i || h === p || h === m || typeof h == "object" && h !== null && (h.$$typeof === O || h.$$typeof === y || h.$$typeof === s || h.$$typeof === l || h.$$typeof === d || h.$$typeof === f || h.$$typeof === R || h.$$typeof === P || h.$$typeof === v);
  }, ke.typeOf = C, ke;
}
var Ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function Xc() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === u || D === a || D === i || D === p || D === m || typeof D == "object" && D !== null && (D.$$typeof === O || D.$$typeof === y || D.$$typeof === s || D.$$typeof === l || D.$$typeof === d || D.$$typeof === f || D.$$typeof === R || D.$$typeof === P || D.$$typeof === v);
    }
    function b(D) {
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
    var h = c, I = u, $ = l, _ = s, B = t, M = d, N = r, K = O, W = y, F = o, L = a, U = i, Y = p, se = !1;
    function ee(D) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(D) || b(D) === c;
    }
    function A(D) {
      return b(D) === u;
    }
    function V(D) {
      return b(D) === l;
    }
    function ne(D) {
      return b(D) === s;
    }
    function Z(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function H(D) {
      return b(D) === d;
    }
    function J(D) {
      return b(D) === r;
    }
    function Q(D) {
      return b(D) === O;
    }
    function G(D) {
      return b(D) === y;
    }
    function oe(D) {
      return b(D) === o;
    }
    function ie(D) {
      return b(D) === a;
    }
    function de(D) {
      return b(D) === i;
    }
    function ae(D) {
      return b(D) === p;
    }
    Ae.AsyncMode = h, Ae.ConcurrentMode = I, Ae.ContextConsumer = $, Ae.ContextProvider = _, Ae.Element = B, Ae.ForwardRef = M, Ae.Fragment = N, Ae.Lazy = K, Ae.Memo = W, Ae.Portal = F, Ae.Profiler = L, Ae.StrictMode = U, Ae.Suspense = Y, Ae.isAsyncMode = ee, Ae.isConcurrentMode = A, Ae.isContextConsumer = V, Ae.isContextProvider = ne, Ae.isElement = Z, Ae.isForwardRef = H, Ae.isFragment = J, Ae.isLazy = Q, Ae.isMemo = G, Ae.isPortal = oe, Ae.isProfiler = ie, Ae.isStrictMode = de, Ae.isSuspense = ae, Ae.isValidElementType = C, Ae.typeOf = b;
  }()), Ae;
}
var Yi;
function ys() {
  return Yi || (Yi = 1, process.env.NODE_ENV === "production" ? Oo.exports = Gc() : Oo.exports = Xc()), Oo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lr, Ki;
function Jc() {
  if (Ki)
    return lr;
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
  return lr = i() ? Object.assign : function(a, s) {
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
  }, lr;
}
var cr, Gi;
function Jr() {
  if (Gi)
    return cr;
  Gi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return cr = e, cr;
}
var ur, Xi;
function xs() {
  return Xi || (Xi = 1, ur = Function.call.bind(Object.prototype.hasOwnProperty)), ur;
}
var dr, Ji;
function Qc() {
  if (Ji)
    return dr;
  Ji = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Jr(), o = {}, r = xs();
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
  }, dr = i, dr;
}
var pr, Qi;
function Zc() {
  if (Qi)
    return pr;
  Qi = 1;
  var e = ys(), t = Jc(), o = Jr(), r = xs(), i = Qc(), a = function() {
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
  return pr = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(A) {
      var V = A && (u && A[u] || A[d]);
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
      any: P(),
      arrayOf: C,
      element: b(),
      elementType: h(),
      instanceOf: I,
      node: M(),
      objectOf: _,
      oneOf: $,
      oneOfType: B,
      shape: K,
      exact: W
    };
    function O(A, V) {
      return A === V ? A !== 0 || 1 / A === 1 / V : A !== A && V !== V;
    }
    function v(A, V) {
      this.message = A, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function f(A) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, ne = 0;
      function Z(J, Q, G, oe, ie, de, ae) {
        if (oe = oe || m, de = de || G, ae !== o) {
          if (c) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = oe + ":" + G;
            !V[he] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + de + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[he] = !0, ne++);
          }
        }
        return Q[G] == null ? J ? Q[G] === null ? new v("The " + ie + " `" + de + "` is marked as required " + ("in `" + oe + "`, but its value is `null`.")) : new v("The " + ie + " `" + de + "` is marked as required in " + ("`" + oe + "`, but its value is `undefined`.")) : null : A(Q, G, oe, ie, de);
      }
      var H = Z.bind(null, !1);
      return H.isRequired = Z.bind(null, !0), H;
    }
    function R(A) {
      function V(ne, Z, H, J, Q, G) {
        var oe = ne[Z], ie = U(oe);
        if (ie !== A) {
          var de = Y(oe);
          return new v(
            "Invalid " + J + " `" + Q + "` of type " + ("`" + de + "` supplied to `" + H + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return f(V);
    }
    function P() {
      return f(s);
    }
    function C(A) {
      function V(ne, Z, H, J, Q) {
        if (typeof A != "function")
          return new v("Property `" + Q + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var G = ne[Z];
        if (!Array.isArray(G)) {
          var oe = U(G);
          return new v("Invalid " + J + " `" + Q + "` of type " + ("`" + oe + "` supplied to `" + H + "`, expected an array."));
        }
        for (var ie = 0; ie < G.length; ie++) {
          var de = A(G, ie, H, J, Q + "[" + ie + "]", o);
          if (de instanceof Error)
            return de;
        }
        return null;
      }
      return f(V);
    }
    function b() {
      function A(V, ne, Z, H, J) {
        var Q = V[ne];
        if (!l(Q)) {
          var G = U(Q);
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(A);
    }
    function h() {
      function A(V, ne, Z, H, J) {
        var Q = V[ne];
        if (!e.isValidElementType(Q)) {
          var G = U(Q);
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(A);
    }
    function I(A) {
      function V(ne, Z, H, J, Q) {
        if (!(ne[Z] instanceof A)) {
          var G = A.name || m, oe = ee(ne[Z]);
          return new v("Invalid " + J + " `" + Q + "` of type " + ("`" + oe + "` supplied to `" + H + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return f(V);
    }
    function $(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function V(ne, Z, H, J, Q) {
        for (var G = ne[Z], oe = 0; oe < A.length; oe++)
          if (O(G, A[oe]))
            return null;
        var ie = JSON.stringify(A, function(ae, D) {
          var he = Y(D);
          return he === "symbol" ? String(D) : D;
        });
        return new v("Invalid " + J + " `" + Q + "` of value `" + String(G) + "` " + ("supplied to `" + H + "`, expected one of " + ie + "."));
      }
      return f(V);
    }
    function _(A) {
      function V(ne, Z, H, J, Q) {
        if (typeof A != "function")
          return new v("Property `" + Q + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var G = ne[Z], oe = U(G);
        if (oe !== "object")
          return new v("Invalid " + J + " `" + Q + "` of type " + ("`" + oe + "` supplied to `" + H + "`, expected an object."));
        for (var ie in G)
          if (r(G, ie)) {
            var de = A(G, ie, H, J, Q + "." + ie, o);
            if (de instanceof Error)
              return de;
          }
        return null;
      }
      return f(V);
    }
    function B(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var V = 0; V < A.length; V++) {
        var ne = A[V];
        if (typeof ne != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(ne) + " at index " + V + "."
          ), s;
      }
      function Z(H, J, Q, G, oe) {
        for (var ie = [], de = 0; de < A.length; de++) {
          var ae = A[de], D = ae(H, J, Q, G, oe, o);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && ie.push(D.data.expectedType);
        }
        var he = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new v("Invalid " + G + " `" + oe + "` supplied to " + ("`" + Q + "`" + he + "."));
      }
      return f(Z);
    }
    function M() {
      function A(V, ne, Z, H, J) {
        return F(V[ne]) ? null : new v("Invalid " + H + " `" + J + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return f(A);
    }
    function N(A, V, ne, Z, H) {
      return new v(
        (A || "React class") + ": " + V + " type `" + ne + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function K(A) {
      function V(ne, Z, H, J, Q) {
        var G = ne[Z], oe = U(G);
        if (oe !== "object")
          return new v("Invalid " + J + " `" + Q + "` of type `" + oe + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var ie in A) {
          var de = A[ie];
          if (typeof de != "function")
            return N(H, J, Q, ie, Y(de));
          var ae = de(G, ie, H, J, Q + "." + ie, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return f(V);
    }
    function W(A) {
      function V(ne, Z, H, J, Q) {
        var G = ne[Z], oe = U(G);
        if (oe !== "object")
          return new v("Invalid " + J + " `" + Q + "` of type `" + oe + "` " + ("supplied to `" + H + "`, expected `object`."));
        var ie = t({}, ne[Z], A);
        for (var de in ie) {
          var ae = A[de];
          if (r(A, de) && typeof ae != "function")
            return N(H, J, Q, de, Y(ae));
          if (!ae)
            return new v(
              "Invalid " + J + " `" + Q + "` key `" + de + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(ne[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var D = ae(G, de, H, J, Q + "." + de, o);
          if (D)
            return D;
        }
        return null;
      }
      return f(V);
    }
    function F(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(F);
          if (A === null || l(A))
            return !0;
          var V = p(A);
          if (V) {
            var ne = V.call(A), Z;
            if (V !== A.entries) {
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
    function L(A, V) {
      return A === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function U(A) {
      var V = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : L(V, A) ? "symbol" : V;
    }
    function Y(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var V = U(A);
      if (V === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function se(A) {
      var V = Y(A);
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
    function ee(A) {
      return !A.constructor || !A.constructor.name ? m : A.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, pr;
}
var fr, Zi;
function eu() {
  if (Zi)
    return fr;
  Zi = 1;
  var e = Jr();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, fr = function() {
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
  }, fr;
}
if (process.env.NODE_ENV !== "production") {
  var tu = ys(), nu = !0;
  $r.exports = Zc()(tu.isElement, nu);
} else
  $r.exports = eu()();
var ou = $r.exports;
const n = /* @__PURE__ */ qc(ou), sn = () => /* @__PURE__ */ g(
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
    children: /* @__PURE__ */ g(rs, {})
  }
);
function jt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function T() {
  return T = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, T.apply(this, arguments);
}
function Zt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Es(e) {
  if (!Zt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Es(e[o]);
  }), t;
}
function xt(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? T({}, e) : e;
  return Zt(e) && Zt(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (Zt(t[i]) && i in e && Zt(e[i]) ? r[i] = xt(e[i], t[i], o) : o.clone ? r[i] = Zt(t[i]) ? Es(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
function ru(e) {
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
  return typeof c == "function" && !ru(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Os = jt(n.element, Ts);
Os.isRequired = jt(n.element.isRequired, Ts);
const ho = Os;
function iu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function au(e, t, o, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !iu(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Qr = jt(n.elementType, au), su = "exact-prop: ​";
function Cs(e) {
  return process.env.NODE_ENV === "production" ? e : T({}, e, {
    [su]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function qt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Ir = { exports: {} }, Me = {};
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
function lu() {
  if (ea)
    return Me;
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
  return Me.ContextConsumer = s, Me.ContextProvider = a, Me.Element = e, Me.ForwardRef = c, Me.Fragment = o, Me.Lazy = m, Me.Memo = p, Me.Portal = t, Me.Profiler = i, Me.StrictMode = r, Me.Suspense = u, Me.SuspenseList = d, Me.isAsyncMode = function() {
    return !1;
  }, Me.isConcurrentMode = function() {
    return !1;
  }, Me.isContextConsumer = function(f) {
    return v(f) === s;
  }, Me.isContextProvider = function(f) {
    return v(f) === a;
  }, Me.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Me.isForwardRef = function(f) {
    return v(f) === c;
  }, Me.isFragment = function(f) {
    return v(f) === o;
  }, Me.isLazy = function(f) {
    return v(f) === m;
  }, Me.isMemo = function(f) {
    return v(f) === p;
  }, Me.isPortal = function(f) {
    return v(f) === t;
  }, Me.isProfiler = function(f) {
    return v(f) === i;
  }, Me.isStrictMode = function(f) {
    return v(f) === r;
  }, Me.isSuspense = function(f) {
    return v(f) === u;
  }, Me.isSuspenseList = function(f) {
    return v(f) === d;
  }, Me.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === i || f === r || f === u || f === d || f === y || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === O || f.getModuleId !== void 0);
  }, Me.typeOf = v, Me;
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
function cu() {
  return ta || (ta = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = !1, v = !1, f = !1, R = !1, P = !1, C;
    C = Symbol.for("react.module.reference");
    function b(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === o || k === i || P || k === r || k === u || k === d || R || k === y || O || v || f || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === p || k.$$typeof === a || k.$$typeof === s || k.$$typeof === c || // This needs to include all possible module reference object
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
                var le = Te && Te.$$typeof;
                switch (le) {
                  case l:
                  case s:
                  case c:
                  case m:
                  case p:
                  case a:
                    return le;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var I = s, $ = a, _ = e, B = c, M = o, N = m, K = p, W = t, F = i, L = r, U = u, Y = d, se = !1, ee = !1;
    function A(k) {
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
    function de(k) {
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
    Ne.ContextConsumer = I, Ne.ContextProvider = $, Ne.Element = _, Ne.ForwardRef = B, Ne.Fragment = M, Ne.Lazy = N, Ne.Memo = K, Ne.Portal = W, Ne.Profiler = F, Ne.StrictMode = L, Ne.Suspense = U, Ne.SuspenseList = Y, Ne.isAsyncMode = A, Ne.isConcurrentMode = V, Ne.isContextConsumer = ne, Ne.isContextProvider = Z, Ne.isElement = H, Ne.isForwardRef = J, Ne.isFragment = Q, Ne.isLazy = G, Ne.isMemo = oe, Ne.isPortal = ie, Ne.isProfiler = de, Ne.isStrictMode = ae, Ne.isSuspense = D, Ne.isSuspenseList = he, Ne.isValidElementType = b, Ne.typeOf = h;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? Ir.exports = lu() : Ir.exports = cu();
var na = Ir.exports;
const uu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function du(e) {
  const t = `${e}`.match(uu);
  return t && t[1] || "";
}
function Rs(e, t = "") {
  return e.displayName || e.name || du(e) || t;
}
function oa(e, t, o) {
  const r = Rs(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function pu(e) {
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
const fu = n.oneOfType([n.func, n.object]), $t = fu;
function fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : qt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function kr(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
function Zr(e, t = 166) {
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
function mu(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (o, r, i, a, s) => {
    const l = i || "<<anonymous>>", c = s || r;
    return typeof o[r] < "u" ? new Error(`The ${a} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Po(e, t) {
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function it(e) {
  return e && e.ownerDocument || document;
}
function Ht(e) {
  return it(e).defaultView || window;
}
function ws(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const o = t ? T({}, t.propTypes) : null;
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
function ro(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const hu = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Ft = hu;
let ra = 0;
function bu(e) {
  const [t, o] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && (ra += 1, o(`mui-${ra}`));
  }, [t]), r;
}
const ia = x["useId".toString()];
function ei(e) {
  if (ia !== void 0) {
    const t = ia();
    return e ?? t;
  }
  return bu(e);
}
function Ss(e, t, o, r, i) {
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
  } = x.useRef(e !== void 0), [a, s] = x.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    x.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${o} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: u
    } = x.useRef(t);
    x.useEffect(() => {
      !i && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = x.useCallback((u) => {
    i || s(u);
  }, []);
  return [l, c];
}
function Pt(e) {
  const t = x.useRef(e);
  return Ft(() => {
    t.current = e;
  }), x.useCallback((...o) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...o)
  ), []);
}
function et(...e) {
  return x.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      ro(o, t);
    });
  }, e);
}
let Bo = !0, Ar = !1, aa;
const gu = {
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
function vu(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && gu[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function yu(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Bo = !0);
}
function mr() {
  Bo = !1;
}
function xu() {
  this.visibilityState === "hidden" && Ar && (Bo = !0);
}
function Eu(e) {
  e.addEventListener("keydown", yu, !0), e.addEventListener("mousedown", mr, !0), e.addEventListener("pointerdown", mr, !0), e.addEventListener("touchstart", mr, !0), e.addEventListener("visibilitychange", xu, !0);
}
function Tu(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Bo || vu(t);
}
function Ps() {
  const e = x.useCallback((i) => {
    i != null && Eu(i.ownerDocument);
  }, []), t = x.useRef(!1);
  function o() {
    return t.current ? (Ar = !0, window.clearTimeout(aa), aa = window.setTimeout(() => {
      Ar = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(i) {
    return Tu(i) ? (t.current = !0, !0) : !1;
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
const Ou = (e) => {
  const t = x.useRef({});
  return x.useEffect(() => {
    t.current = e;
  }), t.current;
}, Cu = Ou;
function Ru(e) {
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
function wu(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Su = Number.isInteger || wu;
function Is(e, t, o, r) {
  const i = e[t];
  if (i == null || !Su(i)) {
    const a = Ru(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function ks(e, t, ...o) {
  return e[t] === void 0 ? null : Is(e, t, ...o);
}
function Mr() {
  return null;
}
ks.isRequired = Is;
Mr.isRequired = Mr;
const ti = process.env.NODE_ENV === "production" ? Mr : ks;
function As(e, t) {
  const o = T({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = T({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, a = t[r];
      o[r] = {}, !a || !Object.keys(a) ? o[r] = i : !i || !Object.keys(i) ? o[r] = a : (o[r] = T({}, a), Object.keys(i).forEach((s) => {
        o[r][s] = As(i[s], a[s]);
      }));
    } else
      o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function Ve(e, t, o = void 0) {
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
const sa = (e) => e, Pu = () => {
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
}, $u = Pu(), Ms = $u, Iu = {
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
  const r = Iu[t];
  return r ? `${o}-${r}` : `${Ms.generate(e)}-${t}`;
}
function Be(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Le(e, i, o);
  }), r;
}
const zo = "$$material";
function ge(e, t) {
  if (e == null)
    return {};
  var o = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (o[i] = e[i]);
  return o;
}
function ku(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ns(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e;
  return /* @__PURE__ */ g($c, {
    styles: typeof t == "function" ? (i) => t(ku(i) ? o : i) : t
  });
}
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
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
function Au(e, t) {
  const o = Vc(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const Mu = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Nu = ["values", "unit", "step"], _u = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => T({}, o, {
    [r.key]: r.val
  }), {});
};
function Du(e) {
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
  } = e, i = ge(e, Nu), a = _u(t), s = Object.keys(a);
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
  return T({
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
const ju = {
  borderRadius: 4
}, Fu = ju, Lu = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {}, Yt = Lu;
function Yn(e, t) {
  return t ? xt(e, t, {
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
}, la = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ni[e]}px)`
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
      if (Object.keys(a.values || ni).indexOf(l) !== -1) {
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
function Bu(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function zu(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function Wu(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, a) => {
    a < e.length && (o[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (o[i] = !0);
  }), o;
}
function Wo({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || Wu(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let a;
  return i.reduce((s, l, c) => (Array.isArray(e) ? (s[l] = e[c] != null ? e[c] : e[a], a = c) : typeof e == "object" ? (s[l] = e[l] != null ? e[l] : e[a], a = l) : s[l] = e, s), {});
}
function Vo(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function ko(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Vo(e, o) || r, t && (i = t(i, r, e)), i;
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
    const l = s[t], c = s.theme, u = Vo(c, r) || {};
    return Tt(s, l, (p) => {
      let m = ko(u, i, p);
      return p === m && typeof p == "string" && (m = ko(u, i, `${t}${p === "default" ? "" : fe(p)}`, p)), o === !1 ? m : {
        [o]: m
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Yt
  } : {}, a.filterProps = [t], a;
}
function Vu(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Uu = {
  m: "margin",
  p: "padding"
}, qu = {
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
}, Hu = Vu((e) => {
  if (e.length > 2)
    if (ca[e])
      e = ca[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Uu[t], i = qu[o] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Uo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], qo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Yu = [...Uo, ...qo];
function bo(e, t, o, r) {
  var i;
  const a = (i = Vo(e, t, !1)) != null ? i : o;
  return typeof a == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), a * s) : Array.isArray(a) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > a.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${s} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), a[s]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function _s(e) {
  return bo(e, "spacing", 8, "spacing");
}
function go(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ku(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = go(t, o), r), {});
}
function Gu(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const i = Hu(o), a = Ku(i, r), s = e[o];
  return Tt(e, s, a);
}
function Ds(e, t) {
  const o = _s(e.theme);
  return Object.keys(e).map((r) => Gu(e, t, r, o)).reduce(Yn, {});
}
function Ye(e) {
  return Ds(e, Uo);
}
Ye.propTypes = process.env.NODE_ENV !== "production" ? Uo.reduce((e, t) => (e[t] = Yt, e), {}) : {};
Ye.filterProps = Uo;
function Ke(e) {
  return Ds(e, qo);
}
Ke.propTypes = process.env.NODE_ENV !== "production" ? qo.reduce((e, t) => (e[t] = Yt, e), {}) : {};
Ke.filterProps = qo;
process.env.NODE_ENV !== "production" && Yu.reduce((e, t) => (e[t] = Yt, e), {});
function Xu(e = 8) {
  if (e.mui)
    return e;
  const t = _s({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return o.mui = !0, o;
}
function Ho(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, a) => t[a] ? Yn(i, t[a](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function At(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Ju = je({
  prop: "border",
  themeKey: "borders",
  transform: At
}), Qu = je({
  prop: "borderTop",
  themeKey: "borders",
  transform: At
}), Zu = je({
  prop: "borderRight",
  themeKey: "borders",
  transform: At
}), ed = je({
  prop: "borderBottom",
  themeKey: "borders",
  transform: At
}), td = je({
  prop: "borderLeft",
  themeKey: "borders",
  transform: At
}), nd = je({
  prop: "borderColor",
  themeKey: "palette"
}), od = je({
  prop: "borderTopColor",
  themeKey: "palette"
}), rd = je({
  prop: "borderRightColor",
  themeKey: "palette"
}), id = je({
  prop: "borderBottomColor",
  themeKey: "palette"
}), ad = je({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Yo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = bo(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: go(t, r)
    });
    return Tt(e, e.borderRadius, o);
  }
  return null;
};
Yo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Yt
} : {};
Yo.filterProps = ["borderRadius"];
Ho(Ju, Qu, Zu, ed, td, nd, od, rd, id, ad, Yo);
const Ko = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = bo(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: go(t, r)
    });
    return Tt(e, e.gap, o);
  }
  return null;
};
Ko.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Yt
} : {};
Ko.filterProps = ["gap"];
const Go = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = bo(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: go(t, r)
    });
    return Tt(e, e.columnGap, o);
  }
  return null;
};
Go.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Yt
} : {};
Go.filterProps = ["columnGap"];
const Xo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = bo(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: go(t, r)
    });
    return Tt(e, e.rowGap, o);
  }
  return null;
};
Xo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Yt
} : {};
Xo.filterProps = ["rowGap"];
const sd = je({
  prop: "gridColumn"
}), ld = je({
  prop: "gridRow"
}), cd = je({
  prop: "gridAutoFlow"
}), ud = je({
  prop: "gridAutoColumns"
}), dd = je({
  prop: "gridAutoRows"
}), pd = je({
  prop: "gridTemplateColumns"
}), fd = je({
  prop: "gridTemplateRows"
}), md = je({
  prop: "gridTemplateAreas"
}), hd = je({
  prop: "gridArea"
});
Ho(Ko, Go, Xo, sd, ld, cd, ud, dd, pd, fd, md, hd);
function Tn(e, t) {
  return t === "grey" ? t : e;
}
const bd = je({
  prop: "color",
  themeKey: "palette",
  transform: Tn
}), gd = je({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Tn
}), vd = je({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Tn
});
Ho(bd, gd, vd);
function bt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yd = je({
  prop: "width",
  transform: bt
}), oi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r;
      return {
        maxWidth: ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || ni[o] || bt(o)
      };
    };
    return Tt(e, e.maxWidth, t);
  }
  return null;
};
oi.filterProps = ["maxWidth"];
const xd = je({
  prop: "minWidth",
  transform: bt
}), Ed = je({
  prop: "height",
  transform: bt
}), Td = je({
  prop: "maxHeight",
  transform: bt
}), Od = je({
  prop: "minHeight",
  transform: bt
});
je({
  prop: "size",
  cssProperty: "width",
  transform: bt
});
je({
  prop: "size",
  cssProperty: "height",
  transform: bt
});
const Cd = je({
  prop: "boxSizing"
});
Ho(yd, oi, xd, Ed, Td, Od, Cd);
const Rd = {
  // borders
  border: {
    themeKey: "borders",
    transform: At
  },
  borderTop: {
    themeKey: "borders",
    transform: At
  },
  borderRight: {
    themeKey: "borders",
    transform: At
  },
  borderBottom: {
    themeKey: "borders",
    transform: At
  },
  borderLeft: {
    themeKey: "borders",
    transform: At
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
    style: Yo
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
    style: Ko
  },
  rowGap: {
    style: Xo
  },
  columnGap: {
    style: Go
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
    transform: bt
  },
  maxWidth: {
    style: oi
  },
  minWidth: {
    transform: bt
  },
  height: {
    transform: bt
  },
  maxHeight: {
    transform: bt
  },
  minHeight: {
    transform: bt
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
}, Jo = Rd;
function wd(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Sd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pd() {
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
    const m = Vo(i, u) || {};
    return p ? p(s) : Tt(s, r, (O) => {
      let v = ko(m, d, O);
      return O === v && typeof O == "string" && (v = ko(m, d, `${o}${O === "default" ? "" : fe(O)}`, O)), c === !1 ? v : {
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
    const s = (r = a.unstable_sxConfig) != null ? r : Jo;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(a);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Bu(a.breakpoints), p = Object.keys(d);
      let m = d;
      return Object.keys(u).forEach((y) => {
        const O = Sd(u[y], a);
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
              wd(v, O) ? m[y] = t({
                sx: O,
                theme: a
              }) : m = Yn(m, v);
            }
          else
            m = Yn(m, e(y, O, a, s));
      }), zu(p, m);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const js = Pd();
js.filterProps = ["sx"];
const ri = js, $d = ["breakpoints", "palette", "spacing", "shape"];
function ii(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: a = {}
  } = e, s = ge(e, $d), l = Du(o), c = Xu(i);
  let u = xt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: T({
      mode: "light"
    }, r),
    spacing: c,
    shape: T({}, Fu, a)
  }, s);
  return u = t.reduce((d, p) => xt(d, p), u), u.unstable_sxConfig = T({}, Jo, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return ri({
      sx: p,
      theme: this
    });
  }, u;
}
function Id(e) {
  return Object.keys(e).length === 0;
}
function Fs(e = null) {
  const t = x.useContext(Ic);
  return !t || Id(t) ? e : t;
}
const kd = ii();
function ai(e = kd) {
  return Fs(e);
}
function Ls({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = ai(o), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ g(Ns, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Ls.propTypes = {
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
const Ad = ["sx"], Md = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : Jo;
  return Object.keys(e).forEach((a) => {
    i[a] ? r.systemProps[a] = e[a] : r.otherProps[a] = e[a];
  }), r;
};
function Nd(e) {
  const {
    sx: t
  } = e, o = ge(e, Ad), {
    systemProps: r,
    otherProps: i
  } = Md(o);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...s) => {
    const l = t(...s);
    return Zt(l) ? T({}, r, l) : r;
  } : a = T({}, r, t), T({}, i, {
    sx: a
  });
}
function Bs(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (o = Bs(e[t])) && (r && (r += " "), r += o);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ve() {
  for (var e, t, o = 0, r = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = Bs(e)) && (r && (r += " "), r += t);
  return r;
}
const _d = ["variant"];
function ua(e) {
  return e.length === 0;
}
function zs(e) {
  const {
    variant: t
  } = e, o = ge(e, _d);
  let r = t || "";
  return Object.keys(o).sort().forEach((i) => {
    i === "color" ? r += ua(r) ? e[i] : fe(e[i]) : r += `${ua(r) ? i : fe(i)}${fe(e[i].toString())}`;
  }), r;
}
const Dd = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function jd(e) {
  return Object.keys(e).length === 0;
}
function Fd(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Ld = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Bd = (e, t) => {
  let o = [];
  t && t.components && t.components[e] && t.components[e].variants && (o = t.components[e].variants);
  const r = {};
  return o.forEach((i) => {
    const a = zs(i.props);
    r[a] = i.style;
  }), r;
}, zd = (e, t, o, r) => {
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
const Wd = ii(), da = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function jn({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return jd(t) ? e : t[o] || t;
}
function Vd(e) {
  return e ? (t, o) => o[e] : null;
}
function Ud(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = Wd,
    rootShouldForwardProp: r = Kn,
    slotShouldForwardProp: i = Kn
  } = e, a = (s) => ri(T({}, s, {
    theme: jn(T({}, s, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return a.__mui_systemSx = !0, (s, l = {}) => {
    Mu(s, (b) => b.filter((h) => !(h != null && h.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = Vd(da(u))
    } = l, y = ge(l, Dd), O = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), v = p || !1;
    let f;
    process.env.NODE_ENV !== "production" && c && (f = `${c}-${da(u || "Root")}`);
    let R = Kn;
    u === "Root" || u === "root" ? R = r : u ? R = i : Fd(s) && (R = void 0);
    const P = Au(s, T({
      shouldForwardProp: R,
      label: f
    }, y)), C = (b, ...h) => {
      const I = h ? h.map((M) => typeof M == "function" && M.__emotion_real !== M ? (N) => M(T({}, N, {
        theme: jn(T({}, N, {
          defaultTheme: o,
          themeId: t
        }))
      })) : M) : [];
      let $ = b;
      c && m && I.push((M) => {
        const N = jn(T({}, M, {
          defaultTheme: o,
          themeId: t
        })), K = Ld(c, N);
        if (K) {
          const W = {};
          return Object.entries(K).forEach(([F, L]) => {
            W[F] = typeof L == "function" ? L(T({}, M, {
              theme: N
            })) : L;
          }), m(M, W);
        }
        return null;
      }), c && !O && I.push((M) => {
        const N = jn(T({}, M, {
          defaultTheme: o,
          themeId: t
        }));
        return zd(M, Bd(c, N), N, c);
      }), v || I.push(a);
      const _ = I.length - h.length;
      if (Array.isArray(b) && _ > 0) {
        const M = new Array(_).fill("");
        $ = [...b, ...M], $.raw = [...b.raw, ...M];
      } else
        typeof b == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        b.__emotion_real !== b && ($ = (M) => b(T({}, M, {
          theme: jn(T({}, M, {
            defaultTheme: o,
            themeId: t
          }))
        })));
      const B = P($, ...I);
      if (process.env.NODE_ENV !== "production") {
        let M;
        c && (M = `${c}${fe(u || "")}`), M === void 0 && (M = `Styled(${pu(s)})`), B.displayName = M;
      }
      return s.muiName && (B.muiName = s.muiName), B;
    };
    return P.withConfig && (C.withConfig = P.withConfig), C;
  };
}
function qd(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : As(t.components[o].defaultProps, r);
}
function Hd({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let i = ai(o);
  return r && (i = i[r] || i), qd({
    theme: i,
    name: t,
    props: e
  });
}
function si(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), Math.min(Math.max(t, e), o);
}
function Yd(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function on(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return on(Yd(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : qt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : qt(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
function Qo(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Kd(e) {
  e = on(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (u, d = (u + o / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Qo({
    type: l,
    values: c
  });
}
function pa(e) {
  e = on(e);
  let t = e.type === "hsl" || e.type === "hsla" ? on(Kd(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function fa(e, t) {
  const o = pa(e), r = pa(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function rt(e, t) {
  return e = on(e), t = si(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qo(e);
}
function Gd(e, t) {
  if (e = on(e), t = si(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return Qo(e);
}
function Xd(e, t) {
  if (e = on(e), t = si(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return Qo(e);
}
function Jd(e, t) {
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
const Qd = {
  black: "#000",
  white: "#fff"
}, io = Qd, Zd = {
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
}, ep = Zd, tp = {
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
}, mn = tp, np = {
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
}, hn = np, op = {
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
}, Fn = op, rp = {
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
}, bn = rp, ip = {
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
}, gn = ip, ap = {
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
}, vn = ap, sp = ["mode", "contrastThreshold", "tonalOffset"], ma = {
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
    paper: io.white,
    default: io.white
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
}, hr = {
  text: {
    primary: io.white,
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
    active: io.white,
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
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = Xd(e.main, i) : t === "dark" && (e.dark = Gd(e.main, a)));
}
function lp(e = "light") {
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
function cp(e = "light") {
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
function up(e = "light") {
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
function dp(e = "light") {
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
function pp(e = "light") {
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
function fp(e = "light") {
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
function mp(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, i = ge(e, sp), a = e.primary || lp(t), s = e.secondary || cp(t), l = e.error || up(t), c = e.info || dp(t), u = e.success || pp(t), d = e.warning || fp(t);
  function p(v) {
    const f = fa(v, hr.text.primary) >= o ? hr.text.primary : ma.text.primary;
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
    lightShade: P = 300,
    darkShade: C = 700
  }) => {
    if (v = T({}, v), !v.main && v[R] && (v.main = v[R]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : qt(11, f ? ` (${f})` : "", R));
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
} });` : qt(12, f ? ` (${f})` : "", JSON.stringify(v.main)));
    return ha(v, "light", P, r), ha(v, "dark", C, r), v.contrastText || (v.contrastText = p(v.main)), v;
  }, y = {
    dark: hr,
    light: ma
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), xt(T({
    // A collection of common colors.
    common: T({}, io),
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
    grey: ep,
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
const hp = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function bp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ba = {
  textTransform: "uppercase"
}, ga = '"Roboto", "Helvetica", "Arial", sans-serif';
function gp(e, t) {
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
  } = o, m = ge(o, hp);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = i / 14, O = p || ((R) => `${R / u * y}rem`), v = (R, P, C, b, h) => T({
    fontFamily: r,
    fontWeight: R,
    fontSize: O(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, r === ga ? {
    letterSpacing: `${bp(b / P)}em`
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
  return xt(T({
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
const vp = 0.2, yp = 0.14, xp = 0.12;
function qe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${vp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${yp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xp})`].join(",");
}
const Ep = ["none", qe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), qe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), qe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), qe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), qe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), qe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), qe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), qe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), qe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), qe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), qe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), qe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), qe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), qe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), qe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), qe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), qe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), qe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), qe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), qe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), qe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), qe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), qe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), qe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Tp = Ep, Op = ["duration", "easing", "delay"], Cp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Rp = {
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
function wp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Sp(e) {
  const t = T({}, Cp, e.easing), o = T({}, Rp, e.duration);
  return T({
    getAutoHeightDuration: wp,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = a, u = ge(a, Op);
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
const Pp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, $p = Pp, Ip = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function kp(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: i = {},
    typography: a = {}
  } = e, s = ge(e, Ip);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : qt(18));
  const l = mp(r), c = ii(e);
  let u = xt(c, {
    mixins: Jd(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Tp.slice(),
    typography: gp(l, a),
    transitions: Sp(i),
    zIndex: T({}, $p)
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
  return u.unstable_sxConfig = T({}, Jo, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return ri({
      sx: p,
      theme: this
    });
  }, u;
}
const Ap = kp(), Zo = Ap;
function ln() {
  const e = ai(Zo);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e[zo] || e;
}
function Ue({
  props: e,
  name: t
}) {
  return Hd({
    props: e,
    name: t,
    defaultTheme: Zo,
    themeId: zo
  });
}
const Kt = (e) => Kn(e) && e !== "classes", Mp = Kn, Np = Ud({
  themeId: zo,
  defaultTheme: Zo,
  rootShouldForwardProp: Kt
}), me = Np, _p = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ya = _p, Ws = ({
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
  const u = ln();
  return /* @__PURE__ */ pe(
    Ur,
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
        l && /* @__PURE__ */ g(sn, {}),
        e
      ]
    }
  );
};
Ws.propTypes = {
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
const li = ({
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
  return /* @__PURE__ */ g(
    sc,
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
      children: /* @__PURE__ */ pe(Rr, { sx: { position: "relative" }, children: [
        s && /* @__PURE__ */ g(sn, {}),
        i ? /* @__PURE__ */ g(Ws, { style: r, children: o }) : /* @__PURE__ */ g("div", { style: r, children: o }),
        /* @__PURE__ */ g(
          eo,
          {
            onClick: c,
            sx: {
              position: "absolute",
              top: 2,
              right: 2
            },
            children: /* @__PURE__ */ g(kc, {})
          }
        )
      ] })
    }
  );
};
li.propTypes = {
  open: n.bool.isRequired,
  onClose: n.func.isRequired,
  children: n.node.isRequired,
  style: n.object,
  renderBox: n.bool,
  disableCloseOnBackdropClick: n.bool,
  isLoading: n.bool
};
const Vs = ({
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
  return /* @__PURE__ */ pe(
    li,
    {
      open: e,
      onClose: d,
      sx: {
        margin: "0 auto",
        maxWidth: 400,
        ...c
      },
      children: [
        a && /* @__PURE__ */ g(sn, {}),
        /* @__PURE__ */ g(ut, { fontWeight: "bold", variant: "h6", mb: 1, children: /* @__PURE__ */ g("strong", { children: t ?? "" }) }),
        /* @__PURE__ */ g(Lo, { sx: { mb: 2 } }),
        /* @__PURE__ */ g(He, { mb: 1, fontSize: 16, textAlign: "center", children: o ?? "" }),
        /* @__PURE__ */ pe(He, { direction: "column", mb: 2, children: [
          l,
          s && /* @__PURE__ */ pe(He, { alignItems: "center", direction: "row", mt: 1, children: [
            /* @__PURE__ */ g(
              ps,
              {
                color: "error",
                sx: { marginRight: ".5rem", fontSize: "2rem" }
              }
            ),
            /* @__PURE__ */ g(ut, { color: "error", fontSize: "16px", children: typeof s == "string" ? s : "Ocurrió un error, intente nuevamente." })
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
              /* @__PURE__ */ g(wr, { color: "secondary", onClick: d, disabled: a, children: "Cancelar" }),
              /* @__PURE__ */ g(wr, { onClick: u, disabled: a, children: s ? "Reintentar" : "Confirmar" })
            ]
          }
        )
      ]
    }
  );
};
Vs.propTypes = {
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
const Ao = ({ name: e, profile_picture: t, size: o = 120, sx: r, ...i }) => /* @__PURE__ */ g(
  lc,
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
Ao.propTypes = {
  profile_picture: n.shape({
    url: n.string
  }),
  size: n.number,
  sx: n.object,
  name: n.string
};
function Dp(e) {
  const { children: t, value: o, index: r, ...i } = e;
  return /* @__PURE__ */ g("div", { role: "tabpanel", hidden: o !== r, ...i, children: o === r && t });
}
Dp.propTypes = {
  index: n.number,
  value: n.any,
  children: n.node
};
const ci = (e) => {
  const t = ln(), { orderBy: o, orderDirection: r, headCells: i, handleSortRequest: a } = e, s = (l) => (c) => {
    a(c, l);
  };
  return /* @__PURE__ */ g(cc, { sx: { backgroundColor: t.palette.table.header }, children: /* @__PURE__ */ g(to, { children: i.map((l) => /* @__PURE__ */ g(no, { component: "th", width: l.width, children: l.isSortable ? /* @__PURE__ */ g(
    uc,
    {
      active: o === l.id,
      direction: o === l.id ? r : "asc",
      onClick: s(l.id),
      children: l.label
    }
  ) : /* @__PURE__ */ g("span", { children: l.label }) }, l.id)) }) });
};
ci.propTypes = {
  orderBy: n.string,
  orderDirection: n.string,
  headCells: n.array,
  handleSortRequest: n.func
};
const jp = ({
  defaultChecked: e = !1,
  name: t,
  labelText: o = "",
  labelPlacement: r = "end",
  ...i
}) => {
  const { control: a } = fo();
  return /* @__PURE__ */ g(po, { children: /* @__PURE__ */ g(
    mo,
    {
      control: a,
      name: t,
      defaultValue: e,
      render: ({ field: s }) => /* @__PURE__ */ g(
        is,
        {
          labelPlacement: r,
          control: /* @__PURE__ */ g(
            dc,
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
jp.propTypes = {
  control: n.object.isRequired,
  defaultChecked: n.bool,
  name: n.string.isRequired,
  labelText: n.string,
  fullWidth: n.bool,
  labelPlacement: n.string
};
const Fp = ({
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
  const { control: p } = fo();
  return /* @__PURE__ */ g(po, { fullWidth: r, ...d, children: /* @__PURE__ */ g(
    mo,
    {
      control: p,
      name: e,
      render: ({ field: { onChange: m, onBlur: y, value: O, name: v, ref: f } }) => /* @__PURE__ */ g(
        pc,
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
Fp.propTypes = {
  control: n.object.isRequired,
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
const Lp = ({ open: e, onConfirm: t, children: o }) => {
  const r = () => {
    typeof t == "function" && t();
  };
  return /* @__PURE__ */ pe(
    li,
    {
      open: e,
      onClose: r,
      style: {
        maxWidth: "400px"
      },
      children: [
        /* @__PURE__ */ g(ut, { fontWeight: "bold", variant: "h6", mb: 1, color: "error", children: "Error" }),
        /* @__PURE__ */ g(Lo, { sx: { mb: 2 } }),
        /* @__PURE__ */ g(He, { direction: "column", mb: 2, children: o && /* @__PURE__ */ pe(He, { alignItems: "center", children: [
          /* @__PURE__ */ g(ps, { color: "error", sx: { mb: "1rem", fontSize: "3rem" } }),
          /* @__PURE__ */ g(ut, { color: "error", fontSize: "16px", textAlign: "center", children: o })
        ] }) }),
        /* @__PURE__ */ g(He, { direction: "row", justifyContent: "end", children: /* @__PURE__ */ g(wr, { onClick: r, children: "Aceptar" }) })
      ]
    }
  );
};
Lp.propTypes = {
  open: n.bool.isRequired,
  onConfirm: n.func,
  children: n.node
};
function Bp({ money: e, ...t }) {
  return /* @__PURE__ */ g(ut, { component: "span", fontSize: 14, ...t, children: Number(e).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS"
  }) });
}
Bp.propTypes = {
  money: n.number.isRequired
};
const zp = ({ title: e, renderAside: t }) => /* @__PURE__ */ pe(
  He,
  {
    display: "flex",
    direction: { sm: "row", xs: "column" },
    alignItems: { sm: "center", xs: "flex-start" },
    justifyContent: { sm: "space-between", xs: "flex-start" },
    marginBottom: 2,
    children: [
      /* @__PURE__ */ g(ut, { fontWeight: "bold", fontSize: 24, children: e }),
      t && /* @__PURE__ */ g(He, { mt: { xs: 2, sm: 0 }, children: t })
    ]
  }
);
zp.propTypes = {
  title: n.string.isRequired,
  renderAside: n.node
};
function Wp(e = []) {
  return e.map((t) => /* @__PURE__ */ g(hc, { value: t.id, children: t.name }, t.id));
}
const Us = ({
  data: e,
  name: t,
  labelText: o = "",
  required: r = !1,
  disabled: i = !1,
  render: a,
  ...s
}) => {
  const l = nc(), c = a || Wp, { control: u } = fo();
  return /* @__PURE__ */ pe(po, { fullWidth: !0, children: [
    /* @__PURE__ */ g(fc, { id: l, required: r, disabled: i, children: o }),
    /* @__PURE__ */ g(
      mo,
      {
        control: u,
        name: t,
        render: ({ field: { onChange: d, onBlur: p, value: m, name: y, ref: O } }) => /* @__PURE__ */ g(
          mc,
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
Us.propTypes = {
  control: n.object.isRequired,
  data: n.array,
  name: n.string.isRequired,
  labelText: n.string,
  createOption: n.func,
  required: n.bool,
  disabled: n.bool,
  render: n.func
};
Us.defaultProps = {
  data: []
};
const gt = {
  ASC: "asc",
  DESC: "desc"
};
function Vp(e, t, o, r = gt.ASC, i = null) {
  let a = e[o] ?? "", s = t[o] ?? "";
  if (zi(new Date(a)) && zi(new Date(s)))
    return a = new Date(a), s = new Date(s), r === gt.ASC ? a - s : s - a;
  o === "status" && (a = a.deleted_at ? "inactivo" : "activo", s = s.deleted_at ? "inactivo" : "activo"), typeof i == "function" && (a = i(e, o), s = i(t, o)), (typeof a == "object" || typeof s == "object") && (a = a.name, s = s.name), a = String(a).toLowerCase().trim(), s = String(s).toLowerCase().trim();
  const l = a.localeCompare(s);
  return r === gt.ASC ? l : -l;
}
const qs = as({
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
}), Up = (e) => {
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
  } = e, [p, m] = ct(u), [y, O] = ct(l), [v, f] = ct(0), [R, P] = ct(r), C = (_, B) => {
    const M = y === B && p === gt.ASC;
    m(M ? gt.DESC : gt.ASC), O(B);
  }, b = (_, B) => {
    f(B);
  }, h = (_) => {
    P(parseInt(_.target.value, 10)), f(0);
  }, $ = (() => {
    const _ = o.map((M, N) => [M, N]);
    return _.sort((M, N) => {
      const K = Vp(
        M[0],
        N[0],
        y,
        p,
        c
      );
      return K !== 0 ? K : M[1] - N[1];
    }), _.map((M) => M[0]).slice(
      v * R,
      v * R + R
    );
  })();
  return /* @__PURE__ */ pe(qr, { theme: qs, children: [
    /* @__PURE__ */ g(ss, { children: /* @__PURE__ */ pe(ls, { children: [
      /* @__PURE__ */ g(
        ci,
        {
          headCells: t,
          orderBy: y,
          orderDirection: p,
          handleSortRequest: C
        }
      ),
      /* @__PURE__ */ pe(cs, { children: [
        i && /* @__PURE__ */ g(to, { children: /* @__PURE__ */ g(no, { colSpan: t.length, align: "center", children: /* @__PURE__ */ g(sn, {}) }) }),
        ($ == null ? void 0 : $.length) > 0 ? $.map((_) => /* @__PURE__ */ g(
          d,
          {
            data: _,
            onDeleteItem: a,
            onEditItem: s
          },
          _.id
        )) : /* @__PURE__ */ g(to, { children: /* @__PURE__ */ g(no, { colSpan: t.length, align: "center", children: /* @__PURE__ */ g(ut, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ g(
      us,
      {
        rowsPerPage: R,
        page: v,
        count: o.length,
        component: "div",
        rowsPerPageOptions: [5, 10, 25, 50, 100],
        onPageChange: b,
        onRowsPerPageChange: h
      }
    )
  ] });
};
Up.propTypes = {
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
function br(e) {
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
function Bn(e) {
  return function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = o.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    var s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? Hp(l, function(p) {
      return p.test(s);
    }) : qp(l, function(p) {
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
function qp(e, t) {
  for (var o in e)
    if (e.hasOwnProperty(o) && t(e[o]))
      return o;
}
function Hp(e, t) {
  for (var o = 0; o < e.length; o++)
    if (t(e[o]))
      return o;
}
function Yp(e) {
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
function Kp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nr(e, t) {
  return Nr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Nr(e, t);
}
var Gp = {
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
}, Xp = function(t, o, r) {
  var i, a = Gp[t];
  return typeof a == "string" ? i = a : o === 1 ? i = a.one : i = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + i : "hace " + i : i;
};
const Jp = Xp;
var Qp = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Zp = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, ef = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tf = {
  date: br({
    formats: Qp,
    defaultWidth: "full"
  }),
  time: br({
    formats: Zp,
    defaultWidth: "full"
  }),
  dateTime: br({
    formats: ef,
    defaultWidth: "full"
  })
};
const nf = tf;
var of = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, rf = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, af = function(t, o, r, i) {
  return o.getUTCHours() !== 1 ? rf[t] : of[t];
};
const sf = af;
var lf = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, cf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, uf = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, df = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, pf = {
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
}, ff = {
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
}, mf = function(t, o) {
  var r = Number(t);
  return r + "º";
}, hf = {
  ordinalNumber: mf,
  era: Ln({
    values: lf,
    defaultWidth: "wide"
  }),
  quarter: Ln({
    values: cf,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: Ln({
    values: uf,
    defaultWidth: "wide"
  }),
  day: Ln({
    values: df,
    defaultWidth: "wide"
  }),
  dayPeriod: Ln({
    values: pf,
    defaultWidth: "wide",
    formattingValues: ff,
    defaultFormattingWidth: "wide"
  })
};
const bf = hf;
var gf = /^(\d+)(º)?/i, vf = /\d+/i, yf = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, xf = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, Ef = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Tf = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Of = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, Cf = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, Rf = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, wf = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, Sf = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, Pf = {
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
}, $f = {
  ordinalNumber: Yp({
    matchPattern: gf,
    parsePattern: vf,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Bn({
    matchPatterns: yf,
    defaultMatchWidth: "wide",
    parsePatterns: xf,
    defaultParseWidth: "any"
  }),
  quarter: Bn({
    matchPatterns: Ef,
    defaultMatchWidth: "wide",
    parsePatterns: Tf,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Bn({
    matchPatterns: Of,
    defaultMatchWidth: "wide",
    parsePatterns: Cf,
    defaultParseWidth: "any"
  }),
  day: Bn({
    matchPatterns: Rf,
    defaultMatchWidth: "wide",
    parsePatterns: wf,
    defaultParseWidth: "any"
  }),
  dayPeriod: Bn({
    matchPatterns: Sf,
    defaultMatchWidth: "any",
    parsePatterns: Pf,
    defaultParseWidth: "any"
  })
};
const If = $f;
var kf = {
  code: "es",
  formatDistance: Jp,
  formatLong: nf,
  formatRelative: sf,
  localize: bf,
  match: If,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Af = kf, Mf = ({ isoDateTimeString: e, relative: t = !1, showTime: o = !0 }) => {
  const r = Fc(e) ? e : new Date(e), i = o ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy";
  return t ? /* @__PURE__ */ g("span", { children: Bc(r, /* @__PURE__ */ new Date(), {
    locale: Af
  }) }) : /* @__PURE__ */ g("span", { children: Lc(r, i) });
};
Mf.propTypes = {
  isoDateTimeString: n.string.isRequired,
  relative: n.bool,
  showTime: n.bool
};
const Nf = ({
  defaultChecked: e = !1,
  name: t,
  labelText: o = "",
  labelPlacement: r = "end",
  ...i
}) => {
  const { control: a } = fo();
  return /* @__PURE__ */ g(po, { children: /* @__PURE__ */ g(
    mo,
    {
      control: a,
      name: t,
      defaultValue: e,
      render: ({ field: s }) => /* @__PURE__ */ g(
        is,
        {
          labelPlacement: r,
          control: /* @__PURE__ */ g(
            bc,
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
Nf.propTypes = {
  control: n.object.isRequired,
  defaultChecked: n.bool,
  name: n.string.isRequired,
  labelText: n.string,
  fullWidth: n.bool,
  labelPlacement: n.string
};
const _f = (e) => {
  var M;
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
  } = e, [m, y] = hs(), [O, v] = ct(i), [f, R] = ct(a), [P, C] = ct({
    ...Wi.parse(m.toString()),
    per_page: s
  }), {
    data: b,
    isLoading: h,
    isFetching: I
  } = ms({
    queryKey: [r, P],
    queryFn: () => o(P),
    onSuccess: () => {
      y(Wi.stringify(P, { skipNulls: !0 }), {
        replace: !0
      });
    }
  });
  Cn(() => {
    C((N) => ({
      ...N,
      sort: {
        field: O,
        direction: f
      }
    }));
  }, [O, f]), Cn(() => {
    C((N) => ({
      ...N,
      filter: p
    }));
  }, [p]);
  const $ = (N, K) => {
    C({ ...P, page: ++K });
  }, _ = (N) => {
    C({ ...P, per_page: N.target.value });
  };
  return /* @__PURE__ */ pe(qr, { theme: qs, children: [
    c && /* @__PURE__ */ g(c, { setParams: C, params: P }),
    /* @__PURE__ */ g(ss, { children: /* @__PURE__ */ pe(ls, { children: [
      /* @__PURE__ */ g(
        ci,
        {
          headCells: t,
          orderBy: O,
          orderDirection: f,
          handleSortRequest: (N, K) => {
            v(K), R(
              O === K && f === gt.ASC ? gt.DESC : gt.ASC
            );
          }
        }
      ),
      /* @__PURE__ */ pe(cs, { children: [
        (h || I) && /* @__PURE__ */ g(to, { children: /* @__PURE__ */ g(no, { colSpan: t.length, align: "center", children: /* @__PURE__ */ g(sn, {}) }) }),
        ((M = b == null ? void 0 : b.data) == null ? void 0 : M.length) > 0 ? b.data.map((N) => /* @__PURE__ */ g(
          l,
          {
            data: N,
            onDeleteItem: u,
            onEditItem: d
          },
          N.id
        )) : /* @__PURE__ */ g(to, { children: /* @__PURE__ */ g(no, { colSpan: t.length, align: "center", children: /* @__PURE__ */ g(ut, { variant: "h6", sx: { textAlign: "center" }, children: "No hay nada por aquí" }) }) })
      ] })
    ] }) }),
    b && /* @__PURE__ */ g(
      us,
      {
        component: "div",
        from: b.from,
        to: b.to,
        page: b.current_page - 1,
        rowsPerPage: b.per_page,
        count: b.total,
        onPageChange: $,
        onRowsPerPageChange: _,
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
_f.propTypes = {
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
function ao(e) {
  return typeof e == "string";
}
function Df(e, t, o) {
  return e === void 0 || ao(e) ? t : T({}, t, {
    ownerState: T({}, t.ownerState, o)
  });
}
const jf = {
  disableDefaultClasses: !1
}, Ff = /* @__PURE__ */ x.createContext(jf);
function Hs(e) {
  const {
    disableDefaultClasses: t
  } = x.useContext(Ff);
  return (o) => t ? "" : e(o);
}
function Lf(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function _r(e, t, o) {
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
function Bf(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const y = ve(i == null ? void 0 : i.className, r == null ? void 0 : r.className, a, o == null ? void 0 : o.className), O = T({}, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), v = T({}, o, i, r);
    return y.length > 0 && (v.className = y), Object.keys(O).length > 0 && (v.style = O), {
      props: v,
      internalRef: void 0
    };
  }
  const s = Lf(T({}, i, r)), l = xa(r), c = xa(i), u = t(s), d = ve(u == null ? void 0 : u.className, o == null ? void 0 : o.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = T({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), m = T({}, u, o, c, l);
  return d.length > 0 && (m.className = d), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
const zf = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function rn(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: a = !1
  } = e, s = ge(e, zf), l = a ? {} : _r(r, i), {
    props: c,
    internalRef: u
  } = Bf(T({}, s, {
    externalSlotProps: l
  })), d = et(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Df(o, T({}, c, {
    ref: d
  }), i);
}
const Wf = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Vf(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Uf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function qf(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Uf(e));
}
function Hf(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(Wf)).forEach((r, i) => {
    const a = Vf(r);
    a === -1 || !qf(r) || (a === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Yf() {
  return !0;
}
function Mo(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Hf,
    isEnabled: s = Yf,
    open: l
  } = e, c = x.useRef(!1), u = x.useRef(null), d = x.useRef(null), p = x.useRef(null), m = x.useRef(null), y = x.useRef(!1), O = x.useRef(null), v = et(t.ref, O), f = x.useRef(null);
  x.useEffect(() => {
    !l || !O.current || (y.current = !o);
  }, [o, l]), x.useEffect(() => {
    if (!l || !O.current)
      return;
    const C = it(O.current);
    return O.current.contains(C.activeElement) || (O.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), O.current.setAttribute("tabIndex", "-1")), y.current && O.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), x.useEffect(() => {
    if (!l || !O.current)
      return;
    const C = it(O.current), b = ($) => {
      const {
        current: _
      } = O;
      if (_ !== null) {
        if (!C.hasFocus() || r || !s() || c.current) {
          c.current = !1;
          return;
        }
        if (!_.contains(C.activeElement)) {
          if ($ && m.current !== $.target || C.activeElement !== m.current)
            m.current = null;
          else if (m.current !== null)
            return;
          if (!y.current)
            return;
          let N = [];
          if ((C.activeElement === u.current || C.activeElement === d.current) && (N = a(O.current)), N.length > 0) {
            var B, M;
            const K = !!((B = f.current) != null && B.shiftKey && ((M = f.current) == null ? void 0 : M.key) === "Tab"), W = N[0], F = N[N.length - 1];
            typeof W != "string" && typeof F != "string" && (K ? F.focus() : W.focus());
          } else
            _.focus();
        }
      }
    }, h = ($) => {
      f.current = $, !(r || !s() || $.key !== "Tab") && C.activeElement === O.current && $.shiftKey && (c.current = !0, d.current && d.current.focus());
    };
    C.addEventListener("focusin", b), C.addEventListener("keydown", h, !0);
    const I = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && b(null);
    }, 50);
    return () => {
      clearInterval(I), C.removeEventListener("focusin", b), C.removeEventListener("keydown", h, !0);
    };
  }, [o, r, i, s, l, a]);
  const R = (C) => {
    p.current === null && (p.current = C.relatedTarget), y.current = !0, m.current = C.target;
    const b = t.props.onFocus;
    b && b(C);
  }, P = (C) => {
    p.current === null && (p.current = C.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ pe(x.Fragment, {
    children: [/* @__PURE__ */ g("div", {
      tabIndex: l ? 0 : -1,
      onFocus: P,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ x.cloneElement(t, {
      ref: v,
      onFocus: R
    }), /* @__PURE__ */ g("div", {
      tabIndex: l ? 0 : -1,
      onFocus: P,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
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
process.env.NODE_ENV !== "production" && (Mo["propTypes"] = Cs(Mo.propTypes));
var dt = "top", Ot = "bottom", Ct = "right", pt = "left", ui = "auto", vo = [dt, Ot, Ct, pt], Rn = "start", so = "end", Kf = "clippingParents", Ys = "viewport", zn = "popper", Gf = "reference", Ea = /* @__PURE__ */ vo.reduce(function(e, t) {
  return e.concat([t + "-" + Rn, t + "-" + so]);
}, []), Ks = /* @__PURE__ */ [].concat(vo, [ui]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rn, t + "-" + so]);
}, []), Xf = "beforeRead", Jf = "read", Qf = "afterRead", Zf = "beforeMain", em = "main", tm = "afterMain", nm = "beforeWrite", om = "write", rm = "afterWrite", im = [Xf, Jf, Qf, Zf, em, tm, nm, om, rm];
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
function an(e) {
  var t = vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Et(e) {
  var t = vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function di(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function am(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, i = t.attributes[o] || {}, a = t.elements[o];
    !Et(a) || !_t(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function sm(e) {
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
const lm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: am,
  effect: sm,
  requires: ["computeStyles"]
};
function Mt(e) {
  return e.split("-")[0];
}
var nn = Math.max, No = Math.min, wn = Math.round;
function Dr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Gs() {
  return !/^((?!chrome|android).)*safari/i.test(Dr());
}
function Sn(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && Et(e) && (i = e.offsetWidth > 0 && wn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && wn(r.height) / e.offsetHeight || 1);
  var s = an(e) ? vt(e) : window, l = s.visualViewport, c = !Gs() && o, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, d = (r.top + (c && l ? l.offsetTop : 0)) / a, p = r.width / i, m = r.height / a;
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
function pi(e) {
  var t = Sn(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Xs(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && di(o)) {
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
function cm(e) {
  return ["table", "td", "th"].indexOf(_t(e)) >= 0;
}
function Gt(e) {
  return ((an(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function er(e) {
  return _t(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (di(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Gt(e)
  );
}
function Ta(e) {
  return !Et(e) || // https://github.com/popperjs/popper-core/issues/837
  Lt(e).position === "fixed" ? null : e.offsetParent;
}
function um(e) {
  var t = /firefox/i.test(Dr()), o = /Trident/i.test(Dr());
  if (o && Et(e)) {
    var r = Lt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = er(e);
  for (di(i) && (i = i.host); Et(i) && ["html", "body"].indexOf(_t(i)) < 0; ) {
    var a = Lt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function yo(e) {
  for (var t = vt(e), o = Ta(e); o && cm(o) && Lt(o).position === "static"; )
    o = Ta(o);
  return o && (_t(o) === "html" || _t(o) === "body" && Lt(o).position === "static") ? t : o || um(e) || t;
}
function fi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Gn(e, t, o) {
  return nn(e, No(t, o));
}
function dm(e, t, o) {
  var r = Gn(e, t, o);
  return r > o ? o : r;
}
function Js() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Qs(e) {
  return Object.assign({}, Js(), e);
}
function Zs(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var pm = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Qs(typeof t != "number" ? t : Zs(t, vo));
};
function fm(e) {
  var t, o = e.state, r = e.name, i = e.options, a = o.elements.arrow, s = o.modifiersData.popperOffsets, l = Mt(o.placement), c = fi(l), u = [pt, Ct].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = pm(i.padding, o), m = pi(a), y = c === "y" ? dt : pt, O = c === "y" ? Ot : Ct, v = o.rects.reference[d] + o.rects.reference[c] - s[c] - o.rects.popper[d], f = s[c] - o.rects.reference[c], R = yo(a), P = R ? c === "y" ? R.clientHeight || 0 : R.clientWidth || 0 : 0, C = v / 2 - f / 2, b = p[y], h = P - m[d] - p[O], I = P / 2 - m[d] / 2 + C, $ = Gn(b, I, h), _ = c;
    o.modifiersData[r] = (t = {}, t[_] = $, t.centerOffset = $ - I, t);
  }
}
function mm(e) {
  var t = e.state, o = e.options, r = o.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Xs(t.elements.popper, i) && (t.elements.arrow = i));
}
const hm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: fm,
  effect: mm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Pn(e) {
  return e.split("-")[1];
}
var bm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function gm(e, t) {
  var o = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: wn(o * i) / i || 0,
    y: wn(r * i) / i || 0
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
  var R = s.hasOwnProperty("x"), P = s.hasOwnProperty("y"), C = pt, b = dt, h = window;
  if (u) {
    var I = yo(o), $ = "clientHeight", _ = "clientWidth";
    if (I === vt(o) && (I = Gt(o), Lt(I).position !== "static" && l === "absolute" && ($ = "scrollHeight", _ = "scrollWidth")), I = I, i === dt || (i === pt || i === Ct) && a === so) {
      b = Ot;
      var B = p && I === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[$]
      );
      v -= B - r.height, v *= c ? 1 : -1;
    }
    if (i === pt || (i === dt || i === Ot) && a === so) {
      C = Ct;
      var M = p && I === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[_]
      );
      y -= M - r.width, y *= c ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, u && bm), K = d === !0 ? gm({
    x: y,
    y: v
  }, vt(o)) : {
    x: y,
    y: v
  };
  if (y = K.x, v = K.y, c) {
    var W;
    return Object.assign({}, N, (W = {}, W[b] = P ? "0" : "", W[C] = R ? "0" : "", W.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", W));
  }
  return Object.assign({}, N, (t = {}, t[b] = P ? v + "px" : "", t[C] = R ? y + "px" : "", t.transform = "", t));
}
function vm(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, i = r === void 0 ? !0 : r, a = o.adaptive, s = a === void 0 ? !0 : a, l = o.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Mt(t.placement),
    variation: Pn(t.placement),
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
const ym = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: vm,
  data: {}
};
var Co = {
  passive: !0
};
function xm(e) {
  var t = e.state, o = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", o.update, Co);
  }), l && c.addEventListener("resize", o.update, Co), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", o.update, Co);
    }), l && c.removeEventListener("resize", o.update, Co);
  };
}
const Em = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xm,
  data: {}
};
var Tm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $o(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Tm[t];
  });
}
var Om = {
  start: "end",
  end: "start"
};
function Ca(e) {
  return e.replace(/start|end/g, function(t) {
    return Om[t];
  });
}
function mi(e) {
  var t = vt(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function hi(e) {
  return Sn(Gt(e)).left + mi(e).scrollLeft;
}
function Cm(e, t) {
  var o = vt(e), r = Gt(e), i = o.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = Gs();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + hi(e),
    y: c
  };
}
function Rm(e) {
  var t, o = Gt(e), r = mi(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = nn(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = nn(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + hi(e), c = -r.scrollTop;
  return Lt(i || o).direction === "rtl" && (l += nn(o.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function bi(e) {
  var t = Lt(e), o = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + r);
}
function el(e) {
  return ["html", "body", "#document"].indexOf(_t(e)) >= 0 ? e.ownerDocument.body : Et(e) && bi(e) ? e : el(er(e));
}
function Xn(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = el(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = vt(r), s = i ? [a].concat(a.visualViewport || [], bi(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Xn(er(s)))
  );
}
function jr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function wm(e, t) {
  var o = Sn(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Ra(e, t, o) {
  return t === Ys ? jr(Cm(e, o)) : an(t) ? wm(t, o) : jr(Rm(Gt(e)));
}
function Sm(e) {
  var t = Xn(er(e)), o = ["absolute", "fixed"].indexOf(Lt(e).position) >= 0, r = o && Et(e) ? yo(e) : e;
  return an(r) ? t.filter(function(i) {
    return an(i) && Xs(i, r) && _t(i) !== "body";
  }) : [];
}
function Pm(e, t, o, r) {
  var i = t === "clippingParents" ? Sm(e) : [].concat(t), a = [].concat(i, [o]), s = a[0], l = a.reduce(function(c, u) {
    var d = Ra(e, u, r);
    return c.top = nn(d.top, c.top), c.right = No(d.right, c.right), c.bottom = No(d.bottom, c.bottom), c.left = nn(d.left, c.left), c;
  }, Ra(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function tl(e) {
  var t = e.reference, o = e.element, r = e.placement, i = r ? Mt(r) : null, a = r ? Pn(r) : null, s = t.x + t.width / 2 - o.width / 2, l = t.y + t.height / 2 - o.height / 2, c;
  switch (i) {
    case dt:
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
    case pt:
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
  var u = i ? fi(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Rn:
        c[u] = c[u] - (t[d] / 2 - o[d] / 2);
        break;
      case so:
        c[u] = c[u] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function lo(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = r === void 0 ? e.placement : r, a = o.strategy, s = a === void 0 ? e.strategy : a, l = o.boundary, c = l === void 0 ? Kf : l, u = o.rootBoundary, d = u === void 0 ? Ys : u, p = o.elementContext, m = p === void 0 ? zn : p, y = o.altBoundary, O = y === void 0 ? !1 : y, v = o.padding, f = v === void 0 ? 0 : v, R = Qs(typeof f != "number" ? f : Zs(f, vo)), P = m === zn ? Gf : zn, C = e.rects.popper, b = e.elements[O ? P : m], h = Pm(an(b) ? b : b.contextElement || Gt(e.elements.popper), c, d, s), I = Sn(e.elements.reference), $ = tl({
    reference: I,
    element: C,
    strategy: "absolute",
    placement: i
  }), _ = jr(Object.assign({}, C, $)), B = m === zn ? _ : I, M = {
    top: h.top - B.top + R.top,
    bottom: B.bottom - h.bottom + R.bottom,
    left: h.left - B.left + R.left,
    right: B.right - h.right + R.right
  }, N = e.modifiersData.offset;
  if (m === zn && N) {
    var K = N[i];
    Object.keys(M).forEach(function(W) {
      var F = [Ct, Ot].indexOf(W) >= 0 ? 1 : -1, L = [dt, Ot].indexOf(W) >= 0 ? "y" : "x";
      M[W] += K[L] * F;
    });
  }
  return M;
}
function $m(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = o.boundary, a = o.rootBoundary, s = o.padding, l = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? Ks : c, d = Pn(r), p = d ? l ? Ea : Ea.filter(function(O) {
    return Pn(O) === d;
  }) : vo, m = p.filter(function(O) {
    return u.indexOf(O) >= 0;
  });
  m.length === 0 && (m = p);
  var y = m.reduce(function(O, v) {
    return O[v] = lo(e, {
      placement: v,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Mt(v)], O;
  }, {});
  return Object.keys(y).sort(function(O, v) {
    return y[O] - y[v];
  });
}
function Im(e) {
  if (Mt(e) === ui)
    return [];
  var t = $o(e);
  return [Ca(e), t, Ca(t)];
}
function km(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = o.mainAxis, a = i === void 0 ? !0 : i, s = o.altAxis, l = s === void 0 ? !0 : s, c = o.fallbackPlacements, u = o.padding, d = o.boundary, p = o.rootBoundary, m = o.altBoundary, y = o.flipVariations, O = y === void 0 ? !0 : y, v = o.allowedAutoPlacements, f = t.options.placement, R = Mt(f), P = R === f, C = c || (P || !O ? [$o(f)] : Im(f)), b = [f].concat(C).reduce(function(H, J) {
      return H.concat(Mt(J) === ui ? $m(t, {
        placement: J,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: O,
        allowedAutoPlacements: v
      }) : J);
    }, []), h = t.rects.reference, I = t.rects.popper, $ = /* @__PURE__ */ new Map(), _ = !0, B = b[0], M = 0; M < b.length; M++) {
      var N = b[M], K = Mt(N), W = Pn(N) === Rn, F = [dt, Ot].indexOf(K) >= 0, L = F ? "width" : "height", U = lo(t, {
        placement: N,
        boundary: d,
        rootBoundary: p,
        altBoundary: m,
        padding: u
      }), Y = F ? W ? Ct : pt : W ? Ot : dt;
      h[L] > I[L] && (Y = $o(Y));
      var se = $o(Y), ee = [];
      if (a && ee.push(U[K] <= 0), l && ee.push(U[Y] <= 0, U[se] <= 0), ee.every(function(H) {
        return H;
      })) {
        B = N, _ = !1;
        break;
      }
      $.set(N, ee);
    }
    if (_)
      for (var A = O ? 3 : 1, V = function(J) {
        var Q = b.find(function(G) {
          var oe = $.get(G);
          if (oe)
            return oe.slice(0, J).every(function(ie) {
              return ie;
            });
        });
        if (Q)
          return B = Q, "break";
      }, ne = A; ne > 0; ne--) {
        var Z = V(ne);
        if (Z === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
  }
}
const Am = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: km,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function wa(e, t, o) {
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
function Sa(e) {
  return [dt, Ct, Ot, pt].some(function(t) {
    return e[t] >= 0;
  });
}
function Mm(e) {
  var t = e.state, o = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = lo(t, {
    elementContext: "reference"
  }), l = lo(t, {
    altBoundary: !0
  }), c = wa(s, r), u = wa(l, i, a), d = Sa(c), p = Sa(u);
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
const Nm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Mm
};
function _m(e, t, o) {
  var r = Mt(e), i = [pt, dt].indexOf(r) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [pt, Ct].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function Dm(e) {
  var t = e.state, o = e.options, r = e.name, i = o.offset, a = i === void 0 ? [0, 0] : i, s = Ks.reduce(function(d, p) {
    return d[p] = _m(p, t.rects, a), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const jm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Dm
};
function Fm(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = tl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Lm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Fm,
  data: {}
};
function Bm(e) {
  return e === "x" ? "y" : "x";
}
function zm(e) {
  var t = e.state, o = e.options, r = e.name, i = o.mainAxis, a = i === void 0 ? !0 : i, s = o.altAxis, l = s === void 0 ? !1 : s, c = o.boundary, u = o.rootBoundary, d = o.altBoundary, p = o.padding, m = o.tether, y = m === void 0 ? !0 : m, O = o.tetherOffset, v = O === void 0 ? 0 : O, f = lo(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), R = Mt(t.placement), P = Pn(t.placement), C = !P, b = fi(R), h = Bm(b), I = t.modifiersData.popperOffsets, $ = t.rects.reference, _ = t.rects.popper, B = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, M = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (I) {
    if (a) {
      var W, F = b === "y" ? dt : pt, L = b === "y" ? Ot : Ct, U = b === "y" ? "height" : "width", Y = I[b], se = Y + f[F], ee = Y - f[L], A = y ? -_[U] / 2 : 0, V = P === Rn ? $[U] : _[U], ne = P === Rn ? -_[U] : -$[U], Z = t.elements.arrow, H = y && Z ? pi(Z) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Js(), Q = J[F], G = J[L], oe = Gn(0, $[U], H[U]), ie = C ? $[U] / 2 - A - oe - Q - M.mainAxis : V - oe - Q - M.mainAxis, de = C ? -$[U] / 2 + A + oe + G + M.mainAxis : ne + oe + G + M.mainAxis, ae = t.elements.arrow && yo(t.elements.arrow), D = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, he = (W = N == null ? void 0 : N[b]) != null ? W : 0, k = Y + ie - he - D, X = Y + de - he, Te = Gn(y ? No(se, k) : se, Y, y ? nn(ee, X) : ee);
      I[b] = Te, K[b] = Te - Y;
    }
    if (l) {
      var le, ze = b === "x" ? dt : pt, We = b === "x" ? Ot : Ct, $e = I[h], Ce = h === "y" ? "height" : "width", Fe = $e + f[ze], we = $e - f[We], Ge = [dt, pt].indexOf(R) !== -1, Xe = (le = N == null ? void 0 : N[h]) != null ? le : 0, Ze = Ge ? Fe : $e - $[Ce] - _[Ce] - Xe + M.altAxis, Se = Ge ? $e + $[Ce] + _[Ce] - Xe - M.altAxis : we, be = y && Ge ? dm(Ze, $e, Se) : Gn(y ? Ze : Fe, $e, y ? Se : we);
      I[h] = be, K[h] = be - $e;
    }
    t.modifiersData[r] = K;
  }
}
const Wm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: zm,
  requiresIfExists: ["offset"]
};
function Vm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Um(e) {
  return e === vt(e) || !Et(e) ? mi(e) : Vm(e);
}
function qm(e) {
  var t = e.getBoundingClientRect(), o = wn(t.width) / e.offsetWidth || 1, r = wn(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Hm(e, t, o) {
  o === void 0 && (o = !1);
  var r = Et(t), i = Et(t) && qm(t), a = Gt(t), s = Sn(e, i, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((_t(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  bi(a)) && (l = Um(t)), Et(t) ? (c = Sn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = hi(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Ym(e) {
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
function Km(e) {
  var t = Ym(e);
  return im.reduce(function(o, r) {
    return o.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Gm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Xm(e) {
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
var Pa = {
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
function Jm(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, i = t.defaultOptions, a = i === void 0 ? Pa : i;
  return function(l, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Pa, a),
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
        var P = typeof R == "function" ? R(d.options) : R;
        v(), d.options = Object.assign({}, a, d.options, P), d.scrollParents = {
          reference: an(l) ? Xn(l) : l.contextElement ? Xn(l.contextElement) : [],
          popper: Xn(c)
        };
        var C = Km(Xm([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = C.filter(function(b) {
          return b.enabled;
        }), O(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var R = d.elements, P = R.reference, C = R.popper;
          if ($a(P, C)) {
            d.rects = {
              reference: Hm(P, yo(C), d.options.strategy === "fixed"),
              popper: pi(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
              return d.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var b = 0; b < d.orderedModifiers.length; b++) {
              if (d.reset === !0) {
                d.reset = !1, b = -1;
                continue;
              }
              var h = d.orderedModifiers[b], I = h.fn, $ = h.options, _ = $ === void 0 ? {} : $, B = h.name;
              typeof I == "function" && (d = I({
                state: d,
                options: _,
                name: B,
                instance: y
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Gm(function() {
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
        var R = f.name, P = f.options, C = P === void 0 ? {} : P, b = f.effect;
        if (typeof b == "function") {
          var h = b({
            state: d,
            name: R,
            instance: y,
            options: C
          }), I = function() {
          };
          p.push(h || I);
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
var Qm = [Em, Lm, ym, lm, jm, Am, Wm, hm, Nm], Zm = /* @__PURE__ */ Jm({
  defaultModifiers: Qm
});
function eh(e) {
  return typeof e == "function" ? e() : e;
}
const co = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = x.useState(null), c = et(/* @__PURE__ */ x.isValidElement(r) ? r.ref : null, o);
  if (Ft(() => {
    a || l(eh(i) || document.body);
  }, [i, a]), Ft(() => {
    if (s && !a)
      return ro(o, s), () => {
        ro(o, null);
      };
  }, [o, s, a]), a) {
    if (/* @__PURE__ */ x.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ x.cloneElement(r, u);
    }
    return /* @__PURE__ */ g(x.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ g(x.Fragment, {
    children: s && /* @__PURE__ */ gs.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (co.propTypes = {
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
process.env.NODE_ENV !== "production" && (co["propTypes"] = Cs(co.propTypes));
function th(e) {
  return Le("MuiPopper", e);
}
Be("MuiPopper", ["root"]);
const nh = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], oh = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function rh(e, t) {
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
function _o(e) {
  return typeof e == "function" ? e() : e;
}
function tr(e) {
  return e.nodeType !== void 0;
}
function ih(e) {
  return !tr(e);
}
const ah = () => Ve({
  root: ["root"]
}, Hs(th)), sh = {}, lh = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  } = t, f = ge(t, nh), R = x.useRef(null), P = et(R, o), C = x.useRef(null), b = et(C, m), h = x.useRef(b);
  Ft(() => {
    h.current = b;
  }, [b]), x.useImperativeHandle(m, () => C.current, []);
  const I = rh(d, s), [$, _] = x.useState(I), [B, M] = x.useState(_o(i));
  x.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), x.useEffect(() => {
    i && M(_o(i));
  }, [i]), Ft(() => {
    if (!B || !u)
      return;
    const L = (se) => {
      _(se.placement);
    };
    if (process.env.NODE_ENV !== "production" && B && tr(B) && B.nodeType === 1) {
      const se = B.getBoundingClientRect();
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
    const Y = Zm(B, R.current, T({
      placement: I
    }, p, {
      modifiers: U
    }));
    return h.current(Y), () => {
      Y.destroy(), h.current(null);
    };
  }, [B, l, c, u, p, I]);
  const N = {
    placement: $
  };
  v !== null && (N.TransitionProps = v);
  const K = ah(), W = (r = O.root) != null ? r : "div", F = rn({
    elementType: W,
    externalSlotProps: y.root,
    externalForwardedProps: f,
    additionalProps: {
      role: "tooltip",
      ref: P
    },
    ownerState: t,
    className: K.root
  });
  return /* @__PURE__ */ g(W, T({}, F, {
    children: typeof a == "function" ? a(N) : a
  }));
}), nl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    popperOptions: m = sh,
    popperRef: y,
    style: O,
    transition: v = !1,
    slotProps: f = {},
    slots: R = {}
  } = t, P = ge(t, oh), [C, b] = x.useState(!0), h = () => {
    b(!1);
  }, I = () => {
    b(!0);
  };
  if (!c && !d && (!v || C))
    return null;
  let $;
  if (a)
    $ = a;
  else if (r) {
    const M = _o(r);
    $ = M && tr(M) ? it(M).body : it(null).body;
  }
  const _ = !d && c && (!v || C) ? "none" : void 0, B = v ? {
    in: d,
    onEnter: h,
    onExited: I
  } : void 0;
  return /* @__PURE__ */ g(co, {
    disablePortal: l,
    container: $,
    children: /* @__PURE__ */ g(lh, T({
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
    }, P, {
      style: T({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: _
      }, O),
      TransitionProps: B,
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
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
      const t = _o(e.anchorEl);
      if (t && tr(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || ih(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
function ch(e) {
  const t = it(e);
  return t.body === e ? Ht(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Jn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ia(e) {
  return parseInt(Ht(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function uh(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function ka(e, t, o, r, i) {
  const a = [t, o, ...r];
  [].forEach.call(e.children, (s) => {
    const l = a.indexOf(s) === -1, c = !uh(s);
    l && c && Jn(s, i);
  });
}
function gr(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function dh(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (ch(r)) {
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
      const s = r.parentElement, l = Ht(r);
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
function ph(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class fh {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Jn(t.modalRef, !1);
    const i = ph(o);
    ka(o, t.mount, t.modalRef, i, !0);
    const a = gr(this.containers, (s) => s.container === o);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = gr(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = dh(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = gr(this.containers, (s) => s.modals.indexOf(t) !== -1), a = this.containers[i];
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
function mh(e) {
  return Le("MuiModal", e);
}
Be("MuiModal", ["root", "hidden", "backdrop"]);
const hh = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], bh = (e) => {
  const {
    open: t,
    exited: o
  } = e;
  return Ve({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, Hs(mh));
};
function gh(e) {
  return typeof e == "function" ? e() : e;
}
function vh(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const yh = new fh(), ol = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    manager: f = yh,
    onBackdropClick: R,
    onClose: P,
    onKeyDown: C,
    open: b,
    onTransitionEnter: h,
    onTransitionExited: I,
    slotProps: $ = {},
    slots: _ = {}
  } = t, B = ge(t, hh), M = f, [N, K] = x.useState(!b), W = x.useRef({}), F = x.useRef(null), L = x.useRef(null), U = et(L, o), Y = vh(a), se = (r = t["aria-hidden"]) != null ? r : !0, ee = () => it(F.current), A = () => (W.current.modalRef = L.current, W.current.mountNode = F.current, W.current), V = () => {
    M.mount(A(), {
      disableScrollLock: y
    }), L.current && (L.current.scrollTop = 0);
  }, ne = Pt(() => {
    const le = gh(l) || ee().body;
    M.add(A(), le), L.current && V();
  }), Z = x.useCallback(() => M.isTopModal(A()), [M]), H = Pt((le) => {
    F.current = le, !(!le || !L.current) && (b && Z() ? V() : Jn(L.current, se));
  }), J = x.useCallback(() => {
    M.remove(A(), se);
  }, [M, se]);
  x.useEffect(() => () => {
    J();
  }, [J]), x.useEffect(() => {
    b ? ne() : (!Y || !s) && J();
  }, [b, J, Y, s, ne]);
  const Q = T({}, t, {
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: u,
    disableEscapeKeyDown: d,
    disablePortal: p,
    disableRestoreFocus: m,
    disableScrollLock: y,
    exited: N,
    hideBackdrop: O,
    keepMounted: v
  }), G = bh(Q), oe = () => {
    K(!1), h && h();
  }, ie = () => {
    K(!0), I && I(), s && J();
  }, de = (le) => {
    le.target === le.currentTarget && (R && R(le), P && P(le, "backdropClick"));
  }, ae = (le) => {
    C && C(le), !(le.key !== "Escape" || !Z()) && (d || (le.stopPropagation(), P && P(le, "escapeKeyDown")));
  }, D = {};
  a.props.tabIndex === void 0 && (D.tabIndex = "-1"), Y && (D.onEnter = kr(oe, a.props.onEnter), D.onExited = kr(ie, a.props.onExited));
  const he = (i = _.root) != null ? i : "div", k = rn({
    elementType: he,
    externalSlotProps: $.root,
    externalForwardedProps: B,
    additionalProps: {
      ref: U,
      role: "presentation",
      onKeyDown: ae
    },
    className: G.root,
    ownerState: Q
  }), X = _.backdrop, Te = rn({
    elementType: X,
    externalSlotProps: $.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: de,
      open: b
    },
    className: G.backdrop,
    ownerState: Q
  });
  return !v && !b && (!Y || N) ? null : /* @__PURE__ */ g(
    co,
    {
      ref: H,
      container: l,
      disablePortal: p,
      children: /* @__PURE__ */ pe(he, T({}, k, {
        children: [!O && X ? /* @__PURE__ */ g(X, T({}, Te)) : null, /* @__PURE__ */ g(Mo, {
          disableEnforceFocus: u,
          disableAutoFocus: c,
          disableRestoreFocus: m,
          isEnabled: Z,
          open: b,
          children: /* @__PURE__ */ x.cloneElement(a, D)
        })]
      }))
    }
  );
});
process.env.NODE_ENV !== "production" && (ol.propTypes = {
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
const xh = ["onChange", "maxRows", "minRows", "style", "value"];
function Ro(e) {
  return parseInt(e, 10) || 0;
}
const Eh = {
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
function Aa(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const rl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l
  } = t, c = ge(t, xh), {
    current: u
  } = x.useRef(l != null), d = x.useRef(null), p = et(o, d), m = x.useRef(null), y = x.useRef(0), [O, v] = x.useState({
    outerHeightStyle: 0
  }), f = x.useCallback(() => {
    const h = d.current, $ = Ht(h).getComputedStyle(h);
    if ($.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const _ = m.current;
    _.style.width = $.width, _.value = h.value || t.placeholder || "x", _.value.slice(-1) === `
` && (_.value += " ");
    const B = $.boxSizing, M = Ro($.paddingBottom) + Ro($.paddingTop), N = Ro($.borderBottomWidth) + Ro($.borderTopWidth), K = _.scrollHeight;
    _.value = "x";
    const W = _.scrollHeight;
    let F = K;
    a && (F = Math.max(Number(a) * W, F)), i && (F = Math.min(Number(i) * W, F)), F = Math.max(F, W);
    const L = F + (B === "border-box" ? M + N : 0), U = Math.abs(F - K) <= 1;
    return {
      outerHeightStyle: L,
      overflow: U
    };
  }, [i, a, t.placeholder]), R = (h, I) => {
    const {
      outerHeightStyle: $,
      overflow: _
    } = I;
    return y.current < 20 && ($ > 0 && Math.abs((h.outerHeightStyle || 0) - $) > 1 || h.overflow !== _) ? (y.current += 1, {
      overflow: _,
      outerHeightStyle: $
    }) : (process.env.NODE_ENV !== "production" && y.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), h);
  }, P = x.useCallback(() => {
    const h = f();
    Aa(h) || v((I) => R(I, h));
  }, [f]), C = () => {
    const h = f();
    Aa(h) || gs.flushSync(() => {
      v((I) => R(I, h));
    });
  };
  x.useEffect(() => {
    const h = Zr(() => {
      y.current = 0, d.current && C();
    });
    let I;
    const $ = d.current, _ = Ht($);
    return _.addEventListener("resize", h), typeof ResizeObserver < "u" && (I = new ResizeObserver(h), I.observe($)), () => {
      h.clear(), _.removeEventListener("resize", h), I && I.disconnect();
    };
  }), Ft(() => {
    P();
  }), x.useEffect(() => {
    y.current = 0;
  }, [l]);
  const b = (h) => {
    y.current = 0, u || P(), r && r(h);
  };
  return /* @__PURE__ */ pe(x.Fragment, {
    children: [/* @__PURE__ */ g("textarea", T({
      value: l,
      onChange: b,
      ref: p,
      rows: a,
      style: T({
        height: O.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: O.overflow ? "hidden" : void 0
      }, s)
    }, c)), /* @__PURE__ */ g("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: m,
      tabIndex: -1,
      style: T({}, Eh.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (rl.propTypes = {
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
function Ma(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function il(e = {}) {
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
    o && (d = d.toLowerCase()), t && (d = Ma(d));
    const p = d ? l.filter((m) => {
      let y = (a || u)(m);
      return o && (y = y.toLowerCase()), t && (y = Ma(y)), i === "start" ? y.indexOf(d) === 0 : y.indexOf(d) > -1;
    }) : l;
    return typeof r == "number" ? p.slice(0, r) : p;
  };
}
function vr(e, t) {
  for (let o = 0; o < e.length; o += 1)
    if (t(e[o]))
      return o;
  return -1;
}
const Th = il(), Na = 5, Oh = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function Ch(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Oh,
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
    filterOptions: f = Th,
    filterSelectedOptions: R = !1,
    freeSolo: P = !1,
    getOptionDisabled: C,
    getOptionLabel: b = (w) => {
      var S;
      return (S = w.label) != null ? S : w;
    },
    groupBy: h,
    handleHomeEndKeys: I = !e.freeSolo,
    id: $,
    includeInputInList: _ = !1,
    inputValue: B,
    isOptionEqualToValue: M = (w, S) => w === S,
    multiple: N = !1,
    onChange: K,
    onClose: W,
    onHighlightChange: F,
    onInputChange: L,
    onOpen: U,
    open: Y,
    openOnFocus: se = !1,
    options: ee,
    readOnly: A = !1,
    selectOnFocus: V = !e.freeSolo,
    value: ne
  } = e, Z = ei($);
  let H = b;
  H = (w) => {
    const S = b(w);
    if (typeof S != "string") {
      if (process.env.NODE_ENV !== "production") {
        const j = S === void 0 ? "undefined" : `${typeof S} (${S})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${j} instead of a string for ${JSON.stringify(w)}.`);
      }
      return String(S);
    }
    return S;
  };
  const J = x.useRef(!1), Q = x.useRef(!0), G = x.useRef(null), oe = x.useRef(null), [ie, de] = x.useState(null), [ae, D] = x.useState(-1), he = i ? 0 : -1, k = x.useRef(he), [X, Te] = En({
    controlled: ne,
    default: d,
    name: u
  }), [le, ze] = En({
    controlled: B,
    default: "",
    name: u,
    state: "inputValue"
  }), [We, $e] = x.useState(!1), Ce = x.useCallback((w, S) => {
    if (!(N ? X.length < S.length : S !== null) && !l)
      return;
    let q;
    if (N)
      q = "";
    else if (S == null)
      q = "";
    else {
      const re = H(S);
      q = typeof re == "string" ? re : "";
    }
    le !== q && (ze(q), L && L(w, q, "reset"));
  }, [H, le, N, L, ze, l, X]), [Fe, we] = En({
    controlled: Y,
    default: !1,
    name: u,
    state: "open"
  }), [Ge, Xe] = x.useState(!0), Ze = !N && X != null && le === H(X), Se = Fe && !A, be = Se ? f(
    ee.filter((w) => !(R && (N ? X : [X]).some((S) => S !== null && M(w, S)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Ze && Ge ? "" : le,
      getOptionLabel: H
    }
  ) : [], ce = Cu({
    filteredOptions: be,
    value: X,
    inputValue: le
  });
  x.useEffect(() => {
    const w = X !== ce.value;
    We && !w || P && !w || Ce(null, X);
  }, [X, Ce, We, ce.value, P]);
  const tt = Fe && be.length > 0 && !A;
  if (process.env.NODE_ENV !== "production" && X !== null && !P && ee.length > 0) {
    const w = (N ? X : [X]).filter((S) => !ee.some((j) => M(j, S)));
    w.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${w.length > 1 ? JSON.stringify(w) : JSON.stringify(w[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const ue = Pt((w) => {
    w === -1 ? G.current.focus() : ie.querySelector(`[data-tag-index="${w}"]`).focus();
  });
  x.useEffect(() => {
    N && ae > X.length - 1 && (D(-1), ue(-1));
  }, [X, N, ae, ue]);
  function ye(w, S) {
    if (!oe.current || w === -1)
      return -1;
    let j = w;
    for (; ; ) {
      if (S === "next" && j === be.length || S === "previous" && j === -1)
        return -1;
      const q = oe.current.querySelector(`[data-option-index="${j}"]`), re = O ? !1 : !q || q.disabled || q.getAttribute("aria-disabled") === "true";
      if (q && !q.hasAttribute("tabindex") || re)
        j += S === "next" ? 1 : -1;
      else
        return j;
    }
  }
  const Pe = Pt(({
    event: w,
    index: S,
    reason: j = "auto"
  }) => {
    if (k.current = S, S === -1 ? G.current.removeAttribute("aria-activedescendant") : G.current.setAttribute("aria-activedescendant", `${Z}-option-${S}`), F && F(w, S === -1 ? null : be[S], j), !oe.current)
      return;
    const q = oe.current.querySelector(`[role="option"].${o}-focused`);
    q && (q.classList.remove(`${o}-focused`), q.classList.remove(`${o}-focusVisible`));
    let re = oe.current;
    if (oe.current.getAttribute("role") !== "listbox" && (re = oe.current.parentElement.querySelector('[role="listbox"]')), !re)
      return;
    if (S === -1) {
      re.scrollTop = 0;
      return;
    }
    const xe = oe.current.querySelector(`[data-option-index="${S}"]`);
    if (xe && (xe.classList.add(`${o}-focused`), j === "keyboard" && xe.classList.add(`${o}-focusVisible`), re.scrollHeight > re.clientHeight && j !== "mouse" && j !== "touch")) {
      const Ee = xe, Re = re.clientHeight + re.scrollTop, ot = Ee.offsetTop + Ee.offsetHeight;
      ot > Re ? re.scrollTop = ot - re.clientHeight : Ee.offsetTop - Ee.offsetHeight * (h ? 1.3 : 0) < re.scrollTop && (re.scrollTop = Ee.offsetTop - Ee.offsetHeight * (h ? 1.3 : 0));
    }
  }), Je = Pt(({
    event: w,
    diff: S,
    direction: j = "next",
    reason: q = "auto"
  }) => {
    if (!Se)
      return;
    const xe = ye((() => {
      const Ee = be.length - 1;
      if (S === "reset")
        return he;
      if (S === "start")
        return 0;
      if (S === "end")
        return Ee;
      const Re = k.current + S;
      return Re < 0 ? Re === -1 && _ ? -1 : v && k.current !== -1 || Math.abs(S) > 1 ? 0 : Ee : Re > Ee ? Re === Ee + 1 && _ ? -1 : v || Math.abs(S) > 1 ? Ee : 0 : Re;
    })(), j);
    if (Pe({
      index: xe,
      reason: q,
      event: w
    }), r && S !== "reset")
      if (xe === -1)
        G.current.value = le;
      else {
        const Ee = H(be[xe]);
        G.current.value = Ee, Ee.toLowerCase().indexOf(le.toLowerCase()) === 0 && le.length > 0 && G.current.setSelectionRange(le.length, Ee.length);
      }
  }), zt = () => {
    const w = (S, j) => {
      const q = S ? H(S) : "", re = j ? H(j) : "";
      return q === re;
    };
    if (k.current !== -1 && ce.filteredOptions && ce.filteredOptions.length !== be.length && ce.inputValue === le && (N ? X.length === ce.value.length && ce.value.every((S, j) => H(X[j]) === H(S)) : w(ce.value, X))) {
      const S = ce.filteredOptions[k.current];
      if (S && be.some((q) => H(q) === H(S)))
        return !0;
    }
    return !1;
  }, It = x.useCallback(() => {
    if (!Se || zt())
      return;
    const w = N ? X[0] : X;
    if (be.length === 0 || w == null) {
      Je({
        diff: "reset"
      });
      return;
    }
    if (oe.current) {
      if (w != null) {
        const S = be[k.current];
        if (N && S && vr(X, (q) => M(S, q)) !== -1)
          return;
        const j = vr(be, (q) => M(q, w));
        j === -1 ? Je({
          diff: "reset"
        }) : Pe({
          index: j
        });
        return;
      }
      if (k.current >= be.length - 1) {
        Pe({
          index: be.length - 1
        });
        return;
      }
      Pe({
        index: k.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    be.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    N ? !1 : X,
    R,
    Je,
    Pe,
    Se,
    le,
    N
  ]), An = Pt((w) => {
    ro(oe, w), w && It();
  });
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    (!G.current || G.current.nodeName !== "INPUT") && (G.current && G.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${G.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), x.useEffect(() => {
    It();
  }, [It]);
  const Rt = (w) => {
    Fe || (we(!0), Xe(!0), U && U(w));
  }, st = (w, S) => {
    Fe && (we(!1), W && W(w, S));
  }, ft = (w, S, j, q) => {
    if (N) {
      if (X.length === S.length && X.every((re, xe) => re === S[xe]))
        return;
    } else if (X === S)
      return;
    K && K(w, S, j, q), Te(S);
  }, at = x.useRef(!1), wt = (w, S, j = "selectOption", q = "options") => {
    let re = j, xe = S;
    if (N) {
      if (xe = Array.isArray(X) ? X.slice() : [], process.env.NODE_ENV !== "production") {
        const Re = xe.filter((ot) => M(S, ot));
        Re.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Re.length} matches.`].join(`
`));
      }
      const Ee = vr(xe, (Re) => M(S, Re));
      Ee === -1 ? xe.push(S) : q !== "freeSolo" && (xe.splice(Ee, 1), re = "removeOption");
    }
    Ce(w, xe), ft(w, xe, re, {
      option: S
    }), !m && (!w || !w.ctrlKey && !w.metaKey) && st(w, re), (s === !0 || s === "touch" && at.current || s === "mouse" && !at.current) && G.current.blur();
  };
  function Xt(w, S) {
    if (w === -1)
      return -1;
    let j = w;
    for (; ; ) {
      if (S === "next" && j === X.length || S === "previous" && j === -1)
        return -1;
      const q = ie.querySelector(`[data-tag-index="${j}"]`);
      if (!q || !q.hasAttribute("tabindex") || q.disabled || q.getAttribute("aria-disabled") === "true")
        j += S === "next" ? 1 : -1;
      else
        return j;
    }
  }
  const Wt = (w, S) => {
    if (!N)
      return;
    le === "" && st(w, "toggleInput");
    let j = ae;
    ae === -1 ? le === "" && S === "previous" && (j = X.length - 1) : (j += S === "next" ? 1 : -1, j < 0 && (j = 0), j === X.length && (j = -1)), j = Xt(j, S), D(j), ue(j);
  }, cn = (w) => {
    J.current = !0, ze(""), L && L(w, "", "clear"), ft(w, N ? [] : null, "clear");
  }, un = (w) => (S) => {
    if (w.onKeyDown && w.onKeyDown(S), !S.defaultMuiPrevented && (ae !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(S.key) === -1 && (D(-1), ue(-1)), S.which !== 229))
      switch (S.key) {
        case "Home":
          Se && I && (S.preventDefault(), Je({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: S
          }));
          break;
        case "End":
          Se && I && (S.preventDefault(), Je({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: S
          }));
          break;
        case "PageUp":
          S.preventDefault(), Je({
            diff: -Na,
            direction: "previous",
            reason: "keyboard",
            event: S
          }), Rt(S);
          break;
        case "PageDown":
          S.preventDefault(), Je({
            diff: Na,
            direction: "next",
            reason: "keyboard",
            event: S
          }), Rt(S);
          break;
        case "ArrowDown":
          S.preventDefault(), Je({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: S
          }), Rt(S);
          break;
        case "ArrowUp":
          S.preventDefault(), Je({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: S
          }), Rt(S);
          break;
        case "ArrowLeft":
          Wt(S, "previous");
          break;
        case "ArrowRight":
          Wt(S, "next");
          break;
        case "Enter":
          if (k.current !== -1 && Se) {
            const j = be[k.current], q = C ? C(j) : !1;
            if (S.preventDefault(), q)
              return;
            wt(S, j, "selectOption"), r && G.current.setSelectionRange(G.current.value.length, G.current.value.length);
          } else
            P && le !== "" && Ze === !1 && (N && S.preventDefault(), wt(S, le, "createOption", "freeSolo"));
          break;
        case "Escape":
          Se ? (S.preventDefault(), S.stopPropagation(), st(S, "escape")) : c && (le !== "" || N && X.length > 0) && (S.preventDefault(), S.stopPropagation(), cn(S));
          break;
        case "Backspace":
          if (N && !A && le === "" && X.length > 0) {
            const j = ae === -1 ? X.length - 1 : ae, q = X.slice();
            q.splice(j, 1), ft(S, q, "removeOption", {
              option: X[j]
            });
          }
          break;
        case "Delete":
          if (N && !A && le === "" && X.length > 0 && ae !== -1) {
            const j = ae, q = X.slice();
            q.splice(j, 1), ft(S, q, "removeOption", {
              option: X[j]
            });
          }
          break;
      }
  }, Mn = (w) => {
    $e(!0), se && !J.current && Rt(w);
  }, dn = (w) => {
    if (t(oe)) {
      G.current.focus();
      return;
    }
    $e(!1), Q.current = !0, J.current = !1, a && k.current !== -1 && Se ? wt(w, be[k.current], "blur") : a && P && le !== "" ? wt(w, le, "blur", "freeSolo") : l && Ce(w, X), st(w, "blur");
  }, Vt = (w) => {
    const S = w.target.value;
    le !== S && (ze(S), Xe(!1), L && L(w, S, "input")), S === "" ? !p && !N && ft(w, null, "clear") : Rt(w);
  }, nt = (w) => {
    const S = Number(w.currentTarget.getAttribute("data-option-index"));
    k.current !== S && Pe({
      event: w,
      index: S,
      reason: "mouse"
    });
  }, Qe = (w) => {
    Pe({
      event: w,
      index: Number(w.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), at.current = !0;
  }, lt = (w) => {
    const S = Number(w.currentTarget.getAttribute("data-option-index"));
    wt(w, be[S], "selectOption"), at.current = !1;
  }, xo = (w) => (S) => {
    const j = X.slice();
    j.splice(w, 1), ft(S, j, "removeOption", {
      option: X[w]
    });
  }, pn = (w) => {
    Fe ? st(w, "toggleInput") : Rt(w);
  }, Eo = (w) => {
    w.currentTarget.contains(w.target) && w.target.getAttribute("id") !== Z && w.preventDefault();
  }, Nn = (w) => {
    w.currentTarget.contains(w.target) && (G.current.focus(), V && Q.current && G.current.selectionEnd - G.current.selectionStart === 0 && G.current.select(), Q.current = !1);
  }, E = (w) => {
    (le === "" || !Fe) && pn(w);
  };
  let z = P && le.length > 0;
  z = z || (N ? X.length > 0 : X !== null);
  let te = be;
  if (h) {
    const w = /* @__PURE__ */ new Map();
    let S = !1;
    te = be.reduce((j, q, re) => {
      const xe = h(q);
      return j.length > 0 && j[j.length - 1].group === xe ? j[j.length - 1].options.push(q) : (process.env.NODE_ENV !== "production" && (w.get(xe) && !S && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), S = !0), w.set(xe, !0)), j.push({
        key: re,
        index: re,
        group: xe,
        options: [q]
      })), j;
    }, []);
  }
  return y && We && dn(), {
    getRootProps: (w = {}) => T({
      "aria-owns": tt ? `${Z}-listbox` : null
    }, w, {
      onKeyDown: un(w),
      onMouseDown: Eo,
      onClick: Nn
    }),
    getInputLabelProps: () => ({
      id: `${Z}-label`,
      htmlFor: Z
    }),
    getInputProps: () => ({
      id: Z,
      value: le,
      onBlur: dn,
      onFocus: Mn,
      onChange: Vt,
      onMouseDown: E,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Se ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": tt ? `${Z}-listbox` : void 0,
      "aria-expanded": tt,
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
      index: w
    }) => T({
      key: w,
      "data-tag-index": w,
      tabIndex: -1
    }, !A && {
      onDelete: xo(w)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${Z}-listbox`,
      "aria-labelledby": `${Z}-label`,
      ref: An,
      onMouseDown: (w) => {
        w.preventDefault();
      }
    }),
    getOptionProps: ({
      index: w,
      option: S
    }) => {
      const j = (N ? X : [X]).some((re) => re != null && M(S, re)), q = C ? C(S) : !1;
      return {
        key: H(S),
        tabIndex: -1,
        role: "option",
        id: `${Z}-option-${w}`,
        onMouseMove: nt,
        onClick: lt,
        onTouchStart: Qe,
        "data-option-index": w,
        "aria-disabled": q,
        "aria-selected": j
      };
    },
    id: Z,
    inputValue: le,
    value: X,
    dirty: z,
    expanded: Se && ie,
    popupOpen: Se,
    focused: We || ae !== -1,
    anchorEl: ie,
    setAnchorEl: de,
    focusedTag: ae,
    groupedOptions: te
  };
}
const Rh = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], wh = me(nl, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), al = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r;
  const i = Fs(), a = Ue({
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
    transition: P,
    slots: C,
    slotProps: b
  } = a, h = ge(a, Rh), I = (r = C == null ? void 0 : C.root) != null ? r : c == null ? void 0 : c.Root, $ = T({
    anchorEl: s,
    container: d,
    disablePortal: p,
    keepMounted: m,
    modifiers: y,
    open: O,
    placement: v,
    popperOptions: f,
    popperRef: R,
    transition: P
  }, h);
  return /* @__PURE__ */ g(wh, T({
    as: l,
    direction: i == null ? void 0 : i.direction,
    slots: {
      root: I
    },
    slotProps: b ?? u
  }, $, {
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
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
const sl = al;
function Sh(e) {
  return Le("MuiListSubheader", e);
}
Be("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Ph = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], $h = (e) => {
  const {
    classes: t,
    color: o,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", o !== "default" && `color${fe(o)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return Ve(s, Sh, t);
}, Ih = me("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${fe(o.color)}`], !o.disableGutters && t.gutters, o.inset && t.inset, !o.disableSticky && t.sticky];
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
})), gi = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: a = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = r, d = ge(r, Ph), p = T({}, r, {
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), m = $h(p);
  return /* @__PURE__ */ g(Ih, T({
    as: s,
    className: ve(m.root, i),
    ref: o,
    ownerState: p
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
const kh = gi;
function Ah(e) {
  return Le("MuiPaper", e);
}
Be("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Mh = ["className", "component", "elevation", "square", "variant"], Nh = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return Ve(a, Ah, i);
}, _h = me("div", {
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
    backgroundImage: `linear-gradient(${rt("#fff", ya(t.elevation))}, ${rt("#fff", ya(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), ll = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: a = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ge(r, Mh), d = T({}, r, {
    component: a,
    elevation: s,
    square: l,
    variant: c
  }), p = Nh(d);
  return process.env.NODE_ENV !== "production" && ln().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ g(_h, T({
    as: a,
    ownerState: d,
    className: ve(p.root, i),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
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
  elevation: jt(ti, (e) => {
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
const vi = ll;
function cl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Nr(e, t);
}
const _a = {
  disabled: !1
};
var Dh = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
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
const Do = St.createContext(null);
var jh = function(t) {
  return t.scrollTop;
}, qn = "unmounted", Jt = "exited", Qt = "entering", xn = "entered", Fr = "exiting", Bt = /* @__PURE__ */ function(e) {
  cl(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = Jt, a.appearStatus = Qt) : c = xn : r.unmountOnExit || r.mountOnEnter ? c = qn : c = Jt, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === qn ? {
      status: Jt
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Qt && s !== xn && (a = Qt) : (s === Qt || s === xn) && (a = Fr);
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
      if (this.cancelNextCallback(), a === Qt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : To.findDOMNode(this);
          s && jh(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Jt && this.setState({
        status: qn
      });
  }, o.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [To.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), m = l ? p.appear : p.enter;
    if (!i && !s || _a.disabled) {
      this.safeSetState({
        status: xn
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Qt
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
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : To.findDOMNode(this);
    if (!a || _a.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Fr
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: Jt
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : To.findDOMNode(this), l = i == null && !this.props.addEndListener;
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
      /* @__PURE__ */ St.createElement(Do.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : St.cloneElement(St.Children.only(s), l))
    );
  }, t;
}(St.Component);
Bt.contextType = Do;
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
    var o = Dh;
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
Bt.EXITED = Jt;
Bt.ENTERING = Qt;
Bt.ENTERED = xn;
Bt.EXITING = Fr;
const ul = Bt;
function yi(e, t) {
  var o = function(a) {
    return t && wo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && oc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function Fh(e, t) {
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
function tn(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Lh(e, t) {
  return yi(e.children, function(o) {
    return So(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: tn(o, "appear", e),
      enter: tn(o, "enter", e),
      exit: tn(o, "exit", e)
    });
  });
}
function Bh(e, t, o) {
  var r = yi(e.children), i = Fh(t, r);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (wo(s)) {
      var l = a in t, c = a in r, u = t[a], d = wo(u) && !u.props.in;
      c && (!l || d) ? i[a] = So(s, {
        onExited: o.bind(null, s),
        in: !0,
        exit: tn(s, "exit", e),
        enter: tn(s, "enter", e)
      }) : !c && l && !d ? i[a] = So(s, {
        in: !1
      }) : c && l && wo(u) && (i[a] = So(s, {
        onExited: o.bind(null, s),
        in: u.props.in,
        exit: tn(s, "exit", e),
        enter: tn(s, "enter", e)
      }));
    }
  }), i;
}
var zh = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Wh = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, xi = /* @__PURE__ */ function(e) {
  cl(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(Kp(a));
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
      children: c ? Lh(i, l) : Bh(i, s, l),
      firstRender: !1
    };
  }, o.handleExited = function(i, a) {
    var s = yi(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = T({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = ge(i, ["component", "childFactory"]), c = this.state.contextValue, u = zh(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ St.createElement(Do.Provider, {
      value: c
    }, u) : /* @__PURE__ */ St.createElement(Do.Provider, {
      value: c
    }, /* @__PURE__ */ St.createElement(a, l, u));
  }, t;
}(St.Component);
xi.propTypes = process.env.NODE_ENV !== "production" ? {
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
xi.defaultProps = Wh;
const Vh = xi;
function dl(e) {
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
  } = e, [d, p] = x.useState(!1), m = ve(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, O = ve(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && p(!0), x.useEffect(() => {
    if (!l && c != null) {
      const v = setTimeout(c, u);
      return () => {
        clearTimeout(v);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ g("span", {
    className: m,
    style: y,
    children: /* @__PURE__ */ g("span", {
      className: O
    })
  });
}
process.env.NODE_ENV !== "production" && (dl.propTypes = {
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
const Uh = Be("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yt = Uh, qh = ["center", "classes", "className"];
let nr = (e) => e, Da, ja, Fa, La;
const Lr = 550, Hh = 80, Yh = Hr(Da || (Da = nr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Kh = Hr(ja || (ja = nr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Gh = Hr(Fa || (Fa = nr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Xh = me("span", {
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
}), Jh = me(dl, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(La || (La = nr`
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
`), yt.rippleVisible, Yh, Lr, ({
  theme: e
}) => e.transitions.easing.easeInOut, yt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, yt.child, yt.childLeaving, Kh, Lr, ({
  theme: e
}) => e.transitions.easing.easeInOut, yt.childPulsate, Gh, ({
  theme: e
}) => e.transitions.easing.easeInOut), pl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s
  } = r, l = ge(r, qh), [c, u] = x.useState([]), d = x.useRef(0), p = x.useRef(null);
  x.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const m = x.useRef(!1), y = x.useRef(0), O = x.useRef(null), v = x.useRef(null);
  x.useEffect(() => () => {
    y.current && clearTimeout(y.current);
  }, []);
  const f = x.useCallback((b) => {
    const {
      pulsate: h,
      rippleX: I,
      rippleY: $,
      rippleSize: _,
      cb: B
    } = b;
    u((M) => [...M, /* @__PURE__ */ g(Jh, {
      classes: {
        ripple: ve(a.ripple, yt.ripple),
        rippleVisible: ve(a.rippleVisible, yt.rippleVisible),
        ripplePulsate: ve(a.ripplePulsate, yt.ripplePulsate),
        child: ve(a.child, yt.child),
        childLeaving: ve(a.childLeaving, yt.childLeaving),
        childPulsate: ve(a.childPulsate, yt.childPulsate)
      },
      timeout: Lr,
      pulsate: h,
      rippleX: I,
      rippleY: $,
      rippleSize: _
    }, d.current)]), d.current += 1, p.current = B;
  }, [a]), R = x.useCallback((b = {}, h = {}, I = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: _ = i || h.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = h;
    if ((b == null ? void 0 : b.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (m.current = !0);
    const M = B ? null : v.current, N = M ? M.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let K, W, F;
    if (_ || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      K = Math.round(N.width / 2), W = Math.round(N.height / 2);
    else {
      const {
        clientX: L,
        clientY: U
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      K = Math.round(L - N.left), W = Math.round(U - N.top);
    }
    if (_)
      F = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), F % 2 === 0 && (F += 1);
    else {
      const L = Math.max(Math.abs((M ? M.clientWidth : 0) - K), K) * 2 + 2, U = Math.max(Math.abs((M ? M.clientHeight : 0) - W), W) * 2 + 2;
      F = Math.sqrt(L ** 2 + U ** 2);
    }
    b != null && b.touches ? O.current === null && (O.current = () => {
      f({
        pulsate: $,
        rippleX: K,
        rippleY: W,
        rippleSize: F,
        cb: I
      });
    }, y.current = setTimeout(() => {
      O.current && (O.current(), O.current = null);
    }, Hh)) : f({
      pulsate: $,
      rippleX: K,
      rippleY: W,
      rippleSize: F,
      cb: I
    });
  }, [i, f]), P = x.useCallback(() => {
    R({}, {
      pulsate: !0
    });
  }, [R]), C = x.useCallback((b, h) => {
    if (clearTimeout(y.current), (b == null ? void 0 : b.type) === "touchend" && O.current) {
      O.current(), O.current = null, y.current = setTimeout(() => {
        C(b, h);
      });
      return;
    }
    O.current = null, u((I) => I.length > 0 ? I.slice(1) : I), p.current = h;
  }, []);
  return x.useImperativeHandle(o, () => ({
    pulsate: P,
    start: R,
    stop: C
  }), [P, R, C]), /* @__PURE__ */ g(Xh, T({
    className: ve(yt.root, a.root, s),
    ref: v
  }, l, {
    children: /* @__PURE__ */ g(Vh, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (pl.propTypes = {
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
const Qh = pl;
function Zh(e) {
  return Le("MuiButtonBase", e);
}
const eb = Be("MuiButtonBase", ["root", "disabled", "focusVisible"]), tb = eb, nb = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], ob = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, s = Ve({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, Zh, i);
  return o && r && (s.root += ` ${r}`), s;
}, rb = me("button", {
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
  [`&.${tb.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), fl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
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
    onFocus: P,
    onFocusVisible: C,
    onKeyDown: b,
    onKeyUp: h,
    onMouseDown: I,
    onMouseLeave: $,
    onMouseUp: _,
    onTouchEnd: B,
    onTouchMove: M,
    onTouchStart: N,
    tabIndex: K = 0,
    TouchRippleProps: W,
    touchRippleRef: F,
    type: L
  } = r, U = ge(r, nb), Y = x.useRef(null), se = x.useRef(null), ee = et(se, F), {
    isFocusVisibleRef: A,
    onFocus: V,
    onBlur: ne,
    ref: Z
  } = Ps(), [H, J] = x.useState(!1);
  u && H && J(!1), x.useImperativeHandle(i, () => ({
    focusVisible: () => {
      J(!0), Y.current.focus();
    }
  }), []);
  const [Q, G] = x.useState(!1);
  x.useEffect(() => {
    G(!0);
  }, []);
  const oe = Q && !d && !u;
  x.useEffect(() => {
    H && m && !d && Q && se.current.pulsate();
  }, [d, m, H, Q]);
  function ie(ce, tt, ue = p) {
    return Pt((ye) => (tt && tt(ye), !ue && se.current && se.current[ce](ye), !0));
  }
  const de = ie("start", I), ae = ie("stop", f), D = ie("stop", R), he = ie("stop", _), k = ie("stop", (ce) => {
    H && ce.preventDefault(), $ && $(ce);
  }), X = ie("start", N), Te = ie("stop", B), le = ie("stop", M), ze = ie("stop", (ce) => {
    ne(ce), A.current === !1 && J(!1), O && O(ce);
  }, !1), We = Pt((ce) => {
    Y.current || (Y.current = ce.currentTarget), V(ce), A.current === !0 && (J(!0), C && C(ce)), P && P(ce);
  }), $e = () => {
    const ce = Y.current;
    return c && c !== "button" && !(ce.tagName === "A" && ce.href);
  }, Ce = x.useRef(!1), Fe = Pt((ce) => {
    m && !Ce.current && H && se.current && ce.key === " " && (Ce.current = !0, se.current.stop(ce, () => {
      se.current.start(ce);
    })), ce.target === ce.currentTarget && $e() && ce.key === " " && ce.preventDefault(), b && b(ce), ce.target === ce.currentTarget && $e() && ce.key === "Enter" && !u && (ce.preventDefault(), v && v(ce));
  }), we = Pt((ce) => {
    m && ce.key === " " && se.current && H && !ce.defaultPrevented && (Ce.current = !1, se.current.stop(ce, () => {
      se.current.pulsate(ce);
    })), h && h(ce), v && ce.target === ce.currentTarget && $e() && ce.key === " " && !ce.defaultPrevented && v(ce);
  });
  let Ge = c;
  Ge === "button" && (U.href || U.to) && (Ge = y);
  const Xe = {};
  Ge === "button" ? (Xe.type = L === void 0 ? "button" : L, Xe.disabled = u) : (!U.href && !U.to && (Xe.role = "button"), u && (Xe["aria-disabled"] = u));
  const Ze = et(o, Z, Y);
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    oe && !se.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [oe]);
  const Se = T({}, r, {
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: K,
    focusVisible: H
  }), be = ob(Se);
  return /* @__PURE__ */ pe(rb, T({
    as: Ge,
    className: ve(be.root, l),
    ownerState: Se,
    onBlur: ze,
    onClick: v,
    onContextMenu: ae,
    onFocus: We,
    onKeyDown: Fe,
    onKeyUp: we,
    onMouseDown: de,
    onMouseLeave: k,
    onMouseUp: he,
    onDragLeave: D,
    onTouchEnd: Te,
    onTouchMove: le,
    onTouchStart: X,
    ref: Ze,
    tabIndex: u ? -1 : K,
    type: L
  }, Xe, U, {
    children: [s, oe ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ g(Qh, T({
        ref: ee,
        center: a
      }, W))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (fl.propTypes = {
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
  component: Qr,
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
const Br = fl;
function ib(e) {
  return Le("MuiIconButton", e);
}
const ab = Be("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), sb = ab, lb = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], cb = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: a
  } = e, s = {
    root: ["root", o && "disabled", r !== "default" && `color${fe(r)}`, i && `edge${fe(i)}`, `size${fe(a)}`]
  };
  return Ve(s, ib, t);
}, ub = me(Br, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${fe(o.color)}`], o.edge && t[`edge${fe(o.edge)}`], t[`size${fe(o.size)}`]];
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : rt(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return T({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && T({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": T({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : rt(r.main, e.palette.action.hoverOpacity)
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
    [`&.${sb.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), ml = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
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
  } = r, p = ge(r, lb), m = T({}, r, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), y = cb(m);
  return /* @__PURE__ */ g(ub, T({
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
process.env.NODE_ENV !== "production" && (ml.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: jt(n.node, (e) => x.Children.toArray(e.children).some((o) => /* @__PURE__ */ x.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const hl = ml;
function db(e) {
  return Le("MuiSvgIcon", e);
}
Be("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const pb = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], fb = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${fe(t)}`, `fontSize${fe(o)}`]
  };
  return Ve(i, db, r);
}, mb = me("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${fe(o.color)}`], t[`fontSize${fe(o.fontSize)}`]];
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
}), Ei = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
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
  } = r, y = ge(r, pb), O = /* @__PURE__ */ x.isValidElement(i) && i.type === "svg", v = T({}, r, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: m,
    hasSvgAsChild: O
  }), f = {};
  d || (f.viewBox = m);
  const R = fb(v);
  return /* @__PURE__ */ pe(mb, T({
    as: l,
    className: ve(R.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: o
  }, f, y, O && i.props, {
    ownerState: v,
    children: [O ? i.props.children : i, p ? /* @__PURE__ */ g("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ei.propTypes = {
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
Ei.muiName = "SvgIcon";
const Ba = Ei;
function or(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ g(Ba, T({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = Ba.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(o));
}
const hb = or(/* @__PURE__ */ g("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function bb(e) {
  return Le("MuiChip", e);
}
const gb = Be("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Ie = gb, vb = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], yb = (e) => {
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
    root: ["root", c, o && "disabled", `size${fe(r)}`, `color${fe(i)}`, l && "clickable", l && `clickableColor${fe(i)}`, s && "deletable", s && `deletableColor${fe(i)}`, `${c}${fe(i)}`],
    label: ["label", `label${fe(r)}`],
    avatar: ["avatar", `avatar${fe(r)}`, `avatarColor${fe(i)}`],
    icon: ["icon", `icon${fe(r)}`, `iconColor${fe(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${fe(r)}`, `deleteIconColor${fe(i)}`, `deleteIcon${fe(c)}Color${fe(i)}`]
  };
  return Ve(u, bb, t);
}, xb = me("div", {
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
      [`& .${Ie.avatar}`]: t[`avatar${fe(l)}`]
    }, {
      [`& .${Ie.avatar}`]: t[`avatarColor${fe(r)}`]
    }, {
      [`& .${Ie.icon}`]: t.icon
    }, {
      [`& .${Ie.icon}`]: t[`icon${fe(l)}`]
    }, {
      [`& .${Ie.icon}`]: t[`iconColor${fe(i)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIcon${fe(l)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIconColor${fe(r)}`]
    }, {
      [`& .${Ie.deleteIcon}`]: t[`deleteIcon${fe(c)}Color${fe(r)}`]
    }, t.root, t[`size${fe(l)}`], t[`color${fe(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${fe(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${fe(r)}`], t[c], t[`${c}${fe(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
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
    [`& .${Ie.icon}`]: T({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && T({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : o
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Ie.deleteIcon}`]: T({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : rt(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : rt(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : rt(e.palette[t.color].contrastText, 0.7),
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : rt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Ie.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
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
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : rt(e.palette[t.color].main, 0.7)}`,
  [`&.${Ie.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : rt(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Ie.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : rt(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Ie.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : rt(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Eb = me("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
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
function za(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const bl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
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
    variant: P = "filled",
    tabIndex: C,
    skipFocusWhenDisabled: b = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, h = ge(r, vb), I = x.useRef(null), $ = et(I, o), _ = (ee) => {
    ee.stopPropagation(), O && O(ee);
  }, B = (ee) => {
    ee.currentTarget === ee.target && za(ee) && ee.preventDefault(), v && v(ee);
  }, M = (ee) => {
    ee.currentTarget === ee.target && (O && za(ee) ? O(ee) : ee.key === "Escape" && I.current && I.current.blur()), f && f(ee);
  }, N = s !== !1 && y ? !0 : s, K = N || O ? Br : c || "div", W = T({}, r, {
    component: K,
    disabled: d,
    size: R,
    color: l,
    iconColor: /* @__PURE__ */ x.isValidElement(p) && p.props.color || l,
    onDelete: !!O,
    clickable: N,
    variant: P
  }), F = yb(W), L = K === Br ? T({
    component: c || "div",
    focusVisibleClassName: F.focusVisible
  }, O && {
    disableRipple: !0
  }) : {};
  let U = null;
  O && (U = u && /* @__PURE__ */ x.isValidElement(u) ? /* @__PURE__ */ x.cloneElement(u, {
    className: ve(u.props.className, F.deleteIcon),
    onClick: _
  }) : /* @__PURE__ */ g(hb, {
    className: ve(F.deleteIcon),
    onClick: _
  }));
  let Y = null;
  i && /* @__PURE__ */ x.isValidElement(i) && (Y = /* @__PURE__ */ x.cloneElement(i, {
    className: ve(F.avatar, i.props.className)
  }));
  let se = null;
  return p && /* @__PURE__ */ x.isValidElement(p) && (se = /* @__PURE__ */ x.cloneElement(p, {
    className: ve(F.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && Y && se && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ pe(xb, T({
    as: K,
    className: ve(F.root, a),
    disabled: N && d ? !0 : void 0,
    onClick: y,
    onKeyDown: B,
    onKeyUp: M,
    ref: $,
    tabIndex: b && d ? -1 : C,
    ownerState: W
  }, L, h, {
    children: [Y || se, /* @__PURE__ */ g(Eb, {
      className: ve(F.label),
      ownerState: W,
      children: m
    }), U]
  }));
});
process.env.NODE_ENV !== "production" && (bl.propTypes = {
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
  children: Ss,
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
const Tb = bl;
function $n({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
const gl = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (gl.displayName = "FormControlContext");
const Ti = gl;
function In() {
  return x.useContext(Ti);
}
function vl(e) {
  return /* @__PURE__ */ g(Ls, T({}, e, {
    defaultTheme: Zo,
    themeId: zo
  }));
}
process.env.NODE_ENV !== "production" && (vl.propTypes = {
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
function jo(e, t = !1) {
  return e && (Wa(e.value) && e.value !== "" || t && Wa(e.defaultValue) && e.defaultValue !== "");
}
function Ob(e) {
  return e.startAdornment;
}
function Cb(e) {
  return Le("MuiInputBase", e);
}
const Rb = Be("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), mt = Rb, wb = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], rr = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${fe(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, ir = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, Sb = (e) => {
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
    root: ["root", `color${fe(o)}`, r && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", m === "small" && "sizeSmall", d && "multiline", y && "adornedStart", a && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", O === "search" && "inputTypeSearch", d && "inputMultiline", m === "small" && "inputSizeSmall", u && "inputHiddenLabel", y && "inputAdornedStart", a && "inputAdornedEnd", p && "readOnly"]
  };
  return Ve(v, Cb, t);
}, ar = me("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rr
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
  [`&.${mt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && T({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), sr = me("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ir
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light", r = T({
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
    [`label[data-shrink=false] + .${mt.formControl} &`]: {
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
    [`&.${mt.disabled}`]: {
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
}), Pb = /* @__PURE__ */ g(vl, {
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
}), yl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r;
  const i = Ue({
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
    inputProps: P = {},
    inputRef: C,
    maxRows: b,
    minRows: h,
    multiline: I = !1,
    name: $,
    onBlur: _,
    onChange: B,
    onClick: M,
    onFocus: N,
    onKeyDown: K,
    onKeyUp: W,
    placeholder: F,
    readOnly: L,
    renderSuffix: U,
    rows: Y,
    slotProps: se = {},
    slots: ee = {},
    startAdornment: A,
    type: V = "text",
    value: ne
  } = i, Z = ge(i, wb), H = P.value != null ? P.value : ne, {
    current: J
  } = x.useRef(H != null), Q = x.useRef(), G = x.useCallback((be) => {
    process.env.NODE_ENV !== "production" && be && be.nodeName !== "INPUT" && !be.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), oe = et(Q, C, P.ref, G), [ie, de] = x.useState(!1), ae = In();
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (ae)
      return ae.registerEffect();
  }, [ae]);
  const D = $n({
    props: i,
    muiFormControl: ae,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  D.focused = ae ? ae.focused : ie, x.useEffect(() => {
    !ae && m && ie && (de(!1), _ && _());
  }, [ae, m, ie, _]);
  const he = ae && ae.onFilled, k = ae && ae.onEmpty, X = x.useCallback((be) => {
    jo(be) ? he && he() : k && k();
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
    N && N(be), P.onFocus && P.onFocus(be), ae && ae.onFocus ? ae.onFocus(be) : de(!0);
  }, le = (be) => {
    _ && _(be), P.onBlur && P.onBlur(be), ae && ae.onBlur ? ae.onBlur(be) : de(!1);
  }, ze = (be, ...ce) => {
    if (!J) {
      const tt = be.target || Q.current;
      if (tt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : qt(1));
      X({
        value: tt.value
      });
    }
    P.onChange && P.onChange(be, ...ce), B && B(be, ...ce);
  };
  x.useEffect(() => {
    X(Q.current);
  }, []);
  const We = (be) => {
    Q.current && be.currentTarget === be.target && Q.current.focus(), M && !D.disabled && M(be);
  };
  let $e = R, Ce = P;
  I && $e === "input" && (Y ? (process.env.NODE_ENV !== "production" && (h || b) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Ce = T({
    type: void 0,
    minRows: Y,
    maxRows: Y
  }, Ce)) : Ce = T({
    type: void 0,
    maxRows: b,
    minRows: h
  }, Ce), $e = rl);
  const Fe = (be) => {
    X(be.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  x.useEffect(() => {
    ae && ae.setAdornedStart(!!A);
  }, [ae, A]);
  const we = T({}, i, {
    color: D.color || "primary",
    disabled: D.disabled,
    endAdornment: O,
    error: D.error,
    focused: D.focused,
    formControl: ae,
    fullWidth: v,
    hiddenLabel: D.hiddenLabel,
    multiline: I,
    size: D.size,
    startAdornment: A,
    type: V
  }), Ge = Sb(we), Xe = ee.root || u.Root || ar, Ze = se.root || d.root || {}, Se = ee.input || u.Input || sr;
  return Ce = T({}, Ce, (r = se.input) != null ? r : d.input), /* @__PURE__ */ pe(x.Fragment, {
    children: [!y && Pb, /* @__PURE__ */ pe(Xe, T({}, Ze, !ao(Xe) && {
      ownerState: T({}, we, Ze.ownerState)
    }, {
      ref: o,
      onClick: We
    }, Z, {
      className: ve(Ge.root, Ze.className, c, L && "MuiInputBase-readOnly"),
      children: [A, /* @__PURE__ */ g(Ti.Provider, {
        value: null,
        children: /* @__PURE__ */ g(Se, T({
          ownerState: we,
          "aria-invalid": D.error,
          "aria-describedby": a,
          autoComplete: s,
          autoFocus: l,
          defaultValue: p,
          disabled: D.disabled,
          id: f,
          onAnimationStart: Fe,
          name: $,
          placeholder: F,
          readOnly: L,
          required: D.required,
          rows: Y,
          value: H,
          onKeyDown: K,
          onKeyUp: W,
          type: V
        }, Ce, !ao(Se) && {
          as: $e,
          ownerState: T({}, we, Ce.ownerState)
        }, {
          ref: oe,
          className: ve(Ge.input, Ce.className, L && "MuiInputBase-readOnly"),
          onBlur: le,
          onChange: ze,
          onFocus: Te
        }))
      }), O, U ? U(T({}, D, {
        startAdornment: A
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (yl.propTypes = {
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
  inputComponent: Qr,
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
const Oi = yl;
function $b(e) {
  return Le("MuiInput", e);
}
const Ib = T({}, mt, Be("MuiInput", ["root", "underline", "input"])), Ut = Ib;
function kb(e) {
  return Le("MuiOutlinedInput", e);
}
const Ab = T({}, mt, Be("MuiOutlinedInput", ["root", "notchedOutline", "input"])), kt = Ab;
function Mb(e) {
  return Le("MuiFilledInput", e);
}
const Nb = T({}, mt, Be("MuiFilledInput", ["root", "underline", "input"])), ht = Nb, _b = or(/* @__PURE__ */ g("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), xl = or(/* @__PURE__ */ g("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function Db(e) {
  return Le("MuiAutocomplete", e);
}
const jb = Be("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), Oe = jb;
var Va, Ua;
const Fb = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], Lb = ["ref"], Bb = (e) => {
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
    tag: ["tag", `tagSize${fe(d)}`],
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
  return Ve(p, Db, t);
}, zb = me("div", {
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
      [`& .${Oe.tag}`]: t[`tagSize${fe(l)}`]
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
  [`& .${Ut.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${Ut.root}.${mt.sizeSmall}`]: {
    [`& .${Ut.input}`]: {
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
  [`& .${kt.root}.${mt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Oe.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${ht.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Oe.hasPopupIcon}&, .${Oe.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${Oe.hasPopupIcon}.${Oe.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${ht.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Oe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${ht.root}.${mt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${ht.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${mt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${ht.root}.${mt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${Oe.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${ht.root}.${mt.hiddenLabel}.${mt.sizeSmall}`]: {
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
})), Wb = me("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), Vb = me(hl, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Ub = me(hl, {
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
})), qb = me(sl, {
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
}) => T({
  zIndex: (e.vars || e).zIndex.modal
}, t.disablePortal && {
  position: "absolute"
})), Hb = me(vi, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => T({}, e.typography.body1, {
  overflow: "auto"
})), Yb = me("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Kb = me("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Gb = me("div", {
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : rt(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Oe.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Oe.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), Xb = me(kh, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), Jb = me("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${Oe.option}`]: {
    paddingLeft: 24
  }
}), El = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r, i, a, s;
  const l = Ue({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: c = !1,
    autoHighlight: u = !1,
    autoSelect: d = !1,
    blurOnSelect: p = !1,
    ChipProps: m,
    className: y,
    clearIcon: O = Va || (Va = /* @__PURE__ */ g(_b, {
      fontSize: "small"
    })),
    clearOnBlur: v = !l.freeSolo,
    clearOnEscape: f = !1,
    clearText: R = "Clear",
    closeText: P = "Close",
    componentsProps: C = {},
    defaultValue: b = l.multiple ? [] : null,
    disableClearable: h = !1,
    disableCloseOnSelect: I = !1,
    disabled: $ = !1,
    disabledItemsFocusable: _ = !1,
    disableListWrap: B = !1,
    disablePortal: M = !1,
    filterSelectedOptions: N = !1,
    forcePopupIcon: K = "auto",
    freeSolo: W = !1,
    fullWidth: F = !1,
    getLimitTagsText: L = (j) => `+${j}`,
    getOptionLabel: U,
    groupBy: Y,
    handleHomeEndKeys: se = !l.freeSolo,
    includeInputInList: ee = !1,
    limitTags: A = -1,
    ListboxComponent: V = "ul",
    ListboxProps: ne,
    loading: Z = !1,
    loadingText: H = "Loading…",
    multiple: J = !1,
    noOptionsText: Q = "No options",
    openOnFocus: G = !1,
    openText: oe = "Open",
    PaperComponent: ie = vi,
    PopperComponent: de = sl,
    popupIcon: ae = Ua || (Ua = /* @__PURE__ */ g(xl, {})),
    readOnly: D = !1,
    renderGroup: he,
    renderInput: k,
    renderOption: X,
    renderTags: Te,
    selectOnFocus: le = !l.freeSolo,
    size: ze = "medium",
    slotProps: We = {}
  } = l, $e = ge(l, Fb), {
    getRootProps: Ce,
    getInputProps: Fe,
    getInputLabelProps: we,
    getPopupIndicatorProps: Ge,
    getClearProps: Xe,
    getTagProps: Ze,
    getListboxProps: Se,
    getOptionProps: be,
    value: ce,
    dirty: tt,
    expanded: ue,
    id: ye,
    popupOpen: Pe,
    focused: Je,
    focusedTag: zt,
    anchorEl: It,
    setAnchorEl: An,
    inputValue: Rt,
    groupedOptions: st
  } = Ch(T({}, l, {
    componentName: "Autocomplete"
  })), ft = !h && !$ && tt && !D, at = (!W || K === !0) && K !== !1, {
    onMouseDown: wt
  } = Fe(), {
    ref: Xt
  } = ne ?? {}, Wt = Se(), {
    ref: cn
  } = Wt, un = ge(Wt, Lb), Mn = et(cn, Xt), Vt = U || ((j) => {
    var q;
    return (q = j.label) != null ? q : j;
  }), nt = T({}, l, {
    disablePortal: M,
    expanded: ue,
    focused: Je,
    fullWidth: F,
    getOptionLabel: Vt,
    hasClearIcon: ft,
    hasPopupIcon: at,
    inputFocused: zt === -1,
    popupOpen: Pe,
    size: ze
  }), Qe = Bb(nt);
  let lt;
  if (J && ce.length > 0) {
    const j = (q) => T({
      className: Qe.tag,
      disabled: $
    }, Ze(q));
    Te ? lt = Te(ce, j, nt) : lt = ce.map((q, re) => /* @__PURE__ */ g(Tb, T({
      label: Vt(q),
      size: ze
    }, j({
      index: re
    }), m)));
  }
  if (A > -1 && Array.isArray(lt)) {
    const j = lt.length - A;
    !Je && j > 0 && (lt = lt.splice(0, A), lt.push(/* @__PURE__ */ g("span", {
      className: Qe.tag,
      children: L(j)
    }, lt.length)));
  }
  const pn = he || ((j) => /* @__PURE__ */ pe("li", {
    children: [/* @__PURE__ */ g(Xb, {
      className: Qe.groupLabel,
      ownerState: nt,
      component: "div",
      children: j.group
    }), /* @__PURE__ */ g(Jb, {
      className: Qe.groupUl,
      ownerState: nt,
      children: j.children
    })]
  }, j.key)), Nn = X || ((j, q) => /* @__PURE__ */ g("li", T({}, j, {
    children: Vt(q)
  }))), E = (j, q) => {
    const re = be({
      option: j,
      index: q
    });
    return Nn(T({}, re, {
      className: Qe.option
    }), j, {
      selected: re["aria-selected"],
      index: q,
      inputValue: Rt
    }, nt);
  }, z = (r = We.clearIndicator) != null ? r : C.clearIndicator, te = (i = We.paper) != null ? i : C.paper, w = (a = We.popper) != null ? a : C.popper, S = (s = We.popupIndicator) != null ? s : C.popupIndicator;
  return /* @__PURE__ */ pe(x.Fragment, {
    children: [/* @__PURE__ */ g(zb, T({
      ref: o,
      className: ve(Qe.root, y),
      ownerState: nt
    }, Ce($e), {
      children: k({
        id: ye,
        disabled: $,
        fullWidth: !0,
        size: ze === "small" ? "small" : void 0,
        InputLabelProps: we(),
        InputProps: T({
          ref: An,
          className: Qe.inputRoot,
          startAdornment: lt,
          onClick: (j) => {
            j.target === j.currentTarget && wt(j);
          }
        }, (ft || at) && {
          endAdornment: /* @__PURE__ */ pe(Wb, {
            className: Qe.endAdornment,
            ownerState: nt,
            children: [ft ? /* @__PURE__ */ g(Vb, T({}, Xe(), {
              "aria-label": R,
              title: R,
              ownerState: nt
            }, z, {
              className: ve(Qe.clearIndicator, z == null ? void 0 : z.className),
              children: O
            })) : null, at ? /* @__PURE__ */ g(Ub, T({}, Ge(), {
              disabled: $,
              "aria-label": Pe ? P : oe,
              title: Pe ? P : oe,
              ownerState: nt
            }, S, {
              className: ve(Qe.popupIndicator, S == null ? void 0 : S.className),
              children: ae
            })) : null]
          })
        }),
        inputProps: T({
          className: Qe.input,
          disabled: $,
          readOnly: D
        }, Fe())
      })
    })), It ? /* @__PURE__ */ g(qb, T({
      as: de,
      disablePortal: M,
      style: {
        width: It ? It.clientWidth : null
      },
      ownerState: nt,
      role: "presentation",
      anchorEl: It,
      open: Pe
    }, w, {
      className: ve(Qe.popper, w == null ? void 0 : w.className),
      children: /* @__PURE__ */ pe(Hb, T({
        ownerState: nt,
        as: ie
      }, te, {
        className: ve(Qe.paper, te == null ? void 0 : te.className),
        children: [Z && st.length === 0 ? /* @__PURE__ */ g(Yb, {
          className: Qe.loading,
          ownerState: nt,
          children: H
        }) : null, st.length === 0 && !W && !Z ? /* @__PURE__ */ g(Kb, {
          className: Qe.noOptions,
          ownerState: nt,
          role: "presentation",
          onMouseDown: (j) => {
            j.preventDefault();
          },
          children: Q
        }) : null, st.length > 0 ? /* @__PURE__ */ g(Gb, T({
          as: V,
          className: Qe.listbox,
          ownerState: nt
        }, un, ne, {
          ref: Mn,
          children: st.map((j, q) => Y ? pn({
            key: j.key,
            group: j.group,
            children: j.options.map((re, xe) => E(re, j.index + xe))
          }) : E(j, q))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (El.propTypes = {
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
  limitTags: ti,
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
const Qb = El, Zb = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], eg = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = Ve({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, $b, t);
  return T({}, t, i);
}, tg = me(ar, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...rr(e, t), !o.disableUnderline && t.underline];
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
    [`&.${Ut.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Ut.error}`]: {
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
    [`&:hover:not(.${Ut.disabled}, .${Ut.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${Ut.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), ng = me(sr, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ir
})({}), Ci = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r, i, a, s;
  const l = Ue({
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
  } = l, R = ge(l, Zb), P = eg(l), b = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, h = O ?? d ? xt(O ?? d, b) : b, I = (r = (i = v.root) != null ? i : u.Root) != null ? r : tg, $ = (a = (s = v.input) != null ? s : u.Input) != null ? a : ng;
  return /* @__PURE__ */ g(Oi, T({
    slots: {
      root: I,
      input: $
    },
    slotProps: h,
    fullWidth: p,
    inputComponent: m,
    multiline: y,
    ref: o,
    type: f
  }, R, {
    classes: P
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
Ci.muiName = "Input";
const Tl = Ci, og = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], rg = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = Ve({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, Mb, t);
  return T({}, t, i);
}, ig = me(ar, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...rr(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
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
    [`&.${ht.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
    },
    [`&.${ht.disabled}`]: {
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
    [`&.${ht.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${ht.error}`]: {
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
    [`&:hover:not(.${ht.disabled}, .${ht.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${ht.disabled}:before`]: {
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
}), ag = me(sr, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ir
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
})), Ri = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r, i, a, s;
  const l = Ue({
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
  } = l, f = ge(l, og), R = T({}, l, {
    fullWidth: d,
    inputComponent: p,
    multiline: m,
    type: v
  }), P = rg(l), C = {
    root: {
      ownerState: R
    },
    input: {
      ownerState: R
    }
  }, b = y ?? u ? xt(y ?? u, C) : C, h = (r = (i = O.root) != null ? i : c.Root) != null ? r : ig, I = (a = (s = O.input) != null ? s : c.Input) != null ? a : ag;
  return /* @__PURE__ */ g(Oi, T({
    slots: {
      root: h,
      input: I
    },
    componentsProps: b,
    fullWidth: d,
    inputComponent: p,
    multiline: m,
    ref: o,
    type: v
  }, f, {
    classes: P
  }));
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
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
Ri.muiName = "Input";
const Ol = Ri;
var qa;
const sg = ["children", "classes", "className", "label", "notched"], lg = me("fieldset")({
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
}), cg = me("legend")(({
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
function Cl(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, i = ge(e, sg), a = o != null && o !== "", s = T({}, e, {
    notched: r,
    withLabel: a
  });
  return /* @__PURE__ */ g(lg, T({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, i, {
    children: /* @__PURE__ */ g(cg, {
      ownerState: s,
      children: a ? /* @__PURE__ */ g("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        qa || (qa = /* @__PURE__ */ g("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
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
const ug = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], dg = (e) => {
  const {
    classes: t
  } = e, r = Ve({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, kb, t);
  return T({}, t, r);
}, pg = me(ar, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rr
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return T({
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
  }, t.multiline && T({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), fg = me(Cl, {
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
}), mg = me(sr, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ir
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
})), wi = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r, i, a, s, l;
  const c = Ue({
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
  } = c, R = ge(c, ug), P = dg(c), C = In(), b = $n({
    props: c,
    muiFormControl: C,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), h = T({}, c, {
    color: b.color || "primary",
    disabled: b.disabled,
    error: b.error,
    focused: b.focused,
    formControl: C,
    fullWidth: d,
    hiddenLabel: b.hiddenLabel,
    multiline: y,
    size: b.size,
    type: f
  }), I = (r = (i = v.root) != null ? i : u.Root) != null ? r : pg, $ = (a = (s = v.input) != null ? s : u.Input) != null ? a : mg;
  return /* @__PURE__ */ g(Oi, T({
    slots: {
      root: I,
      input: $
    },
    renderSuffix: (_) => /* @__PURE__ */ g(fg, {
      ownerState: h,
      className: P.notchedOutline,
      label: m != null && m !== "" && b.required ? l || (l = /* @__PURE__ */ pe(x.Fragment, {
        children: [m, " ", "*"]
      })) : m,
      notched: typeof O < "u" ? O : !!(_.startAdornment || _.filled || _.focused)
    }),
    fullWidth: d,
    inputComponent: p,
    multiline: y,
    ref: o,
    type: f
  }, R, {
    classes: T({}, P, {
      notchedOutline: null
    })
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
wi.muiName = "Input";
const Rl = wi;
function hg(e) {
  return Le("MuiFormLabel", e);
}
const bg = Be("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Qn = bg, gg = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], vg = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${fe(o)}`, i && "disabled", a && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return Ve(c, hg, t);
}, yg = me("label", {
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
  [`&.${Qn.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Qn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Qn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), xg = me("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Qn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), wl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    component: s = "label"
  } = r, l = ge(r, gg), c = In(), u = $n({
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
  }), p = vg(d);
  return /* @__PURE__ */ pe(yg, T({
    as: s,
    ownerState: d,
    className: ve(p.root, a),
    ref: o
  }, l, {
    children: [i, u.required && /* @__PURE__ */ pe(xg, {
      ownerState: d,
      "aria-hidden": !0,
      className: p.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
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
const Eg = wl;
function Tg(e) {
  return Le("MuiInputLabel", e);
}
Be("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Og = ["disableAnimation", "margin", "shrink", "variant", "className"], Cg = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: i,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, u = Ve({
    root: ["root", o && "formControl", !a && "animated", i && "shrink", r === "small" && "sizeSmall", s],
    asterisk: [l && "asterisk"]
  }, Tg, t);
  return T({}, t, u);
}, Rg = me(Eg, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
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
}))), Sl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    shrink: a,
    className: s
  } = r, l = ge(r, Og), c = In();
  let u = a;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = $n({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required"]
  }), p = T({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required
  }), m = Cg(p);
  return /* @__PURE__ */ g(Rg, T({
    "data-shrink": u,
    ownerState: p,
    ref: o,
    className: ve(m.root, s)
  }, l, {
    classes: m
  }));
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
const wg = Sl;
function Sg(e) {
  return Le("MuiFormControl", e);
}
Be("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Pg = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], $g = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${fe(o)}`, r && "fullWidth"]
  };
  return Ve(i, Sg, t);
}, Ig = me("div", {
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
})), Pl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
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
  } = r, R = ge(r, Pg), P = T({}, r, {
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
  }), C = $g(P), [b, h] = x.useState(() => {
    let W = !1;
    return i && x.Children.forEach(i, (F) => {
      if (!Po(F, ["Input", "Select"]))
        return;
      const L = Po(F, ["Select"]) ? F.props.input : F;
      L && Ob(L.props) && (W = !0);
    }), W;
  }), [I, $] = x.useState(() => {
    let W = !1;
    return i && x.Children.forEach(i, (F) => {
      Po(F, ["Input", "Select"]) && (jo(F.props, !0) || jo(F.props.inputProps, !0)) && (W = !0);
    }), W;
  }), [_, B] = x.useState(!1);
  c && _ && B(!1);
  const M = d !== void 0 && !c ? d : _;
  let N;
  if (process.env.NODE_ENV !== "production") {
    const W = x.useRef(!1);
    N = () => (W.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), W.current = !0, () => {
      W.current = !1;
    });
  }
  const K = x.useMemo(() => ({
    adornedStart: b,
    setAdornedStart: h,
    color: s,
    disabled: c,
    error: u,
    filled: I,
    focused: M,
    fullWidth: p,
    hiddenLabel: m,
    size: v,
    onBlur: () => {
      B(!1);
    },
    onEmpty: () => {
      $(!1);
    },
    onFilled: () => {
      $(!0);
    },
    onFocus: () => {
      B(!0);
    },
    registerEffect: N,
    required: O,
    variant: f
  }), [b, s, c, u, I, M, p, m, N, O, v, f]);
  return /* @__PURE__ */ g(Ti.Provider, {
    value: K,
    children: /* @__PURE__ */ g(Ig, T({
      as: l,
      ownerState: P,
      className: ve(C.root, a),
      ref: o
    }, R, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
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
const kg = Pl;
function Ag(e) {
  return Le("MuiFormHelperText", e);
}
const Mg = Be("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Ha = Mg;
var Ya;
const Ng = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], _g = (e) => {
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
    root: ["root", i && "disabled", a && "error", r && `size${fe(r)}`, o && "contained", l && "focused", s && "filled", c && "required"]
  };
  return Ve(u, Ag, t);
}, Dg = me("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${fe(o.size)}`], o.contained && t.contained, o.filled && t.filled];
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
})), $l = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: a,
    component: s = "p"
  } = r, l = ge(r, Ng), c = In(), u = $n({
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
  }), p = _g(d);
  return /* @__PURE__ */ g(Dg, T({
    as: s,
    ownerState: d,
    className: ve(p.root, a),
    ref: o
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ya || (Ya = /* @__PURE__ */ g("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
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
const jg = $l;
var zr = { exports: {} }, _e = {};
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
function Fg() {
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
function Lg() {
  return Ga || (Ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = !1, v = !1, f = !1, R = !1, P = !1, C;
    C = Symbol.for("react.module.reference");
    function b(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === o || k === i || P || k === r || k === u || k === d || R || k === y || O || v || f || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === p || k.$$typeof === a || k.$$typeof === s || k.$$typeof === c || // This needs to include all possible module reference object
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
                var le = Te && Te.$$typeof;
                switch (le) {
                  case l:
                  case s:
                  case c:
                  case m:
                  case p:
                  case a:
                    return le;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var I = s, $ = a, _ = e, B = c, M = o, N = m, K = p, W = t, F = i, L = r, U = u, Y = d, se = !1, ee = !1;
    function A(k) {
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
    function de(k) {
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
    De.ContextConsumer = I, De.ContextProvider = $, De.Element = _, De.ForwardRef = B, De.Fragment = M, De.Lazy = N, De.Memo = K, De.Portal = W, De.Profiler = F, De.StrictMode = L, De.Suspense = U, De.SuspenseList = Y, De.isAsyncMode = A, De.isConcurrentMode = V, De.isContextConsumer = ne, De.isContextProvider = Z, De.isElement = H, De.isForwardRef = J, De.isFragment = Q, De.isLazy = G, De.isMemo = oe, De.isPortal = ie, De.isProfiler = de, De.isStrictMode = ae, De.isSuspense = D, De.isSuspenseList = he, De.isValidElementType = b, De.typeOf = h;
  }()), De;
}
process.env.NODE_ENV === "production" ? zr.exports = Fg() : zr.exports = Lg();
var Si = zr.exports;
const Il = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Il.displayName = "ListContext");
const Bg = Il;
function zg(e) {
  return Le("MuiList", e);
}
Be("MuiList", ["root", "padding", "dense", "subheader"]);
const Wg = ["children", "className", "component", "dense", "disablePadding", "subheader"], Vg = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return Ve({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, zg, t);
}, Ug = me("ul", {
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
})), kl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ge(r, Wg), p = x.useMemo(() => ({
    dense: l
  }), [l]), m = T({}, r, {
    component: s,
    dense: l,
    disablePadding: c
  }), y = Vg(m);
  return /* @__PURE__ */ g(Bg.Provider, {
    value: p,
    children: /* @__PURE__ */ pe(Ug, T({
      as: s,
      className: ve(y.root, a),
      ref: o,
      ownerState: m
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (kl.propTypes = {
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
const qg = kl, Hg = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function yr(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function Xa(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function Al(e, t) {
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
    if (!l.hasAttribute("tabindex") || !Al(l, a) || c)
      l = i(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Ml = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  } = t, m = ge(t, Hg), y = x.useRef(null), O = x.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Ft(() => {
    i && y.current.focus();
  }, [i]), x.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (C, b) => {
      const h = !y.current.style.width;
      if (C.clientHeight < y.current.clientHeight && h) {
        const I = `${$s(it(C))}px`;
        y.current.style[b.direction === "rtl" ? "paddingLeft" : "paddingRight"] = I, y.current.style.width = `calc(100% + ${I})`;
      }
      return y.current;
    }
  }), []);
  const v = (C) => {
    const b = y.current, h = C.key, I = it(b).activeElement;
    if (h === "ArrowDown")
      C.preventDefault(), Wn(b, I, u, c, yr);
    else if (h === "ArrowUp")
      C.preventDefault(), Wn(b, I, u, c, Xa);
    else if (h === "Home")
      C.preventDefault(), Wn(b, null, u, c, yr);
    else if (h === "End")
      C.preventDefault(), Wn(b, null, u, c, Xa);
    else if (h.length === 1) {
      const $ = O.current, _ = h.toLowerCase(), B = performance.now();
      $.keys.length > 0 && (B - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && _ !== $.keys[0] && ($.repeating = !1)), $.lastTime = B, $.keys.push(_);
      const M = I && !$.repeating && Al(I, $);
      $.previousKeyMatched && (M || Wn(b, I, !1, c, yr, $)) ? C.preventDefault() : $.previousKeyMatched = !1;
    }
    d && d(C);
  }, f = et(y, o);
  let R = -1;
  x.Children.forEach(s, (C, b) => {
    if (!/* @__PURE__ */ x.isValidElement(C)) {
      R === b && (R += 1, R >= s.length && (R = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Si.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (p === "selectedMenu" && C.props.selected || R === -1) && (R = b), R === b && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (R += 1, R >= s.length && (R = -1));
  });
  const P = x.Children.map(s, (C, b) => {
    if (b === R) {
      const h = {};
      return a && (h.autoFocus = !0), C.props.tabIndex === void 0 && p === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ x.cloneElement(C, h);
    }
    return C;
  });
  return /* @__PURE__ */ g(qg, T({
    role: "menu",
    ref: f,
    className: l,
    onKeyDown: v,
    tabIndex: i ? 0 : -1
  }, m, {
    children: P
  }));
});
process.env.NODE_ENV !== "production" && (Ml.propTypes = {
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
const Yg = Ml, Nl = (e) => e.scrollTop;
function Fo(e, t) {
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
const Kg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Wr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Gg = {
  entering: {
    opacity: 1,
    transform: Wr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, xr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Pi = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    TransitionComponent: f = ul
  } = t, R = ge(t, Kg), P = x.useRef(), C = x.useRef(), b = ln(), h = x.useRef(null), I = et(h, a.ref, o), $ = (L) => (U) => {
    if (L) {
      const Y = h.current;
      U === void 0 ? L(Y) : L(Y, U);
    }
  }, _ = $(d), B = $((L, U) => {
    Nl(L);
    const {
      duration: Y,
      delay: se,
      easing: ee
    } = Fo({
      style: O,
      timeout: v,
      easing: s
    }, {
      mode: "enter"
    });
    let A;
    v === "auto" ? (A = b.transitions.getAutoHeightDuration(L.clientHeight), C.current = A) : A = Y, L.style.transition = [b.transitions.create("opacity", {
      duration: A,
      delay: se
    }), b.transitions.create("transform", {
      duration: xr ? A : A * 0.666,
      delay: se,
      easing: ee
    })].join(","), c && c(L, U);
  }), M = $(u), N = $(y), K = $((L) => {
    const {
      duration: U,
      delay: Y,
      easing: se
    } = Fo({
      style: O,
      timeout: v,
      easing: s
    }, {
      mode: "exit"
    });
    let ee;
    v === "auto" ? (ee = b.transitions.getAutoHeightDuration(L.clientHeight), C.current = ee) : ee = U, L.style.transition = [b.transitions.create("opacity", {
      duration: ee,
      delay: Y
    }), b.transitions.create("transform", {
      duration: xr ? ee : ee * 0.666,
      delay: xr ? Y : Y || ee * 0.333,
      easing: se
    })].join(","), L.style.opacity = 0, L.style.transform = Wr(0.75), p && p(L);
  }), W = $(m), F = (L) => {
    v === "auto" && (P.current = setTimeout(L, C.current || 0)), r && r(h.current, L);
  };
  return x.useEffect(() => () => {
    clearTimeout(P.current);
  }, []), /* @__PURE__ */ g(f, T({
    appear: i,
    in: l,
    nodeRef: h,
    onEnter: B,
    onEntered: M,
    onEntering: _,
    onExit: K,
    onExited: W,
    onExiting: N,
    addEndListener: F,
    timeout: v === "auto" ? null : v
  }, R, {
    children: (L, U) => /* @__PURE__ */ x.cloneElement(a, T({
      style: T({
        opacity: 0,
        transform: Wr(0.75),
        visibility: L === "exited" && !l ? "hidden" : void 0
      }, Gg[L], O, a.props.style),
      ref: I
    }, U))
  }));
});
process.env.NODE_ENV !== "production" && (Pi.propTypes = {
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
  children: ho.isRequired,
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
Pi.muiSupportAuto = !0;
const Xg = Pi, Jg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Qg = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, _l = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = ln(), i = {
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
    TransitionComponent: P = ul
  } = t, C = ge(t, Jg), b = x.useRef(null), h = et(b, l.ref, o), I = (F) => (L) => {
    if (F) {
      const U = b.current;
      L === void 0 ? F(U) : F(U, L);
    }
  }, $ = I(m), _ = I((F, L) => {
    Nl(F);
    const U = Fo({
      style: f,
      timeout: R,
      easing: c
    }, {
      mode: "enter"
    });
    F.style.webkitTransition = r.transitions.create("opacity", U), F.style.transition = r.transitions.create("opacity", U), d && d(F, L);
  }), B = I(p), M = I(v), N = I((F) => {
    const L = Fo({
      style: f,
      timeout: R,
      easing: c
    }, {
      mode: "exit"
    });
    F.style.webkitTransition = r.transitions.create("opacity", L), F.style.transition = r.transitions.create("opacity", L), y && y(F);
  }), K = I(O);
  return /* @__PURE__ */ g(P, T({
    appear: s,
    in: u,
    nodeRef: b,
    onEnter: _,
    onEntered: B,
    onEntering: $,
    onExit: N,
    onExited: K,
    onExiting: M,
    addEndListener: (F) => {
      a && a(b.current, F);
    },
    timeout: R
  }, C, {
    children: (F, L) => /* @__PURE__ */ x.cloneElement(l, T({
      style: T({
        opacity: 0,
        visibility: F === "exited" && !u ? "hidden" : void 0
      }, Qg[F], f, l.props.style),
      ref: h
    }, L))
  }));
});
process.env.NODE_ENV !== "production" && (_l.propTypes = {
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
  children: ho.isRequired,
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
const Zg = _l;
function ev(e) {
  return Le("MuiBackdrop", e);
}
Be("MuiBackdrop", ["root", "invisible"]);
const tv = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], nv = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return Ve({
    root: ["root", o && "invisible"]
  }, ev, t);
}, ov = me("div", {
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
})), Dl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r, i, a;
  const s = Ue({
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
    TransitionComponent: f = Zg,
    transitionDuration: R
  } = s, P = ge(s, tv), C = T({}, s, {
    component: u,
    invisible: m
  }), b = nv(C), h = (r = O.root) != null ? r : p.root;
  return /* @__PURE__ */ g(f, T({
    in: y,
    timeout: R
  }, P, {
    children: /* @__PURE__ */ g(ov, T({
      "aria-hidden": !0
    }, h, {
      as: (i = (a = v.root) != null ? a : d.Root) != null ? i : u,
      className: ve(b.root, c, h == null ? void 0 : h.className),
      ownerState: T({}, C, h == null ? void 0 : h.ownerState),
      classes: b,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
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
const rv = Dl, iv = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"], av = me("div", {
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
}) => T({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), sv = me(rv, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), jl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r, i, a, s, l, c;
  const u = Ue({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = sv,
    BackdropProps: p,
    classes: m,
    className: y,
    closeAfterTransition: O = !1,
    children: v,
    container: f,
    component: R,
    components: P = {},
    componentsProps: C = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: h = !1,
    disableEscapeKeyDown: I = !1,
    disablePortal: $ = !1,
    disableRestoreFocus: _ = !1,
    disableScrollLock: B = !1,
    hideBackdrop: M = !1,
    keepMounted: N = !1,
    onBackdropClick: K,
    onClose: W,
    open: F,
    slotProps: L,
    slots: U,
    // eslint-disable-next-line react/prop-types
    theme: Y
  } = u, se = ge(u, iv), [ee, A] = x.useState(!0), V = {
    container: f,
    closeAfterTransition: O,
    disableAutoFocus: b,
    disableEnforceFocus: h,
    disableEscapeKeyDown: I,
    disablePortal: $,
    disableRestoreFocus: _,
    disableScrollLock: B,
    hideBackdrop: M,
    keepMounted: N,
    onBackdropClick: K,
    onClose: W,
    open: F
  }, ne = T({}, u, V, {
    exited: ee
  }), Z = (r = (i = U == null ? void 0 : U.root) != null ? i : P.Root) != null ? r : av, H = (a = (s = U == null ? void 0 : U.backdrop) != null ? s : P.Backdrop) != null ? a : d, J = (l = L == null ? void 0 : L.root) != null ? l : C.root, Q = (c = L == null ? void 0 : L.backdrop) != null ? c : C.backdrop;
  return /* @__PURE__ */ g(ol, T({
    slots: {
      root: Z,
      backdrop: H
    },
    slotProps: {
      root: () => T({}, _r(J, ne), !ao(Z) && {
        as: R,
        theme: Y
      }, {
        className: ve(y, J == null ? void 0 : J.className, m == null ? void 0 : m.root, !ne.open && ne.exited && (m == null ? void 0 : m.hidden))
      }),
      backdrop: () => T({}, p, _r(Q, ne), {
        className: ve(Q == null ? void 0 : Q.className, p == null ? void 0 : p.className, m == null ? void 0 : m.backdrop)
      })
    },
    onTransitionEnter: () => A(!1),
    onTransitionExited: () => A(!0),
    ref: o
  }, se, V, {
    children: v
  }));
});
process.env.NODE_ENV !== "production" && (jl.propTypes = {
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
  children: ho.isRequired,
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
const lv = jl;
function cv(e) {
  return Le("MuiPopover", e);
}
Be("MuiPopover", ["root", "paper"]);
const uv = ["onEntering"], dv = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"], pv = ["slotProps"];
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
function Io(e) {
  return typeof e == "function" ? e() : e;
}
const fv = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"],
    paper: ["paper"]
  }, cv, t);
}, mv = me(lv, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Fl = me(vi, {
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
}), Ll = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r, i, a;
  const s = Ue({
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
    PaperProps: P = {},
    slots: C,
    slotProps: b,
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: I = Xg,
    transitionDuration: $ = "auto",
    TransitionProps: {
      onEntering: _
    } = {}
  } = s, B = ge(s.TransitionProps, uv), M = ge(s, dv), N = (r = b == null ? void 0 : b.paper) != null ? r : P, K = x.useRef(), W = et(K, N.ref), F = T({}, s, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: v,
    marginThreshold: f,
    externalPaperSlotProps: N,
    transformOrigin: h,
    TransitionComponent: I,
    transitionDuration: $,
    TransitionProps: B
  }), L = fv(F), U = x.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const D = Io(c), he = D && D.nodeType === 1 ? D : it(K.current).body, k = he.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const X = he.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && X.top === 0 && X.left === 0 && X.right === 0 && X.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: k.top + Ja(k, u.vertical),
      left: k.left + Qa(k, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, p]), Y = x.useCallback((D) => ({
    vertical: Ja(D, h.vertical),
    horizontal: Qa(D, h.horizontal)
  }), [h.horizontal, h.vertical]), se = x.useCallback((D) => {
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
    let Te = X.top - k.vertical, le = X.left - k.horizontal;
    const ze = Te + he.height, We = le + he.width, $e = Ht(Io(c)), Ce = $e.innerHeight - f, Fe = $e.innerWidth - f;
    if (Te < f) {
      const we = Te - f;
      Te -= we, k.vertical += we;
    } else if (ze > Ce) {
      const we = ze - Ce;
      Te -= we, k.vertical += we;
    }
    if (process.env.NODE_ENV !== "production" && he.height > Ce && he.height && Ce && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${he.height - Ce}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), le < f) {
      const we = le - f;
      le -= we, k.horizontal += we;
    } else if (We > Fe) {
      const we = We - Fe;
      le -= we, k.horizontal += we;
    }
    return {
      top: `${Math.round(Te)}px`,
      left: `${Math.round(le)}px`,
      transformOrigin: Za(k)
    };
  }, [c, p, U, Y, f]), [ee, A] = x.useState(R), V = x.useCallback(() => {
    const D = K.current;
    if (!D)
      return;
    const he = se(D);
    he.top !== null && (D.style.top = he.top), he.left !== null && (D.style.left = he.left), D.style.transformOrigin = he.transformOrigin, A(!0);
  }, [se]), ne = (D, he) => {
    _ && _(D, he), V();
  }, Z = () => {
    A(!1);
  };
  x.useEffect(() => {
    R && V();
  }), x.useImperativeHandle(l, () => R ? {
    updatePosition: () => {
      V();
    }
  } : null, [R, V]), x.useEffect(() => {
    if (!R)
      return;
    const D = Zr(() => {
      V();
    }), he = Ht(c);
    return he.addEventListener("resize", D), () => {
      D.clear(), he.removeEventListener("resize", D);
    };
  }, [c, R, V]);
  let H = $;
  $ === "auto" && !I.muiSupportAuto && (H = void 0);
  const J = O || (c ? it(Io(c)).body : void 0), Q = (i = C == null ? void 0 : C.root) != null ? i : mv, G = (a = C == null ? void 0 : C.paper) != null ? a : Fl, oe = rn({
    elementType: G,
    externalSlotProps: T({}, N, {
      style: ee ? N.style : T({}, N.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: v,
      ref: W
    },
    ownerState: F,
    className: ve(L.paper, N == null ? void 0 : N.className)
  }), ie = rn({
    elementType: Q,
    externalSlotProps: (b == null ? void 0 : b.root) || {},
    externalForwardedProps: M,
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
    slotProps: de
  } = ie, ae = ge(ie, pv);
  return /* @__PURE__ */ g(Q, T({}, ae, !ao(Q) && {
    slotProps: de
  }, {
    children: /* @__PURE__ */ g(I, T({
      appear: !0,
      in: R,
      onEntering: ne,
      onExited: Z,
      timeout: H
    }, B, {
      children: /* @__PURE__ */ g(G, T({}, oe, {
        children: m
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
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
      const t = Io(e.anchorEl);
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
  elevation: ti,
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
    component: Qr
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
const hv = Ll;
function bv(e) {
  return Le("MuiMenu", e);
}
Be("MuiMenu", ["root", "paper", "list"]);
const gv = ["onEntering"], vv = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], yv = {
  vertical: "top",
  horizontal: "right"
}, xv = {
  vertical: "top",
  horizontal: "left"
}, Ev = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, bv, t);
}, Tv = me(hv, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ov = me(Fl, {
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
}), Cv = me(Yg, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Bl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var r, i;
  const a = Ue({
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
    slots: P = {},
    slotProps: C = {}
  } = a, b = ge(a.TransitionProps, gv), h = ge(a, vv), I = ln(), $ = I.direction === "rtl", _ = T({}, a, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: f,
    PaperProps: y,
    transitionDuration: v,
    TransitionProps: b,
    variant: R
  }), B = Ev(_), M = s && !u && m, N = x.useRef(null), K = (ee, A) => {
    N.current && N.current.adjustStyleForScrollbar(ee, I), f && f(ee, A);
  }, W = (ee) => {
    ee.key === "Tab" && (ee.preventDefault(), p && p(ee, "tabKeyDown"));
  };
  let F = -1;
  x.Children.map(l, (ee, A) => {
    /* @__PURE__ */ x.isValidElement(ee) && (process.env.NODE_ENV !== "production" && Si.isFragment(ee) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), ee.props.disabled || (R === "selectedMenu" && ee.props.selected || F === -1) && (F = A));
  });
  const L = (r = P.paper) != null ? r : Ov, U = (i = C.paper) != null ? i : y, Y = rn({
    elementType: P.root,
    externalSlotProps: C.root,
    ownerState: _,
    className: [B.root, c]
  }), se = rn({
    elementType: L,
    externalSlotProps: U,
    ownerState: _,
    className: B.paper
  });
  return /* @__PURE__ */ g(Tv, T({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: $ ? "right" : "left"
    },
    transformOrigin: $ ? yv : xv,
    slots: {
      paper: L,
      root: P.root
    },
    slotProps: {
      root: Y,
      paper: se
    },
    open: m,
    ref: o,
    transitionDuration: v,
    TransitionProps: T({
      onEntering: K
    }, b),
    ownerState: _
  }, h, {
    classes: O,
    children: /* @__PURE__ */ g(Cv, T({
      onKeyDown: W,
      actions: N,
      autoFocus: s && (F === -1 || u),
      autoFocusItem: M,
      variant: R
    }, d, {
      className: ve(B.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Bl.propTypes = {
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
const Rv = Bl;
function wv(e) {
  return Le("MuiNativeSelect", e);
}
const Sv = Be("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), $i = Sv, Pv = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], $v = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${fe(o)}`, a && "iconOpen", r && "disabled"]
  };
  return Ve(l, wv, t);
}, zl = ({
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
}), Iv = me("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Kt,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${$i.multiple}`]: t.multiple
    }];
  }
})(zl), Wl = ({
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
}), kv = me("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${fe(o.variant)}`], o.open && t.iconOpen];
  }
})(Wl), Vl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: i,
    error: a,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ge(t, Pv), d = T({}, t, {
    disabled: i,
    variant: c,
    error: a
  }), p = $v(d);
  return /* @__PURE__ */ pe(x.Fragment, {
    children: [/* @__PURE__ */ g(Iv, T({
      ownerState: d,
      className: ve(p.select, r),
      disabled: i,
      ref: l || o
    }, u)), t.multiple ? null : /* @__PURE__ */ g(kv, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Vl.propTypes = {
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
const Av = Vl;
function Mv(e) {
  return Le("MuiSelect", e);
}
const Nv = Be("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Vn = Nv;
var es;
const _v = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Dv = me("div", {
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
})(zl, {
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
}), jv = me("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${fe(o.variant)}`], o.open && t.iconOpen];
  }
})(Wl), Fv = me("input", {
  shouldForwardProp: (e) => Mp(e) && e !== "classes",
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
function Lv(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Bv = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${fe(o)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Ve(l, Mv, t);
}, Ul = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    multiple: P,
    name: C,
    onBlur: b,
    onChange: h,
    onClose: I,
    onFocus: $,
    onOpen: _,
    open: B,
    readOnly: M,
    renderValue: N,
    SelectDisplayProps: K = {},
    tabIndex: W,
    value: F,
    variant: L = "standard"
  } = t, U = ge(t, _v), [Y, se] = En({
    controlled: F,
    default: d,
    name: "Select"
  }), [ee, A] = En({
    controlled: B,
    default: u,
    name: "Select"
  }), V = x.useRef(null), ne = x.useRef(null), [Z, H] = x.useState(null), {
    current: J
  } = x.useRef(B != null), [Q, G] = x.useState(), oe = et(o, v), ie = x.useCallback((ue) => {
    ne.current = ue, ue && H(ue);
  }, []), de = Z == null ? void 0 : Z.parentNode;
  x.useImperativeHandle(oe, () => ({
    focus: () => {
      ne.current.focus();
    },
    node: V.current,
    value: Y
  }), [Y]), x.useEffect(() => {
    u && ee && Z && !J && (G(s ? null : de.clientWidth), ne.current.focus());
  }, [Z, s]), x.useEffect(() => {
    a && ne.current.focus();
  }, [a]), x.useEffect(() => {
    if (!f)
      return;
    const ue = it(ne.current).getElementById(f);
    if (ue) {
      const ye = () => {
        getSelection().isCollapsed && ne.current.focus();
      };
      return ue.addEventListener("click", ye), () => {
        ue.removeEventListener("click", ye);
      };
    }
  }, [f]);
  const ae = (ue, ye) => {
    ue ? _ && _(ye) : I && I(ye), J || (G(s ? null : de.clientWidth), A(ue));
  }, D = (ue) => {
    ue.button === 0 && (ue.preventDefault(), ne.current.focus(), ae(!0, ue));
  }, he = (ue) => {
    ae(!1, ue);
  }, k = x.Children.toArray(l), X = (ue) => {
    const ye = k.find((Pe) => Pe.props.value === ue.target.value);
    ye !== void 0 && (se(ye.props.value), h && h(ue, ye));
  }, Te = (ue) => (ye) => {
    let Pe;
    if (ye.currentTarget.hasAttribute("tabindex")) {
      if (P) {
        Pe = Array.isArray(Y) ? Y.slice() : [];
        const Je = Y.indexOf(ue.props.value);
        Je === -1 ? Pe.push(ue.props.value) : Pe.splice(Je, 1);
      } else
        Pe = ue.props.value;
      if (ue.props.onClick && ue.props.onClick(ye), Y !== Pe && (se(Pe), h)) {
        const Je = ye.nativeEvent || ye, zt = new Je.constructor(Je.type, Je);
        Object.defineProperty(zt, "target", {
          writable: !0,
          value: {
            value: Pe,
            name: C
          }
        }), h(zt, ue);
      }
      P || ae(!1, ye);
    }
  }, le = (ue) => {
    M || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ue.key) !== -1 && (ue.preventDefault(), ae(!0, ue));
  }, ze = Z !== null && ee, We = (ue) => {
    !ze && b && (Object.defineProperty(ue, "target", {
      writable: !0,
      value: {
        value: Y,
        name: C
      }
    }), b(ue));
  };
  delete U["aria-invalid"];
  let $e, Ce;
  const Fe = [];
  let we = !1, Ge = !1;
  (jo({
    value: Y
  }) || m) && (N ? $e = N(Y) : we = !0);
  const Xe = k.map((ue) => {
    if (!/* @__PURE__ */ x.isValidElement(ue))
      return null;
    process.env.NODE_ENV !== "production" && Si.isFragment(ue) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let ye;
    if (P) {
      if (!Array.isArray(Y))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : qt(2));
      ye = Y.some((Pe) => ts(Pe, ue.props.value)), ye && we && Fe.push(ue.props.children);
    } else
      ye = ts(Y, ue.props.value), ye && we && (Ce = ue.props.children);
    return ye && (Ge = !0), /* @__PURE__ */ x.cloneElement(ue, {
      "aria-selected": ye ? "true" : "false",
      onClick: Te(ue),
      onKeyUp: (Pe) => {
        Pe.key === " " && Pe.preventDefault(), ue.props.onKeyUp && ue.props.onKeyUp(Pe);
      },
      role: "option",
      selected: ye,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ue.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (!Ge && !P && Y !== "") {
      const ue = k.map((ye) => ye.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${Y}\` for the select ${C ? `(name="${C}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ue.filter((ye) => ye != null).map((ye) => `\`${ye}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ge, k, P, C, Y]), we && (P ? Fe.length === 0 ? $e = null : $e = Fe.reduce((ue, ye, Pe) => (ue.push(ye), Pe < Fe.length - 1 && ue.push(", "), ue), []) : $e = Ce);
  let Ze = Q;
  !s && J && Z && (Ze = de.clientWidth);
  let Se;
  typeof W < "u" ? Se = W : Se = p ? null : 0;
  const be = K.id || (C ? `mui-component-select-${C}` : void 0), ce = T({}, t, {
    variant: L,
    value: Y,
    open: ze,
    error: y
  }), tt = Bv(ce);
  return /* @__PURE__ */ pe(x.Fragment, {
    children: [/* @__PURE__ */ g(Dv, T({
      ref: ie,
      tabIndex: Se,
      role: "button",
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": ze ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [f, be].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: le,
      onMouseDown: p || M ? null : D,
      onBlur: We,
      onFocus: $
    }, K, {
      ownerState: ce,
      className: ve(K.className, tt.select, c),
      id: be,
      children: Lv($e) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        es || (es = /* @__PURE__ */ g("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : $e
    })), /* @__PURE__ */ g(Fv, T({
      "aria-invalid": y,
      value: Array.isArray(Y) ? Y.join(",") : Y,
      name: C,
      ref: V,
      "aria-hidden": !0,
      onChange: X,
      tabIndex: -1,
      disabled: p,
      className: tt.nativeInput,
      autoFocus: a,
      ownerState: ce
    }, U)), /* @__PURE__ */ g(jv, {
      as: O,
      className: tt.icon,
      ownerState: ce
    }), /* @__PURE__ */ g(Rv, T({
      id: `menu-${C || ""}`,
      anchorEl: de,
      open: ze,
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
      MenuListProps: T({
        "aria-labelledby": f,
        role: "listbox",
        disableListWrap: !0
      }, R.MenuListProps),
      PaperProps: T({}, R.PaperProps, {
        style: T({
          minWidth: Ze
        }, R.PaperProps != null ? R.PaperProps.style : null)
      }),
      children: Xe
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Ul.propTypes = {
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
const zv = Ul, Wv = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], Vv = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Ii = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Kt(e) && e !== "variant",
  slot: "Root"
}, Uv = me(Tl, Ii)(""), qv = me(Rl, Ii)(""), Hv = me(Ol, Ii)(""), ki = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = xl,
    id: p,
    input: m,
    inputProps: y,
    label: O,
    labelId: v,
    MenuProps: f,
    multiple: R = !1,
    native: P = !1,
    onClose: C,
    onOpen: b,
    open: h,
    renderValue: I,
    SelectDisplayProps: $,
    variant: _ = "outlined"
  } = r, B = ge(r, Wv), M = P ? Av : zv, N = In(), K = $n({
    props: r,
    muiFormControl: N,
    states: ["variant", "error"]
  }), W = K.variant || _, F = T({}, r, {
    variant: W,
    classes: s
  }), L = Vv(F), U = m || {
    standard: /* @__PURE__ */ g(Uv, {
      ownerState: F
    }),
    outlined: /* @__PURE__ */ g(qv, {
      label: O,
      ownerState: F
    }),
    filled: /* @__PURE__ */ g(Hv, {
      ownerState: F
    })
  }[W], Y = et(o, U.ref);
  return /* @__PURE__ */ g(x.Fragment, {
    children: /* @__PURE__ */ x.cloneElement(U, T({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: M,
      inputProps: T({
        children: a,
        error: K.error,
        IconComponent: d,
        variant: W,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: R
      }, P ? {
        id: p
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: v,
        MenuProps: f,
        onClose: C,
        onOpen: b,
        open: h,
        renderValue: I,
        SelectDisplayProps: T({
          id: p
        }, $)
      }, y, {
        classes: y ? xt(L, y.classes) : L
      }, m ? m.props.inputProps : {})
    }, R && P && W === "outlined" ? {
      notched: !0
    } : {}, {
      ref: Y,
      className: ve(U.props.className, l)
    }, !m && {
      variant: W
    }, B))
  });
});
process.env.NODE_ENV !== "production" && (ki.propTypes = {
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
ki.muiName = "Select";
const Yv = ki;
function Kv(e) {
  return Le("MuiTextField", e);
}
Be("MuiTextField", ["root"]);
const Gv = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], Xv = {
  standard: Tl,
  filled: Ol,
  outlined: Rl
}, Jv = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"]
  }, Kv, t);
}, Qv = me(kg, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ql = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
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
    InputProps: P,
    inputRef: C,
    label: b,
    maxRows: h,
    minRows: I,
    multiline: $ = !1,
    name: _,
    onBlur: B,
    onChange: M,
    onClick: N,
    onFocus: K,
    placeholder: W,
    required: F = !1,
    rows: L,
    select: U = !1,
    SelectProps: Y,
    type: se,
    value: ee,
    variant: A = "outlined"
  } = r, V = ge(r, Gv), ne = T({}, r, {
    autoFocus: a,
    color: c,
    disabled: d,
    error: p,
    fullWidth: y,
    multiline: $,
    required: F,
    select: U,
    variant: A
  }), Z = Jv(ne);
  process.env.NODE_ENV !== "production" && U && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const H = {};
  A === "outlined" && (f && typeof f.shrink < "u" && (H.notched = f.shrink), H.label = b), U && ((!Y || !Y.native) && (H.id = void 0), H["aria-describedby"] = void 0);
  const J = ei(v), Q = O && J ? `${J}-helper-text` : void 0, G = b && J ? `${J}-label` : void 0, oe = Xv[A], ie = /* @__PURE__ */ g(oe, T({
    "aria-describedby": Q,
    autoComplete: i,
    autoFocus: a,
    defaultValue: u,
    fullWidth: y,
    multiline: $,
    name: _,
    rows: L,
    maxRows: h,
    minRows: I,
    type: se,
    value: ee,
    id: J,
    inputRef: C,
    onBlur: B,
    onChange: M,
    onFocus: K,
    onClick: N,
    placeholder: W,
    inputProps: R
  }, H, P));
  return /* @__PURE__ */ pe(Qv, T({
    className: ve(Z.root, l),
    disabled: d,
    error: p,
    fullWidth: y,
    ref: o,
    required: F,
    color: c,
    variant: A,
    ownerState: ne
  }, V, {
    children: [b != null && b !== "" && /* @__PURE__ */ g(wg, T({
      htmlFor: J,
      id: G
    }, f, {
      children: b
    })), U ? /* @__PURE__ */ g(Yv, T({
      "aria-describedby": Q,
      id: J,
      labelId: G,
      value: ee,
      input: ie
    }, Y, {
      children: s
    })) : ie, O && /* @__PURE__ */ g(jg, T({
      id: Q
    }, m, {
      children: O
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (ql.propTypes = {
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
const Zv = ql, ey = il(), ty = (e) => {
  const {
    options: t = [],
    labelText: o,
    name: r,
    multiple: i = !1,
    required: a,
    onCreateNew: s,
    renderLabel: l,
    fetchFunction: c
  } = e, { control: u } = fo(), [d, p] = ct(t), [m, y] = ct(""), { isLoading: O, refetch: v } = ms(["options"], {
    queryFn: () => c({
      filter: {
        query: m
      }
    }),
    enabled: !1
  });
  Cn(() => {
    const b = setTimeout(() => {
      if (m) {
        v().then(({ data: h }) => {
          p(h.data);
        });
        return;
      }
      p([]);
    }, 500);
    return () => clearTimeout(b);
  }, [m, v]);
  const f = (b, h, I) => {
    h && h.inputValue ? s && s(h.inputValue) : (b.target.value = (h == null ? void 0 : h.id) ?? null, I(b));
  }, R = (b) => typeof b == "string" ? b : b.inputValue ? b.inputValue : l ? l(b) : b.name, P = (b, h) => /* @__PURE__ */ g("li", { ...b, children: l ? l(h) : h.name }), C = (b, h) => {
    const I = ey(b, h), $ = String(h.inputValue).trim(), _ = I.length === 0;
    return s && $ !== "" && (_ || !b.find((B) => B.name === $)) && I.push({
      inputValue: $,
      name: `Agregar "${$}"`
    }), I;
  };
  return /* @__PURE__ */ g(po, { fullWidth: !0, children: /* @__PURE__ */ g(
    mo,
    {
      control: u,
      name: r,
      render: ({ field: { ref: b, onChange: h, value: I, ...$ } }) => /* @__PURE__ */ g(
        Qb,
        {
          multiple: i,
          value: d.find((_) => _.id === Number(I)) ? d.find((_) => _.id === Number(I)).name : "",
          onChange: (_, B) => f(_, B, h),
          onKeyDown: (_) => y(_.target.value),
          filterOptions: C,
          options: d,
          selectOnFocus: !0,
          clearOnBlur: !0,
          handleHomeEndKeys: !0,
          getOptionLabel: R,
          renderOption: P,
          freeSolo: !0,
          renderInput: (_) => /* @__PURE__ */ g(
            Zv,
            {
              ..._,
              ...$,
              inputRef: b,
              required: a,
              name: r,
              label: o,
              InputProps: {
                ..._.InputProps,
                endAdornment: /* @__PURE__ */ pe(Xr, { children: [
                  O ? /* @__PURE__ */ g(rs, { color: "inherit", size: 20 }) : null,
                  _.InputProps.endAdornment
                ] })
              }
            }
          )
        }
      )
    }
  ) });
};
ty.propTypes = {
  control: n.any,
  options: n.array,
  labelText: n.string,
  name: n.string,
  multiple: n.bool,
  required: n.bool,
  onCreateNew: n.func,
  renderLabel: n.func,
  fetchFunction: n.func
};
const en = Uc.create({
  baseURL: "/api"
});
en.interceptors.request.use((e) => (e.headers.Authorization = `Bearer ${localStorage.getItem("app-token")}`, e));
en.interceptors.response.use(
  (e) => e,
  (e) => {
    if (e.response.status === 401) {
      window.location = "/login";
      return;
    }
    throw e;
  }
);
class ny {
  login(t) {
    return en.post("/login", t);
  }
  me() {
    return en.get("/me");
  }
  async logout() {
    return await en.delete("/logout");
  }
  async resetPasswordEmail(t) {
    return await en.post("/recover-password", t);
  }
  async resetPassword(t) {
    return await en.post("/reset-password", t);
  }
}
const Er = new ny(), Hl = rc({}), oy = ({ children: e }) => {
  const [t, o] = ct(null), [r, i] = ct(!1), a = localStorage.getItem("app-token"), s = zc();
  Cn(() => {
    a && (t || (i(!0), u().finally(() => i(!1))));
  }, [a, t]);
  const l = (d) => Er.login(d).then((p) => {
    localStorage.setItem("app-token", p.data.token), o(p.data.user);
  }), c = () => Er.logout().then(() => {
    o(null), localStorage.removeItem("app-token"), s.clear();
  }), u = async () => Er.me().then((d) => {
    o(d.data.user);
  }).catch(() => {
    o(null), localStorage.removeItem("app-token");
  });
  return /* @__PURE__ */ g(
    Hl.Provider,
    {
      value: {
        user: t,
        login: l,
        logout: c,
        me: u
      },
      children: r ? /* @__PURE__ */ g(sn, {}) : e
    }
  );
};
oy.propTypes = {
  children: n.node.isRequired
};
const kn = () => ic(Hl), Ai = (e, t) => {
  if (!e)
    return !1;
  const o = e.permissions;
  for (let r in t)
    if (!o[r] || o[r] === !1)
      return !1;
  return !0;
}, ry = ({ has: e, ...t }) => {
  const { user: o } = kn();
  return Ai(o, e) ? /* @__PURE__ */ g(gc, { ...t }) : null;
};
ry.propTypes = {
  has: n.object
};
function Zy() {
  const [e, t] = hs();
  return {
    tab: Number(e.get("tab")) || 1,
    onChangeTab: (i, a) => {
      t({ tab: a });
    }
  };
}
const Yl = /* @__PURE__ */ x.createContext();
process.env.NODE_ENV !== "production" && (Yl.displayName = "GridContext");
const ns = Yl;
function iy(e) {
  return Le("MuiGrid", e);
}
const ay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sy = ["column-reverse", "column", "row-reverse", "row"], ly = ["nowrap", "wrap-reverse", "wrap"], Un = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], uo = Be("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...ay.map((e) => `spacing-xs-${e}`),
  // direction values
  ...sy.map((e) => `direction-xs-${e}`),
  // wrap values
  ...ly.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Un.map((e) => `grid-xs-${e}`),
  ...Un.map((e) => `grid-sm-${e}`),
  ...Un.map((e) => `grid-md-${e}`),
  ...Un.map((e) => `grid-lg-${e}`),
  ...Un.map((e) => `grid-xl-${e}`)
]), cy = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function On(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function uy({
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
      const s = Wo({
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
      a = T({
        flexBasis: c,
        flexGrow: 0,
        maxWidth: c
      }, u);
    }
    return e.breakpoints.values[i] === 0 ? Object.assign(r, a) : r[e.breakpoints.up(i)] = a, r;
  }, {});
}
function dy({
  theme: e,
  ownerState: t
}) {
  const o = Wo({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return Tt({
    theme: e
  }, o, (r) => {
    const i = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (i[`& > .${uo.item}`] = {
      maxWidth: "none"
    }), i;
  });
}
function Kl({
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
function py({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    rowSpacing: r
  } = t;
  let i = {};
  if (o && r !== 0) {
    const a = Wo({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let s;
    typeof a == "object" && (s = Kl({
      breakpoints: e.breakpoints.values,
      values: a
    })), i = Tt({
      theme: e
    }, a, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        marginTop: `-${On(d)}`,
        [`& > .${uo.item}`]: {
          paddingTop: On(d)
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
function fy({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    columnSpacing: r
  } = t;
  let i = {};
  if (o && r !== 0) {
    const a = Wo({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let s;
    typeof a == "object" && (s = Kl({
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
        [`& > .${uo.item}`]: {
          paddingLeft: On(d)
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
function my(e, t, o = {}) {
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
const hy = me("div", {
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
    r && (d = my(s, u, t));
    const p = [];
    return u.forEach((m) => {
      const y = o[m];
      y && p.push(t[`grid-${m}-${String(y)}`]);
    }), [t.root, r && t.container, a && t.item, c && t.zeroMinWidth, ...d, i !== "row" && t[`direction-xs-${String(i)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...p];
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
}), dy, py, fy, uy);
function by(e, t) {
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
const gy = (e) => {
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
  o && (u = by(a, c));
  const d = [];
  c.forEach((m) => {
    const y = e[m];
    y && d.push(`grid-${m}-${String(y)}`);
  });
  const p = {
    root: ["root", o && "container", i && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, s !== "wrap" && `wrap-xs-${String(s)}`, ...d]
  };
  return Ve(p, iy, t);
}, Zn = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ue({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: i
  } = ln(), a = Nd(r), {
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
  } = a, R = ge(a, cy), P = y || O, C = c || O, b = x.useContext(ns), h = d ? l || 12 : b, I = {}, $ = T({}, R);
  i.keys.forEach((M) => {
    R[M] != null && (I[M] = R[M], delete $[M]);
  });
  const _ = T({}, a, {
    columns: h,
    container: d,
    direction: p,
    item: m,
    rowSpacing: P,
    columnSpacing: C,
    wrap: v,
    zeroMinWidth: f,
    spacing: O
  }, I, {
    breakpoints: i.keys
  }), B = gy(_);
  return /* @__PURE__ */ g(ns.Provider, {
    value: h,
    children: /* @__PURE__ */ g(hy, T({
      ownerState: _,
      className: ve(B.root, s),
      as: u,
      ref: o
    }, $))
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
  const e = ws("Grid", Zn);
  Zn["propTypes"] = T({}, Zn.propTypes, {
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
const Tr = Zn, vy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAABBCAYAAABLqZGRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYtSURBVHgB7Zzxdds2EMa/9PX/egRsEG9geIJ4gzAT1J3AygR2JzA7gd0JpEzgZAIhE8QbuLqQbGSZAHEkIYLU93vvnmwIPEI4HHAACAKEEEIIIYQQQgghhBBCCCGE6HmHZXFWi9n7+xC39+lAcsXgtS0PcXufDhlS7uRloPzYyXYn653c7qRAVSEpkEq+3slDfc8+5d0vq/Hcx0bouYeeAvHltAE9LyNIUw9Sl6udXKG9EadA7lOgqsMt+re7da3jChlQYhzDtIn80ALjYGt9Y5fxKnC/mOvvoaNQlM0G9LwklHVdzhSOJTpvUDnCmGW+QwaUSGsYkSf0H6mk8m8Tlu3cc1+r0HGPeAqFXhvQ83IE2aJq+GPxJ8Z3okaukQEljmMYqcRz6BBHekpcLuO5t1XqWSOuJy8UOm1Az8sRZYvhYfsN0paxwAT8hmmQhraGzqEeoHdALc8YB4t4h5obBlWn1tcW4kgrpGUsO6qYypkEaWgPiGtwYgCL9IxpBGlsS3WoPp0h6vwrpOfknEkw6I5vJc8K82TpDhXbGTY8YMFM7UyCTERDBrnBvFmyQxnEL7gUSLdFkgW/oz+bljRpMH0WFgr4lzMtdGx28m0nX+v/P2D6fYfGoS4xUQiSEKlbi/b2sM8H6HA7+bf+lDozyLxjHeJMl550cQ6p4FvE98bvPekW8b2Z28knvDWqQR6beDk41Bf4Q2Yp3wX61ZVcswl837SJWP7C287VYmZRSon45ccuzhW6th4ddwodFul+k1Xo6BJZCWs6mWKE3weFjnt0Y6DfIvmBcMd5pdC1GkGHxQSknDNJmPUYmddniPeIY4PuMCMXcp9DOVRO/rfimq7w3iKeEv57ZE3qBYgvkfl8FWUx7n1yYQ6LEivowtGQM2k6RYeZktqZhswNNAsZXzE/5PfdIl/EdprRKeQwsbb8hhmT2plMZL7nAdcKDiQFsWG6YDzpvqMwbTjMmNTOdBGZz7WkLX1kmgNOkdfnMCdjx5TOZBA/52mrxNg4OzcDfMZyRkpNmE5nQjpuFHnbFhAM4viOvHCo9pIcTgvnSTeI4xnH238Tx7doP6fVfKcmhTM1Z44KxTWblrTYHi3H3sxhGQ41xmpjbhHGR/w6VSz7boft7Ak9D7IOeQKiOPhfKl4q7go6I5R42+g0oYE8phKam2l0jYlD5VBiGIN5oqk7N1CHQVVXoe+HYlA9CCAjoDxlsYE+lJWBQiKp8vDLIc4Us5sew+eWNIN4pnKWGBzm7VBWkbct3Nas5BmkryOLqjziSKUnz2Wdp22kbJ4jRdv1Uz81XmL4Sl7uOMw35PuoyNvW+HKzo6k/XSCPfNcr5JzSmRzaRyUhdkl9LjjMz6EK6EaKTUtaLs4kI4rZyR/1/2ZPzjx5DzF76WcdOn5SYpyHObtki7ChUr/rwSc+rEJHEdBj0P9VVjagN1bHPeIwynKuPXo0DyqPKfagHCvE26us081BeqfNh8yZ+uIQ7qW7HpqcMw75z6GaE7RGcc0/nvTYlbzUPKKq++Zs2/5e4CZOxc/jPb4FiE3bBZIhZY9xh+4JqU1chpCMUaYC3RjoRygb0Ber4x5hLPqNnMajL9WrvPrW1QrddVkGfpNBoB6PMTLJ0qP0XOJILiL/GHsbueMwzQjVtiFpUI0g5+i3WVnCv4h0Crb8n7GdqdnFltUQWSp9rP/WrOVbRd4yIo9FniGVQxVudI0WY3KFcU8dO/gXkTSOJO2kq40YTHToL5YhzvQOadDsmH+KyFdi4S/ymJD9ucchmnmv2LHLmQpk7kw5vJ3okFgjfAeZEnGkMvD9BeJoopnZk5szaXbMj/UsF3mLHBpcdeQxiGMxdszNmXiGKX9kRLqOyHcSp2v3mWKfKcQYD1aSNEgoJnObx4i8J2nH3JzJKPJyZDoOzbsg7hA/tzGIZzF2zM2Z5nq6dolsUO30a5yoYanhukNVF7K9IB3Mq7LPNczjSt54uPqz2RuUzw2GhV+xneIcV/JkziiPFD3tpUn4W6baKyIkR2wtJfydhYw60qmHRmSD14dgm4cTCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQvvwH3JUyEJ4OZkcAAAAASUVORK5CYII=", yy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAYCAYAAAAs7gcTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgBjZM9S8RAEIZ3dmOpXiV2BmwtBEs9TCs2B55gpf4Er1Cw0k70BMU/oKWgYPwFriA2FsbC6pqAoOI1ObkD0WzGnVyy7H34MRDYyTxM3pl3A6wrFoq7JY5iRTiicioroV3jdrJY3FsF5BECNpRSV0vegdsXLk9X14RQ8vxmXVKOiG4cx/cLxf2SgUveQYFAZyD2T+VmqN+5g6Pvs1m9AIgX5ZnqFiWOE8dr8UDr8FxuRzqf1M/F7Py4OzYyxU6OJGs1P4jbLk/vNjgAD/026OnnijpT1ZubYNXjZaMXOERas8pzklCwB3p7aZgzzcMRIdSavAyObDis1fNjQPPwdHpMtVJc2vDdTa0tASAwqwPO846yX+cka2L2TCu04cf7p3wTTAkhDfwluC+U8jLdYZde6ctKZGBKIEE3K17bevU8Zo6Ou2HrzjtrB2UvDCxY8nZcgnO9egvh2e1G0APHjhMoJTxqWn/+DFMFSfJgf9LApBsTSB1svg6luoEzvy/cLmKHg2Txj7C+JkFmPUWQXdn+cDpMZj0yvGZd0bO63Hpg4P8JpyDCcP57/QqT9VpCgf03rCE74hsC1ceDqXwTjQAAAABJRU5ErkJggg==", xy = ({ sx: e }) => /* @__PURE__ */ pe(He, { direction: "column", alignItems: "center", sx: { ...e }, children: [
  /* @__PURE__ */ g("img", { src: vy, alt: "Logo Panda", style: { marginBottom: "-16px" } }),
  /* @__PURE__ */ g(
    ut,
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
        vc,
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
            /* @__PURE__ */ g(
              "img",
              {
                src: yy,
                alt: "Logo de Crystal Desarrollo",
                style: { marginLeft: "8px" }
              }
            )
          ]
        }
      )
    }
  )
] }), Ey = (e) => as({
  ...e,
  palette: {
    ...e.palette,
    primary: {
      main: "#6D4F8C"
    }
  }
});
function e0() {
  return /* @__PURE__ */ g(qr, { theme: Ey, children: /* @__PURE__ */ pe(Tr, { container: !0, height: "100dvh", sx: {}, children: [
    /* @__PURE__ */ g(
      Tr,
      {
        item: !0,
        xs: 8,
        sx: { overflow: "hidden", display: { xs: "none", lg: "flex" } },
        children: /* @__PURE__ */ g(
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
      Tr,
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
          /* @__PURE__ */ g(He, { display: { xs: "flex", lg: "none" }, children: /* @__PURE__ */ g(
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
          /* @__PURE__ */ g(
            Ur,
            {
              elevation: 0,
              sx: { width: "100%", maxWidth: "400px", p: 4, borderRadius: 2 },
              children: /* @__PURE__ */ g(Yr, {})
            }
          ),
          /* @__PURE__ */ g(xy, { sx: { position: "absolute", bottom: "0" } })
        ]
      }
    )
  ] }) });
}
const Hn = ({ icon: e, text: t, url: o, onClick: r }) => /* @__PURE__ */ g(
  Sr,
  {
    onClick: r,
    to: o ?? "",
    style: {
      textDecoration: "none",
      color: "rgb(0 0 0 / 80%)"
    },
    children: /* @__PURE__ */ pe(yc, { children: [
      /* @__PURE__ */ g(xc, { children: e }),
      /* @__PURE__ */ g(Ec, { primary: t })
    ] })
  }
);
Hn.propTypes = {
  icon: n.node.isRequired,
  text: n.string.isRequired,
  url: n.string,
  onClick: n.func
};
const Gl = ({ onToggleDrawer: e, open: t }) => {
  const o = Kr(), r = Tc((i) => i.breakpoints.down("md"));
  return Cn(() => {
    t && r && e(!1);
  }, [o]), r ? /* @__PURE__ */ pe(Jl, { open: t, onToggleDrawer: e, children: [
    /* @__PURE__ */ g(oo, {}),
    /* @__PURE__ */ g(Vr, {})
  ] }) : /* @__PURE__ */ pe(Xl, { variant: "permanent", open: t, children: [
    /* @__PURE__ */ g(oo, {}),
    /* @__PURE__ */ g(Vr, {})
  ] });
};
Gl.propTypes = {
  onToggleDrawer: n.func.isRequired,
  open: n.bool.isRequired
};
const Xl = me(ds, {
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
Xl.propTypes = {
  open: n.bool.isRequired
};
const Jl = ({ onToggleDrawer: e, open: t }) => /* @__PURE__ */ pe(
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
      /* @__PURE__ */ g(oo, {}),
      /* @__PURE__ */ g(Vr, {})
    ]
  }
), Vr = () => {
  var t;
  const { user: e } = kn();
  return /* @__PURE__ */ pe(
    Oc,
    {
      component: "nav",
      sx: { height: "100%", display: "flex", flexDirection: "column" },
      children: [
        /* @__PURE__ */ g(
          Hn,
          {
            text: "Inicio",
            icon: /* @__PURE__ */ g(Ac, {}),
            url: "",
            permissionsRequired: {
              "nav.dashboard": !0
            }
          }
        ),
        /* @__PURE__ */ g(
          Hn,
          {
            text: "Clientes",
            icon: /* @__PURE__ */ g(Mc, {}),
            url: "/customers",
            permissionsRequired: {
              "nav.customers": !0
            }
          }
        ),
        /* @__PURE__ */ g(
          Hn,
          {
            text: "Contabilidad",
            icon: /* @__PURE__ */ g(Nc, {}),
            url: "/cash-flow",
            permissionsRequired: {
              "nav.cash_flow": !0
            }
          }
        ),
        /* @__PURE__ */ g(Lo, { sx: { my: 2 } }),
        /* @__PURE__ */ g(He, { direction: "column", children: /* @__PURE__ */ g(
          Hn,
          {
            text: "Configuración",
            icon: /* @__PURE__ */ g(_c, {}),
            url: "/settings",
            permissionsRequired: {
              "nav.settings": !0
            }
          }
        ) }),
        /* @__PURE__ */ pe(
          He,
          {
            display: { sm: "none", xs: "flex" },
            direction: "column",
            alignItems: "start",
            p: 1,
            mt: "auto",
            children: [
              /* @__PURE__ */ pe(
                He,
                {
                  width: "100%",
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1,
                  sx: { overflow: "hidden" },
                  children: [
                    /* @__PURE__ */ pe(He, { direction: "row", alignItems: "center", children: [
                      /* @__PURE__ */ g(Ao, { name: e == null ? void 0 : e.name, size: 50, sx: { mr: 2 } }),
                      /* @__PURE__ */ pe(He, { direction: "column", children: [
                        /* @__PURE__ */ g(ut, { fontSize: 16, fontWeight: "bold", children: e == null ? void 0 : e.name }),
                        /* @__PURE__ */ g(ut, { fontSize: 14, children: (t = e == null ? void 0 : e.email) == null ? void 0 : t.toLowerCase() })
                      ] })
                    ] }),
                    /* @__PURE__ */ pe(He, { direction: "row", alignItems: "center", children: [
                      /* @__PURE__ */ g(eo, { color: "primary", children: /* @__PURE__ */ g(Dc, {}) }),
                      /* @__PURE__ */ g(eo, { color: "primary", children: /* @__PURE__ */ g(fs, {}) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ pe(
                He,
                {
                  px: "25%",
                  width: "100%",
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  children: [
                    /* @__PURE__ */ g(Sr, { to: "/profile", children: "Mi perfil" }),
                    /* @__PURE__ */ g(Sr, { to: "/configuración", children: "Configuración" })
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
Jl.propTypes = {
  onToggleDrawer: n.func.isRequired,
  open: n.bool.isRequired
};
var Mi = {}, Ql = { exports: {} };
(function(e) {
  function t(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ql);
var Ni = Ql.exports, Or = {};
const Ty = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Ms.configure(e);
  }
}, Oy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: fe,
  createChainedFunction: kr,
  createSvgIcon: or,
  debounce: Zr,
  deprecatedPropType: mu,
  isMuiElement: Po,
  ownerDocument: it,
  ownerWindow: Ht,
  requirePropFactory: ws,
  setRef: ro,
  unstable_ClassNameGenerator: Ty,
  unstable_useEnhancedEffect: Ft,
  unstable_useId: ei,
  unsupportedProp: Ss,
  useControlled: En,
  useEventCallback: Pt,
  useForkRef: et,
  useIsFocusVisible: Ps
}, Symbol.toStringTag, { value: "Module" })), Cy = /* @__PURE__ */ vs(Oy);
var os;
function _i() {
  return os || (os = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Cy;
  }(Or)), Or;
}
const Di = /* @__PURE__ */ vs(Kc);
var Ry = Ni;
Object.defineProperty(Mi, "__esModule", {
  value: !0
});
var Zl = Mi.default = void 0, wy = Ry(_i()), Sy = Di, Py = (0, wy.default)(/* @__PURE__ */ (0, Sy.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
Zl = Mi.default = Py;
var ji = {}, $y = Ni;
Object.defineProperty(ji, "__esModule", {
  value: !0
});
var ec = ji.default = void 0, Iy = $y(_i()), ky = Di, Ay = (0, Iy.default)(/* @__PURE__ */ (0, ky.jsx)("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
}), "Settings");
ec = ji.default = Ay;
var Fi = {}, My = Ni;
Object.defineProperty(Fi, "__esModule", {
  value: !0
});
var tc = Fi.default = void 0, Ny = My(_i()), _y = Di, Dy = (0, Ny.default)(/* @__PURE__ */ (0, _y.jsx)("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
}), "Notifications");
tc = Fi.default = Dy;
const jy = me(Cc, {
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
})), Cr = ({ Icon: e, text: t, onClick: o }) => /* @__PURE__ */ pe(
  Sc,
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
      /* @__PURE__ */ g(e, { fontSize: "small", sx: { mr: 1 }, color: "primary" }),
      t
    ]
  }
), Fy = ({ onToggleDrawer: e, open: t }) => {
  const { user: o, logout: r } = kn(), i = Wc(), a = Bi(), s = Bi(), [l, c] = ct(!1), [u, d] = ct(!1);
  Cn(() => {
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
  return /* @__PURE__ */ pe(Xr, { children: [
    /* @__PURE__ */ g(
      Vs,
      {
        open: u,
        title: "Cerrar sesión",
        onCancel: () => d(!1),
        onConfirm: r,
        description: "¿Está seguro que desea cerrar sesión?"
      }
    ),
    /* @__PURE__ */ g(
      Rc,
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
          return /* @__PURE__ */ g(
            wc,
            {
              ...O,
              style: {
                transformOrigin: "right top",
                position: "absolute",
                right: -100,
                top: 5,
                minWidth: 250
              },
              children: /* @__PURE__ */ g(
                He,
                {
                  direction: "column",
                  alignItems: "flex-start",
                  gap: 2,
                  mt: 1,
                  width: "100%",
                  children: /* @__PURE__ */ pe(Ur, { sx: { width: "100%" }, children: [
                    /* @__PURE__ */ pe(
                      He,
                      {
                        direction: "row",
                        alignItems: "center",
                        p: 1,
                        sx: { maxWidth: "95%", overflow: "hidden" },
                        children: [
                          /* @__PURE__ */ g(Ao, { size: 30, sx: { mr: 1 } }),
                          /* @__PURE__ */ pe(He, { direction: "column", children: [
                            /* @__PURE__ */ g(ut, { fontSize: 14, fontWeight: "bold", children: o == null ? void 0 : o.name }),
                            /* @__PURE__ */ g(ut, { fontSize: 12, children: (v = o == null ? void 0 : o.email) == null ? void 0 : v.toLowerCase() })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ pe(He, { direction: "column", justifyContent: "flex-start", children: [
                      /* @__PURE__ */ g(
                        Cr,
                        {
                          Icon: Zl,
                          text: "Mi perfil",
                          onClick: m
                        }
                      ),
                      /* @__PURE__ */ g(
                        Cr,
                        {
                          Icon: ec,
                          text: "Configuración",
                          onClick: y
                        }
                      )
                    ] }),
                    /* @__PURE__ */ g(Lo, { light: !0 }),
                    /* @__PURE__ */ g(He, { direction: "row", justifyContent: "flex-start", children: /* @__PURE__ */ g(
                      Cr,
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
    /* @__PURE__ */ g(jy, { position: "absolute", open: t, children: /* @__PURE__ */ pe(oo, { sx: { position: "relative" }, children: [
      /* @__PURE__ */ g(
        eo,
        {
          edge: "start",
          color: "inherit",
          "aria-label": "Abrir menu",
          onClick: e,
          sx: { mr: 1 },
          children: /* @__PURE__ */ g(jc, {})
        }
      ),
      window.tenant_data.logo_horizontal ? /* @__PURE__ */ g(
        "img",
        {
          src: window.tenant_data.logo_horizontal,
          alt: "Logo",
          style: { maxWidth: 200, maxHeight: 52 }
        }
      ) : /* @__PURE__ */ g(ut, { children: window.tenant_data.name }),
      /* @__PURE__ */ pe(
        He,
        {
          display: { xs: "none", sm: "flex" },
          direction: "row",
          alignItems: "center",
          ml: "auto",
          ref: a,
          children: [
            /* @__PURE__ */ g(eo, { sx: { mr: 1, color: "#fff" }, children: /* @__PURE__ */ g(tc, {}) }),
            /* @__PURE__ */ g(
              Ao,
              {
                name: o == null ? void 0 : o.name,
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
function t0() {
  const [e, t] = ct(!1), o = () => {
    t(!e);
  };
  return /* @__PURE__ */ pe(Rr, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ g(Fy, { open: e, onToggleDrawer: o }),
    /* @__PURE__ */ g(Gl, { open: e, onToggleDrawer: o }),
    /* @__PURE__ */ pe(
      Rr,
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
          /* @__PURE__ */ g(oo, {}),
          /* @__PURE__ */ g(
            Pc,
            {
              maxWidth: "lg",
              sx: {
                mt: 4,
                mb: 4,
                height: "calc(100vh - 64px)"
              },
              children: /* @__PURE__ */ g(ac, { fallback: /* @__PURE__ */ g(sn, {}), children: /* @__PURE__ */ g(Yr, {}) })
            }
          )
        ]
      }
    )
  ] });
}
const n0 = () => {
  var r;
  const { user: e } = kn(), o = ((r = Kr().state) == null ? void 0 : r.path) || "";
  return e ? /* @__PURE__ */ g(bs, { to: o }) : /* @__PURE__ */ g(Yr, {});
}, Ly = ({ children: e, fallback: t, has: o = {} }) => {
  const { user: r } = kn();
  return Ai(r, o) ? e : t;
};
Ly.propTypes = {
  children: n.node.isRequired,
  fallback: n.node,
  has: n.object
};
const By = ({ has: e, element: t }) => {
  const { user: o } = kn(), r = Kr();
  return o ? Ai(o, e) ? t : "No tiene permiso" : /* @__PURE__ */ g(
    bs,
    {
      to: "/login",
      state: {
        path: r.pathname
      }
    }
  );
};
By.propTypes = {
  element: n.node.isRequired,
  has: n.object
};
const o0 = (e, t) => {
  var i;
  const o = (i = e.response) == null ? void 0 : i.data;
  return o ? typeof o == "string" ? o : (o.errors ? Object.values(o.errors)[0][0] : o.message ?? null) || t || "Lo sentimos, ha ocurrido un error." : e;
};
export {
  ty as AsyncAutocomplete,
  Hl as AuthContext,
  oy as AuthProvider,
  t0 as AuthenticatedLayout,
  Ao as Avatar,
  _f as BackendTableContent,
  Ws as Box,
  Nf as Checkbox,
  Vs as ConfirmDialog,
  Mf as DateTime,
  Lp as ErrorDialog,
  e0 as GuestLayout,
  n0 as GuestMiddleware,
  sn as Loader,
  li as Modal,
  Bp as Money,
  zp as PageHeader,
  Ly as Permission,
  ry as PermissionTab,
  By as PrivateRoute,
  Us as Select,
  jp as Switch,
  Dp as TabPanel,
  Up as TableContent,
  ci as TableHeader,
  Fp as TextField,
  Vp as genericDescendingComparator,
  Ai as hasPermissions,
  o0 as parseBackendErrors,
  gt as sortOrderEnum,
  qs as theme,
  kn as useAuth,
  Zy as useTabs
};
