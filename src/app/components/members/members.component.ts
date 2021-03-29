import { Component, OnInit } from '@angular/core';
import { Members } from './../../models/Members';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})

export class MembersComponent implements OnInit {
  members: Members[] = [];

  inputMember: string = '';
  inputPhones: string = '';

  constructor() {}

  ngOnInit(): void {
    this.members = [
      {
        content: 'First member',
        phone: '5769874389',
        edit: false,
        completed: false,
      },
      {
        content: 'Second member',
        phone: '5769874389',
        edit: false,
        completed: true,
      },
      {
        content: 'third member',
        phone: '5769874389',
        edit: false,
        completed: false,
      },
    ];
  }
  toggleDone(id: number) {
    this.members.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });
  }
  deleteMember(id: number) {
    this.members = this.members.filter((v, i) => i !== id);
  }
  editMember(id: number) {
    this.members.map((v, i) => {
      if (i == id) {
      }
      return v;
    });
  }

  addMember() {
    this.members.push({
      content: this.inputMember,
      phone: this.inputPhones,
      edit: false,
      completed: false,
    });

    this.inputMember = '';
    this.inputPhones = '';
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.members, event.previousIndex, event.currentIndex);
  }
}