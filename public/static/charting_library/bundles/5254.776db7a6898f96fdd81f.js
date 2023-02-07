(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5254],
  {
    5671: (o) => {
      o.exports = {
        button: 'button-5-QHyx-s',
        hover: 'hover-5-QHyx-s',
        bg: 'bg-5-QHyx-s',
        icon: 'icon-5-QHyx-s',
        isActive: 'isActive-5-QHyx-s',
        isTransparent: 'isTransparent-5-QHyx-s',
        isGrayed: 'isGrayed-5-QHyx-s',
        isHidden: 'isHidden-5-QHyx-s',
      };
    },
    32455: (o) => {
      o.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
      };
    },
    69560: (o) => {
      o.exports = {
        favorite: 'favorite-I_fAY9V2',
        disabled: 'disabled-I_fAY9V2',
        active: 'active-I_fAY9V2',
        checked: 'checked-I_fAY9V2',
      };
    },
    74818: (o, e, l) => {
      'use strict';
      function i(o) {
        return a(o, s);
      }
      function n(o) {
        return a(o, t);
      }
      function a(o, e) {
        const l = Object.entries(o).filter(e),
          i = {};
        for (const [o, e] of l) i[o] = e;
        return i;
      }
      function s(o) {
        const [e, l] = o;
        return 0 === e.indexOf('data-') && 'string' == typeof l;
      }
      function t(o) {
        return 0 === o[0].indexOf('aria-');
      }
      l.d(e, {
        filterDataProps: () => i,
        filterAriaProps: () => n,
        filterProps: () => a,
        isDataAttribute: () => s,
        isAriaAttribute: () => t,
      });
    },
    49585: (o, e, l) => {
      'use strict';
      l.d(e, { ToolButton: () => c });
      var i = l(67294),
        n = l(94184),
        a = l(49775),
        s = l(74818),
        t = l(5671);
      function c(o) {
        const {
          id: e,
          activeClass: l,
          children: c,
          className: r,
          icon: T,
          isActive: d,
          isGrayed: L,
          isHidden: h,
          isTransparent: m,
          theme: z = t,
          onClick: v,
          title: g,
          buttonHotKey: w,
          tooltipPosition: N = 'vertical',
        } = o;
        return i.createElement(
          'div',
          {
            id: e,
            className: n(z.button, r, d && l, {
              'apply-common-tooltip': Boolean(g),
              'common-tooltip-vertical': Boolean(g) && 'vertical' === N,
              [z.isActive]: d,
              [z.isGrayed]: L,
              [z.isHidden]: h,
              [z.isTransparent]: m,
            }),
            onClick: v,
            title: g,
            'data-role': 'button',
            'data-tooltip-hotkey': w,
            ...(0, s.filterDataProps)(o),
          },
          i.createElement(
            'div',
            { className: z.bg },
            T &&
              ('string' == typeof T
                ? i.createElement(a.Icon, { className: z.icon, icon: T })
                : i.createElement('span', { className: z.icon }, T)),
            c
          )
        );
      }
    },
    84021: (o, e, l) => {
      'use strict';
      l.d(e, { drawingToolsIcons: () => i });
      const i = {
        SyncDrawing: l(66527),
        arrow: l(57018),
        cursor: l(70626),
        dot: l(99131),
        drawginmode: l(25922),
        drawginmodeActive: l(87369),
        eraser: l(56202),
        group: l(24701),
        hideAllDrawings: l(49017),
        hideAllDrawingsActive: l(62781),
        hideAllIndicators: l(46826),
        hideAllIndicatorsActive: l(11624),
        hideAllDrawingTools: l(77314),
        hideAllDrawingToolsActive: l(72254),
        hideAllPositionsTools: l(35802),
        hideAllPositionsToolsActive: l(57837),
        lockAllDrawings: l(62618),
        lockAllDrawingsActive: l(96750),
        magnet: l(3911),
        strongMagnet: l(93029),
        measure: l(34244),
        removeAllDrawingTools: l(23353),
        showObjectTree: l(29261),
        zoom: l(29166),
        'zoom-out': l(48588),
      };
    },
    21259: (o, e, l) => {
      'use strict';
      l.d(e, { lineToolsInfo: () => v });
      var i = l(79881),
        n = l(67869),
        a = l(19598),
        s = (l(95068), l(94317)),
        t = l(84021),
        c = l(58761),
        r = l(42998);
      const T = (0, r.humanReadableModifiers)(r.Modifiers.Shift, !1),
        d = (0, r.humanReadableModifiers)(r.Modifiers.Alt, !1),
        L = (0, r.humanReadableModifiers)(r.Modifiers.Mod, !1),
        h = {
          keys: [T],
          text: (0, i.t)(
            '{hotKey_0} — drawing a straight line at angles of 45'
          ),
        },
        m = { keys: [T], text: (0, i.t)('{hotKey_0} — circle') },
        z = { keys: [T], text: (0, i.t)('{hotKey_0} — square') },
        v = {
          LineTool5PointsPattern: {
            icon: s.lineToolsIcons.LineTool5PointsPattern,
            localizedName: c.lineToolsLocalizedNames.LineTool5PointsPattern,
          },
          LineToolABCD: {
            icon: s.lineToolsIcons.LineToolABCD,
            localizedName: c.lineToolsLocalizedNames.LineToolABCD,
          },
          LineToolArc: {
            icon: s.lineToolsIcons.LineToolArc,
            localizedName: c.lineToolsLocalizedNames.LineToolArc,
          },
          LineToolArrow: {
            icon: s.lineToolsIcons.LineToolArrow,
            localizedName: c.lineToolsLocalizedNames.LineToolArrow,
          },
          LineToolArrowMarkDown: {
            icon: s.lineToolsIcons.LineToolArrowMarkDown,
            localizedName: c.lineToolsLocalizedNames.LineToolArrowMarkDown,
          },
          LineToolArrowMarkLeft: {
            icon: s.lineToolsIcons.LineToolArrowMarkLeft,
            localizedName: c.lineToolsLocalizedNames.LineToolArrowMarkLeft,
          },
          LineToolArrowMarkRight: {
            icon: s.lineToolsIcons.LineToolArrowMarkRight,
            localizedName: c.lineToolsLocalizedNames.LineToolArrowMarkRight,
          },
          LineToolArrowMarkUp: {
            icon: s.lineToolsIcons.LineToolArrowMarkUp,
            localizedName: c.lineToolsLocalizedNames.LineToolArrowMarkUp,
          },
          LineToolBalloon: {
            icon: s.lineToolsIcons.LineToolBalloon,
            localizedName: c.lineToolsLocalizedNames.LineToolBalloon,
          },
          LineToolBarsPattern: {
            icon: s.lineToolsIcons.LineToolBarsPattern,
            localizedName: c.lineToolsLocalizedNames.LineToolBarsPattern,
          },
          LineToolBezierCubic: {
            icon: s.lineToolsIcons.LineToolBezierCubic,
            localizedName: c.lineToolsLocalizedNames.LineToolBezierCubic,
          },
          LineToolBezierQuadro: {
            icon: s.lineToolsIcons.LineToolBezierQuadro,
            localizedName: c.lineToolsLocalizedNames.LineToolBezierQuadro,
          },
          LineToolBrush: {
            icon: s.lineToolsIcons.LineToolBrush,
            localizedName: c.lineToolsLocalizedNames.LineToolBrush,
          },
          LineToolCallout: {
            icon: s.lineToolsIcons.LineToolCallout,
            localizedName: c.lineToolsLocalizedNames.LineToolCallout,
          },
          LineToolCircleLines: {
            icon: s.lineToolsIcons.LineToolCircleLines,
            localizedName: c.lineToolsLocalizedNames.LineToolCircleLines,
          },
          LineToolCypherPattern: {
            icon: s.lineToolsIcons.LineToolCypherPattern,
            localizedName: c.lineToolsLocalizedNames.LineToolCypherPattern,
          },
          LineToolDateAndPriceRange: {
            icon: s.lineToolsIcons.LineToolDateAndPriceRange,
            localizedName: c.lineToolsLocalizedNames.LineToolDateAndPriceRange,
          },
          LineToolDateRange: {
            icon: s.lineToolsIcons.LineToolDateRange,
            localizedName: c.lineToolsLocalizedNames.LineToolDateRange,
          },
          LineToolDisjointAngle: {
            icon: s.lineToolsIcons.LineToolDisjointAngle,
            localizedName: c.lineToolsLocalizedNames.LineToolDisjointAngle,
            hotKey: (0, a.hotKeySerialize)(h),
          },
          LineToolElliottCorrection: {
            icon: s.lineToolsIcons.LineToolElliottCorrection,
            localizedName: c.lineToolsLocalizedNames.LineToolElliottCorrection,
          },
          LineToolElliottDoubleCombo: {
            icon: s.lineToolsIcons.LineToolElliottDoubleCombo,
            localizedName: c.lineToolsLocalizedNames.LineToolElliottDoubleCombo,
          },
          LineToolElliottImpulse: {
            icon: s.lineToolsIcons.LineToolElliottImpulse,
            localizedName: c.lineToolsLocalizedNames.LineToolElliottImpulse,
          },
          LineToolElliottTriangle: {
            icon: s.lineToolsIcons.LineToolElliottTriangle,
            localizedName: c.lineToolsLocalizedNames.LineToolElliottTriangle,
          },
          LineToolElliottTripleCombo: {
            icon: s.lineToolsIcons.LineToolElliottTripleCombo,
            localizedName: c.lineToolsLocalizedNames.LineToolElliottTripleCombo,
          },
          LineToolEllipse: {
            icon: s.lineToolsIcons.LineToolEllipse,
            localizedName: c.lineToolsLocalizedNames.LineToolEllipse,
            hotKey: (0, a.hotKeySerialize)(m),
          },
          LineToolExtended: {
            icon: s.lineToolsIcons.LineToolExtended,
            localizedName: c.lineToolsLocalizedNames.LineToolExtended,
          },
          LineToolFibChannel: {
            icon: s.lineToolsIcons.LineToolFibChannel,
            localizedName: c.lineToolsLocalizedNames.LineToolFibChannel,
          },
          LineToolFibCircles: {
            icon: s.lineToolsIcons.LineToolFibCircles,
            localizedName: c.lineToolsLocalizedNames.LineToolFibCircles,
            hotKey: (0, a.hotKeySerialize)(m),
          },
          LineToolFibRetracement: {
            icon: s.lineToolsIcons.LineToolFibRetracement,
            localizedName: c.lineToolsLocalizedNames.LineToolFibRetracement,
          },
          LineToolFibSpeedResistanceArcs: {
            icon: s.lineToolsIcons.LineToolFibSpeedResistanceArcs,
            localizedName:
              c.lineToolsLocalizedNames.LineToolFibSpeedResistanceArcs,
          },
          LineToolFibSpeedResistanceFan: {
            icon: s.lineToolsIcons.LineToolFibSpeedResistanceFan,
            localizedName:
              c.lineToolsLocalizedNames.LineToolFibSpeedResistanceFan,
            hotKey: (0, a.hotKeySerialize)(z),
          },
          LineToolFibSpiral: {
            icon: s.lineToolsIcons.LineToolFibSpiral,
            localizedName: c.lineToolsLocalizedNames.LineToolFibSpiral,
          },
          LineToolFibTimeZone: {
            icon: s.lineToolsIcons.LineToolFibTimeZone,
            localizedName: c.lineToolsLocalizedNames.LineToolFibTimeZone,
          },
          LineToolFibWedge: {
            icon: s.lineToolsIcons.LineToolFibWedge,
            localizedName: c.lineToolsLocalizedNames.LineToolFibWedge,
          },
          LineToolFlagMark: {
            icon: s.lineToolsIcons.LineToolFlagMark,
            localizedName: c.lineToolsLocalizedNames.LineToolFlagMark,
          },
          LineToolImage: {
            icon: s.lineToolsIcons.LineToolImage,
            localizedName: c.lineToolsLocalizedNames.LineToolImage,
          },
          LineToolFlatBottom: {
            icon: s.lineToolsIcons.LineToolFlatBottom,
            localizedName: c.lineToolsLocalizedNames.LineToolFlatBottom,
            hotKey: (0, a.hotKeySerialize)(h),
          },
          LineToolAnchoredVWAP: {
            icon: s.lineToolsIcons.LineToolAnchoredVWAP,
            localizedName: c.lineToolsLocalizedNames.LineToolAnchoredVWAP,
          },
          LineToolGannComplex: {
            icon: s.lineToolsIcons.LineToolGannComplex,
            localizedName: c.lineToolsLocalizedNames.LineToolGannComplex,
          },
          LineToolGannFixed: {
            icon: s.lineToolsIcons.LineToolGannFixed,
            localizedName: c.lineToolsLocalizedNames.LineToolGannFixed,
          },
          LineToolGannFan: {
            icon: s.lineToolsIcons.LineToolGannFan,
            localizedName: c.lineToolsLocalizedNames.LineToolGannFan,
          },
          LineToolGannSquare: {
            icon: s.lineToolsIcons.LineToolGannSquare,
            localizedName: c.lineToolsLocalizedNames.LineToolGannSquare,
            hotKey: (0, a.hotKeySerialize)({
              keys: [T],
              text: (0, i.t)('{hotKey_0} — fixed increments'),
            }),
          },
          LineToolHeadAndShoulders: {
            icon: s.lineToolsIcons.LineToolHeadAndShoulders,
            localizedName: c.lineToolsLocalizedNames.LineToolHeadAndShoulders,
          },
          LineToolHorzLine: {
            icon: s.lineToolsIcons.LineToolHorzLine,
            localizedName: c.lineToolsLocalizedNames.LineToolHorzLine,
            hotKey: (0, a.hotKeySerialize)({
              keys: [d, 'H'],
              text: '{0} + {1}',
            }),
          },
          LineToolHorzRay: {
            icon: s.lineToolsIcons.LineToolHorzRay,
            localizedName: c.lineToolsLocalizedNames.LineToolHorzRay,
          },
          LineToolIcon: {
            icon: s.lineToolsIcons.LineToolIcon,
            localizedName: c.lineToolsLocalizedNames.LineToolIcon,
          },
          LineToolInsidePitchfork: {
            icon: s.lineToolsIcons.LineToolInsidePitchfork,
            localizedName: c.lineToolsLocalizedNames.LineToolInsidePitchfork,
          },
          LineToolNote: {
            icon: s.lineToolsIcons.LineToolNote,
            localizedName: c.lineToolsLocalizedNames.LineToolNote,
          },
          LineToolNoteAbsolute: {
            icon: s.lineToolsIcons.LineToolNoteAbsolute,
            localizedName: c.lineToolsLocalizedNames.LineToolNoteAbsolute,
          },
          LineToolSignpost: {
            icon: s.lineToolsIcons.LineToolSignpost,
            localizedName: c.lineToolsLocalizedNames.LineToolSignpost,
          },
          LineToolParallelChannel: {
            icon: s.lineToolsIcons.LineToolParallelChannel,
            localizedName: c.lineToolsLocalizedNames.LineToolParallelChannel,
            hotKey: (0, a.hotKeySerialize)(h),
          },
          LineToolPitchfan: {
            icon: s.lineToolsIcons.LineToolPitchfan,
            localizedName: c.lineToolsLocalizedNames.LineToolPitchfan,
          },
          LineToolPitchfork: {
            icon: s.lineToolsIcons.LineToolPitchfork,
            localizedName: c.lineToolsLocalizedNames.LineToolPitchfork,
          },
          LineToolPolyline: {
            icon: s.lineToolsIcons.LineToolPolyline,
            localizedName: c.lineToolsLocalizedNames.LineToolPolyline,
          },
          LineToolPath: {
            icon: s.lineToolsIcons.LineToolPath,
            localizedName: c.lineToolsLocalizedNames.LineToolPath,
          },
          LineToolPrediction: {
            icon: s.lineToolsIcons.LineToolPrediction,
            localizedName: c.lineToolsLocalizedNames.LineToolPrediction,
          },
          LineToolPriceLabel: {
            icon: s.lineToolsIcons.LineToolPriceLabel,
            localizedName: c.lineToolsLocalizedNames.LineToolPriceLabel,
          },
          LineToolPriceNote: {
            icon: s.lineToolsIcons.LineToolPriceNote,
            localizedName: c.lineToolsLocalizedNames.LineToolPriceNote,
            hotKey: (0, a.hotKeySerialize)(h),
          },
          LineToolArrowMarker: {
            icon: s.lineToolsIcons.LineToolArrowMarker,
            localizedName: c.lineToolsLocalizedNames.LineToolArrowMarker,
          },
          LineToolPriceRange: {
            icon: s.lineToolsIcons.LineToolPriceRange,
            localizedName: c.lineToolsLocalizedNames.LineToolPriceRange,
          },
          LineToolProjection: {
            icon: s.lineToolsIcons.LineToolProjection,
            localizedName: c.lineToolsLocalizedNames.LineToolProjection,
          },
          LineToolRay: {
            icon: s.lineToolsIcons.LineToolRay,
            localizedName: c.lineToolsLocalizedNames.LineToolRay,
          },
          LineToolRectangle: {
            icon: s.lineToolsIcons.LineToolRectangle,
            localizedName: c.lineToolsLocalizedNames.LineToolRectangle,
            hotKey: (0, a.hotKeySerialize)({
              keys: [T],
              text: (0, i.t)('{hotKey_0} — square'),
            }),
          },
          LineToolCircle: {
            icon: s.lineToolsIcons.LineToolCircle,
            localizedName: c.lineToolsLocalizedNames.LineToolCircle,
          },
          LineToolRegressionTrend: {
            icon: s.lineToolsIcons.LineToolRegressionTrend,
            localizedName: c.lineToolsLocalizedNames.LineToolRegressionTrend,
          },
          LineToolRiskRewardLong: {
            icon: s.lineToolsIcons.LineToolRiskRewardLong,
            localizedName: c.lineToolsLocalizedNames.LineToolRiskRewardLong,
          },
          LineToolRiskRewardShort: {
            icon: s.lineToolsIcons.LineToolRiskRewardShort,
            localizedName: c.lineToolsLocalizedNames.LineToolRiskRewardShort,
          },
          LineToolFixedRangeVolumeProfile: {
            icon: s.lineToolsIcons.LineToolFixedRangeVolumeProfile,
            localizedName:
              c.lineToolsLocalizedNames.LineToolFixedRangeVolumeProfile,
          },
          LineToolRotatedRectangle: {
            icon: s.lineToolsIcons.LineToolRotatedRectangle,
            localizedName: c.lineToolsLocalizedNames.LineToolRotatedRectangle,
            hotKey: (0, a.hotKeySerialize)(h),
          },
          LineToolSchiffPitchfork: {
            icon: s.lineToolsIcons.LineToolSchiffPitchfork,
            localizedName: c.lineToolsLocalizedNames.LineToolSchiffPitchfork,
          },
          LineToolSchiffPitchfork2: {
            icon: s.lineToolsIcons.LineToolSchiffPitchfork2,
            localizedName: c.lineToolsLocalizedNames.LineToolSchiffPitchfork2,
          },
          LineToolSineLine: {
            icon: s.lineToolsIcons.LineToolSineLine,
            localizedName: c.lineToolsLocalizedNames.LineToolSineLine,
          },
          LineToolText: {
            icon: s.lineToolsIcons.LineToolText,
            localizedName: c.lineToolsLocalizedNames.LineToolText,
          },
          LineToolTextAbsolute: {
            icon: s.lineToolsIcons.LineToolTextAbsolute,
            localizedName: c.lineToolsLocalizedNames.LineToolTextAbsolute,
          },
          LineToolThreeDrivers: {
            icon: s.lineToolsIcons.LineToolThreeDrivers,
            localizedName: c.lineToolsLocalizedNames.LineToolThreeDrivers,
          },
          LineToolTimeCycles: {
            icon: s.lineToolsIcons.LineToolTimeCycles,
            localizedName: c.lineToolsLocalizedNames.LineToolTimeCycles,
          },
          LineToolTrendAngle: {
            icon: s.lineToolsIcons.LineToolTrendAngle,
            localizedName: c.lineToolsLocalizedNames.LineToolTrendAngle,
            hotKey: (0, a.hotKeySerialize)(h),
          },
          LineToolTrendBasedFibExtension: {
            icon: s.lineToolsIcons.LineToolTrendBasedFibExtension,
            localizedName:
              c.lineToolsLocalizedNames.LineToolTrendBasedFibExtension,
          },
          LineToolTrendBasedFibTime: {
            icon: s.lineToolsIcons.LineToolTrendBasedFibTime,
            localizedName: c.lineToolsLocalizedNames.LineToolTrendBasedFibTime,
          },
          LineToolTrendLine: {
            icon: s.lineToolsIcons.LineToolTrendLine,
            localizedName: c.lineToolsLocalizedNames.LineToolTrendLine,
            hotKey: (0, a.hotKeySerialize)(h),
          },
          LineToolInfoLine: {
            icon: s.lineToolsIcons.LineToolInfoLine,
            localizedName: c.lineToolsLocalizedNames.LineToolInfoLine,
          },
          LineToolTriangle: {
            icon: s.lineToolsIcons.LineToolTriangle,
            localizedName: c.lineToolsLocalizedNames.LineToolTriangle,
          },
          LineToolTrianglePattern: {
            icon: s.lineToolsIcons.LineToolTrianglePattern,
            localizedName: c.lineToolsLocalizedNames.LineToolTrianglePattern,
          },
          LineToolVertLine: {
            icon: s.lineToolsIcons.LineToolVertLine,
            localizedName: c.lineToolsLocalizedNames.LineToolVertLine,
            hotKey: (0, a.hotKeySerialize)({
              keys: [d, 'V'],
              text: '{0} + {1}',
            }),
          },
          LineToolCrossLine: {
            icon: s.lineToolsIcons.LineToolCrossLine,
            localizedName: c.lineToolsLocalizedNames.LineToolCrossLine,
          },
          LineToolHighlighter: {
            icon: s.lineToolsIcons.LineToolHighlighter,
            localizedName: c.lineToolsLocalizedNames.LineToolHighlighter,
          },
          SyncDrawing: {
            icon: t.drawingToolsIcons.SyncDrawing,
            iconActive: t.drawingToolsIcons.SyncDrawingActive,
            localizedName: (0, i.t)(
              'New drawings are replicated to all charts in the layout and shown when the same ticker is selected'
            ),
          },
          arrow: {
            icon: t.drawingToolsIcons.arrow,
            localizedName: (0, i.t)('Arrow'),
          },
          cursor: {
            icon: t.drawingToolsIcons.cursor,
            localizedName: (0, i.t)('Cross'),
          },
          dot: {
            icon: t.drawingToolsIcons.dot,
            localizedName: (0, i.t)('Dot'),
          },
          drawginmode: {
            icon: t.drawingToolsIcons.drawginmode,
            iconActive: t.drawingToolsIcons.drawginmodeActive,
            localizedName: (0, i.t)('Stay in Drawing Mode'),
          },
          eraser: {
            icon: t.drawingToolsIcons.eraser,
            localizedName: (0, i.t)('Eraser'),
          },
          group: {
            icon: t.drawingToolsIcons.group,
            localizedName: (0, i.t)('Show Hidden Tools'),
          },
          hideAllDrawings: {
            icon: t.drawingToolsIcons.hideAllDrawings,
            iconActive: t.drawingToolsIcons.hideAllDrawingsActive,
            localizedName: (0, i.t)('Hide All Drawing Tools'),
            hotKey: (0, a.hotKeySerialize)({
              keys: [L, d, 'H'],
              text: '{0} + {1} + {2}',
            }),
          },
          lockAllDrawings: {
            icon: t.drawingToolsIcons.lockAllDrawings,
            iconActive: t.drawingToolsIcons.lockAllDrawingsActive,
            localizedName: (0, i.t)('Lock All Drawing Tools'),
          },
          magnet: {
            icon: t.drawingToolsIcons.magnet,
            localizedName: (0, i.t)(
              'Magnet Mode snaps drawings placed near price bars to the closest OHLC value'
            ),
            hotKey: (0, a.hotKeySerialize)({ keys: [L], text: '{0}' }),
          },
          measure: {
            icon: t.drawingToolsIcons.measure,
            localizedName: (0, i.t)('Measure'),
            hotKey: (0, a.hotKeySerialize)({
              keys: [T],
              text: (0, i.t)('{hotKey_0} + Click on the chart'),
            }),
          },
          removeAllDrawingTools: {
            icon: t.drawingToolsIcons.removeAllDrawingTools,
            localizedName: (0, i.t)('Remove Drawings'),
          },
          showObjectsTree: {
            icon: t.drawingToolsIcons.showObjectTree,
            localizedName: (0, i.t)('Show Object Tree'),
          },
          zoom: {
            icon: t.drawingToolsIcons.zoom,
            localizedName: (0, i.t)('Zoom In'),
          },
          'zoom-out': {
            icon: t.drawingToolsIcons['zoom-out'],
            localizedName: (0, i.t)('Zoom Out'),
          },
        };
      (0, n.isFeatureEnabled)('remove-line-tool-ghost-feed') ||
        (v.LineToolGhostFeed = {
          icon: s.lineToolsIcons.LineToolGhostFeed,
          localizedName: c.lineToolsLocalizedNames.LineToolGhostFeed,
        });
    },
    2266: (o, e, l) => {
      'use strict';
      l.d(e, { LinetoolsFavoritesStore: () => n });
      var i,
        n,
        a = l(5729),
        s = l.n(a),
        t = l(64222);
      !(function (o) {
        function e() {
          o.favorites = [];
          (0, t.getJSON)('chart.favoriteDrawings', []).forEach((e) => {
            l(e.tool || e) && o.favorites.push(e.tool || e);
          }),
            o.favoritesSynced.fire();
        }
        function l(o) {
          return 'string' == typeof o && '' !== o;
        }
        (o.favorites = []),
          (o.favoritesSynced = new (s())()),
          (o.favoriteIndex = function (e) {
            return o.favorites.indexOf(e);
          }),
          (o.isValidLineToolName = l),
          (o.saveFavorites = function (e) {
            (0, t.setJSON)('chart.favoriteDrawings', o.favorites, e);
          }),
          e(),
          t.onSync.subscribe(null, e);
      })(i || (i = {})),
        (function (o) {
          function e(o) {
            return i.isValidLineToolName(o);
          }
          function l() {
            return i.favorites.length;
          }
          function n(o) {
            return -1 !== i.favoriteIndex(o);
          }
          (o.favoriteAdded = new (s())()),
            (o.favoriteRemoved = new (s())()),
            (o.favoriteMoved = new (s())()),
            (o.favoritesSynced = i.favoritesSynced),
            (o.favorites = function () {
              return i.favorites.slice();
            }),
            (o.isValidLineToolName = e),
            (o.favoritesCount = l),
            (o.favorite = function (o) {
              return o < 0 || o >= l() ? '' : i.favorites[o];
            }),
            (o.addFavorite = function (l, a) {
              return (
                !(n(l) || !e(l)) &&
                (i.favorites.push(l),
                i.saveFavorites(a),
                o.favoriteAdded.fire(l),
                !0)
              );
            }),
            (o.removeFavorite = function (e, l) {
              const n = i.favoriteIndex(e);
              return (
                -1 !== n &&
                (i.favorites.splice(n, 1),
                i.saveFavorites(l),
                o.favoriteRemoved.fire(e),
                !0)
              );
            }),
            (o.isFavorite = n),
            (o.moveFavorite = function (n, a, s) {
              if (a < 0 || a >= l() || !e(n)) return !1;
              const t = i.favoriteIndex(n);
              return (
                -1 !== t &&
                a !== t &&
                (i.favorites.splice(t, 1),
                i.favorites.splice(a, 0, n),
                i.saveFavorites(s),
                o.favoriteMoved.fire(n, t, a),
                !0)
              );
            });
        })(n || (n = {}));
    },
    59726: (o, e, l) => {
      'use strict';
      function i(o, e, l, i, n) {
        function a(n) {
          if (o > n.timeStamp) return;
          const a = n.target;
          void 0 !== l &&
            null !== e &&
            null !== a &&
            a.ownerDocument === i &&
            (e.contains(a) || l(n));
        }
        return (
          n.click && i.addEventListener('click', a, !1),
          n.mouseDown && i.addEventListener('mousedown', a, !1),
          n.touchEnd && i.addEventListener('touchend', a, !1),
          n.touchStart && i.addEventListener('touchstart', a, !1),
          () => {
            i.removeEventListener('click', a, !1),
              i.removeEventListener('mousedown', a, !1),
              i.removeEventListener('touchend', a, !1),
              i.removeEventListener('touchstart', a, !1);
          }
        );
      }
      l.d(e, { addOutsideEventListener: () => i });
    },
    72923: (o, e, l) => {
      'use strict';
      l.d(e, { DialogBreakpoints: () => n });
      var i = l(32455);
      const n = {
        SmallHeight: i['small-height-breakpoint'],
        TabletSmall: i['tablet-small-breakpoint'],
        TabletNormal: i['tablet-normal-breakpoint'],
      };
    },
    65043: (o, e, l) => {
      'use strict';
      l.d(e, { FavoriteButton: () => d });
      var i = l(79881),
        n = l(67294),
        a = l(94184),
        s = l(49775),
        t = l(72579),
        c = l(23204),
        r = l(69560);
      const T = {
        add: (0, i.t)('Add to favorites'),
        remove: (0, i.t)('Remove from favorites'),
      };
      function d(o) {
        const { className: e, isFilled: l, isActive: i, onClick: d, ...L } = o;
        return n.createElement(s.Icon, {
          ...L,
          className: a(
            r.favorite,
            'apply-common-tooltip',
            l && r.checked,
            i && r.active,
            e
          ),
          icon: l ? t : c,
          onClick: d,
          title: l ? T.remove : T.add,
        });
      }
    },
    4598: (o, e, l) => {
      'use strict';
      function i(o, e, l = {}) {
        const i = Object.assign({}, e);
        for (const n of Object.keys(e)) {
          const a = l[n] || n;
          a in o && (i[n] = [o[a], e[n]].join(' '));
        }
        return i;
      }
      function n(o, e, l = {}) {
        return Object.assign({}, o, i(o, e, l));
      }
      l.d(e, { weakComposeClasses: () => i, mergeThemes: () => n });
    },
    24701: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"><path fill="currentColor" d="M5.5 13A2.5 2.5 0 0 0 3 15.5 2.5 2.5 0 0 0 5.5 18 2.5 2.5 0 0 0 8 15.5 2.5 2.5 0 0 0 5.5 13zm9.5 0a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 15 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 15 13zm9.5 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"/></svg>';
    },
    57018: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.682 16.09l3.504 6.068 1.732-1-3.497-6.057 3.595-2.1L8 7.74v10.512l3.682-2.163zm-.362 1.372L7 20V6l12 7-4.216 2.462 3.5 6.062-3.464 2-3.5-6.062z"/></svg>';
    },
    70626: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M18 15h8v-1h-8z"/><path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z"/></g></svg>';
    },
    99131: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><circle fill="currentColor" cx="14" cy="14" r="3"/></svg>';
    },
    87369: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fillRule="evenodd"><path fillRule="nonzero" d="M23.002 23C23 23 23 18.003 23 18.003L15.998 18C16 18 16 22.997 16 22.997l7.002.003zM15 18.003A1 1 0 0 1 15.998 17h7.004c.551 0 .998.438.998 1.003v4.994A1 1 0 0 1 23.002 24h-7.004A.993.993 0 0 1 15 22.997v-4.994z"/><path d="M19 20h1v2h-1z"/><path fillRule="nonzero" d="M22 17.5v-2a2.5 2.5 0 0 0-5 0v2h1v-2a1.5 1.5 0 0 1 3 0v2h1z"/><g fillRule="nonzero"><path d="M3 14.707A1 1 0 0 1 3.293 14L14.439 2.854a1.5 1.5 0 0 1 2.122 0l2.585 2.585a1.5 1.5 0 0 1 0 2.122L8 18.707a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-3.293zm1 0V18h3.293L18.439 6.854a.5.5 0 0 0 0-.708l-2.585-2.585a.5.5 0 0 0-.708 0L4 14.707z"/><path d="M13.146 4.854l4 4 .708-.708-4-4zm-9 9l4 4 .708-.708-4-4z"/><path d="M15.146 6.146l-9 9 .708.708 9-9z"/></g></g></svg>';
    },
    25922: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fillRule="evenodd"><path fillRule="nonzero" d="M23.002 23C23 23 23 18.003 23 18.003L15.998 18C16 18 16 22.997 16 22.997l7.002.003zM15 18.003A1 1 0 0 1 15.998 17h7.004c.551 0 .998.438.998 1.003v4.994A1 1 0 0 1 23.002 24h-7.004A.993.993 0 0 1 15 22.997v-4.994z"/><path d="M19 20h1v2h-1z"/><path fillRule="nonzero" d="M22 14.5a2.5 2.5 0 0 0-5 0v3h1v-3a1.5 1.5 0 0 1 3 0v.5h1v-.5z"/><g fillRule="nonzero"><path d="M3 14.707A1 1 0 0 1 3.293 14L14.439 2.854a1.5 1.5 0 0 1 2.122 0l2.585 2.585a1.5 1.5 0 0 1 0 2.122L8 18.707a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-3.293zm1 0V18h3.293L18.439 6.854a.5.5 0 0 0 0-.708l-2.585-2.585a.5.5 0 0 0-.708 0L4 14.707z"/><path d="M13.146 4.854l4 4 .708-.708-4-4zm-9 9l4 4 .708-.708-4-4z"/><path d="M15.146 6.146l-9 9 .708.708 9-9z"/></g></g></svg>';
    },
    56202: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 31" width="29" height="31"><g fill="currentColor" fillRule="nonzero"><path d="M15.3 22l8.187-8.187c.394-.394.395-1.028.004-1.418l-4.243-4.243c-.394-.394-1.019-.395-1.407-.006l-11.325 11.325c-.383.383-.383 1.018.007 1.407l1.121 1.121h7.656zm-9.484-.414c-.781-.781-.779-2.049-.007-2.821l11.325-11.325c.777-.777 2.035-.78 2.821.006l4.243 4.243c.781.781.78 2.048-.004 2.832l-8.48 8.48h-8.484l-1.414-1.414z"/><path d="M13.011 22.999h7.999v-1h-7.999zM13.501 11.294l6.717 6.717.707-.707-6.717-6.717z"/></g></svg>';
    },
    3911: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fillRule="evenodd"><path fillRule="nonzero" d="M14 10a2 2 0 0 0-2 2v11H6V12c0-4.416 3.584-8 8-8s8 3.584 8 8v11h-6V12a2 2 0 0 0-2-2zm-3 2a3 3 0 0 1 6 0v10h4V12c0-3.864-3.136-7-7-7s-7 3.136-7 7v10h4V12z"/><path d="M6.5 18h5v1h-5zm10 0h5v1h-5z"/></g></svg>';
    },
    34244: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M2 9.75a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h24a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5zm0 1h3v2.5h1v-2.5h3.25v3.9h1v-3.9h3.25v2.5h1v-2.5h3.25v3.9h1v-3.9H22v2.5h1v-2.5h3a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-5.5a.5.5 0 0 1 .5-.5z" transform="rotate(-45 14 14)"/></svg>';
    },
    29261: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path fillRule="nonzero" d="M14 18.634l-.307-.239-7.37-5.73-2.137-1.665 9.814-7.633 9.816 7.634-.509.394-1.639 1.269-7.667 5.969zm7.054-6.759l1.131-.876-8.184-6.366-8.186 6.367 1.123.875 7.063 5.491 7.054-5.492z"/><path d="M7 14.5l-1 .57 8 6.43 8-6.5-1-.5-7 5.5z"/><path d="M7 17.5l-1 .57 8 6.43 8-6.5-1-.5-7 5.5z"/></g></svg>';
    },
    93029: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fillRule="nonzero" d="M14 5a7 7 0 0 0-7 7v3h4v-3a3 3 0 1 1 6 0v3h4v-3a7 7 0 0 0-7-7zm7 11h-4v3h4v-3zm-10 0H7v3h4v-3zm-5-4a8 8 0 1 1 16 0v8h-6v-8a2 2 0 1 0-4 0v8H6v-8zm3.293 11.294l-1.222-2.037.858-.514 1.777 2.963-2 1 1.223 2.037-.858.514-1.778-2.963 2-1zm9.778-2.551l.858.514-1.223 2.037 2 1-1.777 2.963-.858-.514 1.223-2.037-2-1 1.777-2.963z"/></svg>';
    },
    66527: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path fillRule="nonzero" d="M15.039 5.969l-.019-.019-2.828 2.828.707.707 2.474-2.474c1.367-1.367 3.582-1.367 4.949 0s1.367 3.582 0 4.949l-2.474 2.474.707.707 2.828-2.828-.019-.019c1.415-1.767 1.304-4.352-.334-5.99-1.638-1.638-4.224-1.749-5.99-.334zM5.97 15.038l-.019-.019 2.828-2.828.707.707-2.475 2.475c-1.367 1.367-1.367 3.582 0 4.949s3.582 1.367 4.949 0l2.474-2.474.707.707-2.828 2.828-.019-.019c-1.767 1.415-4.352 1.304-5.99-.334-1.638-1.638-1.749-4.224-.334-5.99z"/><path d="M10.485 16.141l5.656-5.656.707.707-5.656 5.656z"/></g></svg>';
    },
    72254: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fillRule="evenodd" d="M19.76 6.07l-.7.7a13.4 13.4 0 011.93 2.47c.19.3.33.55.42.72l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-.98 0-1.88-.2-2.7-.52l-.77.76c1.03.47 2.18.76 3.47.76 3.12 0 5.5-1.75 7.06-3.44a16 16 0 002.38-3.38v-.02h.01L22 10l.45.22.1-.22-.1-.22L22 10l.45-.22-.01-.02a5.1 5.1 0 00-.15-.28 16 16 0 00-2.53-3.41zM6.24 13.93l.7-.7-.27-.29a15 15 0 01-2.08-2.9L4.56 10l.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12.98 0 1.88.2 2.7.52l.77-.76A8.32 8.32 0 0013 2.94c-3.12 0-5.5 1.75-7.06 3.44a16 16 0 00-2.38 3.38v.02h-.01L4 10l-.45-.22-.1.22.1.22L4 10l-.45.22.01.02a5.5 5.5 0 00.15.28 16 16 0 002.53 3.41zm6.09-.43a3.6 3.6 0 004.24-4.24l-.93.93a2.6 2.6 0 01-2.36 2.36l-.95.95zm-1.97-3.69l-.93.93a3.6 3.6 0 014.24-4.24l-.95.95a2.6 2.6 0 00-2.36 2.36zm11.29 7.84l-.8.79a1.5 1.5 0 000 2.12l.59.59a1.5 1.5 0 002.12 0l1.8-1.8-.71-.7-1.8 1.79a.5.5 0 01-.7 0l-.59-.59a.5.5 0 010-.7l.8-.8-.71-.7zm-5.5 3.5l.35.35-.35-.35.01-.02.02-.02.02-.02a4.68 4.68 0 01.65-.5c.4-.27 1-.59 1.65-.59.66 0 1.28.33 1.73.77.44.45.77 1.07.77 1.73a2.5 2.5 0 01-.77 1.73 2.5 2.5 0 01-1.73.77h-4a.5.5 0 01-.42-.78l1-1.5 1-1.5a.5.5 0 01.07-.07zm.74.67a3.46 3.46 0 01.51-.4c.35-.24.75-.42 1.1-.42.34 0 .72.17 1.02.48.3.3.48.68.48 1.02 0 .34-.17.72-.48 1.02-.3.3-.68.48-1.02.48h-3.07l.49-.72.97-1.46zM21.2 2.5L5.5 18.2l-.7-.7L20.5 1.8l.7.7z"/></svg>';
    },
    11624: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M16.47 3.7A8.32 8.32 0 0013 2.94c-3.12 0-5.5 1.75-7.06 3.44a16 16 0 00-2.38 3.38v.02h-.01L4 10l-.45-.22-.1.22.1.22L4 10l-.45.22.01.02a5.5 5.5 0 00.15.28 16 16 0 002.53 3.41l.7-.7-.27-.29a15 15 0 01-2.08-2.9L4.56 10l.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12.98 0 1.88.2 2.7.52l.77-.76zm-7.04 7.04l.93-.93a2.6 2.6 0 012.36-2.36l.95-.95a3.6 3.6 0 00-4.24 4.24zm.1 5.56c1.03.47 2.18.76 3.47.76 3.12 0 5.5-1.75 7.06-3.44a16 16 0 002.38-3.38v-.02h.01L22 10l.45.22.1-.22-.1-.22L22 10l.45-.22-.01-.02-.02-.03-.01-.03a9.5 9.5 0 00-.57-1 16 16 0 00-2.08-2.63l-.7.7.27.29a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-.98 0-1.88-.2-2.7-.52l-.77.76zm2.8-2.8a3.6 3.6 0 004.24-4.24l-.93.93a2.6 2.6 0 01-2.36 2.36l-.95.95zm7.9 3.73c-.12.12-.23.35-.23.77v2h1v1h-1v2c0 .58-.14 1.1-.52 1.48-.38.38-.9.52-1.48.52s-1.1-.14-1.48-.52c-.38-.38-.52-.9-.52-1.48h1c0 .42.1.65.23.77.12.12.35.23.77.23.42 0 .65-.1.77-.23.12-.12.23-.35.23-.77v-2h-1v-1h1v-2c0-.58.14-1.1.52-1.48.38-.38.9-.52 1.48-.52s1.1.14 1.48.52c.38.38.52.9.52 1.48h-1c0-.42-.1-.65-.23-.77-.12-.12-.35-.23-.77-.23-.42 0-.65.1-.77.23zm2.56 6.27l-1.14-1.15.7-.7 1.15 1.14 1.15-1.14.7.7-1.14 1.15 1.14 1.15-.7.7-1.15-1.14-1.15 1.14-.7-.7 1.14-1.15zM21.2 2.5L5.5 18.2l-.7-.7L20.5 1.8l.7.7z"/></svg>';
    },
    57837: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M5.5 18.2L21.2 2.5l-.7-.7L4.8 17.5l.7.7zM19.05 6.78l.71-.7a14.26 14.26 0 0 1 2.08 2.64 14.26 14.26 0 0 1 .6 1.05v.02h.01L22 10l.45.22-.01.02a5.18 5.18 0 0 1-.15.28 16 16 0 0 1-2.23 3.1c-1.56 1.69-3.94 3.44-7.06 3.44-1.29 0-2.44-.3-3.47-.76l.76-.76c.83.32 1.73.52 2.71.52 2.73 0 4.85-1.53 6.33-3.12a15.01 15.01 0 0 0 2.08-2.9l.03-.04-.03-.04a15 15 0 0 0-2.36-3.18zM22 10l.45-.22.1.22-.1.22L22 10zM6.94 13.23l-.7.7a14.24 14.24 0 0 1-2.08-2.64 14.28 14.28 0 0 1-.6-1.05v-.02h-.01L4 10l-.45-.22.01-.02a5.55 5.55 0 0 1 .15-.28 16 16 0 0 1 2.23-3.1C7.5 4.69 9.88 2.94 13 2.94c1.29 0 2.44.3 3.47.76l-.76.76A7.27 7.27 0 0 0 13 3.94c-2.73 0-4.85 1.53-6.33 3.12a15 15 0 0 0-2.08 2.9l-.03.04.03.04a15.01 15.01 0 0 0 2.36 3.18zM4 10l-.45.22-.1-.22.1-.22L4 10zm9 3.56c-.23 0-.46-.02-.67-.06l.95-.95a2.6 2.6 0 0 0 2.36-2.36l.93-.93a3.6 3.6 0 0 1-3.57 4.3zm-3.57-2.82l.93-.93a2.6 2.6 0 0 1 2.36-2.36l.95-.95a3.6 3.6 0 0 0-4.24 4.24zM17.5 21.9l3.28 2.18a.5.5 0 1 1-.56.84L17.5 23.1l-2.72 1.82a.5.5 0 1 1-.56-.84l3.28-2.18zM18.58 19.22a.5.5 0 0 1 .7-.14L22 20.9l2.72-1.82a.5.5 0 0 1 .56.84L22 22.1l-3.28-2.18a.5.5 0 0 1-.14-.7z"/></svg>';
    },
    96750: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fillRule="evenodd" d="M14 6a3 3 0 0 0-3 3v3h6V9a3 3 0 0 0-3-3zm4 6V9a4 4 0 0 0-8 0v3H8.5A2.5 2.5 0 0 0 6 14.5v7A2.5 2.5 0 0 0 8.5 24h11a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2.5-2.5H18zm-5 5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6-2.5c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 21.5v-7z"/></svg>';
    },
    62618: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fillRule="evenodd" d="M14 6a3 3 0 0 0-3 3v3h8.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 6 21.5v-7A2.5 2.5 0 0 1 8.5 12H10V9a4 4 0 0 1 8 0h-1a3 3 0 0 0-3-3zm-1 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6-2.5c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 21.5v-7z"/></svg>';
    },
    49017: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fillRule="evenodd" d="M4.56 14a10.05 10.05 0 00.52.91c.41.69 1.04 1.6 1.85 2.5C8.58 19.25 10.95 21 14 21c3.05 0 5.42-1.76 7.07-3.58A17.18 17.18 0 0023.44 14a9.47 9.47 0 00-.52-.91c-.41-.69-1.04-1.6-1.85-2.5C19.42 8.75 17.05 7 14 7c-3.05 0-5.42 1.76-7.07 3.58A17.18 17.18 0 004.56 14zM24 14l.45-.21-.01-.03a7.03 7.03 0 00-.16-.32c-.11-.2-.28-.51-.5-.87-.44-.72-1.1-1.69-1.97-2.65C20.08 7.99 17.45 6 14 6c-3.45 0-6.08 2-7.8 3.92a18.18 18.18 0 00-2.64 3.84v.02h-.01L4 14l-.45-.21-.1.21.1.21L4 14l-.45.21.01.03a5.85 5.85 0 00.16.32c.11.2.28.51.5.87.44.72 1.1 1.69 1.97 2.65C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92a18.18 18.18 0 002.64-3.84v-.02h.01L24 14zm0 0l.45.21.1-.21-.1-.21L24 14zm-10-3a3 3 0 100 6 3 3 0 000-6zm-4 3a4 4 0 118 0 4 4 0 01-8 0z"/></svg>';
    },
    77314: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fillRule="evenodd" d="M5 10.76l-.41-.72-.03-.04.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12 2.73 0 4.85 1.53 6.33 3.12a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-2.73 0-4.85-1.53-6.33-3.12a15 15 0 01-1.66-2.18zm17.45-.98L22 10l.45.22-.01.02a5.04 5.04 0 01-.15.28 16.01 16.01 0 01-2.23 3.1c-1.56 1.69-3.94 3.44-7.06 3.44-3.12 0-5.5-1.75-7.06-3.44a16 16 0 01-2.38-3.38v-.02h-.01L4 10l-.45-.22.01-.02a5.4 5.4 0 01.15-.28 16 16 0 012.23-3.1C7.5 4.69 9.88 2.94 13 2.94c3.12 0 5.5 1.75 7.06 3.44a16.01 16.01 0 012.38 3.38v.02h.01zM22 10l.45-.22.1.22-.1.22L22 10zM3.55 9.78L4 10l-.45.22-.1-.22.1-.22zm6.8.22A2.6 2.6 0 0113 7.44 2.6 2.6 0 0115.65 10 2.6 2.6 0 0113 12.56 2.6 2.6 0 0110.35 10zM13 6.44A3.6 3.6 0 009.35 10 3.6 3.6 0 0013 13.56c2 0 3.65-1.58 3.65-3.56A3.6 3.6 0 0013 6.44zm7.85 12l.8-.8.7.71-.79.8a.5.5 0 000 .7l.59.59c.2.2.5.2.7 0l1.8-1.8.7.71-1.79 1.8a1.5 1.5 0 01-2.12 0l-.59-.59a1.5 1.5 0 010-2.12zM16.5 21.5l-.35-.35a.5.5 0 00-.07.07l-1 1.5-1 1.5a.5.5 0 00.42.78h4a2.5 2.5 0 001.73-.77A2.5 2.5 0 0021 22.5a2.5 2.5 0 00-.77-1.73A2.5 2.5 0 0018.5 20a3.1 3.1 0 00-1.65.58 5.28 5.28 0 00-.69.55v.01h-.01l.35.36zm.39.32l-.97 1.46-.49.72h3.07c.34 0 .72-.17 1.02-.48.3-.3.48-.68.48-1.02 0-.34-.17-.72-.48-1.02-.3-.3-.68-.48-1.02-.48-.35 0-.75.18-1.1.42a4.27 4.27 0 00-.51.4z"/></svg>';
    },
    46826: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fillRule="evenodd" d="M5 10.76a13.27 13.27 0 01-.41-.72L4.56 10l.03-.04a15 15 0 012.08-2.9c1.48-1.6 3.6-3.12 6.33-3.12s4.85 1.53 6.33 3.12a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.08 2.9c-1.48 1.6-3.6 3.12-6.33 3.12s-4.85-1.53-6.33-3.12a15 15 0 01-1.66-2.18zm17.45-.98L22 10l.45.22-.01.02a14.3 14.3 0 01-.6 1.05c-.4.64-1 1.48-1.78 2.33-1.56 1.7-3.94 3.44-7.06 3.44s-5.5-1.75-7.06-3.44a16 16 0 01-2.23-3.1 9.39 9.39 0 01-.15-.28v-.02h-.01L4 10l-.45-.22.01-.02a5.59 5.59 0 01.15-.28 16 16 0 012.23-3.1C7.5 4.69 9.87 2.94 13 2.94c3.12 0 5.5 1.75 7.06 3.44a16 16 0 012.23 3.1 9.5 9.5 0 01.15.28v.01l.01.01zM22 10l.45-.22.1.22-.1.22L22 10zM3.55 9.78L4 10l-.45.22-.1-.22.1-.22zm6.8.22A2.6 2.6 0 0113 7.44 2.6 2.6 0 0115.65 10 2.6 2.6 0 0113 12.56 2.6 2.6 0 0110.35 10zM13 6.44A3.6 3.6 0 009.35 10c0 1.98 1.65 3.56 3.65 3.56s3.65-1.58 3.65-3.56A3.6 3.6 0 0013 6.44zM20 18c0-.42.1-.65.23-.77.12-.13.35-.23.77-.23.42 0 .65.1.77.23.13.12.23.35.23.77h1c0-.58-.14-1.1-.52-1.48-.38-.38-.9-.52-1.48-.52s-1.1.14-1.48.52c-.37.38-.52.9-.52 1.48v2h-1v1h1v2c0 .42-.1.65-.23.77-.12.13-.35.23-.77.23-.42 0-.65-.1-.77-.23-.13-.12-.23-.35-.23-.77h-1c0 .58.14 1.1.52 1.48.38.37.9.52 1.48.52s1.1-.14 1.48-.52c.37-.38.52-.9.52-1.48v-2h1v-1h-1v-2zm1.65 4.35l1.14 1.15-1.14 1.15.7.7 1.15-1.14 1.15 1.14.7-.7-1.14-1.15 1.14-1.15-.7-.7-1.15 1.14-1.15-1.14-.7.7z"/></svg>';
    },
    35802: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fillRule="evenodd" d="M4.5 10a8.46 8.46 0 0 0 .46.8c.38.6.94 1.4 1.68 2.19 1.48 1.6 3.62 3.13 6.36 3.13s4.88-1.53 6.36-3.13A15.07 15.07 0 0 0 21.5 10a7.41 7.41 0 0 0-.46-.8c-.38-.6-.94-1.4-1.68-2.19-1.48-1.6-3.62-3.13-6.36-3.13S8.12 5.4 6.64 7A15.07 15.07 0 0 0 4.5 10zM22 10l.41-.19-.4.19zm0 0l.41.19-.4-.19zm.41.19l.09-.19-.09-.19-.01-.02a6.86 6.86 0 0 0-.15-.28c-.1-.18-.25-.45-.45-.76-.4-.64-.99-1.48-1.77-2.32C18.47 4.74 16.11 3 13 3 9.89 3 7.53 4.74 5.97 6.43A15.94 15.94 0 0 0 3.6 9.79v.02h-.01L3.5 10l.09.19.01.02a6.59 6.59 0 0 0 .15.28c.1.18.25.45.45.76.4.64.99 1.48 1.77 2.32C7.53 15.26 9.89 17 13 17c3.11 0 5.47-1.74 7.03-3.43a15.94 15.94 0 0 0 2.37-3.36v-.02h.01zM4 10l-.41-.19.4.19zm9-2.63c-1.5 0-2.7 1.18-2.7 2.63s1.2 2.63 2.7 2.63c1.5 0 2.7-1.18 2.7-2.63S14.5 7.37 13 7.37zM9.4 10C9.4 8.07 11 6.5 13 6.5s3.6 1.57 3.6 3.5S15 13.5 13 13.5A3.55 3.55 0 0 1 9.4 10zm8.1 11.9l3.28 2.18a.5.5 0 1 1-.56.84L17.5 23.1l-2.72 1.82a.5.5 0 1 1-.56-.84l3.28-2.18zm1.78-2.82a.5.5 0 0 0-.56.84L22 22.1l3.28-2.18a.5.5 0 1 0-.56-.84L22 20.9l-2.72-1.82z"/></svg>';
    },
    29166: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17.646 18.354l4 4 .708-.708-4-4z"/><path d="M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"/><path d="M9 13h7v-1H9z"/><path d="M13 16V9h-1v7z"/></svg>';
    },
    48588: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17.646 18.354l4 4 .708-.708-4-4z"/><path d="M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"/><path d="M9 13h7v-1H9z"/></svg>';
    },
    47642: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>';
    },
    72579: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
    },
    23204: (o) => {
      o.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
  },
]);
