'use strict';

import { storageService } from '../../../services-general/storage.service.js';
import { utilService } from '../../../services-general/util.service.js';

export const noteService = {
  query,
  addNote,
  removeNote,
  updateNote,
  pinNote,
  saveEdit,
  toggleEdit,
  getNotes,
  changeBackground,
};

const KEY = 'noteDB';

var gNotes = storageService.loadFromStorage(KEY) || [
  {
    id: utilService.makeId(),
    type: 'text',
    info: { text: 'Fullstack Me Baby!' },
    isPinned: true,
    backgroundColor: 'blue',
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'image',
    info: { title: 'Bobi and Me', url: 'https://picsum.photos/200/300' },
    backgroundColor: '#00d',
    isPinned: false,
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'todo',
    info: {
      todos: ['Driving liscence', 'Coding power'],
    },
    backgroundColor: 'red',
    isPinned: false,
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'text',
    info: { text: 'aaaaaaaaaaaaaaaaaa' },
    // doneAt: Date.now(),
    isPinned: false,
    backgroundColor: 'blue',
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'text',
    info: { text: 'aaaaaaaaaaaaaaaaaa' },
    // doneAt: Date.now(),
    isPinned: false,
    backgroundColor: 'blue',
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'text',
    info: { text: 'aaaaaaaaaaaaaaaaaa' },
    // doneAt: Date.now(),
    isPinned: false,
    backgroundColor: 'blue',
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'text',
    info: { text: 'aaaaaaaaaaaaaaaaaa' },
    // doneAt: Date.now(),
    isPinned: false,
    backgroundColor: 'blue',
    isEditOn: false,
  },
];

function query(filterBy) {
  const notes = storageService.loadFromStorage(KEY);
  if (!notes || !notes.length) _createNotes();

  if (filterBy) {
    let { name, type } = filterBy;
    if (type === 'all') return Promise.resolve(gNotes);
    const notesToShow = notes.filter((note) => {
      return note.type === type;
    });
    return Promise.resolve(notesToShow);
  }
  return Promise.resolve(gNotes);
}

function addNote(note) {
  const { type } = note;
  var newNote;
  switch (type) {
    case 'text':
      newNote = _createTextNote(note);
      break;

    case 'image':
      newNote = _createImageNote(note);
      break;

    case 'todo':
      newNote = _createTodoNote(note);
      break;

    case 'video':
      newNote = _createVideoNote(note);
      break;

    default:
      break;
  }
  gNotes.push(newNote);
  _saveNotesToStorage();

  return Promise.resolve();
}

function _createTextNote(note) {
  return {
    id: utilService.makeId(),
    type: 'text',
    info: { text: note.inputValue },
    isPinned: false,
    backgroundColor: 'blue', //change random color
  };
}

function _createImageNote(note) {
  return {
    id: utilService.makeId(),
    type: 'image',
    info: { title: 'new title', url: note.inputValue },
    backgroundColor: '#00d',
    isPinned: false,
  };
}

function _createTodoNote(note) {
  const list = note.inputValue.split(',');
  return {
    id: utilService.makeId(),
    type: 'todo',
    info: {
      todos: list,
    },
    backgroundColor: 'red',
    isPinned: false,
  };
}

function _createVideoNote(note) {
  var { inputValue } = note;
  console.log(inputValue);
  if (inputValue.includes('watch?v=')) {
    console.log('in the if');
    inputValue = inputValue.replace('watch?v=', 'embed/');
  }
  return {
    id: utilService.makeId(),
    type: 'video',
    info: { url: inputValue },
    backgroundColor: '#00d',
    isPinned: false,
  };
}

function removeNote(noteId) {
  var noteIdx = gNotes.findIndex(function (note) {
    return noteId === note.id;
  });
  gNotes.splice(noteIdx, 1);
  _saveNotesToStorage();
  return Promise.resolve();
}
function updateNote() {
  return Promise.resolve();
}

function _saveNotesToStorage() {
  storageService.saveToStorage(KEY, gNotes);
}

function _createNotes() {
  var notes = storageService.loadFromStorage(KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: utilService.makeId(),
        type: 'text',
        info: { text: 'Fullstack Me Baby!' },
        // doneAt: Date.now(),
        isPinned: true,
        backgroundColor: 'blue',
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'text',
        info: { text: 'aaaaa Me Baby!' },
        // doneAt: Date.now(),
        isPinned: true,
        backgroundColor: 'blue',
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'image',
        info: { title: 'Bobi and Me', url: 'https://picsum.photos/200/300' },
        backgroundColor: '#00d',
        isPinned: false,
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'todo',
        info: {
          todos: ['Driving liscence', 'Coding power'],
        },
        backgroundColor: 'red',
        isPinned: false,
        isEditOn: false,
      },
    ];
  }
  gNotes = notes;
  _saveNotesToStorage();
}

function pinNote(note) {
  return togglePin(note).then(() => {
    gNotes = gNotes.sort((a, b) => {
      return a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1;
    });
    return Promise.resolve();
  });
}

function togglePin(noteId) {
  return Promise.resolve(
    getNoteById(noteId).then((note) => {
      note.isPinned = !note.isPinned;
      return note;
    })
  );
}

function getNoteById(noteId) {
  var note = gNotes.find((note) => note.id === noteId);
  return Promise.resolve(note);
}

function toggleEdit(noteId) {
  return Promise.resolve(
    getNoteById(noteId).then((note) => {
      note.isEditOn = !note.isEditOn;
      _saveNotesToStorage();

      return note;
    })
  );
}

function saveEdit(note) {
  const noteIdx = getNoteIdx(note.id).then((resId) => {
    gNotes.splice(resId, 1, note);
    // toggleEdit(note.id);
    _saveNotesToStorage();
  });
  return Promise.resolve();
}

function getNoteIdx(noteId) {
  return Promise.resolve(gNotes.findIndex((note) => note.id === noteId));
}
function getNotes() {
  console.log(gNotes);
}

function changeBackground(noteId, color) {
  getNoteIdx(noteId).then((Idx) => {
    gNotes[Idx].backgroundColor = color;
    _saveNotesToStorage();
  });
  // console.log(noteIdx);
  return Promise.resolve();
}
