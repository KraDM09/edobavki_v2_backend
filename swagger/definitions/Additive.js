module.exports = (withId = true) => {
  const json = {
    required: [
      'id',
      'code',
      'spec',
      'functions',
      'in_russia',
      'in_eu',
      'order_number',
      'employment',
      'extracted_from',
    ],
    properties: {
      id: {
        type: 'integer',
        uniqueItems: true,
      },
      code: {
        type: 'string',
        example: 'Е121',
      },
      spec: {
        type: 'string',
        example: 'Цитрусовый красный 2 (Citrus Red 2)',
      },
      functions: {
        type: 'string',
        example: 'Краситель',
      },
      in_russia: {
        type: 'boolean',
        example: false,
      },
      appearance: {
        type: 'string',
        example: 'Порошок или гранулят, дающий красный цвет.',
      },
      in_eu: {
        type: 'boolean',
        example: false,
      },
      negative_effects: {
        type: 'string',
        example: null,
      },
      order_number: {
        type: 'number',
        example: 1,
      },
      employment: {
        type: 'string',
        example: 'Используется для подкрашивания кожуры цитрусовых, но в большинстве государств запрещен.',
      },
      extracted_from: {
        type: 'string',
        example: 'Искусственное происхождение.',
      },
    },
  };

  if (!withId) {
    delete json.required.id;
    delete json.properties.id;
  }

  return json;
};
