import { classnames } from '../index';

describe("classnames",()=>{
	it("should remove null and undefined and join the strings passed in",()=>{
		const a = "someClass";
		const b = null;
		const c = "someOtherClass";
		const d = undefined;
		
		const result = classnames([a, b, c, d]);
	
		expect(result).toEqual("someClass someOtherClass");
	})

	it("should return empty string if passed in an array of nulls and undefines",()=>{
		expect(classnames([null,null, undefined, undefined])).toEqual("");
	})
	it("should return empty string if passed in an empty array",()=>{
		expect(classnames([])).toEqual("");
	})
})