// https://farside.ph.utexas.edu/books/Syntaxis/Almagest/node34.html

import { SunAnomaly } from "./sun_anomaly.ts";
import { SunMeanMotion } from "./sun_mean_motion.ts";
import { mod } from "./util.ts";

/** Difference between JavaScript date and Julian Date */
const JULIAN_DATE_OFFSET_IN_DAYS = 2_440_587.5;

/** One twenty-four hour day in milliseconds */
const ONE_DAY_IN_MS = 86_400_000;

const ONE_TENTH_OF_A_DAY_IN_MINUTES = 1_440;

/** Used for delta t calculation */
const T_0 = 2_451_545;

/** Earth and the Sun positioning for the reference date */
export class Almagest {
  /** Fractional Julian days for the reference date */
  readonly t: number;

  /** Almagest reference for the current time */
  constructor();

  /** Almagest reference for the given value, date string, or date object */
  constructor(value: string | number | Date);

  /** Almagest reference for the given time */
  constructor(
    year: number,
    month: number,
    date?: number | undefined,
    hours?: number | undefined,
    minutes?: number | undefined,
    seconds?: number | undefined,
    ms?: number | undefined,
  );

  constructor() {
    const date = new Date(...arguments as unknown as []); // ???
    this.t = date.getTime() / ONE_DAY_IN_MS -
      date.getTimezoneOffset() / ONE_TENTH_OF_A_DAY_IN_MINUTES +
      JULIAN_DATE_OFFSET_IN_DAYS;
  }

  /** Ecliptic longitude referenced as λ */
  eclipticLongitude(): number {
    const deltaT = this.t - T_0;
    const { meanLongitude, meanAnomaly } = SunMeanMotion.from(deltaT);
    const { equationOfCenter } = SunAnomaly.from(meanAnomaly);
    return mod(meanLongitude + equationOfCenter, 360);
  }
}
