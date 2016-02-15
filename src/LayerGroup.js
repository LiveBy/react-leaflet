import { layerGroup } from 'leaflet-headless';

import MapLayer from './MapLayer';

export default class LayerGroup extends MapLayer {
  componentWillMount() {
    super.componentWillMount();
    this.leafletElement = layerGroup();
  }

  render() {
    return this.renderChildrenWithProps({
      layerGroup: this.leafletElement,
    });
  }
}
