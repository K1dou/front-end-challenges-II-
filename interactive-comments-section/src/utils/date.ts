import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export function formatRelativeDate(dateString: string) {
  const cleaned = dateString.replace(/\.\d+$/, '') + 'Z';

  const utcDate = new Date(cleaned);

  return formatDistanceToNow(utcDate, {
    addSuffix: true,
    locale: enUS,
  });
}
