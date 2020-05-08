export class Diary {
  public showDescription: boolean;
  constructor(
    public entryDate: Date,
    public title: string,
    public description: string
  ) {
    this.showDescription = false;
  }
}
