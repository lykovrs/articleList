import { Map } from "immutable";
/**
 * Преобразуем массив в обект с ключами в виде id
 * @param  {array} arr массив с обектами с полем id
 * @param  {object} Model модель иммутабельных данных
 * @return {object}    обект с хэш-ключами из id
 */
export function arrayToMap(arr, Model) {
  if (arr)
    return arr.reduce(
      (acc, entry) => acc.set(entry.id, Model ? new Model(entry) : entry),
      new Map({})
    );
  return null;
}

/**
 * Преобразуем обект массив объектов
 * @param  {object} map экземпляр иммутабельной коллекции
 * @return {array}      массив с обектами с полем id
 */
export function mapToArray(map) {
  // debugger;
  // console.log("+++", map.valueSeq().toArray());
  return map.valueSeq().toArray();
}

/**
 * Генерирует уникальный id
 * @param  {[type]} num колличество симоволов в ключе
 * @return {[type]}     уникальный ключ
 */
export function makeid(num) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < num; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
