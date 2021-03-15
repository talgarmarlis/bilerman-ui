import { all, takeEvery, put, call } from 'redux-saga/effects'
import { articleService } from 'services'
import actions from './actions'

export function* BOOKMARK_ARTICLE({ payload, callback }) {
  const { articleId } = payload
  yield put({
    type: 'bookmark/SET_STATE',
    payload: {
      loading: true,
    },
  })

  try {
    const response = yield call(articleService.saveArticle, articleId)
    yield put({
      type: 'bookmark/SET_STATE',
      payload: {
        savedArticleIds: response.data,
        loading: false,
      },
    })
    yield callback()
  } catch (e) {
    yield put({
      type: 'bookmark/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export function* LOAD_BOOKMARKS() {
  yield put({
    type: 'bookmark/SET_STATE',
    payload: {
      loading: true,
    },
  })

  try {
    const response = yield call(articleService.getSavedArticleIds)
    if (response) {
      yield put({
        type: 'bookmark/SET_STATE',
        payload: {
          savedArticleIds: response.data,
          loading: false,
        },
      })
    }
  } catch (error) {
    yield put({
      type: 'bookmark/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.BOOKMARK_ARTICLE, BOOKMARK_ARTICLE),
    takeEvery(actions.LOAD_BOOKMARKS, LOAD_BOOKMARKS),
  ])
}
