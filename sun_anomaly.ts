// https://farside.ph.utexas.edu/books/Syntaxis/Almagest/node37.html#lt6

import { mod } from "./util.ts";

// deno-fmt-ignore
/** Maps mean longitude to sun anomaly */
const MEAN_LONGITUDE_TO_SUN_ANOMALY: (SunAnomaly | undefined)[] = [
  {equationOfCenter: 0, radialAnomaly: 1.671},,
  {equationOfCenter: 0.068, radialAnomaly: 1.67},,
  {equationOfCenter: 0.136, radialAnomaly: 1.667},,
  {equationOfCenter: 0.204, radialAnomaly: 1.662},,
  {equationOfCenter: 0.272, radialAnomaly: 1.654},,
  {equationOfCenter: 0.339, radialAnomaly: 1.645},,
  {equationOfCenter: 0.406, radialAnomaly: 1.633},,
  {equationOfCenter: 0.473, radialAnomaly: 1.62},,
  {equationOfCenter: 0.538, radialAnomaly: 1.604},,
  {equationOfCenter: 0.604, radialAnomaly: 1.587},,
  {equationOfCenter: 0.668, radialAnomaly: 1.567},,
  {equationOfCenter: 0.731, radialAnomaly: 1.545},,
  {equationOfCenter: 0.794, radialAnomaly: 1.522},,
  {equationOfCenter: 0.855, radialAnomaly: 1.497},,
  {equationOfCenter: 0.916, radialAnomaly: 1.469},,
  {equationOfCenter: 0.975, radialAnomaly: 1.44},,
  {equationOfCenter: 1.033, radialAnomaly: 1.409},,
  {equationOfCenter: 1.089, radialAnomaly: 1.377},,
  {equationOfCenter: 1.145, radialAnomaly: 1.342},,
  {equationOfCenter: 1.198, radialAnomaly: 1.306},,
  {equationOfCenter: 1.251, radialAnomaly: 1.269},,
  {equationOfCenter: 1.301, radialAnomaly: 1.229},,
  {equationOfCenter: 1.35, radialAnomaly: 1.189},,
  {equationOfCenter: 1.397, radialAnomaly: 1.146},,
  {equationOfCenter: 1.443, radialAnomaly: 1.103},,
  {equationOfCenter: 1.487, radialAnomaly: 1.058},,
  {equationOfCenter: 1.528, radialAnomaly: 1.011},,
  {equationOfCenter: 1.568, radialAnomaly: 0.964},,
  {equationOfCenter: 1.606, radialAnomaly: 0.915},,
  {equationOfCenter: 1.642, radialAnomaly: 0.865},,
  {equationOfCenter: 1.676, radialAnomaly: 0.815},,
  {equationOfCenter: 1.707, radialAnomaly: 0.763},,
  {equationOfCenter: 1.737, radialAnomaly: 0.71},,
  {equationOfCenter: 1.764, radialAnomaly: 0.656},,
  {equationOfCenter: 1.789, radialAnomaly: 0.602},,
  {equationOfCenter: 1.812, radialAnomaly: 0.547},,
  {equationOfCenter: 1.833, radialAnomaly: 0.491},,
  {equationOfCenter: 1.851, radialAnomaly: 0.435},,
  {equationOfCenter: 1.867, radialAnomaly: 0.378},,
  {equationOfCenter: 1.881, radialAnomaly: 0.321},,
  {equationOfCenter: 1.893, radialAnomaly: 0.263},,
  {equationOfCenter: 1.902, radialAnomaly: 0.205},,
  {equationOfCenter: 1.909, radialAnomaly: 0.147},,
  {equationOfCenter: 1.913, radialAnomaly: 0.089},,
  {equationOfCenter: 1.915, radialAnomaly: 0.03},,
  {equationOfCenter: 1.915, radialAnomaly: -0.028},,
  {equationOfCenter: 1.912, radialAnomaly: -0.086},,
  {equationOfCenter: 1.907, radialAnomaly: -0.144},,
  {equationOfCenter: 1.9, radialAnomaly: -0.202},,
  {equationOfCenter: 1.891, radialAnomaly: -0.26},,
  {equationOfCenter: 1.879, radialAnomaly: -0.317},,
  {equationOfCenter: 1.865, radialAnomaly: -0.374},,
  {equationOfCenter: 1.849, radialAnomaly: -0.431},,
  {equationOfCenter: 1.83, radialAnomaly: -0.486},,
  {equationOfCenter: 1.809, radialAnomaly: -0.542},,
  {equationOfCenter: 1.787, radialAnomaly: -0.596},,
  {equationOfCenter: 1.762, radialAnomaly: -0.65},,
  {equationOfCenter: 1.735, radialAnomaly: -0.703},,
  {equationOfCenter: 1.705, radialAnomaly: -0.755},,
  {equationOfCenter: 1.674, radialAnomaly: -0.806},,
  {equationOfCenter: 1.641, radialAnomaly: -0.856},,
  {equationOfCenter: 1.606, radialAnomaly: -0.906},,
  {equationOfCenter: 1.569, radialAnomaly: -0.954},,
  {equationOfCenter: 1.53, radialAnomaly: -1.001},,
  {equationOfCenter: 1.49, radialAnomaly: -1.046},,
  {equationOfCenter: 1.447, radialAnomaly: -1.091},,
  {equationOfCenter: 1.403, radialAnomaly: -1.134},,
  {equationOfCenter: 1.358, radialAnomaly: -1.175},,
  {equationOfCenter: 1.31, radialAnomaly: -1.216},,
  {equationOfCenter: 1.261, radialAnomaly: -1.254},,
  {equationOfCenter: 1.211, radialAnomaly: -1.292},,
  {equationOfCenter: 1.16, radialAnomaly: -1.327},,
  {equationOfCenter: 1.107, radialAnomaly: -1.362},,
  {equationOfCenter: 1.052, radialAnomaly: -1.394},,
  {equationOfCenter: 0.997, radialAnomaly: -1.425},,
  {equationOfCenter: 0.94, radialAnomaly: -1.454},,
  {equationOfCenter: 0.882, radialAnomaly: -1.482},,
  {equationOfCenter: 0.824, radialAnomaly: -1.507},,
  {equationOfCenter: 0.764, radialAnomaly: -1.531},,
  {equationOfCenter: 0.703, radialAnomaly: -1.553},,
  {equationOfCenter: 0.642, radialAnomaly: -1.574},,
  {equationOfCenter: 0.58, radialAnomaly: -1.592},,
  {equationOfCenter: 0.517, radialAnomaly: -1.608},,
  {equationOfCenter: 0.454, radialAnomaly: -1.623},,
  {equationOfCenter: 0.39, radialAnomaly: -1.636},,
  {equationOfCenter: 0.326, radialAnomaly: -1.647},,
  {equationOfCenter: 0.261, radialAnomaly: -1.655},,
  {equationOfCenter: 0.196, radialAnomaly: -1.662},,
  {equationOfCenter: 0.131, radialAnomaly: -1.667},,
  {equationOfCenter: 0.065, radialAnomaly: -1.67},,
  {equationOfCenter: 0, radialAnomaly: -1.671},,
  {equationOfCenter: -0.065, radialAnomaly: -1.67},,
  {equationOfCenter: -0.131, radialAnomaly: -1.667},,
  {equationOfCenter: -0.196, radialAnomaly: -1.662},,
  {equationOfCenter: -0.261, radialAnomaly: -1.655},,
  {equationOfCenter: -0.326, radialAnomaly: -1.647},,
  {equationOfCenter: -0.39, radialAnomaly: -1.636},,
  {equationOfCenter: -0.454, radialAnomaly: -1.623},,
  {equationOfCenter: -0.517, radialAnomaly: -1.608},,
  {equationOfCenter: -0.58, radialAnomaly: -1.592},,
  {equationOfCenter: -0.642, radialAnomaly: -1.574},,
  {equationOfCenter: -0.703, radialAnomaly: -1.553},,
  {equationOfCenter: -0.764, radialAnomaly: -1.531},,
  {equationOfCenter: -0.824, radialAnomaly: -1.507},,
  {equationOfCenter: -0.882, radialAnomaly: -1.482},,
  {equationOfCenter: -0.94, radialAnomaly: -1.454},,
  {equationOfCenter: -0.997, radialAnomaly: -1.425},,
  {equationOfCenter: -1.052, radialAnomaly: -1.394},,
  {equationOfCenter: -1.107, radialAnomaly: -1.362},,
  {equationOfCenter: -1.16, radialAnomaly: -1.327},,
  {equationOfCenter: -1.211, radialAnomaly: -1.292},,
  {equationOfCenter: -1.261, radialAnomaly: -1.254},,
  {equationOfCenter: -1.31, radialAnomaly: -1.216},,
  {equationOfCenter: -1.358, radialAnomaly: -1.175},,
  {equationOfCenter: -1.403, radialAnomaly: -1.134},,
  {equationOfCenter: -1.447, radialAnomaly: -1.091},,
  {equationOfCenter: -1.49, radialAnomaly: -1.046},,
  {equationOfCenter: -1.53, radialAnomaly: -1.001},,
  {equationOfCenter: -1.569, radialAnomaly: -0.954},,
  {equationOfCenter: -1.606, radialAnomaly: -0.906},,
  {equationOfCenter: -1.641, radialAnomaly: -0.856},,
  {equationOfCenter: -1.674, radialAnomaly: -0.806},,
  {equationOfCenter: -1.705, radialAnomaly: -0.755},,
  {equationOfCenter: -1.735, radialAnomaly: -0.703},,
  {equationOfCenter: -1.762, radialAnomaly: -0.65},,
  {equationOfCenter: -1.787, radialAnomaly: -0.596},,
  {equationOfCenter: -1.809, radialAnomaly: -0.542},,
  {equationOfCenter: -1.83, radialAnomaly: -0.486},,
  {equationOfCenter: -1.849, radialAnomaly: -0.431},,
  {equationOfCenter: -1.865, radialAnomaly: -0.374},,
  {equationOfCenter: -1.879, radialAnomaly: -0.317},,
  {equationOfCenter: -1.891, radialAnomaly: -0.26},,
  {equationOfCenter: -1.9, radialAnomaly: -0.202},,
  {equationOfCenter: -1.907, radialAnomaly: -0.144},,
  {equationOfCenter: -1.912, radialAnomaly: -0.086},,
  {equationOfCenter: -1.915, radialAnomaly: -0.028},,
  {equationOfCenter: -1.915, radialAnomaly: 0.03},,
  {equationOfCenter: -1.913, radialAnomaly: 0.089},,
  {equationOfCenter: -1.909, radialAnomaly: 0.147},,
  {equationOfCenter: -1.902, radialAnomaly: 0.205},,
  {equationOfCenter: -1.893, radialAnomaly: 0.263},,
  {equationOfCenter: -1.881, radialAnomaly: 0.321},,
  {equationOfCenter: -1.867, radialAnomaly: 0.378},,
  {equationOfCenter: -1.851, radialAnomaly: 0.435},,
  {equationOfCenter: -1.833, radialAnomaly: 0.491},,
  {equationOfCenter: -1.812, radialAnomaly: 0.547},,
  {equationOfCenter: -1.789, radialAnomaly: 0.602},,
  {equationOfCenter: -1.764, radialAnomaly: 0.656},,
  {equationOfCenter: -1.737, radialAnomaly: 0.71},,
  {equationOfCenter: -1.707, radialAnomaly: 0.763},,
  {equationOfCenter: -1.676, radialAnomaly: 0.815},,
  {equationOfCenter: -1.642, radialAnomaly: 0.865},,
  {equationOfCenter: -1.606, radialAnomaly: 0.915},,
  {equationOfCenter: -1.568, radialAnomaly: 0.964},,
  {equationOfCenter: -1.528, radialAnomaly: 1.011},,
  {equationOfCenter: -1.487, radialAnomaly: 1.058},,
  {equationOfCenter: -1.443, radialAnomaly: 1.103},,
  {equationOfCenter: -1.397, radialAnomaly: 1.146},,
  {equationOfCenter: -1.35, radialAnomaly: 1.189},,
  {equationOfCenter: -1.301, radialAnomaly: 1.229},,
  {equationOfCenter: -1.251, radialAnomaly: 1.269},,
  {equationOfCenter: -1.198, radialAnomaly: 1.306},,
  {equationOfCenter: -1.145, radialAnomaly: 1.342},,
  {equationOfCenter: -1.089, radialAnomaly: 1.377},,
  {equationOfCenter: -1.033, radialAnomaly: 1.409},,
  {equationOfCenter: -0.975, radialAnomaly: 1.44},,
  {equationOfCenter: -0.916, radialAnomaly: 1.469},,
  {equationOfCenter: -0.855, radialAnomaly: 1.497},,
  {equationOfCenter: -0.794, radialAnomaly: 1.522},,
  {equationOfCenter: -0.731, radialAnomaly: 1.545},,
  {equationOfCenter: -0.668, radialAnomaly: 1.567},,
  {equationOfCenter: -0.604, radialAnomaly: 1.587},,
  {equationOfCenter: -0.538, radialAnomaly: 1.604},,
  {equationOfCenter: -0.473, radialAnomaly: 1.62},,
  {equationOfCenter: -0.406, radialAnomaly: 1.633},,
  {equationOfCenter: -0.339, radialAnomaly: 1.645},,
  {equationOfCenter: -0.272, radialAnomaly: 1.654},,
  {equationOfCenter: -0.204, radialAnomaly: 1.662},,
  {equationOfCenter: -0.136, radialAnomaly: 1.667},,
  {equationOfCenter: -0.068, radialAnomaly: 1.67},,
];

/** Sun anomaly data */
export class SunAnomaly {
  /** Equation of center referenced as q */
  readonly equationOfCenter: number;

  /** Radial anomaly referenced as ζ or zeta */
  readonly radialAnomaly: number;

  constructor(
    equationOfCenter: number,
    radialAnomaly: number,
  ) {
    this.equationOfCenter = equationOfCenter;
    this.radialAnomaly = radialAnomaly;
  }

  /** `SunAnomaly` for the given mean longitude */
  static from(meanAnomaly: number): SunAnomaly {
    if (!(0 <= meanAnomaly && meanAnomaly < 360)) {
      throw RangeError("The `meanLongitude` must be in [0, 360)");
    }

    // Excess above closest even number - potentially 0
    const remainder = meanAnomaly % 2;

    // Bounding closest even numbers
    const below = mod(meanAnomaly - remainder, 360);
    const above = mod(below + 2, 360);

    // Ratio closeness to bounding even numbers
    const aboveRatio = remainder / 2;
    const belowRatio = 1 - aboveRatio;

    // Bounding Sun anomalies
    const {
      equationOfCenter: belowEquationOfCenter,
      radialAnomaly: belowRadialAnomaly,
    } = MEAN_LONGITUDE_TO_SUN_ANOMALY[below]!;
    const {
      equationOfCenter: aboveEquationOfCenter,
      radialAnomaly: aboveRadialAnomaly,
    } = MEAN_LONGITUDE_TO_SUN_ANOMALY[above]!;

    // Linear interpolation of `SunAnomaly`
    return {
      equationOfCenter: belowRatio * belowEquationOfCenter +
        aboveRatio * aboveEquationOfCenter,
      radialAnomaly: belowRatio * belowRadialAnomaly +
        aboveRatio * aboveRadialAnomaly,
    };
  }
}
