const findDeltaOfDates = (date) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = Date.now();
    const secondDate = new Date(date).getTime();

    const firstDateWithoutTime = new Date(firstDate);
    firstDateWithoutTime.setHours(0, 0, 0, 0);
    const secondDateWithoutTime = new Date(secondDate);
    secondDateWithoutTime.setHours(0, 0, 0, 0);

    const deltaDays = Math.round(
        Math.abs((secondDateWithoutTime - firstDateWithoutTime) / oneDay),
    );
    return deltaDays;
};

export default findDeltaOfDates;
