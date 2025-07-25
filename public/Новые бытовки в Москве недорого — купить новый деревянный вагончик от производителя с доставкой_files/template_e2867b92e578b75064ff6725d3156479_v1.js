/* Start:"a:4:{s:4:"full";s:86:"/local/templates/index/components/bitrix/news.list/object-map/script.js?16600601701752";s:6:"source";s:71:"/local/templates/index/components/bitrix/news.list/object-map/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var myMap;
function PxMap() {
  ymaps.ready(function () {
    myMap = new ymaps.Map('YMapsID', {
      center: [56.57, 37.64],
      zoom: 7,
      // Максимальные и минимальные координаты выбираются в компоненте и передаются сюда для вписывания точек в область карты. Из-за высоты метки работает немного не корректно - надо фиксить, поэтому, т.к. область нам известна заранее, можно просто задать вручную.
      bounds: [minPoint, maxPoint],
      type: 'yandex#map',
      controls: ['default', 'routeEditor'],
      behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
    });
    myMap.pxpoints = {};

    clusterer = new ymaps.Clusterer({
      /*clusterDisableClickZoom: true,
			clusterBalloonContentLayout: "cluster#balloonAccordion",
			//clusterBalloonAccordionShowIcons: false,
			clusterBalloonMaxWidth: 280,
			clusterBalloonContentLayoutWidth: 220,
			clusterBalloonContentLayoutHeight: 250,
			clusterBalloonCycling: false,
			clusterBalloonPagerType: "marker",
			clusterBalloonPagerSize: 50*/
      //maxZoom: 5,
      zoomMargin: 100,
    });

    geoObjects = [];
    for (var key in mapsPoint) {
      var point = mapsPoint[key];
      geoObjects[key] = new ymaps.Placemark(
        [point.LAT, point.LON],
        {
          balloonContentHeader: point.NAME,
          balloonContentBody: point.TEXT,
          placemarkId: key,
        },
        {
          balloonMaxWidth: 300,
        }
      );
      if ('ELEMENT_ID' in point) {
        myMap['pxpoints'][String(point.ELEMENT_ID)] = geoObjects[key];
      }
    }
    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);
  });
}
PxMap();
/* End */ /* /local/templates/index/components/bitrix/news.list/object-map/script.js?16600601701752*/
