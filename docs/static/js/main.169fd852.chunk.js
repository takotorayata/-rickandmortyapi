(this.webpackJsonprmapi = this.webpackJsonprmapi || []).push([
  [0],
  {
    104: function (e, t, a) {},
    107: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(0),
        n = a.n(r),
        c = a(24),
        s = a(58),
        i = a(56),
        o = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_CHARACTERS_LIST" === t.type ? t.characters : e;
        },
        l = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_EPISODES_LIST" === t.type ? t.episodes : e;
        },
        d = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_CHARACTERS_INFO" === t.type ? t.charsInfo : e;
        },
        j = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_EPISODES_INFO" === t.type ? t.epsInfo : e;
        },
        b = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_CHARACTERS_ERROR" === t.type ? t.isErrorOccurred : e;
        },
        u = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_EPISODES_ERROR" === t.type ? t.isErrorOccurred : e;
        },
        h = Object(s.a)({
          charactersReducer: o,
          episodesReducer: l,
          charactersInfoReducer: d,
          episodesInfoReducer: j,
          charactersErrorReducer: b,
          episodesErrorReducer: u
        }),
        p = (a(104), a(12)),
        x = a(169),
        O = a(179),
        f = a(178),
        m = "https://rickandmortyapi.com/api/episode/",
        v = function (e) {
          return { type: "SET_CHARACTERS_ERROR", isErrorOccurred: e };
        },
        g = function (e) {
          return { type: "SET_EPISODES_ERROR", isErrorOccurred: e };
        };
      function S(e, t, a) {
        fetch(a)
          .then(function (e) {
            return e.json();
          })
          .then(function (a) {
            "characters" === e
              ? a.error
                ? t(v(!0))
                : (t(v(!1)),
                  t({ type: "SET_CHARACTERS_LIST", characters: a.results }),
                  t({ type: "SET_CHARACTERS_INFO", charsInfo: a.info }))
              : a.error
              ? t(g(!0))
              : (t(g(!1)),
                t({ type: "SET_EPISODES_LIST", episodes: a.results }),
                t({ type: "SET_EPISODES_INFO", epsInfo: a.info }));
          });
      }
      var E = a(170),
        y = a(4),
        R = a(37),
        C = a(173),
        I = a(176),
        T = a(174),
        N = a(175),
        w = a(166),
        _ = a(171);
      function A(e) {
        for (
          var t = "",
            a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_",
            r = 0;
          r < e;
          r++
        )
          t += a.charAt(Math.floor(Math.random() * a.length));
        return t;
      }
      var k = a(2);
      function F(e) {
        var t = e.filters,
          a = e.setFilterString,
          r = e.handleChangePage,
          c = n.a.useState({}),
          s = Object(p.a)(c, 2),
          i = s[0],
          o = s[1],
          l = n.a.useState(!1),
          d = Object(p.a)(l, 2),
          j = d[0],
          b = d[1];
        function u(e) {
          o(
            Object(R.a)(
              Object(R.a)({}, i),
              {},
              Object(y.a)({}, e.target.name, e.target.value)
            )
          );
        }
        return Object(k.jsxs)(f.a, {
          children: [
            Object(k.jsx)("div", {
              className: "boxFilter",
              hidden: j,
              children: Object(k.jsx)(f.a, {
                sx: {
                  pt: 3,
                  pl: 3,
                  pr: 3,
                  display: "flex",
                  flexFlow: "wrap",
                  flexDirection: "row"
                },
                children: Object.entries(t).map(function (e) {
                  var t = Object(p.a)(e, 2),
                    a = t[0],
                    r = t[1];
                  return Array.isArray(r)
                    ? Object(k.jsxs)(
                        T.a,
                        {
                          className: "filter",
                          sx: { width: 200, m: 1 },
                          children: [
                            Object(k.jsx)(N.a, {
                              className: "filterTitle",
                              id: "demo-simple-select-label",
                              children: a
                            }),
                            Object(k.jsx)(w.a, {
                              className: "sel1",
                              labelId: "demo-simple-select-label",
                              id: "demo-simple-select",
                              value: i[a] || "",
                              label: a,
                              onChange: u,
                              name: a,
                              children: r.map(function (e) {
                                return Object(k.jsx)(
                                  _.a,
                                  { className: "sel", value: e, children: e },
                                  e
                                );
                              })
                            })
                          ]
                        },
                        A(10)
                      )
                    : Object(k.jsx)(
                        C.a,
                        {
                          id: "outlined-basic",
                          sx: { width: 200, m: 1 },
                          label: a,
                          variant: "outlined",
                          name: a,
                          value: i[a] || "",
                          onChange: u
                        },
                        a
                      );
                })
              })
            }),
            Object(k.jsxs)(f.a, {
              sx: { p: 3, display: "flex", flexDirection: "row" },
              children: [
                Object(k.jsx)(I.a, {
                  className: "btn",
                  onClick: function () {
                    b(!j);
                  },
                  sx: { mr: 3 },
                  children: "Hide"
                }),
                Object(k.jsx)(I.a, {
                  className: "btn",
                  onClick: function () {
                    var e = i;
                    Object.keys(e).forEach(function (t) {
                      return (e[t] = "");
                    }),
                      o(Object(R.a)(Object(R.a)({}, i), e)),
                      a(""),
                      r(null, 1, "");
                  },
                  sx: { mr: 3 },
                  children: "Clear"
                }),
                Object(k.jsx)(I.a, {
                  className: "btn",
                  onClick: function () {
                    var e = "";
                    for (var t in i) e += "&".concat(t, "=").concat(i[t]);
                    a(e), r(null, 1, e);
                  },
                  variant: "outlined",
                  children: "Apply filter"
                })
              ]
            })
          ]
        });
      }
      var P = a(180),
        D = a(181),
        L = a(182);
      function H(e) {
        var t = e.data;
        return Object(k.jsx)(P.a, {
          sx: {
            m: 1.5,
            width: 300,
            boxShadow: "0 5px 15px 0px rgba(0, 255, 255, 0.747)",
            backgroundColor: "rgb(33, 177, 182)",
            borderRadius: "20px"
          },
          children: Object(k.jsxs)(D.a, {
            className: "episCard",
            children: [
              Object(k.jsx)(L.a, {
                className: "episText",
                variant: "h5",
                component: "div",
                children: t.name
              }),
              Object(k.jsxs)(L.a, {
                className: "episText",
                sx: { mb: 1.5 },
                color: "text.secondary",
                children: [
                  t.episode,
                  Object(k.jsx)("br", {}),
                  "Air date: ",
                  t.air_date
                ]
              })
            ]
          })
        });
      }
      var B = a(183),
        M = a(188),
        G = a(14),
        J = a(167),
        W = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: 300,
          maxWidth: 500,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4
        },
        z = { maxHeight: 300, overflowY: "auto" };
      function Y(e) {
        var t = e.data,
          a = e.open,
          n = e.onClose,
          c = Object(r.useState)([]),
          s = Object(p.a)(c, 2),
          i = s[0],
          o = s[1];
        return (
          Object(r.useEffect)(
            function () {
              return (
                fetch(
                  m +
                    t.episode
                      .map(function (e) {
                        return e.split("/")[e.split("/").length - 1];
                      })
                      .join(",")
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    Array.isArray(e) ? o(Object(G.a)(e)) : o([e]);
                  }),
                o([])
              );
            },
            [t.episode, a]
          ),
          Object(k.jsx)("div", {
            children: Object(k.jsx)(J.a, {
              open: a,
              onClose: n,
              "aria-labelledby": "modal-modal-title",
              "aria-describedby": "modal-modal-description",
              children: Object(k.jsxs)(f.a, {
                className: "allInfo",
                sx: W,
                children: [
                  Object(k.jsx)(L.a, {
                    className: "cardsInfo",
                    id: "modal-modal-title",
                    variant: "h3",
                    component: "h2",
                    children: t.name
                  }),
                  Object(k.jsxs)(L.a, {
                    className: "cardsInfo",
                    sx: { mb: 1.5 },
                    color: "text.secondary",
                    children: ["Gender: ", t.gender]
                  }),
                  Object(k.jsxs)(L.a, {
                    className: "cardsInfo",
                    id: "modal-modal-description",
                    sx: { mt: 2 },
                    variant: "body2",
                    children: [
                      "Species: ",
                      t.species,
                      Object(k.jsx)("br", {}),
                      "Status: ",
                      t.status,
                      Object(k.jsx)("br", {}),
                      "Location: ",
                      t.location.name,
                      Object(k.jsx)("br", {}),
                      "Type: ",
                      t.type || "None",
                      Object(k.jsx)("br", {}),
                      "Origin: ",
                      t.origin.name,
                      Object(k.jsx)("br", {}),
                      "Created: ",
                      new Date(t.created).toLocaleDateString()
                    ]
                  }),
                  Object(k.jsxs)(f.a, {
                    id: "modal-modal-description",
                    sx: Object(R.a)({ mt: 2 }, z),
                    variant: "body2",
                    children: [
                      "Episodes: ",
                      i.length,
                      Object(k.jsx)("br", {}),
                      Object(k.jsx)("ul", {
                        children: i.map(function (e) {
                          return Object(k.jsxs)(
                            "li",
                            { children: ["[", e.episode, "] ", e.name] },
                            A(10)
                          );
                        })
                      })
                    ]
                  })
                ]
              })
            })
          })
        );
      }
      function q(e) {
        var t = e.data,
          a = Object(r.useState)(!1),
          n = Object(p.a)(a, 2),
          c = n[0],
          s = n[1];
        return Object(k.jsxs)(P.a, {
          sx: {
            m: 1.5,
            width: 300,
            boxShadow: "0 5px 15px 0px rgba(0, 255, 255, 0.747)",
            backgroundColor: "rgb(33, 177, 182)",
            borderRadius: "20px"
          },
          children: [
            Object(k.jsxs)(D.a, {
              children: [
                Object(k.jsx)(M.a, {
                  className: "images",
                  component: "img",
                  image: t.image,
                  alt: t.name + "image"
                }),
                Object(k.jsx)(L.a, {
                  className: "cardsInfo",
                  variant: "h5",
                  component: "div",
                  children: t.name
                }),
                Object(k.jsxs)(L.a, {
                  className: "cardsInfo",
                  sx: { mb: 1.5 },
                  children: ["Gender: ", t.gender]
                }),
                Object(k.jsxs)(L.a, {
                  className: "cardsInfo",
                  variant: "body2",
                  children: [
                    "Species: ",
                    t.species,
                    Object(k.jsx)("br", {}),
                    "Status: ",
                    t.status,
                    Object(k.jsx)("br", {}),
                    "Location: ",
                    t.location.name
                  ]
                })
              ]
            }),
            Object(k.jsx)(B.a, {
              children: Object(k.jsx)(I.a, {
                className: "cardsInfo1",
                size: "small",
                onClick: function () {
                  return s(!0);
                },
                children: "Details"
              })
            }),
            Object(k.jsx)(Y, {
              data: t,
              open: c,
              onClose: function () {
                return s(!1);
              }
            })
          ]
        });
      }
      var K = a(165),
        Q = Object(K.a)(function () {
          return {
            ul: {
              "& .MuiPaginationItem-root": {
                color: " rgb(0, 255, 255, 0.747)",
                "&:hover": { color: "rgb(0, 60, 255)" }
              }
            }
          };
        });
      var U = function (e) {
          var t = e.value,
            a = e.index,
            c = e.dispatch,
            s = e.content,
            i = e.info,
            o = e.error,
            l = e.contentType,
            d = e.filters,
            j = e.API;
          Object(r.useEffect)(
            function () {
              S(l, c, j);
            },
            [l, c, j]
          );
          var b = n.a.useState(1),
            u = Object(p.a)(b, 2),
            h = u[0],
            x = u[1],
            O = n.a.useState(""),
            m = Object(p.a)(O, 2),
            v = m[0],
            g = m[1],
            y = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : v;
              S(l, c, j + "?page=".concat(t) + a), x(t);
            },
            R = Q();
          return Object.keys(s).length && Object.keys(i).length
            ? Object(k.jsxs)("div", {
                hidden: t !== a,
                children: [
                  Object(k.jsx)(f.a, {
                    children: Object(k.jsx)(F, {
                      filters: d,
                      setFilterString: g,
                      handleChangePage: y
                    })
                  }),
                  Object(k.jsxs)(f.a, {
                    sx: {
                      p: 1,
                      pr: 5,
                      display: "flex",
                      flexFlow: "wrap",
                      justifyContent: "end"
                    },
                    children: [
                      i
                        ? Object(k.jsx)(f.a, {
                            sx: {
                              ml: 3,
                              mr: 3,
                              display: "flex",
                              color: "rgb(0, 255, 255, 0.747)",
                              fontFamily: "Creepster",
                              alignItems: "center"
                            },
                            children: i.count + " " + l
                          })
                        : null,
                      Object(k.jsx)(E.a, {
                        page: o ? 1 : h,
                        count: o ? 1 : i.pages,
                        onChange: y,
                        showFirstButton: !0,
                        showLastButton: !0,
                        classes: { ul: R.ul }
                      })
                    ]
                  }),
                  Object(k.jsx)(f.a, {
                    sx: {
                      p: 3,
                      display: "flex",
                      flexFlow: "wrap",
                      justifyContent: "space-around"
                    },
                    children: o
                      ? Object(k.jsx)(f.a, {
                          children: "There is nothing here"
                        })
                      : s.map(function (e) {
                          return "characters" === l
                            ? Object(k.jsx)(q, { data: e }, e.id)
                            : Object(k.jsx)(H, { data: e }, e.id);
                        })
                  }),
                  Object(k.jsx)(f.a, {
                    sx: {
                      p: 5,
                      pb: 10,
                      display: "flex",
                      justifyContent: "end"
                    },
                    children: Object(k.jsx)(E.a, {
                      classes: { ul: R.ul },
                      page: o ? 1 : h,
                      count: o ? 1 : i.pages,
                      onChange: y,
                      showFirstButton: !0,
                      showLastButton: !0
                    })
                  })
                ]
              })
            : null;
        },
        V = Object(i.b)(
          function (e, t) {
            return "characters" === t.contentType
              ? {
                  content: e.charactersReducer,
                  info: e.charactersInfoReducer,
                  error: e.charactersErrorReducer,
                  API: "https://rickandmortyapi.com/api/character/",
                  filters: {
                    name: "",
                    status: ["alive", "dead", "unknown", ""],
                    species: "",
                    type: "",
                    gender: ["female", "male", "genderless", "unknown", ""]
                  }
                }
              : {
                  content: e.episodesReducer,
                  info: e.episodesInfoReducer,
                  error: e.episodesErrorReducer,
                  API: m,
                  filters: { name: "", episode: "" }
                };
          },
          function (e) {
            return { dispatch: e };
          }
        )(U);
      function X() {
        var e = r.useState(0),
          t = Object(p.a)(e, 2),
          a = t[0],
          n = t[1];
        return Object(k.jsxs)(f.a, {
          sx: { width: "100%" },
          children: [
            Object(k.jsx)(f.a, {
              sx: { borderBottom: 1, borderColor: "divider" },
              children: Object(k.jsxs)(x.a, {
                sx: { pt: 3, pl: 3, pr: 3 },
                value: a,
                onChange: function (e, t) {
                  n(t);
                },
                children: [
                  Object(k.jsx)(O.a, {
                    className: "boxFilter",
                    label: "Characters"
                  }),
                  Object(k.jsx)(O.a, {
                    className: "boxFilter",
                    label: "Episodes"
                  })
                ]
              })
            }),
            Object(k.jsx)(V, { value: a, index: 0, contentType: "characters" }),
            Object(k.jsx)(V, { value: a, index: 1, contentType: "episodes" })
          ]
        });
      }
      var Z = function () {
          return Object(k.jsx)("div", {
            className: "App",
            children: Object(k.jsx)(X, {})
          });
        },
        $ = Object(s.b)(h);
      Object(c.render)(
        Object(k.jsx)(i.a, { store: $, children: Object(k.jsx)(Z, {}) }),
        document.getElementById("root")
      );
    }
  },
  [[107, 1, 2]]
]);
//# sourceMappingURL=main.169fd852.chunk.js.map
