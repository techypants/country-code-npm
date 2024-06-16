const countryCodes = require("country-codes-list");

function codecountry() {
  const object = countryCodes.customList("countryCode", "{countryNameEn}");
  const countryDict = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const countryNameEn = object[key].toLowerCase();
      const countryKey = key.toLowerCase();

      countryDict[countryNameEn] = countryKey;
    }
  }

  return countryDict;
}
// const countryDict = createCountryDict();
// console.log(countryDict);
module.exports = codecountry;

// const countryCodes = require("country-codes-list");
// const object = countryCodes.customList("countryCode", "{countryNameEn}");

// // countryname = object["IN"].toLowerCase();
// countryDict = new Map();

// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     const countryNameEn = object[key].toLowerCase();
//     const countryKey = key.toLowerCase();

//     countryDict.set(countryNameEn, { countryKey });
//   }
// }
// // console.log(countryDict.get("india").countryKey);
// module.exports = countryDict;
