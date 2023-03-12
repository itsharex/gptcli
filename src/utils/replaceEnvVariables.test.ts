import { describe, it } from "vitest";
import * as assert from "assert";
import { replaceEnvVariables } from "./replaceEnvVariables.js";

describe('test gptcli', function () {
	it('test gptcli.replaceEnvVariables', function () {
		const str = 'Hello, $WHO, I am $WHAT.';
		const env = { WHO: 'world', WHAT: 'gptcli' };
		const result = replaceEnvVariables(str, env);
		assert.equal(result, 'Hello, world, I am gptcli.');
	})
})
