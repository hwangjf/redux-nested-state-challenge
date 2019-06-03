import { combineReducers } from "redux";

const initialState = {
  activeSubjectId: 1,
  subjects: [
    {
      id: 1,
      title: 'React',
      notes: []
    },
    {
      id: 2,
      title: 'Redux',
      notes: []
    },
    {
      id: 3,
      title: 'Functional Programming',
      notes: []
    },
    {
      id: 4,
      title: 'Ruby',
      notes: []
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const activeSubject = state.subjects.find(subject => subject.id === state.activeSubjectId)
      activeSubject.notes = [...activeSubject.notes, action.payload]

      const subjects = state.subjects.map(subject => {
        return subject.id === state.activeSubjectId ? activeSubject : subject
      })

      return {
        ...state,
        subjects
      }
    case 'DELETE_NOTE':
      console.log('deleting note')
      return {}
    case 'CHANGE_ACTIVE_SUBJECT':
      return {
        ...state,
        activeSubjectId: action.payload
      }
    default:
      return state;
  }
};

// const reactNotesReducer = (state={id: 1, title: 'react', notes: []}, action) => {
//   switch(action.type) {
//     default:
//       return state
//   }
// }
// const reduxNotesReducer = (state={id: 2, title: 'redux', notes: []}, action) => {
//   switch(action.type) {
//     default:
//       return state
//   }
// }
// const functionProgrammingNotesReducer = (state={id: 3, title: 'functionProgramming', notes: []}, action) => {
//   switch(action.type) {
//     default:
//       return state
//   }
// }
// const rubyNotesReducer = (state={id: 4, title: 'ruby', notes: []}, action) => {
//   switch(action.type) {
//     default:
//       return state
//   }
// }

// const reducer = combineReducers({
//   reactNotesReducer,
//   reduxNotesReducer,
//   functionProgrammingNotesReducer,
//   rubyNotesReducer,
// })

// rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// // This would produce the following state object
// {
//   potato: {
//     // ... potatoes, and other state managed by the potatoReducer ...
//   },
//   tomato: {
//     // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
//   }
// }

export default reducer;
