import * as logic from '../logic';

describe('logic.getPoints', () => {
    const testData = [
        {
            intervals: [],
            expected: [],
        },
        {
            intervals: [
                {
                    start: -Infinity,
                    end: Infinity,
                }
            ],
            expected: [
                -Infinity,
                Infinity
            ]
        },
        {
            intervals: [
                {
                    start: -Infinity,
                    end: -10,
                },
                {
                    start: 10,
                    end: Infinity,
                },
            ],
            expected: [
                -Infinity,
                -10,
                10,
                Infinity,
            ]
        },
        {
            intervals: [
                {
                    start: -10,
                    end: 0,
                },
                {
                    start: 2,
                    end: 50,
                },
                {
                    start: -10,
                    end: 50,
                },
            ],
            expected: [
                -10,
                0,
                2,
                50,
            ],
        }
    ];

    it('should return correct points', () => {
        testData.forEach(data => {
            assert.deepEqual(logic.getPoints(data.intervals), data.expected);
        });
    });
});

describe('logic.mergeGroups', () => {
    const testData = [
        {
            groups: [
                [
                    {
                        start: -Infinity,
                        end: Infinity,
                        value: true,
                    },
                ],
                [
                    {
                        start: -Infinity,
                        end: Infinity,
                        value: true,
                    }
                ]
            ],
            expected: [
                {
                    start: -Infinity,
                    end: Infinity,
                    value: true,
                }
            ]
        },
        {
            groups: [],
            expected: [],
        },
        {
            groups: [
                [
                    {
                        start: -10,
                        end: -5,
                        value: true,
                    },
                ],
                [
                    {
                        start: 10,
                        end: 20,
                        value: true,
                    },
                ],
            ],
            expected: [
                {
                    start: -10,
                    end: -5,
                    value: true,
                },
                {
                    start: -5,
                    end: 10,
                    value: true,
                },
                {
                    start: 10,
                    end: 20,
                    value: true,
                },
            ]
        },
        {
            groups: [
                [
                    {
                        start: -Infinity,
                        end: -100,
                        value: true,
                    }
                ],
                [
                    {
                        start: -200,
                        end: -150,
                        value: false,
                    },
                    {
                        start: -150,
                        end: 0,
                        value: true,
                    },
                    {
                        start: 0,
                        end: Infinity,
                        value: true,
                    }
                ],
                [
                    {
                        start: 100,
                        end: 400,
                        value: false,
                    },
                    {
                        start: 400,
                        end: 800,
                        value: true,
                    },
                    {
                        start: 800,
                        end: Infinity,
                        value: false
                    }
                ]
            ],
            expected: [
                {
                    start: -Infinity,
                    end: -200,
                    value: true,
                },
                {
                    start: -200,
                    end: -150,
                    value: false,
                },
                {
                    start: -150,
                    end: -100,
                    value: true,
                },
                {
                    start: -100,
                    end: 0,
                    value: true,
                },
                {
                    start: 0,
                    end: 100,
                    value: true,
                },
                {
                    start: 100,
                    end: 400,
                    value: false,
                },
                {
                    start: 400,
                    end: 800,
                    value: true,
                },
                {
                    start: 800,
                    end: Infinity,
                    value: false,
                }
            ]
        }
    ];

    it('should return correct result', () => {
        testData.forEach(data => {
            assert.deepEqual(logic.mergeGroups(data.groups), data.expected);
        });
    });
});