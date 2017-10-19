/**
 * Преобразуем массив в обект с ключами в виде id
 * @param  {array} arr массив с обектами с полем id
 * @return {object}    обект с хэш-ключами из id
 */
export function arrayToMap(arr) {
  return arr.reduce((p, c) => ({ ...p, [c.id]: c }), {});
}

/**
 * Преобразуем обект массив объектов
 * @param  {object} map обект с хэш-ключами
 * @return {array}      массив с обектами с полем id
 */
export function mapToArray(map) {
  return Object.keys(map).map(item => map[item]);
}
