import { SORT_BY_KEYS } from "../constants/rockets";
import {
  formatLength,
  formatPrice,
  formatWeight,
} from "../utils/format-number";
import { formatDate } from "../utils/format-date";
import { format as timeAgo } from "timeago.js";

export function getRocketHighlightContent(highligh, rocket) {
  let text;
  let badge;
  let caption;
  switch (highligh) {
    case SORT_BY_KEYS.date:
      text = "First launch:";
      badge = formatDate(rocket.first_flight);
      caption = timeAgo(rocket.first_flight);
      break;
    case SORT_BY_KEYS.cost:
      text = "Cost per launch:";
      badge = formatPrice(rocket.cost_per_launch);
      break;
    case SORT_BY_KEYS.height:
      text = "Height:";
      badge = formatLength(rocket.height.meters);
      break;
    case SORT_BY_KEYS.mass:
      text = "Mass:";
      badge = formatWeight(rocket.mass.kg);
      break;
    default:
      text = "First launch:";
      badge = formatDate(rocket.first_flight);
      caption = timeAgo(rocket.first_flight);
  }

  return { text, badge, caption };
}
