// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {propertyName};
const createNotEnumerableProperty = (propertyName) =>
{
    Object.defineProperty(Object.prototype, propertyName,
        { enumerable: false,
            set: function (propertyValue)
            {
                propertyName = propertyValue
            },
            get: function ()
            {
            return propertyName;
            }
        });
            return propertyName
        };
const createProtoMagicObject = () => {
    let obj = () => {};
    obj.prototype = obj.__proto__;
    return obj;
};
let counter = 0;
const incrementor = () => {
    counter++
    return incrementor;
};
incrementor.toString = () =>counter;

let asynccount = 0;
const asyncIncrementor = () => {
    asynccount++;
    return asyncIncrementor;
};
asyncIncrementor.toString = () => asynccount;
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;