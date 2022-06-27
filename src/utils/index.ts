const encode = (data: { [x: string]: string | number | boolean }) =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const validateEmail = (value: string) => {
  const regexPattern =
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return regexPattern.test(value);
};

const validateName = (value: string) => {
  const regexPattern = /^\D*$/i;
  const namevalue = value.trim();
  return namevalue ? regexPattern.test(value) : false;
};

export { encode, validateEmail, validateName };
