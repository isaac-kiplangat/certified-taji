import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/css/jsvectormap.css';
import { useEffect } from 'react';
import 'jsvectormap/dist/maps/world.js';

const MapOne = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: '#mapOne',
      map: 'world',
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: '#C8D0D8',
        },
        hover: {
          fillOpacity: 1,
          fill: '#3056D3',
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: 'Satoshi',
          fontWeight: 'semibold',
          fill: '#fff',
        },
        hover: {
          cursor: 'pointer',
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split('-')[1];
          },
        },
      },
      markerStyle: {
        initial: {
          fill: '#F8E23B',
          stroke: '#383f47',
        },
      },
      // markers: { latLng: [41.9, 12.45], name: 'Vatican City' },
      // { latLng: [43.73, 7.41], name: 'Monaco' },
      // { latLng: [3.2, 73.22], name: 'Maldives' },
      // { latLng: [35.88, 14.5], name: 'Malta' },
      // { latLng: [12.05, -61.75], name: 'Grenada' },
      // { latLng: [13.16, -59.55], name: 'Barbados' },
      // { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
      // { latLng: [-4.61, 55.45], name: 'Seychelles' },
      // { latLng: [1.3, 103.8], name: 'Singapore' },
      // { latLng: [1.46, 173.03], name: 'Kiribati' },
      // { latLng: [-21.13, -175.2], name: 'Tonga' },
      // { latLng: [15.3, -61.38], name: 'Dominica' },
      // { latLng: [-20.2, 57.5], name: 'Mauritius' },
      // { latLng: [26.02, 50.55], name: 'Bahrain' },
      // { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' },
    });
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Employment labels
      </h4>
      <div id="mapOne" className="mapOne map-btn h-90"></div>
    </div>
  );
};

export default MapOne;
