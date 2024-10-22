// factory functions

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return console.log(name + ' attacks with ' + weapon)
        }
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()
