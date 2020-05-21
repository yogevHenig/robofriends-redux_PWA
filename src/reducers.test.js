import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

 import * as reducers from './reducers';

 describe('searchRobots', () => {
 	it('should return the initial state', () => {
 		expect(reducers.searchRobots(undefined)).toEqual(reducers.initialStateSearch)
 	})
 	it('should handle the CHANGE_SEARCHFIELD', () => {
 		expect(reducers.searchRobots(reducers.initialStateSearch, {
 			type: CHANGE_SEARCHFIELD,
 			payload: 'abc'
 		})).toEqual({
 			searchField: 'abc'
 		})
 	})
})


 describe('requestRobots', () => {
 	it('should return the initial state', () => {
 		expect(reducers.requestRobots(undefined)).toEqual(reducers.initialStateRobots)
 	})
 	it('should handle the REQUEST_ROBOTS_PENDING action', () => {
 		expect(reducers.requestRobots(reducers.initialStateRobots, {
 			type: REQUEST_ROBOTS_PENDING,
 		})).toEqual({
 			robots: [],
 			isPending: true 
 		})
 	})

	it('should handle the REQUEST_ROBOTS_SUCCESS action', () => {
		expect(reducers.requestRobots(reducers.initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id:'123',
				name: 'test',
				email: 'test@gmail.com'
			}]
		})).toEqual({
			robots: [{
				id:'123',
				name: 'test',
				email: 'test@gmail.com'
			}],
			isPending: false 
		})
	})

	it('should handle the REQUEST_ROBOTS_FAILED action', () => {
		expect(reducers.requestRobots(reducers.initialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: "this is not working"
		})).toEqual({
			error: "this is not working",
			robots: [],
			isPending: false 
		})
	})


})


