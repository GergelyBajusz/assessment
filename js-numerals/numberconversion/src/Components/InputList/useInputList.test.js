import { renderHook, act } from "@testing-library/react-hooks";
import { useInputList } from "./useInputList";

/* 7       === seven
42      === forty-two
1999    === one thousand nine hundred and ninety-nine
2001    === two thousand and one
17999   === seventeen thousand nine hundred and ninety-nine
342251  === three hundred and forty-two thousand two hundred and fifty-one
1300420 === one million three hundred thousand four hundred and twenty */

describe("when rendered", () => {
  it("returns transformed value", () => {
    const event = { target: { value: 7 } };
    const { result } = renderHook(() => useInputList());
    act(() => result.current.handleInputChange(event));
    expect(result.current.outputValue).toBe("seven");
  });
  it("returns transformed value", () => {
    const event = { target: { value: 42 } };
    const { result } = renderHook(() => useInputList());
    act(() => result.current.handleInputChange(event));
    expect(result.current.outputValue).toBe("forty-two");
  });
  it("returns transformed value", () => {
    const event = { target: { value: 1999 } };
    const { result } = renderHook(() => useInputList());
    act(() => result.current.handleInputChange(event));
    expect(result.current.outputValue).toBe(
      "one thousand nine hundred and ninety-nine"
    );
  });
  it("returns transformed value", () => {
    const event = { target: { value: 2001 } };
    const { result } = renderHook(() => useInputList());
    act(() => result.current.handleInputChange(event));
    expect(result.current.outputValue).toBe("two thousand and one");
  });
  it("returns transformed value", () => {
    const event = { target: { value: 17999 } };
    const { result } = renderHook(() => useInputList());
    act(() => result.current.handleInputChange(event));
    expect(result.current.outputValue).toBe(
      "seventeen thousand nine hundred and ninety-nine"
    );
  });
  it("returns transformed value", () => {
    const event = { target: { value: 342251 } };
    const { result } = renderHook(() => useInputList());
    act(() => result.current.handleInputChange(event));
    expect(result.current.outputValue).toBe(
      "three hundred and forty-two thousand two hundred and fifty-one"
    );
  });
  it("returns transformed value", () => {
    const event = { target: { value: 1300420 } };
    const { result } = renderHook(() => useInputList());
    act(() => result.current.handleInputChange(event));
    expect(result.current.outputValue).toBe(
      "one million three hundred thousand four hundred and twenty"
    );
  });
});
