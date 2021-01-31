import Vue from 'vue'
import Vuex from 'vuex'

import { ListTypes } from '@/Types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    dummyData: [
      //NoteList Dummy Data
      {
        index: 1,
        action: '15 min',
        title: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        content: 'Ali Connors',
      },
      {
        index: 2,
        action: '2 hr',
        title: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        content: 'me, Scrott, Jennifer',
      },
      {
        index: 3,
        action: '6 hr',
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        content: 'Sandra Adams',
      },
      {
        index: 4,
        action: '12 hr',
        title: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        content: 'Trevor Hansen',
      },
      {
        index: 5,
        action: '18hr',
        title: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        content: 'Britta Holt',
      },
      {
        index: 6,
        action: '25 min',
        title: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        content: 'Ali Connors2',
      },
      {
        index: 7,
        action: '20 hr',
        title: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        content: 'me, Scrott, Jennifer2',
      },
      {
        index: 8,
        action: '99 hr',
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        content: 'Sandra Adams2',
      },
      {
        index: 9,
        action: '200 hr',
        title: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        content: 'Trevor Hansen2',
      },
      {
        index: 10,
        action: '180hr',
        title: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        content: 'Britta Holt2',
      }
    ],
    selectedListItem: {},
  },
  getters:{
    filteredItems(state) {
      // 대소문자를 구별하지 않는 검색 filter
      return state.dummyData.filter((item: ListTypes) => {
        if(!state.search) return state.dummyData;
        return item.title.match(new RegExp(state.search, "i"))  || 
               item.subtitle.match(new RegExp(state.search, "i")) || 
               item.content.match(new RegExp(state.search, "i"))
      })
    }
  },
  mutations: {
    // 뮤테이션은 동기적으로 트랜잭션을 실행
    serachListItem(state, payload) {
      state.search = payload;
    },
    getListItem(state, payload) {
      state.selectedListItem = payload;
    },
    insertNoteItem(state, payload) {
      state.dummyData.push(payload);
    },
    editNoteItem(state, payload) {
      
    },
    deleteNoteItem(state, payload) {
      state.dummyData.splice(payload, 1);
    }
  },
  actions: {
    // 액션은 비동기적으로 트랜잭션을 실행(뮤테이션을 실행시키기 위한 역활)

  }
})
