/*
Language: Object Constraint Language)
Author: Nicolas Homble <nhomble@terpmail.umd.edu>
Website: https://www.omg.org/spec/OCL/
Description: A declarative language for declaring rules on UML models
Category: modelling
 */

export default function(hljs) {
    var KEYWORDS = [
        "and",
        "body",
        "context",
        "def",
        "derive",
        "else",
        "endif",
        "endpackage",
        "false",
        "if",
        "implies",
        "in",
        "init",
        "inv",
        "invalid",
        "let",
        "not",
        "null",
        "or",
        "package",
        "post",
        "pre",
        "self",
        "static",
        "then",
        "true",
        "xor"
    ];
    var COMMENT = hljs.COMMENT("--", "$");
    return {
        name: "object constraint language",
        aliases: ['ocl'],
        keywords: KEYWORDS.join(" "),
        contains: [
            COMMENT
        ]
    };
}
