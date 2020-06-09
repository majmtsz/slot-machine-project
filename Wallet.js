class Wallet {
    constructor(money) {
        let _money = money
        // getter - get current wallet value
        this.getWalletValue = () => _money

        // check if wallet velue is greater or equal to bet sum
        this.checkCanPlay = (betSum) => {
            if (betSum <= 0) {
                alert('Bet sum must be greater than 0')
            } else if (_money >= betSum) {
                return true
            } else {
                // alert(`Youre current account is less than your bet.`)
                return false
            }
        }
        this.changeWalletAccount = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    return _money += value
                } else if (type === '-') {
                    return _money -= value
                } else {
                    throw new Error('Nieprawidłowe dzialanie')
                }
            } else {
                console.log(typeof value);
                throw new Error('Nieprawidłowa liczba')
            }
        }
    }
}

// const wallet = new Wallet(100)