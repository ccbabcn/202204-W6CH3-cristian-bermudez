import phoneReducer, { addNumberActionCreator } from "./phoneSlice";

describe("given phoneReducer", () => {
  describe("When its addNumberActionCreator receives the number 5 and numbers initial state it's an empty array", () => {
    test("Then it should return the initial state with the number 5 added on the array", () => {
      const initialPhoneState = { numbers: [], onCall: false };
      const receivedNumber = 5;
      const addAction = addNumberActionCreator(receivedNumber);

      const newPhoneState = phoneReducer(initialPhoneState, addAction);

      const expectedPhoneState = { numbers: [5], onCall: false };

      expect(newPhoneState).toEqual(expectedPhoneState);
    });
  });
});
