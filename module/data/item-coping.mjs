import DarkReverieItemBase from './base-item.mjs';

export default class DarkReverieCoping extends DarkReverieItemBase {
  static LOCALIZATION_PREFIXES = [
    'DARK_REVERIE.Item.base',
    'DARK_REVERIE.Item.Coping',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();
    return schema;
  }
}
