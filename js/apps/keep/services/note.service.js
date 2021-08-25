'use strict';

import { storageService } from '../../../services-general/storage.service.js';
import { utilService } from '../../../services-general/util.service.js';

export const noteService = {
  query,
  addNote,
  removeNote,
  updateNote,
};

const KEY = 'noteDB';

var gNotes = [
  {
    id: 'n101',
    type: 'note-txt',
    info: { text: 'Fullstack Me Baby!' },
    // doneAt: Date.now(),
    isPinned: true,
    backgroundColor: 'blue',
  },
  {
    id: 'n102',
    type: 'note-img',
    info: { url: 'https://picsum.photos/200/300', title: 'Bobi and Me' },
    backgroundColor: '#00d',
    isPinned: false,
  },
  {
    id: 'n103',
    type: 'note-todos',
    info: {
      label: 'Get my stuff together',
      todos: [
        { txt: 'Driving liscence', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
    backgroundColor: 'red',
    isPinned: false,
  },
];

function query(filterBy) {
  if (filterBy) {
    let { name, type } = filterBy;
    const notesToShow = gNotes.filter((note) => {
      return note.type === type;
    });
    return Promise.resolve(notesToShow);
  }
  return Promise.resolve(gNotes);
}

function addNote() {
  return Promise.resolve();
}
function removeNote() {
  return Promise.resolve();
}
function updateNote() {
  return Promise.resolve();
}
