var invoices = new Object();
invoices.foo = 130;
invoices.bar = 250;

var payments = {
  foo: = 80,
  bar: = 55
};

var payments_received = 0

invoices.foo -= payments.foo;
invoices.bar -= payments.bar;
payments_received += payments.foo + payments.bar;

var remaining_due = 0;

for (var item in invoices) {
  remaining_due += invoices[item];
}

var second_invoices = Object.create(invoices);
console.log(second_invoices["foo"]);
second_invoices.foo = 0;
console.log(second_invoices["foo"]);

var Invoices {
  foo: 130,
  bar: 250
};


var outstanding_invoices = [Object.create(Invoices), Object.create(Invoices)];

Object.freeze(Invoices);

outstanding_invoices[0].foo = 0;

function newInvoices(foo, bar) {
  return {
    bar: isNaN(bar) ? 130 : bar,
    foo: isNaN(foo) ? 250 : foo
  };
}

outstanding_invoices = [newInvoices(), newInvoices()];

outstanding_invoices[0].foo = 0;

outstanding_invoices[0].foo;

function newInvoices(clients) {
  var invoices = {
    bar: clients == undefined || isNaN(clients.bar) ? 130 : clients.bar,
    foo: clients == undefined || isNaN(clients.foo) ? 250 : clients.foo
  };
  invoices.getTotal = function() {
    return this.bar + this.foo;
  }
  return invoices;
}