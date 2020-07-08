// Mock object
const data = {
    addition: null,
    axis: 90,
    baseCurve: 8.7,
    color: null,
    createdAt: "2020-07-04T04:41:34.1493708Z",
    cylinder: -0.75,
    diameter: 14.2,
    distance: null,
    id: "564563-3dd1-23ba-214a-1a490ff30fc7",
    power: -0.5,
    privateLabel: false,
    productId: "190090575233",
    productName: "1DBIOﾄｰﾘｯｸ 90Pack",
    seriesId: "ser_23432sdvdv43353dfg34",
    trial: false,
    upc: "190090575233",
    updatedAt: null
  };

// This method filters specific properties from an object.
function filterPropsFromObj(obj, keep) {
  const arrProps = Object.keys(obj);
  const toOmit = arrProps.filter(x => {
    return !keep.includes(x);
  });
  let result = toOmit.reduce((total, key) => {
    const { [key]: toRemove, ...toKeep } = total;
    return toKeep;
  }, obj);
  return result;
}

// Properties from object to keep.
const keep = [
  "axis",
  "baseCurve",
  "cylinder",
  "diameter",
  "power",
  "productName",
  "seriesId"
];

// Calling method with mock data.
console.log('[Original Object]', data) // Original Object
console.log('[Filtered Object]', filterPropsFromObj(data, keep)) // Object with filtered properties
