import * as fromDogReducer from './dog.reducer';
import * as fromDogAction from './dog.action';

describe('Reducer: Dog', () => {
  let initialState: fromDogReducer.DogState;
  const ERROR_MESSAGE = 'ERROR';

  beforeEach(() => {
    initialState = {
      breeds: [],
      dogs: [],
      loading: false,
      error: null
    };
  });

  it('should return Breeds List', () => {
    const expected = { breeds: [], dogs: [], loading: true, error: null };
    const state = fromDogReducer.reducer(initialState, fromDogAction.getBreeds);
    expect(state).toEqual(expected);
  });

  it('should Success Breed', () => {
    const expected = { breeds: [], dogs: [], loading: false, error: null };
    const state = fromDogReducer.reducer(initialState, fromDogAction.getBreedsSuccess({ data: [] }));
    expect(state).toEqual(expected);
  });

  it('should return error on get Breeds', () => {
    const expected = { breeds: [], dogs: [], loading: false, error: ERROR_MESSAGE };
    const state = fromDogReducer.reducer(initialState, fromDogAction.getBreedsFailure({error: ERROR_MESSAGE}));
    expect(state).toEqual(expected);
  });

  it('should get Dogs', () => {
    const expected = { breeds: [], dogs: [], loading: true, error: null };
    const state = fromDogReducer.reducer(initialState, fromDogAction.getDogsByBreed);
    expect(state).toEqual(expected);
  });

  it('should get Dogs success', () => {
    const expected = { breeds: [], dogs: [], loading: false, error: null };
    const state = fromDogReducer.reducer(initialState, fromDogAction.getDogsByBreedSuccess({ data: [] }));
    expect(state).toEqual(expected);
  });

  it('should return error on get Dogs', () => {
    const expected = { breeds: [], dogs: [], loading: false, error: ERROR_MESSAGE };
    const state = fromDogReducer.reducer(initialState, fromDogAction.getBreedsFailure({error: ERROR_MESSAGE}));
    expect(state).toEqual(expected);
  });
});