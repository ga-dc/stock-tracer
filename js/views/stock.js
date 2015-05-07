// define your StockView here
function StockView() {
  $('#update-symbol').on('click', this.lookupSymbol.bind(this));
  $('#update-shares').on('click', this.updateShares.bind(this));
}

StockView.prototype = {
  lookupSymbol: function() {
    var symbol = $("#symbol-input").val();
    this.model = new Stock(symbol);
    this.model.getSymbol(symbol);
    this.render();
    $('#cha-ching')[0].play();
  },

  updateShares: function() {
    this.model.numShares = parseInt($('#num-shares').val());
    this.render();
  },

  render: function() {
    $("#stock-name").text(this.name);
    $("#stock-price").text(this.model.price);
    $("#total-value").text(this.model.totalValue());
    $("#stock-name").text(name);
    $("#stock-price").text(price);

  }
}
