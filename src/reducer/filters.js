import { CHANGE_DATE_RANGE, CHANGE_SELECTION } from "../constants";

let defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

/**
 * Редьюссер хранения и обработки данных фильтрации
 * @param  {Object} [filters=defaultFilters] принимает объект для работы с фильтрами
 * @param  {Object} action                   обект экшена
 * @return {Object}                          параметры фильтрации
 */
export default (filters = defaultFilters, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_DATE_RANGE:
      return { ...filters, dateRange: payload.dateRange };
      break;

    case CHANGE_SELECTION:
      return { ...filters, selected: payload.selected };
      break;

    default:
      return filters;
  }
};
