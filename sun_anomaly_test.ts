import { SunAnomaly } from "./sun_anomaly.ts";
import { assertAlmostEquals } from "./test_deps.ts";

Deno.test("from", async (t) => {
  await t.step("May 5, 2005", () => {
    const meanAnomaly = 120;
    const { equationOfCenter, radialAnomaly } = SunAnomaly.from(meanAnomaly);
    assertAlmostEquals(equationOfCenter, 1.641);
    assertAlmostEquals(radialAnomaly, -0.856);
  });

  await t.step("December 25, 1800", () => {
    const meanAnomaly = 120;
    const { equationOfCenter, radialAnomaly } = SunAnomaly.from(meanAnomaly);
    assertAlmostEquals(equationOfCenter, 1.641);
    assertAlmostEquals(radialAnomaly, -0.856);
  });

  await t.step("linear interpolation", () => {
    const meanAnomaly = 354;
    const { equationOfCenter, radialAnomaly } = SunAnomaly.from(meanAnomaly);
    assertAlmostEquals(equationOfCenter, -0.204);
    assertAlmostEquals(radialAnomaly, 1.662);
  });
});
