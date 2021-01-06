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
        action: '15 min',
        title: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        content: 'Ali Connors',
      },
      {
        action: '2 hr',
        title: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        content: 'me, Scrott, Jennifer',
      },
      {
        action: '6 hr',
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        content: 'Sandra Adams',
      },
      {
        action: '12 hr',
        title: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        content: 'Trevor Hansen',
      },
      {
        action: '18hr',
        title: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        content: 'Britta Holt',
      },
      {
        action: '25 min',
        title: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        content: 'Ali Connors2',
      },
      {
        action: '20 hr',
        title: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        content: 'me, Scrott, Jennifer2',
      },
      {
        action: '99 hr',
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        content: 'Sandra Adams2',
      },
      {
        action: '200 hr',
        title: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        content: 'Trevor Hansen2',
      },
      {
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
    insertListItem(state, payload) {
      state.dummyData.push(payload);
    }
  },
  actions: {
    // 액션은 비동기적으로 트랜잭션을 실행(뮤테이션을 실행시키기 위한 역활)

  }
})
