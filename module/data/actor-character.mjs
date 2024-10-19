import DarkReverieActorBase from './base-actor.mjs';

export default class DarkReverieCharacter extends DarkReverieActorBase {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    'DARK_REVERIE.Actor.Character',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.stress = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      minTrackSize: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      maxTrackSize: new fields.NumberField({ ...requiredInteger, initial: 6, min: 1 }),
      initialTrackSize: new fields.NumberField({ ...requiredInteger, initial: 4, min: 1 }),
    });

    schema.trauma = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      minTrackSize: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      maxTrackSize: new fields.NumberField({ ...requiredInteger, initial: 6, min: 1 }),
      initialTrackSize: new fields.NumberField({ ...requiredInteger, initial: 4, min: 1 }),
    });

    schema.growth = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      minTrackSize: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      maxTrackSize: new fields.NumberField({ ...requiredInteger, initial: 6, min: 1 }),
      initialTrackSize: new fields.NumberField({ ...requiredInteger, initial: 4, min: 1 }),
    });

    /*
    - biography
    - notes

    Items
    - occupation
      - skills
    - background
      - skills
      - drives
    - coping mechanisms
    - actions
    - connections
    */

    return schema;
  }
}
