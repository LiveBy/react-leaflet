import { PropTypes } from 'react';
import { control } from 'leaflet-headless';

import MapControl from './MapControl';

export default class AttributionControl extends MapControl {
  static propTypes = {
    prefix: PropTypes.string,
  };

  componentWillMount() {
    this.leafletElement = control.attribution(this.props);
  }
}
