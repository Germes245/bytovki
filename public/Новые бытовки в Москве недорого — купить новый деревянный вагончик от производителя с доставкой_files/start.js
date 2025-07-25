(function (undefined) {
  try {
    if (window.__rc_started) return;
    function val() {
      return arguments[0];
    }
    var widgetId = val(703154);

    var newVisitor = isNewVisitor();

    if (!widgetId) return;

    var showOnlyToNewVisitors = val(false);

    if (showOnlyToNewVisitors && !newVisitor) {
      return;
    }

    window.redconnect = window.redconnect || {};

    window.redconnect.free = val(false);
    window.redconnect.lite = val(true);
    window.redconnect.feedbackEnabled = val(true);
    window.redconnect.language = window.redconnect.language || val('ru');
    window.redconnect.hideActiveCopyright = val(false);

    var redConnectSettings =
      val({
        fixedWidget: {
          enabled: true,
          colorMain: '#18a629',
          colorBack: '#363e43',
          timeout: 2,
          marginX: '1%',
          marginY: '4%',
        },
        buttonWidget: {
          enabled: false,
          colorMain: '#19a629',
          colorBack: '#363e43',
          colorBorder: '#363e43',
          buttonStyle: 'rounded',
          size: 'medium',
        },
        popup: {
          enabled: false,
          text: 'Перезвоним за 28 секунд. Оставьте свой номер, и мы оперативно свяжемся с вами.',
          timeout: 20,
          showOnExit: true,
        },
      }) || {};
    for (var key in redConnectSettings) {
      if (redConnectSettings.hasOwnProperty(key)) {
        var value = redConnectSettings[key];
        if (key == 'fixedWidget') {
          for (var key2 in value) {
            if (value.hasOwnProperty(key2)) {
              if (typeof window.redconnect[key2] == 'undefined') {
                window.redconnect[key2] = value[key2];
              }
            }
          }
        } else if (value !== null && typeof value === 'object') {
          if (typeof window.redconnect[key] == 'undefined') {
            window.redconnect[key] = value;
          } else if (typeof window.redconnect[key] === 'object') {
            for (var key3 in value) {
              if (value.hasOwnProperty(key3)) {
                if (!window.redconnect[key][key3]) {
                  window.redconnect[key][key3] = value[key3];
                }
              }
            }
          }
        } else if (value) {
          if (typeof window.redconnect[key] == 'undefined') {
            window.redconnect[key] = value;
          }
        }
      }
    }

    if (!window.redconnect.widgetId) window.redconnect.widgetId = widgetId;
    if (!window.redconnect.uiVersion) window.redconnect.uiVersion = val(2);

    redconnect.countryCode = redconnect.countryCode || val('RU');

    redconnect.deviceType = redconnect.deviceType || val('DESKTOP');

    if (!window.redconnect.url) {
      window.redconnect.url = getServiceUrl();
    }

    window.redchannels = val([]);

    var src =
      window.redconnect.url +
      '/connect' +
      val('/v2') +
      '/main.js?version=3.1.539.1630063113454';
    var script = document.createElement('script');
    script.charset = 'utf8';
    script.type = 'text/javascript';
    script.src = src;
    document.documentElement
      .getElementsByTagName('head')[0]
      .appendChild(script);
  } catch (e) {}

  function getServiceUrl() {
    var rhlpscrtgSrc = document.getElementById('rhlpscrtg').src;
    var protocol = rhlpscrtgSrc.split('//')[0];
    var serviceHost = ~rhlpscrtgSrc.indexOf('//development')
      ? 'development'
      : ~rhlpscrtgSrc.indexOf('/test.')
        ? 'test.web.redhelper.ru'
        : 'web.redhelper.ru';

    var url = protocol + '//' + serviceHost;
    return url;
  }

  function isNewVisitor() {
    var FIRST_VISIT_VAL = 'rc_first_visit';
    var LATEST_VISIT_VAL = 'rc_latest_visit';

    var firstVisitStr = localStorage.getItem(FIRST_VISIT_VAL);

    if (firstVisitStr) {
      var firstVisit = new Date(firstVisitStr);
      var latestVisitStr = localStorage.getItem(LATEST_VISIT_VAL);
      var latestVisit = latestVisitStr ? new Date(latestVisitStr) : firstVisit;
      var firstVisitPlus3Months = new Date(firstVisit);
      firstVisitPlus3Months.setMonth(firstVisitPlus3Months.getMonth() + 3);
      if (firstVisitPlus3Months < new Date()) {
        localStorage.setItem(FIRST_VISIT_VAL, new Date());
        localStorage.setItem(LATEST_VISIT_VAL, new Date());
        return true;
      }
      var latestVisitPlus30Min = new Date(latestVisit);
      latestVisitPlus30Min.setMinutes(latestVisitPlus30Min.getMinutes() + 30);
      if (latestVisitPlus30Min > new Date()) {
        localStorage.setItem(LATEST_VISIT_VAL, new Date());
        return true;
      }
      return false;
    } else {
      localStorage.setItem(FIRST_VISIT_VAL, new Date());
      localStorage.setItem(LATEST_VISIT_VAL, new Date());
      return true;
    }
  }
})();
