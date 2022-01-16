(this.webpackJsonppecode = this.webpackJsonppecode || []).push([
	[0],
	{
		103: function (e, t, n) {},
		106: function (e, t, n) {
			'use strict';
			n.r(t);
			var r = n(0),
				a = n.n(r),
				c = n(24),
				s = n(56),
				i = n(54),
				o = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					return 'SET_CHARACTERS_LIST' === t.type ? t.characters : e;
				},
				d = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					return 'SET_EPISODES_LIST' === t.type ? t.episodes : e;
				},
				l = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					return 'SET_CHARACTERS_INFO' === t.type ? t.charsInfo : e;
				},
				j = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					return 'SET_EPISODES_INFO' === t.type ? t.epsInfo : e;
				},
				u = function () {
					var e =
							arguments.length > 0 &&
							void 0 !== arguments[0] &&
							arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					return 'SET_CHARACTERS_ERROR' === t.type
						? t.isErrorOccurred
						: e;
				},
				b = function () {
					var e =
							arguments.length > 0 &&
							void 0 !== arguments[0] &&
							arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					return 'SET_EPISODES_ERROR' === t.type
						? t.isErrorOccurred
						: e;
				},
				h = Object(s.a)({
					charactersReducer: o,
					episodesReducer: d,
					charactersInfoReducer: l,
					episodesInfoReducer: j,
					charactersErrorReducer: u,
					episodesErrorReducer: b
				}),
				p = (n(103), n(11)),
				O = n(158),
				x = n(168),
				f = n(167),
				m = 'https://rickandmortyapi.com/api/episode/',
				v = function (e) {
					return { type: 'SET_CHARACTERS_ERROR', isErrorOccurred: e };
				},
				g = function (e) {
					return { type: 'SET_EPISODES_ERROR', isErrorOccurred: e };
				};
			function S(e, t, n) {
				fetch(n)
					.then(function (e) {
						return e.json();
					})
					.then(function (n) {
						'characters' === e
							? n.error
								? t(v(!0))
								: (t(v(!1)),
								  t({
										type: 'SET_CHARACTERS_LIST',
										characters: n.results
								  }),
								  t({
										type: 'SET_CHARACTERS_INFO',
										charsInfo: n.info
								  }))
							: n.error
							? t(g(!0))
							: (t(g(!1)),
							  t({
									type: 'SET_EPISODES_LIST',
									episodes: n.results
							  }),
							  t({
									type: 'SET_EPISODES_INFO',
									epsInfo: n.info
							  }));
					});
			}
			var E = n(159),
				y = n(4),
				R = n(36),
				C = n(162),
				I = n(165),
				T = n(163),
				_ = n(164),
				w = n(155),
				A = n(160);
			function k(e) {
				for (
					var t = '',
						n =
							'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_',
						r = 0;
					r < e;
					r++
				)
					t += n.charAt(Math.floor(Math.random() * n.length));
				return t;
			}
			var D = n(2);
			function F(e) {
				var t = e.filters,
					n = e.setFilterString,
					r = e.handleChangePage,
					c = a.a.useState({}),
					s = Object(p.a)(c, 2),
					i = s[0],
					o = s[1],
					d = a.a.useState(!1),
					l = Object(p.a)(d, 2),
					j = l[0],
					u = l[1];
				function b(e) {
					o(
						Object(R.a)(
							Object(R.a)({}, i),
							{},
							Object(y.a)({}, e.target.name, e.target.value)
						)
					);
				}
				return Object(D.jsxs)(f.a, {
					children: [
						Object(D.jsx)('div', {
							hidden: j,
							children: Object(D.jsx)(f.a, {
								sx: {
									pt: 3,
									pl: 3,
									pr: 3,
									display: 'flex',
									flexFlow: 'wrap',
									flexDirection: 'row'
								},
								children: Object.entries(t).map(function (e) {
									var t = Object(p.a)(e, 2),
										n = t[0],
										r = t[1];
									return Array.isArray(r)
										? Object(D.jsxs)(
												T.a,
												{
													sx: { width: 200, m: 1 },
													children: [
														Object(D.jsx)(_.a, {
															id:
																'demo-simple-select-label',
															children: n
														}),
														Object(D.jsx)(w.a, {
															labelId:
																'demo-simple-select-label',
															id:
																'demo-simple-select',
															value: i[n] || '',
															label: n,
															onChange: b,
															name: n,
															children: r.map(
																function (e) {
																	return Object(
																		D.jsx
																	)(
																		A.a,
																		{
																			value: e,
																			children: e
																		},
																		e
																	);
																}
															)
														})
													]
												},
												k(10)
										  )
										: Object(D.jsx)(
												C.a,
												{
													id: 'outlined-basic',
													sx: { width: 200, m: 1 },
													label: n,
													variant: 'outlined',
													name: n,
													value: i[n] || '',
													onChange: b
												},
												n
										  );
								})
							})
						}),
						Object(D.jsxs)(f.a, {
							sx: { p: 3, display: 'flex', flexDirection: 'row' },
							children: [
								Object(D.jsx)(I.a, {
									onClick: function () {
										u(!j);
									},
									sx: { mr: 3 },
									children: 'Hide'
								}),
								Object(D.jsx)(I.a, {
									onClick: function () {
										var e = i;
										Object.keys(e).forEach(function (t) {
											return (e[t] = '');
										}),
											o(
												Object(R.a)(
													Object(R.a)({}, i),
													e
												)
											),
											n(''),
											r(null, 1, '');
									},
									sx: { mr: 3 },
									children: 'Clear'
								}),
								Object(D.jsx)(I.a, {
									onClick: function () {
										var e = '';
										for (var t in i)
											e += '&'
												.concat(t, '=')
												.concat(i[t]);
										n(e), r(null, 1, e);
									},
									variant: 'outlined',
									children: 'Apply filter'
								})
							]
						})
					]
				});
			}
			var P = n(169),
				L = n(170),
				H = n(171);
			function B(e) {
				var t = e.data;
				return Object(D.jsx)(P.a, {
					sx: { m: 1.5, width: 300 },
					children: Object(D.jsxs)(L.a, {
						children: [
							Object(D.jsx)(H.a, {
								variant: 'h5',
								component: 'div',
								children: t.name
							}),
							Object(D.jsxs)(H.a, {
								sx: { mb: 1.5 },
								color: 'text.secondary',
								children: [
									t.episode,
									Object(D.jsx)('br', {}),
									'Air date: ',
									t.air_date
								]
							})
						]
					})
				});
			}
			var N = n(172),
				G = n(176),
				J = n(14),
				M = n(156),
				W = {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					minWidth: 300,
					maxWidth: 500,
					bgcolor: 'background.paper',
					border: '2px solid #000',
					boxShadow: 24,
					p: 4
				},
				z = { maxHeight: 300, overflowY: 'auto' };
			function Y(e) {
				var t = e.data,
					n = e.open,
					a = e.onClose,
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
												return e.split(
													'/'
												)[e.split('/').length - 1];
											})
											.join(',')
								)
									.then(function (e) {
										return e.json();
									})
									.then(function (e) {
										Array.isArray(e)
											? o(Object(J.a)(e))
											: o([e]);
									}),
								o([])
							);
						},
						[t.episode, n]
					),
					Object(D.jsx)('div', {
						children: Object(D.jsx)(M.a, {
							open: n,
							onClose: a,
							'aria-labelledby': 'modal-modal-title',
							'aria-describedby': 'modal-modal-description',
							children: Object(D.jsxs)(f.a, {
								sx: W,
								children: [
									Object(D.jsx)(H.a, {
										id: 'modal-modal-title',
										variant: 'h3',
										component: 'h2',
										children: t.name
									}),
									Object(D.jsxs)(H.a, {
										sx: { mb: 1.5 },
										color: 'text.secondary',
										children: ['Gender: ', t.gender]
									}),
									Object(D.jsxs)(H.a, {
										id: 'modal-modal-description',
										sx: { mt: 2 },
										variant: 'body2',
										children: [
											'Species: ',
											t.species,
											Object(D.jsx)('br', {}),
											'Status: ',
											t.status,
											Object(D.jsx)('br', {}),
											'Location: ',
											t.location.name,
											Object(D.jsx)('br', {}),
											'Type: ',
											t.type || 'None',
											Object(D.jsx)('br', {}),
											'Origin: ',
											t.origin.name,
											Object(D.jsx)('br', {}),
											'Created: ',
											new Date(
												t.created
											).toLocaleDateString()
										]
									}),
									Object(D.jsxs)(f.a, {
										id: 'modal-modal-description',
										sx: Object(R.a)({ mt: 2 }, z),
										variant: 'body2',
										children: [
											'Episodes: ',
											i.length,
											Object(D.jsx)('br', {}),
											Object(D.jsx)('ul', {
												children: i.map(function (e) {
													return Object(D.jsxs)(
														'li',
														{
															children: [
																'[',
																e.episode,
																'] ',
																e.name
															]
														},
														k(10)
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
					n = Object(r.useState)(!1),
					a = Object(p.a)(n, 2),
					c = a[0],
					s = a[1];
				return Object(D.jsxs)(P.a, {
					sx: { m: 1.5, width: 300 },
					children: [
						Object(D.jsxs)(L.a, {
							children: [
								Object(D.jsx)(G.a, {
									component: 'img',
									image: t.image,
									alt: t.name + ' image'
								}),
								Object(D.jsx)(H.a, {
									variant: 'h5',
									component: 'div',
									children: t.name
								}),
								Object(D.jsxs)(H.a, {
									sx: { mb: 1.5 },
									color: 'text.secondary',
									children: ['Gender: ', t.gender]
								}),
								Object(D.jsxs)(H.a, {
									variant: 'body2',
									children: [
										'Species: ',
										t.species,
										Object(D.jsx)('br', {}),
										'Status: ',
										t.status,
										Object(D.jsx)('br', {}),
										'Location: ',
										t.location.name
									]
								})
							]
						}),
						Object(D.jsx)(N.a, {
							children: Object(D.jsx)(I.a, {
								size: 'small',
								onClick: function () {
									return s(!0);
								},
								children: 'Details'
							})
						}),
						Object(D.jsx)(Y, {
							data: t,
							open: c,
							onClose: function () {
								return s(!1);
							}
						})
					]
				});
			}
			var K = function (e) {
					var t = e.value,
						n = e.index,
						c = e.dispatch,
						s = e.content,
						i = e.info,
						o = e.error,
						d = e.contentType,
						l = e.filters,
						j = e.API;
					Object(r.useEffect)(
						function () {
							S(d, c, j);
						},
						[d, c, j]
					);
					var u = a.a.useState(1),
						b = Object(p.a)(u, 2),
						h = b[0],
						O = b[1],
						x = a.a.useState(''),
						m = Object(p.a)(x, 2),
						v = m[0],
						g = m[1],
						y = function (e) {
							var t =
									arguments.length > 1 &&
									void 0 !== arguments[1]
										? arguments[1]
										: 1,
								n =
									arguments.length > 2 &&
									void 0 !== arguments[2]
										? arguments[2]
										: v;
							S(d, c, j + '?page='.concat(t) + n), O(t);
						};
					return Object.keys(s).length && Object.keys(i).length
						? Object(D.jsxs)('div', {
								hidden: t !== n,
								children: [
									Object(D.jsx)(f.a, {
										children: Object(D.jsx)(F, {
											filters: l,
											setFilterString: g,
											handleChangePage: y
										})
									}),
									Object(D.jsxs)(f.a, {
										sx: {
											p: 1,
											pr: 5,
											display: 'flex',
											flexFlow: 'wrap',
											justifyContent: 'end'
										},
										children: [
											i
												? Object(D.jsx)(f.a, {
														sx: {
															ml: 3,
															mr: 3,
															display: 'flex',
															alignItems: 'center'
														},
														children:
															i.count + ' ' + d
												  })
												: null,
											Object(D.jsx)(E.a, {
												page: o ? 1 : h,
												count: o ? 1 : i.pages,
												onChange: y,
												showFirstButton: !0,
												showLastButton: !0
											})
										]
									}),
									Object(D.jsx)(f.a, {
										sx: {
											p: 3,
											display: 'flex',
											flexFlow: 'wrap',
											justifyContent: 'space-around'
										},
										children: o
											? Object(D.jsx)(f.a, {
													children:
														'There is nothing here'
											  })
											: s.map(function (e) {
													return 'characters' === d
														? Object(D.jsx)(
																q,
																{ data: e },
																e.id
														  )
														: Object(D.jsx)(
																B,
																{ data: e },
																e.id
														  );
											  })
									}),
									Object(D.jsx)(f.a, {
										sx: {
											p: 5,
											pb: 10,
											display: 'flex',
											justifyContent: 'end'
										},
										children: Object(D.jsx)(E.a, {
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
				Q = Object(i.b)(
					function (e, t) {
						return 'characters' === t.contentType
							? {
									content: e.charactersReducer,
									info: e.charactersInfoReducer,
									error: e.charactersErrorReducer,
									API:
										'https://rickandmortyapi.com/api/character/',
									filters: {
										name: '',
										status: [
											'alive',
											'dead',
											'unknown',
											''
										],
										species: '',
										type: '',
										gender: [
											'female',
											'male',
											'genderless',
											'unknown',
											''
										]
									}
							  }
							: {
									content: e.episodesReducer,
									info: e.episodesInfoReducer,
									error: e.episodesErrorReducer,
									API: m,
									filters: { name: '', episode: '' }
							  };
					},
					function (e) {
						return { dispatch: e };
					}
				)(K);
			function U() {
				var e = r.useState(0),
					t = Object(p.a)(e, 2),
					n = t[0],
					a = t[1];
				return Object(D.jsxs)(f.a, {
					sx: { width: '100%' },
					children: [
						Object(D.jsx)(f.a, {
							sx: { borderBottom: 1, borderColor: 'divider' },
							children: Object(D.jsxs)(O.a, {
								sx: { pt: 3, pl: 3, pr: 3 },
								value: n,
								onChange: function (e, t) {
									a(t);
								},
								children: [
									Object(D.jsx)(x.a, { label: 'Characters' }),
									Object(D.jsx)(x.a, { label: 'Episodes' })
								]
							})
						}),
						Object(D.jsx)(Q, {
							value: n,
							index: 0,
							contentType: 'characters'
						}),
						Object(D.jsx)(Q, {
							value: n,
							index: 1,
							contentType: 'episodes'
						})
					]
				});
			}
			var V = function () {
					return Object(D.jsx)('div', {
						className: 'App',
						children: Object(D.jsx)(U, {})
					});
				},
				X = Object(s.b)(h);
			Object(c.render)(
				Object(D.jsx)(i.a, {
					store: X,
					children: Object(D.jsx)(V, {})
				}),
				document.getElementById('root')
			);
		}
	},
	[[106, 1, 2]]
]);
//# sourceMappingURL=main.94304455.chunk.js.map
