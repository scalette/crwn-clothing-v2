import logger from 'redux-logger'
import { compose, applyMiddleware, createStore, Middleware } from 'redux'
import { persistStore, persistReducer, PersistConfig} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root-reducer'

import { rootSaga } from './root-saga'

const sagaMiddleware = createSagaMiddleware()

export type RootState = ReturnType<typeof rootReducer>

const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  if(!action.type) {
    return next(action)
  }
  next(action)
}

// type ExtendedPersistConfig = PersistConfig<RootState> & {
//   whiteList: (keysof RootState)[]
// }

const persistConfid = {
  key: 'root',
  storage,
  blacklist: ['user'],
  whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfid, rootReducer)

const middleWares = [
  logger,
//  thunk,
  sagaMiddleware,
]
// root reducer

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)