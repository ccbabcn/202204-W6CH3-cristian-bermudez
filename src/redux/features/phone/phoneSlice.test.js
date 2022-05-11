import phoneReducer, {
  addNumberActionCreator,
  callStatusToggleActionCreator,
} from "./phoneSlice";

describe("given phoneReducer", () => {
  describe("When its addNumberActionCreator receives the number 5 and numbers initial state it's an empty array", () => {
    test("Then it should return the initial state with the number 5 added on the array", () => {
      const initialPhoneState = { numbers: [], onCall: false };
      const expectedPhoneState = { numbers: [5], onCall: false };
      const receivedNumber = 5;

      const addAction = addNumberActionCreator(receivedNumber);

      const newPhoneState = phoneReducer(initialPhoneState, addAction);

      expect(newPhoneState).toEqual(expectedPhoneState);
    });
  });

  describe("When its callStatusToggle it's dispatched and the oncall property on the state it's false", () => {
    test("Then it should return a new state with the oncall property as true", () => {
      const initialPhoneState = { numbers: [], onCall: false };
      const expectedPhoneState = { numbers: [], onCall: true };

      const toggleAction = callStatusToggleActionCreator();

      const newPhoneState = phoneReducer(initialPhoneState, toggleAction);

      expect(newPhoneState).toEqual(expectedPhoneState);
    });
  });
});
