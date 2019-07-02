"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseParameter = (param, flag) => {
    const trimp = param.trim();
    switch (flag.type) {
        case "float" /* float */:
            const float = parseFloat(trimp);
            if (isNaN(float)) {
                throw new Error(`${flag.name} must be float`);
            }
            return float;
        case "int" /* int */:
            const int = parseInt(trimp, 10);
            if (isNaN(int)) {
                throw new Error(`${flag.name} must be int`);
            }
            return int;
        case "string" /* string */:
            return trimp;
        case "boolean" /* boolean */:
            return trimp.toLowerCase() === 'false' ? false : true;
    }
};
exports.commandParser = (input, flags) => {
    const st = [...input.split(' ').filter((e) => e.replace(/ /g, '')), ''];
    const r = { content: input };
    for (const flag in flags) {
        const flagIndex = st.findIndex((s) => s === `--${flag}`);
        const hasNotFlag = flagIndex === -1;
        const parameter = hasNotFlag
            ? flags[flag].default
            : parseParameter(st[flagIndex + 1], {
                name: flag,
                type: flags[flag].type,
            });
        r[flag] = parameter;
        r.content = r.content
            .replace(`--${flag} ${parameter}`, '')
            .replace(`--${flag}`, '')
            .trim();
    }
    return r;
};
//# sourceMappingURL=commandParser.js.map