import React, { useState } from 'react';

const useInputTouched = initialValue => {
  const [state, setState] = useState(() => {
    if (typeof initialValue === 'function') {
      return initialValue();
    }
    return initialValue;
  });
  function handleFocus(e: any) {
    try {
      setState({ ...state, [e.target.name]: true });
    } catch (ex) {
      console.error(ex);
    }
  }
  function handleBlur(e: any) {
    try {
      setState({
        ...state,
        [e.target.name]: e.target.value.trim() === '' ? false : true,
      });
    } catch (ex) {
      console.error(ex);
    }
  }
  function resetTouchedInputs() {
    setState(initialValue);
  }
  return {
    touchedInputs: state,
    handleFocus,
    handleBlur,
    resetTouchedInputs,
  };
};

export default useInputTouched;
