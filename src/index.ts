export enum DURATION_UNIT {
  MILLISECOND = 1,
  SECOND = 1_000,
  MINUTE = 60_000,
  HOUR = 3_600_000,
}

export default (duration = 0, durationUnit = DURATION_UNIT.MILLISECOND) =>
  new Promise((resolve) => setTimeout(resolve, duration * durationUnit));
