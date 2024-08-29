import DarkReverieItemBase from './base-item.mjs';

export default class DarkReverieDisorder extends DarkReverieItemBase {
  static LOCALIZATION_PREFIXES = [
    'DARK_REVERIE.Item.base',
    'DARK_REVERIE.Item.Disorder',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    // schema.spellLevel = new fields.NumberField({
    //   required: true,
    //   nullable: false,
    //   integer: true,
    //   initial: 1,
    //   min: 1,
    //   max: 9,
    // });

    return schema;
  }
}
