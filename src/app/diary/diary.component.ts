import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  entrys: Diary[] = [
    new Diary(
      new Date(2020, 3, 14),
      'Gased up the car',
      'Needed the car in full tank'
    ),
    new Diary(
      new Date(2020, 5, 9),
      'Went shopping',
      'The kitchen needed stocking up'
    ),
    new Diary(
      new Date(2020, 1, 12),
      'Got a new Phone',
      'The old one was acting up'
    ),
    new Diary(
      new Date(2019, 8, 18),
      'Bought a Dog',
      'Keeps me company and the house is not too quiet'
    ),
  ];
  toggleDetails(index) {
    this.entrys[index].showDescription = !this.entrys[index].showDescription;
  }
  deleteEntry(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.entrys[index].title}?`
      );

      if (toDelete) {
        this.entrys.splice(index, 1);
      }
    }
  }

  addNewEntry(entry) {
    let entryLength = this.entrys.length;
    entry.id = entryLength + 1;
    entry.entryDate = new Date(entry.entryDate);
    this.entrys.push(entry);
  }

  constructor() {}

  ngOnInit(): void {}
}
