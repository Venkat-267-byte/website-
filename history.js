function renderOrderHistory() {
    els.ordersList.innerHTML = '';

    if (!state.orders || state.orders.length === 0) {
        els.ordersList.innerHTML = '<div class="empty-msg" style="text-align:center; color: var(--clr-text-muted); padding: 1rem;">No past orders found.</div>';
        return;
    }

    state.orders.forEach(order => {
        const d = new Date(order.date);
        const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const card = document.createElement('div');
        card.className = 'order-card';
        card.innerHTML = `
            <div class="order-header">
                <div>
                    <span class="order-id">${order.id}</span>
                    <div class="order-date">${dateStr}</div>
                </div>
                <div style="text-align: right">
                    <div class="order-total">₹${order.total.toFixed(2)}</div>
                    <span class="badge" style="font-size: 0.7rem; padding: 0.15rem 0.5rem; border: none; background: rgba(50,215,75,0.2); color: var(--clr-success);">${order.status}</span>
                </div>
            </div>
            <div class="order-items-preview" style="margin: 0.75rem 0; font-size: 0.85rem; color: var(--clr-text-muted);">
                ${order.items.map(i => `${i.qty}x ${i.name}`).join(', ')}
            </div>
            <div class="order-actions">
                <button class="btn btn-primary btn-sm" onclick="reorder('${order.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;"><i class="fa-solid fa-rotate-right"></i> Reorder</button>
                <button class="btn btn-outline btn-sm" onclick="downloadInvoice('${order.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;"><i class="fa-solid fa-file-invoice"></i> Invoice</button>
            </div>
        `;
        els.ordersList.appendChild(card);
    });
}

window.reorder = function (orderId) {
    const order = state.orders.find(o => o.id === orderId);
    if (!order) return;

    // Replace current cart with order items
    state.cart = JSON.parse(JSON.stringify(order.items)); // Deep copy

    // Use app.js methods to save and render
    localStorage.setItem('restaurant_cart', JSON.stringify(state.cart));
    els.cartCount.textContent = state.cart.reduce((total, item) => total + item.qty, 0);

    // Update visually by triggering our own re-render
    // renderCart() is global since it's defined as function renderCart() in app.js
    if (typeof renderCart === 'function') {
        renderCart();
    }

    // Close profile, open cart
    els.profileModal.classList.remove('active');
    els.cartOverlay.classList.add('active');
    els.cartSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.downloadInvoice = function (orderId) {
    const order = state.orders.find(o => o.id === orderId);
    if (!order) return;

    const d = new Date(order.date);

    let html = `
    <html>
    <head>
        <title>Invoice ${order.id}</title>
        <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 40px; }
            .invoice-box { max-width: 800px; margin: auto; padding: 30px; border: 1px solid #eee; box-shadow: 0 0 10px rgba(0, 0, 0, .15); }
            table { width: 100%; line-height: inherit; text-align: left; border-collapse: collapse; }
            table td { padding: 5px; vertical-align: top; }
            table tr.heading td { background: #eee; border-bottom: 1px solid #ddd; font-weight: bold; }
            table tr.item td { border-bottom: 1px solid #eee; }
            table tr.total td:last-child { border-top: 2px solid #eee; font-weight: bold; }
            .text-right { text-align: right; }
            .header { display: flex; justify-content: space-between; margin-bottom: 40px; }
            .header h1 { color: #D4AF37; margin: 0; }
        </style>
    </head>
    <body onload="window.print()">
        <div class="invoice-box">
            <div class="header">
                <div>
                    <h1>Symphony</h1>
                    <p>Premium Dining Experience</p>
                </div>
                <div class="text-right">
                    <h3>Invoice: ${order.id}</h3>
                    <p>Date: ${d.toLocaleDateString()}</p>
                    <p>Payment ID: ${order.paymentId}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <strong>Billed To:</strong><br>
                ${state.user.name}<br>
                ${state.user.email}
            </div>

            <table>
                <tr class="heading">
                    <td>Item</td>
                    <td class="text-right">Price</td>
                    <td class="text-right">Quantity</td>
                    <td class="text-right">Total</td>
                </tr>
                ${order.items.map(item => `
                <tr class="item">
                    <td>${item.name}</td>
                    <td class="text-right">₹${item.price.toFixed(2)}</td>
                    <td class="text-right">${item.qty}</td>
                    <td class="text-right">₹${(item.price * item.qty).toFixed(2)}</td>
                </tr>`).join('')}
                
                <tr class="total">
                    <td></td><td></td>
                    <td class="text-right">Subtotal:</td>
                    <td class="text-right">₹${order.subtotal.toFixed(2)}</td>
                </tr>
                <tr class="total">
                    <td></td><td></td>
                    <td class="text-right">Tax (5%):</td>
                    <td class="text-right">₹${order.tax.toFixed(2)}</td>
                </tr>
                <tr class="total">
                    <td></td><td></td>
                    <td class="text-right"><strong>Grand Total:</strong></td>
                    <td class="text-right"><strong>₹${order.total.toFixed(2)}</strong></td>
                </tr>
            </table>
            
            <div style="margin-top: 50px; text-align: center; color: #777; font-size: 0.9em;">
                Thank you for dining with Symphony.
            </div>
        </div>
    </body>
    </html>
    `;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
};
