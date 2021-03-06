(this.webpackJsonpshopoholic = this.webpackJsonpshopoholic || []).push([
  [0],
  {
    161: function (e, t, a) {},
    378: function (e, t, a) {
      "use strict";
      a.r(t);
      a(161);
      var n = a(5),
        s = a.n(n),
        r = a(150),
        c = a.n(r),
        i = a(30),
        o = a(153),
        l = a(3),
        d = a.n(l),
        u = {},
        p = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : u,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_PHONE_SUCCESS":
              var a = d.a.indexBy(d.a.prop("id"), t.payload);
              return d.a.merge(e, a);
            case "LOAD_MORE_SUCCESS":
              var n = d.a.indexBy(d.a.prop("id"), t.payload);
              return d.a.merge(e, n);
            case "FETCH_PHONE_BY_ID_SUCCESS":
              return d.a.assoc(t.payload.id, t.payload, e);
            default:
              return e;
          }
        },
        h = { ids: [], search: "" },
        m = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : h,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_PHONE_SUCCESS":
              return d.a.merge(e, { ids: d.a.pluck("id", t.payload) });
            case "LOAD_MORE_SUCCESS":
              var a = d.a.pluck("id", t.payload);
              return d.a.merge(e, { ids: d.a.concat(a, e.ids) });
            case "SEARCH_PHONE":
              return (
                console.log("text to be searched is ", t.payload),
                d.a.merge(e, { search: t.payload })
              );
            default:
              return e;
          }
        },
        b = { id: null },
        j = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_PHONE_BY_ID_SUCCESS":
              return d.a.merge(e, { id: d.a.prop("id", t.payload) });
            default:
              return e;
          }
        },
        O = { invertedDiscount: 1, code: "" },
        f = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : O,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "APPLY_COUPON_CODE":
              return (e = t.payload);
            default:
              return e;
          }
        },
        g = a(64),
        v = [],
        x = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : v,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "ADD_PHONE_TO_BASKET":
              return d.a.append(t.payload, e);
            case "REMOVE_PHONE_FROM_BASKET":
              return d.a.without(d.a.of(t.payload), e);
            case "CLEAN_BASKET":
              return v;
            default:
              return e;
          }
        },
        N = {
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          isRegistered: !1,
          isLoggedIn: !1,
          userId: "",
        },
        y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : N,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "SET_PROFILE":
              return (e = t.payload);
            default:
              return e;
          }
        },
        C = {},
        w = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : C,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_CATEGORIES_SUCCESS":
              var a = d.a.indexBy(d.a.prop("id"), t.payload);
              return d.a.merge(e, a);
            default:
              return e;
          }
        },
        k = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || i.d,
        S = a(11),
        P = a(8),
        E = function (e, t) {
          return d.a.prop(t, e.phone);
        },
        I = function (e) {
          return d.a.path(["params", "id"], e);
        },
        _ = function (e, t) {
          var a = I(t);
          return d.a.compose(
            d.a.filter(function (t) {
              return d.a.contains(e.PhonesPage.search, d.a.prop("name", t));
            }),
            d.a.when(
              d.a.always(a),
              d.a.filter(function (e) {
                return d.a.equals(a, d.a.prop("categoryId", e));
              })
            ),
            d.a.map(function (t) {
              return E(e, t);
            })
          )(e.PhonesPage.ids);
        },
        A = function (e) {
          return d.a
            .map(function (t) {
              return E(e, t);
            }, e.Basket)
            .reduce(function (t, a) {
              return (
                Math.round((t + a.price) * e.Coupon.invertedDiscount * 100) /
                100
              );
            }, 0);
        },
        T = function (e) {
          return e.Basket.length;
        },
        B = function (e) {
          return d.a.values(e.Categories);
        },
        H = function (e) {
          var t = d.a.uniq(e.Basket),
            a = d.a.compose(
              d.a.map(function (t) {
                return d.a.assoc(
                  "count",
                  ((a = t.id),
                  d.a.compose(
                    d.a.length,
                    d.a.filter(function (e) {
                      return d.a.equals(a, e);
                    })
                  )(e.Basket)),
                  t
                );
                var a;
              }),
              d.a.map(function (t) {
                return E(e, t);
              })
            )(t);
          return console.log("Phones in basket are ", a), a;
        },
        F = a(0),
        R = Object(S.b)(function (e) {
          return { totalBasketCount: T(e), totalPrice: A(e) };
        })(function (e) {
          var t = e.totalBasketCount,
            a = e.totalPrice;
          return Object(F.jsx)(P.a, {
            to: "/basket",
            id: "dLabel",
            children: Object(F.jsxs)("button", {
              className: "btn btn-default btn-block",
              title: "View Basket",
              children: [
                Object(F.jsx)("span", {
                  className: "glyphicon glyphicon-shopping-cart",
                }),
                " : ",
                t,
                " item(s) ($",
                a,
                ")",
              ],
            }),
          });
        }),
        V = a(89),
        L = a.n(V),
        D = Object(i.d)(
          P.e,
          Object(S.b)(function (e, t) {
            return { categories: B(e), activeCategoryId: I(t) };
          })
        )(function (e) {
          var t = e.categories,
            a = e.activeCategoryId;
          return Object(F.jsxs)("div", {
            className: "well",
            children: [
              Object(F.jsx)("span", {
                className: "lead",
                children: "Brand Filter",
              }),
              Object(F.jsxs)("div", {
                className: "list-group",
                children: [
                  (function () {
                    var e = L()({
                      "list-group-item": !0,
                      active: d.a.isNil(a),
                    });
                    return Object(F.jsx)(P.a, {
                      to: "/",
                      className: e,
                      children: "All",
                    });
                  })(),
                  t.map(function (e, t) {
                    return (function (e, t) {
                      var n = d.a.propEq("id", a),
                        s = L()({ "list-group-item": !0, active: n(e) });
                      return Object(F.jsx)(
                        P.a,
                        {
                          to: "/categories/".concat(e.id),
                          className: s,
                          children: e.name,
                        },
                        t
                      );
                    })(e, t);
                  }),
                ],
              }),
            ],
          });
        }),
        U = a(20),
        z = a(21),
        G = a(14),
        M = a(23),
        K = a(22),
        Y = (function (e) {
          Object(M.a)(a, e);
          var t = Object(K.a)(a);
          function a(e) {
            var n;
            return (
              Object(U.a)(this, a),
              ((n = t.call(this, e)).handleSubmit = function (e) {
                e.preventDefault(),
                  analytics.identify("", { email: n.state.emailValue }),
                  analytics.track("Newsletter Subscribed", {
                    category: "Newsletter",
                  }),
                  alert(
                    "Thank you for subscribing, " + n.state.emailValue + "!"
                  );
              }),
              (n.onNewsletterInputChange = function (e) {
                var t = e.target.value;
                n.setState({ emailValue: t });
              }),
              (n.state = { emailValue: "" }),
              (n.handleSubmit = n.handleSubmit.bind(Object(G.a)(n))),
              (n.onNewsletterInputChange = n.onNewsletterInputChange.bind(
                Object(G.a)(n)
              )),
              n
            );
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(F.jsxs)("div", {
                    className: "well blosd",
                    children: [
                      Object(F.jsx)("span", {
                        className: "lead",
                        children: "Newsletter Subscription",
                      }),
                      Object(F.jsx)("form", {
                        onSubmit: this.handleSubmit,
                        children: Object(F.jsxs)("div", {
                          className: "input-group",
                          children: [
                            Object(F.jsx)("input", {
                              type: "text",
                              placeholder: "Email Address",
                              className: "form-control",
                              value: this.state.searchValue,
                              onChange: this.onNewsletterInputChange,
                            }),
                            Object(F.jsx)("span", {
                              className: "input-group-btn",
                              children: Object(F.jsx)("button", {
                                className: "btn btn-default",
                                children: Object(F.jsx)("span", {
                                  className: "glyphicon glyphicon-envelope",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        q = Object(S.b)(void 0, function (e) {
          return {};
        })(Y),
        $ = function (e) {
          return e.Profile;
        },
        J = (function (e) {
          Object(M.a)(a, e);
          var t = Object(K.a)(a);
          function a(e) {
            var n;
            return (
              Object(U.a)(this, a),
              ((n = t.call(this, e)).state = {
                isLoggedIn: e.isLoggedIn,
                isRegistered: e.isRegistered,
                username: e.username,
                firstName: e.firstName,
                lastName: e.lastName,
              }),
              n
            );
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(F.jsxs)("div", {
                    className: "itemButton",
                    children: [
                      !this.state.isLoggedIn &&
                        Object(F.jsx)(P.a, {
                          to: "/profile",
                          id: "dLabel",
                          children: Object(F.jsxs)("button", {
                            style: {
                              width: "60%",
                              borderRadius: "4px",
                              backgroundColor: "#101940",
                              border: "4",
                              color: "white",
                              marginTop: "160px",
                            },
                            className: "btn btn-default btn-block",
                            children: [
                              Object(F.jsx)("span", {
                                className: "glyphicon glyphicon-user",
                              }),
                              this.state.isLoggedIn || this.state.isRegistered
                                ? " Sign In"
                                : " Register",
                            ],
                          }),
                        }),
                      this.state.isLoggedIn &&
                        Object(F.jsxs)("div", {
                          children: [
                            "Hi ",
                            this.state.firstName,
                            " ",
                            this.state.lastName,
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        W = Object(S.b)(function (e) {
          return $(e);
        })(J),
        Q = function () {
          return Object(F.jsxs)("div", {
            children: [Object(F.jsx)(D, {}), Object(F.jsx)(q, {})],
          });
        },
        X = function (e) {
          var t = e.children;
          return Object(F.jsxs)("div", {
            className: "view-container",
            children: [
              Object(F.jsx)("div", {
                className: "web-header",
                children: Object(F.jsxs)("div", {
                  className: "row",
                  style: { margin: "20px" },
                  children: [
                    Object(F.jsxs)("div", {
                      className: "col-md-8",
                      children: [
                        Object(F.jsx)("img", {
                          className: "img-logo",
                          src: "/uploads/shoes.png",
                          alt: "Apple iPhone 5c",
                        }),
                        Object(F.jsx)("h1", { children: "Kicks Company" }),
                      ],
                    }),
                    Object(F.jsx)("div", {
                      className: "header-cart col-md-2",
                      children: Object(F.jsx)(R, {}),
                    }),
                    Object(F.jsx)("div", {
                      className: "header-account col-md-2",
                      children: Object(F.jsx)(W, {}),
                    }),
                  ],
                }),
              }),
              Object(F.jsx)("div", {
                className: "container",
                children: Object(F.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(F.jsx)("div", {
                      className: "col-md-3",
                      children: Object(F.jsx)(Q, {}),
                    }),
                    Object(F.jsx)("div", {
                      className: "col-md-9",
                      children: t,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Z = a(9),
        ee = a.n(Z),
        te = a(18),
        ae = [
          {
            id: "1",
            categoryId: "1",
            name: "Nike Air Max 270",
            type: "Mens",
            brand: "Nike",
            size: "8-9",
            description: "Nike Air Max 270 in a size 8-9 color black",
            color: "black",
            price: 149.99,
            image: "/uploads/Nike01 (1).jpeg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp f.2.4",
            weight: "132 grams",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB",
          },
          {
            id: "2",
            categoryId: "1",
            name: "Nike Air Force 1",
            type: "Kids",
            brand: "Nike",
            description: "Nike Air Force 1 in a size 3-4 color white",
            size: "3-4",
            color: "white",
            price: 74.99,
            image: "/uploads/Nike02 (1).jpeg",
            cpu: "1.4GHz Apple A8",
            camera: "8mp f/2.2",
            weight: "129g",
            display: "4.7 326 pixel density",
            battery: "1810 mAh",
            memory: "32GB",
          },
          {
            id: "3",
            categoryId: "2",
            name: "Adidas Superstar",
            type: "Womens",
            brand: "Adidas",
            description:
              "The adidas Superstar Shoes first stepped onto the basketball hardwood in 1970. It didn't take long for them to make the leap from athletic gear",
            price: 100,
            size: "7-8",
            color: "white striped",
            image: "/uploads/Adidas01 (1).jpg",
            cpu: "Quad-core 1.2 GHz Cortex-A53",
            camera: "12 MP, f/2.1",
            weight: "128g",
            display: "5.0 294 pixel density",
            battery: "2300 mAh",
            memory: "8GB",
          },
          {
            id: "4",
            categoryId: "2",
            name: "Adidas Grand Court",
            brand: "Adidas",
            type: "Mens",
            color: "white",
            description: "White Adidas Grand Court shoes.",
            size: "7-8",
            price: 129.99,
            image: "/uploads/Adidas02 (1).jpg",
            cpu: "Quad-core 2.2 GHz Krait 400",
            camera: "20 MP, f/2.4",
            weight: "209 grams",
            display: "6.0 367 pixel density",
            battery: "3400 mAh",
            memory: "32GB",
          },
          {
            id: "5",
            categoryId: "3",
            name: "Puma SpeedCat LS",
            brand: "Puma",
            type: "Womens",
            size: "8-9",
            color: "black",
            description: "The Puma SpeedCat LS Trainers in black",
            price: 220,
            image: "/uploads/Puma01 (1).jpg",
            cpu: "Quad-core 1.7 GHz Krait 300",
            camera: "4mp f/2.0",
            weight: "143 grams",
            display: "4.7 469 pixel density",
            battery: "2300 mAh",
            memory: "64GB",
          },
          {
            id: "6",
            categoryId: "3",
            name: "Puma Jay-Z Hybrid",
            brand: "Puma",
            color: "custom",
            type: "Mens",
            size: "9-10",
            description: "The Jay-Z Hybrid Puma collaboration sneakers.",
            price: 90,
            image: "/uploads/Puma02 (1).jpg",
            cpu: "Octa-core (4x2.1 GHz Cortex-A57 & 4x1.5 GHz Cortex-A53)",
            camera: "8mp (3264x2448)",
            weight: "138 grams",
            display: "5.1 577 pixel density",
            battery: "2550 mAh",
            memory: "128GB",
          },
        ],
        ne = [
          { id: "1", name: "Nike" },
          { id: "2", name: "Adidas" },
          { id: "3", name: "Puma" },
          { id: "4", name: "Converse" },
          { id: "5", name: "Heelys" },
        ],
        se = (function () {
          var e = Object(te.a)(
            ee.a.mark(function e() {
              return ee.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise(function (e) {
                          e(ae);
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        re = (function () {
          var e = Object(te.a)(
            ee.a.mark(function e(t) {
              return ee.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise(function (e, a) {
                          console.log("Id in api fetchPhones ", t),
                            e(d.a.find(d.a.propEq("id", t), ae));
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ce = (function () {
          var e = Object(te.a)(
            ee.a.mark(function e() {
              return ee.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise(function (e) {
                          e(ne);
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ie = function (e) {
          return function (t) {
            t({ type: "ADD_PHONE_TO_BASKET", payload: e });
          };
        },
        oe = (function (e) {
          Object(M.a)(a, e);
          var t = Object(K.a)(a);
          function a() {
            var e;
            Object(U.a)(this, a);
            for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
              s[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(s))).renderPhone = function (
                t,
                a
              ) {
                var n = e.props.addPhoneToBasket;
                "".concat(d.a.take(60, t.description), "...");
                return Object(F.jsxs)(
                  "div",
                  {
                    className: "col-sm-4 col-lg-4 col-md-4 book-list",
                    children: [
                      Object(F.jsx)("div", {
                        className: "thumbnail",
                        children: Object(F.jsx)("img", {
                          className: "img-thumbnail",
                          src: t.image,
                          alt: t.name,
                        }),
                      }),
                      Object(F.jsxs)("div", {
                        className: "caption",
                        children: [
                          Object(F.jsxs)("h4", {
                            className: "pull-right",
                            children: ["$", t.price],
                          }),
                          Object(F.jsx)("h4", { children: t.name }),
                          Object(F.jsxs)("p", {
                            className: "itemButton listing",
                            children: [
                              Object(F.jsx)("button", {
                                className: "btn btn-primary",
                                onClick: function () {
                                  return n(t);
                                },
                                children: "Buy Now",
                              }),
                              Object(F.jsx)(P.a, {
                                to: "/Phones/".concat(t.id),
                                className: "btn btn-default",
                                onClick: function () {
                                  return le(t);
                                },
                                children: "More Info",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  a
                );
              }),
              e
            );
          }
          return (
            Object(z.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  window.analytics.page("Home"),
                    this.props.fetchPhones(),
                    this.props.fetchCategories();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.phones;
                  return Object(F.jsx)("div", {
                    children: Object(F.jsx)("div", {
                      className: "books row",
                      children: t.map(function (t, a) {
                        return e.renderPhone(t, a);
                      }),
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component);
      function le(e) {
        analytics.track("Product Clicked", {
          name: e.name,
          brand: e.brand,
          category: "Products",
        });
      }
      var de = Object(S.b)(
          function (e, t) {
            return { phones: _(e, t) };
          },
          function (e) {
            return {
              fetchPhones: function () {
                return e(
                  (function () {
                    var e = Object(te.a)(
                      ee.a.mark(function e(t) {
                        var a;
                        return ee.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: "FETCH_PHONE_START" }),
                                    (e.next = 4),
                                    se()
                                  );
                                case 4:
                                  (a = e.sent),
                                    t({
                                      type: "FETCH_PHONE_SUCCESS",
                                      payload: a,
                                    }),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: "FETCH_PHONE_FAIL",
                                      payload: e.t0,
                                      error: !0,
                                    });
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              addPhoneToBasket: function (t) {
                e(ie(t.id)),
                  analytics.track("Product Added", {
                    name: t.name,
                    price: t.price,
                    brand: t.brand,
                    type: t.type,
                    size: t.size,
                    color: t.color,
                    description: t.description,
                    id: t.id,
                  });
              },
              fetchCategories: function () {
                return e(
                  (function () {
                    var e = Object(te.a)(
                      ee.a.mark(function e(t, a) {
                        var n;
                        return ee.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: "FETCH_CATEGORIES_START" }),
                                    (e.next = 4),
                                    ce()
                                  );
                                case 4:
                                  (n = e.sent),
                                    t({
                                      type: "FETCH_CATEGORIES_SUCCESS",
                                      payload: n,
                                    }),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: "FETCH_CATEGORIES_FAILURE",
                                      payload: e.t0,
                                      error: !0,
                                    });
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function (t, a) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
            };
          }
        )(oe),
        ue = a(160),
        pe = (function (e) {
          Object(M.a)(a, e);
          var t = Object(K.a)(a);
          function a() {
            var e;
            Object(U.a)(this, a);
            for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)
              s[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(s))).componentDidMount =
                function () {
                  window.analytics.page("Shoe Info"),
                    e.props.fetchPhoneById(e.props.params.id);
                }),
              (e.renderFields = function () {
                var t = e.props.phone;
                return d.a
                  .compose(
                    d.a.toPairs,
                    d.a.pick(["brand", "type", "color", "size"])
                  )(t)
                  .map(function (e) {
                    var t = Object(ue.a)(e, 2),
                      a = t[0],
                      n = t[1];
                    return Object(F.jsxs)(
                      "div",
                      {
                        className: "column",
                        children: [
                          Object(F.jsx)("div", {
                            className: "ab-details-title",
                            children: Object(F.jsxs)("p", {
                              children: [" ", a, " "],
                            }),
                          }),
                          Object(F.jsx)("div", {
                            className: "ab-details-info",
                            children: Object(F.jsxs)("p", {
                              children: [" ", n, " "],
                            }),
                          }),
                        ],
                      },
                      a
                    );
                  });
              }),
              (e.renderContent = function () {
                var t = e.props.phone;
                return Object(F.jsxs)("div", {
                  children: [
                    Object(F.jsxs)("div", {
                      className: "thumbnail",
                      children: [
                        Object(F.jsx)("div", {
                          className: "col-md-6",
                          children: Object(F.jsx)("img", {
                            className: "img-thumbnail",
                            src: t.image,
                            alt: t.name,
                          }),
                        }),
                        Object(F.jsx)("div", {
                          className: "col-md-6",
                          children: e.renderFields(),
                        }),
                      ],
                    }),
                    Object(F.jsx)("div", { className: "caption-full" }),
                  ],
                });
              }),
              (e.renderSideBar = function () {
                var t = e.props,
                  a = t.phone,
                  n = t.addPhoneToBasket;
                return Object(F.jsxs)("div", {
                  children: [
                    Object(F.jsx)("div", {
                      children: Object(F.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(F.jsx)("h1", { children: a.name }),
                          Object(F.jsxs)("h2", { children: ["$", a.price] }),
                          Object(F.jsx)("p", { children: a.description }),
                        ],
                      }),
                    }),
                    Object(F.jsx)(P.a, {
                      to: "/",
                      className: "btn btn-info btn-block",
                      children: "Back to Store",
                    }),
                    Object(F.jsx)("button", {
                      type: "button",
                      className: "btn btn-success btn-block",
                      onClick: function () {
                        return n(a);
                      },
                      children: "Add To Cart",
                    }),
                  ],
                });
              }),
              e
            );
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.phone;
                  return Object(F.jsxs)("div", {
                    className: "view-container",
                    children: [
                      Object(F.jsx)("div", {
                        className: "web-header",
                        children: Object(F.jsxs)("div", {
                          className: "row",
                          style: { margin: "20px" },
                          children: [
                            Object(F.jsxs)("div", {
                              className: "col-md-8",
                              children: [
                                Object(F.jsx)("img", {
                                  className: "img-logo",
                                  src: "/uploads/phone123.png",
                                  alt: "Apple iPhone 5c",
                                }),
                                Object(F.jsx)("h1", {
                                  children: "The Phone Shop",
                                }),
                              ],
                            }),
                            Object(F.jsx)("div", {
                              className: "header-cart col-md-2",
                              children: Object(F.jsx)(R, {}),
                            }),
                            Object(F.jsx)("div", {
                              className: "header-account col-md-2",
                              children: Object(F.jsx)(W, {}),
                            }),
                          ],
                        }),
                      }),
                      Object(F.jsxs)("div", {
                        className: "container",
                        children: [
                          Object(F.jsx)("div", {
                            className: "col-md-8",
                            children: e && this.renderContent(),
                          }),
                          Object(F.jsx)("div", {
                            className: "col-md-4",
                            children: e && this.renderSideBar(),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        he = Object(S.b)(
          function (e) {
            return { phone: E(e, e.PhonePage.id) };
          },
          function (e) {
            return {
              fetchPhoneById: function (t) {
                e(
                  (function (e) {
                    return (function () {
                      var t = Object(te.a)(
                        ee.a.mark(function t(a, n) {
                          var s;
                          return ee.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: "FETCH_PHONE_BY_ID_START" }),
                                      (t.next = 4),
                                      re(e)
                                    );
                                  case 4:
                                    (s = t.sent),
                                      a({
                                        type: "FETCH_PHONE_BY_ID_SUCCESS",
                                        payload: s,
                                      }),
                                      (t.next = 11);
                                    break;
                                  case 8:
                                    (t.prev = 8),
                                      (t.t0 = t.catch(0)),
                                      a({
                                        type: "FETCH_PHONE_BY_ID_FAILURE",
                                        payload: t.t0,
                                        error: !0,
                                      });
                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 8]]
                          );
                        })
                      );
                      return function (e, a) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(t)
                );
              },
              addPhoneToBasket: function (t) {
                e(ie(t.id)),
                  analytics.track("Product Added", {
                    name: t.name,
                    price: t.price,
                    brand: t.brand,
                    type: t.type,
                    size: t.size,
                    color: t.color,
                    description: t.description,
                    id: t.id,
                  });
              },
            };
          }
        )(pe),
        me = (function (e) {
          Object(M.a)(a, e);
          var t = Object(K.a)(a);
          function a(e) {
            var n;
            return (
              Object(U.a)(this, a),
              ((n = t.call(this, e)).handleSubmit = function (e) {
                e.preventDefault(),
                  "SUPER-10" === n.state.couponCode
                    ? (n.setState({
                        couponCode: n.state.couponCode,
                        message: "10% discount applied",
                      }),
                      n.props.applyDiscount(0.9, n.state.couponCode))
                    : n.setState({
                        couponCode: n.state.couponCode,
                        message: "Invalid Coupon Code",
                      });
              }),
              (n.onCouponCodeInputChange = function (e) {
                var t = e.target.value;
                n.setState({ couponCode: t });
              }),
              (n.state = { couponCode: "", message: "" }),
              (n.handleSubmit = n.handleSubmit.bind(Object(G.a)(n))),
              (n.onCouponCodeInputChange = n.onCouponCodeInputChange.bind(
                Object(G.a)(n)
              )),
              n
            );
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(F.jsxs)("div", {
                    className: "well blosd",
                    children: [
                      Object(F.jsx)("span", {
                        className: "lead",
                        children: "Apply Coupon Code",
                      }),
                      Object(F.jsx)("form", {
                        onSubmit: this.handleSubmit,
                        children: Object(F.jsxs)("div", {
                          className: "input-group",
                          children: [
                            Object(F.jsx)("input", {
                              type: "text",
                              className: "form-control",
                              value: this.state.couponCode,
                              onChange: this.onCouponCodeInputChange,
                            }),
                            Object(F.jsx)("span", {
                              className: "input-group-btn",
                              children: Object(F.jsx)("button", {
                                className: "btn btn-default",
                                children: Object(F.jsx)("span", {
                                  className: "glyphicon glyphicon-gift",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      this.state.message,
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        be = Object(S.b)(void 0, function (e) {
          return {
            applyDiscount: function (t, a) {
              return e(
                (function (e, t) {
                  return function (a) {
                    a({
                      type: "APPLY_COUPON_CODE",
                      payload: { invertedDiscount: e, code: t },
                    });
                  };
                })(t, a)
              );
            },
          };
        })(me),
        je = Object(S.b)(
          function (e) {
            return { phones: H(e), totalPrice: A(e) };
          },
          function (e) {
            return {
              removePhoneFromBasket: function (t) {
                return e(
                  (function (e) {
                    return (function () {
                      var t = Object(te.a)(
                        ee.a.mark(function t(a) {
                          return ee.a.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  a({
                                    type: "REMOVE_PHONE_FROM_BASKET",
                                    payload: e,
                                  });
                                case 1:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(t)
                );
              },
              cleanBasket: function () {
                return e(function (e) {
                  e({ type: "CLEAN_BASKET" });
                });
              },
              basketCheckout: function (t, a) {
                e(
                  (function (e) {
                    return function (t, a) {
                      var n = a().Coupon,
                        s = (n.code, n.invertedDiscount);
                      e.reduce(function (e, t) {
                        return e + (t.price * s || 0);
                      }, 0),
                        alert("Checkout Flow Begins Here...");
                    };
                  })(t)
                );
                var n = Math.random().toString(36).substring(7);
                analytics.track("Checkout Clicked", {
                  order_id: n,
                  total: a,
                  products: t,
                  category: "Checkout",
                });
              },
            };
          }
        )(function (e) {
          var t = e.phones,
            a = e.totalPrice,
            n = e.removePhoneFromBasket,
            s = e.cleanBasket,
            r = e.basketCheckout;
          e.orderId;
          analytics.page("Shopping Cart");
          var c = d.a.isEmpty(t);
          return Object(F.jsx)("div", {
            className: "view-container",
            children: Object(F.jsx)("div", {
              className: "container",
              children: Object(F.jsxs)("div", {
                className: "row",
                children: [
                  Object(F.jsx)("div", {
                    className: "col-md-9",
                    children: Object(F.jsxs)("div", {
                      children: [
                        c &&
                          Object(F.jsx)("div", {
                            children: " Your shopping cart is empty ",
                          }),
                        Object(F.jsx)("div", {
                          className: "table-responsive",
                          children: Object(F.jsx)("table", {
                            className:
                              "table-bordered table-striped table-condensed cf",
                            children: Object(F.jsx)("tbody", {
                              children: t.map(function (e, t) {
                                return Object(F.jsxs)(
                                  "tr",
                                  {
                                    className: "item-checout",
                                    children: [
                                      Object(F.jsx)("td", {
                                        className: "first-column-checkout",
                                        children: Object(F.jsx)("img", {
                                          className: "img-thumbnail",
                                          src: e.image,
                                          alt: e.name,
                                        }),
                                      }),
                                      Object(F.jsx)("td", { children: e.name }),
                                      Object(F.jsxs)("td", {
                                        children: ["$", e.price],
                                      }),
                                      Object(F.jsx)("td", {
                                        children: e.count,
                                      }),
                                      Object(F.jsx)("td", {
                                        children: Object(F.jsx)("span", {
                                          className:
                                            "glyphicon glyphicon-remove",
                                          onClick: function () {
                                            return n(e.id);
                                          },
                                        }),
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                            }),
                          }),
                        }),
                        d.a.not(c) &&
                          Object(F.jsx)("div", {
                            className: "row",
                            children: Object(F.jsxs)("div", {
                              className: "pull-right total-user-checkout",
                              children: [
                                Object(F.jsx)("b", { children: "Total:" }),
                                "$",
                                a,
                              ],
                            }),
                          }),
                      ],
                    }),
                  }),
                  Object(F.jsx)("div", {
                    className: "col-md-3 btn-user-checkout",
                    children: Object(F.jsxs)("div", {
                      children: [
                        Object(F.jsx)(be, {}),
                        d.a.not(c) &&
                          Object(F.jsxs)("div", {
                            children: [
                              Object(F.jsxs)("button", {
                                className: "btn btn-danger",
                                onClick: function () {
                                  return s();
                                },
                                children: [
                                  Object(F.jsx)("span", {
                                    className: "glyphicon glyphicon-trash",
                                  }),
                                  "Clean Cart",
                                ],
                              }),
                              Object(F.jsxs)("button", {
                                className: "btn btn-success",
                                onClick: function () {
                                  return r(t, a);
                                },
                                children: [
                                  Object(F.jsx)("span", {
                                    className: "glyphicon glyphicon-envelope",
                                  }),
                                  "Checkout",
                                ],
                              }),
                            ],
                          }),
                        Object(F.jsxs)(P.a, {
                          className: "btn btn-default",
                          to: "/",
                          children: [
                            Object(F.jsx)("span", {
                              className:
                                "glyphicon glyphicon-circle-arrow-left",
                            }),
                            Object(F.jsx)("span", {
                              children: " Continue Shopping",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        }),
        Oe = a(159),
        fe = a.n(Oe),
        ge = (function (e) {
          Object(M.a)(a, e);
          var t = Object(K.a)(a);
          function a(e) {
            var n;
            return (
              Object(U.a)(this, a),
              ((n = t.call(this, e)).onUsernameInputChange = function (e) {
                var t = e.target.value;
                n.setState({ usernameValue: t });
              }),
              (n.onPasswordInputChange = function (e) {
                var t = e.target.value;
                n.setState({ passwordValue: t });
              }),
              (n.onFirstNameInputChange = function (e) {
                var t = e.target.value;
                n.setState({ firstNameValue: t });
              }),
              (n.onLastNameInputChange = function (e) {
                var t = e.target.value;
                n.setState({ lastNameValue: t });
              }),
              (n.handleSubmit = function (e) {
                if (
                  (e.preventDefault(),
                  n.state.usernameValue &&
                    n.state.passwordValue &&
                    n.state.firstNameValue &&
                    n.state.lastNameValue)
                ) {
                  var t = !0 === n.state.isRegisteredValue,
                    a = n.props.userId
                      ? n.props.userId
                      : fe()(n.state.usernameValue);
                  n.props.setProfile({
                    username: n.state.usernameValue,
                    password: n.state.passwordValue,
                    firstName: n.state.firstNameValue,
                    lastName: n.state.lastNameValue,
                    isRegistered: !0,
                    isLoggedIn: t,
                    userId: a,
                  }),
                    P.d.push("/");
                } else n.setState({ message: "All fields are required" });
              }),
              (n.state = {
                usernameValue: e.username,
                passwordValue: e.password,
                firstNameValue: e.firstName,
                lastNameValue: e.lastName,
                isRegisteredValue: e.isRegistered,
                message: "",
              }),
              (n.handleSubmit = n.handleSubmit.bind(Object(G.a)(n))),
              (n.onUsernameInputChange = n.onUsernameInputChange.bind(
                Object(G.a)(n)
              )),
              (n.onPasswordInputChange = n.onPasswordInputChange.bind(
                Object(G.a)(n)
              )),
              (n.onFirstNameInputChange = n.onFirstNameInputChange.bind(
                Object(G.a)(n)
              )),
              (n.onLastNameInputChange = n.onLastNameInputChange.bind(
                Object(G.a)(n)
              )),
              n
            );
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(F.jsx)("div", {
                    className: "view-container",
                    children: Object(F.jsx)("div", {
                      className: "container",
                      children: Object(F.jsx)("div", {
                        className: "row",
                        children: Object(F.jsx)("div", {
                          className: "col-md-12",
                          children: Object(F.jsxs)("div", {
                            children: [
                              Object(F.jsxs)("form", {
                                onSubmit: this.handleSubmit,
                                children: [
                                  !this.state.isRegisteredValue &&
                                    Object(F.jsxs)("div", {
                                      className: "form-row",
                                      children: [
                                        Object(F.jsxs)("div", {
                                          className: "form-group col-md-3",
                                          children: [
                                            Object(F.jsx)("label", {
                                              htmlFor: "firstName",
                                              children: "First Name",
                                            }),
                                            Object(F.jsx)("input", {
                                              type: "text",
                                              className: "form-control",
                                              name: "firstName",
                                              value: this.state.firstNameValue,
                                              onChange:
                                                this.onFirstNameInputChange,
                                            }),
                                          ],
                                        }),
                                        Object(F.jsxs)("div", {
                                          className: "form-group col-md-3",
                                          children: [
                                            Object(F.jsx)("label", {
                                              htmlFor: "lastName",
                                              children: "Last Name",
                                            }),
                                            Object(F.jsx)("input", {
                                              type: "text",
                                              className: "form-control",
                                              name: "lastName",
                                              value: this.state.lastNameValue,
                                              onChange:
                                                this.onLastNameInputChange,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  !this.state.isLoggedIn &&
                                    Object(F.jsxs)("div", {
                                      className: "form-row",
                                      children: [
                                        Object(F.jsxs)("div", {
                                          className: "form-group col-md-3",
                                          children: [
                                            Object(F.jsx)("label", {
                                              htmlFor: "username",
                                              children: "Username",
                                            }),
                                            Object(F.jsx)("input", {
                                              type: "text",
                                              className: "form-control",
                                              name: "username",
                                              value: this.state.usernameValue,
                                              onChange:
                                                this.onUsernameInputChange,
                                            }),
                                          ],
                                        }),
                                        Object(F.jsxs)("div", {
                                          className: "form-group col-md-3",
                                          children: [
                                            Object(F.jsx)("label", {
                                              htmlFor: "password",
                                              children: "Password",
                                            }),
                                            Object(F.jsx)("input", {
                                              type: "password",
                                              className: "form-control",
                                              name: "password",
                                              onChange:
                                                this.onPasswordInputChange,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  !this.state.isLoggedInValue &&
                                    Object(F.jsx)("div", {
                                      className: "form-row",
                                      children: Object(F.jsxs)("div", {
                                        className: "form-group col-md-3",
                                        children: [
                                          Object(F.jsx)("button", {
                                            className: "btn btn-primary",
                                            children: Object(F.jsx)("span", {
                                              children: this.state
                                                .isRegisteredValue
                                                ? "Login"
                                                : "Complete Registration",
                                            }),
                                          }),
                                          Object(F.jsxs)("span", {
                                            children: [" ", this.state.message],
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                              Object(F.jsxs)(P.a, {
                                className: "btn btn-default",
                                to: "/",
                                children: [
                                  Object(F.jsx)("span", {
                                    className:
                                      "glyphicon glyphicon-circle-arrow-left",
                                  }),
                                  Object(F.jsx)("span", {
                                    children: " Continue Shopping",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        ve = Object(S.b)(
          function (e) {
            return $(e);
          },
          function (e) {
            return {
              setProfile: function (t) {
                var a;
                e(
                  ((a = t),
                  (function () {
                    var e = Object(te.a)(
                      ee.a.mark(function e(t, n) {
                        return ee.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                t({ type: "SET_PROFILE", payload: a });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, a) {
                      return e.apply(this, arguments);
                    };
                  })())
                ),
                  analytics.identify(t.userId, {
                    firstName: t.firstName,
                    lastName: t.lastName,
                    username: t.userName,
                  }),
                  analytics.track("User Registered", { category: "Account" });
              },
            };
          }
        )(ge),
        xe = Object(i.e)(
          Object(i.c)({
            routing: g.routerReducer,
            phone: p,
            PhonesPage: m,
            PhonePage: j,
            Basket: x,
            Coupon: f,
            Categories: w,
            Profile: y,
          }),
          k(Object(i.a)(o.a))
        ),
        Ne = Object(g.syncHistoryWithStore)(P.d, xe),
        ye = Object(F.jsx)(S.a, {
          store: xe,
          children: Object(F.jsxs)(P.c, {
            history: Ne,
            children: [
              Object(F.jsxs)(P.b, {
                component: X,
                children: [
                  Object(F.jsx)(P.b, { path: "/", component: de }),
                  Object(F.jsx)(P.b, {
                    path: "/categories/:id",
                    component: de,
                  }),
                ],
              }),
              Object(F.jsx)(P.b, { path: "/Phones/:id", component: he }),
              Object(F.jsx)(P.b, { path: "/basket", component: je }),
              Object(F.jsx)(P.b, { path: "/profile", component: ve }),
            ],
          }),
        });
      c.a.render(ye, document.getElementById("root"));
    },
  },
  [[378, 1, 2]],
]);
//# sourceMappingURL=main.35bf25e7.chunk.js.map
