import ir from "react";
import { Avatar as jr } from "@mui/material";
function Ar(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var $e = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Ir() {
  if (He)
    return be;
  He = 1;
  var u = ir, D = Symbol.for("react.element"), w = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, C = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(d, b, S) {
    var f, E = {}, $ = null, F = null;
    S !== void 0 && ($ = "" + S), b.key !== void 0 && ($ = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (f in b)
      c.call(b, f) && !l.hasOwnProperty(f) && (E[f] = b[f]);
    if (d && d.defaultProps)
      for (f in b = d.defaultProps, b)
        E[f] === void 0 && (E[f] = b[f]);
    return { $$typeof: D, type: d, key: $, ref: F, props: E, _owner: C.current };
  }
  return be.Fragment = w, be.jsx = x, be.jsxs = x, be;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function $r() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var u = ir, D = Symbol.for("react.element"), w = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), d = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        N("error", e, n);
      }
    }
    function N(e, r, n) {
      {
        var s = U.ReactDebugCurrentFrame, j = s.getStackAddendum();
        j !== "" && (r += "%s", n = n.concat([j]));
        var k = n.map(function(O) {
          return String(O);
        });
        k.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var L = !1, o = !1, ee = !1, de = !1, ve = !1, oe;
    oe = Symbol.for("react.module.reference");
    function pe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === l || ve || e === C || e === S || e === f || de || e === F || L || o || ee || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === E || e.$$typeof === x || e.$$typeof === d || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function ie(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var j = r.displayName || r.name || "";
      return j !== "" ? n + "(" + j + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function H(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case w:
          return "Portal";
        case l:
          return "Profiler";
        case C:
          return "StrictMode";
        case S:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return ue(r) + ".Consumer";
          case x:
            var n = e;
            return ue(n._context) + ".Provider";
          case b:
            return ie(e, e.render, "ForwardRef");
          case E:
            var s = e.displayName || null;
            return s !== null ? s : H(e.type) || "Memo";
          case $: {
            var j = e, k = j._payload, O = j._init;
            try {
              return H(O(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, re = 0, K, Q, ne, se, t, i, m;
    function h() {
    }
    h.__reactDisabledLog = !0;
    function v() {
      {
        if (re === 0) {
          K = console.log, Q = console.info, ne = console.warn, se = console.error, t = console.group, i = console.groupCollapsed, m = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        re++;
      }
    }
    function R() {
      {
        if (re--, re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: K
            }),
            info: G({}, e, {
              value: Q
            }),
            warn: G({}, e, {
              value: ne
            }),
            error: G({}, e, {
              value: se
            }),
            group: G({}, e, {
              value: t
            }),
            groupCollapsed: G({}, e, {
              value: i
            }),
            groupEnd: G({}, e, {
              value: m
            })
          });
        }
        re < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var p = U.ReactCurrentDispatcher, y;
    function g(e, r, n) {
      {
        if (y === void 0)
          try {
            throw Error();
          } catch (j) {
            var s = j.stack.trim().match(/\n( *(at )?)/);
            y = s && s[1] || "";
          }
        return `
` + y + e;
      }
    }
    var P = !1, T;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      T = new B();
    }
    function a(e, r) {
      if (!e || P)
        return "";
      {
        var n = T.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      P = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = p.current, p.current = null, v();
      try {
        if (r) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (te) {
              s = te;
            }
            Reflect.construct(e, [], O);
          } else {
            try {
              O.call();
            } catch (te) {
              s = te;
            }
            e.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            s = te;
          }
          e();
        }
      } catch (te) {
        if (te && s && typeof te.stack == "string") {
          for (var _ = te.stack.split(`
`), J = s.stack.split(`
`), W = _.length - 1, q = J.length - 1; W >= 1 && q >= 0 && _[W] !== J[q]; )
            q--;
          for (; W >= 1 && q >= 0; W--, q--)
            if (_[W] !== J[q]) {
              if (W !== 1 || q !== 1)
                do
                  if (W--, q--, q < 0 || _[W] !== J[q]) {
                    var Z = `
` + _[W].replace(" at new ", " at ");
                    return e.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, Z), Z;
                  }
                while (W >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        P = !1, p.current = k, R(), Error.prepareStackTrace = j;
      }
      var le = e ? e.displayName || e.name : "", Ge = le ? g(le) : "";
      return typeof e == "function" && T.set(e, Ge), Ge;
    }
    function X(e, r, n) {
      return a(e, !1);
    }
    function fe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return a(e, fe(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case S:
          return g("Suspense");
        case f:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return X(e.render);
          case E:
            return ae(e.type, r, n);
          case $: {
            var s = e, j = s._payload, k = s._init;
            try {
              return ae(k(j), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, Me = {}, Fe = U.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var r = e._owner, n = ae(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(n);
      } else
        Fe.setExtraStackFrame(null);
    }
    function cr(e, r, n, s, j) {
      {
        var k = Function.call.bind(Ee);
        for (var O in e)
          if (k(e, O)) {
            var _ = void 0;
            try {
              if (typeof e[O] != "function") {
                var J = Error((s || "React class") + ": " + n + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              _ = e[O](r, O, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              _ = W;
            }
            _ && !(_ instanceof Error) && (ge(j), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, O, typeof _), ge(null)), _ instanceof Error && !(_.message in Me) && (Me[_.message] = !0, ge(j), Y("Failed %s type: %s", n, _.message), ge(null));
          }
      }
    }
    var lr = Array.isArray;
    function _e(e) {
      return lr(e);
    }
    function dr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function vr(e) {
      try {
        return Ye(e), !1;
      } catch {
        return !0;
      }
    }
    function Ye(e) {
      return "" + e;
    }
    function We(e) {
      if (vr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(e)), Ye(e);
    }
    var ye = U.ReactCurrentOwner, pr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, qe, Re;
    Re = {};
    function yr(e) {
      if (Ee.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function br(e) {
      if (Ee.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function hr(e, r) {
      if (typeof e.ref == "string" && ye.current && r && ye.current.stateNode !== r) {
        var n = H(ye.current.type);
        Re[n] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(ye.current.type), e.ref), Re[n] = !0);
      }
    }
    function mr(e, r) {
      {
        var n = function() {
          Le || (Le = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function Er(e, r) {
      {
        var n = function() {
          qe || (qe = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var gr = function(e, r, n, s, j, k, O) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: O,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Tr(e, r, n, s, j) {
      {
        var k, O = {}, _ = null, J = null;
        n !== void 0 && (We(n), _ = "" + n), br(r) && (We(r.key), _ = "" + r.key), yr(r) && (J = r.ref, hr(r, j));
        for (k in r)
          Ee.call(r, k) && !pr.hasOwnProperty(k) && (O[k] = r[k]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (k in W)
            O[k] === void 0 && (O[k] = W[k]);
        }
        if (_ || J) {
          var q = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && mr(O, q), J && Er(O, q);
        }
        return gr(e, _, J, j, s, ye.current, O);
      }
    }
    var Oe = U.ReactCurrentOwner, Ue = U.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var r = e._owner, n = ae(e.type, e._source, r ? r.type : null);
        Ue.setExtraStackFrame(n);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Ne() {
      {
        if (Oe.current) {
          var e = H(Oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _r(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function Rr(e) {
      {
        var r = Ne();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function ze(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = Rr(r);
        if (Ve[n])
          return;
        Ve[n] = !0;
        var s = "";
        e && e._owner && e._owner !== Oe.current && (s = " It was passed a child from " + H(e._owner.type) + "."), ce(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), ce(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            Pe(s) && ze(s, r);
          }
        else if (Pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = V(e);
          if (typeof j == "function" && j !== e.entries)
            for (var k = j.call(e), O; !(O = k.next()).done; )
              Pe(O.value) && ze(O.value, r);
        }
      }
    }
    function Or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = H(r);
          cr(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Se) {
          Se = !0;
          var j = H(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            ce(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    function Je(e, r, n, s, j, k) {
      {
        var O = pe(e);
        if (!O) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = _r(j);
          J ? _ += J : _ += Ne();
          var W;
          e === null ? W = "null" : _e(e) ? W = "array" : e !== void 0 && e.$$typeof === D ? (W = "<" + (H(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, _);
        }
        var q = Tr(e, r, n, j, k);
        if (q == null)
          return q;
        if (O) {
          var Z = r.children;
          if (Z !== void 0)
            if (s)
              if (_e(Z)) {
                for (var le = 0; le < Z.length; le++)
                  Be(Z[le], e);
                Object.freeze && Object.freeze(Z);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(Z, e);
        }
        return e === c ? Sr(q) : Or(q), q;
      }
    }
    function Pr(e, r, n) {
      return Je(e, r, n, !0);
    }
    function Cr(e, r, n) {
      return Je(e, r, n, !1);
    }
    var wr = Cr, xr = Pr;
    he.Fragment = c, he.jsx = wr, he.jsxs = xr;
  }()), he;
}
process.env.NODE_ENV === "production" ? $e.exports = Ir() : $e.exports = $r();
var kr = $e.exports;
const ur = kr.jsx, Jr = () => /* @__PURE__ */ ur("button", { children: "Click me" });
var ke = { exports: {} }, Te = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Dr() {
  if (Xe)
    return A;
  Xe = 1;
  var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, w = u ? Symbol.for("react.portal") : 60106, c = u ? Symbol.for("react.fragment") : 60107, C = u ? Symbol.for("react.strict_mode") : 60108, l = u ? Symbol.for("react.profiler") : 60114, x = u ? Symbol.for("react.provider") : 60109, d = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, f = u ? Symbol.for("react.forward_ref") : 60112, E = u ? Symbol.for("react.suspense") : 60113, $ = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, V = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
  function N(o) {
    if (typeof o == "object" && o !== null) {
      var ee = o.$$typeof;
      switch (ee) {
        case D:
          switch (o = o.type, o) {
            case b:
            case S:
            case c:
            case l:
            case C:
            case E:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case f:
                case z:
                case F:
                case x:
                  return o;
                default:
                  return ee;
              }
          }
        case w:
          return ee;
      }
    }
  }
  function L(o) {
    return N(o) === S;
  }
  return A.AsyncMode = b, A.ConcurrentMode = S, A.ContextConsumer = d, A.ContextProvider = x, A.Element = D, A.ForwardRef = f, A.Fragment = c, A.Lazy = z, A.Memo = F, A.Portal = w, A.Profiler = l, A.StrictMode = C, A.Suspense = E, A.isAsyncMode = function(o) {
    return L(o) || N(o) === b;
  }, A.isConcurrentMode = L, A.isContextConsumer = function(o) {
    return N(o) === d;
  }, A.isContextProvider = function(o) {
    return N(o) === x;
  }, A.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === D;
  }, A.isForwardRef = function(o) {
    return N(o) === f;
  }, A.isFragment = function(o) {
    return N(o) === c;
  }, A.isLazy = function(o) {
    return N(o) === z;
  }, A.isMemo = function(o) {
    return N(o) === F;
  }, A.isPortal = function(o) {
    return N(o) === w;
  }, A.isProfiler = function(o) {
    return N(o) === l;
  }, A.isStrictMode = function(o) {
    return N(o) === C;
  }, A.isSuspense = function(o) {
    return N(o) === E;
  }, A.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === c || o === S || o === l || o === C || o === E || o === $ || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === F || o.$$typeof === x || o.$$typeof === d || o.$$typeof === f || o.$$typeof === V || o.$$typeof === U || o.$$typeof === Y || o.$$typeof === M);
  }, A.typeOf = N, A;
}
var I = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Mr() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, w = u ? Symbol.for("react.portal") : 60106, c = u ? Symbol.for("react.fragment") : 60107, C = u ? Symbol.for("react.strict_mode") : 60108, l = u ? Symbol.for("react.profiler") : 60114, x = u ? Symbol.for("react.provider") : 60109, d = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, f = u ? Symbol.for("react.forward_ref") : 60112, E = u ? Symbol.for("react.suspense") : 60113, $ = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, V = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
    function N(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === c || a === S || a === l || a === C || a === E || a === $ || typeof a == "object" && a !== null && (a.$$typeof === z || a.$$typeof === F || a.$$typeof === x || a.$$typeof === d || a.$$typeof === f || a.$$typeof === V || a.$$typeof === U || a.$$typeof === Y || a.$$typeof === M);
    }
    function L(a) {
      if (typeof a == "object" && a !== null) {
        var X = a.$$typeof;
        switch (X) {
          case D:
            var fe = a.type;
            switch (fe) {
              case b:
              case S:
              case c:
              case l:
              case C:
              case E:
                return fe;
              default:
                var ae = fe && fe.$$typeof;
                switch (ae) {
                  case d:
                  case f:
                  case z:
                  case F:
                  case x:
                    return ae;
                  default:
                    return X;
                }
            }
          case w:
            return X;
        }
      }
    }
    var o = b, ee = S, de = d, ve = x, oe = D, pe = f, ie = c, ue = z, H = F, G = w, re = l, K = C, Q = E, ne = !1;
    function se(a) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(a) || L(a) === b;
    }
    function t(a) {
      return L(a) === S;
    }
    function i(a) {
      return L(a) === d;
    }
    function m(a) {
      return L(a) === x;
    }
    function h(a) {
      return typeof a == "object" && a !== null && a.$$typeof === D;
    }
    function v(a) {
      return L(a) === f;
    }
    function R(a) {
      return L(a) === c;
    }
    function p(a) {
      return L(a) === z;
    }
    function y(a) {
      return L(a) === F;
    }
    function g(a) {
      return L(a) === w;
    }
    function P(a) {
      return L(a) === l;
    }
    function T(a) {
      return L(a) === C;
    }
    function B(a) {
      return L(a) === E;
    }
    I.AsyncMode = o, I.ConcurrentMode = ee, I.ContextConsumer = de, I.ContextProvider = ve, I.Element = oe, I.ForwardRef = pe, I.Fragment = ie, I.Lazy = ue, I.Memo = H, I.Portal = G, I.Profiler = re, I.StrictMode = K, I.Suspense = Q, I.isAsyncMode = se, I.isConcurrentMode = t, I.isContextConsumer = i, I.isContextProvider = m, I.isElement = h, I.isForwardRef = v, I.isFragment = R, I.isLazy = p, I.isMemo = y, I.isPortal = g, I.isProfiler = P, I.isStrictMode = T, I.isSuspense = B, I.isValidElementType = N, I.typeOf = L;
  }()), I;
}
var Qe;
function sr() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? Te.exports = Dr() : Te.exports = Mr()), Te.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ce, er;
function Fr() {
  if (er)
    return Ce;
  er = 1;
  var u = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
  function c(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var x = {}, d = 0; d < 10; d++)
        x["_" + String.fromCharCode(d)] = d;
      var b = Object.getOwnPropertyNames(x).map(function(f) {
        return x[f];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        S[f] = f;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ce = C() ? Object.assign : function(l, x) {
    for (var d, b = c(l), S, f = 1; f < arguments.length; f++) {
      d = Object(arguments[f]);
      for (var E in d)
        D.call(d, E) && (b[E] = d[E]);
      if (u) {
        S = u(d);
        for (var $ = 0; $ < S.length; $++)
          w.call(d, S[$]) && (b[S[$]] = d[S[$]]);
      }
    }
    return b;
  }, Ce;
}
var we, rr;
function De() {
  if (rr)
    return we;
  rr = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return we = u, we;
}
var xe, tr;
function fr() {
  return tr || (tr = 1, xe = Function.call.bind(Object.prototype.hasOwnProperty)), xe;
}
var je, nr;
function Yr() {
  if (nr)
    return je;
  nr = 1;
  var u = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var D = De(), w = {}, c = fr();
    u = function(l) {
      var x = "Warning: " + l;
      typeof console < "u" && console.error(x);
      try {
        throw new Error(x);
      } catch {
      }
    };
  }
  function C(l, x, d, b, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in l)
        if (c(l, f)) {
          var E;
          try {
            if (typeof l[f] != "function") {
              var $ = Error(
                (b || "React class") + ": " + d + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw $.name = "Invariant Violation", $;
            }
            E = l[f](x, f, b, d, null, D);
          } catch (z) {
            E = z;
          }
          if (E && !(E instanceof Error) && u(
            (b || "React class") + ": type specification of " + d + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in w)) {
            w[E.message] = !0;
            var F = S ? S() : "";
            u(
              "Failed " + d + " type: " + E.message + (F ?? "")
            );
          }
        }
    }
  }
  return C.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (w = {});
  }, je = C, je;
}
var Ae, ar;
function Wr() {
  if (ar)
    return Ae;
  ar = 1;
  var u = sr(), D = Fr(), w = De(), c = fr(), C = Yr(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(d) {
    var b = "Warning: " + d;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function x() {
    return null;
  }
  return Ae = function(d, b) {
    var S = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function E(t) {
      var i = t && (S && t[S] || t[f]);
      if (typeof i == "function")
        return i;
    }
    var $ = "<<anonymous>>", F = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: N,
      element: L(),
      elementType: o(),
      instanceOf: ee,
      node: pe(),
      objectOf: ve,
      oneOf: de,
      oneOfType: oe,
      shape: ue,
      exact: H
    };
    function z(t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    }
    function M(t, i) {
      this.message = t, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function V(t) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, m = 0;
      function h(R, p, y, g, P, T, B) {
        if (g = g || $, T = T || y, B !== w) {
          if (b) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var X = g + ":" + y;
            !i[X] && // Avoid spamming the console because they are often not actionable except for lib authors
            m < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[X] = !0, m++);
          }
        }
        return p[y] == null ? R ? p[y] === null ? new M("The " + P + " `" + T + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new M("The " + P + " `" + T + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(p, y, g, P, T);
      }
      var v = h.bind(null, !1);
      return v.isRequired = h.bind(null, !0), v;
    }
    function U(t) {
      function i(m, h, v, R, p, y) {
        var g = m[h], P = K(g);
        if (P !== t) {
          var T = Q(g);
          return new M(
            "Invalid " + R + " `" + p + "` of type " + ("`" + T + "` supplied to `" + v + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return V(i);
    }
    function Y() {
      return V(x);
    }
    function N(t) {
      function i(m, h, v, R, p) {
        if (typeof t != "function")
          return new M("Property `" + p + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var y = m[h];
        if (!Array.isArray(y)) {
          var g = K(y);
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected an array."));
        }
        for (var P = 0; P < y.length; P++) {
          var T = t(y, P, v, R, p + "[" + P + "]", w);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return V(i);
    }
    function L() {
      function t(i, m, h, v, R) {
        var p = i[m];
        if (!d(p)) {
          var y = K(p);
          return new M("Invalid " + v + " `" + R + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(t);
    }
    function o() {
      function t(i, m, h, v, R) {
        var p = i[m];
        if (!u.isValidElementType(p)) {
          var y = K(p);
          return new M("Invalid " + v + " `" + R + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(t);
    }
    function ee(t) {
      function i(m, h, v, R, p) {
        if (!(m[h] instanceof t)) {
          var y = t.name || $, g = se(m[h]);
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return V(i);
    }
    function de(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), x;
      function i(m, h, v, R, p) {
        for (var y = m[h], g = 0; g < t.length; g++)
          if (z(y, t[g]))
            return null;
        var P = JSON.stringify(t, function(B, a) {
          var X = Q(a);
          return X === "symbol" ? String(a) : a;
        });
        return new M("Invalid " + R + " `" + p + "` of value `" + String(y) + "` " + ("supplied to `" + v + "`, expected one of " + P + "."));
      }
      return V(i);
    }
    function ve(t) {
      function i(m, h, v, R, p) {
        if (typeof t != "function")
          return new M("Property `" + p + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var y = m[h], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected an object."));
        for (var P in y)
          if (c(y, P)) {
            var T = t(y, P, v, R, p + "." + P, w);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return V(i);
    }
    function oe(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), x;
      for (var i = 0; i < t.length; i++) {
        var m = t[i];
        if (typeof m != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(m) + " at index " + i + "."
          ), x;
      }
      function h(v, R, p, y, g) {
        for (var P = [], T = 0; T < t.length; T++) {
          var B = t[T], a = B(v, R, p, y, g, w);
          if (a == null)
            return null;
          a.data && c(a.data, "expectedType") && P.push(a.data.expectedType);
        }
        var X = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new M("Invalid " + y + " `" + g + "` supplied to " + ("`" + p + "`" + X + "."));
      }
      return V(h);
    }
    function pe() {
      function t(i, m, h, v, R) {
        return G(i[m]) ? null : new M("Invalid " + v + " `" + R + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return V(t);
    }
    function ie(t, i, m, h, v) {
      return new M(
        (t || "React class") + ": " + i + " type `" + m + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function ue(t) {
      function i(m, h, v, R, p) {
        var y = m[h], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type `" + g + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var P in t) {
          var T = t[P];
          if (typeof T != "function")
            return ie(v, R, p, P, Q(T));
          var B = T(y, P, v, R, p + "." + P, w);
          if (B)
            return B;
        }
        return null;
      }
      return V(i);
    }
    function H(t) {
      function i(m, h, v, R, p) {
        var y = m[h], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type `" + g + "` " + ("supplied to `" + v + "`, expected `object`."));
        var P = D({}, m[h], t);
        for (var T in P) {
          var B = t[T];
          if (c(t, T) && typeof B != "function")
            return ie(v, R, p, T, Q(B));
          if (!B)
            return new M(
              "Invalid " + R + " `" + p + "` key `" + T + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(m[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var a = B(y, T, v, R, p + "." + T, w);
          if (a)
            return a;
        }
        return null;
      }
      return V(i);
    }
    function G(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(G);
          if (t === null || d(t))
            return !0;
          var i = E(t);
          if (i) {
            var m = i.call(t), h;
            if (i !== t.entries) {
              for (; !(h = m.next()).done; )
                if (!G(h.value))
                  return !1;
            } else
              for (; !(h = m.next()).done; ) {
                var v = h.value;
                if (v && !G(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(t, i) {
      return t === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function K(t) {
      var i = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : re(i, t) ? "symbol" : i;
    }
    function Q(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var i = K(t);
      if (i === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function ne(t) {
      var i = Q(t);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function se(t) {
      return !t.constructor || !t.constructor.name ? $ : t.constructor.name;
    }
    return F.checkPropTypes = C, F.resetWarningCache = C.resetWarningCache, F.PropTypes = F, F;
  }, Ae;
}
var Ie, or;
function Lr() {
  if (or)
    return Ie;
  or = 1;
  var u = De();
  function D() {
  }
  function w() {
  }
  return w.resetWarningCache = D, Ie = function() {
    function c(x, d, b, S, f, E) {
      if (E !== u) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    c.isRequired = c;
    function C() {
      return c;
    }
    var l = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: C,
      element: c,
      elementType: c,
      instanceOf: C,
      node: c,
      objectOf: C,
      oneOf: C,
      oneOfType: C,
      shape: C,
      exact: C,
      checkPropTypes: w,
      resetWarningCache: D
    };
    return l.PropTypes = l, l;
  }, Ie;
}
if (process.env.NODE_ENV !== "production") {
  var qr = sr(), Ur = !0;
  ke.exports = Wr()(qr.isElement, Ur);
} else
  ke.exports = Lr()();
var Nr = ke.exports;
const me = /* @__PURE__ */ Ar(Nr), Vr = ({ name: u, profile_picture: D, size: w = 120, sx: c, ...C }) => /* @__PURE__ */ ur(
  jr,
  {
    alt: u,
    src: (D == null ? void 0 : D.url) ?? "/default-avatar.png",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "bottom",
      width: w,
      height: w,
      fontSize: w / 2,
      ...c
    },
    ...C
  }
);
Vr.propTypes = {
  profile_picture: me.shape({
    url: me.string
  }),
  size: me.number,
  sx: me.object,
  name: me.string
};
export {
  Vr as Avatar,
  Jr as Button
};
