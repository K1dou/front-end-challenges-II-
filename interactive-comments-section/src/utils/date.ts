import { formatDistance } from 'date-fns';

export function formatRelativeDate(dateString: string) {
  return formatDistance(new Date(dateString), new Date(), {
    addSuffix: true,
  });
}
