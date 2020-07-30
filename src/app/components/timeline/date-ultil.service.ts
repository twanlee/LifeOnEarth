import {Injectable} from '@angular/core';
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears
} from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class DateUltilService {
  getDiffToNow(diff: string): string {
    let date = diff.split('/');
    let year = +date[2];
    let month = (+date[1]) - 1;
    let day = +date[0];
    const result: string[] = [];
    const now = new Date();
    let begin = new Date(year, month, day);
    console.log(begin);
    const years = differenceInYears(now, begin);
    if (years > 0) {
      result.push(`${years} years`);
      begin = addYears(begin, years);
    }

    const months = differenceInMonths(now, begin);
    result.push(`${months} months`);
    if (months > 0) {
      begin = addMonths(begin, months);
    }

    const days = differenceInDays(now, begin);
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }

  constructor() {
  }
}
