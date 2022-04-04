import { SunMeanMotion } from "./sun_mean_motion.ts";
import { assertAlmostEquals } from "./test_deps.ts";

Deno.test("from", async (t) => {
  await t.step("May 5, 2005", () => {
    const deltaT = 1950.5;
    const {
      meanLongitude,
      meanAnomaly,
    } = SunMeanMotion.from(deltaT);
    assertAlmostEquals(meanLongitude, 42.963);
    assertAlmostEquals(meanAnomaly, 120.001);
  });

  await t.step("December 25, 1800", () => {
    const deltaT = -72690.5;
    const {
      meanLongitude,
      meanAnomaly,
    } = SunMeanMotion.from(deltaT);
    assertAlmostEquals(meanLongitude, 273.259);
    assertAlmostEquals(meanAnomaly, 353.814);
  });
});
