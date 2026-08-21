const HMS = {
  KEYS: {
    BOOKING: "bookingData",
    FOOD_CART: "foodCart",
    HISTORY: "bookingHistory",
  },

  getBooking() {
    const raw = localStorage.getItem(this.KEYS.BOOKING);
    return raw ? JSON.parse(raw) : null;
  },

  setBooking(booking) {
    localStorage.setItem(this.KEYS.BOOKING, JSON.stringify(booking));
  },

  clearBooking() {
    localStorage.removeItem(this.KEYS.BOOKING);
  },

  getFoodCart() {
    const raw = localStorage.getItem(this.KEYS.FOOD_CART);
    return raw ? JSON.parse(raw) : [];
  },

  setFoodCart(cart) {
    localStorage.setItem(this.KEYS.FOOD_CART, JSON.stringify(cart));
  },

  clearFoodCart() {
    localStorage.removeItem(this.KEYS.FOOD_CART);
  },

  getHistory() {
    const raw = localStorage.getItem(this.KEYS.HISTORY);
    return raw ? JSON.parse(raw) : [];
  },

  addToHistory(entry) {
    const history = this.getHistory();
    history.push(entry);
    localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(history));
  },

  formatCurrency(amount) {
    return "\u20b9" + Number(amount).toLocaleString("en-IN");
  },

  toast(message) {
    let el = document.getElementById("hms-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "hms-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  },
};
