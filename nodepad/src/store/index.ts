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
        headline: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: 'Ali Connors',
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: 'me, Scrott, Jennifer',
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        title: 'Sandra Adams',
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        title: 'Trevor Hansen',
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        title: 'Britta Holt',
      },
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: 'Ali Connors2',
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: 'me, Scrott, Jennifer2',
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        title: 'Sandra Adams2',
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        title: 'Trevor Hansen2',
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        title: 'Britta Holt2',
      }
    ],
    selectedListItem: {}
  },
  getters:{
    filteredItems(state) {
      // 대소문자를 구별하지 않는 검색 filter
      return state.dummyData.filter((item: ListTypes) => {
        if(!state.search) return state.dummyData;
        return item.title.match(new RegExp(state.search, "i"))  || 
               item.headline.match(new RegExp(state.search, "i")) || 
               item.subtitle.match(new RegExp(state.search, "i"))
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
    }
  },
  actions: {
    // 액션은 비동기적으로 트랜잭션을 실행(뮤테이션을 실행시키기 위한 역활)

  }
})
