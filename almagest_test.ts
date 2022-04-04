import { Almagest } from "./almagest.ts";
import { assertAlmostEquals } from "./test_deps.ts";

Deno.test("#t", async (t) => {
  await t.step("June 10, 1992 12:00 days", () => {
    const almagest = new Almagest(1992, 5, 10, 12);
    assertAlmostEquals(almagest.t, 2448784);
  });

  await t.step("June 10, 1992 days", () => {
    const almagest = new Almagest(1992, 5, 10);
    assertAlmostEquals(almagest.t, 2448783.5);
  });

  await t.step("January 18, 1824 12:00 days", () => {
    const almagest = new Almagest(1824, 0, 18, 12);
    // ? Is this actually a floating point error
    assertAlmostEquals(almagest.t, 2387279, 1e-3);
  });

  await t.step("January 18, 1824 days", () => {
    const almagest = new Almagest(1824, 0, 18);
    // ? Is this actually a floating point error
    assertAlmostEquals(almagest.t, 2387278.5, 1e-3);
  });
});

Deno.test("eclipticLongitude", async (t) => {
  await t.step("May 5, 2005", () => {
    const almagest = new Almagest(2005, 4, 5);
    const actual = almagest.eclipticLongitude();
    const expected = 44.6039825;
    assertAlmostEquals(actual, expected);
  });

  await t.step("December 25, 1800", () => {
    const almagest = new Almagest(1800, 11, 25);
    const actual = almagest.eclipticLongitude();
    const expected = 273.151042;
    assertAlmostEquals(actual, expected);
  });
});
