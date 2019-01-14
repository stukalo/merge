export const mergeGroups = groups => {
    const intervals = groups.reduce((acc, group) => [ ...acc, ...group ], []);
    const points = getPoints(intervals);

    return points.reduce((acc, point, index) => {
        if(index < points.length - 1) {
            acc.push({
                start: point,
                end: points[index + 1],
                value: intervals.filter(
                    interval => (
                        point >= interval.start &&
                        points[index + 1] <= interval.end &&
                        !interval.value
                    )
                ).length === 0,
            });
        }

        return acc;
    }, []);
};

export const getPoints = intervals => (
    intervals.reduce((acc, group) => {
        if (!acc.includes(group.start)){
            acc.push(group.start);
        }

        if (!acc.includes(group.end)) {
            acc.push(group.end)
        }

        return acc;
    }, []).sort((a, b) => a === b ? 0 : a > b ? 1 : -1)
);