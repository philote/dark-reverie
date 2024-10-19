import DarkReverieItemBase from './base-item.mjs';

export default class DarkReverieDrive extends DarkReverieItemBase {
  static LOCALIZATION_PREFIXES = [
    'DARK_REVERIE.Item.base',
    'DARK_REVERIE.Item.Drive',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();
    return schema;
  }
}
