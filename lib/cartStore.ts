import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, CustomizationOption } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, customizations?: CustomizationOption[]) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, customizations = []) => {
        const existing = get().items.find(i => i.product.id === product.id);
        const extraCost = customizations.reduce((s, c) => s + c.additionalCost, 0);
        if (existing) {
          set({
            items: get().items.map(i =>
              i.product.id === product.id
                ? {
                    ...i,
                    quantity: i.quantity + 1,
                    lineTotal: (i.quantity + 1) * (product.price + extraCost),
                  }
                : i
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                product,
                quantity: 1,
                selectedCustomizations: customizations,
                lineTotal: product.price + extraCost,
              },
            ],
          });
        }
      },

      removeItem: productId =>
        set({ items: get().items.filter(i => i.product.id !== productId) }),

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map(i =>
            i.product.id === productId
              ? {
                  ...i,
                  quantity,
                  lineTotal:
                    quantity *
                    (i.product.price +
                      i.selectedCustomizations.reduce((s, c) => s + c.additionalCost, 0)),
                }
              : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      getTotal: () => get().items.reduce((t, i) => t + i.lineTotal, 0),
      getItemCount: () => get().items.reduce((t, i) => t + i.quantity, 0),
    }),
    { name: 'jnj-cart' }
  )
);
