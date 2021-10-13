//voters

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false },
];

function voterAnalysis(sample) {
    sample = voters;

    const getGroupAge = voters.reduce(
        (acc, curr) => {
            const ageGroup = (age) => {
                if (age >= 18 && age <= 25) return 'young';
                if (age >= 26 && age <= 35) return 'mid';
                if (age >= 36 && age <= 55) return 'old';
                return 'Invalid age';
            };

            return {
                youngVotes: ageGroup(curr.age) === 'young' && curr.voted ? acc.youngVotes + 1 : acc.youngVotes,
                youngPeople: ageGroup(curr.age) === 'young' ? acc.youngPeople + 1 : acc.youngPeople,
                midVotes: ageGroup(curr.age) === 'mid' && curr.voted ? acc.midVotes + 1 : acc.midVotes,
                midPeople: ageGroup(curr.age) === 'mid' ? acc.midPeople + 1 : acc.midPeople,
                oldVotes: ageGroup(curr.age) === 'old' && curr.voted ? acc.oldVotes + 1 : acc.oldVotes,
                oldPeople: ageGroup(curr.age) === 'old' ? acc.oldPeople + 1 : acc.oldPeople,
            };
        },
        {
            youngVotes: 0,
            youngPeople: 0,
            midVotes: 0,
            midPeople: 0,
            oldVotes: 0,
            oldPeople: 0,
        }
    );

    return getGroupAge;
}

console.log(voterAnalysis(voters));