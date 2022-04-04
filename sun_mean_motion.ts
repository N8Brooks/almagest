// https://farside.ph.utexas.edu/books/Syntaxis/Almagest/node37.html#lt5

import { mod } from "./util.ts";

/** The unsigned magnitudes of `SunMeanMotion` */
interface AbsSunMeanMotion {
  /** Positive mean longitude for a place digit referenced as Δƛ */
  absDeltaMeanLongitude: number;

  /** Positive mean anomaly for a place digit referenced as ΔM */
  absDeltaMeanAnomaly: number;
}

/** Sun mean longitude at epoch */
const MEAN_LONGITUDE_0 = 280.458;

/** Sun mean anomaly at epoch */
const MEAN_ANOMALY_0 = 357.588;

/** Maps place value of delta t to sun mean motion */
const DELTA_T_TO_SUN_MEAN_MOTION: Record<number, AbsSunMeanMotion[]> = {
  "-1": [
    { absDeltaMeanLongitude: 0, absDeltaMeanAnomaly: 0 },
    { absDeltaMeanLongitude: 0.099, absDeltaMeanAnomaly: 0.099 },
    { absDeltaMeanLongitude: 0.197, absDeltaMeanAnomaly: 0.197 },
    { absDeltaMeanLongitude: 0.296, absDeltaMeanAnomaly: 0.296 },
    { absDeltaMeanLongitude: 0.394, absDeltaMeanAnomaly: 0.394 },
    { absDeltaMeanLongitude: 0.493, absDeltaMeanAnomaly: 0.493 },
    { absDeltaMeanLongitude: 0.591, absDeltaMeanAnomaly: 0.591 },
    { absDeltaMeanLongitude: 0.690, absDeltaMeanAnomaly: 0.690 },
    { absDeltaMeanLongitude: 0.789, absDeltaMeanAnomaly: 0.788 },
    { absDeltaMeanLongitude: 0.887, absDeltaMeanAnomaly: 0.887 },
  ],
  0: [
    { absDeltaMeanLongitude: 0, absDeltaMeanAnomaly: 0 },
    { absDeltaMeanLongitude: 0.986, absDeltaMeanAnomaly: 0.986 },
    { absDeltaMeanLongitude: 1.971, absDeltaMeanAnomaly: 1.971 },
    { absDeltaMeanLongitude: 2.957, absDeltaMeanAnomaly: 2.957 },
    { absDeltaMeanLongitude: 3.943, absDeltaMeanAnomaly: 3.942 },
    { absDeltaMeanLongitude: 4.928, absDeltaMeanAnomaly: 4.928 },
    { absDeltaMeanLongitude: 5.914, absDeltaMeanAnomaly: 5.914 },
    { absDeltaMeanLongitude: 6.9, absDeltaMeanAnomaly: 6.899 },
    { absDeltaMeanLongitude: 7.885, absDeltaMeanAnomaly: 7.885 },
    { absDeltaMeanLongitude: 8.871, absDeltaMeanAnomaly: 8.87 },
  ],
  1: [
    { absDeltaMeanLongitude: 0, absDeltaMeanAnomaly: 0 },
    { absDeltaMeanLongitude: 9.856, absDeltaMeanAnomaly: 9.856 },
    { absDeltaMeanLongitude: 19.713, absDeltaMeanAnomaly: 19.712 },
    { absDeltaMeanLongitude: 29.569, absDeltaMeanAnomaly: 29.568 },
    { absDeltaMeanLongitude: 39.426, absDeltaMeanAnomaly: 39.424 },
    { absDeltaMeanLongitude: 49.282, absDeltaMeanAnomaly: 49.28 },
    { absDeltaMeanLongitude: 59.139, absDeltaMeanAnomaly: 59.136 },
    { absDeltaMeanLongitude: 68.995, absDeltaMeanAnomaly: 68.992 },
    { absDeltaMeanLongitude: 78.852, absDeltaMeanAnomaly: 78.848 },
    { absDeltaMeanLongitude: 88.708, absDeltaMeanAnomaly: 88.704 },
  ],
  2: [
    { absDeltaMeanLongitude: 0, absDeltaMeanAnomaly: 0 },
    { absDeltaMeanLongitude: 98.565, absDeltaMeanAnomaly: 98.56 },
    { absDeltaMeanLongitude: 197.129, absDeltaMeanAnomaly: 197.12 },
    { absDeltaMeanLongitude: 295.694, absDeltaMeanAnomaly: 295.68 },
    { absDeltaMeanLongitude: 34.259, absDeltaMeanAnomaly: 34.24 },
    { absDeltaMeanLongitude: 132.824, absDeltaMeanAnomaly: 132.8 },
    { absDeltaMeanLongitude: 231.388, absDeltaMeanAnomaly: 231.36 },
    { absDeltaMeanLongitude: 329.953, absDeltaMeanAnomaly: 329.92 },
    { absDeltaMeanLongitude: 68.518, absDeltaMeanAnomaly: 68.48 },
    { absDeltaMeanLongitude: 167.083, absDeltaMeanAnomaly: 167.04 },
  ],
  3: [
    { absDeltaMeanLongitude: 0, absDeltaMeanAnomaly: 0 },
    { absDeltaMeanLongitude: 265.647, absDeltaMeanAnomaly: 265.6 },
    { absDeltaMeanLongitude: 171.295, absDeltaMeanAnomaly: 171.2 },
    { absDeltaMeanLongitude: 76.942, absDeltaMeanAnomaly: 76.801 },
    { absDeltaMeanLongitude: 342.589, absDeltaMeanAnomaly: 342.401 },
    { absDeltaMeanLongitude: 248.237, absDeltaMeanAnomaly: 248.001 },
    { absDeltaMeanLongitude: 153.884, absDeltaMeanAnomaly: 153.601 },
    { absDeltaMeanLongitude: 59.531, absDeltaMeanAnomaly: 59.202 },
    { absDeltaMeanLongitude: 325.179, absDeltaMeanAnomaly: 324.802 },
    { absDeltaMeanLongitude: 230.826, absDeltaMeanAnomaly: 230.402 },
  ],
  4: [
    { absDeltaMeanLongitude: 0, absDeltaMeanAnomaly: 0 },
    { absDeltaMeanLongitude: 136.474, absDeltaMeanAnomaly: 136.002 },
    { absDeltaMeanLongitude: 272.947, absDeltaMeanAnomaly: 272.005 },
    { absDeltaMeanLongitude: 49.421, absDeltaMeanAnomaly: 48.007 },
    { absDeltaMeanLongitude: 185.894, absDeltaMeanAnomaly: 184.01 },
    { absDeltaMeanLongitude: 322.367, absDeltaMeanAnomaly: 320.012 },
    { absDeltaMeanLongitude: 98.841, absDeltaMeanAnomaly: 96.015 },
    { absDeltaMeanLongitude: 235.315, absDeltaMeanAnomaly: 232.017 },
    { absDeltaMeanLongitude: 11.788, absDeltaMeanAnomaly: 8.02 },
    { absDeltaMeanLongitude: 148.262, absDeltaMeanAnomaly: 144.022 },
  ],
};

/** The lowest unsupported number for delta t */
const EXCLUSIVE_MAX_DELTA_T = Math.pow(
  10,
  Math.max(
    ...Object.keys(DELTA_T_TO_SUN_MEAN_MOTION).map((key) => +key),
  ) + 1,
);

/** The scientific `place`th digit for positive `n` */
function calculatePlaceDigit(n: number, place: number): number {
  if (n < 0) {
    throw RangeError("`n` must be greater than 0");
  }

  return Math.floor(n * 10 ** -place % 10);
}

/** The values representing the Sun's mean motion */
export class SunMeanMotion {
  /** Mean longitude referenced as ƛ */
  readonly meanLongitude: number;

  /** Mean anomaly referenced as M */
  readonly meanAnomaly: number;

  constructor(meanLongitude: number, meanAnomaly: number) {
    this.meanLongitude = meanLongitude;
    this.meanAnomaly = meanAnomaly;
  }

  /** Construct a `SunAnomaly` from `deltaT` */
  static from(deltaT: number): SunMeanMotion {
    if (isNaN(deltaT)) {
      throw RangeError("`deltaT` cannot be `NaN`");
    }

    const deltaTSign = Math.sign(deltaT);
    const absDeltaT = Math.abs(deltaT);

    if (absDeltaT >= EXCLUSIVE_MAX_DELTA_T) {
      throw new RangeError(
        `Absolute \`deltaT\` must be strictly less than ${EXCLUSIVE_MAX_DELTA_T}`,
      );
    }

    const {
      absDeltaMeanLongitude,
      absDeltaMeanAnomaly,
    } = Object.entries(DELTA_T_TO_SUN_MEAN_MOTION)
      .map(([place, digitToSunMeanMotions]) => {
        const digit = calculatePlaceDigit(absDeltaT, +place);
        return digitToSunMeanMotions[digit];
      })
      .reduce((a, b) => ({
        absDeltaMeanLongitude: a.absDeltaMeanLongitude +
          b.absDeltaMeanLongitude,
        absDeltaMeanAnomaly: a.absDeltaMeanAnomaly + b.absDeltaMeanAnomaly,
      }));

    return new SunMeanMotion(
      mod(MEAN_LONGITUDE_0 + deltaTSign * absDeltaMeanLongitude, 360),
      mod(MEAN_ANOMALY_0 + deltaTSign * absDeltaMeanAnomaly, 360),
    );
  }
}
