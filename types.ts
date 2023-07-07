export interface INote{
  _id: string;
  year: string;
  day: string;
  month: string;
  time: string
  master: string;
  content: string;
}

export interface ICustomer {
  name: string;
  description: string;
}

export interface IDayData {
  date: Date;
  notes: INote[]
}