import * as fromDogReducer from './dog.reducer';
import * as fromDogAction from './dog.action';

describe('Reducer: Dog', () => {
  it('should return Breeds List', () => {
    const initialState = { breeds: [], dogs: [], loading: true };
    const state = fromDogReducer.reducer(undefined, fromDogAction.getBreeds);
    expect(state).toEqual(initialState);
  });

  it('should Success Breed', () => {
    const initialState = { breeds: [], dogs: [], loading: false };
    const state = fromDogReducer.reducer(undefined, fromDogAction.getBreedsSuccess({ data: [] }));
    expect(state).toEqual(initialState);
  });

  it('should return error on get Breeds', () => {
    const initialState = { breeds: [], dogs: [], loading: false, error: undefined };
    const state = fromDogReducer.reducer(undefined, fromDogAction.getBreedsFailure);
    expect(state).toEqual(initialState);
  });

  it('should get Dogs', () => {
    const initialState = { breeds: [], dogs: [], loading: true };
    const state = fromDogReducer.reducer(undefined, fromDogAction.getDogsByBreed);
    expect(state).toEqual(initialState);
  });

  it('should get Dogs success', () => {
    const initialState = { breeds: [], dogs: [], loading: false };
    const state = fromDogReducer.reducer(undefined, fromDogAction.getDogsByBreedSuccess({ data: [] }));
    expect(state).toEqual(initialState);
  });

  it('should return error on get Dogs', () => {
    const initialState = { breeds: [], dogs: [], loading: false, error: undefined };
    const state = fromDogReducer.reducer(undefined, fromDogAction.getDogsByBreedFailure);
    expect(state).toEqual(initialState);
  });
});
