const formatDate = reqTime => {
  const dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  //Check if valid date format
  if (isNaN(reqTime) && isNaN(new Date(reqTime))) {
    return { unixTime: null, naturalTime: null, option: "3" };
  }

  // Natural Time
  if (isNaN(reqTime)) {
    const setUnix = new Date(reqTime);
    const unixTime = setUnix.getTime() / 1000;
    const naturalTime = setUnix.toLocaleDateString("en-us", dateFormat);
    return { unixTime, naturalTime, option: "1" };
  }

  // Unix Time
  if (!isNaN(reqTime)) {
    const unixTime = parseInt(reqTime);
    const naturalTime = new Date(reqTime * 1000).toLocaleDateString(
      "en-us",
      dateFormat
    );
    return { unixTime, naturalTime, option: "2" };
  }
};

module.exports = formatDate;
