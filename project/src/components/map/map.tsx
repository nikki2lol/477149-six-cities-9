import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Offers} from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, ICON_WIDTH, ICON_HEIGHT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks';

type MapProps = {
  offers: Offers;
  currentId?: number | null;
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

function Map({offers, currentId}: MapProps): JSX.Element {
  const selectedPin = useAppSelector(({OFFER}) => OFFER.offerId );
  const mapRef = useRef(null);
  const {activeCity} = useAppSelector(({DATA})=> DATA );
  const {location: {latitude: lat, longitude: lng, zoom}} = activeCity;
  const map = useMap(mapRef, activeCity);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id === currentId || offer.id === selectedPin
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
      map.flyTo([lat, lng], zoom);
    }
  }, [map, offers, lat, lng, zoom, selectedPin, currentId]);

  return <div style={{height: '100%'}} ref={mapRef}/>;
}

export default Map;
