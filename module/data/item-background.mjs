import DarkReverieItemBase from './base-item.mjs';

export default class DarkReverieBackground extends DarkReverieItemBase {
  static LOCALIZATION_PREFIXES = [
    'DARK_REVERIE.Item.base',
    'DARK_REVERIE.Item.Background',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();
    // schema.skills = new foundry.data.fields.ArrayField(new foundry.data.fields.ObjectField());
    // schema.drives = new foundry.data.fields.ArrayField(new foundry.data.fields.ObjectField());
    // schema.coping = new foundry.data.fields.ArrayField(new foundry.data.fields.ObjectField());
    return schema;
  }
}
