export class ResultValues {
  constructor(
    public data: {
      type: string;
      timeValue: number;
    },
    public convertion: {
      seconds: number;
      minutes: number;
      hours: number;
      days: number;
      weeks: number;
      months: number;
      years: number;
    }
  ) {}
}
