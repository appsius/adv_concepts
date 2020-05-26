const customers = ['Aooki', 'Caneı', 'Kale'];
const activeCustomers = ['Caneı', 'Kale'];

const inactCustomers = _.difference(customers, activeCustomers);
console.log(inactCustomers);
