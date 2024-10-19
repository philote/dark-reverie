export default class DarkReverieActorBase extends foundry.abstract
  .TypeDataModel {
  static LOCALIZATION_PREFIXES = ["DARK_REVERIE.Actor.base"];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.biography = new fields.HTMLField();
    schema.notes = new fields.HTMLField();

    // schema.stress = new fields.SchemaField({
    //   value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    //   minTrackSize: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    //   maxTrackSize: new fields.NumberField({ ...requiredInteger, initial: 6, min: 1 }),
    //   initialTrackSize: new fields.NumberField({ ...requiredInteger, initial: 4, min: 1 }),
    // });

    // schema.wounds = new fields.SchemaField({
    //   value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    //   minTrackSize: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    //   maxTrackSize: new fields.NumberField({ ...requiredInteger, initial: 6, min: 1 }),
    //   initialTrackSize: new fields.NumberField({ ...requiredInteger, initial: 4, min: 1 }),
    // });
    
    // schema.equipment = new fields.SchemaField({
    //   value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    //   minTrackSize: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    //   maxTrackSize: new fields.NumberField({ ...requiredInteger, initial: 6, min: 1 }),
    //   initialTrackSize: new fields.NumberField({ ...requiredInteger, initial: 4, min: 1 }),
    // });

    return schema;
  }
}
