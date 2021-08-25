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
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
  },
  {
    id: 'n102',
    type: 'note-img',
    info: { url: 'http://some-img/me', title: 'Bobi and Me' },
    style: { backgroundColor: '#00d' },
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
  },
];

function query() {
  return Promise.resolve();
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
