import { ISO8601_OFFSET_START_INDEX } from "../constants/formate-date";

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
  const offset = parseOffsetString(timestamp);
  const values = timestamp.split(/[:T-]/).map(Number).slice(0,6);
  values[1] = values[1] - 1;

  const time = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date(...values));
  
  return `${time} ${offset}`;
}

export function parseOffsetString(timestamp) {
  const offset = timestamp.slice(ISO8601_OFFSET_START_INDEX);
  const values = offset.split(/[-+:]/).map(Number);
  return `GMT${offset[0]}${values[1]}${values[2] === 0 ? '' : `:${values[2]}`}`;
}
