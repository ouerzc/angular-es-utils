/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-04-06
 */

/**
 * bind装饰器,用于处理function bind不适用的场景
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 */
export default (target, name, descriptor) => {

	if (!descriptor) {
		throw new Error('can not use Bind decorator with a constructor!');
	}

	const fn = descriptor.value || target[name];

	// 定义访问器属性的同时不能定义value跟writable
	delete descriptor.value;
	delete descriptor.writable;

	descriptor.set = value => {
		target[name] = value;
	};

	descriptor.get = function() {
		return fn.bind(this);
	};

	return descriptor;
};