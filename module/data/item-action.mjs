import DarkReverieItemBase from './base-item.mjs';

export default class DarkReverieAction extends DarkReverieItemBase {
  static LOCALIZATION_PREFIXES = [
    'DARK_REVERIE.Item.base',
    'DARK_REVERIE.Item.Action',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.section = new fields.ArrayField(
      new fields.SchemaField({
        title: new fields.StringField({ required: true, blank: true }),
        description: new fields.StringField({ required: true, blank: true }),
        diceOptions: new fields.ArrayField(
          new fields.SchemaField({
            description: new fields.StringField({ required: true, blank: true }),
            dieColor: new fields.StringField({ required: true, blank: true }),
            startChecked: new fields.BooleanField({ required: true, default: false }),
          })
        )
      })
    );

    schema.roll = new fields.SchemaField({
      title: new fields.StringField({ required: true, blank: true }),
      description: new fields.StringField({ required: true, blank: true }),
      outcomeMessages: new fields.SchemaField({
        success: new fields.StringField({ required: true, blank: true }),
        partialSuccess: new fields.StringField({ required: true, blank: true }),
        fullSuccess: new fields.StringField({ required: true, blank: true }),
        criticalSuccess: new fields.StringField({ required: true, blank: true }),
      })
    });

    return schema;
  }
}
