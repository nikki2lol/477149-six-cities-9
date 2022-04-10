import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {Offers} from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, ICON_WIDTH, ICON_HEIGHT} from '../../const';
import leaflet, {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks';
import L from 'leaflet';

type MapProps = {
  offers: Offers;
  isNearbyOffer?: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH, ICON_HEIGHT],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH, ICON_HEIGHT],
});

function Map({offers, isNearbyOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const {offerId} = useAppSelector(({OFFER}) => OFFER );
  const cityCenter = offers[0].city;
  const {location: {latitude: lat, longitude: lng, zoom}} = cityCenter;
  const map = useMap(mapRef, cityCenter);
  const markerGroup = useRef(L.layerGroup());
  const idForMap = isNearbyOffer ? isNearbyOffer : offerId;

  useEffect(() => {
    if (map) {
      markerGroup.current.clearLayers();
      markerGroup.current.addTo(map);

      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        },{
          icon: (offer.id === idForMap
            ? currentCustomIcon
            : defaultCustomIcon
          )})
          .addTo(markerGroup.current);
      });
      map.flyTo([lat, lng], zoom);
    }
  }, [map, offers, lat, lng, zoom, currentCustomIcon, defaultCustomIcon, markerGroup, offerId, idForMap]);

  return <div style={{height: '100%'}} ref={mapRef}/>;
}

export default Map;
