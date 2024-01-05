import { expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useCount } from ".";

test("useData", async () => {
  const { result } = renderHook(useCount);

  expect(result.current.state).toBe(0);
  expect(result.current.addAge()).resolves.toBe(1);
});
