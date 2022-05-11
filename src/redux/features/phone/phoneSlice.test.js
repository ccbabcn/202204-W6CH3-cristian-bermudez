import phoneReducer, {
  addNumberActionCreator,
  callStatusToggleActionCreator as onCallStatus,
  deleteNumberActionCreator,
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

  describe("When its onCallStatus it's dispatched with a payload tru eand the oncall property on the state it's false", () => {
    test("Then it should return a new state with the oncall property as true", () => {
      const initialPhoneState = { numbers: [], onCall: false };
      const expectedPhoneState = { numbers: [], onCall: true };
      const receivedOnCallStatus = true;

      const toggleAction = onCallStatus(receivedOnCallStatus);

      const newPhoneState = phoneReducer(initialPhoneState, toggleAction);

      expect(newPhoneState).toEqual(expectedPhoneState);
    });
  });

  describe("When its deleteNumber it's dispatched and the numbers property on the state it's [1,2,3,4,5]", () => {
    test("Then it should return a new state with the numbers property as [1,2,3,4]", () => {
      const initialPhoneState = { numbers: [1, 2, 3, 4, 5], onCall: false };
      const expectedPhoneState = { numbers: [1, 2, 3, 4], onCall: false };

      const deleteAction = deleteNumberActionCreator();

      const newPhoneState = phoneReducer(initialPhoneState, deleteAction);

      expect(newPhoneState).toEqual(expectedPhoneState);
    });
  });
});
