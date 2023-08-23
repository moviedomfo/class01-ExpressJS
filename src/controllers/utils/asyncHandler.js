/**
 * Atrapa posibles excepciones y las envía al handler correspondiente
 * @param {*} callback Callback a llamar y sobre el cual atrapar excepciones
 */
export default function asyncHandler(callback) {
  return function (req, res, next) {
    callback(req, res, next).catch(next);
  };
}
