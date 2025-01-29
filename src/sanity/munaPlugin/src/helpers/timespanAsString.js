import dayjs from 'dayjs';
import _ from 'lodash';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/nb';

dayjs.extend(localizedFormat);

// eslint-disable-next-line max-params
export const timespanAsString = (bb, eb, date, be, ee, lang) => {
  let dates = _.pickBy({ bb, eb, date, be, ee }, _.identity);
  dates = Object.assign(
    {},
    ...Object.keys(dates).map((d) => ({ [d]: dayjs(dates[d]).locale(lang).format('LL') }))
  );
  const prettyTimespan = `${dates.date || ''}${dates.bb || ''}${dates.bb && dates.eb ? '~' : ''}${dates.eb || ''}` +
    `${(dates.bb || dates.eb) && (dates.be || dates.ee) ? ' / ' : ''}` +
    `${dates.be || ''}${dates.be && dates.ee ? '~' : ''}${dates.ee || ''}`;
  return prettyTimespan;
};
