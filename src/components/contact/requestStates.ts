const requestStates = {
    INITIAL_REQUEST_STATE: {
      processing: false,
      success: false,
      fail: false,
    },
    PROCESS_REQUEST_STATE: {
      processing: true,
      success: false,
      fail: false,
    },
    SUCCESS_REQUEST_STATE: {
      processing: false,
      success: true,
      fail: false,
    },
    FAIL_REQUEST_STATE: {
      processing: false,
      success: false,
      fail: true,
    }
};

  export default requestStates;