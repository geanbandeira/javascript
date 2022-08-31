const Modal = {
    open(){
        document 
        .querySelector('modal-overlay')
        .classList
        .add('active')
    },
    close(){
        document 
        .querySelector('modal-overlay')
        .classList
        .remove('active')

}
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 1,
        description: 'Website',
        amount: 50000,
        date: '23/01/2021'
    },
    {
        id: 1,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    },
]

const Transaction = {
incomes(){

},
expenses(){

}
}

const DOM = {
    transactionsContainer: document.querySelector('#data-tabletbody'),

    addTrasaction(Transaction,index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transactions)

        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income": "expense"

const amount = Utils.formatCurrency(transaction.amount)

        const html=`
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assts/minus.svg" alt="Remover transação">
            </td>
            </tr>
        `
        return html
    }
}

const Utils= {

}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})
