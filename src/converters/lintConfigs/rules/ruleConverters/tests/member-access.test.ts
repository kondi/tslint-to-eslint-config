import { AccessibilityLevel, convertMemberAccess } from "../member-access";

describe(convertMemberAccess, () => {
    test("conversion without arguments", () => {
        const result = convertMemberAccess({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ accessibility: AccessibilityLevel.Explicit }],
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                },
            ],
        });
    });

    test("conversion with true argument", () => {
        const result = convertMemberAccess({
            ruleArguments: [true],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ accessibility: AccessibilityLevel.Explicit }],
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                },
            ],
        });
    });

    test("conversion with no-public argument", () => {
        const result = convertMemberAccess({
            ruleArguments: ["no-public"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ accessibility: AccessibilityLevel.NoPublic }],
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                },
            ],
        });
    });

    test("conversion with true and no-public argument", () => {
        const result = convertMemberAccess({
            ruleArguments: [true, "no-public"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ accessibility: AccessibilityLevel.NoPublic }],
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                },
            ],
        });
    });

    test("conversion with true and check-accessor argument", () => {
        const result = convertMemberAccess({
            ruleArguments: [true, "check-accessor"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            accessibility: AccessibilityLevel.Explicit,
                            overrides: {
                                accessors: AccessibilityLevel.Explicit,
                            },
                        },
                    ],
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                },
            ],
        });
    });

    test("conversion with true and check-constructor argument", () => {
        const result = convertMemberAccess({
            ruleArguments: [true, "check-constructor"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                    ruleArguments: [
                        {
                            accessibility: AccessibilityLevel.Explicit,
                            overrides: {
                                constructors: AccessibilityLevel.Explicit,
                            },
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with true and check-parameter-property argument", () => {
        const result = convertMemberAccess({
            ruleArguments: [true, "check-parameter-property"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                    ruleArguments: [
                        {
                            accessibility: AccessibilityLevel.Explicit,
                            overrides: {
                                parameterProperties: AccessibilityLevel.Explicit,
                            },
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertMemberAccess({
            ruleArguments: [
                true,
                "no-public",
                "check-accessor",
                "check-constructor",
                "check-parameter-property",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                    ruleArguments: [
                        {
                            accessibility: AccessibilityLevel.NoPublic,
                            overrides: {
                                accessors: AccessibilityLevel.Explicit,
                                constructors: AccessibilityLevel.Explicit,
                                parameterProperties: AccessibilityLevel.Explicit,
                            },
                        },
                    ],
                },
            ],
        });
    });
});
