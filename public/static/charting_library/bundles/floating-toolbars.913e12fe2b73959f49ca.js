(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2306],
  {
    19303: (t) => {
      'use strict';
      var e = Object.prototype.hasOwnProperty;
      function o(t, e) {
        return t === e
          ? 0 !== t || 0 !== e || 1 / t == 1 / e
          : t != t && e != e;
      }
      t.exports = function (t, i) {
        if (o(t, i)) return !0;
        if (
          'object' != typeof t ||
          null === t ||
          'object' != typeof i ||
          null === i
        )
          return !1;
        var r = Object.keys(t),
          n = Object.keys(i);
        if (r.length !== n.length) return !1;
        for (var s = 0; s < r.length; s++)
          if (!e.call(i, r[s]) || !o(t[r[s]], i[r[s]])) return !1;
        return !0;
      };
    },
    54395: () => {},
    30831: () => {},
    43948: (t) => {
      t.exports = {
        button: 'button-xRobF0EE',
        content: 'content-xRobF0EE',
        'icon-only': 'icon-only-xRobF0EE',
        'color-brand': 'color-brand-xRobF0EE',
        'variant-primary': 'variant-primary-xRobF0EE',
        'variant-secondary': 'variant-secondary-xRobF0EE',
        'color-gray': 'color-gray-xRobF0EE',
        'color-green': 'color-green-xRobF0EE',
        'color-red': 'color-red-xRobF0EE',
        'size-xsmall': 'size-xsmall-xRobF0EE',
        'size-small': 'size-small-xRobF0EE',
        'size-medium': 'size-medium-xRobF0EE',
        'size-large': 'size-large-xRobF0EE',
        'size-xlarge': 'size-xlarge-xRobF0EE',
        'with-start-icon': 'with-start-icon-xRobF0EE',
        'with-end-icon': 'with-end-icon-xRobF0EE',
        'start-icon-wrap': 'start-icon-wrap-xRobF0EE',
        'end-icon-wrap': 'end-icon-wrap-xRobF0EE',
        animated: 'animated-xRobF0EE',
        stretch: 'stretch-xRobF0EE',
        grouped: 'grouped-xRobF0EE',
        'adjust-position': 'adjust-position-xRobF0EE',
        'first-row': 'first-row-xRobF0EE',
        'first-col': 'first-col-xRobF0EE',
        'no-corner-top-left': 'no-corner-top-left-xRobF0EE',
        'no-corner-top-right': 'no-corner-top-right-xRobF0EE',
        'no-corner-bottom-right': 'no-corner-bottom-right-xRobF0EE',
        'no-corner-bottom-left': 'no-corner-bottom-left-xRobF0EE',
      };
    },
    6939: () => {},
    45754: () => {},
    27754: (t) => {
      t.exports = { button: 'button-2YcRd2gv' };
    },
    79224: (t) => {
      t.exports = {
        wrap: 'wrap-2EG6_6QR',
        icon: 'icon-2EG6_6QR',
        colorBg: 'colorBg-2EG6_6QR',
        color: 'color-2EG6_6QR',
        multicolor: 'multicolor-2EG6_6QR',
        white: 'white-2EG6_6QR',
      };
    },
    62334: (t) => {
      t.exports = { button: 'button-1gEXpG61' };
    },
    54226: (t) => {
      t.exports = {
        item: 'item-3Te2Sp8a',
        withIcon: 'withIcon-3Te2Sp8a',
        icon: 'icon-3Te2Sp8a',
        labelRow: 'labelRow-3Te2Sp8a',
        multiWidth: 'multiWidth-3Te2Sp8a',
        buttonWrap: 'buttonWrap-3Te2Sp8a',
        buttonLabel: 'buttonLabel-3Te2Sp8a',
      };
    },
    80511: (t, e, o) => {
      'use strict';
      o.d(e, { Button: () => w });
      var i = o(67294),
        r = o(94184),
        n = o(48413),
        s = o(49775),
        a = o(43948),
        l = o.n(a);
      function d(t) {
        const {
            color: e = 'brand',
            size: o = 'medium',
            variant: i = 'primary',
            stretch: s = !1,
            icon: a,
            startIcon: d,
            endIcon: c,
            iconOnly: h = !1,
            className: p,
            isGrouped: u,
            cellState: g,
            disablePositionAdjustment: _ = !1,
          } = t,
          m = (function (t) {
            let e = '';
            return (
              0 !== t &&
                (1 & t && (e = r(e, l()['no-corner-top-left'])),
                2 & t && (e = r(e, l()['no-corner-top-right'])),
                4 & t && (e = r(e, l()['no-corner-bottom-right'])),
                8 & t && (e = r(e, l()['no-corner-bottom-left']))),
              e
            );
          })((0, n.getGroupCellRemoveRoundBorders)(g));
        return r(
          p,
          l().button,
          l()['size-' + o],
          l()['color-' + e],
          l()['variant-' + i],
          s && l().stretch,
          (a || d) && l()['with-start-icon'],
          c && l()['with-end-icon'],
          h && l()['icon-only'],
          m,
          u && l().grouped,
          u && !_ && l()['adjust-position'],
          u && g.isTop && l()['first-row'],
          u && g.isLeft && l()['first-col']
        );
      }
      function c(t) {
        const {
            size: e,
            startIcon: o,
            icon: r,
            iconOnly: n,
            children: a,
            endIcon: d,
          } = t,
          c = null != o ? o : r;
        return i.createElement(
          i.Fragment,
          null,
          c &&
            'xsmall' !== e &&
            i.createElement(s.Icon, {
              icon: c,
              className: l()['start-icon-wrap'],
            }),
          a && i.createElement('span', { className: l().content }, a),
          d &&
            !n &&
            'xsmall' !== e &&
            i.createElement(s.Icon, {
              icon: d,
              className: l()['end-icon-wrap'],
            })
        );
      }
      var h = o(94618),
        p = o(74818);
      function u(t) {
        const {
          className: e,
          color: o,
          variant: i,
          size: r,
          stretch: n,
          animated: s,
          icon: a,
          iconOnly: l,
          startIcon: d,
          endIcon: c,
          ...h
        } = t;
        return {
          ...h,
          ...(0, p.filterDataProps)(t),
          ...(0, p.filterAriaProps)(t),
        };
      }
      function g(t) {
        const { reference: e, ...o } = t,
          {
            isGrouped: r,
            cellState: n,
            disablePositionAdjustment: s,
          } = (0, i.useContext)(h.ControlGroupContext),
          a = d({
            ...o,
            isGrouped: r,
            cellState: n,
            disablePositionAdjustment: s,
          });
        return i.createElement(
          'button',
          { ...u(o), className: a, ref: e },
          i.createElement(c, { ...o })
        );
      }
      function _(t = 'default') {
        switch (t) {
          case 'default':
            return 'primary';
          case 'stroke':
            return 'secondary';
        }
      }
      function m(t = 'primary') {
        switch (t) {
          case 'primary':
            return 'brand';
          case 'success':
            return 'green';
          case 'default':
            return 'gray';
          case 'danger':
            return 'red';
        }
      }
      function v(t = 'm') {
        switch (t) {
          case 's':
            return 'xsmall';
          case 'm':
            return 'small';
          case 'l':
            return 'large';
        }
      }
      function b(t) {
        const {
          intent: e,
          size: o,
          appearance: i,
          useFullWidth: r,
          icon: n,
          ...s
        } = t;
        return {
          ...s,
          color: m(e),
          size: v(o),
          variant: _(i),
          stretch: r,
          startIcon: n,
        };
      }
      function w(t) {
        return i.createElement(g, { ...b(t) });
      }
    },
    94618: (t, e, o) => {
      'use strict';
      o.d(e, { ControlGroupContext: () => i });
      const i = o(67294).createContext({
        isGrouped: !1,
        cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
      });
    },
    48413: (t, e, o) => {
      'use strict';
      function i(t) {
        let e = 0;
        return (
          (t.isTop && t.isLeft) || (e += 1),
          (t.isTop && t.isRight) || (e += 2),
          (t.isBottom && t.isLeft) || (e += 8),
          (t.isBottom && t.isRight) || (e += 4),
          e
        );
      }
      o.d(e, { getGroupCellRemoveRoundBorders: () => i });
    },
    45650: (t, e, o) => {
      'use strict';
      o.d(e, { ToolWidgetIconButton: () => a });
      var i = o(67294),
        r = o(94184),
        n = o(47218),
        s = o(27754);
      const a = i.forwardRef((t, e) => {
        const { className: o, id: a, ...l } = t;
        return i.createElement(n.ToolWidgetButton, {
          'data-name': a,
          ...l,
          ref: e,
          className: r(o, s.button),
        });
      });
    },
    55753: (t, e, o) => {
      'use strict';
      o.r(e), o.d(e, { FavoriteDrawingToolbar: () => _ });
      var i = o(79881),
        r = o(77625),
        n = o(2266),
        s = o(96404),
        a = o(67235),
        l = o(46374),
        d = o(6799),
        c = o(15521),
        h = o(21259),
        p = o(64222),
        u = o(32856),
        g = o.n(u);
      o(6939);
      class _ extends r.FloatingToolbar {
        constructor(t) {
          super({
            allowSortable: !s.mobiletouch,
            dragOnlyInsideToolbar: !0,
            defaultPosition: t,
            positionSettingsKey: 'chart.favoriteDrawingsPosition',
            positionStorageType: 'device',
          }),
            (this._linetoolsWidgets = {}),
            (this._canBeShownValue = new (g())(!1)),
            this._attachHandlers(),
            this._loadVisibilityState(),
            (this._hideAction = this._createHideToolbarAction());
        }
        show() {
          this._canBeShownValue.value() &&
            (p.setValue('ChartFavoriteDrawingToolbarWidget.visible', !0),
            this.isVisible() || this._renderAllLinetools(),
            super.show());
        }
        hide() {
          p.setValue('ChartFavoriteDrawingToolbarWidget.visible', !1),
            super.hide();
        }
        canBeShown() {
          return this._canBeShownValue.readonly();
        }
        _onFavoriteAdded(t) {
          this._canBeShownValue.setValue(!0),
            this.addWidget(this._createLinetoolWidget(t)),
            this.show();
        }
        _onFavoriteRemoved(t) {
          this.removeWidget(this._linetoolsWidgets[t]),
            delete this._linetoolsWidgets[t],
            0 === n.LinetoolsFavoritesStore.favoritesCount() &&
              (this._canBeShownValue.setValue(!1), this.hide());
        }
        _onFavoriteMoved() {
          this._renderAllLinetools();
        }
        _onSelectedLinetoolChanged(t) {
          Object.keys(this._linetoolsWidgets).forEach((e) => {
            this._linetoolsWidgets[e].classList.toggle('i-active', t === e);
          });
        }
        _createLinetoolWidget(t) {
          const e = `<span class="tv-favorited-drawings-toolbar__widget apply-common-tooltip ${
              t === c.tool.value() ? 'i-active' : ''
            }" title="${
              h.lineToolsInfo[t].localizedName
            }" data-name="FavoriteToolbar${t}">${
              h.lineToolsInfo[t].icon
            }</span>`,
            o = (0, a.parseHtmlElement)(e);
          return (
            o.addEventListener('click', (e) => {
              e.preventDefault(), c.tool.value() !== t && c.tool.setValue(t);
            }),
            (this._linetoolsWidgets[t] = o),
            o
          );
        }
        _renderAllLinetools() {
          (this._linetoolsWidgets = {}),
            this.removeWidgets(),
            n.LinetoolsFavoritesStore.favorites()
              .filter((t) => h.lineToolsInfo[t])
              .forEach((t) => {
                this.addWidget(this._createLinetoolWidget(t));
              });
        }
        _attachHandlers() {
          n.LinetoolsFavoritesStore.favoriteAdded.subscribe(
            this,
            this._onFavoriteAdded
          ),
            n.LinetoolsFavoritesStore.favoriteRemoved.subscribe(
              this,
              this._onFavoriteRemoved
            ),
            n.LinetoolsFavoritesStore.favoriteMoved.subscribe(
              this,
              this._onFavoriteMoved
            ),
            n.LinetoolsFavoritesStore.favoritesSynced.subscribe(null, () => {
              this._loadVisibilityState(), this._renderAllLinetools();
            }),
            this.onWidgetsReordered().subscribe(this, (t, e) => {
              if (
                (n.LinetoolsFavoritesStore.favoriteMoved.unsubscribe(
                  this,
                  this._onFavoriteMoved
                ),
                !n.LinetoolsFavoritesStore.moveFavorite(
                  n.LinetoolsFavoritesStore.favorite(t),
                  e
                ))
              )
                throw new Error('Something went wrong');
              n.LinetoolsFavoritesStore.favoriteMoved.subscribe(
                this,
                this._onFavoriteMoved
              );
            }),
            this.onContextMenu((t) => {
              t.preventDefault(),
                d.ContextMenuManager.showMenu([this._hideAction], t);
            }),
            c.tool.subscribe(this._onSelectedLinetoolChanged.bind(this));
        }
        _createHideToolbarAction() {
          return new l.Action({
            actionId: 'Chart.FavoriteDrawingToolsToolbar.Hide',
            label: (0, i.t)('Hide Favorite Drawing Tools Toolbar'),
            onExecute: () => {
              this.hide();
            },
          });
        }
        _loadVisibilityState() {
          const t = n.LinetoolsFavoritesStore.favoritesCount() > 0;
          this._canBeShownValue.setValue(t);
          p.getBool('ChartFavoriteDrawingToolbarWidget.visible', !0) && t
            ? this.show()
            : this.hide();
        }
      }
    },
    77625: (t, e, o) => {
      'use strict';
      o.d(e, {
        FLOATING_TOOLBAR_REACT_WIDGETS_CLASS: () => x,
        FloatingToolbar: () => S,
      });
      var i = o(79424),
        r = o(96404),
        n = o(83939),
        s = o(64222),
        a = o(5729),
        l = o.n(a),
        d = o(32856),
        c = o.n(d),
        h = o(26134);
      class p extends h.ChunkLoader {
        _startLoading() {
          return o
            .e(2377)
            .then(o.bind(o, 8658))
            .then((t) => t.HammerJS);
        }
      }
      var u = o(68177),
        g = o(16282);
      function _(t, e = !1) {
        const o = getComputedStyle(t),
          i = [o.height];
        return (
          'border-box' !== o.boxSizing &&
            i.push(
              o.paddingTop,
              o.paddingBottom,
              o.borderTopWidth,
              o.borderBottomWidth
            ),
          e && i.push(o.marginTop, o.marginBottom),
          i.reduce((t, e) => t + (parseFloat(e) || 0), 0)
        );
      }
      function m(t, e = !1) {
        const o = getComputedStyle(t),
          i = [o.width];
        return (
          'border-box' !== o.boxSizing &&
            i.push(
              o.paddingLeft,
              o.paddingRight,
              o.borderLeftWidth,
              o.borderRightWidth
            ),
          e && i.push(o.marginLeft, o.marginRight),
          i.reduce((t, e) => t + (parseFloat(e) || 0), 0)
        );
      }
      var v = o(43367);
      class b {
        constructor(t) {
          var e, o;
          (this._helper = null),
            (this._handleDragStart = (t) => {
              var e;
              if (null !== this._helper) return;
              const o = this._source;
              o.classList.add('ui-draggable-dragging');
              const [i, r] = [m(o), _(o)];
              (this._helper = {
                startTop: parseFloat(o.style.top) || 0,
                startLeft: parseFloat(o.style.left) || 0,
                nextTop: null,
                nextLeft: null,
                raf: null,
                size: [i, r],
                containment:
                  this._containment instanceof HTMLElement
                    ? [
                        parseInt(
                          getComputedStyle(this._containment).borderLeftWidth
                        ) +
                          parseInt(
                            getComputedStyle(this._containment).paddingLeft
                          ),
                        parseInt(
                          getComputedStyle(this._containment).borderTopWidth
                        ) +
                          parseInt(
                            getComputedStyle(this._containment).paddingTop
                          ),
                        this._containment.offsetWidth -
                          parseInt(
                            getComputedStyle(this._containment).borderRightWidth
                          ) -
                          parseInt(
                            getComputedStyle(this._containment).paddingRight
                          ) -
                          parseInt(getComputedStyle(o).marginLeft) -
                          parseInt(getComputedStyle(o).marginRight) -
                          i,
                        this._containment.offsetHeight -
                          parseInt(
                            getComputedStyle(this._containment)
                              .borderBottomWidth
                          ) -
                          parseInt(
                            getComputedStyle(this._containment).paddingBottom
                          ) -
                          parseInt(getComputedStyle(o).marginTop) -
                          parseInt(getComputedStyle(o).marginBottom) -
                          r,
                      ]
                    : 'window' === this._containment
                    ? [
                        window.scrollX,
                        window.scrollY,
                        window.scrollX +
                          document.documentElement.offsetWidth -
                          i,
                        window.scrollY +
                          document.documentElement.offsetHeight -
                          r,
                      ]
                    : null,
              }),
                null === (e = this._start) || void 0 === e || e.call(this);
            }),
            (this._handleDragMove = (t) => {
              var e;
              if (null === this._helper) return;
              const { current: o, initial: i } = t.detail,
                r = this._source,
                n = this._helper.nextTop,
                s = this._helper.nextLeft,
                a =
                  'y' === this._axis || !1 === this._axis || 0 !== o.movementY;
              if (a) {
                const t = this._helper.startTop;
                isFinite(t) &&
                  (this._helper.nextTop = o.clientY - i.clientY + t);
              }
              const l =
                'x' === this._axis || !1 === this._axis || 0 !== o.movementY;
              if (l) {
                const t = this._helper.startLeft;
                isFinite(t) &&
                  (this._helper.nextLeft = o.clientX - i.clientX + t);
              }
              if (null !== this._helper.containment) {
                const [t, e, o, i] = this._helper.containment;
                a &&
                  this._helper.nextTop &&
                  ((this._helper.nextTop = Math.min(this._helper.nextTop, i)),
                  (this._helper.nextTop = Math.max(this._helper.nextTop, e))),
                  l &&
                    this._helper.nextLeft &&
                    ((this._helper.nextLeft = Math.min(
                      this._helper.nextLeft,
                      o
                    )),
                    (this._helper.nextLeft = Math.max(
                      this._helper.nextLeft,
                      t
                    )));
              }
              null !== this._helper.raf ||
                (n === this._helper.nextTop && s === this._helper.nextLeft) ||
                (this._helper.raf = requestAnimationFrame(() => {
                  null !== this._helper &&
                    (null !== this._helper.nextTop &&
                      ((r.style.top = this._helper.nextTop + 'px'),
                      (this._helper.nextTop = null)),
                    null !== this._helper.nextLeft &&
                      ((r.style.left = this._helper.nextLeft + 'px'),
                      (this._helper.nextLeft = null)),
                    (this._helper.raf = null));
                })),
                null === (e = this._drag) || void 0 === e || e.call(this);
            }),
            (this._handleDragStop = (t) => {
              var e;
              if (null === this._helper) return;
              this._source.classList.remove('ui-draggable-dragging'),
                (this._helper = null),
                null === (e = this._stop) || void 0 === e || e.call(this);
            });
          const i = (this._source = t.source);
          i.classList.add('ui-draggable');
          const r = (this._handle =
            null !== (e = t.handle ? i.querySelector(t.handle) : null) &&
            void 0 !== e
              ? e
              : i);
          r.classList.add('ui-draggable-handle'),
            (this._start = t.start),
            (this._stop = t.stop),
            (this._drag = t.drag),
            (this._backend = new w({
              handle: r,
              onDragStart: this._handleDragStart,
              onDragMove: this._handleDragMove,
              onDragStop: this._handleDragStop,
            })),
            (this._axis = null !== (o = t.axis) && void 0 !== o && o),
            (this._containment = t.containment);
        }
        destroy() {
          const t = this._source;
          t.classList.remove('ui-draggable'),
            t.classList.remove('ui-draggable-dragging');
          this._handle.classList.remove('ui-draggable-handle'),
            this._backend.destroy(),
            null !== this._helper &&
              (this._helper.raf && cancelAnimationFrame(this._helper.raf),
              (this._helper = null));
        }
      }
      class w {
        constructor(t) {
          (this._initial = null),
            (this._handlePointerDown = (t) => {
              if (null !== this._initial) return;
              if (
                !(
                  t.target instanceof Element && this._handle.contains(t.target)
                )
              )
                return;
              if (
                ((this._initial = t),
                !this._dispatchEvent(
                  this._createEvent('pointer-drag-start', t)
                ))
              )
                return void (this._initial = null);
              t.preventDefault();
              const e = this._getEventTarget();
              e.addEventListener('pointermove', this._handlePointerMove),
                e.addEventListener('pointerup', this._handlePointerUp),
                e.addEventListener('pointercancel', this._handlePointerUp),
                e.addEventListener('lostpointercapture', this._handlePointerUp),
                e.setPointerCapture(t.pointerId);
            }),
            (this._handlePointerMove = (t) => {
              null !== this._initial &&
                this._initial.pointerId === t.pointerId &&
                (t.preventDefault(),
                this._dispatchEvent(this._createEvent('pointer-drag-move', t)));
            }),
            (this._handlePointerUp = (t) => {
              if (
                null === this._initial ||
                this._initial.pointerId !== t.pointerId
              )
                return;
              t.preventDefault();
              const e = this._getEventTarget();
              e.removeEventListener('pointermove', this._handlePointerMove),
                e.removeEventListener('pointerup', this._handlePointerUp),
                e.removeEventListener('pointercancel', this._handlePointerUp),
                e.removeEventListener(
                  'lostpointercapture',
                  this._handlePointerUp
                ),
                e.releasePointerCapture(this._initial.pointerId),
                this._dispatchEvent(this._createEvent('pointer-drag-stop', t)),
                (this._initial = null);
            });
          const e = (this._handle = t.handle);
          (this._onDragStart = t.onDragStart),
            (this._onDragMove = t.onDragMove),
            (this._onDragStop = t.onDragStop),
            (e.style.touchAction = 'none');
          this._getEventTarget().addEventListener(
            'pointerdown',
            this._handlePointerDown
          );
        }
        destroy() {
          this._handle.style.touchAction = '';
          const t = this._getEventTarget();
          t.removeEventListener('pointerdown', this._handlePointerDown),
            t.removeEventListener('pointermove', this._handlePointerMove),
            t.removeEventListener('pointerup', this._handlePointerUp),
            t.removeEventListener('pointercancel', this._handlePointerUp),
            t.removeEventListener('lostpointercapture', this._handlePointerUp),
            null !== this._initial &&
              (t.releasePointerCapture(this._initial.pointerId),
              (this._initial = null));
        }
        _getEventTarget() {
          return v.CheckMobile.iOS() || ((0, v.isMac)() && r.touch)
            ? window.document.documentElement
            : this._handle;
        }
        _dispatchEvent(t) {
          switch (t.type) {
            case 'pointer-drag-start':
              this._onDragStart(t);
              break;
            case 'pointer-drag-move':
              this._onDragMove(t);
              break;
            case 'pointer-drag-stop':
              this._onDragStop(t);
          }
          return !t.defaultPrevented;
        }
        _createEvent(t, e) {
          return (
            (0, g.assert)(null !== this._initial),
            new CustomEvent(t, {
              bubbles: !0,
              cancelable: !0,
              detail: { backend: this, initial: this._initial, current: e },
            })
          );
        }
      }
      var y = o(67235),
        f = o(87438),
        C = o(59713);
      o(45754);
      const x = 'floating-toolbar-react-widgets',
        T = `<div class="tv-floating-toolbar i-closed i-hidden"><div class="tv-floating-toolbar__widget-wrapper"><div class="tv-floating-toolbar__drag js-drag">${C}</div><div class="tv-floating-toolbar__content js-content"></div><div class="${x}"></div></div></div>`;
      class S {
        constructor(t) {
          (this._widget = document.createElement('div')),
            (this._isVertical = !1),
            (this._hiddingTimeoutId = null),
            (this._visibility = new (c())(!1)),
            (this._windowResizeListener = this._onWindowResize.bind(this)),
            (this._reorderedDelegate = new (l())()),
            (this._responsiveResizeFunction = null),
            (this._showTimeStamp = null),
            (this._draggable = null),
            (this._preventClickUntilAnimation = (t) => {
              null !== this._showTimeStamp &&
                performance.now() - this._showTimeStamp < this.hideDuration() &&
                t.stopPropagation();
            }),
            S._toolbars.push(this),
            (this._options = t),
            (this._widget = (0, y.parseHtmlElement)(T)),
            (this._content = this._widget
              .getElementsByClassName('js-content')
              .item(0)),
            (this._reactWidgetsContainer = this._widget
              .getElementsByClassName(x)
              .item(0)),
            this._setZIndex(S._startZIndex + S._toolbars.length - 1),
            this._options.addClass &&
              (this._widget.className += ' ' + this._options.addClass),
            this._options['data-name'] &&
              (this._widget.dataset.name = this._options['data-name']),
            this._options.layout &&
              'auto' !== this._options.layout &&
              ((this._isVertical = 'vertical' === this._options.layout),
              this._updateLayoutType(),
              this._updateAxisOption()),
            this._widget.addEventListener(
              'click',
              this._preventClickUntilAnimation,
              !0
            );
        }
        destroy() {
          this.hide(!0),
            S._toolbars.splice(S._toolbars.indexOf(this), 1),
            this._widget.removeEventListener(
              'click',
              this._preventClickUntilAnimation,
              !0
            ),
            document.body.contains(this._widget) &&
              document.body.removeChild(this._widget),
            null !== this._draggable && this._draggable.destroy(),
            (this._widget.innerHTML = ''),
            (this._responsiveResizeFunction = null);
        }
        setResponsiveResizeFunc(t) {
          this._responsiveResizeFunction = t;
        }
        isVisible() {
          return this._visibility.value();
        }
        visibility() {
          return this._visibility.readonly();
        }
        isVertical() {
          return this._isVertical;
        }
        show() {
          this.isVisible() ||
            (document.body.contains(this._widget) ||
              (this._init(), document.body.appendChild(this._widget)),
            this._setHiddingTimeout(null),
            window.addEventListener('resize', this._windowResizeListener),
            this.raise(),
            this._visibility.setValue(!0),
            (this._showTimeStamp = performance.now()),
            this._widget.classList.contains('i-hidden')
              ? (this._widget.classList.remove('i-hidden'),
                setTimeout(() => {
                  this.isVisible() && this._widget.classList.remove('i-closed');
                }))
              : this._widget.classList.remove('i-closed'),
            this._onWindowResize());
        }
        hide(t = !1) {
          if (!this.isVisible()) return;
          const e = this._widget.classList.contains('i-closed');
          if (
            (this._widget.classList.add('i-closed'),
            this._visibility.setValue(!1),
            t || e)
          )
            this._setHiddingTimeout(null),
              this._widget.classList.add('i-hidden');
          else {
            const t = setTimeout(() => {
              this._setHiddingTimeout(null),
                this._widget.classList.add('i-hidden');
            }, this.hideDuration());
            this._setHiddingTimeout(t);
          }
          window.removeEventListener('resize', this._windowResizeListener);
        }
        raise() {
          S._toolbars.length + S._startZIndex !== this._zIndex() &&
            (S._toolbars.splice(S._toolbars.indexOf(this), 1),
            S._toolbars.push(this),
            S._updateAllZIndexes());
        }
        hideDuration() {
          return 0.75 * n.dur;
        }
        addWidget(t, e = {}) {
          const o = this.widgetsCount();
          if ((void 0 === e.index && (e.index = o), e.index < 0 || e.index > o))
            throw new Error(`Index must be in [0, ${o}]`);
          const i = document.createElement('div');
          (i.className = 'tv-floating-toolbar__widget js-widget'),
            i.appendChild(t);
          const r =
            e.index === o ? null : this._content.childNodes.item(e.index);
          this._content.insertBefore(i, r), this._onWindowResize();
        }
        getReactWidgetContainer() {
          return this._reactWidgetsContainer;
        }
        removeWidget(t) {
          const e = this._findWrapperForWidget(t);
          e && (this._content.removeChild(e), this._onWindowResize());
        }
        widgetsCount() {
          return this._content.childNodes.length;
        }
        showWidget(t) {
          const e = this._findWrapperForWidget(t);
          e && e.classList.remove('i-hidden');
        }
        hideWidget(t) {
          const e = this._findWrapperForWidget(t);
          e && e.classList.add('i-hidden');
        }
        removeWidgets() {
          for (; this._content.firstChild; )
            this._content.removeChild(this._content.firstChild);
          this._onWindowResize();
        }
        onWidgetsReordered() {
          return this._reorderedDelegate;
        }
        onContextMenu(t) {
          if (r.mobiletouch) {
            new p().load().then((e) => {
              const o = new e(this._widget);
              o.get('press').set({ time: 500 }),
                o.on('press', (e) => {
                  this._preventWidgetTouchEndEvent(), t(e.srcEvent);
                });
            });
          } else this._widget.addEventListener('contextmenu', t);
        }
        checkPosition() {
          const t = this._getCorrectedWidgetRect(),
            e = { left: t.left, top: t.top };
          this._correctPosition(e),
            (t.left === e.left && t.top === e.top) ||
              ((this._widget.style.left = e.left + 'px'),
              (this._widget.style.top = e.top + 'px'));
        }
        _determineCurrentLayoutVertical(t) {
          const e = this._isVertical ? t.height : t.width;
          return (
            window.innerWidth < e && window.innerWidth < window.innerHeight
          );
        }
        _getWidget() {
          return this._widget;
        }
        _findWrapperForWidget(t) {
          const e = this._content.getElementsByClassName('js-widget');
          for (let o = 0; o < e.length; ++o) {
            const i = e.item(o);
            if (i.contains(t)) return i;
          }
          return null;
        }
        _onVerticalChanged(t, e) {}
        _setHiddingTimeout(t) {
          null !== this._hiddingTimeoutId &&
            clearTimeout(this._hiddingTimeoutId),
            (this._hiddingTimeoutId = t);
        }
        _preventWidgetTouchEndEvent() {
          const t = (e) => {
            e.preventDefault(), this._widget.removeEventListener('touchend', t);
          };
          this._widget.addEventListener('touchend', t);
        }
        _updateLayoutType() {
          this._widget.classList.toggle('i-vertical', this._isVertical);
        }
        _updateAxisOption() {
          0;
        }
        _onWindowResize() {
          if ('auto' === (this._options.layout || 'auto')) {
            const t = this._isVertical,
              e = this._getCorrectedWidgetRect();
            (this._isVertical = this._determineCurrentLayoutVertical(e)),
              this._updateLayoutType(),
              t !== this._isVertical &&
                (this._onVerticalChanged(this._isVertical, t),
                this._updateAxisOption());
          }
          this.checkPosition(), this._resizeResponsive();
        }
        _resizeResponsive() {
          if (null === this._responsiveResizeFunction) return;
          let t = this._options.layout || 'auto';
          'auto' === t && (t = this._isVertical ? 'vertical' : 'horizontal');
          const e =
              'vertical' === t
                ? this._widget.clientHeight
                : this._widget.clientWidth,
            o = ('vertical' === t ? window.innerHeight : window.innerWidth) - e;
          this._responsiveResizeFunction(e, o, t);
        }
        _correctPosition(t) {
          const e = this._getCorrectedWidgetRect();
          t.left + e.width > window.innerWidth &&
            (t.left = Math.max(0, window.innerWidth - e.width)),
            t.top + e.height > window.innerHeight &&
              (t.top = Math.max(0, window.innerHeight - e.height)),
            (t.left = Math.max(0, t.left)),
            (t.top = Math.max(0, t.top));
        }
        _setZIndex(t) {
          this._widget.style.zIndex = String(t);
        }
        _zIndex() {
          return Number(this._widget.style.zIndex);
        }
        _loadPosition() {
          let t;
          if ('device' === this._options.positionStorageType) {
            const e = u.TVLocalStorage.getItem(
              this._options.positionSettingsKey
            );
            t = null !== e ? JSON.parse(e) : this._options.defaultPosition;
          } else
            t = (0, s.getJSON)(
              this._options.positionSettingsKey,
              this._options.defaultPosition
            );
          (this._widget.style.left = Math.round(t.left) + 'px'),
            (this._widget.style.top = Math.round(t.top) + 'px'),
            this._onWindowResize();
        }
        _savePosition() {
          const t = this._widget.getBoundingClientRect();
          if ('device' === this._options.positionStorageType)
            try {
              u.TVLocalStorage.setItem(
                this._options.positionSettingsKey,
                JSON.stringify({ left: t.left, top: t.top })
              );
            } catch (t) {}
          else
            (0, s.setJSON)(this._options.positionSettingsKey, {
              left: t.left,
              top: t.top,
            });
        }
        _init() {
          this._loadPosition(),
            (this._draggable = new b({
              source: this._widget,
              containment: 'window',
              handle: '.js-drag',
              start: i.globalCloseMenu,
              stop: this._savePosition.bind(this),
            })),
            this._widget.addEventListener('pointerdown', this.raise.bind(this));
        }
        _initSortable() {
          let t = -1;
          lazyJqueryUI(this._content).sortable({
            start: (e, o) => {
              t = o.item.index();
            },
            stop: (e, o) => {
              const i = o.item.index();
              t !== i &&
                ((0, f.trackEvent)('Floating Toolbar', 'User Sort'),
                this._reorderedDelegate.fire(t, i));
            },
            tolerance: 'pointer',
            distance: 5,
            containment: !!this._options.dragOnlyInsideToolbar && 'parent',
            scroll: !1,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: !0,
          }),
            this._updateAxisOption();
        }
        _getCorrectedWidgetRect() {
          const t = this._widget.getBoundingClientRect();
          if (this._widget.classList.contains('i-closed')) {
            const e = 1 / 0.925 - 1,
              o = t.width * e,
              i = t.height * e;
            return {
              bottom: t.bottom + i / 2,
              height: t.height + i,
              left: t.left - o / 2,
              right: t.right + o / 2,
              top: t.top - i / 2,
              width: t.width + o,
            };
          }
          return t;
        }
        static _updateAllZIndexes() {
          S._toolbars.forEach((t, e) => {
            t._setZIndex(S._startZIndex + e);
          });
        }
      }
      (S._startZIndex = 20), (S._toolbars = []);
    },
    34708: (t, e, o) => {
      'use strict';
      o.d(e, { LineToolPropertiesWidgetBase: () => ft });
      var i = o(67294),
        r = o(73935),
        n = o(79881),
        s = o(90963),
        a = o(27490),
        l = o(32856),
        d = o.n(l),
        c = o(47903),
        h = o(67945),
        p = o(15521),
        u = o(39096),
        g = o(16282),
        _ = o(674),
        m = o.n(_);
      class v extends m() {
        constructor(t, e, o) {
          super(),
            (this._listenersMappers = []),
            (this._isProcess = !1),
            (this._baseProperty = t),
            (this._propertyApplier = e),
            (this._undoText = o);
        }
        destroy() {
          this._baseProperty.destroy();
        }
        value() {
          return this._baseProperty.value();
        }
        setValue(t) {
          (this._isProcess = !0),
            this._baseProperty.setValue(t, void 0, {
              applyValue: (t, e) =>
                this._propertyApplier.setProperty(t, e, this._undoText),
            }),
            (this._isProcess = !1),
            this._listenersMappers.forEach((t) => {
              t.method.call(t.obj, this);
            });
        }
        subscribe(t, e) {
          const o = (o) => {
              this._isProcess || e.call(t, this);
            },
            i = { obj: t, method: e, callback: o };
          this._listenersMappers.push(i), this._baseProperty.subscribe(t, o);
        }
        unsubscribe(t, e) {
          var o;
          const i = (0, g.ensureDefined)(
            null ===
              (o = this._listenersMappers.find(
                (o) => o.obj === t && o.method === e
              )) || void 0 === o
              ? void 0
              : o.callback
          );
          this._baseProperty.unsubscribe(t, i);
        }
        unsubscribeAll(t) {
          this._baseProperty.unsubscribeAll(t);
        }
      }
      var b = o(3925),
        w = o(14236),
        y = o(77625),
        f = o(72923);
      const C = y.FLOATING_TOOLBAR_REACT_WIDGETS_CLASS + '__button';
      function x(t) {
        const {
            templateButton: e,
            propertyButtons: o,
            commonButtons: r,
            isDrawingFinished: n,
            activeChartWidget: s,
          } = t,
          a = s.hasModel() && s.model().selection().dataSources();
        return a && a.length
          ? i.createElement(
              w.MatchMediaMap,
              {
                rules: {
                  isSmallWidth: f.DialogBreakpoints.TabletSmall,
                  isSmallHeight: 'screen and (max-height: 428px)',
                },
              },
              ({ isSmallWidth: t, isSmallHeight: e }) =>
                i.createElement(
                  i.Fragment,
                  null,
                  l(),
                  n &&
                    i.createElement(
                      i.Fragment,
                      null,
                      Boolean(o.length) &&
                        o.map((o, r) =>
                          i.createElement(o.component, {
                            ...o.props,
                            key: `${o.props.title}_${r}`,
                            className: C,
                            isSmallScreen: t || e,
                          })
                        ),
                      Boolean(r.length) &&
                        r.map((o, r) => {
                          const n = t || e;
                          return n
                            ? o.showForSmallScreen
                              ? i.createElement(o.component, {
                                  ...o.props,
                                  isSmallScreen: n,
                                  key: `${o.props.title}_${r}`,
                                  className: C,
                                })
                              : null
                            : i.createElement(o.component, {
                                ...o.props,
                                key: `${o.props.title}_${r}`,
                                className: C,
                              });
                        })
                    )
                )
            )
          : l();
        function l() {
          return null === e
            ? null
            : i.createElement(e.component, {
                ...e.props,
                isDrawingFinished: n,
                className: C,
              });
        }
      }
      var T = o(87438),
        S = o(45650),
        P = o(84136);
      function W(t) {
        const { title: e, activeChartWidget: o, className: r } = t;
        return i.createElement(S.ToolWidgetIconButton, {
          className: r,
          icon: P,
          title: e,
          onClick: async function () {
            (0, T.trackEvent)('GUI', 'Context action on drawings', 'Settings');
            const t = o.model().selection().lineDataSources(),
              e = t.length;
            1 === e
              ? await o.showChartPropertiesForSource(t[0], void 0, {
                  onWidget: o.onWidget(),
                })
              : e > 1 &&
                (await o.showChartPropertiesForSources({ sources: t }));
          },
          'data-name': 'settings',
        });
      }
      var E = o(32188),
        L = o(94184),
        B = o(49585),
        k = o(62334);
      function I(t) {
        const { className: e, ...o } = t;
        return i.createElement(B.ToolButton, {
          className: L(e, k.button),
          tooltipPosition: 'horizontal',
          ...o,
        });
      }
      var F = o(96750),
        A = o(62618);
      function R(t) {
        const { activeChartWidget: e, className: o } = t,
          r = e.model().selection().lineDataSources()[0].properties().frozen,
          s = (0, E.useProperty)(r),
          a = s
            ? { title: (0, n.t)('Unlock'), icon: F }
            : { title: (0, n.t)('Lock'), icon: A };
        return i.createElement(I, {
          className: o,
          isActive: Boolean(s),
          onClick: function () {
            (0, T.trackEvent)('GUI', 'Context action on drawings', 'Lock'),
              e.toggleLockSelectedObject();
          },
          'data-name': Boolean(s) ? 'unlock' : 'lock',
          ...a,
        });
      }
      var M = o(23353);
      function D(t) {
        const { title: e, activeChartWidget: o, className: r } = t;
        return i.createElement(S.ToolWidgetIconButton, {
          className: r,
          icon: M,
          title: e,
          'data-name': 'remove',
          onClick: function () {
            (0, T.trackEvent)('GUI', 'Context action on drawings', 'Remove'),
              o.removeSelectedSources();
          },
        });
      }
      var N = o(49775),
        V = o(96404),
        z = o(42998),
        O = o(60934),
        H = o(67842),
        U = o(87361),
        G = o(46374),
        j = o(80556),
        $ = o(6799),
        q = o(21209),
        K = o(22775),
        Z = o(94817),
        Q = o(62781);
      function Y(t) {
        const {
            title: e,
            activeChartWidget: r,
            isSmallScreen: s,
            className: a,
          } = t,
          l = r.model(),
          d = l.selection().lineDataSources(),
          [c, h] = (0, i.useState)([]),
          p = (0, i.useRef)(null),
          u = (0, i.useMemo)(() => new q.ActionsProvider(r), [r]);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(j.KeyboardDocumentListener, {
            keyCode: 27,
            eventType: 'keyup',
            handler: function () {
              (0, g.ensureNotNull)(p.current).close();
            },
          }),
          i.createElement(
            H.ToolWidgetMenu,
            {
              className: a,
              ref: p,
              arrow: !1,
              onOpen: s
                ? void 0
                : function () {
                    const t = [
                        new G.Action({
                          actionId: 'Chart.Source.VisualOrder',
                          label: (0, n.t)('Visual order'),
                          icon: Z,
                          subItems: _(),
                          name: 'visual-order',
                        }),
                      ],
                      e = (function () {
                        const t = [],
                          e = z.isMacKeyboard ? ' +' : '',
                          i = d.filter((t) => t.cloneable());
                        i.length > 0 &&
                          t.push(
                            new G.Action({
                              actionId: 'Chart.LineTool.Clone',
                              name: 'clone',
                              icon: o(6577),
                              shortcutHint:
                                z.humanReadableModifiers(O.Modifiers.Mod) +
                                e +
                                ' Drag',
                              label: (0, n.t)('Clone'),
                              onExecute: () => {
                                l.cloneLineTools(i, !1),
                                  (0, T.trackEvent)(
                                    'GUI',
                                    'Context action on drawings',
                                    'Clone'
                                  );
                              },
                            })
                          );
                        const s = d.filter((t) => t.copiable());
                        if (s.length > 0) {
                          const o = {
                            actionId: 'Chart.Clipboard.CopyLineTools',
                            name: 'copy',
                            label: (0, n.t)('Copy'),
                            shortcutHint:
                              z.humanReadableModifiers(O.Modifiers.Mod) +
                              e +
                              ' C',
                            onExecute: () => {
                              r.chartWidgetCollection().clipboard.uiRequestCopy(
                                s
                              );
                            },
                          };
                          t.push(new G.Action(o, 'Copy'));
                        }
                        if (
                          !(function () {
                            if (!(null == r ? void 0 : r.isMultipleLayout()))
                              return !1;
                            return d.some((t) => t.isSynchronizable());
                          })()
                        )
                          return t;
                        return (
                          t.push(...(0, q.createSyncDrawingActions)(r, d)), t
                        );
                      })();
                    e.length && t.push(new G.Separator(), ...e);
                    t.push(
                      new G.Separator(),
                      new G.Action({
                        actionId: 'Chart.SelectedObject.Hide',
                        label: (0, n.t)('Hide'),
                        icon: Q,
                        onExecute: () => {
                          r.hideSelectedObject();
                        },
                        name: 'hide',
                      })
                    ),
                      h(J(t));
                  },
              onClick: s
                ? function (t) {
                    u.contextMenuActionsForSources(d).then((e) => {
                      window.matchMedia(f.DialogBreakpoints.TabletSmall).matches
                        ? $.ContextMenuManager.showMenu(J(e), t, {
                            mode: 'drawer',
                            'data-name': 'more-menu',
                          })
                        : h(J(e));
                    });
                  }
                : void 0,
              title: e,
              content: i.createElement(N.Icon, { icon: K }),
              'data-name': 'more',
              menuDataName: 'more-menu',
            },
            i.createElement(U.ActionsTable, { parentIsOpened: !0, items: c })
          )
        );
        function _() {
          const t = [],
            e = l.availableZOrderOperations(d),
            o = new G.Action({
              actionId: 'Chart.Source.VisualOrder.BringToFront',
              name: 'bring-to-front',
              label: (0, n.t)('Bring to Front'),
              onExecute: () => {
                l.bringToFront(d);
              },
              disabled: 1 === d.length && !e.bringToFrontEnabled,
            }),
            i = new G.Action({
              actionId: 'Chart.Source.VisualOrder.SendToBack',
              name: 'send-to-back',
              label: (0, n.t)('Send to Back'),
              onExecute: () => {
                l.sendToBack(d);
              },
              disabled: 1 === d.length && !e.sendToBackEnabled,
            }),
            r = new G.Action({
              actionId: 'Chart.Source.VisualOrder.BringForward',
              name: 'bring-forward',
              label: (0, n.t)('Bring Forward'),
              onExecute: () => {
                l.bringForward(d);
              },
              disabled: 1 === d.length && !e.bringForwardEnabled,
            }),
            s = new G.Action({
              actionId: 'Chart.Source.VisualOrder.SendBackward',
              name: 'send-backward',
              label: (0, n.t)('Send Backward'),
              onExecute: () => {
                l.sendBackward(d);
              },
              disabled: 1 === d.length && !e.sendBackwardEnabled,
            });
          return t.push(o, i, r, s), t;
        }
      }
      function J(t) {
        if (V.touch && !window.matchMedia('(pointer:fine)').matches) {
          const e = t.filter((t) => 'Copy' !== t.id);
          if (e.length === t.length) return e;
          const o = [];
          return (
            e.forEach((t) => {
              ('separator' !== t.type ||
                (o.length > 0 && 'separator' !== o[o.length - 1].type)) &&
                o.push(t);
            }),
            o
          );
        }
        return t;
      }
      var X = o(64417),
        tt = o(4034),
        et = o(88816),
        ot = o(74295);
      function it(t) {
        const {
            property: e,
            propertyApplier: o,
            title: r,
            undoText: s,
            className: a,
          } = t,
          l = (0, E.useProperty)(e),
          d = (0, i.useMemo)(
            () => [
              new G.Action({
                actionId: 'Chart.LineTool.Toolbar.ChangeLineStyleToSolid',
                icon: tt,
                label: (0, n.t)('Line'),
                active: X.LineStyle.Solid === l,
                onExecute: () => o.setProperty(e, X.LineStyle.Solid, s),
              }),
              new G.Action({
                actionId: 'Chart.LineTool.Toolbar.ChangeLineStyleToDashed',
                icon: et,
                label: (0, n.t)('Dashed line'),
                active: X.LineStyle.Dashed === l,
                onExecute: () => o.setProperty(e, X.LineStyle.Dashed, s),
              }),
              new G.Action({
                actionId: 'Chart.LineTool.Toolbar.ChangeLineStyleToDotted',
                icon: ot,
                label: (0, n.t)('Dotted line'),
                active: X.LineStyle.Dotted === l,
                onExecute: () => o.setProperty(e, X.LineStyle.Dotted, s),
              }),
            ],
            [o, e, l]
          );
        return i.createElement(
          H.ToolWidgetMenu,
          {
            className: a,
            arrow: !1,
            content: i.createElement(N.Icon, { icon: rt(l) }),
            title: r,
            'data-name': t['data-name'],
            menuDataName: t['data-name'] + '-menu',
          },
          i.createElement(U.ActionsTable, { items: d })
        );
      }
      function rt(t) {
        switch (t) {
          case X.LineStyle.Solid:
            return tt;
          case X.LineStyle.Dashed:
            return et;
          case X.LineStyle.Dotted:
            return ot;
          default:
            return '';
        }
      }
      const nt = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40];
      function st(t) {
        const {
            property: e,
            propertyApplier: o,
            title: r,
            undoText: n,
            className: s,
          } = t,
          a = (0, E.useProperty)(e),
          l = nt.map(
            (t) =>
              new G.Action({
                actionId: 'Chart.LineTool.Toolbar.ChangeFontSizeProperty',
                label: t.toString(),
                onExecute: () => o.setProperty(e, t, n),
                active: t === a,
              })
          );
        return i.createElement(
          H.ToolWidgetMenu,
          {
            arrow: !1,
            content: a,
            className: s,
            title: r,
            'data-name': t['data-name'],
            menuDataName: t['data-name'] + '-menu',
          },
          i.createElement(U.ActionsTable, { items: l })
        );
      }
      var at = o(5729),
        lt = o.n(at);
      o(30831), o(54395);
      class dt extends y.FloatingToolbar {
        constructor(t) {
          super(dt._prepareOptions(t)),
            (this._onWidgetStateChangedDelegate = new (lt())()),
            (this._statedWidgets = []),
            (this._currentPopup = null),
            (this._onWindowClickedListener = this._onWindowClicked.bind(this));
        }
        show() {
          super.show(),
            document.addEventListener(
              'mousedown',
              this._onWindowClickedListener
            );
        }
        hide(t) {
          super.hide(t),
            document.removeEventListener(
              'mousedown',
              this._onWindowClickedListener
            );
        }
        destroy() {
          this._closePopup(), super.destroy();
        }
        addGroupedWidget(t, e = {}) {
          (0, g.assert)(
            t.states.length > 0 &&
              -1 !== dt._getStateIndexById(t, t.currentStateId),
            `Argument is invalid (count: ${t.states.length}, state: ${t.currentStateId})`
          );
          const o = document.createElement('div');
          (o.className =
            'tv-grouped-floating-toolbar__widget-wrapper apply-common-tooltip'),
            t.widgetAddClass && o.classList.add(t.widgetAddClass),
            o.setAttribute('title', t.tooltip);
          const i = { isEnabled: !0, statedWidget: t, toolbarWidget: o },
            r = this._onWidgetClicked.bind(this, i);
          (i.clickListener = r),
            o.addEventListener('click', r),
            this._updateWidgetPreview(i),
            this.addWidget(o, e),
            this._statedWidgets.push(i);
        }
        findGroupedWidget(t) {
          const e = this._statedWidgets.length;
          for (let o = 0; o < e; ++o) {
            if (this._statedWidgets[o].statedWidget.id === t) return o;
          }
          return -1;
        }
        removeGroupedWidget(t) {
          const e = this._statedWidgets.length;
          for (let o = 0; o < e; ++o) {
            const e = this._statedWidgets[o];
            if (e.statedWidget.id === t)
              return (
                this._isPopupCreatedForWidget(t) && this._closePopup(),
                void 0 !== e.clickListener &&
                  e.toolbarWidget.removeEventListener('click', e.clickListener),
                this.removeWidget(e.toolbarWidget),
                this._statedWidgets.splice(o, 1),
                void this._updatePopupPosition()
              );
          }
          (0, g.assert)(!1, `Unknown groupId(${t})`);
        }
        updateGroupedWidget(t, e) {
          this._closePopup();
          const o = this._ensuredGetWidgetDataForId(t);
          (o.statedWidget.currentStateId = e.currentStateId),
            (o.statedWidget.states = e.states),
            this._updateWidgetPreview(o);
        }
        setGroupedWidgetEnabled(t, e) {
          const o = this._ensuredGetWidgetDataForId(t);
          (o.isEnabled = e), o.toolbarWidget.classList.toggle('i-disabled', !e);
        }
        setGroupedWidgetState(t, e) {
          const o = this._ensuredGetWidgetDataForId(t);
          (0, g.assert)(
            -1 !== dt._getStateIndexById(o.statedWidget, e),
            `Unknown stateId (${e})`
          ),
            (o.statedWidget.currentStateId = e),
            this._updateSubWidgetsState(o.statedWidget),
            this._updateWidgetPreview(o);
        }
        onWidgetStateChanged() {
          return this._onWidgetStateChangedDelegate;
        }
        _onVerticalChanged(t, e) {
          this._updatePopupPosition();
        }
        _ensuredGetWidgetDataForId(t) {
          for (const e of this._statedWidgets)
            if (e.statedWidget.id === t) return e;
          throw new Error(`Unknown groupId(${t})`);
        }
        _onWidgetClicked(t, e) {
          const o =
            this._currentPopup &&
            this._isPopupCreatedForWidget(t.statedWidget.id);
          this._closePopup(), !o && t.isEnabled && this._createPopup(t);
        }
        _createPopup(t) {
          const e = {
            createdFor: t.toolbarWidget,
            element: document.createElement('div'),
            stateWidgetId: t.statedWidget.id,
            widgets: [],
          };
          e.element.className += 'tv-grouped-floating-toolbar__popup js-popup';
          const o = t.statedWidget.states.length;
          t.statedWidget.states.forEach((i, r) => {
            const n = this._createSubWidget(t, i),
              s = this._onSubWidgetClicked.bind(this, t, i.id);
            n.addEventListener('click', s),
              e.widgets.push({ clickListener: s, stateWidget: i, widget: n }),
              n.classList.add(
                'tv-grouped-floating-toolbar__sub-widget--slide-right-' + r
              ),
              n.classList.add(
                'tv-grouped-floating-toolbar__sub-widget--slide-left-' +
                  (o - r + 1)
              ),
              i.readonly || e.element.appendChild(n);
          }),
            (this._currentPopup = e),
            this._updateSubWidgetsState(t.statedWidget),
            t.toolbarWidget.classList.add('i-dropped'),
            this._getWidget().appendChild(this._currentPopup.element),
            Promise.resolve().then(() => {
              this._currentPopup &&
                this._currentPopup.element.classList.add('i-opened');
            }),
            this._updatePopupPosition();
        }
        _closePopup() {
          if (
            (this._statedWidgets.forEach((t) => {
              t.toolbarWidget.classList.remove('i-dropped');
            }),
            !this._currentPopup)
          )
            return;
          const t = this._currentPopup.widgets,
            e = this._currentPopup.element;
          (this._currentPopup = null),
            t.forEach((t) => {
              t.widget.removeEventListener('click', t.clickListener);
            }),
            e.classList.remove('i-opened'),
            e.addEventListener('transitionend', (t) => {
              t.target === e && this._getWidget().removeChild(e);
            });
        }
        _updateWidgetPreview(t) {
          const e = dt._getStateIndexById(
            t.statedWidget,
            t.statedWidget.currentStateId
          );
          (0, g.assert)(
            -1 !== e,
            'Unknown state id: ' + t.statedWidget.currentStateId
          );
          const o = t.statedWidget.states[e].widget.cloneNode(!0);
          t.toolbarWidget.firstChild
            ? t.toolbarWidget.replaceChild(o, t.toolbarWidget.firstChild)
            : (t.toolbarWidget.appendChild(o),
              t.toolbarWidget.appendChild(dt._createCaret()));
        }
        _updateSubWidgetsState(t) {
          this._currentPopup &&
            this._isPopupCreatedForWidget(t.id) &&
            this._currentPopup.widgets.forEach((e) => {
              e.widget.classList.toggle(
                dt._activeSubWidgetClass,
                e.stateWidget.id === t.currentStateId
              );
            });
        }
        _updatePopupPosition() {
          if (!this._currentPopup) return;
          const t = this._currentPopup.createdFor,
            e = this._getWidget().getBoundingClientRect(),
            o = this._findWrapperForWidget(t);
          if (!o || !this._currentPopup)
            throw new Error(
              "Toolbar has no wrapper for preview's widget or there is no popup"
            );
          const i = o.getBoundingClientRect(),
            r = this._currentPopup.element.getBoundingClientRect(),
            n = this._currentPopup.element;
          if (this.isVertical())
            n.classList.remove('tv-grouped-floating-toolbar__popup--at-top'),
              (n.style.top = i.top - e.top + 1 + 'px'),
              (n.style.left = ''),
              e.left > window.innerWidth - e.right
                ? n.classList.add('tv-grouped-floating-toolbar__popup--at-left')
                : n.classList.remove(
                    'tv-grouped-floating-toolbar__popup--at-left'
                  );
          else {
            n.classList.remove('tv-grouped-floating-toolbar__popup--at-left');
            let t = 0;
            i.left + r.width > window.innerWidth
              ? e.left + r.width > window.innerWidth && (t = e.width - r.width)
              : (t = i.left - e.left + 1),
              (n.style.left = t + 'px'),
              e.bottom + r.height > window.innerHeight
                ? n.classList.add('tv-grouped-floating-toolbar__popup--at-top')
                : (n.classList.remove(
                    'tv-grouped-floating-toolbar__popup--at-top'
                  ),
                  (n.style.top = ''));
          }
        }
        _isPopupCreatedForWidget(t) {
          return Boolean(
            this._currentPopup && this._currentPopup.stateWidgetId === t
          );
        }
        _createSubWidget(t, e) {
          const o = document.createElement('div');
          return (
            (o.className += 'tv-grouped-floating-toolbar__sub-widget'),
            t.statedWidget.stateWidgetAddClass &&
              o.classList.add(t.statedWidget.stateWidgetAddClass),
            o.appendChild(e.widget),
            o
          );
        }
        _onSubWidgetClicked(t, e) {
          this._closePopup(),
            t.statedWidget.currentStateId !== e &&
              (this.setGroupedWidgetState(t.statedWidget.id, e),
              this._onWidgetStateChangedDelegate.fire(t.statedWidget.id, e));
        }
        _onWindowClicked(t) {
          if (
            this.isVisible() &&
            this._currentPopup &&
            !dt._isEventInElement(t, this._currentPopup.element)
          ) {
            for (let e = 0; e < this._statedWidgets.length; ++e)
              if (dt._isEventInElement(t, this._statedWidgets[e].toolbarWidget))
                return;
            this._closePopup();
          }
        }
        static _getStateIndexById(t, e) {
          for (let o = 0; o < t.states.length; ++o)
            if (t.states[o].id === e) return o;
          return -1;
        }
        static _createCaret() {
          const t = document.createElement('div');
          return (
            (t.className =
              'tv-caret tv-caret--small tv-caret--colored tv-grouped-floating-toolbar__caret'),
            t
          );
        }
        static _prepareOptions(t) {
          return (
            t.addClass
              ? (t.addClass += ' tv-grouped-floating-toolbar')
              : (t.addClass = ' tv-grouped-floating-toolbar'),
            t
          );
        }
        static _isEventInElement(t, e) {
          return t.target === e || e.contains(t.target);
        }
      }
      dt._activeSubWidgetClass =
        'tv-grouped-floating-toolbar__sub-widget--current';
      var ct = o(6535),
        ht = o(21698),
        pt = o(80538),
        ut = o(85103);
      const gt = new s.TranslatedString(
          'change line tool(s) font size',
          (0, n.t)('change line tool(s) font size')
        ),
        _t = new s.TranslatedString(
          'change line tool(s) line style',
          (0, n.t)('change line tool(s) line style')
        ),
        mt = (0, n.t)('Settings'),
        vt = (0, n.t)('Remove'),
        bt = (0, n.t)('More'),
        wt = (0, n.t)('Style'),
        yt = (0, n.t)('Font size');
      class ft {
        constructor(t) {
          (this._isDrawingFinished = new (d())(!0)),
            (this._currentTool = null),
            (this._updateVisibilityTimeout = null),
            (this._lineWidthsProperty = null),
            (this._lineColorsProperty = null),
            (this._currentProperties = null),
            (this._container = null),
            (this._toolbarRendered = !1),
            (this._templatesButton = null),
            (this._propertyButtons = []),
            (this._commonButtons = []),
            (this._handleSourceEdit = (t) => {
              p.isDirectionalMovementActive.value() ||
                (t
                  ? this._floatingToolbar.hide(!0)
                  : this._toolbarRendered && this._floatingToolbar.show());
            }),
            (this._chartWidgetCollection = t),
            (this._floatingToolbar = new dt({
              defaultPosition: {
                top: ct.HEADER_TOOLBAR_HEIGHT_EXPANDED + 15,
                left: window.innerWidth / 2,
              },
              positionSettingsKey: 'properties_toolbar.position',
              positionStorageType: 'device',
              layout: 'horizontal',
              'data-name': 'drawing-toolbar',
            })),
            (this._container = this._floatingToolbar.getReactWidgetContainer()),
            p.isToolMovingNow.subscribe(this._handleSourceEdit),
            p.isToolEditingNow.subscribe(this._handleSourceEdit);
        }
        activeChartWidget() {
          return this._chartWidgetCollection.activeChartWidget.value();
        }
        selectedSources() {
          return this._chartWidgetCollection.selectedSources.value();
        }
        hide() {
          var t;
          this._updateVisibilityTimeout &&
            clearTimeout(this._updateVisibilityTimeout),
            (this._updateVisibilityTimeout = setTimeout(() => {
              (0, h.unsetNewToolProperties)(),
                this._floatingToolbar.hide(!0),
                this._isToolbarRendered() && this._unmountToolbar(),
                this._clearProperties(),
                this._clearCommonButtons();
            }, 0)),
            null === (t = this._lineToolsDoNotAffectChartInvalidation) ||
              void 0 === t ||
              t.destroy(),
            delete this._lineToolsDoNotAffectChartInvalidation,
            delete this._propertyApplier;
        }
        _propertyApplierImpl() {
          return (
            this._propertyApplier ||
              (this._lineToolsDoNotAffectChartInvalidation ||
                (this._lineToolsDoNotAffectChartInvalidation =
                  new ut.FeatureToggleWatchedValue(
                    'do_not_invalidate_chart_on_changing_line_tools',
                    !1
                  )),
              (this._propertyApplier = new pt.PropertyApplierWithoutSavingChart(
                () => this.activeChartWidget().model(),
                this._lineToolsDoNotAffectChartInvalidation
              ))),
            this._propertyApplier
          );
        }
        _clearProperties() {
          this._clearPropertyButtons(),
            this._lineWidthsProperty &&
              (this._lineWidthsProperty.destroy(),
              (this._lineWidthsProperty = null)),
            this._lineColorsProperty &&
              (this._lineColorsProperty.destroy(),
              (this._lineColorsProperty = null)),
            this._currentProperties && (this._currentProperties = null);
        }
        _show() {
          this._updateVisibilityTimeout &&
            clearTimeout(this._updateVisibilityTimeout),
            (this._updateVisibilityTimeout = setTimeout(() => {
              this._renderToolbar(),
                this._floatingToolbar.show(),
                this._floatingToolbar.checkPosition();
            }, 0));
        }
        _addPropertyButton(t) {
          this._propertyButtons.push(t), this._renderToolbar();
        }
        _addCommonButton(t) {
          this._commonButtons.push(t), this._renderToolbar();
        }
        _addTemplatesButton(t) {
          this._templatesButton = t;
        }
        _renderToolbar() {
          null !== this._container &&
            this.activeChartWidget() &&
            this.activeChartWidget().hasModel() &&
            (r.render(
              i.createElement(x, {
                templateButton: this._templatesButton,
                propertyButtons: this._propertyButtons,
                commonButtons: this._commonButtons,
                isDrawingFinished: this._isDrawingFinished.value(),
                activeChartWidget: this.activeChartWidget(),
              }),
              this._container
            ),
            (this._toolbarRendered = !0));
        }
        _unmountToolbar() {
          null !== this._container &&
            (r.unmountComponentAtNode(this._container),
            (this._toolbarRendered = !1));
        }
        _clearTemplatesButton() {
          this._templatesButton = null;
        }
        _clearPropertyButtons() {
          this._propertyButtons = [];
        }
        _clearCommonButtons() {
          this._commonButtons = [];
        }
        _isToolbarRendered() {
          return this._toolbarRendered;
        }
        _createSettingsButton() {
          const t = {
            component: W,
            props: { title: mt, activeChartWidget: this.activeChartWidget() },
          };
          this._addCommonButton(t);
        }
        _createLockButton() {
          const t = {
            component: R,
            props: {
              title: 'Lock',
              activeChartWidget: this.activeChartWidget(),
            },
          };
          this._addCommonButton(t);
        }
        _createRemoveButton() {
          const t = {
            component: D,
            props: { title: vt, activeChartWidget: this.activeChartWidget() },
            showForSmallScreen: !0,
          };
          this._addCommonButton(t);
        }
        _createDotsButton() {
          this._addCommonButton({
            component: Y,
            props: { title: bt, activeChartWidget: this.activeChartWidget() },
            showForSmallScreen: !0,
          });
        }
        _createAlertButton() {}
        _createSourceActions() {
          this._createLockButton();
        }
        _createLineStyleButton(t) {
          const e = this.selectedSources();
          if (0 === e.length) return !1;
          const o = e[0];
          if (!(0, ht.isDataSource)(o)) return !1;
          const i = {
            component: it,
            props: {
              property: o.properties().linestyle || t,
              title: wt,
              propertyApplier: this._propertyApplierImpl(),
              'data-name': 'style',
              undoText: _t,
            },
          };
          return this._addPropertyButton(i), !0;
        }
        _createFontSizeButton(t) {
          const e = this.selectedSources();
          if (0 === e.length) return !1;
          const o = e[0];
          if (!(0, ht.isDataSource)(o)) return !1;
          const i = {
            component: st,
            props: {
              property: o.properties().fontsize || t,
              title: yt,
              propertyApplier: this._propertyApplierImpl(),
              'data-name': 'font-size',
              undoText: gt,
            },
          };
          return this._addPropertyButton(i), !0;
        }
        _createCommonButtons() {
          this._commonButtons.length && this._clearCommonButtons(),
            a.enabled('property_pages') && this._createSettingsButton(),
            this._createSourceActions(),
            this._createRemoveButton(),
            this._createDotsButton();
        }
        _prepareProperties(t) {
          const e = this.selectedSources().filter(
            (e) => (0, h.isLineTool)(e) && e.properties()[t]
          );
          if (!(e.filter((e) => e.properties()[t].visible()).length < 1))
            return e.map((e) => e.properties()[t]).filter(c.notNull);
        }
        _createProperty(t, e, o, i) {
          if (e) {
            const t = this._prepareProperties(o);
            if (!t) return;
            return this._isWidthProperty(t[0])
              ? new v(
                  new u.MultipleLineWidthsProperty(t),
                  this._propertyApplierImpl(),
                  i
                )
              : new b.CollectibleColorPropertyUndoWrapper(
                  new u.MultipleLineColorsProperty(t),
                  this._propertyApplierImpl(),
                  i
                );
          }
          if (t && t.visible())
            return this._isWidthProperty(t)
              ? new u.MultipleLineWidthsProperty([t])
              : new b.CollectibleColorPropertyDirectWrapper(
                  new u.MultipleLineColorsProperty([t])
                );
        }
        _shouldShowBackgroundProperty(t, e) {
          return !e || !e.fillBackground || !!e.fillBackground.value();
        }
        _isDrawingToolExcludingCustomUrlEventTool(t) {
          return (
            Boolean(
              null == t ? void 0 : t.toLowerCase().includes('linetool')
            ) &&
            'LineToolTweet' !== t &&
            'LineToolIdea' !== t
          );
        }
        _isWidthProperty(t) {
          return t instanceof u.LineToolWidthsProperty;
        }
      }
    },
    45466: (t, e, o) => {
      'use strict';
      var i = o(79881).t,
        r = o(90963).TranslatedString,
        n = o(15521),
        s = o(34708).LineToolPropertiesWidgetBase,
        a = o(33033).isLineDrawnWithPressedButton,
        l = o(67945).isLineTool;
      const d = o(91800).ColorPickerButton,
        c = o(31071).LineWidthButton;
      o(67945).setNewToolProperties;
      o(27490);
      var h = o(37821),
        p = o(17159),
        u = o(95871),
        g =
          (new r('apply drawing template', i('apply drawing template')),
          new r('change line tool(s) color', i('change line tool(s) color'))),
        _ = new r(
          'change line tool(s) background color',
          i('change line tool(s) background color')
        ),
        m = new r(
          'change line tool(s) text color',
          i('change line tool(s) text color')
        ),
        v = new r(
          'change line tool(s) line width',
          i('change line tool(s) line width')
        ),
        b = i('Color'),
        w = i('Line tool colors'),
        y = i('Text color'),
        f = i('Line tool text colors'),
        C = i('Background color'),
        x = i('Line tool backgrounds'),
        T = i('Style'),
        S = i('Font Size'),
        P = i('Line tool width'),
        W = i('Line tool widths'),
        E = i('Profit background color'),
        L = i('Stop background color'),
        B = i('Marker color'),
        k = i('Background color 1'),
        I = i('Background color 2');
      class F extends s {
        constructor(t) {
          super(t),
            (this._hasAlertWathcedValue = null),
            (this._templatesButton = null),
            this.attachHandlers();
        }
        attachHandlers() {
          n.tool.subscribe(this.onToolChanged.bind(this), { callWithLast: !0 }),
            n.iconTool.subscribe(this.onIconToolChanged.bind(this)),
            this._chartWidgetCollection.selectedSources.subscribe(
              this.onSourceChanged.bind(this)
            );
        }
        onIconToolChanged() {
          this.onToolChanged(n.tool.value());
        }
        onToolChanged(t, e) {
          this._currentTool = t;
          const o = this.selectedSources();
          this._isDrawingToolExcludingCustomUrlEventTool(t)
            ? (this._isDrawingFinished.setValue(!1), this._updateVisibility())
            : o && o.length
            ? (o.length > 1 && this._isDrawingFinished.setValue(!0),
              this.onSourceChanged(this.selectedSources()))
            : this.hide();
        }
        findSourceOnWidget(t) {
          for (
            var e = 0;
            e < this.activeChartWidget().model().panes().length;
            e++
          )
            for (
              var o = this.activeChartWidget()
                  .model()
                  .panes()
                  [e].sourcesByGroup()
                  .all(),
                i = 0;
              i < o.length;
              i++
            )
              if (o[i] === t) return o[i];
        }
        onSourceChanged(t) {
          if (
            (this._hasAlertWathcedValue &&
              (this._hasAlertWathcedValue.destroy(),
              (this._hasAlertWathcedValue = null)),
            !t || !t.length || (1 === t.length && !l(t[0])))
          )
            return (
              (this._propertiesVisible = !1),
              (this._toolbarVisible = !1),
              void this.hide()
            );
          if ((this._createCommonButtons(), 1 === t.length)) {
            var e = t[0];
            e.isAvailableInFloatingWidget() && this.findSourceOnWidget(e)
              ? (!e.userEditEnabled() ||
                  (!a(e.toolname) &&
                    this.activeChartWidget().model().lineBeingCreated()) ||
                  (this._isDrawingFinished.setValue(!0),
                  e.canHasAlert() &&
                    (this._hasAlertWathcedValue = e.hasAlert.spawn())),
                this.showPropertiesOf(e.toolname, e.properties(), !0),
                this.showTemplatesOf({ source: e }),
                (this._toolbarVisible = !0))
              : this.hide();
          } else
            this._clearProperties(),
              this._templatesButton &&
                (this._clearTemplatesButton(), (this._templatesButton = null)),
              this._createWidthsButton(void 0, !0),
              this._createColorsButton(void 0, !0),
              this._createBackgroundsButton(void 0, !0),
              this._createTextColorsButton(void 0, !0),
              (this._propertiesVisible = !0);
          this._updateVisibility();
        }
        _createWidthsButton(t, e) {
          if (
            (this._lineWidthsProperty &&
              (this._lineWidthsProperty.destroy(),
              (this._lineWidthsProperty = null)),
            (this._lineWidthsProperty = this._createProperty(
              t,
              e,
              'linesWidths',
              v
            )),
            !this._lineWidthsProperty)
          )
            return !0;
          var o = P;
          e &&
            1 !==
              this.selectedSources().filter(function (t) {
                return l(t) && t.properties().linesWidths;
              }).length &&
            (o = W);
          return (
            this._addPropertyButton({
              component: c,
              props: {
                title: o,
                multipleProperty: this._lineWidthsProperty,
                propertyApplier: this._propertyApplierImpl(),
                'data-name': 'line-tool-width',
                undoText: v,
              },
            }),
            !0
          );
        }
        _createColorsButton(t, e) {
          return (
            this._lineColorsProperty &&
              (this._lineColorsProperty.destroy(),
              (this._lineColorsProperty = null)),
            (this._lineColorsProperty = this._createProperty(
              t,
              e,
              'linesColors',
              g
            )),
            !this._lineColorsProperty ||
              (this._addPropertyButton({
                component: d,
                props: {
                  icon: h,
                  title: w,
                  property: this._lineColorsProperty,
                  propertyApplier: this._propertyApplierImpl(),
                  'data-name': 'line-tool-color',
                  undoText: g,
                },
              }),
              !0)
          );
        }
        _createBackgroundsButton(t, e) {
          return (
            this._backgroundsProperty &&
              (this._backgroundsProperty.destroy(),
              (this._backgroundsProperty = null)),
            (this._backgroundsProperty = this._createProperty(
              t,
              e,
              'backgroundsColors',
              _
            )),
            !this._backgroundsProperty ||
              (this._addPropertyButton({
                component: d,
                props: {
                  icon: p,
                  title: x,
                  property: this._backgroundsProperty,
                  propertyApplier: this._propertyApplierImpl(),
                  'data-name': 'background-color',
                  undoText: _,
                },
              }),
              !0)
          );
        }
        _createTextColorsButton(t, e) {
          return (
            this._textColorsProperty &&
              (this._textColorsProperty.destroy(),
              (this._textColorsProperty = null)),
            (this._textColorsProperty = this._createProperty(
              t,
              e,
              'textsColors',
              m
            )),
            !this._textColorsProperty ||
              (this._addPropertyButton({
                component: d,
                props: {
                  icon: u,
                  title: f,
                  property: this._textColorsProperty,
                  propertyApplier: this._propertyApplierImpl(),
                  'data-name': 'text-color',
                  undoText: m,
                },
              }),
              !0)
          );
        }
        showTemplatesOf(t) {}
        templatesList() {
          return this._templatesList;
        }
        _getPossibleProperty(t) {
          for (
            var e = [], o = this._defaultToolProperties(), i = 0;
            i < o.length;
            i++
          ) {
            var r = o[i];
            r.name in t && e.push(r);
          }
          return e;
        }
        showPropertiesOf(t, e, o) {
          this._toolExceptionCases ||
            (this._toolExceptionCases = this._createToolExceptionCases());
          var i = this._toolExceptionCases[t] || this._getPossibleProperty(e);
          if (
            (this._clearProperties(), (this._propertiesVisible = !1), i.length)
          ) {
            for (var r = {}, n = 0; n < i.length; n++) {
              for (
                var s = i[n], a = e, l = s.name.split('.'), c = 0;
                c < l.length;
                ++c
              )
                a = a && a[l[c]];
              var h = s.showIf;
              if ('function' != typeof h || h(a, e)) {
                var p = s.factory;
                if (p && p.call(this, a, o)) continue;
                if (!a) continue;
                if (
                  ((this._propertiesVisible = !0), 'combobox' !== s.inputType)
                ) {
                  const t = {
                    component: d,
                    props: {
                      icon: s.iconSvgCode,
                      title: s.title,
                      'data-name': s.dataName,
                      property: a,
                      propertyApplier: this._propertyApplierImpl(),
                      undoText: s.undoText,
                    },
                  };
                  this._addPropertyButton(t);
                  continue;
                }
                r[s.name] = a;
              }
            }
            this._currentProperties = r;
          }
        }
        _updateVisibility() {
          this._isDrawingFinished.value() &&
          (this._toolbarVisible || this._propertiesVisible)
            ? this._show()
            : this.hide();
        }
        refresh() {
          this.onSourceChanged(this.selectedSources());
        }
        _defaultToolProperties() {
          return [
            {
              name: 'linesColors',
              inputType: 'colorPicker',
              iconSvgCode: h,
              title: b,
              factory: F.prototype._createColorsButton,
              dataName: 'line-tool-color',
            },
            {
              name: 'backgroundsColors',
              inputType: 'colorPicker',
              iconSvgCode: p,
              title: C,
              factory: F.prototype._createBackgroundsButton,
              dataName: 'background-color',
              showIf: this._shouldShowBackgroundProperty,
            },
            {
              name: 'textsColors',
              title: y,
              inputType: 'colorPicker',
              iconSvgCode: u,
              factory: F.prototype._createTextColorsButton,
              dataName: 'text-color',
            },
            {
              name: 'linesWidths',
              inputType: 'combobox',
              factory: F.prototype._createWidthsButton,
            },
            {
              name: 'linestyle',
              title: T,
              inputType: 'combobox',
              factory: F.prototype._createLineStyleButton,
            },
          ];
        }
        _regressionToolExceptionCases() {
          return [
            {
              name: 'linesWidths',
              inputType: 'combobox',
              factory: F.prototype._createWidthsButton,
            },
          ];
        }
        _pathExceptionCases() {
          return [
            {
              name: 'linesColors',
              inputType: 'colorPicker',
              iconSvgCode: h,
              title: b,
              factory: F.prototype._createColorsButton,
              dataName: 'line-tool-color',
            },
            {
              name: 'linesWidths',
              inputType: 'combobox',
              factory: F.prototype._createWidthsButton,
            },
            {
              name: 'lineStyle',
              title: T,
              inputType: 'combobox',
              factory: F.prototype._createLineStyleButton,
            },
          ];
        }
        _riskPropertiesExceptionCases() {
          return [
            {
              name: 'textcolor',
              title: y,
              inputType: 'colorPicker',
              iconSvgCode: u,
              dataName: 'text-color',
              undoText: m,
            },
            {
              name: 'profitBackground',
              title: E,
              inputType: 'colorPicker',
              iconSvgCode: p,
              dataName: 'background-color',
              undoText: _,
            },
            {
              name: 'stopBackground',
              title: L,
              inputType: 'colorPicker',
              iconSvgCode: p,
              dataName: 'background-color',
              undoText: _,
            },
          ];
        }
        _rangeExceptionCases() {
          return [
            {
              name: 'linecolor',
              inputType: 'colorPicker',
              iconSvgCode: h,
              title: b,
              dataName: 'line-tool-color',
              undoText: g,
            },
            {
              name: 'backgroundColor',
              inputType: 'colorPicker',
              iconSvgCode: p,
              title: C,
              dataName: 'background-color',
              showIf: this._shouldShowBackgroundProperty,
              undoText: _,
            },
            {
              name: 'linesWidths',
              inputType: 'combobox',
              factory: F.prototype._createWidthsButton,
            },
          ];
        }
        _brushPropertiesExceptionCase() {
          return [
            {
              name: 'linesColors',
              inputType: 'colorPicker',
              iconSvgCode: h,
              title: b,
              factory: F.prototype._createColorsButton,
              dataName: 'line-tool-color',
            },
            {
              name: 'backgroundsColors',
              inputType: 'colorPicker',
              iconSvgCode: p,
              title: C,
              dataName: 'background-color',
              factory: F.prototype._createBackgroundsButton,
            },
            {
              name: 'linesWidths',
              inputType: 'combobox',
              factory: F.prototype._createWidthsButton,
            },
          ];
        }
        _bezierPropertiesExceptionCases() {
          return [
            {
              name: 'linesColors',
              inputType: 'colorPicker',
              iconSvgCode: h,
              title: b,
              factory: F.prototype._createColorsButton,
              dataName: 'line-tool-color',
            },
            {
              name: 'backgroundsColors',
              inputType: 'colorPicker',
              iconSvgCode: p,
              dataName: 'background-color',
              title: C,
              factory: F.prototype._createBackgroundsButton,
              showIf: this._shouldShowBackgroundProperty,
            },
            {
              name: 'linesWidths',
              inputType: 'combobox',
              factory: F.prototype._createWidthsButton,
            },
            {
              name: 'linestyle',
              title: T,
              inputType: 'combobox',
              factory: F.prototype._createLineStyleButton,
            },
          ];
        }
        _textPropertiesExceptionCases() {
          return [
            {
              name: 'color',
              title: y,
              inputType: 'colorPicker',
              iconSvgCode: u,
              dataName: 'text-color',
              undoText: m,
            },
            {
              name: 'backgroundColor',
              title: C,
              inputType: 'colorPicker',
              iconSvgCode: p,
              dataName: 'background-color',
              showIf: this._shouldShowBackgroundProperty,
              undoText: _,
            },
            {
              name: 'fontsize',
              title: S,
              inputType: 'combobox',
              factory: F.prototype._createFontSizeButton,
            },
          ];
        }
        _notePropertiesExceptionCases() {
          return [
            {
              name: 'markerColor',
              title: B,
              inputType: 'colorPicker',
              iconSvgCode: h,
              dataName: 'line-tool-color',
              undoText: g,
            },
            {
              name: 'textColor',
              title: y,
              inputType: 'colorPicker',
              iconSvgCode: u,
              dataName: 'text-color',
              undoText: m,
            },
            {
              name: 'fontSize',
              title: S,
              inputType: 'combobox',
              factory: F.prototype._createFontSizeButton,
            },
          ];
        }
        _createToolExceptionCases() {
          return {
            LineToolBrush: F.prototype._brushPropertiesExceptionCase(),
            LineToolBezierQuadro: F.prototype._bezierPropertiesExceptionCases(),
            LineToolBezierCubic: F.prototype._bezierPropertiesExceptionCases(),
            LineToolText: F.prototype._textPropertiesExceptionCases(),
            LineToolTextAbsolute: F.prototype._textPropertiesExceptionCases(),
            LineToolBalloon: F.prototype._textPropertiesExceptionCases(),
            LineToolCallout: F.prototype._textPropertiesExceptionCases(),
            LineToolPriceLabel: F.prototype._textPropertiesExceptionCases(),
            LineToolDateRange: F.prototype._rangeExceptionCases(),
            LineToolPriceRange: F.prototype._rangeExceptionCases(),
            LineToolDateAndPriceRange: F.prototype._rangeExceptionCases(),
            LineToolNote: F.prototype._notePropertiesExceptionCases(),
            LineToolNoteAbsolute: F.prototype._notePropertiesExceptionCases(),
            LineToolRiskRewardLong: F.prototype._riskPropertiesExceptionCases(),
            LineToolRiskRewardShort:
              F.prototype._riskPropertiesExceptionCases(),
            LineToolPath: F.prototype._pathExceptionCases(),
            LineToolRegressionTrend:
              F.prototype._regressionToolExceptionCases(),
            LineToolBarsPattern: [
              {
                name: 'color',
                title: b,
                inputType: 'colorPicker',
                iconSvgCode: p,
                dataName: 'background-color',
                undoText: g,
              },
            ],
            LineToolProjection: [
              {
                name: 'color1',
                title: k,
                inputType: 'colorPicker',
                iconSvgCode: p,
                dataName: 'background-color',
                undoText: _,
              },
              {
                name: 'color2',
                title: I,
                inputType: 'colorPicker',
                iconSvgCode: p,
                dataName: 'background-color',
                undoText: _,
              },
              {
                name: 'linesWidths',
                inputType: 'combobox',
                factory: F.prototype._createWidthsButton,
              },
            ],
            LineToolSignpost: [
              {
                name: 'linesColors',
                inputType: 'colorPicker',
                iconSvgCode: p,
                dataName: 'background-color',
                title: b,
                factory: F.prototype._createBackgroundsButton,
                showIf: function (t, e) {
                  return e && e.showImage.value();
                },
              },
              {
                name: 'fontSize',
                title: S,
                inputType: 'combobox',
                factory: F.prototype._createFontSizeButton,
              },
            ],
          };
        }
      }
      t.exports = F;
    },
    3925: (t, e, o) => {
      'use strict';
      o.d(e, {
        CollectibleColorPropertyUndoWrapper: () => a,
        CollectibleColorPropertyDirectWrapper: () => l,
      });
      var i = o(16282),
        r = o(674),
        n = o.n(r);
      class s extends n() {
        constructor(t) {
          super(),
            (this._listenersMappers = []),
            (this._isProcess = !1),
            (this._baseProperty = t);
        }
        destroy() {
          this._baseProperty.destroy();
        }
        value() {
          const t = this._baseProperty.value();
          return 'mixed' === t ? '' : t;
        }
        visible() {
          return this._baseProperty.visible();
        }
        setValue(t) {
          (this._isProcess = !0),
            this._baseProperty.setValue('' === t ? 'mixed' : t, void 0, {
              applyValue: this._applyValue.bind(this),
            }),
            (this._isProcess = !1),
            this._listenersMappers.forEach((t) => {
              t.method.call(t.obj, this);
            });
        }
        subscribe(t, e) {
          const o = (o) => {
              this._isProcess || e.call(t, this);
            },
            i = { obj: t, method: e, callback: o };
          this._listenersMappers.push(i), this._baseProperty.subscribe(t, o);
        }
        unsubscribe(t, e) {
          var o;
          const r = (0, i.ensureDefined)(
            null ===
              (o = this._listenersMappers.find(
                (o) => o.obj === t && o.method === e
              )) || void 0 === o
              ? void 0
              : o.callback
          );
          this._baseProperty.unsubscribe(t, r);
        }
        unsubscribeAll(t) {
          this._baseProperty.unsubscribeAll(t);
        }
      }
      class a extends s {
        constructor(t, e, o) {
          super(t), (this._propertyApplier = e), (this._undoText = o);
        }
        _applyValue(t, e) {
          this._propertyApplier.setProperty(t, e, this._undoText);
        }
      }
      class l extends s {
        _applyValue(t, e) {
          t.setValue(e);
        }
      }
    },
    80538: (t, e, o) => {
      'use strict';
      o.d(e, { PropertyApplierWithoutSavingChart: () => i });
      class i {
        constructor(t, e) {
          (this._undoModelSupplier = t), (this._featureToggle = e);
        }
        setProperty(t, e, o) {
          this._undoModelSupplier().setProperty(
            t,
            e,
            o,
            this._featureToggle.value()
          );
        }
        beginUndoMacro(t) {
          return this._undoModelSupplier().beginUndoMacro(
            t,
            this._shouldWeKeepChartValidated()
          );
        }
        endUndoMacro() {
          this._undoModelSupplier().endUndoMacro();
        }
        setWatchedValue(t, e, o) {
          this._undoModelSupplier().undoHistory().setWatchedValue(t, e, o, !0);
        }
        _shouldWeKeepChartValidated() {
          const t = this._undoModelSupplier()
            .model()
            .isAutoSaveEnabled()
            .value();
          return this._featureToggle.value() && t;
        }
      }
    },
    91800: (t, e, o) => {
      'use strict';
      o.d(e, { ColorPickerButton: () => m });
      var i = o(67294),
        r = o(94184),
        n = o.n(r),
        s = o(16282),
        a = o(49775),
        l = o(14563),
        d = o(50968),
        c = o(6347),
        h = o(43001),
        p = o(35671),
        u = o(67842),
        g = o(32188),
        _ = o(79224);
      function m(t) {
        const {
            property: e,
            icon: o,
            propertyApplier: r,
            title: m,
            undoText: v,
            className: b,
          } = t,
          w = (0, g.useProperty)(e),
          y = (0, i.useRef)(null),
          f = w ? (0, l.parseRgba)(w)[3] : void 0,
          C = '' === w,
          x = String(W()).toLowerCase() === p.white,
          [T, S, P] = (0, c.useCustomColors)();
        return i.createElement(
          u.ToolWidgetMenu,
          {
            className: b,
            content: i.createElement(
              'div',
              { className: _.wrap },
              i.createElement(a.Icon, { className: _.icon, icon: o }),
              i.createElement(
                'div',
                { className: _.colorBg },
                i.createElement('div', {
                  className: n()(_.color, C && _.multicolor, x && _.white),
                  style: C ? void 0 : { backgroundColor: w },
                })
              )
            ),
            arrow: !1,
            title: m,
            ref: y,
            'data-name': t['data-name'],
            menuDataName: t['data-name'] + '-menu',
          },
          i.createElement(h.ColorPicker, {
            color: W(),
            opacity: f,
            onColorChange: function (t, e) {
              const o = w
                ? (0, d.alphaToTransparency)((0, l.parseRgba)(w)[3])
                : 0;
              E((0, d.generateColor)(String(t), o, true)),
                e || (0, s.ensureNotNull)(y.current).close();
            },
            onOpacityChange: function (t) {
              E((0, d.generateColor)(w, (0, d.alphaToTransparency)(t), !0));
            },
            selectOpacity: void 0 !== f,
            selectCustom: !0,
            customColors: T,
            onAddColor: function (t) {
              S(t), (0, s.ensureNotNull)(y.current).close();
            },
            onRemoveCustomColor: P,
          })
        );
        function W() {
          return w ? (0, l.rgbToHexString)((0, l.parseRgb)(w)) : null;
        }
        function E(t) {
          r.setProperty(e, t, v);
        }
      }
    },
    31071: (t, e, o) => {
      'use strict';
      o.d(e, { LineWidthButton: () => w });
      var i = o(67294),
        r = o(94184),
        n = o(16282),
        s = o(49775),
        a = o(67842),
        l = o(32188),
        d = o(95860),
        c = o(4598),
        h = o(85260),
        p = o(71209),
        u = o(22404),
        g = o(94458),
        _ = o(62577),
        m = o(54226);
      const v = (0, c.mergeThemes)(d.DEFAULT_POPUP_MENU_ITEM_THEME, m),
        b = [
          { value: 1, icon: h },
          { value: 2, icon: p },
          { value: 3, icon: u },
          { value: 4, icon: g },
        ];
      function w(t) {
        const {
            multipleProperty: e,
            title: o,
            undoText: c,
            propertyApplier: h,
            className: p,
            isSmallScreen: u,
          } = t,
          g = (0, l.useProperty)((0, n.ensureDefined)(e)),
          w = 'mixed' === g || !g,
          y = (function (t) {
            const e = b.find((e) => e.value === t);
            if (!e) return _;
            return e.icon;
          })(g);
        return i.createElement(
          a.ToolWidgetMenu,
          {
            className: p,
            arrow: !1,
            title: o,
            'data-name': t['data-name'],
            menuDataName: t['data-name'] + '-menu',
            content: i.createElement(
              'div',
              null,
              w
                ? i.createElement(
                    'div',
                    { className: m.multiWidth },
                    i.createElement(s.Icon, { icon: _ })
                  )
                : i.createElement(
                    'div',
                    { className: m.buttonWrap },
                    !u && i.createElement(s.Icon, { icon: y }),
                    i.createElement(
                      'div',
                      { className: r(!u && m.buttonLabel) },
                      g + 'px'
                    )
                  )
            ),
          },
          b.map(({ value: t, icon: e }) =>
            i.createElement(d.PopupMenuItem, {
              key: t,
              theme: v,
              label: t + 'px',
              icon: e,
              isActive: t === g,
              onClick: f,
              onClickArg: t,
            })
          )
        );
        function f(t) {
          t &&
            e &&
            (h.beginUndoMacro(c),
            e.setValue(t, void 0, {
              applyValue: (t, e) => {
                h.setProperty(t, e, c);
              },
            }),
            h.endUndoMacro());
        }
      }
    },
    32188: (t, e, o) => {
      'use strict';
      o.d(e, { useProperty: () => r });
      var i = o(67294);
      const r = (t) => {
        const [e, o] = (0, i.useState)(t.value());
        return (
          (0, i.useEffect)(() => {
            const e = (t) => {
              o(t.value());
            };
            e(t);
            const i = {};
            return t.subscribe(i, e), () => t.unsubscribe(i, e);
          }, [t]),
          e
        );
      };
    },
    14236: (t, e, o) => {
      'use strict';
      o.d(e, { MatchMediaMap: () => s });
      var i = o(67294),
        r = o(19303),
        n = o.n(r);
      class s extends i.Component {
        constructor(t) {
          super(t),
            (this._handleMediaChange = () => {
              const t = l(this.state.queries, (t, e) => e.matches);
              let e = !1;
              for (const o in t)
                if (t.hasOwnProperty(o) && this.state.matches[o] !== t[o]) {
                  e = !0;
                  break;
                }
              e && this.setState({ matches: t });
            });
          const { rules: e } = this.props;
          this.state = a(e);
        }
        shouldComponentUpdate(t, e) {
          return (
            !n()(t, this.props) ||
            !n()(e.rules, this.state.rules) ||
            !n()(e.matches, this.state.matches)
          );
        }
        componentDidMount() {
          this._migrate(null, this.state.queries);
        }
        componentDidUpdate(t, e) {
          n()(t.rules, this.props.rules) ||
            this._migrate(e.queries, this.state.queries);
        }
        componentWillUnmount() {
          this._migrate(this.state.queries, null);
        }
        render() {
          return this.props.children(this.state.matches);
        }
        static getDerivedStateFromProps(t, e) {
          if (n()(t.rules, e.rules)) return null;
          const { rules: o } = t;
          return a(o);
        }
        _migrate(t, e) {
          null !== t &&
            l(t, (t, e) => {
              e.removeListener(this._handleMediaChange);
            }),
            null !== e &&
              l(e, (t, e) => {
                e.addListener(this._handleMediaChange);
              });
        }
      }
      function a(t) {
        const e = l(t, (t, e) => window.matchMedia(e));
        return {
          queries: e,
          matches: l(e, (t, e) => e.matches),
          rules: { ...t },
        };
      }
      function l(t, e) {
        const o = {};
        for (const i in t) t.hasOwnProperty(i) && (o[i] = e(i, t[i]));
        return o;
      }
    },
    22775: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>';
    },
    88816: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M4 13h5v1H4v-1zM12 13h5v1h-5v-1zM20 13h5v1h-5v-1z"/></svg>';
    },
    74295: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><circle cx="9" cy="14" r="1"/><circle cx="4" cy="14" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="19" cy="14" r="1"/><circle cx="24" cy="14" r="1"/></svg>';
    },
    4034: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4 13.5h20"/></svg>';
    },
    6577: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
    },
    17159: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none"><path stroke="currentColor" d="M13.5 6.5l-3-3-7 7 7.59 7.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82L13.5 6.5zm0 0v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6"/><path fill="currentColor" d="M0 16.5C0 15 2.5 12 2.5 12S5 15 5 16.5 4 19 2.5 19 0 18 0 16.5z"/><circle fill="currentColor" cx="9.5" cy="9.5" r="1.5"/></svg>';
    },
    59713: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" width="8" height="12" fill="currentColor"><rect width="2" height="2" rx="1"/><rect width="2" height="2" rx="1" y="5"/><rect width="2" height="2" rx="1" y="10"/><rect width="2" height="2" rx="1" x="6"/><rect width="2" height="2" rx="1" x="6" y="5"/><rect width="2" height="2" rx="1" x="6" y="10"/></svg>';
    },
    85260: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 1" width="18" height="1"><rect width="18" height="1" fill="currentColor" rx=".5"/></svg>';
    },
    71209: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 2" width="18" height="2"><rect width="18" height="2" fill="currentColor" rx="1"/></svg>';
    },
    22404: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 3" width="18" height="3"><rect width="18" height="3" fill="currentColor" rx="1.5"/></svg>';
    },
    94458: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 4" width="18" height="4"><rect width="18" height="4" fill="currentColor" rx="2"/></svg>';
    },
    62577: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><rect width="18" height="2" rx="1" x="5" y="14"/><rect width="18" height="1" rx=".5" x="5" y="20"/><rect width="18" height="3" rx="1.5" x="5" y="7"/></svg>';
    },
    37821: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" d="M1.5 11.5l-.7.7a1 1 0 0 0-.3.71v3.59h3.59a1 1 0 0 0 .7-.3l.71-.7m-4-4l9-9m-9 9l2 2m2 2l9-9m-9 9l-2-2m11-7l1.3-1.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.3 1.3m4 4l-4-4m-7 11l9-9"/></svg>';
    },
    95871: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15" width="13" height="15" fill="none"><path stroke="currentColor" d="M4 14.5h2.5m2.5 0H6.5m0 0V.5m0 0h-5a1 1 0 0 0-1 1V4m6-3.5h5a1 1 0 0 1 1 1V4"/></svg>';
    },
    84136: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentcolor" fillRule="evenodd" clip-rule="evenodd" d="M13 5.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V7.05l.4.09c.9.18 1.73.53 2.46 1.02l.34.23.29-.3.81-.8c.2-.2.52-.2.71 0l.7.7.36-.35-.35.35c.2.2.2.51 0 .7l-.82.82-.29.29.23.34c.49.73.84 1.57 1.02 2.46l.08.4H22.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5H20.95l-.09.4c-.18.9-.53 1.73-1.02 2.46l-.23.34.3.29.8.81c.2.2.2.52 0 .71l-.7.7a.5.5 0 0 1-.7 0l-.82-.8-.29-.3-.34.23c-.73.49-1.57.84-2.46 1.02l-.4.08V22.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V20.95l-.4-.09a6.96 6.96 0 0 1-2.46-1.02l-.34-.23-.29.3-.81.8.35.36-.35-.35a.5.5 0 0 1-.71 0l-.7-.71a.5.5 0 0 1 0-.7l-.36-.36.35.35.82-.81.29-.29-.23-.34a6.96 6.96 0 0 1-1.02-2.46l-.08-.4H5.5a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5H7.05l.09-.4c.18-.9.53-1.73 1.02-2.46l.23-.34-.3-.29-.8-.81a.5.5 0 0 1 0-.71l.7-.7c.2-.2.51-.2.7 0l.82.8.29.3.34-.23a6.96 6.96 0 0 1 2.46-1.02l.4-.08V5.5zm.5-1.5c-.83 0-1.5.67-1.5 1.5v.75c-.73.2-1.43.48-2.06.86l-.54-.53a1.5 1.5 0 0 0-2.12 0l-.7.7a1.5 1.5 0 0 0 0 2.12l.53.54A7.95 7.95 0 0 0 6.25 12H5.5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h.75c.2.73.48 1.43.86 2.06l-.53.54a1.5 1.5 0 0 0 0 2.12l.7.7a1.5 1.5 0 0 0 2.12 0l.54-.53c.63.38 1.33.67 2.06.86v.75c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-.75a7.95 7.95 0 0 0 2.06-.86l.54.53a1.5 1.5 0 0 0 2.12 0l.7-.7a1.5 1.5 0 0 0 0-2.12l-.53-.54c.38-.63.67-1.33.86-2.06h.75c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-.75a7.95 7.95 0 0 0-.86-2.06l.53-.54a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.12 0l-.54.53A7.95 7.95 0 0 0 16 6.25V5.5c0-.83-.67-1.5-1.5-1.5h-1zM12 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>';
    },
  },
]);
