module.exports = {
  req: {
    presence: {
      message: 'Поле не может быть пустым',
    },
  },
  int: {
    type: {
      type: 'integer',
      message: 'Поле должно быть числом',
    },
  },
  str: {
    type: {
      type: 'string',
      message: 'Поле должно быть строкой',
    },
  },
  bool: {
    type: {
      type: 'boolean',
      message: 'Поле должно быть булевым',
    },
  },
  length: (minimum, maximum) => ({
    length: {
      minimum,
      maximum,
      tooShort: 'должен содержать минимум %{count} символов',
      tooLong: 'не должен содержать более %{count} символов',
    },
  }),
  numericality: (minimum, maximum) => ({
    numericality: {
      greaterThanOrEqualTo: minimum,
      notGreaterThanOrEqualTo: 'должно быть больше или равно %{count}',
      lessThanOrEqualTo: maximum,
      notLessThanOrEqualTo: 'должно быть меньше или равно %{count}',
    },
  }),
};
