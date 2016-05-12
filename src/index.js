/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-02-02
 */

import FactoryCreator from './factory-creator';
import ModuleHelper from './module-helper';
import Deferred from './deferred';
import Animation from './animation';
import {getInjector} from './injector';
import genResource from './rs-generator';
import Mediator from './mediator';
import dynamicExport from './dynamic-export';

export * from './decorators';

export {
	FactoryCreator,
	ModuleHelper,
	Deferred,
	Animation,
	getInjector,
	dynamicExport,
	genResource,
	Mediator
};
