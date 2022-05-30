import {
  ISO8601_OFFSET_START_INDEX,
  ISO8601_REGEXP,
  ISO8601_DATE_TIME_SLICE_INDEX,
} from "../constants/formate-date";

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }).format(new Date(timestamp));
}

export function formatLocalTime(timestamp) {
  if (!ISO8601_REGEXP.test(timestamp)) {
    return timestamp;
  }

  const offset = parseOffsetString(timestamp);
  const dateObjectValues = parseDateObjectValues(timestamp);

  const time = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date(...dateObjectValues));

  return `${time} ${offset}`;
}

export function parseOffsetString(timestamp) {
  if (!ISO8601_REGEXP.test(timestamp)) {
    return "";
  }

  const offset = timestamp.slice(ISO8601_OFFSET_START_INDEX);
  const values = offset.split(/[-+:]/).map(Number);
  return `GMT${offset[0]}${values[1]}${values[2] === 0 ? "" : `:${values[2]}`}`;
}

export function parseDateObjectValues(timestamp) {
  if (!ISO8601_REGEXP.test(timestamp)) {
    return [0];
  }

  const values = timestamp
    .split(/[+:T-]/)
    .map(Number)
    .slice(0, ISO8601_DATE_TIME_SLICE_INDEX);
  values[1] = values[1] - 1;
  return values;
}

export function getMiliseconds(timestamp) {
  return new Date(timestamp).getTime();
}
