import DarkReverieItemBase from './base-item.mjs';

export default class DarkReverieConnection extends DarkReverieItemBase {
  static LOCALIZATION_PREFIXES = [
    'DARK_REVERIE.Item.base',
    'DARK_REVERIE.Item.Connection',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.rating = new fields.NumberField({
      ...requiredInteger,
      initial: 0,
      min: 0,
      max: 3
    });
    return schema;
  }
}
