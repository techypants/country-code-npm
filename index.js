const countryCodes = require("country-codes-list");
const object = countryCodes.customList("countryCode", "{countryNameEn}");

// countryname = object["IN"].toLowerCase();
countryDict = new Map();

for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const countryNameEn = object[key].toLowerCase();
    const countryKey = key.toLowerCase();

    countryDict.set(countryNameEn, { countryKey });
  }
}
// console.log(countryDict.get("india").countryKey);
module.exports = countryDict;
