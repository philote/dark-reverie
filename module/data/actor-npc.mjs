import DarkReverieActorBase from './base-actor.mjs';

export default class DarkReverieNPC extends DarkReverieActorBase {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    'DARK_REVERIE.Actor.NPC',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();
    // TODO?
    return schema;
  }
}
