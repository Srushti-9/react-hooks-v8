import { useReducer } from 'react';

// logic to make sure the number is between 0 and a max
const limit100 = (num, max) => (num < 0 ? 0 : num > max ? max : num);

const step = 20;

// reducer is a function that takes the current state and an action as arguments and returns a new state. It handles various actions (INCREMENT_H, DECREMENT_H, INCREMENT_S, DECREMENT_S, INCREMENT_L, DECREMENT_L) to update the state based on the action type.
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_H':
      return Object.assign({}, state, { h: (state.h + step) % 360 });
    case 'DECREMENT_H':
      return Object.assign({}, state, { h: (state.h - step) % 360 });
    case 'INCREMENT_S':
      return Object.assign({}, state, { s: limit100(state.s + step, 100) });
    case 'DECREMENT_S':
      return Object.assign({}, state, { s: limit100(state.s - step, 100) });
    case 'INCREMENT_L':
      return Object.assign({}, state, { l: limit100(state.l + step, 100) });
    case 'DECREMENT_L':
      return Object.assign({}, state, { l: limit100(state.l - step, 100) });
    default:
      return state;
  }
};

/* --The first parameter (h + 180) % 360 calculates the hue value (h) with an additional offset of 180 degrees to create a        complementary color. This ensures that the text color contrasts well with the background color.
-- The second parameter ${s}% represents the saturation value (s) as a percentage.
-- The third parameter ${(l + 50) % 100}% calculates the lightness value (l) with an additional offset of 50 units to adjust the brightness. The modulo operation ensures that the lightness value remains within the range of 0 to 100. */

const UseReducerComponent = () => {
  const [{ h, s, l }, dispatch] = useReducer(reducer, { h: 50, s: 50, l: 50 });
  return (
    <div className="page use-reducer">
      <h1
        className="readable-banner"
        style={{
          color: `hsl(${(h + 180) % 360}, ${s}%, ${(l + 50) % 100}%)`,
          backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
        }}
      >
        This text should always be pretty close to readable
      </h1>
      <div class="btn-groups">
        <div className="btn-group">
          <span class="btn-label">Hue</span>
          <button onClick={() => dispatch({ type: 'INCREMENT_H' })}>➕</button>
          <button onClick={() => dispatch({ type: 'DECREMENT_H' })}>➖</button>
        </div>
        <div className="btn-group">
          <span class="btn-label">Saturation</span>
          <button onClick={() => dispatch({ type: 'INCREMENT_S' })}>➕</button>
          <button onClick={() => dispatch({ type: 'DECREMENT_S' })}>➖</button>
        </div>
        <div className="btn-group">
          <span class="btn-label">Lightness</span>
          <button onClick={() => dispatch({ type: 'INCREMENT_L' })}>➕</button>
          <button onClick={() => dispatch({ type: 'DECREMENT_L' })}>➖</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerComponent;
