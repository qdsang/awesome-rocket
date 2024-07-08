var Condensation = function (t, i, e, s) {
  this.Tcond, this.Pcond, this.deltaT, this.Pratio, this.x0;
  this.Tcond = i;
  var a = Number(Math.exp(25.87 - 5310 / i));
  if (((this.x0 = (e * a) / t), 0 == this.x0))
    (this.Tcond = 0), (this.Pcond = 0), (this.deltaT = 0), (this.Pratio = 1);
  else {
    for (var n = 0; n < 30; n++)
      this.Tcond =
        5425.2 /
        (28.99 - Math.log(e * a) - (s / (s - 1)) * Math.log(this.Tcond / i));
    (this.Pcond = t * Math.pow(this.Tcond / i, s / (s - 1))),
      (this.deltaT = 6165 * (s - 1) * this.x0),
      (this.Pratio = Math.pow(1 - this.x0, s));
  }
};
var Engine = function () {
  var m,
    c,
    v,
    h,
    r,
    d,
    l,
    p,
    f,
    y,
    u,
    g,
    P,
    M,
    T,
    w,
    z,
    S,
    x,
    k,
    D,
    A,
    q,
    b,
    W,
    B = 500,
    C = 9.807,
    N = 1.4,
    I = 8.31451 / 0.028964,
    X = 0.7853975,
    R = new Array(B),
    E = new Array(B),
    V = new Array(B),
    G = new Array(B),
    K = new Array(B),
    H = 0,
    L = B,
    j = 0,
    F = 0,
    J = new Array(15),
    O = 0,
    Q = 0,
    U = 0,
    Y = !0,
    Z = !0,
    $ = !0,
    _ = {};
  (this.noz = new Nozzle()),
    (this.takeSample = function (t, i, e, s, a, n) {
      if (
        ((R[t] = i),
        (E[t] = e),
        (V[t] = s),
        (G[t] = a),
        (K[t] = n),
        t % 10 == 0)
      );
    }),
    (this.launchTubeX = function () {
      this.takeSample(0, 0, 0, 0, 0, 0);
      var t = new LaunchTube(D, k, x, z, g, f, p, N, I, w, S, C, W, u),
        i = [0, 0],
        e = t.getDerivs(i, O);
      0 < z ? (0 < e[1] ? (Q = Math.sqrt(y / e[1])) : (Z = !1)) : ($ = !1);
      var s = new RK4(i, O, t);
      for (h = t.addTime(), r = h / 10; Z && $; ) {
        if (Q < h) {
          if (
            (O = s.t) % r < Q &&
            (H++,
            this.takeSample(H, O, s.y[0], s.y[1], s.dydt[1] / C, s.dydt[2]),
            Y && t.temp < _.Tcond)
          ) {
            var a = 1 + _.deltaT / t.temp,
              n = a * _.Pratio;
            t.changePT(n, a),
              s.takeStep(0),
              H++,
              this.takeSample(H, O, s.y[0], s.y[1], s.dydt[1] / C, s.dydt[2]),
              (U = O),
              (Y = !1);
          }
          s.takeStep(Q), (h = t.addTime());
        } else s.takeStep(h), (h = t.addTime()), s.takeStep(h), ($ = !1);
        (s.y[0] < 0 || 498 == H) && (Z = !1);
      }
      H++,
        this.takeSample(H, s.t, s.y[0], s.y[1], s.dydt[1] / C, s.dydt[2]),
        (l = t.temp),
        (d = t.press),
        0;
    }),
    (this.waterX = function () {
      if ((($ = !0), Z)) {
        var t = new Water(P, k, l, d, N, I, w, S, A, C, W, u),
          i = [E[H], V[H], 0, this.noz.zWat],
          e = t.getDerivs(i, O),
          s = R[H];
        (O = 0) < e[1] && (Q = Math.sqrt(y / e[1]));
        var a = new RK4(i, O, t);
        for (h = t.addTime(), r = h / 60, 0 == h && ($ = !1); Z && $; ) {
          if ((r < (O + h) / 120 && (r *= 2), Q < h)) {
            if (
              (O = a.t) % r < Q &&
              (H++,
              this.takeSample(
                H,
                O + s,
                a.y[0],
                a.y[1],
                a.dydt[1] / C,
                a.dydt[4]
              ),
              Y && t.temp < _.Tcond)
            ) {
              var n = 1 + _.deltaT / t.temp,
                o = n * _.Pratio;
              t.changePT(o, n),
                a.takeStep(0),
                H++,
                this.takeSample(
                  H,
                  O + s,
                  a.y[0],
                  a.y[1],
                  a.dydt[1] / C,
                  a.dydt[4]
                ),
                (U = O + s),
                (Y = !1);
            }
            a.takeStep(Q), (h = t.addTime());
          } else
            a.takeStep(h),
              (h = t.addTime()),
              a.takeStep(h),
              ($ = !1),
              H++,
              this.takeSample(
                H,
                a.t + s,
                a.y[0],
                a.y[1],
                a.dydt[1] / C,
                a.dydt[4]
              ),
              (l = t.temp),
              (d = t.press) <= u && (S = t.mtot);
          (a.y[0] < 0 || 498 == H) && (Z = !1);
        }
        0;
      }
    }),
    (this.gasX = function () {
      if ((($ = !0), Z)) {
        var t = new Gas(P, k, l, d, N, I, w, S, q, C, u),
          i = [E[H], V[H], t.dens],
          e = t.getDerivs(i, 0),
          s = R[H];
        (O = 0) < e[1] && (Q = Math.sqrt(y / e[1]));
        var a = new RK4(i, O, t);
        for (h = t.addTime(), r = h / 25, d <= u && ($ = !1); Z && $; ) {
          if (Q < h) {
            if (
              (O = a.t) % r < Q &&
              (H++,
              this.takeSample(
                H,
                O + s,
                a.y[0],
                a.y[1],
                a.dydt[1] / C,
                a.dydt[3]
              ),
              Y && t.temp < _.Tcond)
            ) {
              var n = 1 + _.deltaT / t.temp,
                o = n * _.Pratio;
              t.changePT(o, n),
                a.takeStep(0),
                H++,
                this.takeSample(
                  H,
                  O + s,
                  a.y[0],
                  a.y[1],
                  a.dydt[1] / C,
                  a.dydt[3]
                ),
                (U = O + s),
                (Y = !1);
            }
            a.takeStep(Q), (h = t.addTime());
          } else
            a.takeStep(h),
              (h = t.addTime()),
              a.takeStep(h),
              ($ = !1),
              H++,
              this.takeSample(
                H,
                a.t + s,
                a.y[0],
                a.y[1],
                a.dydt[1] / C,
                a.dydt[3]
              ),
              (J[8] = U),
              (J[9] = t.transtime + s);
          (a.y[0] < 0 || 498 == H) && (Z = !1);
        }
        j = H;
      }
    }),
    (this.coastX = function () {
      if (((L = H + 1), Z)) {
        var t,
          i,
          e,
          s,
          a = V[H],
          n = E[H],
          o = R[H];
        if (((L = Math.min(L + 40, B)), 0 < w)) {
          var h,
            r = Math.sqrt((S * C) / w),
            d = a / r,
            l = r / C,
            p = l * r,
            f =
              (t =
                0 < a
                  ? ((i = o + l * Math.atan(d)),
                    n + (p / 2) * Math.log(1 + d * d))
                  : ((i = o + (l / 2) * Math.log((1 + d) / (1 - d))),
                    n - (p / 2) * Math.log(1 - d * d))) / p,
            y = Math.exp(f);
          (e = i + l * Math.log(y + Math.sqrt(y * y - 1))),
            (s = -r * Math.sqrt(1 - 1 / (y * y)));
          for (var u = H + 1; u < L; u++)
            (f =
              (i - (O = o + (e - o) * (h = (u - H - 1) / (L - H - 2)) * h)) /
              l),
              (m =
                O <= i
                  ? ((v = t + p * Math.log(Math.cos(f))),
                    (-(c = r * Math.tan(f)) * c) / (r * r) - 1)
                  : ((y = Math.exp(f)),
                    (v = t - p * Math.log((y + 1 / y) / 2)),
                    ((c = (r * (y * y - 1)) / (y * y + 1)) * c) / (r * r) - 1)),
              (R[u] = O),
              (E[u] = v),
              (V[u] = c),
              (G[u] = m),
              (K[u] = 0);
        } else {
          var g = a / C;
          (t = n + (g * a) / 2),
            (e = (i = o + g) + Math.sqrt(g * g + (2 * n) / C)),
            (s = -Math.sqrt(a * a + 2 * n * C));
          for (u = H + 1; u < L; u++)
            (v =
              n +
              a * (O = ((e - o) * (u - H - 1)) / (L - H - 2)) -
              (C * O * O) / 2),
              (c = a - C * O),
              (R[u] = O + o),
              (E[u] = v),
              (V[u] = c),
              (G[u] = -1),
              (K[u] = 0);
        }
        (J[0] = o),
          (J[1] = n),
          (J[2] = a),
          (J[3] = G[H + 1]),
          (J[4] = i),
          (J[5] = t),
          (J[6] = e),
          (J[7] = s),
          (F = L);
      }
    }),
    (this.getTotalImpulse = function (t) {
      for (var i = 0, e = 0; e < t; e++) i += K[e] * (R[e + 1] - R[e]);
      return i;
    }),
    (this.getMotorEquivalent = function (t) {
      for (var i = 2.5, e = "A"; i < t; )
        (i += i), (e = String.fromCharCode(e.charCodeAt(0) + 1));
      return e;
    }),
    (this.getPeakThrust = function (t) {
      for (var i = 0, e = 0; e < t; e++) K[e] >= i && (i = K[e]);
      return i;
    }),
    (this.getBurnTimeIndex = function (t, i) {
      for (var e = 0.05 * t, s = i - 1; 0 <= s; s--) if (K[s] >= e) return s;
    }),
    (this.run = function (t) {
      ($ = Z = Y = !(U = Q = O = 0)),
        (y = Number(1e-6)),
        (p = 101325 * (t.gPressure + 1)),
        (f = t.aTemperature),
        (u = t.pressAtm),
        (g = X * t.ltDia * t.ltDia),
        (P = X * t.diaNoz * t.diaNoz),
        (M = X * t.diaBot * t.diaBot),
        (T = (0.028964 * u) / (8.31451 * f)),
        (w = 0.5 * t.CDrag * M * T),
        (z = t.ltLength),
        (S = t.massBot),
        (x = t.volWat),
        (k = t.volBot),
        (D = t.lVol),
        (A = t.effWat),
        (q = t.effGas),
        (b = t.humidity),
        (C = t.gravity),
        (N = t.gasGamma),
        (I = t.Rgas),
        (W = t.liquidDensity),
        (_ = new Condensation(p, f, b, N)),
        this.noz.setVolDiam(t.volBot, t.volWat, t.diaBot, t.diaNoz),
        this.noz.setShape(t.noz0, t.noz1, t.noz2);
      try {
        L = B;
        for (var i = (H = 0); i < J.length; i++) J[i] = 0;
        R.fill(0),
          E.fill(0),
          V.fill(0),
          G.fill(0),
          K.fill(0),
          (F = j = 0),
          this.launchTubeX(),
          this.waterX(),
          this.gasX(),
          this.coastX(),
          console.log("calculations done"),
          (J[10] = this.getTotalImpulse(j));
        var e = this.getPeakThrust(j),
          s = this.getBurnTimeIndex(e, j),
          a = R[s],
          n = Math.floor(this.getTotalImpulse(s) / a),
          o = this.getMotorEquivalent(this.getTotalImpulse(j)) + n.toString();
        (J[11] = a), (J[12] = e), (J[13] = n), (J[14] = o);
      } catch (t) {
        console.warn("Calculation Error " + t.message);
      }
      var h = {};
      return (
        (h.timeData = R),
        (h.timeDataBoost = R.slice(0, j)),
        (h.timeDataCoast = R.slice(0, F)),
        (h.heightData = E),
        (h.velocityData = V),
        (h.accelerationData = G),
        (h.thrustData = K),
        (h.summaryData = J),
        (h.jt = L),
        h
      );
    });
};
var Gas = function (t, i, e, s, a, n, o, h, r, d, l) {
    var p,
      f,
      y,
      u,
      g,
      m,
      c,
      v,
      P,
      M,
      T,
      w,
      z,
      S,
      x,
      k,
      D,
      A,
      q,
      b,
      W,
      B,
      C,
      N,
      I,
      X,
      R = new Array(4),
      E = d,
      V = l;
    this.press,
      this.temp,
      this.dens,
      this.transtime,
      (P = t),
      (w = i),
      (S = e),
      (x = s),
      (D = a),
      (T = o),
      (M = h),
      (z = n),
      (m = r),
      (B = Math.pow(2 / (D + 1), D / (D - 1))),
      (C = Math.pow(2 / (D + 1), 1 / (D - 1))),
      (N = Math.sqrt((D + 1) / (D - 1))),
      (I = (D - 1) / D),
      (X = ((2 * D) / (D + 1)) * z),
      (k = x / (z * S)),
      (this.dens = k),
      (W = k * Math.pow(V / x, 1 / D));
    var G = Math.sqrt(D * z * S),
      K =
        ((2 * w) / ((D - 1) * P * G)) *
        Math.pow((D + 1) / 2, (D + 1) / (2 * (D - 1)));
    (c = 1.17 * K * (Math.pow(x / V, (D - 1) / (2 * D)) - 1)),
      (this.getDerivs = function (t, i) {
        return (
          (v = i),
          (f = t[1]),
          (this.dens = t[2]),
          (g = M + this.dens * w),
          (this.press = x * Math.pow(this.dens / k, D)),
          (this.temp = S * Math.pow(this.dens / k, D - 1)),
          (q = this.press * B),
          (b = -Math.sqrt(X * this.temp)),
          (A = this.dens * C),
          q < V
            ? ((q = V),
              (b = b * N * Math.sqrt(1 - Math.pow(V / this.press, I)) - 0.1),
              (A = W))
            : (this.transtime = i),
          (y =
            ((p = (P * (q - V) + (u = P * A * b) * b) * m) -
              T * f * Math.abs(f)) /
              g -
            E),
          (R[0] = f),
          (R[1] = y),
          (R[2] = u / w),
          (R[3] = p),
          R
        );
      }),
      (this.changePT = function (t, i) {
        (x *= t), (S *= i), (W = k * Math.pow(V / x, 1 / D));
      }),
      (this.addTime = function () {
        return (
          0 < v && (c = ((V - this.press) * w) / (D * z * this.temp * u)), c
        );
      });
  },
  LaunchTube = function (t, i, e, s, a, n, o, h, r, d, l, p, f, y) {
    var u,
      g,
      m,
      c,
      v,
      P,
      M,
      T,
      w,
      z,
      S,
      x,
      k = new Array(3),
      D = p,
      A = y,
      q = f;
    this.press,
      this.temp,
      (P = h),
      (M = d),
      (u = t + i - e - 0.4 * (m = s) * (g = a)),
      (T = l + ((v = o) / (r * (c = n))) * (i - e) + q * e),
      (this.getDerivs = function (t, i) {
        (z = t[0]),
          (S = t[1]),
          (w = u / (u + g * z)),
          (this.press = v * Math.pow(w, P)),
          (this.temp = c * Math.pow(w, P - 1)),
          (x = ((this.press - A) * g - M * S * S) / T - D);
        var e = (this.press - A) * g;
        return (k[0] = S), (k[1] = x), (k[2] = e), k;
      }),
      (this.changePT = function (t, i) {
        (v *= t), (c *= i);
      }),
      (this.addTime = function () {
        return 0 < x ? (Math.sqrt(S * S + 2 * x * (m - z)) - S) / x : 10;
      });
  },
  Dimension = function (t, i) {
    (this.width = t), (this.height = i);
  },
  Polygon = function () {
    (this.npoints = 0),
      (this.xpoints = new Array()),
      (this.ypoints = new Array()),
      (this.addPoint = function (t, i) {
        this.xpoints.push(t), this.ypoints.push(i), this.npoints++;
      }),
      (this.translate = function (t, i) {
        for (var e = 0, s = this.xpoints.length; e < s; e++)
          (this.xpoints[e] += t), (this.ypoints[e] += i);
      });
  };
var Nozzle = function () {
    var c,
      v,
      P,
      M,
      T,
      w = [0, 0.156, 0.309, 0.454, 0.588, 0.707, 0.809, 0.891, 0.951, 0.988, 1],
      z = "rgb(221,221,221)",
      S = "rgb(238,238,238)",
      x = "rgb(204,204,255)",
      k = "rgb(221,221,255)",
      t = new Dimension(80, 300),
      D = new Array(4),
      A = new Array(4),
      q = [0, 0, 0];
    (this.zMax = 3 * P), (this.zWat = P);
    var a,
      b,
      W = new Array(15),
      B = new Array(15),
      C = new Array(15),
      N = new Array(15),
      I = new Array(15),
      X = 0;
    (this.setVolDiam = function (t, i, e, s) {
      (c = t), (v = i), (P = e), (M = s), (a = 14), this.makeNozzle();
    }),
      (this.setShape = function (t, i, e) {
        (q[0] = t), (q[1] = i), (q[2] = e), (a = 14), this.makeNozzle();
      }),
      (this.getMinVol = function () {
        return X;
      }),
      (this.vol = function () {
        return N[a] + (0.5 * B[a] * b + C[a]) * b;
      }),
      (this.area = function () {
        return C[a] + B[a] * b;
      }),
      (this.funcB = function () {
        return 0 == B[a]
          ? I[a] + (C[0] / C[a]) * b
          : I[a] + (C[0] / B[a]) * Math.log((B[a] * b) / C[a] + 1);
      }),
      (this.setH = function (t) {
        t < W[a] && --a < 0 && (a = 0), (b = t - W[a]);
      }),
      (this.edge = function (t, i, e) {
        (e[0] = Math.round(T * t)),
          (e[1] = Math.round(0.5 * T * t)),
          (e[2] = Math.round(0.3 * T * t)),
          (e[3] = -Math.min(Math.round(T * i), 600));
      }),
      (this.p = function (t) {
        var i = [0, 0],
          e = new Array(4);
        (e[0] = (1 - t) * (1 - t) * (1 - t)),
          (e[1] = 3 * t * (1 - t) * (1 - t)),
          (e[2] = 3 * t * t * (1 - t)),
          (e[3] = t * t * t);
        for (var s = 0; s < 4; s++)
          (i[0] += e[s] * D[s]), (i[1] += e[s] * A[s]);
        return i;
      }),
      (this.makeNozzle = function () {
        var t,
          i,
          e = new Polygon(),
          s = new Polygon(),
          a = new Polygon(),
          n = new Polygon(),
          o = 15,
          h = new Array(4);
        (T = 76 / P),
          (D[3] = 0.5 * P),
          (A[3] = 2.3 * M + q[0] * (1.8 * P - 2.3 * M)),
          (D[0] = 0.5 * M),
          (A[0] = 0.8 * M),
          (D[1] = 0.5 * M),
          (A[1] = 1.5 * M + q[1] * (A[3] - 2 * M)),
          (D[2] = (M + q[2] * (P - M)) / 2),
          (A[2] = A[1]),
          this.edge(0.5 * M, 0, h),
          e.addPoint(h[0], 0),
          s.addPoint(h[1], 0),
          a.addPoint(h[0], 0),
          n.addPoint(h[1], 0),
          (W[0] = 0),
          (C[0] = 0.25 * Math.PI * M * M),
          (N[0] = 0),
          (I[0] = 0);
        var r = (i = this.p(0))[1],
          d = C[0];
        (B[0] = 0),
          (N[1] = d * r),
          (I[1] = r),
          N[1] > v &&
            ((this.zWat = v / d),
            (o = 2),
            this.edge(i[0], this.zWat, h),
            a.addPoint(h[0], h[3]),
            a.addPoint(-h[0], h[3]),
            n.addPoint(h[1], h[3]),
            n.addPoint(h[2], h[3]));
        for (var l = 1; l <= 13; l++)
          if (
            ((t = i),
            (W[l] = r),
            (C[l] = d),
            (r = (i = this.p(l / 13))[1]),
            (b = r - W[l]),
            (d = Math.PI * i[0] * i[0]),
            (B[l] = (d - C[l]) / b),
            (N[l + 1] = N[l] + 0.5 * (C[l] + d) * b),
            0 == B[0]
              ? (I[l + 1] = I[l] + (C[0] / C[l]) * b)
              : (I[l + 1] =
                  I[l] + (C[0] / B[l]) * Math.log((B[l] * b) / C[l] + 1)),
            this.edge(t[0], t[1], h),
            e.addPoint(h[0], h[3]),
            s.addPoint(h[1], h[3]),
            l <= o - 2 &&
              (a.addPoint(h[0], h[3]), n.addPoint(h[1], h[3]), N[l + 1] > v))
          ) {
            (o = l + 1),
              0 == B[l]
                ? (this.zWat = W[l] + (v - N[l]) / C[l])
                : (this.zWat =
                    W[l] +
                    (-C[l] + Math.sqrt(C[l] * C[l] + 2 * B[l] * (v - N[l]))) /
                      B[l]);
            var p = (this.zWat - W[l]) / b;
            this.edge(t[0] + p * (i[0] - t[0]), t[1] + p * (i[1] - t[1]), h),
              a.addPoint(h[0], h[3]),
              a.addPoint(-h[0], h[3]),
              n.addPoint(h[1], h[3]),
              n.addPoint(h[2], h[3]);
          }
        if (
          ((t = i),
          (W[14] = r),
          (C[14] = d),
          (B[14] = 0),
          this.edge(t[0], t[1], h),
          e.addPoint(h[0], h[3]),
          s.addPoint(h[1], h[3]),
          15 == o)
        ) {
          this.zWat = r + (v - N[14]) / d;
          var f = Math.round(-this.zWat * T);
          a.addPoint(h[0], h[3]),
            a.addPoint(h[0], f),
            a.addPoint(-h[0], f),
            a.addPoint(-h[0], h[3]),
            n.addPoint(h[1], h[3]),
            n.addPoint(h[1], f),
            n.addPoint(h[2], f),
            n.addPoint(h[2], h[3]);
        }
        if (
          ((X = N[14] + 0.3 * P * P * P),
          (this.zMax = r + (c - N[14]) / d - (0.5 * P) / 3),
          c < X && (this.zMax = r + (c - N[14]) / d - (0.5 * P) / 3),
          300 < Math.round(this.zMax * T))
        )
          this.edge(0.5 * P, this.zMax, h),
            e.addPoint(h[0], h[3]),
            s.addPoint(h[1], h[3]),
            e.addPoint(-h[0], h[3]),
            s.addPoint(h[2], h[3]);
        else {
          for (l = 0; l <= 8; l++)
            this.edge(0.5 * P * w[10 - l], this.zMax + 0.5 * P * w[l] * 0.5, h),
              e.addPoint(h[0], h[3]),
              s.addPoint(h[1], h[3]);
          for (l = 2; l <= 10; l++)
            this.edge(0.5 * P * w[l], this.zMax + 0.5 * P * w[10 - l] * 0.5, h),
              e.addPoint(-h[0], h[3]),
              s.addPoint(h[2], h[3]);
        }
        for (l = 14; 1 <= l; l--)
          (t = this.p((l - 1) / 13)),
            this.edge(t[0], t[1], h),
            e.addPoint(-h[0], h[3]),
            s.addPoint(h[2], h[3]),
            l <= o - 2 && (a.addPoint(-h[0], h[3]), n.addPoint(h[2], h[3]));
        this.edge(0.5 * M, 0, h),
          e.addPoint(-h[0], 0),
          s.addPoint(h[2], 0),
          a.addPoint(-h[0], 0),
          n.addPoint(h[2], 0),
          e.translate(40, 299),
          s.translate(40, 299),
          a.translate(40, 299),
          n.translate(40, 299);
        for (l = 0; l < 15; l++) this.setH(this.zWat);
        var y = document.getElementById("testCanvas");
        if (void 0 !== y) {
          var u = y.getContext("2d");
          u.clearRect(0, 0, y.width, y.height),
            (u.strokeStyle = z),
            (u.fillStyle = z),
            u.beginPath(),
            u.moveTo(e.xpoints[0], e.ypoints[0]);
          for (var g = 1, m = e.xpoints.length; g < m; g++)
            u.lineTo(e.xpoints[g], e.ypoints[g]);
          u.fill(),
            (u.strokeStyle = S),
            (u.fillStyle = S),
            u.beginPath(),
            u.moveTo(s.xpoints[0], s.ypoints[0]);
          for (g = 1, m = s.xpoints.length; g < m; g++)
            u.lineTo(s.xpoints[g], s.ypoints[g]);
          u.fill(),
            (u.strokeStyle = x),
            (u.fillStyle = x),
            u.beginPath(),
            u.moveTo(a.xpoints[0], a.ypoints[0]);
          for (g = 1, m = a.xpoints.length; g < m; g++)
            u.lineTo(a.xpoints[g], a.ypoints[g]);
          u.fill(),
            (u.strokeStyle = k),
            (u.fillStyle = k),
            u.beginPath(),
            u.moveTo(n.xpoints[0], n.ypoints[0]);
          for (g = 1, m = n.xpoints.length; g < m; g++)
            u.lineTo(n.xpoints[g], n.ypoints[g]);
          u.fill(),
            (u.strokeStyle = "rgb(40,40,40)"),
            u.beginPath(),
            u.moveTo(e.xpoints[0], e.ypoints[0]);
          for (g = 1, m = e.xpoints.length; g < m; g++)
            u.lineTo(e.xpoints[g], e.ypoints[g]);
          u.stroke();
        }
      }),
      (this.getMinimumSize = function () {
        return t;
      }),
      (this.getPreferredSize = function () {
        return t;
      }),
      this.setVolDiam(0.0021, 5e-4, 0.105, 0.022),
      this.setShape(0.28, 0.32, 0.88);
  },
  RK4 = function (t, i, e) {
    var s, a, n, o, h, r, d, l;
    this.y,
      this.dydt,
      this.t,
      this.n,
      (this.n = t.length),
      (this.y = t),
      (this.t = i),
      (s = e),
      (this.dydt = s.getDerivs(this.y, this.t)),
      (r = new Array(this.n)),
      (this.takeStep = function (t) {
        for (d = t / 2, l = this.t + d, a = 0; a < this.n; a++)
          r[a] = this.y[a] + d * this.dydt[a];
        for (n = s.getDerivs(r, l), a = 0; a < this.n; a++)
          r[a] = this.y[a] + d * n[a];
        for (o = s.getDerivs(r, l), a = 0; a < this.n; a++)
          r[a] = this.y[a] + t * o[a];
        for (h = s.getDerivs(r, this.t + t), a = 0; a < this.n; a++)
          this.y[a] += (t / 6) * (this.dydt[a] + 2 * n[a] + 2 * o[a] + h[a]);
        (this.t += t), (this.dydt = s.getDerivs(this.y, this.t));
      });
  };

var Water = function (t, i, e, s, a, n, o, h, r, d, l, p) {
  var f,
    y,
    u,
    g,
    m,
    c,
    v,
    P,
    M,
    T,
    w,
    z,
    S,
    x,
    k,
    D,
    A,
    q,
    b,
    W,
    B,
    C,
    N = new Array(5),
    I = d,
    X = p,
    R = l;
  this.press,
    this.temp,
    this.mtot,
    (M = t),
    (z = e),
    (S = s),
    (x = a),
    (w = o),
    (D = (k = i) - engine.noz.vol()),
    (T = h + (D * S) / (n * z)),
    (W = r),
    (this.getDerivs = function (t, i) {
      (g = t[1]),
        (A = t[2]),
        (q = t[3]),
        (B = i),
        engine.noz.setH(q),
        (v = M / engine.noz.area()),
        (b = engine.noz.vol()),
        (this.mtot = T + R * b),
        (P = D / (k - b)),
        (this.press = S * Math.pow(P, x)),
        this.press < X && (this.press = X),
        (this.temp = z * Math.pow(P, x - 1)),
        (y = R * M * q * q - engine.noz.funcB() * this.mtot),
        (u = 0.5 * (v * v - 1) * A * A * this.mtot),
        (f = R * M * (1 - v) * A * A - w * g * Math.abs(g)),
        (c = (u + f * q + ((this.press - X) * W * this.mtot) / R) / y),
        (m = (f - R * M * q * c) / this.mtot - I);
      var e = R * M * (1 - v) * A * A;
      return (N[0] = g), (N[1] = m), (N[2] = c), (N[3] = A * v), (N[4] = e), N;
    }),
    (this.changePT = function (t, i) {
      (S *= t), (z *= i);
    }),
    (this.addTime = function () {
      if (0 == B) C = 3 * Math.sqrt(-q / (v * c));
      else if (this.press > X) {
        var t = (X - this.press) / (R * q);
        C = (-Math.sqrt(A * A - (2 * t * q) / v) - A) / t;
      } else C = 0;
      return C;
    });
};
