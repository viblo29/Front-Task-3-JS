const friends = [
    { name: 'ალექსანდრე', age: 20, hasTicket: true },
    { name: 'მარიამი', age: 17, hasTicket: true },
    { name: 'ლუკა', age: 22, hasTicket: false },
    { name: 'ნინო', age: 19, hasTicket: true },
    { name: 'გიორგი', age: 16, hasTicket: false }
];

snacks1 = ['პოპკორნი', 'ლიმონათი'];
snacks2 = ['კოკა-კოლა', 'ჩიფსი'];

const allowedFriends = friends.filter(friend => friend.age >= 18 && friend.hasTicket);
console.log(allowedFriends);

const allowedNames = allowedFriends.map(friend => friend.name);
console.log(allowedNames);

const allowedFriendsNum = allowedNames.reduce((acc, curr) => {
    return acc + 1;
}, 0);
console.log(allowedFriendsNum);

const allSnacks = snacks1.concat(snacks2);
console.log(allSnacks);

if (allowedFriendsNum === 0) {
    console.log("Movie night is canceled!");
} else {
    console.log(`We have ${allowedFriendsNum} friends coming: ${allowedNames.join(', ')}`);
    console.log(`Snacks: ${allSnacks.join(', ')}`);
}
