/**
 * @jest-environment jsdom
 */

import findDeltaOfDates from "./findDeltaOfDates";


describe('findDeltaOfDates', () => {
  it('should calculate the difference in days for future date', () => {
    const futureDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days in the future
    const deltaDays = findDeltaOfDates(futureDate);
    expect(deltaDays).toBe(3);
  });

  it('should calculate the difference in days for past date', () => {
    const pastDate = new Date().getTime() - 5 * 24 * 60 * 60 * 1000; // 5 days ago
    const deltaDays = findDeltaOfDates(pastDate);
    expect(deltaDays).toBe(5);
  });

  it('should calculate the difference in days for a date in the same day', () => {
    const sameDayDate = new Date().setHours(12, 0, 0, 0); // Same day, different time
    const deltaDays = findDeltaOfDates(sameDayDate);
    expect(deltaDays).toBe(0);
  });

  it('should calculate the difference in days for a future date with a time earlier than current time', () => {
    const futureDate = new Date().setHours(8, 0, 0, 0) + 3 * 24 * 60 * 60 * 1000; // 3 days in the future, earlier time
    const deltaDays = findDeltaOfDates(futureDate);
    expect(deltaDays).toBe(3);
  });

  it('should calculate the difference in days for a past date with a time later than current time', () => {
    const pastDate = new Date().setHours(20, 0, 0, 0) - 5 * 24 * 60 * 60 * 1000; // 5 days ago, later time
    const deltaDays = findDeltaOfDates(pastDate);
    expect(deltaDays).toBe(5);
  });

  it('should calculate the difference in days for the same date with different times', () => {
    const currentDate = new Date();
    const earlierTime = new Date(currentDate).setHours(8, 0, 0, 0);
    const laterTime = new Date(currentDate).setHours(20, 0, 0, 0);
    const deltaDaysEarlier = findDeltaOfDates(earlierTime);
    const deltaDaysLater = findDeltaOfDates(laterTime);
    expect(deltaDaysEarlier).toBe(0);
    expect(deltaDaysLater).toBe(0);
  });
});