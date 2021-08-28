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
  cloneNote,
};

const KEY = 'noteDB';

var gNotes = storageService.loadFromStorage(KEY) || [
  {
    id: utilService.makeId(),
    type: 'text',
    info: { text: 'Fullstack Me Baby!' },
    isPinned: true,
    backgroundColor: utilService.getRandomColor(),
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'image',
    info: { title: 'Bobi and Me', url: 'https://picsum.photos/200/300' },
    backgroundColor: utilService.getRandomColor(),
    isPinned: false,
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'todo',
    info: {
      todos: ['Driving liscence', 'Coding power'],
    },
    backgroundColor: utilService.getRandomColor(),
    isPinned: false,
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'text',
    info: { text: 'Hello World!' },
    // doneAt: Date.now(),
    isPinned: false,
    backgroundColor: utilService.getRandomColor(),
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'text',
    info: { text: 'Do something productive' },
    isPinned: false,
    backgroundColor: utilService.getRandomColor(),
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'image',
    info: {
      title: 'Puppy',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZ3BHIpmWR1_rHbvjrXYXt3JlCiVVpT36SQ&usqp=CAU',
    },
    isPinned: false,
    backgroundColor: utilService.getRandomColor(),
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'image',
    info: {
      title: 'React',
      url: 'data:image/jpeg;base64,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',
    },
    isPinned: false,
    backgroundColor: utilService.getRandomColor(),
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'todo',
    info: {
      todos: ['code', 'eat', 'sleep', 'repeat'],
    },
    backgroundColor: utilService.getRandomColor(),
    isPinned: false,
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'todo',
    info: {
      todos: ['sprint 1', 'sprint 2', 'sprint 3', 'sprint 4'],
    },
    backgroundColor: utilService.getRandomColor(),
    isPinned: false,
    isEditOn: false,
  },
  {
    id: utilService.makeId(),
    type: 'video',
    info: {
      label: 'React',
      url: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
    },
    backgroundColor: '#00d',
    isPinned: false,
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
    info: { title: 'New Image', url: note.inputValue },
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
    info: { label: 'New Video', url: inputValue },
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
        isPinned: true,
        backgroundColor: utilService.getRandomColor(),
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'image',
        info: { title: 'Bobi and Me', url: 'https://picsum.photos/200/300' },
        backgroundColor: utilService.getRandomColor(),
        isPinned: false,
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'todo',
        info: {
          todos: ['Driving liscence', 'Coding power'],
        },
        backgroundColor: utilService.getRandomColor(),
        isPinned: false,
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'text',
        info: { text: 'Hello World!' },
        // doneAt: Date.now(),
        isPinned: false,
        backgroundColor: utilService.getRandomColor(),
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'text',
        info: { text: 'Do something productive' },
        isPinned: false,
        backgroundColor: utilService.getRandomColor(),
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'image',
        info: {
          title: 'Puppy',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZ3BHIpmWR1_rHbvjrXYXt3JlCiVVpT36SQ&usqp=CAU',
        },
        isPinned: false,
        backgroundColor: utilService.getRandomColor(),
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'image',
        info: {
          title: 'React',
          url: 'data:image/jpeg;base64,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',
        },
        isPinned: false,
        backgroundColor: utilService.getRandomColor(),
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'todo',
        info: {
          todos: ['Code', 'Eat', 'Sleep', 'Repeat'],
        },
        backgroundColor: utilService.getRandomColor(),
        isPinned: false,
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'todo',
        info: {
          todos: ['sprint 1', 'sprint 2', 'sprint 3', 'sprint 4'],
        },
        backgroundColor: utilService.getRandomColor(),
        isPinned: false,
        isEditOn: false,
      },
      {
        id: utilService.makeId(),
        type: 'video',
        info: {
          label: 'React',
          url: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
        },
        backgroundColor: '#00d',
        isPinned: false,
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

function cloneNote(note) {
  var clonedNote = JSON.parse(JSON.stringify(note));
  clonedNote['id'] = utilService.makeId();
  cloneNote['isPinned'] = false;
  cloneNote['isEditOn'] = false;
  gNotes.push(clonedNote);

  _saveNotesToStorage();
  return Promise.resolve();
}
