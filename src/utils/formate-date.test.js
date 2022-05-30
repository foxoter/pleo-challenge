import { parseOffsetString, parseDateObjectValues, formatLocalTime } from "./format-date";

describe('format local time with offset', () => {
  it('should parse offset string', () => {
    expect(parseOffsetString('2006-03-25T10:30:00+12:00')).toBe('GMT+12');
    expect(parseOffsetString('2006-03-25T10:30:00-05:30')).toBe('GMT-5:30');
    expect(parseOffsetString('2006-03-25T10:30:00')).toBe('');
  });

  it('should parse date object values', () => {
    expect(parseDateObjectValues('2006-03-25T10:30:00+12:00')).toEqual([2006, 2, 25, 10, 30, 0]);
    expect(parseDateObjectValues('2006-03-25T10:30:45+12:00')).toEqual([2006, 2, 25, 10, 30, 45]);
    expect(parseDateObjectValues('2006-03-25T10:30:00')).toEqual([0]);
  });

  it('should format local date with offset', () => {
    expect(formatLocalTime('2020-11-21T09:17:00-08:00')).toBe('November 21, 2020, 9:17:00 AM GMT-8');
    expect(formatLocalTime('2020-11-21T09:17:00+04:30')).toBe('November 21, 2020, 9:17:00 AM GMT+4:30');
    expect(formatLocalTime('2020-11-21T09:17:00')).toBe('2020-11-21T09:17:00');
  });
})