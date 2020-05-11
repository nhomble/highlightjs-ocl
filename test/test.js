import fs from 'fs'
import path from 'path'
import assert from 'assert';

import hljs from 'highlight.js';
import ocl from '../../highlightjs-ocl/src/ocl.js'

const base = path.join("test");

hljs.registerLanguage('ocl', ocl);
hljs.debugMode();

function markupTest(test) {
    const input = fs.readFileSync(path.join(base, "markup", test + ".txt"), {encoding: "utf-8"});
    const expected = fs.readFileSync(path.join(base, "markup", test + ".expect.txt"), {encoding: "utf-8"})
    let actual;
    actual = hljs.highlight("ocl", input).value;
    assert.strictEqual(
        actual.trim(),
        expected.trim()
    );
}

function detectData(name) {
    return fs.readFileSync(path.join(base, "detect", name + ".txt"), {encoding: "utf-8"});
}

describe("ocl", function () {
    describe("markup", function () {
        ["comment", "inv", "prepost"].forEach(t => {
            it("can markup: " + t, function () {
                markupTest(t);
            })
        })
    });
    it("should detect the default", function () {
        assert.strictEqual('ocl', hljs.highlightAuto(detectData('default')).language);
    });
    ["c", "java"].forEach(t => {
        it("should not detect: " + t, function () {
            assert.notStrictEqual('ocl', hljs.highlightAuto(detectData(t)).language);
        })
    })
})

