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
 * @param  {object} [filters=defaultFilters] принимает объект для работы с фильтрами
 * @param  {object} action                   обект экшена
 * @return {object}                          параметры фильтрации
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
